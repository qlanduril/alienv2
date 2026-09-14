const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MapBaker-DGexNHnp.js","./WFCSolver-BkGZlmbZ.js"])))=>i.map(i=>d[i]);
import{a as nt,T as ft,E as Oa,O as gn,B as fe,W as zd,g as Tl,L as li}from"./WFCSolver-BkGZlmbZ.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="172",kd=0,nc=1,Hd=2,Du=1,Lu=2,ri=3,Hn=0,un=1,Le=2,di=0,As=1,Xn=2,ic=3,sc=4,Gd=5,Wi=100,Vd=101,Wd=102,Xd=103,qd=104,Yd=200,jd=201,Zd=202,Kd=203,Co=204,Io=205,$d=206,Qd=207,Jd=208,tf=209,ef=210,nf=211,sf=212,rf=213,af=214,Po=0,Do=1,Lo=2,Is=3,No=4,Fo=5,Uo=6,Oo=7,Nu=0,of=1,lf=2,Li=0,Fu=1,Uu=2,Ou=3,Bu=4,cf=5,zu=6,ku=7,rc="attached",hf="detached",Hu=300,Ps=301,Ds=302,Bo=303,zo=304,Da=306,ze=1e3,xn=1001,Ta=1002,We=1003,Gu=1004,lr=1005,Se=1006,ma=1007,ke=1008,gi=1009,Vu=1010,Wu=1011,pr=1012,El=1013,Yi=1014,On=1015,fi=1016,Al=1017,wl=1018,Ls=1020,Xu=35902,qu=1021,Yu=1022,bn=1023,ju=1024,Zu=1025,ws=1026,Ns=1027,Rl=1028,Cl=1029,Ku=1030,Il=1031,Pl=1033,ga=33776,_a=33777,xa=33778,ya=33779,ko=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,jo=37809,Zo=37810,Ko=37811,$o=37812,Qo=37813,Jo=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,va=36492,ol=36494,ll=36495,$u=36283,cl=36284,hl=36285,ul=36286,Qu=2200,uf=2201,df=2202,mr=2300,gr=2301,Ba=2302,Ts=2400,bs=2401,ba=2402,Dl=2500,ff=2501,pf=0,Ju=1,dl=2,mf=3200,gf=3201,td=0,_f=1,Ci="",De="srgb",an="srgb-linear",Ea="linear",he="srgb",$i=7680,ac=519,xf=512,yf=513,vf=514,ed=515,Mf=516,Sf=517,Tf=518,bf=519,fl=35044,Pr=35048,oc="300 es",ci=2e3,Aa=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const ur=Math.PI/180,Fs=180/Math.PI;function Bn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[o&255]+Ye[o>>8&255]+Ye[o>>16&255]+Ye[o>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Kt(o,t,e){return Math.max(t,Math.min(e,o))}function Ll(o,t){return(o%t+t)%t}function Ef(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function Af(o,t,e){return o!==t?(e-o)/(t-o):0}function dr(o,t,e){return(1-e)*o+e*t}function wf(o,t,e,n){return dr(o,t,1-Math.exp(-e*n))}function Rf(o,t=1){return t-Math.abs(Ll(o,t*2)-t)}function Cf(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function If(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function Pf(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Df(o,t){return o+Math.random()*(t-o)}function Lf(o){return o*(.5-Math.random())}function Nf(o){o!==void 0&&(lc=o);let t=lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ff(o){return o*ur}function Uf(o){return o*Fs}function Of(o){return(o&o-1)===0&&o!==0}function Bf(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kf(o,t,e,n,i){const s=Math.cos,r=Math.sin,a=s(e/2),l=r(e/2),c=s((t+n)/2),u=r((t+n)/2),h=s((t-n)/2),d=r((t-n)/2),f=s((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ue(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Hf={DEG2RAD:ur,RAD2DEG:Fs,generateUUID:Bn,clamp:Kt,euclideanModulo:Ll,mapLinear:Ef,inverseLerp:Af,lerp:dr,damp:wf,pingpong:Rf,smoothstep:Cf,smootherstep:If,randInt:Pf,randFloat:Df,randFloatSpread:Lf,seededRandom:Nf,degToRad:Ff,radToDeg:Uf,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:kf,normalize:ue,denormalize:Fn};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,i,s,r,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c)}set(t,e,n,i,s,r,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],y=i[7],A=i[2],E=i[5],w=i[8];return s[0]=r*_+a*x+l*A,s[3]=r*m+a*v+l*E,s[6]=r*p+a*y+l*w,s[1]=c*_+u*x+h*A,s[4]=c*m+u*v+h*E,s[7]=c*p+u*y+h*w,s[2]=d*_+f*x+g*A,s[5]=d*m+f*v+g*E,s[8]=d*p+f*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*s*u+n*a*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,d=a*l-u*s,f=c*s-r*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(za.makeScale(t,e)),this}rotate(t){return this.premultiply(za.makeRotation(-t)),this}translate(t,e){return this.premultiply(za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Yt;function nd(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function _r(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Gf(){const o=_r("canvas");return o.style.display="block",o}const cc={};function Ss(o){o in cc||(cc[o]=!0,console.warn(o))}function Vf(o,t,e){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Wf(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xf(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const hc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const o={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===he&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ci?Ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[an]:{primaries:t,whitePoint:n,transfer:Ea,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:he,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),o}const Qt=qf();function pi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Qi;class Yf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=_r("canvas")),Qi.width=t.width,Qi.height=t.height;const n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=pi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jf=0;class id{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ka(i[r].image)):s.push(ka(i[r]))}else s=ka(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ka(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Yf.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zf=0;class Ne extends Zi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=xn,i=xn,s=Se,r=ke,a=bn,l=gi,c=Ne.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Bn(),this.name="",this.source=new id(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ze:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ze:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Hu;Ne.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(f+1)/2,A=(p+1)/2,E=(u+d)/4,w=(h+_)/4,I=(g+m)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=w/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=I/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kf extends Zi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new id(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Kf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sd extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,p*x);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const y=a*x;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=a*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-a*f,t[e+2]=c*g+u*f+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+i*c-s*l,this._y=i*u+r*l+s*a-n*c,this._z=s*u+r*c+n*l-i*a,this._w=r*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),u=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new D,dc=new An;class Gn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Cn):Cn.fromBufferAttribute(s,r),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Lr.subVectors(this.max,js),Ji.subVectors(t.a,js),ts.subVectors(t.b,js),es.subVectors(t.c,js),xi.subVectors(ts,Ji),yi.subVectors(es,ts),Ui.subVectors(Ji,es);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!Ga(e,Ji,ts,es,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Ji,ts,es,Lr))?!1:(Nr.crossVectors(xi,yi),e=[Nr.x,Nr.y,Nr.z],Ga(e,Ji,ts,es,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,Dr=new Gn,Ji=new D,ts=new D,es=new D,xi=new D,yi=new D,Ui=new D,js=new D,Lr=new D,Nr=new D,Oi=new D;function Ga(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){Oi.fromArray(o,s);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Qf=new Gn,Zs=new D,Va=new D;class jn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(Va)),this.expandByPoint(Zs.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new D,Wa=new D,Fr=new D,vi=new D,Xa=new D,Ur=new D,qa=new D;class Er{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wa.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Wa);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Fr),a=vi.dot(this.direction),l=-vi.dot(Fr),c=vi.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*l-a,d=r*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Wa).addScaledVector(Fr,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,s){Xa.subVectors(e,t),Ur.subVectors(n,t),qa.crossVectors(Xa,Ur);let r=this.direction.dot(qa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;vi.subVectors(this.origin,t);const l=a*this.direction.dot(Ur.crossVectors(vi,Ur));if(l<0)return null;const c=a*this.direction.dot(Xa.cross(vi));if(c<0||l+c>r)return null;const u=-a*vi.dot(qa);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,n,i,s,r,a,l,c,u,h,d,f,g,_,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,s,r,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),s=1/ns.setFromMatrixColumn(t,1).length(),r=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-r*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*u,e[9]=_-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*u,f=r*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=r*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jf,t,tp)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Mi.crossVectors(n,fn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Mi.crossVectors(n,fn)),Mi.normalize(),Or.crossVectors(fn,Mi),i[0]=Mi.x,i[4]=Or.x,i[8]=fn.x,i[1]=Mi.y,i[5]=Or.y,i[9]=fn.y,i[2]=Mi.z,i[6]=Or.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],A=n[15],E=i[0],w=i[4],I=i[8],T=i[12],M=i[1],P=i[5],F=i[9],O=i[13],Y=i[2],K=i[6],j=i[10],ct=i[14],q=i[3],V=i[7],at=i[11],ot=i[15];return s[0]=r*E+a*M+l*Y+c*q,s[4]=r*w+a*P+l*K+c*V,s[8]=r*I+a*F+l*j+c*at,s[12]=r*T+a*O+l*ct+c*ot,s[1]=u*E+h*M+d*Y+f*q,s[5]=u*w+h*P+d*K+f*V,s[9]=u*I+h*F+d*j+f*at,s[13]=u*T+h*O+d*ct+f*ot,s[2]=g*E+_*M+m*Y+p*q,s[6]=g*w+_*P+m*K+p*V,s[10]=g*I+_*F+m*j+p*at,s[14]=g*T+_*O+m*ct+p*ot,s[3]=x*E+v*M+y*Y+A*q,s[7]=x*w+v*P+y*K+A*V,s[11]=x*I+v*F+y*j+A*at,s[15]=x*T+v*O+y*ct+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*r*d-i*r*f+i*c*u-s*l*u)+m*(+e*c*h-e*a*f-s*r*h+n*r*f+s*a*u-n*c*u)+p*(-i*a*u-e*l*h+e*a*d+i*r*h-n*r*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+r*m*f+u*l*p-r*d*p,y=u*_*c-g*h*c+g*a*f-r*_*f-u*a*p+r*h*p,A=g*h*l-u*_*l-g*a*d+r*_*d+u*a*m-r*h*m,E=e*x+n*v+i*y+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=x*w,t[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*w,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=v*w,t[5]=(u*m*s-g*d*s+g*i*f-e*m*f-u*i*p+e*d*p)*w,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*w,t[7]=(r*d*s-u*l*s+u*i*c-e*d*c-r*i*f+e*l*f)*w,t[8]=y*w,t[9]=(g*h*s-u*_*s-g*n*f+e*_*f+u*n*p-e*h*p)*w,t[10]=(r*_*s-g*a*s+g*n*c-e*_*c-r*n*p+e*a*p)*w,t[11]=(u*a*s-r*h*s-u*n*c+e*h*c+r*n*f-e*a*f)*w,t[12]=A*w,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*w,t[14]=(g*a*i-r*_*i-g*n*l+e*_*l+r*n*m-e*a*m)*w,t[15]=(r*h*i-u*a*i+u*n*l-e*h*l-r*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,l=t.z,c=s*r,u=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*r,0,c*l-i*a,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,a=e._z,l=e._w,c=s+s,u=r+r,h=a+a,d=s*c,f=s*u,g=s*h,_=r*u,m=r*h,p=a*h,x=l*c,v=l*u,y=l*h,A=n.x,E=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+y)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+v)*w,i[9]=(m-x)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ns.set(i[0],i[1],i[2]).length();const r=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);const c=1/s,u=1/r,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=ci){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===ci)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Aa)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=ci){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(r-s),d=(e+t)*c,f=(n+i)*u;let g,_;if(a===ci)g=(r+s)*h,_=-2*h;else if(a===Aa)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ns=new D,In=new Vt,Jf=new D(0,0,0),tp=new D(1,1,1),Mi=new D,Or=new D,fn=new D,fc=new Vt,pc=new An;class qn{constructor(t=0,e=0,n=0,i=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ep=0;const mc=new D,is=new An,ti=new Vt,Br=new D,Ks=new D,np=new D,ip=new An,gc=new D(1,0,0),_c=new D(0,1,0),xc=new D(0,0,1),yc={type:"added"},sp={type:"removed"},ss={type:"childadded",child:null},Ya={type:"childremoved",child:null};class _e extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new qn,n=new An,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Yt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(gc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Ks,Br,this.up):ti.lookAt(Br,Ks,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),is.setFromRotationMatrix(ti),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new D,ei=new D,ja=new D,ni=new D,rs=new D,as=new D,vc=new D,Za=new D,Ka=new D,$a=new D,Qa=new ie,Ja=new ie,to=new ie;class Tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Pn.subVectors(i,e),ei.subVectors(n,e),ja.subVectors(t,e);const r=Pn.dot(Pn),a=Pn.dot(ei),l=Pn.dot(ja),c=ei.dot(ei),u=ei.dot(ja),h=r*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,i,s,r,a,l){return this.getBarycoord(t,e,n,i,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(r,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,i,s,r){return Qa.setScalar(0),Ja.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,n),to.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Qa,s.x),r.addScaledVector(Ja,s.y),r.addScaledVector(to,s.z),r}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),ei.subVectors(t,e),Pn.cross(ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Pn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,a;rs.subVectors(i,n),as.subVectors(s,n),Za.subVectors(t,n);const l=rs.dot(Za),c=as.dot(Za);if(l<=0&&c<=0)return e.copy(n);Ka.subVectors(t,i);const u=rs.dot(Ka),h=as.dot(Ka);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(rs,r);$a.subVectors(t,s);const f=rs.dot($a),g=as.dot($a);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(as,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return vc.subVectors(s,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(vc,a);const p=1/(m+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(rs,r).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},zr={h:0,s:0,l:0};function eo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Ll(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=eo(r,s,t+1/3),this.g=eo(r,s,t),this.b=eo(r,s,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Qt.fromWorkingColorSpace(je.copy(this),t),Math.round(Kt(je.r*255,0,255))*65536+Math.round(Kt(je.g*255,0,255))*256+Math.round(Kt(je.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(je.copy(this),e);const n=je.r,i=je.g,s=je.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+r)/2;if(a===r)l=0,c=0;else{const h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=De){Qt.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(zr);const n=dr(Si.h,zr.h,e),i=dr(Si.s,zr.s,e),s=dr(Si.l,zr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Dt;Dt.NAMES=rd;let rp=0;class kn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=As,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Io,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new D,kr=new wt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fl,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fl&&(t.usage=this.usage),t}}class ad extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class od extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ap=0;const Mn=new Vt,no=new _e,os=new D,pn=new Gn,$s=new Gn,Oe=new D;class Ae extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?od:ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(pn.min,$s.min),pn.expandByPoint(Oe),Oe.addVectors(pn.max,$s.max),pn.expandByPoint(Oe)):(pn.expandByPoint($s.min),pn.expandByPoint($s.max))}pn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,r=e.length;s<r;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),Oe.add(os)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;const c=new D,u=new D,h=new D,d=new wt,f=new wt,g=new wt,_=new D,m=new D;function p(I,T,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(_),a[T].add(_),a[M].add(_),l[I].add(m),l[T].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,T=x.length;I<T;++I){const M=x[I],P=M.start,F=M.count;for(let O=P,Y=P+F;O<Y;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const v=new D,y=new D,A=new D,E=new D;function w(I){A.fromBufferAttribute(i,I),E.copy(A);const T=a[I];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(E,T);const P=y.dot(l[I])<0?-1:1;r.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,T=x.length;I<T;++I){const M=x[I],P=M.start,F=M.count;for(let O=P,Y=P+F;O<Y;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,r=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Xe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Vt,Bi=new Er,Hr=new jn,Sc=new D,Gr=new D,Vr=new D,Wr=new D,io=new D,Xr=new D,Tc=new D,qr=new D;class At extends _e{constructor(t=new Ae,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(io.fromBufferAttribute(h,t),r?Xr.addScaledVector(io,u):Xr.addScaledVector(io.sub(e),u))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Hr,Sc)===null||Bi.origin.distanceToSquared(Sc)>(t.far-t.near)**2))&&(Mc.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){const E=a.getX(y),w=a.getX(y+1),I=a.getX(y+2);i=Yr(this,p,t,n,c,u,h,E,w,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Yr(this,r,t,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=v;y<A;y+=3){const E=y,w=y+1,I=y+2;i=Yr(this,p,t,n,c,u,h,E,w,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;i=Yr(this,r,t,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function op(o,t,e,n,i,s,r,a){let l;if(t.side===un?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,t.side===Hn,a),l===null)return null;qr.copy(a),qr.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(qr);return c<e.near||c>e.far?null:{distance:c,point:qr.clone(),object:o}}function Yr(o,t,e,n,i,s,r,a,l,c){o.getVertexPosition(a,Gr),o.getVertexPosition(l,Vr),o.getVertexPosition(c,Wr);const u=op(o,t,e,n,Gr,Vr,Wr,Tc);if(u){const h=new D;Tn.getBarycoord(Tc,Gr,Vr,Wr,h),i&&(u.uv=Tn.getInterpolatedAttribute(i,a,l,c,h,new wt)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,h,new wt)),r&&(u.normal=Tn.getInterpolatedAttribute(r,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(Gr,Vr,Wr,d.normal),u.face=d,u.barycoord=h}return u}class He extends Ae{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(h,2));function g(_,m,p,x,v,y,A,E,w,I,T){const M=y/w,P=A/I,F=y/2,O=A/2,Y=E/2,K=w+1,j=I+1;let ct=0,q=0;const V=new D;for(let at=0;at<j;at++){const ot=at*P-O;for(let st=0;st<K;st++){const Rt=st*M-F;V[_]=Rt*x,V[m]=ot*v,V[p]=Y,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[p]=E>0?1:-1,u.push(V.x,V.y,V.z),h.push(st/w),h.push(1-at/I),ct+=1}}for(let at=0;at<I;at++)for(let ot=0;ot<w;ot++){const st=d+ot+K*at,Rt=d+ot+K*(at+1),C=d+(ot+1)+K*(at+1),k=d+(ot+1)+K*at;l.push(st,Rt,k),l.push(Rt,C,k),q+=6}a.addGroup(f,q,T),f+=q,d+=ct}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(o){const t={};for(let e=0;e<o.length;e++){const n=Us(o[e]);for(const i in n)t[i]=n[i]}return t}function lp(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function ld(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const xr={clone:Us,merge:nn};var cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Je extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cd extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new D,bc=new wt,Ec=new wt;class ln extends cd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class up extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(ls,cs,t,e);i.layers=this.layers,this.add(i);const s=new ln(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new ln(ls,cs,t,e);r.layers=this.layers,this.add(r);const a=new ln(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new ln(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new ln(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hd extends Ne{constructor(t,e,n,i,s,r,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,i,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dp extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new He(5,5,5),s=new Je({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:di});s.uniforms.tEquirect.value=e;const r=new At(i,s),a=e.minFilter;return e.minFilter===ke&&(e.minFilter=Se),new up(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}class Fl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ud{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fl,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new D;class yr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dd extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hs;const Qs=new D,us=new D,ds=new D,fs=new wt,Js=new wt,fd=new Vt,jr=new D,tr=new D,Zr=new D,wc=new wt,so=new wt,Rc=new wt;class fp extends _e{constructor(t=new dd){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ud(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new yr(n,3,0,!1)),hs.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;Kr(jr.set(-.5,-.5,0),ds,r,us,i,s),Kr(tr.set(.5,-.5,0),ds,r,us,i,s),Kr(Zr.set(.5,.5,0),ds,r,us,i,s),wc.set(0,0),so.set(1,0),Rc.set(1,1);let a=t.ray.intersectTriangle(jr,tr,Zr,!1,Qs);if(a===null&&(Kr(tr.set(-.5,.5,0),ds,r,us,i,s),so.set(0,1),a=t.ray.intersectTriangle(jr,Zr,tr,!1,Qs),a===null))return;const l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:Tn.getInterpolation(Qs,jr,tr,Zr,wc,so,Rc,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Kr(o,t,e,n,i,s){fs.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Js.x=s*fs.x-i*fs.y,Js.y=i*fs.x+s*fs.y):Js.copy(fs),o.copy(t),o.x+=Js.x,o.y+=Js.y,o.applyMatrix4(fd)}const Cc=new D,Ic=new ie,Pc=new ie,pp=new D,Dc=new Vt,$r=new D,ro=new jn,Lc=new Vt,ao=new Er;class mp extends At{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new Vt,this.bindMatrixInverse=new Vt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),t.ray.intersectsSphere(ro)!==!1&&(Lc.copy(i).invert(),ao.copy(t.ray).applyMatrix4(Lc),!(this.boundingBox!==null&&ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ao)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ie,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ic.fromBufferAttribute(i.attributes.skinIndex,t),Pc.fromBufferAttribute(i.attributes.skinWeight,t),Cc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const r=Pc.getComponent(s);if(r!==0){const a=Ic.getComponent(s);Dc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(pp.copy(Cc).applyMatrix4(Dc),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class pd extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class md extends Ne{constructor(t=null,e=1,n=1,i,s,r,a,l,c=We,u=We,h,d){super(null,r,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new Vt,gp=new Vt;class Ul{constructor(t=[],e=[]){this.uuid=Bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Vt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Vt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=t.length;s<r;s++){const a=t[s]?t[s].matrixWorld:gp;Nc.multiplyMatrices(a,e[s]),Nc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ul(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new md(e,t,t,bn,On);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new pd),this.bones.push(r),this.boneInverses.push(new Vt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const r=e[i];t.bones.push(r.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class vr extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ps=new Vt,Fc=new Vt,Qr=[],Uc=new Gn,_p=new Vt,er=new At,nr=new jn;class Mr extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_p)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Uc.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Uc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),nr.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ps),Fc.multiplyMatrices(n,ps),er.matrixWorld=Fc,er.raycast(t,Qr);for(let r=0,a=Qr.length;r<a;r++){const l=Qr[r];l.instanceId=s,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new md(new Float32Array(i*this.count),i,this.count,Rl,On));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const oo=new D,xp=new D,yp=new Yt;class Nn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oo.subVectors(n,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yp.getNormalMatrix(t),i=this.coplanarPoint(oo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new jn,Jr=new D;class Ol{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,s=new Nn,r=new Nn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){const n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-f,y-p).normalize(),n[1].setComponents(l+s,d+c,m+f,y+p).normalize(),n[2].setComponents(l+r,d+u,m+g,y+x).normalize(),n[3].setComponents(l-r,d-u,m-g,y-x).normalize(),n[4].setComponents(l-a,d-h,m-_,y-v).normalize(),e===ci)n[5].setComponents(l+a,d+h,m+_,y+v).normalize();else if(e===Aa)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Jr.x=i.normal.x>0?t.max.x:t.min.x,Jr.y=i.normal.y>0?t.max.y:t.min.y,Jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sr extends kn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wa=new D,Ra=new D,Oc=new Vt,ir=new Er,ta=new jn,lo=new D,Bc=new D;class Tr extends _e{constructor(t=new Ae,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)wa.fromBufferAttribute(e,i-1),Ra.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wa.distanceTo(Ra);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=s,t.ray.intersectsSphere(ta)===!1)return;Oc.copy(i).invert(),ir.copy(t.ray).applyMatrix4(Oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),x=u.getX(_+1),v=ea(this,t,ir,l,p,x);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=ea(this,t,ir,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=ea(this,t,ir,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=ea(this,t,ir,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ea(o,t,e,n,i,s){const r=o.geometry.attributes.position;if(wa.fromBufferAttribute(r,i),Ra.fromBufferAttribute(r,s),e.distanceSqToSegment(wa,Ra,lo,Bc)>n)return;lo.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(lo);if(!(l<t.near||l>t.far))return{distance:l,point:Bc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}const zc=new D,kc=new D;class gd extends Tr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)zc.fromBufferAttribute(e,i),kc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zc.distanceTo(kc);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends Tr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class _d extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hc=new Vt,pl=new Er,na=new jn,ia=new D;class Mp extends _e{constructor(t=new Ae,e=new _d){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=s,t.ray.intersectsSphere(na)===!1)return;Hc.copy(i).invert(),pl.copy(t.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);ia.fromBufferAttribute(h,m),Gc(ia,m,l,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,_=f;g<_;g++)ia.fromBufferAttribute(h,g),Gc(ia,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gc(o,t,e,n,i,s,r){const a=pl.distanceSqToPoint(o);if(a<e){const l=new D;pl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ve extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Vn extends Ne{constructor(t,e,n,i,s,r,a,l,c){super(t,e,n,i,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xd extends Ne{constructor(t,e,n,i,s,r,a,l,c,u=ws){if(u!==ws&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ws&&(n=Yi),n===void 0&&u===Ns&&(n=Ls),super(null,i,s,r,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bl extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],r=[],a=[],l=[],c=new D,u=new wt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class En extends Ae{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function x(){const y=new D,A=new D;let E=0;const w=(e-t)/n;for(let I=0;I<=s;I++){const T=[],M=I/s,P=M*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,Y=O*l+a,K=Math.sin(Y),j=Math.cos(Y);A.x=P*K,A.y=-M*n+m,A.z=P*j,h.push(A.x,A.y,A.z),y.set(K,w,j).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-M),T.push(g++)}_.push(T)}for(let I=0;I<i;I++)for(let T=0;T<s;T++){const M=_[T][I],P=_[T+1][I],F=_[T+1][I+1],O=_[T][I+1];(t>0||T!==0)&&(u.push(M,P,O),E+=3),(e>0||T!==s-1)&&(u.push(P,F,O),E+=3)}c.addGroup(p,E,0),p+=E}function v(y){const A=g,E=new wt,w=new D;let I=0;const T=y===!0?t:e,M=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const Y=F/i*l+a,K=Math.cos(Y),j=Math.sin(Y);w.x=T*j,w.y=m*M,w.z=T*K,h.push(w.x,w.y,w.z),d.push(0,M,0),E.x=K*.5+.5,E.y=j*.5*M+.5,f.push(E.x,E.y),g++}for(let F=0;F<i;F++){const O=A+F,Y=P+F;y===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class br extends En{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new br(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zl extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],r=[];a(i),c(n),u(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new D,y=new D,A=new D;for(let E=0;E<e.length;E+=3)f(e[E+0],v),f(e[E+1],y),f(e[E+2],A),l(v,y,A,x)}function l(x,v,y,A){const E=A+1,w=[];for(let I=0;I<=E;I++){w[I]=[];const T=x.clone().lerp(y,I/E),M=v.clone().lerp(y,I/E),P=E-I;for(let F=0;F<=P;F++)F===0&&I===E?w[I][F]=T:w[I][F]=T.clone().lerp(M,F/P)}for(let I=0;I<E;I++)for(let T=0;T<2*(E-I)-1;T++){const M=Math.floor(T/2);T%2===0?(d(w[I][M+1]),d(w[I+1][M]),d(w[I][M])):(d(w[I][M+1]),d(w[I+1][M+1]),d(w[I+1][M]))}}function c(x){const v=new D;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new D;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;r.push(y,1-A)}g(),h()}function h(){for(let x=0;x<r.length;x+=6){const v=r[x+0],y=r[x+2],A=r[x+4],E=Math.max(v,y,A),w=Math.min(v,y,A);E>.9&&w<.1&&(v<.2&&(r[x+0]+=1),y<.2&&(r[x+2]+=1),A<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const x=new D,v=new D,y=new D,A=new D,E=new wt,w=new wt,I=new wt;for(let T=0,M=0;T<s.length;T+=9,M+=6){x.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),E.set(r[M+0],r[M+1]),w.set(r[M+2],r[M+3]),I.set(r[M+4],r[M+5]),A.copy(x).add(v).add(y).divideScalar(3);const P=m(A);_(E,M+0,x,P),_(w,M+2,v,P),_(I,M+4,y,P)}}function _(x,v,y,A){A<0&&x.x===1&&(r[v]=x.x-1),y.x===0&&y.z===0&&(r[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.vertices,t.indices,t.radius,t.details)}}class kl extends zl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kl(t.radius,t.detail)}}class $e extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-r;for(let v=0;v<c;v++){const y=v*h-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,y=x+c*(p+1),A=x+1+c*(p+1),E=x+1+c*p;f.push(v,y,E),f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}class ji extends Ae{constructor(t=.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/i,f=new D,g=new wt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*r;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,y=x+n+1,A=x+n+2,E=x+1;a.push(v,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ar extends Ae{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&r===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(i+E*s)*Math.sin(r+v*a),h.y=t*Math.cos(r+v*a),h.z=t*Math.sin(i+E*s)*Math.sin(r+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+y,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=u[p][x+1],y=u[p][x],A=u[p+1][x],E=u[p+1][x+1];(p!==0||r>0)&&f.push(v,y,E),(p!==n-1||l<Math.PI)&&f.push(y,A,E)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sp extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ge extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Tp extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function sa(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Ep(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ap(o){function t(i,s){return o[i]-o[s]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Vc(o,t,e){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[r++]=o[a+l]}return i}function yd(o,t,e,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(t.push(s.time),e.push(r)),s=o[i++];while(s!==void 0)}class wr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let r;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}r=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}r=n,n=0;break n}break t}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wp extends wr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,r=t+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case bs:s=t,a=2*e-n;break;case ba:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bs:r=t,l=2*n-e;break;case ba:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let A=0;A!==a;++A)s[A]=p*r[u+A]+x*r[c+A]+v*r[l+A]+y*r[h+A];return s}}class vd extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}}class Rp extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Kn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case gr:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&Ep(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,s=t.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const h=a*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=gr;class Gs extends Kn{constructor(t,e,n){super(t,e,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=mr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Md extends Kn{}Md.prototype.ValueTypeName="color";class Os extends Kn{}Os.prototype.ValueTypeName="number";class Cp extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let u=c+a;c!==u;c+=4)An.slerpFlat(s,0,r,c-a,r,c,l);return s}}class Bs extends Kn{InterpolantFactoryMethodLinear(t){return new Cp(this.times,this.values,this.getValueSize(),t)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends Kn{constructor(t,e,n){super(t,e,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=mr;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Kn{}zs.prototype.ValueTypeName="vector";class ml{constructor(t="",e=-1,n=[],i=Dl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(Pp(n[r]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=n.length;s!==r;++s)e.push(Kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ap(l);l=Vc(l,1,u),c=Vc(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Os(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];yd(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],s=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Os(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+e[h].name+"]";n(zs,f+".position",d,"pos",i),n(Bs,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ip(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return Md;case"quaternion":return Bs;case"bool":case"boolean":return Gs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Pp(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ip(o.type);if(o.times===void 0){const e=[],n=[];yd(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const Ii={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Dp{constructor(t,e,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Lp=new Dp;class Ws{constructor(t){this.manager=t!==void 0?t:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class Np extends Error{constructor(t,e){super(t),this.response=e}}class Sd extends Ws{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ii.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ii[t]!==void 0){ii[t].push({onLoad:e,onProgress:n,onError:i});return}ii[t]=[],ii[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ii[t],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,w=u.length;E<w;E++){const I=u[E];I.onProgress&&I.onProgress(A)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Np(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ii.add(t,c);const u=ii[t];delete ii[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ii[t];if(u===void 0)throw this.manager.itemError(t),c;delete ii[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Fp extends Ws{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Ii.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const a=_r("img");function l(){u(),Ii.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Hl extends Ws{constructor(t){super(t)}load(t,e,n,i){const s=new Ne,r=new Fp(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class La extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const co=new Vt,Wc=new D,Xc=new D;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Up extends Gl{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Op extends La{constructor(t,e,n=0,i=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Up}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const qc=new Vt,sr=new D,ho=new D;class Bp extends Gl{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),ho.copy(n.position),ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ho),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc)}}class Vl extends La{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rr extends cd{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zp extends Gl{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gl extends La{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yc extends La{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class kp extends Ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Ii.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ii.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Ii.add(t,l),s.manager.itemStart(t)}}class Hp extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _l{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=jc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function jc(){return performance.now()}class Gp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,r;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=e}else{r+=e;const a=e/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,r=i;s!==r;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)t[e+r]=t[n+r]}_slerp(t,e,n,i){An.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const r=this._workIndex*s;An.multiplyQuaternionsFlat(t,r,t,e,t,n),An.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*r+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let r=0;r!==s;++r){const a=e+r;t[a]=t[a]+t[n+r]*i}}}const Wl="\\[\\]\\.:\\/",Vp=new RegExp("["+Wl+"]","g"),Xl="[^"+Wl+"]",Wp="[^"+Wl.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Xl),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),Zp=new RegExp("^"+Xp+qp+Yp+jp+"$"),Kp=["material","materials","bones","map"];class $p{constructor(t,e,n){const i=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ae{constructor(t,e,n){this.path=e,this.parsedPath=n||ae.parseTrackName(e),this.node=ae.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ae.Composite(t,e,n):new ae(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vp,"")}static parseTrackName(t){const e=Zp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Kp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ae.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ae.Composite=$p;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,r=s.length,a=new Array(r),l={endingStart:Ts,endingEnd:Ts};for(let c=0;c!==r;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,r=s/i,a=i/s;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/r,c[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const r=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ff:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(a);break;case Dl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const r=n===df;if(t===0)return s===-1?i:r&&(s&1)===1?e-i:i;if(n===Qu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=bs,i.endingEnd=bs):(t?i.endingStart=this.zeroSlopeAtStart?bs:Ts:i.endingStart=ba,e?i.endingEnd=this.zeroSlopeAtEnd?bs:Ts:i.endingEnd=ba)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const Jp=new Float32Array(1);class tm extends Zi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,r=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,r[h]=g;else{if(g=r[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;g=new Gp(ae.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let r=s[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=r;else{const a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],u=t._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),t._byClipCacheIndex=null;const h=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[e];r===void 0&&(r={},i[e]=r),r[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new vd(new Float32Array(2),new Float32Array(2),1,Jp),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let r=typeof t=="string"?ml.findByName(i,t):t;const a=r!==null?r.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Dl),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const u=new Qp(this,r,e,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?ml.findByName(n,t):t,r=s?s.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),r=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const u=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zc=new Vt;class ql{constructor(t,e,n=0,i=1/0){this.ray=new Er(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(t,e=!0,n=[]){return xl(t,this,n,e),n.sort(Kc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)xl(t[i],this,n,e);return n.sort(Kc),n}}function Kc(o,t){return o.distance-t.distance}function xl(o,t,e,n){let i=!0;if(o.layers.test(t.layers)&&o.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=o.children;for(let r=0,a=s.length;r<a;r++)xl(s[r],t,e,!0)}}function $c(o,t,e,n){const i=em(n);switch(e){case qu:return o*t;case ju:return o*t;case Zu:return o*t*2;case Rl:return o*t/i.components*i.byteLength;case Cl:return o*t/i.components*i.byteLength;case Ku:return o*t*2/i.components*i.byteLength;case Il:return o*t*2/i.components*i.byteLength;case Yu:return o*t*3/i.components*i.byteLength;case bn:return o*t*4/i.components*i.byteLength;case Pl:return o*t*4/i.components*i.byteLength;case ga:case _a:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xa:case ya:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Vo:return Math.max(o,16)*Math.max(t,8)/4;case ko:case Go:return Math.max(o,8)*Math.max(t,8)/2;case Wo:case Xo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $o:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case va:case ol:case ll:return Math.ceil(o/4)*Math.ceil(t/4)*16;case $u:case cl:return Math.ceil(o/4)*Math.ceil(t/4)*8;case hl:case ul:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function em(o){switch(o){case gi:case Vu:return{byteLength:1,components:1};case pr:case Wu:case fi:return{byteLength:2,components:1};case Al:case wl:return{byteLength:2,components:4};case Yi:case El:case On:return{byteLength:4,components:1};case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Td(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function nm(o){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(o.bindBuffer(c,a),h.length===0)o.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];o.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:r}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Am=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:_m,clipping_planes_fragment:xm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:Tm,color_pars_vertex:bm,color_vertex:Em,common:Am,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Dm,colorspace_fragment:Lm,colorspace_pars_fragment:Nm,envmap_fragment:Fm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Om,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Hm,fog_fragment:Gm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:jm,lights_toon_fragment:Km,lights_toon_pars_fragment:$m,lights_phong_fragment:Qm,lights_phong_pars_fragment:Jm,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:xg,morphtarget_vertex:yg,normal_fragment_begin:vg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:Tg,normal_vertex:bg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Dg,project_vertex:Lg,dithering_fragment:Ng,dithering_pars_fragment:Fg,roughnessmap_fragment:Ug,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:jg,tonemapping_pars_fragment:Zg,transmission_fragment:Kg,transmission_pars_fragment:$g,uv_pars_fragment:Qg,uv_pars_vertex:Jg,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:o0,depth_vert:l0,depth_frag:c0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:_0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:v0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:T0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:A0,meshphysical_frag:w0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:I0,points_frag:P0,shadow_vert:D0,shadow_frag:L0,sprite_vert:N0,sprite_frag:F0},mt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Wn={basic:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:nn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:nn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:nn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:nn([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:nn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:nn([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:nn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:nn([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:nn([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:nn([mt.lights,mt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Wn.physical={uniforms:nn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ra={r:0,b:0,g:0},ki=new qn,U0=new Vt;function O0(o,t,e,n,i,s,r){const a=new Dt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const A=g(v);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);const E=o.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(v,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Da)?(u===void 0&&(u=new At(new He(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Us(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ki.copy(y.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(ki)),u.material.toneMapped=Qt.getTransfer(A.colorSpace)!==he,(h!==A||d!==A.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=o.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new At(new $e(2,2),new Je({name:"BackgroundMaterial",uniforms:Us(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(A.colorSpace)!==he,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,h=A,d=A.version,f=o.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ra,ld(o)),n.buffers.color.setClear(ra.r,ra.g,ra.b,y,r)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:x}}function B0(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(M,P,F,O,Y){let K=!1;const j=h(O,F,P);s!==j&&(s=j,c(s.object)),K=f(M,O,F,Y),K&&g(M,O,F,Y),Y!==null&&t.update(Y,o.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(M,P,F,O),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return o.createVertexArray()}function c(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function h(M,P,F){const O=F.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let j=K[O];return j===void 0&&(j=d(l()),K[O]=j),j}function d(M){const P=[],F=[],O=[];for(let Y=0;Y<e;Y++)P[Y]=0,F[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,P,F,O){const Y=s.attributes,K=P.attributes;let j=0;const ct=F.getAttributes();for(const q in ct)if(ct[q].location>=0){const at=Y[q];let ot=K[q];if(ot===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),at===void 0||at.attribute!==ot||ot&&at.data!==ot.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function g(M,P,F,O){const Y={},K=P.attributes;let j=0;const ct=F.getAttributes();for(const q in ct)if(ct[q].location>=0){let at=K[q];at===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const ot={};ot.attribute=at,at&&at.data&&(ot.data=at.data),Y[q]=ot,j++}s.attributes=Y,s.attributesNum=j,s.index=O}function _(){const M=s.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const F=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;F[M]=1,O[M]===0&&(o.enableVertexAttribArray(M),O[M]=1),Y[M]!==P&&(o.vertexAttribDivisor(M,P),Y[M]=P)}function x(){const M=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==M[F]&&(o.disableVertexAttribArray(F),P[F]=0)}function v(M,P,F,O,Y,K,j){j===!0?o.vertexAttribIPointer(M,P,F,Y,K):o.vertexAttribPointer(M,P,F,O,Y,K)}function y(M,P,F,O){_();const Y=O.attributes,K=F.getAttributes(),j=P.defaultAttributeValues;for(const ct in K){const q=K[ct];if(q.location>=0){let V=Y[ct];if(V===void 0&&(ct==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),ct==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){const at=V.normalized,ot=V.itemSize,st=t.get(V);if(st===void 0)continue;const Rt=st.buffer,C=st.type,k=st.bytesPerElement,Z=C===o.INT||C===o.UNSIGNED_INT||V.gpuType===El;if(V.isInterleavedBufferAttribute){const N=V.data,G=N.stride,J=V.offset;if(N.isInstancedInterleavedBuffer){for(let ht=0;ht<q.locationSize;ht++)p(q.location+ht,N.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let ht=0;ht<q.locationSize;ht++)v(q.location+ht,ot/q.locationSize,C,at,G*k,(J+ot/q.locationSize*ht)*k,Z)}else{if(V.isInstancedBufferAttribute){for(let N=0;N<q.locationSize;N++)p(q.location+N,V.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let N=0;N<q.locationSize;N++)m(q.location+N);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let N=0;N<q.locationSize;N++)v(q.location+N,ot/q.locationSize,C,at,ot*k,ot/q.locationSize*N*k,Z)}}else if(j!==void 0){const at=j[ct];if(at!==void 0)switch(at.length){case 2:o.vertexAttrib2fv(q.location,at);break;case 3:o.vertexAttrib3fv(q.location,at);break;case 4:o.vertexAttrib4fv(q.location,at);break;default:o.vertexAttrib1fv(q.location,at)}}}}x()}function A(){I();for(const M in n){const P=n[M];for(const F in P){const O=P[F];for(const Y in O)u(O[Y].object),delete O[Y];delete P[F]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const F in P){const O=P[F];for(const Y in O)u(O[Y].object),delete O[Y];delete P[F]}delete n[M.id]}function w(M){for(const P in n){const F=n[P];if(F[M.id]===void 0)continue;const O=F[M.id];for(const Y in O)u(O[Y].object),delete O[Y];delete F[M.id]}}function I(){T(),r=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function z0(o,t,e){let n;function i(c){n=c}function s(c,u){o.drawArrays(n,c,u),e.update(u,n,1)}function r(c,u,h){h!==0&&(o.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k0(o,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==bn&&n.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==gi&&n.convert(w)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!I)}function l(w){if(w==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function H0(o){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Nn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=o.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=u(g,d,v,f);for(let A=0;A!==v;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)r.copy(h[v]).applyMatrix4(x,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function G0(o){let t=new WeakMap;function e(r,a){return a===Bo?r.mapping=Ps:a===zo&&(r.mapping=Ds),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Bo||a===zo)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new dp(l.height);return c.fromEquirectangularTexture(o,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Es=4,Qc=[.125,.215,.35,.446,.526,.582],Xi=20,uo=new Rr,Jc=new Dt;let fo=null,po=0,mo=0,go=!1;const Vi=(1+Math.sqrt(5))/2,ms=1/Vi,th=[new D(-Vi,ms,0),new D(Vi,ms,0),new D(-ms,0,Vi),new D(ms,0,Vi),new D(0,Vi,-ms),new D(0,Vi,ms),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class eh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:fi,format:bn,colorSpace:an,depthBuffer:!1},i=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V0(s)),this._blurMaterial=W0(s,t,e)}return i}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,i){const a=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Jc),u.toneMapping=Li,u.autoClear=!1;const f=new de({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new At(new He,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Jc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;aa(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ps||t.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;aa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=th[(i-s-1)%th.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let x=0;for(let w=0;w<Xi;++w){const I=w/_,T=Math.exp(-I*I/2);p.push(T),w===0?x+=T:w<m&&(x+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],A=3*y*(i>v-Es?i-v+Es:0),E=4*(this._cubeSize-y);aa(e,A,E,3*y,2*y),l.setRenderTarget(e),l.render(h,uo)}}function V0(o){const t=[],e=[],n=[];let i=o;const s=o-Es+1+Qc.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>o-Es?l=Qc[r-o+Es-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,I=E>2?0:-1,T=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];x.set(T,_*g*E),v.set(d,m*g*E);const M=[E,E,E,E,E,E];y.set(M,p*g*E)}const A=new Ae;A.setAttribute("position",new Xe(x,_)),A.setAttribute("uv",new Xe(v,m)),A.setAttribute("faceIndex",new Xe(y,p)),t.push(A),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(o,t,e){const n=new zn(o,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function W0(o,t,e){const n=new Float32Array(Xi),i=new D(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ih(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function sh(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X0(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bo||l===zo,u=l===Ps||l===Ds;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new eh(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new eh(o)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function q0(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Y0(o,t,e,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],o.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const A=x[v+0],E=x[v+1],w=x[v+2];d.push(A,E,E,w,w,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const A=v+0,E=v+1,w=v+2;d.push(A,E,E,w,w,A)}}else return;const m=new(nd(d)?od:ad)(d,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function j0(o,t,e){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(n,f,s,d*r),e.update(f,n,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,d*r,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z0(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case o.TRIANGLES:e.triangles+=a*(s/3);break;case o.LINES:e.lines+=a*(s/2);break;case o.LINE_STRIP:e.lines+=a*(s-1);break;case o.LINE_LOOP:e.lines+=a*s;break;case o.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function K0(o,t,e){const n=new WeakMap,i=new ie;function s(r,a,l){const c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const E=new Float32Array(y*A*4*h),w=new sd(E,y,A,h);w.type=On,w.needsUpdate=!0;const I=v*4;for(let M=0;M<h;M++){const P=m[M],F=p[M],O=x[M],Y=y*A*4*M;for(let K=0;K<P.count;K++){const j=K*I;f===!0&&(i.fromBufferAttribute(P,K),E[Y+j+0]=i.x,E[Y+j+1]=i.y,E[Y+j+2]=i.z,E[Y+j+3]=0),g===!0&&(i.fromBufferAttribute(F,K),E[Y+j+4]=i.x,E[Y+j+5]=i.y,E[Y+j+6]=i.z,E[Y+j+7]=0),_===!0&&(i.fromBufferAttribute(O,K),E[Y+j+8]=i.x,E[Y+j+9]=i.y,E[Y+j+10]=i.z,E[Y+j+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new wt(y,A)},n.set(a,d),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function $0(o,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const bd=new Ne,rh=new xd(1,1),Ed=new sd,Ad=new $f,wd=new hd,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function Xs(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let s=ah[i];if(s===void 0&&(s=new Float32Array(i),ah[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function Fe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ue(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Na(o,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Q0(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function J0(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2fv(this.addr,t),Ue(e,t)}}function t_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;o.uniform3fv(this.addr,t),Ue(e,t)}}function e_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4fv(this.addr,t),Ue(e,t)}}function n_(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;hh.set(n),o.uniformMatrix2fv(this.addr,!1,hh),Ue(e,n)}}function i_(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;ch.set(n),o.uniformMatrix3fv(this.addr,!1,ch),Ue(e,n)}}function s_(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Fe(e,n))return;lh.set(n),o.uniformMatrix4fv(this.addr,!1,lh),Ue(e,n)}}function r_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function a_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2iv(this.addr,t),Ue(e,t)}}function o_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;o.uniform3iv(this.addr,t),Ue(e,t)}}function l_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4iv(this.addr,t),Ue(e,t)}}function c_(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function h_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;o.uniform2uiv(this.addr,t),Ue(e,t)}}function u_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;o.uniform3uiv(this.addr,t),Ue(e,t)}}function d_(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;o.uniform4uiv(this.addr,t),Ue(e,t)}}function f_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(rh.compareFunction=ed,s=rh):s=bd,e.setTexture2D(t||s,i)}function p_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ad,i)}function m_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wd,i)}function g_(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ed,i)}function __(o){switch(o){case 5126:return Q0;case 35664:return J0;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(o,t){o.uniform1fv(this.addr,t)}function y_(o,t){const e=Xs(t,this.size,2);o.uniform2fv(this.addr,e)}function v_(o,t){const e=Xs(t,this.size,3);o.uniform3fv(this.addr,e)}function M_(o,t){const e=Xs(t,this.size,4);o.uniform4fv(this.addr,e)}function S_(o,t){const e=Xs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function T_(o,t){const e=Xs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function b_(o,t){const e=Xs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function E_(o,t){o.uniform1iv(this.addr,t)}function A_(o,t){o.uniform2iv(this.addr,t)}function w_(o,t){o.uniform3iv(this.addr,t)}function R_(o,t){o.uniform4iv(this.addr,t)}function C_(o,t){o.uniform1uiv(this.addr,t)}function I_(o,t){o.uniform2uiv(this.addr,t)}function P_(o,t){o.uniform3uiv(this.addr,t)}function D_(o,t){o.uniform4uiv(this.addr,t)}function L_(o,t,e){const n=this.cache,i=t.length,s=Na(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),Ue(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||bd,s[r])}function N_(o,t,e){const n=this.cache,i=t.length,s=Na(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),Ue(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ad,s[r])}function F_(o,t,e){const n=this.cache,i=t.length,s=Na(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),Ue(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||wd,s[r])}function U_(o,t,e){const n=this.cache,i=t.length,s=Na(e,i);Fe(n,s)||(o.uniform1iv(this.addr,s),Ue(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Ed,s[r])}function O_(o){switch(o){case 5126:return x_;case 35664:return y_;case 35665:return v_;case 35666:return M_;case 35674:return S_;case 35675:return T_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return A_;case 35668:case 35672:return w_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return I_;case 36295:return P_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return U_}}class B_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}}class z_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function uh(o,t){o.seq.push(t),o.map[t.id]=t}function H_(o,t,e){const n=o.name,i=n.length;for(_o.lastIndex=0;;){const s=_o.exec(n),r=_o.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){uh(e,c===void 0?new B_(a,o,t):new z_(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new k_(a),uh(e,h)),e=h}}}class Ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);H_(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function dh(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const G_=37297;let V_=0;function W_(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const fh=new Yt;function X_(o){Qt._getMatrix(fh,Qt.workingColorSpace,o);const t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(o)){case Ea:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ph(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+W_(o.getShaderSource(t),r)}else return i}function q_(o,t){const e=X_(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y_(o,t){let e;switch(t){case Fu:e="Linear";break;case Uu:e="Reinhard";break;case Ou:e="Cineon";break;case Bu:e="ACESFilmic";break;case zu:e="AgX";break;case ku:e="Neutral";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oa=new D;function j_(){Qt.getLuminanceCoefficients(oa);const o=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function K_(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $_(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(t,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function cr(o){return o!==""}function mh(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(o){return o.replace(Q_,tx)}const J_=new Map;function tx(o,t){let e=Zt[t];if(e===void 0){const n=J_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(o){return o.replace(ex,nx)}function nx(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xh(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ix(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function sx(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ps:case Ds:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rx(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function ax(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nu:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case lf:t="ENVMAP_BLENDING_ADD";break}return t}function ox(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lx(o,t,e,n){const i=o.getContext(),s=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=ix(e),c=sx(e),u=rx(e),h=ax(e),d=ox(e),f=Z_(e),g=K_(s),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Li?"#define TONE_MAPPING":"",e.toneMapping!==Li?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Li?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,q_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),r=yl(r),r=mh(r,e),r=gh(r,e),a=yl(a),a=mh(a,e),a=gh(a,e),r=_h(r),a=_h(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+r,y=x+p+a,A=dh(i,i.VERTEX_SHADER,v),E=dh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(o.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(E).trim();let K=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,A,E);else{const ct=ph(i,A,"vertex"),q=ph(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+ct+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||Y==="")&&(j=!1);j&&(P.diagnostics={runnable:K,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(E),I=new Ma(i,_),T=$_(i,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,G_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let cx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ux(t),e.set(t,n)),n}}class ux{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}}function dx(o,t,e,n,i,s,r){const a=new Nl,l=new hx,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,P,F,O){const Y=F.fog,K=O.geometry,j=T.isMeshStandardMaterial?F.environment:null,ct=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),q=ct&&ct.mapping===Da?ct.image.height:null,V=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const at=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ot=at!==void 0?at.length:0;let st=0;K.morphAttributes.position!==void 0&&(st=1),K.morphAttributes.normal!==void 0&&(st=2),K.morphAttributes.color!==void 0&&(st=3);let Rt,C,k,Z;if(V){const ce=Wn[V];Rt=ce.vertexShader,C=ce.fragmentShader}else Rt=T.vertexShader,C=T.fragmentShader,l.update(T),k=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);const N=o.getRenderTarget(),G=o.state.buffers.depth.getReversed(),J=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,Ct=!!T.map,Ot=!!T.matcap,le=!!ct,L=!!T.aoMap,Re=!!T.lightMap,Wt=!!T.bumpMap,zt=!!T.normalMap,It=!!T.displacementMap,Nt=!!T.emissiveMap,Pt=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,H=T.clearcoat>0,et=T.dispersion>0,it=T.iridescence>0,Q=T.sheen>0,Mt=T.transmission>0,ut=S&&!!T.anisotropyMap,lt=H&&!!T.clearcoatMap,Tt=H&&!!T.clearcoatNormalMap,tt=H&&!!T.clearcoatRoughnessMap,pt=it&&!!T.iridescenceMap,yt=it&&!!T.iridescenceThicknessMap,kt=Q&&!!T.sheenColorMap,bt=Q&&!!T.sheenRoughnessMap,te=!!T.specularMap,jt=!!T.specularColorMap,pe=!!T.specularIntensityMap,U=Mt&&!!T.transmissionMap,gt=Mt&&!!T.thicknessMap,$=!!T.gradientMap,rt=!!T.alphaMap,vt=T.alphaTest>0,xt=!!T.alphaHash,qt=!!T.extensions;let be=Li;T.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(be=o.toneMapping);const qe={shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:Rt,fragmentShader:C,defines:T.defines,customVertexShaderID:k,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:J,instancingColor:J&&O.instanceColor!==null,instancingMorph:J&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?o.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:an,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:Ot,envMap:le,envMapMode:le&&ct.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:Re,bumpMap:Wt,normalMap:zt,displacementMap:d&&It,emissiveMap:Nt,normalMapObjectSpace:zt&&T.normalMapType===_f,normalMapTangentSpace:zt&&T.normalMapType===td,metalnessMap:Pt,roughnessMap:R,anisotropy:S,anisotropyMap:ut,clearcoat:H,clearcoatMap:lt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:tt,dispersion:et,iridescence:it,iridescenceMap:pt,iridescenceThicknessMap:yt,sheen:Q,sheenColorMap:kt,sheenRoughnessMap:bt,specularMap:te,specularColorMap:jt,specularIntensityMap:pe,transmission:Mt,transmissionMap:U,thicknessMap:gt,gradientMap:$,opaque:T.transparent===!1&&T.blending===As&&T.alphaToCoverage===!1,alphaMap:rt,alphaTest:vt,alphaHash:xt,combine:T.combine,mapUv:Ct&&_(T.map.channel),aoMapUv:L&&_(T.aoMap.channel),lightMapUv:Re&&_(T.lightMap.channel),bumpMapUv:Wt&&_(T.bumpMap.channel),normalMapUv:zt&&_(T.normalMap.channel),displacementMapUv:It&&_(T.displacementMap.channel),emissiveMapUv:Nt&&_(T.emissiveMap.channel),metalnessMapUv:Pt&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:ut&&_(T.anisotropyMap.channel),clearcoatMapUv:lt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(T.sheenRoughnessMap.channel),specularMapUv:te&&_(T.specularMap.channel),specularColorMapUv:jt&&_(T.specularColorMap.channel),specularIntensityMapUv:pe&&_(T.specularIntensityMap.channel),transmissionMapUv:U&&_(T.transmissionMap.channel),thicknessMapUv:gt&&_(T.thicknessMap.channel),alphaMapUv:rt&&_(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(zt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(Ct||rt),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:G,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:st,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:be,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===he,decodeVideoTextureEmissive:Nt&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===he,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Le,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&T.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)M.push(P),M.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(x(M,T),v(M,T),M.push(o.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=g[T.type];let P;if(M){const F=Wn[M];P=xr.clone(F.uniforms)}else P=T.uniforms;return P}function A(T,M){let P;for(let F=0,O=u.length;F<O;F++){const Y=u[F];if(Y.cacheKey===M){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new lx(o,M,T,s),u.push(P)),P}function E(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:I}}function fx(){let o=new WeakMap;function t(r){return o.has(r)}function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function n(r){o.delete(r)}function i(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function px(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function vh(){const o=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(h,d,f,g,_,m){let p=o[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},o[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=r(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||px),n.length>1&&n.sort(d||yh),i.length>1&&i.sort(d||yh)}function u(){for(let h=t,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function mx(){let o=new WeakMap;function t(n,i){const s=o.get(n);let r;return s===void 0?(r=new vh,o.set(n,[r])):i>=s.length?(r=new vh,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function gx(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Dt};break;case"SpotLight":e={position:new D,direction:new D,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function _x(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let xx=0;function yx(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function vx(o){const t=new gx,e=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new Vt,r=new Vt;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,v=0,y=0,A=0,E=0,w=0;c.sort(yx);for(let T=0,M=c.length;T<M;T++){const P=c[T],F=P.color,O=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*O,h+=F.g*O,d+=F.b*O;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],O);w++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ct=P.shadow,q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=j,f++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(O),j.distance=Y,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[_]=j;const ct=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,ct.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=ct.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=K,y++}_++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(F).multiplyScalar(O),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=j,m++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const ct=P.shadow,q=e.get(P);q.shadowIntensity=ct.intensity,q.shadowBias=ct.bias,q.shadowNormalBias=ct.normalBias,q.shadowRadius=ct.radius,q.shadowMapSize=ct.mapSize,q.shadowCameraNear=ct.camera.near,q.shadowCameraFar=ct.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=j,g++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(O),j.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=j,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==A||I.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=A,I.numLightProbes=w,n.version=xx++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),s.copy(v.matrixWorld),s.premultiply(m),r.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Mh(o){const t=new vx(o),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function Mx(o){let t=new WeakMap;function e(i,s=0){const r=t.get(i);let a;return r===void 0?(a=new Mh(o),t.set(i,[a])):s>=r.length?(a=new Mh(o),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bx(o,t,e){let n=new Ol;const i=new wt,s=new wt,r=new ie,a=new Tp({depthPacking:gf}),l=new bp,c={},u=e.maxTextureSize,h={[Hn]:un,[un]:Hn,[Le]:Le},d=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Sx,fragmentShader:Tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(E,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=o.getRenderTarget(),M=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),F=o.state;F.setBlending(di),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==ri&&this.type===ri,Y=p===ri&&this.type!==ri;for(let K=0,j=E.length;K<j;K++){const ct=E[K],q=ct.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ct,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const V=q.getFrameExtents();if(i.multiply(V),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,q.mapSize.y=s.y)),q.map===null||O===!0||Y===!0){const ot=this.type!==ri?{minFilter:We,magFilter:We}:{};q.map!==null&&q.map.dispose(),q.map=new zn(i.x,i.y,ot),q.map.texture.name=ct.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const at=q.getViewportCount();for(let ot=0;ot<at;ot++){const st=q.getViewport(ot);r.set(s.x*st.x,s.y*st.y,s.x*st.z,s.y*st.w),F.viewport(r),q.updateMatrices(ct,ot),n=q.getFrustum(),y(w,I,q.camera,ct,this.type)}q.isPointLightShadow!==!0&&this.type===ri&&x(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(T,M,P)};function x(E,w){const I=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(w,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(w,null,I,f,_,null)}function v(E,w,I,T){let M=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=M.uuid,O=w.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let K=Y[O];K===void 0&&(K=M.clone(),Y[O]=K,w.addEventListener("dispose",A)),M=K}if(M.visible=w.visible,M.wireframe=w.wireframe,T===ri?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=o.properties.get(M);F.light=I}return M}function y(E,w,I,T,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ri)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const O=t.update(E),Y=E.material;if(Array.isArray(Y)){const K=O.groups;for(let j=0,ct=K.length;j<ct;j++){const q=K[j],V=Y[q.materialIndex];if(V&&V.visible){const at=v(E,V,T,M);E.onBeforeShadow(o,E,w,I,O,at,q),o.renderBufferDirect(I,null,O,at,E,q),E.onAfterShadow(o,E,w,I,O,at,q)}}}else if(Y.visible){const K=v(E,Y,T,M);E.onBeforeShadow(o,E,w,I,O,K,null),o.renderBufferDirect(I,null,O,K,E,null),E.onAfterShadow(o,E,w,I,O,K,null)}}const F=E.children;for(let O=0,Y=F.length;O<Y;O++)y(F[O],w,I,T,M)}function A(E){E.target.removeEventListener("dispose",A);for(const I in c){const T=c[I],M=E.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Ex={[Po]:Do,[Lo]:Uo,[No]:Oo,[Is]:Fo,[Do]:Po,[Uo]:Lo,[Oo]:No,[Fo]:Is};function Ax(o,t){function e(){let U=!1;const gt=new ie;let $=null;const rt=new ie(0,0,0,0);return{setMask:function(vt){$!==vt&&!U&&(o.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){U=vt},setClear:function(vt,xt,qt,be,qe){qe===!0&&(vt*=be,xt*=be,qt*=be),gt.set(vt,xt,qt,be),rt.equals(gt)===!1&&(o.clearColor(vt,xt,qt,be),rt.copy(gt))},reset:function(){U=!1,$=null,rt.set(-1,0,0,0)}}}function n(){let U=!1,gt=!1,$=null,rt=null,vt=null;return{setReversed:function(xt){if(gt!==xt){const qt=t.get("EXT_clip_control");gt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const be=vt;vt=null,this.setClear(be)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?N(o.DEPTH_TEST):G(o.DEPTH_TEST)},setMask:function(xt){$!==xt&&!U&&(o.depthMask(xt),$=xt)},setFunc:function(xt){if(gt&&(xt=Ex[xt]),rt!==xt){switch(xt){case Po:o.depthFunc(o.NEVER);break;case Do:o.depthFunc(o.ALWAYS);break;case Lo:o.depthFunc(o.LESS);break;case Is:o.depthFunc(o.LEQUAL);break;case No:o.depthFunc(o.EQUAL);break;case Fo:o.depthFunc(o.GEQUAL);break;case Uo:o.depthFunc(o.GREATER);break;case Oo:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}rt=xt}},setLocked:function(xt){U=xt},setClear:function(xt){vt!==xt&&(gt&&(xt=1-xt),o.clearDepth(xt),vt=xt)},reset:function(){U=!1,$=null,rt=null,vt=null,gt=!1}}}function i(){let U=!1,gt=null,$=null,rt=null,vt=null,xt=null,qt=null,be=null,qe=null;return{setTest:function(ce){U||(ce?N(o.STENCIL_TEST):G(o.STENCIL_TEST))},setMask:function(ce){gt!==ce&&!U&&(o.stencilMask(ce),gt=ce)},setFunc:function(ce,wn,$n){($!==ce||rt!==wn||vt!==$n)&&(o.stencilFunc(ce,wn,$n),$=ce,rt=wn,vt=$n)},setOp:function(ce,wn,$n){(xt!==ce||qt!==wn||be!==$n)&&(o.stencilOp(ce,wn,$n),xt=ce,qt=wn,be=$n)},setLocked:function(ce){U=ce},setClear:function(ce){qe!==ce&&(o.clearStencil(ce),qe=ce)},reset:function(){U=!1,gt=null,$=null,rt=null,vt=null,xt=null,qt=null,be=null,qe=null}}}const s=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,A=null,E=null,w=new Dt(0,0,0),I=0,T=!1,M=null,P=null,F=null,O=null,Y=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,ct=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=ct>=1):q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=ct>=2);let V=null,at={};const ot=o.getParameter(o.SCISSOR_BOX),st=o.getParameter(o.VIEWPORT),Rt=new ie().fromArray(ot),C=new ie().fromArray(st);function k(U,gt,$,rt){const vt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(U,xt),o.texParameteri(U,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(U,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<$;qt++)U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY?o.texImage3D(gt,0,o.RGBA,1,1,rt,0,o.RGBA,o.UNSIGNED_BYTE,vt):o.texImage2D(gt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,vt);return xt}const Z={};Z[o.TEXTURE_2D]=k(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=k(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=k(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=k(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),N(o.DEPTH_TEST),r.setFunc(Is),Wt(!1),zt(nc),N(o.CULL_FACE),L(di);function N(U){u[U]!==!0&&(o.enable(U),u[U]=!0)}function G(U){u[U]!==!1&&(o.disable(U),u[U]=!1)}function J(U,gt){return h[U]!==gt?(o.bindFramebuffer(U,gt),h[U]=gt,U===o.DRAW_FRAMEBUFFER&&(h[o.FRAMEBUFFER]=gt),U===o.FRAMEBUFFER&&(h[o.DRAW_FRAMEBUFFER]=gt),!0):!1}function ht(U,gt){let $=f,rt=!1;if(U){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));const vt=U.textures;if($.length!==vt.length||$[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,qt=vt.length;xt<qt;xt++)$[xt]=o.COLOR_ATTACHMENT0+xt;$.length=vt.length,rt=!0}}else $[0]!==o.BACK&&($[0]=o.BACK,rt=!0);rt&&o.drawBuffers($)}function Ct(U){return g!==U?(o.useProgram(U),g=U,!0):!1}const Ot={[Wi]:o.FUNC_ADD,[Vd]:o.FUNC_SUBTRACT,[Wd]:o.FUNC_REVERSE_SUBTRACT};Ot[Xd]=o.MIN,Ot[qd]=o.MAX;const le={[Yd]:o.ZERO,[jd]:o.ONE,[Zd]:o.SRC_COLOR,[Co]:o.SRC_ALPHA,[ef]:o.SRC_ALPHA_SATURATE,[Jd]:o.DST_COLOR,[$d]:o.DST_ALPHA,[Kd]:o.ONE_MINUS_SRC_COLOR,[Io]:o.ONE_MINUS_SRC_ALPHA,[tf]:o.ONE_MINUS_DST_COLOR,[Qd]:o.ONE_MINUS_DST_ALPHA,[nf]:o.CONSTANT_COLOR,[sf]:o.ONE_MINUS_CONSTANT_COLOR,[rf]:o.CONSTANT_ALPHA,[af]:o.ONE_MINUS_CONSTANT_ALPHA};function L(U,gt,$,rt,vt,xt,qt,be,qe,ce){if(U===di){_===!0&&(G(o.BLEND),_=!1);return}if(_===!1&&(N(o.BLEND),_=!0),U!==Gd){if(U!==m||ce!==T){if((p!==Wi||y!==Wi)&&(o.blendEquation(o.FUNC_ADD),p=Wi,y=Wi),ce)switch(U){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xn:o.blendFunc(o.ONE,o.ONE);break;case ic:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sc:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Xn:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ic:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sc:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,v=null,A=null,E=null,w.set(0,0,0),I=0,m=U,T=ce}return}vt=vt||gt,xt=xt||$,qt=qt||rt,(gt!==p||vt!==y)&&(o.blendEquationSeparate(Ot[gt],Ot[vt]),p=gt,y=vt),($!==x||rt!==v||xt!==A||qt!==E)&&(o.blendFuncSeparate(le[$],le[rt],le[xt],le[qt]),x=$,v=rt,A=xt,E=qt),(be.equals(w)===!1||qe!==I)&&(o.blendColor(be.r,be.g,be.b,qe),w.copy(be),I=qe),m=U,T=!1}function Re(U,gt){U.side===Le?G(o.CULL_FACE):N(o.CULL_FACE);let $=U.side===un;gt&&($=!$),Wt($),U.blending===As&&U.transparent===!1?L(di):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const rt=U.stencilWrite;a.setTest(rt),rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(o.SAMPLE_ALPHA_TO_COVERAGE):G(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){M!==U&&(U?o.frontFace(o.CW):o.frontFace(o.CCW),M=U)}function zt(U){U!==kd?(N(o.CULL_FACE),U!==P&&(U===nc?o.cullFace(o.BACK):U===Hd?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):G(o.CULL_FACE),P=U}function It(U){U!==F&&(j&&o.lineWidth(U),F=U)}function Nt(U,gt,$){U?(N(o.POLYGON_OFFSET_FILL),(O!==gt||Y!==$)&&(o.polygonOffset(gt,$),O=gt,Y=$)):G(o.POLYGON_OFFSET_FILL)}function Pt(U){U?N(o.SCISSOR_TEST):G(o.SCISSOR_TEST)}function R(U){U===void 0&&(U=o.TEXTURE0+K-1),V!==U&&(o.activeTexture(U),V=U)}function S(U,gt,$){$===void 0&&(V===null?$=o.TEXTURE0+K-1:$=V);let rt=at[$];rt===void 0&&(rt={type:void 0,texture:void 0},at[$]=rt),(rt.type!==U||rt.texture!==gt)&&(V!==$&&(o.activeTexture($),V=$),o.bindTexture(U,gt||Z[U]),rt.type=U,rt.texture=gt)}function H(){const U=at[V];U!==void 0&&U.type!==void 0&&(o.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{o.compressedTexImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{o.compressedTexImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{o.texSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{o.texSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{o.texStorage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{o.texStorage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{o.texImage2D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{o.texImage3D.apply(o,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(U){Rt.equals(U)===!1&&(o.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function bt(U){C.equals(U)===!1&&(o.viewport(U.x,U.y,U.z,U.w),C.copy(U))}function te(U,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let rt=$.get(U);rt===void 0&&(rt=o.getUniformBlockIndex(gt,U.name),$.set(U,rt))}function jt(U,gt){const rt=c.get(gt).get(U);l.get(gt)!==rt&&(o.uniformBlockBinding(gt,rt,U.__bindingPointIndex),l.set(gt,rt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),u={},V=null,at={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,v=null,y=null,A=null,E=null,w=new Dt(0,0,0),I=0,T=!1,M=null,P=null,F=null,O=null,Y=null,Rt.set(0,0,o.canvas.width,o.canvas.height),C.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:N,disable:G,bindFramebuffer:J,drawBuffers:ht,useProgram:Ct,setBlending:L,setMaterial:Re,setFlipSided:Wt,setCullFace:zt,setLineWidth:It,setPolygonOffset:Nt,setScissorTest:Pt,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:pt,texImage3D:yt,updateUBOMapping:te,uniformBlockBinding:jt,texStorage2D:Tt,texStorage3D:tt,texSubImage2D:Q,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:lt,scissor:kt,viewport:bt,reset:pe}}function wx(o,t,e,n,i,s,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):_r("canvas")}function _(R,S,H){let et=1;const it=Pt(R);if((it.width>H||it.height>H)&&(et=H/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(et*it.width),Mt=Math.floor(et*it.height);h===void 0&&(h=g(Q,Mt));const ut=S?g(Q,Mt):h;return ut.width=Q,ut.height=Mt,ut.getContext("2d").drawImage(R,0,0,Q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Mt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){o.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?o.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function v(R,S,H,et,it=!1){if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===o.RED&&(H===o.FLOAT&&(Q=o.R32F),H===o.HALF_FLOAT&&(Q=o.R16F),H===o.UNSIGNED_BYTE&&(Q=o.R8)),S===o.RED_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.R8UI),H===o.UNSIGNED_SHORT&&(Q=o.R16UI),H===o.UNSIGNED_INT&&(Q=o.R32UI),H===o.BYTE&&(Q=o.R8I),H===o.SHORT&&(Q=o.R16I),H===o.INT&&(Q=o.R32I)),S===o.RG&&(H===o.FLOAT&&(Q=o.RG32F),H===o.HALF_FLOAT&&(Q=o.RG16F),H===o.UNSIGNED_BYTE&&(Q=o.RG8)),S===o.RG_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RG8UI),H===o.UNSIGNED_SHORT&&(Q=o.RG16UI),H===o.UNSIGNED_INT&&(Q=o.RG32UI),H===o.BYTE&&(Q=o.RG8I),H===o.SHORT&&(Q=o.RG16I),H===o.INT&&(Q=o.RG32I)),S===o.RGB_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RGB8UI),H===o.UNSIGNED_SHORT&&(Q=o.RGB16UI),H===o.UNSIGNED_INT&&(Q=o.RGB32UI),H===o.BYTE&&(Q=o.RGB8I),H===o.SHORT&&(Q=o.RGB16I),H===o.INT&&(Q=o.RGB32I)),S===o.RGBA_INTEGER&&(H===o.UNSIGNED_BYTE&&(Q=o.RGBA8UI),H===o.UNSIGNED_SHORT&&(Q=o.RGBA16UI),H===o.UNSIGNED_INT&&(Q=o.RGBA32UI),H===o.BYTE&&(Q=o.RGBA8I),H===o.SHORT&&(Q=o.RGBA16I),H===o.INT&&(Q=o.RGBA32I)),S===o.RGB&&H===o.UNSIGNED_INT_5_9_9_9_REV&&(Q=o.RGB9_E5),S===o.RGBA){const Mt=it?Ea:Qt.getTransfer(et);H===o.FLOAT&&(Q=o.RGBA32F),H===o.HALF_FLOAT&&(Q=o.RGBA16F),H===o.UNSIGNED_BYTE&&(Q=Mt===he?o.SRGB8_ALPHA8:o.RGBA8),H===o.UNSIGNED_SHORT_4_4_4_4&&(Q=o.RGBA4),H===o.UNSIGNED_SHORT_5_5_5_1&&(Q=o.RGB5_A1)}return(Q===o.R16F||Q===o.R32F||Q===o.RG16F||Q===o.RG32F||Q===o.RGBA16F||Q===o.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(R,S){let H;return R?S===null||S===Yi||S===Ls?H=o.DEPTH24_STENCIL8:S===On?H=o.DEPTH32F_STENCIL8:S===pr&&(H=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===Ls?H=o.DEPTH_COMPONENT24:S===On?H=o.DEPTH_COMPONENT32F:S===pr&&(H=o.DEPTH_COMPONENT16),H}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==We&&R.minFilter!==Se?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){const S=R.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),M(S)}function I(R){const S=n.get(R);if(S.__webglInit===void 0)return;const H=R.source,et=d.get(H);if(et){const it=et[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(R),Object.keys(et).length===0&&d.delete(H)}n.remove(R)}function T(R){const S=n.get(R);o.deleteTexture(S.__webglTexture);const H=R.source,et=d.get(H);delete et[S.__cacheKey],r.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(S.__webglFramebuffer[et]))for(let it=0;it<S.__webglFramebuffer[et].length;it++)o.deleteFramebuffer(S.__webglFramebuffer[et][it]);else o.deleteFramebuffer(S.__webglFramebuffer[et]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[et])}else{if(Array.isArray(S.__webglFramebuffer))for(let et=0;et<S.__webglFramebuffer.length;et++)o.deleteFramebuffer(S.__webglFramebuffer[et]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let et=0;et<S.__webglColorRenderbuffer.length;et++)S.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[et]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let et=0,it=H.length;et<it;et++){const Q=n.get(H[et]);Q.__webglTexture&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(H[et])}n.remove(R)}let P=0;function F(){P=0}function O(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function K(R,S){const H=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(H,R,S);return}}e.bindTexture(o.TEXTURE_2D,H.__webglTexture,o.TEXTURE0+S)}function j(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){C(H,R,S);return}e.bindTexture(o.TEXTURE_2D_ARRAY,H.__webglTexture,o.TEXTURE0+S)}function ct(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){C(H,R,S);return}e.bindTexture(o.TEXTURE_3D,H.__webglTexture,o.TEXTURE0+S)}function q(R,S){const H=n.get(R);if(R.version>0&&H.__version!==R.version){k(H,R,S);return}e.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+S)}const V={[ze]:o.REPEAT,[xn]:o.CLAMP_TO_EDGE,[Ta]:o.MIRRORED_REPEAT},at={[We]:o.NEAREST,[Gu]:o.NEAREST_MIPMAP_NEAREST,[lr]:o.NEAREST_MIPMAP_LINEAR,[Se]:o.LINEAR,[ma]:o.LINEAR_MIPMAP_NEAREST,[ke]:o.LINEAR_MIPMAP_LINEAR},ot={[xf]:o.NEVER,[bf]:o.ALWAYS,[yf]:o.LESS,[ed]:o.LEQUAL,[vf]:o.EQUAL,[Tf]:o.GEQUAL,[Mf]:o.GREATER,[Sf]:o.NOTEQUAL};function st(R,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Se||S.magFilter===ma||S.magFilter===lr||S.magFilter===ke||S.minFilter===Se||S.minFilter===ma||S.minFilter===lr||S.minFilter===ke)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(R,o.TEXTURE_WRAP_S,V[S.wrapS]),o.texParameteri(R,o.TEXTURE_WRAP_T,V[S.wrapT]),(R===o.TEXTURE_3D||R===o.TEXTURE_2D_ARRAY)&&o.texParameteri(R,o.TEXTURE_WRAP_R,V[S.wrapR]),o.texParameteri(R,o.TEXTURE_MAG_FILTER,at[S.magFilter]),o.texParameteri(R,o.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(o.texParameteri(R,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(R,o.TEXTURE_COMPARE_FUNC,ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===We||S.minFilter!==lr&&S.minFilter!==ke||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");o.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Rt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const et=S.source;let it=d.get(et);it===void 0&&(it={},d.set(et,it));const Q=Y(S);if(Q!==R.__cacheKey){it[Q]===void 0&&(it[Q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[Q].usedTimes++;const Mt=it[R.__cacheKey];Mt!==void 0&&(it[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(S)),R.__cacheKey=Q,R.__webglTexture=it[Q].texture}return H}function C(R,S,H){let et=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(et=o.TEXTURE_3D);const it=Rt(R,S),Q=S.source;e.bindTexture(et,R.__webglTexture,o.TEXTURE0+H);const Mt=n.get(Q);if(Q.version!==Mt.__version||it===!0){e.activeTexture(o.TEXTURE0+H);const ut=Qt.getPrimaries(Qt.workingColorSpace),lt=S.colorSpace===Ci?null:Qt.getPrimaries(S.colorSpace),Tt=S.colorSpace===Ci||ut===lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let tt=_(S.image,!1,i.maxTextureSize);tt=Nt(S,tt);const pt=s.convert(S.format,S.colorSpace),yt=s.convert(S.type);let kt=v(S.internalFormat,pt,yt,S.colorSpace,S.isVideoTexture);st(et,S);let bt;const te=S.mipmaps,jt=S.isVideoTexture!==!0,pe=Mt.__version===void 0||it===!0,U=Q.dataReady,gt=A(S,tt);if(S.isDepthTexture)kt=y(S.format===Ns,S.type),pe&&(jt?e.texStorage2D(o.TEXTURE_2D,1,kt,tt.width,tt.height):e.texImage2D(o.TEXTURE_2D,0,kt,tt.width,tt.height,0,pt,yt,null));else if(S.isDataTexture)if(te.length>0){jt&&pe&&e.texStorage2D(o.TEXTURE_2D,gt,kt,te[0].width,te[0].height);for(let $=0,rt=te.length;$<rt;$++)bt=te[$],jt?U&&e.texSubImage2D(o.TEXTURE_2D,$,0,0,bt.width,bt.height,pt,yt,bt.data):e.texImage2D(o.TEXTURE_2D,$,kt,bt.width,bt.height,0,pt,yt,bt.data);S.generateMipmaps=!1}else jt?(pe&&e.texStorage2D(o.TEXTURE_2D,gt,kt,tt.width,tt.height),U&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,yt,tt.data)):e.texImage2D(o.TEXTURE_2D,0,kt,tt.width,tt.height,0,pt,yt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&pe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,gt,kt,te[0].width,te[0].height,tt.depth);for(let $=0,rt=te.length;$<rt;$++)if(bt=te[$],S.format!==bn)if(pt!==null)if(jt){if(U)if(S.layerUpdates.size>0){const vt=$c(bt.width,bt.height,S.format,S.type);for(const xt of S.layerUpdates){const qt=bt.data.subarray(xt*vt/bt.data.BYTES_PER_ELEMENT,(xt+1)*vt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,xt,bt.width,bt.height,1,pt,qt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,tt.depth,pt,bt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,$,kt,bt.width,bt.height,tt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?U&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,bt.width,bt.height,tt.depth,pt,yt,bt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,$,kt,bt.width,bt.height,tt.depth,0,pt,yt,bt.data)}else{jt&&pe&&e.texStorage2D(o.TEXTURE_2D,gt,kt,te[0].width,te[0].height);for(let $=0,rt=te.length;$<rt;$++)bt=te[$],S.format!==bn?pt!==null?jt?U&&e.compressedTexSubImage2D(o.TEXTURE_2D,$,0,0,bt.width,bt.height,pt,bt.data):e.compressedTexImage2D(o.TEXTURE_2D,$,kt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?U&&e.texSubImage2D(o.TEXTURE_2D,$,0,0,bt.width,bt.height,pt,yt,bt.data):e.texImage2D(o.TEXTURE_2D,$,kt,bt.width,bt.height,0,pt,yt,bt.data)}else if(S.isDataArrayTexture)if(jt){if(pe&&e.texStorage3D(o.TEXTURE_2D_ARRAY,gt,kt,tt.width,tt.height,tt.depth),U)if(S.layerUpdates.size>0){const $=$c(tt.width,tt.height,S.format,S.type);for(const rt of S.layerUpdates){const vt=tt.data.subarray(rt*$/tt.data.BYTES_PER_ELEMENT,(rt+1)*$/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,rt,tt.width,tt.height,1,pt,yt,vt)}S.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,yt,tt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,tt.width,tt.height,tt.depth,0,pt,yt,tt.data);else if(S.isData3DTexture)jt?(pe&&e.texStorage3D(o.TEXTURE_3D,gt,kt,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,yt,tt.data)):e.texImage3D(o.TEXTURE_3D,0,kt,tt.width,tt.height,tt.depth,0,pt,yt,tt.data);else if(S.isFramebufferTexture){if(pe)if(jt)e.texStorage2D(o.TEXTURE_2D,gt,kt,tt.width,tt.height);else{let $=tt.width,rt=tt.height;for(let vt=0;vt<gt;vt++)e.texImage2D(o.TEXTURE_2D,vt,kt,$,rt,0,pt,yt,null),$>>=1,rt>>=1}}else if(te.length>0){if(jt&&pe){const $=Pt(te[0]);e.texStorage2D(o.TEXTURE_2D,gt,kt,$.width,$.height)}for(let $=0,rt=te.length;$<rt;$++)bt=te[$],jt?U&&e.texSubImage2D(o.TEXTURE_2D,$,0,0,pt,yt,bt):e.texImage2D(o.TEXTURE_2D,$,kt,pt,yt,bt);S.generateMipmaps=!1}else if(jt){if(pe){const $=Pt(tt);e.texStorage2D(o.TEXTURE_2D,gt,kt,$.width,$.height)}U&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,pt,yt,tt)}else e.texImage2D(o.TEXTURE_2D,0,kt,pt,yt,tt);m(S)&&p(et),Mt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function k(R,S,H){if(S.image.length!==6)return;const et=Rt(R,S),it=S.source;e.bindTexture(o.TEXTURE_CUBE_MAP,R.__webglTexture,o.TEXTURE0+H);const Q=n.get(it);if(it.version!==Q.__version||et===!0){e.activeTexture(o.TEXTURE0+H);const Mt=Qt.getPrimaries(Qt.workingColorSpace),ut=S.colorSpace===Ci?null:Qt.getPrimaries(S.colorSpace),lt=S.colorSpace===Ci||Mt===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!Tt&&!tt?pt[rt]=_(S.image[rt],!0,i.maxCubemapSize):pt[rt]=tt?S.image[rt].image:S.image[rt],pt[rt]=Nt(S,pt[rt]);const yt=pt[0],kt=s.convert(S.format,S.colorSpace),bt=s.convert(S.type),te=v(S.internalFormat,kt,bt,S.colorSpace),jt=S.isVideoTexture!==!0,pe=Q.__version===void 0||et===!0,U=it.dataReady;let gt=A(S,yt);st(o.TEXTURE_CUBE_MAP,S);let $;if(Tt){jt&&pe&&e.texStorage2D(o.TEXTURE_CUBE_MAP,gt,te,yt.width,yt.height);for(let rt=0;rt<6;rt++){$=pt[rt].mipmaps;for(let vt=0;vt<$.length;vt++){const xt=$[vt];S.format!==bn?kt!==null?jt?U&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,xt.width,xt.height,kt,xt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,te,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?U&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,xt.width,xt.height,kt,bt,xt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,te,xt.width,xt.height,0,kt,bt,xt.data)}}}else{if($=S.mipmaps,jt&&pe){$.length>0&&gt++;const rt=Pt(pt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,gt,te,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(tt){jt?U&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,kt,bt,pt[rt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,pt[rt].width,pt[rt].height,0,kt,bt,pt[rt].data);for(let vt=0;vt<$.length;vt++){const qt=$[vt].image[rt].image;jt?U&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,qt.width,qt.height,kt,bt,qt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,te,qt.width,qt.height,0,kt,bt,qt.data)}}else{jt?U&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,bt,pt[rt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,kt,bt,pt[rt]);for(let vt=0;vt<$.length;vt++){const xt=$[vt];jt?U&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,kt,bt,xt.image[rt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,te,kt,bt,xt.image[rt])}}}m(S)&&p(o.TEXTURE_CUBE_MAP),Q.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Z(R,S,H,et,it,Q){const Mt=s.convert(H.format,H.colorSpace),ut=s.convert(H.type),lt=v(H.internalFormat,Mt,ut,H.colorSpace),Tt=n.get(S),tt=n.get(H);if(tt.__renderTarget=S,!Tt.__hasExternalTextures){const pt=Math.max(1,S.width>>Q),yt=Math.max(1,S.height>>Q);it===o.TEXTURE_3D||it===o.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,lt,pt,yt,S.depth,0,Mt,ut,null):e.texImage2D(it,Q,lt,pt,yt,0,Mt,ut,null)}e.bindFramebuffer(o.FRAMEBUFFER,R),zt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,et,it,tt.__webglTexture,0,Wt(S)):(it===o.TEXTURE_2D||it>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,et,it,tt.__webglTexture,Q),e.bindFramebuffer(o.FRAMEBUFFER,null)}function N(R,S,H){if(o.bindRenderbuffer(o.RENDERBUFFER,R),S.depthBuffer){const et=S.depthTexture,it=et&&et.isDepthTexture?et.type:null,Q=y(S.stencilBuffer,it),Mt=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=Wt(S);zt(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Q,S.width,S.height):H?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Q,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,Q,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,R)}else{const et=S.textures;for(let it=0;it<et.length;it++){const Q=et[it],Mt=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),lt=v(Q.internalFormat,Mt,ut,Q.colorSpace),Tt=Wt(S);H&&zt(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,lt,S.width,S.height):zt(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,lt,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,lt,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function G(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(S.depthTexture);et.__renderTarget=S,(!et.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const it=et.__webglTexture,Q=Wt(S);if(S.depthTexture.format===ws)zt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0,Q):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,it,0);else if(S.depthTexture.format===Ns)zt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0,Q):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function J(R){const S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const et=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),et){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=et}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]===void 0)S.__webglDepthbuffer[et]=o.createRenderbuffer(),N(S.__webglDepthbuffer[et],R,!1);else{const it=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[et];o.bindRenderbuffer(o.RENDERBUFFER,Q),o.framebufferRenderbuffer(o.FRAMEBUFFER,it,o.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=o.createRenderbuffer(),N(S.__webglDepthbuffer,R,!1);else{const et=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,it),o.framebufferRenderbuffer(o.FRAMEBUFFER,et,o.RENDERBUFFER,it)}e.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(R,S,H){const et=n.get(R);S!==void 0&&Z(et.__webglFramebuffer,R,R.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),H!==void 0&&J(R)}function Ct(R){const S=R.texture,H=n.get(R),et=n.get(S);R.addEventListener("dispose",w);const it=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Mt=it.length>1;if(Mt||(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=S.version,r.memory.textures++),Q){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let lt=0;lt<S.mipmaps.length;lt++)H.__webglFramebuffer[ut][lt]=o.createFramebuffer()}else H.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)H.__webglFramebuffer[ut]=o.createFramebuffer()}else H.__webglFramebuffer=o.createFramebuffer();if(Mt)for(let ut=0,lt=it.length;ut<lt;ut++){const Tt=n.get(it[ut]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=o.createTexture(),r.memory.textures++)}if(R.samples>0&&zt(R)===!1){H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const lt=it[ut];H.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Tt=s.convert(lt.format,lt.colorSpace),tt=s.convert(lt.type),pt=v(lt.internalFormat,Tt,tt,lt.colorSpace,R.isXRRenderTarget===!0),yt=Wt(R);o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,pt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ut,o.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),N(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Q){e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture),st(o.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)Z(H.__webglFramebuffer[ut][lt],R,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,lt);else Z(H.__webglFramebuffer[ut],R,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ut=0,lt=it.length;ut<lt;ut++){const Tt=it[ut],tt=n.get(Tt);e.bindTexture(o.TEXTURE_2D,tt.__webglTexture),st(o.TEXTURE_2D,Tt),Z(H.__webglFramebuffer,R,Tt,o.COLOR_ATTACHMENT0+ut,o.TEXTURE_2D,0),m(Tt)&&p(o.TEXTURE_2D)}e.unbindTexture()}else{let ut=o.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),st(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let lt=0;lt<S.mipmaps.length;lt++)Z(H.__webglFramebuffer[lt],R,S,o.COLOR_ATTACHMENT0,ut,lt);else Z(H.__webglFramebuffer,R,S,o.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}R.depthBuffer&&J(R)}function Ot(R){const S=R.textures;for(let H=0,et=S.length;H<et;H++){const it=S[H];if(m(it)){const Q=x(R),Mt=n.get(it).__webglTexture;e.bindTexture(Q,Mt),p(Q),e.unbindTexture()}}}const le=[],L=[];function Re(R){if(R.samples>0){if(zt(R)===!1){const S=R.textures,H=R.width,et=R.height;let it=o.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=n.get(R),ut=S.length>1;if(ut)for(let lt=0;lt<S.length;lt++)e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+lt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+lt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=o.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=o.STENCIL_BUFFER_BIT)),ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Tt=n.get(S[lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,H,et,0,0,H,et,it,o.NEAREST),l===!0&&(le.length=0,L.length=0,le.push(o.COLOR_ATTACHMENT0+lt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(le.push(Q),L.push(Q),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,L)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ut)for(let lt=0;lt<S.length;lt++){e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+lt,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[lt]);const Tt=n.get(S[lt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+lt,o.TEXTURE_2D,Tt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function Wt(R){return Math.min(i.maxSamples,R.samples)}function zt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function It(R){const S=r.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Nt(R,S){const H=R.colorSpace,et=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==an&&H!==Ci&&(Qt.getTransfer(H)===he?(et!==bn||it!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=ct,this.setTextureCube=q,this.rebindTextures=ht,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=zt}function Rx(o,t){function e(n,i=Ci){let s;const r=Qt.getTransfer(i);if(n===gi)return o.UNSIGNED_BYTE;if(n===Al)return o.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return o.BYTE;if(n===Wu)return o.SHORT;if(n===pr)return o.UNSIGNED_SHORT;if(n===El)return o.INT;if(n===Yi)return o.UNSIGNED_INT;if(n===On)return o.FLOAT;if(n===fi)return o.HALF_FLOAT;if(n===qu)return o.ALPHA;if(n===Yu)return o.RGB;if(n===bn)return o.RGBA;if(n===ju)return o.LUMINANCE;if(n===Zu)return o.LUMINANCE_ALPHA;if(n===ws)return o.DEPTH_COMPONENT;if(n===Ns)return o.DEPTH_STENCIL;if(n===Rl)return o.RED;if(n===Cl)return o.RED_INTEGER;if(n===Ku)return o.RG;if(n===Il)return o.RG_INTEGER;if(n===Pl)return o.RGBA_INTEGER;if(n===ga||n===_a||n===xa||n===ya)if(r===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Ho||n===Go||n===Vo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ko)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wo||n===Xo)return r===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===jo||n===Zo||n===Ko||n===$o||n===Qo||n===Jo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return r===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va||n===ol||n===ll)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===va)return r===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===cl||n===hl||n===ul)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===va)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}const Cx={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Je({vertexShader:Ix,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lx extends Zi{constructor(t,e){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new Dx,m=e.getContextAttributes();let p=null,x=null;const v=[],y=[],A=new wt;let E=null;const w=new ln;w.viewport=new ie;const I=new ln;I.viewport=new ie;const T=[w,I],M=new Hp;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let k=v[C];return k===void 0&&(k=new xo,v[C]=k),k.getTargetRaySpace()},this.getControllerGrip=function(C){let k=v[C];return k===void 0&&(k=new xo,v[C]=k),k.getGripSpace()},this.getHand=function(C){let k=v[C];return k===void 0&&(k=new xo,v[C]=k),k.getHandSpace()};function O(C){const k=y.indexOf(C.inputSource);if(k===-1)return;const Z=v[k];Z!==void 0&&(Z.update(C.inputSource,C.frame,c||r),Z.dispatchEvent({type:C.type,data:C.inputSource}))}function Y(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",K);for(let C=0;C<v.length;C++){const k=y[C];k!==null&&(y[C]=null,v[C].disconnect(k))}P=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(C){if(i=C,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Z=null,N=null,G=null;m.depth&&(G=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Ns:ws,N=m.stencil?Ls:Yi);const J={colorFormat:e.RGBA8,depthFormat:G,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(J),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new zn(d.textureWidth,d.textureHeight,{format:bn,type:gi,depthTexture:new xd(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(C){for(let k=0;k<C.removed.length;k++){const Z=C.removed[k],N=y.indexOf(Z);N>=0&&(y[N]=null,v[N].disconnect(Z))}for(let k=0;k<C.added.length;k++){const Z=C.added[k];let N=y.indexOf(Z);if(N===-1){for(let J=0;J<v.length;J++)if(J>=y.length){y.push(Z),N=J;break}else if(y[J]===null){y[J]=Z,N=J;break}if(N===-1)break}const G=v[N];G&&G.connect(Z)}}const j=new D,ct=new D;function q(C,k,Z){j.setFromMatrixPosition(k.matrixWorld),ct.setFromMatrixPosition(Z.matrixWorld);const N=j.distanceTo(ct),G=k.projectionMatrix.elements,J=Z.projectionMatrix.elements,ht=G[14]/(G[10]-1),Ct=G[14]/(G[10]+1),Ot=(G[9]+1)/G[5],le=(G[9]-1)/G[5],L=(G[8]-1)/G[0],Re=(J[8]+1)/J[0],Wt=ht*L,zt=ht*Re,It=N/(-L+Re),Nt=It*-L;if(k.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Nt),C.translateZ(It),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),G[10]===-1)C.projectionMatrix.copy(k.projectionMatrix),C.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Pt=ht+It,R=Ct+It,S=Wt-Nt,H=zt+(N-Nt),et=Ot*Ct/R*Pt,it=le*Ct/R*Pt;C.projectionMatrix.makePerspective(S,H,et,it,Pt,R),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function V(C,k){k===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(k.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(i===null)return;let k=C.near,Z=C.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),M.near=I.near=w.near=k,M.far=I.far=w.far=Z,(P!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,F=M.far),w.layers.mask=C.layers.mask|2,I.layers.mask=C.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const N=C.parent,G=M.cameras;V(M,N);for(let J=0;J<G.length;J++)V(G[J],N);G.length===2?q(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),at(C,M,N)};function at(C,k,Z){Z===null?C.matrix.copy(k.matrixWorld):(C.matrix.copy(Z.matrixWorld),C.matrix.invert(),C.matrix.multiply(k.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(k.projectionMatrix),C.projectionMatrixInverse.copy(k.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Fs*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(C){l=C,d!==null&&(d.fixedFoveation=C),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=C)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ot=null;function st(C,k){if(u=k.getViewerPose(c||r),g=k,u!==null){const Z=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let N=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,N=!0);for(let J=0;J<Z.length;J++){const ht=Z[J];let Ct=null;if(f!==null)Ct=f.getViewport(ht);else{const le=h.getViewSubImage(d,ht);Ct=le.viewport,J===0&&(t.setRenderTargetTextures(x,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(x))}let Ot=T[J];Ot===void 0&&(Ot=new ln,Ot.layers.enable(J),Ot.viewport=new ie,T[J]=Ot),Ot.matrix.fromArray(ht.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ht.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),J===0&&(M.matrix.copy(Ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),N===!0&&M.cameras.push(Ot)}const G=i.enabledFeatures;if(G&&G.includes("depth-sensing")){const J=h.getDepthInformation(Z[0]);J&&J.isValid&&J.texture&&_.init(t,J,i.renderState)}}for(let Z=0;Z<v.length;Z++){const N=y[Z],G=v[Z];N!==null&&G!==void 0&&G.update(N,k,c||r)}ot&&ot(C,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const Rt=new Td;Rt.setAnimationLoop(st),this.setAnimationLoop=function(C){ot=C},this.dispose=function(){}}}const Hi=new qn,Nx=new Vt;function Fx(o,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,Hi.copy(y),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Hi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ux(o,t,e,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const E=t.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function u(x){const v=h();x.__bindingPointIndex=v;const y=o.createBuffer(),A=x.__size,E=x.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,A,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,A=x.__cache;o.bindBuffer(o.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,M=I.length;T<M;T++){const P=I[T];if(f(P,E,T,A)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let K=0;K<O.length;K++){const j=O[K],ct=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,F+Y,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,Y),Y+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,F,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(x,v,y,A){const E=x.value,w=v+"_"+y;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{const I=A[w];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[w]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(x){const v=x.uniforms;let y=0;const A=16;for(let w=0,I=v.length;w<I;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,P=T.length;M<P;M++){const F=T[M],O=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,K=O.length;Y<K;Y++){const j=O[Y],ct=_(j),q=y%A,V=q%ct.boundary,at=q+V;y+=V,at!==0&&A-at<ct.storage&&(y+=A-at),F.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ct.storage}}}const E=y%A;return E>0&&(y+=A-E),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)o.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ox{constructor(t={}){const{canvas:e=Gf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Li,this.toneMappingExposure=1;const y=this;let A=!1,E=0,w=0,I=null,T=-1,M=null;const P=new ie,F=new ie;let O=null;const Y=new Dt(0);let K=0,j=e.width,ct=e.height,q=1,V=null,at=null;const ot=new ie(0,0,j,ct),st=new ie(0,0,j,ct);let Rt=!1;const C=new Ol;let k=!1,Z=!1;this.transmissionResolutionScale=1;const N=new Vt,G=new Vt,J=new D,ht=new ie,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function le(){return I===null?q:1}let L=n;function Re(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),L===null){const B="webgl2";if(L=Re(B,b),L===null)throw Re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,zt,It,Nt,Pt,R,S,H,et,it,Q,Mt,ut,lt,Tt,tt,pt,yt,kt,bt,te,jt,pe,U;function gt(){Wt=new q0(L),Wt.init(),jt=new Rx(L,Wt),zt=new k0(L,Wt,t,jt),It=new Ax(L,Wt),zt.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Nt=new Z0(L),Pt=new fx,R=new wx(L,Wt,It,Pt,zt,jt,Nt),S=new G0(y),H=new X0(y),et=new nm(L),pe=new B0(L,et),it=new Y0(L,et,Nt,pe),Q=new $0(L,it,et,Nt),kt=new K0(L,zt,R),tt=new H0(Pt),Mt=new dx(y,S,H,Wt,zt,pe,tt),ut=new Fx(y,Pt),lt=new mx,Tt=new Mx(Wt),yt=new O0(y,S,H,It,Q,f,l),pt=new bx(y,Q,zt),U=new Ux(L,Nt,zt,It),bt=new z0(L,Wt,Nt),te=new j0(L,Wt,Nt),Nt.programs=Mt.programs,y.capabilities=zt,y.extensions=Wt,y.properties=Pt,y.renderLists=lt,y.shadowMap=pt,y.state=It,y.info=Nt}gt();const $=new Lx(y,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(j,ct,!1))},this.getSize=function(b){return b.set(j,ct)},this.setSize=function(b,B,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,ct=B,e.width=Math.floor(b*q),e.height=Math.floor(B*q),W===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(j*q,ct*q).floor()},this.setDrawingBufferSize=function(b,B,W){j=b,ct=B,q=W,e.width=Math.floor(b*W),e.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,B,W,X){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,B,W,X),It.viewport(P.copy(ot).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,B,W,X){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,B,W,X),It.scissor(F.copy(st).multiplyScalar(q).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(b){It.setScissorTest(Rt=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(b=!0,B=!0,W=!0){let X=0;if(b){let z=!1;if(I!==null){const dt=I.texture.format;z=dt===Pl||dt===Il||dt===Cl}if(z){const dt=I.texture.type,_t=dt===gi||dt===Yi||dt===pr||dt===Ls||dt===Al||dt===wl,St=yt.getClearColor(),Et=yt.getClearAlpha(),Ht=St.r,Gt=St.g,Ft=St.b;_t?(g[0]=Ht,g[1]=Gt,g[2]=Ft,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ht,_[1]=Gt,_[2]=Ft,_[3]=Et,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),yt.dispose(),lt.dispose(),Tt.dispose(),Pt.dispose(),S.dispose(),H.dispose(),Q.dispose(),pe.dispose(),U.dispose(),Mt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Zl),$.removeEventListener("sessionend",Kl),Ni.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=Nt.autoReset,B=pt.enabled,W=pt.autoUpdate,X=pt.needsUpdate,z=pt.type;gt(),Nt.autoReset=b,pt.enabled=B,pt.autoUpdate=W,pt.needsUpdate=X,pt.type=z}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const B=b.target;B.removeEventListener("dispose",qt),be(B)}function be(b){qe(b),Pt.remove(b)}function qe(b){const B=Pt.get(b).programs;B!==void 0&&(B.forEach(function(W){Mt.releaseProgram(W)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,X,z,dt){B===null&&(B=Ct);const _t=z.isMesh&&z.matrixWorld.determinant()<0,St=Ld(b,B,W,X,z);It.setMaterial(X,_t);let Et=W.index,Ht=1;if(X.wireframe===!0){if(Et=it.getWireframeAttribute(W),Et===void 0)return;Ht=2}const Gt=W.drawRange,Ft=W.attributes.position;let ee=Gt.start*Ht,se=(Gt.start+Gt.count)*Ht;dt!==null&&(ee=Math.max(ee,dt.start*Ht),se=Math.min(se,(dt.start+dt.count)*Ht)),Et!==null?(ee=Math.max(ee,0),se=Math.min(se,Et.count)):Ft!=null&&(ee=Math.max(ee,0),se=Math.min(se,Ft.count));const Ce=se-ee;if(Ce<0||Ce===1/0)return;pe.setup(z,X,St,W,Et);let Ee,ne=bt;if(Et!==null&&(Ee=et.get(Et),ne=te,ne.setIndex(Ee)),z.isMesh)X.wireframe===!0?(It.setLineWidth(X.wireframeLinewidth*le()),ne.setMode(L.LINES)):ne.setMode(L.TRIANGLES);else if(z.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*le()),z.isLineSegments?ne.setMode(L.LINES):z.isLineLoop?ne.setMode(L.LINE_LOOP):ne.setMode(L.LINE_STRIP)}else z.isPoints?ne.setMode(L.POINTS):z.isSprite&&ne.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ne.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ne.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ut=z._multiDrawStarts,Be=z._multiDrawCounts,re=z._multiDrawCount,Rn=Et?et.get(Et).bytesPerElement:1,Ki=Pt.get(X).currentProgram.getUniforms();for(let dn=0;dn<re;dn++)Ki.setValue(L,"_gl_DrawID",dn),ne.render(Ut[dn]/Rn,Be[dn])}else if(z.isInstancedMesh)ne.renderInstances(ee,Ce,z.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Be=Math.min(W.instanceCount,Ut);ne.renderInstances(ee,Ce,Be)}else ne.render(ee,Ce)};function ce(b,B,W){b.transparent===!0&&b.side===Le&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Ir(b,B,W),b.side=Hn,b.needsUpdate=!0,Ir(b,B,W),b.side=Le):Ir(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),p=Tt.get(W),p.init(B),v.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==W&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let _t=0;_t<dt.length;_t++){const St=dt[_t];ce(St,W,z),X.add(St)}else ce(dt,W,z),X.add(dt)}),v.pop(),p=null,X},this.compileAsync=function(b,B,W=null){const X=this.compile(b,B,W);return new Promise(z=>{function dt(){if(X.forEach(function(_t){Pt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){z(b);return}setTimeout(dt,10)}Wt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let wn=null;function $n(b){wn&&wn(b)}function Zl(){Ni.stop()}function Kl(){Ni.start()}const Ni=new Td;Ni.setAnimationLoop($n),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(b){wn=b,$.setAnimationLoop(b),b===null?Ni.stop():Ni.start()},$.addEventListener("sessionstart",Zl),$.addEventListener("sessionend",Kl),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,B,I),p=Tt.get(b,v.length),p.init(B),v.push(p),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),C.setFromProjectionMatrix(G),Z=this.localClippingEnabled,k=tt.init(this.clippingPlanes,Z),m=lt.get(b,x.length),m.init(),x.push(m),$.enabled===!0&&$.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&Fa(dt,B,-1/0,y.sortObjects)}Fa(b,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(V,at),Ot=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Ot&&yt.addToRenderList(m,b),this.info.render.frame++,k===!0&&tt.beginShadows();const W=p.state.shadowsArray;pt.render(W,b,B),k===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const dt=B.cameras;if(z.length>0)for(let _t=0,St=dt.length;_t<St;_t++){const Et=dt[_t];Ql(X,z,b,Et)}Ot&&yt.render(b);for(let _t=0,St=dt.length;_t<St;_t++){const Et=dt[_t];$l(m,b,Et,Et.viewport)}}else z.length>0&&Ql(X,z,b,B),Ot&&yt.render(b),$l(m,b,B);I!==null&&w===0&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(y,b,B),pe.resetDefaultState(),T=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],k===!0&&tt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Fa(b,B,W,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||C.intersectsSprite(b)){X&&ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(G);const _t=Q.update(b),St=b.material;St.visible&&m.push(b,_t,St,W,ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||C.intersectsObject(b))){const _t=Q.update(b),St=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ht.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ht.copy(_t.boundingSphere.center)),ht.applyMatrix4(b.matrixWorld).applyMatrix4(G)),Array.isArray(St)){const Et=_t.groups;for(let Ht=0,Gt=Et.length;Ht<Gt;Ht++){const Ft=Et[Ht],ee=St[Ft.materialIndex];ee&&ee.visible&&m.push(b,_t,ee,W,ht.z,Ft)}}else St.visible&&m.push(b,_t,St,W,ht.z,null)}}const dt=b.children;for(let _t=0,St=dt.length;_t<St;_t++)Fa(dt[_t],B,W,X)}function $l(b,B,W,X){const z=b.opaque,dt=b.transmissive,_t=b.transparent;p.setupLightsView(W),k===!0&&tt.setGlobalState(y.clippingPlanes,W),X&&It.viewport(P.copy(X)),z.length>0&&Cr(z,B,W),dt.length>0&&Cr(dt,B,W),_t.length>0&&Cr(_t,B,W),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ql(b,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new zn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?fi:gi,minFilter:ke,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[X.id],_t=X.viewport||P;dt.setSize(_t.z*y.transmissionResolutionScale,_t.w*y.transmissionResolutionScale);const St=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(Y),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ot&&yt.render(W);const Et=y.toneMapping;y.toneMapping=Li;const Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),k===!0&&tt.setGlobalState(y.clippingPlanes,X),Cr(b,W,X),R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ft=0,ee=B.length;Ft<ee;Ft++){const se=B[Ft],Ce=se.object,Ee=se.geometry,ne=se.material,Ut=se.group;if(ne.side===Le&&Ce.layers.test(X.layers)){const Be=ne.side;ne.side=un,ne.needsUpdate=!0,Jl(Ce,W,X,Ee,ne,Ut),ne.side=Be,ne.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt))}y.setRenderTarget(St),y.setClearColor(Y,K),Ht!==void 0&&(X.viewport=Ht),y.toneMapping=Et}function Cr(b,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,dt=b.length;z<dt;z++){const _t=b[z],St=_t.object,Et=_t.geometry,Ht=X===null?_t.material:X,Gt=_t.group;St.layers.test(W.layers)&&Jl(St,B,W,Et,Ht,Gt)}}function Jl(b,B,W,X,z,dt){b.onBeforeRender(y,B,W,X,z,dt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(y,B,W,X,b,dt),z.transparent===!0&&z.side===Le&&z.forceSinglePass===!1?(z.side=un,z.needsUpdate=!0,y.renderBufferDirect(W,B,X,z,b,dt),z.side=Hn,z.needsUpdate=!0,y.renderBufferDirect(W,B,X,z,b,dt),z.side=Le):y.renderBufferDirect(W,B,X,z,b,dt),b.onAfterRender(y,B,W,X,z,dt)}function Ir(b,B,W){B.isScene!==!0&&(B=Ct);const X=Pt.get(b),z=p.state.lights,dt=p.state.shadowsArray,_t=z.state.version,St=Mt.getParameters(b,z.state,dt,B,W),Et=Mt.getProgramCacheKey(St);let Ht=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",qt),Ht=new Map,X.programs=Ht);let Gt=Ht.get(Et);if(Gt!==void 0){if(X.currentProgram===Gt&&X.lightsStateVersion===_t)return ec(b,St),Gt}else St.uniforms=Mt.getUniforms(b),b.onBeforeCompile(St,y),Gt=Mt.acquireProgram(St,Et),Ht.set(Et,Gt),X.uniforms=St.uniforms;const Ft=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=tt.uniform),ec(b,St),X.needsLights=Fd(b),X.lightsStateVersion=_t,X.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Gt,X.uniformsList=null,Gt}function tc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Ma.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function ec(b,B){const W=Pt.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Ld(b,B,W,X,z){B.isScene!==!0&&(B=Ct),R.resetTextureUnits();const dt=B.fog,_t=X.isMeshStandardMaterial?B.environment:null,St=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:an,Et=(X.isMeshStandardMaterial?H:S).get(X.envMap||_t),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!W.morphAttributes.position,ee=!!W.morphAttributes.normal,se=!!W.morphAttributes.color;let Ce=Li;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ce=y.toneMapping);const Ee=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Ut=Pt.get(X),Be=p.state.lights;if(k===!0&&(Z===!0||b!==M)){const tn=b===M&&X.id===T;tt.setState(X,b,tn)}let re=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Be.state.version||Ut.outputColorSpace!==St||z.isBatchedMesh&&Ut.batching===!1||!z.isBatchedMesh&&Ut.batching===!0||z.isBatchedMesh&&Ut.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ut.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ut.instancing===!1||!z.isInstancedMesh&&Ut.instancing===!0||z.isSkinnedMesh&&Ut.skinning===!1||!z.isSkinnedMesh&&Ut.skinning===!0||z.isInstancedMesh&&Ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ut.instancingMorph===!1&&z.morphTexture!==null||Ut.envMap!==Et||X.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==tt.numPlanes||Ut.numIntersection!==tt.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Gt||Ut.morphTargets!==Ft||Ut.morphNormals!==ee||Ut.morphColors!==se||Ut.toneMapping!==Ce||Ut.morphTargetsCount!==ne)&&(re=!0):(re=!0,Ut.__version=X.version);let Rn=Ut.currentProgram;re===!0&&(Rn=Ir(X,B,z));let Ki=!1,dn=!1,Ys=!1;const Me=Rn.getUniforms(),yn=Ut.uniforms;if(It.useProgram(Rn.program)&&(Ki=!0,dn=!0,Ys=!0),X.id!==T&&(T=X.id,dn=!0),Ki||M!==b){It.buffers.depth.getReversed()?(N.copy(b.projectionMatrix),Wf(N),Xf(N),Me.setValue(L,"projectionMatrix",N)):Me.setValue(L,"projectionMatrix",b.projectionMatrix),Me.setValue(L,"viewMatrix",b.matrixWorldInverse);const on=Me.map.cameraPosition;on!==void 0&&on.setValue(L,J.setFromMatrixPosition(b.matrixWorld)),zt.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Me.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,dn=!0,Ys=!0)}if(z.isSkinnedMesh){Me.setOptional(L,z,"bindMatrix"),Me.setOptional(L,z,"bindMatrixInverse");const tn=z.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Me.setValue(L,"boneTexture",tn.boneTexture,R))}z.isBatchedMesh&&(Me.setOptional(L,z,"batchingTexture"),Me.setValue(L,"batchingTexture",z._matricesTexture,R),Me.setOptional(L,z,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",z._indirectTexture,R),Me.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",z._colorsTexture,R));const vn=W.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&kt.update(z,W,Rn),(dn||Ut.receiveShadow!==z.receiveShadow)&&(Ut.receiveShadow=z.receiveShadow,Me.setValue(L,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(yn.envMap.value=Et,yn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),dn&&(Me.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Nd(yn,Ys),dt&&X.fog===!0&&ut.refreshFogUniforms(yn,dt),ut.refreshMaterialUniforms(yn,X,q,ct,p.state.transmissionRenderTarget[b.id]),Ma.upload(L,tc(Ut),yn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ma.upload(L,tc(Ut),yn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Me.setValue(L,"center",z.center),Me.setValue(L,"modelViewMatrix",z.modelViewMatrix),Me.setValue(L,"normalMatrix",z.normalMatrix),Me.setValue(L,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tn=X.uniformsGroups;for(let on=0,Ua=tn.length;on<Ua;on++){const Fi=tn[on];U.update(Fi,Rn),U.bind(Fi,Rn)}}return Rn}function Nd(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Fd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,B,W){Pt.get(b.texture).__webglTexture=B,Pt.get(b.depthTexture).__webglTexture=W;const X=Pt.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const W=Pt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0};const Ud=L.createFramebuffer();this.setRenderTarget=function(b,B=0,W=0){I=b,E=B,w=W;let X=!0,z=null,dt=!1,_t=!1;if(b){const Et=Pt.get(b);if(Et.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Et.__hasExternalTextures)R.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(Et.__boundDepthTexture!==Ft){if(Ft!==null&&Pt.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(_t=!0);const Gt=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?z=Gt[B][W]:z=Gt[B],dt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[W]:z=Gt,P.copy(b.viewport),F.copy(b.scissor),O=b.scissorTest}else P.copy(ot).multiplyScalar(q).floor(),F.copy(st).multiplyScalar(q).floor(),O=Rt;if(W!==0&&(z=Ud),It.bindFramebuffer(L.FRAMEBUFFER,z)&&X&&It.drawBuffers(b,z),It.viewport(P),It.scissor(F),It.setScissorTest(O),dt){const Et=Pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,W)}else if(_t){const Et=Pt.get(b.texture),Ht=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,W,Ht)}else if(b!==null&&W!==0){const Et=Pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(b,B,W,X,z,dt,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){It.bindFramebuffer(L.FRAMEBUFFER,St);try{const Et=b.texture,Ht=Et.format,Gt=Et.type;if(!zt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&W>=0&&W<=b.height-z&&L.readPixels(B,W,X,z,jt.convert(Ht),jt.convert(Gt),dt)}finally{const Et=I!==null?Pt.get(I).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,B,W,X,z,dt,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){const Et=b.texture,Ht=Et.format,Gt=Et.type;if(!zt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-X&&W>=0&&W<=b.height-z){It.bindFramebuffer(L.FRAMEBUFFER,St);const Ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(B,W,X,z,jt.convert(Ht),jt.convert(Gt),0);const ee=I!==null?Pt.get(I).__webglFramebuffer:null;It.bindFramebuffer(L.FRAMEBUFFER,ee);const se=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Vf(L,se,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Ft),L.deleteSync(se),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,W=0){b.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(b.image.width*X),dt=Math.floor(b.image.height*X),_t=B!==null?B.x:0,St=B!==null?B.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,_t,St,z,dt),It.unbindTexture()};const Od=L.createFramebuffer(),Bd=L.createFramebuffer();this.copyTextureToTexture=function(b,B,W=null,X=null,z=0,dt=null){b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],B=arguments[2],dt=arguments[3]||0,W=null),dt===null&&(z!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=z,z=0):dt=0);let _t,St,Et,Ht,Gt,Ft,ee,se,Ce;const Ee=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(W!==null)_t=W.max.x-W.min.x,St=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Ht=W.min.x,Gt=W.min.y,Ft=W.isBox3?W.min.z:0;else{const vn=Math.pow(2,-z);_t=Math.floor(Ee.width*vn),St=Math.floor(Ee.height*vn),b.isDataArrayTexture?Et=Ee.depth:b.isData3DTexture?Et=Math.floor(Ee.depth*vn):Et=1,Ht=0,Gt=0,Ft=0}X!==null?(ee=X.x,se=X.y,Ce=X.z):(ee=0,se=0,Ce=0);const ne=jt.convert(B.format),Ut=jt.convert(B.type);let Be;B.isData3DTexture?(R.setTexture3D(B,0),Be=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Be=L.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Be=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),Rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),dn=L.getParameter(L.UNPACK_SKIP_ROWS),Ys=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ee.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ee.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const Me=b.isDataArrayTexture||b.isData3DTexture,yn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const vn=Pt.get(b),tn=Pt.get(B),on=Pt.get(vn.__renderTarget),Ua=Pt.get(tn.__renderTarget);It.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ua.__webglFramebuffer);for(let Fi=0;Fi<Et;Fi++)Me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(b).__webglTexture,z,Ft+Fi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.get(B).__webglTexture,dt,Ce+Fi)),L.blitFramebuffer(Ht,Gt,_t,St,ee,se,_t,St,L.DEPTH_BUFFER_BIT,L.NEAREST);It.bindFramebuffer(L.READ_FRAMEBUFFER,null),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Pt.has(b)){const vn=Pt.get(b),tn=Pt.get(B);It.bindFramebuffer(L.READ_FRAMEBUFFER,Od),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bd);for(let on=0;on<Et;on++)Me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,z,Ft+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,z),yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,dt,Ce+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,dt),z!==0?L.blitFramebuffer(Ht,Gt,_t,St,ee,se,_t,St,L.COLOR_BUFFER_BIT,L.NEAREST):yn?L.copyTexSubImage3D(Be,dt,ee,se,Ce+on,Ht,Gt,_t,St):L.copyTexSubImage2D(Be,dt,ee,se,Ht,Gt,_t,St);It.bindFramebuffer(L.READ_FRAMEBUFFER,null),It.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Be,dt,ee,se,Ce,_t,St,Et,ne,Ut,Ee.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Be,dt,ee,se,Ce,_t,St,Et,ne,Ee.data):L.texSubImage3D(Be,dt,ee,se,Ce,_t,St,Et,ne,Ut,Ee):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,ee,se,_t,St,ne,Ut,Ee.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,ee,se,Ee.width,Ee.height,ne,Ee.data):L.texSubImage2D(L.TEXTURE_2D,dt,ee,se,_t,St,ne,Ut,Ee);L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ys),dt===0&&B.generateMipmaps&&L.generateMipmap(Be),It.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W=null,X=null,z=0){return b.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,b=arguments[2],B=arguments[3],z=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,W,X,z)},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),It.unbindTexture()},this.resetState=function(){E=0,w=0,I=null,It.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Rd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bx=new Rr(-1,1,1,-1,0,1);class zx extends Ae{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const kx=new zx;class jl{constructor(t){this._mesh=new At(kx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Bx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hx extends qs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xr.clone(t.uniforms),this.material=new Je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new jl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sh extends qs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Gx extends qs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new wt);this._width=n.width,this._height=n.height,e=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hx(Rd),this.copyPass.material.blending=di,this.clock=new _l}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sh!==void 0&&(r instanceof Sh?n=!0:r instanceof Gx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Th extends qs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Wx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ks extends qs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(s,r,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new zn(s,r,{type:fi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new zn(s,r,{type:fi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=Wx;this.highPassUniforms=xr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Je({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new wt(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Rd;this.copyUniforms=xr.clone(u.uniforms),this.blendMaterial=new Je({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Xn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Dt,this.oldClearAlpha=1,this.basic=new de,this.fsQuad=new jl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new wt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Je({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Je({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ks.BlurDirectionX=new wt(1,0);ks.BlurDirectionY=new wt(0,1);const Xx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qx extends qs{constructor(){super();const t=Xx;this.uniforms=xr.clone(t.uniforms),this.material=new Sp({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new jl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ku&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const bi=2,yo=0,Yx=2,jx=858922,Zx=380,Kx=1,$x=3500,Qx=200,Jx=200,ty=200,ey=0,ny=10,iy=1e3,sy=2e3,bh=4871528,Eh=1.6,Ah=16774630,wh=2.5,Rh=400,Ch=600,Ih=200,Ph=1024,la=1e3,ry=3500,ay=-5e-4,oy=1710628,ly=2e-4,cy=.4,hy=.35,uy=.9;class Bt{static scene;static camera;static renderer;static composer;static clock;static currentFrustumSize=Zx;static groundGroup;static cityGroup;static effectsGroup;static playerGroup;static ufoScene;static setFrustumSize(t){this.currentFrustumSize=t,this.updateCameraProjection()}static getFrustumSize(){return this.currentFrustumSize}static updateCameraProjection(){if(!this.camera)return;const t=window.innerWidth/window.innerHeight,e=t<1?this.currentFrustumSize/Math.max(.6,t):this.currentFrustumSize;this.camera.left=-e*t/bi,this.camera.right=e*t/bi,this.camera.top=e/bi,this.camera.bottom=-e/bi,this.camera.updateProjectionMatrix()}static init(t){this.renderer=new Ox({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Yx)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Lu,t.appendChild(this.renderer.domElement),this.scene=new Ac,this.scene.background=new Dt(jx);const e=window.innerWidth/window.innerHeight,n=this.currentFrustumSize;this.camera=new Rr(n*e/-bi,n*e/bi,n/bi,n/-bi,Kx,$x),this.camera.position.set(Qx,Jx,ty),this.camera.lookAt(yo,yo,yo),this.groundGroup=new ve,this.cityGroup=new ve,this.playerGroup=new ve,this.effectsGroup=new ve,this.groundGroup.renderOrder=ey,this.cityGroup.renderOrder=ny,this.playerGroup.renderOrder=iy,this.effectsGroup.renderOrder=sy,this.scene.add(this.groundGroup),this.scene.add(this.cityGroup),this.scene.add(this.playerGroup),this.scene.add(this.effectsGroup),this.ufoScene=new Ac;const i=new Yc(bh,Eh),s=new gl(Ah,wh);s.position.set(Rh,Ch,Ih),this.ufoScene.add(i),this.ufoScene.add(s);const r=new Yc(bh,Eh);this.scene.add(r);const a=new gl(Ah,wh);a.position.set(Rh,Ch,Ih),a.castShadow=!0,a.shadow.mapSize.width=Ph,a.shadow.mapSize.height=Ph,a.shadow.camera.left=-la,a.shadow.camera.right=la,a.shadow.camera.top=la,a.shadow.camera.bottom=-la,a.shadow.camera.far=ry,a.shadow.bias=ay,this.scene.add(a),this.scene.fog=new Fl(oy,ly),this.clock=new _l,this.composer=new Vx(this.renderer);const l=new Th(this.scene,this.camera);this.composer.addPass(l);const c=new ks(new wt(window.innerWidth,window.innerHeight),cy,hy,uy);this.composer.addPass(c);const u=new Th(this.ufoScene,this.camera);u.clear=!1,u.clearDepth=!0,this.composer.addPass(u);const h=new qx;this.composer.addPass(h),this.clock=new _l,window.addEventListener("resize",this.onWindowResize.bind(this))}static onWindowResize(){this.updateCameraProjection(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}static render(){this.composer.render()}}const dy=4,gs=-Math.PI/2,fy=.9,py=.05;class Dh{static layer0Group;static init(){this.layer0Group=new ve,this.layer0Group.name="Layer0_ConnectedRoadNetwork",Bt.groundGroup.add(this.layer0Group)}static buildMapMesh(){const t=nt.getAllCells(),e=2048,n=e/nt.GRID_DIM,i=document.createElement("canvas");i.width=e,i.height=e;const s=i.getContext("2d");for(let C=0;C<nt.GRID_DIM;C++)for(let k=0;k<nt.GRID_DIM;k++){const Z=t[C][k],N=C*n,G=k*n;Z.terrainType===ft.WATER?(s.fillStyle="#0a2f64",s.fillRect(N,G,n,n),s.fillStyle="#114488",s.fillRect(N+4,G+6,n-8,2),s.fillRect(N+8,G+18,n-14,2)):Z.terrainType===ft.WATER_SHORE?(s.fillStyle="#1888c8",s.fillRect(N,G,n,n),s.fillStyle="#8be4f8",s.fillRect(N+2,G+6,n-4,3),s.fillStyle="#ffffff",s.fillRect(N+6,G+18,n-10,2)):Z.terrainType===ft.SAND?(s.fillStyle="#d4b27a",s.fillRect(N,G,n,n),s.fillStyle="#c4a268",s.fillRect(N+4,G+4,2,2),s.fillRect(N+18,G+10,2,2),s.fillRect(N+10,G+22,2,2)):(s.fillStyle="#2d6a2d",s.fillRect(N,G,n,n))}for(let C=0;C<nt.GRID_DIM;C++)for(let k=0;k<nt.GRID_DIM;k++){const Z=t[C][k],N=C*n,G=k*n,J=Z.terrainType;if(J===ft.ROAD_STRAIGHT_NS||J===ft.ROAD_STRAIGHT_EW||J===ft.ROAD_RAMP_NS||J===ft.ROAD_RAMP_EW||J===ft.ROAD_INTERSECTION||J===ft.ROAD_ROUNDABOUT||J>=ft.ROAD_CURVE_NE&&J<=ft.ROAD_CURVE_SW){if(s.fillStyle="#1c1f24",s.fillRect(N,G,n,n),J===ft.ROAD_STRAIGHT_NS||J===ft.ROAD_RAMP_NS)s.fillStyle="#d0d7e0",s.fillRect(N+1,G,1,n),s.fillRect(N+n-2,G,1,n),s.fillStyle="#f5b800",s.fillRect(N+n/2-1,G,2,n),s.fillStyle="#ffffff",s.fillRect(N+n*.25,G+4,1,8),s.fillRect(N+n*.25,G+20,1,8),s.fillRect(N+n*.75,G+4,1,8),s.fillRect(N+n*.75,G+20,1,8);else if(J===ft.ROAD_STRAIGHT_EW||J===ft.ROAD_RAMP_EW)s.fillStyle="#d0d7e0",s.fillRect(N,G+1,n,1),s.fillRect(N,G+n-2,n,1),s.fillStyle="#f5b800",s.fillRect(N,G+n/2-1,n,2),s.fillStyle="#ffffff",s.fillRect(N+4,G+n*.25,8,1),s.fillRect(N+20,G+n*.25,8,1),s.fillRect(N+4,G+n*.75,8,1),s.fillRect(N+20,G+n*.75,8,1);else if(J===ft.ROAD_INTERSECTION)s.fillStyle="#ffffff",s.fillRect(N+4,G+2,n-8,3),s.fillRect(N+4,G+n-5,n-8,3),s.fillRect(N+2,G+4,3,n-8),s.fillRect(N+n-5,G+4,3,n-8),s.fillStyle="#6a7280",s.fillRect(N,G,2,2),s.fillRect(N+n-2,G,2,2),s.fillRect(N,G+n-2,2,2),s.fillRect(N+n-2,G+n-2,2,2);else if(J!==ft.ROAD_ROUNDABOUT){if(J===ft.ROAD_CURVE_NE){const ht=N+n,Ct=G;s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(ht,Ct,2,Math.PI,Math.PI/2,!0),s.stroke(),s.beginPath(),s.arc(ht,Ct,n-2,Math.PI,Math.PI/2,!0),s.stroke(),s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(ht,Ct,n/2,Math.PI,Math.PI/2,!0),s.stroke(),s.strokeStyle="#ffffff",s.lineWidth=1,s.setLineDash([3,4]),s.beginPath(),s.arc(ht,Ct,n*.25,Math.PI,Math.PI/2,!0),s.stroke(),s.beginPath(),s.arc(ht,Ct,n*.75,Math.PI,Math.PI/2,!0),s.stroke(),s.setLineDash([])}else if(J===ft.ROAD_CURVE_NW){const ht=N,Ct=G;s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(ht,Ct,2,0,Math.PI/2,!1),s.stroke(),s.beginPath(),s.arc(ht,Ct,n-2,0,Math.PI/2,!1),s.stroke(),s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(ht,Ct,n/2,0,Math.PI/2,!1),s.stroke(),s.strokeStyle="#ffffff",s.lineWidth=1,s.setLineDash([3,4]),s.beginPath(),s.arc(ht,Ct,n*.25,0,Math.PI/2,!1),s.stroke(),s.beginPath(),s.arc(ht,Ct,n*.75,0,Math.PI/2,!1),s.stroke(),s.setLineDash([])}else if(J===ft.ROAD_CURVE_SE){const ht=N+n,Ct=G+n;s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(ht,Ct,2,Math.PI,3*Math.PI/2,!1),s.stroke(),s.beginPath(),s.arc(ht,Ct,n-2,Math.PI,3*Math.PI/2,!1),s.stroke(),s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(ht,Ct,n/2,Math.PI,3*Math.PI/2,!1),s.stroke(),s.strokeStyle="#ffffff",s.lineWidth=1,s.setLineDash([3,4]),s.beginPath(),s.arc(ht,Ct,n*.25,Math.PI,3*Math.PI/2,!1),s.stroke(),s.beginPath(),s.arc(ht,Ct,n*.75,Math.PI,3*Math.PI/2,!1),s.stroke(),s.setLineDash([])}else if(J===ft.ROAD_CURVE_SW){const ht=N,Ct=G+n;s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(ht,Ct,2,0,3*Math.PI/2,!0),s.stroke(),s.beginPath(),s.arc(ht,Ct,n-2,0,3*Math.PI/2,!0),s.stroke(),s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(ht,Ct,n/2,0,3*Math.PI/2,!0),s.stroke(),s.strokeStyle="#ffffff",s.lineWidth=1,s.setLineDash([3,4]),s.beginPath(),s.arc(ht,Ct,n*.25,0,3*Math.PI/2,!0),s.stroke(),s.beginPath(),s.arc(ht,Ct,n*.75,0,3*Math.PI/2,!0),s.stroke(),s.setLineDash([])}}}}if(nt.roundabouts&&nt.roundabouts.length>0)for(const C of nt.roundabouts){const k=C.cx*n,Z=C.cz*n,N=C.radius*n,G=Math.max(n*.8,N-n*1.15),J=(N+G)/2;s.beginPath(),s.arc(k,Z,N,0,Math.PI*2),s.fillStyle="#1c1f24",s.fill(),s.beginPath(),s.arc(k,Z,N-1,0,Math.PI*2),s.strokeStyle="#d0d7e0",s.lineWidth=2,s.stroke(),s.beginPath(),s.arc(k,Z,J,0,Math.PI*2),s.strokeStyle="#f5b800",s.lineWidth=2,s.setLineDash([6,6]),s.stroke(),s.setLineDash([]),s.beginPath(),s.arc(k,Z,G,0,Math.PI*2),s.fillStyle=C.islandType==="grass"?"#2d6a2d":"#9e8e78",s.fill(),s.strokeStyle="#d0d7e0",s.lineWidth=2,s.stroke()}for(let C=0;C<nt.GRID_DIM;C++)for(let k=0;k<nt.GRID_DIM;k++){const Z=t[C][k],N=C*n,G=k*n;Z.terrainType===ft.SIDEWALK?(s.fillStyle="#5a6473",s.fillRect(N,G,n,n),s.strokeStyle="#424c58",s.lineWidth=1,s.strokeRect(N+.5,G+.5,n-1,n-1)):Z.terrainType===ft.PLAZA_STONE&&(s.fillStyle="#9e8e78",s.fillRect(N,G,n,n),s.strokeStyle="#6e6050",s.lineWidth=1,s.strokeRect(N+.5,G+.5,n-1,n-1))}const r=new Vn(i);r.wrapS=xn,r.wrapT=xn,r.minFilter=Se,r.magFilter=Se,r.anisotropy=dy,r.colorSpace=De,r.needsUpdate=!0;const a=nt.MAP_BOUNDS/2,l=nt.TILE_SIZE,c=nt.GRID_DIM,u=[],h=[],d=[],f=[],g=[],_=[];for(let C=0;C<c;C++)for(let k=0;k<c;k++){const Z=t[C][k],N=-a+C*l,G=-a+(C+1)*l,J=-a+k*l,ht=-a+(k+1)*l,Ct=C/c,Ot=(C+1)/c,le=1-k/c,L=1-(k+1)/c;let Re=Z.elevation,Wt=Z.elevation,zt=Z.elevation,It=Z.elevation;if(Z.terrainType===ft.ROAD_RAMP_NS){const ut=nt.getCell(C,k-1),lt=nt.getCell(C,k+1),Tt=ut?ut.elevation:Z.elevation,tt=lt?lt.elevation:Z.elevation;Re=Tt,Wt=Tt,zt=tt,It=tt}else if(Z.terrainType===ft.ROAD_RAMP_EW){const ut=nt.getCell(C-1,k),lt=nt.getCell(C+1,k),Tt=ut?ut.elevation:Z.elevation,tt=lt?lt.elevation:Z.elevation;Re=Tt,zt=Tt,Wt=tt,It=tt}u.push(N,zt,ht,G,Wt,J,N,Re,J,N,zt,ht,G,It,ht,G,Wt,J),d.push(Ct,L,Ot,le,Ct,le,Ct,L,Ot,L,Ot,le),h.push(0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0);const Nt=Z.elevation,Pt=k>0?t[C][k-1]:null,R=Pt?Pt.elevation:Nt>0?0:Nt,S=k<c-1?t[C][k+1]:null,H=S?S.elevation:Z.terrainType===ft.WATER?Oa:Nt>0?0:Nt,et=C>0?t[C-1][k]:null,it=et?et.elevation:Nt>0?0:Nt,Q=C<c-1?t[C+1][k]:null,Mt=Q?Q.elevation:Z.terrainType===ft.WATER?Oa:Nt>0?0:Nt;if(Z.terrainType===ft.ROAD_RAMP_NS){const ut=Re,lt=zt;if(it<Math.max(ut,lt)){const Tt=ut,tt=Math.min(Tt,it),pt=lt,yt=Math.min(pt,it);(Tt>tt||pt>yt)&&(f.push(N,tt,J,N,pt,ht,N,Tt,J,N,tt,J,N,yt,ht,N,pt,ht),g.push(-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0),_.push(0,0,1,(pt-yt)/16,0,(Tt-tt)/16,0,0,1,0,1,(pt-yt)/16))}if(Mt<Math.max(ut,lt)){const Tt=ut,tt=Math.min(Tt,Mt),pt=lt,yt=Math.min(pt,Mt);(Tt>tt||pt>yt)&&(f.push(G,yt,ht,G,Tt,J,G,pt,ht,G,yt,ht,G,tt,J,G,Tt,J),g.push(1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0),_.push(1,0,0,(Tt-tt)/16,1,(pt-yt)/16,1,0,0,0,0,(Tt-tt)/16))}}else if(Z.terrainType===ft.ROAD_RAMP_EW){const ut=Re,lt=Wt;if(R<Math.max(ut,lt)){const Tt=ut,tt=Math.min(Tt,R),pt=lt,yt=Math.min(pt,R);(Tt>tt||pt>yt)&&(f.push(G,yt,J,N,Tt,J,G,Tt,J,G,yt,J,N,tt,J,N,Tt,J),g.push(0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1),_.push(1,0,0,(Tt-tt)/16,1,(pt-yt)/16,1,0,0,0,0,(Tt-tt)/16))}if(H<Math.max(ut,lt)){const Tt=ut,tt=Math.min(Tt,H),pt=lt,yt=Math.min(pt,H);(Tt>tt||pt>yt)&&(f.push(N,tt,ht,G,pt,ht,N,Tt,ht,N,tt,ht,G,yt,ht,G,pt,ht),g.push(0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1),_.push(0,0,1,(pt-yt)/16,0,(Tt-tt)/16,0,0,1,0,1,(pt-yt)/16))}}else{if(Nt>R){const lt=(Nt-R)/16;f.push(G,R,J,N,Nt,J,G,Nt,J,G,R,J,N,R,J,N,Nt,J),g.push(0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1),_.push(1,0,0,lt,1,lt,1,0,0,0,0,lt)}if(Nt>H){const lt=(Nt-H)/16;f.push(N,H,ht,G,Nt,ht,N,Nt,ht,N,H,ht,G,H,ht,G,Nt,ht),g.push(0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1),_.push(0,0,1,lt,0,lt,0,0,1,0,1,lt)}if(Nt>it){const lt=(Nt-it)/16;f.push(N,it,J,N,Nt,ht,N,Nt,J,N,it,J,N,it,ht,N,Nt,ht),g.push(-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0),_.push(0,0,1,lt,0,lt,0,0,1,0,1,lt)}if(Nt>Mt){const lt=(Nt-Mt)/16;f.push(G,Mt,ht,G,Nt,J,G,Nt,ht,G,Mt,ht,G,Mt,J,G,Nt,J),g.push(1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0),_.push(1,0,0,lt,1,lt,1,0,0,0,0,lt)}}}const m=new Ae;m.setAttribute("position",new Jt(u,3)),m.setAttribute("normal",new Jt(h,3)),m.setAttribute("uv",new Jt(d,2)),m.computeVertexNormals();const p=new ge({map:r,roughness:fy,metalness:py,depthWrite:!1}),x=new At(m,p);x.position.set(0,0,0),x.receiveShadow=!0,x.renderOrder=0;const v=new Ae;v.setAttribute("position",new Jt(f,3)),v.setAttribute("normal",new Jt(g,3)),v.setAttribute("uv",new Jt(_,2));const y=this.createRetainingWallTexture(),A=new ge({map:y,roughness:.85,metalness:.1,depthWrite:!0,side:Hn}),E=new At(v,A);E.position.set(0,0,0),E.receiveShadow=!0,E.castShadow=!0,E.renderOrder=1;const w=4800,I=new $e(w,w),T=this.createExteriorLandscapeTexture(),M=new ge({map:T,roughness:.85,metalness:.05,depthWrite:!1}),P=new At(I,M);P.rotation.x=gs,P.position.set(0,-.25,0),P.receiveShadow=!0,P.renderOrder=-10;const F=w/2,O=F-a;let Y=!1,K=nt.GRID_DIM;for(let C=0;C<nt.GRID_DIM;C++){const k=t[C][nt.GRID_DIM-1];(k.terrainType===ft.WATER||k.terrainType===ft.WATER_SHORE)&&(Y=!0,C<K&&(K=C))}let j=!1,ct=nt.GRID_DIM;for(let C=0;C<nt.GRID_DIM;C++){const k=t[nt.GRID_DIM-1][C];(k.terrainType===ft.WATER||k.terrainType===ft.WATER_SHORE)&&(j=!0,C<ct&&(ct=C))}const q=[];if(Y||j){const C=-a+Math.max(0,K-1)*nt.TILE_SIZE,k=-a+Math.max(0,ct-1)*nt.TILE_SIZE,Z=F-C,N=F-k,G=new $e(Z,N),J=this.createOceanTexture(),ht=new ge({map:J,roughness:.2,metalness:.25,depthWrite:!1}),Ct=new At(G,ht);Ct.rotation.x=gs,Ct.position.set(C+Z/2,Oa,k+N/2),Ct.receiveShadow=!0,Ct.renderOrder=-6,q.push(Ct);const Ot=32,le=new $e(Ot,N),L=this.createCoastlineBeachTexture("NS"),Re=Math.max(1,Math.round(N/32));L.repeat.set(1,Re);const Wt=new ge({map:L,roughness:.8,metalness:.05,depthWrite:!1}),zt=new At(le,Wt);zt.rotation.x=gs,zt.position.set(C-Ot/2,-.09,k+N/2),zt.receiveShadow=!0,zt.renderOrder=-5,q.push(zt);const It=new $e(Z,Ot),Nt=this.createCoastlineBeachTexture("EW"),Pt=Math.max(1,Math.round(Z/32));Nt.repeat.set(Pt,1);const R=new ge({map:Nt,roughness:.8,metalness:.05,depthWrite:!1}),S=new At(It,R);S.rotation.x=gs,S.position.set(C+Z/2,-.09,k-Ot/2),S.receiveShadow=!0,S.renderOrder=-5,q.push(S);const H=new $e(Ot,Ot),et=this.createCoastlineBeachTexture("CORNER"),it=new ge({map:et,roughness:.8,metalness:.05,depthWrite:!1}),Q=new At(H,it);Q.rotation.x=gs,Q.position.set(C-Ot/2,-.09,k-Ot/2),Q.receiveShadow=!0,Q.renderOrder=-5,q.push(Q)}const V=C=>C.overlayType===1||C.terrainType===ft.ROAD_STRAIGHT_NS||C.terrainType===ft.ROAD_STRAIGHT_EW||C.terrainType===ft.ROAD_INTERSECTION||C.terrainType===ft.ROAD_ROUNDABOUT||C.terrainType>=ft.ROAD_CURVE_NE&&C.terrainType<=ft.ROAD_CURVE_SW,at=C=>C.terrainType===ft.WATER||C.terrainType===ft.WATER_SHORE,ot=(C,k,Z,N,G)=>{const J=Z>=28,ht=this.createHighwayTexture(J,G),Ct=Math.max(1,Math.round(N/(J?32:16)));ht.repeat.set(1,Ct);const Ot=new $e(Z,N),le=new ge({map:ht,roughness:.85,metalness:.05,depthWrite:!1}),L=new At(Ot,le);L.rotation.x=gs,G==="EW"&&(L.rotation.z=Math.PI/2),L.position.set(C,-.06,k),L.receiveShadow=!0,L.renderOrder=-3,q.push(L)};let st=null;for(let C=0;C<nt.GRID_DIM;C++){const k=t[C][0];if(V(k)&&!at(k))st===null&&(st=C);else if(st!==null){const Z=C-st,N=Z*nt.TILE_SIZE,G=-a+(st+Z*.5)*nt.TILE_SIZE,J=-a-O/2;ot(G,J,N,O,"NS"),st=null}}if(st!==null){const C=nt.GRID_DIM-st,k=C*nt.TILE_SIZE,Z=-a+(st+C*.5)*nt.TILE_SIZE,N=-a-O/2;ot(Z,N,k,O,"NS")}st=null;for(let C=0;C<nt.GRID_DIM;C++){const k=t[C][nt.GRID_DIM-1];if(V(k)&&!at(k)&&(!Y||C<K-4))st===null&&(st=C);else if(st!==null){const Z=C-st,N=Z*nt.TILE_SIZE,G=-a+(st+Z*.5)*nt.TILE_SIZE,J=a+O/2;ot(G,J,N,O,"NS"),st=null}}if(st!==null){const C=nt.GRID_DIM-st,k=C*nt.TILE_SIZE,Z=-a+(st+C*.5)*nt.TILE_SIZE,N=a+O/2;ot(Z,N,k,O,"NS")}st=null;for(let C=0;C<nt.GRID_DIM;C++){const k=t[0][C];if(V(k)&&!at(k))st===null&&(st=C);else if(st!==null){const Z=C-st,N=Z*nt.TILE_SIZE,G=-a+(st+Z*.5)*nt.TILE_SIZE,J=-a-O/2;ot(J,G,N,O,"EW"),st=null}}if(st!==null){const C=nt.GRID_DIM-st,k=C*nt.TILE_SIZE,Z=-a+(st+C*.5)*nt.TILE_SIZE,N=-a-O/2;ot(N,Z,k,O,"EW")}st=null;for(let C=0;C<nt.GRID_DIM;C++){const k=t[nt.GRID_DIM-1][C];if(V(k)&&!at(k)&&(!j||C<ct-4))st===null&&(st=C);else if(st!==null){const Z=C-st,N=Z*nt.TILE_SIZE,G=-a+(st+Z*.5)*nt.TILE_SIZE,J=a+O/2;ot(J,G,N,O,"EW"),st=null}}if(st!==null){const C=nt.GRID_DIM-st,k=C*nt.TILE_SIZE,Z=-a+(st+C*.5)*nt.TILE_SIZE,N=a+O/2;ot(N,Z,k,O,"EW")}for(;this.layer0Group.children.length>0;){const C=this.layer0Group.children[0];this.layer0Group.remove(C),C.geometry&&C.geometry.dispose(),C.material&&(Array.isArray(C.material)?C.material.forEach(k=>{k.map&&k.map.dispose(),k.dispose()}):(C.material.map&&C.material.map.dispose(),C.material.dispose()))}const Rt=this.createOuterCityWall(t,a,Y,K,j,ct,V,at);this.layer0Group.add(P);for(const C of q)this.layer0Group.add(C);this.layer0Group.add(E),this.layer0Group.add(Rt),this.layer0Group.add(x)}static createHighwayTexture(t,e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");if(i.fillStyle="#1c1f24",i.fillRect(0,0,128,128),i.fillStyle="#d0d7e0",i.fillRect(0,0,3,128),i.fillRect(125,0,3,128),i.fillStyle="#f5b800",i.fillRect(62,0,4,128),i.fillStyle="#ffffff",t)for(let r=8;r<128;r+=32)i.fillRect(31,r,2,16),i.fillRect(95,r,2,16);else for(let r=8;r<128;r+=32)i.fillRect(63,r,2,16);const s=new Vn(n);return s.wrapS=xn,s.wrapT=ze,s.minFilter=ke,s.magFilter=Se,s.generateMipmaps=!0,s.needsUpdate=!0,s}static createCoastlineBeachTexture(t){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");if(t==="NS"){n.fillStyle="#d4b27a",n.fillRect(0,0,64,128),n.fillStyle="#c4a268";for(let s=8;s<128;s+=16)n.fillRect(12,s,2,2),n.fillRect(40,s+6,2,2);n.fillStyle="#1888c8",n.fillRect(64,0,64,128),n.fillStyle="#8be4f8";for(let s=12;s<128;s+=24)n.fillRect(60,s,8,128/8),n.fillRect(80,s+8,36,3);n.fillStyle="#ffffff";for(let s=14;s<128;s+=24)n.fillRect(62,s,3,12),n.fillRect(84,s+8,20,2)}else if(t==="EW"){n.fillStyle="#d4b27a",n.fillRect(0,0,128,64),n.fillStyle="#c4a268";for(let s=8;s<128;s+=16)n.fillRect(s,12,2,2),n.fillRect(s+6,40,2,2);n.fillStyle="#1888c8",n.fillRect(0,64,128,64),n.fillStyle="#8be4f8";for(let s=12;s<128;s+=24)n.fillRect(s,60,16,8),n.fillRect(s+8,80,3,36);n.fillStyle="#ffffff";for(let s=14;s<128;s+=24)n.fillRect(s,62,12,3),n.fillRect(s+8,84,2,20)}else n.fillStyle="#d4b27a",n.fillRect(0,0,128,128),n.fillStyle="#1888c8",n.beginPath(),n.arc(128,128,110,Math.PI,1.5*Math.PI,!1),n.lineTo(128,128),n.closePath(),n.fill(),n.strokeStyle="#8be4f8",n.lineWidth=6,n.beginPath(),n.arc(128,128,70,Math.PI,1.5*Math.PI,!1),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=2,n.beginPath(),n.arc(128,128,72,Math.PI,1.5*Math.PI,!1),n.stroke();const i=new Vn(e);return i.wrapS=ze,i.wrapT=ze,i.minFilter=ke,i.magFilter=Se,i.generateMipmaps=!0,i.needsUpdate=!0,i}static createOceanTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#0a2f64",e.fillRect(0,0,256,256),e.fillStyle="#114488";for(let i=16;i<256;i+=32)e.fillRect(10,i,105,3),e.fillRect(140,i+16,100,3);e.fillStyle="#1888c8";for(let i=32;i<256;i+=64)e.fillRect(45,i,60,2),e.fillRect(175,i,65,2);const n=new Vn(t);return n.wrapS=ze,n.wrapT=ze,n.minFilter=ke,n.magFilter=Se,n.repeat.set(24,24),n.generateMipmaps=!0,n.needsUpdate=!0,n}static createRetainingWallTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#555b62",e.fillRect(0,0,256,256);for(let i=0;i<600;i++){const s=Math.floor(Math.random()*256),r=Math.floor(Math.random()*256);e.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.06)",e.fillRect(s,r,2,2)}for(let i=0;i<256;i+=64)e.fillStyle="#22252a",e.fillRect(i,0,2,256),e.fillStyle="#78808a",e.fillRect(i+2,0,1,256);for(let i=0;i<256;i+=64)e.fillStyle="#22252a",e.fillRect(0,i,256,2),e.fillStyle="#78808a",e.fillRect(0,i+2,256,1);for(let i=32;i<256;i+=64)for(let s=20;s<256;s+=64)e.fillStyle="#3a3f45",e.beginPath(),e.arc(i,s,4,0,Math.PI*2),e.fill(),e.fillStyle="#181a1d",e.beginPath(),e.arc(i,s,2,0,Math.PI*2),e.fill();e.fillStyle="rgba(20, 24, 28, 0.25)";for(let i=16;i<256;i+=32){const s=40+Math.abs(i*37)%80;e.fillRect(i,0,3,s),e.fillRect(i+1,s,1,20)}e.fillStyle="#3d4248",e.fillRect(0,200,256,56),e.fillStyle="#202428",e.fillRect(0,200,256,3),e.fillRect(0,228,256,2);for(let i=20;i<256;i+=48)e.fillRect(i,200,2,28),e.fillRect(i+24,228,2,28);e.fillStyle="#848d98",e.fillRect(0,0,256,5),e.fillStyle="#2c3035",e.fillRect(0,5,256,2);const n=new Vn(t);return n.wrapS=ze,n.wrapT=ze,n.minFilter=ke,n.magFilter=Se,n.generateMipmaps=!0,n.needsUpdate=!0,n}static createExteriorLandscapeTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#2d6a2d",e.fillRect(0,0,1024,1024);for(let s=0;s<4e3;s++){const r=Math.floor(Math.random()*1024),a=Math.floor(Math.random()*1024);e.fillStyle=Math.random()>.5?"#367c36":"#245624",e.fillRect(r,a,2,2)}const n=[{x:30,y:30,w:215,h:215,type:"wheat"},{x:275,y:30,w:205,h:135,type:"crops"},{x:275,y:185,w:205,h:285,type:"loam"},{x:510,y:30,w:225,h:235,type:"orchard"},{x:765,y:30,w:225,h:215,type:"pasture"},{x:30,y:275,w:215,h:195,type:"vineyard"},{x:510,y:295,w:225,h:215,type:"barley"},{x:765,y:275,w:225,h:235,type:"wheat"},{x:30,y:500,w:215,h:215,type:"crops"},{x:275,y:500,w:205,h:215,type:"pasture"},{x:510,y:540,w:225,h:175,type:"loam"},{x:765,y:540,w:225,h:175,type:"orchard"},{x:30,y:745,w:215,h:245,type:"barley"},{x:275,y:745,w:205,h:245,type:"wheat"},{x:510,y:745,w:225,h:245,type:"crops"},{x:765,y:745,w:225,h:245,type:"vineyard"}];for(const s of n){if(s.type==="wheat"){e.fillStyle="#c2a764",e.fillRect(s.x,s.y,s.w,s.h),e.fillStyle="#b39752";for(let r=s.y+4;r<s.y+s.h;r+=8)e.fillRect(s.x+2,r,s.w-4,2)}else if(s.type==="loam"){e.fillStyle="#483928",e.fillRect(s.x,s.y,s.w,s.h),e.fillStyle="#36291b";for(let r=s.y+4;r<s.y+s.h;r+=6)e.fillRect(s.x+2,r,s.w-4,2)}else if(s.type==="crops"){e.fillStyle="#2a6828",e.fillRect(s.x,s.y,s.w,s.h),e.strokeStyle="#1e521c",e.lineWidth=2;for(let r=-s.h;r<s.w;r+=10)e.beginPath(),e.moveTo(s.x+Math.max(0,r),s.y),e.lineTo(s.x+Math.min(s.w,r+s.h),s.y+s.h),e.stroke()}else if(s.type==="orchard"){e.fillStyle="#255425",e.fillRect(s.x,s.y,s.w,s.h);for(let r=s.x+16;r<s.x+s.w-12;r+=28)for(let a=s.y+16;a<s.y+s.h-12;a+=28)e.fillStyle="rgba(10, 30, 10, 0.4)",e.beginPath(),e.arc(r+2,a+2,7,0,Math.PI*2),e.fill(),e.fillStyle="#174217",e.beginPath(),e.arc(r,a,6,0,Math.PI*2),e.fill(),e.fillStyle="#2f742f",e.beginPath(),e.arc(r-1,a-1,3,0,Math.PI*2),e.fill()}else if(s.type==="vineyard"){e.fillStyle="#563e2c",e.fillRect(s.x,s.y,s.w,s.h),e.fillStyle="#1e481e";for(let r=s.x+8;r<s.x+s.w;r+=14)e.fillRect(r,s.y+2,3,s.h-4)}else if(s.type==="barley"){e.fillStyle="#9aa45c",e.fillRect(s.x,s.y,s.w,s.h),e.fillStyle="#86904a";for(let r=s.y+4;r<s.y+s.h;r+=7)e.fillRect(s.x+2,r,s.w-4,2)}else{e.fillStyle="#3d7836",e.fillRect(s.x,s.y,s.w,s.h);for(let r=0;r<40;r++){const a=s.x+4+Math.floor(Math.random()*(s.w-8)),l=s.y+4+Math.floor(Math.random()*(s.h-8));e.fillStyle=Math.random()>.4?"#e4d262":"#d894b4",e.fillRect(a,l,2,2)}}e.strokeStyle="#153615",e.lineWidth=4,e.strokeRect(s.x,s.y,s.w,s.h),e.fillStyle="#183e18";for(let r=s.x;r<s.x+s.w;r+=8)e.fillRect(r,s.y-1,3,3),e.fillRect(r,s.y+s.h-2,3,3);for(let r=s.y;r<s.y+s.h;r+=8)e.fillRect(s.x-1,r,3,3),e.fillRect(s.x+s.w-2,r,3,3)}e.strokeStyle="#826f56",e.lineWidth=8,e.beginPath(),e.moveTo(0,256),e.lineTo(260,256),e.lineTo(260,480),e.lineTo(500,480),e.lineTo(500,730),e.lineTo(1024,730),e.stroke(),e.beginPath(),e.moveTo(500,0),e.lineTo(500,260),e.lineTo(750,260),e.lineTo(750,1024),e.stroke(),e.strokeStyle="#6e5d46",e.lineWidth=1,e.beginPath(),e.moveTo(0,254),e.lineTo(258,254),e.lineTo(258,478),e.lineTo(498,478),e.lineTo(498,728),e.lineTo(1024,728),e.moveTo(0,258),e.lineTo(262,258),e.lineTo(262,482),e.lineTo(502,482),e.lineTo(502,732),e.lineTo(1024,732),e.stroke();const i=new Vn(t);return i.wrapS=ze,i.wrapT=ze,i.repeat.set(12,12),i.colorSpace=De,i.minFilter=ke,i.magFilter=Se,i.generateMipmaps=!0,i.needsUpdate=!0,i}static createCityWallTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#343942",e.fillRect(0,0,256,256);for(let i=0;i<2e3;i++){const s=Math.floor(Math.random()*256),r=Math.floor(Math.random()*256);e.fillStyle=Math.random()>.5?"#3e444f":"#2a2e36",e.fillRect(s,r,1,1)}for(const i of[64,128,192])e.fillStyle="#1a1d22",e.fillRect(0,i,256,2),e.fillStyle="#5c6470",e.fillRect(0,i+2,256,1);for(let i=0;i<256;i+=64)e.fillStyle="#1a1d22",e.fillRect(i,0,2,256),e.fillStyle="#5c6470",e.fillRect(i+2,0,1,256);for(let i=16;i<256;i+=64)for(let s=16;s<256;s+=64)e.fillStyle="#22252a",e.beginPath(),e.arc(i,s,4,0,Math.PI*2),e.fill(),e.fillStyle="#626a75",e.beginPath(),e.arc(i,s,2,0,Math.PI*2),e.fill();e.fillStyle="#00f0ff",e.fillRect(18,92,28,4),e.fillRect(82,92,28,4),e.fillRect(146,92,28,4),e.fillRect(210,92,28,4),e.fillStyle="#ffffff",e.fillRect(22,93,20,2),e.fillRect(86,93,20,2),e.fillRect(150,93,20,2),e.fillRect(214,93,20,2),e.fillStyle="#ffaa00",e.fillRect(30,156,12,3),e.fillRect(94,156,12,3),e.fillRect(158,156,12,3),e.fillRect(222,156,12,3),e.fillStyle="#687280",e.fillRect(0,0,256,10),e.fillStyle="#1c1f24",e.fillRect(0,10,256,4),e.fillStyle="#1c1f24",e.fillRect(0,232,256,24),e.fillStyle="#f5b800";for(let i=-24;i<256;i+=16)e.beginPath(),e.moveTo(i,256),e.lineTo(i+10,232),e.lineTo(i+18,232),e.lineTo(i+8,256),e.closePath(),e.fill();const n=new Vn(t);return n.wrapS=ze,n.wrapT=ze,n.colorSpace=De,n.minFilter=ke,n.magFilter=Se,n.generateMipmaps=!0,n.needsUpdate=!0,n}static createOuterCityWall(t,e,n,i,s,r,a,l){const c=new Ae,u=[],h=[],d=[],f=(V,at,ot,st,Rt,C,k=1/16,Z=1/16)=>{const N=(at-V)*k,G=(st-ot)*Z,J=(C-Rt)*k;u.push(V,st,Rt,V,st,C,at,st,C,V,st,Rt,at,st,C,at,st,Rt),h.push(0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0),d.push(0,0,0,J,N,J,0,0,N,J,N,0),u.push(V,ot,C,V,ot,Rt,at,ot,Rt,V,ot,C,at,ot,Rt,at,ot,C),h.push(0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0),d.push(0,0,0,J,N,J,0,0,N,J,N,0),u.push(V,ot,C,at,ot,C,at,st,C,V,ot,C,at,st,C,V,st,C),h.push(0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1),d.push(0,0,N,0,N,G,0,0,N,G,0,G),u.push(at,ot,Rt,V,ot,Rt,V,st,Rt,at,ot,Rt,V,st,Rt,at,st,Rt),h.push(0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1),d.push(0,0,N,0,N,G,0,0,N,G,0,G),u.push(V,ot,Rt,V,ot,C,V,st,C,V,ot,Rt,V,st,C,V,st,Rt),h.push(-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0),d.push(0,0,J,0,J,G,0,0,J,G,0,G),u.push(at,ot,C,at,ot,Rt,at,st,Rt,at,ot,C,at,st,Rt,at,st,C),h.push(1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0),d.push(0,0,J,0,J,G,0,0,J,G,0,G)},g=10,m=4/2,p=13.5,x=11,v=13.5,y=(V,at)=>{const ot=[];let st=null;for(let Rt=0;Rt<at;Rt++){let C=!1,k=!1;if(V==="N"){const Z=t[Rt]?.[0];C=a(Z),k=l(Z)}else if(V==="S"){const Z=t[Rt]?.[nt.GRID_DIM-1];C=a(Z),k=l(Z)}else if(V==="W"){const Z=t[0]?.[Rt];C=a(Z),k=l(Z)}else if(V==="E"){const Z=t[nt.GRID_DIM-1]?.[Rt];C=a(Z),k=l(Z)}C&&!k?st===null&&(st=Rt):st!==null&&(ot.push({start:-e+st*nt.TILE_SIZE,end:-e+Rt*nt.TILE_SIZE}),st=null)}return st!==null&&ot.push({start:-e+st*nt.TILE_SIZE,end:-e+at*nt.TILE_SIZE}),ot},A=y("N",nt.GRID_DIM);let E=-e+5;for(const V of A)V.start-2>E&&f(E,V.start-2,0,g,-e-m,-e+m),f(V.start-5,V.start-1,0,p,-e-3.5,-e+3.5),f(V.end+1,V.end+5,0,p,-e-3.5,-e+3.5),f(V.start-5,V.end+5,x,v,-e-2.5,-e+2.5),E=V.end+2;e>E&&f(E,e,0,g,-e-m,-e+m);const w=y("W",nt.GRID_DIM);let I=-e+5;for(const V of w)V.start-2>I&&f(-e-m,-e+m,0,g,I,V.start-2),f(-e-3.5,-e+3.5,0,p,V.start-5,V.start-1),f(-e-3.5,-e+3.5,0,p,V.end+1,V.end+5),f(-e-2.5,-e+2.5,x,v,V.start-5,V.end+5),I=V.end+2;e>I&&f(-e-m,-e+m,0,g,I,e);const T=n?Math.max(0,i-1):nt.GRID_DIM,M=-e+T*nt.TILE_SIZE,P=y("S",T);E=-e;for(const V of P)V.start-2>E&&f(E,V.start-2,0,g,e-m,e+m),f(V.start-5,V.start-1,0,p,e-3.5,e+3.5),f(V.end+1,V.end+5,0,p,e-3.5,e+3.5),f(V.start-5,V.end+5,x,v,e-2.5,e+2.5),E=V.end+2;M>E&&f(E,M,0,g,e-m,e+m),n&&f(M-5,M+5,0,12,e-5,e+5);const F=s?Math.max(0,r-1):nt.GRID_DIM,O=-e+F*nt.TILE_SIZE,Y=y("E",F);I=-e;for(const V of Y)V.start-2>I&&f(e-m,e+m,0,g,I,V.start-2),f(e-3.5,e+3.5,0,p,V.start-5,V.start-1),f(e-3.5,e+3.5,0,p,V.end+1,V.end+5),f(e-2.5,e+2.5,x,v,V.start-5,V.end+5),I=V.end+2;O>I&&f(e-m,e+m,0,g,I,O),s&&f(e-5,e+5,0,12,O-5,O+5),f(-e-6,-e+6,0,14.5,-e-6,-e+6),f(-e-1,-e+1,14.5,23,-e-1,-e+1);const K=22;f(-e-K,e,-.15,.05,-e-K,-e-m,1/16,1/16),f(-e-K,-e-m,-.15,.05,-e-K,e,1/16,1/16),M>-e&&f(-e,M,-.15,.05,e+m,e+K,1/16,1/16),O>-e&&f(e+m,e+K,-.15,.05,-e,O,1/16,1/16),c.setAttribute("position",new Jt(u,3)),c.setAttribute("normal",new Jt(h,3)),c.setAttribute("uv",new Jt(d,2));const j=this.createCityWallTexture(),ct=new ge({map:j,roughness:.85,metalness:.15,depthWrite:!0,side:Hn}),q=new At(c,ct);return q.position.set(0,0,0),q.receiveShadow=!0,q.castShadow=!0,q.renderOrder=2,q}}function Lh(o,t){if(t===pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===dl||t===Ju){let e=o.getIndex();if(e===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===dl)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class my extends Ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new vy(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new Iy(e)}),this.register(function(e){return new Py(e)}),this.register(function(e){return new Dy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new _y(e)}),this.register(function(e){return new Ly(e)}),this.register(function(e){return new Ny(e)})}load(t,e,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=fr.extractUrlBase(t);r=fr.resolveURL(c,this.path)}else r=fr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Sd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,r,function(u){e(u),s.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Cd){try{r[$t.KHR_BINARY_GLTF]=new Fy(t)}catch(h){i&&i(h);return}s=JSON.parse(r[$t.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jy(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case $t.KHR_MATERIALS_UNLIT:r[h]=new xy;break;case $t.KHR_DRACO_MESH_COMPRESSION:r[h]=new Uy(s,this.dracoLoader);break;case $t.KHR_TEXTURE_TRANSFORM:r[h]=new Oy;break;case $t.KHR_MESH_QUANTIZATION:r[h]=new By;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function gy(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const $t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _y{constructor(t){this.parser=t,this.name=$t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const u=new Dt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vl(u),c.distance=h;break;case"spot":c=new Op(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class xy{constructor(){this.name=$t.KHR_MATERIALS_UNLIT}getMaterialType(){return de}extendParams(t,e,n){const i=[];t.color=new Dt(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],an),t.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,De))}return Promise.all(i)}}class yy{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class vy{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new wt(a,a)}return Promise.all(s)}}class My{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sy{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Ty{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],an)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",r.sheenColorTexture,De)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class by{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ey{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(a[0],a[1],a[2],an),Promise.all(s)}}class Ay{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class wy{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(a[0],a[1],a[2],an),r.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",r.specularColorTexture,De)),Promise.all(s)}}class Ry{constructor(t){this.parser=t,this.name=$t.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Cy{constructor(t){this.parser=t,this.name=$t.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Iy{constructor(t){this.parser=t,this.name=$t.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}}class Py{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Dy{constructor(t){this.parser=t,this.name=$t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const r=s.extensions[e],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ly{constructor(t){this.name=$t.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Ny{constructor(t){this.name=$t.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const g of h){const _=new Vt,m=new D,p=new An,x=new D(1,1,1),v=new Mr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(m,p,x));for(const y in l)if(y==="_COLOR_0"){const A=l[y];v.instanceColor=new vr(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);_e.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Cd="glTF",rr=12,Nh={JSON:1313821514,BIN:5130562};class Fy{constructor(t){this.name=$t.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Cd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rr,s=new DataView(t,rr);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Nh.JSON){const c=new Uint8Array(t,rr+r,a);this.content=n.decode(c)}else if(l===Nh.BIN){const c=rr+r;this.body=t.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Uy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$t.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,a={},l={},c={};for(const u in r){const h=vl[u]||u.toLowerCase();a[h]=r[u]}for(const u in t.attributes){const h=vl[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Cs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(f)},a,c,an,d)})})}}class Oy{constructor(){this.name=$t.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class By{constructor(){this.name=$t.KHR_MESH_QUANTIZATION}}class Id extends wr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let r=0;r!==i;r++)e[r]=n[s+r];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,v=p-d+h;for(let y=0;y!==a;y++){const A=r[_+y+a],E=r[_+y+l]*u,w=r[g+y+a],I=r[g+y]*u;s[y]=x*A+v*E+m*w+p*I}return s}}const zy=new An;class ky extends Id{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return zy.fromArray(s).normalize().toArray(s),s}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fh={9728:We,9729:Se,9984:Gu,9985:ma,9986:lr,9987:ke},Uh={33071:xn,33648:Ta,10497:ze},vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hy={CUBICSPLINE:void 0,LINEAR:gr,STEP:mr},Mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gy(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),o.DefaultMaterial}function Gi(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ai(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Vy(o,t,e){let n=!1,i=!1,s=!1;for(let c=0,u=t.length;c<u;c++){const h=t[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,u=t.length;c<u;c++){const h=t[c];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Wy(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xy(o){let t;const e=o.extensions&&o.extensions[$t.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+So(e.attributes):t=o.indices+":"+So(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+So(o.targets[n]);return t}function So(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function Ml(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qy(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Yy=new Vt;class jy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new gy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Hl(this.options.manager):this.textureLoader=new kp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Gi(s,a,i),ai(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const r=e[i].joints;for(let a=0,l=r.length;a<l;a++)t[r[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const r=t[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,u]of r.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,r){return n.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[$t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(fr.resolveURL(e.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const r=vo[i.type],a=Cs[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new Xe(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=vo[i.type],c=Cs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=e.cache.get(x);v||(_=new c(a,p*f,i.count*f/u),v=new ud(_,f/u),e.cache.add(x,v)),m=new yr(v,l,d%f/u,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Xe(_,l,g);if(i.sparse!==void 0){const p=vo.SCALAR,x=Cs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,A=new x(r[1],v,i.sparse.count*p),E=new c(r[2],y,i.sparse.count*l);a!==null&&(m=new Xe(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=A.length;w<I;w++){const T=A[w];if(m.setX(T,E[w*l]),l>=2&&m.setY(T,E[w*l+1]),l>=3&&m.setZ(T,E[w*l+2]),l>=4&&m.setW(T,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,r=e.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,r=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Fh[d.magFilter]||Se,u.minFilter=Fh[d.minFilter]||ke,u.wrapS=Uh[d.wrapS]||ze,u.wrapT=Uh[d.wrapT]||ze,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==We&&u.minFilter!==Se,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const r=i.images[t],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ne(_);m.needsUpdate=!0,d(m)}),e.load(fr.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ai(h,r),h.userData.mimeType=r.mimeType||qy(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[$t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[$t.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),t[e]=r,r})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _d,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sr,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return ge}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let r;const a={},l=s.extensions||{},c=[];if(l[$t.KHR_MATERIALS_UNLIT]){const h=i[$t.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,e))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],an),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",h.baseColorTexture,De)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=Le);const u=s.alphaMode||Mo.OPAQUE;if(u===Mo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Mo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==de&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new wt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==de&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==de){const h=s.emissiveFactor;a.emissive=new Dt().setRGB(h[0],h[1],h[2],an)}return s.emissiveTexture!==void 0&&r!==de&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,De)),Promise.all(c).then(function(){const h=new r(a);return s.name&&(h.name=s.name),ai(h,s),e.associations.set(h,{materials:t}),s.extensions&&Gi(i,h,s),h})}createUniqueName(t){const e=ae.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[$t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Oh(l,a,e)})}const r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],u=Xy(c),h=i[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[$t.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Oh(new Ae,c,e),i[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const u=r[l].material===void 0?Gy(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(e.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=r[f];let p;const x=c[f];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new mp(_,x):new At(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?p.geometry=Lh(p.geometry,Ju):m.mode===Sn.TRIANGLE_FAN&&(p.geometry=Lh(p.geometry,dl));else if(m.mode===Sn.LINES)p=new gd(_,x);else if(m.mode===Sn.LINE_STRIP)p=new Tr(_,x);else if(m.mode===Sn.LINE_LOOP)p=new vp(_,x);else if(m.mode===Sn.POINTS)p=new Mp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Wy(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),ai(p,s),m.extensions&&Gi(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return s.extensions&&Gi(i,h[0],s),h[0];const d=new ve;s.extensions&&Gi(i,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new ln(Hf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Rr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ai(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h){a.push(h);const d=new Vt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ul(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,r=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],A=f[x],E=g[x],w=_[x],I=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,A,E,w,I);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new ml(s,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),r=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Yy)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new pd:c.length>1?u=new ve:c.length===1?u=c[0]:u=new _e,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=r),ai(u,s),s.extensions&&Gi(n,u,s),s.matrix!==void 0){const h=new Vt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ve;n.name&&(s.name=i.createUniqueName(n.name)),ai(s,n),n.extensions&&Gi(e,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof kn||d instanceof Ne)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const r=[],a=t.name?t.name:t.uuid,l=[];Ei[s.path]===Ei.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ei[s.path]){case Ei.weights:c=Os;break;case Ei.rotation:c=Bs;break;case Ei.position:case Ei.scale:c=zs;break;default:switch(n.itemSize){case 1:c=Os;break;case 2:case 3:default:c=zs;break}break}const u=i.interpolation!==void 0?Hy[i.interpolation]:gr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Ei[s.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ml(e.constructor),i=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Bs?ky:Id;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zy(o,t,e){const n=t.attributes,i=new Gn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Ml(Cs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ml(Cs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new jn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Oh(o,t,e){const n=t.attributes,i=[];function s(r,a){return e.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=vl[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(t.indices!==void 0&&!o.index){const r=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(r)}return Qt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),ai(o,t),Zy(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Vy(o,t.targets,e):o})}class rn{static loader=new Hl;static gltfLoader=new my;static textures=new Map;static gltfModels=new Map;static mapData=null;static spriteOffsets={};static getAssetUrl(t){if(!t||t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;const e=t.startsWith("/")?t.slice(1):t;let n="./";if(typeof document<"u"&&document.baseURI)try{const s=new URL(document.baseURI).pathname;s&&s!=="/"&&(n=s)}catch{}return`${n.endsWith("/")?n:`${n}/`}${e}`}static async loadAll(){const t=[];t.push(this.loadGLTF("skyscraper_demolition","/3d/skyscrapper1/skyscraper_demolition.glb").catch(n=>{console.warn("[AssetLoader] GLTF load notice:",n)})),t.push(this.loadGLTF("spaceship_hq","/3d/spaceship_hq/spaceship_hq.glb").catch(n=>{console.warn("[AssetLoader] spaceship_hq 3D load notice:",n)})),t.push(this.loadGLTF("cyber_reactor","/3d/cyber_reactor/cyber_reactor.glb").catch(n=>{console.warn("[AssetLoader] cyber_reactor 3D load notice:",n)})),t.push(this.loadGLTF("financial_tower","/3d/financial_tower/financial_tower.glb").catch(n=>{console.warn("[AssetLoader] financial_tower 3D load notice:",n)})),t.push(this.loadGLTF("art_deco_skyscraper","/3d/art_deco_skyscraper_demolition.glb").catch(n=>{console.warn("[AssetLoader] art_deco_skyscraper 3D load notice:",n)})),t.push(fetch(this.getAssetUrl("/map_data.json")).then(n=>n.json()).then(n=>{this.mapData=n}).catch(n=>console.error("Failed to load map data:",n))),t.push(fetch(this.getAssetUrl("/sprite_offsets.json")).then(n=>n.json()).then(n=>{this.spriteOffsets=n}).catch(n=>console.error("Failed to load sprite offsets:",n))),t.push(this.loadTexture("ground","/city_background_topdown_red.png",!1));const e=(n,i=!1)=>n===0?"00_pristine.png":i&&n===14?"14_rubble.png":`${n<10?"0":""}${n}_damaged_${n}.png`;t.push(this.loadTexture("building_1_stage_0",`/buildingv2/hospital/png/${e(0,!0)}`)),t.push(this.loadTexture("building_2_stage_0",`/buildingv2/mall/png/${e(0,!0)}`)),t.push(this.loadTexture("building_3_stage_0",`/buildingv2/school/png/${e(0,!0)}`)),t.push(this.loadTexture("building_4_stage_0",`/buildingv2/warehouse/png/${e(0,!1)}`)),t.push(this.loadTexture("building_5_stage_0",`/buildingv2/skyscraper/png/${e(0,!0)}`)),t.push(this.loadTexture("building_b1_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),t.push(this.loadTexture("building_b2_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),t.push(this.loadTexture("building_b3_stage_0","/buildingv2/tower_midrise/png/state_000_pristine.png")),t.push(this.loadTexture("building_b4_stage_0","/buildingv2/skyscraper_highrise/png/state_000_pristine.png")),t.push(this.loadTexture("building_res_bronze_stage_0","/buildingv2/residential_bronze_penthouses/png/00_pristine.png")),t.push(this.loadTexture("building_res_sky_stage_0","/buildingv2/residential_sky_gardens/png/00_pristine.png")),t.push(this.loadTexture("building_sky_cyber_stage_0","/buildingv2/skyscraper_cyber_spire/png/00_pristine.png")),t.push(this.loadTexture("building_sky_artdeco_stage_0","/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png")),t.push(this.loadTexture("building_sky_biotech_stage_0","/buildingv2/skyscraper_biotech_helix/png/00_pristine.png")),t.push(this.loadTexture("building_hospital_civic_stage_0","/buildingv2/hospital_civic/png/state_000_pristine.png")),t.push(this.loadTexture("building_mall_shopping_stage_0","/buildingv2/mall_shopping/png/state_000_pristine.png")),t.push(this.loadTexture("building_school_civic_stage_0","/buildingv2/school_civic/png/state_000_pristine.png")),t.push(this.loadTexture("building_spaceship_hq_stage_0","/buildingv2/spaceship_hq/png/state_000_pristine.png")),t.push(this.loadTexture("building_statue_liberty_stage_0","/buildingv2/statue_liberty/png/state_000_pristine.png")),t.push(this.loadTexture("building_pentagon_defense_stage_0","/buildingv2/pentagon_defense/png/state_000_pristine.png")),t.push(this.loadTexture("building_mega_stadium_stage_0",`/buildingv2/mall/png/${e(0,!0)}`)),setTimeout(()=>{for(let d=1;d<15;d++)this.loadTexture(`building_1_stage_${d}`,`/buildingv2/hospital/png/${e(d,!0)}`),this.loadTexture(`building_2_stage_${d}`,`/buildingv2/mall/png/${e(d,!0)}`),this.loadTexture(`building_3_stage_${d}`,`/buildingv2/school/png/${e(d,!0)}`),this.loadTexture(`building_4_stage_${d}`,`/buildingv2/warehouse/png/${e(d,!1)}`),this.loadTexture(`building_5_stage_${d}`,`/buildingv2/skyscraper/png/${e(d,!0)}`),this.loadTexture(`building_mega_stadium_stage_${d}`,`/buildingv2/mall/png/${e(d,!0)}`);["state_033_shattered_front.png","state_066_facade_breached.png","state_100_rubble.png"].forEach((d,f)=>{this.loadTexture(`building_b1_stage_${f+1}`,`/buildingv2/shop_lowrise/png/${d}`),this.loadTexture(`building_b2_stage_${f+1}`,`/buildingv2/shop_lowrise/png/${d}`)}),["state_033_roof_hvac_destroyed.png","state_066_mid_floors_gutted.png","state_100_collapsed_ruins.png"].forEach((d,f)=>{this.loadTexture(`building_b3_stage_${f+1}`,`/buildingv2/tower_midrise/png/${d}`),this.loadTexture(`building_res_bronze_stage_${f+1}`,`/buildingv2/tower_midrise/png/${d}`)}),["state_066_midsection_crater.png","state_100_skeleton_ruin.png"].forEach((d,f)=>{this.loadTexture(`building_b4_stage_${f+1}`,`/buildingv2/skyscraper_highrise/png/${d}`),this.loadTexture(`building_res_sky_stage_${f+1}`,`/buildingv2/skyscraper_highrise/png/${d}`)}),["state_033_needle_antenna_snap.png","state_066_laser_conduit_overload.png","state_100_core_meltdown_rubble.png"].forEach((d,f)=>{this.loadTexture(`building_sky_cyber_stage_${f+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_artdeco_stage_${f+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_biotech_stage_${f+1}`,`/buildingv2/sky_cyber/png/${d}`)}),["state_033_ambulance_bay_blasted.png","state_033_helipad_destroyed.png","state_066_er_block_gutted.png","state_100_hospital_rubble.png"].forEach((d,f)=>{this.loadTexture(`building_hospital_civic_stage_${f+1}`,`/buildingv2/hospital_civic/png/${d}`)}),["state_033_atrium_glass_caved.png","state_033_parking_plaza_crater.png","state_066_retail_wings_gutted.png","state_100_mall_rubble.png"].forEach((d,f)=>{this.loadTexture(`building_mall_shopping_stage_${f+1}`,`/buildingv2/mall_shopping/png/${d}`)}),["state_033_east_wing_breached.png","state_033_west_wing_breached.png","state_066_courtyard_crater.png","state_100_campus_rubble.png"].forEach((d,f)=>{this.loadTexture(`building_school_civic_stage_${f+1}`,`/buildingv2/school_civic/png/${d}`)}),["state_033_helipad_tarmac_crater.png","state_033_outer_ring_breach.png","state_066_fortress_core_gutted.png","state_100_bunker_ruins.png"].forEach((d,f)=>{this.loadTexture(`building_pentagon_defense_stage_${f+1}`,`/buildingv2/pentagon_defense/png/${d}`)}),["state_050_head_torch_snapped.png","state_100_pedestal_shattered.png"].forEach((d,f)=>{this.loadTexture(`building_statue_liberty_stage_${f+1}`,`/buildingv2/statue_liberty/png/${d}`)})},50),setTimeout(()=>{for(let n=0;n<11;n++)this.loadTexture(`fx_blast_${n}`,`/blast/frame_${n}.png`);for(let n=0;n<7;n++)this.loadTexture(`fx_blast360_${n}`,`/blast360/frame_${n}.png`);for(let n=0;n<10;n++)this.loadTexture(`fx_fire_${n}`,`/fire/frame_${n}.png`);this.loadTexture("fx_crater","/crater.png",!1)},80),await Promise.all(t)}static async loadTexture(t,e,n=!0){const i=this.getAssetUrl(e);return new Promise(s=>{if(this.textures.has(t)){s(this.textures.get(t));return}this.loader.load(i,r=>{n?(r.minFilter=We,r.magFilter=We,r.generateMipmaps=!1):(r.minFilter=ke,r.magFilter=Se),r.wrapS=xn,r.wrapT=xn,this.textures.set(t,r),s(r)},void 0,r=>{console.warn(`[AssetLoader] Texture '${t}' at ${e} failed to load. Proceeding with fallback.`),s(null)})})}static getTexture(t){if(this.textures.has(t))return this.textures.get(t);const e=t.match(/^(building_[a-zA-Z0-9_]+_stage_)(\d+)$/);if(e){const n=parseInt(e[2],10),i=e[1];for(let s=n;s>=0;s--){const r=`${i}${s}`;if(this.textures.has(r))return this.textures.get(r)}if(this.textures.has(`${i}0`))return this.textures.get(`${i}0`)}return null}static getSpriteOffset(t,e){const n=this.spriteOffsets[`building_${t}`];if(!n)return null;for(let i=e;i>=0;i--){const s=n[i]||n[i.toString()];if(s)return s}return n[0]||null}static async loadGLTF(t,e){const n=this.getAssetUrl(e);return new Promise(i=>{if(this.gltfModels.has(t)){i(this.gltfModels.get(t));return}this.gltfLoader.load(n,s=>{console.log(`[AssetLoader] Successfully loaded 3D GLTF asset [${t}] from ${e}`,s),this.gltfModels.set(t,s),i(s)},void 0,s=>{console.error(`[AssetLoader] ERROR loading 3D GLTF asset [${t}] from ${e}:`,s),i(null)})})}static getGLTF(t){return this.gltfModels.get(t)||null}}const si=0,Ky=0,$y=.03,Qy=.005,ca=128,Ze=64,Jy=5,Bh=60,tv=10,zh=55,kh=12,ev=30,nv=25,iv=15,sv=-Math.PI/2,Hh=.95,Gh=.05,_s=80;class Yn{static decalGroup;static decalTextures=new Map;static unitGeometry;static scorchMaterial;static craterMaterial;static scorchMesh;static craterMesh;static scorchIndex=si;static scorchCount=si;static craterIndex=si;static craterCount=si;static dummy=new _e;static init(){this.decalGroup=new ve,this.decalGroup.name="DecalLayer_L2",this.decalGroup.position.y=Ky,Bt.groundGroup.add(this.decalGroup),this.createDecalTextures(),this.unitGeometry=new $e(1,1);const t=this.decalTextures.get("scorch"),e=rn.getTexture("fx_crater"),n=e||this.decalTextures.get("crater");this.scorchMaterial=new ge({map:t,transparent:!0,depthWrite:!1,roughness:Hh,metalness:Gh}),this.craterMaterial=new ge({map:n,transparent:!0,depthWrite:!1,roughness:Hh,metalness:Gh}),e||new Hl().load(rn.getAssetUrl("/crater.png"),i=>{i.minFilter=ke,i.magFilter=Se,this.craterMaterial.map=i,this.craterMaterial.needsUpdate=!0}),this.scorchMesh=new Mr(this.unitGeometry,this.scorchMaterial,_s),this.scorchMesh.count=si,this.scorchMesh.receiveShadow=!0,this.scorchMesh.renderOrder=10,this.craterMesh=new Mr(this.unitGeometry,this.craterMaterial,_s),this.craterMesh.count=si,this.craterMesh.receiveShadow=!0,this.craterMesh.renderOrder=10,this.decalGroup.add(this.scorchMesh),this.decalGroup.add(this.craterMesh)}static createDecalTextures(){const t=()=>{const n=document.createElement("canvas");n.width=ca,n.height=ca;const i=n.getContext("2d"),s=i.createRadialGradient(Ze,Ze,Jy,Ze,Ze,Bh);s.addColorStop(0,"rgba(10, 10, 10, 0.9)"),s.addColorStop(.4,"rgba(40, 25, 20, 0.7)"),s.addColorStop(.7,"rgba(80, 50, 30, 0.3)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Ze,Ze,Bh,si,Math.PI*2),i.fill(),i.strokeStyle="rgba(15, 10, 8, 0.6)",i.lineWidth=2;for(let a=si;a<kh;a++){const l=a/kh*Math.PI*2+(Math.random()-.5)*.2,c=ev+Math.random()*nv;i.beginPath(),i.moveTo(Ze,Ze),i.lineTo(Ze+Math.cos(l)*c,Ze+Math.sin(l)*c),i.stroke()}const r=new Vn(n);return r.needsUpdate=!0,r},e=()=>{const n=document.createElement("canvas");n.width=ca,n.height=ca;const i=n.getContext("2d"),s=i.createRadialGradient(Ze,Ze,tv,Ze,Ze,zh);s.addColorStop(0,"rgba(5, 5, 5, 0.95)"),s.addColorStop(.3,"rgba(30, 20, 15, 0.85)"),s.addColorStop(.6,"rgba(70, 50, 35, 0.5)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Ze,Ze,zh,si,Math.PI*2),i.fill();const r=new Vn(n);return r.needsUpdate=!0,r};this.decalTextures.set("scorch",t()),this.decalTextures.set("crater",e())}static spawnDecal(t,e,n,i=iv){const s=n==="crater",r=s?this.craterMesh:this.scorchMesh,a=s?this.craterIndex:this.scorchIndex,l=nt.getElevationAtWorld(t,e);this.dummy.position.set(t,l+$y+Math.random()*Qy,e),this.dummy.rotation.set(sv,0,Math.random()*Math.PI*2),this.dummy.scale.set(i,i,1),this.dummy.updateMatrix(),r.setMatrixAt(a,this.dummy.matrix),r.instanceMatrix.needsUpdate=!0,s?(this.craterIndex=(this.craterIndex+1)%_s,this.craterCount<_s&&(this.craterCount++,this.craterMesh.count=this.craterCount)):(this.scorchIndex=(this.scorchIndex+1)%_s,this.scorchCount<_s&&(this.scorchCount++,this.scorchMesh.count=this.scorchCount))}}class Ca{static init(){nt.init(),Yn.init(),Dh.init()}static finalizeMap(){Dh.buildMapMesh()}}class rv{particles=[];debris=[];freeParticleIndices=[];freeDebrisIndices=[];constructor(t=1e3,e=600){for(let n=0;n<t;n++)this.particles.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:0,active:!1,type:"spark"}),this.freeParticleIndices.push(n);for(let n=0;n<e;n++)this.debris.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:35,active:!1,size:.5,rx:0,ry:0,bounces:0,color:8930338}),this.freeDebrisIndices.push(n)}tick(t){for(let e=0;e<this.particles.length;e++){const n=this.particles[e];n.active&&(n.type==="smoke"?(n.vy+=1.5*t,n.vx*=1-.5*t,n.vz*=1-.5*t):n.type==="fire_ember"&&(n.vy+=2.4*t,n.vx+=Math.sin(n.life*12)*.8*t,n.vz+=Math.cos(n.life*12)*.8*t),n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.life+=t,n.life>=n.maxLife&&(n.active=!1,this.freeParticleIndices.push(e)))}for(let e=0;e<this.debris.length;e++){const n=this.debris[e];n.active&&(n.vy-=n.gravity*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.vy*t*.1,n.ry+=n.vx*t*.1,n.y<0&&(n.y=0,n.vy*=-.35,n.vx*=.7,n.vz*=.7,n.bounces++,n.bounces>=5&&(n.active=!1,this.freeDebrisIndices.push(e))))}}spawnParticle(t,e,n,i,s,r,a,l="spark"){const c=this.freeParticleIndices.pop();if(c!==void 0){const u=this.particles[c];u.x=t,u.y=e,u.z=n,u.vx=i,u.vy=s,u.vz=r,u.life=0,u.maxLife=a,u.type=l,u.active=!0}}spawnDebris(t,e,n,i,s,r,a=.5,l=8930338){const c=this.freeDebrisIndices.pop();if(c!==void 0){const u=this.debris[c];u.x=t,u.y=e,u.z=n,u.vx=i,u.vy=s,u.vz=r,u.size=a,u.rx=0,u.ry=0,u.bounces=0,u.color=l,u.active=!0}}}const sn=new rv,Dn=0,ha=3,av=.2,ov=8,lv=8,Vh=16777215,To=1,cv=.5,hv=2,uv=.7,Wh=.05,bo=1,Xh={spark:new Dt(16768324),dust:new Dt(11176038),smoke:new Dt(4473924),brick:new Dt(8930338),fire_ember:new Dt(16737809)};class qh{static particleMesh;static debrisMesh;static dummy=new _e;static tempColor=new Dt;static emberHotColor=new Dt(16763955);static emberCoolColor=new Dt(13378048);static lastPCount=Dn;static lastDCount=Dn;static init(){const t=new Ar(av,ov,lv),e=new de({color:Vh});this.particleMesh=new Mr(t,e,sn.particles.length),this.particleMesh.instanceMatrix.setUsage(Pr),this.particleMesh.instanceColor=new vr(new Float32Array(sn.particles.length*ha),ha),this.particleMesh.instanceColor.setUsage(Pr),Bt.effectsGroup.add(this.particleMesh);const n=new He(To,To,To),i=new ge({color:Vh});this.debrisMesh=new Mr(n,i,sn.debris.length),this.debrisMesh.instanceMatrix.setUsage(Pr),this.debrisMesh.instanceColor=new vr(new Float32Array(sn.debris.length*ha),ha),this.debrisMesh.instanceColor.setUsage(Pr),this.debrisMesh.castShadow=!0,Bt.effectsGroup.add(this.debrisMesh)}static tick(t){if(!this.particleMesh||!this.debrisMesh)return;let e=Dn;for(let i=Dn;i<sn.particles.length;i++){const s=sn.particles[i];if(s.active){this.dummy.position.set(s.x,s.y,s.z);const r=s.life/s.maxLife;if(s.type==="smoke"){const a=cv+r*hv;this.dummy.scale.set(a,a,a)}else if(s.type==="fire_ember"){const a=Math.max(Wh,.45*(bo-r*.5));this.dummy.scale.set(a,a,a)}else{const a=Math.max(Wh,bo-r);this.dummy.scale.set(a,a,a)}if(this.dummy.updateMatrix(),this.particleMesh.setMatrixAt(e,this.dummy.matrix),s.type==="fire_ember"?this.tempColor.copy(this.emberHotColor).lerp(this.emberCoolColor,r):this.tempColor.copy(Xh[s.type]||Xh.spark),s.type==="smoke"){const a=bo-r*uv;this.tempColor.multiplyScalar(a)}this.particleMesh.setColorAt(e,this.tempColor),e++}}this.particleMesh.count=e,(e>Dn||this.lastPCount>Dn)&&(this.particleMesh.instanceMatrix.needsUpdate=!0,this.particleMesh.instanceColor&&(this.particleMesh.instanceColor.needsUpdate=!0)),this.lastPCount=e;let n=Dn;for(let i=Dn;i<sn.debris.length;i++){const s=sn.debris[i];s.active&&(this.dummy.position.set(s.x,s.y,s.z),this.dummy.scale.set(s.size,s.size,s.size),this.dummy.rotation.set(s.rx,s.ry,Dn),this.dummy.updateMatrix(),this.debrisMesh.setMatrixAt(n,this.dummy.matrix),this.tempColor.setHex(s.color),this.debrisMesh.setColorAt(n,this.tempColor),n++)}this.debrisMesh.count=n,(n>Dn||this.lastDCount>Dn)&&(this.debrisMesh.instanceMatrix.needsUpdate=!0,this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0)),this.lastDCount=n}}class oe{static nextEntityId=1;static entities=new Set;static systems=[];static createEntity(){const t=this.nextEntityId++;return this.entities.add(t),t}static destroyEntity(t){this.entities.delete(t)}static addSystem(t){this.systems.push(t)}static tick(t){for(const e of this.systems)e(t)}}var Un=(o=>(o.TOP_LEFT="TOP_LEFT",o.TOP_CENTER="TOP_CENTER",o.TOP_RIGHT="TOP_RIGHT",o.MID_LEFT="MID_LEFT",o.CENTER="CENTER",o.MID_RIGHT="MID_RIGHT",o.BASE_LEFT="BASE_LEFT",o.BASE_CENTER="BASE_CENTER",o.BASE_RIGHT="BASE_RIGHT",o))(Un||{});const xe=()=>[{id:"TOP_LEFT",u0:0,v0:0,u1:.33,v1:.33,hpWeight:1,structureWeight:.05},{id:"TOP_CENTER",u0:.33,v0:0,u1:.66,v1:.33,hpWeight:1.5,structureWeight:.15},{id:"TOP_RIGHT",u0:.66,v0:0,u1:1,v1:.33,hpWeight:1,structureWeight:.05},{id:"MID_LEFT",u0:0,v0:.33,u1:.33,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"CENTER",u0:.33,v0:.33,u1:.66,v1:.66,hpWeight:2,structureWeight:.3},{id:"MID_RIGHT",u0:.66,v0:.33,u1:1,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"BASE_LEFT",u0:0,v0:.66,u1:.33,v1:1,hpWeight:1.5,structureWeight:.05},{id:"BASE_CENTER",u0:.33,v0:.66,u1:.66,v1:1,hpWeight:2.5,structureWeight:.15},{id:"BASE_RIGHT",u0:.66,v0:.66,u1:1,v1:1,hpWeight:1.5,structureWeight:.05}],mi={1:xe(),2:xe(),3:xe(),4:xe(),5:xe(),b1:xe(),b2:xe(),b3:xe(),b4:xe(),res_bronze:xe(),res_sky:xe(),sky_artdeco:xe(),sky_biotech:xe(),sky_cyber:xe(),mega_titan:xe(),mega_stadium:xe(),spaceship_hq:xe(),cyber_reactor:xe(),financial_tower:xe(),art_deco_skyscraper:xe(),statue_liberty:xe(),pentagon_defense:xe(),hospital_civic:xe(),mall_shopping:xe(),school_civic:xe()},Te=new Map,we=new Map,Ge=new Map,Ia=new Map,dv=new Map,hi=new Map,cn=new Set,Qe=new Map;function fv(o){const t=new Map,e=new Map,n=o.clone();return Pd(o,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=t.get(i),a=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Pd(o,t,e){e(o,t);for(let n=0;n<o.children.length;n++)Pd(o.children[n],t.children[n],e)}class Xt{static keys={};static pointerDown=!1;static pointerSecondaryDown=!1;static mouseX=0;static mouseY=0;static screenWidth=window.innerWidth;static screenHeight=window.innerHeight;static joystickVector={x:0,y:0};static isMobile=!1;static virtualFirePrimary=!1;static virtualFireSecondary=!1;static setVirtualJoystick(t,e){this.joystickVector.x=t,this.joystickVector.y=e}static setVirtualFirePrimary(t){this.virtualFirePrimary=t}static setVirtualFireSecondary(t){this.virtualFireSecondary=t}static init(){window.addEventListener("keydown",e=>{e.code&&(this.keys[e.code]=!0),e.key&&(this.keys[e.key]=!0,this.keys[e.key.toLowerCase()]=!0),(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))&&e.preventDefault()}),window.addEventListener("keyup",e=>{e.code&&(this.keys[e.code]=!1),e.key&&(this.keys[e.key]=!1,this.keys[e.key.toLowerCase()]=!1)}),window.addEventListener("pointerdown",e=>{e.button===2?this.pointerSecondaryDown=!0:this.pointerDown=!0}),window.addEventListener("pointerup",e=>{e.button===2?this.pointerSecondaryDown=!1:this.pointerDown=!1}),window.addEventListener("contextmenu",e=>{e.preventDefault()});const t=e=>{this.mouseX=e.clientX,this.mouseY=e.clientY};window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("mousemove",t,{passive:!0}),window.addEventListener("resize",()=>{this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight})}static isKeyDown(t){return!!this.keys[t]}static isPointerDown(){return this.pointerDown||this.virtualFirePrimary}static isSecondaryPointerDown(){return this.pointerSecondaryDown||this.virtualFireSecondary}static getMouseNDC(){return{x:this.mouseX/this.screenWidth*2-1,y:-(this.mouseY/this.screenHeight)*2+1}}}class Sa{static raycaster=new ql;static camera;static intersectableObjects=[];static objectToEntityMap=new Map;static init(t){this.camera=t}static registerObject(t,e){this.intersectableObjects.push(t),this.objectToEntityMap.set(t.uuid,e)}static unregisterObject(t){const e=this.intersectableObjects.indexOf(t);e!==-1&&this.intersectableObjects.splice(e,1),this.objectToEntityMap.delete(t.uuid)}static getIntersectedEntity(){if(!this.camera)return null;const t=Xt.getMouseNDC(),e=new wt(t.x,t.y);this.raycaster.setFromCamera(e,this.camera);const n=this.raycaster.intersectObjects(this.intersectableObjects,!0);if(n.length>0)for(const i of n){let s=i.object;for(;s;){const r=this.objectToEntityMap.get(s.uuid);if(r!==void 0)return r;s=s.parent}}return null}}class _i{static invCellSize=1/64;static grid=new Map;static getKey(t,e){return t+2048<<16|e+2048&65535}static getCellCoords(t,e){return{gx:Math.floor(t*this.invCellSize),gz:Math.floor(e*this.invCellSize)}}static clear(){this.grid.clear()}static rebuild(){this.grid.clear();for(const t of oe.entities){if(cn.has(t))continue;const e=Te.get(t),n=we.get(t);if(e&&n&&n.currentHP>0){const{gx:i,gz:s}=this.getCellCoords(e.worldX,e.worldY),r=this.getKey(i,s);let a=this.grid.get(r);a||(a=[],this.grid.set(r,a)),a.push(t)}}}static findClosest(t,e,n){let i=n,s=null;if(!isFinite(n)){const u=this.getCellCoords(t-128,e-128),h=this.getCellCoords(t+128,e+128);for(let _=u.gx;_<=h.gx;_++)for(let m=u.gz;m<=h.gz;m++){const p=this.getKey(_,m),x=this.grid.get(p);if(x)for(let v=0;v<x.length;v++){const y=x[v],A=we.get(y);if(!A||A.currentHP<=0)continue;const E=Te.get(y);if(!E)continue;const w=E.worldX-t,I=E.worldY-e,T=w*w+I*I;T<i&&(i=T,s=y)}}const d=s!==null?Math.sqrt(i):1024,f=this.getCellCoords(t-d,e-d),g=this.getCellCoords(t+d,e+d);for(let _=f.gx;_<=g.gx;_++)for(let m=f.gz;m<=g.gz;m++){if(s!==null&&_>=u.gx&&_<=h.gx&&m>=u.gz&&m<=h.gz)continue;const p=this.getKey(_,m),x=this.grid.get(p);if(x)for(let v=0;v<x.length;v++){const y=x[v],A=we.get(y);if(!A||A.currentHP<=0)continue;const E=Te.get(y);if(!E)continue;const w=E.worldX-t,I=E.worldY-e,T=w*w+I*I;T<i&&(i=T,s=y)}}return s}const r=Math.sqrt(n),a=this.getCellCoords(t-r,e-r),l=this.getCellCoords(t+r,e+r);for(let c=a.gx;c<=l.gx;c++)for(let u=a.gz;u<=l.gz;u++){const h=this.getKey(c,u),d=this.grid.get(h);if(d)for(let f=0;f<d.length;f++){const g=d[f],_=we.get(g);if(!_||_.currentHP<=0)continue;const m=Te.get(g);if(!m)continue;const p=m.worldX-t,x=m.worldY-e,v=p*p+x*x;v<i&&(i=v,s=g)}}return s}static queryRadius(t,e,n){const i=[],s=this.getCellCoords(t-n,e-n),r=this.getCellCoords(t+n,e+n),a=n*n;for(let l=s.gx;l<=r.gx;l++)for(let c=s.gz;c<=r.gz;c++){const u=this.getKey(l,c),h=this.grid.get(u);if(h)for(let d=0;d<h.length;d++){const f=h[d],g=Te.get(f);if(!g)continue;const _=g.worldX-t,m=g.worldY-e;_*_+m*m<=a&&i.push(f)}}return i}}const Eo=0,Yh=.5,pv=0,mv=.01,gv=.36,_v=1.3,xv=65,yv=38,vv=140;class qi{static zoneObjects=new Map;static allZoneMeshes=[];static entityZoneMeshes=new Map;static candidateMeshes=[];static raycaster=new ql;static pointerVector=new wt;static tempVec=new D;static staticGroundPlane=new Nn(new D(0,1,0),0);static groundHitVec=new D;static createZonesForBuilding(t,e,n){let i=this.entityZoneMeshes.get(t);i||(i=[],this.entityZoneMeshes.set(t,i));for(const s of n){const r=s.u1-s.u0,a=s.v1-s.v0,l=new $e(r,a),c=new de({visible:!1,transparent:!0,opacity:pv}),u=new At(l,c),h=s.u0+r/2,d=s.v0+a/2;u.position.x=h-Yh,u.position.y=Yh-d,u.position.z=mv,e.add(u),this.zoneObjects.set(u.uuid,{entity:t,zone:s.id,uvCenter:new wt(h,d)}),this.allZoneMeshes.push(u),i.push(u)}}static unregisterBuilding(t){const e=this.entityZoneMeshes.get(t);if(e){for(let n=0;n<e.length;n++){const i=e[n];i.parent&&i.parent.remove(i),this.zoneObjects.delete(i.uuid);const s=this.allZoneMeshes.indexOf(i);s!==-1&&this.allZoneMeshes.splice(s,1),i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose()}this.entityZoneMeshes.delete(t)}}static getHitZone(t,e){if(this.allZoneMeshes.length===Eo)return null;const n=Xt.getMouseNDC();this.pointerVector.set(n.x,n.y),this.raycaster.setFromCamera(this.pointerVector,t);let i=this.allZoneMeshes,s=e?e.x:0,r=e?e.z:0;if(!e){const h=this.raycaster.ray.intersectPlane(this.staticGroundPlane,this.groundHitVec);h&&(s=h.x,r=h.z)}const a=_i.queryRadius(s,r,140);if(a.length>0){this.candidateMeshes.length=0;for(let h=0;h<a.length;h++){const d=this.entityZoneMeshes.get(a[h]);if(d)for(let f=0;f<d.length;f++)this.candidateMeshes.push(d[f])}this.candidateMeshes.length>0&&(i=this.candidateMeshes)}let l=this.raycaster.intersectObjects(i,!1);if(l.length===Eo)if(i!==this.allZoneMeshes){if(l=this.raycaster.intersectObjects(this.allZoneMeshes,!1),l.length===Eo)return null}else return null;if(l.length===1){const h=this.zoneObjects.get(l[0].object.uuid);if(!h)return null;const d=we.get(h.entity);return d&&d.currentHP<=0?null:{...h,point:l[0].point.clone()}}let c=null,u=1/0;for(let h=0;h<l.length;h++){const d=l[h],f=this.zoneObjects.get(d.object.uuid);if(!f)continue;const g=we.get(f.entity);if(g&&g.currentHP<=0)continue;const _=d.object.parent;if(!_)continue;_.getWorldPosition(this.tempVec),this.tempVec.project(t);const m=this.tempVec.x-n.x,p=this.tempVec.y-n.y;let x=m*m+p*p;const v=_.scale.y,y=_.scale.x;v<=xv||y<=yv?x*=gv:v>=vv&&(x*=_v);const A=f.uvCenter.x-.5,E=f.uvCenter.y-.5,w=x+(A*A+E*E)*.002;w<u&&(u=w,c={...f,point:d.point.clone()})}if(!c){const h=l[0],d=this.zoneObjects.get(h.object.uuid);d&&(c={...d,point:h.point.clone()})}return c}static clearAll(){for(const t of this.allZoneMeshes)t.parent&&t.parent.remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose();this.zoneObjects.clear(),this.allZoneMeshes.length=0,this.entityZoneMeshes.clear(),this.candidateMeshes.length=0}}class Mv{static computeFrameIndex(t,e,n){const i=1-t/e,s=Math.floor(i*n);return Math.max(0,Math.min(s,n))}static computeFrameForZonalState(t,e){const n=1-t.totalHp/t.maxTotalHp,i=Math.floor(e*.55),s=Math.floor(n*i),r=t.zones.get(Un.CENTER),a=Math.floor(e*.28),l=r?Math.floor((1-r.hp/r.maxHp)*a):0,c=t.zones.get(Un.TOP_CENTER),u=e-i-a,h=c?Math.floor((1-c.hp/c.maxHp)*u):0;return Math.max(0,Math.min(s+l+h,e))}}class ua{static computeZoneLevel(t){return t>=.8?0:t>=.55?1:t>=.25?2:t>0?3:4}static computeGlobalLevel(t,e){let n=0;for(const i of e){const s=t.zones.get(i.id);if(!s)continue;const r=s.level/4;n+=i.structureWeight*r}return n=Math.max(0,Math.min(1,n)),this.computeZoneLevel(1-n)}}class oi{static init(){oe.addSystem(this.tick.bind(this))}static tick(t){sn.tick(t)}static spawnBrickBurst(t,e,n,i,s){for(let r=0;r<i;r++){const a=(Math.random()-.5)*12,l=Math.random()*12+10,c=(Math.random()-.5)*12,u=.3+Math.random()*.5;let h=8930338;s&&s.length>0&&(h=s[Math.floor(Math.random()*s.length)]),sn.spawnDebris(t,e,n,a,l,c,u,h)}}static spawnDustCloud(t,e,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*1.5,a=Math.random()*1+.3,l=(Math.random()-.5)*1.5;sn.spawnParticle(t,e,n,r,a,l,1+Math.random()*.5,"dust")}}static spawnSmokePlume(t,e,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*.8,a=Math.random()*1.2+.5,l=(Math.random()-.5)*.8;sn.spawnParticle(t,e,n,r,a,l,2+Math.random()*1,"smoke")}}static spawnSparkBurst(t,e,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*8,a=Math.random()*6+2,l=(Math.random()-.5)*8;sn.spawnParticle(t,e,n,r,a,l,.2+Math.random()*.15,"spark")}}static spawnEmberBurst(t,e,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*4,a=Math.random()*5+3,l=(Math.random()-.5)*4;sn.spawnParticle(t,e,n,r,a,l,1.5+Math.random()*1,"fire_ember")}}static spawnDemolitionVolcano(t,e,n,i=20,s){const r=Math.min(60,Math.floor(i*1.5)),a=Math.min(45,Math.floor(i*1.2)),l=Math.min(30,Math.floor(i*.8)),c=Math.min(25,Math.floor(i*.7));this.spawnBrickBurst(t,e,n,r,s),this.spawnSparkBurst(t,e,n,a),this.spawnSmokePlume(t,e,n,l),this.spawnDustCloud(t,e,n,Math.floor(l*.8)),this.spawnEmberBurst(t,e,n,c)}static spawnDebrisBurst(t,e,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*5,a=Math.random()*5+3,l=(Math.random()-.5)*5;sn.spawnDebris(t,e,n,r,a,l)}}}class hn{static score=0;static highScore=0;static combo=1;static comboCount=0;static comboTimer=0;static COMBO_TIMEOUT=3.5;static MAX_COMBO=5;static popups=[];static init(){try{const t=localStorage.getItem("alienv2_highscore");t&&(this.highScore=parseInt(t,10)||0)}catch{this.highScore=0}}static tick(t){this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1,this.comboCount=0,this.comboTimer=0));for(let e=this.popups.length-1;e>=0;e--){const n=this.popups[e];n.elapsed+=t,n.worldZ+=t*12,n.elapsed>=n.duration&&this.popups.splice(e,1)}}static addScore(t,e,n){this.comboCount++,this.combo=Math.min(this.MAX_COMBO,1+Math.floor(this.comboCount/2)),this.comboTimer=this.COMBO_TIMEOUT;const i=t*this.combo;if(this.score+=i,this.score>this.highScore){this.highScore=this.score;try{localStorage.setItem("alienv2_highscore",this.highScore.toString())}catch{}}if(n){const s=this.combo>1?`+${i} (x${this.combo})`:`+${i}`,r=this.combo>=4?"#f59e0b":this.combo>=2?"#3b82f6":"#10b981";this.popups.push({text:e?`${e} ${s}`:s,points:i,worldX:n.x,worldY:n.y,worldZ:n.z??15,color:r,duration:1.4,elapsed:0})}return i}static getScore(){return this.score}static getHighScore(){return this.highScore}static getCombo(){return this.combo}static getComboTimerRatio(){return this.comboTimer/this.COMBO_TIMEOUT}static reset(){this.score=0,this.combo=1,this.comboCount=0,this.comboTimer=0,this.popups=[]}}class Ve{static ctx=null;static masterGain=null;static masterCompressor=null;static whiteNoiseBuffer=null;static brownNoiseBuffer=null;static isInitialized=!1;static saturationCurve=null;static lastBuildingHitTime=0;static pendingCheckCues=[];static beamOscA=null;static beamOscB=null;static beamSubOsc=null;static beamFilter=null;static beamGain=null;static beamLFO=null;static beamLFOGain=null;static beamNoiseSource=null;static beamNoiseGain=null;static isBeamAudioActive=!1;static init(){const t=()=>{this.ensureAudioContext(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),oe.addSystem(this.tick.bind(this))}static getSaturationCurve(){if(!this.saturationCurve){const e=new Float32Array(512);for(let n=0;n<512;n++){const i=n*2/511-1;e[n]=Math.tanh(i*1.5)}this.saturationCurve=e}return this.saturationCurve}static createSaturator(){if(!this.ctx)return null;const t=this.ctx.createWaveShaper();return t.curve=this.getSaturationCurve(),t.oversample="none",t}static ensureAudioContext(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterCompressor=this.ctx.createDynamicsCompressor(),this.masterCompressor.threshold.setValueAtTime(-8,this.ctx.currentTime),this.masterCompressor.knee.setValueAtTime(10,this.ctx.currentTime),this.masterCompressor.ratio.setValueAtTime(8,this.ctx.currentTime),this.masterCompressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.masterCompressor.release.setValueAtTime(.14,this.ctx.currentTime),this.masterGain.connect(this.masterCompressor),this.masterCompressor.connect(this.ctx.destination);const e=this.ctx.sampleRate,n=e*2;this.whiteNoiseBuffer=this.ctx.createBuffer(1,n,e);const i=this.whiteNoiseBuffer.getChannelData(0);for(let a=0;a<n;a++)i[a]=Math.random()*2-1;this.brownNoiseBuffer=this.ctx.createBuffer(1,n,e);const s=this.brownNoiseBuffer.getChannelData(0);let r=0;for(let a=0;a<n;a++){const l=Math.random()*2-1;r=(r+.04*l)/1.04,s[a]=r*3.5}this.isInitialized=!0,console.log("[AudioSystem] Cinematic Procedural WebAudio engine initialized.")}catch(t){console.warn("[AudioSystem] WebAudio initialization deferred:",t)}}static processEvent(t){if(this.isInitialized||this.ensureAudioContext(),!(!this.ctx||this.ctx.state==="suspended"))switch(t.type){case"laser":this.playLaserSFX();break;case"blast":case"blast_zonal":this.playExplosionSFX(1);break;case"blast360":this.playExplosionSFX(1.4),this.playCollapseRumbleSFX();break;case"shake":t.data.intensity>10&&this.playClusterBoomSFX();break;case"building_hit":this.playBuildingHitSFX(t.data.intensity);break;case"building_destroyed":{const e=t.data;this.playBuildingDestroyedSFX(!!e.is3D,e.delay||0);break}}}static tick(t){if(this.ctx&&this.ctx.state,this.pendingCheckCues.length>0)for(let e=this.pendingCheckCues.length-1;e>=0;e--){const n=this.pendingCheckCues[e];n.timeLeft-=t,n.timeLeft<=0&&(this.playBuildingDestroyedSFX(n.is3D),this.pendingCheckCues.splice(e,1))}}static playBuildingHitSFX(t="light"){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.whiteNoiseBuffer)return;const e=this.ctx.currentTime;if(e-this.lastBuildingHitTime<.038)return;this.lastBuildingHitTime=e;const n=t==="heavy",i=n?.16:.11,s=this.ctx.createBufferSource(),r=this.ctx.createBiquadFilter(),a=this.ctx.createGain();s.buffer=this.whiteNoiseBuffer,r.type="bandpass",r.frequency.setValueAtTime(n?1200:1750,e),r.Q.setValueAtTime(2.8,e),a.gain.setValueAtTime(n?.38:.28,e),a.gain.exponentialRampToValueAtTime(.001,e+(n?.055:.038)),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(e),s.stop(e+.06);const l=this.ctx.createOscillator(),c=this.ctx.createGain(),u=this.createSaturator();if(l.type="triangle",l.frequency.setValueAtTime(n?240:190,e),l.frequency.exponentialRampToValueAtTime(45,e+i),c.gain.setValueAtTime(n?.42:.32,e),c.gain.exponentialRampToValueAtTime(.001,e+i),u?(l.connect(u),u.connect(c)):l.connect(c),c.connect(this.masterGain),l.start(e),l.stop(e+i),n){const h=this.ctx.createOscillator(),d=this.ctx.createGain();h.type="sawtooth",h.frequency.setValueAtTime(540,e),h.frequency.exponentialRampToValueAtTime(140,e+.12),d.gain.setValueAtTime(.16,e),d.gain.exponentialRampToValueAtTime(.001,e+.12),h.connect(d),d.connect(this.masterGain),h.start(e),h.stop(e+.12),h.onended=()=>{h.disconnect(),d.disconnect()}}l.onended=()=>{l.disconnect(),u?.disconnect(),c.disconnect(),s.disconnect(),r.disconnect(),a.disconnect()}}static playBuildingDestroyedSFX(t=!1,e=0){if(e>0){this.pendingCheckCues.push({timeLeft:e,is3D:t});return}if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();if(i.type="sine",i.frequency.setValueAtTime(3200,n),i.frequency.exponentialRampToValueAtTime(1600,n+.018),s.gain.setValueAtTime(.24,n),s.gain.exponentialRampToValueAtTime(.001,n+.018),i.connect(s),s.connect(this.masterGain),i.start(n),i.stop(n+.02),t){[{freq:1046.5,time:0,dur:.22,vol:.2},{freq:1318.5,time:.045,dur:.26,vol:.24},{freq:2093,time:.095,dur:.45,vol:.28}].forEach(c=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator(),h=this.ctx.createGain();u.type="sine",u.frequency.setValueAtTime(c.freq,n+c.time),h.gain.setValueAtTime(.001,n+c.time),h.gain.linearRampToValueAtTime(c.vol,n+c.time+.008),h.gain.exponentialRampToValueAtTime(.001,n+c.time+c.dur),u.connect(h),h.connect(this.masterGain),u.start(n+c.time),u.stop(n+c.time+c.dur),u.onended=()=>{u.disconnect(),h.disconnect()}});const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(140,n),a.frequency.exponentialRampToValueAtTime(45,n+.18),l.gain.setValueAtTime(.16,n),l.gain.exponentialRampToValueAtTime(.001,n+.18),a.connect(l),l.connect(this.masterGain),a.start(n),a.stop(n+.18),a.onended=()=>{a.disconnect(),l.disconnect()}}else{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(1320,n),a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(.22,n+.006),a.gain.exponentialRampToValueAtTime(.001,n+.08),r.connect(a),a.connect(this.masterGain),r.start(n),r.stop(n+.085);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(1980,n+.04),c.gain.setValueAtTime(.001,n+.04),c.gain.linearRampToValueAtTime(.26,n+.048),c.gain.exponentialRampToValueAtTime(.001,n+.32),l.connect(c),c.connect(this.masterGain),l.start(n+.04),l.stop(n+.33);const u=this.ctx.createOscillator(),h=this.ctx.createGain();u.type="sine",u.frequency.setValueAtTime(3960,n+.04),h.gain.setValueAtTime(.001,n+.04),h.gain.linearRampToValueAtTime(.07,n+.046),h.gain.exponentialRampToValueAtTime(.001,n+.16),u.connect(h),h.connect(this.masterGain),u.start(n+.04),u.stop(n+.17);const d=this.ctx.createOscillator(),f=this.ctx.createGain();d.type="triangle",d.frequency.setValueAtTime(160,n),d.frequency.exponentialRampToValueAtTime(55,n+.12),f.gain.setValueAtTime(.14,n),f.gain.exponentialRampToValueAtTime(.001,n+.12),d.connect(f),f.connect(this.masterGain),d.start(n),d.stop(n+.12),l.onended=()=>{i.disconnect(),s.disconnect(),r.disconnect(),a.disconnect(),l.disconnect(),c.disconnect(),u.disconnect(),h.disconnect(),d.disconnect(),f.disconnect()}}}static playLaserSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=.1,n=this.ctx.createOscillator(),i=this.ctx.createBiquadFilter(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(2200,t),n.frequency.exponentialRampToValueAtTime(280,t+.04),i.type="bandpass",i.frequency.setValueAtTime(1400,t),i.Q.setValueAtTime(2.5,t),s.gain.setValueAtTime(.24,t),s.gain.exponentialRampToValueAtTime(.001,t+.045),n.connect(i),i.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.045);const r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),l=this.createSaturator(),c=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(950,t),r.frequency.exponentialRampToValueAtTime(110,t+e),a.type="lowpass",a.frequency.setValueAtTime(1800,t),a.frequency.exponentialRampToValueAtTime(160,t+e),a.Q.setValueAtTime(4,t),c.gain.setValueAtTime(.3,t),c.gain.exponentialRampToValueAtTime(.001,t+e),r.connect(a),l?(a.connect(l),l.connect(c)):a.connect(c),c.connect(this.masterGain),r.start(t),r.stop(t+e);const u=this.ctx.createOscillator(),h=this.ctx.createGain();u.type="sine",u.frequency.setValueAtTime(110,t),u.frequency.exponentialRampToValueAtTime(35,t+.06),h.gain.setValueAtTime(.22,t),h.gain.exponentialRampToValueAtTime(.001,t+.06),u.connect(h),h.connect(this.masterGain),u.start(t),u.stop(t+.06),r.onended=()=>{n.disconnect(),i.disconnect(),s.disconnect(),r.disconnect(),a.disconnect(),l?.disconnect(),c.disconnect(),u.disconnect(),h.disconnect()}}static playExplosionSFX(t=1){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.brownNoiseBuffer||!this.whiteNoiseBuffer)return;const e=this.ctx.currentTime,n=.6,i=Math.min(1.8,t),s=this.ctx.createBufferSource(),r=this.ctx.createBiquadFilter(),a=this.ctx.createGain();s.buffer=this.whiteNoiseBuffer,r.type="bandpass",r.frequency.setValueAtTime(1100,e),r.frequency.exponentialRampToValueAtTime(220,e+.04),r.Q.setValueAtTime(2,e),a.gain.setValueAtTime(.32*i,e),a.gain.exponentialRampToValueAtTime(.001,e+.045),s.connect(r),r.connect(a),a.connect(this.masterGain),s.start(e),s.stop(e+.05);const l=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),u=this.createSaturator(),h=this.ctx.createGain();l.buffer=this.brownNoiseBuffer,c.type="lowpass",c.frequency.setValueAtTime(360*Math.min(1.3,i),e),c.frequency.exponentialRampToValueAtTime(32,e+n),c.Q.setValueAtTime(2.2,e),h.gain.setValueAtTime(.48*i,e),h.gain.exponentialRampToValueAtTime(.001,e+n),l.connect(c),u?(c.connect(u),u.connect(h)):c.connect(h),h.connect(this.masterGain),l.start(e),l.stop(e+n);const d=this.ctx.createOscillator(),f=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(72,e),d.frequency.exponentialRampToValueAtTime(20,e+.45),f.gain.setValueAtTime(.4*i,e),f.gain.exponentialRampToValueAtTime(.001,e+.45),d.connect(f),f.connect(this.masterGain),d.start(e),d.stop(e+.45),l.onended=()=>{s.disconnect(),r.disconnect(),a.disconnect(),l.disconnect(),c.disconnect(),u?.disconnect(),h.disconnect(),d.disconnect(),f.disconnect()}}static playClusterBoomSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.createSaturator();e.type="sine",e.frequency.setValueAtTime(62,t),e.frequency.exponentialRampToValueAtTime(14,t+1.1),n.gain.setValueAtTime(.65,t),n.gain.exponentialRampToValueAtTime(.001,t+1.1),i?(e.connect(i),i.connect(n)):e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+1.1),e.onended=()=>{e.disconnect(),i?.disconnect(),n.disconnect()},this.playExplosionSFX(1.7)}static playCollapseRumbleSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.brownNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.buffer=this.brownNoiseBuffer,n.type="lowpass",n.frequency.setValueAtTime(160,t),n.frequency.exponentialRampToValueAtTime(25,t+1.3),i.gain.setValueAtTime(.45,t),i.gain.exponentialRampToValueAtTime(.001,t+1.3),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+1.3),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect()}}static playClusterLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(480,t+.22),n.gain.setValueAtTime(.38,t),n.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.24),e.onended=()=>{e.disconnect(),n.disconnect()}}static playClusterSplitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.whiteNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.buffer=this.whiteNoiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(1600,t),n.Q.setValueAtTime(3.5,t),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.12),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect()}}static playJetFlybySFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.brownNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.buffer=this.brownNoiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(350,t),n.frequency.linearRampToValueAtTime(1900,t+.35),n.frequency.exponentialRampToValueAtTime(220,t+1.25),n.Q.setValueAtTime(1.8,t),i.gain.setValueAtTime(.02,t),i.gain.linearRampToValueAtTime(.48,t+.35),i.gain.exponentialRampToValueAtTime(.001,t+1.25),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+1.25),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect()}}static playMissileLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.brownNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(680,t+.35),n.gain.setValueAtTime(.26,t),n.gain.exponentialRampToValueAtTime(.001,t+.35),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.35);const i=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();i.buffer=this.brownNoiseBuffer,s.type="lowpass",s.frequency.setValueAtTime(800,t),r.gain.setValueAtTime(.3,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(r),r.connect(this.masterGain),i.start(t),i.stop(t+.35),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect(),s.disconnect(),r.disconnect()}}static playShieldHitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(680,t),e.frequency.exponentialRampToValueAtTime(140,t+.16),n.type="sine",n.frequency.setValueAtTime(1020,t),n.frequency.exponentialRampToValueAtTime(210,t+.14),i.gain.setValueAtTime(.35,t),i.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(i),n.connect(i),i.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+.16),n.stop(t+.16),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect()}}static startContinuousBeamAudio(){if(this.ensureAudioContext(),!(!this.ctx||!this.masterGain||this.isBeamAudioActive||!this.whiteNoiseBuffer))try{const t=this.ctx.currentTime;this.isBeamAudioActive=!0,this.beamGain=this.ctx.createGain(),this.beamGain.gain.setValueAtTime(.001,t),this.beamGain.gain.linearRampToValueAtTime(.3,t+.12),this.beamFilter=this.ctx.createBiquadFilter(),this.beamFilter.type="lowpass",this.beamFilter.frequency.setValueAtTime(620,t),this.beamFilter.Q.setValueAtTime(3.8,t),this.beamLFO=this.ctx.createOscillator(),this.beamLFOGain=this.ctx.createGain(),this.beamLFO.type="sine",this.beamLFO.frequency.setValueAtTime(5.5,t),this.beamLFOGain.gain.setValueAtTime(220,t),this.beamLFO.connect(this.beamFilter.frequency),this.beamLFO.start(t),this.beamOscA=this.ctx.createOscillator(),this.beamOscA.type="sawtooth",this.beamOscA.frequency.setValueAtTime(118,t),this.beamOscB=this.ctx.createOscillator(),this.beamOscB.type="sawtooth",this.beamOscB.frequency.setValueAtTime(124,t),this.beamSubOsc=this.ctx.createOscillator(),this.beamSubOsc.type="sine",this.beamSubOsc.frequency.setValueAtTime(55,t),this.beamNoiseSource=this.ctx.createBufferSource(),this.beamNoiseSource.buffer=this.whiteNoiseBuffer,this.beamNoiseSource.loop=!0;const e=this.ctx.createBiquadFilter();e.type="highpass",e.frequency.setValueAtTime(1400,t),this.beamNoiseGain=this.ctx.createGain(),this.beamNoiseGain.gain.setValueAtTime(.04,t),this.beamNoiseSource.connect(e),e.connect(this.beamNoiseGain),this.beamNoiseGain.connect(this.beamGain);const n=this.createSaturator();this.beamOscA.connect(this.beamFilter),this.beamOscB.connect(this.beamFilter),this.beamSubOsc.connect(this.beamFilter),n?(this.beamFilter.connect(n),n.connect(this.beamGain)):this.beamFilter.connect(this.beamGain),this.beamGain.connect(this.masterGain),this.beamOscA.start(t),this.beamOscB.start(t),this.beamSubOsc.start(t),this.beamNoiseSource.start(t)}catch(t){console.warn("[AudioSystem] Error starting continuous beam audio:",t),this.isBeamAudioActive=!1}}static stopContinuousBeamAudio(){if(!(!this.isBeamAudioActive||!this.ctx)){this.isBeamAudioActive=!1;try{const t=this.ctx.currentTime;this.beamGain&&(this.beamGain.gain.setValueAtTime(this.beamGain.gain.value,t),this.beamGain.gain.exponentialRampToValueAtTime(1e-4,t+.08));const e=this.beamOscA,n=this.beamOscB,i=this.beamSubOsc,s=this.beamLFO,r=this.beamLFOGain,a=this.beamNoiseSource,l=this.beamNoiseGain,c=this.beamGain,u=this.beamFilter;setTimeout(()=>{try{e?.stop(),n?.stop(),i?.stop(),s?.stop(),a?.stop(),e?.disconnect(),n?.disconnect(),i?.disconnect(),s?.disconnect(),r?.disconnect(),a?.disconnect(),l?.disconnect(),u?.disconnect(),c?.disconnect()}catch{}},90),this.beamOscA=null,this.beamOscB=null,this.beamSubOsc=null,this.beamLFO=null,this.beamLFOGain=null,this.beamNoiseSource=null,this.beamNoiseGain=null,this.beamFilter=null,this.beamGain=null}catch{this.beamOscA=null,this.beamOscB=null,this.beamSubOsc=null,this.beamLFO=null,this.beamLFOGain=null,this.beamNoiseSource=null,this.beamNoiseGain=null,this.beamFilter=null,this.beamGain=null}}}static playOverheatSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.whiteNoiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.buffer=this.whiteNoiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(2600,t),n.frequency.exponentialRampToValueAtTime(600,t+.45),n.Q.setValueAtTime(2.2,t),i.gain.setValueAtTime(.38,t),i.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+.45);const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(784,t),s.frequency.setValueAtTime(587,t+.12),r.gain.setValueAtTime(.24,t),r.gain.exponentialRampToValueAtTime(.001,t+.32),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+.32),e.onended=()=>{e.disconnect(),n.disconnect(),i.disconnect(),s.disconnect(),r.disconnect()}}}class Hs{static nextId=1;static vehicles=[];static roadRows=[];static roadCols=[];static intersections=[];static MAX_VEHICLES=36;static isInitialized=!1;static init(){this.vehicles=[],this.roadRows=[],this.roadCols=[],this.intersections=[],this.extractRoadNetwork(),this.spawnInitialFleet(),this.isInitialized=!0}static extractRoadNetwork(){const t=new Set,e=new Set;for(let n=0;n<nt.GRID_DIM;n++)for(let i=0;i<nt.GRID_DIM;i++){const s=nt.getCell(n,i);s&&s.overlayType===gn.ROAD&&(t.add(i),e.add(n),(s.terrainType===5||s.isIntersection)&&this.intersections.push({x:s.worldX,z:s.worldZ}))}this.roadRows=Array.from(t),this.roadCols=Array.from(e)}static spawnInitialFleet(){if(!(this.roadRows.length===0&&this.roadCols.length===0))for(let t=0;t<this.MAX_VEHICLES;t++){const e=this.createRandomVehicle();e&&this.vehicles.push(e)}}static createRandomVehicle(){const t=Math.random()>.5,e=Math.random()>.5?1:-1,n=e*2.8;let i=0,s=0,r=0,a=0,l=0;const c=26+Math.random()*14;if(t&&this.roadRows.length>0){const f=this.roadRows[Math.floor(Math.random()*this.roadRows.length)],g=nt.getCell(Math.floor(Math.random()*nt.GRID_DIM),f);if(!g)return null;i=-460+Math.random()*920,s=g.worldZ+n,r=e===1?0:Math.PI,a=e*c,l=0}else if(this.roadCols.length>0){const f=this.roadCols[Math.floor(Math.random()*this.roadCols.length)],g=nt.getCell(f,Math.floor(Math.random()*nt.GRID_DIM));if(!g)return null;i=g.worldX+n,s=-460+Math.random()*920,r=e===1?Math.PI*.5:-Math.PI*.5,a=0,l=e*c}else return null;const u=Math.random();let h="sedan",d=3900150;if(u<.15)h="police",d=1120295;else if(u<.35)h="cab",d=16436245;else if(u<.55)h="truck",d=10265519;else{const f=[15680580,3900150,1096065,9133302,15067115,3621201];d=f[Math.floor(Math.random()*f.length)]}return{id:this.nextId++,x:i,y:s,vx:a,vy:l,speed:c,heading:r,targetHeading:r,roadAxis:t?"EW":"NS",direction:e,type:h,color:d,alive:!0,respawnTimer:0,laneOffset:n}}static tick(t){this.isInitialized||this.init();const e=480;for(let n=0;n<this.vehicles.length;n++){const i=this.vehicles[n];if(!i.alive){if(i.respawnTimer-=t,i.respawnTimer<=0){const s=this.createRandomVehicle();s&&(s.id=i.id,this.vehicles[n]=s)}continue}i.x+=i.vx*t,i.y+=i.vy*t,i.x>e?i.x=-e:i.x<-e&&(i.x=e),i.y>e?i.y=-e:i.y<-e&&(i.y=e);for(const s of this.intersections){const r=s.x-i.x,a=s.z-i.y;if(r*r+a*a<16&&Math.random()<t*1.8){i.roadAxis==="EW"?(i.roadAxis="NS",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?Math.PI*.5:-Math.PI*.5,i.vx=0,i.vy=i.direction*i.speed,i.x=s.x+i.direction*2.8):(i.roadAxis="EW",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?0:Math.PI,i.vx=i.direction*i.speed,i.vy=0,i.y=s.z+i.direction*2.8);break}}i.heading+=(i.targetHeading-i.heading)*Math.min(1,t*8)}}static applyDamageInRadius(t,e,n){let i=0;const s=n*n;for(const r of this.vehicles){if(!r.alive)continue;const a=r.x-t,l=r.y-e;a*a+l*l<=s&&(this.destroyVehicle(r),i++)}return i}static checkRayHit(t){for(const e of this.vehicles){if(!e.alive)continue;const n=e.x-t.x,i=e.y-t.z;if(n*n+i*i<=16)return e}return null}static destroyVehicle(t){if(!t.alive)return;t.alive=!1,t.respawnTimer=6,Lt.fxQueue.push({type:"blast",x:t.x,y:t.y,z:2,data:{entityId:0,targetFrame:0}}),Lt.fxQueue.push({type:"fire",x:t.x,y:t.y,z:0,data:{}}),Lt.fxQueue.push({type:"smoke",x:t.x,y:t.y,z:0,data:{count:8}}),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}}),Yn.spawnDecal(t.x,t.y,"scorch",12);const e=t.type==="police"?"Police Cruiser":t.type==="truck"?"Cargo Truck":"Vehicle";hn.addScore(50,e,{x:t.x,y:t.y,z:4}),Ve.playExplosionSFX(.8)}}class _n{static nextId=1;static jets=[];static turrets=[];static missiles=[];static tracers=[];static playerShield=100;static MAX_SHIELD=100;static playerHull=100;static MAX_HULL=100;static shieldRegenTimer=0;static shieldFlareTimer=0;static jetSpawnTimer=5;static isInitialized=!1;static init(){this.jets=[],this.turrets=[],this.missiles=[],this.tracers=[],this.playerShield=100,this.playerHull=100,this.shieldRegenTimer=0,this.shieldFlareTimer=0,this.jetSpawnTimer=5,this.spawnGroundTurrets(),this.isInitialized=!0}static spawnGroundTurrets(){const t=[{x:-140,y:-160,z:2},{x:160,y:-140,z:2},{x:-180,y:150,z:2},{x:150,y:160,z:2}];for(const e of t)this.turrets.push({id:this.nextId++,x:e.x,y:e.y,z:e.z,yaw:0,pitch:.3,reloadTimer:2+Math.random()*3,hp:120,maxHp:120,alive:!0})}static spawnFighterWing(t,e){const n=Math.floor(Math.random()*4);let i=0,s=0;const r=520;n===0?(i=-r,s=-r+Math.random()*r*2):n===1?(i=r,s=-r+Math.random()*r*2):n===2?(i=-r+Math.random()*r*2,s=-r):(i=-r+Math.random()*r*2,s=r);const a=120,l=t-i,c=e-s,u=Math.atan2(c,l);for(let h=0;h<2;h++){const d=u+Math.PI*.5,f=h===0?-16:16,g=i+Math.cos(d)*f,_=s+Math.sin(d)*f;this.jets.push({id:this.nextId++,x:g,y:_,z:75+(Math.random()-.5)*10,vx:Math.cos(u)*a,vy:Math.sin(u)*a,vz:0,speed:a,heading:u,pitch:0,roll:0,state:"approach",attackTimer:0,burstCount:0,burstInterval:0,hp:40,maxHp:40,alive:!0,smokeTimer:0})}Ve.playJetFlybySFX()}static tick(t){this.isInitialized||this.init();let e=0,n=0,i=75;for(const r of oe.entities)if(cn.has(r)){const a=Te.get(r);a&&(e=a.worldX,n=a.worldY,i=a.worldZ||75);break}this.shieldFlareTimer>0&&(this.shieldFlareTimer-=t),this.shieldRegenTimer>0?this.shieldRegenTimer-=t:this.playerShield<this.MAX_SHIELD&&(this.playerShield=Math.min(this.MAX_SHIELD,this.playerShield+t*20)),this.jets.filter(r=>r.alive).length===0&&(this.jetSpawnTimer-=t,this.jetSpawnTimer<=0&&(this.jetSpawnTimer=16,this.spawnFighterWing(e,n)));for(let r=this.jets.length-1;r>=0;r--){const a=this.jets[r];if(!a.alive){this.jets.splice(r,1);continue}const l=e-a.x,c=n-a.y,u=i-a.z,h=Math.sqrt(l*l+c*c);if(a.state==="approach"){let f=Math.atan2(c,l)-a.heading;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;a.heading+=f*Math.min(1,t*3.5),a.roll=f*1.5,a.vx=Math.cos(a.heading)*a.speed,a.vy=Math.sin(a.heading)*a.speed,h<180&&(a.state="attack",a.burstCount=4,a.burstInterval=.08)}else if(a.state==="attack"){if(a.burstInterval-=t,a.burstInterval<=0&&a.burstCount>0){a.burstInterval=.12,a.burstCount--;const d=220,f=Math.sqrt(l*l+c*c+u*u);this.tracers.push({x:a.x,y:a.y,z:a.z,vx:l/f*d,vy:c/f*d,vz:u/f*d,lifetime:1.2})}(h<60||a.burstCount<=0)&&(a.state="breakaway")}else if(a.state==="breakaway"&&(a.roll=.8,a.vz=t*15,Math.abs(a.x)>520||Math.abs(a.y)>520)){a.alive=!1;continue}a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.smokeTimer+=t,a.smokeTimer>=.04&&(a.smokeTimer=0,Lt.fxQueue.push({type:"smoke",x:a.x,y:a.y,z:a.z,data:{count:1}}))}for(let r=this.tracers.length-1;r>=0;r--){const a=this.tracers[r];a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.lifetime-=t;const l=a.x-e,c=a.y-n,u=a.z-i;if(l*l+c*c+u*u<18*18){this.applyDamageToPlayer(12),this.tracers.splice(r,1);continue}a.lifetime<=0&&this.tracers.splice(r,1)}for(const r of this.turrets){if(!r.alive)continue;const a=e-r.x,l=n-r.y,c=i-r.z,u=Math.sqrt(a*a+l*l);r.yaw=Math.atan2(l,a),r.pitch=Math.atan2(c,Math.max(1,u)),r.reloadTimer-=t,r.reloadTimer<=0&&u<260&&(r.reloadTimer=5.5+Math.random()*2,this.missiles.push({id:this.nextId++,x:r.x,y:r.y,z:r.z+4,vx:Math.cos(r.yaw)*20,vy:Math.sin(r.yaw)*20,vz:35,speed:85,lifetime:5.5,alive:!0}),Ve.playMissileLaunchSFX(),Lt.fxQueue.push({type:"sparks",x:r.x,y:r.y,z:r.z+4,data:{count:8}}))}for(let r=this.missiles.length-1;r>=0;r--){const a=this.missiles[r];if(!a.alive){this.missiles.splice(r,1);continue}if(a.lifetime-=t,a.lifetime<=0){this.detonateMissile(a,!1),this.missiles.splice(r,1);continue}const l=e-a.x,c=n-a.y,u=i-a.z,h=Math.sqrt(l*l+c*c+u*u);if(h<14){this.applyDamageToPlayer(25),this.detonateMissile(a,!0),this.missiles.splice(r,1);continue}const d=l/h,f=c/h,g=u/h,_=3.8*t;a.vx+=(d*a.speed-a.vx)*_,a.vy+=(f*a.speed-a.vy)*_,a.vz+=(g*a.speed-a.vz)*_,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,Lt.fxQueue.push({type:"smoke",x:a.x,y:a.y,z:a.z,data:{count:2}})}}static applyDamageToPlayer(t){this.shieldRegenTimer=4,this.shieldFlareTimer=.35,this.playerShield>0?(this.playerShield=Math.max(0,this.playerShield-t),Ve.playShieldHitSFX()):(this.playerHull=Math.max(0,this.playerHull-t),Ve.playExplosionSFX(.7)),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}})}static detonateMissile(t,e){Lt.fxQueue.push({type:"blast",x:t.x,y:t.y,z:t.z,data:{entityId:0,targetFrame:0}}),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:e?10:4}})}static checkTargetHit(t,e,n,i){for(const s of this.jets){if(!s.alive)continue;const r=s.x-t,a=s.y-e;if(r*r+a*a<=n*n)return s.hp-=i,s.hp<=0&&(s.alive=!1,Lt.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),Lt.fxQueue.push({type:"debris",x:s.x,y:s.y,z:s.z,data:{count:25,palette:[5592405,8947848,16729088]}}),hn.addScore(400,"Interceptor Jet",{x:s.x,y:s.y,z:s.z}),Ve.playExplosionSFX(1.4)),!0}for(const s of this.turrets){if(!s.alive)continue;const r=s.x-t,a=s.y-e;if(r*r+a*a<=(n+8)*(n+8))return s.hp-=i,s.hp<=0&&(s.alive=!1,Lt.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z+4,data:{entityId:0,targetFrame:0}}),Yn.spawnDecal(s.x,s.y,"crater",20),hn.addScore(300,"SAM Turret",{x:s.x,y:s.y,z:s.z+4}),Ve.playExplosionSFX(1.2)),!0}for(const s of this.missiles){if(!s.alive)continue;const r=s.x-t,a=s.y-e;if(r*r+a*a<=(n+6)*(n+6))return s.alive=!1,Lt.fxQueue.push({type:"blast",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),hn.addScore(150,"Missile Intercepted",{x:s.x,y:s.y,z:s.z}),!0}return!1}}const mn=0,hr=2,Ao=.5,da=450,Sv=450,Tv=5,bv=.3,jh=140,wo=450,Ev=.35,Av=1024,Dd=Av/hr,Zh=-Dd+60,Kh=Dd-60;class ui{static camera;static shakeIntensity=mn;static shakeDuration=mn;static shakeMaxDuration=mn;static targetX=mn;static targetZ=mn;static ZOOM_STORAGE_KEY="alienv2_camera_zoom_frustum";static DEFAULT_FRUSTUM_ZOOM=380;static targetFrustumSize=380;static currentFrustumSize=380;static init(t){this.camera=t;const e=localStorage.getItem(this.ZOOM_STORAGE_KEY);if(e){const n=parseFloat(e);!isNaN(n)&&n>=320&&n<=wo?this.targetFrustumSize=n:this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM}else this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM;this.currentFrustumSize=this.targetFrustumSize,Bt.setFrustumSize(this.currentFrustumSize),window.addEventListener("wheel",n=>{this.targetFrustumSize=Math.max(jh,Math.min(wo,this.targetFrustumSize+n.deltaY*Ev));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}},{passive:!0})}static adjustZoom(t){this.targetFrustumSize=Math.max(jh,Math.min(wo,this.targetFrustumSize+t));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}}static setTarget(t,e){this.targetX=t,this.targetZ=e}static addShake(t,e){this.shakeIntensity=t,this.shakeDuration=e,this.shakeMaxDuration=e}static isPointInView(t,e){const n=this.currentFrustumSize/hr+150;return Math.abs(t-this.targetX)<n&&Math.abs(e-this.targetZ)<n}static currentCamX=mn;static currentCamZ=mn;static tick(t){if(!this.camera)return;if(Math.abs(this.currentFrustumSize-this.targetFrustumSize)>.05){const l=1-Math.exp(-14*t);this.currentFrustumSize+=(this.targetFrustumSize-this.currentFrustumSize)*l,Bt.setFrustumSize(this.currentFrustumSize)}const e=Math.max(Zh,Math.min(Kh,this.targetX))+da,n=Math.max(Zh,Math.min(Kh,this.targetZ))+da;this.currentCamX===mn&&this.currentCamZ===mn&&(this.currentCamX=e,this.currentCamZ=n);const i=1-Math.exp(-14*t);this.currentCamX+=(e-this.currentCamX)*i,this.currentCamZ+=(n-this.currentCamZ)*i;let s=this.currentCamX,r=this.currentCamZ,a=Sv;if(this.shakeDuration>mn){const l=1-this.shakeDuration/this.shakeMaxDuration,c=Math.exp(-l*Tv)*this.shakeIntensity,u=(Math.random()-Ao)*hr*c,h=(Math.random()-Ao)*hr*c,d=(Math.random()-Ao)*bv*hr*c;s+=u,r+=h,a+=d,this.shakeDuration-=t,this.shakeDuration<=mn&&(this.shakeIntensity=mn)}this.camera.position.set(s,a,r),this.camera.lookAt(s-da,mn,r-da)}}const wv=3,Rv=80*80,$h=3,Cv=.35,Iv=.5,Pv=.3,Dv=.6;class Lt{static fxQueue=[];static ambientTimer=0;static clusterTimer=0;static statTimer=0;static clusterCooldown=new Map;static destroyedBuildings=new Set;static totalBuildingCount=0;static destructionPercentage=0;static init(){this.destroyedBuildings.clear(),this.destructionPercentage=0,oe.addSystem(this.tick.bind(this))}static tick(t){if(this.ambientTimer+=t,this.ambientTimer>=Iv){this.ambientTimer=0;for(const n of oe.entities){const i=Ge.get(n),s=Te.get(n);if(!i||!s||!ui.isPointInView(s.worldX,s.worldY))continue;const r=1-i.totalHp/i.maxTotalHp;r>Pv&&Math.random()<r*.6&&this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:n}}),r>Dv&&Math.random()<(r-.3)*.4&&this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:2,entityId:n}})}}this.clusterTimer+=t,this.clusterTimer>=wv&&(this.clusterTimer=0,this.checkClusterExplosions());const e=performance.now()/1e3;for(const[n,i]of this.clusterCooldown)e>i&&this.clusterCooldown.delete(n);this.statTimer+=t,this.statTimer>=.5&&(this.statTimer=0,this.updateDestructionStats())}static updateDestructionStats(){let t=0,e=0;for(const n of oe.entities){const i=Ge.get(n);i&&(t++,i.totalHp<=0&&(e++,this.destroyedBuildings.add(n)))}t>0&&(this.totalBuildingCount=t,this.destructionPercentage=Math.min(100,Math.round(e/t*1e3)/10),Di.updateScore(this.destructionPercentage))}static getDestructionPercentage(){return this.destructionPercentage}static applyCollateralDamage(t,e,n,i=64,s=25){Hs.applyDamageInRadius(e,n,i),_n.checkTargetHit(e,n,i,s);const r=_i.queryRadius(e,n,i);for(const a of r){if(a===t)continue;const l=Te.get(a),c=Ge.get(a);if(!l||!c||c.totalHp<=0)continue;const u=l.worldX-e,h=l.worldY-n,d=Math.sqrt(u*u+h*h);if(d<=i&&d>.1){const f=1-d/i,g=Math.round(s*f);if(g<=0)continue;const _=[Un.CENTER,Un.TOP_CENTER,Un.BASE_CENTER,Un.BASE_LEFT,Un.BASE_RIGHT],m=_[Math.floor(Math.random()*_.length)],p=c.zones.get(m);if(p){p.hp=Math.max(0,p.hp-g),c.totalHp=Math.max(0,c.totalHp-g);const x=we.get(a);x&&(x.currentHP=c.totalHp);const v=ua.computeZoneLevel(p.hp/p.maxHp);v>p.level&&(p.level=v,c.globalDamageLevel=ua.computeGlobalLevel(c,Array.from(c.zones.values()))),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:a,intensity:"light"}}),this.fxQueue.push({type:"smoke",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:3,entityId:a}}),this.fxQueue.push({type:"sparks",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:4,entityId:a}})}}}}static checkClusterExplosions(){const t=[];for(const n of oe.entities){if(this.clusterCooldown.has(n))continue;const i=Ge.get(n),s=Te.get(n);if(!i||!s)continue;1-i.totalHp/i.maxTotalHp>=Cv&&t.push({entity:n,x:s.worldX,z:s.worldY})}if(t.length<$h)return;const e=new Set;for(let n=0;n<t.length;n++){if(e.has(n))continue;const i=[t[n]];for(let c=n+1;c<t.length;c++){if(e.has(c))continue;const u=t[n].x-t[c].x,h=t[n].z-t[c].z;u*u+h*h<=Rv&&i.push(t[c])}if(i.length<$h)continue;const s=i.reduce((c,u)=>c+u.x,0)/i.length,r=i.reduce((c,u)=>c+u.z,0)/i.length,a=performance.now()/1e3;i.forEach(c=>{e.add(t.indexOf(c)),this.clusterCooldown.set(c.entity,a+10)});const l=i[0].entity;this.fxQueue.push({type:"blast",x:s,y:r,z:10,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s+12,y:r+8,z:12,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s-10,y:r-6,z:8,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast360",x:s,y:r,z:6,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}}),this.fxQueue.push({type:"smoke",x:s,y:r,z:0,data:{count:20,entityId:l}}),this.fxQueue.push({type:"debris",x:s,y:r,z:0,data:{count:35,palette:[8930338,11162931,6697745,2236962],entityId:l}}),this.fxQueue.push({type:"dust",x:s,y:r,z:0,data:{count:18,entityId:l}}),this.fxQueue.push({type:"sparks",x:s,y:r,z:0,data:{count:20,entityId:l}}),console.log(`[DestructionSystem] Cluster blast! ${i.length} buildings @ (${s.toFixed(0)}, ${r.toFixed(0)})`)}}static computeDemolitionCheckDelay(t){if(!t)return .45;if(t.is3D){const c=t.height||160;return 1.8+Math.min(.15,Math.max(0,(c-135)/45*.15))}const e=t.footprintTiles||1,n=Math.max(0,e-1)*.08,i=t.height||40,s=Math.min(1,Math.max(0,(i-30)/105)),l=.38+Math.pow(s,1.25)*.72+n;return Math.min(1.3,Math.max(.35,l))}static applyZonalDamage(t,e,n,i){const s=Ge.get(t),r=Qe.get(t),a=Te.get(t);if(!s||!r||!a)return;const l=s.zones.get(e);if(!l)return;l.hp=Math.max(0,l.hp-n),s.totalHp=Math.max(0,s.totalHp-n);const c=we.get(t);c&&(c.currentHP=s.totalHp);const u=ua.computeZoneLevel(l.hp/l.maxHp),h=u>l.level;h&&(l.level=u,s.globalDamageLevel=ua.computeGlobalLevel(s,Array.from(s.zones.values())));const{typeKey:d,def:f}=ye.getTypeInfo(t,r.texturePrefix),g=ye.BUILDING_MAX_FRAMES[d]??14,_=1-s.totalHp/s.maxTotalHp,m=Math.min(Math.floor(_*g),g),p=f&&f.visualScale||1,v=(f&&f.width||16)*Math.SQRT2*p,y=Math.max(18,Math.round(v*1.15));if(s.totalHp>0){const I=_>.6?"crater":"scorch",T=_>.6?Math.round(y*.6):10+u*3;Yn.spawnDecal(a.worldX,a.worldY,I,T)}this.fxQueue.push({type:"blast_zonal",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:t,targetFrame:m,zone:e,level:Math.max(1,u),uvCenter:i}});const A=h?u*2+4:3;this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:A}});const E=Math.max(8,u*6+8);let w=[8930338,11162931,6697745];if(d==="1"?w=[16777215,14540253,11184810,16729156]:d==="3"&&(w=[13808780,11184810,8947848,6045747]),this.fxQueue.push({type:"debris",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:E,entityId:t,palette:w}}),this.fxQueue.push({type:"dust",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:12,entityId:t}}),this.fxQueue.push({type:"smoke",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:8,entityId:t}}),this.fxQueue.push({type:"sparks",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:10,entityId:t}}),this.fxQueue.push({type:"fire",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:t}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:t,intensity:h||u>=2?"heavy":"light"}}),s.totalHp>0&&this.fxQueue.push({type:"building_hit",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:t,intensity:h||u>=2?"heavy":"light"}}),hn.addScore(10,void 0,{x:a.worldX,y:a.worldY,z:20}),s.totalHp<=0){if(!this.destroyedBuildings.has(t)){this.destroyedBuildings.add(t);let I=100;f&&(f.is3D?I=2500:f.tier==="background"?I=500:f.tier==="midground"?I=250:f.footprintTiles&&f.footprintTiles>=3&&(I=1e3)),hn.addScore(I,f?.name||"Demolished",{x:a.worldX,y:a.worldY,z:30}),this.updateDestructionStats();const T=this.computeDemolitionCheckDelay(f);this.fxQueue.push({type:"building_destroyed",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:t,is3D:!!f?.is3D,name:f?.name,delay:T}})}f&&f.is3D||(ye.trigger2DDemolition(t,y,w),oi.spawnDemolitionVolcano(a.worldX,1,a.worldY,y,w),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}),this.fxQueue.push({type:"blast360",x:a.worldX,y:a.worldY,z:6,data:{entityId:t,targetFrame:g}}))}}static applyDamage(t,e){const n=we.get(t),i=Qe.get(t),s=Te.get(t);if(!n||!i||!s)return;n.currentHP=Math.max(0,n.currentHP-e);const r=Ge.get(t);r&&(r.totalHp=n.currentHP);const a=i.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/),l=a?a[1]:"3",c=ye.BUILDING_MAX_FRAMES[l]??14,u=Mv.computeFrameIndex(n.currentHP,n.maxHP,c);let h=[8930338,11162931,6697745];if(l==="1"?h=[16777215,14540253,11184810,16729156]:l==="3"&&(h=[13808780,11184810,8947848,6045747]),hn.addScore(10,void 0,{x:s.worldX,y:s.worldY,z:20}),u!==n.state){n.state=u;const{def:d}=ye.getTypeInfo(t,i.texturePrefix),f=d&&d.visualScale||1,g=d&&d.width||16,_=Math.max(18,Math.round(g*Math.SQRT2*f*1.15));if(n.currentHP<=0){if(!this.destroyedBuildings.has(t)){this.destroyedBuildings.add(t);let m=100;d&&(d.is3D?m=2500:d.tier==="background"?m=500:d.tier==="midground"?m=250:d.footprintTiles&&d.footprintTiles>=3&&(m=1e3)),hn.addScore(m,d?.name||"Demolished",{x:s.worldX,y:s.worldY,z:30}),this.updateDestructionStats();const p=this.computeDemolitionCheckDelay(d);this.fxQueue.push({type:"building_destroyed",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:t,is3D:!!d?.is3D,name:d?.name,delay:p}})}(!d||!d.is3D)&&(ye.trigger2DDemolition(t,_,h),oi.spawnDemolitionVolcano(s.worldX,1,s.worldY,_,h),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}))}else Yn.spawnDecal(s.worldX,s.worldY,"scorch",15),this.fxQueue.push({type:"building_hit",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:t,intensity:"heavy"}});this.fxQueue.push({type:u===c?"blast":"blast360",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:t,targetFrame:u}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}}),this.fxQueue.push({type:"debris",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:Math.min(u*3,30),entityId:t,palette:h}}),this.fxQueue.push({type:"dust",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:15,entityId:t}}),this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:8,entityId:t}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:12,entityId:t}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:t,intensity:"heavy"}})}else this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:t}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:5,entityId:t}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:t,intensity:"light"}}),this.fxQueue.push({type:"building_hit",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:t,intensity:"light"}})}static executeTextureSwap(t,e){const n=Qe.get(t);n&&(n.currentFrame=e)}}const ar=2,Ke=0,Ai=1,Qh=160,Jh="3",Lv=Math.SQRT1_2,Nv=Math.SQRT1_2,fa=Math.PI/4,Fv=Math.sqrt(1.5),xs=.5,Uv=0,Ov=0,Bv=.2,tu=1;function eu(o,t){const e=(o+t+1024)/2048;return Math.min(750,Math.max(100,100+Math.floor(e*650)))}const nu=64,zv=1,kv=.4,Hv=9999,Gv=1.5,Vv=2,Wv=Math.PI/2.5,Xv=14,Ro=.15,qv=1.05,Yv=.92,jv=.45,Zv=.15,Kv=16777215,$v=1.025,Qv=.96,Jv=.08,tM=16772829,eM=8,nM=Math.PI*2*3,iM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,sM=`
  uniform sampler2D mapA;
  uniform sampler2D mapB;
  uniform float mixRatio;
  uniform vec3 flashColor;
  uniform float flashIntensity;
  uniform float opacity;

  varying vec2 vUv;

  void main() {
    vec4 colA = texture2D(mapA, vUv);
    vec4 colB = texture2D(mapB, vUv);

    vec4 blended = mix(colA, colB, mixRatio);

    if (blended.a < 0.05) discard;

    vec3 finalColor = mix(blended.rgb, flashColor, flashIntensity);

    gl_FragColor = vec4(finalColor, blended.a * opacity);
  }
`;class ye{static sprites=new Map;static models3D=new Map;static shadowMeshes=new Map;static sharedShadowGeo=null;static sharedShadowMat=null;static sharedShadowTex=null;static mixers=new Map;static animActions=new Map;static dummyHitSprites=new Map;static sharedGeometry=new $e(tu,tu);static hitFxMap=new Map;static flashMap=new Map;static blendMap=new Map;static lastFrameMap=new Map;static cachedTexture=new Map;static cachedOffset=new Map;static cachedTypeInfo=new Map;static initializedTransforms=new Set;static activeTransforms=new Set;static collapseMap=new Map;static FRAME_STEP_SPEED=10;static displayFrameMap=new Map;static demoStateMap=new Map;static partialDamageTimeMap=new Map;static demo2DMap=new Map;static getSharedShadowTexture(){if(!this.sharedShadowTex){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(32,32,4,32,32,30);n.addColorStop(0,"rgba(0, 0, 0, 0.65)"),n.addColorStop(.45,"rgba(0, 0, 0, 0.35)"),n.addColorStop(.8,"rgba(0, 0, 0, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),e.fillStyle=n,e.beginPath(),e.arc(32,32,30,0,Math.PI*2),e.fill()}this.sharedShadowTex=new Vn(t),this.sharedShadowTex.generateMipmaps=!1,this.sharedShadowTex.minFilter=Se}return this.sharedShadowTex}static getOrCreateShadow(t,e,n){let i=this.shadowMeshes.get(t);if(!i){this.sharedShadowGeo||(this.sharedShadowGeo=new $e(1,1)),this.sharedShadowMat||(this.sharedShadowMat=new de({map:this.getSharedShadowTexture(),transparent:!0,opacity:.45,depthWrite:!1,depthTest:!0})),i=new At(this.sharedShadowGeo,this.sharedShadowMat),i.matrixAutoUpdate=!1,i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/4,i.renderOrder=4;const s=n*1.35;i.scale.set(s,s,1),i.position.set(e.worldX,.04,e.worldY),i.updateMatrix(),Bt.groundGroup.add(i),this.shadowMeshes.set(t,i)}return i}static getTypeInfo(t,e){let n=this.cachedTypeInfo.get(t);if(!n){const i=e?e.match(/building_([a-zA-Z0-9_]+)_stage_/):null,s=i?i[1]:Jh,r=fe[s]||fe[Jh];n={typeKey:s,def:r},this.cachedTypeInfo.set(t,n)}return n}static markDirty(t){this.activeTransforms.add(t)}static triggerCollapse(t,e){this.activeTransforms.add(t),this.collapseMap.has(t)||this.collapseMap.set(t,{tiltAngle:Ke,impactVector:e.clone().normalize()})}static trigger2DDemolition(t,e,n){this.activeTransforms.add(t),!this.demo2DMap.has(t)&&this.demo2DMap.set(t,{elapsed:Ke,duration:1.2,footprintSize:e,craterSpawned:!1,palette:n})}static crushBuildingsInTrajectory(t,e,n=nu){for(const i of Qe.keys()){const s=Te.get(i),r=we.get(i);if(!s||!r||r.currentHP<=Ke)continue;const a=s.worldX-t.worldX,l=s.worldY-t.worldY,c=Math.sqrt(a*a+l*l);c>zv&&c<=n&&(a*e.x+l*e.z)/c>kv&&Lt.applyDamage(i,Hv)}}static getSpritePosition(t){const e=this.models3D.get(t);if(e)return e.position.clone();const n=this.sprites.get(t);return n?n.position.clone():null}static getVisualCenter(t,e){const n=this.dummyHitSprites.get(t);if(n)return e?e.copy(n.position):n.position.clone();const i=this.sprites.get(t);if(i)return e?e.copy(i.position):i.position.clone();const s=this.models3D.get(t);return s?e?e.set(s.position.x,30,s.position.z):new D(s.position.x,30,s.position.z):null}static getSpriteScale(t){const e=this.models3D.get(t);if(e)return e.scale.clone();const n=this.sprites.get(t);return n?n.scale.clone():null}static applyHitFX(t,e){this.activeTransforms.add(t);let n=this.hitFxMap.get(t);n||(n=[],this.hitFxMap.set(t,n)),e==="heavy"?(n.push({type:"shudder",elapsed:Ke,duration:Ro,amplitude:jv}),n.push({type:"squash",elapsed:Ke,duration:Ro,scaleXMult:qv,scaleYMult:Yv}),this.flashMap.set(t,{timeLeft:Zv,color:Kv}),Di.triggerFlash()):(n.push({type:"squash",elapsed:Ke,duration:Ro,scaleXMult:$v,scaleYMult:Qv}),this.flashMap.set(t,{timeLeft:Jv,color:tM}))}static tick(t){for(const e of Qe.keys()){const n=Qe.get(e),i=Te.get(e);if(!n||!i)continue;const{typeKey:s,def:r}=this.getTypeInfo(e,n.texturePrefix);if(r&&r.is3D){const _=this.sprites.get(e);_&&(_.visible=!1,Bt.cityGroup.remove(_),_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose()),this.sprites.delete(e)),this.update3DBuilding(e,n,i,s,r,t);continue}this.updateZonalFrame(e,n,t);const a=this.getOrCreateSprite(e,n,i),l=a.material,{texture:c,offset:u}=this.updateTextureAndOffset(e,n,l,t),h=this.processHitEffects(e,t),d=this.demo2DMap.get(e);let f=Ke,g=Ke;if(d){d.elapsed+=t;const _=Math.min(1,d.elapsed/d.duration);if(_<.95&&Math.random()<.22){const m=i.worldX+(Math.random()-xs)*(d.footprintSize*.35),p=i.worldY+(Math.random()-xs)*(d.footprintSize*.35),x=4+Math.random()*20;Math.random()<.4?Lt.fxQueue.push({type:"blast360",x:m,y:p,z:x,data:{entityId:e,targetFrame:0}}):Lt.fxQueue.push({type:"smoke",x:m,y:p,z:x,data:{count:3,entityId:e}}),Math.random()<.3&&Lt.fxQueue.push({type:"sparks",x:m,y:p,z:x,data:{count:5,entityId:e}})}if(f=_*24,g=Math.sin(_*Math.PI)*.08,_>.35&&(n.opacity=Math.max(0,1-(_-.35)/.65)),_>=1&&(n.visible=!1,n.opacity=0,!d.craterSpawned)){d.craterSpawned=!0,Yn.spawnDecal(i.worldX,i.worldY,"crater",d.footprintSize),Lt.fxQueue.push({type:"smoke",x:i.worldX,y:i.worldY,z:1,data:{count:16,entityId:e}}),Lt.fxQueue.push({type:"sparks",x:i.worldX,y:i.worldY,z:2,data:{count:10,entityId:e}}),a&&Sa.unregisterObject(a);const m=this.shadowMeshes.get(e);m&&(m.visible=!1)}}else{const _=Ge.get(e),m=we.get(e),p=_?_.totalHp:m?m.currentHP:100,x=_?_.maxTotalHp:m?m.maxHP:100;if(p>0&&p<x*.5&&Math.random()<.035&&ui.isPointInView(i.worldX,i.worldY)){const v=r?(r.height||40)*(r.visualScale||1):30,y=i.worldX+(Math.random()-xs)*6,A=i.worldY+(Math.random()-xs)*6,E=v*.5+Math.random()*(v*.3);Math.random()<.6?Lt.fxQueue.push({type:"smoke",x:y,y:A,z:E,data:{count:2,entityId:e}}):Lt.fxQueue.push({type:"fire",x:y,y:A,z:E,data:{entityId:e}})}}this.updateTransformAndPhysics(e,a,i,n,s,u,c,t,h,f,g),this.processHitFlash(e,l,t),a.visible=n.visible,l.uniforms.opacity.value=n.opacity}this.cleanupDestroyedEntities()}static BUILDING_MAX_FRAMES={1:14,2:14,3:14,4:13,5:14,b1:3,b2:3,b3:3,b4:2,res_bronze:3,res_sky:2,sky_artdeco:3,sky_biotech:3,sky_cyber:3,mega_titan:3,spaceship_hq:6,cyber_reactor:6,financial_tower:6,art_deco_skyscraper:3,statue_liberty:2,pentagon_defense:4,hospital_civic:4,mall_shopping:4,school_civic:4};static updateZonalFrame(t,e,n){const i=Ge.get(t),s=we.get(t),r=i?i.totalHp:s?s.currentHP:100,a=i?i.maxTotalHp:s?s.maxHP:100,{typeKey:l}=this.getTypeInfo(t,e.texturePrefix),c=this.BUILDING_MAX_FRAMES[l]??14,u=Math.max(0,Math.min(1,1-r/a)),h=Math.min(Math.floor(u*c),c);let d=this.displayFrameMap.get(t)??e.currentFrame??0;if(d<h){this.activeTransforms.add(t);const f=Math.floor(d);d=Math.min(h,d+n*this.FRAME_STEP_SPEED),this.displayFrameMap.set(t,d);const g=Math.floor(d);if(e.currentFrame=g,g>f){const _=Te.get(t);_&&Lt.fxQueue.push({type:"smoke",x:_.worldX,y:_.worldY,z:_.worldZ,data:{count:3,entityId:t}})}}}static getOrCreateSprite(t,e,n){let i=this.sprites.get(t);if(!i){const s=new Je({vertexShader:iM,fragmentShader:sM,uniforms:{mapA:{value:null},mapB:{value:null},mixRatio:{value:0},flashColor:{value:new Dt(16777215)},flashIntensity:{value:0},opacity:{value:1}},transparent:!0,side:Le,depthWrite:!1,depthTest:!0});i=new At(this.sharedGeometry,s),i.matrixAutoUpdate=!1,i.castShadow=!1,i.receiveShadow=!1,i.rotation.y=fa;const r=eu(n.worldX,n.worldY);i.renderOrder=r,Bt.cityGroup.add(i),Sa.registerObject(i,t),this.sprites.set(t,i);const{typeKey:a}=this.getTypeInfo(t,e.texturePrefix),l=mi[a];l&&qi.createZonesForBuilding(t,i,l)}return i}static updateTextureAndOffset(t,e,n,i){let s=this.cachedTexture.get(t),r=this.cachedOffset.get(t);const a=this.lastFrameMap.get(t),{typeKey:l}=this.getTypeInfo(t,e.texturePrefix);let c=this.blendMap.get(t);if(!c){const u=`${e.texturePrefix}${e.currentFrame}`,h=rn.getTexture(u);c={texA:h,texB:h,mixRatio:0,isBlending:!1},this.blendMap.set(t,c)}if(a!==e.currentFrame||s===void 0){this.activeTransforms.add(t);const u=`${e.texturePrefix}${e.currentFrame}`,h=rn.getTexture(u);r=rn.getSpriteOffset(l,e.currentFrame),this.lastFrameMap.set(t,e.currentFrame),this.cachedTexture.set(t,h),this.cachedOffset.set(t,r),h&&c.texB!==h&&(c.texA=c.texB||h,c.texB=h,c.mixRatio=0,c.isBlending=!0)}return c.isBlending&&(this.activeTransforms.add(t),c.mixRatio=Math.min(1,c.mixRatio+i*3.33),c.mixRatio>=1&&(c.texA=c.texB,c.isBlending=!1)),c.texA&&(n.uniforms.mapA.value=c.texA),c.texB&&(n.uniforms.mapB.value=c.texB),n.uniforms.mixRatio.value=c.mixRatio,{texture:c.texB,offset:r,typeKey:l}}static processHitEffects(t,e){let n=Ai,i=Ai,s=Ke,r=Ke;const a=this.hitFxMap.get(t);if(a){for(let l=a.length-1;l>=Ke;l--){const c=a[l];if(c.elapsed+=e,c.elapsed>=c.duration){a.splice(l,1);continue}const u=c.elapsed/c.duration;if(c.type==="squash"){const h=Math.exp(-u*6)*Math.cos(u*nM),f=Math.sin(u*Math.PI)*h;n*=Ai+(c.scaleXMult-Ai)*f,i*=Ai+(c.scaleYMult-Ai)*f}else if(c.type==="shudder"){const h=c.amplitude*Math.exp(-u*eM);s+=(Math.random()-xs)*ar*h,r+=(Math.random()-xs)*ar*h}}a.length===Ke&&this.hitFxMap.delete(t)}return{scaleXMult:n,scaleYMult:i,shudderDX:s,shudderDZ:r}}static updateTransformAndPhysics(t,e,n,i,s,r,a,l,c,u=Ke,h=Ke){if(!(!this.initializedTransforms.has(t)||this.activeTransforms.has(t)))return;const{def:f}=this.getTypeInfo(t,i.texturePrefix),g=f&&f.visualScale||1,_=f&&f.heightScale&&f.heightScale>1?f.heightScale:1,m=f&&f.width||16,p=r?r.w:a?.image?.width||Qh,x=r?r.h:a?.image?.height||Qh,v=(r?r.dx:-p/ar)+Uv,y=r&&typeof r.y_max=="number"?r.y_max:x*.95,A=r&&typeof r.y_min=="number"?r.y_min:0,E=Math.min(p*.25,Math.max(16,(y-A)*.25)),w=y-E;let I;r&&typeof r.base_cy=="number"&&r.base_cy>=x*.55&&y-r.base_cy<=x*.45?I=r.base_cy:I=w,I+=Ov;const T=m*Math.SQRT2*g,M=T*(x/p)*Fv*_,P=T*c.scaleXMult,F=M*c.scaleYMult,O=(-v-p/ar)/p*T,Y=-O*Lv,K=O*Nv,j=n.worldX+Y+c.shudderDX,ct=n.worldY+K+c.shudderDZ,q=(I-x/ar)/x,V=(n.worldZ||0)+q*M+Bv,at=this.collapseMap.get(t);if(at){at.tiltAngle+=l*Gv;const C=at.tiltAngle*.3*(at.impactVector.x>=0?1:-1);e.scale.set(P,F,Ai),e.rotation.set(0,fa,C),e.position.set(j,V-at.tiltAngle*Vv,ct),at.tiltAngle>=Wv&&(this.crushBuildingsInTrajectory(n,at.impactVector,nu),this.collapseMap.delete(t),i.currentFrame=this.BUILDING_MAX_FRAMES[s]??Xv)}else e.scale.set(P,F,Ai),e.rotation.set(0,fa,h),e.position.set(j,V-u,ct);const ot=this.getOrCreateShadow(t,n,m*g);if(ot){ot.position.set(n.worldX+c.shudderDX*.2,(n.worldZ||0)+.04,n.worldY+c.shudderDZ*.2),ot.visible=i.visible;const C=ot.material;at?C.opacity=Math.max(0,.45-at.tiltAngle*.5):C.opacity=.45*(i.opacity??1)}e.updateMatrix(),e.matrixWorldNeedsUpdate=!0,ot&&(ot.updateMatrix(),ot.matrixWorldNeedsUpdate=!0);const st=this.blendMap.get(t);this.hitFxMap.has(t)||this.collapseMap.has(t)||this.demo2DMap.has(t)||(st?.isBlending??!1)||(this.activeTransforms.delete(t),this.initializedTransforms.add(t),e.matrixAutoUpdate=!1,ot&&(ot.matrixAutoUpdate=!1))}static processHitFlash(t,e,n){const i=this.flashMap.get(t);i?(e.uniforms.flashColor.value.setHex(i.color),e.uniforms.flashIntensity.value=.8,i.timeLeft-=n,i.timeLeft<=Ke&&(e.uniforms.flashIntensity.value=0,this.flashMap.delete(t))):e.uniforms.flashIntensity.value=0}static update3DBuilding(t,e,n,i,s,r){const a=this.getOrCreateModel3D(t,e,n,i,s);if(!a)return!1;const l=Ge.get(t),c=we.get(t),u=l?l.totalHp:c?c.currentHP:100,h=l?l.maxTotalHp:c?c.maxHP:100,d=Math.max(0,Math.min(1,1-u/h)),f=this.mixers.get(t),g=this.animActions.get(t);let _=this.demoStateMap.get(t);const m=.8;if(u<=0&&!_&&(_={isDemolishing:!0,elapsedTime:this.partialDamageTimeMap.get(t)||0,maxDuration:g?g.maxDuration:4},this.demoStateMap.set(t,_),Lt.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:30,data:{entityId:t,targetFrame:0}}),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}})),_&&_.isDemolishing&&f){if(_.elapsedTime<_.maxDuration){const E=_.elapsedTime;if(_.elapsedTime+=r,f.update(r),Math.random()<.25){const M=n.worldX+(Math.random()-.5)*30,P=n.worldY+(Math.random()-.5)*30,F=10+Math.random()*80,O=Math.random()>.5?"blast":"blast360";Lt.fxQueue.push({type:O,x:M,y:P,z:F,data:{entityId:t,targetFrame:0}})}Math.random()<.15&&Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const w=E<1&&_.elapsedTime>=1,I=E<2.5&&_.elapsedTime>=2.5,T=E<3.8&&_.elapsedTime>=3.8;(w||I||T)&&(Lt.applyCollateralDamage(t,n.worldX,n.worldY,64,25),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}})),Math.random()<.35&&Lt.fxQueue.push({type:"smoke",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:3,entityId:t}}),Math.random()<.25&&Lt.fxQueue.push({type:"sparks",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:4,entityId:t}}),Math.random()<.2&&Lt.fxQueue.push({type:"debris",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:5,entityId:t,palette:[8947848,5592405,11184810]}}),E<_.maxDuration&&_.elapsedTime>=_.maxDuration&&(Yn.spawnDecal(n.worldX,n.worldY,"crater",38),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:16}}),Lt.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:4,data:{entityId:t,targetFrame:0}}))}}else if(f){const E=d*m;let w=this.partialDamageTimeMap.get(t)||0;w+=(E-w)*Math.min(1,r*5),this.partialDamageTimeMap.set(t,w),f.setTime(w),d>.25&&Math.random()<.12&&Lt.fxQueue.push({type:"smoke",x:n.worldX+(Math.random()-.5)*15,y:n.worldY+(Math.random()-.5)*15,z:10+Math.random()*40,data:{count:2,entityId:t}}),d>.5&&Math.random()<.15&&Lt.fxQueue.push({type:"sparks",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:15+Math.random()*50,data:{count:3,entityId:t}}),d>.75&&Math.random()<.18&&Lt.fxQueue.push({type:"debris",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:20+Math.random()*60,data:{count:3,entityId:t,palette:[10066329,6710886]}})}const p=this.processHitEffects(t,r),x=a.userData.baseScale||1;a.scale.set(x*p.scaleXMult,x*p.scaleYMult,x*p.scaleXMult);const v=a.userData.basePosX??n.worldX,y=a.userData.basePosZ??n.worldY,A=a.userData.basePosY??(n.worldZ||0);return a.position.set(v+p.shudderDX,A,y+p.shudderDZ),this.processHitFlash3D(t,a,r),a.visible=e.visible,!0}static getOrCreateModel3D(t,e,n,i,s){let r=this.models3D.get(t);if(!r){const a=s.gltfKey||"skyscraper_demolition",l=rn.getGLTF(a);if(!l)return null;r=fv(l.scene);const c=eu(n.worldX,n.worldY);r.renderOrder=c;const u=[];r.traverse(F=>{if(F.renderOrder=c,(F.name==="GroundPlane"||F.name.toLowerCase().includes("ground")||F.name.toLowerCase().includes("pixelground"))&&u.push(F),F.isMesh){const O=F;O.castShadow=!0,O.receiveShadow=!0,O.material&&(Array.isArray(O.material)?O.material:[O.material]).forEach(K=>{K.depthWrite=!0,K.depthTest=!0,K.side=Le,(K.isMeshStandardMaterial||K.isMeshPhysicalMaterial)&&(K.roughness=.6,K.metalness=.1,K.emissive&&(K.emissiveIntensity=.2))})}});for(const F of u)F.parent&&F.parent.remove(F);if(l.animations&&l.animations.length>0){const F=new tm(r),O=[];let Y=0;for(const K of l.animations){const j=F.clipAction(K);j.setLoop(Qu,1),j.clampWhenFinished=!0,j.play(),O.push(j),K.duration>Y&&(Y=K.duration)}this.mixers.set(t,F),this.animActions.set(t,{actions:O,maxDuration:Y}),F.setTime(0)}r.updateMatrixWorld(!0);const h=new Gn().setFromObject(r),d=new D;h.getSize(d);const f=s&&s.visualScale||1,g=(s.height||180)*f,_=(s.width||64)*f,m=d.y>.1?g/d.y:1,p=_*Math.SQRT2,x=d.x>.1&&d.z>.1?p/Math.max(d.x,d.z):m,v=Math.min(m,x);r.scale.set(v,v,v),r.updateMatrixWorld(!0);const y=new Gn().setFromObject(r),A=y.min.y,E=n.worldX,w=n.worldY,I=-A+(n.worldZ||0);r.position.set(E,I,w),r.userData={baseScale:v,basePosX:E,basePosY:I,basePosZ:w},Bt.cityGroup.add(r),Sa.registerObject(r,t),this.models3D.set(t,r);const T=Math.max(30,y.max.y-y.min.y),M=Math.max(20,Math.max(y.max.x-y.min.x,y.max.z-y.min.z)),P=mi[i]||mi.mega_titan;if(P){const F=new At(new $e(1,1),new de({visible:!0,transparent:!0,opacity:0,depthWrite:!1}));F.position.set(n.worldX,(n.worldZ||0)+T/2,n.worldY),F.scale.set(M,T,1),F.rotation.y=fa,F.userData={entity:t},Bt.cityGroup.add(F),qi.createZonesForBuilding(t,F,P),this.dummyHitSprites.set(t,F)}}return r}static processHitFlash3D(t,e,n){const i=this.flashMap.get(t);i&&(e.traverse(s=>{if(s.isMesh){const r=s;r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(i.color),l.emissiveIntensity=.8)})}}),i.timeLeft-=n,i.timeLeft<=Ke&&(e.traverse(s=>{if(s.isMesh){const r=s;r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(0),l.emissiveIntensity=0)})}}),this.flashMap.delete(t)))}static cleanupDestroyedEntities(){for(const[t,e]of this.sprites.entries())if(!oe.entities.has(t)||!Qe.has(t)){Bt.cityGroup.remove(e),Array.isArray(e.material)?e.material.forEach(i=>i.dispose()):e.material.dispose();const n=this.shadowMeshes.get(t);n&&(Bt.groundGroup.remove(n),this.shadowMeshes.delete(t)),this.sprites.delete(t),this.hitFxMap.delete(t),this.flashMap.delete(t),this.lastFrameMap.delete(t),this.cachedTexture.delete(t),this.cachedOffset.delete(t),this.cachedTypeInfo.delete(t),this.initializedTransforms.delete(t),this.activeTransforms.delete(t),qi.unregisterBuilding(t),this.displayFrameMap.delete(t),this.demoStateMap.delete(t),this.demo2DMap.delete(t),this.blendMap.delete(t)}for(const[t,e]of this.models3D.entries())if(!oe.entities.has(t)||!Qe.has(t)){Bt.cityGroup.remove(e),e.traverse(s=>{if(s.isMesh){const r=s;r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(a=>a.dispose()):r.material.dispose()}});const n=this.dummyHitSprites.get(t);n&&(Bt.cityGroup.remove(n),n.geometry.dispose(),this.dummyHitSprites.delete(t));const i=this.shadowMeshes.get(t);i&&(Bt.groundGroup.remove(i),this.shadowMeshes.delete(t)),this.models3D.delete(t),this.mixers.delete(t),this.animActions.delete(t),this.hitFxMap.delete(t),this.flashMap.delete(t),this.cachedTypeInfo.delete(t),this.initializedTransforms.delete(t),this.activeTransforms.delete(t),qi.unregisterBuilding(t),this.displayFrameMap.delete(t),this.demoStateMap.delete(t),this.demo2DMap.delete(t),this.blendMap.delete(t)}}static clearAll(){for(const[,t]of this.sprites.entries())Bt.cityGroup.remove(t),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose();for(const[,t]of this.shadowMeshes.entries())Bt.groundGroup.remove(t);this.shadowMeshes.clear();for(const[,t]of this.models3D.entries())Bt.cityGroup.remove(t),t.traverse(e=>{if(e.isMesh){const n=e;n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()}});for(const[,t]of this.dummyHitSprites.entries())Bt.cityGroup.remove(t),t.geometry.dispose();this.sprites.clear(),this.models3D.clear(),this.mixers.clear(),this.animActions.clear(),this.dummyHitSprites.clear(),this.hitFxMap.clear(),this.flashMap.clear(),this.lastFrameMap.clear(),this.cachedTexture.clear(),this.cachedOffset.clear(),this.cachedTypeInfo.clear(),this.initializedTransforms.clear(),this.activeTransforms.clear(),this.demo2DMap.clear(),qi.clearAll()}}const Ri={defaultTerrain:ft.GRASS,zones:[{id:"airport",terrain:ft.SIDEWALK,gx:0,gz:0,w:16,h:16},{id:"tech",terrain:ft.PLAZA_STONE,gx:0,gz:16,w:16,h:21},{id:"sports",terrain:ft.GRASS,gx:37,gz:0,w:27,h:16},{id:"park",terrain:ft.GRASS,gx:37,gz:16,w:27,h:21},{id:"financial",terrain:ft.PLAZA_STONE,gx:16,gz:0,w:21,h:16},{id:"financial",terrain:ft.PLAZA_STONE,gx:16,gz:16,w:21,h:21},{id:"civic",terrain:ft.PLAZA_STONE,gx:0,gz:37,w:16,h:27},{id:"residential",terrain:ft.GRASS,gx:16,gz:37,w:21,h:27},{id:"docks",terrain:ft.SIDEWALK,gx:48,gz:33,w:2,h:31},{id:"water",terrain:ft.WATER,gx:50,gz:33,w:14,h:31}],roads:[{id:"ave_0",axis:"NS",gx:0,gz:0,length:64},{id:"ave_16",axis:"NS",gx:16,gz:0,length:64},{id:"ave_32",axis:"NS",gx:32,gz:0,length:64},{id:"ave_48",axis:"NS",gx:48,gz:0,length:64},{id:"st_0",axis:"EW",gx:0,gz:0,length:64},{id:"st_16",axis:"EW",gx:0,gz:16,length:64},{id:"st_32",axis:"EW",gx:0,gz:32,length:49},{id:"st_48",axis:"EW",gx:0,gz:48,length:49}],landmarks:[{key:"mega_titan",gx:22,gz:22,terrain:ft.PLAZA_STONE,bufferTiles:2},{key:"spaceship_hq",gx:38,gz:22,terrain:ft.PLAZA_STONE,bufferTiles:2},{key:"financial_tower",gx:22,gz:38,terrain:ft.PLAZA_STONE,bufferTiles:2},{key:"cyber_reactor",gx:38,gz:38,terrain:ft.PLAZA_STONE,bufferTiles:2},{key:"art_deco_skyscraper",gx:18,gz:34,terrain:ft.PLAZA_STONE,bufferTiles:2},{key:"hospital_civic",gx:6,gz:22,terrain:ft.SIDEWALK,bufferTiles:1},{key:"pentagon_defense",gx:6,gz:38,terrain:ft.PLAZA_STONE,bufferTiles:1},{key:"mega_stadium",gx:38,gz:6,terrain:ft.GRASS,bufferTiles:2},{key:"mall_shopping",gx:22,gz:6,terrain:ft.SIDEWALK,bufferTiles:1},{key:"school_civic",gx:6,gz:54,terrain:ft.PLAZA_STONE,bufferTiles:1},{key:"1",gx:54,gz:6,terrain:ft.PLAZA_STONE,bufferTiles:1},{key:"2",gx:54,gz:22,terrain:ft.SIDEWALK,bufferTiles:1},{key:"3",gx:22,gz:54,terrain:ft.SIDEWALK,bufferTiles:1}],islands:[{gx:50,gz:33,w:14,h:31,platformGx:54,platformGz:42,platformW:5,platformH:5,landmark:"statue_liberty"}]};class rM{static planCityLayout(t,e,n,i,s){const r=[],a=[],l=(u,h,d,f,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<f+g;m++){const p=u+_,x=h+m;if(p<0||p>=t||x<0||x>=t||e[p][x])return!1}return!0},c=(u,h,d,f,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<f+g;m++){const p=u+_,x=h+m;p>=0&&p<t&&x>=0&&x<t&&(e[p][x]=!0)}};if(s)for(let u=0;u<t;u++)for(let h=0;h<t;h++){if(e[u][h])continue;const f=s[u][h]?.prototype;if(f&&f.buildingType){const g=f.buildingType,_=fe[g]||fe[3],m=_.footprintTiles??1,p=_.footprintTiles??1,x=m>1||p>1?1:0;l(u,h,m,p,x)&&(c(u,h,m,p,x),r.push({gx:u,gz:h,w:m,h:p,typeKey:g,lotType:"wfc_cluster"}))}}for(const u of Ri.zones){const h=n[u.id];if(!h||h.length===0)continue;const d=[];for(let p=u.gx;p<u.gx+u.w&&p<t;p++)for(let x=u.gz;x<u.gz+u.h&&x<t;x++)e[p][x]||d.push({gx:p,gz:x});const f=u.gx*1337+u.gz*7331;d.sort((p,x)=>(p.gx*97+p.gz*193+f)%100-(x.gx*97+x.gz*193+f)%100);const g=i[u.id]??.95,_=Math.floor(d.length*Math.min(.98,g));let m=0;for(const{gx:p,gz:x}of d){if(m>=_)break;if(e[p][x])continue;const v=Math.abs(p*97+x*193+f+m*13)%h.length;let y=h[v],A=fe[y]||fe[3],E=A.footprintTiles??1,w=A.footprintTiles??1,I=E>1||w>1?1:0;l(p,x,E,w,I)||(y=h.find(M=>(fe[M]?.footprintTiles??1)===1)||"b1",A=fe[y]||fe[3],E=1,w=1,I=0),l(p,x,E,w,I)&&(c(p,x,E,w,I),r.push({gx:p,gz:x,w:E,h:w,typeKey:y,lotType:"urban_cluster"}),m++)}}for(let u=0;u<t;u++)for(let h=0;h<t;h++)if(!e[u][h]){const d=Ri.zones.find(m=>u>=m.gx&&u<m.gx+m.w&&h>=m.gz&&h<m.gz+m.h);if(d&&d.terrain===ft.WATER)continue;const f=d?n[d.id]||["b1","b2","b3","b4"]:["b1","b2","b3","b4"],g=Math.abs(u*1337+h*7331)%f.length;let _=f[g];(fe[_]?.footprintTiles??1)>1&&(_=f.find(m=>(fe[m]?.footprintTiles??1)===1)||"b1"),l(u,h,1,1,0)&&(c(u,h,1,1,0),r.push({gx:u,gz:h,w:1,h:1,typeKey:_,lotType:"dense_infill"}))}return{lots:r,bufferTerrain:a}}}const aM={airport:["b4","sky_biotech","4","b3","sky_cyber","b1","b2"],financial:["sky_cyber","sky_artdeco","sky_biotech","5","b4","mega_titan","b3","res_sky"],tech:["sky_cyber","sky_biotech","b4","5","sky_artdeco","res_sky","b3","b2"],civic:["res_sky","b3","b4","res_bronze","1","2","b1","b2"],park:["b1","b2","b3","res_bronze"],sports:["mega_stadium","b3","b4","res_sky","b1","b2"],residential:["b1","b2","res_bronze","b3","res_sky","b1","b2"],docks:["b1","b2","4","b3","b4","b1","b2"]},oM={airport:1,financial:1,tech:1,civic:1,park:1,sports:1,residential:1,docks:1};class Sl{static generateCity(){nt.init();const t=nt.GRID_DIM,e=Array.from({length:t},()=>Array(t).fill(!1)),n=(g,_,m,p,x=1)=>{for(let v=-x;v<m+x;v++)for(let y=-x;y<p+x;y++){const A=g+v,E=_+y;A>=0&&A<t&&E>=0&&E<t&&(e[A][E]=!0)}},i=(g,_,m,p)=>{for(let x=0;x<m;x++)for(let v=0;v<p;v++){const y=g+x,A=_+v;if(y>=t||A>=t||e[y][A])return!1}return!0},s=(g,_,m,p,x,v=0)=>{for(let y=-v;y<m+v;y++)for(let A=-v;A<p+v;A++){const E=nt.getCell(g+y,_+A);E&&E.overlayType!==gn.ROAD&&(E.terrainType=x)}},r=(g,_,m,p="dense",x=0)=>{const v=fe[m]||fe[3],y=v.footprintTiles??1,A=v.footprintTiles??1;if(!i(g,_,y,A))return!1;n(g,_,y,A,x);const E=li.computeLotWorldPos(g,_,y,A),w=oe.createEntity(),I=li.calculateAndRegisterLot(w,E.x,E.z,m,p);return this.spawnBuildingEntity(w,I,m),!0};let a=0;for(const g of Ri.landmarks){const _=fe[g.key]||fe[3],m=_.footprintTiles??1,p=_.footprintTiles??1,x=g.bufferTiles??1;s(g.gx,g.gz,m,p,g.terrain,x),r(g.gx,g.gz,g.key,"landmark",x)&&a++}for(const g of Ri.islands){s(g.platformGx,g.platformGz,g.platformW,g.platformH,ft.PLAZA_STONE);for(let _=0;_<g.platformW;_++)for(let m=0;m<g.platformH;m++){const p=g.platformGx+_,x=g.platformGz+m;p>=0&&p<t&&x>=0&&x<t&&(e[p][x]=!1)}if(g.landmark){const _=fe[g.landmark]||fe[3],m=_.footprintTiles??1,p=_.footprintTiles??1,x=g.platformGx+Math.floor((g.platformW-m)/2),v=g.platformGz+Math.floor((g.platformH-p)/2);r(x,v,g.landmark,"landmark",0)&&a++}}for(const g of Ri.zones)for(let _=g.gx;_<g.gx+g.w&&_<t;_++)for(let m=g.gz;m<g.gz+g.h&&m<t;m++){const p=nt.getCell(_,m);p&&p.overlayType!==gn.ROAD&&(p.terrainType=g.terrain),g.terrain===ft.WATER&&(e[_][m]=!0)}const l=new Set,c=new Set;for(const g of Ri.roads){g.axis==="NS"?l.add(g.gx):c.add(g.gz);for(let _=0;_<g.length;_++){const m=g.axis==="NS"?g.gx:g.gx+_,p=g.axis==="NS"?g.gz+_:g.gz;m<0||m>=t||p<0||p>=t||(nt.setRoad(m,p,g.axis),e[m][p]=!0)}for(const _ of g.waypoints??[]){const m=g.axis==="NS"?g.gx:g.gx+_.cellOffset,p=g.axis==="NS"?g.gz+_.cellOffset:g.gz,x=nt.getCell(m,p);x&&nt.roadWaypoints.push({worldX:x.worldX,worldZ:x.worldZ,name:_.name,nextWaypoints:[]})}}for(const g of l)for(const _ of c)nt.setIntersection(g,_);for(const g of l)for(let _=0;_<t;_++)nt.setSidewalkIfNotRoad(g-1,_),nt.setSidewalkIfNotRoad(g+1,_);for(const g of c)for(let _=0;_<t;_++)nt.setSidewalkIfNotRoad(_,g-1),nt.setSidewalkIfNotRoad(_,g+1);const h=new zd(t).solve(42);if(h)for(let g=0;g<t;g++)for(let _=0;_<t;_++){if(e[g][_])continue;const p=h[g][_].prototype;nt.setTerrain(g,_,p.terrainType),p.overlayType===gn.ROAD&&(p.isIntersection?nt.setIntersection(g,_):nt.setRoad(g,_,p.roadAxis||"NS"),e[g][_]=!0)}const d=rM.planCityLayout(t,e,aM,oM,h);for(const g of d.bufferTerrain){const _=nt.getCell(g.gx,g.gz);_&&_.overlayType!==gn.ROAD&&(_.terrainType=g.terrain)}const f=(g,_,m,p="dense")=>{const x=fe[m]||fe[3],v=x.footprintTiles??1,y=x.footprintTiles??1,A=li.computeLotWorldPos(g,_,v,y),E=oe.createEntity(),w=li.calculateAndRegisterLot(E,A.x,A.z,m,p);return this.spawnBuildingEntity(E,w,m),!0};for(const g of d.lots)f(g.gx,g.gz,g.typeKey,g.lotType)&&a++;console.log(`[CityGenerator] ${a} buildings | ${Ri.roads.length} road segs | ${nt.roadWaypoints.length} waypoints | ${Ri.islands.length} island(s)`),_i.rebuild()}static spawnBuildingEntity(t,e,n){const i=fe[n]||fe[3];Te.set(t,{worldX:e.centerWorldX,worldY:e.centerWorldZ,worldZ:nt.getElevationAtWorld(e.centerWorldX,e.centerWorldZ)});const s=Tl(i),r=mi[n]||mi[3],a=Math.max(5,Math.round(s/r.length)),l=a*r.length;we.set(t,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const u of r)c.set(u.id,{id:u.id,level:0,hp:a,maxHp:a});Ge.set(t,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Ia.set(t,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),Qe.set(t,{meshId:`building_${t}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}class ys{static isShowcaseMode=!1;static showcaseEntities=[];static SHOWCASE_KEYS=["1","2","3","4","b1","b2","b3","b4","res_bronze","res_sky","5","sky_artdeco","sky_biotech","sky_cyber","mega_titan","spaceship_hq","cyber_reactor","financial_tower","art_deco_skyscraper","statue_liberty","pentagon_defense"];static toggleMode(){this.setMode(this.isShowcaseMode?"city":"showcase")}static setMode(t){t==="showcase"!==this.isShowcaseMode&&(this.isShowcaseMode=t==="showcase",this.clearWorld(),this.isShowcaseMode?this.generateShowcase():(Sl.generateCity(),Ca.finalizeMap()))}static clearWorld(){const t=[];for(const e of oe.entities)cn.has(e)||t.push(e);for(const e of t)oe.destroyEntity(e),Te.delete(e),we.delete(e),Ge.delete(e),Ia.delete(e),dv.delete(e),Qe.delete(e);ye.clearAll(),qi.clearAll(),nt.init(),_i.clear(),this.showcaseEntities=[]}static generateShowcase(){const t=this.SHOWCASE_KEYS,e=7,n=90,i=110,s=-540/2,r=-40;for(let a=0;a<t.length;a++){const l=t[a],c=Math.floor(a/e),u=a%e,h=s+u*n,d=r+c*i,f=oe.createEntity(),g=fe[l]||fe[3];Te.set(f,{worldX:h,worldY:d,worldZ:0});const _=Tl(g),m=mi[l]||mi[3],p=Math.max(5,Math.round(_/m.length)),x=p*m.length;we.set(f,{currentHP:x,maxHP:x,state:0});const v=new Map;for(const y of m)v.set(y.id,{id:y.id,level:0,hp:p,maxHp:p});Ge.set(f,{zones:v,totalHp:x,maxTotalHp:x,globalDamageLevel:0}),Ia.set(f,{width:g.width*g.visualScale,length:g.length*g.visualScale,height:g.height,active:!0}),Qe.set(f,{meshId:`building_${f}`,texturePrefix:`building_${l}_stage_`,currentFrame:0,visible:!0,opacity:1}),li.calculateAndRegisterLot(f,h,d,l,"showcase"),this.showcaseEntities.push({entity:f,typeKey:l,def:g,worldX:h,worldY:d})}Ca.finalizeMap(),_i.rebuild();for(const a of cn){const l=Te.get(a);l&&(l.worldX=0,l.worldY=-120,l.worldZ=75)}}static resetAllHP(){for(const t of this.showcaseEntities){const e=we.get(t.entity),n=Ge.get(t.entity),i=Qe.get(t.entity);if(e&&(e.currentHP=e.maxHP,e.state=0),n){n.totalHp=n.maxTotalHp,n.globalDamageLevel=0;for(const s of n.zones.values())s.hp=s.maxHp,s.level=0}i&&(i.currentFrame=0)}}static damageAll(t=25){for(const e of this.showcaseEntities){const n=Ge.get(e.entity);if(n)for(const i of n.zones.values()){const s=i.maxHp*t/100;Lt.applyZonalDamage(e.entity,i.id,s,{x:.5,y:.5})}}}static getShowcaseBuildings(){return this.showcaseEntities}}class Pe{static nextId=1;static canisters=[];static bomblets=[];static CLUSTER_COOLDOWN_TIME=2.5;static clusterCooldown=0;static BEAM_MAX_HEAT=100;static BEAM_HEAT_BUILD_RATE=25;static BEAM_HEAT_COOL_RATE=35;static BEAM_OVERHEAT_RESET_THRESHOLD=15;static beamHeat=0;static beamOverheated=!1;static beamFiring=!1;static beamOrigin=new D;static beamTarget=new D;static init(){this.canisters=[],this.bomblets=[],this.clusterCooldown=0,this.beamHeat=0,this.beamOverheated=!1,this.beamFiring=!1,oe.addSystem(this.tick.bind(this))}static tick(t){this.clusterCooldown>0&&(this.clusterCooldown=Math.max(0,this.clusterCooldown-t)),this.beamFiring&&!this.beamOverheated?(this.beamHeat=Math.min(this.BEAM_MAX_HEAT,this.beamHeat+this.BEAM_HEAT_BUILD_RATE*t),this.beamHeat>=this.BEAM_MAX_HEAT&&(this.beamOverheated=!0,this.beamFiring=!1,Ve.stopContinuousBeamAudio(),Ve.playOverheatSFX())):(this.beamHeat=Math.max(0,this.beamHeat-this.BEAM_HEAT_COOL_RATE*t),this.beamOverheated&&this.beamHeat<=this.BEAM_OVERHEAT_RESET_THRESHOLD&&(this.beamOverheated=!1));for(const n of oe.entities)if(cn.has(n)){const i=hi.get(n);i&&(i.clusterCooldown=this.clusterCooldown,i.clusterMaxCooldown=this.CLUSTER_COOLDOWN_TIME,i.beamHeat=this.beamHeat,i.beamMaxHeat=this.BEAM_MAX_HEAT,i.beamOverheated=this.beamOverheated,i.beamFiring=this.beamFiring&&!this.beamOverheated);break}const e=85;for(let n=this.canisters.length-1;n>=0;n--){const i=this.canisters[n];i.vz-=e*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,Math.random()<.4&&Lt.fxQueue.push({type:"smoke",x:i.x,y:i.y,z:i.z,data:{count:1}}),i.z<=i.splitAltitude&&(this.splitCanister(i),this.canisters.splice(n,1))}for(let n=this.bomblets.length-1;n>=0;n--){const i=this.bomblets[n];i.vz-=e*1.1*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.rotation+=i.rotSpeed*t,Math.random()<.3&&Lt.fxQueue.push({type:"sparks",x:i.x,y:i.y,z:i.z,data:{count:2}}),i.z<=0&&(this.detonateBomblet(i),this.bomblets.splice(n,1))}}static fireClusterBomb(t,e){if(this.clusterCooldown>0)return!1;this.clusterCooldown=this.CLUSTER_COOLDOWN_TIME;const n=e.x-t.x,i=e.y-t.z,s=t.y,r=Math.max(.6,Math.sqrt(2*s/85)),a=n/(r*1.5),l=i/(r*1.5);return this.canisters.push({id:this.nextId++,x:t.x,y:t.z,z:t.y,vx:a,vy:l,vz:-15,targetX:e.x,targetY:e.y,splitAltitude:Math.max(25,t.y*.45)}),Ve.playClusterLaunchSFX(),!0}static splitCanister(t){Ve.playClusterSplitSFX(),Lt.fxQueue.push({type:"blast",x:t.x,y:t.y,z:t.z,data:{entityId:0,targetFrame:0}}),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const e=6,n=28;for(let i=0;i<e;i++){const s=i/e*Math.PI*2+(Math.random()-.5)*.3,r=n*(.8+Math.random()*.4),a=t.vx*.4+Math.cos(s)*r,l=t.vy*.4+Math.sin(s)*r,c=8+Math.random()*8;this.bomblets.push({id:this.nextId++,x:t.x,y:t.y,z:t.z,vx:a,vy:l,vz:c,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*15})}}static detonateBomblet(t){Lt.applyCollateralDamage(0,t.x,t.y,45,50),Yn.spawnDecal(t.x,t.y,"crater",28),Lt.fxQueue.push({type:"blast360",x:t.x,y:t.y,z:2,data:{entityId:0,targetFrame:0}}),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}}),Lt.fxQueue.push({type:"debris",x:t.x,y:t.y,z:0,data:{count:18,palette:[8930338,11162931,5592405,2236962]}}),Lt.fxQueue.push({type:"dust",x:t.x,y:t.y,z:0,data:{count:12}}),Lt.fxQueue.push({type:"fire",x:t.x,y:t.y,z:0,data:{}}),Ve.playExplosionSFX(1.3)}static isClusterReady(){return this.clusterCooldown<=0}static getClusterCooldownRatio(){return this.clusterCooldown/this.CLUSTER_COOLDOWN_TIME}static setBeamFiring(t){if(this.beamOverheated){this.beamFiring=!1;return}this.beamFiring=t}static isBeamFiring(){return this.beamFiring&&!this.beamOverheated}static isBeamOverheated(){return this.beamOverheated}static getBeamHeatRatio(){return Math.min(1,this.beamHeat/this.BEAM_MAX_HEAT)}static getBeamHeat(){return this.beamHeat}static updateBeamEndpoints(t,e,n,i,s,r){this.beamOrigin.set(t,e,n),this.beamTarget.set(i,s,r)}}const Ln=14,iu=2.2,su=.45,ru=2.2,lM=75,cM=62463,hM=17510,uM=9684477,dM=3900150,fM=65535;class Pa{static mothershipGroup=null;static playerEntity=null;static groundShadowRing=null;static aimReticleGroup=null;static reticleRingMat=null;static reticleDotMat=null;static aimTargetX=0;static aimTargetZ=0;static lastX=0;static lastZ=0;static currentTiltX=0;static currentTiltZ=0;static currentShadowY=.1;static tick(t){if(this.playerEntity===null){for(const e of oe.entities)if(cn.has(e)){this.playerEntity=e,this.initMesh();const n=Te.get(e);n&&(this.lastX=n.worldX,this.lastZ=n.worldY,this.aimTargetX=n.worldX,this.aimTargetZ=n.worldY);break}}if(this.playerEntity!==null){const e=Te.get(this.playerEntity);if(e){const n=nt.getElevationAtWorld(e.worldX,e.worldY);if(e.worldZ=lM+n,this.mothershipGroup){const i=(e.worldX-this.lastX)/Math.max(.001,t),s=(e.worldY-this.lastZ)/Math.max(.001,t);this.lastX=e.worldX,this.lastZ=e.worldY;const r=Math.max(-.25,Math.min(.25,-i*.003)),a=Math.max(-.25,Math.min(.25,s*.003)),l=1-Math.exp(-10*t);this.currentTiltX+=(a-this.currentTiltX)*l,this.currentTiltZ+=(r-this.currentTiltZ)*l;const c=Math.sin(performance.now()*.0025)*1.8;if(this.mothershipGroup.position.set(e.worldX,e.worldZ+c,e.worldY),this.mothershipGroup.rotation.y+=t*.3,this.mothershipGroup.rotation.x=this.currentTiltX,this.mothershipGroup.rotation.z=this.currentTiltZ,this.groundShadowRing){let d=n+.1;const f=_i.queryRadius(e.worldX,e.worldY,16);for(const m of f){const p=Te.get(m);if(!p)continue;const x=Math.abs(p.worldX-e.worldX),v=Math.abs(p.worldY-e.worldY);if(x<14&&v<14){const y=ye.getSpriteScale(m),A=y?Math.min(60,y.y*.7):20;A>d&&(d=A)}}const g=1-Math.exp(-12*t);this.currentShadowY+=(d-this.currentShadowY)*g,this.groundShadowRing.position.set(e.worldX,this.currentShadowY+.1,e.worldY),this.groundShadowRing.rotation.z+=t*.4;const _=this.groundShadowRing.material;_&&(_.opacity=.35+Math.sin(performance.now()*.004)*.12)}const u=Math.max(-80,Math.min(80,(this.aimTargetX-e.worldX)*.22)),h=Math.max(-80,Math.min(80,(this.aimTargetZ-e.worldY)*.22));ui.setTarget(e.worldX+u,e.worldY+h)}}}}static initMesh(){this.mothershipGroup=new ve,this.mothershipGroup.name="MothershipUFO";const t=new En(Ln*.4,Ln,Ln*.35,32),e=new ge({color:cM,emissive:hM,emissiveIntensity:.6,roughness:.2,metalness:.8,depthTest:!0,depthWrite:!0}),n=new At(t,e);n.scale.set(iu,su,ru),n.castShadow=!0,n.renderOrder=0,this.mothershipGroup.add(n);const i=new Ar(Ln*.65,24,16,0,Math.PI*2,0,Math.PI*.5),s=new ge({color:uM,emissive:dM,emissiveIntensity:.9,transparent:!0,opacity:.85,roughness:.1,depthTest:!0,depthWrite:!1}),r=new At(i,s);r.position.y=Ln*.15,r.scale.set(iu*.7,su*1.5,ru*.7),r.renderOrder=1,this.mothershipGroup.add(r);const a=new En(Ln*.3,Ln*.1,Ln*.1,16),l=new de({color:fM,depthTest:!0,depthWrite:!0}),c=new At(a,l);c.position.y=-Ln*.18,c.renderOrder=0,this.mothershipGroup.add(c),Bt.ufoScene.add(this.mothershipGroup);const u=new ji(Ln*.8,Ln*1.2,32),h=new de({color:62463,side:Le,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1});this.groundShadowRing=new At(u,h),this.groundShadowRing.rotation.x=-Math.PI/2,this.groundShadowRing.renderOrder=800,Bt.playerGroup.add(this.groundShadowRing),this.aimReticleGroup=new ve,this.aimReticleGroup.name="AimTargetReticle";const d=new ji(4.2,5.4,32);this.reticleRingMat=new de({color:62463,side:Le,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1});const f=new At(d,this.reticleRingMat);f.rotation.x=-Math.PI/2,f.renderOrder=900,this.aimReticleGroup.add(f);for(let m=0;m<4;m++){const p=m*Math.PI/2,x=new $e(.8,2.5),v=new At(x,this.reticleRingMat);v.rotation.x=-Math.PI/2,v.position.set(Math.cos(p)*6.5,0,Math.sin(p)*6.5),v.rotation.z=-p,v.renderOrder=900,this.aimReticleGroup.add(v)}const g=new Bl(.9,16);this.reticleDotMat=new de({color:16777215,side:Le,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1});const _=new At(g,this.reticleDotMat);_.rotation.x=-Math.PI/2,_.renderOrder=901,this.aimReticleGroup.add(_),Bt.playerGroup.add(this.aimReticleGroup)}static updateAimTarget(t,e,n,i){if(this.aimTargetX=t,this.aimTargetZ=n,this.aimReticleGroup){this.aimReticleGroup.position.set(t,e+.15,n),this.aimReticleGroup.rotation.y+=.04;const s=i?16724838:62463;this.reticleRingMat&&this.reticleRingMat.color.getHex()!==s&&this.reticleRingMat.color.setHex(s)}}static getPlayerMeshPosition(){return this.mothershipGroup?this.mothershipGroup.position.clone():null}}const au=25,ou=0,lu=120,pM=.1;class Pi{static groundPlane=new Nn(new D(0,1,0),0);static midHeightPlane=new Nn(new D(0,1,0),-30);static elevPlane=new Nn(new D(0,1,0),0);static raycaster=new ql;static pointerVector=new wt;static groundIntersectPoint=new D;static midIntersectPoint=new D;static tempProj=new D;static targetPos={x:0,y:0};static initializedTarget=!1;static mouseFollowMode=!1;static fKeyWasDown=!1;static lastHoverCheckTime=0;static cachedHoveredHit=null;static cachedHoveredEntity=null;static cachedFallbackPoint=null;static HOVER_CHECK_INTERVAL=.033;static beamDamageTimer=0;static init(){oe.addSystem(this.tick.bind(this))}static tick(t){for(const e of oe.entities)if(cn.has(e)){const n=Te.get(e),i=hi.get(e);if(!n||!i)continue;this.initializedTarget||(this.targetPos.x=n.worldX,this.targetPos.y=n.worldY,this.initializedTarget=!0);let s=0,r=0;(Xt.isKeyDown("KeyW")||Xt.isKeyDown("ArrowUp")||Xt.isKeyDown("w"))&&(s-=1,r-=1),(Xt.isKeyDown("KeyS")||Xt.isKeyDown("ArrowDown")||Xt.isKeyDown("s"))&&(s+=1,r+=1),(Xt.isKeyDown("KeyA")||Xt.isKeyDown("ArrowLeft")||Xt.isKeyDown("a"))&&(s-=1,r+=1),(Xt.isKeyDown("KeyD")||Xt.isKeyDown("ArrowRight")||Xt.isKeyDown("d"))&&(s+=1,r-=1);const a=Xt.joystickVector;(a.x!==0||a.y!==0)&&(s+=a.y+a.x,r+=a.y-a.x),Xt.isKeyDown("KeyF")||Xt.isKeyDown("f")?this.fKeyWasDown||(this.mouseFollowMode=!this.mouseFollowMode,this.fKeyWasDown=!0):this.fKeyWasDown=!1;const l=Math.sqrt(s*s+r*r);if(l>0){const x=Xt.isKeyDown("ShiftLeft")||Xt.isKeyDown("ShiftRight")?lu*1.6:lu;this.targetPos.x+=s/l*x*t,this.targetPos.y+=r/l*x*t,this.targetPos.x=Math.max(-480,Math.min(480,this.targetPos.x)),this.targetPos.y=Math.max(-480,Math.min(480,this.targetPos.y))}else if(this.mouseFollowMode){const p=this.getMouseGroundPosition();p&&(this.targetPos.x=Math.max(-480,Math.min(480,p.x)),this.targetPos.y=Math.max(-480,Math.min(480,p.z)))}const c=1-Math.exp(-10*t);if(n.worldX+=(this.targetPos.x-n.worldX)*c,n.worldY+=(this.targetPos.y-n.worldY)*c,this.lastHoverCheckTime+=t,this.lastHoverCheckTime>=this.HOVER_CHECK_INTERVAL){this.lastHoverCheckTime=0;const p=this.getMouseGroundPosition();if(this.cachedHoveredHit=qi.getHitZone(Bt.camera,p),this.cachedFallbackPoint=null,this.cachedHoveredHit)this.cachedHoveredEntity=this.cachedHoveredHit.entity;else{const x=Xt.getMouseNDC();this.pointerVector.set(x.x,x.y);const v=this.findBestBuildingNearCursor(this.pointerVector,Bt.camera);v?(this.cachedHoveredEntity=v.entity,this.cachedFallbackPoint=v.point):this.cachedHoveredEntity=null}if(this.cachedHoveredEntity!==null){const x=Qe.get(this.cachedHoveredEntity),v=Ge.get(this.cachedHoveredEntity),y=we.get(this.cachedHoveredEntity),A=x?x.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/):null,E=A?A[1]:"3",w=fe[E]||fe[3],I=v?v.totalHp:y?y.currentHP:100,T=v?v.maxTotalHp:y?y.maxHP:100,M=x?x.currentFrame:0;Di.updateTargetInspector({name:w.name,key:E,hp:I,maxHp:T,frame:M})}else Di.updateTargetInspector(null)}const u=this.getMouseGroundPosition()||new D(n.worldX,0,n.worldY);let h=u.x,d=.1,f=u.z,g=!1;if(this.cachedHoveredHit)h=this.cachedHoveredHit.point.x,d=this.cachedHoveredHit.point.y,f=this.cachedHoveredHit.point.z,g=!0;else if(this.cachedHoveredEntity!==null){const p=this.cachedFallbackPoint||ye.getVisualCenter(this.cachedHoveredEntity)||ye.getSpritePosition(this.cachedHoveredEntity);p&&(h=p.x,d=p.y,f=p.z,g=!0)}if(Pa.updateAimTarget(h,d,f,g),this.tempProj.set(h,d,f).project(Bt.camera),this.tempProj.z<=1){const p=(this.tempProj.x*.5+.5)*window.innerWidth,x=(-this.tempProj.y*.5+.5)*window.innerHeight;Di.setTargetReticle({x:p,y:x})}else Di.setTargetReticle(null);Xt.isKeyDown("Digit1")||Xt.isKeyDown("1")?i.currentSelected="laser":Xt.isKeyDown("Digit2")||Xt.isKeyDown("2")?i.currentSelected="cluster":(Xt.isKeyDown("Digit3")||Xt.isKeyDown("3"))&&(i.currentSelected="beam");const _=Pa.getPlayerMeshPosition()||new D(n.worldX,75,n.worldY);Xt.isSecondaryPointerDown()&&Pe.isClusterReady()&&Pe.fireClusterBomb(_,{x:u.x,y:u.z});const m=Xt.isPointerDown()||Xt.isKeyDown("Space");if(i.currentSelected==="beam")if(m&&!Pe.isBeamOverheated()){Pe.setBeamFiring(!0),Ve.startContinuousBeamAudio();const p=this.getAimTarget(n,u);if(Pe.updateBeamEndpoints(_.x,_.y-3,_.z,p.impactPoint.x,p.impactPoint.y,p.impactPoint.z),this.beamDamageTimer+=t,this.beamDamageTimer>=.06){this.beamDamageTimer=0;const x=25;p.targetEntity!==null&&Lt.applyZonalDamage(p.targetEntity,p.targetZone,x,p.targetUV),_n.checkTargetHit(p.impactPoint.x,p.impactPoint.z,18,x),Hs.applyDamageInRadius(p.impactPoint.x,p.impactPoint.z,14),Lt.fxQueue.push({type:"sparks",x:p.impactPoint.x,y:p.impactPoint.y,z:p.impactPoint.z,data:{count:6}}),p.impactPoint.y<=2.5&&Yn.spawnDecal(p.impactPoint.x,p.impactPoint.z,"scorch",8.5),Lt.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:4}})}}else Pe.isBeamFiring()&&(Pe.setBeamFiring(!1),Ve.stopContinuousBeamAudio());else if(Pe.isBeamFiring()&&(Pe.setBeamFiring(!1),Ve.stopContinuousBeamAudio()),m){if(i.currentSelected==="cluster")Pe.isClusterReady()&&Pe.fireClusterBomb(_,{x:u.x,y:u.z});else if(i.heatLevel<=ou){const p=this.getAimTarget(n,u);p.targetEntity!==null?(Lt.applyZonalDamage(p.targetEntity,p.targetZone,au,p.targetUV),i.heatLevel=i.fireRate,Lt.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:p.impactPoint.x,ty:p.impactPoint.y,tz:p.impactPoint.z}})):(i.heatLevel=i.fireRate,_n.checkTargetHit(p.impactPoint.x,p.impactPoint.z,14,au),Hs.applyDamageInRadius(p.impactPoint.x,p.impactPoint.z,8),Lt.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:p.impactPoint.x,ty:p.impactPoint.y,tz:p.impactPoint.z}}))}}i.heatLevel>ou&&(i.heatLevel-=t)}}static findBestBuildingNearCursor(t,e){this.raycaster.setFromCamera(t,e);const n=this.raycaster.ray.intersectPlane(this.midHeightPlane,this.midIntersectPoint),i=n?this.midIntersectPoint.x:0,s=n?this.midIntersectPoint.z:0,r=_i.queryRadius(i,s,64);if(r.length===0)return null;let a=null,l=pM;for(let c=0;c<r.length;c++){const u=r[c],h=we.get(u);if(!h||h.currentHP<=0)continue;const d=ye.getVisualCenter(u)||ye.getSpritePosition(u);if(!d)continue;this.tempProj.copy(d).project(e);const f=this.tempProj.x-t.x,g=this.tempProj.y-t.y;let _=Math.hypot(f,g);const m=Qe.get(u),{def:p}=ye.getTypeInfo(u,m?m.texturePrefix:"");p&&(p.tier==="foreground"||p.width<=32||p.height&&p.height<=60)?_*=.6:p&&p.tier==="landmark"&&(_*=1.25),_<l&&(l=_,a={entity:u,point:d})}return a}static getMouseGroundPosition(){const t=Xt.getMouseNDC();this.pointerVector.set(t.x,t.y),this.raycaster.setFromCamera(this.pointerVector,Bt.camera);const e=this.raycaster.ray.intersectPlane(this.groundPlane,this.groundIntersectPoint);if(!e)return null;const n=nt.getElevationAtWorld(e.x,e.z);return n!==0&&(this.elevPlane.constant=-n,this.raycaster.ray.intersectPlane(this.elevPlane,this.groundIntersectPoint)),this.groundIntersectPoint}static findClosestBuildingNear(t,e,n){return _i.findClosest(t,e,n)}static getAimTarget(t,e){let n=null,i=Un.CENTER,s={x:.5,y:.5},r=null;if(Xt.isKeyDown("Space"))n=this.findClosestBuildingNear(t.worldX,t.worldY,1/0),n&&(r=ye.getVisualCenter(n)||ye.getSpritePosition(n));else if(this.cachedHoveredHit)n=this.cachedHoveredHit.entity,i=this.cachedHoveredHit.zone,s=this.cachedHoveredHit.uvCenter,r=this.cachedHoveredHit.point;else if(this.cachedHoveredEntity!==null)n=this.cachedHoveredEntity,i=Un.CENTER,s={x:.5,y:.5},r=this.cachedFallbackPoint||ye.getVisualCenter(n)||ye.getSpritePosition(n);else{const a=Xt.getMouseNDC();this.pointerVector.set(a.x,a.y);const l=this.findBestBuildingNearCursor(this.pointerVector,Bt.camera);l?(n=l.entity,i=Un.CENTER,s={x:.5,y:.5},r=l.point):e&&(r=e)}return r||(r=e||new D(t.worldX,0,t.worldY)),{targetEntity:n,targetZone:i,targetUV:s,impactPoint:r}}}const cu=0,hu=100,wi=.5,uu=60,du=25,fu=100,mM=25,gM=.8,_M=12;function pa(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class Di{static scoreElement;static flashOverlay;static controlPanel;static modeToggleButton;static showcaseTools;static targetInfoPanel;static labelsContainer;static targetReticle;static labelElements=new Map;static scoreValEl=null;static highValEl=null;static comboBadgeEl=null;static destructValEl=null;static destructBarEl=null;static shieldValEl=null;static shieldBarEl=null;static hullValEl=null;static hullBarEl=null;static weaponBtn1=null;static weaponBtn2=null;static weaponBtn3=null;static clusterOverlayEl=null;static beamHeatOverlayEl=null;static beamHeatTextEl=null;static autopilotBtn=null;static popupsContainer=null;static currentDestructionPercent=0;static tempVec=new D;static lastScore=-1;static lastHighScore=-1;static lastCombo=-1;static lastDestructStr="";static lastShield=-1;static lastHull=-1;static lastHullColor="";static lastWeapon="";static lastOverheated=!1;static lastBeamActive=!1;static init(){const t=document.createElement("div");t.style.position="fixed",t.style.top="14px",t.style.left="14px",t.style.right="14px",t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="flex-start",t.style.color="white",t.style.fontFamily="system-ui, -apple-system, sans-serif",t.style.zIndex="1000",t.style.pointerEvents="none",this.scoreElement=document.createElement("div"),this.scoreElement.style.background="rgba(15, 23, 42, 0.82)",this.scoreElement.style.backdropFilter="blur(10px)",this.scoreElement.style.padding="8px 14px",this.scoreElement.style.borderRadius="12px",this.scoreElement.style.border="1px solid rgba(255, 255, 255, 0.12)",this.scoreElement.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.5)",this.scoreElement.style.pointerEvents="auto",this.scoreElement.style.minWidth="210px",this.scoreElement.style.maxWidth="280px",this.scoreElement.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <!-- Row 1: Score & High Score & Combo -->
        <div style="display: flex; align-items: baseline; justify-content: space-between; gap: 10px;">
          <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.5px; color: #38bdf8;">
            SCORE <span id="hud-score-val" style="color: #ffffff; font-family: monospace; font-size: 16px;">0</span>
          </div>
          <div style="font-size: 10px; font-weight: 700; color: #94a3b8;">
            HI <span id="hud-high-val" style="color: #cbd5e1; font-family: monospace;">0</span>
          </div>
          <div id="hud-combo-badge" style="display: none; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 4px; background: #f59e0b; color: #000; box-shadow: 0 0 8px #f59e0b;">
            x2
          </div>
        </div>

        <!-- Row 2: Destruction Progress Bar -->
        <div style="display: flex; flex-direction: column; gap: 2px;">
          <div style="display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: #f87171;">
            <span>DESTRUCTION</span>
            <span id="hud-destruct-val" style="font-family: monospace;">0.0%</span>
          </div>
          <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
            <div id="hud-destruct-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #f97316, #ef4444); border-radius: 3px; transition: width 0.2s ease;"></div>
          </div>
        </div>

        <!-- Row 3: Slim UFO Shield & Hull -->
        <div style="display: flex; gap: 8px; font-size: 9px; font-weight: 700;">
          <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
            <span style="color: #38bdf8;">SHD</span>
            <div style="flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
              <div id="hud-shield-bar" style="width: 100%; height: 100%; background: #38bdf8; transition: width 0.15s ease;"></div>
            </div>
            <span id="hud-shield-val" style="color: #38bdf8; font-family: monospace;">100%</span>
          </div>
          <div style="flex: 1; display: flex; align-items: center; gap: 4px;">
            <span style="color: #4ade80;">HUL</span>
            <div style="flex: 1; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden;">
              <div id="hud-hull-bar" style="width: 100%; height: 100%; background: #4ade80; transition: width 0.15s ease;"></div>
            </div>
            <span id="hud-hull-val" style="color: #4ade80; font-family: monospace;">100%</span>
          </div>
        </div>

        <!-- Row 4: Compact Weapons & Flight Mode Dock -->
        <div style="display: flex; gap: 5px; margin-top: 2px;">
          <button id="weapon-btn-1" style="flex: 1; padding: 4px 6px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid #38bdf8; background: #0284c7; color: white; cursor: pointer; transition: all 0.15s ease;">
            [1] RAY
          </button>
          <button id="weapon-btn-2" style="position: relative; flex: 1; padding: 4px 6px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2); background: #1e293b; color: #94a3b8; cursor: pointer; overflow: hidden; transition: all 0.15s ease;">
            <span style="position: relative; z-index: 2;">[2] BOMB</span>
            <div id="cluster-cooldown-overlay" style="position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: rgba(245, 158, 11, 0.4); z-index: 1;"></div>
          </button>
          <button id="weapon-btn-3" style="position: relative; flex: 1.1; padding: 4px 6px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid rgba(255,255,255,0.2); background: #1e293b; color: #94a3b8; cursor: pointer; overflow: hidden; transition: all 0.15s ease;">
            <span id="beam-btn-text" style="position: relative; z-index: 2;">[3] BEAM</span>
            <div id="beam-heat-overlay" style="position: absolute; bottom: 0; left: 0; width: 100%; height: 0%; background: rgba(6, 182, 212, 0.45); z-index: 1; transition: height 0.06s linear;"></div>
          </button>
          <button id="autopilot-btn" title="Toggle Flight Mode [F]" style="padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid #38bdf8; background: rgba(56, 189, 248, 0.15); color: #38bdf8; cursor: pointer;">
            🛸 [F]
          </button>
        </div>
      </div>
    `,t.appendChild(this.scoreElement),this.scoreValEl=this.scoreElement.querySelector("#hud-score-val"),this.highValEl=this.scoreElement.querySelector("#hud-high-val"),this.comboBadgeEl=this.scoreElement.querySelector("#hud-combo-badge"),this.destructValEl=this.scoreElement.querySelector("#hud-destruct-val"),this.destructBarEl=this.scoreElement.querySelector("#hud-destruct-bar"),this.shieldValEl=this.scoreElement.querySelector("#hud-shield-val"),this.shieldBarEl=this.scoreElement.querySelector("#hud-shield-bar"),this.hullValEl=this.scoreElement.querySelector("#hud-hull-val"),this.hullBarEl=this.scoreElement.querySelector("#hud-hull-bar"),this.weaponBtn1=this.scoreElement.querySelector("#weapon-btn-1"),this.weaponBtn2=this.scoreElement.querySelector("#weapon-btn-2"),this.weaponBtn3=this.scoreElement.querySelector("#weapon-btn-3"),this.clusterOverlayEl=this.scoreElement.querySelector("#cluster-cooldown-overlay"),this.beamHeatOverlayEl=this.scoreElement.querySelector("#beam-heat-overlay"),this.beamHeatTextEl=this.scoreElement.querySelector("#beam-btn-text"),this.autopilotBtn=this.scoreElement.querySelector("#autopilot-btn"),this.autopilotBtn&&(this.autopilotBtn.onclick=()=>{Pi.mouseFollowMode=!Pi.mouseFollowMode,this.autopilotBtn&&this.autopilotBtn.blur()}),this.weaponBtn1&&(this.weaponBtn1.onclick=()=>{for(const s of oe.entities)if(cn.has(s)){const r=hi.get(s);r&&(r.currentSelected="laser");break}}),this.weaponBtn2&&(this.weaponBtn2.onclick=()=>{for(const s of oe.entities)if(cn.has(s)){const r=hi.get(s);r&&(r.currentSelected="cluster");break}}),this.weaponBtn3&&(this.weaponBtn3.onclick=()=>{for(const s of oe.entities)if(cn.has(s)){const r=hi.get(s);r&&(r.currentSelected="beam");break}}),this.popupsContainer=document.createElement("div"),this.popupsContainer.style.position="fixed",this.popupsContainer.style.top="0",this.popupsContainer.style.left="0",this.popupsContainer.style.width="100%",this.popupsContainer.style.height="100%",this.popupsContainer.style.pointerEvents="none",this.popupsContainer.style.zIndex="999",document.body.appendChild(this.popupsContainer),this.controlPanel=document.createElement("div"),this.controlPanel.style.display="flex",this.controlPanel.style.gap="8px",this.controlPanel.style.pointerEvents="auto";const e=typeof window<"u"&&(window.location.search.includes("debug=1")||window.location.search.includes("showcase=1"));this.modeToggleButton=document.createElement("button"),this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.setAttribute("aria-pressed","false"),this.modeToggleButton.style.padding="8px 14px",this.modeToggleButton.style.borderRadius="10px",this.modeToggleButton.style.border="1px solid rgba(59, 130, 246, 0.5)",this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.color="white",this.modeToggleButton.style.fontWeight="600",this.modeToggleButton.style.fontSize="12px",this.modeToggleButton.style.cursor="pointer",this.modeToggleButton.style.boxShadow="0 4px 14px rgba(59, 130, 246, 0.4)",this.modeToggleButton.style.transition="all 0.2s ease",this.modeToggleButton.innerText="🔬 SHOWCASE",this.modeToggleButton.onclick=()=>{ys.toggleMode(),this.updateModeUI(),this.modeToggleButton.blur()},this.showcaseTools=document.createElement("div"),this.showcaseTools.style.display="none",this.showcaseTools.style.gap="8px";const n=this.createActionButton("🔄 Repair","#059669","Repair all showcase buildings",()=>ys.resetAllHP()),i=this.createActionButton("💥 -25%","#dc2626","Damage all showcase buildings by 25 percent",()=>ys.damageAll(mM));this.showcaseTools.appendChild(n),this.showcaseTools.appendChild(i),e&&(this.controlPanel.appendChild(this.modeToggleButton),this.controlPanel.appendChild(this.showcaseTools),t.appendChild(this.controlPanel)),document.body.appendChild(t),this.targetInfoPanel=document.createElement("div"),this.targetInfoPanel.style.position="fixed",this.targetInfoPanel.style.bottom="20px",this.targetInfoPanel.style.left="50%",this.targetInfoPanel.style.transform="translateX(-50%)",this.targetInfoPanel.style.background="rgba(15, 23, 42, 0.88)",this.targetInfoPanel.style.backdropFilter="blur(10px)",this.targetInfoPanel.style.padding="8px 18px",this.targetInfoPanel.style.borderRadius="12px",this.targetInfoPanel.style.border="1px solid rgba(59, 130, 246, 0.5)",this.targetInfoPanel.style.color="white",this.targetInfoPanel.style.fontFamily="system-ui, monospace",this.targetInfoPanel.style.fontSize="13px",this.targetInfoPanel.style.pointerEvents="none",this.targetInfoPanel.style.display="none",this.targetInfoPanel.style.boxShadow="0 8px 24px rgba(0,0,0,0.5)",document.body.appendChild(this.targetInfoPanel),this.labelsContainer=document.createElement("div"),this.labelsContainer.style.position="fixed",this.labelsContainer.style.top="0",this.labelsContainer.style.left="0",this.labelsContainer.style.width="100vw",this.labelsContainer.style.height="100vh",this.labelsContainer.style.pointerEvents="none",this.labelsContainer.style.zIndex="900",document.body.appendChild(this.labelsContainer),this.flashOverlay=document.createElement("div"),this.flashOverlay.style.position="fixed",this.flashOverlay.style.top="0",this.flashOverlay.style.left="0",this.flashOverlay.style.width="100vw",this.flashOverlay.style.height="100vh",this.flashOverlay.style.backgroundColor="white",this.flashOverlay.style.opacity="0",this.flashOverlay.style.pointerEvents="none",this.flashOverlay.style.transition="opacity 0.08s ease-out",this.flashOverlay.style.zIndex="9999",document.body.appendChild(this.flashOverlay),this.targetReticle=document.createElement("div"),this.targetReticle.style.position="fixed",this.targetReticle.style.pointerEvents="none",this.targetReticle.style.display="none",this.targetReticle.style.width="48px",this.targetReticle.style.height="48px",this.targetReticle.style.transform="translate(-50%, -50%)",this.targetReticle.style.zIndex="950",this.targetReticle.style.transition="left 0.04s ease-out, top 0.04s ease-out",this.targetReticle.innerHTML=`
      <div style="position:absolute; top:0; left:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:0; right:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; left:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:50%; left:50%; width:4px; height:4px; transform:translate(-50%, -50%); border-radius:50%; background:#38bdf8; box-shadow:0 0 6px #38bdf8;"></div>
    `,document.body.appendChild(this.targetReticle)}static setTargetReticle(t){if(this.targetReticle){if(!t){this.targetReticle.style.display="none";return}this.targetReticle.style.left=`${t.x}px`,this.targetReticle.style.top=`${t.y}px`,this.targetReticle.style.display="block"}}static createActionButton(t,e,n,i){const s=document.createElement("button");return s.setAttribute("aria-label",n),s.style.padding="10px 18px",s.style.borderRadius="12px",s.style.border="none",s.style.background=e,s.style.color="white",s.style.fontWeight="600",s.style.fontSize="14px",s.style.cursor="pointer",s.style.transition="transform 0.15s ease",s.innerText=t,s.onclick=()=>{i(),s.blur()},s.onmouseover=()=>s.style.transform="scale(1.05)",s.onmouseout=()=>s.style.transform="scale(1.0)",s.onfocus=()=>{s.style.transform="scale(1.05)",s.style.outline="3px solid rgba(255, 255, 255, 0.8)",s.style.outlineOffset="2px"},s.onblur=()=>{s.style.transform="scale(1.0)",s.style.outline="none"},s}static updateModeUI(){const t=ys.isShowcaseMode;this.modeToggleButton.setAttribute("aria-pressed",t?"true":"false"),t?(this.modeToggleButton.innerText="🌆 RETURN TO CITY MODE",this.modeToggleButton.setAttribute("aria-label","Return to city mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #059669 0%, #10b981 100%)",this.modeToggleButton.style.borderColor="rgba(16, 185, 129, 0.5)",this.showcaseTools.style.display="flex"):(this.modeToggleButton.innerText="🔬 ENTER TEST SHOWCASE MODE",this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.borderColor="rgba(59, 130, 246, 0.5)",this.showcaseTools.style.display="none",this.clearLabels())}static updateTargetInspector(t){if(!t){this.targetInfoPanel.style.display="none";return}this.targetInfoPanel.style.display="block";const e=Math.round(t.hp/t.maxHp*hu),n=e>uu?"#10b981":e>du?"#f59e0b":"#ef4444",i=pa(t.name),s=pa(t.key);this.targetInfoPanel.innerHTML=`
      <div style="font-weight: bold; font-size: 13px; margin-bottom: 3px; color: #60a5fa; letter-spacing: 0.5px;">🎯 TARGET: ${i} <span style="opacity: 0.7; font-weight: normal; font-size: 12px;">[${s}]</span></div>
      <div style="font-size: 12px;">HP: <span style="color: ${n}; font-weight: bold;">${t.hp}/${t.maxHp} (${e}%)</span> · Frame: <span style="color: #f472b6; font-weight: bold;">#${t.frame}</span></div>
    `}static tick(t){if(!ys.isShowcaseMode)this.clearLabels();else{const l=ys.getShowcaseBuildings(),c=new Set;for(const u of l){c.add(u.entity);let h=this.labelElements.get(u.entity);h||(h=document.createElement("div"),h.style.position="absolute",h.style.transform="translate(-50%, -100%)",h.style.background="rgba(15, 23, 42, 0.85)",h.style.border="1px solid rgba(255, 255, 255, 0.2)",h.style.borderRadius="8px",h.style.padding="4px 8px",h.style.color="#e2e8f0",h.style.fontFamily="monospace",h.style.fontSize="11px",h.style.whiteSpace="nowrap",h.style.pointerEvents="none",h.style.boxShadow="0 4px 12px rgba(0,0,0,0.4)",this.labelsContainer.appendChild(h),this.labelElements.set(u.entity,h));const d=u.def.height*gM;if(this.tempVec.set(u.worldX,d,u.worldY),this.tempVec.project(t),this.tempVec.z>1){h.style.display="none";continue}const f=(this.tempVec.x*wi+wi)*window.innerWidth,g=(-this.tempVec.y*wi+wi)*window.innerHeight;h.style.left=`${f}px`,h.style.top=`${g-_M}px`,h.style.display="block";const _=we.get(u.entity),m=Qe.get(u.entity),p=Ge.get(u.entity),x=p?p.totalHp:_?_.currentHP:fu,v=p?p.maxTotalHp:_?_.maxHP:fu,y=Math.max(cu,Math.round(x/v*hu)),A=m?m.currentFrame:cu,E=y>uu?"#34d399":y>du?"#fbbf24":"#f87171",w=pa(u.def.name),I=pa(u.typeKey);h.innerHTML=`<b>${w}</b> <span style="color:#94a3b8;">[${I}]</span><br/><span style="color:${E};">HP ${y}%</span> · Fr #${A}`}for(const[u,h]of this.labelElements.entries())c.has(u)||(this.labelsContainer.removeChild(h),this.labelElements.delete(u))}if(this.scoreValEl){const l=hn.getScore();l!==this.lastScore&&(this.scoreValEl.innerText=l.toLocaleString(),this.lastScore=l)}if(this.highValEl){const l=hn.getHighScore();l!==this.lastHighScore&&(this.highValEl.innerText=l.toLocaleString(),this.lastHighScore=l)}if(this.comboBadgeEl){const l=hn.getCombo();l!==this.lastCombo&&(this.lastCombo=l,l>1?(this.comboBadgeEl.style.display="block",this.comboBadgeEl.innerText=`x${l} COMBO!`,this.comboBadgeEl.style.background=l>=4?"#ef4444":l>=3?"#f59e0b":"#3b82f6",this.comboBadgeEl.style.boxShadow=`0 0 10px ${l>=4?"#ef4444":"#f59e0b"}`):this.comboBadgeEl.style.display="none")}if(this.destructValEl&&this.destructBarEl){const l=`${this.currentDestructionPercent.toFixed(1)}%`;l!==this.lastDestructStr&&(this.lastDestructStr=l,this.destructValEl.innerText=l,this.destructBarEl.style.width=`${Math.min(100,this.currentDestructionPercent)}%`)}if(this.shieldValEl&&this.shieldBarEl){const l=Math.max(0,Math.round(_n.playerShield));l!==this.lastShield&&(this.lastShield=l,this.shieldValEl.innerText=`${l}%`,this.shieldBarEl.style.width=`${l}%`)}if(this.hullValEl&&this.hullBarEl){const l=Math.max(0,Math.round(_n.playerHull));if(l!==this.lastHull){this.lastHull=l,this.hullValEl.innerText=`${l}%`,this.hullBarEl.style.width=`${l}%`;const c=l>50?"#4ade80":l>25?"#facc15":"#ef4444";c!==this.lastHullColor&&(this.lastHullColor=c,this.hullBarEl.style.background=c)}}let e="laser";for(const l of oe.entities)if(cn.has(l)){const c=hi.get(l);c&&(e=c.currentSelected);break}const n=e==="laser",i=e==="cluster",s=e==="beam";e!==this.lastWeapon&&(this.lastWeapon=e,this.weaponBtn1&&(this.weaponBtn1.style.background=n?"#0284c7":"#1e293b",this.weaponBtn1.style.borderColor=n?"#38bdf8":"rgba(255,255,255,0.2)",this.weaponBtn1.style.color=n?"#ffffff":"#94a3b8"),this.weaponBtn2&&(this.weaponBtn2.style.background=i?"#d97706":"#1e293b",this.weaponBtn2.style.borderColor=i?"#f59e0b":"rgba(255,255,255,0.2)",this.weaponBtn2.style.color=i?"#ffffff":"#94a3b8"));const r=Pe.isBeamOverheated();(r!==this.lastOverheated||s!==this.lastBeamActive)&&(this.lastOverheated=r,this.lastBeamActive=s,this.weaponBtn3&&(r?(this.weaponBtn3.style.background="rgba(127, 29, 29, 0.85)",this.weaponBtn3.style.borderColor="#ef4444",this.weaponBtn3.style.color="#fca5a5"):s?(this.weaponBtn3.style.background="#0e7490",this.weaponBtn3.style.borderColor="#06b6d4",this.weaponBtn3.style.color="#ffffff"):(this.weaponBtn3.style.background="#1e293b",this.weaponBtn3.style.borderColor="rgba(255,255,255,0.2)",this.weaponBtn3.style.color="#94a3b8"))),this.clusterOverlayEl&&(this.clusterOverlayEl.style.height=`${Pe.getClusterCooldownRatio()*100}%`);const a=Pe.getBeamHeatRatio();if(this.beamHeatOverlayEl&&(this.beamHeatOverlayEl.style.height=`${a*100}%`,this.beamHeatOverlayEl.style.background=r?"rgba(239, 68, 68, 0.7)":a>.7?"rgba(249, 115, 22, 0.6)":"rgba(6, 182, 212, 0.45)"),this.beamHeatTextEl&&(r?(this.beamHeatTextEl.innerText="OVERHEAT!",this.beamHeatTextEl.style.color="#fca5a5"):a>.08?(this.beamHeatTextEl.innerText=`BEAM ${Math.round(a*100)}%`,this.beamHeatTextEl.style.color="#ffffff"):(this.beamHeatTextEl.innerText="[3] BEAM",this.beamHeatTextEl.style.color=s?"#ffffff":"#94a3b8")),this.autopilotBtn&&(Pi.mouseFollowMode?(this.autopilotBtn.innerText="⚡ [F] AUTOPILOT",this.autopilotBtn.style.background="rgba(16, 185, 129, 0.25)",this.autopilotBtn.style.borderColor="#10b981",this.autopilotBtn.style.color="#34d399",this.autopilotBtn.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.4)"):(this.autopilotBtn.innerText="🛸 [F] TWIN-STICK",this.autopilotBtn.style.background="rgba(56, 189, 248, 0.12)",this.autopilotBtn.style.borderColor="rgba(56, 189, 248, 0.4)",this.autopilotBtn.style.color="#38bdf8",this.autopilotBtn.style.boxShadow="none")),this.popupsContainer){let l="";for(const c of hn.popups)if(this.tempVec.set(c.worldX,c.worldZ,c.worldY),this.tempVec.project(t),this.tempVec.z<=1){const u=(this.tempVec.x*wi+wi)*window.innerWidth,h=(-this.tempVec.y*wi+wi)*window.innerHeight,d=Math.max(0,1-c.elapsed/c.duration);l+=`<div style="position: absolute; left: ${u}px; top: ${h}px; transform: translate(-50%, -50%); font-size: 16px; font-weight: 800; color: ${c.color}; text-shadow: 0 2px 8px rgba(0,0,0,0.9); opacity: ${d}; pointer-events: none; white-space: nowrap;">${c.text}</div>`}this.popupsContainer.innerHTML=l}}static clearLabels(){for(const t of this.labelElements.values())this.labelsContainer.removeChild(t);this.labelElements.clear()}static triggerFlash(){this.flashOverlay&&(this.flashOverlay.style.transition="none",this.flashOverlay.style.opacity="0.5",this.flashOverlay.offsetWidth,this.flashOverlay.style.transition="opacity 0.1s ease-out",this.flashOverlay.style.opacity="0")}static updateScore(t){this.currentDestructionPercent=t,this.destructValEl&&this.destructBarEl&&(this.destructValEl.innerText=`${t.toFixed(1)}%`,this.destructBarEl.style.width=`${Math.min(100,t)}%`)}}const vs=0,Ms=0,xM=.25,yM=16777215,vM=.1,pu=1;class mu{mesh;material;textures;currentFrame=Ms;speed=xM;frameDurations;loop=!0;timer=vs;playing=!0;active=!0;onFrameChange;onComplete;constructor(t){this.textures=t,this.material=new dd({map:this.textures[Ms]||null,color:yM,transparent:!0,alphaTest:vM}),this.mesh=new fp(this.material)}reset(t,e,n){this.textures=t,this.currentFrame=Ms,this.timer=vs,this.loop=e,this.frameDurations=n,this.playing=!0,this.active=!0,this.material.map=t[Ms]||null,this.material.needsUpdate=!0,this.onComplete=void 0,this.onFrameChange=void 0,this.mesh.visible=!0}gotoFrame(t){this.textures.length!==vs&&(this.currentFrame=Math.max(Ms,Math.min(t,this.textures.length-pu)),this.timer=vs,this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0)}play(){this.playing=!0}stop(){this.playing=!1}tick(t){if(!this.active||!this.playing||this.textures.length===vs)return;if(this.timer+=t,this.timer<vs){this.mesh.visible=!1;return}else this.mesh.visible||(this.mesh.visible=!0);const e=this.frameDurations?.[this.currentFrame]??this.speed;if(this.timer>=e){if(this.timer-=e,this.currentFrame++,this.currentFrame>=this.textures.length)if(this.loop)this.currentFrame=Ms;else{this.currentFrame=this.textures.length-pu,this.playing=!1,this.active=!1,this.onComplete&&this.onComplete();return}this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0,this.onFrameChange&&this.onFrameChange(this.currentFrame)}}destroy(){this.active=!1,this.material.dispose()}}const me=0,gu=.5,or=.5,_u=11,xu=7,yu=10,MM=50,SM=8,TM=8,bM=16,vu=2,EM=3,Mu=1.2,AM=.15,Su=18,wM=2,Tu=3,RM=2,CM=7,IM=6,PM=.05,DM=.1,LM=.5,NM=14,FM=3,UM=18,OM=1,bu=1,BM=1.5,zM=.2,kM=1,HM=.8,Eu=80,GM=[.02,.02,.02,.04,.08,.08,.08,.08,.08,.08,.08],Au=[.02,.02,.02,.04,.08,.08,.08],VM=[.01,.01,.02,.02,.02,.02,.02,.02,.02,.02];class wu{static activeSprites=[];static inactiveSprites=[];static lightPool=[];static shockwavePool=[];static laserPool=[];static sharedShockwaveGeo;static sharedLaserHitGeo;static sharedLaserHitMat;static sharedLaserOuterMat;static sharedLaserCoreMat;static scratchBuildingPos=new D;static scratchTargetPos=new D;static blastTextures=[];static blast360Textures=[];static fireTextures=[];static getBlastTextures(){if(this.blastTextures.length<_u){this.blastTextures=[];for(let t=me;t<_u;t++){const e=rn.getTexture(`fx_blast_${t}`);e&&this.blastTextures.push(e)}}return this.blastTextures}static getBlast360Textures(){if(this.blast360Textures.length<xu){this.blast360Textures=[];for(let t=me;t<xu;t++){const e=rn.getTexture(`fx_blast360_${t}`);e&&this.blast360Textures.push(e)}}return this.blast360Textures}static getFireTextures(){if(this.fireTextures.length<yu){this.fireTextures=[];for(let t=me;t<yu;t++){const e=rn.getTexture(`fx_fire_${t}`);e&&this.fireTextures.push(e)}}return this.fireTextures}static preloadTextureArrays(){this.getBlastTextures(),this.getBlast360Textures(),this.getFireTextures();for(let t=me;t<MM;t++)this.inactiveSprites.push(new mu([]));this.initLightPool(),this.initShockwavePool(),this.initLaserPool()}static initLightPool(){for(let t=me;t<TM;t++){const e=new Vl(16755268,0,20);e.visible=!1,Bt.effectsGroup.add(e),this.lightPool.push({light:e,elapsed:me,duration:.15,active:!1})}}static initShockwavePool(){this.sharedShockwaveGeo=new ji(.8,1.4,32);for(let t=me;t<bM;t++){const e=new de({color:62463,side:Le,transparent:!0,opacity:.95,blending:Xn}),n=new At(this.sharedShockwaveGeo,e);n.rotation.x=-Math.PI/2,n.visible=!1,Bt.effectsGroup.add(n),this.shockwavePool.push({mesh:n,material:e,elapsed:me,duration:.35,maxRadius:28,active:!1})}}static initLaserPool(){this.sharedLaserOuterMat=new Sr({color:65535,linewidth:3,transparent:!0,opacity:.9,blending:Xn,depthTest:!1,depthWrite:!1}),this.sharedLaserCoreMat=new Sr({color:16777215,linewidth:1,transparent:!0,opacity:1,blending:Xn,depthTest:!1,depthWrite:!1}),this.sharedLaserHitGeo=new ji(.3,1.8,16),this.sharedLaserHitMat=new de({color:65535,side:Le,transparent:!0,opacity:1,blending:Xn,depthTest:!1,depthWrite:!1});for(let t=me;t<SM;t++){const e=new Float32Array(6),n=new Xe(e,3),i=new Ae;i.setAttribute("position",n);const s=new Tr(i,this.sharedLaserOuterMat);s.renderOrder=600,s.visible=!1;const r=new Tr(i,this.sharedLaserCoreMat);r.renderOrder=601,r.visible=!1;const a=new At(this.sharedLaserHitGeo,this.sharedLaserHitMat);a.renderOrder=602,a.visible=!1,Bt.effectsGroup.add(s),Bt.effectsGroup.add(r),Bt.effectsGroup.add(a),this.laserPool.push({positions:e,posAttr:n,geometry:i,outerLine:s,coreLine:r,impactMesh:a,elapsed:me,duration:Eu/1e3,active:!1})}}static getSprite(t,e,n){let i=this.inactiveSprites.pop();return i||(i=new mu(t)),i.reset(t,e,n),i}static tick(t){const e=Lt.fxQueue,n=e.length;for(let i=me;i<n;i++){const s=e[i];if(s&&(Ve.processEvent(s),!(s.type==="building_hit"||s.type==="building_destroyed"))){if(s.type!=="shake"){if(s.type==="laser"){const r=ui.isPointInView(s.x,s.z),a=ui.isPointInView(s.data.tx,s.data.tz);if(!r&&!a)continue}else if(!ui.isPointInView(s.x,s.y))continue}if(s.type==="blast"||s.type==="blast360")this.spawnExplosion(s.x,s.y,s.z,s.type,s.data);else if(s.type==="blast_zonal")this.spawnZonalExplosion(s.x,s.y,s.z,s.data);else if(s.type==="fire")this.spawnFire(s.x,s.y,s.z,s.data);else if(s.type==="shake")ui.addShake(s.data.intensity,.2);else if(s.type==="hit_fx")ye.applyHitFX(s.data.entityId,s.data.intensity);else if(s.type==="debris"){const r=this.getBuildingPos3D(s.data.entityId,s.x,s.y,s.z);oi.spawnBrickBurst(r.x,r.y,r.z,s.data.count,s.data.palette)}else if(s.type==="dust"){const r=this.getBuildingPos3D(s.data.entityId,s.x,s.y,s.z);oi.spawnDustCloud(r.x,r.y,r.z,s.data.count)}else if(s.type==="smoke"){const r=this.getBuildingPos3D(s.data.entityId,s.x,s.y,s.z);oi.spawnSmokePlume(r.x,r.y,r.z,s.data.count)}else if(s.type==="sparks"){const r=this.getBuildingPos3D(s.data.entityId,s.x,s.y,s.z);oi.spawnSparkBurst(r.x,r.y,r.z,s.data.count)}else s.type==="laser"&&this.spawnLaser(s.x,s.y,s.z,s.data.tx,s.data.ty,s.data.tz)}}e.length=me;for(let i=me;i<this.lightPool.length;i++){const s=this.lightPool[i];if(s.active)if(s.elapsed+=t,s.elapsed>=s.duration)s.active=!1,s.light.visible=!1;else{const r=1-s.elapsed/s.duration;s.light.intensity=r*10}}for(let i=me;i<this.shockwavePool.length;i++){const s=this.shockwavePool[i];if(s.active)if(s.elapsed+=t,s.elapsed>=s.duration)s.active=!1,s.mesh.visible=!1;else{const r=s.elapsed/s.duration,a=Math.max(.1,r*s.maxRadius);s.mesh.scale.set(a,a,1),s.material.opacity=(1-r)*.8}}for(let i=me;i<this.laserPool.length;i++){const s=this.laserPool[i];s.active&&(s.elapsed+=t,s.elapsed>=s.duration&&(s.active=!1,s.outerLine.visible=!1,s.coreLine.visible=!1,s.impactMesh.visible=!1))}for(let i=this.activeSprites.length-1;i>=me;i--){const s=this.activeSprites[i];s.tick(t),s.active||(Bt.effectsGroup.remove(s.mesh),this.inactiveSprites.push(s),this.activeSprites.splice(i,1))}}static getBuildingPos3D(t,e,n,i){if(t!==void 0){const s=ye.getSpritePosition(t);if(s)return s}return this.scratchBuildingPos.set(e,i,n)}static spawnImpactLight(t,e,n,i=.15){if(this.lightPool.length===me)return;let s=this.lightPool.find(r=>!r.active);s||(s=this.lightPool.reduce((r,a)=>a.elapsed>r.elapsed?a:r,this.lightPool[0])),s.light.position.set(t,e,n),s.light.intensity=10,s.light.visible=!0,s.elapsed=me,s.duration=i,s.active=!0}static spawnShockwave(t,e,n,i=.35,s=28){if(this.shockwavePool.length===me)return;let r=this.shockwavePool.find(a=>!a.active);r||(r=this.shockwavePool.reduce((a,l)=>l.elapsed>a.elapsed?l:a,this.shockwavePool[0])),r.mesh.position.set(t,e,n),r.mesh.scale.set(.1,.1,1),r.material.opacity=.8,r.mesh.visible=!0,r.elapsed=me,r.duration=i,r.maxRadius=s,r.active=!0}static spawnExplosion(t,e,n,i,s){const r=i==="blast"?this.getBlastTextures():this.getBlast360Textures();if(r.length===me)return;const a=i==="blast"?[...GM]:[...Au],l=this.getSprite(r,!1,a),c=this.scratchTargetPos.set(t,n+Mu,e);if(s&&s.entityId!==void 0){const h=ye.getSpritePosition(s.entityId),d=ye.getSpriteScale(s.entityId);h&&(c.copy(h),d&&(c.y-=d.y*AM))}l.mesh.position.copy(c),l.mesh.scale.set(Su,Su,1),Bt.effectsGroup.add(l.mesh),this.activeSprites.push(l),this.spawnImpactLight(c.x,c.y,c.z,.15),this.spawnShockwave(c.x,.05,c.z,.35,28),oi.spawnBrickBurst(c.x,c.y,c.z,15),oi.spawnSparkBurst(c.x,c.y,c.z,10),Yn.spawnDecal(c.x,c.z,"scorch",12);for(let h=me;h<wM;h++){const d=this.getSprite(r,!1,a),f=(Math.random()-or)*Tu,g=(Math.random()-or)*Tu,_=(Math.random()-or)*RM;d.mesh.position.set(c.x+f,c.y+_,c.z+g);const m=CM+Math.random()*IM;d.mesh.scale.set(m,m,1),d.timer=-(PM+Math.random()*DM),Bt.effectsGroup.add(d.mesh),this.activeSprites.push(d)}const u=i==="blast"?vu:EM;l.onFrameChange=h=>{h===u&&s&&s.entityId!==void 0&&s.targetFrame!==void 0&&Lt.executeTextureSwap(s.entityId,s.targetFrame)}}static spawnZonalExplosion(t,e,n,i){const s=this.blast360Textures;if(s.length===me)return;const r=[...Au],a=this.getSprite(s,!1,r),l=this.scratchTargetPos.set(t,n+Mu,e);if(i&&i.entityId!==void 0){const d=ye.getSpritePosition(i.entityId),f=ye.getSpriteScale(i.entityId);if(d&&f&&i.uvCenter){l.copy(d);const g=i.uvCenter.x-gu,_=gu-i.uvCenter.y;l.x+=g*f.x,l.y+=_*f.y,l.z+=LM}}a.mesh.position.copy(l);const c=NM,u=i.level?c+i.level*FM:UM;a.mesh.scale.set(u,u,1),Bt.effectsGroup.add(a.mesh),this.activeSprites.push(a);const h=vu;a.onFrameChange=d=>{d===h&&i&&i.entityId!==void 0&&i.targetFrame!==void 0&&Lt.executeTextureSwap(i.entityId,i.targetFrame)}}static spawnFire(t,e,n,i){const s=this.getFireTextures();if(s.length===me)return;const r=this.getSprite(s,!1,[...VM]),a=this.scratchTargetPos.set(t,n+OM,e);if(i&&i.entityId!==void 0){const c=ye.getSpritePosition(i.entityId);c&&(a.copy(c),a.x+=(Math.random()-or)*bu,a.y+=(Math.random()-zM)*BM,a.z+=(Math.random()-or)*bu)}r.mesh.position.copy(a);const l=kM+Math.random()*HM;r.mesh.scale.set(l,l,1),Bt.effectsGroup.add(r.mesh),this.activeSprites.push(r)}static spawnLaser(t,e,n,i,s,r){if(this.laserPool.length===me)return;let a=this.laserPool.find(l=>!l.active);a||(a=this.laserPool.reduce((l,c)=>c.elapsed>l.elapsed?c:l,this.laserPool[0])),a.positions[0]=t,a.positions[1]=e,a.positions[2]=n,a.positions[3]=i,a.positions[4]=s,a.positions[5]=r,a.posAttr.needsUpdate=!0,a.geometry.computeBoundingSphere(),a.impactMesh.position.set(i,s,r),a.impactMesh.rotation.x=-Math.PI/4,a.outerLine.visible=!0,a.coreLine.visible=!0,a.impactMesh.visible=!0,a.elapsed=me,a.duration=Eu/1e3,a.active=!0}}class Ru{static group=null;static canisterMeshes=[];static bombletMeshes=[];static canisterMaterial=null;static canisterTipMaterial=null;static bombletMaterial=null;static beamGroup=null;static beamOuterMesh=null;static beamInnerMesh=null;static beamImpactDisc=null;static beamImpactLight=null;static beamTime=0;static init(){if(this.group)return;this.group=new ve,Bt.scene.add(this.group),this.canisterMaterial=new ge({color:2042167,metalness:.8,roughness:.3}),this.canisterTipMaterial=new de({color:15680580}),this.bombletMaterial=new ge({color:16096779,emissive:14251782,emissiveIntensity:.8,roughness:.2}),this.beamGroup=new ve,this.beamGroup.visible=!1;const t=new En(1,1,1,16,1,!0),e=new de({color:61695,transparent:!0,opacity:.65,blending:Xn,side:Le,depthWrite:!1});this.beamOuterMesh=new At(t,e),this.beamOuterMesh.renderOrder=2100,this.beamGroup.add(this.beamOuterMesh);const n=new En(1,1,1,12,1,!0),i=new de({color:16777215,transparent:!0,opacity:.95,blending:Xn,side:Le,depthWrite:!1});this.beamInnerMesh=new At(n,i),this.beamInnerMesh.renderOrder=2101,this.beamGroup.add(this.beamInnerMesh);const s=new ji(.4,3.5,24),r=new de({color:61695,transparent:!0,opacity:.9,blending:Xn,side:Le,depthWrite:!1});this.beamImpactDisc=new At(s,r),this.beamImpactDisc.rotation.x=-Math.PI/2,this.beamImpactDisc.renderOrder=2102,this.beamGroup.add(this.beamImpactDisc),this.beamImpactLight=new Vl(61695,4.5,36),this.beamImpactLight.castShadow=!1,this.beamGroup.add(this.beamImpactLight),Bt.scene.add(this.beamGroup)}static tick(t){if(this.group||this.init(),!this.group)return;const e=Pe.canisters,n=Pe.bomblets;for(;this.canisterMeshes.length<e.length;){const i=this.createCanisterMesh();this.group.add(i),this.canisterMeshes.push(i)}for(let i=0;i<this.canisterMeshes.length;i++){const s=this.canisterMeshes[i];if(i<e.length){const r=e[i];s.visible=!0,s.position.set(r.x,r.z,r.y),Math.sqrt(r.vx*r.vx+r.vy*r.vy+r.vz*r.vz)>.1&&s.quaternion.setFromUnitVectors(new D(0,-1,0),new D(r.vx,r.vz,r.vy).normalize())}else s.visible=!1}for(;this.bombletMeshes.length<n.length;){const i=this.createBombletMesh();this.group.add(i),this.bombletMeshes.push(i)}for(let i=0;i<this.bombletMeshes.length;i++){const s=this.bombletMeshes[i];if(i<n.length){const r=n[i];s.visible=!0,s.position.set(r.x,r.z,r.y),s.rotation.y=r.rotation,s.rotation.x=r.rotation*.7}else s.visible=!1}if(this.beamGroup)if(Pe.isBeamFiring()){this.beamTime+=t,this.beamGroup.visible=!0;const i=Pe.beamOrigin,s=Pe.beamTarget;this.beamDir.subVectors(s,i);const r=this.beamDir.length();if(r>.1){this.beamMid.addVectors(i,s).multiplyScalar(.5),this.beamQuat.setFromUnitVectors(this.upVector,this.beamDir.normalize());const a=1.65+Math.sin(this.beamTime*28)*.35+(Math.random()-.5)*.18,l=.65+(Math.random()-.5)*.1;if(this.beamOuterMesh&&(this.beamOuterMesh.position.copy(this.beamMid),this.beamOuterMesh.quaternion.copy(this.beamQuat),this.beamOuterMesh.scale.set(a,r,a)),this.beamInnerMesh&&(this.beamInnerMesh.position.copy(this.beamMid),this.beamInnerMesh.quaternion.copy(this.beamQuat),this.beamInnerMesh.scale.set(l,r,l)),this.beamImpactDisc){this.beamImpactDisc.position.set(s.x,s.y+.1,s.z),this.beamImpactDisc.rotation.z+=t*16;const c=1.45+Math.sin(this.beamTime*24)*.35;this.beamImpactDisc.scale.set(c,c,1)}this.beamImpactLight&&(this.beamImpactLight.position.set(s.x,s.y+.8,s.z),this.beamImpactLight.intensity=6.8+Math.random()*3)}}else this.beamGroup.visible=!1}static beamDir=new D;static beamMid=new D;static beamQuat=new An;static upVector=new D(0,1,0);static createCanisterMesh(){const t=new ve,e=new En(.9,.9,3.2,8),n=new At(e,this.canisterMaterial);t.add(n);const i=new br(.9,1.4,8),s=new At(i,this.canisterTipMaterial);s.position.y=-2,s.rotation.x=Math.PI,t.add(s);const r=new He(2.4,.8,.1),a=new At(r,this.canisterMaterial);a.position.y=1.2,t.add(a);const l=a.clone();return l.rotation.y=Math.PI/2,t.add(l),t}static createBombletMesh(){const t=new kl(.85);return new At(t,this.bombletMaterial)}}class Cu{static group=null;static vehicleMeshes=[];static glassMaterial=null;static headlightMaterial=null;static taillightMaterial=null;static policeRedMaterial=null;static policeBlueMaterial=null;static policeOffMaterial=null;static flasherTimer=0;static flasherPhase=!1;static init(){this.group||(this.group=new ve,Bt.scene.add(this.group),this.glassMaterial=new ge({color:1976635,roughness:.1,metalness:.9}),this.headlightMaterial=new de({color:16776171}),this.taillightMaterial=new de({color:15680580}),this.policeRedMaterial=new de({color:16711731}),this.policeBlueMaterial=new de({color:35071}),this.policeOffMaterial=new de({color:3359061}))}static tick(t){if(this.group||this.init(),!this.group)return;this.flasherTimer+=t,this.flasherTimer>=.15&&(this.flasherTimer=0,this.flasherPhase=!this.flasherPhase);const e=Hs.vehicles;for(;this.vehicleMeshes.length<e.length;){const n=e[this.vehicleMeshes.length],i=this.createVehicleMesh(n);this.group.add(i),this.vehicleMeshes.push(i)}for(let n=0;n<this.vehicleMeshes.length;n++){const i=this.vehicleMeshes[n];if(n<e.length){const s=e[n];if(s.alive){if(i.visible=!0,i.position.set(s.x,.7,s.y),i.rotation.y=-s.heading+Math.PI*.5,s.type==="police"){const r=i.getObjectByName("police_red"),a=i.getObjectByName("police_blue");r&&a&&(r.material=this.flasherPhase?this.policeRedMaterial:this.policeOffMaterial,a.material=this.flasherPhase?this.policeOffMaterial:this.policeBlueMaterial)}}else i.visible=!1}else i.visible=!1}}static createVehicleMesh(t){const e=new ve,n=t.type==="truck",i=n?3:2.2,s=n?2.4:1.1,r=n?6.2:4.4,a=new ge({color:t.color,roughness:.4,metalness:.3}),l=new He(i,s,r),c=new At(l,a);if(c.position.y=s*.5,e.add(c),n){const m=new ge({color:13751771,roughness:.6}),p=new He(i*.95,s*1.1,r*.65),x=new At(p,m);x.position.set(0,s*1.05,-.8),e.add(x)}else{const m=i*.85,p=.85,x=r*.55,v=new He(m,p,x),y=new At(v,this.glassMaterial);y.position.set(0,s+p*.5,-.2),e.add(y)}const u=new He(.45,.3,.1),h=new At(u,this.headlightMaterial);h.position.set(-i*.35,s*.5,r*.5+.05),e.add(h);const d=new At(u,this.headlightMaterial);d.position.set(i*.35,s*.5,r*.5+.05),e.add(d);const f=new He(.5,.3,.1),g=new At(f,this.taillightMaterial);g.position.set(-i*.35,s*.5,-r*.5-.05),e.add(g);const _=new At(f,this.taillightMaterial);if(_.position.set(i*.35,s*.5,-r*.5-.05),e.add(_),t.type==="police"){const m=new He(.45,.25,.45),p=new At(m,this.policeRedMaterial);p.name="police_red",p.position.set(-.4,s+.95,-.2),e.add(p);const x=new At(m,this.policeBlueMaterial);x.name="police_blue",x.position.set(.4,s+.95,-.2),e.add(x)}return e}}class Iu{static group=null;static jetMeshes=[];static turretMeshes=[];static missileMeshes=[];static tracerLine=null;static tracerPositions=null;static tracerGeometry=null;static jetFuselageMat=null;static jetCanopyMat=null;static jetEngineMat=null;static turretBaseMat=null;static missileMat=null;static shieldMesh=null;static shieldMaterial=null;static init(){if(this.group)return;this.group=new ve,Bt.scene.add(this.group),this.jetFuselageMat=new ge({color:4674921,metalness:.7,roughness:.3}),this.jetCanopyMat=new ge({color:165063,metalness:.9,roughness:.1}),this.jetEngineMat=new de({color:16347926}),this.turretBaseMat=new ge({color:3359061,metalness:.8,roughness:.4}),this.missileMat=new ge({color:16317180,metalness:.5,roughness:.3});const t=30;this.tracerPositions=new Float32Array(t*6),this.tracerGeometry=new Ae,this.tracerGeometry.setAttribute("position",new Xe(this.tracerPositions,3));const e=new Sr({color:16707722,linewidth:2});this.tracerLine=new gd(this.tracerGeometry,e),this.group.add(this.tracerLine);const n=new Ar(22,16,16);this.shieldMaterial=new de({color:3718648,transparent:!0,opacity:0,wireframe:!0}),this.shieldMesh=new At(n,this.shieldMaterial),this.group.add(this.shieldMesh)}static tick(t){if(this.group||this.init(),!this.group)return;const e=_n.jets;for(;this.jetMeshes.length<e.length;){const a=this.createJetMesh();this.group.add(a),this.jetMeshes.push(a)}for(let a=0;a<this.jetMeshes.length;a++){const l=this.jetMeshes[a];if(a<e.length&&e[a].alive){const c=e[a];l.visible=!0,l.position.set(c.x,c.z,c.y),l.rotation.y=-c.heading+Math.PI*.5,l.rotation.z=c.roll,l.rotation.x=c.pitch}else l.visible=!1}const n=_n.turrets;for(;this.turretMeshes.length<n.length;){const a=this.createTurretMesh();this.group.add(a),this.turretMeshes.push(a)}for(let a=0;a<this.turretMeshes.length;a++){const l=this.turretMeshes[a];if(a<n.length&&n[a].alive){const c=n[a];l.visible=!0,l.position.set(c.x,c.z,c.y);const u=l.getObjectByName("launcher");u&&(u.rotation.y=-c.yaw+Math.PI*.5,u.rotation.x=-c.pitch)}else l.visible=!1}const i=_n.missiles;for(;this.missileMeshes.length<i.length;){const a=this.createMissileMesh();this.group.add(a),this.missileMeshes.push(a)}for(let a=0;a<this.missileMeshes.length;a++){const l=this.missileMeshes[a];if(a<i.length&&i[a].alive){const c=i[a];l.visible=!0,l.position.set(c.x,c.z,c.y),Math.sqrt(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz)>.1&&l.quaternion.setFromUnitVectors(new D(0,1,0),new D(c.vx,c.vz,c.vy).normalize())}else l.visible=!1}const s=_n.tracers;if(this.tracerPositions&&this.tracerGeometry){let a=0;for(const l of s){if(a>=this.tracerPositions.length)break;this.tracerPositions[a++]=l.x,this.tracerPositions[a++]=l.z,this.tracerPositions[a++]=l.y,this.tracerPositions[a++]=l.x+l.vx*.04,this.tracerPositions[a++]=l.z+l.vz*.04,this.tracerPositions[a++]=l.y+l.vy*.04}for(let l=a;l<this.tracerPositions.length;l++)this.tracerPositions[l]=0;this.tracerGeometry.attributes.position.needsUpdate=!0}const r=Pa.getPlayerMeshPosition();this.shieldMesh&&this.shieldMaterial&&r&&(this.shieldMesh.position.copy(r),_n.shieldFlareTimer>0?(this.shieldMaterial.opacity=_n.shieldFlareTimer/.35*.7,this.shieldMesh.visible=!0):this.shieldMesh.visible=!1)}static createJetMesh(){const t=new ve,e=new br(1.2,8.5,6),n=new At(e,this.jetFuselageMat);n.rotation.x=Math.PI*.5,t.add(n);const i=new He(1,.7,2.8),s=new At(i,this.jetCanopyMat);s.position.set(0,.6,.4),t.add(s);const r=new He(9,.15,3.4),a=new At(r,this.jetFuselageMat);a.position.set(0,0,-1),t.add(a);const l=new He(.15,1.8,1.8),c=new At(l,this.jetFuselageMat);c.position.set(0,.9,-3.2),t.add(c);const u=new En(.6,.6,.4,8),h=new At(u,this.jetEngineMat);return h.position.set(0,0,-4.2),h.rotation.x=Math.PI*.5,t.add(h),t}static createTurretMesh(){const t=new ve,e=new En(4,4.8,2,8),n=new At(e,this.turretBaseMat);n.position.y=1,t.add(n);const i=new ve;i.name="launcher",i.position.y=2.4;const s=new He(3.2,1.8,4),r=new At(s,this.turretBaseMat);i.add(r);const a=new At(new En(.3,.3,3.8,6),this.missileMat);a.position.set(-1,.4,.4),a.rotation.x=Math.PI*.5,i.add(a);const l=a.clone();return l.position.x=1,i.add(l),t.add(i),t}static createMissileMesh(){const t=new ve,e=new En(.35,.35,2.6,6),n=new At(e,this.missileMat);t.add(n);const i=new br(.35,.8,6),s=new At(i,this.missileMat);return s.position.y=1.6,t.add(s),t}}class WM{static initialized=!1;static container=null;static joystickKnob=null;static activeTouchId=null;static joyCenterX=0;static joyCenterY=0;static JOY_MAX_RADIUS=42;static isTouchDevice(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)}static init(){if(this.initialized)return;this.initialized=!0;const t=this.isTouchDevice();Xt.isMobile=t,t&&(this.buildControlsDOM(),this.attachJoystickEvents())}static buildControlsDOM(){this.container=document.createElement("div"),this.container.id="mobile-controls",this.container.style.position="fixed",this.container.style.inset="0",this.container.style.pointerEvents="none",this.container.style.zIndex="1500",this.container.style.userSelect="none",this.container.style.webkitUserSelect="none",this.container.style.touchAction="none";const t=document.createElement("div");t.id="mobile-joystick-zone",t.style.position="absolute",t.style.bottom="26px",t.style.left="26px",t.style.width="116px",t.style.height="116px",t.style.borderRadius="50%",t.style.background="radial-gradient(circle, rgba(15, 23, 42, 0.65) 0%, rgba(3, 7, 18, 0.85) 100%)",t.style.border="2px solid rgba(56, 189, 248, 0.45)",t.style.boxShadow="0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 16px rgba(56, 189, 248, 0.2)",t.style.pointerEvents="auto",t.style.touchAction="none",t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center";const e=document.createElement("div");e.style.position="absolute",e.style.width="24px",e.style.height="24px",e.style.borderRadius="50%",e.style.border="1px dashed rgba(56, 189, 248, 0.35)",e.style.pointerEvents="none",t.appendChild(e),this.joystickKnob=document.createElement("div"),this.joystickKnob.id="mobile-joystick-knob",this.joystickKnob.style.width="48px",this.joystickKnob.style.height="48px",this.joystickKnob.style.borderRadius="50%",this.joystickKnob.style.background="radial-gradient(circle at 35% 35%, #38bdf8 0%, #0284c7 60%, #0369a1 100%)",this.joystickKnob.style.boxShadow="0 0 16px rgba(56, 189, 248, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6)",this.joystickKnob.style.border="1px solid rgba(255, 255, 255, 0.5)",this.joystickKnob.style.pointerEvents="none",this.joystickKnob.style.transition="transform 0.05s ease-out",t.appendChild(this.joystickKnob),this.container.appendChild(t);const n=document.createElement("div");n.id="mobile-action-dock",n.style.position="absolute",n.style.bottom="26px",n.style.right="26px",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="flex-end",n.style.gap="14px",n.style.pointerEvents="auto";const i=document.createElement("button");i.id="mobile-fire-btn",i.setAttribute("aria-label","Fire Primary Laser"),i.style.width="64px",i.style.height="64px",i.style.borderRadius="50%",i.style.background="radial-gradient(circle at 35% 35%, #0ea5e9 0%, #0284c7 70%, #0369a1 100%)",i.style.border="2px solid rgba(255, 255, 255, 0.6)",i.style.boxShadow="0 4px 18px rgba(14, 165, 233, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)",i.style.color="#ffffff",i.style.fontFamily="system-ui, sans-serif",i.style.fontSize="12px",i.style.fontWeight="800",i.style.letterSpacing="0.5px",i.style.cursor="pointer",i.style.touchAction="none",i.innerText="⚡ RAY";const s=document.createElement("button");s.id="mobile-bomb-btn",s.setAttribute("aria-label","Fire Cluster Bomb"),s.style.width="52px",s.style.height="52px",s.style.borderRadius="50%",s.style.background="radial-gradient(circle at 35% 35%, #f59e0b 0%, #d97706 70%, #b45309 100%)",s.style.border="2px solid rgba(255, 255, 255, 0.5)",s.style.boxShadow="0 4px 14px rgba(245, 158, 11, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5)",s.style.color="#000000",s.style.fontFamily="system-ui, sans-serif",s.style.fontSize="11px",s.style.fontWeight="900",s.style.cursor="pointer",s.style.touchAction="none",s.innerText="💣 BOMB";const r=document.createElement("button");r.id="mobile-flight-btn",r.setAttribute("aria-label","Toggle Flight Autopilot"),r.style.width="42px",r.style.height="42px",r.style.borderRadius="50%",r.style.background="rgba(15, 23, 42, 0.8)",r.style.backdropFilter="blur(6px)",r.style.border="1.5px solid rgba(56, 189, 248, 0.5)",r.style.color="#38bdf8",r.style.fontSize="16px",r.style.cursor="pointer",r.style.touchAction="none",r.innerText="🛸",r.onclick=h=>{h.stopPropagation(),Pi.mouseFollowMode=!Pi.mouseFollowMode,r.style.background=Pi.mouseFollowMode?"rgba(16, 185, 129, 0.3)":"rgba(15, 23, 42, 0.8)",r.style.borderColor=Pi.mouseFollowMode?"#10b981":"rgba(56, 189, 248, 0.5)"};const a=document.createElement("button");a.id="mobile-beam-btn",a.setAttribute("aria-label","Fire Continuous Death Ray"),a.style.width="58px",a.style.height="58px",a.style.borderRadius="50%",a.style.background="radial-gradient(circle at 35% 35%, #06b6d4 0%, #0891b2 70%, #0e7490 100%)",a.style.border="2px solid rgba(255, 255, 255, 0.6)",a.style.boxShadow="0 4px 16px rgba(6, 182, 212, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)",a.style.color="#ffffff",a.style.fontFamily="system-ui, sans-serif",a.style.fontSize="11px",a.style.fontWeight="900",a.style.cursor="pointer",a.style.touchAction="none",a.innerText="⚡ BEAM",i.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation();for(const d of oe.entities)if(cn.has(d)){const f=hi.get(d);f&&(f.currentSelected="laser");break}Xt.setVirtualFirePrimary(!0),i.style.transform="scale(0.92)"},{passive:!1});const l=h=>{h.preventDefault(),Xt.setVirtualFirePrimary(!1),i.style.transform="scale(1.0)"};i.addEventListener("touchend",l,{passive:!1}),i.addEventListener("touchcancel",l,{passive:!1}),a.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation();for(const d of oe.entities)if(cn.has(d)){const f=hi.get(d);f&&(f.currentSelected="beam");break}Xt.setVirtualFirePrimary(!0),a.style.transform="scale(0.92)"},{passive:!1});const c=h=>{h.preventDefault(),Xt.setVirtualFirePrimary(!1),a.style.transform="scale(1.0)"};a.addEventListener("touchend",c,{passive:!1}),a.addEventListener("touchcancel",c,{passive:!1}),s.addEventListener("touchstart",h=>{h.preventDefault(),h.stopPropagation(),Xt.setVirtualFireSecondary(!0),s.style.transform="scale(0.92)"},{passive:!1});const u=h=>{h.preventDefault(),Xt.setVirtualFireSecondary(!1),s.style.transform="scale(1.0)"};s.addEventListener("touchend",u,{passive:!1}),s.addEventListener("touchcancel",u,{passive:!1}),n.appendChild(r),n.appendChild(s),n.appendChild(a),n.appendChild(i),this.container.appendChild(n),document.body.appendChild(this.container)}static attachJoystickEvents(){const t=document.getElementById("mobile-joystick-zone");if(!t)return;const e=s=>{if(s.preventDefault(),this.activeTouchId!==null)return;const r=s.changedTouches[0];this.activeTouchId=r.identifier;const a=t.getBoundingClientRect();this.joyCenterX=a.left+a.width/2,this.joyCenterY=a.top+a.height/2,this.updateJoystick(r.clientX,r.clientY)},n=s=>{if(s.preventDefault(),this.activeTouchId!==null)for(let r=0;r<s.changedTouches.length;r++){const a=s.changedTouches[r];if(a.identifier===this.activeTouchId){this.updateJoystick(a.clientX,a.clientY);break}}},i=s=>{if(this.activeTouchId!==null){for(let r=0;r<s.changedTouches.length;r++)if(s.changedTouches[r].identifier===this.activeTouchId){this.resetJoystick();break}}};t.addEventListener("touchstart",e,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!1}),window.addEventListener("touchcancel",i,{passive:!1})}static updateJoystick(t,e){let n=t-this.joyCenterX,i=e-this.joyCenterY;const s=Math.hypot(n,i);s>this.JOY_MAX_RADIUS&&(n=n/s*this.JOY_MAX_RADIUS,i=i/s*this.JOY_MAX_RADIUS),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(${n}px, ${i}px)`);const r=n/this.JOY_MAX_RADIUS,a=i/this.JOY_MAX_RADIUS;Xt.setVirtualJoystick(r,a)}static resetJoystick(){this.activeTouchId=null,this.joystickKnob&&(this.joystickKnob.style.transform="translate(0px, 0px)"),Xt.setVirtualJoystick(0,0)}}const XM="modulepreload",qM=function(o,t){return new URL(o,t).href},Pu={},YM=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(e.map(c=>{if(c=qM(c,n),c in Pu)return;Pu[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=r.length-1;g>=0;g--){const _=r[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":XM,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};class jM{static async loadAndInstantiate(t="/map_data.json"){try{let e=null;if(typeof window<"u"){const h=new URLSearchParams(window.location.search);if(h.has("reset"))localStorage.removeItem("custom_baked_map"),console.log("[MapLoader] Cleared custom baked map from localStorage.");else if(h.has("seed")){const d=parseInt(h.get("seed"),10)||42,f=h.get("preset")||"retro_arcade";console.log(`[MapLoader] Dynamic on-the-fly bake requested via URL: seed=${d}, preset=${f}...`);const{MapBaker:g}=await YM(async()=>{const{MapBaker:m}=await import("./MapBaker-DGexNHnp.js");return{MapBaker:m}},__vite__mapDeps([0,1]),import.meta.url);e=(await g.bake(d,f)).data}if(!e){const d=localStorage.getItem("custom_baked_map");if(d)try{const f=JSON.parse(d);f&&f.tiles&&f.tiles.length>0&&(console.log(`[MapLoader] Loading custom baked map from Map Studio (seed: ${f.seed}, buildings: ${f.buildings?.length})...`),e=f)}catch(f){console.warn("[MapLoader] Failed to parse custom_baked_map from localStorage:",f)}}}if(!e)if(rn.mapData&&rn.mapData.tiles)e=rn.mapData;else{const h=rn.getAssetUrl(t);console.log(`[MapLoader] Fetching authoritative city map from ${h}...`);let d=await fetch(h);if(!d.ok&&t!=="/generated_map.json"){const f=rn.getAssetUrl("/generated_map.json");d=await fetch(f)}d.ok&&(e=await d.json())}if(!e||!e.tiles||e.tiles.length===0)return console.warn("[MapLoader] Pre-baked map invalid or missing tiles. Falling back to live CityGenerator..."),Sl.generateCity(),!0;nt.init(),nt.roundabouts=e.roundabouts||e.metadata?.roundabouts||[];const n=nt.GRID_DIM,i=Array.isArray(e.tiles[0]);for(let h=0;h<n;h++)for(let d=0;d<n;d++){let f=ft.GRASS,g=gn.NONE,_=!1,m,p,x,v;if(i){const A=e.tiles[h]?.[d];A&&(f=A.terrainType,g=A.overlayType,x=A.elevation,v=A.elevationTier,_=!!A.isIntersection,m=A.roadAxis,p=A.tileSprite)}else{const A=e.tiles[d*n+h];typeof A=="number"?(f=A,f===ft.ROAD_STRAIGHT_NS||f===ft.ROAD_STRAIGHT_EW||f===ft.ROAD_INTERSECTION||f===ft.ROAD_ROUNDABOUT||f>=ft.ROAD_CURVE_NE&&f<=ft.ROAD_CURVE_SW||f===ft.ROAD_RAMP_NS||f===ft.ROAD_RAMP_EW?g=gn.ROAD:f===ft.SIDEWALK&&(g=gn.SIDEWALK)):A&&typeof A=="object"&&(f=A.terrainType,g=A.overlayType,x=A.elevation,v=A.elevationTier,_=!!A.isIntersection,m=A.roadAxis,p=A.tileSprite)}(x===void 0||v===void 0)&&(f===ft.WATER||f===ft.WATER_SHORE||f===ft.SAND?(v=0,x=-14):h>=24&&h<=43&&d>=14&&d<=33?(v=3,x=32):h>=12&&h<=51&&d>=10&&d<=47?(v=2,x=16):(v=1,x=0)),nt.setTerrain(h,d,f);const y=nt.getCell(h,d);y&&(y.elevation=x,y.elevationTier=v,p&&(y.tileSprite=p)),g===gn.ROAD?f===ft.ROAD_ROUNDABOUT?nt.setRoundabout(h,d):f>=ft.ROAD_CURVE_NE&&f<=ft.ROAD_CURVE_SW?nt.setRoadCurve(h,d,f):_||f===ft.ROAD_INTERSECTION?nt.setIntersection(h,d):m==="RAMP_NS"||f===ft.ROAD_RAMP_NS?nt.setRoadRamp(h,d,"NS"):m==="RAMP_EW"||f===ft.ROAD_RAMP_EW?nt.setRoadRamp(h,d,"EW"):nt.setRoad(h,d,m==="EW"?"EW":"NS"):g===gn.SIDEWALK&&nt.setSidewalkIfNotRoad(h,d)}nt.roadWaypoints=(e.roadWaypoints||[]).map(h=>({worldX:h.worldX,worldZ:h.worldZ,name:h.name,nextWaypoints:[]}));let s=0;const r=Array.from({length:n},()=>new Uint8Array(n));for(let h=0;h<n;h++)for(let d=0;d<n;d++){const f=nt.getCell(h,d);f&&(f.overlayType===gn.ROAD||f.terrainType===ft.WATER||f.terrainType===ft.WATER_SHORE)&&(r[h][d]=1)}for(const h of e.buildings||[]){const d=h.gx??h.gridX??0,f=h.gz??h.gridZ??0,g=h.w??h.footprintWidth??1,_=h.h??h.footprintHeight??1,m=fe[h.typeKey],p=m?.footprintTiles??g,x=m?.footprintTiles??_;if(d<0||f<0||d+p>n||f+x>n){console.warn(`[MapLoader] Skipping building '${h.typeKey}' at (${d}, ${f}) — exceeds grid bounds!`);continue}const v=p>=3||x>=3?1:0;let y=!1;for(let T=-v;T<p+v;T++){for(let M=-v;M<x+v;M++){const P=d+T,F=f+M;if(P<0||P>=n||F<0||F>=n)continue;if(T>=0&&T<p&&M>=0&&M<x){if(r[P][F]!==0){y=!0;break}}else if(v>0&&r[P][F]===2){y=!0;break}}if(y)break}if(y){console.warn(`[MapLoader] Skipping overlapping building '${h.typeKey}' at (${d}, ${f})`);continue}for(let T=-v;T<p+v;T++)for(let M=-v;M<x+v;M++){const P=d+T,F=f+M;if(P<0||P>=n||F<0||F>=n)continue;T>=0&&T<p&&M>=0&&M<x?r[P][F]=2:r[P][F]===0&&(r[P][F]=3)}let A=h.centerWorldX,E=h.centerWorldZ;if(A===void 0||E===void 0){const T=li.computeLotWorldPos(d,f,p,x);A=T.x,E=T.z}const w=oe.createEntity(),I=li.calculateAndRegisterLot(w,A,E,h.typeKey,h.lotType);this.spawnBuildingEntity(w,I,h.typeKey),s++}let a=(e.seed||424242)^2654435769;const l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=[{typeKey:"b1",lotType:"commercial"},{typeKey:"b2",lotType:"residential"},{typeKey:"b3",lotType:"residential"},{typeKey:"b4",lotType:"commercial"},{typeKey:"res_bronze",lotType:"residential"},{typeKey:"res_sky",lotType:"residential"}];for(let h=1;h<n-1;h++)for(let d=1;d<n-1;d++)if(r[h][d]===0){const f=nt.getCell(h,d),g=f?.terrainType===ft.PLAZA_STONE||(f?.elevationTier??1)>=2;let _=!1;for(let m=-1;m<=1;m++){for(let p=-1;p<=1;p++){const x=nt.getCell(h+m,d+p);if(x&&(x.overlayType===gn.ROAD||x.overlayType===gn.SIDEWALK)){_=!0;break}}if(_)break}if((_||g)&&l()<.65){r[h][d]=2;const m=c[Math.floor(l()*c.length)],p=li.computeLotWorldPos(h,d,1,1),x=oe.createEntity(),v=li.calculateAndRegisterLot(x,p.x,p.z,m.typeKey,m.lotType);this.spawnBuildingEntity(x,v,m.typeKey),s++}}_i.rebuild();const u=e.metadata?.generatedAt?new Date(e.metadata.generatedAt).toLocaleString():"unknown date";return console.log(`[MapLoader] Successfully loaded city map (${s} buildings, seed: ${e.seed}, baked at: ${u})`),!0}catch(e){return console.warn("[MapLoader] Error loading pre-baked map:",e),console.log("[MapLoader] Falling back to live CityGenerator..."),Sl.generateCity(),!1}}static spawnBuildingEntity(t,e,n){const i=fe[n]||fe[3];Te.set(t,{worldX:e.centerWorldX,worldY:e.centerWorldZ,worldZ:nt.getElevationAtWorld(e.centerWorldX,e.centerWorldZ)});const s=Tl(i),r=mi[n]||mi[3],a=Math.max(5,Math.round(s/r.length)),l=a*r.length;we.set(t,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const u of r)c.set(u.id,{id:u.id,level:0,hp:a,maxHp:a});Ge.set(t,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Ia.set(t,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),Qe.set(t,{meshId:`building_${t}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}async function ZM(){const o=document.getElementById("app");if(!o)throw new Error("No app container found!");const t=document.getElementById("loading-progress"),e=document.getElementById("loading-screen");Xt.init(),WM.init(),t&&(t.style.width="30%"),Bt.init(o),qh.init(),Ru.init(),Cu.init(),Iu.init(),Di.init(),ui.init(Bt.camera),Sa.init(Bt.camera),t&&(t.style.width="60%"),console.log("Loading assets..."),await rn.loadAll(),wu.preloadTextureArrays(),console.log("Assets loaded."),Ca.init(),hn.init(),Pi.init(),Lt.init(),oi.init(),Ve.init(),Pe.init(),Hs.init(),_n.init(),t&&(t.style.width="85%"),await jM.loadAndInstantiate(),Ca.finalizeMap(),t&&(t.style.width="100%"),e&&setTimeout(()=>{e.style.opacity="0",e.style.visibility="hidden"},150);const n=oe.createEntity();cn.add(n),Te.set(n,{worldX:0,worldY:0,worldZ:75}),hi.set(n,{currentSelected:"laser",heatLevel:0,fireRate:.2,clusterCooldown:0,clusterMaxCooldown:2.5,beamHeat:0,beamMaxHeat:100,beamOverheated:!1,beamFiring:!1});let i=performance.now();function s(){requestAnimationFrame(s);const r=performance.now(),a=(r-i)/1e3;i=r,hn.tick(a),Hs.tick(a),_n.tick(a),oe.tick(a),ui.tick(a),ye.tick(a),Cu.tick(a),Iu.tick(a),Ru.tick(a),Pa.tick(a),qh.tick(a),wu.tick(a),Di.tick(Bt.camera),Bt.render()}s(),console.log("Engine fully initialized and running.")}ZM().catch(console.error);
