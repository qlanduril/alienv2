import { JSDOM } from 'jsdom';
import assert from 'node:assert';
import * as THREE from 'three';

// Initialize DOM environment before importing UIOverlay
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
(global as any).document = dom.window.document;
(global as any).window = dom.window;
(global as any).HTMLElement = dom.window.HTMLElement;

// Dynamic import after global DOM setup
const { UIOverlay } = await import('../src/rendering/UIOverlay.ts');
const { ShowcaseManager } = await import('../src/systems/ShowcaseManager.ts');

UIOverlay.init();

// 1. Test target inspector with malicious name and key
const maliciousPayload = '<img src="x" onerror="alert(1)">';
UIOverlay.updateTargetInspector({
  name: maliciousPayload,
  key: maliciousPayload,
  hp: 100,
  maxHp: 100,
  frame: 1
});

const targetInfoPanel = (UIOverlay as any).targetInfoPanel;
assert.ok(targetInfoPanel, 'targetInfoPanel should exist');

// Ensure no <img> tag was created in the DOM
const imgTags = targetInfoPanel.querySelectorAll('img');
assert.strictEqual(imgTags.length, 0, 'No <img> elements should be created from xss payload in target inspector');

// Ensure textContent contains the raw payload string
assert.ok(targetInfoPanel.textContent.includes(maliciousPayload), 'textContent should contain the raw string safely');

console.log('✅ UIOverlay Target Inspector XSS Prevention test passed!');

// 2. Test showcase labels in tick()
ShowcaseManager.isShowcaseMode = true;
const fakeBuilding = {
  entity: 1,
  def: { name: '<script>alert("xss")</script>', height: 10 },
  typeKey: '<iframe src="javascript:alert(1)"></iframe>',
  worldX: 0,
  worldY: 0
};

ShowcaseManager.getShowcaseBuildings = () => [fakeBuilding as any];

const mockCamera = new THREE.PerspectiveCamera();

UIOverlay.tick(mockCamera);

const labelMap = (UIOverlay as any).labelElements as Map<any, HTMLElement>;
const el = labelMap.get(1);
assert.ok(el, 'Label element should exist for entity');

assert.strictEqual(el.querySelectorAll('script').length, 0, 'No script element should be created');
assert.strictEqual(el.querySelectorAll('iframe').length, 0, 'No iframe element should be created');
assert.ok(el.textContent?.includes('<script>alert("xss")</script>'), 'Label textContent should contain unexecuted script string');
assert.ok(el.textContent?.includes('<iframe src="javascript:alert(1)"></iframe>'), 'Label textContent should contain unexecuted iframe string');

console.log('label innerHTML:', el.innerHTML);
console.log('label textContent:', el.textContent);
console.log('✅ UIOverlay Showcase Labels XSS Prevention test passed!');
