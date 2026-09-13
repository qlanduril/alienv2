(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="172",Zd=0,nc=1,jd=2,Hu=1,Gu=2,$n=3,ai=0,rn=1,zt=2,ii=0,Ss=1,Hi=2,ic=3,sc=4,$d=5,zi=100,Qd=101,Jd=102,ef=103,tf=104,nf=200,sf=201,rf=202,of=203,Ia=204,La=205,af=206,lf=207,cf=208,hf=209,uf=210,df=211,ff=212,pf=213,mf=214,Pa=0,Da=1,Na=2,ws=3,Ua=4,Oa=5,Fa=6,Ba=7,Vu=0,gf=1,_f=2,wi=0,Wu=1,Xu=2,Yu=3,Ku=4,xf=5,qu=6,Zu=7,rc="attached",yf="detached",ju=300,Rs=301,Cs=302,za=303,ka=304,Oo=306,Is=1e3,xn=1001,bo=1002,kt=1003,$u=1004,ar=1005,Nt=1006,_o=1007,Cn=1008,li=1009,Qu=1010,Ju=1011,fr=1012,bl=1013,Gi=1014,In=1015,si=1016,Al=1017,wl=1018,Ls=1020,ed=35902,td=1021,nd=1022,yn=1023,id=1024,sd=1025,Ts=1026,Ps=1027,Rl=1028,Cl=1029,rd=1030,Il=1031,Ll=1033,xo=33776,yo=33777,vo=33778,Mo=33779,Ha=35840,Ga=35841,Va=35842,Wa=35843,Xa=36196,Ya=37492,Ka=37496,qa=37808,Za=37809,ja=37810,$a=37811,Qa=37812,Ja=37813,el=37814,tl=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,So=36492,ll=36494,cl=36495,od=36283,hl=36284,ul=36285,dl=36286,ad=2200,vf=2201,Mf=2202,pr=2300,mr=2301,Ho=2302,ys=2400,vs=2401,Ao=2402,Pl=2500,Sf=2501,Tf=0,ld=1,fl=2,Ef=3200,bf=3201,cd=0,Af=1,Mi="",Ot="srgb",en="srgb-linear",wo="linear",ot="srgb",Xi=7680,oc=519,wf=512,Rf=513,Cf=514,hd=515,If=516,Lf=517,Pf=518,Df=519,pl=35044,Lr=35048,ac="300 es",ti=2e3,Ro=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const hr=Math.PI/180,Ds=180/Math.PI;function Ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function We(r,e,t){return Math.max(e,Math.min(t,r))}function Dl(r,e){return(r%e+e)%e}function Nf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Uf(r,e,t){return r!==e?(t-r)/(e-r):0}function ur(r,e,t){return(1-t)*r+t*e}function Of(r,e,t,n){return ur(r,e,1-Math.exp(-t*n))}function Ff(r,e=1){return e-Math.abs(Dl(r,e*2)-e)}function Bf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function kf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Hf(r,e){return r+Math.random()*(e-r)}function Gf(r){return r*(.5-Math.random())}function Vf(r){r!==void 0&&(lc=r);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(r){return r*hr}function Xf(r){return r*Ds}function Yf(r){return(r&r-1)===0&&r!==0}function Kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Zf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jf={DEG2RAD:hr,RAD2DEG:Ds,generateUUID:Ln,clamp:We,euclideanModulo:Dl,mapLinear:Nf,inverseLerp:Uf,lerp:ur,damp:Of,pingpong:Ff,smoothstep:Bf,smootherstep:zf,randInt:kf,randFloat:Hf,randFloatSpread:Gf,seededRandom:Vf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:Yf,ceilPowerOfTwo:Kf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Zf,normalize:at,denormalize:wn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],v=i[4],y=i[7],w=i[2],b=i[5],A=i[8];return s[0]=o*_+a*x+l*w,s[3]=o*m+a*v+l*b,s[6]=o*f+a*y+l*A,s[1]=c*_+h*x+u*w,s[4]=c*m+h*v+u*b,s[7]=c*f+h*y+u*A,s[2]=d*_+p*x+g*w,s[5]=d*m+p*v+g*b,s[8]=d*f+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Be;function ud(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $f(){const r=gr("canvas");return r.style.display="block",r}const cc={};function xs(r){r in cc||(cc[r]=!0,console.warn(r))}function Qf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Jf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ep(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const r={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mi?wo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[en]:{primaries:e,whitePoint:n,transfer:wo,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),r}const Ye=tp();function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi;class np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=gr("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ip=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vo(i[o].image)):s.push(Vo(i[o]))}else s=Vo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?np.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sp=0;class Ct extends Vi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=xn,i=xn,s=Nt,o=Cn,a=yn,l=li,c=Ct.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ln(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ju)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=ju;Ct.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,w=(f+1)/2,b=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return v>y&&v>w?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=b/n,s=A/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=A/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rp extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends rp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fd extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const w=Math.sqrt(v),b=Math.atan2(w,f*x);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w}const y=a*x;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wo.copy(this).projectOnVector(e),this.sub(Wo)}reflect(e){return this.sub(Wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wo=new L,dc=new Dn;class On{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Dr.subVectors(this.max,Ys),Ki.subVectors(e.a,Ys),qi.subVectors(e.b,Ys),Zi.subVectors(e.c,Ys),hi.subVectors(qi,Ki),ui.subVectors(Zi,qi),Li.subVectors(Ki,Zi);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Li.z,Li.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Li.z,0,-Li.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Li.y,Li.x,0];return!Xo(t,Ki,qi,Zi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Ki,qi,Zi,Dr))?!1:(Nr.crossVectors(hi,ui),t=[Nr.x,Nr.y,Nr.z],Xo(t,Ki,qi,Zi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,Pr=new On,Ki=new L,qi=new L,Zi=new L,hi=new L,ui=new L,Li=new L,Ys=new L,Dr=new L,Nr=new L,Pi=new L;function Xo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Pi.fromArray(r,s);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ap=new On,Ks=new L,Yo=new L;class kn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Yo)),this.expandByPoint(Ks.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new L,Ko=new L,Ur=new L,di=new L,qo=new L,Or=new L,Zo=new L;class br{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ko.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Ko);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=di.dot(this.direction),l=-di.dot(Ur),c=di.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ko).addScaledVector(Ur,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){qo.subVectors(t,e),Or.subVectors(n,e),Zo.crossVectors(qo,Or);let o=this.direction.dot(Zo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Or.crossVectors(di,Or));if(l<0)return null;const c=a*this.direction.dot(qo.cross(di));if(c<0||l+c>o)return null;const h=-a*di.dot(Zo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,cp)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(n,an),fi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(n,an)),fi.normalize(),Fr.crossVectors(an,fi),i[0]=fi.x,i[4]=Fr.x,i[8]=an.x,i[1]=fi.y,i[5]=Fr.y,i[9]=an.y,i[2]=fi.z,i[6]=Fr.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],y=n[11],w=n[15],b=i[0],A=i[4],C=i[8],T=i[12],M=i[1],I=i[5],U=i[9],F=i[13],Y=i[2],V=i[6],W=i[10],$=i[14],H=i[3],ne=i[7],he=i[11],ve=i[15];return s[0]=o*b+a*M+l*Y+c*H,s[4]=o*A+a*I+l*V+c*ne,s[8]=o*C+a*U+l*W+c*he,s[12]=o*T+a*F+l*$+c*ve,s[1]=h*b+u*M+d*Y+p*H,s[5]=h*A+u*I+d*V+p*ne,s[9]=h*C+u*U+d*W+p*he,s[13]=h*T+u*F+d*$+p*ve,s[2]=g*b+_*M+m*Y+f*H,s[6]=g*A+_*I+m*V+f*ne,s[10]=g*C+_*U+m*W+f*he,s[14]=g*T+_*F+m*$+f*ve,s[3]=x*b+v*M+y*Y+w*H,s[7]=x*A+v*I+y*V+w*ne,s[11]=x*C+v*U+y*W+w*he,s[15]=x*T+v*F+y*$+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+_*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,y=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,w=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,b=t*x+n*v+i*y+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=x*A,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*f+n*l*f)*A,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=v*A,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*f-t*l*f)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=y*A,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*A,e[12]=w*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,_=o*h,m=o*u,f=a*u,x=l*c,v=l*h,y=l*u,w=n.x,b=n.y,A=n.z;return i[0]=(1-(_+f))*w,i[1]=(p+y)*w,i[2]=(g-v)*w,i[3]=0,i[4]=(p-y)*b,i[5]=(1-(d+f))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+v)*A,i[9]=(m-x)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/s,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=ti){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===ti)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ro)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=ti){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,p=(n+i)*h;let g,_;if(a===ti)g=(o+s)*u,_=-2*u;else if(a===Ro)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new L,En=new Oe,lp=new L(0,0,0),cp=new L(1,1,1),fi=new L,Fr=new L,an=new L,fc=new Oe,pc=new Dn;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const mc=new L,$i=new Dn,Yn=new Oe,Br=new L,qs=new L,up=new L,dp=new Dn,gc=new L(1,0,0),_c=new L(0,1,0),xc=new L(0,0,1),yc={type:"added"},fp={type:"removed"},Qi={type:"childadded",child:null},jo={type:"childremoved",child:null};class dt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new zn,n=new Dn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(qs,Br,this.up):Yn.lookAt(Br,qs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Yn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fp),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new L,Kn=new L,$o=new L,qn=new L,Ji=new L,es=new L,vc=new L,Qo=new L,Jo=new L,ea=new L,ta=new tt,na=new tt,ia=new tt;class _n{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),Kn.subVectors(n,t),$o.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Kn),l=bn.dot($o),c=Kn.dot(Kn),h=Kn.dot($o),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ta,s.x),o.addScaledVector(na,s.y),o.addScaledVector(ia,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Kn.subVectors(e,t),bn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ji.subVectors(i,n),es.subVectors(s,n),Qo.subVectors(e,n);const l=Ji.dot(Qo),c=es.dot(Qo);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,i);const h=Ji.dot(Jo),u=es.dot(Jo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ji,o);ea.subVectors(e,s);const p=Ji.dot(ea),g=es.dot(ea);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return vc.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(vc,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Ji,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function sa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Dl(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sa(o,s,e+1/3),this.g=sa(o,s,e),this.b=sa(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=pd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ye.fromWorkingColorSpace(Wt.copy(this),e),Math.round(We(Wt.r*255,0,255))*65536+Math.round(We(Wt.g*255,0,255))*256+Math.round(We(Wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ot){Ye.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(zr);const n=ur(pi.h,zr.h,t),i=ur(pi.s,zr.s,t),s=ur(pi.l,zr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ye;ye.NAMES=pd;let pp=0;class Nn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Ss,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=La,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ut extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new L,kr=new _e;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}}class md extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gd extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mp=0;const fn=new Oe,ra=new dt,ts=new L,ln=new On,Zs=new On,Dt=new L;class Pt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?gd:md)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(ln.min,Zs.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,Zs.max),ln.expandByPoint(Dt)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Dt.add(ts)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,d=new _e,p=new _e,g=new _e,_=new L,m=new L;function f(C,T,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[T].add(_),a[M].add(_),l[C].add(m),l[T].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,T=x.length;C<T;++C){const M=x[C],I=M.start,U=M.count;for(let F=I,Y=I+U;F<Y;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new L,y=new L,w=new L,b=new L;function A(C){w.fromBufferAttribute(i,C),b.copy(w);const T=a[C];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(b,T);const I=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,T=x.length;C<T;++C){const M=x[C],I=M.start,U=M.count;for(let F=I,Y=I+U;F<Y;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new Oe,Di=new br,Hr=new kn,Sc=new L,Gr=new L,Vr=new L,Wr=new L,oa=new L,Xr=new L,Tc=new L,Yr=new L;class Ae extends dt{constructor(e=new Pt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(oa.fromBufferAttribute(u,e),o?Xr.addScaledVector(oa,h):Xr.addScaledVector(oa.sub(t),h))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Hr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Hr,Sc)===null||Di.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(s).invert(),Di.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=v;y<w;y+=3){const b=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);i=Kr(this,f,e,n,c,h,u,b,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Kr(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=v;y<w;y+=3){const b=y,A=y+1,C=y+2;i=Kr(this,f,e,n,c,h,u,b,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,y=m+2;i=Kr(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function gp(r,e,t,n,i,s,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ai,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:r}}function Kr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Gr),r.getVertexPosition(l,Vr),r.getVertexPosition(c,Wr);const h=gp(r,e,t,n,Gr,Vr,Wr,Tc);if(h){const u=new L;_n.getBarycoord(Tc,Gr,Vr,Wr,u),i&&(h.uv=_n.getInterpolatedAttribute(i,a,l,c,u,new _e)),s&&(h.uv1=_n.getInterpolatedAttribute(s,a,l,c,u,new _e)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};_n.getNormal(Gr,Vr,Wr,d.normal),h.face=d,h.barycoord=u}return h}class Ft extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,f,x,v,y,w,b,A,C,T){const M=y/A,I=w/C,U=y/2,F=w/2,Y=b/2,V=A+1,W=C+1;let $=0,H=0;const ne=new L;for(let he=0;he<W;he++){const ve=he*I-F;for(let Ge=0;Ge<V;Ge++){const lt=Ge*M-U;ne[_]=lt*x,ne[m]=ve*v,ne[f]=Y,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[f]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ge/A),u.push(1-he/C),$+=1}}for(let he=0;he<C;he++)for(let ve=0;ve<A;ve++){const Ge=d+ve+V*he,lt=d+ve+V*(he+1),q=d+(ve+1)+V*(he+1),ie=d+(ve+1)+V*he;l.push(Ge,lt,ie),l.push(lt,q,ie),H+=6}a.addGroup(p,H,T),p+=H,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=Ns(r[t]);for(const i in n)e[i]=n[i]}return e}function _p(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _d(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const _r={clone:Ns,merge:$t};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new L,Ec=new _e,bc=new _e;class nn extends xd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,bc),t.subVectors(bc,Ec)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class vp extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(ns,is,e,t);i.layers=this.layers,this.add(i);const s=new nn(ns,is,e,t);s.layers=this.layers,this.add(s);const o=new nn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new nn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new nn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new nn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yd extends Ct{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mp extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ft(5,5,5),s=new qt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ii});s.uniforms.tEquirect.value=t;const o=new Ae(i,s),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Nt),new vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ul{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Ul(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new L;class xr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Md extends Nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const js=new L,rs=new L,os=new L,as=new _e,$s=new _e,Sd=new Oe,qr=new L,Qs=new L,Zr=new L,wc=new _e,aa=new _e,Rc=new _e;class Sp extends dt{constructor(e=new Md){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vd(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new xr(n,3,0,!1)),ss.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Sd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;jr(qr.set(-.5,-.5,0),os,o,rs,i,s),jr(Qs.set(.5,-.5,0),os,o,rs,i,s),jr(Zr.set(.5,.5,0),os,o,rs,i,s),wc.set(0,0),aa.set(1,0),Rc.set(1,1);let a=e.ray.intersectTriangle(qr,Qs,Zr,!1,js);if(a===null&&(jr(Qs.set(-.5,.5,0),os,o,rs,i,s),aa.set(0,1),a=e.ray.intersectTriangle(qr,Zr,Qs,!1,js),a===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:_n.getInterpolation(js,qr,Qs,Zr,wc,aa,Rc,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jr(r,e,t,n,i,s){as.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?($s.x=s*as.x-i*as.y,$s.y=i*as.x+s*as.y):$s.copy(as),r.copy(e),r.x+=$s.x,r.y+=$s.y,r.applyMatrix4(Sd)}const Cc=new L,Ic=new tt,Lc=new tt,Tp=new L,Pc=new Oe,$r=new L,la=new kn,Dc=new Oe,ca=new br;class Ep extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rc,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$r),this.boundingSphere.expandByPoint($r)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(i),e.ray.intersectsSphere(la)!==!1&&(Dc.copy(i).invert(),ca.copy(e.ray).applyMatrix4(Dc),!(this.boundingBox!==null&&ca.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ca)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ic.fromBufferAttribute(i.attributes.skinIndex,e),Lc.fromBufferAttribute(i.attributes.skinWeight,e),Cc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Lc.getComponent(s);if(o!==0){const a=Ic.getComponent(s);Pc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Tp.copy(Cc).applyMatrix4(Pc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Td extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ed extends Ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=kt,h=kt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=new Oe,bp=new Oe;class Ol{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:bp;Nc.multiplyMatrices(a,t[s]),Nc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ed(t,e,e,yn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Td),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yr extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Oe,Uc=new Oe,Qr=[],Oc=new On,Ap=new Oe,Js=new Ae,er=new kn;class vr extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ap)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Oc.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),er.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ls),Uc.multiplyMatrices(n,ls),Js.matrixWorld=Uc,Js.raycast(e,Qr);for(let o=0,a=Qr.length;o<a;o++){const l=Qr[o];l.instanceId=s,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ed(new Float32Array(i*this.count),i,this.count,Rl,In));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ha=new L,wp=new L,Rp=new Be;class Jn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ha.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rp.getNormalMatrix(e),i=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new kn,Jr=new L;class Fl{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,o=new Jn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-p,y-f).normalize(),n[1].setComponents(l+s,d+c,m+p,y+f).normalize(),n[2].setComponents(l+o,d+h,m+g,y+x).normalize(),n[3].setComponents(l-o,d-h,m-g,y-x).normalize(),n[4].setComponents(l-a,d-u,m-_,y-v).normalize(),t===ti)n[5].setComponents(l+a,d+u,m+_,y+v).normalize();else if(t===Ro)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Jr.x=i.normal.x>0?e.max.x:e.min.x,Jr.y=i.normal.y>0?e.max.y:e.min.y,Jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mr extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Co=new L,Io=new L,Fc=new Oe,tr=new br,eo=new kn,ua=new L,Bc=new L;class Sr extends dt{constructor(e=new Pt,t=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Co.fromBufferAttribute(t,i-1),Io.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Co.distanceTo(Io);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Fc.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Fc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),x=h.getX(_+1),v=to(this,e,tr,l,f,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=to(this,e,tr,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=to(this,e,tr,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=to(this,e,tr,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function to(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Co.fromBufferAttribute(o,i),Io.fromBufferAttribute(o,s),t.distanceSqToSegment(Co,Io,ua,Bc)>n)return;ua.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ua);if(!(l<e.near||l>e.far))return{distance:l,point:Bc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const zc=new L,kc=new L;class bd extends Sr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)zc.fromBufferAttribute(t,i),kc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zc.distanceTo(kc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends Sr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ad extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new Oe,ml=new br,no=new kn,io=new L;class Ip extends dt{constructor(e=new Pt,t=new Ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Hc.copy(i).invert(),ml.copy(e.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);io.fromBufferAttribute(u,m),Gc(io,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)io.fromBufferAttribute(u,g),Gc(io,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gc(r,e,t,n,i,s,o){const a=ml.distanceSqToPoint(r);if(a<t){const l=new L;ml.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Lo extends Ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wd extends Ct{constructor(e,t,n,i,s,o,a,l,c,h=Ts){if(h!==Ts&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Gi),n===void 0&&h===Ps&&(n=Ls),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bl extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,h=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(p,2));function x(){const y=new L,w=new L;let b=0;const A=(t-e)/n;for(let C=0;C<=s;C++){const T=[],M=C/s,I=M*(t-e)+e;for(let U=0;U<=i;U++){const F=U/i,Y=F*l+a,V=Math.sin(Y),W=Math.cos(Y);w.x=I*V,w.y=-M*n+m,w.z=I*W,u.push(w.x,w.y,w.z),y.set(V,A,W).normalize(),d.push(y.x,y.y,y.z),p.push(F,1-M),T.push(g++)}_.push(T)}for(let C=0;C<i;C++)for(let T=0;T<s;T++){const M=_[T][C],I=_[T+1][C],U=_[T+1][C+1],F=_[T][C+1];(e>0||T!==0)&&(h.push(M,I,F),b+=3),(t>0||T!==s-1)&&(h.push(I,U,F),b+=3)}c.addGroup(f,b,0),f+=b}function v(y){const w=g,b=new _e,A=new L;let C=0;const T=y===!0?e:t,M=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let U=0;U<=i;U++){const Y=U/i*l+a,V=Math.cos(Y),W=Math.sin(Y);A.x=T*W,A.y=m*M,A.z=T*V,u.push(A.x,A.y,A.z),d.push(0,M,0),b.x=V*.5+.5,b.y=W*.5*M+.5,p.push(b.x,b.y),g++}for(let U=0;U<i;U++){const F=w+U,Y=I+U;y===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),C+=3}c.addGroup(f,C,y===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tr extends Bn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Tr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new L,y=new L,w=new L;for(let b=0;b<t.length;b+=3)p(t[b+0],v),p(t[b+1],y),p(t[b+2],w),l(v,y,w,x)}function l(x,v,y,w){const b=w+1,A=[];for(let C=0;C<=b;C++){A[C]=[];const T=x.clone().lerp(y,C/b),M=v.clone().lerp(y,C/b),I=b-C;for(let U=0;U<=I;U++)U===0&&C===b?A[C][U]=T:A[C][U]=T.clone().lerp(M,U/I)}for(let C=0;C<b;C++)for(let T=0;T<2*(b-C)-1;T++){const M=Math.floor(T/2);T%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function c(x){const v=new L;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){const x=new L;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=m(x)/2/Math.PI+.5,w=f(x)/Math.PI+.5;o.push(y,1-w)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],w=o[x+4],b=Math.max(v,y,w),A=Math.min(v,y,w);b>.9&&A<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),w<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){const x=new L,v=new L,y=new L,w=new L,b=new _e,A=new _e,C=new _e;for(let T=0,M=0;T<s.length;T+=9,M+=6){x.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),b.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),w.copy(x).add(v).add(y).divideScalar(3);const I=m(w);_(b,M+0,x,I),_(A,M+2,v,I),_(C,M+4,y,I)}}function _(x,v,y,w){w<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.vertices,e.indices,e.radius,e.details)}}class kl extends zl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class vn extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<c;v++){const y=v*u-s;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const v=x+c*f,y=x+c*(f+1),w=x+1+c*(f+1),b=x+1+c*f;p.push(v,y,b),p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Us extends Pt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,p=new L,g=new _e;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,v=x,y=x+n+1,w=x+n+2,b=x+1;a.push(v,y,b),a.push(y,w,b)}}this.setIndex(a),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ar extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let y=0;f===0&&o===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const b=w/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-v),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=h[f][x+1],y=h[f][x],w=h[f+1][x],b=h[f+1][x+1];(f!==0||o>0)&&p.push(v,y,b),(f!==n-1||l<Math.PI)&&p.push(y,w,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lp extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rt extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hn extends Rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pp extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function so(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Np(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Up(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vc(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Rd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Op extends wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ys,endingEnd:ys}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vs:s=e,a=2*t-n;break;case Ao:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vs:o=e,l=2*n-t;break;case Ao:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let w=0;w!==a;++w)s[w]=f*o[h+w]+x*o[c+w]+v*o[l+w]+y*o[u+w];return s}}class Cd extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Fp extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Op(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Np(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ho,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=mr;class ks extends Gn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=pr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends Gn{}Id.prototype.ValueTypeName="color";class Os extends Gn{}Os.prototype.ValueTypeName="number";class Bp extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Fs extends Gn{InterpolantFactoryMethodLinear(e){return new Bp(this.times,this.values,this.getValueSize(),e)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends Gn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="string";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=pr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Gn{}Bs.prototype.ValueTypeName="vector";class gl{constructor(e="",t=-1,n=[],i=Pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(kp(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Gn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Up(l);l=Vc(l,1,h),c=Vc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Rd(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),f.push(v.morphTarget===_?1:0)}i.push(new Os(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(Bs,p+".position",d,"pos",i),n(Fs,p+".quaternion",d,"rot",i),n(Bs,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return Id;case"quaternion":return Fs;case"bool":case"boolean":return ks;case"string":return Hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zp(r.type);if(r.times===void 0){const t=[],n=[];Rd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Gp=new Hp;class Gs{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class Vp extends Error{constructor(e,t){super(e),this.response=t}}class Ld extends Gs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){u.read().then(({done:v,value:y})=>{if(v)f.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,A=h.length;b<A;b++){const C=h[b];C.onProgress&&C.onProgress(w)}f.enqueue(y),x()}},v=>{f.error(v)})}}});return new Response(m)}else throw new Vp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Si.add(e,c);const h=Zn[e];delete Zn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wp extends Gs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Si.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=gr("img");function l(){h(),Si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Hl extends Gs{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,o=new Wp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const da=new Oe,Wc=new L,Xc=new L;class Gl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xp extends Gl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yp extends Fo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yc=new Oe,nr=new L,fa=new L;class Kp extends Gl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),fa.copy(n.position),fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fa),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc)}}class Pd extends Fo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rr extends xd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qp extends Gl{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _l extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new qp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kc extends Fo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zp extends Gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Si.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Si.add(e,l),s.manager.itemStart(e)}}class jp extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}class $p{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Dn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Dn.multiplyQuaternionsFlat(e,o,e,t,e,n),Dn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Vl="\\[\\]\\.:\\/",Qp=new RegExp("["+Vl+"]","g"),Wl="[^"+Vl+"]",Jp="[^"+Vl.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",Wl),tm=/(WCOD+)?/.source.replace("WCOD",Jp),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),sm=new RegExp("^"+em+tm+nm+im+"$"),rm=["material","materials","bones","map"];class om{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(e){const t=sm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);rm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=om;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class am{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ys,endingEnd:ys};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Sf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Pl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Mf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===ad){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=vs,i.endingEnd=vs):(e?i.endingStart=this.zeroSlopeAtStart?vs:ys:i.endingStart=Ao,t?i.endingEnd=this.zeroSlopeAtEnd?vs:ys:i.endingEnd=Ao)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const lm=new Float32Array(1);class cm extends Vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new $p(st.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Cd(new Float32Array(2),new Float32Array(2),1,lm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?gl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Pl),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new am(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?gl.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zc=new Oe;class Xl{constructor(e,t,n=0,i=1/0){this.ray=new br(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zc),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(jc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)yl(e[i],this,n,t);return n.sort(jc),n}}function jc(r,e){return r.distance-e.distance}function yl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)yl(s[o],e,t,!0)}}function $c(r,e,t,n){const i=hm(n);switch(t){case td:return r*e;case id:return r*e;case sd:return r*e*2;case Rl:return r*e/i.components*i.byteLength;case Cl:return r*e/i.components*i.byteLength;case rd:return r*e*2/i.components*i.byteLength;case Il:return r*e*2/i.components*i.byteLength;case nd:return r*e*3/i.components*i.byteLength;case yn:return r*e*4/i.components*i.byteLength;case Ll:return r*e*4/i.components*i.byteLength;case xo:case yo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vo:case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(r,16)*Math.max(e,8)/4;case Ha:case Va:return Math.max(r,8)*Math.max(e,8)/2;case Xa:case Ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case el:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case il:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case al:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case So:case ll:case cl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case od:case hl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ul:case dl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hm(r){switch(r){case li:case Qu:return{byteLength:1,components:1};case fr:case Ju:case si:return{byteLength:2,components:1};case Al:case wl:return{byteLength:2,components:4};case Gi:case bl:case In:return{byteLength:4,components:1};case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function um(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fm=`#ifdef USE_ALPHAHASH
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
#endif`,pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,Mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Am=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,eg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
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
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
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
#endif`,hg=`struct PhysicalMaterial {
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
}`,ug=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,x_=`#if DEPTH_PACKING == 3200
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
}`,y_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,A_=`uniform vec3 diffuse;
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
}`,w_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,P_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,N_=`#define PHONG
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
}`,U_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,B_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,k_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,W_=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:dm,alphahash_pars_fragment:fm,alphamap_fragment:pm,alphamap_pars_fragment:mm,alphatest_fragment:gm,alphatest_pars_fragment:_m,aomap_fragment:xm,aomap_pars_fragment:ym,batching_pars_vertex:vm,batching_vertex:Mm,begin_vertex:Sm,beginnormal_vertex:Tm,bsdfs:Em,iridescence_fragment:bm,bumpmap_pars_fragment:Am,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Im,color_fragment:Lm,color_pars_fragment:Pm,color_pars_vertex:Dm,color_vertex:Nm,common:Um,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Bm,displacementmap_vertex:zm,emissivemap_fragment:km,emissivemap_pars_fragment:Hm,colorspace_fragment:Gm,colorspace_pars_fragment:Vm,envmap_fragment:Wm,envmap_common_pars_fragment:Xm,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:sg,envmap_vertex:qm,fog_vertex:Zm,fog_pars_vertex:jm,fog_fragment:$m,fog_pars_fragment:Qm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:eg,lights_lambert_fragment:tg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:rg,lights_toon_pars_fragment:og,lights_phong_fragment:ag,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:hg,lights_fragment_begin:ug,lights_fragment_maps:dg,lights_fragment_end:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:yg,map_particle_fragment:vg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Eg,morphcolor_vertex:bg,morphnormal_vertex:Ag,morphtarget_pars_vertex:wg,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Ig,normal_pars_fragment:Lg,normal_pars_vertex:Pg,normal_vertex:Dg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:qg,shadowmap_vertex:Zg,shadowmask_pars_fragment:jg,skinbase_vertex:$g,skinning_pars_vertex:Qg,skinning_vertex:Jg,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:o_,uv_pars_fragment:a_,uv_pars_vertex:l_,uv_vertex:c_,worldpos_vertex:h_,background_vert:u_,background_frag:d_,backgroundCube_vert:f_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:__,depth_frag:x_,distanceRGBA_vert:y_,distanceRGBA_frag:v_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:T_,linedashed_frag:E_,meshbasic_vert:b_,meshbasic_frag:A_,meshlambert_vert:w_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:I_,meshnormal_vert:L_,meshnormal_frag:P_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:O_,meshtoon_vert:F_,meshtoon_frag:B_,points_vert:z_,points_frag:k_,shadow_vert:H_,shadow_frag:G_,sprite_vert:V_,sprite_frag:W_},se={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([se.lights,se.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ro={r:0,b:0,g:0},Ui=new zn,X_=new Oe;function Y_(r,e,t,n,i,s,o){const a=new ye(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const w=g(v);w===null?f(a,l):w&&w.isColor&&(f(w,1),y=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===Oo)?(h===void 0&&(h=new Ae(new Ft(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ns(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ui.copy(y.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(Ui)),h.material.toneMapped=Ye.getTransfer(w.colorSpace)!==ot,(u!==w||d!==w.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ae(new vn(2,2),new qt({name:"BackgroundMaterial",uniforms:Ns(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(ro,_d(r)),n.buffers.color.setClear(ro.r,ro.g,ro.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(a,l)},render:_,addToRenderList:m,dispose:x}}function K_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,I,U,F,Y){let V=!1;const W=u(F,U,I);s!==W&&(s=W,c(s.object)),V=p(M,F,U,Y),V&&g(M,F,U,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,I,U,F),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,U){const F=U.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let V=Y[I.id];V===void 0&&(V={},Y[I.id]=V);let W=V[F];return W===void 0&&(W=d(l()),V[F]=W),W}function d(M){const I=[],U=[],F=[];for(let Y=0;Y<t;Y++)I[Y]=0,U[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,I,U,F){const Y=s.attributes,V=I.attributes;let W=0;const $=U.getAttributes();for(const H in $)if($[H].location>=0){const he=Y[H];let ve=V[H];if(ve===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;W++}return s.attributesNum!==W||s.index!==F}function g(M,I,U,F){const Y={},V=I.attributes;let W=0;const $=U.getAttributes();for(const H in $)if($[H].location>=0){let he=V[H];he===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),Y[H]=ve,W++}s.attributes=Y,s.attributesNum=W,s.index=F}function _(){const M=s.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function m(M){f(M,0)}function f(M,I){const U=s.newAttributes,F=s.enabledAttributes,Y=s.attributeDivisors;U[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),Y[M]!==I&&(r.vertexAttribDivisor(M,I),Y[M]=I)}function x(){const M=s.newAttributes,I=s.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==M[U]&&(r.disableVertexAttribArray(U),I[U]=0)}function v(M,I,U,F,Y,V,W){W===!0?r.vertexAttribIPointer(M,I,U,Y,V):r.vertexAttribPointer(M,I,U,F,Y,V)}function y(M,I,U,F){_();const Y=F.attributes,V=U.getAttributes(),W=I.defaultAttributeValues;for(const $ in V){const H=V[$];if(H.location>=0){let ne=Y[$];if(ne===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const he=ne.normalized,ve=ne.itemSize,Ge=e.get(ne);if(Ge===void 0)continue;const lt=Ge.buffer,q=Ge.type,ie=Ge.bytesPerElement,xe=q===r.INT||q===r.UNSIGNED_INT||ne.gpuType===bl;if(ne.isInterleavedBufferAttribute){const ae=ne.data,Ie=ae.stride,Ne=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)f(H.location+Ve,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let Ve=0;Ve<H.locationSize;Ve++)v(H.location+Ve,ve/H.locationSize,q,he,Ie*ie,(Ne+ve/H.locationSize*Ve)*ie,xe)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)f(H.location+ae,ne.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let ae=0;ae<H.locationSize;ae++)v(H.location+ae,ve/H.locationSize,q,he,ve*ie,ve/H.locationSize*ae*ie,xe)}}else if(W!==void 0){const he=W[$];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(H.location,he);break;case 3:r.vertexAttrib3fv(H.location,he);break;case 4:r.vertexAttrib4fv(H.location,he);break;default:r.vertexAttrib1fv(H.location,he)}}}}x()}function w(){C();for(const M in n){const I=n[M];for(const U in I){const F=I[U];for(const Y in F)h(F[Y].object),delete F[Y];delete I[U]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const U in I){const F=I[U];for(const Y in F)h(F[Y].object),delete F[Y];delete I[U]}delete n[M.id]}function A(M){for(const I in n){const U=n[I];if(U[M.id]===void 0)continue;const F=U[M.id];for(const Y in F)h(F[Y].object),delete F[Y];delete U[M.id]}}function C(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function q_(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==yn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:b}}function j_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Jn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,v=x*4;let y=f.clippingState||null;l.value=y,y=h(g,d,v,p);for(let w=0;w!==v;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $_(r){let e=new WeakMap;function t(o,a){return a===za?o.mapping=Rs:a===ka&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mp(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ms=4,Qc=[.125,.215,.35,.446,.526,.582],ki=20,pa=new Rr,Jc=new ye;let ma=null,ga=0,_a=0,xa=!1;const Bi=(1+Math.sqrt(5))/2,cs=1/Bi,eh=[new L(-Bi,cs,0),new L(Bi,cs,0),new L(-cs,0,Bi),new L(cs,0,Bi),new L(0,Bi,-cs),new L(0,Bi,cs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:si,format:yn,colorSpace:en,depthBuffer:!1},i=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q_(s)),this._blurMaterial=J_(s,e,t)}return i}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,n,i){const a=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jc),h.toneMapping=wi,h.autoClear=!1;const p=new ut({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Ae(new Ft,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Jc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;oo(i,x*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Rs||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eh[(i-s-1)%eh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const f=[];let x=0;for(let A=0;A<ki;++A){const C=A/_,T=Math.exp(-C*C/2);f.push(T),A===0?x+=T:A<m&&(x+=2*T)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],w=3*y*(i>v-Ms?i-v+Ms:0),b=4*(this._cubeSize-y);oo(t,w,b,3*y,2*y),l.setRenderTarget(t),l.render(u,pa)}}function Q_(r){const e=[],t=[],n=[];let i=r;const s=r-Ms+1+Qc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Ms?l=Qc[o-r+Ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,C=b>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(T,_*g*b),v.set(d,m*g*b);const M=[b,b,b,b,b,b];y.set(M,f*g*b)}const w=new Pt;w.setAttribute("position",new Ht(x,_)),w.setAttribute("uv",new Ht(v,m)),w.setAttribute("faceIndex",new Ht(y,f)),e.push(w),i>Ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(r,e,t){const n=new Pn(r,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function J_(r,e,t){const n=new Float32Array(ki),i=new L(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ih(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function sh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function e0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===ka,h=l===Rs||l===Cs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new th(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new th(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function t0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,y=x.length;v<y;v+=3){const w=x[v+0],b=x[v+1],A=x[v+2];d.push(w,b,b,A,A,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const w=v+0,b=v+1,A=v+2;d.push(w,b,b,A,A,w)}}else return;const m=new(ud(d)?gd:md)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function i0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function r0(r,e,t){const n=new WeakMap,i=new tt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*b*4*u),C=new fd(A,w,b,u);C.type=In,C.needsUpdate=!0;const T=y*4;for(let I=0;I<u;I++){const U=f[I],F=x[I],Y=v[I],V=w*b*4*I;for(let W=0;W<U.count;W++){const $=W*T;g===!0&&(i.fromBufferAttribute(U,W),A[V+$+0]=i.x,A[V+$+1]=i.y,A[V+$+2]=i.z,A[V+$+3]=0),_===!0&&(i.fromBufferAttribute(F,W),A[V+$+4]=i.x,A[V+$+5]=i.y,A[V+$+6]=i.z,A[V+$+7]=0),m===!0&&(i.fromBufferAttribute(Y,W),A[V+$+8]=i.x,A[V+$+9]=i.y,A[V+$+10]=i.z,A[V+$+11]=Y.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new _e(w,b)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function o0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Nd=new Ct,rh=new wd(1,1),Ud=new fd,Od=new op,Fd=new yd,oh=[],ah=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function Vs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=oh[i];if(s===void 0&&(s=new Float32Array(i),oh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Bo(r,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function a0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function h0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function u0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;hh.set(n),r.uniformMatrix2fv(this.addr,!1,hh),Lt(t,n)}}function d0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;ch.set(n),r.uniformMatrix3fv(this.addr,!1,ch),Lt(t,n)}}function f0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;lh.set(n),r.uniformMatrix4fv(this.addr,!1,lh),Lt(t,n)}}function p0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function g0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function _0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function x0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function v0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function M0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function S0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rh.compareFunction=hd,s=rh):s=Nd,t.setTexture2D(e||s,i)}function T0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Od,i)}function E0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fd,i)}function b0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ud,i)}function A0(r){switch(r){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return y0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return b0}}function w0(r,e){r.uniform1fv(this.addr,e)}function R0(r,e){const t=Vs(e,this.size,2);r.uniform2fv(this.addr,t)}function C0(r,e){const t=Vs(e,this.size,3);r.uniform3fv(this.addr,t)}function I0(r,e){const t=Vs(e,this.size,4);r.uniform4fv(this.addr,t)}function L0(r,e){const t=Vs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function P0(r,e){const t=Vs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function D0(r,e){const t=Vs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function N0(r,e){r.uniform1iv(this.addr,e)}function U0(r,e){r.uniform2iv(this.addr,e)}function O0(r,e){r.uniform3iv(this.addr,e)}function F0(r,e){r.uniform4iv(this.addr,e)}function B0(r,e){r.uniform1uiv(this.addr,e)}function z0(r,e){r.uniform2uiv(this.addr,e)}function k0(r,e){r.uniform3uiv(this.addr,e)}function H0(r,e){r.uniform4uiv(this.addr,e)}function G0(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Nd,s[o])}function V0(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Od,s[o])}function W0(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Fd,s[o])}function X0(r,e,t){const n=this.cache,i=e.length,s=Bo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ud,s[o])}function Y0(r){switch(r){case 5126:return w0;case 35664:return R0;case 35665:return C0;case 35666:return I0;case 35674:return L0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return U0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}}class q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}}class Z0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function uh(r,e){r.seq.push(e),r.map[e.id]=e}function j0(r,e,t){const n=r.name,i=n.length;for(ya.lastIndex=0;;){const s=ya.exec(n),o=ya.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){uh(t,c===void 0?new K0(a,r,e):new q0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Z0(a),uh(t,u)),t=u}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);j0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function dh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $0=37297;let Q0=0;function J0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const fh=new Be;function ex(r){Ye._getMatrix(fh,Ye.workingColorSpace,r);const e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(r)){case wo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ph(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+J0(r.getShaderSource(e),o)}else return i}function tx(r,e){const t=ex(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nx(r,e){let t;switch(e){case Wu:t="Linear";break;case Xu:t="Reinhard";break;case Yu:t="Cineon";break;case Ku:t="ACESFilmic";break;case qu:t="AgX";break;case Zu:t="Neutral";break;case xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ao=new L;function ix(){Ye.getLuminanceCoefficients(ao);const r=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function rx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ox(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function lr(r){return r!==""}function mh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(r){return r.replace(ax,cx)}const lx=new Map;function cx(r,e){let t=ke[e];if(t===void 0){const n=lx.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(r){return r.replace(hx,ux)}function ux(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vu:e="ENVMAP_BLENDING_MULTIPLY";break;case gf:e="ENVMAP_BLENDING_MIX";break;case _f:e="ENVMAP_BLENDING_ADD";break}return e}function gx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _x(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dx(t),c=fx(t),h=px(t),u=mx(t),d=gx(t),p=sx(t),g=rx(s),_=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),f.length>0&&(f+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),f=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ke.tonemapping_pars_fragment:"",t.toneMapping!==wi?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=vl(o),o=mh(o,t),o=gh(o,t),a=vl(a),a=mh(a,t),a=gh(a,t),o=_h(o),a=_h(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,y=x+f+a,w=dh(i,i.VERTEX_SHADER,v),b=dh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(w).trim(),Y=i.getShaderInfoLog(b).trim();let V=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,b);else{const $=ph(i,w,"vertex"),H=ph(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+$+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||Y==="")&&(W=!1);W&&(I.diagnostics={runnable:V,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:f}})}i.deleteShader(w),i.deleteShader(b),C=new To(i,_),T=ox(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,$0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let xx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vx(e),t.set(e,n)),n}}class vx{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}}function Mx(r,e,t,n,i,s,o){const a=new Nl,l=new yx,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,I,U,F){const Y=U.fog,V=F.geometry,W=T.isMeshStandardMaterial?U.environment:null,$=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),H=$&&$.mapping===Oo?$.image.height:null,ne=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const he=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=he!==void 0?he.length:0;let Ge=0;V.morphAttributes.position!==void 0&&(Ge=1),V.morphAttributes.normal!==void 0&&(Ge=2),V.morphAttributes.color!==void 0&&(Ge=3);let lt,q,ie,xe;if(ne){const rt=Fn[ne];lt=rt.vertexShader,q=rt.fragmentShader}else lt=T.vertexShader,q=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),xe=l.getFragmentShaderID(T);const ae=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,Mt=!!T.map,je=!!T.matcap,Et=!!$,P=!!T.aoMap,hn=!!T.lightMap,Ke=!!T.bumpMap,qe=!!T.normalMap,Ee=!!T.displacementMap,pt=!!T.emissiveMap,Te=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,Z=T.dispersion>0,Q=T.iridescence>0,K=T.sheen>0,Me=T.transmission>0,le=S&&!!T.anisotropyMap,fe=B&&!!T.clearcoatMap,$e=B&&!!T.clearcoatNormalMap,ee=B&&!!T.clearcoatRoughnessMap,pe=Q&&!!T.iridescenceMap,Ce=Q&&!!T.iridescenceThicknessMap,Pe=K&&!!T.sheenColorMap,me=K&&!!T.sheenRoughnessMap,Ze=!!T.specularMap,ze=!!T.specularColorMap,ht=!!T.specularIntensityMap,D=Me&&!!T.transmissionMap,re=Me&&!!T.thicknessMap,G=!!T.gradientMap,j=!!T.alphaMap,ue=T.alphaTest>0,ce=!!T.alphaHash,Fe=!!T.extensions;let St=wi;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=r.toneMapping);const Gt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:lt,fragmentShader:q,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!T.alphaToCoverage,map:Mt,matcap:je,envMap:Et,envMapMode:Et&&$.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:hn,bumpMap:Ke,normalMap:qe,displacementMap:d&&Ee,emissiveMap:pt,normalMapObjectSpace:qe&&T.normalMapType===Af,normalMapTangentSpace:qe&&T.normalMapType===cd,metalnessMap:Te,roughnessMap:R,anisotropy:S,anisotropyMap:le,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:$e,clearcoatRoughnessMap:ee,dispersion:Z,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ce,sheen:K,sheenColorMap:Pe,sheenRoughnessMap:me,specularMap:Ze,specularColorMap:ze,specularIntensityMap:ht,transmission:Me,transmissionMap:D,thicknessMap:re,gradientMap:G,opaque:T.transparent===!1&&T.blending===Ss&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ce,combine:T.combine,mapUv:Mt&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:hn&&_(T.lightMap.channel),bumpMapUv:Ke&&_(T.bumpMap.channel),normalMapUv:qe&&_(T.normalMap.channel),displacementMapUv:Ee&&_(T.displacementMap.channel),emissiveMapUv:pt&&_(T.emissiveMap.channel),metalnessMapUv:Te&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:le&&_(T.anisotropyMap.channel),clearcoatMapUv:fe&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:$e&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(T.sheenRoughnessMap.channel),specularMapUv:Ze&&_(T.specularMap.channel),specularColorMapUv:ze&&_(T.specularColorMap.channel),specularIntensityMapUv:ht&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:re&&_(T.thicknessMap.channel),alphaMapUv:j&&_(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(qe||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Mt||j),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:St,decodeVideoTexture:Mt&&T.map.isVideoTexture===!0&&Ye.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:pt&&T.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zt,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)M.push(I),M.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(x(M,T),v(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=g[T.type];let I;if(M){const U=Fn[M];I=_r.clone(U.uniforms)}else I=T.uniforms;return I}function w(T,M){let I;for(let U=0,F=h.length;U<F;U++){const Y=h[U];if(Y.cacheKey===M){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new _x(r,M,T,s),h.push(I)),I}function b(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:C}}function Sx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Tx),n.length>1&&n.sort(d||yh),i.length>1&&i.sort(d||yh)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Ex(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new vh,r.set(n,[o])):i>=s.length?(o=new vh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function bx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ye};break;case"SpotLight":t={position:new L,direction:new L,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Ax(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wx=0;function Rx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cx(r){const e=new bx,t=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new Oe,o=new Oe;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,v=0,y=0,w=0,b=0,A=0;c.sort(Rx);for(let T=0,M=c.length;T<M;T++){const I=c[T],U=I.color,F=I.intensity,Y=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*F,u+=U.g*F,d+=U.b*F;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],F);A++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,H=t.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=I.shadow.matrix,x++}n.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(U).multiplyScalar(F),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;const $=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,$.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[_]=$.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,y++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(U).multiplyScalar(F),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const $=I.shadow,H=t.get(I);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(F),W.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[f]=W,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=A,n.version=wx++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const v=c[f];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Mh(r){const e=new Cx(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ix(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Mh(r),e.set(i,[a])):s>=o.length?(a=new Mh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Dx(r,e,t){let n=new Fl;const i=new _e,s=new _e,o=new tt,a=new Pp({depthPacking:bf}),l=new Dp,c={},h=t.maxTextureSize,u={[ai]:rn,[rn]:ai,[zt]:zt},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:Lx,fragmentShader:Px}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let f=this.type;this.render=function(b,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=f!==$n&&this.type===$n,Y=f===$n&&this.type!==$n;for(let V=0,W=b.length;V<W;V++){const $=b[V],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||F===!0||Y===!0){const ve=this.type!==$n?{minFilter:kt,magFilter:kt}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(i.x,i.y,ve),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const he=H.getViewportCount();for(let ve=0;ve<he;ve++){const Ge=H.getViewport(ve);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),U.viewport(o),H.updateMatrices($,ve),n=H.getFrustum(),y(A,C,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&x(H,C),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(T,M,I)};function x(b,A){const C=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,C,p,_,null)}function v(b,A,C,T){let M=null;const I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=M.uuid,F=A.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let V=Y[F];V===void 0&&(V=M.clone(),Y[F]=V,A.addEventListener("dispose",w)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,T===$n?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=r.properties.get(M);U.light=C}return M}function y(b,A,C,T,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===$n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const F=e.update(b),Y=b.material;if(Array.isArray(Y)){const V=F.groups;for(let W=0,$=V.length;W<$;W++){const H=V[W],ne=Y[H.materialIndex];if(ne&&ne.visible){const he=v(b,ne,T,M);b.onBeforeShadow(r,b,A,C,F,he,H),r.renderBufferDirect(C,null,F,he,b,H),b.onAfterShadow(r,b,A,C,F,he,H)}}}else if(Y.visible){const V=v(b,Y,T,M);b.onBeforeShadow(r,b,A,C,F,V,null),r.renderBufferDirect(C,null,F,V,b,null),b.onAfterShadow(r,b,A,C,F,V,null)}}const U=b.children;for(let F=0,Y=U.length;F<Y;F++)y(U[F],A,C,T,M)}function w(b){b.target.removeEventListener("dispose",w);for(const C in c){const T=c[C],M=b.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const Nx={[Pa]:Da,[Na]:Fa,[Ua]:Ba,[ws]:Oa,[Da]:Pa,[Fa]:Na,[Ba]:Ua,[Oa]:ws};function Ux(r,e){function t(){let D=!1;const re=new tt;let G=null;const j=new tt(0,0,0,0);return{setMask:function(ue){G!==ue&&!D&&(r.colorMask(ue,ue,ue,ue),G=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ce,Fe,St,Gt){Gt===!0&&(ue*=St,ce*=St,Fe*=St),re.set(ue,ce,Fe,St),j.equals(re)===!1&&(r.clearColor(ue,ce,Fe,St),j.copy(re))},reset:function(){D=!1,G=null,j.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,G=null,j=null,ue=null;return{setReversed:function(ce){if(re!==ce){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const St=ue;ue=null,this.setClear(St)}re=ce},getReversed:function(){return re},setTest:function(ce){ce?ae(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(ce){G!==ce&&!D&&(r.depthMask(ce),G=ce)},setFunc:function(ce){if(re&&(ce=Nx[ce]),j!==ce){switch(ce){case Pa:r.depthFunc(r.NEVER);break;case Da:r.depthFunc(r.ALWAYS);break;case Na:r.depthFunc(r.LESS);break;case ws:r.depthFunc(r.LEQUAL);break;case Ua:r.depthFunc(r.EQUAL);break;case Oa:r.depthFunc(r.GEQUAL);break;case Fa:r.depthFunc(r.GREATER);break;case Ba:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ue!==ce&&(re&&(ce=1-ce),r.clearDepth(ce),ue=ce)},reset:function(){D=!1,G=null,j=null,ue=null,re=!1}}}function i(){let D=!1,re=null,G=null,j=null,ue=null,ce=null,Fe=null,St=null,Gt=null;return{setTest:function(rt){D||(rt?ae(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(rt){re!==rt&&!D&&(r.stencilMask(rt),re=rt)},setFunc:function(rt,Mn,Vn){(G!==rt||j!==Mn||ue!==Vn)&&(r.stencilFunc(rt,Mn,Vn),G=rt,j=Mn,ue=Vn)},setOp:function(rt,Mn,Vn){(ce!==rt||Fe!==Mn||St!==Vn)&&(r.stencilOp(rt,Mn,Vn),ce=rt,Fe=Mn,St=Vn)},setLocked:function(rt){D=rt},setClear:function(rt){Gt!==rt&&(r.clearStencil(rt),Gt=rt)},reset:function(){D=!1,re=null,G=null,j=null,ue=null,ce=null,Fe=null,St=null,Gt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,v=null,y=null,w=null,b=null,A=new ye(0,0,0),C=0,T=!1,M=null,I=null,U=null,F=null,Y=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=$>=2);let ne=null,he={};const ve=r.getParameter(r.SCISSOR_BOX),Ge=r.getParameter(r.VIEWPORT),lt=new tt().fromArray(ve),q=new tt().fromArray(Ge);function ie(D,re,G,j){const ue=new Uint8Array(4),ce=r.createTexture();r.bindTexture(D,ce),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<G;Fe++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(re+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return ce}const xe={};xe[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(ws),Ke(!1),qe(nc),ae(r.CULL_FACE),P(ii);function ae(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ne(D,re){return u[D]!==re?(r.bindFramebuffer(D,re),u[D]=re,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(D,re){let G=p,j=!1;if(D){G=d.get(re),G===void 0&&(G=[],d.set(re,G));const ue=D.textures;if(G.length!==ue.length||G[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Fe=ue.length;ce<Fe;ce++)G[ce]=r.COLOR_ATTACHMENT0+ce;G.length=ue.length,j=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,j=!0);j&&r.drawBuffers(G)}function Mt(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const je={[zi]:r.FUNC_ADD,[Qd]:r.FUNC_SUBTRACT,[Jd]:r.FUNC_REVERSE_SUBTRACT};je[ef]=r.MIN,je[tf]=r.MAX;const Et={[nf]:r.ZERO,[sf]:r.ONE,[rf]:r.SRC_COLOR,[Ia]:r.SRC_ALPHA,[uf]:r.SRC_ALPHA_SATURATE,[cf]:r.DST_COLOR,[af]:r.DST_ALPHA,[of]:r.ONE_MINUS_SRC_COLOR,[La]:r.ONE_MINUS_SRC_ALPHA,[hf]:r.ONE_MINUS_DST_COLOR,[lf]:r.ONE_MINUS_DST_ALPHA,[df]:r.CONSTANT_COLOR,[ff]:r.ONE_MINUS_CONSTANT_COLOR,[pf]:r.CONSTANT_ALPHA,[mf]:r.ONE_MINUS_CONSTANT_ALPHA};function P(D,re,G,j,ue,ce,Fe,St,Gt,rt){if(D===ii){_===!0&&(Ie(r.BLEND),_=!1);return}if(_===!1&&(ae(r.BLEND),_=!0),D!==$d){if(D!==m||rt!==T){if((f!==zi||y!==zi)&&(r.blendEquation(r.FUNC_ADD),f=zi,y=zi),rt)switch(D){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hi:r.blendFunc(r.ONE,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hi:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ic:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,v=null,w=null,b=null,A.set(0,0,0),C=0,m=D,T=rt}return}ue=ue||re,ce=ce||G,Fe=Fe||j,(re!==f||ue!==y)&&(r.blendEquationSeparate(je[re],je[ue]),f=re,y=ue),(G!==x||j!==v||ce!==w||Fe!==b)&&(r.blendFuncSeparate(Et[G],Et[j],Et[ce],Et[Fe]),x=G,v=j,w=ce,b=Fe),(St.equals(A)===!1||Gt!==C)&&(r.blendColor(St.r,St.g,St.b,Gt),A.copy(St),C=Gt),m=D,T=!1}function hn(D,re){D.side===zt?Ie(r.CULL_FACE):ae(r.CULL_FACE);let G=D.side===rn;re&&(G=!G),Ke(G),D.blending===Ss&&D.transparent===!1?P(ii):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function qe(D){D!==Zd?(ae(r.CULL_FACE),D!==I&&(D===nc?r.cullFace(r.BACK):D===jd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),I=D}function Ee(D){D!==U&&(W&&r.lineWidth(D),U=D)}function pt(D,re,G){D?(ae(r.POLYGON_OFFSET_FILL),(F!==re||Y!==G)&&(r.polygonOffset(re,G),F=re,Y=G)):Ie(r.POLYGON_OFFSET_FILL)}function Te(D){D?ae(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+V-1),ne!==D&&(r.activeTexture(D),ne=D)}function S(D,re,G){G===void 0&&(ne===null?G=r.TEXTURE0+V-1:G=ne);let j=he[G];j===void 0&&(j={type:void 0,texture:void 0},he[G]=j),(j.type!==D||j.texture!==re)&&(ne!==G&&(r.activeTexture(G),ne=G),r.bindTexture(D,re||xe[D]),j.type=D,j.texture=re)}function B(){const D=he[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){lt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),lt.copy(D))}function me(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ze(D,re){let G=c.get(re);G===void 0&&(G=new WeakMap,c.set(re,G));let j=G.get(D);j===void 0&&(j=r.getUniformBlockIndex(re,D.name),G.set(D,j))}function ze(D,re){const j=c.get(re).get(D);l.get(re)!==j&&(r.uniformBlockBinding(re,j,D.__bindingPointIndex),l.set(re,j))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,he={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,v=null,y=null,w=null,b=null,A=new ye(0,0,0),C=0,T=!1,M=null,I=null,U=null,F=null,Y=null,lt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ae,disable:Ie,bindFramebuffer:Ne,drawBuffers:Ve,useProgram:Mt,setBlending:P,setMaterial:hn,setFlipSided:Ke,setCullFace:qe,setLineWidth:Ee,setPolygonOffset:pt,setScissorTest:Te,activeTexture:R,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ce,updateUBOMapping:Ze,uniformBlockBinding:ze,texStorage2D:$e,texStorage3D:ee,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Pe,viewport:me,reset:ht}}function Ox(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):gr("canvas")}function _(R,S,B){let Z=1;const Q=Te(R);if((Q.width>B||Q.height>B)&&(Z=B/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*Q.width),Me=Math.floor(Z*Q.height);u===void 0&&(u=g(K,Me));const le=S?g(K,Me):u;return le.width=K,le.height=Me,le.getContext("2d").drawImage(R,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Me+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,S,B,Z,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===r.RED&&(B===r.FLOAT&&(K=r.R32F),B===r.HALF_FLOAT&&(K=r.R16F),B===r.UNSIGNED_BYTE&&(K=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.R8UI),B===r.UNSIGNED_SHORT&&(K=r.R16UI),B===r.UNSIGNED_INT&&(K=r.R32UI),B===r.BYTE&&(K=r.R8I),B===r.SHORT&&(K=r.R16I),B===r.INT&&(K=r.R32I)),S===r.RG&&(B===r.FLOAT&&(K=r.RG32F),B===r.HALF_FLOAT&&(K=r.RG16F),B===r.UNSIGNED_BYTE&&(K=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RG8UI),B===r.UNSIGNED_SHORT&&(K=r.RG16UI),B===r.UNSIGNED_INT&&(K=r.RG32UI),B===r.BYTE&&(K=r.RG8I),B===r.SHORT&&(K=r.RG16I),B===r.INT&&(K=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGB8UI),B===r.UNSIGNED_SHORT&&(K=r.RGB16UI),B===r.UNSIGNED_INT&&(K=r.RGB32UI),B===r.BYTE&&(K=r.RGB8I),B===r.SHORT&&(K=r.RGB16I),B===r.INT&&(K=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),B===r.UNSIGNED_INT&&(K=r.RGBA32UI),B===r.BYTE&&(K=r.RGBA8I),B===r.SHORT&&(K=r.RGBA16I),B===r.INT&&(K=r.RGBA32I)),S===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),S===r.RGBA){const Me=Q?wo:Ye.getTransfer(Z);B===r.FLOAT&&(K=r.RGBA32F),B===r.HALF_FLOAT&&(K=r.RGBA16F),B===r.UNSIGNED_BYTE&&(K=Me===ot?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,S){let B;return R?S===null||S===Gi||S===Ls?B=r.DEPTH24_STENCIL8:S===In?B=r.DEPTH32F_STENCIL8:S===fr&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Ls?B=r.DEPTH_COMPONENT24:S===In?B=r.DEPTH_COMPONENT32F:S===fr&&(B=r.DEPTH_COMPONENT16),B}function w(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),C(S),S.isVideoTexture&&h.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,Z=d.get(B);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(R),Object.keys(Z).length===0&&d.delete(B)}n.remove(R)}function T(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const B=R.source,Z=d.get(B);delete Z[S.__cacheKey],o.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[Z]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let Z=0,Q=B.length;Z<Q;Z++){const K=n.get(B[Z]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(R)}let I=0;function U(){I=0}function F(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function Y(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const B=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,S);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function W(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function $(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function H(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){ie(B,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const ne={[Is]:r.REPEAT,[xn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},he={[kt]:r.NEAREST,[$u]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[Nt]:r.LINEAR,[_o]:r.LINEAR_MIPMAP_NEAREST,[Cn]:r.LINEAR_MIPMAP_LINEAR},ve={[wf]:r.NEVER,[Df]:r.ALWAYS,[Rf]:r.LESS,[hd]:r.LEQUAL,[Cf]:r.EQUAL,[Pf]:r.GEQUAL,[If]:r.GREATER,[Lf]:r.NOTEQUAL};function Ge(R,S){if(S.type===In&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nt||S.magFilter===_o||S.magFilter===ar||S.magFilter===Cn||S.minFilter===Nt||S.minFilter===_o||S.minFilter===ar||S.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,he[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kt||S.minFilter!==ar&&S.minFilter!==Cn||S.type===In&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function lt(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const Z=S.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const K=Y(S);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[K].usedTimes++;const Me=Q[R.__cacheKey];Me!==void 0&&(Q[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return B}function q(R,S,B){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const Q=lt(R,S),K=S.source;t.bindTexture(Z,R.__webglTexture,r.TEXTURE0+B);const Me=n.get(K);if(K.version!==Me.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const le=Ye.getPrimaries(Ye.workingColorSpace),fe=S.colorSpace===Mi?null:Ye.getPrimaries(S.colorSpace),$e=S.colorSpace===Mi||le===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ee=_(S.image,!1,i.maxTextureSize);ee=pt(S,ee);const pe=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type);let Pe=v(S.internalFormat,pe,Ce,S.colorSpace,S.isVideoTexture);Ge(Z,S);let me;const Ze=S.mipmaps,ze=S.isVideoTexture!==!0,ht=Me.__version===void 0||Q===!0,D=K.dataReady,re=w(S,ee);if(S.isDepthTexture)Pe=y(S.format===Ps,S.type),ht&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,pe,Ce,null));else if(S.isDataTexture)if(Ze.length>0){ze&&ht&&t.texStorage2D(r.TEXTURE_2D,re,Pe,Ze[0].width,Ze[0].height);for(let G=0,j=Ze.length;G<j;G++)me=Ze[G],ze?D&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(r.TEXTURE_2D,G,Pe,me.width,me.height,0,pe,Ce,me.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(r.TEXTURE_2D,re,Pe,ee.width,ee.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Ce,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ee.width,ee.height,0,pe,Ce,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Pe,Ze[0].width,Ze[0].height,ee.depth);for(let G=0,j=Ze.length;G<j;G++)if(me=Ze[G],S.format!==yn)if(pe!==null)if(ze){if(D)if(S.layerUpdates.size>0){const ue=$c(me.width,me.height,S.format,S.type);for(const ce of S.layerUpdates){const Fe=me.data.subarray(ce*ue/me.data.BYTES_PER_ELEMENT,(ce+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,ce,me.width,me.height,1,pe,Fe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Pe,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,me.width,me.height,ee.depth,pe,Ce,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Pe,me.width,me.height,ee.depth,0,pe,Ce,me.data)}else{ze&&ht&&t.texStorage2D(r.TEXTURE_2D,re,Pe,Ze[0].width,Ze[0].height);for(let G=0,j=Ze.length;G<j;G++)me=Ze[G],S.format!==yn?pe!==null?ze?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,me.width,me.height,pe,Ce,me.data):t.texImage2D(r.TEXTURE_2D,G,Pe,me.width,me.height,0,pe,Ce,me.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,re,Pe,ee.width,ee.height,ee.depth),D)if(S.layerUpdates.size>0){const G=$c(ee.width,ee.height,S.format,S.type);for(const j of S.layerUpdates){const ue=ee.data.subarray(j*G/ee.data.BYTES_PER_ELEMENT,(j+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,pe,Ce,ue)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ce,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,pe,Ce,ee.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(r.TEXTURE_3D,re,Pe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ce,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,pe,Ce,ee.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(r.TEXTURE_2D,re,Pe,ee.width,ee.height);else{let G=ee.width,j=ee.height;for(let ue=0;ue<re;ue++)t.texImage2D(r.TEXTURE_2D,ue,Pe,G,j,0,pe,Ce,null),G>>=1,j>>=1}}else if(Ze.length>0){if(ze&&ht){const G=Te(Ze[0]);t.texStorage2D(r.TEXTURE_2D,re,Pe,G.width,G.height)}for(let G=0,j=Ze.length;G<j;G++)me=Ze[G],ze?D&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,pe,Ce,me):t.texImage2D(r.TEXTURE_2D,G,Pe,pe,Ce,me);S.generateMipmaps=!1}else if(ze){if(ht){const G=Te(ee);t.texStorage2D(r.TEXTURE_2D,re,Pe,G.width,G.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,Ce,ee)}else t.texImage2D(r.TEXTURE_2D,0,Pe,pe,Ce,ee);m(S)&&f(Z),Me.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ie(R,S,B){if(S.image.length!==6)return;const Z=lt(R,S),Q=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const K=n.get(Q);if(Q.version!==K.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const Me=Ye.getPrimaries(Ye.workingColorSpace),le=S.colorSpace===Mi?null:Ye.getPrimaries(S.colorSpace),fe=S.colorSpace===Mi||Me===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const $e=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!$e&&!ee?pe[j]=_(S.image[j],!0,i.maxCubemapSize):pe[j]=ee?S.image[j].image:S.image[j],pe[j]=pt(S,pe[j]);const Ce=pe[0],Pe=s.convert(S.format,S.colorSpace),me=s.convert(S.type),Ze=v(S.internalFormat,Pe,me,S.colorSpace),ze=S.isVideoTexture!==!0,ht=K.__version===void 0||Z===!0,D=Q.dataReady;let re=w(S,Ce);Ge(r.TEXTURE_CUBE_MAP,S);let G;if($e){ze&&ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Ze,Ce.width,Ce.height);for(let j=0;j<6;j++){G=pe[j].mipmaps;for(let ue=0;ue<G.length;ue++){const ce=G[ue];S.format!==yn?Pe!==null?ze?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,0,0,ce.width,ce.height,Pe,me,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue,Ze,ce.width,ce.height,0,Pe,me,ce.data)}}}else{if(G=S.mipmaps,ze&&ht){G.length>0&&re++;const j=Te(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,re,Ze,j.width,j.height)}for(let j=0;j<6;j++)if(ee){ze?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Pe,me,pe[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,pe[j].width,pe[j].height,0,Pe,me,pe[j].data);for(let ue=0;ue<G.length;ue++){const Fe=G[ue].image[j].image;ze?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Fe.width,Fe.height,Pe,me,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ze,Fe.width,Fe.height,0,Pe,me,Fe.data)}}else{ze?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,me,pe[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,Pe,me,pe[j]);for(let ue=0;ue<G.length;ue++){const ce=G[ue];ze?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,0,0,Pe,me,ce.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ue+1,Ze,Pe,me,ce.image[j])}}}m(S)&&f(r.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,B,Z,Q,K){const Me=s.convert(B.format,B.colorSpace),le=s.convert(B.type),fe=v(B.internalFormat,Me,le,B.colorSpace),$e=n.get(S),ee=n.get(B);if(ee.__renderTarget=S,!$e.__hasExternalTextures){const pe=Math.max(1,S.width>>K),Ce=Math.max(1,S.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,fe,pe,Ce,S.depth,0,Me,le,null):t.texImage2D(Q,K,fe,pe,Ce,0,Me,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,ee.__webglTexture,0,Ke(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,ee.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(R,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=y(S.stencilBuffer,Q),Me=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ke(S);qe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,K,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,K,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,K,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,R)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Me=s.convert(K.format,K.colorSpace),le=s.convert(K.type),fe=v(K.internalFormat,Me,le,K.colorSpace),$e=Ke(S);B&&qe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,fe,S.width,S.height):qe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e,fe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,fe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Q=Z.__webglTexture,K=Ke(S);if(S.depthTexture.format===Ts)qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ps)qe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=r.createRenderbuffer(),ae(S.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ae(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Q)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(R,S,B){const Z=n.get(R);S!==void 0&&xe(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ne(R)}function Mt(R){const S=R.texture,B=n.get(R),Z=n.get(S);R.addEventListener("dispose",A);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let fe=0;fe<S.mipmaps.length;fe++)B.__webglFramebuffer[le][fe]=r.createFramebuffer()}else B.__webglFramebuffer[le]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)B.__webglFramebuffer[le]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(Me)for(let le=0,fe=Q.length;le<fe;le++){const $e=n.get(Q[le]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&qe(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const fe=Q[le];B.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const $e=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),pe=v(fe.internalFormat,$e,ee,fe.colorSpace,R.isXRRenderTarget===!0),Ce=Ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,B.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)xe(B.__webglFramebuffer[le][fe],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else xe(B.__webglFramebuffer[le],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,fe=Q.length;le<fe;le++){const $e=Q[le],ee=n.get($e);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Ge(r.TEXTURE_2D,$e),xe(B.__webglFramebuffer,R,$e,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m($e)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Ge(le,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)xe(B.__webglFramebuffer[fe],R,S,r.COLOR_ATTACHMENT0,le,fe);else xe(B.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,le,0);m(S)&&f(le),t.unbindTexture()}R.depthBuffer&&Ne(R)}function je(R){const S=R.textures;for(let B=0,Z=S.length;B<Z;B++){const Q=S[B];if(m(Q)){const K=x(R),Me=n.get(Q).__webglTexture;t.bindTexture(K,Me),f(K),t.unbindTexture()}}}const Et=[],P=[];function hn(R){if(R.samples>0){if(qe(R)===!1){const S=R.textures,B=R.width,Z=R.height;let Q=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=n.get(R),le=S.length>1;if(le)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const $e=n.get(S[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,B,Z,0,0,B,Z,Q,r.NEAREST),l===!0&&(Et.length=0,P.length=0,Et.push(r.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Et.push(K),P.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,Me.__webglColorRenderbuffer[fe]);const $e=n.get(S[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ke(R){return Math.min(i.maxSamples,R.samples)}function qe(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function pt(R,S){const B=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==en&&B!==Mi&&(Ye.getTransfer(B)===ot?(Z!==yn||Q!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ve,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=qe}function Fx(r,e){function t(n,i=Mi){let s;const o=Ye.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===Al)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return r.BYTE;if(n===Ju)return r.SHORT;if(n===fr)return r.UNSIGNED_SHORT;if(n===bl)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===In)return r.FLOAT;if(n===si)return r.HALF_FLOAT;if(n===td)return r.ALPHA;if(n===nd)return r.RGB;if(n===yn)return r.RGBA;if(n===id)return r.LUMINANCE;if(n===sd)return r.LUMINANCE_ALPHA;if(n===Ts)return r.DEPTH_COMPONENT;if(n===Ps)return r.DEPTH_STENCIL;if(n===Rl)return r.RED;if(n===Cl)return r.RED_INTEGER;if(n===rd)return r.RG;if(n===Il)return r.RG_INTEGER;if(n===Ll)return r.RGBA_INTEGER;if(n===xo||n===yo||n===vo||n===Mo)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Va||n===Wa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===Ya||n===Ka)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xa||n===Ya)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qa||n===Za||n===ja||n===$a||n===Qa||n===Ja||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===el)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===ll||n===cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===So)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===od||n===hl||n===ul||n===dl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Bx={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:zx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Vi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new Hx,m=t.getContextAttributes();let f=null,x=null;const v=[],y=[],w=new _e;let b=null;const A=new nn;A.viewport=new tt;const C=new nn;C.viewport=new tt;const T=[A,C],M=new jp;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=v[q];return ie===void 0&&(ie=new va,v[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=v[q];return ie===void 0&&(ie=new va,v[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=v[q];return ie===void 0&&(ie=new va,v[q]=ie),ie.getHandSpace()};function F(q){const ie=y.indexOf(q.inputSource);if(ie===-1)return;const xe=v[ie];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||o),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){const ie=y[q];ie!==null&&(y[q]=null,v[q].disconnect(ie))}I=null,U=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,x=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let xe=null,ae=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?Ps:Ts,ae=m.stencil?Ls:Gi);const Ne={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pn(d.textureWidth,d.textureHeight,{format:yn,type:li,depthTexture:new wd(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Pn(p.framebufferWidth,p.framebufferHeight,{format:yn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let ie=0;ie<q.removed.length;ie++){const xe=q.removed[ie],ae=y.indexOf(xe);ae>=0&&(y[ae]=null,v[ae].disconnect(xe))}for(let ie=0;ie<q.added.length;ie++){const xe=q.added[ie];let ae=y.indexOf(xe);if(ae===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=y.length){y.push(xe),ae=Ne;break}else if(y[Ne]===null){y[Ne]=xe,ae=Ne;break}if(ae===-1)break}const Ie=v[ae];Ie&&Ie.connect(xe)}}const W=new L,$=new L;function H(q,ie,xe){W.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(xe.matrixWorld);const ae=W.distanceTo($),Ie=ie.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),Mt=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],Et=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],hn=(Ne[8]+1)/Ne[0],Ke=Ve*P,qe=Ve*hn,Ee=ae/(-P+hn),pt=Ee*-P;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pt),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Te=Ve+Ee,R=Mt+Ee,S=Ke-pt,B=qe+(ae-pt),Z=je*Mt/R*Te,Q=Et*Mt/R*Te;q.projectionMatrix.makePerspective(S,B,Z,Q,Te,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ie=q.near,xe=q.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=C.near=A.near=ie,M.far=C.far=A.far=xe,(I!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,U=M.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const ae=q.parent,Ie=M.cameras;ne(M,ae);for(let Ne=0;Ne<Ie.length;Ne++)ne(Ie[Ne],ae);Ie.length===2?H(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),he(q,M,ae)};function he(q,ie,xe){xe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function Ge(q,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ae=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ne=0;Ne<xe.length;Ne++){const Ve=xe[Ne];let Mt=null;if(p!==null)Mt=p.getViewport(Ve);else{const Et=u.getViewSubImage(d,Ve);Mt=Et.viewport,Ne===0&&(e.setRenderTargetTextures(x,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(x))}let je=T[Ne];je===void 0&&(je=new nn,je.layers.enable(Ne),je.viewport=new tt,T[Ne]=je),je.matrix.fromArray(Ve.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ve.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Ne===0&&(M.matrix.copy(je.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(je)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ne=u.getDepthInformation(xe[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(e,Ne,i.renderState)}}for(let xe=0;xe<v.length;xe++){const ae=y[xe],Ie=v[xe];ae!==null&&Ie!==void 0&&Ie.update(ae,ie,c||o)}ve&&ve(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const lt=new Dd;lt.setAnimationLoop(Ge),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Oi=new zn,Vx=new Oe;function Wx(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_d(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,y=x.envMapRotation;v&&(m.envMap.value=v,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(Oi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const w=v.program;n.updateUBOMapping(x,w);const b=e.render.frame;s[x.id]!==b&&(d(x),s[x.id]=b)}function h(x){const v=u();x.__bindingPointIndex=v;const y=r.createBuffer(),w=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,w,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],y=x.uniforms,w=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let b=0,A=y.length;b<A;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,M=C.length;T<M;T++){const I=C[T];if(p(I,b,T,w)===!0){const U=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let V=0;V<F.length;V++){const W=F[V],$=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,U+Y,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(x,v,y,w){const b=x.value,A=v+"_"+y;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const C=w[A];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return w[A]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){const v=x.uniforms;let y=0;const w=16;for(let A=0,C=v.length;A<C;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,I=T.length;M<I;M++){const U=T[M],F=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,V=F.length;Y<V;Y++){const W=F[Y],$=_(W),H=y%w,ne=H%$.boundary,he=H+ne;y+=ne,he!==0&&w-he<$.storage&&(y+=w-he),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=$.storage}}}const b=y%w;return b>0&&(y+=w-b),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Yx{constructor(e={}){const{canvas:t=$f(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=wi,this.toneMappingExposure=1;const y=this;let w=!1,b=0,A=0,C=null,T=-1,M=null;const I=new tt,U=new tt;let F=null;const Y=new ye(0);let V=0,W=t.width,$=t.height,H=1,ne=null,he=null;const ve=new tt(0,0,W,$),Ge=new tt(0,0,W,$);let lt=!1;const q=new Fl;let ie=!1,xe=!1;this.transmissionResolutionScale=1;const ae=new Oe,Ie=new Oe,Ne=new L,Ve=new tt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Et(){return C===null?H:1}let P=n;function hn(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),P===null){const N="webgl2";if(P=hn(N,E),P===null)throw hn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,qe,Ee,pt,Te,R,S,B,Z,Q,K,Me,le,fe,$e,ee,pe,Ce,Pe,me,Ze,ze,ht,D;function re(){Ke=new t0(P),Ke.init(),ze=new Fx(P,Ke),qe=new Z_(P,Ke,e,ze),Ee=new Ux(P,Ke),qe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),pt=new s0(P),Te=new Sx,R=new Ox(P,Ke,Ee,Te,qe,ze,pt),S=new $_(y),B=new e0(y),Z=new um(P),ht=new K_(P,Z),Q=new n0(P,Z,pt,ht),K=new o0(P,Q,Z,pt),Pe=new r0(P,qe,R),ee=new j_(Te),Me=new Mx(y,S,B,Ke,qe,ht,ee),le=new Wx(y,Te),fe=new Ex,$e=new Ix(Ke),Ce=new Y_(y,S,B,Ee,K,p,l),pe=new Dx(y,K,qe),D=new Xx(P,pt,qe,Ee),me=new q_(P,Ke,pt),Ze=new i0(P,Ke,pt),pt.programs=Me.programs,y.capabilities=qe,y.extensions=Ke,y.properties=Te,y.renderLists=fe,y.shadowMap=pe,y.state=Ee,y.info=pt}re();const G=new Gx(y,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,$,!1))},this.getSize=function(E){return E.set(W,$)},this.setSize=function(E,N,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,$=N,t.width=Math.floor(E*H),t.height=Math.floor(N*H),z===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(W*H,$*H).floor()},this.setDrawingBufferSize=function(E,N,z){W=E,$=N,H=z,t.width=Math.floor(E*z),t.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,N,z,k){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,N,z,k),Ee.viewport(I.copy(ve).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,N,z,k){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,N,z,k),Ee.scissor(U.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Ee.setScissorTest(lt=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){he=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,N=!0,z=!0){let k=0;if(E){let O=!1;if(C!==null){const J=C.texture.format;O=J===Ll||J===Il||J===Cl}if(O){const J=C.texture.type,oe=J===li||J===Gi||J===fr||J===Ls||J===Al||J===wl,de=Ce.getClearColor(),ge=Ce.getClearAlpha(),De=de.r,Ue=de.g,we=de.b;oe?(g[0]=De,g[1]=Ue,g[2]=we,g[3]=ge,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=De,_[1]=Ue,_[2]=we,_[3]=ge,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),z&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ce.dispose(),fe.dispose(),$e.dispose(),Te.dispose(),S.dispose(),B.dispose(),K.dispose(),ht.dispose(),D.dispose(),Me.dispose(),G.dispose(),G.removeEventListener("sessionstart",Zl),G.removeEventListener("sessionend",jl),Ci.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=pt.autoReset,N=pe.enabled,z=pe.autoUpdate,k=pe.needsUpdate,O=pe.type;re(),pt.autoReset=E,pe.enabled=N,pe.autoUpdate=z,pe.needsUpdate=k,pe.type=O}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const N=E.target;N.removeEventListener("dispose",Fe),St(N)}function St(E){Gt(E),Te.remove(E)}function Gt(E){const N=Te.get(E).programs;N!==void 0&&(N.forEach(function(z){Me.releaseProgram(z)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,k,O,J){N===null&&(N=Mt);const oe=O.isMesh&&O.matrixWorld.determinant()<0,de=Vd(E,N,z,k,O);Ee.setMaterial(k,oe);let ge=z.index,De=1;if(k.wireframe===!0){if(ge=Q.getWireframeAttribute(z),ge===void 0)return;De=2}const Ue=z.drawRange,we=z.attributes.position;let Qe=Ue.start*De,nt=(Ue.start+Ue.count)*De;J!==null&&(Qe=Math.max(Qe,J.start*De),nt=Math.min(nt,(J.start+J.count)*De)),ge!==null?(Qe=Math.max(Qe,0),nt=Math.min(nt,ge.count)):we!=null&&(Qe=Math.max(Qe,0),nt=Math.min(nt,we.count));const At=nt-Qe;if(At<0||At===1/0)return;ht.setup(O,k,de,z,ge);let Tt,Je=me;if(ge!==null&&(Tt=Z.get(ge),Je=Ze,Je.setIndex(Tt)),O.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*Et()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(O.isLine){let Re=k.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*Et()),O.isLineSegments?Je.setMode(P.LINES):O.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else O.isPoints?Je.setMode(P.POINTS):O.isSprite&&Je.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Re=O._multiDrawStarts,Ut=O._multiDrawCounts,it=O._multiDrawCount,Sn=ge?Z.get(ge).bytesPerElement:1,Wi=Te.get(k).currentProgram.getUniforms();for(let on=0;on<it;on++)Wi.setValue(P,"_gl_DrawID",on),Je.render(Re[on]/Sn,Ut[on])}else if(O.isInstancedMesh)Je.renderInstances(Qe,At,O.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Re);Je.renderInstances(Qe,At,Ut)}else Je.render(Qe,At)};function rt(E,N,z){E.transparent===!0&&E.side===zt&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,Ir(E,N,z),E.side=ai,E.needsUpdate=!0,Ir(E,N,z),E.side=zt):Ir(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),f=$e.get(z),f.init(N),v.push(f),z.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const k=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const J=O.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const de=J[oe];rt(de,z,O),k.add(de)}else rt(J,z,O),k.add(J)}),v.pop(),f=null,k},this.compileAsync=function(E,N,z=null){const k=this.compile(E,N,z);return new Promise(O=>{function J(){if(k.forEach(function(oe){Te.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){O(E);return}setTimeout(J,10)}Ke.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Mn=null;function Vn(E){Mn&&Mn(E)}function Zl(){Ci.stop()}function jl(){Ci.start()}const Ci=new Dd;Ci.setAnimationLoop(Vn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){Mn=E,G.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},G.addEventListener("sessionstart",Zl),G.addEventListener("sessionend",jl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(N),N=G.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,N,C),f=$e.get(E,v.length),f.init(N),v.push(f),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,ie=ee.init(this.clippingPlanes,xe),m=fe.get(E,x.length),m.init(),x.push(m),G.enabled===!0&&G.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&zo(J,N,-1/0,y.sortObjects)}zo(E,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,he),je=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,je&&Ce.addToRenderList(m,E),this.info.render.frame++,ie===!0&&ee.beginShadows();const z=f.state.shadowsArray;pe.render(z,E,N),ie===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,O=m.transmissive;if(f.setupLights(),N.isArrayCamera){const J=N.cameras;if(O.length>0)for(let oe=0,de=J.length;oe<de;oe++){const ge=J[oe];Ql(k,O,E,ge)}je&&Ce.render(E);for(let oe=0,de=J.length;oe<de;oe++){const ge=J[oe];$l(m,E,ge,ge.viewport)}}else O.length>0&&Ql(k,O,E,N),je&&Ce.render(E),$l(m,E,N);C!==null&&A===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,N),ht.resetDefaultState(),T=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],ie===!0&&ee.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function zo(E,N,z,k){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){k&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const oe=K.update(E),de=E.material;de.visible&&m.push(E,oe,de,z,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const oe=K.update(E),de=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ve.copy(oe.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(de)){const ge=oe.groups;for(let De=0,Ue=ge.length;De<Ue;De++){const we=ge[De],Qe=de[we.materialIndex];Qe&&Qe.visible&&m.push(E,oe,Qe,z,Ve.z,we)}}else de.visible&&m.push(E,oe,de,z,Ve.z,null)}}const J=E.children;for(let oe=0,de=J.length;oe<de;oe++)zo(J[oe],N,z,k)}function $l(E,N,z,k){const O=E.opaque,J=E.transmissive,oe=E.transparent;f.setupLightsView(z),ie===!0&&ee.setGlobalState(y.clippingPlanes,z),k&&Ee.viewport(I.copy(k)),O.length>0&&Cr(O,N,z),J.length>0&&Cr(J,N,z),oe.length>0&&Cr(oe,N,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ql(E,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Pn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?si:li,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const J=f.state.transmissionRenderTarget[k.id],oe=k.viewport||I;J.setSize(oe.z*y.transmissionResolutionScale,oe.w*y.transmissionResolutionScale);const de=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(Y),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),je&&Ce.render(z);const ge=y.toneMapping;y.toneMapping=wi;const De=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ie===!0&&ee.setGlobalState(y.clippingPlanes,k),Cr(E,z,k),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let we=0,Qe=N.length;we<Qe;we++){const nt=N[we],At=nt.object,Tt=nt.geometry,Je=nt.material,Re=nt.group;if(Je.side===zt&&At.layers.test(k.layers)){const Ut=Je.side;Je.side=rn,Je.needsUpdate=!0,Jl(At,z,k,Tt,Je,Re),Je.side=Ut,Je.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}y.setRenderTarget(de),y.setClearColor(Y,V),De!==void 0&&(k.viewport=De),y.toneMapping=ge}function Cr(E,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let O=0,J=E.length;O<J;O++){const oe=E[O],de=oe.object,ge=oe.geometry,De=k===null?oe.material:k,Ue=oe.group;de.layers.test(z.layers)&&Jl(de,N,z,ge,De,Ue)}}function Jl(E,N,z,k,O,J){E.onBeforeRender(y,N,z,k,O,J),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,N,z,k,E,J),O.transparent===!0&&O.side===zt&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,y.renderBufferDirect(z,N,k,O,E,J),O.side=ai,O.needsUpdate=!0,y.renderBufferDirect(z,N,k,O,E,J),O.side=zt):y.renderBufferDirect(z,N,k,O,E,J),E.onAfterRender(y,N,z,k,O,J)}function Ir(E,N,z){N.isScene!==!0&&(N=Mt);const k=Te.get(E),O=f.state.lights,J=f.state.shadowsArray,oe=O.state.version,de=Me.getParameters(E,O.state,J,N,z),ge=Me.getProgramCacheKey(de);let De=k.programs;k.environment=E.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Fe),De=new Map,k.programs=De);let Ue=De.get(ge);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===oe)return tc(E,de),Ue}else de.uniforms=Me.getUniforms(E),E.onBeforeCompile(de,y),Ue=Me.acquireProgram(de,ge),De.set(ge,Ue),k.uniforms=de.uniforms;const we=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=ee.uniform),tc(E,de),k.needsLights=Xd(E),k.lightsStateVersion=oe,k.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),k.currentProgram=Ue,k.uniformsList=null,Ue}function ec(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=To.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function tc(E,N){const z=Te.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Vd(E,N,z,k,O){N.isScene!==!0&&(N=Mt),R.resetTextureUnits();const J=N.fog,oe=k.isMeshStandardMaterial?N.environment:null,de=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:en,ge=(k.isMeshStandardMaterial?B:S).get(k.envMap||oe),De=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,nt=!!z.morphAttributes.color;let At=wi;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=y.toneMapping);const Tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=Tt!==void 0?Tt.length:0,Re=Te.get(k),Ut=f.state.lights;if(ie===!0&&(xe===!0||E!==M)){const Zt=E===M&&k.id===T;ee.setState(k,E,Zt)}let it=!1;k.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Ut.state.version||Re.outputColorSpace!==de||O.isBatchedMesh&&Re.batching===!1||!O.isBatchedMesh&&Re.batching===!0||O.isBatchedMesh&&Re.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Re.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Re.instancing===!1||!O.isInstancedMesh&&Re.instancing===!0||O.isSkinnedMesh&&Re.skinning===!1||!O.isSkinnedMesh&&Re.skinning===!0||O.isInstancedMesh&&Re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Re.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Re.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Re.instancingMorph===!1&&O.morphTexture!==null||Re.envMap!==ge||k.fog===!0&&Re.fog!==J||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ee.numPlanes||Re.numIntersection!==ee.numIntersection)||Re.vertexAlphas!==De||Re.vertexTangents!==Ue||Re.morphTargets!==we||Re.morphNormals!==Qe||Re.morphColors!==nt||Re.toneMapping!==At||Re.morphTargetsCount!==Je)&&(it=!0):(it=!0,Re.__version=k.version);let Sn=Re.currentProgram;it===!0&&(Sn=Ir(k,N,O));let Wi=!1,on=!1,Xs=!1;const _t=Sn.getUniforms(),un=Re.uniforms;if(Ee.useProgram(Sn.program)&&(Wi=!0,on=!0,Xs=!0),k.id!==T&&(T=k.id,on=!0),Wi||M!==E){Ee.buffers.depth.getReversed()?(ae.copy(E.projectionMatrix),Jf(ae),ep(ae),_t.setValue(P,"projectionMatrix",ae)):_t.setValue(P,"projectionMatrix",E.projectionMatrix),_t.setValue(P,"viewMatrix",E.matrixWorldInverse);const tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(P,Ne.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,on=!0,Xs=!0)}if(O.isSkinnedMesh){_t.setOptional(P,O,"bindMatrix"),_t.setOptional(P,O,"bindMatrixInverse");const Zt=O.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(P,"boneTexture",Zt.boneTexture,R))}O.isBatchedMesh&&(_t.setOptional(P,O,"batchingTexture"),_t.setValue(P,"batchingTexture",O._matricesTexture,R),_t.setOptional(P,O,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",O._indirectTexture,R),_t.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",O._colorsTexture,R));const dn=z.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Pe.update(O,z,Sn),(on||Re.receiveShadow!==O.receiveShadow)&&(Re.receiveShadow=O.receiveShadow,_t.setValue(P,"receiveShadow",O.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(un.envMap.value=ge,un.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),on&&(_t.setValue(P,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Wd(un,Xs),J&&k.fog===!0&&le.refreshFogUniforms(un,J),le.refreshMaterialUniforms(un,k,H,$,f.state.transmissionRenderTarget[E.id]),To.upload(P,ec(Re),un,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(To.upload(P,ec(Re),un,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(P,"center",O.center),_t.setValue(P,"modelViewMatrix",O.modelViewMatrix),_t.setValue(P,"normalMatrix",O.normalMatrix),_t.setValue(P,"modelMatrix",O.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let tn=0,ko=Zt.length;tn<ko;tn++){const Ii=Zt[tn];D.update(Ii,Sn),D.bind(Ii,Sn)}}return Sn}function Wd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Xd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,z){Te.get(E.texture).__webglTexture=N,Te.get(E.depthTexture).__webglTexture=z;const k=Te.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const z=Te.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const Yd=P.createFramebuffer();this.setRenderTarget=function(E,N=0,z=0){C=E,b=N,A=z;let k=!0,O=null,J=!1,oe=!1;if(E){const ge=Te.get(E);if(ge.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ge.__hasExternalTextures)R.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const we=E.depthTexture;if(ge.__boundDepthTexture!==we){if(we!==null&&Te.has(we)&&(E.width!==we.image.width||E.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(oe=!0);const Ue=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?O=Ue[N][z]:O=Ue[N],J=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[z]:O=Ue,I.copy(E.viewport),U.copy(E.scissor),F=E.scissorTest}else I.copy(ve).multiplyScalar(H).floor(),U.copy(Ge).multiplyScalar(H).floor(),F=lt;if(z!==0&&(O=Yd),Ee.bindFramebuffer(P.FRAMEBUFFER,O)&&k&&Ee.drawBuffers(E,O),Ee.viewport(I),Ee.scissor(U),Ee.setScissorTest(F),J){const ge=Te.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,z)}else if(oe){const ge=Te.get(E.texture),De=N;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.__webglTexture,z,De)}else if(E!==null&&z!==0){const ge=Te.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(E,N,z,k,O,J,oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de){Ee.bindFramebuffer(P.FRAMEBUFFER,de);try{const ge=E.texture,De=ge.format,Ue=ge.type;if(!qe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-k&&z>=0&&z<=E.height-O&&P.readPixels(N,z,k,O,ze.convert(De),ze.convert(Ue),J)}finally{const ge=C!==null?Te.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,k,O,J,oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de){const ge=E.texture,De=ge.format,Ue=ge.type;if(!qe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-k&&z>=0&&z<=E.height-O){Ee.bindFramebuffer(P.FRAMEBUFFER,de);const we=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.bufferData(P.PIXEL_PACK_BUFFER,J.byteLength,P.STREAM_READ),P.readPixels(N,z,k,O,ze.convert(De),ze.convert(Ue),0);const Qe=C!==null?Te.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Qe);const nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qf(P,nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,we),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,J),P.deleteBuffer(we),P.deleteSync(nt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-z),O=Math.floor(E.image.width*k),J=Math.floor(E.image.height*k),oe=N!==null?N.x:0,de=N!==null?N.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,oe,de,O,J),Ee.unbindTexture()};const Kd=P.createFramebuffer(),qd=P.createFramebuffer();this.copyTextureToTexture=function(E,N,z=null,k=null,O=0,J=null){E.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],N=arguments[2],J=arguments[3]||0,z=null),J===null&&(O!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=O,O=0):J=0);let oe,de,ge,De,Ue,we,Qe,nt,At;const Tt=E.isCompressedTexture?E.mipmaps[J]:E.image;if(z!==null)oe=z.max.x-z.min.x,de=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Ue=z.min.y,we=z.isBox3?z.min.z:0;else{const dn=Math.pow(2,-O);oe=Math.floor(Tt.width*dn),de=Math.floor(Tt.height*dn),E.isDataArrayTexture?ge=Tt.depth:E.isData3DTexture?ge=Math.floor(Tt.depth*dn):ge=1,De=0,Ue=0,we=0}k!==null?(Qe=k.x,nt=k.y,At=k.z):(Qe=0,nt=0,At=0);const Je=ze.convert(N.format),Re=ze.convert(N.type);let Ut;N.isData3DTexture?(R.setTexture3D(N,0),Ut=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ut=P.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),Sn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wi=P.getParameter(P.UNPACK_SKIP_PIXELS),on=P.getParameter(P.UNPACK_SKIP_ROWS),Xs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we);const _t=E.isDataArrayTexture||E.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const dn=Te.get(E),Zt=Te.get(N),tn=Te.get(dn.__renderTarget),ko=Te.get(Zt.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let Ii=0;Ii<ge;Ii++)_t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(E).__webglTexture,O,we+Ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,J,At+Ii)),P.blitFramebuffer(De,Ue,oe,de,Qe,nt,oe,de,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Te.has(E)){const dn=Te.get(E),Zt=Te.get(N);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,Kd),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,qd);for(let tn=0;tn<ge;tn++)_t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,O,we+tn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,O),un?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,J,At+tn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,J),O!==0?P.blitFramebuffer(De,Ue,oe,de,Qe,nt,oe,de,P.COLOR_BUFFER_BIT,P.NEAREST):un?P.copyTexSubImage3D(Ut,J,Qe,nt,At+tn,De,Ue,oe,de):P.copyTexSubImage2D(Ut,J,Qe,nt,De,Ue,oe,de);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else un?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ut,J,Qe,nt,At,oe,de,ge,Je,Re,Tt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,J,Qe,nt,At,oe,de,ge,Je,Tt.data):P.texSubImage3D(Ut,J,Qe,nt,At,oe,de,ge,Je,Re,Tt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,J,Qe,nt,oe,de,Je,Re,Tt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,J,Qe,nt,Tt.width,Tt.height,Je,Tt.data):P.texSubImage2D(P.TEXTURE_2D,J,Qe,nt,oe,de,Je,Re,Tt);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Sn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wi),P.pixelStorei(P.UNPACK_SKIP_ROWS,on),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xs),J===0&&N.generateMipmaps&&P.generateMipmap(Ut),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,k=null,O=0){return E.isTexture!==!0&&(xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,z,k,O)},this.initRenderTarget=function(E){Te.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,Ee.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Bd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new Rr(-1,1,1,-1,0,1);class qx extends Pt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}}const Zx=new qx;class Kl{constructor(e){this._mesh=new Ae(Zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jx extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_r.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sh extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $x extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Qx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jx(Bd),this.copyPass.material.blending=ii,this.clock=new xl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sh!==void 0&&(o instanceof Sh?n=!0:o instanceof $x&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Th extends Ws{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Jx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zs extends Ws{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(s,o,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Pn(s,o,{type:si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Pn(s,o,{type:si});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=Jx;this.highPassUniforms=_r.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bd;this.copyUniforms=_r.clone(h.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ut,this.fsQuad=new Kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new _e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}zs.BlurDirectionX=new _e(1,0);zs.BlurDirectionY=new _e(0,1);const ey={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ty extends Ws{constructor(){super();const e=ey;this.uniforms=_r.clone(e.uniforms),this.material=new Lp({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ku?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const gi=2,Ma=0,ny=2,iy=858922,sy=380,ry=1,oy=3500,ay=200,ly=200,cy=200,hy=0,uy=10,dy=1e3,fy=2e3,Eh=4871528,bh=1.6,Ah=16774630,wh=2.5,Rh=400,Ch=600,Ih=200,Lh=2048,lo=1e3,py=3500,my=-5e-4,gy=1710628,_y=2e-4,xy=.4,yy=.35,vy=.9;class Le{static scene;static camera;static renderer;static composer;static clock;static currentFrustumSize=sy;static groundGroup;static cityGroup;static effectsGroup;static playerGroup;static ufoScene;static setFrustumSize(e){this.currentFrustumSize=e,this.updateCameraProjection()}static getFrustumSize(){return this.currentFrustumSize}static updateCameraProjection(){if(!this.camera)return;const e=window.innerWidth/window.innerHeight,t=e<1?this.currentFrustumSize/Math.max(.6,e):this.currentFrustumSize;this.camera.left=-t*e/gi,this.camera.right=t*e/gi,this.camera.top=t/gi,this.camera.bottom=-t/gi,this.camera.updateProjectionMatrix()}static init(e){this.renderer=new Yx({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,ny)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gu,e.appendChild(this.renderer.domElement),this.scene=new Ac,this.scene.background=new ye(iy);const t=window.innerWidth/window.innerHeight,n=this.currentFrustumSize;this.camera=new Rr(n*t/-gi,n*t/gi,n/gi,n/-gi,ry,oy),this.camera.position.set(ay,ly,cy),this.camera.lookAt(Ma,Ma,Ma),this.groundGroup=new yt,this.cityGroup=new yt,this.playerGroup=new yt,this.effectsGroup=new yt,this.groundGroup.renderOrder=hy,this.cityGroup.renderOrder=uy,this.playerGroup.renderOrder=dy,this.effectsGroup.renderOrder=fy,this.scene.add(this.groundGroup),this.scene.add(this.cityGroup),this.scene.add(this.playerGroup),this.scene.add(this.effectsGroup),this.ufoScene=new Ac;const i=new Kc(Eh,bh),s=new _l(Ah,wh);s.position.set(Rh,Ch,Ih),this.ufoScene.add(i),this.ufoScene.add(s);const o=new Kc(Eh,bh);this.scene.add(o);const a=new _l(Ah,wh);a.position.set(Rh,Ch,Ih),a.castShadow=!0,a.shadow.mapSize.width=Lh,a.shadow.mapSize.height=Lh,a.shadow.camera.left=-lo,a.shadow.camera.right=lo,a.shadow.camera.top=lo,a.shadow.camera.bottom=-lo,a.shadow.camera.far=py,a.shadow.bias=my,this.scene.add(a),this.scene.fog=new Ul(gy,_y),this.clock=new xl,this.composer=new Qx(this.renderer);const l=new Th(this.scene,this.camera);this.composer.addPass(l);const c=new zs(new _e(window.innerWidth,window.innerHeight),xy,yy,vy);this.composer.addPass(c);const h=new Th(this.ufoScene,this.camera);h.clear=!1,h.clearDepth=!0,this.composer.addPass(h);const u=new ty;this.composer.addPass(u),this.clock=new xl,window.addEventListener("resize",this.onWindowResize.bind(this))}static onWindowResize(){this.updateCameraProjection(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}static render(){this.composer.render()}}const hs=0,Ph=1,us=2,Dh=.5,My=0;var X=(r=>(r[r.ROAD_STRAIGHT_NS=0]="ROAD_STRAIGHT_NS",r[r.ROAD_STRAIGHT_EW=1]="ROAD_STRAIGHT_EW",r[r.ROAD_INTERSECTION=2]="ROAD_INTERSECTION",r[r.SIDEWALK=3]="SIDEWALK",r[r.PLAZA_STONE=4]="PLAZA_STONE",r[r.GRASS=5]="GRASS",r[r.WATER=6]="WATER",r))(X||{}),te=(r=>(r[r.NONE=0]="NONE",r[r.ROAD=1]="ROAD",r[r.SIDEWALK=2]="SIDEWALK",r[r.COURTYARD=3]="COURTYARD",r))(te||{});class be{static TILE_SIZE=16;static MAP_BOUNDS=1024;static GRID_DIM=be.MAP_BOUNDS/be.TILE_SIZE;static AVENUE_INTERVAL=14;static STREET_INTERVAL=7;static cells=[];static buildingLots=new Map;static roadWaypoints=[];static init(){this.cells=[],this.buildingLots.clear(),this.roadWaypoints=[];const e=this.MAP_BOUNDS/us;for(let t=hs;t<this.GRID_DIM;t++){this.cells[t]=[];for(let n=hs;n<this.GRID_DIM;n++){const i=-e+(t+Dh)*this.TILE_SIZE,s=-e+(n+Dh)*this.TILE_SIZE;this.cells[t][n]={gridX:t,gridZ:n,worldX:i,worldZ:s,elevation:My,terrainType:5,overlayType:0}}}}static setTerrain(e,t,n){const i=this.getCell(e,t);i&&(i.terrainType=n)}static setRoad(e,t,n){const i=this.getCell(e,t);i&&(i.terrainType=n==="NS"?0:1,i.overlayType=1)}static setIntersection(e,t){const n=this.getCell(e,t);n&&(n.terrainType=2,n.overlayType=1)}static setSidewalkIfNotRoad(e,t){const n=this.getCell(e,t);n&&n.overlayType!==1&&(n.terrainType=3,n.overlayType=2)}static worldToGrid(e,t){const n=this.MAP_BOUNDS/us,i=Math.floor((e+n)/this.TILE_SIZE),s=Math.floor((t+n)/this.TILE_SIZE);return{gx:Math.max(hs,Math.min(this.GRID_DIM-Ph,i)),gz:Math.max(hs,Math.min(this.GRID_DIM-Ph,s))}}static getCell(e,t){return e<hs||e>=this.GRID_DIM||t<hs||t>=this.GRID_DIM?null:this.cells[e][t]}static registerLot(e){this.buildingLots.set(e.entityId,e);const t=this.worldToGrid(e.centerWorldX-e.footprintWidth/us,e.centerWorldZ-e.footprintLength/us),n=this.worldToGrid(e.centerWorldX+e.footprintWidth/us,e.centerWorldZ+e.footprintLength/us);for(let i=t.gx;i<=n.gx;i++)for(let s=t.gz;s<=n.gz;s++){const o=this.getCell(i,s);o&&o.overlayType!==1&&(o.occupiedByBuildingId=e.entityId)}}static getAllCells(){return this.cells}static getLots(){return this.buildingLots}}const Sy=0,Ty=4,Nh=-Math.PI/2,Uh=.9,Oh=.05;class Fh{static layer0Group;static init(){this.layer0Group=new yt,this.layer0Group.name="Layer0_ConnectedRoadNetwork",Le.groundGroup.add(this.layer0Group)}static buildMapMesh(){const e=be.getAllCells(),t=2048,n=t/be.GRID_DIM,i=document.createElement("canvas");i.width=t,i.height=t;const s=i.getContext("2d");for(let g=0;g<be.GRID_DIM;g++)for(let _=0;_<be.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n;m.terrainType===X.WATER?s.fillStyle="#0d3d7a":s.fillStyle="#2d6a2d",s.fillRect(f,x,n,n)}for(let g=0;g<be.GRID_DIM;g++)for(let _=0;_<be.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n,v=m.terrainType;(v===X.ROAD_STRAIGHT_NS||v===X.ROAD_STRAIGHT_EW||v===X.ROAD_INTERSECTION)&&(s.fillStyle="#1c1f24",s.fillRect(f,x,n,n),v===X.ROAD_STRAIGHT_NS?(s.fillStyle="#d0d7e0",s.fillRect(f+1,x,1,n),s.fillRect(f+n-2,x,1,n),s.fillStyle="#f5b800",s.fillRect(f+n/2-1,x,2,n),s.fillStyle="#ffffff",s.fillRect(f+n*.25,x+4,1,8),s.fillRect(f+n*.25,x+20,1,8),s.fillRect(f+n*.75,x+4,1,8),s.fillRect(f+n*.75,x+20,1,8)):v===X.ROAD_STRAIGHT_EW?(s.fillStyle="#d0d7e0",s.fillRect(f,x+1,n,1),s.fillRect(f,x+n-2,n,1),s.fillStyle="#f5b800",s.fillRect(f,x+n/2-1,n,2),s.fillStyle="#ffffff",s.fillRect(f+4,x+n*.25,8,1),s.fillRect(f+20,x+n*.25,8,1),s.fillRect(f+4,x+n*.75,8,1),s.fillRect(f+20,x+n*.75,8,1)):v===X.ROAD_INTERSECTION&&(s.fillStyle="#ffffff",s.fillRect(f+4,x+2,n-8,3),s.fillRect(f+4,x+n-5,n-8,3),s.fillRect(f+2,x+4,3,n-8),s.fillRect(f+n-5,x+4,3,n-8),s.fillStyle="#6a7280",s.fillRect(f,x,2,2),s.fillRect(f+n-2,x,2,2),s.fillRect(f,x+n-2,2,2),s.fillRect(f+n-2,x+n-2,2,2)))}for(let g=0;g<be.GRID_DIM;g++)for(let _=0;_<be.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n;m.terrainType===X.SIDEWALK?(s.fillStyle="#5a6473",s.fillRect(f,x,n,n),s.strokeStyle="#424c58",s.lineWidth=1,s.strokeRect(f+.5,x+.5,n-1,n-1)):m.terrainType===X.PLAZA_STONE&&(s.fillStyle="#9e8e78",s.fillRect(f,x,n,n),s.strokeStyle="#6e6050",s.lineWidth=1,s.strokeRect(f+.5,x+.5,n-1,n-1))}const o=new Lo(i);o.wrapS=xn,o.wrapT=xn,o.minFilter=Nt,o.magFilter=Nt,o.anisotropy=Ty,o.needsUpdate=!0;const a=new vn(be.MAP_BOUNDS,be.MAP_BOUNDS),l=new Rt({map:o,roughness:Uh,metalness:Oh,depthWrite:!1}),c=new Ae(a,l);c.rotation.x=Nh,c.position.set(0,Sy,0),c.receiveShadow=!0,c.renderOrder=0;const h=3500,u=new vn(h,h),d=new Rt({color:2976301,roughness:Uh,metalness:Oh,depthWrite:!1}),p=new Ae(u,d);for(p.rotation.x=Nh,p.position.set(0,-.2,0),p.receiveShadow=!0,p.renderOrder=-10;this.layer0Group.children.length>0;){const g=this.layer0Group.children[0];this.layer0Group.remove(g),g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material.forEach(_=>{_.map&&_.map.dispose(),_.dispose()}):(g.material.map&&g.material.map.dispose(),g.material.dispose()))}this.layer0Group.add(p),this.layer0Group.add(c)}}function Bh(r,e){if(e===Tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===fl||e===ld){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===fl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ey extends Gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cy(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Vy(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=dr.extractUrlBase(e);o=dr.resolveURL(c,this.path)}else o=dr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ld(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zd){try{o[Xe.KHR_BINARY_GLTF]=new Wy(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:o[u]=new wy;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Xy(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[u]=new Yy;break;case Xe.KHR_MESH_QUANTIZATION:o[u]=new Ky;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function by(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ay{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],en);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new _l(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pd(h),c.distance=u;break;case"spot":c=new Yp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class wy{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return ut}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class Ry{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Cy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Ly{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Ny{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],en),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Oy{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}}class Fy{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class By{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class zy{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ky{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Hy{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Gy{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class Vy{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new Oe,m=new L,f=new Dn,x=new L(1,1,1),v=new vr(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,_.compose(m,f,x));for(const y in l)if(y==="_COLOR_0"){const w=l[y];v.instanceColor=new yr(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const zd="glTF",ir=12,zh={JSON:1313821514,BIN:5130562};class Wy{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ir,s=new DataView(e,ir);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zh.JSON){const c=new Uint8Array(e,ir+o,a);this.content=n.decode(c)}else if(l===zh.BIN){const c=ir+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ml[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ml[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=bs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,en,d)})})}}class Yy{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ky{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class kd extends wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,x=1-m,v=f-d+u;for(let y=0;y!==a;y++){const w=o[_+y+a],b=o[_+y+l]*h,A=o[g+y+a],C=o[g+y]*h;s[y]=x*w+v*b+m*A+f*C}return s}}const qy=new Dn;class Zy extends kd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return qy.fromArray(s).normalize().toArray(s),s}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kh={9728:kt,9729:Nt,9984:$u,9985:_o,9986:ar,9987:Cn},Hh={33071:xn,33648:bo,10497:Is},Sa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jy={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $y(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Rt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),r.DefaultMaterial}function Fi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qy(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Jy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ev(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ea(t.attributes):e=r.indices+":"+Ea(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ea(r.targets[n]);return e}function Ea(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Sl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const nv=new Oe;class iv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new by,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Hl(this.options.manager):this.textureLoader=new Zp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ld(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fi(s,a,i),Qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(dr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Sa[i.type],a=bs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ht(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Sa[i.type],c=bs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(x);v||(_=new c(a,f*p,i.count*p/h),v=new vd(_,p/h),t.cache.add(x,v)),m=new xr(v,l,d%p/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new Ht(_,l,g);if(i.sparse!==void 0){const f=Sa.SCALAR,x=bs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new x(o[1],v,i.sparse.count*f),b=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=w.length;A<C;A++){const T=w[A];if(m.setX(T,b[A*l]),l>=2&&m.setY(T,b[A*l+1]),l>=3&&m.setZ(T,b[A*l+2]),l>=4&&m.setW(T,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=kh[d.magFilter]||Nt,h.minFilter=kh[d.minFilter]||Cn,h.wrapS=Hh[d.wrapS]||Is,h.wrapT=Hh[d.wrapT]||Is,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ct(_);m.needsUpdate=!0,d(m)}),t.load(dr.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Qn(u,o),u.userData.mimeType=o.mimeType||tv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ad,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Mr,Nn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=zt);const h=s.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ta.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ut&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _e(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ut&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ut){const u=s.emissiveFactor;a.emissive=new ye().setRGB(u[0],u[1],u[2],en)}return s.emissiveTexture!==void 0&&o!==ut&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Qn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Fi(i,u,s),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=ev(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Gh(new Pt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?$y(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const x=c[p];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Ep(_,x):new Ae(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?f.geometry=Bh(f.geometry,ld):m.mode===pn.TRIANGLE_FAN&&(f.geometry=Bh(f.geometry,fl));else if(m.mode===pn.LINES)f=new bd(_,x);else if(m.mode===pn.LINE_STRIP)f=new Sr(_,x);else if(m.mode===pn.LINE_LOOP)f=new Cp(_,x);else if(m.mode===pn.POINTS)f=new Ip(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Jy(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Qn(f,s),m.extensions&&Fi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Fi(i,u[0],s),u[0];const d=new yt;s.extensions&&Fi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new nn(jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Rr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Oe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ol(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let x=0,v=d.length;x<v;x++){const y=d[x],w=p[x],b=g[x],A=_[x],C=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,w,b,A,C);if(T)for(let M=0;M<T.length;M++)f.push(T[M])}return new gl(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,nv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Td:c.length>1?h=new yt:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Qn(h,s),s.extensions&&Fi(n,h,s),s.matrix!==void 0){const u=new Oe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new yt;n.name&&(s.name=i.createUniqueName(n.name)),Qn(s,n),n.extensions&&Fi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Nn||d instanceof Ct)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];_i[s.path]===_i.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(_i[s.path]){case _i.weights:c=Os;break;case _i.rotation:c=Fs;break;case _i.position:case _i.scale:c=Bs;break;default:switch(n.itemSize){case 1:c=Os;break;case 2:case 3:default:c=Bs;break}break}const h=i.interpolation!==void 0?jy[i.interpolation]:mr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+_i[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Sl(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fs?Zy:kd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sv(r,e,t){const n=e.attributes,i=new On;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Sl(bs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Sl(bs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Gh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Ml[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ye.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Qn(r,e),sv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Qy(r,e.targets,t):r})}class Jt{static loader=new Hl;static gltfLoader=new Ey;static textures=new Map;static gltfModels=new Map;static mapData=null;static spriteOffsets={};static getAssetUrl(e){if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e.slice(1):e;let n="./";if(typeof document<"u"&&document.baseURI)try{const s=new URL(document.baseURI).pathname;s&&s!=="/"&&(n=s)}catch{}return`${n.endsWith("/")?n:`${n}/`}${t}`}static async loadAll(){const e=[];e.push(this.loadGLTF("skyscraper_demolition","/3d/skyscrapper1/skyscraper_demolition.glb").catch(n=>{console.warn("[AssetLoader] GLTF load notice:",n)})),e.push(this.loadGLTF("spaceship_hq","/3d/spaceship_hq/spaceship_hq.glb").catch(n=>{console.warn("[AssetLoader] spaceship_hq 3D load notice:",n)})),e.push(this.loadGLTF("cyber_reactor","/3d/cyber_reactor/cyber_reactor.glb").catch(n=>{console.warn("[AssetLoader] cyber_reactor 3D load notice:",n)})),e.push(this.loadGLTF("financial_tower","/3d/financial_tower/financial_tower.glb").catch(n=>{console.warn("[AssetLoader] financial_tower 3D load notice:",n)})),e.push(fetch(this.getAssetUrl("/map_data.json")).then(n=>n.json()).then(n=>{this.mapData=n}).catch(n=>console.error("Failed to load map data:",n))),e.push(fetch(this.getAssetUrl("/sprite_offsets.json")).then(n=>n.json()).then(n=>{this.spriteOffsets=n}).catch(n=>console.error("Failed to load sprite offsets:",n))),e.push(this.loadTexture("ground","/city_background_topdown_red.png",!1));const t=(n,i=!1)=>n===0?"00_pristine.png":i&&n===14?"14_rubble.png":`${n<10?"0":""}${n}_damaged_${n}.png`;e.push(this.loadTexture("building_1_stage_0",`/buildingv2/hospital/png/${t(0,!0)}`)),e.push(this.loadTexture("building_2_stage_0",`/buildingv2/mall/png/${t(0,!0)}`)),e.push(this.loadTexture("building_3_stage_0",`/buildingv2/school/png/${t(0,!0)}`)),e.push(this.loadTexture("building_4_stage_0",`/buildingv2/warehouse/png/${t(0,!1)}`)),e.push(this.loadTexture("building_5_stage_0",`/buildingv2/skyscraper/png/${t(0,!0)}`)),e.push(this.loadTexture("building_b1_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b2_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b3_stage_0","/buildingv2/tower_midrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b4_stage_0","/buildingv2/skyscraper_highrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_res_bronze_stage_0","/buildingv2/residential_bronze_penthouses/png/00_pristine.png")),e.push(this.loadTexture("building_res_sky_stage_0","/buildingv2/residential_sky_gardens/png/00_pristine.png")),e.push(this.loadTexture("building_sky_cyber_stage_0","/buildingv2/skyscraper_cyber_spire/png/00_pristine.png")),e.push(this.loadTexture("building_sky_artdeco_stage_0","/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png")),e.push(this.loadTexture("building_sky_biotech_stage_0","/buildingv2/skyscraper_biotech_helix/png/00_pristine.png")),e.push(this.loadTexture("building_hospital_civic_stage_0","/buildingv2/hospital_civic/png/state_000_pristine.png")),e.push(this.loadTexture("building_mall_shopping_stage_0","/buildingv2/mall_shopping/png/state_000_pristine.png")),e.push(this.loadTexture("building_school_civic_stage_0","/buildingv2/school_civic/png/state_000_pristine.png")),e.push(this.loadTexture("building_spaceship_hq_stage_0","/buildingv2/spaceship_hq/png/state_000_pristine.png")),e.push(this.loadTexture("building_statue_liberty_stage_0","/buildingv2/statue_liberty/png/state_000_pristine.png")),e.push(this.loadTexture("building_pentagon_defense_stage_0","/buildingv2/pentagon_defense/png/state_000_pristine.png")),e.push(this.loadTexture("building_mega_stadium_stage_0",`/buildingv2/mall/png/${t(0,!0)}`)),setTimeout(()=>{for(let d=1;d<15;d++)this.loadTexture(`building_1_stage_${d}`,`/buildingv2/hospital/png/${t(d,!0)}`),this.loadTexture(`building_2_stage_${d}`,`/buildingv2/mall/png/${t(d,!0)}`),this.loadTexture(`building_3_stage_${d}`,`/buildingv2/school/png/${t(d,!0)}`),this.loadTexture(`building_4_stage_${d}`,`/buildingv2/warehouse/png/${t(d,!1)}`),this.loadTexture(`building_5_stage_${d}`,`/buildingv2/skyscraper/png/${t(d,!0)}`),this.loadTexture(`building_mega_stadium_stage_${d}`,`/buildingv2/mall/png/${t(d,!0)}`);["state_033_shattered_front.png","state_066_facade_breached.png","state_100_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_b1_stage_${p+1}`,`/buildingv2/shop_lowrise/png/${d}`),this.loadTexture(`building_b2_stage_${p+1}`,`/buildingv2/shop_lowrise/png/${d}`)}),["state_033_roof_hvac_destroyed.png","state_066_mid_floors_gutted.png","state_100_collapsed_ruins.png"].forEach((d,p)=>{this.loadTexture(`building_b3_stage_${p+1}`,`/buildingv2/tower_midrise/png/${d}`),this.loadTexture(`building_res_bronze_stage_${p+1}`,`/buildingv2/tower_midrise/png/${d}`)}),["state_066_midsection_crater.png","state_100_skeleton_ruin.png"].forEach((d,p)=>{this.loadTexture(`building_b4_stage_${p+1}`,`/buildingv2/skyscraper_highrise/png/${d}`),this.loadTexture(`building_res_sky_stage_${p+1}`,`/buildingv2/skyscraper_highrise/png/${d}`)}),["state_033_needle_antenna_snap.png","state_066_laser_conduit_overload.png","state_100_core_meltdown_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_sky_cyber_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_artdeco_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_biotech_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`)}),["state_033_ambulance_bay_blasted.png","state_033_helipad_destroyed.png","state_066_er_block_gutted.png","state_100_hospital_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_hospital_civic_stage_${p+1}`,`/buildingv2/hospital_civic/png/${d}`)}),["state_033_atrium_glass_caved.png","state_033_parking_plaza_crater.png","state_066_retail_wings_gutted.png","state_100_mall_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_mall_shopping_stage_${p+1}`,`/buildingv2/mall_shopping/png/${d}`)}),["state_033_east_wing_breached.png","state_033_west_wing_breached.png","state_066_courtyard_crater.png","state_100_campus_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_school_civic_stage_${p+1}`,`/buildingv2/school_civic/png/${d}`)}),["state_033_helipad_tarmac_crater.png","state_033_outer_ring_breach.png","state_066_fortress_core_gutted.png","state_100_bunker_ruins.png"].forEach((d,p)=>{this.loadTexture(`building_pentagon_defense_stage_${p+1}`,`/buildingv2/pentagon_defense/png/${d}`)}),["state_050_head_torch_snapped.png","state_100_pedestal_shattered.png"].forEach((d,p)=>{this.loadTexture(`building_statue_liberty_stage_${p+1}`,`/buildingv2/statue_liberty/png/${d}`)})},50),setTimeout(()=>{for(let n=0;n<11;n++)this.loadTexture(`fx_blast_${n}`,`/blast/frame_${n}.png`);for(let n=0;n<7;n++)this.loadTexture(`fx_blast360_${n}`,`/blast360/frame_${n}.png`);for(let n=0;n<10;n++)this.loadTexture(`fx_fire_${n}`,`/fire/frame_${n}.png`);this.loadTexture("fx_crater","/crater.png",!1)},80),await Promise.all(e)}static async loadTexture(e,t,n=!0){const i=this.getAssetUrl(t);return new Promise(s=>{if(this.textures.has(e)){s(this.textures.get(e));return}this.loader.load(i,o=>{n?(o.minFilter=kt,o.magFilter=kt,o.generateMipmaps=!1):(o.minFilter=Cn,o.magFilter=Nt),o.wrapS=xn,o.wrapT=xn,this.textures.set(e,o),s(o)},void 0,o=>{console.warn(`[AssetLoader] Texture '${e}' at ${t} failed to load. Proceeding with fallback.`),s(null)})})}static getTexture(e){if(this.textures.has(e))return this.textures.get(e);const t=e.match(/^(building_[a-zA-Z0-9_]+_stage_)(\d+)$/);if(t){const n=parseInt(t[2],10),i=t[1];for(let s=n;s>=0;s--){const o=`${i}${s}`;if(this.textures.has(o))return this.textures.get(o)}if(this.textures.has(`${i}0`))return this.textures.get(`${i}0`)}return null}static getSpriteOffset(e,t){const n=this.spriteOffsets[`building_${e}`];if(!n)return null;for(let i=t;i>=0;i--){const s=n[i]||n[i.toString()];if(s)return s}return n[0]||null}static async loadGLTF(e,t){const n=this.getAssetUrl(t);return new Promise(i=>{if(this.gltfModels.has(e)){i(this.gltfModels.get(e));return}this.gltfLoader.load(n,s=>{console.log(`[AssetLoader] Successfully loaded 3D GLTF asset [${e}] from ${t}`,s),this.gltfModels.set(e,s),i(s)},void 0,s=>{console.error(`[AssetLoader] ERROR loading 3D GLTF asset [${e}] from ${t}:`,s),i(null)})})}static getGLTF(e){return this.gltfModels.get(e)||null}}const jn=0,rv=.02,ov=.01,av=.005,co=128,Xt=64,lv=5,Vh=60,cv=10,Wh=55,Xh=12,hv=30,uv=25,dv=15,fv=-Math.PI/2,Yh=.95,Kh=.05,ds=80;class ci{static decalGroup;static decalTextures=new Map;static unitGeometry;static scorchMaterial;static craterMaterial;static scorchMesh;static craterMesh;static scorchIndex=jn;static scorchCount=jn;static craterIndex=jn;static craterCount=jn;static dummy=new dt;static init(){this.decalGroup=new yt,this.decalGroup.name="DecalLayer_L2",this.decalGroup.position.y=rv,Le.groundGroup.add(this.decalGroup),this.createDecalTextures(),this.unitGeometry=new vn(1,1);const e=this.decalTextures.get("scorch"),t=Jt.getTexture("fx_crater"),n=t||this.decalTextures.get("crater");this.scorchMaterial=new Rt({map:e,transparent:!0,depthWrite:!1,roughness:Yh,metalness:Kh}),this.craterMaterial=new Rt({map:n,transparent:!0,depthWrite:!1,roughness:Yh,metalness:Kh}),t||new Hl().load(Jt.getAssetUrl("/crater.png"),i=>{i.minFilter=Cn,i.magFilter=Nt,this.craterMaterial.map=i,this.craterMaterial.needsUpdate=!0}),this.scorchMesh=new vr(this.unitGeometry,this.scorchMaterial,ds),this.scorchMesh.count=jn,this.scorchMesh.receiveShadow=!0,this.scorchMesh.renderOrder=10,this.craterMesh=new vr(this.unitGeometry,this.craterMaterial,ds),this.craterMesh.count=jn,this.craterMesh.receiveShadow=!0,this.craterMesh.renderOrder=10,this.decalGroup.add(this.scorchMesh),this.decalGroup.add(this.craterMesh)}static createDecalTextures(){const e=()=>{const n=document.createElement("canvas");n.width=co,n.height=co;const i=n.getContext("2d"),s=i.createRadialGradient(Xt,Xt,lv,Xt,Xt,Vh);s.addColorStop(0,"rgba(10, 10, 10, 0.9)"),s.addColorStop(.4,"rgba(40, 25, 20, 0.7)"),s.addColorStop(.7,"rgba(80, 50, 30, 0.3)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Xt,Xt,Vh,jn,Math.PI*2),i.fill(),i.strokeStyle="rgba(15, 10, 8, 0.6)",i.lineWidth=2;for(let a=jn;a<Xh;a++){const l=a/Xh*Math.PI*2+(Math.random()-.5)*.2,c=hv+Math.random()*uv;i.beginPath(),i.moveTo(Xt,Xt),i.lineTo(Xt+Math.cos(l)*c,Xt+Math.sin(l)*c),i.stroke()}const o=new Lo(n);return o.needsUpdate=!0,o},t=()=>{const n=document.createElement("canvas");n.width=co,n.height=co;const i=n.getContext("2d"),s=i.createRadialGradient(Xt,Xt,cv,Xt,Xt,Wh);s.addColorStop(0,"rgba(5, 5, 5, 0.95)"),s.addColorStop(.3,"rgba(30, 20, 15, 0.85)"),s.addColorStop(.6,"rgba(70, 50, 35, 0.5)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Xt,Xt,Wh,jn,Math.PI*2),i.fill();const o=new Lo(n);return o.needsUpdate=!0,o};this.decalTextures.set("scorch",e()),this.decalTextures.set("crater",t())}static spawnDecal(e,t,n,i=dv){const s=n==="crater",o=s?this.craterMesh:this.scorchMesh,a=s?this.craterIndex:this.scorchIndex;this.dummy.position.set(e,ov+Math.random()*av,t),this.dummy.rotation.set(fv,0,Math.random()*Math.PI*2),this.dummy.scale.set(i,i,1),this.dummy.updateMatrix(),o.setMatrixAt(a,this.dummy.matrix),o.instanceMatrix.needsUpdate=!0,s?(this.craterIndex=(this.craterIndex+1)%ds,this.craterCount<ds&&(this.craterCount++,this.craterMesh.count=this.craterCount)):(this.scorchIndex=(this.scorchIndex+1)%ds,this.scorchCount<ds&&(this.scorchCount++,this.scorchMesh.count=this.scorchCount))}}class Po{static init(){be.init(),ci.init(),Fh.init()}static finalizeMap(){Fh.buildMapMesh()}}class pv{particles=[];debris=[];freeParticleIndices=[];freeDebrisIndices=[];constructor(e=1e3,t=600){for(let n=0;n<e;n++)this.particles.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:0,active:!1,type:"spark"}),this.freeParticleIndices.push(n);for(let n=0;n<t;n++)this.debris.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:35,active:!1,size:.5,rx:0,ry:0,bounces:0,color:8930338}),this.freeDebrisIndices.push(n)}tick(e){for(let t=0;t<this.particles.length;t++){const n=this.particles[t];n.active&&(n.type==="smoke"?(n.vy+=1.5*e,n.vx*=1-.5*e,n.vz*=1-.5*e):n.type==="fire_ember"&&(n.vy+=2.4*e,n.vx+=Math.sin(n.life*12)*.8*e,n.vz+=Math.cos(n.life*12)*.8*e),n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.life+=e,n.life>=n.maxLife&&(n.active=!1,this.freeParticleIndices.push(t)))}for(let t=0;t<this.debris.length;t++){const n=this.debris[t];n.active&&(n.vy-=n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.rx+=n.vy*e*.1,n.ry+=n.vx*e*.1,n.y<0&&(n.y=0,n.vy*=-.35,n.vx*=.7,n.vz*=.7,n.bounces++,n.bounces>=5&&(n.active=!1,this.freeDebrisIndices.push(t))))}}spawnParticle(e,t,n,i,s,o,a,l="spark"){const c=this.freeParticleIndices.pop();if(c!==void 0){const h=this.particles[c];h.x=e,h.y=t,h.z=n,h.vx=i,h.vy=s,h.vz=o,h.life=0,h.maxLife=a,h.type=l,h.active=!0}}spawnDebris(e,t,n,i,s,o,a=.5,l=8930338){const c=this.freeDebrisIndices.pop();if(c!==void 0){const h=this.debris[c];h.x=e,h.y=t,h.z=n,h.vx=i,h.vy=s,h.vz=o,h.size=a,h.rx=0,h.ry=0,h.bounces=0,h.color=l,h.active=!0}}}const Qt=new pv,sr=0,ho=3,mv=.2,gv=8,_v=8,qh=16777215,ba=1,xv=.5,yv=2,vv=.7,Zh=.05,Aa=1,jh={spark:new ye(16768324),dust:new ye(11176038),smoke:new ye(4473924),brick:new ye(8930338),fire_ember:new ye(16737809)};class $h{static particleMesh;static debrisMesh;static dummy=new dt;static tempColor=new ye;static emberHotColor=new ye(16763955);static emberCoolColor=new ye(13378048);static init(){const e=new Ar(mv,gv,_v),t=new ut({color:qh});this.particleMesh=new vr(e,t,Qt.particles.length),this.particleMesh.instanceMatrix.setUsage(Lr),this.particleMesh.instanceColor=new yr(new Float32Array(Qt.particles.length*ho),ho),this.particleMesh.instanceColor.setUsage(Lr),Le.effectsGroup.add(this.particleMesh);const n=new Ft(ba,ba,ba),i=new Rt({color:qh});this.debrisMesh=new vr(n,i,Qt.debris.length),this.debrisMesh.instanceMatrix.setUsage(Lr),this.debrisMesh.instanceColor=new yr(new Float32Array(Qt.debris.length*ho),ho),this.debrisMesh.instanceColor.setUsage(Lr),this.debrisMesh.castShadow=!0,Le.effectsGroup.add(this.debrisMesh)}static tick(e){if(!this.particleMesh||!this.debrisMesh)return;let t=sr;for(let i=sr;i<Qt.particles.length;i++){const s=Qt.particles[i];if(s.active){this.dummy.position.set(s.x,s.y,s.z);const o=s.life/s.maxLife;if(s.type==="smoke"){const a=xv+o*yv;this.dummy.scale.set(a,a,a)}else if(s.type==="fire_ember"){const a=Math.max(Zh,.45*(Aa-o*.5));this.dummy.scale.set(a,a,a)}else{const a=Math.max(Zh,Aa-o);this.dummy.scale.set(a,a,a)}if(this.dummy.updateMatrix(),this.particleMesh.setMatrixAt(t,this.dummy.matrix),s.type==="fire_ember"?this.tempColor.copy(this.emberHotColor).lerp(this.emberCoolColor,o):this.tempColor.copy(jh[s.type]||jh.spark),s.type==="smoke"){const a=Aa-o*vv;this.tempColor.multiplyScalar(a)}this.particleMesh.setColorAt(t,this.tempColor),t++}}this.particleMesh.count=t,this.particleMesh.instanceMatrix.needsUpdate=!0,this.particleMesh.instanceColor&&(this.particleMesh.instanceColor.needsUpdate=!0);let n=sr;for(let i=sr;i<Qt.debris.length;i++){const s=Qt.debris[i];s.active&&(this.dummy.position.set(s.x,s.y,s.z),this.dummy.scale.set(s.size,s.size,s.size),this.dummy.rotation.set(s.rx,s.ry,sr),this.dummy.updateMatrix(),this.debrisMesh.setMatrixAt(n,this.dummy.matrix),this.tempColor.setHex(s.color),this.debrisMesh.setColorAt(n,this.tempColor),n++)}this.debrisMesh.count=n,this.debrisMesh.instanceMatrix.needsUpdate=!0,this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0)}}class ct{static nextEntityId=1;static entities=new Set;static systems=[];static createEntity(){const e=this.nextEntityId++;return this.entities.add(e),e}static destroyEntity(e){this.entities.delete(e)}static addSystem(e){this.systems.push(e)}static tick(e){for(const t of this.systems)t(e)}}const et={1:{width:48,length:48,height:45,name:"Hospital",visualScale:.75,footprintTiles:3,heightScale:.75,tier:"foreground",maxHp:260},2:{width:48,length:48,height:40,name:"Mall",visualScale:.75,footprintTiles:3,heightScale:.75,tier:"foreground",maxHp:250},3:{width:48,length:48,height:40,name:"School",visualScale:.75,footprintTiles:3,heightScale:.75,tier:"foreground",maxHp:250},4:{width:48,length:48,height:40,name:"Warehouse",visualScale:.75,footprintTiles:3,heightScale:.75,tier:"foreground",maxHp:240},b1:{width:16,length:16,height:30,name:"Low-rise Shop",visualScale:.7,footprintTiles:1,heightScale:.7,tier:"foreground",maxHp:60},b2:{width:16,length:16,height:35,name:"Brownstone",visualScale:.75,footprintTiles:1,heightScale:.75,tier:"foreground",maxHp:75},b3:{width:16,length:16,height:65,name:"Mid-rise Apartments",visualScale:.85,footprintTiles:1,heightScale:.85,tier:"midground",maxHp:110},b4:{width:16,length:16,height:70,name:"Mid-rise Office",visualScale:.9,footprintTiles:1,heightScale:.9,tier:"midground",maxHp:125},res_bronze:{width:16,length:16,height:75,name:"Bronze Penthouses",visualScale:.9,footprintTiles:1,heightScale:.9,tier:"midground",maxHp:140},res_sky:{width:16,length:16,height:80,name:"Sky Gardens",visualScale:.95,footprintTiles:1,heightScale:.95,tier:"midground",maxHp:150},5:{width:28,length:28,height:110,name:"Skyscraper",visualScale:.85,footprintTiles:2,heightScale:1,tier:"background",maxHp:200},sky_artdeco:{width:28,length:28,height:120,name:"Art Deco Titan",visualScale:.85,footprintTiles:2,heightScale:1,tier:"background",maxHp:220},sky_biotech:{width:28,length:28,height:125,name:"Biotech Helix",visualScale:.85,footprintTiles:2,heightScale:1,tier:"background",maxHp:230},sky_cyber:{width:28,length:28,height:135,name:"Cyber Spire",visualScale:.85,footprintTiles:2,heightScale:1,tier:"background",maxHp:250},mega_titan:{width:64,length:64,height:180,name:"Apex Mega-Tower",visualScale:1,footprintTiles:4,heightScale:1,tier:"background",is3D:!0,gltfKey:"skyscraper_demolition",maxHp:500},mega_stadium:{width:64,length:48,height:55,name:"Metropolitan Arena",visualScale:.85,footprintTiles:4,heightScale:.85,tier:"foreground",maxHp:360},spaceship_hq:{width:64,length:64,height:160,name:"Alien Spaceship HQ",visualScale:1,footprintTiles:4,heightScale:1,tier:"background",is3D:!0,gltfKey:"spaceship_hq",maxHp:480},cyber_reactor:{width:48,length:48,height:140,name:"Cyber Quantum Reactor",visualScale:1,footprintTiles:3,heightScale:1,tier:"background",is3D:!0,gltfKey:"cyber_reactor",maxHp:350},financial_tower:{width:48,length:48,height:160,name:"Metro Financial Tower",visualScale:1,footprintTiles:3,heightScale:1,tier:"background",is3D:!0,gltfKey:"financial_tower",maxHp:380},statue_liberty:{width:48,length:48,height:135,name:"Statue of Liberty",visualScale:.85,footprintTiles:3,heightScale:.85,tier:"foreground",maxHp:320},pentagon_defense:{width:64,length:64,height:45,name:"Defense Bunker",visualScale:.85,footprintTiles:4,heightScale:.85,tier:"foreground",maxHp:350},hospital_civic:{width:48,length:48,height:50,name:"Civic Hospital",visualScale:.8,footprintTiles:3,heightScale:.8,tier:"foreground",maxHp:275},mall_shopping:{width:48,length:48,height:45,name:"Shopping Plaza",visualScale:.8,footprintTiles:3,heightScale:.8,tier:"foreground",maxHp:260},school_civic:{width:48,length:48,height:45,name:"Civic Academy",visualScale:.8,footprintTiles:3,heightScale:.8,tier:"foreground",maxHp:260}};function ql(r){if(r.maxHp!==void 0&&r.maxHp>0)return r.maxHp;const e=r.footprintTiles??Math.max(1,Math.round(Math.max(r.width,r.length)/16)),t=r.height??40;let n=35,i=1;e===1?(n=25,i=1.2):e===2?(n=90,i=1):e===3?(n=160,i=1.2):(n=240,i=1.4);const s=n+t*i;return Math.max(25,Math.round(s/5)*5)}var Rn=(r=>(r.TOP_LEFT="TOP_LEFT",r.TOP_CENTER="TOP_CENTER",r.TOP_RIGHT="TOP_RIGHT",r.MID_LEFT="MID_LEFT",r.CENTER="CENTER",r.MID_RIGHT="MID_RIGHT",r.BASE_LEFT="BASE_LEFT",r.BASE_CENTER="BASE_CENTER",r.BASE_RIGHT="BASE_RIGHT",r))(Rn||{});const xt=()=>[{id:"TOP_LEFT",u0:0,v0:0,u1:.33,v1:.33,hpWeight:1,structureWeight:.05},{id:"TOP_CENTER",u0:.33,v0:0,u1:.66,v1:.33,hpWeight:1.5,structureWeight:.15},{id:"TOP_RIGHT",u0:.66,v0:0,u1:1,v1:.33,hpWeight:1,structureWeight:.05},{id:"MID_LEFT",u0:0,v0:.33,u1:.33,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"CENTER",u0:.33,v0:.33,u1:.66,v1:.66,hpWeight:2,structureWeight:.3},{id:"MID_RIGHT",u0:.66,v0:.33,u1:1,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"BASE_LEFT",u0:0,v0:.66,u1:.33,v1:1,hpWeight:1.5,structureWeight:.05},{id:"BASE_CENTER",u0:.33,v0:.66,u1:.66,v1:1,hpWeight:2.5,structureWeight:.15},{id:"BASE_RIGHT",u0:.66,v0:.66,u1:1,v1:1,hpWeight:1.5,structureWeight:.05}],oi={1:xt(),2:xt(),3:xt(),4:xt(),5:xt(),b1:xt(),b2:xt(),b3:xt(),b4:xt(),res_bronze:xt(),res_sky:xt(),sky_artdeco:xt(),sky_biotech:xt(),sky_cyber:xt(),mega_titan:xt(),mega_stadium:xt(),spaceship_hq:xt(),cyber_reactor:xt(),financial_tower:xt(),statue_liberty:xt(),pentagon_defense:xt(),hospital_civic:xt(),mall_shopping:xt(),school_civic:xt()},vt=new Map,bt=new Map,Bt=new Map,Do=new Map,Mv=new Map,As=new Map,Un=new Set,Kt=new Map,Sv=2,Qh=.5,uo=1,Tv="3",Ev=1,Jh=6,eu=1,tu=4;class ni{static computeLotWorldPos(e,t,n=uo,i=uo){const s=be.MAP_BOUNDS/Sv,o=-s+(e+n*Qh)*be.TILE_SIZE,a=-s+(t+i*Qh)*be.TILE_SIZE;return{x:o,z:a}}static computeGridCellWorldPos(e,t){return this.computeLotWorldPos(e,t,uo,uo)}static computeInnerBlockWorldPos(e,t,n,i){const s=e*Jh,o=t*Jh,a=eu+n*tu,l=eu+i*tu,c=s+a,h=o+l;return this.computeGridCellWorldPos(c,h)}static calculateAndRegisterLot(e,t,n,i,s){const o=et[i]||et[Tv],a=o.visualScale||Ev,l=o.width,c=o.length,h={entityId:e,centerWorldX:t,centerWorldZ:n,footprintWidth:l,footprintLength:c,visualScale:a,zoneType:s};return be.registerLot(h),h}}function bv(r){const e=new Map,t=new Map,n=r.clone();return Hd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Hd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Hd(r.children[n],e.children[n],t)}class He{static keys={};static pointerDown=!1;static pointerSecondaryDown=!1;static mouseX=0;static mouseY=0;static screenWidth=window.innerWidth;static screenHeight=window.innerHeight;static joystickVector={x:0,y:0};static isMobile=!1;static virtualFirePrimary=!1;static virtualFireSecondary=!1;static setVirtualJoystick(e,t){this.joystickVector.x=e,this.joystickVector.y=t}static setVirtualFirePrimary(e){this.virtualFirePrimary=e}static setVirtualFireSecondary(e){this.virtualFireSecondary=e}static init(){window.addEventListener("keydown",t=>{t.code&&(this.keys[t.code]=!0),t.key&&(this.keys[t.key]=!0,this.keys[t.key.toLowerCase()]=!0),(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))&&t.preventDefault()}),window.addEventListener("keyup",t=>{t.code&&(this.keys[t.code]=!1),t.key&&(this.keys[t.key]=!1,this.keys[t.key.toLowerCase()]=!1)}),window.addEventListener("pointerdown",t=>{t.button===2?this.pointerSecondaryDown=!0:this.pointerDown=!0}),window.addEventListener("pointerup",t=>{t.button===2?this.pointerSecondaryDown=!1:this.pointerDown=!1}),window.addEventListener("contextmenu",t=>{t.preventDefault()});const e=t=>{this.mouseX=t.clientX,this.mouseY=t.clientY};window.addEventListener("pointermove",e,{passive:!0}),window.addEventListener("mousemove",e,{passive:!0}),window.addEventListener("resize",()=>{this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight})}static isKeyDown(e){return!!this.keys[e]}static isPointerDown(){return this.pointerDown||this.virtualFirePrimary}static isSecondaryPointerDown(){return this.pointerSecondaryDown||this.virtualFireSecondary}static getMouseNDC(){return{x:this.mouseX/this.screenWidth*2-1,y:-(this.mouseY/this.screenHeight)*2+1}}}class Eo{static raycaster=new Xl;static camera;static intersectableObjects=[];static objectToEntityMap=new Map;static init(e){this.camera=e}static registerObject(e,t){this.intersectableObjects.push(e),this.objectToEntityMap.set(e.uuid,t)}static unregisterObject(e){const t=this.intersectableObjects.indexOf(e);t!==-1&&this.intersectableObjects.splice(t,1),this.objectToEntityMap.delete(e.uuid)}static getIntersectedEntity(){if(!this.camera)return null;const e=He.getMouseNDC(),t=new _e(e.x,e.y);this.raycaster.setFromCamera(t,this.camera);const n=this.raycaster.intersectObjects(this.intersectableObjects,!0);if(n.length>0)for(const i of n){let s=i.object;for(;s;){const o=this.objectToEntityMap.get(s.uuid);if(o!==void 0)return o;s=s.parent}}return null}}const nu=0,iu=.5,Av=0,wv=.01,Rv=.36,Cv=1.3,Iv=65,Lv=38,Pv=140;class No{static zoneObjects=new Map;static allZoneMeshes=[];static raycaster=new Xl;static pointerVector=new _e;static tempVec=new L;static createZonesForBuilding(e,t,n){for(const i of n){const s=i.u1-i.u0,o=i.v1-i.v0,a=new vn(s,o),l=new ut({visible:!1,transparent:!0,opacity:Av}),c=new Ae(a,l),h=i.u0+s/2,u=i.v0+o/2;c.position.x=h-iu,c.position.y=iu-u,c.position.z=wv,t.add(c),this.zoneObjects.set(c.uuid,{entity:e,zone:i.id,uvCenter:new _e(h,u)}),this.allZoneMeshes.push(c)}}static getHitZone(e){if(this.allZoneMeshes.length===nu)return null;const t=He.getMouseNDC();this.pointerVector.set(t.x,t.y),this.raycaster.setFromCamera(this.pointerVector,e);const n=this.raycaster.intersectObjects(this.allZoneMeshes,!1);if(n.length===nu)return null;if(n.length===1){const o=this.zoneObjects.get(n[0].object.uuid);if(!o)return null;const a=bt.get(o.entity);return a&&a.currentHP<=0?null:{...o,point:n[0].point.clone()}}let i=null,s=1/0;for(let o=0;o<n.length;o++){const a=n[o],l=this.zoneObjects.get(a.object.uuid);if(!l)continue;const c=bt.get(l.entity);if(c&&c.currentHP<=0)continue;const h=a.object.parent;if(!h)continue;h.getWorldPosition(this.tempVec),this.tempVec.project(e);const u=this.tempVec.x-t.x,d=this.tempVec.y-t.y;let p=u*u+d*d;const g=h.scale.y,_=h.scale.x;g<=Iv||_<=Lv?p*=Rv:g>=Pv&&(p*=Cv);const m=l.uvCenter.x-.5,f=l.uvCenter.y-.5,x=p+(m*m+f*f)*.002;x<s&&(s=x,i={...l,point:a.point.clone()})}if(!i){const o=n[0],a=this.zoneObjects.get(o.object.uuid);a&&(i={...a,point:o.point.clone()})}return i}static clearAll(){for(const e of this.allZoneMeshes)e.parent&&e.parent.remove(e),e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose();this.zoneObjects.clear(),this.allZoneMeshes=[]}}class Dv{static computeFrameIndex(e,t,n){const i=1-e/t,s=Math.floor(i*n);return Math.max(0,Math.min(s,n))}static computeFrameForZonalState(e,t){const n=1-e.totalHp/e.maxTotalHp,i=Math.floor(t*.55),s=Math.floor(n*i),o=e.zones.get(Rn.CENTER),a=Math.floor(t*.28),l=o?Math.floor((1-o.hp/o.maxHp)*a):0,c=e.zones.get(Rn.TOP_CENTER),h=t-i-a,u=c?Math.floor((1-c.hp/c.maxHp)*h):0;return Math.max(0,Math.min(s+l+u,t))}}class fo{static computeZoneLevel(e){return e>=.8?0:e>=.55?1:e>=.25?2:e>0?3:4}static computeGlobalLevel(e,t){let n=0;for(const i of t){const s=e.zones.get(i.id);if(!s)continue;const o=s.level/4;n+=i.structureWeight*o}return n=Math.max(0,Math.min(1,n)),this.computeZoneLevel(1-n)}}class ei{static init(){ct.addSystem(this.tick.bind(this))}static tick(e){Qt.tick(e)}static spawnBrickBurst(e,t,n,i,s){for(let o=0;o<i;o++){const a=(Math.random()-.5)*12,l=Math.random()*12+10,c=(Math.random()-.5)*12,h=.3+Math.random()*.5;let u=8930338;s&&s.length>0&&(u=s[Math.floor(Math.random()*s.length)]),Qt.spawnDebris(e,t,n,a,l,c,h,u)}}static spawnDustCloud(e,t,n,i){for(let s=0;s<i;s++){const o=(Math.random()-.5)*1.5,a=Math.random()*1+.3,l=(Math.random()-.5)*1.5;Qt.spawnParticle(e,t,n,o,a,l,1+Math.random()*.5,"dust")}}static spawnSmokePlume(e,t,n,i){for(let s=0;s<i;s++){const o=(Math.random()-.5)*.8,a=Math.random()*1.2+.5,l=(Math.random()-.5)*.8;Qt.spawnParticle(e,t,n,o,a,l,2+Math.random()*1,"smoke")}}static spawnSparkBurst(e,t,n,i){for(let s=0;s<i;s++){const o=(Math.random()-.5)*8,a=Math.random()*6+2,l=(Math.random()-.5)*8;Qt.spawnParticle(e,t,n,o,a,l,.2+Math.random()*.15,"spark")}}static spawnEmberBurst(e,t,n,i){for(let s=0;s<i;s++){const o=(Math.random()-.5)*4,a=Math.random()*5+3,l=(Math.random()-.5)*4;Qt.spawnParticle(e,t,n,o,a,l,1.5+Math.random()*1,"fire_ember")}}static spawnDemolitionVolcano(e,t,n,i=20,s){const o=Math.min(60,Math.floor(i*1.5)),a=Math.min(45,Math.floor(i*1.2)),l=Math.min(30,Math.floor(i*.8)),c=Math.min(25,Math.floor(i*.7));this.spawnBrickBurst(e,t,n,o,s),this.spawnSparkBurst(e,t,n,a),this.spawnSmokePlume(e,t,n,l),this.spawnDustCloud(e,t,n,Math.floor(l*.8)),this.spawnEmberBurst(e,t,n,c)}static spawnDebrisBurst(e,t,n,i){for(let s=0;s<i;s++){const o=(Math.random()-.5)*5,a=Math.random()*5+3,l=(Math.random()-.5)*5;Qt.spawnDebris(e,t,n,o,a,l)}}}class Ri{static invCellSize=1/64;static grid=new Map;static getKey(e,t){return e+2048<<16|t+2048&65535}static getCellCoords(e,t){return{gx:Math.floor(e*this.invCellSize),gz:Math.floor(t*this.invCellSize)}}static clear(){this.grid.clear()}static rebuild(){this.grid.clear();for(const e of ct.entities){if(Un.has(e))continue;const t=vt.get(e),n=bt.get(e);if(t&&n&&n.currentHP>0){const{gx:i,gz:s}=this.getCellCoords(t.worldX,t.worldY),o=this.getKey(i,s);let a=this.grid.get(o);a||(a=[],this.grid.set(o,a)),a.push(e)}}}static findClosest(e,t,n){let i=n,s=null;if(!isFinite(n)){const h=this.getCellCoords(e-128,t-128),u=this.getCellCoords(e+128,t+128);for(let _=h.gx;_<=u.gx;_++)for(let m=h.gz;m<=u.gz;m++){const f=this.getKey(_,m),x=this.grid.get(f);if(x)for(let v=0;v<x.length;v++){const y=x[v],w=bt.get(y);if(!w||w.currentHP<=0)continue;const b=vt.get(y);if(!b)continue;const A=b.worldX-e,C=b.worldY-t,T=A*A+C*C;T<i&&(i=T,s=y)}}const d=s!==null?Math.sqrt(i):1024,p=this.getCellCoords(e-d,t-d),g=this.getCellCoords(e+d,t+d);for(let _=p.gx;_<=g.gx;_++)for(let m=p.gz;m<=g.gz;m++){if(s!==null&&_>=h.gx&&_<=u.gx&&m>=h.gz&&m<=u.gz)continue;const f=this.getKey(_,m),x=this.grid.get(f);if(x)for(let v=0;v<x.length;v++){const y=x[v],w=bt.get(y);if(!w||w.currentHP<=0)continue;const b=vt.get(y);if(!b)continue;const A=b.worldX-e,C=b.worldY-t,T=A*A+C*C;T<i&&(i=T,s=y)}}return s}const o=Math.sqrt(n),a=this.getCellCoords(e-o,t-o),l=this.getCellCoords(e+o,t+o);for(let c=a.gx;c<=l.gx;c++)for(let h=a.gz;h<=l.gz;h++){const u=this.getKey(c,h),d=this.grid.get(u);if(d)for(let p=0;p<d.length;p++){const g=d[p],_=bt.get(g);if(!_||_.currentHP<=0)continue;const m=vt.get(g);if(!m)continue;const f=m.worldX-e,x=m.worldY-t,v=f*f+x*x;v<i&&(i=v,s=g)}}return s}static queryRadius(e,t,n){const i=[],s=this.getCellCoords(e-n,t-n),o=this.getCellCoords(e+n,t+n),a=n*n;for(let l=s.gx;l<=o.gx;l++)for(let c=s.gz;c<=o.gz;c++){const h=this.getKey(l,c),u=this.grid.get(h);if(u)for(let d=0;d<u.length;d++){const p=u[d],g=vt.get(p);if(!g)continue;const _=g.worldX-e,m=g.worldY-t;_*_+m*m<=a&&i.push(p)}}return i}}class sn{static score=0;static highScore=0;static combo=1;static comboCount=0;static comboTimer=0;static COMBO_TIMEOUT=3.5;static MAX_COMBO=5;static popups=[];static init(){try{const e=localStorage.getItem("alienv2_highscore");e&&(this.highScore=parseInt(e,10)||0)}catch{this.highScore=0}}static tick(e){this.comboTimer>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1,this.comboCount=0,this.comboTimer=0));for(let t=this.popups.length-1;t>=0;t--){const n=this.popups[t];n.elapsed+=e,n.worldZ+=e*12,n.elapsed>=n.duration&&this.popups.splice(t,1)}}static addScore(e,t,n){this.comboCount++,this.combo=Math.min(this.MAX_COMBO,1+Math.floor(this.comboCount/2)),this.comboTimer=this.COMBO_TIMEOUT;const i=e*this.combo;if(this.score+=i,this.score>this.highScore){this.highScore=this.score;try{localStorage.setItem("alienv2_highscore",this.highScore.toString())}catch{}}if(n){const s=this.combo>1?`+${i} (x${this.combo})`:`+${i}`,o=this.combo>=4?"#f59e0b":this.combo>=2?"#3b82f6":"#10b981";this.popups.push({text:t?`${t} ${s}`:s,points:i,worldX:n.x,worldY:n.y,worldZ:n.z??15,color:o,duration:1.4,elapsed:0})}return i}static getScore(){return this.score}static getHighScore(){return this.highScore}static getCombo(){return this.combo}static getComboTimerRatio(){return this.comboTimer/this.COMBO_TIMEOUT}static reset(){this.score=0,this.combo=1,this.comboCount=0,this.comboTimer=0,this.popups=[]}}class mn{static ctx=null;static masterGain=null;static noiseBuffer=null;static isInitialized=!1;static init(){const e=()=>{this.ensureAudioContext(),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),ct.addSystem(this.tick.bind(this))}static ensureAudioContext(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const t=this.ctx.sampleRate*1;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.isInitialized=!0,console.log("[AudioSystem] Procedural WebAudio engine initialized.")}catch(e){console.warn("[AudioSystem] WebAudio initialization deferred:",e)}}static processEvent(e){this.isInitialized||this.ensureAudioContext(),!(!this.ctx||this.ctx.state==="suspended")&&(e.type==="laser"?this.playLaserSFX():e.type==="blast"||e.type==="blast_zonal"?this.playExplosionSFX(1):e.type==="blast360"?(this.playExplosionSFX(1.4),this.playCollapseRumbleSFX()):e.type==="shake"&&e.data.intensity>10&&this.playClusterBoomSFX())}static tick(e){this.ctx&&this.ctx.state}static playLaserSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(150,e+.08),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08),t.onended=()=>{t.disconnect(),n.disconnect()}}static playExplosionSFX(e=1){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,n=this.ctx.createBufferSource(),i=this.ctx.createBiquadFilter(),s=this.ctx.createGain();n.buffer=this.noiseBuffer,i.type="lowpass",i.frequency.setValueAtTime(160*e,t),i.frequency.exponentialRampToValueAtTime(20,t+.5),s.gain.setValueAtTime(.5*e,t),s.gain.exponentialRampToValueAtTime(.001,t+.55),n.connect(i),i.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.55),n.onended=()=>{n.disconnect(),i.disconnect(),s.disconnect()}}static playClusterBoomSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(65,e),t.frequency.exponentialRampToValueAtTime(15,e+.9),n.gain.setValueAtTime(.7,e),n.gain.exponentialRampToValueAtTime(.001,e+.95),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.95),t.onended=()=>{t.disconnect(),n.disconnect()},this.playExplosionSFX(1.8)}static playCollapseRumbleSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(45,e),t.frequency.exponentialRampToValueAtTime(15,e+1.2),n.gain.setValueAtTime(.6,e),n.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1.2),t.onended=()=>{t.disconnect(),n.disconnect()}}static playClusterLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(60,e+.25),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.25),t.onended=()=>{t.disconnect(),n.disconnect()}}static playClusterSplitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(1200,e),n.Q.setValueAtTime(4,e),i.gain.setValueAtTime(.6,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.12),t.onended=()=>{t.disconnect(),n.disconnect(),i.disconnect()}}static playJetFlybySFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="lowpass",n.frequency.setValueAtTime(250,e),n.frequency.linearRampToValueAtTime(1800,e+.4),n.frequency.exponentialRampToValueAtTime(200,e+1.2),i.gain.setValueAtTime(.05,e),i.gain.linearRampToValueAtTime(.45,e+.4),i.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+1.2),t.onended=()=>{t.disconnect(),n.disconnect(),i.disconnect()}}static playMissileLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(650,e+.35),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.35),t.onended=()=>{t.disconnect(),n.disconnect()}}static playShieldHitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(550,e),t.frequency.exponentialRampToValueAtTime(120,e+.15),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.15),t.onended=()=>{t.disconnect(),n.disconnect()}}}class Er{static nextId=1;static vehicles=[];static roadRows=[];static roadCols=[];static intersections=[];static MAX_VEHICLES=36;static isInitialized=!1;static init(){this.vehicles=[],this.roadRows=[],this.roadCols=[],this.intersections=[],this.extractRoadNetwork(),this.spawnInitialFleet(),this.isInitialized=!0}static extractRoadNetwork(){const e=new Set,t=new Set;for(let n=0;n<be.GRID_DIM;n++)for(let i=0;i<be.GRID_DIM;i++){const s=be.getCell(n,i);s&&s.overlayType===te.ROAD&&(e.add(i),t.add(n),(s.terrainType===5||s.isIntersection)&&this.intersections.push({x:s.worldX,z:s.worldZ}))}this.roadRows=Array.from(e),this.roadCols=Array.from(t)}static spawnInitialFleet(){if(!(this.roadRows.length===0&&this.roadCols.length===0))for(let e=0;e<this.MAX_VEHICLES;e++){const t=this.createRandomVehicle();t&&this.vehicles.push(t)}}static createRandomVehicle(){const e=Math.random()>.5,t=Math.random()>.5?1:-1,n=t*2.8;let i=0,s=0,o=0,a=0,l=0;const c=26+Math.random()*14;if(e&&this.roadRows.length>0){const p=this.roadRows[Math.floor(Math.random()*this.roadRows.length)],g=be.getCell(Math.floor(Math.random()*be.GRID_DIM),p);if(!g)return null;i=-460+Math.random()*920,s=g.worldZ+n,o=t===1?0:Math.PI,a=t*c,l=0}else if(this.roadCols.length>0){const p=this.roadCols[Math.floor(Math.random()*this.roadCols.length)],g=be.getCell(p,Math.floor(Math.random()*be.GRID_DIM));if(!g)return null;i=g.worldX+n,s=-460+Math.random()*920,o=t===1?Math.PI*.5:-Math.PI*.5,a=0,l=t*c}else return null;const h=Math.random();let u="sedan",d=3900150;if(h<.15)u="police",d=1120295;else if(h<.35)u="cab",d=16436245;else if(h<.55)u="truck",d=10265519;else{const p=[15680580,3900150,1096065,9133302,15067115,3621201];d=p[Math.floor(Math.random()*p.length)]}return{id:this.nextId++,x:i,y:s,vx:a,vy:l,speed:c,heading:o,targetHeading:o,roadAxis:e?"EW":"NS",direction:t,type:u,color:d,alive:!0,respawnTimer:0,laneOffset:n}}static tick(e){this.isInitialized||this.init();const t=480;for(let n=0;n<this.vehicles.length;n++){const i=this.vehicles[n];if(!i.alive){if(i.respawnTimer-=e,i.respawnTimer<=0){const s=this.createRandomVehicle();s&&(s.id=i.id,this.vehicles[n]=s)}continue}i.x+=i.vx*e,i.y+=i.vy*e,i.x>t?i.x=-t:i.x<-t&&(i.x=t),i.y>t?i.y=-t:i.y<-t&&(i.y=t);for(const s of this.intersections){const o=s.x-i.x,a=s.z-i.y;if(o*o+a*a<16&&Math.random()<e*1.8){i.roadAxis==="EW"?(i.roadAxis="NS",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?Math.PI*.5:-Math.PI*.5,i.vx=0,i.vy=i.direction*i.speed,i.x=s.x+i.direction*2.8):(i.roadAxis="EW",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?0:Math.PI,i.vx=i.direction*i.speed,i.vy=0,i.y=s.z+i.direction*2.8);break}}i.heading+=(i.targetHeading-i.heading)*Math.min(1,e*8)}}static applyDamageInRadius(e,t,n){let i=0;const s=n*n;for(const o of this.vehicles){if(!o.alive)continue;const a=o.x-e,l=o.y-t;a*a+l*l<=s&&(this.destroyVehicle(o),i++)}return i}static checkRayHit(e){for(const t of this.vehicles){if(!t.alive)continue;const n=t.x-e.x,i=t.y-e.z;if(n*n+i*i<=16)return t}return null}static destroyVehicle(e){if(!e.alive)return;e.alive=!1,e.respawnTimer=6,Se.fxQueue.push({type:"blast",x:e.x,y:e.y,z:2,data:{entityId:0,targetFrame:0}}),Se.fxQueue.push({type:"fire",x:e.x,y:e.y,z:0,data:{}}),Se.fxQueue.push({type:"smoke",x:e.x,y:e.y,z:0,data:{count:8}}),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}}),ci.spawnDecal(e.x,e.y,"scorch",12);const t=e.type==="police"?"Police Cruiser":e.type==="truck"?"Cargo Truck":"Vehicle";sn.addScore(50,t,{x:e.x,y:e.y,z:4}),mn.playExplosionSFX(.8)}}class gn{static nextId=1;static jets=[];static turrets=[];static missiles=[];static tracers=[];static playerShield=100;static MAX_SHIELD=100;static playerHull=100;static MAX_HULL=100;static shieldRegenTimer=0;static shieldFlareTimer=0;static jetSpawnTimer=5;static isInitialized=!1;static init(){this.jets=[],this.turrets=[],this.missiles=[],this.tracers=[],this.playerShield=100,this.playerHull=100,this.shieldRegenTimer=0,this.shieldFlareTimer=0,this.jetSpawnTimer=5,this.spawnGroundTurrets(),this.isInitialized=!0}static spawnGroundTurrets(){const e=[{x:-140,y:-160,z:2},{x:160,y:-140,z:2},{x:-180,y:150,z:2},{x:150,y:160,z:2}];for(const t of e)this.turrets.push({id:this.nextId++,x:t.x,y:t.y,z:t.z,yaw:0,pitch:.3,reloadTimer:2+Math.random()*3,hp:120,maxHp:120,alive:!0})}static spawnFighterWing(e,t){const n=Math.floor(Math.random()*4);let i=0,s=0;const o=520;n===0?(i=-o,s=-o+Math.random()*o*2):n===1?(i=o,s=-o+Math.random()*o*2):n===2?(i=-o+Math.random()*o*2,s=-o):(i=-o+Math.random()*o*2,s=o);const a=120,l=e-i,c=t-s,h=Math.atan2(c,l);for(let u=0;u<2;u++){const d=h+Math.PI*.5,p=u===0?-16:16,g=i+Math.cos(d)*p,_=s+Math.sin(d)*p;this.jets.push({id:this.nextId++,x:g,y:_,z:75+(Math.random()-.5)*10,vx:Math.cos(h)*a,vy:Math.sin(h)*a,vz:0,speed:a,heading:h,pitch:0,roll:0,state:"approach",attackTimer:0,burstCount:0,burstInterval:0,hp:40,maxHp:40,alive:!0,smokeTimer:0})}mn.playJetFlybySFX()}static tick(e){this.isInitialized||this.init();let t=0,n=0,i=75;for(const o of ct.entities)if(Un.has(o)){const a=vt.get(o);a&&(t=a.worldX,n=a.worldY,i=a.worldZ||75);break}this.shieldFlareTimer>0&&(this.shieldFlareTimer-=e),this.shieldRegenTimer>0?this.shieldRegenTimer-=e:this.playerShield<this.MAX_SHIELD&&(this.playerShield=Math.min(this.MAX_SHIELD,this.playerShield+e*20)),this.jets.filter(o=>o.alive).length===0&&(this.jetSpawnTimer-=e,this.jetSpawnTimer<=0&&(this.jetSpawnTimer=16,this.spawnFighterWing(t,n)));for(let o=this.jets.length-1;o>=0;o--){const a=this.jets[o];if(!a.alive){this.jets.splice(o,1);continue}const l=t-a.x,c=n-a.y,h=i-a.z,u=Math.sqrt(l*l+c*c);if(a.state==="approach"){let p=Math.atan2(c,l)-a.heading;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;a.heading+=p*Math.min(1,e*3.5),a.roll=p*1.5,a.vx=Math.cos(a.heading)*a.speed,a.vy=Math.sin(a.heading)*a.speed,u<180&&(a.state="attack",a.burstCount=4,a.burstInterval=.08)}else if(a.state==="attack"){if(a.burstInterval-=e,a.burstInterval<=0&&a.burstCount>0){a.burstInterval=.12,a.burstCount--;const d=220,p=Math.sqrt(l*l+c*c+h*h);this.tracers.push({x:a.x,y:a.y,z:a.z,vx:l/p*d,vy:c/p*d,vz:h/p*d,lifetime:1.2})}(u<60||a.burstCount<=0)&&(a.state="breakaway")}else if(a.state==="breakaway"&&(a.roll=.8,a.vz=e*15,Math.abs(a.x)>520||Math.abs(a.y)>520)){a.alive=!1;continue}a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e,a.smokeTimer+=e,a.smokeTimer>=.04&&(a.smokeTimer=0,Se.fxQueue.push({type:"smoke",x:a.x,y:a.y,z:a.z,data:{count:1}}))}for(let o=this.tracers.length-1;o>=0;o--){const a=this.tracers[o];a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e,a.lifetime-=e;const l=a.x-t,c=a.y-n,h=a.z-i;if(l*l+c*c+h*h<18*18){this.applyDamageToPlayer(12),this.tracers.splice(o,1);continue}a.lifetime<=0&&this.tracers.splice(o,1)}for(const o of this.turrets){if(!o.alive)continue;const a=t-o.x,l=n-o.y,c=i-o.z,h=Math.sqrt(a*a+l*l);o.yaw=Math.atan2(l,a),o.pitch=Math.atan2(c,Math.max(1,h)),o.reloadTimer-=e,o.reloadTimer<=0&&h<260&&(o.reloadTimer=5.5+Math.random()*2,this.missiles.push({id:this.nextId++,x:o.x,y:o.y,z:o.z+4,vx:Math.cos(o.yaw)*20,vy:Math.sin(o.yaw)*20,vz:35,speed:85,lifetime:5.5,alive:!0}),mn.playMissileLaunchSFX(),Se.fxQueue.push({type:"sparks",x:o.x,y:o.y,z:o.z+4,data:{count:8}}))}for(let o=this.missiles.length-1;o>=0;o--){const a=this.missiles[o];if(!a.alive){this.missiles.splice(o,1);continue}if(a.lifetime-=e,a.lifetime<=0){this.detonateMissile(a,!1),this.missiles.splice(o,1);continue}const l=t-a.x,c=n-a.y,h=i-a.z,u=Math.sqrt(l*l+c*c+h*h);if(u<14){this.applyDamageToPlayer(25),this.detonateMissile(a,!0),this.missiles.splice(o,1);continue}const d=l/u,p=c/u,g=h/u,_=3.8*e;a.vx+=(d*a.speed-a.vx)*_,a.vy+=(p*a.speed-a.vy)*_,a.vz+=(g*a.speed-a.vz)*_,a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e,Se.fxQueue.push({type:"smoke",x:a.x,y:a.y,z:a.z,data:{count:2}})}}static applyDamageToPlayer(e){this.shieldRegenTimer=4,this.shieldFlareTimer=.35,this.playerShield>0?(this.playerShield=Math.max(0,this.playerShield-e),mn.playShieldHitSFX()):(this.playerHull=Math.max(0,this.playerHull-e),mn.playExplosionSFX(.7)),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}})}static detonateMissile(e,t){Se.fxQueue.push({type:"blast",x:e.x,y:e.y,z:e.z,data:{entityId:0,targetFrame:0}}),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:t?10:4}})}static checkTargetHit(e,t,n,i){for(const s of this.jets){if(!s.alive)continue;const o=s.x-e,a=s.y-t;if(o*o+a*a<=n*n)return s.hp-=i,s.hp<=0&&(s.alive=!1,Se.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),Se.fxQueue.push({type:"debris",x:s.x,y:s.y,z:s.z,data:{count:25,palette:[5592405,8947848,16729088]}}),sn.addScore(400,"Interceptor Jet",{x:s.x,y:s.y,z:s.z}),mn.playExplosionSFX(1.4)),!0}for(const s of this.turrets){if(!s.alive)continue;const o=s.x-e,a=s.y-t;if(o*o+a*a<=(n+8)*(n+8))return s.hp-=i,s.hp<=0&&(s.alive=!1,Se.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z+4,data:{entityId:0,targetFrame:0}}),ci.spawnDecal(s.x,s.y,"crater",20),sn.addScore(300,"SAM Turret",{x:s.x,y:s.y,z:s.z+4}),mn.playExplosionSFX(1.2)),!0}for(const s of this.missiles){if(!s.alive)continue;const o=s.x-e,a=s.y-t;if(o*o+a*a<=(n+6)*(n+6))return s.alive=!1,Se.fxQueue.push({type:"blast",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),sn.addScore(150,"Missile Intercepted",{x:s.x,y:s.y,z:s.z}),!0}return!1}}const Nv=3,Uv=80*80,su=3,Ov=.35,Fv=.5,Bv=.3,zv=.6;class Se{static fxQueue=[];static ambientTimer=0;static clusterTimer=0;static statTimer=0;static clusterCooldown=new Map;static destroyedBuildings=new Set;static totalBuildingCount=0;static destructionPercentage=0;static init(){this.destroyedBuildings.clear(),this.destructionPercentage=0,ct.addSystem(this.tick.bind(this))}static tick(e){if(this.ambientTimer+=e,this.ambientTimer>=Fv){this.ambientTimer=0;for(const n of ct.entities){const i=Bt.get(n),s=vt.get(n);if(!i||!s)continue;const o=1-i.totalHp/i.maxTotalHp;o>Bv&&Math.random()<o*.6&&this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:n}}),o>zv&&Math.random()<(o-.3)*.4&&this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:2,entityId:n}})}}this.clusterTimer+=e,this.clusterTimer>=Nv&&(this.clusterTimer=0,this.checkClusterExplosions());const t=performance.now()/1e3;for(const[n,i]of this.clusterCooldown)t>i&&this.clusterCooldown.delete(n);this.statTimer+=e,this.statTimer>=.5&&(this.statTimer=0,this.updateDestructionStats())}static updateDestructionStats(){let e=0,t=0;for(const n of ct.entities){const i=Bt.get(n);i&&(e++,i.totalHp<=0&&(t++,this.destroyedBuildings.add(n)))}e>0&&(this.totalBuildingCount=e,this.destructionPercentage=Math.min(100,Math.round(t/e*1e3)/10),Ai.updateScore(this.destructionPercentage))}static getDestructionPercentage(){return this.destructionPercentage}static applyCollateralDamage(e,t,n,i=64,s=25){Er.applyDamageInRadius(t,n,i),gn.checkTargetHit(t,n,i,s);const o=Ri.queryRadius(t,n,i);for(const a of o){if(a===e)continue;const l=vt.get(a),c=Bt.get(a);if(!l||!c||c.totalHp<=0)continue;const h=l.worldX-t,u=l.worldY-n,d=Math.sqrt(h*h+u*u);if(d<=i&&d>.1){const p=1-d/i,g=Math.round(s*p);if(g<=0)continue;const _=[Rn.CENTER,Rn.TOP_CENTER,Rn.BASE_CENTER,Rn.BASE_LEFT,Rn.BASE_RIGHT],m=_[Math.floor(Math.random()*_.length)],f=c.zones.get(m);if(f){f.hp=Math.max(0,f.hp-g),c.totalHp=Math.max(0,c.totalHp-g);const x=bt.get(a);x&&(x.currentHP=c.totalHp);const v=fo.computeZoneLevel(f.hp/f.maxHp);v>f.level&&(f.level=v,c.globalDamageLevel=fo.computeGlobalLevel(c,Array.from(c.zones.values()))),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:a,intensity:"light"}}),this.fxQueue.push({type:"smoke",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:3,entityId:a}}),this.fxQueue.push({type:"sparks",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:4,entityId:a}})}}}}static checkClusterExplosions(){const e=[];for(const n of ct.entities){if(this.clusterCooldown.has(n))continue;const i=Bt.get(n),s=vt.get(n);if(!i||!s)continue;1-i.totalHp/i.maxTotalHp>=Ov&&e.push({entity:n,x:s.worldX,z:s.worldY})}if(e.length<su)return;const t=new Set;for(let n=0;n<e.length;n++){if(t.has(n))continue;const i=[e[n]];for(let c=n+1;c<e.length;c++){if(t.has(c))continue;const h=e[n].x-e[c].x,u=e[n].z-e[c].z;h*h+u*u<=Uv&&i.push(e[c])}if(i.length<su)continue;const s=i.reduce((c,h)=>c+h.x,0)/i.length,o=i.reduce((c,h)=>c+h.z,0)/i.length,a=performance.now()/1e3;i.forEach(c=>{t.add(e.indexOf(c)),this.clusterCooldown.set(c.entity,a+10)});const l=i[0].entity;this.fxQueue.push({type:"blast",x:s,y:o,z:10,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s+12,y:o+8,z:12,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s-10,y:o-6,z:8,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast360",x:s,y:o,z:6,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}}),this.fxQueue.push({type:"smoke",x:s,y:o,z:0,data:{count:20,entityId:l}}),this.fxQueue.push({type:"debris",x:s,y:o,z:0,data:{count:35,palette:[8930338,11162931,6697745,2236962],entityId:l}}),this.fxQueue.push({type:"dust",x:s,y:o,z:0,data:{count:18,entityId:l}}),this.fxQueue.push({type:"sparks",x:s,y:o,z:0,data:{count:20,entityId:l}}),console.log(`[DestructionSystem] Cluster blast! ${i.length} buildings @ (${s.toFixed(0)}, ${o.toFixed(0)})`)}}static applyZonalDamage(e,t,n,i){const s=Bt.get(e),o=Kt.get(e),a=vt.get(e);if(!s||!o||!a)return;const l=s.zones.get(t);if(!l)return;l.hp=Math.max(0,l.hp-n),s.totalHp=Math.max(0,s.totalHp-n);const c=bt.get(e);c&&(c.currentHP=s.totalHp);const h=fo.computeZoneLevel(l.hp/l.maxHp),u=h>l.level;u&&(l.level=h,s.globalDamageLevel=fo.computeGlobalLevel(s,Array.from(s.zones.values())));const{typeKey:d,def:p}=gt.getTypeInfo(e,o.texturePrefix),g=gt.BUILDING_MAX_FRAMES[d]??14,_=1-s.totalHp/s.maxTotalHp,m=Math.min(Math.floor(_*g),g),f=p&&p.visualScale||1,v=(p&&p.width||16)*Math.SQRT2*f,y=Math.max(18,Math.round(v*1.15));if(s.totalHp>0){const C=_>.6?"crater":"scorch",T=_>.6?Math.round(y*.6):10+h*3;ci.spawnDecal(a.worldX,a.worldY,C,T)}this.fxQueue.push({type:"blast_zonal",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:e,targetFrame:m,zone:t,level:Math.max(1,h),uvCenter:i}});const w=u?h*2+4:3;this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:w}});const b=Math.max(8,h*6+8);let A=[8930338,11162931,6697745];if(d==="1"?A=[16777215,14540253,11184810,16729156]:d==="3"&&(A=[13808780,11184810,8947848,6045747]),this.fxQueue.push({type:"debris",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:b,entityId:e,palette:A}}),this.fxQueue.push({type:"dust",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:12,entityId:e}}),this.fxQueue.push({type:"smoke",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:8,entityId:e}}),this.fxQueue.push({type:"sparks",x:a.worldX,y:a.worldY,z:a.worldZ,data:{count:10,entityId:e}}),this.fxQueue.push({type:"fire",x:a.worldX,y:a.worldY,z:a.worldZ,data:{entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:u||h>=2?"heavy":"light"}}),sn.addScore(10,void 0,{x:a.worldX,y:a.worldY,z:20}),s.totalHp<=0){if(!this.destroyedBuildings.has(e)){this.destroyedBuildings.add(e);let C=100;p&&(p.is3D?C=2500:p.tier==="background"?C=500:p.tier==="midground"?C=250:p.footprintTiles&&p.footprintTiles>=3&&(C=1e3)),sn.addScore(C,p?.name||"Demolished",{x:a.worldX,y:a.worldY,z:30}),this.updateDestructionStats()}p&&p.is3D||(gt.trigger2DDemolition(e,y,A),ei.spawnDemolitionVolcano(a.worldX,1,a.worldY,y,A),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}),this.fxQueue.push({type:"blast360",x:a.worldX,y:a.worldY,z:6,data:{entityId:e,targetFrame:g}}))}}static applyDamage(e,t){const n=bt.get(e),i=Kt.get(e),s=vt.get(e);if(!n||!i||!s)return;n.currentHP=Math.max(0,n.currentHP-t);const o=Bt.get(e);o&&(o.totalHp=n.currentHP);const a=i.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/),l=a?a[1]:"3",c=gt.BUILDING_MAX_FRAMES[l]??14,h=Dv.computeFrameIndex(n.currentHP,n.maxHP,c);let u=[8930338,11162931,6697745];if(l==="1"?u=[16777215,14540253,11184810,16729156]:l==="3"&&(u=[13808780,11184810,8947848,6045747]),sn.addScore(10,void 0,{x:s.worldX,y:s.worldY,z:20}),h!==n.state){n.state=h;const{def:d}=gt.getTypeInfo(e,i.texturePrefix),p=d&&d.visualScale||1,g=d&&d.width||16,_=Math.max(18,Math.round(g*Math.SQRT2*p*1.15));if(n.currentHP<=0){if(!this.destroyedBuildings.has(e)){this.destroyedBuildings.add(e);let m=100;d&&(d.is3D?m=2500:d.tier==="background"?m=500:d.tier==="midground"?m=250:d.footprintTiles&&d.footprintTiles>=3&&(m=1e3)),sn.addScore(m,d?.name||"Demolished",{x:s.worldX,y:s.worldY,z:30}),this.updateDestructionStats()}(!d||!d.is3D)&&(gt.trigger2DDemolition(e,_,u),ei.spawnDemolitionVolcano(s.worldX,1,s.worldY,_,u),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}))}else ci.spawnDecal(s.worldX,s.worldY,"scorch",15);this.fxQueue.push({type:h===c?"blast":"blast360",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:e,targetFrame:h}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}}),this.fxQueue.push({type:"debris",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:Math.min(h*3,30),entityId:e,palette:u}}),this.fxQueue.push({type:"dust",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:15,entityId:e}}),this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:8,entityId:e}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:12,entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:"heavy"}})}else this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:e}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:5,entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:"light"}})}static executeTextureSwap(e,t){const n=Kt.get(e);n&&(n.currentFrame=t)}}const cn=0,cr=2,wa=.5,po=450,kv=450,Hv=5,Gv=.3,ru=140,Ra=450,Vv=.35,Wv=1024,Gd=Wv/cr,ou=-Gd+60,au=Gd-60;class Ti{static camera;static shakeIntensity=cn;static shakeDuration=cn;static shakeMaxDuration=cn;static targetX=cn;static targetZ=cn;static ZOOM_STORAGE_KEY="alienv2_camera_zoom_frustum";static DEFAULT_FRUSTUM_ZOOM=380;static targetFrustumSize=380;static currentFrustumSize=380;static init(e){this.camera=e;const t=localStorage.getItem(this.ZOOM_STORAGE_KEY);if(t){const n=parseFloat(t);!isNaN(n)&&n>=320&&n<=Ra?this.targetFrustumSize=n:this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM}else this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM;this.currentFrustumSize=this.targetFrustumSize,Le.setFrustumSize(this.currentFrustumSize),window.addEventListener("wheel",n=>{this.targetFrustumSize=Math.max(ru,Math.min(Ra,this.targetFrustumSize+n.deltaY*Vv));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}},{passive:!0})}static adjustZoom(e){this.targetFrustumSize=Math.max(ru,Math.min(Ra,this.targetFrustumSize+e));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}}static setTarget(e,t){this.targetX=e,this.targetZ=t}static addShake(e,t){this.shakeIntensity=e,this.shakeDuration=t,this.shakeMaxDuration=t}static isPointInView(e,t){const n=this.currentFrustumSize/cr+150;return Math.abs(e-this.targetX)<n&&Math.abs(t-this.targetZ)<n}static currentCamX=cn;static currentCamZ=cn;static tick(e){if(!this.camera)return;if(Math.abs(this.currentFrustumSize-this.targetFrustumSize)>.05){const l=1-Math.exp(-14*e);this.currentFrustumSize+=(this.targetFrustumSize-this.currentFrustumSize)*l,Le.setFrustumSize(this.currentFrustumSize)}const t=Math.max(ou,Math.min(au,this.targetX))+po,n=Math.max(ou,Math.min(au,this.targetZ))+po;this.currentCamX===cn&&this.currentCamZ===cn&&(this.currentCamX=t,this.currentCamZ=n);const i=1-Math.exp(-14*e);this.currentCamX+=(t-this.currentCamX)*i,this.currentCamZ+=(n-this.currentCamZ)*i;let s=this.currentCamX,o=this.currentCamZ,a=kv;if(this.shakeDuration>cn){const l=1-this.shakeDuration/this.shakeMaxDuration,c=Math.exp(-l*Hv)*this.shakeIntensity,h=(Math.random()-wa)*cr*c,u=(Math.random()-wa)*cr*c,d=(Math.random()-wa)*Gv*cr*c;s+=h,o+=u,a+=d,this.shakeDuration-=e,this.shakeDuration<=cn&&(this.shakeIntensity=cn)}this.camera.position.set(s,a,o),this.camera.lookAt(s-po,cn,o-po)}}const rr=2,Yt=0,xi=1,lu=160,cu="3",Xv=Math.SQRT1_2,Yv=Math.SQRT1_2,mo=Math.PI/4,Kv=Math.sqrt(1.5),fs=.5,qv=0,Zv=0,jv=.2,hu=1;function uu(r,e){const t=(r+e+1024)/2048;return Math.min(750,Math.max(100,100+Math.floor(t*650)))}const du=64,$v=1,Qv=.4,Jv=9999,eM=1.5,tM=2,nM=Math.PI/2.5,iM=14,Ca=.15,sM=1.05,rM=.92,oM=.45,aM=.15,lM=16777215,cM=1.025,hM=.96,uM=.08,dM=16772829,fM=8,pM=Math.PI*2*3,mM=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gM=`
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
`;class gt{static sprites=new Map;static models3D=new Map;static shadowMeshes=new Map;static sharedShadowGeo=null;static sharedShadowMat=null;static sharedShadowTex=null;static mixers=new Map;static animActions=new Map;static dummyHitSprites=new Map;static sharedGeometry=new vn(hu,hu);static hitFxMap=new Map;static flashMap=new Map;static blendMap=new Map;static lastFrameMap=new Map;static cachedTexture=new Map;static cachedOffset=new Map;static cachedTypeKey=new Map;static cachedDef=new Map;static collapseMap=new Map;static FRAME_STEP_SPEED=10;static displayFrameMap=new Map;static demoStateMap=new Map;static partialDamageTimeMap=new Map;static demo2DMap=new Map;static getSharedShadowTexture(){if(!this.sharedShadowTex){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(t){const n=t.createRadialGradient(32,32,4,32,32,30);n.addColorStop(0,"rgba(0, 0, 0, 0.65)"),n.addColorStop(.45,"rgba(0, 0, 0, 0.35)"),n.addColorStop(.8,"rgba(0, 0, 0, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=n,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill()}this.sharedShadowTex=new Lo(e),this.sharedShadowTex.generateMipmaps=!1,this.sharedShadowTex.minFilter=Nt}return this.sharedShadowTex}static getOrCreateShadow(e,t,n){let i=this.shadowMeshes.get(e);if(!i){this.sharedShadowGeo||(this.sharedShadowGeo=new vn(1,1)),this.sharedShadowMat||(this.sharedShadowMat=new ut({map:this.getSharedShadowTexture(),transparent:!0,opacity:.45,depthWrite:!1,depthTest:!0})),i=new Ae(this.sharedShadowGeo,this.sharedShadowMat),i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/4,i.renderOrder=4;const s=n*1.35;i.scale.set(s,s,1),i.position.set(t.worldX,.04,t.worldY),Le.groundGroup.add(i),this.shadowMeshes.set(e,i)}return i}static getTypeInfo(e,t){let n=this.cachedTypeKey.get(e),i=this.cachedDef.get(e);if(!n||!i){const s=t?t.match(/building_([a-zA-Z0-9_]+)_stage_/):null;n=s?s[1]:cu,i=et[n]||et[cu],this.cachedTypeKey.set(e,n),this.cachedDef.set(e,i)}return{typeKey:n,def:i}}static triggerCollapse(e,t){this.collapseMap.has(e)||this.collapseMap.set(e,{tiltAngle:Yt,impactVector:t.clone().normalize()})}static trigger2DDemolition(e,t,n){this.demo2DMap.has(e)||this.demo2DMap.set(e,{elapsed:Yt,duration:1.2,footprintSize:t,craterSpawned:!1,palette:n})}static crushBuildingsInTrajectory(e,t,n=du){for(const i of Kt.keys()){const s=vt.get(i),o=bt.get(i);if(!s||!o||o.currentHP<=Yt)continue;const a=s.worldX-e.worldX,l=s.worldY-e.worldY,c=Math.sqrt(a*a+l*l);c>$v&&c<=n&&(a*t.x+l*t.z)/c>Qv&&Se.applyDamage(i,Jv)}}static getSpritePosition(e){const t=this.models3D.get(e);if(t)return t.position.clone();const n=this.sprites.get(e);return n?n.position.clone():null}static getVisualCenter(e){const t=this.dummyHitSprites.get(e);if(t)return t.position.clone();const n=this.sprites.get(e);if(n)return n.position.clone();const i=this.models3D.get(e);return i?new L(i.position.x,30,i.position.z):null}static getSpriteScale(e){const t=this.models3D.get(e);if(t)return t.scale.clone();const n=this.sprites.get(e);return n?n.scale.clone():null}static applyHitFX(e,t){let n=this.hitFxMap.get(e);n||(n=[],this.hitFxMap.set(e,n)),t==="heavy"?(n.push({type:"shudder",elapsed:Yt,duration:Ca,amplitude:oM}),n.push({type:"squash",elapsed:Yt,duration:Ca,scaleXMult:sM,scaleYMult:rM}),this.flashMap.set(e,{timeLeft:aM,color:lM}),Ai.triggerFlash()):(n.push({type:"squash",elapsed:Yt,duration:Ca,scaleXMult:cM,scaleYMult:hM}),this.flashMap.set(e,{timeLeft:uM,color:dM}))}static tick(e){for(const t of Kt.keys()){const n=Kt.get(t),i=vt.get(t);if(!n||!i)continue;const{typeKey:s,def:o}=this.getTypeInfo(t,n.texturePrefix);if(o&&o.is3D){const _=this.sprites.get(t);_&&(_.visible=!1,Le.cityGroup.remove(_),_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose()),this.sprites.delete(t)),this.update3DBuilding(t,n,i,s,o,e);continue}this.updateZonalFrame(t,n,e);const a=this.getOrCreateSprite(t,n,i),l=a.material,{texture:c,offset:h}=this.updateTextureAndOffset(t,n,l,e),u=this.processHitEffects(t,e),d=this.demo2DMap.get(t);let p=Yt,g=Yt;if(d){d.elapsed+=e;const _=Math.min(1,d.elapsed/d.duration);if(_<.95&&Math.random()<.22){const m=i.worldX+(Math.random()-fs)*(d.footprintSize*.35),f=i.worldY+(Math.random()-fs)*(d.footprintSize*.35),x=4+Math.random()*20;Math.random()<.4?Se.fxQueue.push({type:"blast360",x:m,y:f,z:x,data:{entityId:t,targetFrame:0}}):Se.fxQueue.push({type:"smoke",x:m,y:f,z:x,data:{count:3,entityId:t}}),Math.random()<.3&&Se.fxQueue.push({type:"sparks",x:m,y:f,z:x,data:{count:5,entityId:t}})}if(p=_*24,g=Math.sin(_*Math.PI)*.08,_>.35&&(n.opacity=Math.max(0,1-(_-.35)/.65)),_>=1&&(n.visible=!1,n.opacity=0,!d.craterSpawned)){d.craterSpawned=!0,ci.spawnDecal(i.worldX,i.worldY,"crater",d.footprintSize),Se.fxQueue.push({type:"smoke",x:i.worldX,y:i.worldY,z:1,data:{count:16,entityId:t}}),Se.fxQueue.push({type:"sparks",x:i.worldX,y:i.worldY,z:2,data:{count:10,entityId:t}}),a&&Eo.unregisterObject(a);const m=this.shadowMeshes.get(t);m&&(m.visible=!1)}}else{const _=Bt.get(t),m=bt.get(t),f=_?_.totalHp:m?m.currentHP:100,x=_?_.maxTotalHp:m?m.maxHP:100;if(f>0&&f<x*.5&&Math.random()<.035&&Ti.isPointInView(i.worldX,i.worldY)){const v=o?(o.height||40)*(o.visualScale||1):30,y=i.worldX+(Math.random()-fs)*6,w=i.worldY+(Math.random()-fs)*6,b=v*.5+Math.random()*(v*.3);Math.random()<.6?Se.fxQueue.push({type:"smoke",x:y,y:w,z:b,data:{count:2,entityId:t}}):Se.fxQueue.push({type:"fire",x:y,y:w,z:b,data:{entityId:t}})}}this.updateTransformAndPhysics(t,a,i,n,s,h,c,e,u,p,g),this.processHitFlash(t,l,e),a.visible=n.visible,l.uniforms.opacity.value=n.opacity}this.cleanupDestroyedEntities()}static BUILDING_MAX_FRAMES={1:14,2:14,3:14,4:13,5:14,b1:3,b2:3,b3:3,b4:2,res_bronze:3,res_sky:2,sky_artdeco:3,sky_biotech:3,sky_cyber:3,mega_titan:3,spaceship_hq:6,cyber_reactor:6,financial_tower:6,statue_liberty:2,pentagon_defense:4,hospital_civic:4,mall_shopping:4,school_civic:4};static updateZonalFrame(e,t,n){const i=Bt.get(e),s=bt.get(e),o=i?i.totalHp:s?s.currentHP:100,a=i?i.maxTotalHp:s?s.maxHP:100,{typeKey:l}=this.getTypeInfo(e,t.texturePrefix),c=this.BUILDING_MAX_FRAMES[l]??14,h=Math.max(0,Math.min(1,1-o/a)),u=Math.min(Math.floor(h*c),c);let d=this.displayFrameMap.get(e)??t.currentFrame??0;if(d<u){const p=Math.floor(d);d=Math.min(u,d+n*this.FRAME_STEP_SPEED),this.displayFrameMap.set(e,d);const g=Math.floor(d);if(t.currentFrame=g,g>p){const _=vt.get(e);_&&Se.fxQueue.push({type:"smoke",x:_.worldX,y:_.worldY,z:_.worldZ,data:{count:3,entityId:e}})}}}static getOrCreateSprite(e,t,n){let i=this.sprites.get(e);if(!i){const s=new qt({vertexShader:mM,fragmentShader:gM,uniforms:{mapA:{value:null},mapB:{value:null},mixRatio:{value:0},flashColor:{value:new ye(16777215)},flashIntensity:{value:0},opacity:{value:1}},transparent:!0,side:zt,depthWrite:!1,depthTest:!0});i=new Ae(this.sharedGeometry,s),i.castShadow=!1,i.receiveShadow=!1,i.rotation.y=mo;const o=uu(n.worldX,n.worldY);i.renderOrder=o,Le.cityGroup.add(i),Eo.registerObject(i,e),this.sprites.set(e,i);const{typeKey:a}=this.getTypeInfo(e,t.texturePrefix),l=oi[a];l&&No.createZonesForBuilding(e,i,l)}return i}static updateTextureAndOffset(e,t,n,i){let s=this.cachedTexture.get(e),o=this.cachedOffset.get(e);const a=this.lastFrameMap.get(e),{typeKey:l}=this.getTypeInfo(e,t.texturePrefix);let c=this.blendMap.get(e);if(!c){const h=`${t.texturePrefix}${t.currentFrame}`,u=Jt.getTexture(h);c={texA:u,texB:u,mixRatio:0,isBlending:!1},this.blendMap.set(e,c)}if(a!==t.currentFrame||s===void 0){const h=`${t.texturePrefix}${t.currentFrame}`,u=Jt.getTexture(h);o=Jt.getSpriteOffset(l,t.currentFrame),this.lastFrameMap.set(e,t.currentFrame),this.cachedTexture.set(e,u),this.cachedOffset.set(e,o),u&&c.texB!==u&&(c.texA=c.texB||u,c.texB=u,c.mixRatio=0,c.isBlending=!0)}return c.isBlending&&(c.mixRatio=Math.min(1,c.mixRatio+i*3.33),c.mixRatio>=1&&(c.texA=c.texB,c.isBlending=!1)),c.texA&&(n.uniforms.mapA.value=c.texA),c.texB&&(n.uniforms.mapB.value=c.texB),n.uniforms.mixRatio.value=c.mixRatio,{texture:c.texB,offset:o,typeKey:l}}static processHitEffects(e,t){let n=xi,i=xi,s=Yt,o=Yt;const a=this.hitFxMap.get(e);if(a){for(let l=a.length-1;l>=Yt;l--){const c=a[l];if(c.elapsed+=t,c.elapsed>=c.duration){a.splice(l,1);continue}const h=c.elapsed/c.duration;if(c.type==="squash"){const u=Math.exp(-h*6)*Math.cos(h*pM),p=Math.sin(h*Math.PI)*u;n*=xi+(c.scaleXMult-xi)*p,i*=xi+(c.scaleYMult-xi)*p}else if(c.type==="shudder"){const u=c.amplitude*Math.exp(-h*fM);s+=(Math.random()-fs)*rr*u,o+=(Math.random()-fs)*rr*u}}a.length===Yt&&this.hitFxMap.delete(e)}return{scaleXMult:n,scaleYMult:i,shudderDX:s,shudderDZ:o}}static updateTransformAndPhysics(e,t,n,i,s,o,a,l,c,h=Yt,u=Yt){const{def:d}=this.getTypeInfo(e,i.texturePrefix),p=d&&d.visualScale||1,g=d&&d.heightScale&&d.heightScale>1?d.heightScale:1,_=d&&d.width||16,m=o?o.w:a?.image?.width||lu,f=o?o.h:a?.image?.height||lu,x=(o?o.dx:-m/rr)+qv,v=o&&typeof o.y_max=="number"?o.y_max:f*.95,y=o&&typeof o.y_min=="number"?o.y_min:0,w=Math.min(m*.25,Math.max(16,(v-y)*.25)),b=v-w;let A;o&&typeof o.base_cy=="number"&&o.base_cy>=f*.55&&v-o.base_cy<=f*.45?A=o.base_cy:A=b,A+=Zv;const C=_*Math.SQRT2*p,T=C*(f/m)*Kv*g,M=C*c.scaleXMult,I=T*c.scaleYMult,U=(-x-m/rr)/m*C,F=-U*Xv,Y=U*Yv,V=n.worldX+F+c.shudderDX,W=n.worldY+Y+c.shudderDZ,$=(A-f/rr)/f,H=(n.worldZ||0)+$*T+jv,ne=this.collapseMap.get(e);if(ne){t.matrixAutoUpdate=!0,ne.tiltAngle+=l*eM;const ve=ne.tiltAngle*.3*(ne.impactVector.x>=0?1:-1);t.scale.set(M,I,xi),t.rotation.set(0,mo,ve),t.position.set(V,H-ne.tiltAngle*tM,W),ne.tiltAngle>=nM&&(this.crushBuildingsInTrajectory(n,ne.impactVector,du),this.collapseMap.delete(e),i.currentFrame=this.BUILDING_MAX_FRAMES[s]??iM)}else t.matrixAutoUpdate=!0,t.scale.set(M,I,xi),t.rotation.set(0,mo,u),t.position.set(V,H-h,W);const he=this.getOrCreateShadow(e,n,_*p);if(he){he.position.set(n.worldX+c.shudderDX*.2,.04,n.worldY+c.shudderDZ*.2),he.visible=i.visible;const ve=he.material;ne?ve.opacity=Math.max(0,.45-ne.tiltAngle*.5):ve.opacity=.45*(i.opacity??1)}}static processHitFlash(e,t,n){const i=this.flashMap.get(e);i?(t.uniforms.flashColor.value.setHex(i.color),t.uniforms.flashIntensity.value=.8,i.timeLeft-=n,i.timeLeft<=Yt&&(t.uniforms.flashIntensity.value=0,this.flashMap.delete(e))):t.uniforms.flashIntensity.value=0}static update3DBuilding(e,t,n,i,s,o){const a=this.getOrCreateModel3D(e,t,n,i,s);if(!a)return!1;const l=Bt.get(e),c=bt.get(e),h=l?l.totalHp:c?c.currentHP:100,u=l?l.maxTotalHp:c?c.maxHP:100,d=Math.max(0,Math.min(1,1-h/u)),p=this.mixers.get(e),g=this.animActions.get(e);let _=this.demoStateMap.get(e);const m=.8;if(h<=0&&!_&&(_={isDemolishing:!0,elapsedTime:this.partialDamageTimeMap.get(e)||0,maxDuration:g?g.maxDuration:4},this.demoStateMap.set(e,_),Se.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:30,data:{entityId:e,targetFrame:0}}),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}})),_&&_.isDemolishing&&p){if(_.elapsedTime<_.maxDuration){const b=_.elapsedTime;if(_.elapsedTime+=o,p.update(o),Math.random()<.25){const M=n.worldX+(Math.random()-.5)*30,I=n.worldY+(Math.random()-.5)*30,U=10+Math.random()*80,F=Math.random()>.5?"blast":"blast360";Se.fxQueue.push({type:F,x:M,y:I,z:U,data:{entityId:e,targetFrame:0}})}Math.random()<.15&&Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const A=b<1&&_.elapsedTime>=1,C=b<2.5&&_.elapsedTime>=2.5,T=b<3.8&&_.elapsedTime>=3.8;(A||C||T)&&(Se.applyCollateralDamage(e,n.worldX,n.worldY,64,25),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}})),Math.random()<.35&&Se.fxQueue.push({type:"smoke",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:3,entityId:e}}),Math.random()<.25&&Se.fxQueue.push({type:"sparks",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:4,entityId:e}}),Math.random()<.2&&Se.fxQueue.push({type:"debris",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:5,entityId:e,palette:[8947848,5592405,11184810]}}),b<_.maxDuration&&_.elapsedTime>=_.maxDuration&&(ci.spawnDecal(n.worldX,n.worldY,"crater",38),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:16}}),Se.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:4,data:{entityId:e,targetFrame:0}}))}}else if(p){const b=d*m;let A=this.partialDamageTimeMap.get(e)||0;A+=(b-A)*Math.min(1,o*5),this.partialDamageTimeMap.set(e,A),p.setTime(A),d>.25&&Math.random()<.12&&Se.fxQueue.push({type:"smoke",x:n.worldX+(Math.random()-.5)*15,y:n.worldY+(Math.random()-.5)*15,z:10+Math.random()*40,data:{count:2,entityId:e}}),d>.5&&Math.random()<.15&&Se.fxQueue.push({type:"sparks",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:15+Math.random()*50,data:{count:3,entityId:e}}),d>.75&&Math.random()<.18&&Se.fxQueue.push({type:"debris",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:20+Math.random()*60,data:{count:3,entityId:e,palette:[10066329,6710886]}})}const f=this.processHitEffects(e,o),x=a.userData.baseScale||1;a.scale.set(x*f.scaleXMult,x*f.scaleYMult,x*f.scaleXMult);const v=a.userData.basePosX??n.worldX,y=a.userData.basePosZ??n.worldY,w=a.userData.basePosY??0;return a.position.set(v+f.shudderDX,w,y+f.shudderDZ),this.processHitFlash3D(e,a,o),a.visible=t.visible,!0}static getOrCreateModel3D(e,t,n,i,s){let o=this.models3D.get(e);if(!o){const a=s.gltfKey||"skyscraper_demolition",l=Jt.getGLTF(a);if(!l)return null;o=bv(l.scene);const c=uu(n.worldX,n.worldY);o.renderOrder=c;const h=[];o.traverse(U=>{if(U.renderOrder=c,(U.name==="GroundPlane"||U.name.toLowerCase().includes("ground")||U.name.toLowerCase().includes("pixelground"))&&h.push(U),U.isMesh){const F=U;F.castShadow=!0,F.receiveShadow=!0,F.material&&(Array.isArray(F.material)?F.material:[F.material]).forEach(V=>{V.depthWrite=!0,V.depthTest=!0,V.side=zt,(V.isMeshStandardMaterial||V.isMeshPhysicalMaterial)&&(V.roughness=.6,V.metalness=.1,V.emissive&&(V.emissiveIntensity=.2))})}});for(const U of h)U.parent&&U.parent.remove(U);if(l.animations&&l.animations.length>0){const U=new cm(o),F=[];let Y=0;for(const V of l.animations){const W=U.clipAction(V);W.setLoop(ad,1),W.clampWhenFinished=!0,W.play(),F.push(W),V.duration>Y&&(Y=V.duration)}this.mixers.set(e,U),this.animActions.set(e,{actions:F,maxDuration:Y}),U.setTime(0)}o.updateMatrixWorld(!0);const u=new On().setFromObject(o),d=new L;u.getSize(d);const p=s&&s.visualScale||1,g=(s.height||180)*p,_=(s.width||64)*p,m=d.y>.1?g/d.y:1,f=_*Math.SQRT2,x=d.x>.1&&d.z>.1?f/Math.max(d.x,d.z):m,v=Math.min(m,x);o.scale.set(v,v,v),o.updateMatrixWorld(!0);const y=new On().setFromObject(o),w=y.min.y,b=n.worldX,A=n.worldY,C=-w;o.position.set(b,C,A),o.userData={baseScale:v,basePosX:b,basePosY:C,basePosZ:A},Le.cityGroup.add(o),Eo.registerObject(o,e),this.models3D.set(e,o);const T=Math.max(30,y.max.y-y.min.y),M=Math.max(20,Math.max(y.max.x-y.min.x,y.max.z-y.min.z)),I=oi[i]||oi.mega_titan;if(I){const U=new Ae(new vn(1,1),new ut({visible:!0,transparent:!0,opacity:0,depthWrite:!1}));U.position.set(n.worldX,T/2,n.worldY),U.scale.set(M,T,1),U.rotation.y=mo,U.userData={entity:e},Le.cityGroup.add(U),No.createZonesForBuilding(e,U,I),this.dummyHitSprites.set(e,U)}}return o}static processHitFlash3D(e,t,n){const i=this.flashMap.get(e);i&&(t.traverse(s=>{if(s.isMesh){const o=s;o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(i.color),l.emissiveIntensity=.8)})}}),i.timeLeft-=n,i.timeLeft<=Yt&&(t.traverse(s=>{if(s.isMesh){const o=s;o.material&&(Array.isArray(o.material)?o.material:[o.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(0),l.emissiveIntensity=0)})}}),this.flashMap.delete(e)))}static cleanupDestroyedEntities(){for(const[e,t]of this.sprites.entries())if(!ct.entities.has(e)||!Kt.has(e)){Le.cityGroup.remove(t),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose();const n=this.shadowMeshes.get(e);n&&(Le.groundGroup.remove(n),this.shadowMeshes.delete(e)),this.sprites.delete(e),this.hitFxMap.delete(e),this.flashMap.delete(e),this.lastFrameMap.delete(e),this.cachedTexture.delete(e),this.cachedOffset.delete(e),this.cachedTypeKey.delete(e),this.cachedDef.delete(e),this.displayFrameMap.delete(e),this.demoStateMap.delete(e),this.demo2DMap.delete(e),this.blendMap.delete(e)}for(const[e,t]of this.models3D.entries())if(!ct.entities.has(e)||!Kt.has(e)){Le.cityGroup.remove(t),t.traverse(s=>{if(s.isMesh){const o=s;o.geometry.dispose(),Array.isArray(o.material)?o.material.forEach(a=>a.dispose()):o.material.dispose()}});const n=this.dummyHitSprites.get(e);n&&(Le.cityGroup.remove(n),n.geometry.dispose(),this.dummyHitSprites.delete(e));const i=this.shadowMeshes.get(e);i&&(Le.groundGroup.remove(i),this.shadowMeshes.delete(e)),this.models3D.delete(e),this.mixers.delete(e),this.animActions.delete(e),this.hitFxMap.delete(e),this.flashMap.delete(e),this.cachedTypeKey.delete(e),this.cachedDef.delete(e),this.displayFrameMap.delete(e),this.demoStateMap.delete(e),this.demo2DMap.delete(e),this.blendMap.delete(e)}}static clearAll(){for(const[,e]of this.sprites.entries())Le.cityGroup.remove(e),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose();for(const[,e]of this.shadowMeshes.entries())Le.groundGroup.remove(e);this.shadowMeshes.clear();for(const[,e]of this.models3D.entries())Le.cityGroup.remove(e),e.traverse(t=>{if(t.isMesh){const n=t;n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()}});for(const[,e]of this.dummyHitSprites.entries())Le.cityGroup.remove(e),e.geometry.dispose();this.sprites.clear(),this.models3D.clear(),this.mixers.clear(),this.animActions.clear(),this.dummyHitSprites.clear(),this.hitFxMap.clear(),this.flashMap.clear(),this.lastFrameMap.clear(),this.cachedTexture.clear(),this.cachedOffset.clear(),this.cachedTypeKey.clear(),this.cachedDef.clear(),this.demo2DMap.clear()}}const vi={defaultTerrain:X.GRASS,zones:[{id:"airport",terrain:X.SIDEWALK,gx:0,gz:0,w:16,h:16},{id:"tech",terrain:X.PLAZA_STONE,gx:0,gz:16,w:16,h:21},{id:"sports",terrain:X.GRASS,gx:37,gz:0,w:27,h:16},{id:"park",terrain:X.GRASS,gx:37,gz:16,w:27,h:21},{id:"financial",terrain:X.PLAZA_STONE,gx:16,gz:0,w:21,h:16},{id:"financial",terrain:X.PLAZA_STONE,gx:16,gz:16,w:21,h:21},{id:"civic",terrain:X.PLAZA_STONE,gx:0,gz:37,w:16,h:27},{id:"residential",terrain:X.GRASS,gx:16,gz:37,w:21,h:27},{id:"docks",terrain:X.SIDEWALK,gx:48,gz:33,w:2,h:31},{id:"water",terrain:X.WATER,gx:50,gz:33,w:14,h:31}],roads:[{id:"ave_0",axis:"NS",gx:0,gz:0,length:64},{id:"ave_16",axis:"NS",gx:16,gz:0,length:64},{id:"ave_32",axis:"NS",gx:32,gz:0,length:64},{id:"ave_48",axis:"NS",gx:48,gz:0,length:64},{id:"st_0",axis:"EW",gx:0,gz:0,length:64},{id:"st_16",axis:"EW",gx:0,gz:16,length:64},{id:"st_32",axis:"EW",gx:0,gz:32,length:49},{id:"st_48",axis:"EW",gx:0,gz:48,length:49}],landmarks:[{key:"mega_titan",gx:22,gz:22,terrain:X.PLAZA_STONE,bufferTiles:2},{key:"spaceship_hq",gx:38,gz:22,terrain:X.PLAZA_STONE,bufferTiles:2},{key:"financial_tower",gx:22,gz:38,terrain:X.PLAZA_STONE,bufferTiles:2},{key:"cyber_reactor",gx:38,gz:38,terrain:X.PLAZA_STONE,bufferTiles:2},{key:"hospital_civic",gx:6,gz:22,terrain:X.SIDEWALK,bufferTiles:1},{key:"pentagon_defense",gx:6,gz:38,terrain:X.PLAZA_STONE,bufferTiles:1},{key:"mega_stadium",gx:38,gz:6,terrain:X.GRASS,bufferTiles:2},{key:"mall_shopping",gx:22,gz:6,terrain:X.SIDEWALK,bufferTiles:1},{key:"school_civic",gx:6,gz:54,terrain:X.PLAZA_STONE,bufferTiles:1},{key:"1",gx:54,gz:6,terrain:X.PLAZA_STONE,bufferTiles:1},{key:"2",gx:54,gz:22,terrain:X.SIDEWALK,bufferTiles:1},{key:"3",gx:22,gz:54,terrain:X.SIDEWALK,bufferTiles:1}],islands:[{gx:50,gz:33,w:14,h:31,platformGx:54,platformGz:42,platformW:5,platformH:5,landmark:"statue_liberty"}]};function _M(r,e){return r==="ANY"||e==="ANY"||r===e||r==="SIDEWALK"&&(e==="GRASS"||e==="BUILDING_LOT"||e==="PLAZA")||e==="SIDEWALK"&&(r==="GRASS"||r==="BUILDING_LOT"||r==="PLAZA")||r==="GRASS"&&e==="PLAZA"||e==="GRASS"&&r==="PLAZA"}function xM(r){const e=[{...r,rotation:0}],t=i=>({N:i.W,E:i.N,S:i.E,W:i.S});let n=r.sockets;for(let i=90;i<=270;i+=90)n=t(n),e.push({...r,id:`${r.id}_rot${i}`,name:`${r.name} (${i}°)`,sockets:n,rotation:i,roadAxis:r.roadAxis?r.roadAxis==="NS"?"EW":"NS":void 0});return e}const yM=[{id:"road_straight_ns",name:"Road Straight North-South",sockets:{N:"ROAD",E:"SIDEWALK",S:"ROAD",W:"SIDEWALK"},weight:50,terrainType:X.ROAD_STRAIGHT_NS,overlayType:te.ROAD,roadAxis:"NS"},{id:"road_straight_ew",name:"Road Straight East-West",sockets:{N:"SIDEWALK",E:"ROAD",S:"SIDEWALK",W:"ROAD"},weight:50,terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"},{id:"road_turn_ne",name:"Road Turn North-East",sockets:{N:"ROAD",E:"ROAD",S:"SIDEWALK",W:"SIDEWALK"},weight:15,terrainType:X.ROAD_INTERSECTION,overlayType:te.ROAD},{id:"road_t_north",name:"Road T-Intersection (North Branch)",sockets:{N:"ROAD",E:"ROAD",S:"SIDEWALK",W:"ROAD"},weight:10,terrainType:X.ROAD_INTERSECTION,overlayType:te.ROAD,isIntersection:!0},{id:"road_cross",name:"Road 4-Way Cross Intersection",sockets:{N:"ROAD",E:"ROAD",S:"ROAD",W:"ROAD"},weight:5,terrainType:X.ROAD_INTERSECTION,overlayType:te.ROAD,isIntersection:!0},{id:"road_deadend_n",name:"Road Dead-End North",sockets:{N:"ROAD",E:"SIDEWALK",S:"SIDEWALK",W:"SIDEWALK"},weight:6,terrainType:X.ROAD_STRAIGHT_NS,overlayType:te.ROAD},{id:"lot_cyber_spire",name:"Cyber Spire Skyscraper Lot",sockets:{N:"SIDEWALK",E:"BUILDING_LOT",S:"BUILDING_LOT",W:"SIDEWALK"},weight:25,terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_cyber"},{id:"lot_artdeco_titan",name:"Art Deco Titan Lot",sockets:{N:"BUILDING_LOT",E:"SIDEWALK",S:"SIDEWALK",W:"BUILDING_LOT"},weight:25,terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_artdeco"},{id:"lot_biotech_helix",name:"Biotech Helix Lab Lot",sockets:{N:"SIDEWALK",E:"GRASS",S:"SIDEWALK",W:"GRASS"},weight:25,terrainType:X.GRASS,overlayType:te.NONE,buildingType:"sky_biotech"},{id:"lot_brownstone_residential",name:"Residential Brownstone Lot",sockets:{N:"SIDEWALK",E:"SIDEWALK",S:"SIDEWALK",W:"SIDEWALK"},weight:30,terrainType:X.SIDEWALK,overlayType:te.NONE,buildingType:"b1"},{id:"lot_lowrise_shop",name:"Low-rise Shop Lot",sockets:{N:"SIDEWALK",E:"SIDEWALK",S:"SIDEWALK",W:"SIDEWALK"},weight:30,terrainType:X.SIDEWALK,overlayType:te.NONE,buildingType:"b2"},{id:"lot_midrise_apartments",name:"Mid-rise Apartments Lot",sockets:{N:"SIDEWALK",E:"GRASS",S:"SIDEWALK",W:"GRASS"},weight:25,terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b3"},{id:"lot_midrise_office",name:"Mid-rise Office Lot",sockets:{N:"SIDEWALK",E:"PLAZA",S:"SIDEWALK",W:"PLAZA"},weight:25,terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"b4"},{id:"civic_park",name:"Central Civic Park",sockets:{N:"SIDEWALK",E:"SIDEWALK",S:"SIDEWALK",W:"SIDEWALK"},weight:20,terrainType:X.GRASS,overlayType:te.NONE},{id:"plaza_stone",name:"Urban Plaza Stone",sockets:{N:"PLAZA",E:"PLAZA",S:"PLAZA",W:"PLAZA"},weight:15,terrainType:X.PLAZA_STONE,overlayType:te.NONE},{id:"water_deep",name:"Water Deep Canal",sockets:{N:"WATER",E:"WATER",S:"WATER",W:"WATER"},weight:12,terrainType:X.WATER,overlayType:te.NONE}];function vM(){const r=[];for(const[e,t]of Object.entries(et)){if((t.footprintTiles||1)>1)continue;const n=t.tier==="background",i=t.tier==="midground";r.push({id:`lot_auto_${e}`,name:`${t.name} Lot`,sockets:{N:"SIDEWALK",E:n?"BUILDING_LOT":"SIDEWALK",S:"SIDEWALK",W:n?"BUILDING_LOT":"SIDEWALK"},weight:n?25:i?28:30,terrainType:n||i?X.PLAZA_STONE:X.SIDEWALK,overlayType:te.NONE,buildingType:e})}return r}const MM=[...yM.flatMap(r=>r.id==="road_cross"||r.id==="civic_park"||r.id==="plaza_stone"||r.id==="water_deep"?[{...r,rotation:0}]:xM(r)),...vM()];function ps(r){return Array.from({length:8},()=>Array.from({length:8},()=>({terrainType:r,overlayType:r===X.SIDEWALK?te.SIDEWALK:te.NONE})))}const SM=[{id:"downtown_mega_titan",name:"Downtown Apex Mega-Titan Plaza",district:"downtown",weight:10,sockets:{N:"ROAD_MAIN",E:"PLAZA_STONE",S:"ROAD_MAIN",W:"PLAZA_STONE"},grid:(()=>{const r=ps(X.PLAZA_STONE);for(let e=0;e<8;e++)r[e][0]={terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"},r[e][7]={terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"};return r[2][2]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"mega_titan"},r[1][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_cyber"},r[6][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_artdeco"},r[1][6]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_biotech"},r[6][6]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"5"},r})()},{id:"downtown_commercial_spires",name:"Downtown Commercial High-Rise Spires",district:"downtown",weight:25,sockets:{N:"ROAD_MAIN",E:"ALLEY_PEDESTRIAN",S:"ROAD_MAIN",W:"ROAD_MAIN"},grid:(()=>{const r=ps(X.PLAZA_STONE);for(let e=0;e<8;e++)r[0][e]={terrainType:X.ROAD_STRAIGHT_NS,overlayType:te.ROAD,roadAxis:"NS"};for(let e=1;e<7;e++)r[4][e]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK};return r[1][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_cyber"},r[2][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_artdeco"},r[1][3]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"b4"},r[2][3]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"res_sky"},r[1][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"5"},r[2][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_biotech"},r[5][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"b3"},r[6][1]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"res_bronze"},r[5][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_artdeco"},r[6][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_cyber"},r})()},{id:"tech_research_campus",name:"Tech Research Campus Quad",district:"tech",weight:20,sockets:{N:"GREEN_PARK",E:"ROAD_MAIN",S:"ALLEY_PEDESTRIAN",W:"GREEN_PARK"},grid:(()=>{const r=ps(X.GRASS);for(let e=0;e<8;e++)r[7][e]={terrainType:X.ROAD_STRAIGHT_NS,overlayType:te.ROAD,roadAxis:"NS"};for(let e=2;e<=5;e++)for(let t=2;t<=5;t++)r[e][t]={terrainType:X.PLAZA_STONE,overlayType:te.NONE};return r[1][1]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"spaceship_hq"},r[5][2]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_biotech"},r[5][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"sky_cyber"},r[2][5]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b4"},r})()},{id:"residential_winding_courtyard",name:"Serpentine Residential Courtyard & Shops",district:"suburbs",weight:25,sockets:{N:"ALLEY_PEDESTRIAN",E:"GREEN_PARK",S:"ROAD_MAIN",W:"GREEN_PARK"},grid:(()=>{const r=ps(X.GRASS);for(let e=0;e<8;e++)r[e][7]={terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"};return r[3][0]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[3][1]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[4][2]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[4][3]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[3][4]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[3][5]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[3][6]={terrainType:X.SIDEWALK,overlayType:te.SIDEWALK},r[1][1]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b1"},r[2][1]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b2"},r[5][1]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"res_bronze"},r[6][1]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b3"},r[1][4]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"1"},r[5][4]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b2"},r[6][4]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b1"},r})()},{id:"sports_park_belt",name:"Sports Arena & Lush Park Belt",district:"sports",weight:20,sockets:{N:"ROAD_MAIN",E:"GREEN_PARK",S:"GREEN_PARK",W:"ROAD_MAIN"},grid:(()=>{const r=ps(X.GRASS);for(let e=0;e<8;e++)r[e][0]={terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"};for(let e=0;e<8;e++)r[0][e]={terrainType:X.ROAD_STRAIGHT_NS,overlayType:te.ROAD,roadAxis:"NS"};return r[0][0]={terrainType:X.ROAD_INTERSECTION,overlayType:te.ROAD,isIntersection:!0},r[2][2]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"mega_stadium"},r[6][3]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"res_sky"},r[6][5]={terrainType:X.GRASS,overlayType:te.NONE,buildingType:"b3"},r})()},{id:"waterfront_docks_promenade",name:"Harbor Waterfront Promenade & Warehouses",district:"harbor",weight:20,sockets:{N:"ROAD_MAIN",E:"WATER_CANAL",S:"WATER_CANAL",W:"PLAZA_STONE"},grid:(()=>{const r=ps(X.SIDEWALK);for(let e=0;e<8;e++)r[7][e]={terrainType:X.WATER,overlayType:te.NONE};for(let e=0;e<8;e++)r[e][7]={terrainType:X.WATER,overlayType:te.NONE};for(let e=0;e<7;e++)r[e][0]={terrainType:X.ROAD_STRAIGHT_EW,overlayType:te.ROAD,roadAxis:"EW"};return r[1][2]={terrainType:X.SIDEWALK,overlayType:te.NONE,buildingType:"4"},r[4][2]={terrainType:X.SIDEWALK,overlayType:te.NONE,buildingType:"4"},r[1][5]={terrainType:X.SIDEWALK,overlayType:te.NONE,buildingType:"b3"},r[4][5]={terrainType:X.PLAZA_STONE,overlayType:te.NONE,buildingType:"b4"},r})()}];class TM{gridDim;prototypes;superposition;maxAttempts;pinnedAnchors=new Map;constructor(e=64,t=MM,n=5){this.gridDim=e,this.prototypes=t,this.superposition=[],this.maxAttempts=n}pinAnchorCell(e,t,n){const i=this.prototypes.findIndex(s=>s.id===n||s.id.startsWith(n));i>=0&&e>=0&&e<this.gridDim&&t>=0&&t<this.gridDim&&this.pinnedAnchors.set(`${e},${t}`,i)}createRandom(e){let t=e%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}initGrid(){this.superposition=Array.from({length:this.gridDim},()=>Array.from({length:this.gridDim},()=>new Set));const e=Array.from({length:this.prototypes.length},(t,n)=>n);for(let t=0;t<this.gridDim;t++)for(let n=0;n<this.gridDim;n++){const i=`${t},${n}`;if(this.pinnedAnchors.has(i))this.superposition[t][n].add(this.pinnedAnchors.get(i));else for(const s of e)this.superposition[t][n].add(s)}}calculateEntropy(e,t,n){const i=this.superposition[e][t];if(i.size<=1)return 1/0;let s=0,o=0;for(const l of i){const c=this.prototypes[l]?.weight||1;s+=c,o+=c*Math.log2(c)}return s<=0?1/0:Math.log2(s)-o/s+n()*.001}findMinEntropyCell(e){let t=1/0,n=null;for(let i=0;i<this.gridDim;i++)for(let s=0;s<this.gridDim;s++)if(this.superposition[i][s].size>1){const a=this.calculateEntropy(i,s,e);a<t&&(t=a,n={gx:i,gz:s})}return n}collapseCell(e,t,n){try{const i=this.superposition[e][t];if(i.size===0)return i.add(0),!0;let s=0;const o=[];for(const c of i){const h=this.prototypes[c]?.weight||1;s+=h,o.push({idx:c,weight:h})}if(s<=0||o.length===0)return i.clear(),i.add(0),!0;let a=n()*s,l=o[0].idx;for(const c of o){if(a<c.weight){l=c.idx;break}a-=c.weight}return i.clear(),i.add(l),!0}catch(i){return console.warn(`[WFCSolver] Exception during collapseCell at (${e}, ${t}):`,i),this.superposition[e][t].clear(),this.superposition[e][t].add(0),!0}}propagateConstraints(e,t){try{const n=[{gx:e,gz:t}],i=new Set;i.add(`${e},${t}`);const s=[{dir:"N",dx:0,dz:-1,opp:"S"},{dir:"E",dx:1,dz:0,opp:"W"},{dir:"S",dx:0,dz:1,opp:"N"},{dir:"W",dx:-1,dz:0,opp:"E"}];for(;n.length>0;){const o=n.shift();i.delete(`${o.gx},${o.gz}`);const a=this.superposition[o.gx][o.gz];a.size===0&&a.add(0);for(const l of s){const c=o.gx+l.dx,h=o.gz+l.dz;if(c<0||c>=this.gridDim||h<0||h>=this.gridDim)continue;const u=this.superposition[c][h];if(u.size<=1)continue;const d=[];for(const p of u){const g=this.prototypes[p];if(!g)continue;const _=g.sockets[l.opp];let m=!1;for(const f of a){const x=this.prototypes[f];if(!x)continue;const v=x.sockets[l.dir];if(_M(v,_)){m=!0;break}}m||d.push(p)}if(d.length>0){for(const g of d)u.delete(g);u.size===0&&u.add(0);const p=`${c},${h}`;i.has(p)||(n.push({gx:c,gz:h}),i.add(p))}}}return!0}catch(n){return console.warn("[WFCSolver] Contradiction propagation exception:",n),!0}}solve(e=42){for(let n=0;n<this.maxAttempts;n++)try{const i=e+n*1337,s=this.createRandom(i);this.initGrid();for(const[h]of this.pinnedAnchors.entries()){const[u,d]=h.split(",");this.propagateConstraints(parseInt(u,10),parseInt(d,10))}const o=Math.floor(this.gridDim/2),a=Math.floor(this.gridDim/2),l=this.prototypes.findIndex(h=>h.id==="road_cross");for(l>=0&&!this.pinnedAnchors.has(`${o},${a}`)&&(this.superposition[o][a].clear(),this.superposition[o][a].add(l),this.propagateConstraints(o,a));;){const h=this.findMinEntropyCell(s);if(!h)break;this.collapseCell(h.gx,h.gz,s),this.propagateConstraints(h.gx,h.gz)}const c=[];for(let h=0;h<this.gridDim;h++){const u=[];for(let d=0;d<this.gridDim;d++){const p=this.superposition[h][d],g=p.size>0?Array.from(p)[0]:0;u.push({gx:h,gz:d,prototype:this.prototypes[g]||this.prototypes[0]})}c.push(u)}return c}catch(i){console.warn(`[WFCSolver] Exception on attempt #${n+1}:`,i)}const t=[];for(let n=0;n<this.gridDim;n++){const i=[];for(let s=0;s<this.gridDim;s++)i.push({gx:n,gz:s,prototype:this.prototypes[0]});t.push(i)}return t}solveMacroGrid(e=8,t=SM,n=42){const i=this.createRandom(n),s=Array.from({length:e},()=>Array.from({length:e},()=>new Set));for(let a=0;a<e;a++)for(let l=0;l<e;l++){let c;a>=2&&a<=5&&l>=2&&l<=5?c="downtown":a<=3&&l<=3?c="tech":a>=4&&l<=3?c="sports":a<=3&&l>=4?c="suburbs":c="harbor";for(let h=0;h<t.length;h++){const u=t[h];(u.district===c||u.district==="any")&&s[a][l].add(h)}if(s[a][l].size===0)for(let h=0;h<t.length;h++)s[a][l].add(h)}const o=[];for(let a=0;a<e;a++){o[a]=[];for(let l=0;l<e;l++){const c=Array.from(s[a][l]);let h=0;c.forEach(p=>{h+=t[p].weight});let u=c[0]||0,d=i()*(h||1);for(const p of c){const g=t[p].weight;if(d<=g){u=p;break}d-=g}o[a][l]=t[u]||t[0]}}return console.log(`[WFCSolver] Successfully solved ${e}x${e} Macro-Block WFC Grid!`),o}}class EM{static planCityLayout(e,t,n,i,s){const o=[],a=[],l=(h,u,d,p,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<p+g;m++){const f=h+_,x=u+m;if(f<0||f>=e||x<0||x>=e||t[f][x])return!1}return!0},c=(h,u,d,p,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<p+g;m++){const f=h+_,x=u+m;f>=0&&f<e&&x>=0&&x<e&&(t[f][x]=!0)}};if(s)for(let h=0;h<e;h++)for(let u=0;u<e;u++){if(t[h][u])continue;const p=s[h][u]?.prototype;if(p&&p.buildingType){const g=p.buildingType,_=et[g]||et[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=m>1||f>1?1:0;l(h,u,m,f,x)&&(c(h,u,m,f,x),o.push({gx:h,gz:u,w:m,h:f,typeKey:g,lotType:"wfc_cluster"}))}}for(const h of vi.zones){const u=n[h.id];if(!u||u.length===0)continue;const d=[];for(let f=h.gx;f<h.gx+h.w&&f<e;f++)for(let x=h.gz;x<h.gz+h.h&&x<e;x++)t[f][x]||d.push({gx:f,gz:x});const p=h.gx*1337+h.gz*7331;d.sort((f,x)=>(f.gx*97+f.gz*193+p)%100-(x.gx*97+x.gz*193+p)%100);const g=i[h.id]??.95,_=Math.floor(d.length*Math.min(.98,g));let m=0;for(const{gx:f,gz:x}of d){if(m>=_)break;if(t[f][x])continue;const v=Math.abs(f*97+x*193+p+m*13)%u.length;let y=u[v],w=et[y]||et[3],b=w.footprintTiles??1,A=w.footprintTiles??1,C=b>1||A>1?1:0;l(f,x,b,A,C)||(y=u.find(M=>(et[M]?.footprintTiles??1)===1)||"b1",w=et[y]||et[3],b=1,A=1,C=0),l(f,x,b,A,C)&&(c(f,x,b,A,C),o.push({gx:f,gz:x,w:b,h:A,typeKey:y,lotType:"urban_cluster"}),m++)}}for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(!t[h][u]){const d=vi.zones.find(m=>h>=m.gx&&h<m.gx+m.w&&u>=m.gz&&u<m.gz+m.h);if(d&&d.terrain===X.WATER)continue;const p=d?n[d.id]||["b1","b2","b3","b4"]:["b1","b2","b3","b4"],g=Math.abs(h*1337+u*7331)%p.length;let _=p[g];(et[_]?.footprintTiles??1)>1&&(_=p.find(m=>(et[m]?.footprintTiles??1)===1)||"b1"),l(h,u,1,1,0)&&(c(h,u,1,1,0),o.push({gx:h,gz:u,w:1,h:1,typeKey:_,lotType:"dense_infill"}))}return{lots:o,bufferTerrain:a}}}const bM={airport:["b4","sky_biotech","4","b3","sky_cyber","b1","b2"],financial:["sky_cyber","sky_artdeco","sky_biotech","5","b4","mega_titan","b3","res_sky"],tech:["sky_cyber","sky_biotech","b4","5","sky_artdeco","res_sky","b3","b2"],civic:["res_sky","b3","b4","res_bronze","1","2","b1","b2"],park:["b1","b2","b3","res_bronze"],sports:["mega_stadium","b3","b4","res_sky","b1","b2"],residential:["b1","b2","res_bronze","b3","res_sky","b1","b2"],docks:["b1","b2","4","b3","b4","b1","b2"]},AM={airport:1,financial:1,tech:1,civic:1,park:1,sports:1,residential:1,docks:1};class Tl{static generateCity(){be.init();const e=be.GRID_DIM,t=Array.from({length:e},()=>Array(e).fill(!1)),n=(g,_,m,f,x=1)=>{for(let v=-x;v<m+x;v++)for(let y=-x;y<f+x;y++){const w=g+v,b=_+y;w>=0&&w<e&&b>=0&&b<e&&(t[w][b]=!0)}},i=(g,_,m,f)=>{for(let x=0;x<m;x++)for(let v=0;v<f;v++){const y=g+x,w=_+v;if(y>=e||w>=e||t[y][w])return!1}return!0},s=(g,_,m,f,x,v=0)=>{for(let y=-v;y<m+v;y++)for(let w=-v;w<f+v;w++){const b=be.getCell(g+y,_+w);b&&b.overlayType!==te.ROAD&&(b.terrainType=x)}},o=(g,_,m,f="dense",x=0)=>{const v=et[m]||et[3],y=v.footprintTiles??1,w=v.footprintTiles??1;if(!i(g,_,y,w))return!1;n(g,_,y,w,x);const b=ni.computeLotWorldPos(g,_,y,w),A=ct.createEntity(),C=ni.calculateAndRegisterLot(A,b.x,b.z,m,f);return this.spawnBuildingEntity(A,C,m),!0};let a=0;for(const g of vi.landmarks){const _=et[g.key]||et[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=g.bufferTiles??1;s(g.gx,g.gz,m,f,g.terrain,x),o(g.gx,g.gz,g.key,"landmark",x)&&a++}for(const g of vi.islands){s(g.platformGx,g.platformGz,g.platformW,g.platformH,X.PLAZA_STONE);for(let _=0;_<g.platformW;_++)for(let m=0;m<g.platformH;m++){const f=g.platformGx+_,x=g.platformGz+m;f>=0&&f<e&&x>=0&&x<e&&(t[f][x]=!1)}if(g.landmark){const _=et[g.landmark]||et[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=g.platformGx+Math.floor((g.platformW-m)/2),v=g.platformGz+Math.floor((g.platformH-f)/2);o(x,v,g.landmark,"landmark",0)&&a++}}for(const g of vi.zones)for(let _=g.gx;_<g.gx+g.w&&_<e;_++)for(let m=g.gz;m<g.gz+g.h&&m<e;m++){const f=be.getCell(_,m);f&&f.overlayType!==te.ROAD&&(f.terrainType=g.terrain),g.terrain===X.WATER&&(t[_][m]=!0)}const l=new Set,c=new Set;for(const g of vi.roads){g.axis==="NS"?l.add(g.gx):c.add(g.gz);for(let _=0;_<g.length;_++){const m=g.axis==="NS"?g.gx:g.gx+_,f=g.axis==="NS"?g.gz+_:g.gz;m<0||m>=e||f<0||f>=e||(be.setRoad(m,f,g.axis),t[m][f]=!0)}for(const _ of g.waypoints??[]){const m=g.axis==="NS"?g.gx:g.gx+_.cellOffset,f=g.axis==="NS"?g.gz+_.cellOffset:g.gz,x=be.getCell(m,f);x&&be.roadWaypoints.push({worldX:x.worldX,worldZ:x.worldZ,name:_.name,nextWaypoints:[]})}}for(const g of l)for(const _ of c)be.setIntersection(g,_);for(const g of l)for(let _=0;_<e;_++)be.setSidewalkIfNotRoad(g-1,_),be.setSidewalkIfNotRoad(g+1,_);for(const g of c)for(let _=0;_<e;_++)be.setSidewalkIfNotRoad(_,g-1),be.setSidewalkIfNotRoad(_,g+1);const u=new TM(e).solve(42);if(u)for(let g=0;g<e;g++)for(let _=0;_<e;_++){if(t[g][_])continue;const f=u[g][_].prototype;be.setTerrain(g,_,f.terrainType),f.overlayType===te.ROAD&&(f.isIntersection?be.setIntersection(g,_):be.setRoad(g,_,f.roadAxis||"NS"),t[g][_]=!0)}const d=EM.planCityLayout(e,t,bM,AM,u);for(const g of d.bufferTerrain){const _=be.getCell(g.gx,g.gz);_&&_.overlayType!==te.ROAD&&(_.terrainType=g.terrain)}const p=(g,_,m,f="dense")=>{const x=et[m]||et[3],v=x.footprintTiles??1,y=x.footprintTiles??1,w=ni.computeLotWorldPos(g,_,v,y),b=ct.createEntity(),A=ni.calculateAndRegisterLot(b,w.x,w.z,m,f);return this.spawnBuildingEntity(b,A,m),!0};for(const g of d.lots)p(g.gx,g.gz,g.typeKey,g.lotType)&&a++;console.log(`[CityGenerator] ${a} buildings | ${vi.roads.length} road segs | ${be.roadWaypoints.length} waypoints | ${vi.islands.length} island(s)`),Ri.rebuild()}static spawnBuildingEntity(e,t,n){const i=et[n]||et[3];vt.set(e,{worldX:t.centerWorldX,worldY:t.centerWorldZ,worldZ:0});const s=ql(i),o=oi[n]||oi[3],a=Math.max(5,Math.round(s/o.length)),l=a*o.length;bt.set(e,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const h of o)c.set(h.id,{id:h.id,level:0,hp:a,maxHp:a});Bt.set(e,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Do.set(e,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),Kt.set(e,{meshId:`building_${e}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}class ms{static isShowcaseMode=!1;static showcaseEntities=[];static SHOWCASE_KEYS=["1","2","3","4","b1","b2","b3","b4","res_bronze","res_sky","5","sky_artdeco","sky_biotech","sky_cyber","mega_titan","spaceship_hq","cyber_reactor","financial_tower","statue_liberty","pentagon_defense"];static toggleMode(){this.setMode(this.isShowcaseMode?"city":"showcase")}static setMode(e){e==="showcase"!==this.isShowcaseMode&&(this.isShowcaseMode=e==="showcase",this.clearWorld(),this.isShowcaseMode?this.generateShowcase():(Tl.generateCity(),Po.finalizeMap()))}static clearWorld(){const e=[];for(const t of ct.entities)Un.has(t)||e.push(t);for(const t of e)ct.destroyEntity(t),vt.delete(t),bt.delete(t),Bt.delete(t),Do.delete(t),Mv.delete(t),Kt.delete(t);gt.clearAll(),No.clearAll(),be.init(),Ri.clear(),this.showcaseEntities=[]}static generateShowcase(){const e=this.SHOWCASE_KEYS,t=7,n=90,i=110,s=-540/2,o=-40;for(let a=0;a<e.length;a++){const l=e[a],c=Math.floor(a/t),h=a%t,u=s+h*n,d=o+c*i,p=ct.createEntity(),g=et[l]||et[3];vt.set(p,{worldX:u,worldY:d,worldZ:0});const _=ql(g),m=oi[l]||oi[3],f=Math.max(5,Math.round(_/m.length)),x=f*m.length;bt.set(p,{currentHP:x,maxHP:x,state:0});const v=new Map;for(const y of m)v.set(y.id,{id:y.id,level:0,hp:f,maxHp:f});Bt.set(p,{zones:v,totalHp:x,maxTotalHp:x,globalDamageLevel:0}),Do.set(p,{width:g.width*g.visualScale,length:g.length*g.visualScale,height:g.height,active:!0}),Kt.set(p,{meshId:`building_${p}`,texturePrefix:`building_${l}_stage_`,currentFrame:0,visible:!0,opacity:1}),ni.calculateAndRegisterLot(p,u,d,l,"showcase"),this.showcaseEntities.push({entity:p,typeKey:l,def:g,worldX:u,worldY:d})}Po.finalizeMap(),Ri.rebuild();for(const a of Un){const l=vt.get(a);l&&(l.worldX=0,l.worldY=-120,l.worldZ=75)}}static resetAllHP(){for(const e of this.showcaseEntities){const t=bt.get(e.entity),n=Bt.get(e.entity),i=Kt.get(e.entity);if(t&&(t.currentHP=t.maxHP,t.state=0),n){n.totalHp=n.maxTotalHp,n.globalDamageLevel=0;for(const s of n.zones.values())s.hp=s.maxHp,s.level=0}i&&(i.currentFrame=0)}}static damageAll(e=25){for(const t of this.showcaseEntities){const n=Bt.get(t.entity);if(n)for(const i of n.zones.values()){const s=i.maxHp*e/100;Se.applyZonalDamage(t.entity,i.id,s,{x:.5,y:.5})}}}static getShowcaseBuildings(){return this.showcaseEntities}}class Ei{static nextId=1;static canisters=[];static bomblets=[];static CLUSTER_COOLDOWN_TIME=2.5;static clusterCooldown=0;static init(){this.canisters=[],this.bomblets=[],this.clusterCooldown=0,ct.addSystem(this.tick.bind(this))}static tick(e){this.clusterCooldown>0&&(this.clusterCooldown=Math.max(0,this.clusterCooldown-e));for(const n of ct.entities)if(Un.has(n)){const i=As.get(n);i&&(i.clusterCooldown=this.clusterCooldown,i.clusterMaxCooldown=this.CLUSTER_COOLDOWN_TIME);break}const t=85;for(let n=this.canisters.length-1;n>=0;n--){const i=this.canisters[n];i.vz-=t*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,Math.random()<.4&&Se.fxQueue.push({type:"smoke",x:i.x,y:i.y,z:i.z,data:{count:1}}),i.z<=i.splitAltitude&&(this.splitCanister(i),this.canisters.splice(n,1))}for(let n=this.bomblets.length-1;n>=0;n--){const i=this.bomblets[n];i.vz-=t*1.1*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.rotation+=i.rotSpeed*e,Math.random()<.3&&Se.fxQueue.push({type:"sparks",x:i.x,y:i.y,z:i.z,data:{count:2}}),i.z<=0&&(this.detonateBomblet(i),this.bomblets.splice(n,1))}}static fireClusterBomb(e,t){if(this.clusterCooldown>0)return!1;this.clusterCooldown=this.CLUSTER_COOLDOWN_TIME;const n=t.x-e.x,i=t.y-e.z,s=e.y,o=Math.max(.6,Math.sqrt(2*s/85)),a=n/(o*1.5),l=i/(o*1.5);return this.canisters.push({id:this.nextId++,x:e.x,y:e.z,z:e.y,vx:a,vy:l,vz:-15,targetX:t.x,targetY:t.y,splitAltitude:Math.max(25,e.y*.45)}),mn.playClusterLaunchSFX(),!0}static splitCanister(e){mn.playClusterSplitSFX(),Se.fxQueue.push({type:"blast",x:e.x,y:e.y,z:e.z,data:{entityId:0,targetFrame:0}}),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const t=6,n=28;for(let i=0;i<t;i++){const s=i/t*Math.PI*2+(Math.random()-.5)*.3,o=n*(.8+Math.random()*.4),a=e.vx*.4+Math.cos(s)*o,l=e.vy*.4+Math.sin(s)*o,c=8+Math.random()*8;this.bomblets.push({id:this.nextId++,x:e.x,y:e.y,z:e.z,vx:a,vy:l,vz:c,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*15})}}static detonateBomblet(e){Se.applyCollateralDamage(0,e.x,e.y,45,50),ci.spawnDecal(e.x,e.y,"crater",28),Se.fxQueue.push({type:"blast360",x:e.x,y:e.y,z:2,data:{entityId:0,targetFrame:0}}),Se.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}}),Se.fxQueue.push({type:"debris",x:e.x,y:e.y,z:0,data:{count:18,palette:[8930338,11162931,5592405,2236962]}}),Se.fxQueue.push({type:"dust",x:e.x,y:e.y,z:0,data:{count:12}}),Se.fxQueue.push({type:"fire",x:e.x,y:e.y,z:0,data:{}}),mn.playExplosionSFX(1.3)}static isClusterReady(){return this.clusterCooldown<=0}static getClusterCooldownRatio(){return this.clusterCooldown/this.CLUSTER_COOLDOWN_TIME}}const An=14,fu=2.2,pu=.45,mu=2.2,wM=75,RM=62463,CM=17510,IM=9684477,LM=3900150,PM=65535;class Uo{static mothershipGroup=null;static playerEntity=null;static groundShadowRing=null;static aimReticleGroup=null;static reticleRingMat=null;static reticleDotMat=null;static aimTargetX=0;static aimTargetZ=0;static lastX=0;static lastZ=0;static currentTiltX=0;static currentTiltZ=0;static currentShadowY=.1;static tick(e){if(this.playerEntity===null){for(const t of ct.entities)if(Un.has(t)){this.playerEntity=t,this.initMesh();const n=vt.get(t);n&&(this.lastX=n.worldX,this.lastZ=n.worldY,this.aimTargetX=n.worldX,this.aimTargetZ=n.worldY);break}}if(this.playerEntity!==null){const t=vt.get(this.playerEntity);if(t&&(t.worldZ<40&&(t.worldZ=wM),this.mothershipGroup)){const n=(t.worldX-this.lastX)/Math.max(.001,e),i=(t.worldY-this.lastZ)/Math.max(.001,e);this.lastX=t.worldX,this.lastZ=t.worldY;const s=Math.max(-.25,Math.min(.25,-n*.003)),o=Math.max(-.25,Math.min(.25,i*.003)),a=1-Math.exp(-10*e);this.currentTiltX+=(o-this.currentTiltX)*a,this.currentTiltZ+=(s-this.currentTiltZ)*a;const l=Math.sin(performance.now()*.0025)*1.8;if(this.mothershipGroup.position.set(t.worldX,t.worldZ+l,t.worldY),this.mothershipGroup.rotation.y+=e*.3,this.mothershipGroup.rotation.x=this.currentTiltX,this.mothershipGroup.rotation.z=this.currentTiltZ,this.groundShadowRing){let u=.1;const d=Ri.queryRadius(t.worldX,t.worldY,16);for(const _ of d){const m=vt.get(_);if(!m)continue;const f=Math.abs(m.worldX-t.worldX),x=Math.abs(m.worldY-t.worldY);if(f<14&&x<14){const v=gt.getSpriteScale(_),y=v?Math.min(60,v.y*.7):20;y>u&&(u=y)}}const p=1-Math.exp(-12*e);this.currentShadowY+=(u-this.currentShadowY)*p,this.groundShadowRing.position.set(t.worldX,this.currentShadowY+.1,t.worldY),this.groundShadowRing.rotation.z+=e*.4;const g=this.groundShadowRing.material;g&&(g.opacity=.35+Math.sin(performance.now()*.004)*.12)}const c=Math.max(-80,Math.min(80,(this.aimTargetX-t.worldX)*.22)),h=Math.max(-80,Math.min(80,(this.aimTargetZ-t.worldY)*.22));Ti.setTarget(t.worldX+c,t.worldY+h)}}}static initMesh(){this.mothershipGroup=new yt,this.mothershipGroup.name="MothershipUFO";const e=new Bn(An*.4,An,An*.35,32),t=new Rt({color:RM,emissive:CM,emissiveIntensity:.6,roughness:.2,metalness:.8,depthTest:!0,depthWrite:!0}),n=new Ae(e,t);n.scale.set(fu,pu,mu),n.castShadow=!0,n.renderOrder=0,this.mothershipGroup.add(n);const i=new Ar(An*.65,24,16,0,Math.PI*2,0,Math.PI*.5),s=new Rt({color:IM,emissive:LM,emissiveIntensity:.9,transparent:!0,opacity:.85,roughness:.1,depthTest:!0,depthWrite:!1}),o=new Ae(i,s);o.position.y=An*.15,o.scale.set(fu*.7,pu*1.5,mu*.7),o.renderOrder=1,this.mothershipGroup.add(o);const a=new Bn(An*.3,An*.1,An*.1,16),l=new ut({color:PM,depthTest:!0,depthWrite:!0}),c=new Ae(a,l);c.position.y=-An*.18,c.renderOrder=0,this.mothershipGroup.add(c),Le.ufoScene.add(this.mothershipGroup);const h=new Us(An*.8,An*1.2,32),u=new ut({color:62463,side:zt,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1});this.groundShadowRing=new Ae(h,u),this.groundShadowRing.rotation.x=-Math.PI/2,this.groundShadowRing.renderOrder=800,Le.playerGroup.add(this.groundShadowRing),this.aimReticleGroup=new yt,this.aimReticleGroup.name="AimTargetReticle";const d=new Us(4.2,5.4,32);this.reticleRingMat=new ut({color:62463,side:zt,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1});const p=new Ae(d,this.reticleRingMat);p.rotation.x=-Math.PI/2,p.renderOrder=900,this.aimReticleGroup.add(p);for(let m=0;m<4;m++){const f=m*Math.PI/2,x=new vn(.8,2.5),v=new Ae(x,this.reticleRingMat);v.rotation.x=-Math.PI/2,v.position.set(Math.cos(f)*6.5,0,Math.sin(f)*6.5),v.rotation.z=-f,v.renderOrder=900,this.aimReticleGroup.add(v)}const g=new Bl(.9,16);this.reticleDotMat=new ut({color:16777215,side:zt,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1});const _=new Ae(g,this.reticleDotMat);_.rotation.x=-Math.PI/2,_.renderOrder=901,this.aimReticleGroup.add(_),Le.playerGroup.add(this.aimReticleGroup)}static updateAimTarget(e,t,n,i){if(this.aimTargetX=e,this.aimTargetZ=n,this.aimReticleGroup){this.aimReticleGroup.position.set(e,t+.15,n),this.aimReticleGroup.rotation.y+=.04;const s=i?16724838:62463;this.reticleRingMat&&this.reticleRingMat.color.getHex()!==s&&this.reticleRingMat.color.setHex(s)}}static getPlayerMeshPosition(){return this.mothershipGroup?this.mothershipGroup.position.clone():null}}const gu=25,_u=0,xu=120,DM=.1;class bi{static groundPlane=new Jn(new L(0,1,0),0);static midHeightPlane=new Jn(new L(0,1,0),-30);static raycaster=new Xl;static pointerVector=new _e;static groundIntersectPoint=new L;static midIntersectPoint=new L;static tempProj=new L;static targetPos={x:0,y:0};static initializedTarget=!1;static mouseFollowMode=!1;static fKeyWasDown=!1;static lastHoverCheckTime=0;static cachedHoveredHit=null;static cachedHoveredEntity=null;static cachedFallbackPoint=null;static HOVER_CHECK_INTERVAL=.033;static init(){ct.addSystem(this.tick.bind(this))}static tick(e){for(const t of ct.entities)if(Un.has(t)){const n=vt.get(t),i=As.get(t);if(!n||!i)continue;this.initializedTarget||(this.targetPos.x=n.worldX,this.targetPos.y=n.worldY,this.initializedTarget=!0);let s=0,o=0;(He.isKeyDown("KeyW")||He.isKeyDown("ArrowUp")||He.isKeyDown("w"))&&(s-=1,o-=1),(He.isKeyDown("KeyS")||He.isKeyDown("ArrowDown")||He.isKeyDown("s"))&&(s+=1,o+=1),(He.isKeyDown("KeyA")||He.isKeyDown("ArrowLeft")||He.isKeyDown("a"))&&(s-=1,o+=1),(He.isKeyDown("KeyD")||He.isKeyDown("ArrowRight")||He.isKeyDown("d"))&&(s+=1,o-=1);const a=He.joystickVector;(a.x!==0||a.y!==0)&&(s+=a.y+a.x,o+=a.y-a.x),He.isKeyDown("KeyF")||He.isKeyDown("f")?this.fKeyWasDown||(this.mouseFollowMode=!this.mouseFollowMode,this.fKeyWasDown=!0):this.fKeyWasDown=!1;const l=Math.sqrt(s*s+o*o);if(l>0){const x=He.isKeyDown("ShiftLeft")||He.isKeyDown("ShiftRight")?xu*1.6:xu;this.targetPos.x+=s/l*x*e,this.targetPos.y+=o/l*x*e,this.targetPos.x=Math.max(-480,Math.min(480,this.targetPos.x)),this.targetPos.y=Math.max(-480,Math.min(480,this.targetPos.y))}else if(this.mouseFollowMode){const f=this.getMouseGroundPosition();f&&(this.targetPos.x=Math.max(-480,Math.min(480,f.x)),this.targetPos.y=Math.max(-480,Math.min(480,f.z)))}const c=1-Math.exp(-10*e);if(n.worldX+=(this.targetPos.x-n.worldX)*c,n.worldY+=(this.targetPos.y-n.worldY)*c,this.lastHoverCheckTime+=e,this.lastHoverCheckTime>=this.HOVER_CHECK_INTERVAL){if(this.lastHoverCheckTime=0,this.cachedHoveredHit=No.getHitZone(Le.camera),this.cachedFallbackPoint=null,this.cachedHoveredHit)this.cachedHoveredEntity=this.cachedHoveredHit.entity;else{const f=He.getMouseNDC();this.pointerVector.set(f.x,f.y);const x=this.findBestBuildingNearCursor(this.pointerVector,Le.camera);x?(this.cachedHoveredEntity=x.entity,this.cachedFallbackPoint=x.point):this.cachedHoveredEntity=null}if(this.cachedHoveredEntity!==null){const f=Kt.get(this.cachedHoveredEntity),x=Bt.get(this.cachedHoveredEntity),v=bt.get(this.cachedHoveredEntity),y=f?f.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/):null,w=y?y[1]:"3",b=et[w]||et[3],A=x?x.totalHp:v?v.currentHP:100,C=x?x.maxTotalHp:v?v.maxHP:100,T=f?f.currentFrame:0;Ai.updateTargetInspector({name:b.name,key:w,hp:A,maxHp:C,frame:T})}else Ai.updateTargetInspector(null)}const h=this.getMouseGroundPosition()||new L(n.worldX,0,n.worldY);let u=h.x,d=.1,p=h.z,g=!1;if(this.cachedHoveredHit)u=this.cachedHoveredHit.point.x,d=this.cachedHoveredHit.point.y,p=this.cachedHoveredHit.point.z,g=!0;else if(this.cachedHoveredEntity!==null){const f=this.cachedFallbackPoint||gt.getVisualCenter(this.cachedHoveredEntity)||gt.getSpritePosition(this.cachedHoveredEntity);f&&(u=f.x,d=f.y,p=f.z,g=!0)}if(Uo.updateAimTarget(u,d,p,g),this.tempProj.set(u,d,p).project(Le.camera),this.tempProj.z<=1){const f=(this.tempProj.x*.5+.5)*window.innerWidth,x=(-this.tempProj.y*.5+.5)*window.innerHeight;Ai.setTargetReticle({x:f,y:x})}else Ai.setTargetReticle(null);He.isKeyDown("Digit1")||He.isKeyDown("1")?i.currentSelected="laser":(He.isKeyDown("Digit2")||He.isKeyDown("2"))&&(i.currentSelected="cluster");const _=Uo.getPlayerMeshPosition()||new L(n.worldX,75,n.worldY);if(He.isSecondaryPointerDown()&&Ei.isClusterReady()&&Ei.fireClusterBomb(_,{x:h.x,y:h.z}),He.isPointerDown()||He.isKeyDown("Space")){if(i.currentSelected==="cluster")Ei.isClusterReady()&&Ei.fireClusterBomb(_,{x:h.x,y:h.z});else if(i.heatLevel<=_u){let f=null,x=Rn.CENTER,v={x:.5,y:.5},y=null;if(He.isKeyDown("Space"))f=this.findClosestBuildingNear(n.worldX,n.worldY,1/0),f&&(y=gt.getVisualCenter(f)||gt.getSpritePosition(f));else if(this.cachedHoveredHit)f=this.cachedHoveredHit.entity,x=this.cachedHoveredHit.zone,v=this.cachedHoveredHit.uvCenter,y=this.cachedHoveredHit.point;else if(this.cachedHoveredEntity!==null)f=this.cachedHoveredEntity,x=Rn.CENTER,v={x:.5,y:.5},y=this.cachedFallbackPoint||gt.getVisualCenter(f)||gt.getSpritePosition(f);else{const w=He.getMouseNDC();this.pointerVector.set(w.x,w.y);const b=this.findBestBuildingNearCursor(this.pointerVector,Le.camera);b?(f=b.entity,x=Rn.CENTER,v={x:.5,y:.5},y=b.point):h&&(y=h)}f!==null&&y!==null?(Se.applyZonalDamage(f,x,gu,v),i.heatLevel=i.fireRate,Se.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:y.x,ty:y.y,tz:y.z}})):y!==null&&(i.heatLevel=i.fireRate,gn.checkTargetHit(y.x,y.z,14,gu),Er.applyDamageInRadius(y.x,y.z,8),Se.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:y.x,ty:y.y,tz:y.z}}))}}i.heatLevel>_u&&(i.heatLevel-=e)}}static findBestBuildingNearCursor(e,t){this.raycaster.setFromCamera(e,t);const n=this.raycaster.ray.intersectPlane(this.midHeightPlane,this.midIntersectPoint),i=n?this.midIntersectPoint.x:0,s=n?this.midIntersectPoint.z:0,o=Ri.queryRadius(i,s,64);if(o.length===0)return null;let a=null,l=DM;for(let c=0;c<o.length;c++){const h=o[c],u=bt.get(h);if(!u||u.currentHP<=0)continue;const d=gt.getVisualCenter(h)||gt.getSpritePosition(h);if(!d)continue;this.tempProj.copy(d).project(t);const p=this.tempProj.x-e.x,g=this.tempProj.y-e.y;let _=Math.hypot(p,g);const m=Kt.get(h),{def:f}=gt.getTypeInfo(h,m?m.texturePrefix:"");f&&(f.tier==="foreground"||f.width<=32||f.height&&f.height<=60)?_*=.6:f&&f.tier==="landmark"&&(_*=1.25),_<l&&(l=_,a={entity:h,point:d})}return a}static getMouseGroundPosition(){const e=He.getMouseNDC();return this.pointerVector.set(e.x,e.y),this.raycaster.setFromCamera(this.pointerVector,Le.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.groundIntersectPoint)}static findClosestBuildingNear(e,t,n){return Ri.findClosest(e,t,n)}}const yu=0,vu=100,yi=.5,Mu=60,Su=25,Tu=100,NM=25,UM=.8,OM=12;function go(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class Ai{static scoreElement;static flashOverlay;static controlPanel;static modeToggleButton;static showcaseTools;static targetInfoPanel;static labelsContainer;static targetReticle;static labelElements=new Map;static scoreValEl=null;static highValEl=null;static comboBadgeEl=null;static destructValEl=null;static destructBarEl=null;static shieldValEl=null;static shieldBarEl=null;static hullValEl=null;static hullBarEl=null;static weaponBtn1=null;static weaponBtn2=null;static clusterOverlayEl=null;static autopilotBtn=null;static popupsContainer=null;static currentDestructionPercent=0;static tempVec=new L;static init(){const e=document.createElement("div");e.style.position="fixed",e.style.top="14px",e.style.left="14px",e.style.right="14px",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="flex-start",e.style.color="white",e.style.fontFamily="system-ui, -apple-system, sans-serif",e.style.zIndex="1000",e.style.pointerEvents="none",this.scoreElement=document.createElement("div"),this.scoreElement.style.background="rgba(15, 23, 42, 0.82)",this.scoreElement.style.backdropFilter="blur(10px)",this.scoreElement.style.padding="8px 14px",this.scoreElement.style.borderRadius="12px",this.scoreElement.style.border="1px solid rgba(255, 255, 255, 0.12)",this.scoreElement.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.5)",this.scoreElement.style.pointerEvents="auto",this.scoreElement.style.minWidth="210px",this.scoreElement.style.maxWidth="280px",this.scoreElement.innerHTML=`
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
          <button id="autopilot-btn" title="Toggle Flight Mode [F]" style="padding: 4px 8px; border-radius: 6px; font-size: 10px; font-weight: 700; border: 1px solid #38bdf8; background: rgba(56, 189, 248, 0.15); color: #38bdf8; cursor: pointer;">
            🛸 [F]
          </button>
        </div>
      </div>
    `,e.appendChild(this.scoreElement),this.scoreValEl=this.scoreElement.querySelector("#hud-score-val"),this.highValEl=this.scoreElement.querySelector("#hud-high-val"),this.comboBadgeEl=this.scoreElement.querySelector("#hud-combo-badge"),this.destructValEl=this.scoreElement.querySelector("#hud-destruct-val"),this.destructBarEl=this.scoreElement.querySelector("#hud-destruct-bar"),this.shieldValEl=this.scoreElement.querySelector("#hud-shield-val"),this.shieldBarEl=this.scoreElement.querySelector("#hud-shield-bar"),this.hullValEl=this.scoreElement.querySelector("#hud-hull-val"),this.hullBarEl=this.scoreElement.querySelector("#hud-hull-bar"),this.weaponBtn1=this.scoreElement.querySelector("#weapon-btn-1"),this.weaponBtn2=this.scoreElement.querySelector("#weapon-btn-2"),this.clusterOverlayEl=this.scoreElement.querySelector("#cluster-cooldown-overlay"),this.autopilotBtn=this.scoreElement.querySelector("#autopilot-btn"),this.autopilotBtn&&(this.autopilotBtn.onclick=()=>{bi.mouseFollowMode=!bi.mouseFollowMode,this.autopilotBtn&&this.autopilotBtn.blur()}),this.weaponBtn1&&(this.weaponBtn1.onclick=()=>{for(const s of ct.entities)if(Un.has(s)){const o=As.get(s);o&&(o.currentSelected="laser");break}}),this.weaponBtn2&&(this.weaponBtn2.onclick=()=>{for(const s of ct.entities)if(Un.has(s)){const o=As.get(s);o&&(o.currentSelected="cluster");break}}),this.popupsContainer=document.createElement("div"),this.popupsContainer.style.position="fixed",this.popupsContainer.style.top="0",this.popupsContainer.style.left="0",this.popupsContainer.style.width="100%",this.popupsContainer.style.height="100%",this.popupsContainer.style.pointerEvents="none",this.popupsContainer.style.zIndex="999",document.body.appendChild(this.popupsContainer),this.controlPanel=document.createElement("div"),this.controlPanel.style.display="flex",this.controlPanel.style.gap="8px",this.controlPanel.style.pointerEvents="auto";const t=typeof window<"u"&&(window.location.search.includes("debug=1")||window.location.search.includes("showcase=1"));this.modeToggleButton=document.createElement("button"),this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.setAttribute("aria-pressed","false"),this.modeToggleButton.style.padding="8px 14px",this.modeToggleButton.style.borderRadius="10px",this.modeToggleButton.style.border="1px solid rgba(59, 130, 246, 0.5)",this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.color="white",this.modeToggleButton.style.fontWeight="600",this.modeToggleButton.style.fontSize="12px",this.modeToggleButton.style.cursor="pointer",this.modeToggleButton.style.boxShadow="0 4px 14px rgba(59, 130, 246, 0.4)",this.modeToggleButton.style.transition="all 0.2s ease",this.modeToggleButton.innerText="🔬 SHOWCASE",this.modeToggleButton.onclick=()=>{ms.toggleMode(),this.updateModeUI(),this.modeToggleButton.blur()},this.showcaseTools=document.createElement("div"),this.showcaseTools.style.display="none",this.showcaseTools.style.gap="8px";const n=this.createActionButton("🔄 Repair","#059669","Repair all showcase buildings",()=>ms.resetAllHP()),i=this.createActionButton("💥 -25%","#dc2626","Damage all showcase buildings by 25 percent",()=>ms.damageAll(NM));this.showcaseTools.appendChild(n),this.showcaseTools.appendChild(i),t&&(this.controlPanel.appendChild(this.modeToggleButton),this.controlPanel.appendChild(this.showcaseTools),e.appendChild(this.controlPanel)),document.body.appendChild(e),this.targetInfoPanel=document.createElement("div"),this.targetInfoPanel.style.position="fixed",this.targetInfoPanel.style.bottom="20px",this.targetInfoPanel.style.left="50%",this.targetInfoPanel.style.transform="translateX(-50%)",this.targetInfoPanel.style.background="rgba(15, 23, 42, 0.88)",this.targetInfoPanel.style.backdropFilter="blur(10px)",this.targetInfoPanel.style.padding="8px 18px",this.targetInfoPanel.style.borderRadius="12px",this.targetInfoPanel.style.border="1px solid rgba(59, 130, 246, 0.5)",this.targetInfoPanel.style.color="white",this.targetInfoPanel.style.fontFamily="system-ui, monospace",this.targetInfoPanel.style.fontSize="13px",this.targetInfoPanel.style.pointerEvents="none",this.targetInfoPanel.style.display="none",this.targetInfoPanel.style.boxShadow="0 8px 24px rgba(0,0,0,0.5)",document.body.appendChild(this.targetInfoPanel),this.labelsContainer=document.createElement("div"),this.labelsContainer.style.position="fixed",this.labelsContainer.style.top="0",this.labelsContainer.style.left="0",this.labelsContainer.style.width="100vw",this.labelsContainer.style.height="100vh",this.labelsContainer.style.pointerEvents="none",this.labelsContainer.style.zIndex="900",document.body.appendChild(this.labelsContainer),this.flashOverlay=document.createElement("div"),this.flashOverlay.style.position="fixed",this.flashOverlay.style.top="0",this.flashOverlay.style.left="0",this.flashOverlay.style.width="100vw",this.flashOverlay.style.height="100vh",this.flashOverlay.style.backgroundColor="white",this.flashOverlay.style.opacity="0",this.flashOverlay.style.pointerEvents="none",this.flashOverlay.style.transition="opacity 0.08s ease-out",this.flashOverlay.style.zIndex="9999",document.body.appendChild(this.flashOverlay),this.targetReticle=document.createElement("div"),this.targetReticle.style.position="fixed",this.targetReticle.style.pointerEvents="none",this.targetReticle.style.display="none",this.targetReticle.style.width="48px",this.targetReticle.style.height="48px",this.targetReticle.style.transform="translate(-50%, -50%)",this.targetReticle.style.zIndex="950",this.targetReticle.style.transition="left 0.04s ease-out, top 0.04s ease-out",this.targetReticle.innerHTML=`
      <div style="position:absolute; top:0; left:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:0; right:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; left:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:50%; left:50%; width:4px; height:4px; transform:translate(-50%, -50%); border-radius:50%; background:#38bdf8; box-shadow:0 0 6px #38bdf8;"></div>
    `,document.body.appendChild(this.targetReticle)}static setTargetReticle(e){if(this.targetReticle){if(!e){this.targetReticle.style.display="none";return}this.targetReticle.style.left=`${e.x}px`,this.targetReticle.style.top=`${e.y}px`,this.targetReticle.style.display="block"}}static createActionButton(e,t,n,i){const s=document.createElement("button");return s.setAttribute("aria-label",n),s.style.padding="10px 18px",s.style.borderRadius="12px",s.style.border="none",s.style.background=t,s.style.color="white",s.style.fontWeight="600",s.style.fontSize="14px",s.style.cursor="pointer",s.style.transition="transform 0.15s ease",s.innerText=e,s.onclick=()=>{i(),s.blur()},s.onmouseover=()=>s.style.transform="scale(1.05)",s.onmouseout=()=>s.style.transform="scale(1.0)",s.onfocus=()=>{s.style.transform="scale(1.05)",s.style.outline="3px solid rgba(255, 255, 255, 0.8)",s.style.outlineOffset="2px"},s.onblur=()=>{s.style.transform="scale(1.0)",s.style.outline="none"},s}static updateModeUI(){const e=ms.isShowcaseMode;this.modeToggleButton.setAttribute("aria-pressed",e?"true":"false"),e?(this.modeToggleButton.innerText="🌆 RETURN TO CITY MODE",this.modeToggleButton.setAttribute("aria-label","Return to city mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #059669 0%, #10b981 100%)",this.modeToggleButton.style.borderColor="rgba(16, 185, 129, 0.5)",this.showcaseTools.style.display="flex"):(this.modeToggleButton.innerText="🔬 ENTER TEST SHOWCASE MODE",this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.borderColor="rgba(59, 130, 246, 0.5)",this.showcaseTools.style.display="none",this.clearLabels())}static updateTargetInspector(e){if(!e){this.targetInfoPanel.style.display="none";return}this.targetInfoPanel.style.display="block";const t=Math.round(e.hp/e.maxHp*vu),n=t>Mu?"#10b981":t>Su?"#f59e0b":"#ef4444",i=go(e.name),s=go(e.key);this.targetInfoPanel.innerHTML=`
      <div style="font-weight: bold; font-size: 13px; margin-bottom: 3px; color: #60a5fa; letter-spacing: 0.5px;">🎯 TARGET: ${i} <span style="opacity: 0.7; font-weight: normal; font-size: 12px;">[${s}]</span></div>
      <div style="font-size: 12px;">HP: <span style="color: ${n}; font-weight: bold;">${e.hp}/${e.maxHp} (${t}%)</span> · Frame: <span style="color: #f472b6; font-weight: bold;">#${e.frame}</span></div>
    `}static tick(e){if(!ms.isShowcaseMode)this.clearLabels();else{const i=ms.getShowcaseBuildings(),s=new Set;for(const o of i){s.add(o.entity);let a=this.labelElements.get(o.entity);a||(a=document.createElement("div"),a.style.position="absolute",a.style.transform="translate(-50%, -100%)",a.style.background="rgba(15, 23, 42, 0.85)",a.style.border="1px solid rgba(255, 255, 255, 0.2)",a.style.borderRadius="8px",a.style.padding="4px 8px",a.style.color="#e2e8f0",a.style.fontFamily="monospace",a.style.fontSize="11px",a.style.whiteSpace="nowrap",a.style.pointerEvents="none",a.style.boxShadow="0 4px 12px rgba(0,0,0,0.4)",this.labelsContainer.appendChild(a),this.labelElements.set(o.entity,a));const l=o.def.height*UM;if(this.tempVec.set(o.worldX,l,o.worldY),this.tempVec.project(e),this.tempVec.z>1){a.style.display="none";continue}const c=(this.tempVec.x*yi+yi)*window.innerWidth,h=(-this.tempVec.y*yi+yi)*window.innerHeight;a.style.left=`${c}px`,a.style.top=`${h-OM}px`,a.style.display="block";const u=bt.get(o.entity),d=Kt.get(o.entity),p=Bt.get(o.entity),g=p?p.totalHp:u?u.currentHP:Tu,_=p?p.maxTotalHp:u?u.maxHP:Tu,m=Math.max(yu,Math.round(g/_*vu)),f=d?d.currentFrame:yu,x=m>Mu?"#34d399":m>Su?"#fbbf24":"#f87171",v=go(o.def.name),y=go(o.typeKey);a.innerHTML=`<b>${v}</b> <span style="color:#94a3b8;">[${y}]</span><br/><span style="color:${x};">HP ${m}%</span> · Fr #${f}`}for(const[o,a]of this.labelElements.entries())s.has(o)||(this.labelsContainer.removeChild(a),this.labelElements.delete(o))}if(this.scoreValEl&&(this.scoreValEl.innerText=sn.getScore().toLocaleString()),this.highValEl&&(this.highValEl.innerText=sn.getHighScore().toLocaleString()),this.comboBadgeEl){const i=sn.getCombo();i>1?(this.comboBadgeEl.style.display="block",this.comboBadgeEl.innerText=`x${i} COMBO!`,this.comboBadgeEl.style.background=i>=4?"#ef4444":i>=3?"#f59e0b":"#3b82f6",this.comboBadgeEl.style.boxShadow=`0 0 10px ${i>=4?"#ef4444":"#f59e0b"}`):this.comboBadgeEl.style.display="none"}if(this.destructValEl&&this.destructBarEl&&(this.destructValEl.innerText=`${this.currentDestructionPercent.toFixed(1)}%`,this.destructBarEl.style.width=`${Math.min(100,this.currentDestructionPercent)}%`),this.shieldValEl&&this.shieldBarEl){const i=Math.max(0,Math.round(gn.playerShield));this.shieldValEl.innerText=`${i}%`,this.shieldBarEl.style.width=`${i}%`}if(this.hullValEl&&this.hullBarEl){const i=Math.max(0,Math.round(gn.playerHull));this.hullValEl.innerText=`${i}%`,this.hullBarEl.style.width=`${i}%`,this.hullBarEl.style.background=i>50?"#4ade80":i>25?"#facc15":"#ef4444"}let t="laser";for(const i of ct.entities)if(Un.has(i)){const s=As.get(i);s&&(t=s.currentSelected);break}const n=t==="laser";if(this.weaponBtn1&&(this.weaponBtn1.style.background=n?"#0284c7":"#1e293b",this.weaponBtn1.style.borderColor=n?"#38bdf8":"rgba(255,255,255,0.2)",this.weaponBtn1.style.color=n?"#ffffff":"#94a3b8"),this.weaponBtn2&&(this.weaponBtn2.style.background=n?"#1e293b":"#d97706",this.weaponBtn2.style.borderColor=n?"rgba(255,255,255,0.2)":"#f59e0b",this.weaponBtn2.style.color=n?"#94a3b8":"#ffffff"),this.clusterOverlayEl&&(this.clusterOverlayEl.style.height=`${Ei.getClusterCooldownRatio()*100}%`),this.autopilotBtn&&(bi.mouseFollowMode?(this.autopilotBtn.innerText="⚡ [F] AUTOPILOT",this.autopilotBtn.style.background="rgba(16, 185, 129, 0.25)",this.autopilotBtn.style.borderColor="#10b981",this.autopilotBtn.style.color="#34d399",this.autopilotBtn.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.4)"):(this.autopilotBtn.innerText="🛸 [F] TWIN-STICK",this.autopilotBtn.style.background="rgba(56, 189, 248, 0.12)",this.autopilotBtn.style.borderColor="rgba(56, 189, 248, 0.4)",this.autopilotBtn.style.color="#38bdf8",this.autopilotBtn.style.boxShadow="none")),this.popupsContainer){let i="";for(const s of sn.popups)if(this.tempVec.set(s.worldX,s.worldZ,s.worldY),this.tempVec.project(e),this.tempVec.z<=1){const o=(this.tempVec.x*yi+yi)*window.innerWidth,a=(-this.tempVec.y*yi+yi)*window.innerHeight,l=Math.max(0,1-s.elapsed/s.duration);i+=`<div style="position: absolute; left: ${o}px; top: ${a}px; transform: translate(-50%, -50%); font-size: 16px; font-weight: 800; color: ${s.color}; text-shadow: 0 2px 8px rgba(0,0,0,0.9); opacity: ${l}; pointer-events: none; white-space: nowrap;">${s.text}</div>`}this.popupsContainer.innerHTML=i}}static clearLabels(){for(const e of this.labelElements.values())this.labelsContainer.removeChild(e);this.labelElements.clear()}static triggerFlash(){this.flashOverlay&&(this.flashOverlay.style.transition="none",this.flashOverlay.style.opacity="0.5",this.flashOverlay.offsetWidth,this.flashOverlay.style.transition="opacity 0.1s ease-out",this.flashOverlay.style.opacity="0")}static updateScore(e){this.currentDestructionPercent=e,this.destructValEl&&this.destructBarEl&&(this.destructValEl.innerText=`${e.toFixed(1)}%`,this.destructBarEl.style.width=`${Math.min(100,e)}%`)}}const gs=0,_s=0,FM=.25,BM=16777215,zM=.1,Eu=1;class bu{mesh;material;textures;currentFrame=_s;speed=FM;frameDurations;loop=!0;timer=gs;playing=!0;active=!0;onFrameChange;onComplete;constructor(e){this.textures=e,this.material=new Md({map:this.textures[_s]||null,color:BM,transparent:!0,alphaTest:zM}),this.mesh=new Sp(this.material)}reset(e,t,n){this.textures=e,this.currentFrame=_s,this.timer=gs,this.loop=t,this.frameDurations=n,this.playing=!0,this.active=!0,this.material.map=e[_s]||null,this.material.needsUpdate=!0,this.onComplete=void 0,this.onFrameChange=void 0,this.mesh.visible=!0}gotoFrame(e){this.textures.length!==gs&&(this.currentFrame=Math.max(_s,Math.min(e,this.textures.length-Eu)),this.timer=gs,this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0)}play(){this.playing=!0}stop(){this.playing=!1}tick(e){if(!this.active||!this.playing||this.textures.length===gs)return;if(this.timer+=e,this.timer<gs){this.mesh.visible=!1;return}else this.mesh.visible||(this.mesh.visible=!0);const t=this.frameDurations?.[this.currentFrame]??this.speed;if(this.timer>=t){if(this.timer-=t,this.currentFrame++,this.currentFrame>=this.textures.length)if(this.loop)this.currentFrame=_s;else{this.currentFrame=this.textures.length-Eu,this.playing=!1,this.active=!1,this.onComplete&&this.onComplete();return}this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0,this.onFrameChange&&this.onFrameChange(this.currentFrame)}}destroy(){this.active=!1,this.material.dispose()}}const mt=0,Au=.5,or=.5,wu=11,Ru=7,Cu=10,kM=50,HM=8,GM=8,VM=16,Iu=2,WM=3,Lu=1.2,XM=.15,Pu=18,YM=2,Du=3,KM=2,qM=7,ZM=6,jM=.05,$M=.1,QM=.5,JM=14,eS=3,tS=18,nS=1,Nu=1,iS=1.5,sS=.2,rS=1,oS=.8,Uu=80,aS=[.02,.02,.02,.04,.08,.08,.08,.08,.08,.08,.08],Ou=[.02,.02,.02,.04,.08,.08,.08],lS=[.01,.01,.02,.02,.02,.02,.02,.02,.02,.02];class Fu{static activeSprites=[];static inactiveSprites=[];static lightPool=[];static shockwavePool=[];static laserPool=[];static sharedShockwaveGeo;static sharedLaserHitGeo;static sharedLaserHitMat;static sharedLaserOuterMat;static sharedLaserCoreMat;static scratchBuildingPos=new L;static scratchTargetPos=new L;static blastTextures=[];static blast360Textures=[];static fireTextures=[];static getBlastTextures(){if(this.blastTextures.length<wu){this.blastTextures=[];for(let e=mt;e<wu;e++){const t=Jt.getTexture(`fx_blast_${e}`);t&&this.blastTextures.push(t)}}return this.blastTextures}static getBlast360Textures(){if(this.blast360Textures.length<Ru){this.blast360Textures=[];for(let e=mt;e<Ru;e++){const t=Jt.getTexture(`fx_blast360_${e}`);t&&this.blast360Textures.push(t)}}return this.blast360Textures}static getFireTextures(){if(this.fireTextures.length<Cu){this.fireTextures=[];for(let e=mt;e<Cu;e++){const t=Jt.getTexture(`fx_fire_${e}`);t&&this.fireTextures.push(t)}}return this.fireTextures}static preloadTextureArrays(){this.getBlastTextures(),this.getBlast360Textures(),this.getFireTextures();for(let e=mt;e<kM;e++)this.inactiveSprites.push(new bu([]));this.initLightPool(),this.initShockwavePool(),this.initLaserPool()}static initLightPool(){for(let e=mt;e<GM;e++){const t=new Pd(16755268,0,20);t.visible=!1,Le.effectsGroup.add(t),this.lightPool.push({light:t,elapsed:mt,duration:.15,active:!1})}}static initShockwavePool(){this.sharedShockwaveGeo=new Us(.8,1.4,32);for(let e=mt;e<VM;e++){const t=new ut({color:62463,side:zt,transparent:!0,opacity:.95,blending:Hi}),n=new Ae(this.sharedShockwaveGeo,t);n.rotation.x=-Math.PI/2,n.visible=!1,Le.effectsGroup.add(n),this.shockwavePool.push({mesh:n,material:t,elapsed:mt,duration:.35,maxRadius:28,active:!1})}}static initLaserPool(){this.sharedLaserOuterMat=new Mr({color:65535,linewidth:3,transparent:!0,opacity:.9,blending:Hi,depthTest:!1,depthWrite:!1}),this.sharedLaserCoreMat=new Mr({color:16777215,linewidth:1,transparent:!0,opacity:1,blending:Hi,depthTest:!1,depthWrite:!1}),this.sharedLaserHitGeo=new Us(.3,1.8,16),this.sharedLaserHitMat=new ut({color:65535,side:zt,transparent:!0,opacity:1,blending:Hi,depthTest:!1,depthWrite:!1});for(let e=mt;e<HM;e++){const t=new Float32Array(6),n=new Ht(t,3),i=new Pt;i.setAttribute("position",n);const s=new Sr(i,this.sharedLaserOuterMat);s.renderOrder=600,s.visible=!1;const o=new Sr(i,this.sharedLaserCoreMat);o.renderOrder=601,o.visible=!1;const a=new Ae(this.sharedLaserHitGeo,this.sharedLaserHitMat);a.renderOrder=602,a.visible=!1,Le.effectsGroup.add(s),Le.effectsGroup.add(o),Le.effectsGroup.add(a),this.laserPool.push({positions:t,posAttr:n,geometry:i,outerLine:s,coreLine:o,impactMesh:a,elapsed:mt,duration:Uu/1e3,active:!1})}}static getSprite(e,t,n){let i=this.inactiveSprites.pop();return i||(i=new bu(e)),i.reset(e,t,n),i}static tick(e){for(;Se.fxQueue.length>mt;){const t=Se.fxQueue.shift();if(t){if(mn.processEvent(t),t.type!=="shake"){if(t.type==="laser"){const n=Ti.isPointInView(t.x,t.z),i=Ti.isPointInView(t.data.tx,t.data.tz);if(!n&&!i)continue}else if(!Ti.isPointInView(t.x,t.y))continue}if(t.type==="blast"||t.type==="blast360")this.spawnExplosion(t.x,t.y,t.z,t.type,t.data);else if(t.type==="blast_zonal")this.spawnZonalExplosion(t.x,t.y,t.z,t.data);else if(t.type==="fire")this.spawnFire(t.x,t.y,t.z,t.data);else if(t.type==="shake")Ti.addShake(t.data.intensity,.2);else if(t.type==="hit_fx")gt.applyHitFX(t.data.entityId,t.data.intensity);else if(t.type==="debris"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ei.spawnBrickBurst(n.x,n.y,n.z,t.data.count,t.data.palette)}else if(t.type==="dust"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ei.spawnDustCloud(n.x,n.y,n.z,t.data.count)}else if(t.type==="smoke"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ei.spawnSmokePlume(n.x,n.y,n.z,t.data.count)}else if(t.type==="sparks"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ei.spawnSparkBurst(n.x,n.y,n.z,t.data.count)}else t.type==="laser"&&this.spawnLaser(t.x,t.y,t.z,t.data.tx,t.data.ty,t.data.tz)}}for(let t=mt;t<this.lightPool.length;t++){const n=this.lightPool[t];if(n.active)if(n.elapsed+=e,n.elapsed>=n.duration)n.active=!1,n.light.visible=!1;else{const i=1-n.elapsed/n.duration;n.light.intensity=i*10}}for(let t=mt;t<this.shockwavePool.length;t++){const n=this.shockwavePool[t];if(n.active)if(n.elapsed+=e,n.elapsed>=n.duration)n.active=!1,n.mesh.visible=!1;else{const i=n.elapsed/n.duration,s=Math.max(.1,i*n.maxRadius);n.mesh.scale.set(s,s,1),n.material.opacity=(1-i)*.8}}for(let t=mt;t<this.laserPool.length;t++){const n=this.laserPool[t];n.active&&(n.elapsed+=e,n.elapsed>=n.duration&&(n.active=!1,n.outerLine.visible=!1,n.coreLine.visible=!1,n.impactMesh.visible=!1))}for(let t=this.activeSprites.length-1;t>=mt;t--){const n=this.activeSprites[t];n.tick(e),n.active||(Le.effectsGroup.remove(n.mesh),this.inactiveSprites.push(n),this.activeSprites.splice(t,1))}}static getBuildingPos3D(e,t,n,i){if(e!==void 0){const s=gt.getSpritePosition(e);if(s)return s}return this.scratchBuildingPos.set(t,i,n)}static spawnImpactLight(e,t,n,i=.15){if(this.lightPool.length===mt)return;let s=this.lightPool.find(o=>!o.active);s||(s=this.lightPool.reduce((o,a)=>a.elapsed>o.elapsed?a:o,this.lightPool[0])),s.light.position.set(e,t,n),s.light.intensity=10,s.light.visible=!0,s.elapsed=mt,s.duration=i,s.active=!0}static spawnShockwave(e,t,n,i=.35,s=28){if(this.shockwavePool.length===mt)return;let o=this.shockwavePool.find(a=>!a.active);o||(o=this.shockwavePool.reduce((a,l)=>l.elapsed>a.elapsed?l:a,this.shockwavePool[0])),o.mesh.position.set(e,t,n),o.mesh.scale.set(.1,.1,1),o.material.opacity=.8,o.mesh.visible=!0,o.elapsed=mt,o.duration=i,o.maxRadius=s,o.active=!0}static spawnExplosion(e,t,n,i,s){const o=i==="blast"?this.getBlastTextures():this.getBlast360Textures();if(o.length===mt)return;const a=i==="blast"?[...aS]:[...Ou],l=this.getSprite(o,!1,a),c=this.scratchTargetPos.set(e,n+Lu,t);if(s&&s.entityId!==void 0){const u=gt.getSpritePosition(s.entityId),d=gt.getSpriteScale(s.entityId);u&&(c.copy(u),d&&(c.y-=d.y*XM))}l.mesh.position.copy(c),l.mesh.scale.set(Pu,Pu,1),Le.effectsGroup.add(l.mesh),this.activeSprites.push(l),this.spawnImpactLight(c.x,c.y,c.z,.15),this.spawnShockwave(c.x,.05,c.z,.35,28),ei.spawnBrickBurst(c.x,c.y,c.z,15),ei.spawnSparkBurst(c.x,c.y,c.z,10),ci.spawnDecal(c.x,c.z,"scorch",12);for(let u=mt;u<YM;u++){const d=this.getSprite(o,!1,a),p=(Math.random()-or)*Du,g=(Math.random()-or)*Du,_=(Math.random()-or)*KM;d.mesh.position.set(c.x+p,c.y+_,c.z+g);const m=qM+Math.random()*ZM;d.mesh.scale.set(m,m,1),d.timer=-(jM+Math.random()*$M),Le.effectsGroup.add(d.mesh),this.activeSprites.push(d)}const h=i==="blast"?Iu:WM;l.onFrameChange=u=>{u===h&&s&&s.entityId!==void 0&&s.targetFrame!==void 0&&Se.executeTextureSwap(s.entityId,s.targetFrame)}}static spawnZonalExplosion(e,t,n,i){const s=this.blast360Textures;if(s.length===mt)return;const o=[...Ou],a=this.getSprite(s,!1,o),l=this.scratchTargetPos.set(e,n+Lu,t);if(i&&i.entityId!==void 0){const d=gt.getSpritePosition(i.entityId),p=gt.getSpriteScale(i.entityId);if(d&&p&&i.uvCenter){l.copy(d);const g=i.uvCenter.x-Au,_=Au-i.uvCenter.y;l.x+=g*p.x,l.y+=_*p.y,l.z+=QM}}a.mesh.position.copy(l);const c=JM,h=i.level?c+i.level*eS:tS;a.mesh.scale.set(h,h,1),Le.effectsGroup.add(a.mesh),this.activeSprites.push(a);const u=Iu;a.onFrameChange=d=>{d===u&&i&&i.entityId!==void 0&&i.targetFrame!==void 0&&Se.executeTextureSwap(i.entityId,i.targetFrame)}}static spawnFire(e,t,n,i){const s=this.getFireTextures();if(s.length===mt)return;const o=this.getSprite(s,!1,[...lS]),a=this.scratchTargetPos.set(e,n+nS,t);if(i&&i.entityId!==void 0){const c=gt.getSpritePosition(i.entityId);c&&(a.copy(c),a.x+=(Math.random()-or)*Nu,a.y+=(Math.random()-sS)*iS,a.z+=(Math.random()-or)*Nu)}o.mesh.position.copy(a);const l=rS+Math.random()*oS;o.mesh.scale.set(l,l,1),Le.effectsGroup.add(o.mesh),this.activeSprites.push(o)}static spawnLaser(e,t,n,i,s,o){if(this.laserPool.length===mt)return;let a=this.laserPool.find(l=>!l.active);a||(a=this.laserPool.reduce((l,c)=>c.elapsed>l.elapsed?c:l,this.laserPool[0])),a.positions[0]=e,a.positions[1]=t,a.positions[2]=n,a.positions[3]=i,a.positions[4]=s,a.positions[5]=o,a.posAttr.needsUpdate=!0,a.geometry.computeBoundingSphere(),a.impactMesh.position.set(i,s,o),a.impactMesh.rotation.x=-Math.PI/4,a.outerLine.visible=!0,a.coreLine.visible=!0,a.impactMesh.visible=!0,a.elapsed=mt,a.duration=Uu/1e3,a.active=!0}}class Bu{static group=null;static canisterMeshes=[];static bombletMeshes=[];static canisterMaterial=null;static canisterTipMaterial=null;static bombletMaterial=null;static init(){this.group||(this.group=new yt,Le.scene.add(this.group),this.canisterMaterial=new Rt({color:2042167,metalness:.8,roughness:.3}),this.canisterTipMaterial=new ut({color:15680580}),this.bombletMaterial=new Rt({color:16096779,emissive:14251782,emissiveIntensity:.8,roughness:.2}))}static tick(e){if(this.group||this.init(),!this.group)return;const t=Ei.canisters,n=Ei.bomblets;for(;this.canisterMeshes.length<t.length;){const i=this.createCanisterMesh();this.group.add(i),this.canisterMeshes.push(i)}for(let i=0;i<this.canisterMeshes.length;i++){const s=this.canisterMeshes[i];if(i<t.length){const o=t[i];s.visible=!0,s.position.set(o.x,o.z,o.y),Math.sqrt(o.vx*o.vx+o.vy*o.vy+o.vz*o.vz)>.1&&s.quaternion.setFromUnitVectors(new L(0,-1,0),new L(o.vx,o.vz,o.vy).normalize())}else s.visible=!1}for(;this.bombletMeshes.length<n.length;){const i=this.createBombletMesh();this.group.add(i),this.bombletMeshes.push(i)}for(let i=0;i<this.bombletMeshes.length;i++){const s=this.bombletMeshes[i];if(i<n.length){const o=n[i];s.visible=!0,s.position.set(o.x,o.z,o.y),s.rotation.y=o.rotation,s.rotation.x=o.rotation*.7}else s.visible=!1}}static createCanisterMesh(){const e=new yt,t=new Bn(.9,.9,3.2,8),n=new Ae(t,this.canisterMaterial);e.add(n);const i=new Tr(.9,1.4,8),s=new Ae(i,this.canisterTipMaterial);s.position.y=-2,s.rotation.x=Math.PI,e.add(s);const o=new Ft(2.4,.8,.1),a=new Ae(o,this.canisterMaterial);a.position.y=1.2,e.add(a);const l=a.clone();return l.rotation.y=Math.PI/2,e.add(l),e}static createBombletMesh(){const e=new kl(.85);return new Ae(e,this.bombletMaterial)}}class zu{static group=null;static vehicleMeshes=[];static glassMaterial=null;static headlightMaterial=null;static taillightMaterial=null;static policeRedMaterial=null;static policeBlueMaterial=null;static policeOffMaterial=null;static flasherTimer=0;static flasherPhase=!1;static init(){this.group||(this.group=new yt,Le.scene.add(this.group),this.glassMaterial=new Rt({color:1976635,roughness:.1,metalness:.9}),this.headlightMaterial=new ut({color:16776171}),this.taillightMaterial=new ut({color:15680580}),this.policeRedMaterial=new ut({color:16711731}),this.policeBlueMaterial=new ut({color:35071}),this.policeOffMaterial=new ut({color:3359061}))}static tick(e){if(this.group||this.init(),!this.group)return;this.flasherTimer+=e,this.flasherTimer>=.15&&(this.flasherTimer=0,this.flasherPhase=!this.flasherPhase);const t=Er.vehicles;for(;this.vehicleMeshes.length<t.length;){const n=t[this.vehicleMeshes.length],i=this.createVehicleMesh(n);this.group.add(i),this.vehicleMeshes.push(i)}for(let n=0;n<this.vehicleMeshes.length;n++){const i=this.vehicleMeshes[n];if(n<t.length){const s=t[n];if(s.alive){if(i.visible=!0,i.position.set(s.x,.7,s.y),i.rotation.y=-s.heading+Math.PI*.5,s.type==="police"){const o=i.getObjectByName("police_red"),a=i.getObjectByName("police_blue");o&&a&&(o.material=this.flasherPhase?this.policeRedMaterial:this.policeOffMaterial,a.material=this.flasherPhase?this.policeOffMaterial:this.policeBlueMaterial)}}else i.visible=!1}else i.visible=!1}}static createVehicleMesh(e){const t=new yt,n=e.type==="truck",i=n?3:2.2,s=n?2.4:1.1,o=n?6.2:4.4,a=new Rt({color:e.color,roughness:.4,metalness:.3}),l=new Ft(i,s,o),c=new Ae(l,a);if(c.position.y=s*.5,t.add(c),n){const m=new Rt({color:13751771,roughness:.6}),f=new Ft(i*.95,s*1.1,o*.65),x=new Ae(f,m);x.position.set(0,s*1.05,-.8),t.add(x)}else{const m=i*.85,f=.85,x=o*.55,v=new Ft(m,f,x),y=new Ae(v,this.glassMaterial);y.position.set(0,s+f*.5,-.2),t.add(y)}const h=new Ft(.45,.3,.1),u=new Ae(h,this.headlightMaterial);u.position.set(-i*.35,s*.5,o*.5+.05),t.add(u);const d=new Ae(h,this.headlightMaterial);d.position.set(i*.35,s*.5,o*.5+.05),t.add(d);const p=new Ft(.5,.3,.1),g=new Ae(p,this.taillightMaterial);g.position.set(-i*.35,s*.5,-o*.5-.05),t.add(g);const _=new Ae(p,this.taillightMaterial);if(_.position.set(i*.35,s*.5,-o*.5-.05),t.add(_),e.type==="police"){const m=new Ft(.45,.25,.45),f=new Ae(m,this.policeRedMaterial);f.name="police_red",f.position.set(-.4,s+.95,-.2),t.add(f);const x=new Ae(m,this.policeBlueMaterial);x.name="police_blue",x.position.set(.4,s+.95,-.2),t.add(x)}return t}}class ku{static group=null;static jetMeshes=[];static turretMeshes=[];static missileMeshes=[];static tracerLine=null;static tracerPositions=null;static tracerGeometry=null;static jetFuselageMat=null;static jetCanopyMat=null;static jetEngineMat=null;static turretBaseMat=null;static missileMat=null;static shieldMesh=null;static shieldMaterial=null;static init(){if(this.group)return;this.group=new yt,Le.scene.add(this.group),this.jetFuselageMat=new Rt({color:4674921,metalness:.7,roughness:.3}),this.jetCanopyMat=new Rt({color:165063,metalness:.9,roughness:.1}),this.jetEngineMat=new ut({color:16347926}),this.turretBaseMat=new Rt({color:3359061,metalness:.8,roughness:.4}),this.missileMat=new Rt({color:16317180,metalness:.5,roughness:.3});const e=30;this.tracerPositions=new Float32Array(e*6),this.tracerGeometry=new Pt,this.tracerGeometry.setAttribute("position",new Ht(this.tracerPositions,3));const t=new Mr({color:16707722,linewidth:2});this.tracerLine=new bd(this.tracerGeometry,t),this.group.add(this.tracerLine);const n=new Ar(22,16,16);this.shieldMaterial=new ut({color:3718648,transparent:!0,opacity:0,wireframe:!0}),this.shieldMesh=new Ae(n,this.shieldMaterial),this.group.add(this.shieldMesh)}static tick(e){if(this.group||this.init(),!this.group)return;const t=gn.jets;for(;this.jetMeshes.length<t.length;){const a=this.createJetMesh();this.group.add(a),this.jetMeshes.push(a)}for(let a=0;a<this.jetMeshes.length;a++){const l=this.jetMeshes[a];if(a<t.length&&t[a].alive){const c=t[a];l.visible=!0,l.position.set(c.x,c.z,c.y),l.rotation.y=-c.heading+Math.PI*.5,l.rotation.z=c.roll,l.rotation.x=c.pitch}else l.visible=!1}const n=gn.turrets;for(;this.turretMeshes.length<n.length;){const a=this.createTurretMesh();this.group.add(a),this.turretMeshes.push(a)}for(let a=0;a<this.turretMeshes.length;a++){const l=this.turretMeshes[a];if(a<n.length&&n[a].alive){const c=n[a];l.visible=!0,l.position.set(c.x,c.z,c.y);const h=l.getObjectByName("launcher");h&&(h.rotation.y=-c.yaw+Math.PI*.5,h.rotation.x=-c.pitch)}else l.visible=!1}const i=gn.missiles;for(;this.missileMeshes.length<i.length;){const a=this.createMissileMesh();this.group.add(a),this.missileMeshes.push(a)}for(let a=0;a<this.missileMeshes.length;a++){const l=this.missileMeshes[a];if(a<i.length&&i[a].alive){const c=i[a];l.visible=!0,l.position.set(c.x,c.z,c.y),Math.sqrt(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz)>.1&&l.quaternion.setFromUnitVectors(new L(0,1,0),new L(c.vx,c.vz,c.vy).normalize())}else l.visible=!1}const s=gn.tracers;if(this.tracerPositions&&this.tracerGeometry){let a=0;for(const l of s){if(a>=this.tracerPositions.length)break;this.tracerPositions[a++]=l.x,this.tracerPositions[a++]=l.z,this.tracerPositions[a++]=l.y,this.tracerPositions[a++]=l.x+l.vx*.04,this.tracerPositions[a++]=l.z+l.vz*.04,this.tracerPositions[a++]=l.y+l.vy*.04}for(let l=a;l<this.tracerPositions.length;l++)this.tracerPositions[l]=0;this.tracerGeometry.attributes.position.needsUpdate=!0}const o=Uo.getPlayerMeshPosition();this.shieldMesh&&this.shieldMaterial&&o&&(this.shieldMesh.position.copy(o),gn.shieldFlareTimer>0?(this.shieldMaterial.opacity=gn.shieldFlareTimer/.35*.7,this.shieldMesh.visible=!0):this.shieldMesh.visible=!1)}static createJetMesh(){const e=new yt,t=new Tr(1.2,8.5,6),n=new Ae(t,this.jetFuselageMat);n.rotation.x=Math.PI*.5,e.add(n);const i=new Ft(1,.7,2.8),s=new Ae(i,this.jetCanopyMat);s.position.set(0,.6,.4),e.add(s);const o=new Ft(9,.15,3.4),a=new Ae(o,this.jetFuselageMat);a.position.set(0,0,-1),e.add(a);const l=new Ft(.15,1.8,1.8),c=new Ae(l,this.jetFuselageMat);c.position.set(0,.9,-3.2),e.add(c);const h=new Bn(.6,.6,.4,8),u=new Ae(h,this.jetEngineMat);return u.position.set(0,0,-4.2),u.rotation.x=Math.PI*.5,e.add(u),e}static createTurretMesh(){const e=new yt,t=new Bn(4,4.8,2,8),n=new Ae(t,this.turretBaseMat);n.position.y=1,e.add(n);const i=new yt;i.name="launcher",i.position.y=2.4;const s=new Ft(3.2,1.8,4),o=new Ae(s,this.turretBaseMat);i.add(o);const a=new Ae(new Bn(.3,.3,3.8,6),this.missileMat);a.position.set(-1,.4,.4),a.rotation.x=Math.PI*.5,i.add(a);const l=a.clone();return l.position.x=1,i.add(l),e.add(i),e}static createMissileMesh(){const e=new yt,t=new Bn(.35,.35,2.6,6),n=new Ae(t,this.missileMat);e.add(n);const i=new Tr(.35,.8,6),s=new Ae(i,this.missileMat);return s.position.y=1.6,e.add(s),e}}class cS{static initialized=!1;static container=null;static joystickKnob=null;static activeTouchId=null;static joyCenterX=0;static joyCenterY=0;static JOY_MAX_RADIUS=42;static isTouchDevice(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)}static init(){if(this.initialized)return;this.initialized=!0;const e=this.isTouchDevice();He.isMobile=e,e&&(this.buildControlsDOM(),this.attachJoystickEvents())}static buildControlsDOM(){this.container=document.createElement("div"),this.container.id="mobile-controls",this.container.style.position="fixed",this.container.style.inset="0",this.container.style.pointerEvents="none",this.container.style.zIndex="1500",this.container.style.userSelect="none",this.container.style.webkitUserSelect="none",this.container.style.touchAction="none";const e=document.createElement("div");e.id="mobile-joystick-zone",e.style.position="absolute",e.style.bottom="26px",e.style.left="26px",e.style.width="116px",e.style.height="116px",e.style.borderRadius="50%",e.style.background="radial-gradient(circle, rgba(15, 23, 42, 0.65) 0%, rgba(3, 7, 18, 0.85) 100%)",e.style.border="2px solid rgba(56, 189, 248, 0.45)",e.style.boxShadow="0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 16px rgba(56, 189, 248, 0.2)",e.style.pointerEvents="auto",e.style.touchAction="none",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center";const t=document.createElement("div");t.style.position="absolute",t.style.width="24px",t.style.height="24px",t.style.borderRadius="50%",t.style.border="1px dashed rgba(56, 189, 248, 0.35)",t.style.pointerEvents="none",e.appendChild(t),this.joystickKnob=document.createElement("div"),this.joystickKnob.id="mobile-joystick-knob",this.joystickKnob.style.width="48px",this.joystickKnob.style.height="48px",this.joystickKnob.style.borderRadius="50%",this.joystickKnob.style.background="radial-gradient(circle at 35% 35%, #38bdf8 0%, #0284c7 60%, #0369a1 100%)",this.joystickKnob.style.boxShadow="0 0 16px rgba(56, 189, 248, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6)",this.joystickKnob.style.border="1px solid rgba(255, 255, 255, 0.5)",this.joystickKnob.style.pointerEvents="none",this.joystickKnob.style.transition="transform 0.05s ease-out",e.appendChild(this.joystickKnob),this.container.appendChild(e);const n=document.createElement("div");n.id="mobile-action-dock",n.style.position="absolute",n.style.bottom="26px",n.style.right="26px",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="flex-end",n.style.gap="14px",n.style.pointerEvents="auto";const i=document.createElement("button");i.id="mobile-fire-btn",i.setAttribute("aria-label","Fire Primary Laser"),i.style.width="64px",i.style.height="64px",i.style.borderRadius="50%",i.style.background="radial-gradient(circle at 35% 35%, #0ea5e9 0%, #0284c7 70%, #0369a1 100%)",i.style.border="2px solid rgba(255, 255, 255, 0.6)",i.style.boxShadow="0 4px 18px rgba(14, 165, 233, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)",i.style.color="#ffffff",i.style.fontFamily="system-ui, sans-serif",i.style.fontSize="12px",i.style.fontWeight="800",i.style.letterSpacing="0.5px",i.style.cursor="pointer",i.style.touchAction="none",i.innerText="⚡ RAY";const s=document.createElement("button");s.id="mobile-bomb-btn",s.setAttribute("aria-label","Fire Cluster Bomb"),s.style.width="52px",s.style.height="52px",s.style.borderRadius="50%",s.style.background="radial-gradient(circle at 35% 35%, #f59e0b 0%, #d97706 70%, #b45309 100%)",s.style.border="2px solid rgba(255, 255, 255, 0.5)",s.style.boxShadow="0 4px 14px rgba(245, 158, 11, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5)",s.style.color="#000000",s.style.fontFamily="system-ui, sans-serif",s.style.fontSize="11px",s.style.fontWeight="900",s.style.cursor="pointer",s.style.touchAction="none",s.innerText="💣 BOMB";const o=document.createElement("button");o.id="mobile-flight-btn",o.setAttribute("aria-label","Toggle Flight Autopilot"),o.style.width="42px",o.style.height="42px",o.style.borderRadius="50%",o.style.background="rgba(15, 23, 42, 0.8)",o.style.backdropFilter="blur(6px)",o.style.border="1.5px solid rgba(56, 189, 248, 0.5)",o.style.color="#38bdf8",o.style.fontSize="16px",o.style.cursor="pointer",o.style.touchAction="none",o.innerText="🛸",o.onclick=c=>{c.stopPropagation(),bi.mouseFollowMode=!bi.mouseFollowMode,o.style.background=bi.mouseFollowMode?"rgba(16, 185, 129, 0.3)":"rgba(15, 23, 42, 0.8)",o.style.borderColor=bi.mouseFollowMode?"#10b981":"rgba(56, 189, 248, 0.5)"},i.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),He.setVirtualFirePrimary(!0),i.style.transform="scale(0.92)"},{passive:!1});const a=c=>{c.preventDefault(),He.setVirtualFirePrimary(!1),i.style.transform="scale(1.0)"};i.addEventListener("touchend",a,{passive:!1}),i.addEventListener("touchcancel",a,{passive:!1}),s.addEventListener("touchstart",c=>{c.preventDefault(),c.stopPropagation(),He.setVirtualFireSecondary(!0),s.style.transform="scale(0.92)"},{passive:!1});const l=c=>{c.preventDefault(),He.setVirtualFireSecondary(!1),s.style.transform="scale(1.0)"};s.addEventListener("touchend",l,{passive:!1}),s.addEventListener("touchcancel",l,{passive:!1}),n.appendChild(o),n.appendChild(s),n.appendChild(i),this.container.appendChild(n),document.body.appendChild(this.container)}static attachJoystickEvents(){const e=document.getElementById("mobile-joystick-zone");if(!e)return;const t=s=>{if(s.preventDefault(),this.activeTouchId!==null)return;const o=s.changedTouches[0];this.activeTouchId=o.identifier;const a=e.getBoundingClientRect();this.joyCenterX=a.left+a.width/2,this.joyCenterY=a.top+a.height/2,this.updateJoystick(o.clientX,o.clientY)},n=s=>{if(s.preventDefault(),this.activeTouchId!==null)for(let o=0;o<s.changedTouches.length;o++){const a=s.changedTouches[o];if(a.identifier===this.activeTouchId){this.updateJoystick(a.clientX,a.clientY);break}}},i=s=>{if(this.activeTouchId!==null){for(let o=0;o<s.changedTouches.length;o++)if(s.changedTouches[o].identifier===this.activeTouchId){this.resetJoystick();break}}};e.addEventListener("touchstart",t,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!1}),window.addEventListener("touchcancel",i,{passive:!1})}static updateJoystick(e,t){let n=e-this.joyCenterX,i=t-this.joyCenterY;const s=Math.hypot(n,i);s>this.JOY_MAX_RADIUS&&(n=n/s*this.JOY_MAX_RADIUS,i=i/s*this.JOY_MAX_RADIUS),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(${n}px, ${i}px)`);const o=n/this.JOY_MAX_RADIUS,a=i/this.JOY_MAX_RADIUS;He.setVirtualJoystick(o,a)}static resetJoystick(){this.activeTouchId=null,this.joystickKnob&&(this.joystickKnob.style.transform="translate(0px, 0px)"),He.setVirtualJoystick(0,0)}}class hS{static async loadAndInstantiate(e="/map_data.json"){try{let t=null;if(Jt.mapData&&Jt.mapData.tiles)t=Jt.mapData;else{const u=Jt.getAssetUrl(e);console.log(`[MapLoader] Fetching authoritative city map from ${u}...`);let d=await fetch(u);if(!d.ok&&e!=="/generated_map.json"){const p=Jt.getAssetUrl("/generated_map.json");d=await fetch(p)}d.ok&&(t=await d.json())}if(!t||!t.tiles||t.tiles.length===0)return console.warn("[MapLoader] Pre-baked map invalid or missing tiles. Falling back to live CityGenerator..."),Tl.generateCity(),!0;be.init();const n=be.GRID_DIM,i=Array.isArray(t.tiles[0]);for(let u=0;u<n;u++)for(let d=0;d<n;d++){let p=X.GRASS,g=te.NONE,_=!1,m,f;if(i){const v=t.tiles[u]?.[d];v&&(p=v.terrainType,g=v.overlayType,_=!!v.isIntersection,m=v.roadAxis,f=v.tileSprite)}else{const v=t.tiles[d*n+u];typeof v=="number"?(p=v,p===X.ROAD_STRAIGHT_NS||p===X.ROAD_STRAIGHT_EW||p===X.ROAD_INTERSECTION?g=te.ROAD:p===X.SIDEWALK&&(g=te.SIDEWALK)):v&&typeof v=="object"&&(p=v.terrainType,g=v.overlayType,_=!!v.isIntersection,m=v.roadAxis,f=v.tileSprite)}be.setTerrain(u,d,p);const x=be.getCell(u,d);x&&f&&(x.tileSprite=f),g===te.ROAD?_||p===X.ROAD_INTERSECTION?be.setIntersection(u,d):be.setRoad(u,d,m==="EW"?"EW":"NS"):g===te.SIDEWALK&&be.setSidewalkIfNotRoad(u,d)}be.roadWaypoints=(t.roadWaypoints||[]).map(u=>({worldX:u.worldX,worldZ:u.worldZ,name:u.name,nextWaypoints:[]}));let s=0;const o=Array.from({length:n},()=>new Uint8Array(n));for(let u=0;u<n;u++)for(let d=0;d<n;d++){const p=be.getCell(u,d);p&&(p.overlayType===te.ROAD||p.terrainType===X.WATER)&&(o[u][d]=1)}for(const u of t.buildings||[]){const d=u.gx??u.gridX??0,p=u.gz??u.gridZ??0,g=u.w??u.footprintWidth??1,_=u.h??u.footprintHeight??1,m=et[u.typeKey],f=m?.footprintTiles??g,x=m?.footprintTiles??_;if(d<0||p<0||d+f>n||p+x>n){console.warn(`[MapLoader] Skipping building '${u.typeKey}' at (${d}, ${p}) — exceeds grid bounds!`);continue}const v=f>=3||x>=3?1:0;let y=!1;for(let T=-v;T<f+v;T++){for(let M=-v;M<x+v;M++){const I=d+T,U=p+M;if(I<0||I>=n||U<0||U>=n)continue;if(T>=0&&T<f&&M>=0&&M<x){if(o[I][U]!==0){y=!0;break}}else if(v>0&&o[I][U]===2){y=!0;break}}if(y)break}if(y){console.warn(`[MapLoader] Skipping overlapping building '${u.typeKey}' at (${d}, ${p})`);continue}for(let T=-v;T<f+v;T++)for(let M=-v;M<x+v;M++){const I=d+T,U=p+M;if(I<0||I>=n||U<0||U>=n)continue;T>=0&&T<f&&M>=0&&M<x?o[I][U]=2:o[I][U]===0&&(o[I][U]=3)}let w=u.centerWorldX,b=u.centerWorldZ;if(w===void 0||b===void 0){const T=ni.computeLotWorldPos(d,p,f,x);w=T.x,b=T.z}const A=ct.createEntity(),C=ni.calculateAndRegisterLot(A,w,b,u.typeKey,u.lotType);this.spawnBuildingEntity(A,C,u.typeKey),s++}let a=(t.seed||424242)^2654435769;const l=()=>(a=a*1664525+1013904223>>>0,a/4294967296),c=[{typeKey:"b1",lotType:"commercial"},{typeKey:"b2",lotType:"residential"},{typeKey:"b3",lotType:"residential"},{typeKey:"b4",lotType:"commercial"},{typeKey:"res_bronze",lotType:"residential"},{typeKey:"res_sky",lotType:"residential"}];for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++)if(o[u][d]===0){let p=!1;for(let g=-1;g<=1;g++){for(let _=-1;_<=1;_++){const m=be.getCell(u+g,d+_);if(m&&(m.overlayType===te.ROAD||m.overlayType===te.SIDEWALK)){p=!0;break}}if(p)break}if(p&&l()<.44){o[u][d]=2;const g=c[Math.floor(l()*c.length)],_=ni.computeLotWorldPos(u,d,1,1),m=ct.createEntity(),f=ni.calculateAndRegisterLot(m,_.x,_.z,g.typeKey,g.lotType);this.spawnBuildingEntity(m,f,g.typeKey),s++}}Ri.rebuild();const h=t.metadata?.generatedAt?new Date(t.metadata.generatedAt).toLocaleString():"unknown date";return console.log(`[MapLoader] Successfully loaded city map (${s} buildings, seed: ${t.seed}, baked at: ${h})`),!0}catch(t){return console.warn("[MapLoader] Error loading pre-baked map:",t),console.log("[MapLoader] Falling back to live CityGenerator..."),Tl.generateCity(),!1}}static spawnBuildingEntity(e,t,n){const i=et[n]||et[3];vt.set(e,{worldX:t.centerWorldX,worldY:t.centerWorldZ,worldZ:0});const s=ql(i),o=oi[n]||oi[3],a=Math.max(5,Math.round(s/o.length)),l=a*o.length;bt.set(e,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const h of o)c.set(h.id,{id:h.id,level:0,hp:a,maxHp:a});Bt.set(e,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Do.set(e,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),Kt.set(e,{meshId:`building_${e}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}async function uS(){const r=document.getElementById("app");if(!r)throw new Error("No app container found!");const e=document.getElementById("loading-progress"),t=document.getElementById("loading-screen");He.init(),cS.init(),e&&(e.style.width="30%"),Le.init(r),$h.init(),Bu.init(),zu.init(),ku.init(),Ai.init(),Ti.init(Le.camera),Eo.init(Le.camera),e&&(e.style.width="60%"),console.log("Loading assets..."),await Jt.loadAll(),Fu.preloadTextureArrays(),console.log("Assets loaded."),Po.init(),sn.init(),bi.init(),Se.init(),ei.init(),mn.init(),Ei.init(),Er.init(),gn.init(),e&&(e.style.width="85%"),await hS.loadAndInstantiate(),Po.finalizeMap(),e&&(e.style.width="100%"),t&&setTimeout(()=>{t.style.opacity="0",t.style.visibility="hidden"},150);const n=ct.createEntity();Un.add(n),vt.set(n,{worldX:0,worldY:0,worldZ:75}),As.set(n,{currentSelected:"laser",heatLevel:0,fireRate:.2,clusterCooldown:0,clusterMaxCooldown:2.5});let i=performance.now();function s(){requestAnimationFrame(s);const o=performance.now(),a=(o-i)/1e3;i=o,sn.tick(a),Er.tick(a),gn.tick(a),ct.tick(a),Ti.tick(a),gt.tick(a),zu.tick(a),ku.tick(a),Bu.tick(a),Uo.tick(a),$h.tick(a),Fu.tick(a),Ai.tick(Le.camera),Le.render()}s(),console.log("Engine fully initialized and running.")}uS().catch(console.error);
