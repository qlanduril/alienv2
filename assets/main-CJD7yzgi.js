const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MapBaker-Cx9ArgVb.js","./WFCSolver-DTRFOmP3.js"])))=>i.map(i=>d[i]);
import{a as Ce,T as _e,O as dn,B as lt,W as kd,g as vl,L as si}from"./WFCSolver-DTRFOmP3.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="172",Hd=0,Jl=1,Gd=2,Du=1,Fu=2,ei=3,ui=0,on=1,Rt=2,oi=0,Ms=1,kn=2,ec=3,tc=4,Vd=5,Hi=100,Wd=101,Xd=102,Yd=103,qd=104,jd=200,Kd=201,Zd=202,$d=203,Ao=204,wo=205,Qd=206,Jd=207,ef=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,Ro=0,Co=1,Io=2,Es=3,Po=4,Lo=5,Do=6,Fo=7,Nu=0,lf=1,cf=2,Ci=0,Uu=1,Ou=2,Bu=3,zu=4,hf=5,ku=6,Hu=7,nc="attached",uf="detached",Gu=300,As=301,ws=302,No=303,Uo=304,Pa=306,Rs=1e3,vn=1001,va=1002,Ht=1003,Vu=1004,rr=1005,Nt=1006,da=1007,Dn=1008,di=1009,Wu=1010,Xu=1011,ur=1012,Sl=1013,Vi=1014,Fn=1015,li=1016,bl=1017,Tl=1018,Cs=1020,Yu=35902,qu=1021,ju=1022,Mn=1023,Ku=1024,Zu=1025,Ss=1026,Is=1027,El=1028,Al=1029,$u=1030,wl=1031,Rl=1033,fa=33776,pa=33777,ma=33778,ga=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,Yo=37810,qo=37811,jo=37812,Ko=37813,Zo=37814,$o=37815,Qo=37816,Jo=37817,el=37818,tl=37819,nl=37820,il=37821,_a=36492,sl=36494,rl=36495,Qu=36283,al=36284,ol=36285,ll=36286,Ju=2200,df=2201,ff=2202,dr=2300,fr=2301,Ua=2302,xs=2400,ys=2401,Ma=2402,Cl=2500,pf=2501,mf=0,ed=1,cl=2,gf=3200,_f=3201,td=0,xf=1,Ti="",Ot="srgb",tn="srgb-linear",Sa="linear",rt="srgb",qi=7680,ic=519,yf=512,vf=513,Mf=514,nd=515,Sf=516,bf=517,Tf=518,Ef=519,hl=35044,Rr=35048,sc="300 es",ri=2e3,ba=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rc=1234567;const lr=Math.PI/180,Ps=180/Math.PI;function Nn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[a&255]+Wt[a>>8&255]+Wt[a>>16&255]+Wt[a>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ve(a,e,t){return Math.max(e,Math.min(t,a))}function Il(a,e){return(a%e+e)%e}function Af(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function wf(a,e,t){return a!==e?(t-a)/(e-a):0}function cr(a,e,t){return(1-t)*a+t*e}function Rf(a,e,t,n){return cr(a,e,1-Math.exp(-t*n))}function Cf(a,e=1){return e-Math.abs(Il(a,e*2)-e)}function If(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Pf(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Lf(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Df(a,e){return a+Math.random()*(e-a)}function Ff(a){return a*(.5-Math.random())}function Nf(a){a!==void 0&&(rc=a);let e=rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uf(a){return a*lr}function Of(a){return a*Ps}function Bf(a){return(a&a-1)===0&&a!==0}function zf(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function kf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Hf(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function at(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Gf={DEG2RAD:lr,RAD2DEG:Ps,generateUUID:Nn,clamp:Ve,euclideanModulo:Il,mapLinear:Af,inverseLerp:wf,lerp:cr,damp:Rf,pingpong:Cf,smoothstep:If,smootherstep:Pf,randInt:Lf,randFloat:Df,randFloatSpread:Ff,seededRandom:Nf,degToRad:Uf,radToDeg:Of,isPowerOfTwo:Bf,ceilPowerOfTwo:zf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Hf,normalize:at,denormalize:Pn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,r,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c)}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],y=i[4],v=i[7],R=i[2],E=i[5],A=i[8];return s[0]=r*_+o*x+l*R,s[3]=r*m+o*y+l*E,s[6]=r*f+o*v+l*A,s[1]=c*_+h*x+u*R,s[4]=c*m+h*y+u*E,s[7]=c*f+h*v+u*A,s[2]=d*_+p*x+g*R,s[5]=d*m+p*y+g*E,s[8]=d*f+p*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,d=o*l-h*s,p=c*s-r*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*r)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Be;function id(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function pr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vf(){const a=pr("canvas");return a.style.display="block",a}const ac={};function _s(a){a in ac||(ac[a]=!0,console.warn(a))}function Wf(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Xf(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yf(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const oc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const a={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===rt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[tn]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),a}const Xe=qf();function ci(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function bs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ji;class jf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=pr("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ci(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kf=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ba(i[r].image)):s.push(Ba(i[r]))}else s=Ba(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ba(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?jf.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zf=0;class It extends Xi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=vn,i=vn,s=Nt,r=Dn,o=Mn,l=di,c=It.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Nn(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Gu;It.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(p+1)/2,R=(f+1)/2,E=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return y>v&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=A/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $f extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new sd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends $f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rd extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qf extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],p=s[r+1],g=s[r+2],_=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),E=Math.atan2(R,f*x);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const v=o*x;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new I,cc=new bn;class Bn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,wn):wn.fromBufferAttribute(s,r),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Ir.subVectors(this.max,Ws),Ki.subVectors(e.a,Ws),Zi.subVectors(e.b,Ws),$i.subVectors(e.c,Ws),fi.subVectors(Zi,Ki),pi.subVectors($i,Zi),Di.subVectors(Ki,$i);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!ka(t,Ki,Zi,$i,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Ki,Zi,$i,Ir))?!1:(Pr.crossVectors(fi,pi),t=[Pr.x,Pr.y,Pr.z],ka(t,Ki,Zi,$i,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,Cr=new Bn,Ki=new I,Zi=new I,$i=new I,fi=new I,pi=new I,Di=new I,Ws=new I,Ir=new I,Pr=new I,Fi=new I;function ka(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Fi.fromArray(a,s);const o=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jf=new Bn,Xs=new I,Ha=new I;class Vn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(Ha)),this.expandByPoint(Xs.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new I,Ga=new I,Lr=new I,mi=new I,Va=new I,Dr=new I,Wa=new I;class Sr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ga.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ga);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Lr),o=mi.dot(this.direction),l=-mi.dot(Lr),c=mi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ga).addScaledVector(Lr,d),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,s){Va.subVectors(t,e),Dr.subVectors(n,e),Wa.crossVectors(Va,Dr);let r=this.direction.dot(Wa),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(Dr.crossVectors(mi,Dr));if(l<0)return null;const c=o*this.direction.dot(Va.cross(mi));if(c<0||l+c>r)return null;const h=-o*mi.dot(Wa);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,s,r,o,l,c,h,u,d,p,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,s,r,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),r=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,p=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-r*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=_-d*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,p=r*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,p=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*l,p=r*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=r*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),Fr.crossVectors(cn,gi),i[0]=gi.x,i[4]=Fr.x,i[8]=cn.x,i[1]=gi.y,i[5]=Fr.y,i[9]=cn.y,i[2]=gi.z,i[6]=Fr.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],R=n[15],E=i[0],A=i[4],C=i[8],b=i[12],M=i[1],P=i[5],N=i[9],O=i[13],H=i[2],X=i[6],G=i[10],J=i[14],V=i[3],ee=i[7],le=i[11],ve=i[15];return s[0]=r*E+o*M+l*H+c*V,s[4]=r*A+o*P+l*X+c*ee,s[8]=r*C+o*N+l*G+c*le,s[12]=r*b+o*O+l*J+c*ve,s[1]=h*E+u*M+d*H+p*V,s[5]=h*A+u*P+d*X+p*ee,s[9]=h*C+u*N+d*G+p*le,s[13]=h*b+u*O+d*J+p*ve,s[2]=g*E+_*M+m*H+f*V,s[6]=g*A+_*P+m*X+f*ee,s[10]=g*C+_*N+m*G+f*le,s[14]=g*b+_*O+m*J+f*ve,s[3]=x*E+y*M+v*H+R*V,s[7]=x*A+y*P+v*X+R*ee,s[11]=x*C+y*N+v*G+R*le,s[15]=x*b+y*O+v*J+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+s*r*d-i*r*p+i*c*h-s*l*h)+m*(+t*c*u-t*o*p-s*r*u+n*r*p+s*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,y=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,v=h*_*c-g*u*c+g*o*p-r*_*p-h*o*f+r*u*f,R=g*u*l-h*_*l-g*o*d+r*_*d+h*o*m-r*u*m,E=t*x+n*y+i*v+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*f-n*d*f)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*A,e[4]=y*A,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*A,e[6]=(g*l*s-r*m*s-g*i*c+t*m*c+r*i*f-t*l*f)*A,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*p+t*l*p)*A,e[8]=v*A,e[9]=(g*u*s-h*_*s-g*n*p+t*_*p+h*n*f-t*u*f)*A,e[10]=(r*_*s-g*o*s+g*n*c-t*_*c-r*n*f+t*o*f)*A,e[11]=(h*o*s-r*u*s-h*n*c+t*u*c+r*n*p-t*o*p)*A,e[12]=R*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-r*_*i-g*n*l+t*_*l+r*n*m-t*o*m)*A,e[15]=(r*u*i-h*o*i+h*n*l-t*u*l-r*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,u=o+o,d=s*c,p=s*h,g=s*u,_=r*h,m=r*u,f=o*u,x=l*c,y=l*h,v=l*u,R=n.x,E=n.y,A=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+v)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(p-v)*E,i[5]=(1-(d+f))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+y)*A,i[9]=(m-x)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qi.set(i[0],i[1],i[2]).length();const r=Qi.set(i[4],i[5],i[6]).length(),o=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/s,h=1/r,u=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r,o=ri){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===ri)p=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===ba)p=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=ri){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-s),d=(t+e)*c,p=(n+i)*h;let g,_;if(o===ri)g=(r+s)*u,_=-2*u;else if(o===ba)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new I,Rn=new Ne,ep=new I(0,0,0),tp=new I(1,1,1),gi=new I,Fr=new I,cn=new I,hc=new Ne,uc=new bn;class Hn{constructor(e=0,t=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const dc=new I,Ji=new bn,Kn=new Ne,Nr=new I,Ys=new I,ip=new I,sp=new bn,fc=new I(1,0,0),pc=new I(0,1,0),mc=new I(0,0,1),gc={type:"added"},rp={type:"removed"},es={type:"childadded",child:null},Xa={type:"childremoved",child:null};class ut extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new I,t=new Hn,n=new bn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Be}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ys,Nr,this.up):Kn.lookAt(Nr,Ys,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new I(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new I,Zn=new I,Ya=new I,$n=new I,ts=new I,ns=new I,_c=new I,qa=new I,ja=new I,Ka=new I,Za=new Je,$a=new Je,Qa=new Je;class yn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Cn.subVectors(i,t),Zn.subVectors(n,t),Ya.subVectors(e,t);const r=Cn.dot(Cn),o=Cn.dot(Zn),l=Cn.dot(Ya),c=Zn.dot(Zn),h=Zn.dot(Ya),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(r,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,n,i,s,r){return Za.setScalar(0),$a.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Za,s.x),r.addScaledVector($a,s.y),r.addScaledVector(Qa,s.z),r}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Zn.subVectors(e,t),Cn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;ts.subVectors(i,n),ns.subVectors(s,n),qa.subVectors(e,n);const l=ts.dot(qa),c=ns.dot(qa);if(l<=0&&c<=0)return t.copy(n);ja.subVectors(e,i);const h=ts.dot(ja),u=ns.dot(ja);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(ts,r);Ka.subVectors(e,s);const p=ts.dot(Ka),g=ns.dot(Ka);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ns,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return _c.subVectors(s,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(_c,o);const f=1/(m+_+d);return r=_*f,o=d*f,t.copy(n).addScaledVector(ts,r).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function Ja(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Il(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Ja(r,s,e+1/3),this.g=Ja(r,s,e),this.b=Ja(r,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Xe.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ve(Xt.r*255,0,255))*65536+Math.round(Ve(Xt.g*255,0,255))*256+Math.round(Ve(Xt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ot){Xe.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ur);const n=cr(_i.h,Ur.h,t),i=cr(_i.s,Ur.s,t),s=cr(_i.l,Ur.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ye;ye.NAMES=ad;let ap=0;class On extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Ms,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=wo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ot extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,Or=new me;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),e}}class od extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ld extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let op=0;const _n=new Ne,eo=new ut,is=new I,hn=new Bn,qs=new Bn,Ft=new I;class Dt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?ld:od)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,qs.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,qs.max),hn.expandByPoint(Ft)):(hn.expandByPoint(qs.min),hn.expandByPoint(qs.max))}hn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Ft.add(is)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,d=new me,p=new me,g=new me,_=new I,m=new I;function f(C,b,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[b].add(_),o[M].add(_),l[C].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,b=x.length;C<b;++C){const M=x[C],P=M.start,N=M.count;for(let O=P,H=P+N;O<H;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new I,v=new I,R=new I,E=new I;function A(C){R.fromBufferAttribute(i,C),E.copy(R);const b=o[C];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(E,b);const P=v.dot(l[C])<0?-1:1;r.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,b=x.length;C<b;++C){const M=x[C],P=M.start,N=M.count;for(let O=P,H=P+N;O<H;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,r=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new Ne,Ni=new Sr,Br=new Vn,yc=new I,zr=new I,kr=new I,Hr=new I,to=new I,Gr=new I,vc=new I,Vr=new I;class Se extends ut{constructor(e=new Dt,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(to.fromBufferAttribute(u,e),r?Gr.addScaledVector(to,h):Gr.addScaledVector(to.sub(t),h))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(Br.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Br,yc)===null||Ni.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=y;v<R;v+=3){const E=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);i=Wr(this,f,e,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=Wr(this,r,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,R=y;v<R;v+=3){const E=v,A=v+1,C=v+2;i=Wr(this,f,e,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,y=m+1,v=m+2;i=Wr(this,r,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function lp(a,e,t,n,i,s,r,o){let l;if(e.side===on?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===ui,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:a}}function Wr(a,e,t,n,i,s,r,o,l,c){a.getVertexPosition(o,zr),a.getVertexPosition(l,kr),a.getVertexPosition(c,Hr);const h=lp(a,e,t,n,zr,kr,Hr,vc);if(h){const u=new I;yn.getBarycoord(vc,zr,kr,Hr,u),i&&(h.uv=yn.getInterpolatedAttribute(i,o,l,c,u,new me)),s&&(h.uv1=yn.getInterpolatedAttribute(s,o,l,c,u,new me)),r&&(h.normal=yn.getInterpolatedAttribute(r,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};yn.getNormal(zr,kr,Hr,d.normal),h.face=d,h.barycoord=u}return h}class Bt extends Dt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(_,m,f,x,y,v,R,E,A,C,b){const M=v/A,P=R/C,N=v/2,O=R/2,H=E/2,X=A+1,G=C+1;let J=0,V=0;const ee=new I;for(let le=0;le<G;le++){const ve=le*P-O;for(let He=0;He<X;He++){const ct=He*M-N;ee[_]=ct*x,ee[m]=ve*y,ee[f]=H,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[f]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(He/A),u.push(1-le/C),J+=1}}for(let le=0;le<C;le++)for(let ve=0;ve<A;ve++){const He=d+ve+X*le,ct=d+ve+X*(le+1),q=d+(ve+1)+X*(le+1),te=d+(ve+1)+X*le;l.push(He,ct,te),l.push(ct,q,te),V+=6}o.addGroup(p,V,b),p+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(a){const e={};for(let t=0;t<a.length;t++){const n=Ls(a[t]);for(const i in n)e[i]=n[i]}return e}function cp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function cd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const mr={clone:Ls,merge:Qt};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hd extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new I,Mc=new me,Sc=new me;class sn extends hd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,Sc),t.subVectors(Sc,Mc)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class dp extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(ss,rs,e,t);i.layers=this.layers,this.add(i);const s=new sn(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new sn(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new sn(ss,rs,e,t);o.layers=this.layers,this.add(o);const l=new sn(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new sn(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ud extends It{constructor(e,t,n,i,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fp extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ud(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:oi});s.uniforms.tEquirect.value=t;const r=new Se(i,s),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Nt),new dp(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}class Ll{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new Ll(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bc extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new I;class gr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fd extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const js=new I,os=new I,ls=new I,cs=new me,Ks=new me,pd=new Ne,Xr=new I,Zs=new I,Yr=new I,Tc=new me,no=new me,Ec=new me;class pp extends ut{constructor(e=new fd){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dd(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new gr(n,3,0,!1)),as.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=as,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),pd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const r=this.center;qr(Xr.set(-.5,-.5,0),ls,r,os,i,s),qr(Zs.set(.5,-.5,0),ls,r,os,i,s),qr(Yr.set(.5,.5,0),ls,r,os,i,s),Tc.set(0,0),no.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(Xr,Zs,Yr,!1,js);if(o===null&&(qr(Zs.set(-.5,.5,0),ls,r,os,i,s),no.set(0,1),o=e.ray.intersectTriangle(Xr,Yr,Zs,!1,js),o===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||t.push({distance:l,point:js.clone(),uv:yn.getInterpolation(js,Xr,Zs,Yr,Tc,no,Ec,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(a,e,t,n,i,s){cs.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*cs.x-i*cs.y,Ks.y=i*cs.x+s*cs.y):Ks.copy(cs),a.copy(e),a.x+=Ks.x,a.y+=Ks.y,a.applyMatrix4(pd)}const Ac=new I,wc=new Je,Rc=new Je,mp=new I,Cc=new Ne,jr=new I,io=new Vn,Ic=new Ne,so=new Sr;class gp extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(i),e.ray.intersectsSphere(io)!==!1&&(Ic.copy(i).invert(),so.copy(e.ray).applyMatrix4(Ic),!(this.boundingBox!==null&&so.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,so)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wc.fromBufferAttribute(i.attributes.skinIndex,e),Rc.fromBufferAttribute(i.attributes.skinWeight,e),Ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Rc.getComponent(s);if(r!==0){const o=wc.getComponent(s);Cc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mp.copy(Ac).applyMatrix4(Cc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class md extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gd extends It{constructor(e=null,t=1,n=1,i,s,r,o,l,c=Ht,h=Ht,u,d){super(null,r,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pc=new Ne,_p=new Ne;class Dl{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:_p;Pc.multiplyMatrices(o,t[s]),Pc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new gd(t,e,e,Mn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new md),this.bones.push(r),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class _r extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new Ne,Lc=new Ne,Kr=[],Dc=new Bn,xp=new Ne,$s=new Se,Qs=new Vn;class xr extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Dc.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(Dc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Qs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,hs),Lc.multiplyMatrices(n,hs),$s.matrixWorld=Lc,$s.raycast(e,Kr);for(let r=0,o=Kr.length;r<o;r++){const l=Kr[r];l.instanceId=s,l.object=this,t.push(l)}Kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gd(new Float32Array(i*this.count),i,this.count,El,Fn));const s=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ro=new I,yp=new I,vp=new Be;class ni{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ro.subVectors(n,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vp.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Vn,Zr=new I;class Fl{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,r=new ni){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri){const n=this.planes,i=e.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-p,v-f).normalize(),n[1].setComponents(l+s,d+c,m+p,v+f).normalize(),n[2].setComponents(l+r,d+h,m+g,v+x).normalize(),n[3].setComponents(l-r,d-h,m-g,v-x).normalize(),n[4].setComponents(l-o,d-u,m-_,v-y).normalize(),t===ri)n[5].setComponents(l+o,d+u,m+_,v+y).normalize();else if(t===ba)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zr.x=i.normal.x>0?e.max.x:e.min.x,Zr.y=i.normal.y>0?e.max.y:e.min.y,Zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yr extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new I,Ea=new I,Fc=new Ne,Js=new Sr,$r=new Vn,ao=new I,Nc=new I;class vr extends ut{constructor(e=new Dt,t=new yr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ta.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ta.distanceTo(Ea);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;Fc.copy(i).invert(),Js.copy(e.ray).applyMatrix4(Fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),x=h.getX(_+1),y=Qr(this,e,Js,l,f,x);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Qr(this,e,Js,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=c){const f=Qr(this,e,Js,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=Qr(this,e,Js,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Qr(a,e,t,n,i,s){const r=a.geometry.attributes.position;if(Ta.fromBufferAttribute(r,i),Ea.fromBufferAttribute(r,s),t.distanceSqToSegment(Ta,Ea,ao,Nc)>n)return;ao.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(ao);if(!(l<e.near||l>e.far))return{distance:l,point:Nc.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:a}}const Uc=new I,Oc=new I;class _d extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Uc.fromBufferAttribute(t,i),Oc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Oc);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mp extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xd extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new Ne,ul=new Sr,Jr=new Vn,ea=new I;class Sp extends ut{constructor(e=new Dt,t=new xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Bc.copy(i).invert(),ul.copy(e.ray).applyMatrix4(Bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);ea.fromBufferAttribute(u,m),zc(ea,m,l,i,e,t,this)}}else{const d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,_=p;g<_;g++)ea.fromBufferAttribute(u,g),zc(ea,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zc(a,e,t,n,i,s,r){const o=ul.distanceSqToPoint(a);if(o<t){const l=new I;ul.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class gt extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Aa extends It{constructor(e,t,n,i,s,r,o,l,c){super(e,t,n,i,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yd extends It{constructor(e,t,n,i,s,r,o,l,c,h=Ss){if(h!==Ss&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Vi),n===void 0&&h===Is&&(n=Cs),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nl extends Dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],o=[],l=[],c=new I,h=new me;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sn extends Dt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(p,2));function x(){const v=new I,R=new I;let E=0;const A=(t-e)/n;for(let C=0;C<=s;C++){const b=[],M=C/s,P=M*(t-e)+e;for(let N=0;N<=i;N++){const O=N/i,H=O*l+o,X=Math.sin(H),G=Math.cos(H);R.x=P*X,R.y=-M*n+m,R.z=P*G,u.push(R.x,R.y,R.z),v.set(X,A,G).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-M),b.push(g++)}_.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){const M=_[b][C],P=_[b+1][C],N=_[b+1][C+1],O=_[b][C+1];(e>0||b!==0)&&(h.push(M,P,O),E+=3),(t>0||b!==s-1)&&(h.push(P,N,O),E+=3)}c.addGroup(f,E,0),f+=E}function y(v){const R=g,E=new me,A=new I;let C=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const H=N/i*l+o,X=Math.cos(H),G=Math.sin(H);A.x=b*G,A.y=m*M,A.z=b*X,u.push(A.x,A.y,A.z),d.push(0,M,0),E.x=X*.5+.5,E.y=G*.5*M+.5,p.push(E.x,E.y),g++}for(let N=0;N<i;N++){const O=R+N,H=P+N;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mr extends Sn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ul extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],r=[];o(i),c(n),h(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new I,v=new I,R=new I;for(let E=0;E<t.length;E+=3)p(t[E+0],y),p(t[E+1],v),p(t[E+2],R),l(y,v,R,x)}function l(x,y,v,R){const E=R+1,A=[];for(let C=0;C<=E;C++){A[C]=[];const b=x.clone().lerp(v,C/E),M=y.clone().lerp(v,C/E),P=E-C;for(let N=0;N<=P;N++)N===0&&C===E?A[C][N]=b:A[C][N]=b.clone().lerp(M,N/P)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const M=Math.floor(b/2);b%2===0?(d(A[C][M+1]),d(A[C+1][M]),d(A[C][M])):(d(A[C][M+1]),d(A[C+1][M+1]),d(A[C+1][M]))}}function c(x){const y=new I;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new I;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=m(x)/2/Math.PI+.5,R=f(x)/Math.PI+.5;r.push(v,1-R)}g(),u()}function u(){for(let x=0;x<r.length;x+=6){const y=r[x+0],v=r[x+2],R=r[x+4],E=Math.max(y,v,R),A=Math.min(y,v,R);E>.9&&A<.1&&(y<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),R<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function p(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new I,y=new I,v=new I,R=new I,E=new me,A=new me,C=new me;for(let b=0,M=0;b<s.length;b+=9,M+=6){x.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),E.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),C.set(r[M+4],r[M+5]),R.copy(x).add(y).add(v).divideScalar(3);const P=m(R);_(E,M+0,x,P),_(A,M+2,y,P),_(C,M+4,v,P)}}function _(x,y,v,R){R<0&&x.x===1&&(r[y]=x.x-1),v.x===0&&v.z===0&&(r[y]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.vertices,e.indices,e.radius,e.details)}}class Ol extends Ul{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ol(e.radius,e.detail)}}class Tn extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*d-r;for(let y=0;y<c;y++){const v=y*u-s;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+c*f,v=x+c*(f+1),R=x+1+c*(f+1),E=x+1+c*f;p.push(y,v,E),p.push(v,R,E)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wi extends Dt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,p=new I,g=new me;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=s+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,y=x,v=x+n+1,R=x+n+2,E=x+1;o.push(y,v,E),o.push(v,R,E)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class br extends Dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new I,d=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let v=0;f===0&&r===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(i+E*s)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(i+E*s)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-y),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const y=h[f][x+1],v=h[f][x],R=h[f+1][x],E=h[f+1][x+1];(f!==0||r>0)&&p.push(y,v,E),(f!==n-1||l<Math.PI)&&p.push(v,R,E)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bp extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ct extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=td,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wn extends Ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tp extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ep extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ta(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Ap(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function wp(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function kc(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function vd(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rp extends Tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xs,endingEnd:xs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case ys:s=e,o=2*t-n;break;case Ma:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:r=e,l=2*n-t;break;case Ma:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let R=0;R!==o;++R)s[R]=f*r[h+R]+x*r[c+R]+y*r[l+R]+v*r[u+R];return s}}class Md extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class Cp extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Ap(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=fr;class Bs extends Xn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=dr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Sd extends Xn{}Sd.prototype.ValueTypeName="color";class Ds extends Xn{}Ds.prototype.ValueTypeName="number";class Ip extends Tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Fs extends Xn{InterpolantFactoryMethodLinear(e){return new Ip(this.times,this.values,this.getValueSize(),e)}}Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Xn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=dr;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Xn{}Ns.prototype.ValueTypeName="vector";class dl{constructor(e="",t=-1,n=[],i=Cl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Lp(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=wp(l);l=kc(l,1,h),c=kc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];vd(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}i.push(new Ds(".morphTargetInfluence["+_+"]",m,f))}l=p.length*r}else{const p=".bones["+t[u].name+"]";n(Ns,p+".position",d,"pos",i),n(Fs,p+".quaternion",d,"rot",i),n(Ns,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Pp(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Ns;case"color":return Sd;case"quaternion":return Fs;case"bool":case"boolean":return Bs;case"string":return zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Lp(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Pp(a.type);if(a.times===void 0){const t=[],n=[];vd(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ei={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Dp{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Fp=new Dp;class ks{constructor(e){this.manager=e!==void 0?e:Fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class Np extends Error{constructor(e,t){super(e),this.response=t}}class bd extends ks{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ei.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Qn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){x();function x(){u.read().then(({done:y,value:v})=>{if(y)f.close();else{_+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let E=0,A=h.length;E<A;E++){const C=h[E];C.onProgress&&C.onProgress(R)}f.enqueue(v),x()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Np(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ei.add(e,c);const h=Qn[e];delete Qn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Qn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Up extends ks{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ei.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=pr("img");function l(){h(),Ei.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Bl extends ks{constructor(e){super(e)}load(e,t,n,i){const s=new It,r=new Up(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class La extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const oo=new Ne,Hc=new I,Gc=new I;class zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Op extends zl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bp extends La{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Op}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vc=new Ne,er=new I,lo=new I;class zp extends zl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),lo.copy(n.position),lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),Vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc)}}class kl extends La{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Er extends hd{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kp extends zl{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wc extends La{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hp extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Ei.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ei.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ei.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Ei.add(e,l),s.manager.itemStart(e)}}class Gp extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return performance.now()}class Vp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;const o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){bn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;bn.multiplyQuaternionsFlat(e,r,e,t,e,n),bn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const o=t+r;e[o]=e[o]+e[n+r]*i}}}const Hl="\\[\\]\\.:\\/",Wp=new RegExp("["+Hl+"]","g"),Gl="[^"+Hl+"]",Xp="[^"+Hl.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",Gl),qp=/(WCOD+)?/.source.replace("WCOD",Xp),jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Zp=new RegExp("^"+Yp+qp+jp+Kp+"$"),$p=["material","materials","bones","map"];class Qp{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wp,"")}static parseTrackName(e){const t=Zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$p.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Qp;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,o=new Array(r),l={endingStart:xs,endingEnd:xs};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=df,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case Cl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===ff;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===Ju){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:xs:i.endingStart=Ma,t?i.endingEnd=this.zeroSlopeAtEnd?ys:xs:i.endingEnd=Ma)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const em=new Float32Array(1);class tm extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Vp(nt.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Md(new Float32Array(2),new Float32Array(2),1,em),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?dl.findByName(i,e):e;const o=r!==null?r.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=Cl),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new Jp(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?dl.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){const c=r[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const o=n[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Yc=new Ne;class Vl{constructor(e,t,n=0,i=1/0){this.ray=new Sr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(qc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ml(e[i],this,n,t);return n.sort(qc),n}}function qc(a,e){return a.distance-e.distance}function ml(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=a.children;for(let r=0,o=s.length;r<o;r++)ml(s[r],e,t,!0)}}function jc(a,e,t,n){const i=nm(n);switch(t){case qu:return a*e;case Ku:return a*e;case Zu:return a*e*2;case El:return a*e/i.components*i.byteLength;case Al:return a*e/i.components*i.byteLength;case $u:return a*e*2/i.components*i.byteLength;case wl:return a*e*2/i.components*i.byteLength;case ju:return a*e*3/i.components*i.byteLength;case Mn:return a*e*4/i.components*i.byteLength;case Rl:return a*e*4/i.components*i.byteLength;case fa:case pa:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bo:case ko:return Math.max(a,16)*Math.max(e,8)/4;case Oo:case zo:return Math.max(a,8)*Math.max(e,8)/2;case Ho:case Go:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case _a:case sl:case rl:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Qu:case al:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ol:case ll:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(a){switch(a){case di:case Wu:return{byteLength:1,components:1};case ur:case Xu:case li:return{byteLength:2,components:1};case bl:case Tl:return{byteLength:2,components:4};case Vi:case Sl:case Fn:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Td(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function im(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=a.SHORT;else if(c instanceof Uint32Array)p=a.UNSIGNED_INT;else if(c instanceof Int32Array)p=a.INT;else if(c instanceof Int8Array)p=a.BYTE;else if(c instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(a.bindBuffer(c,o),u.length===0)a.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];a.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:r}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#endif`,ng=`struct PhysicalMaterial {
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bg=`#ifndef FLAT_SHADED
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
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
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
}`,h_=`#if DEPTH_PACKING == 3200
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
}`,u_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,y_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
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
}`,M_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,b_=`#define NORMAL
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
}`,T_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,A_=`#define PHONG
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
}`,w_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,I_=`#define TOON
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
}`,P_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,F_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:Tm,color_pars_vertex:Em,color_vertex:Am,common:wm,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Im,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Fm,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Om,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:Hm,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:Ym,lights_lambert_fragment:qm,lights_lambert_pars_fragment:jm,lights_pars_begin:Km,lights_toon_fragment:$m,lights_toon_pars_fragment:Qm,lights_phong_fragment:Jm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:yg,morphtarget_vertex:vg,normal_fragment_begin:Mg,normal_fragment_maps:Sg,normal_pars_fragment:bg,normal_pars_vertex:Tg,normal_vertex:Eg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Ig,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Fg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:kg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Gg,skinbase_vertex:Vg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:Yg,specularmap_fragment:qg,specularmap_pars_fragment:jg,tonemapping_fragment:Kg,tonemapping_pars_fragment:Zg,transmission_fragment:$g,transmission_pars_fragment:Qg,uv_pars_fragment:Jg,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:a_,cube_vert:o_,cube_frag:l_,depth_vert:c_,depth_frag:h_,distanceRGBA_vert:u_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:y_,meshlambert_frag:v_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:b_,meshnormal_frag:T_,meshphong_vert:E_,meshphong_frag:A_,meshphysical_vert:w_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:I_,points_vert:P_,points_frag:L_,shadow_vert:D_,shadow_frag:F_,sprite_vert:N_,sprite_frag:U_},ne={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Qt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Qt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Qt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Qt([ne.points,ne.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Qt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Qt([ne.common,ne.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Qt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Qt([ne.sprite,ne.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Qt([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Qt([ne.lights,ne.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const na={r:0,b:0,g:0},Oi=new Hn,O_=new Ne;function B_(a,e,t,n,i,s,r){const o=new ye(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const R=g(y);R===null?f(o,l):R&&R.isColor&&(f(R,1),v=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(a.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function m(y,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Pa)?(h===void 0&&(h=new Se(new Bt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Ls(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(v.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O_.makeRotationFromEuler(Oi)),h.material.toneMapped=Xe.getTransfer(R.colorSpace)!==rt,(u!==R||d!==R.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Se(new Tn(2,2),new Kt({name:"BackgroundMaterial",uniforms:Ls(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(R.colorSpace)!==rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(na,cd(a)),n.buffers.color.setClear(na.r,na.g,na.b,v,r)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m,dispose:x}}function z_(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function o(M,P,N,O,H){let X=!1;const G=u(O,N,P);s!==G&&(s=G,c(s.object)),X=p(M,O,N,H),X&&g(M,O,N,H),H!==null&&e.update(H,a.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,v(M,P,N,O),H!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function h(M){return a.deleteVertexArray(M)}function u(M,P,N){const O=N.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let G=X[O];return G===void 0&&(G=d(l()),X[O]=G),G}function d(M){const P=[],N=[],O=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,P,N,O){const H=s.attributes,X=P.attributes;let G=0;const J=N.getAttributes();for(const V in J)if(J[V].location>=0){const le=H[V];let ve=X[V];if(ve===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function g(M,P,N,O){const H={},X=P.attributes;let G=0;const J=N.getAttributes();for(const V in J)if(J[V].location>=0){let le=X[V];le===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),H[V]=ve,G++}s.attributes=H,s.attributesNum=G,s.index=O}function _(){const M=s.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const N=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;N[M]=1,O[M]===0&&(a.enableVertexAttribArray(M),O[M]=1),H[M]!==P&&(a.vertexAttribDivisor(M,P),H[M]=P)}function x(){const M=s.newAttributes,P=s.enabledAttributes;for(let N=0,O=P.length;N<O;N++)P[N]!==M[N]&&(a.disableVertexAttribArray(N),P[N]=0)}function y(M,P,N,O,H,X,G){G===!0?a.vertexAttribIPointer(M,P,N,H,X):a.vertexAttribPointer(M,P,N,O,H,X)}function v(M,P,N,O){_();const H=O.attributes,X=N.getAttributes(),G=P.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let ee=H[J];if(ee===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const le=ee.normalized,ve=ee.itemSize,He=e.get(ee);if(He===void 0)continue;const ct=He.buffer,q=He.type,te=He.bytesPerElement,ge=q===a.INT||q===a.UNSIGNED_INT||ee.gpuType===Sl;if(ee.isInterleavedBufferAttribute){const re=ee.data,Re=re.stride,De=ee.offset;if(re.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)f(V.location+Ge,re.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)m(V.location+Ge);a.bindBuffer(a.ARRAY_BUFFER,ct);for(let Ge=0;Ge<V.locationSize;Ge++)y(V.location+Ge,ve/V.locationSize,q,le,Re*te,(De+ve/V.locationSize*Ge)*te,ge)}else{if(ee.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)f(V.location+re,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);a.bindBuffer(a.ARRAY_BUFFER,ct);for(let re=0;re<V.locationSize;re++)y(V.location+re,ve/V.locationSize,q,le,ve*te,ve/V.locationSize*re*te,ge)}}else if(G!==void 0){const le=G[J];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(V.location,le);break;case 3:a.vertexAttrib3fv(V.location,le);break;case 4:a.vertexAttrib4fv(V.location,le);break;default:a.vertexAttrib1fv(V.location,le)}}}}x()}function R(){C();for(const M in n){const P=n[M];for(const N in P){const O=P[N];for(const H in O)h(O[H].object),delete O[H];delete P[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const O=P[N];for(const H in O)h(O[H].object),delete O[H];delete P[N]}delete n[M.id]}function A(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const O=N[M.id];for(const H in O)h(O[H].object),delete O[H];delete N[M.id]}}function C(){b(),r=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function k_(a,e,t){let n;function i(c){n=c}function s(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(a.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function H_(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==Mn&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&n.convert(A)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!C)}function l(A){if(A==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),f=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function G_(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new ni,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=a.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,y=x*4;let v=f.clippingState||null;l.value=v,v=h(g,d,y,p);for(let R=0;R!==y;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)r.copy(u[y]).applyMatrix4(x,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function V_(a){let e=new WeakMap;function t(r,o){return o===No?r.mapping=As:o===Uo&&(r.mapping=ws),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===No||o===Uo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fp(l.height);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const vs=4,Kc=[.125,.215,.35,.446,.526,.582],Gi=20,co=new Er,Zc=new ye;let ho=null,uo=0,fo=0,po=!1;const ki=(1+Math.sqrt(5))/2,us=1/ki,$c=[new I(-ki,us,0),new I(ki,us,0),new I(-us,0,ki),new I(us,0,ki),new I(0,ki,-us),new I(0,ki,us),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:li,format:Mn,colorSpace:tn,depthBuffer:!1},i=Jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(s)),this._blurMaterial=X_(s,e,t)}return i}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,i){const o=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zc),h.toneMapping=Ci,h.autoClear=!1;const p=new ot({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Se(new Bt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Zc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;ia(i,x*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Se(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$c[(i-s-1)%$c.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Se(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const f=[];let x=0;for(let A=0;A<Gi;++A){const C=A/_,b=Math.exp(-C*C/2);f.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],R=3*v*(i>y-vs?i-y+vs:0),E=4*(this._cubeSize-v);ia(t,R,E,3*v,2*v),l.setRenderTarget(t),l.render(u,co)}}function W_(a){const e=[],t=[],n=[];let i=a;const s=a-vs+1+Kc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-vs?l=Kc[r-a+vs-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,C=E>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(b,_*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];v.set(M,f*g*E)}const R=new Dt;R.setAttribute("position",new Gt(x,_)),R.setAttribute("uv",new Gt(y,m)),R.setAttribute("faceIndex",new Gt(v,f)),e.push(R),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jc(a,e,t){const n=new Un(a,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function X_(a,e,t){const n=new Float32Array(Gi),i=new I(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function eh(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function th(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function Y_(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===No||l===Uo,h=l===As||l===ws;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Qc(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Qc(a)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function q_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j_(a,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],a.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const R=x[y+0],E=x[y+1],A=x[y+2];d.push(R,E,E,A,A,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const R=y+0,E=y+1,A=y+2;d.push(R,E,E,A,A,R)}}else return;const m=new(id(d)?ld:od)(d,1);m.version=_;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function K_(a,e,t){let n;function i(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,p){a.drawElements(n,p,s,d*r),t.update(p,n,1)}function c(d,p,g){g!==0&&(a.drawElementsInstanced(n,p,s,d*r,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Z_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $_(a,e,t){const n=new WeakMap,i=new Je;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=o.attributes.position.count*y,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*R*4*u),A=new rd(E,v,R,u);A.type=Fn,A.needsUpdate=!0;const C=y*4;for(let M=0;M<u;M++){const P=m[M],N=f[M],O=x[M],H=v*R*4*M;for(let X=0;X<P.count;X++){const G=X*C;p===!0&&(i.fromBufferAttribute(P,X),E[H+G+0]=i.x,E[H+G+1]=i.y,E[H+G+2]=i.z,E[H+G+3]=0),g===!0&&(i.fromBufferAttribute(N,X),E[H+G+4]=i.x,E[H+G+5]=i.y,E[H+G+6]=i.z,E[H+G+7]=0),_===!0&&(i.fromBufferAttribute(O,X),E[H+G+8]=i.x,E[H+G+9]=i.y,E[H+G+10]=i.z,E[H+G+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new me(v,R)},n.set(o,d),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:s}}function Q_(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Ed=new It,nh=new yd(1,1),Ad=new rd,wd=new Qf,Rd=new ud,ih=[],sh=[],rh=new Float32Array(16),ah=new Float32Array(9),oh=new Float32Array(4);function Hs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=ih[i];if(s===void 0&&(s=new Float32Array(i),ih[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Pt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Lt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Da(a,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function J_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function e0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2fv(this.addr,e),Lt(t,e)}}function t0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;a.uniform3fv(this.addr,e),Lt(t,e)}}function n0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4fv(this.addr,e),Lt(t,e)}}function i0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;oh.set(n),a.uniformMatrix2fv(this.addr,!1,oh),Lt(t,n)}}function s0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ah.set(n),a.uniformMatrix3fv(this.addr,!1,ah),Lt(t,n)}}function r0(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;rh.set(n),a.uniformMatrix4fv(this.addr,!1,rh),Lt(t,n)}}function a0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function o0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2iv(this.addr,e),Lt(t,e)}}function l0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3iv(this.addr,e),Lt(t,e)}}function c0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4iv(this.addr,e),Lt(t,e)}}function h0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function u0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2uiv(this.addr,e),Lt(t,e)}}function d0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3uiv(this.addr,e),Lt(t,e)}}function f0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4uiv(this.addr,e),Lt(t,e)}}function p0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?(nh.compareFunction=nd,s=nh):s=Ed,t.setTexture2D(e||s,i)}function m0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wd,i)}function g0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rd,i)}function _0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ad,i)}function x0(a){switch(a){case 5126:return J_;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function y0(a,e){a.uniform1fv(this.addr,e)}function v0(a,e){const t=Hs(e,this.size,2);a.uniform2fv(this.addr,t)}function M0(a,e){const t=Hs(e,this.size,3);a.uniform3fv(this.addr,t)}function S0(a,e){const t=Hs(e,this.size,4);a.uniform4fv(this.addr,t)}function b0(a,e){const t=Hs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function T0(a,e){const t=Hs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function E0(a,e){const t=Hs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function A0(a,e){a.uniform1iv(this.addr,e)}function w0(a,e){a.uniform2iv(this.addr,e)}function R0(a,e){a.uniform3iv(this.addr,e)}function C0(a,e){a.uniform4iv(this.addr,e)}function I0(a,e){a.uniform1uiv(this.addr,e)}function P0(a,e){a.uniform2uiv(this.addr,e)}function L0(a,e){a.uniform3uiv(this.addr,e)}function D0(a,e){a.uniform4uiv(this.addr,e)}function F0(a,e,t){const n=this.cache,i=e.length,s=Da(t,i);Pt(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Ed,s[r])}function N0(a,e,t){const n=this.cache,i=e.length,s=Da(t,i);Pt(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||wd,s[r])}function U0(a,e,t){const n=this.cache,i=e.length,s=Da(t,i);Pt(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Rd,s[r])}function O0(a,e,t){const n=this.cache,i=e.length,s=Da(t,i);Pt(n,s)||(a.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Ad,s[r])}function B0(a){switch(a){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return T0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return w0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return I0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return O0}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function lh(a,e){a.seq.push(e),a.map[e.id]=e}function G0(a,e,t){const n=a.name,i=n.length;for(mo.lastIndex=0;;){const s=mo.exec(n),r=mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){lh(t,c===void 0?new z0(o,a,e):new k0(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new H0(o),lh(t,u)),t=u}}}class xa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);G0(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ch(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const V0=37297;let W0=0;function X0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const hh=new Be;function Y0(a){Xe._getMatrix(hh,Xe.workingColorSpace,a);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(a)){case Sa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function uh(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+X0(a.getShaderSource(e),r)}else return i}function q0(a,e){const t=Y0(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(a,e){let t;switch(e){case Uu:t="Linear";break;case Ou:t="Reinhard";break;case Bu:t="Cineon";break;case zu:t="ACESFilmic";break;case ku:t="AgX";break;case Hu:t="Neutral";break;case hf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new I;function K0(){Xe.getLuminanceCoefficients(sa);const a=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z0(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function $0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q0(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ar(a){return a!==""}function dh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(a){return a.replace(J0,tx)}const ex=new Map;function tx(a,e){let t=ke[e];if(t===void 0){const n=ex.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(a){return a.replace(nx,ix)}function ix(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mh(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Fu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function rx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ax(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function ox(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Nu:e="ENVMAP_BLENDING_MULTIPLY";break;case lf:e="ENVMAP_BLENDING_MIX";break;case cf:e="ENVMAP_BLENDING_ADD";break}return e}function lx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cx(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=sx(t),c=rx(t),h=ax(t),u=ox(t),d=lx(t),p=Z0(t),g=$0(s),_=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ci?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,q0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),r=gl(r),r=dh(r,t),r=fh(r,t),o=gl(o),o=dh(o,t),o=fh(o,t),r=ph(r),o=ph(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+r,v=x+f+o,R=ch(i,i.VERTEX_SHADER,y),E=ch(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(a.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(R).trim(),H=i.getShaderInfoLog(E).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,R,E);else{const J=uh(i,R,"vertex"),V=uh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+J+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(R),i.deleteShader(E),C=new xa(i,_),b=Q0(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,V0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let hx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dx(e),t.set(e,n)),n}}class dx{constructor(e){this.id=hx++,this.code=e,this.usedTimes=0}}function fx(a,e,t,n,i,s,r){const o=new Pl,l=new ux,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,N,O){const H=N.fog,X=O.geometry,G=b.isMeshStandardMaterial?N.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),V=J&&J.mapping===Pa?J.image.height:null,ee=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=le!==void 0?le.length:0;let He=0;X.morphAttributes.position!==void 0&&(He=1),X.morphAttributes.normal!==void 0&&(He=2),X.morphAttributes.color!==void 0&&(He=3);let ct,q,te,ge;if(ee){const st=zn[ee];ct=st.vertexShader,q=st.fragmentShader}else ct=b.vertexShader,q=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),ge=l.getFragmentShaderID(b);const re=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,vt=!!b.map,Ke=!!b.matcap,bt=!!J,L=!!b.aoMap,pn=!!b.lightMap,Ye=!!b.bumpMap,qe=!!b.normalMap,Te=!!b.displacementMap,ft=!!b.emissiveMap,be=!!b.metalnessMap,w=!!b.roughnessMap,S=b.anisotropy>0,B=b.clearcoat>0,j=b.dispersion>0,Z=b.iridescence>0,Y=b.sheen>0,Me=b.transmission>0,ae=S&&!!b.anisotropyMap,ue=B&&!!b.clearcoatMap,Ze=B&&!!b.clearcoatNormalMap,Q=B&&!!b.clearcoatRoughnessMap,de=Z&&!!b.iridescenceMap,we=Z&&!!b.iridescenceThicknessMap,Pe=Y&&!!b.sheenColorMap,fe=Y&&!!b.sheenRoughnessMap,je=!!b.specularMap,ze=!!b.specularColorMap,ht=!!b.specularIntensityMap,D=Me&&!!b.transmissionMap,ie=Me&&!!b.thicknessMap,W=!!b.gradientMap,K=!!b.alphaMap,ce=b.alphaTest>0,oe=!!b.alphaHash,Oe=!!b.extensions;let Mt=Ci;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=a.toneMapping);const Vt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:q,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:tn,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:Ke,envMap:bt,envMapMode:bt&&J.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:pn,bumpMap:Ye,normalMap:qe,displacementMap:d&&Te,emissiveMap:ft,normalMapObjectSpace:qe&&b.normalMapType===xf,normalMapTangentSpace:qe&&b.normalMapType===td,metalnessMap:be,roughnessMap:w,anisotropy:S,anisotropyMap:ae,clearcoat:B,clearcoatMap:ue,clearcoatNormalMap:Ze,clearcoatRoughnessMap:Q,dispersion:j,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:we,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:je,specularColorMap:ze,specularIntensityMap:ht,transmission:Me,transmissionMap:D,thicknessMap:ie,gradientMap:W,opaque:b.transparent===!1&&b.blending===Ms&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:oe,combine:b.combine,mapUv:vt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:pn&&_(b.lightMap.channel),bumpMapUv:Ye&&_(b.bumpMap.channel),normalMapUv:qe&&_(b.normalMap.channel),displacementMapUv:Te&&_(b.displacementMap.channel),emissiveMapUv:ft&&_(b.emissiveMap.channel),metalnessMapUv:be&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ae&&_(b.anisotropyMap.channel),clearcoatMapUv:ue&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(b.sheenRoughnessMap.channel),specularMapUv:je&&_(b.specularMap.channel),specularColorMapUv:ze&&_(b.specularColorMap.channel),specularIntensityMapUv:ht&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:ie&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(vt||K),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Mt,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rt,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Oe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&b.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(a.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const M=g[b.type];let P;if(M){const N=zn[M];P=mr.clone(N.uniforms)}else P=b.uniforms;return P}function R(b,M){let P;for(let N=0,O=h.length;N<O;N++){const H=h[N];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new cx(a,M,b,s),h.push(P)),P}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function px(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function mx(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function gh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function _h(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,p,g,_,m){let f=a[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},a[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||mx),n.length>1&&n.sort(d||gh),i.length>1&&i.sort(d||gh)}function h(){for(let u=e,d=a.length;u<d;u++){const p=a[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function gx(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new _h,a.set(n,[r])):i>=s.length?(r=new _h,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function _x(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function xx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let yx=0;function vx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Mx(a){const e=new _x,t=xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new Ne,r=new Ne;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,y=0,v=0,R=0,E=0,A=0;c.sort(vx);for(let b=0,M=c.length;b<M;b++){const P=c[b],N=P.color,O=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*O,u+=N.g*O,d+=N.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(N).multiplyScalar(O),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=J.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(N).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=A,n.version=yx++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(y.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function xh(a){const e=new Mx(a),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Sx(a){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let o;return r===void 0?(o=new xh(a),e.set(i,[o])):s>=r.length?(o=new xh(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const bx=`void main() {
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
}`;function Ex(a,e,t){let n=new Fl;const i=new me,s=new me,r=new Je,o=new Tp({depthPacking:_f}),l=new Ep,c={},h=t.maxTextureSize,u={[ui]:on,[on]:ui,[Rt]:Rt},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:bx,fragmentShader:Tx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let f=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=a.getRenderTarget(),M=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),N=a.state;N.setBlending(oi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=f!==ei&&this.type===ei,H=f===ei&&this.type!==ei;for(let X=0,G=E.length;X<G;X++){const J=E[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ee=V.getFrameExtents();if(i.multiply(ee),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ee.x),i.x=s.x*ee.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ee.y),i.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||O===!0||H===!0){const ve=this.type!==ei?{minFilter:Ht,magFilter:Ht}:{};V.map!==null&&V.map.dispose(),V.map=new Un(i.x,i.y,ve),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();const le=V.getViewportCount();for(let ve=0;ve<le;ve++){const He=V.getViewport(ve);r.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),N.viewport(r),V.updateMatrices(J,ve),n=V.getFrustum(),v(A,C,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===ei&&x(V,C),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,a.setRenderTarget(b,M,P)};function x(E,A){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(A,null,C,d,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(A,null,C,p,_,null)}function y(E,A,C,b){let M=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,O=A.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let X=H[O];X===void 0&&(X=M.clone(),H[O]=X,A.addEventListener("dispose",R)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ei?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=a.properties.get(M);N.light=C}return M}function v(E,A,C,b,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=e.update(E),H=E.material;if(Array.isArray(H)){const X=O.groups;for(let G=0,J=X.length;G<J;G++){const V=X[G],ee=H[V.materialIndex];if(ee&&ee.visible){const le=y(E,ee,b,M);E.onBeforeShadow(a,E,A,C,O,le,V),a.renderBufferDirect(C,null,O,le,E,V),E.onAfterShadow(a,E,A,C,O,le,V)}}}else if(H.visible){const X=y(E,H,b,M);E.onBeforeShadow(a,E,A,C,O,X,null),a.renderBufferDirect(C,null,O,X,E,null),E.onAfterShadow(a,E,A,C,O,X,null)}}const N=E.children;for(let O=0,H=N.length;O<H;O++)v(N[O],A,C,b,M)}function R(E){E.target.removeEventListener("dispose",R);for(const C in c){const b=c[C],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Ax={[Ro]:Co,[Io]:Do,[Po]:Fo,[Es]:Lo,[Co]:Ro,[Do]:Io,[Fo]:Po,[Lo]:Es};function wx(a,e){function t(){let D=!1;const ie=new Je;let W=null;const K=new Je(0,0,0,0);return{setMask:function(ce){W!==ce&&!D&&(a.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){D=ce},setClear:function(ce,oe,Oe,Mt,Vt){Vt===!0&&(ce*=Mt,oe*=Mt,Oe*=Mt),ie.set(ce,oe,Oe,Mt),K.equals(ie)===!1&&(a.clearColor(ce,oe,Oe,Mt),K.copy(ie))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,W=null,K=null,ce=null;return{setReversed:function(oe){if(ie!==oe){const Oe=e.get("EXT_clip_control");ie?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const Mt=ce;ce=null,this.setClear(Mt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?re(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(oe){W!==oe&&!D&&(a.depthMask(oe),W=oe)},setFunc:function(oe){if(ie&&(oe=Ax[oe]),K!==oe){switch(oe){case Ro:a.depthFunc(a.NEVER);break;case Co:a.depthFunc(a.ALWAYS);break;case Io:a.depthFunc(a.LESS);break;case Es:a.depthFunc(a.LEQUAL);break;case Po:a.depthFunc(a.EQUAL);break;case Lo:a.depthFunc(a.GEQUAL);break;case Do:a.depthFunc(a.GREATER);break;case Fo:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}K=oe}},setLocked:function(oe){D=oe},setClear:function(oe){ce!==oe&&(ie&&(oe=1-oe),a.clearDepth(oe),ce=oe)},reset:function(){D=!1,W=null,K=null,ce=null,ie=!1}}}function i(){let D=!1,ie=null,W=null,K=null,ce=null,oe=null,Oe=null,Mt=null,Vt=null;return{setTest:function(st){D||(st?re(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(st){ie!==st&&!D&&(a.stencilMask(st),ie=st)},setFunc:function(st,En,Yn){(W!==st||K!==En||ce!==Yn)&&(a.stencilFunc(st,En,Yn),W=st,K=En,ce=Yn)},setOp:function(st,En,Yn){(oe!==st||Oe!==En||Mt!==Yn)&&(a.stencilOp(st,En,Yn),oe=st,Oe=En,Mt=Yn)},setLocked:function(st){D=st},setClear:function(st){Vt!==st&&(a.clearStencil(st),Vt=st)},reset:function(){D=!1,ie=null,W=null,K=null,ce=null,oe=null,Oe=null,Mt=null,Vt=null}}}const s=new t,r=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,R=null,E=null,A=new ye(0,0,0),C=0,b=!1,M=null,P=null,N=null,O=null,H=null;const X=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=J>=2);let ee=null,le={};const ve=a.getParameter(a.SCISSOR_BOX),He=a.getParameter(a.VIEWPORT),ct=new Je().fromArray(ve),q=new Je().fromArray(He);function te(D,ie,W,K){const ce=new Uint8Array(4),oe=a.createTexture();a.bindTexture(D,oe),a.texParameteri(D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(D,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Oe=0;Oe<W;Oe++)D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY?a.texImage3D(ie,0,a.RGBA,1,1,K,0,a.RGBA,a.UNSIGNED_BYTE,ce):a.texImage2D(ie+Oe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ce);return oe}const ge={};ge[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),ge[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ge[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(a.DEPTH_TEST),r.setFunc(Es),Ye(!1),qe(Jl),re(a.CULL_FACE),L(oi);function re(D){h[D]!==!0&&(a.enable(D),h[D]=!0)}function Re(D){h[D]!==!1&&(a.disable(D),h[D]=!1)}function De(D,ie){return u[D]!==ie?(a.bindFramebuffer(D,ie),u[D]=ie,D===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=ie),D===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ge(D,ie){let W=p,K=!1;if(D){W=d.get(ie),W===void 0&&(W=[],d.set(ie,W));const ce=D.textures;if(W.length!==ce.length||W[0]!==a.COLOR_ATTACHMENT0){for(let oe=0,Oe=ce.length;oe<Oe;oe++)W[oe]=a.COLOR_ATTACHMENT0+oe;W.length=ce.length,K=!0}}else W[0]!==a.BACK&&(W[0]=a.BACK,K=!0);K&&a.drawBuffers(W)}function vt(D){return g!==D?(a.useProgram(D),g=D,!0):!1}const Ke={[Hi]:a.FUNC_ADD,[Wd]:a.FUNC_SUBTRACT,[Xd]:a.FUNC_REVERSE_SUBTRACT};Ke[Yd]=a.MIN,Ke[qd]=a.MAX;const bt={[jd]:a.ZERO,[Kd]:a.ONE,[Zd]:a.SRC_COLOR,[Ao]:a.SRC_ALPHA,[nf]:a.SRC_ALPHA_SATURATE,[ef]:a.DST_COLOR,[Qd]:a.DST_ALPHA,[$d]:a.ONE_MINUS_SRC_COLOR,[wo]:a.ONE_MINUS_SRC_ALPHA,[tf]:a.ONE_MINUS_DST_COLOR,[Jd]:a.ONE_MINUS_DST_ALPHA,[sf]:a.CONSTANT_COLOR,[rf]:a.ONE_MINUS_CONSTANT_COLOR,[af]:a.CONSTANT_ALPHA,[of]:a.ONE_MINUS_CONSTANT_ALPHA};function L(D,ie,W,K,ce,oe,Oe,Mt,Vt,st){if(D===oi){_===!0&&(Re(a.BLEND),_=!1);return}if(_===!1&&(re(a.BLEND),_=!0),D!==Vd){if(D!==m||st!==b){if((f!==Hi||v!==Hi)&&(a.blendEquation(a.FUNC_ADD),f=Hi,v=Hi),st)switch(D){case Ms:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case kn:a.blendFunc(a.ONE,a.ONE);break;case ec:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case tc:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ms:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case kn:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case ec:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case tc:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,R=null,E=null,A.set(0,0,0),C=0,m=D,b=st}return}ce=ce||ie,oe=oe||W,Oe=Oe||K,(ie!==f||ce!==v)&&(a.blendEquationSeparate(Ke[ie],Ke[ce]),f=ie,v=ce),(W!==x||K!==y||oe!==R||Oe!==E)&&(a.blendFuncSeparate(bt[W],bt[K],bt[oe],bt[Oe]),x=W,y=K,R=oe,E=Oe),(Mt.equals(A)===!1||Vt!==C)&&(a.blendColor(Mt.r,Mt.g,Mt.b,Vt),A.copy(Mt),C=Vt),m=D,b=!1}function pn(D,ie){D.side===Rt?Re(a.CULL_FACE):re(a.CULL_FACE);let W=D.side===on;ie&&(W=!W),Ye(W),D.blending===Ms&&D.transparent===!1?L(oi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){M!==D&&(D?a.frontFace(a.CW):a.frontFace(a.CCW),M=D)}function qe(D){D!==Hd?(re(a.CULL_FACE),D!==P&&(D===Jl?a.cullFace(a.BACK):D===Gd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),P=D}function Te(D){D!==N&&(G&&a.lineWidth(D),N=D)}function ft(D,ie,W){D?(re(a.POLYGON_OFFSET_FILL),(O!==ie||H!==W)&&(a.polygonOffset(ie,W),O=ie,H=W)):Re(a.POLYGON_OFFSET_FILL)}function be(D){D?re(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function w(D){D===void 0&&(D=a.TEXTURE0+X-1),ee!==D&&(a.activeTexture(D),ee=D)}function S(D,ie,W){W===void 0&&(ee===null?W=a.TEXTURE0+X-1:W=ee);let K=le[W];K===void 0&&(K={type:void 0,texture:void 0},le[W]=K),(K.type!==D||K.texture!==ie)&&(ee!==W&&(a.activeTexture(W),ee=W),a.bindTexture(D,ie||ge[D]),K.type=D,K.texture=ie)}function B(){const D=le[ee];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{a.compressedTexImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){ct.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),ct.copy(D))}function fe(D){q.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function je(D,ie){let W=c.get(ie);W===void 0&&(W=new WeakMap,c.set(ie,W));let K=W.get(D);K===void 0&&(K=a.getUniformBlockIndex(ie,D.name),W.set(D,K))}function ze(D,ie){const K=c.get(ie).get(D);l.get(ie)!==K&&(a.uniformBlockBinding(ie,K,D.__bindingPointIndex),l.set(ie,K))}function ht(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},ee=null,le={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,R=null,E=null,A=new ye(0,0,0),C=0,b=!1,M=null,P=null,N=null,O=null,H=null,ct.set(0,0,a.canvas.width,a.canvas.height),q.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:re,disable:Re,bindFramebuffer:De,drawBuffers:Ge,useProgram:vt,setBlending:L,setMaterial:pn,setFlipSided:Ye,setCullFace:qe,setLineWidth:Te,setPolygonOffset:ft,setScissorTest:be,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:de,texImage3D:we,updateUBOMapping:je,uniformBlockBinding:ze,texStorage2D:Ze,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Pe,viewport:fe,reset:ht}}function Rx(a,e,t,n,i,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):pr("canvas")}function _(w,S,B){let j=1;const Z=be(w);if((Z.width>B||Z.height>B)&&(j=B/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(j*Z.width),Me=Math.floor(j*Z.height);u===void 0&&(u=g(Y,Me));const ae=S?g(Y,Me):u;return ae.width=Y,ae.height=Me,ae.getContext("2d").drawImage(w,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Me+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){a.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?a.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function y(w,S,B,j,Z=!1){if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=S;if(S===a.RED&&(B===a.FLOAT&&(Y=a.R32F),B===a.HALF_FLOAT&&(Y=a.R16F),B===a.UNSIGNED_BYTE&&(Y=a.R8)),S===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.R8UI),B===a.UNSIGNED_SHORT&&(Y=a.R16UI),B===a.UNSIGNED_INT&&(Y=a.R32UI),B===a.BYTE&&(Y=a.R8I),B===a.SHORT&&(Y=a.R16I),B===a.INT&&(Y=a.R32I)),S===a.RG&&(B===a.FLOAT&&(Y=a.RG32F),B===a.HALF_FLOAT&&(Y=a.RG16F),B===a.UNSIGNED_BYTE&&(Y=a.RG8)),S===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RG8UI),B===a.UNSIGNED_SHORT&&(Y=a.RG16UI),B===a.UNSIGNED_INT&&(Y=a.RG32UI),B===a.BYTE&&(Y=a.RG8I),B===a.SHORT&&(Y=a.RG16I),B===a.INT&&(Y=a.RG32I)),S===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGB8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGB16UI),B===a.UNSIGNED_INT&&(Y=a.RGB32UI),B===a.BYTE&&(Y=a.RGB8I),B===a.SHORT&&(Y=a.RGB16I),B===a.INT&&(Y=a.RGB32I)),S===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(Y=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(Y=a.RGBA16UI),B===a.UNSIGNED_INT&&(Y=a.RGBA32UI),B===a.BYTE&&(Y=a.RGBA8I),B===a.SHORT&&(Y=a.RGBA16I),B===a.INT&&(Y=a.RGBA32I)),S===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(Y=a.RGB9_E5),S===a.RGBA){const Me=Z?Sa:Xe.getTransfer(j);B===a.FLOAT&&(Y=a.RGBA32F),B===a.HALF_FLOAT&&(Y=a.RGBA16F),B===a.UNSIGNED_BYTE&&(Y=Me===rt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(Y=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(Y=a.RGB5_A1)}return(Y===a.R16F||Y===a.R32F||Y===a.RG16F||Y===a.RG32F||Y===a.RGBA16F||Y===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(w,S){let B;return w?S===null||S===Vi||S===Cs?B=a.DEPTH24_STENCIL8:S===Fn?B=a.DEPTH32F_STENCIL8:S===ur&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vi||S===Cs?B=a.DEPTH_COMPONENT24:S===Fn?B=a.DEPTH_COMPONENT32F:S===ur&&(B=a.DEPTH_COMPONENT16),B}function R(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==Nt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){const S=w.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S)}function C(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,j=d.get(B);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(w),Object.keys(j).length===0&&d.delete(B)}n.remove(w)}function b(w){const S=n.get(w);a.deleteTexture(S.__webglTexture);const B=w.source,j=d.get(B);delete j[S.__cacheKey],r.memory.textures--}function M(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)a.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else a.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)a.deleteFramebuffer(S.__webglFramebuffer[j]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let j=0,Z=B.length;j<Z;j++){const Y=n.get(B[j]);Y.__webglTexture&&(a.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(B[j])}n.remove(w)}let P=0;function N(){P=0}function O(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function H(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function X(w,S){const B=n.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,S);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+S)}function G(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+S)}function J(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,S);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+S)}function V(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){te(B,w,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+S)}const ee={[Rs]:a.REPEAT,[vn]:a.CLAMP_TO_EDGE,[va]:a.MIRRORED_REPEAT},le={[Ht]:a.NEAREST,[Vu]:a.NEAREST_MIPMAP_NEAREST,[rr]:a.NEAREST_MIPMAP_LINEAR,[Nt]:a.LINEAR,[da]:a.LINEAR_MIPMAP_NEAREST,[Dn]:a.LINEAR_MIPMAP_LINEAR},ve={[yf]:a.NEVER,[Ef]:a.ALWAYS,[vf]:a.LESS,[nd]:a.LEQUAL,[Mf]:a.EQUAL,[Tf]:a.GEQUAL,[Sf]:a.GREATER,[bf]:a.NOTEQUAL};function He(w,S){if(S.type===Fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Nt||S.magFilter===da||S.magFilter===rr||S.magFilter===Dn||S.minFilter===Nt||S.minFilter===da||S.minFilter===rr||S.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(w,a.TEXTURE_WRAP_S,ee[S.wrapS]),a.texParameteri(w,a.TEXTURE_WRAP_T,ee[S.wrapT]),(w===a.TEXTURE_3D||w===a.TEXTURE_2D_ARRAY)&&a.texParameteri(w,a.TEXTURE_WRAP_R,ee[S.wrapR]),a.texParameteri(w,a.TEXTURE_MAG_FILTER,le[S.magFilter]),a.texParameteri(w,a.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(a.texParameteri(w,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(w,a.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==rr&&S.minFilter!==Dn||S.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ct(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",E));const j=S.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const Y=H(S);if(Y!==w.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,B=!0),Z[Y].usedTimes++;const Me=Z[w.__cacheKey];Me!==void 0&&(Z[w.__cacheKey].usedTimes--,Me.usedTimes===0&&b(S)),w.__cacheKey=Y,w.__webglTexture=Z[Y].texture}return B}function q(w,S,B){let j=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=a.TEXTURE_3D);const Z=ct(w,S),Y=S.source;t.bindTexture(j,w.__webglTexture,a.TEXTURE0+B);const Me=n.get(Y);if(Y.version!==Me.__version||Z===!0){t.activeTexture(a.TEXTURE0+B);const ae=Xe.getPrimaries(Xe.workingColorSpace),ue=S.colorSpace===Ti?null:Xe.getPrimaries(S.colorSpace),Ze=S.colorSpace===Ti||ae===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Q=_(S.image,!1,i.maxTextureSize);Q=ft(S,Q);const de=s.convert(S.format,S.colorSpace),we=s.convert(S.type);let Pe=y(S.internalFormat,de,we,S.colorSpace,S.isVideoTexture);He(j,S);let fe;const je=S.mipmaps,ze=S.isVideoTexture!==!0,ht=Me.__version===void 0||Z===!0,D=Y.dataReady,ie=R(S,Q);if(S.isDepthTexture)Pe=v(S.format===Is,S.type),ht&&(ze?t.texStorage2D(a.TEXTURE_2D,1,Pe,Q.width,Q.height):t.texImage2D(a.TEXTURE_2D,0,Pe,Q.width,Q.height,0,de,we,null));else if(S.isDataTexture)if(je.length>0){ze&&ht&&t.texStorage2D(a.TEXTURE_2D,ie,Pe,je[0].width,je[0].height);for(let W=0,K=je.length;W<K;W++)fe=je[W],ze?D&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(a.TEXTURE_2D,W,Pe,fe.width,fe.height,0,de,we,fe.data);S.generateMipmaps=!1}else ze?(ht&&t.texStorage2D(a.TEXTURE_2D,ie,Pe,Q.width,Q.height),D&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Q.width,Q.height,de,we,Q.data)):t.texImage2D(a.TEXTURE_2D,0,Pe,Q.width,Q.height,0,de,we,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&ht&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Pe,je[0].width,je[0].height,Q.depth);for(let W=0,K=je.length;W<K;W++)if(fe=je[W],S.format!==Mn)if(de!==null)if(ze){if(D)if(S.layerUpdates.size>0){const ce=jc(fe.width,fe.height,S.format,S.type);for(const oe of S.layerUpdates){const Oe=fe.data.subarray(oe*ce/fe.data.BYTES_PER_ELEMENT,(oe+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,oe,fe.width,fe.height,1,de,Oe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,W,Pe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?D&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,Q.depth,de,we,fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,W,Pe,fe.width,fe.height,Q.depth,0,de,we,fe.data)}else{ze&&ht&&t.texStorage2D(a.TEXTURE_2D,ie,Pe,je[0].width,je[0].height);for(let W=0,K=je.length;W<K;W++)fe=je[W],S.format!==Mn?de!==null?ze?D&&t.compressedTexSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(a.TEXTURE_2D,W,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?D&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(a.TEXTURE_2D,W,Pe,fe.width,fe.height,0,de,we,fe.data)}else if(S.isDataArrayTexture)if(ze){if(ht&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ie,Pe,Q.width,Q.height,Q.depth),D)if(S.layerUpdates.size>0){const W=jc(Q.width,Q.height,S.format,S.type);for(const K of S.layerUpdates){const ce=Q.data.subarray(K*W/Q.data.BYTES_PER_ELEMENT,(K+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,de,we,ce)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,we,Q.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,Q.width,Q.height,Q.depth,0,de,we,Q.data);else if(S.isData3DTexture)ze?(ht&&t.texStorage3D(a.TEXTURE_3D,ie,Pe,Q.width,Q.height,Q.depth),D&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,we,Q.data)):t.texImage3D(a.TEXTURE_3D,0,Pe,Q.width,Q.height,Q.depth,0,de,we,Q.data);else if(S.isFramebufferTexture){if(ht)if(ze)t.texStorage2D(a.TEXTURE_2D,ie,Pe,Q.width,Q.height);else{let W=Q.width,K=Q.height;for(let ce=0;ce<ie;ce++)t.texImage2D(a.TEXTURE_2D,ce,Pe,W,K,0,de,we,null),W>>=1,K>>=1}}else if(je.length>0){if(ze&&ht){const W=be(je[0]);t.texStorage2D(a.TEXTURE_2D,ie,Pe,W.width,W.height)}for(let W=0,K=je.length;W<K;W++)fe=je[W],ze?D&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,de,we,fe):t.texImage2D(a.TEXTURE_2D,W,Pe,de,we,fe);S.generateMipmaps=!1}else if(ze){if(ht){const W=be(Q);t.texStorage2D(a.TEXTURE_2D,ie,Pe,W.width,W.height)}D&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,de,we,Q)}else t.texImage2D(a.TEXTURE_2D,0,Pe,de,we,Q);m(S)&&f(j),Me.__version=Y.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function te(w,S,B){if(S.image.length!==6)return;const j=ct(w,S),Z=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,w.__webglTexture,a.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||j===!0){t.activeTexture(a.TEXTURE0+B);const Me=Xe.getPrimaries(Xe.workingColorSpace),ae=S.colorSpace===Ti?null:Xe.getPrimaries(S.colorSpace),ue=S.colorSpace===Ti||Me===ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ze=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!Ze&&!Q?de[K]=_(S.image[K],!0,i.maxCubemapSize):de[K]=Q?S.image[K].image:S.image[K],de[K]=ft(S,de[K]);const we=de[0],Pe=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),je=y(S.internalFormat,Pe,fe,S.colorSpace),ze=S.isVideoTexture!==!0,ht=Y.__version===void 0||j===!0,D=Z.dataReady;let ie=R(S,we);He(a.TEXTURE_CUBE_MAP,S);let W;if(Ze){ze&&ht&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ie,je,we.width,we.height);for(let K=0;K<6;K++){W=de[K].mipmaps;for(let ce=0;ce<W.length;ce++){const oe=W[ce];S.format!==Mn?Pe!==null?ze?D&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Pe,oe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,je,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,oe.width,oe.height,Pe,fe,oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,je,oe.width,oe.height,0,Pe,fe,oe.data)}}}else{if(W=S.mipmaps,ze&&ht){W.length>0&&ie++;const K=be(de[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ie,je,K.width,K.height)}for(let K=0;K<6;K++)if(Q){ze?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Pe,fe,de[K].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,de[K].width,de[K].height,0,Pe,fe,de[K].data);for(let ce=0;ce<W.length;ce++){const Oe=W[ce].image[K].image;ze?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Oe.width,Oe.height,Pe,fe,Oe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,je,Oe.width,Oe.height,0,Pe,fe,Oe.data)}}else{ze?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,fe,de[K]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,je,Pe,fe,de[K]);for(let ce=0;ce<W.length;ce++){const oe=W[ce];ze?D&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Pe,fe,oe.image[K]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,je,Pe,fe,oe.image[K])}}}m(S)&&f(a.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ge(w,S,B,j,Z,Y){const Me=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),ue=y(B.internalFormat,Me,ae,B.colorSpace),Ze=n.get(S),Q=n.get(B);if(Q.__renderTarget=S,!Ze.__hasExternalTextures){const de=Math.max(1,S.width>>Y),we=Math.max(1,S.height>>Y);Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,ue,de,we,S.depth,0,Me,ae,null):t.texImage2D(Z,Y,ue,de,we,0,Me,ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,w),qe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,Z,Q.__webglTexture,0,Ye(S)):(Z===a.TEXTURE_2D||Z>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,Z,Q.__webglTexture,Y),t.bindFramebuffer(a.FRAMEBUFFER,null)}function re(w,S,B){if(a.bindRenderbuffer(a.RENDERBUFFER,w),S.depthBuffer){const j=S.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=v(S.stencilBuffer,Z),Me=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=Ye(S);qe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,Y,S.width,S.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,Y,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,Y,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,w)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const Y=j[Z],Me=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),ue=y(Y.internalFormat,Me,ae,Y.colorSpace),Ze=Ye(S);B&&qe(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ze,ue,S.width,S.height):qe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ze,ue,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ue,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Re(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const Z=j.__webglTexture,Y=Ye(S);if(S.depthTexture.format===Ss)qe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Is)qe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,Y):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function De(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=j}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=a.createRenderbuffer(),re(S.__webglDepthbuffer[j],w,!1);else{const Z=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,Y),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),re(S.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Z),a.framebufferRenderbuffer(a.FRAMEBUFFER,j,a.RENDERBUFFER,Z)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ge(w,S,B){const j=n.get(w);S!==void 0&&ge(j.__webglFramebuffer,w,w.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&De(w)}function vt(w){const S=w.texture,B=n.get(w),j=n.get(S);w.addEventListener("dispose",A);const Z=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=S.version,r.memory.textures++),Y){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[ae][ue]=a.createFramebuffer()}else B.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(Me)for(let ae=0,ue=Z.length;ae<ue;ae++){const Ze=n.get(Z[ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=a.createTexture(),r.memory.textures++)}if(w.samples>0&&qe(w)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const ue=Z[ae];B.__webglColorRenderbuffer[ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Ze=s.convert(ue.format,ue.colorSpace),Q=s.convert(ue.type),de=y(ue.internalFormat,Ze,Q,ue.colorSpace,w.isXRRenderTarget===!0),we=Ye(w);a.renderbufferStorageMultisample(a.RENDERBUFFER,we,de,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),re(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Y){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),He(a.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(B.__webglFramebuffer[ae][ue],w,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ge(B.__webglFramebuffer[ae],w,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&f(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ue=Z.length;ae<ue;ae++){const Ze=Z[ae],Q=n.get(Ze);t.bindTexture(a.TEXTURE_2D,Q.__webglTexture),He(a.TEXTURE_2D,Ze),ge(B.__webglFramebuffer,w,Ze,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,0),m(Ze)&&f(a.TEXTURE_2D)}t.unbindTexture()}else{let ae=a.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),He(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(B.__webglFramebuffer[ue],w,S,a.COLOR_ATTACHMENT0,ae,ue);else ge(B.__webglFramebuffer,w,S,a.COLOR_ATTACHMENT0,ae,0);m(S)&&f(ae),t.unbindTexture()}w.depthBuffer&&De(w)}function Ke(w){const S=w.textures;for(let B=0,j=S.length;B<j;B++){const Z=S[B];if(m(Z)){const Y=x(w),Me=n.get(Z).__webglTexture;t.bindTexture(Y,Me),f(Y),t.unbindTexture()}}}const bt=[],L=[];function pn(w){if(w.samples>0){if(qe(w)===!1){const S=w.textures,B=w.width,j=w.height;let Z=a.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=n.get(w),ae=S.length>1;if(ae)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=a.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=a.STENCIL_BUFFER_BIT)),ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Ze=n.get(S[ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ze,0)}a.blitFramebuffer(0,0,B,j,0,0,B,j,Z,a.NEAREST),l===!0&&(bt.length=0,L.length=0,bt.push(a.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(bt.push(Y),L.push(Y),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,L)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);const Ze=n.get(S[ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,Ze,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function Ye(w){return Math.min(i.maxSamples,w.samples)}function qe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(w){const S=r.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function ft(w,S){const B=w.colorSpace,j=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==tn&&B!==Ti&&(Xe.getTransfer(B)===rt?(j!==Mn||Z!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function Cx(a,e){function t(n,i=Ti){let s;const r=Xe.getTransfer(i);if(n===di)return a.UNSIGNED_BYTE;if(n===bl)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return a.BYTE;if(n===Xu)return a.SHORT;if(n===ur)return a.UNSIGNED_SHORT;if(n===Sl)return a.INT;if(n===Vi)return a.UNSIGNED_INT;if(n===Fn)return a.FLOAT;if(n===li)return a.HALF_FLOAT;if(n===qu)return a.ALPHA;if(n===ju)return a.RGB;if(n===Mn)return a.RGBA;if(n===Ku)return a.LUMINANCE;if(n===Zu)return a.LUMINANCE_ALPHA;if(n===Ss)return a.DEPTH_COMPONENT;if(n===Is)return a.DEPTH_STENCIL;if(n===El)return a.RED;if(n===Al)return a.RED_INTEGER;if(n===$u)return a.RG;if(n===wl)return a.RG_INTEGER;if(n===Rl)return a.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(r===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ho||n===Go||n===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ho||n===Go)return r===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===Yo||n===qo||n===jo||n===Ko||n===Zo||n===$o||n===Qo||n===Jo||n===el||n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return r===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===sl||n===rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_a)return r===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===al||n===ol||n===ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_a)return s.COMPRESSED_RED_RGTC1_EXT;if(n===al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const Ix={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`;class Dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new It,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new Dx,m=t.getContextAttributes();let f=null,x=null;const y=[],v=[],R=new me;let E=null;const A=new sn;A.viewport=new Je;const C=new sn;C.viewport=new Je;const b=[A,C],M=new Gp;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=y[q];return te===void 0&&(te=new go,y[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=y[q];return te===void 0&&(te=new go,y[q]=te),te.getGripSpace()},this.getHand=function(q){let te=y[q];return te===void 0&&(te=new go,y[q]=te),te.getHandSpace()};function O(q){const te=v.indexOf(q.inputSource);if(te===-1)return;const ge=y[te];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||r),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let q=0;q<y.length;q++){const te=v[q];te!==null&&(v[q]=null,y[q].disconnect(te))}P=null,N=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,x=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ge=null,re=null,Re=null;m.depth&&(Re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Is:Ss,re=m.stencil?Cs:Vi);const De={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(De),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Un(d.textureWidth,d.textureHeight,{format:Mn,type:di,depthTexture:new yd(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Un(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let te=0;te<q.removed.length;te++){const ge=q.removed[te],re=v.indexOf(ge);re>=0&&(v[re]=null,y[re].disconnect(ge))}for(let te=0;te<q.added.length;te++){const ge=q.added[te];let re=v.indexOf(ge);if(re===-1){for(let De=0;De<y.length;De++)if(De>=v.length){v.push(ge),re=De;break}else if(v[De]===null){v[De]=ge,re=De;break}if(re===-1)break}const Re=y[re];Re&&Re.connect(ge)}}const G=new I,J=new I;function V(q,te,ge){G.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);const re=G.distanceTo(J),Re=te.projectionMatrix.elements,De=ge.projectionMatrix.elements,Ge=Re[14]/(Re[10]-1),vt=Re[14]/(Re[10]+1),Ke=(Re[9]+1)/Re[5],bt=(Re[9]-1)/Re[5],L=(Re[8]-1)/Re[0],pn=(De[8]+1)/De[0],Ye=Ge*L,qe=Ge*pn,Te=re/(-L+pn),ft=Te*-L;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const be=Ge+Te,w=vt+Te,S=Ye-ft,B=qe+(re-ft),j=Ke*vt/w*be,Z=bt*vt/w*be;q.projectionMatrix.makePerspective(S,B,j,Z,be,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,ge=q.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),M.near=C.near=A.near=te,M.far=C.far=A.far=ge,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|C.layers.mask;const re=q.parent,Re=M.cameras;ee(M,re);for(let De=0;De<Re.length;De++)ee(Re[De],re);Re.length===2?V(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),le(q,M,re)};function le(q,te,ge){ge===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function He(q,te){if(h=te.getViewerPose(c||r),g=te,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let re=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let De=0;De<ge.length;De++){const Ge=ge[De];let vt=null;if(p!==null)vt=p.getViewport(Ge);else{const bt=u.getViewSubImage(d,Ge);vt=bt.viewport,De===0&&(e.setRenderTargetTextures(x,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(x))}let Ke=b[De];Ke===void 0&&(Ke=new sn,Ke.layers.enable(De),Ke.viewport=new Je,b[De]=Ke),Ke.matrix.fromArray(Ge.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ge.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(vt.x,vt.y,vt.width,vt.height),De===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ke)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const De=u.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let ge=0;ge<y.length;ge++){const re=v[ge],Re=y[ge];re!==null&&Re!==void 0&&Re.update(re,te,c||r)}ve&&ve(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ct=new Td;ct.setAnimationLoop(He),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const Bi=new Hn,Nx=new Ne;function Ux(a,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,cd(a)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Bi.copy(v),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ox(a,e,t,n){let i={},s={},r=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(x,R);const E=e.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function h(x){const y=u();x.__bindingPointIndex=y;const v=a.createBuffer(),R=x.__size,E=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,R,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,R=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,y);for(let E=0,A=v.length;E<A;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,M=C.length;b<M;b++){const P=C[b];if(p(P,E,b,R)===!0){const N=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let X=0;X<O.length;X++){const G=O[X],J=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,a.bufferSubData(a.UNIFORM_BUFFER,N+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,N,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(x,y,v,R){const E=x.value,A=y+"_"+v;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const C=R[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(x){const y=x.uniforms;let v=0;const R=16;for(let A=0,C=y.length;A<C;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,P=b.length;M<P;M++){const N=b[M],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,X=O.length;H<X;H++){const G=O[H],J=_(G),V=v%R,ee=V%J.boundary,le=V+ee;v+=ee,le!==0&&R-le<J.storage&&(v+=R-le),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=J.storage}}}const E=v%R;return E>0&&(v+=R-E),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const x in i)a.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Bx{constructor(e={}){const{canvas:t=Vf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let R=!1,E=0,A=0,C=null,b=-1,M=null;const P=new Je,N=new Je;let O=null;const H=new ye(0);let X=0,G=t.width,J=t.height,V=1,ee=null,le=null;const ve=new Je(0,0,G,J),He=new Je(0,0,G,J);let ct=!1;const q=new Fl;let te=!1,ge=!1;this.transmissionResolutionScale=1;const re=new Ne,Re=new Ne,De=new I,Ge=new Je,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function bt(){return C===null?V:1}let L=n;function pn(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const F="webgl2";if(L=pn(F,T),L===null)throw pn(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,qe,Te,ft,be,w,S,B,j,Z,Y,Me,ae,ue,Ze,Q,de,we,Pe,fe,je,ze,ht,D;function ie(){Ye=new q_(L),Ye.init(),ze=new Cx(L,Ye),qe=new H_(L,Ye,e,ze),Te=new wx(L,Ye),qe.reverseDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),ft=new Z_(L),be=new px,w=new Rx(L,Ye,Te,be,qe,ze,ft),S=new V_(v),B=new Y_(v),j=new im(L),ht=new z_(L,j),Z=new j_(L,j,ft,ht),Y=new Q_(L,Z,j,ft),Pe=new $_(L,qe,w),Q=new G_(be),Me=new fx(v,S,B,Ye,qe,ht,Q),ae=new Ux(v,be),ue=new gx,Ze=new Sx(Ye),we=new B_(v,S,B,Te,Y,p,l),de=new Ex(v,Y,qe),D=new Ox(L,ft,qe,Te),fe=new k_(L,Ye,ft),je=new K_(L,Ye,ft),ft.programs=Me.programs,v.capabilities=qe,v.extensions=Ye,v.properties=be,v.renderLists=ue,v.shadowMap=de,v.state=Te,v.info=ft}ie();const W=new Fx(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,J,!1))},this.getSize=function(T){return T.set(G,J)},this.setSize=function(T,F,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,J=F,t.width=Math.floor(T*V),t.height=Math.floor(F*V),z===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(G*V,J*V).floor()},this.setDrawingBufferSize=function(T,F,z){G=T,J=F,V=z,t.width=Math.floor(T*z),t.height=Math.floor(F*z),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,F,z,k){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,F,z,k),Te.viewport(P.copy(ve).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(He)},this.setScissor=function(T,F,z,k){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,F,z,k),Te.scissor(N.copy(He).multiplyScalar(V).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){Te.setScissorTest(ct=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(T=!0,F=!0,z=!0){let k=0;if(T){let U=!1;if(C!==null){const $=C.texture.format;U=$===Rl||$===wl||$===Al}if(U){const $=C.texture.type,se=$===di||$===Vi||$===ur||$===Cs||$===bl||$===Tl,he=we.getClearColor(),pe=we.getClearAlpha(),Le=he.r,Fe=he.g,Ee=he.b;se?(g[0]=Le,g[1]=Fe,g[2]=Ee,g[3]=pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Le,_[1]=Fe,_[2]=Ee,_[3]=pe,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}F&&(k|=L.DEPTH_BUFFER_BIT),z&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),we.dispose(),ue.dispose(),Ze.dispose(),be.dispose(),S.dispose(),B.dispose(),Y.dispose(),ht.dispose(),D.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Yl),W.removeEventListener("sessionend",ql),Pi.stop()};function K(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=ft.autoReset,F=de.enabled,z=de.autoUpdate,k=de.needsUpdate,U=de.type;ie(),ft.autoReset=T,de.enabled=F,de.autoUpdate=z,de.needsUpdate=k,de.type=U}function oe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const F=T.target;F.removeEventListener("dispose",Oe),Mt(F)}function Mt(T){Vt(T),be.remove(T)}function Vt(T){const F=be.get(T).programs;F!==void 0&&(F.forEach(function(z){Me.releaseProgram(z)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,z,k,U,$){F===null&&(F=vt);const se=U.isMesh&&U.matrixWorld.determinant()<0,he=Fd(T,F,z,k,U);Te.setMaterial(k,se);let pe=z.index,Le=1;if(k.wireframe===!0){if(pe=Z.getWireframeAttribute(z),pe===void 0)return;Le=2}const Fe=z.drawRange,Ee=z.attributes.position;let $e=Fe.start*Le,et=(Fe.start+Fe.count)*Le;$!==null&&($e=Math.max($e,$.start*Le),et=Math.min(et,($.start+$.count)*Le)),pe!==null?($e=Math.max($e,0),et=Math.min(et,pe.count)):Ee!=null&&($e=Math.max($e,0),et=Math.min(et,Ee.count));const Et=et-$e;if(Et<0||Et===1/0)return;ht.setup(U,k,he,z,pe);let St,Qe=fe;if(pe!==null&&(St=j.get(pe),Qe=je,Qe.setIndex(St)),U.isMesh)k.wireframe===!0?(Te.setLineWidth(k.wireframeLinewidth*bt()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(U.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*bt()),U.isLineSegments?Qe.setMode(L.LINES):U.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else U.isPoints?Qe.setMode(L.POINTS):U.isSprite&&Qe.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Ut=U._multiDrawCounts,tt=U._multiDrawCount,An=pe?j.get(pe).bytesPerElement:1,Yi=be.get(k).currentProgram.getUniforms();for(let ln=0;ln<tt;ln++)Yi.setValue(L,"_gl_DrawID",ln),Qe.render(Ae[ln]/An,Ut[ln])}else if(U.isInstancedMesh)Qe.renderInstances($e,Et,U.count);else if(z.isInstancedBufferGeometry){const Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ut=Math.min(z.instanceCount,Ae);Qe.renderInstances($e,Et,Ut)}else Qe.render($e,Et)};function st(T,F,z){T.transparent===!0&&T.side===Rt&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,wr(T,F,z),T.side=ui,T.needsUpdate=!0,wr(T,F,z),T.side=Rt):wr(T,F,z)}this.compile=function(T,F,z=null){z===null&&(z=T),f=Ze.get(z),f.init(F),y.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),T!==z&&T.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const k=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const $=U.material;if($)if(Array.isArray($))for(let se=0;se<$.length;se++){const he=$[se];st(he,z,U),k.add(he)}else st($,z,U),k.add($)}),y.pop(),f=null,k},this.compileAsync=function(T,F,z=null){const k=this.compile(T,F,z);return new Promise(U=>{function $(){if(k.forEach(function(se){be.get(se).currentProgram.isReady()&&k.delete(se)}),k.size===0){U(T);return}setTimeout($,10)}Ye.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let En=null;function Yn(T){En&&En(T)}function Yl(){Pi.stop()}function ql(){Pi.start()}const Pi=new Td;Pi.setAnimationLoop(Yn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(T){En=T,W.setAnimationLoop(T),T===null?Pi.stop():Pi.start()},W.addEventListener("sessionstart",Yl),W.addEventListener("sessionend",ql),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,C),f=Ze.get(T,y.length),f.init(F),y.push(f),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,te=Q.init(this.clippingPlanes,ge),m=ue.get(T,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const $=v.xr.getDepthSensingMesh();$!==null&&Fa($,F,-1/0,v.sortObjects)}Fa(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,le),Ke=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ke&&we.addToRenderList(m,T),this.info.render.frame++,te===!0&&Q.beginShadows();const z=f.state.shadowsArray;de.render(z,T,F),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(f.setupLights(),F.isArrayCamera){const $=F.cameras;if(U.length>0)for(let se=0,he=$.length;se<he;se++){const pe=$[se];Kl(k,U,T,pe)}Ke&&we.render(T);for(let se=0,he=$.length;se<he;se++){const pe=$[se];jl(m,T,pe,pe.viewport)}}else U.length>0&&Kl(k,U,T,F),Ke&&we.render(T),jl(m,T,F);C!==null&&A===0&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,F),ht.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],te===!0&&Q.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Fa(T,F,z,k){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){k&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const se=Y.update(T),he=T.material;he.visible&&m.push(T,se,he,z,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const se=Y.update(T),he=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ge.copy(se.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(he)){const pe=se.groups;for(let Le=0,Fe=pe.length;Le<Fe;Le++){const Ee=pe[Le],$e=he[Ee.materialIndex];$e&&$e.visible&&m.push(T,se,$e,z,Ge.z,Ee)}}else he.visible&&m.push(T,se,he,z,Ge.z,null)}}const $=T.children;for(let se=0,he=$.length;se<he;se++)Fa($[se],F,z,k)}function jl(T,F,z,k){const U=T.opaque,$=T.transmissive,se=T.transparent;f.setupLightsView(z),te===!0&&Q.setGlobalState(v.clippingPlanes,z),k&&Te.viewport(P.copy(k)),U.length>0&&Ar(U,F,z),$.length>0&&Ar($,F,z),se.length>0&&Ar(se,F,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Kl(T,F,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Un(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?li:di,minFilter:Dn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const $=f.state.transmissionRenderTarget[k.id],se=k.viewport||P;$.setSize(se.z*v.transmissionResolutionScale,se.w*v.transmissionResolutionScale);const he=v.getRenderTarget();v.setRenderTarget($),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&we.render(z);const pe=v.toneMapping;v.toneMapping=Ci;const Le=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),te===!0&&Q.setGlobalState(v.clippingPlanes,k),Ar(T,z,k),w.updateMultisampleRenderTarget($),w.updateRenderTargetMipmap($),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ee=0,$e=F.length;Ee<$e;Ee++){const et=F[Ee],Et=et.object,St=et.geometry,Qe=et.material,Ae=et.group;if(Qe.side===Rt&&Et.layers.test(k.layers)){const Ut=Qe.side;Qe.side=on,Qe.needsUpdate=!0,Zl(Et,z,k,St,Qe,Ae),Qe.side=Ut,Qe.needsUpdate=!0,Fe=!0}}Fe===!0&&(w.updateMultisampleRenderTarget($),w.updateRenderTargetMipmap($))}v.setRenderTarget(he),v.setClearColor(H,X),Le!==void 0&&(k.viewport=Le),v.toneMapping=pe}function Ar(T,F,z){const k=F.isScene===!0?F.overrideMaterial:null;for(let U=0,$=T.length;U<$;U++){const se=T[U],he=se.object,pe=se.geometry,Le=k===null?se.material:k,Fe=se.group;he.layers.test(z.layers)&&Zl(he,F,z,pe,Le,Fe)}}function Zl(T,F,z,k,U,$){T.onBeforeRender(v,F,z,k,U,$),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(v,F,z,k,T,$),U.transparent===!0&&U.side===Rt&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,v.renderBufferDirect(z,F,k,U,T,$),U.side=ui,U.needsUpdate=!0,v.renderBufferDirect(z,F,k,U,T,$),U.side=Rt):v.renderBufferDirect(z,F,k,U,T,$),T.onAfterRender(v,F,z,k,U,$)}function wr(T,F,z){F.isScene!==!0&&(F=vt);const k=be.get(T),U=f.state.lights,$=f.state.shadowsArray,se=U.state.version,he=Me.getParameters(T,U.state,$,F,z),pe=Me.getProgramCacheKey(he);let Le=k.programs;k.environment=T.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Oe),Le=new Map,k.programs=Le);let Fe=Le.get(pe);if(Fe!==void 0){if(k.currentProgram===Fe&&k.lightsStateVersion===se)return Ql(T,he),Fe}else he.uniforms=Me.getUniforms(T),T.onBeforeCompile(he,v),Fe=Me.acquireProgram(he,pe),Le.set(pe,Fe),k.uniforms=he.uniforms;const Ee=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),Ql(T,he),k.needsLights=Ud(T),k.lightsStateVersion=se,k.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Fe,k.uniformsList=null,Fe}function $l(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=xa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ql(T,F){const z=be.get(T);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function Fd(T,F,z,k,U){F.isScene!==!0&&(F=vt),w.resetTextureUnits();const $=F.fog,se=k.isMeshStandardMaterial?F.environment:null,he=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:tn,pe=(k.isMeshStandardMaterial?B:S).get(k.envMap||se),Le=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let Et=Ci;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=v.toneMapping);const St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qe=St!==void 0?St.length:0,Ae=be.get(k),Ut=f.state.lights;if(te===!0&&(ge===!0||T!==M)){const Zt=T===M&&k.id===b;Q.setState(k,T,Zt)}let tt=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Ut.state.version||Ae.outputColorSpace!==he||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==pe||k.fog===!0&&Ae.fog!==$||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Q.numPlanes||Ae.numIntersection!==Q.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Fe||Ae.morphTargets!==Ee||Ae.morphNormals!==$e||Ae.morphColors!==et||Ae.toneMapping!==Et||Ae.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ae.__version=k.version);let An=Ae.currentProgram;tt===!0&&(An=wr(k,F,U));let Yi=!1,ln=!1,Vs=!1;const _t=An.getUniforms(),mn=Ae.uniforms;if(Te.useProgram(An.program)&&(Yi=!0,ln=!0,Vs=!0),k.id!==b&&(b=k.id,ln=!0),Yi||M!==T){Te.buffers.depth.getReversed()?(re.copy(T.projectionMatrix),Xf(re),Yf(re),_t.setValue(L,"projectionMatrix",re)):_t.setValue(L,"projectionMatrix",T.projectionMatrix),_t.setValue(L,"viewMatrix",T.matrixWorldInverse);const nn=_t.map.cameraPosition;nn!==void 0&&nn.setValue(L,De.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_t.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ln=!0,Vs=!0)}if(U.isSkinnedMesh){_t.setOptional(L,U,"bindMatrix"),_t.setOptional(L,U,"bindMatrixInverse");const Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(L,"boneTexture",Zt.boneTexture,w))}U.isBatchedMesh&&(_t.setOptional(L,U,"batchingTexture"),_t.setValue(L,"batchingTexture",U._matricesTexture,w),_t.setOptional(L,U,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",U._indirectTexture,w),_t.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",U._colorsTexture,w));const gn=z.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Pe.update(U,z,An),(ln||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,_t.setValue(L,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(mn.envMap.value=pe,mn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),ln&&(_t.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Nd(mn,Vs),$&&k.fog===!0&&ae.refreshFogUniforms(mn,$),ae.refreshMaterialUniforms(mn,k,V,J,f.state.transmissionRenderTarget[T.id]),xa.upload(L,$l(Ae),mn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xa.upload(L,$l(Ae),mn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_t.setValue(L,"center",U.center),_t.setValue(L,"modelViewMatrix",U.modelViewMatrix),_t.setValue(L,"normalMatrix",U.normalMatrix),_t.setValue(L,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Zt=k.uniformsGroups;for(let nn=0,Na=Zt.length;nn<Na;nn++){const Li=Zt[nn];D.update(Li,An),D.bind(Li,An)}}return An}function Nd(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ud(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,F,z){be.get(T.texture).__webglTexture=F,be.get(T.depthTexture).__webglTexture=z;const k=be.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const z=be.get(T);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};const Od=L.createFramebuffer();this.setRenderTarget=function(T,F=0,z=0){C=T,E=F,A=z;let k=!0,U=null,$=!1,se=!1;if(T){const pe=be.get(T);if(pe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(pe.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(pe.__hasExternalTextures)w.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(pe.__boundDepthTexture!==Ee){if(Ee!==null&&be.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(se=!0);const Fe=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?U=Fe[F][z]:U=Fe[F],$=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?U=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[z]:U=Fe,P.copy(T.viewport),N.copy(T.scissor),O=T.scissorTest}else P.copy(ve).multiplyScalar(V).floor(),N.copy(He).multiplyScalar(V).floor(),O=ct;if(z!==0&&(U=Od),Te.bindFramebuffer(L.FRAMEBUFFER,U)&&k&&Te.drawBuffers(T,U),Te.viewport(P),Te.scissor(N),Te.setScissorTest(O),$){const pe=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,pe.__webglTexture,z)}else if(se){const pe=be.get(T.texture),Le=F;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,z,Le)}else if(T!==null&&z!==0){const pe=be.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pe.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(T,F,z,k,U,$,se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){Te.bindFramebuffer(L.FRAMEBUFFER,he);try{const pe=T.texture,Le=pe.format,Fe=pe.type;if(!qe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-k&&z>=0&&z<=T.height-U&&L.readPixels(F,z,k,U,ze.convert(Le),ze.convert(Fe),$)}finally{const pe=C!==null?be.get(C).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(T,F,z,k,U,$,se){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&se!==void 0&&(he=he[se]),he){const pe=T.texture,Le=pe.format,Fe=pe.type;if(!qe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-k&&z>=0&&z<=T.height-U){Te.bindFramebuffer(L.FRAMEBUFFER,he);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,$.byteLength,L.STREAM_READ),L.readPixels(F,z,k,U,ze.convert(Le),ze.convert(Fe),0);const $e=C!==null?be.get(C).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,$e);const et=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wf(L,et,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,$),L.deleteBuffer(Ee),L.deleteSync(et),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,z=0){T.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(T.image.width*k),$=Math.floor(T.image.height*k),se=F!==null?F.x:0,he=F!==null?F.y:0;w.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,se,he,U,$),Te.unbindTexture()};const Bd=L.createFramebuffer(),zd=L.createFramebuffer();this.copyTextureToTexture=function(T,F,z=null,k=null,U=0,$=null){T.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],F=arguments[2],$=arguments[3]||0,z=null),$===null&&(U!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=U,U=0):$=0);let se,he,pe,Le,Fe,Ee,$e,et,Et;const St=T.isCompressedTexture?T.mipmaps[$]:T.image;if(z!==null)se=z.max.x-z.min.x,he=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Fe=z.min.y,Ee=z.isBox3?z.min.z:0;else{const gn=Math.pow(2,-U);se=Math.floor(St.width*gn),he=Math.floor(St.height*gn),T.isDataArrayTexture?pe=St.depth:T.isData3DTexture?pe=Math.floor(St.depth*gn):pe=1,Le=0,Fe=0,Ee=0}k!==null?($e=k.x,et=k.y,Et=k.z):($e=0,et=0,Et=0);const Qe=ze.convert(F.format),Ae=ze.convert(F.type);let Ut;F.isData3DTexture?(w.setTexture3D(F,0),Ut=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Ut=L.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Ut=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=L.getParameter(L.UNPACK_ROW_LENGTH),An=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Yi=L.getParameter(L.UNPACK_SKIP_PIXELS),ln=L.getParameter(L.UNPACK_SKIP_ROWS),Vs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee);const _t=T.isDataArrayTexture||T.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const gn=be.get(T),Zt=be.get(F),nn=be.get(gn.__renderTarget),Na=be.get(Zt.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Li=0;Li<pe;Li++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(T).__webglTexture,U,Ee+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,be.get(F).__webglTexture,$,Et+Li)),L.blitFramebuffer(Le,Fe,se,he,$e,et,se,he,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||T.isRenderTargetTexture||be.has(T)){const gn=be.get(T),Zt=be.get(F);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Bd),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,zd);for(let nn=0;nn<pe;nn++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,U,Ee+nn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,U),mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,$,Et+nn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,$),U!==0?L.blitFramebuffer(Le,Fe,se,he,$e,et,se,he,L.COLOR_BUFFER_BIT,L.NEAREST):mn?L.copyTexSubImage3D(Ut,$,$e,et,Et+nn,Le,Fe,se,he):L.copyTexSubImage2D(Ut,$,$e,et,Le,Fe,se,he);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Ut,$,$e,et,Et,se,he,pe,Qe,Ae,St.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,$,$e,et,Et,se,he,pe,Qe,St.data):L.texSubImage3D(Ut,$,$e,et,Et,se,he,pe,Qe,Ae,St):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,$,$e,et,se,he,Qe,Ae,St.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,$,$e,et,St.width,St.height,Qe,St.data):L.texSubImage2D(L.TEXTURE_2D,$,$e,et,se,he,Qe,Ae,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,An),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,ln),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vs),$===0&&F.generateMipmaps&&L.generateMipmap(Ut),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,F,z=null,k=null,U=0){return T.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],F=arguments[3],U=arguments[4]||0),_s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,z,k,U)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Te.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Cd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zx=new Er(-1,1,1,-1,0,1);class kx extends Dt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const Hx=new kx;class Xl{constructor(e){this._mesh=new Se(Hx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Gx extends Gs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mr.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yh extends Gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Vx extends Gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gx(Cd),this.copyPass.material.blending=oi,this.clock=new pl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yh!==void 0&&(r instanceof yh?n=!0:r instanceof Vx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vh extends Gs{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Xx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Us extends Gs{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(s,r,{type:li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Un(s,r,{type:li});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Un(s,r,{type:li});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),r=Math.round(r/2)}const o=Xx;this.highPassUniforms=mr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new me(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Cd;this.copyUniforms=mr.clone(h.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:kn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ot,this.fsQuad=new Xl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Us.BlurDirectionX=new me(1,0);Us.BlurDirectionY=new me(0,1);const Yx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qx extends Gs{constructor(){super();const e=Yx;this.uniforms=mr.clone(e.uniforms),this.material=new bp({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Xl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const yi=2,_o=0,jx=2,Kx=858922,Zx=380,$x=1,Qx=3500,Jx=200,ey=200,ty=200,ny=0,iy=10,sy=1e3,ry=2e3,Mh=4871528,Sh=1.6,bh=16774630,Th=2.5,Eh=400,Ah=600,wh=200,Rh=2048,ra=1e3,ay=3500,oy=-5e-4,ly=1710628,cy=2e-4,hy=.4,uy=.35,dy=.9;class Ie{static scene;static camera;static renderer;static composer;static clock;static currentFrustumSize=Zx;static groundGroup;static cityGroup;static effectsGroup;static playerGroup;static ufoScene;static setFrustumSize(e){this.currentFrustumSize=e,this.updateCameraProjection()}static getFrustumSize(){return this.currentFrustumSize}static updateCameraProjection(){if(!this.camera)return;const e=window.innerWidth/window.innerHeight,t=e<1?this.currentFrustumSize/Math.max(.6,e):this.currentFrustumSize;this.camera.left=-t*e/yi,this.camera.right=t*e/yi,this.camera.top=t/yi,this.camera.bottom=-t/yi,this.camera.updateProjectionMatrix()}static init(e){this.renderer=new Bx({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,jx)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fu,e.appendChild(this.renderer.domElement),this.scene=new bc,this.scene.background=new ye(Kx);const t=window.innerWidth/window.innerHeight,n=this.currentFrustumSize;this.camera=new Er(n*t/-yi,n*t/yi,n/yi,n/-yi,$x,Qx),this.camera.position.set(Jx,ey,ty),this.camera.lookAt(_o,_o,_o),this.groundGroup=new gt,this.cityGroup=new gt,this.playerGroup=new gt,this.effectsGroup=new gt,this.groundGroup.renderOrder=ny,this.cityGroup.renderOrder=iy,this.playerGroup.renderOrder=sy,this.effectsGroup.renderOrder=ry,this.scene.add(this.groundGroup),this.scene.add(this.cityGroup),this.scene.add(this.playerGroup),this.scene.add(this.effectsGroup),this.ufoScene=new bc;const i=new Wc(Mh,Sh),s=new fl(bh,Th);s.position.set(Eh,Ah,wh),this.ufoScene.add(i),this.ufoScene.add(s);const r=new Wc(Mh,Sh);this.scene.add(r);const o=new fl(bh,Th);o.position.set(Eh,Ah,wh),o.castShadow=!0,o.shadow.mapSize.width=Rh,o.shadow.mapSize.height=Rh,o.shadow.camera.left=-ra,o.shadow.camera.right=ra,o.shadow.camera.top=ra,o.shadow.camera.bottom=-ra,o.shadow.camera.far=ay,o.shadow.bias=oy,this.scene.add(o),this.scene.fog=new Ll(ly,cy),this.clock=new pl,this.composer=new Wx(this.renderer);const l=new vh(this.scene,this.camera);this.composer.addPass(l);const c=new Us(new me(window.innerWidth,window.innerHeight),hy,uy,dy);this.composer.addPass(c);const h=new vh(this.ufoScene,this.camera);h.clear=!1,h.clearDepth=!0,this.composer.addPass(h);const u=new qx;this.composer.addPass(u),this.clock=new pl,window.addEventListener("resize",this.onWindowResize.bind(this))}static onWindowResize(){this.updateCameraProjection(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}static render(){this.composer.render()}}const fy=0,py=4,Ch=-Math.PI/2,Ih=.9,Ph=.05;class Lh{static layer0Group;static init(){this.layer0Group=new gt,this.layer0Group.name="Layer0_ConnectedRoadNetwork",Ie.groundGroup.add(this.layer0Group)}static buildMapMesh(){const e=Ce.getAllCells(),t=2048,n=t/Ce.GRID_DIM,i=document.createElement("canvas");i.width=t,i.height=t;const s=i.getContext("2d");for(let g=0;g<Ce.GRID_DIM;g++)for(let _=0;_<Ce.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n;m.terrainType===_e.WATER?(s.fillStyle="#0a2f64",s.fillRect(f,x,n,n),s.fillStyle="#114488",s.fillRect(f+4,x+6,n-8,2),s.fillRect(f+8,x+18,n-14,2)):m.terrainType===_e.WATER_SHORE?(s.fillStyle="#1888c8",s.fillRect(f,x,n,n),s.fillStyle="#8be4f8",s.fillRect(f+2,x+6,n-4,3),s.fillStyle="#ffffff",s.fillRect(f+6,x+18,n-10,2)):m.terrainType===_e.SAND?(s.fillStyle="#d4b27a",s.fillRect(f,x,n,n),s.fillStyle="#c4a268",s.fillRect(f+4,x+4,2,2),s.fillRect(f+18,x+10,2,2),s.fillRect(f+10,x+22,2,2)):(s.fillStyle="#2d6a2d",s.fillRect(f,x,n,n))}for(let g=0;g<Ce.GRID_DIM;g++)for(let _=0;_<Ce.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n,y=m.terrainType;(y===_e.ROAD_STRAIGHT_NS||y===_e.ROAD_STRAIGHT_EW||y===_e.ROAD_INTERSECTION||y===_e.ROAD_ROUNDABOUT||y>=_e.ROAD_CURVE_NE&&y<=_e.ROAD_CURVE_SW)&&(s.fillStyle="#1c1f24",s.fillRect(f,x,n,n),y===_e.ROAD_STRAIGHT_NS?(s.fillStyle="#d0d7e0",s.fillRect(f+1,x,1,n),s.fillRect(f+n-2,x,1,n),s.fillStyle="#f5b800",s.fillRect(f+n/2-1,x,2,n),s.fillStyle="#ffffff",s.fillRect(f+n*.25,x+4,1,8),s.fillRect(f+n*.25,x+20,1,8),s.fillRect(f+n*.75,x+4,1,8),s.fillRect(f+n*.75,x+20,1,8)):y===_e.ROAD_STRAIGHT_EW?(s.fillStyle="#d0d7e0",s.fillRect(f,x+1,n,1),s.fillRect(f,x+n-2,n,1),s.fillStyle="#f5b800",s.fillRect(f,x+n/2-1,n,2),s.fillStyle="#ffffff",s.fillRect(f+4,x+n*.25,8,1),s.fillRect(f+20,x+n*.25,8,1),s.fillRect(f+4,x+n*.75,8,1),s.fillRect(f+20,x+n*.75,8,1)):y===_e.ROAD_INTERSECTION?(s.fillStyle="#ffffff",s.fillRect(f+4,x+2,n-8,3),s.fillRect(f+4,x+n-5,n-8,3),s.fillRect(f+2,x+4,3,n-8),s.fillRect(f+n-5,x+4,3,n-8),s.fillStyle="#6a7280",s.fillRect(f,x,2,2),s.fillRect(f+n-2,x,2,2),s.fillRect(f,x+n-2,2,2),s.fillRect(f+n-2,x+n-2,2,2)):y===_e.ROAD_ROUNDABOUT?(s.strokeStyle="#d0d7e0",s.lineWidth=1,s.strokeRect(f+.5,x+.5,n-1,n-1),s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(f+n/2,x+n/2,n*.38,0,Math.PI*2),s.stroke()):y===_e.ROAD_CURVE_NE?(s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(f+n,x,n/2,Math.PI,Math.PI/2,!0),s.stroke(),s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(f+n,x,n-1,Math.PI,Math.PI/2,!0),s.stroke()):y===_e.ROAD_CURVE_NW?(s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(f,x,n/2,0,Math.PI/2,!1),s.stroke(),s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(f,x,n-1,0,Math.PI/2,!1),s.stroke()):y===_e.ROAD_CURVE_SE?(s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(f+n,x+n,n/2,Math.PI,3*Math.PI/2,!1),s.stroke(),s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(f+n,x+n,n-1,Math.PI,3*Math.PI/2,!1),s.stroke()):y===_e.ROAD_CURVE_SW&&(s.strokeStyle="#f5b800",s.lineWidth=2,s.beginPath(),s.arc(f,x+n,n/2,0,3*Math.PI/2,!0),s.stroke(),s.strokeStyle="#d0d7e0",s.lineWidth=1,s.beginPath(),s.arc(f,x+n,n-1,0,3*Math.PI/2,!0),s.stroke()))}for(let g=0;g<Ce.GRID_DIM;g++)for(let _=0;_<Ce.GRID_DIM;_++){const m=e[g][_],f=g*n,x=_*n;m.terrainType===_e.SIDEWALK?(s.fillStyle="#5a6473",s.fillRect(f,x,n,n),s.strokeStyle="#424c58",s.lineWidth=1,s.strokeRect(f+.5,x+.5,n-1,n-1)):m.terrainType===_e.PLAZA_STONE&&(s.fillStyle="#9e8e78",s.fillRect(f,x,n,n),s.strokeStyle="#6e6050",s.lineWidth=1,s.strokeRect(f+.5,x+.5,n-1,n-1))}const r=new Aa(i);r.wrapS=vn,r.wrapT=vn,r.minFilter=Nt,r.magFilter=Nt,r.anisotropy=py,r.needsUpdate=!0;const o=new Tn(Ce.MAP_BOUNDS,Ce.MAP_BOUNDS),l=new Ct({map:r,roughness:Ih,metalness:Ph,depthWrite:!1}),c=new Se(o,l);c.rotation.x=Ch,c.position.set(0,fy,0),c.receiveShadow=!0,c.renderOrder=0;const h=3500,u=new Tn(h,h),d=new Ct({color:2976301,roughness:Ih,metalness:Ph,depthWrite:!1}),p=new Se(u,d);for(p.rotation.x=Ch,p.position.set(0,-.2,0),p.receiveShadow=!0,p.renderOrder=-10;this.layer0Group.children.length>0;){const g=this.layer0Group.children[0];this.layer0Group.remove(g),g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material.forEach(_=>{_.map&&_.map.dispose(),_.dispose()}):(g.material.map&&g.material.map.dispose(),g.material.dispose()))}this.layer0Group.add(p),this.layer0Group.add(c)}}function Dh(a,e){if(e===mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===cl||e===ed){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===cl)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class my extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Fy(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const c=hr.extractUrlBase(e);r=hr.resolveURL(c,this.path)}else r=hr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new bd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Id){try{r[We.KHR_BINARY_GLTF]=new Ny(e)}catch(u){i&&i(u);return}s=JSON.parse(r[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:r[u]=new xy;break;case We.KHR_DRACO_MESH_COMPRESSION:r[u]=new Uy(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:r[u]=new Oy;break;case We.KHR_MESH_QUANTIZATION:r[u]=new By;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function gy(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _y{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kl(h),c.distance=u;break;case"spot":c=new Bp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class xy{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ot}extendParams(e,t,n){const i=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],tn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(i)}}class yy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class vy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(o,o)}return Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class by{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ot)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ey{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(o[0],o[1],o[2],tn),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class wy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(o[0],o[1],o[2],tn),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ot)),Promise.all(s)}}class Ry{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Cy{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Py{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ly{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Dy{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){const p=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class Fy{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new Ne,m=new I,f=new bn,x=new I(1,1,1),y=new xr(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,f,x));for(const v in l)if(v==="_COLOR_0"){const R=l[v];y.instanceColor=new _r(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);ut.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Id="glTF",tr=12,Fh={JSON:1313821514,BIN:5130562};class Ny{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-tr,s=new DataView(e,tr);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Fh.JSON){const c=new Uint8Array(e,tr+r,o);this.content=n.decode(c)}else if(l===Fh.BIN){const c=tr+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Uy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const u=_l[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=_l[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ts[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},o,c,tn,d)})})}}class Oy{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class By{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Pd extends Tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,x=1-m,y=f-d+u;for(let v=0;v!==o;v++){const R=r[_+v+o],E=r[_+v+l]*h,A=r[g+v+o],C=r[g+v]*h;s[v]=x*R+y*E+m*A+f*C}return s}}const zy=new bn;class ky extends Pd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zy.fromArray(s).normalize().toArray(s),s}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:Ht,9729:Nt,9984:Vu,9985:da,9986:rr,9987:Dn},Uh={33071:vn,33648:va,10497:Rs},xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hy={CUBICSPLINE:void 0,LINEAR:fr,STEP:dr},yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gy(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),a.DefaultMaterial}function zi(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vy(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function Wy(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xy(a){let e;const t=a.extensions&&a.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vo(t.attributes):e=a.indices+":"+vo(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+vo(a.targets[n]);return e}function vo(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function xl(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yy(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qy=new Ne;class jy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new Bl(this.options.manager):this.textureLoader=new Hp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return zi(s,o,i),ti(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(hr.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=xo[i.type],o=Ts[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new Gt(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=xo[i.type],c=Ts[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(x);y||(_=new c(o,f*p,i.count*p/h),y=new dd(_,p/h),t.cache.add(x,y)),m=new gr(y,l,d%p/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new Gt(_,l,g);if(i.sparse!==void 0){const f=xo.SCALAR,x=Ts[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new x(r[1],y,i.sparse.count*f),E=new c(r[2],v,i.sparse.count*l);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=R.length;A<C;A++){const b=R[A];if(m.setX(b,E[A*l]),l>=2&&m.setY(b,E[A*l+1]),l>=3&&m.setZ(b,E[A*l+2]),l>=4&&m.setW(b,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Nh[d.magFilter]||Nt,h.minFilter=Nh[d.minFilter]||Dn,h.wrapS=Uh[d.wrapS]||Rs,h.wrapT=Uh[d.wrapT]||Rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==Nt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=o.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,d(m)}),t.load(hr.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),ti(u,r),u.userData.mimeType=r.mimeType||Yy(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new xd,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new yr,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const u=i[We.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],tn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Rt);const h=s.alphaMode||yo.OPAQUE;if(h===yo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===yo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ot&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==ot&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ot){const u=s.emissiveFactor;o.emissive=new ye().setRGB(u[0],u[1],u[2],tn)}return s.emissiveTexture!==void 0&&r!==ot&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){const u=new r(o);return s.name&&(u.name=s.name),ti(u,s),t.associations.set(u,{materials:e}),s.extensions&&zi(i,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Oh(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Xy(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Oh(new Dt,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Gy(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[p];let f;const x=c[p];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new gp(_,x):new Se(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?f.geometry=Dh(f.geometry,ed):m.mode===xn.TRIANGLE_FAN&&(f.geometry=Dh(f.geometry,cl));else if(m.mode===xn.LINES)f=new _d(_,x);else if(m.mode===xn.LINE_STRIP)f=new vr(_,x);else if(m.mode===xn.LINE_LOOP)f=new Mp(_,x);else if(m.mode===xn.POINTS)f=new Sp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Wy(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),ti(f,s),m.extensions&&zi(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&zi(i,u[0],s),u[0];const d=new gt;s.extensions&&zi(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Gf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){o.push(u);const d=new Ne;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let x=0,y=d.length;x<y;x++){const v=d[x],R=p[x],E=g[x],A=_[x],C=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=n._createAnimationTracks(v,R,E,A,C);if(b)for(let M=0;M<b.length;M++)f.push(b[M])}return new dl(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)r.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,qy)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new md:c.length>1?h=new gt:c.length===1?h=c[0]:h=new ut,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),ti(h,s),s.extensions&&zi(n,h,s),s.matrix!==void 0){const u=new Ne;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gt;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&zi(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof On||d instanceof It)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],o=e.name?e.name:e.uuid,l=[];vi[s.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(vi[s.path]){case vi.weights:c=Ds;break;case vi.rotation:c=Fs;break;case vi.position:case vi.scale:c=Ns;break;default:switch(n.itemSize){case 1:c=Ds;break;case 2:case 3:default:c=Ns;break}break}const h=i.interpolation!==void 0?Hy[i.interpolation]:fr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+vi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xl(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Fs?ky:Pd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ky(a,e,t){const n=e.attributes,i=new Bn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){const h=xl(Ts[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,l=new I;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=xl(Ts[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new Vn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Oh(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=_l[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Xe.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),ti(a,e),Ky(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vy(a,e.targets,t):a})}class en{static loader=new Bl;static gltfLoader=new my;static textures=new Map;static gltfModels=new Map;static mapData=null;static spriteOffsets={};static getAssetUrl(e){if(!e||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:"))return e;const t=e.startsWith("/")?e.slice(1):e;let n="./";if(typeof document<"u"&&document.baseURI)try{const s=new URL(document.baseURI).pathname;s&&s!=="/"&&(n=s)}catch{}return`${n.endsWith("/")?n:`${n}/`}${t}`}static async loadAll(){const e=[];e.push(this.loadGLTF("skyscraper_demolition","/3d/skyscrapper1/skyscraper_demolition.glb").catch(n=>{console.warn("[AssetLoader] GLTF load notice:",n)})),e.push(this.loadGLTF("spaceship_hq","/3d/spaceship_hq/spaceship_hq.glb").catch(n=>{console.warn("[AssetLoader] spaceship_hq 3D load notice:",n)})),e.push(this.loadGLTF("cyber_reactor","/3d/cyber_reactor/cyber_reactor.glb").catch(n=>{console.warn("[AssetLoader] cyber_reactor 3D load notice:",n)})),e.push(this.loadGLTF("financial_tower","/3d/financial_tower/financial_tower.glb").catch(n=>{console.warn("[AssetLoader] financial_tower 3D load notice:",n)})),e.push(fetch(this.getAssetUrl("/map_data.json")).then(n=>n.json()).then(n=>{this.mapData=n}).catch(n=>console.error("Failed to load map data:",n))),e.push(fetch(this.getAssetUrl("/sprite_offsets.json")).then(n=>n.json()).then(n=>{this.spriteOffsets=n}).catch(n=>console.error("Failed to load sprite offsets:",n))),e.push(this.loadTexture("ground","/city_background_topdown_red.png",!1));const t=(n,i=!1)=>n===0?"00_pristine.png":i&&n===14?"14_rubble.png":`${n<10?"0":""}${n}_damaged_${n}.png`;e.push(this.loadTexture("building_1_stage_0",`/buildingv2/hospital/png/${t(0,!0)}`)),e.push(this.loadTexture("building_2_stage_0",`/buildingv2/mall/png/${t(0,!0)}`)),e.push(this.loadTexture("building_3_stage_0",`/buildingv2/school/png/${t(0,!0)}`)),e.push(this.loadTexture("building_4_stage_0",`/buildingv2/warehouse/png/${t(0,!1)}`)),e.push(this.loadTexture("building_5_stage_0",`/buildingv2/skyscraper/png/${t(0,!0)}`)),e.push(this.loadTexture("building_b1_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b2_stage_0","/buildingv2/shop_lowrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b3_stage_0","/buildingv2/tower_midrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_b4_stage_0","/buildingv2/skyscraper_highrise/png/state_000_pristine.png")),e.push(this.loadTexture("building_res_bronze_stage_0","/buildingv2/residential_bronze_penthouses/png/00_pristine.png")),e.push(this.loadTexture("building_res_sky_stage_0","/buildingv2/residential_sky_gardens/png/00_pristine.png")),e.push(this.loadTexture("building_sky_cyber_stage_0","/buildingv2/skyscraper_cyber_spire/png/00_pristine.png")),e.push(this.loadTexture("building_sky_artdeco_stage_0","/buildingv2/skyscraper_artdeco_titan/png/00_pristine.png")),e.push(this.loadTexture("building_sky_biotech_stage_0","/buildingv2/skyscraper_biotech_helix/png/00_pristine.png")),e.push(this.loadTexture("building_hospital_civic_stage_0","/buildingv2/hospital_civic/png/state_000_pristine.png")),e.push(this.loadTexture("building_mall_shopping_stage_0","/buildingv2/mall_shopping/png/state_000_pristine.png")),e.push(this.loadTexture("building_school_civic_stage_0","/buildingv2/school_civic/png/state_000_pristine.png")),e.push(this.loadTexture("building_spaceship_hq_stage_0","/buildingv2/spaceship_hq/png/state_000_pristine.png")),e.push(this.loadTexture("building_statue_liberty_stage_0","/buildingv2/statue_liberty/png/state_000_pristine.png")),e.push(this.loadTexture("building_pentagon_defense_stage_0","/buildingv2/pentagon_defense/png/state_000_pristine.png")),e.push(this.loadTexture("building_mega_stadium_stage_0",`/buildingv2/mall/png/${t(0,!0)}`)),setTimeout(()=>{for(let d=1;d<15;d++)this.loadTexture(`building_1_stage_${d}`,`/buildingv2/hospital/png/${t(d,!0)}`),this.loadTexture(`building_2_stage_${d}`,`/buildingv2/mall/png/${t(d,!0)}`),this.loadTexture(`building_3_stage_${d}`,`/buildingv2/school/png/${t(d,!0)}`),this.loadTexture(`building_4_stage_${d}`,`/buildingv2/warehouse/png/${t(d,!1)}`),this.loadTexture(`building_5_stage_${d}`,`/buildingv2/skyscraper/png/${t(d,!0)}`),this.loadTexture(`building_mega_stadium_stage_${d}`,`/buildingv2/mall/png/${t(d,!0)}`);["state_033_shattered_front.png","state_066_facade_breached.png","state_100_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_b1_stage_${p+1}`,`/buildingv2/shop_lowrise/png/${d}`),this.loadTexture(`building_b2_stage_${p+1}`,`/buildingv2/shop_lowrise/png/${d}`)}),["state_033_roof_hvac_destroyed.png","state_066_mid_floors_gutted.png","state_100_collapsed_ruins.png"].forEach((d,p)=>{this.loadTexture(`building_b3_stage_${p+1}`,`/buildingv2/tower_midrise/png/${d}`),this.loadTexture(`building_res_bronze_stage_${p+1}`,`/buildingv2/tower_midrise/png/${d}`)}),["state_066_midsection_crater.png","state_100_skeleton_ruin.png"].forEach((d,p)=>{this.loadTexture(`building_b4_stage_${p+1}`,`/buildingv2/skyscraper_highrise/png/${d}`),this.loadTexture(`building_res_sky_stage_${p+1}`,`/buildingv2/skyscraper_highrise/png/${d}`)}),["state_033_needle_antenna_snap.png","state_066_laser_conduit_overload.png","state_100_core_meltdown_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_sky_cyber_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_artdeco_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`),this.loadTexture(`building_sky_biotech_stage_${p+1}`,`/buildingv2/sky_cyber/png/${d}`)}),["state_033_ambulance_bay_blasted.png","state_033_helipad_destroyed.png","state_066_er_block_gutted.png","state_100_hospital_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_hospital_civic_stage_${p+1}`,`/buildingv2/hospital_civic/png/${d}`)}),["state_033_atrium_glass_caved.png","state_033_parking_plaza_crater.png","state_066_retail_wings_gutted.png","state_100_mall_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_mall_shopping_stage_${p+1}`,`/buildingv2/mall_shopping/png/${d}`)}),["state_033_east_wing_breached.png","state_033_west_wing_breached.png","state_066_courtyard_crater.png","state_100_campus_rubble.png"].forEach((d,p)=>{this.loadTexture(`building_school_civic_stage_${p+1}`,`/buildingv2/school_civic/png/${d}`)}),["state_033_helipad_tarmac_crater.png","state_033_outer_ring_breach.png","state_066_fortress_core_gutted.png","state_100_bunker_ruins.png"].forEach((d,p)=>{this.loadTexture(`building_pentagon_defense_stage_${p+1}`,`/buildingv2/pentagon_defense/png/${d}`)}),["state_050_head_torch_snapped.png","state_100_pedestal_shattered.png"].forEach((d,p)=>{this.loadTexture(`building_statue_liberty_stage_${p+1}`,`/buildingv2/statue_liberty/png/${d}`)})},50),setTimeout(()=>{for(let n=0;n<11;n++)this.loadTexture(`fx_blast_${n}`,`/blast/frame_${n}.png`);for(let n=0;n<7;n++)this.loadTexture(`fx_blast360_${n}`,`/blast360/frame_${n}.png`);for(let n=0;n<10;n++)this.loadTexture(`fx_fire_${n}`,`/fire/frame_${n}.png`);this.loadTexture("fx_crater","/crater.png",!1)},80),await Promise.all(e)}static async loadTexture(e,t,n=!0){const i=this.getAssetUrl(t);return new Promise(s=>{if(this.textures.has(e)){s(this.textures.get(e));return}this.loader.load(i,r=>{n?(r.minFilter=Ht,r.magFilter=Ht,r.generateMipmaps=!1):(r.minFilter=Dn,r.magFilter=Nt),r.wrapS=vn,r.wrapT=vn,this.textures.set(e,r),s(r)},void 0,r=>{console.warn(`[AssetLoader] Texture '${e}' at ${t} failed to load. Proceeding with fallback.`),s(null)})})}static getTexture(e){if(this.textures.has(e))return this.textures.get(e);const t=e.match(/^(building_[a-zA-Z0-9_]+_stage_)(\d+)$/);if(t){const n=parseInt(t[2],10),i=t[1];for(let s=n;s>=0;s--){const r=`${i}${s}`;if(this.textures.has(r))return this.textures.get(r)}if(this.textures.has(`${i}0`))return this.textures.get(`${i}0`)}return null}static getSpriteOffset(e,t){const n=this.spriteOffsets[`building_${e}`];if(!n)return null;for(let i=t;i>=0;i--){const s=n[i]||n[i.toString()];if(s)return s}return n[0]||null}static async loadGLTF(e,t){const n=this.getAssetUrl(t);return new Promise(i=>{if(this.gltfModels.has(e)){i(this.gltfModels.get(e));return}this.gltfLoader.load(n,s=>{console.log(`[AssetLoader] Successfully loaded 3D GLTF asset [${e}] from ${t}`,s),this.gltfModels.set(e,s),i(s)},void 0,s=>{console.error(`[AssetLoader] ERROR loading 3D GLTF asset [${e}] from ${t}:`,s),i(null)})})}static getGLTF(e){return this.gltfModels.get(e)||null}}const Jn=0,Zy=.02,$y=.01,Qy=.005,aa=128,Yt=64,Jy=5,Bh=60,ev=10,zh=55,kh=12,tv=30,nv=25,iv=15,sv=-Math.PI/2,Hh=.95,Gh=.05,ds=80;class Gn{static decalGroup;static decalTextures=new Map;static unitGeometry;static scorchMaterial;static craterMaterial;static scorchMesh;static craterMesh;static scorchIndex=Jn;static scorchCount=Jn;static craterIndex=Jn;static craterCount=Jn;static dummy=new ut;static init(){this.decalGroup=new gt,this.decalGroup.name="DecalLayer_L2",this.decalGroup.position.y=Zy,Ie.groundGroup.add(this.decalGroup),this.createDecalTextures(),this.unitGeometry=new Tn(1,1);const e=this.decalTextures.get("scorch"),t=en.getTexture("fx_crater"),n=t||this.decalTextures.get("crater");this.scorchMaterial=new Ct({map:e,transparent:!0,depthWrite:!1,roughness:Hh,metalness:Gh}),this.craterMaterial=new Ct({map:n,transparent:!0,depthWrite:!1,roughness:Hh,metalness:Gh}),t||new Bl().load(en.getAssetUrl("/crater.png"),i=>{i.minFilter=Dn,i.magFilter=Nt,this.craterMaterial.map=i,this.craterMaterial.needsUpdate=!0}),this.scorchMesh=new xr(this.unitGeometry,this.scorchMaterial,ds),this.scorchMesh.count=Jn,this.scorchMesh.receiveShadow=!0,this.scorchMesh.renderOrder=10,this.craterMesh=new xr(this.unitGeometry,this.craterMaterial,ds),this.craterMesh.count=Jn,this.craterMesh.receiveShadow=!0,this.craterMesh.renderOrder=10,this.decalGroup.add(this.scorchMesh),this.decalGroup.add(this.craterMesh)}static createDecalTextures(){const e=()=>{const n=document.createElement("canvas");n.width=aa,n.height=aa;const i=n.getContext("2d"),s=i.createRadialGradient(Yt,Yt,Jy,Yt,Yt,Bh);s.addColorStop(0,"rgba(10, 10, 10, 0.9)"),s.addColorStop(.4,"rgba(40, 25, 20, 0.7)"),s.addColorStop(.7,"rgba(80, 50, 30, 0.3)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Yt,Yt,Bh,Jn,Math.PI*2),i.fill(),i.strokeStyle="rgba(15, 10, 8, 0.6)",i.lineWidth=2;for(let o=Jn;o<kh;o++){const l=o/kh*Math.PI*2+(Math.random()-.5)*.2,c=tv+Math.random()*nv;i.beginPath(),i.moveTo(Yt,Yt),i.lineTo(Yt+Math.cos(l)*c,Yt+Math.sin(l)*c),i.stroke()}const r=new Aa(n);return r.needsUpdate=!0,r},t=()=>{const n=document.createElement("canvas");n.width=aa,n.height=aa;const i=n.getContext("2d"),s=i.createRadialGradient(Yt,Yt,ev,Yt,Yt,zh);s.addColorStop(0,"rgba(5, 5, 5, 0.95)"),s.addColorStop(.3,"rgba(30, 20, 15, 0.85)"),s.addColorStop(.6,"rgba(70, 50, 35, 0.5)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.beginPath(),i.arc(Yt,Yt,zh,Jn,Math.PI*2),i.fill();const r=new Aa(n);return r.needsUpdate=!0,r};this.decalTextures.set("scorch",e()),this.decalTextures.set("crater",t())}static spawnDecal(e,t,n,i=iv){const s=n==="crater",r=s?this.craterMesh:this.scorchMesh,o=s?this.craterIndex:this.scorchIndex;this.dummy.position.set(e,$y+Math.random()*Qy,t),this.dummy.rotation.set(sv,0,Math.random()*Math.PI*2),this.dummy.scale.set(i,i,1),this.dummy.updateMatrix(),r.setMatrixAt(o,this.dummy.matrix),r.instanceMatrix.needsUpdate=!0,s?(this.craterIndex=(this.craterIndex+1)%ds,this.craterCount<ds&&(this.craterCount++,this.craterMesh.count=this.craterCount)):(this.scorchIndex=(this.scorchIndex+1)%ds,this.scorchCount<ds&&(this.scorchCount++,this.scorchMesh.count=this.scorchCount))}}class wa{static init(){Ce.init(),Gn.init(),Lh.init()}static finalizeMap(){Lh.buildMapMesh()}}class rv{particles=[];debris=[];freeParticleIndices=[];freeDebrisIndices=[];constructor(e=1e3,t=600){for(let n=0;n<e;n++)this.particles.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,maxLife:0,active:!1,type:"spark"}),this.freeParticleIndices.push(n);for(let n=0;n<t;n++)this.debris.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,gravity:35,active:!1,size:.5,rx:0,ry:0,bounces:0,color:8930338}),this.freeDebrisIndices.push(n)}tick(e){for(let t=0;t<this.particles.length;t++){const n=this.particles[t];n.active&&(n.type==="smoke"?(n.vy+=1.5*e,n.vx*=1-.5*e,n.vz*=1-.5*e):n.type==="fire_ember"&&(n.vy+=2.4*e,n.vx+=Math.sin(n.life*12)*.8*e,n.vz+=Math.cos(n.life*12)*.8*e),n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.life+=e,n.life>=n.maxLife&&(n.active=!1,this.freeParticleIndices.push(t)))}for(let t=0;t<this.debris.length;t++){const n=this.debris[t];n.active&&(n.vy-=n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.rx+=n.vy*e*.1,n.ry+=n.vx*e*.1,n.y<0&&(n.y=0,n.vy*=-.35,n.vx*=.7,n.vz*=.7,n.bounces++,n.bounces>=5&&(n.active=!1,this.freeDebrisIndices.push(t))))}}spawnParticle(e,t,n,i,s,r,o,l="spark"){const c=this.freeParticleIndices.pop();if(c!==void 0){const h=this.particles[c];h.x=e,h.y=t,h.z=n,h.vx=i,h.vy=s,h.vz=r,h.life=0,h.maxLife=o,h.type=l,h.active=!0}}spawnDebris(e,t,n,i,s,r,o=.5,l=8930338){const c=this.freeDebrisIndices.pop();if(c!==void 0){const h=this.debris[c];h.x=e,h.y=t,h.z=n,h.vx=i,h.vy=s,h.vz=r,h.size=o,h.rx=0,h.ry=0,h.bounces=0,h.color=l,h.active=!0}}}const Jt=new rv,nr=0,oa=3,av=.2,ov=8,lv=8,Vh=16777215,Mo=1,cv=.5,hv=2,uv=.7,Wh=.05,So=1,Xh={spark:new ye(16768324),dust:new ye(11176038),smoke:new ye(4473924),brick:new ye(8930338),fire_ember:new ye(16737809)};class Yh{static particleMesh;static debrisMesh;static dummy=new ut;static tempColor=new ye;static emberHotColor=new ye(16763955);static emberCoolColor=new ye(13378048);static init(){const e=new br(av,ov,lv),t=new ot({color:Vh});this.particleMesh=new xr(e,t,Jt.particles.length),this.particleMesh.instanceMatrix.setUsage(Rr),this.particleMesh.instanceColor=new _r(new Float32Array(Jt.particles.length*oa),oa),this.particleMesh.instanceColor.setUsage(Rr),Ie.effectsGroup.add(this.particleMesh);const n=new Bt(Mo,Mo,Mo),i=new Ct({color:Vh});this.debrisMesh=new xr(n,i,Jt.debris.length),this.debrisMesh.instanceMatrix.setUsage(Rr),this.debrisMesh.instanceColor=new _r(new Float32Array(Jt.debris.length*oa),oa),this.debrisMesh.instanceColor.setUsage(Rr),this.debrisMesh.castShadow=!0,Ie.effectsGroup.add(this.debrisMesh)}static tick(e){if(!this.particleMesh||!this.debrisMesh)return;let t=nr;for(let i=nr;i<Jt.particles.length;i++){const s=Jt.particles[i];if(s.active){this.dummy.position.set(s.x,s.y,s.z);const r=s.life/s.maxLife;if(s.type==="smoke"){const o=cv+r*hv;this.dummy.scale.set(o,o,o)}else if(s.type==="fire_ember"){const o=Math.max(Wh,.45*(So-r*.5));this.dummy.scale.set(o,o,o)}else{const o=Math.max(Wh,So-r);this.dummy.scale.set(o,o,o)}if(this.dummy.updateMatrix(),this.particleMesh.setMatrixAt(t,this.dummy.matrix),s.type==="fire_ember"?this.tempColor.copy(this.emberHotColor).lerp(this.emberCoolColor,r):this.tempColor.copy(Xh[s.type]||Xh.spark),s.type==="smoke"){const o=So-r*uv;this.tempColor.multiplyScalar(o)}this.particleMesh.setColorAt(t,this.tempColor),t++}}this.particleMesh.count=t,this.particleMesh.instanceMatrix.needsUpdate=!0,this.particleMesh.instanceColor&&(this.particleMesh.instanceColor.needsUpdate=!0);let n=nr;for(let i=nr;i<Jt.debris.length;i++){const s=Jt.debris[i];s.active&&(this.dummy.position.set(s.x,s.y,s.z),this.dummy.scale.set(s.size,s.size,s.size),this.dummy.rotation.set(s.rx,s.ry,nr),this.dummy.updateMatrix(),this.debrisMesh.setMatrixAt(n,this.dummy.matrix),this.tempColor.setHex(s.color),this.debrisMesh.setColorAt(n,this.tempColor),n++)}this.debrisMesh.count=n,this.debrisMesh.instanceMatrix.needsUpdate=!0,this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0)}}class it{static nextEntityId=1;static entities=new Set;static systems=[];static createEntity(){const e=this.nextEntityId++;return this.entities.add(e),e}static destroyEntity(e){this.entities.delete(e)}static addSystem(e){this.systems.push(e)}static tick(e){for(const t of this.systems)t(e)}}var Ln=(a=>(a.TOP_LEFT="TOP_LEFT",a.TOP_CENTER="TOP_CENTER",a.TOP_RIGHT="TOP_RIGHT",a.MID_LEFT="MID_LEFT",a.CENTER="CENTER",a.MID_RIGHT="MID_RIGHT",a.BASE_LEFT="BASE_LEFT",a.BASE_CENTER="BASE_CENTER",a.BASE_RIGHT="BASE_RIGHT",a))(Ln||{});const xt=()=>[{id:"TOP_LEFT",u0:0,v0:0,u1:.33,v1:.33,hpWeight:1,structureWeight:.05},{id:"TOP_CENTER",u0:.33,v0:0,u1:.66,v1:.33,hpWeight:1.5,structureWeight:.15},{id:"TOP_RIGHT",u0:.66,v0:0,u1:1,v1:.33,hpWeight:1,structureWeight:.05},{id:"MID_LEFT",u0:0,v0:.33,u1:.33,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"CENTER",u0:.33,v0:.33,u1:.66,v1:.66,hpWeight:2,structureWeight:.3},{id:"MID_RIGHT",u0:.66,v0:.33,u1:1,v1:.66,hpWeight:1.2,structureWeight:.1},{id:"BASE_LEFT",u0:0,v0:.66,u1:.33,v1:1,hpWeight:1.5,structureWeight:.05},{id:"BASE_CENTER",u0:.33,v0:.66,u1:.66,v1:1,hpWeight:2.5,structureWeight:.15},{id:"BASE_RIGHT",u0:.66,v0:.66,u1:1,v1:1,hpWeight:1.5,structureWeight:.05}],hi={1:xt(),2:xt(),3:xt(),4:xt(),5:xt(),b1:xt(),b2:xt(),b3:xt(),b4:xt(),res_bronze:xt(),res_sky:xt(),sky_artdeco:xt(),sky_biotech:xt(),sky_cyber:xt(),mega_titan:xt(),mega_stadium:xt(),spaceship_hq:xt(),cyber_reactor:xt(),financial_tower:xt(),statue_liberty:xt(),pentagon_defense:xt(),hospital_civic:xt(),mall_shopping:xt(),school_civic:xt()},yt=new Map,Tt=new Map,zt=new Map,Ra=new Map,dv=new Map,ai=new Map,rn=new Set,jt=new Map;function fv(a){const e=new Map,t=new Map,n=a.clone();return Ld(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ld(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)Ld(a.children[n],e.children[n],t)}class Ue{static keys={};static pointerDown=!1;static pointerSecondaryDown=!1;static mouseX=0;static mouseY=0;static screenWidth=window.innerWidth;static screenHeight=window.innerHeight;static joystickVector={x:0,y:0};static isMobile=!1;static virtualFirePrimary=!1;static virtualFireSecondary=!1;static setVirtualJoystick(e,t){this.joystickVector.x=e,this.joystickVector.y=t}static setVirtualFirePrimary(e){this.virtualFirePrimary=e}static setVirtualFireSecondary(e){this.virtualFireSecondary=e}static init(){window.addEventListener("keydown",t=>{t.code&&(this.keys[t.code]=!0),t.key&&(this.keys[t.key]=!0,this.keys[t.key.toLowerCase()]=!0),(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))&&t.preventDefault()}),window.addEventListener("keyup",t=>{t.code&&(this.keys[t.code]=!1),t.key&&(this.keys[t.key]=!1,this.keys[t.key.toLowerCase()]=!1)}),window.addEventListener("pointerdown",t=>{t.button===2?this.pointerSecondaryDown=!0:this.pointerDown=!0}),window.addEventListener("pointerup",t=>{t.button===2?this.pointerSecondaryDown=!1:this.pointerDown=!1}),window.addEventListener("contextmenu",t=>{t.preventDefault()});const e=t=>{this.mouseX=t.clientX,this.mouseY=t.clientY};window.addEventListener("pointermove",e,{passive:!0}),window.addEventListener("mousemove",e,{passive:!0}),window.addEventListener("resize",()=>{this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight})}static isKeyDown(e){return!!this.keys[e]}static isPointerDown(){return this.pointerDown||this.virtualFirePrimary}static isSecondaryPointerDown(){return this.pointerSecondaryDown||this.virtualFireSecondary}static getMouseNDC(){return{x:this.mouseX/this.screenWidth*2-1,y:-(this.mouseY/this.screenHeight)*2+1}}}class ya{static raycaster=new Vl;static camera;static intersectableObjects=[];static objectToEntityMap=new Map;static init(e){this.camera=e}static registerObject(e,t){this.intersectableObjects.push(e),this.objectToEntityMap.set(e.uuid,t)}static unregisterObject(e){const t=this.intersectableObjects.indexOf(e);t!==-1&&this.intersectableObjects.splice(t,1),this.objectToEntityMap.delete(e.uuid)}static getIntersectedEntity(){if(!this.camera)return null;const e=Ue.getMouseNDC(),t=new me(e.x,e.y);this.raycaster.setFromCamera(t,this.camera);const n=this.raycaster.intersectObjects(this.intersectableObjects,!0);if(n.length>0)for(const i of n){let s=i.object;for(;s;){const r=this.objectToEntityMap.get(s.uuid);if(r!==void 0)return r;s=s.parent}}return null}}const qh=0,jh=.5,pv=0,mv=.01,gv=.36,_v=1.3,xv=65,yv=38,vv=140;class Ca{static zoneObjects=new Map;static allZoneMeshes=[];static raycaster=new Vl;static pointerVector=new me;static tempVec=new I;static createZonesForBuilding(e,t,n){for(const i of n){const s=i.u1-i.u0,r=i.v1-i.v0,o=new Tn(s,r),l=new ot({visible:!1,transparent:!0,opacity:pv}),c=new Se(o,l),h=i.u0+s/2,u=i.v0+r/2;c.position.x=h-jh,c.position.y=jh-u,c.position.z=mv,t.add(c),this.zoneObjects.set(c.uuid,{entity:e,zone:i.id,uvCenter:new me(h,u)}),this.allZoneMeshes.push(c)}}static getHitZone(e){if(this.allZoneMeshes.length===qh)return null;const t=Ue.getMouseNDC();this.pointerVector.set(t.x,t.y),this.raycaster.setFromCamera(this.pointerVector,e);const n=this.raycaster.intersectObjects(this.allZoneMeshes,!1);if(n.length===qh)return null;if(n.length===1){const r=this.zoneObjects.get(n[0].object.uuid);if(!r)return null;const o=Tt.get(r.entity);return o&&o.currentHP<=0?null:{...r,point:n[0].point.clone()}}let i=null,s=1/0;for(let r=0;r<n.length;r++){const o=n[r],l=this.zoneObjects.get(o.object.uuid);if(!l)continue;const c=Tt.get(l.entity);if(c&&c.currentHP<=0)continue;const h=o.object.parent;if(!h)continue;h.getWorldPosition(this.tempVec),this.tempVec.project(e);const u=this.tempVec.x-t.x,d=this.tempVec.y-t.y;let p=u*u+d*d;const g=h.scale.y,_=h.scale.x;g<=xv||_<=yv?p*=gv:g>=vv&&(p*=_v);const m=l.uvCenter.x-.5,f=l.uvCenter.y-.5,x=p+(m*m+f*f)*.002;x<s&&(s=x,i={...l,point:o.point.clone()})}if(!i){const r=n[0],o=this.zoneObjects.get(r.object.uuid);o&&(i={...o,point:r.point.clone()})}return i}static clearAll(){for(const e of this.allZoneMeshes)e.parent&&e.parent.remove(e),e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose();this.zoneObjects.clear(),this.allZoneMeshes=[]}}class Mv{static computeFrameIndex(e,t,n){const i=1-e/t,s=Math.floor(i*n);return Math.max(0,Math.min(s,n))}static computeFrameForZonalState(e,t){const n=1-e.totalHp/e.maxTotalHp,i=Math.floor(t*.55),s=Math.floor(n*i),r=e.zones.get(Ln.CENTER),o=Math.floor(t*.28),l=r?Math.floor((1-r.hp/r.maxHp)*o):0,c=e.zones.get(Ln.TOP_CENTER),h=t-i-o,u=c?Math.floor((1-c.hp/c.maxHp)*h):0;return Math.max(0,Math.min(s+l+u,t))}}class la{static computeZoneLevel(e){return e>=.8?0:e>=.55?1:e>=.25?2:e>0?3:4}static computeGlobalLevel(e,t){let n=0;for(const i of t){const s=e.zones.get(i.id);if(!s)continue;const r=s.level/4;n+=i.structureWeight*r}return n=Math.max(0,Math.min(1,n)),this.computeZoneLevel(1-n)}}class ii{static init(){it.addSystem(this.tick.bind(this))}static tick(e){Jt.tick(e)}static spawnBrickBurst(e,t,n,i,s){for(let r=0;r<i;r++){const o=(Math.random()-.5)*12,l=Math.random()*12+10,c=(Math.random()-.5)*12,h=.3+Math.random()*.5;let u=8930338;s&&s.length>0&&(u=s[Math.floor(Math.random()*s.length)]),Jt.spawnDebris(e,t,n,o,l,c,h,u)}}static spawnDustCloud(e,t,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*1.5,o=Math.random()*1+.3,l=(Math.random()-.5)*1.5;Jt.spawnParticle(e,t,n,r,o,l,1+Math.random()*.5,"dust")}}static spawnSmokePlume(e,t,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*.8,o=Math.random()*1.2+.5,l=(Math.random()-.5)*.8;Jt.spawnParticle(e,t,n,r,o,l,2+Math.random()*1,"smoke")}}static spawnSparkBurst(e,t,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*8,o=Math.random()*6+2,l=(Math.random()-.5)*8;Jt.spawnParticle(e,t,n,r,o,l,.2+Math.random()*.15,"spark")}}static spawnEmberBurst(e,t,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*4,o=Math.random()*5+3,l=(Math.random()-.5)*4;Jt.spawnParticle(e,t,n,r,o,l,1.5+Math.random()*1,"fire_ember")}}static spawnDemolitionVolcano(e,t,n,i=20,s){const r=Math.min(60,Math.floor(i*1.5)),o=Math.min(45,Math.floor(i*1.2)),l=Math.min(30,Math.floor(i*.8)),c=Math.min(25,Math.floor(i*.7));this.spawnBrickBurst(e,t,n,r,s),this.spawnSparkBurst(e,t,n,o),this.spawnSmokePlume(e,t,n,l),this.spawnDustCloud(e,t,n,Math.floor(l*.8)),this.spawnEmberBurst(e,t,n,c)}static spawnDebrisBurst(e,t,n,i){for(let s=0;s<i;s++){const r=(Math.random()-.5)*5,o=Math.random()*5+3,l=(Math.random()-.5)*5;Jt.spawnDebris(e,t,n,r,o,l)}}}class Ii{static invCellSize=1/64;static grid=new Map;static getKey(e,t){return e+2048<<16|t+2048&65535}static getCellCoords(e,t){return{gx:Math.floor(e*this.invCellSize),gz:Math.floor(t*this.invCellSize)}}static clear(){this.grid.clear()}static rebuild(){this.grid.clear();for(const e of it.entities){if(rn.has(e))continue;const t=yt.get(e),n=Tt.get(e);if(t&&n&&n.currentHP>0){const{gx:i,gz:s}=this.getCellCoords(t.worldX,t.worldY),r=this.getKey(i,s);let o=this.grid.get(r);o||(o=[],this.grid.set(r,o)),o.push(e)}}}static findClosest(e,t,n){let i=n,s=null;if(!isFinite(n)){const h=this.getCellCoords(e-128,t-128),u=this.getCellCoords(e+128,t+128);for(let _=h.gx;_<=u.gx;_++)for(let m=h.gz;m<=u.gz;m++){const f=this.getKey(_,m),x=this.grid.get(f);if(x)for(let y=0;y<x.length;y++){const v=x[y],R=Tt.get(v);if(!R||R.currentHP<=0)continue;const E=yt.get(v);if(!E)continue;const A=E.worldX-e,C=E.worldY-t,b=A*A+C*C;b<i&&(i=b,s=v)}}const d=s!==null?Math.sqrt(i):1024,p=this.getCellCoords(e-d,t-d),g=this.getCellCoords(e+d,t+d);for(let _=p.gx;_<=g.gx;_++)for(let m=p.gz;m<=g.gz;m++){if(s!==null&&_>=h.gx&&_<=u.gx&&m>=h.gz&&m<=u.gz)continue;const f=this.getKey(_,m),x=this.grid.get(f);if(x)for(let y=0;y<x.length;y++){const v=x[y],R=Tt.get(v);if(!R||R.currentHP<=0)continue;const E=yt.get(v);if(!E)continue;const A=E.worldX-e,C=E.worldY-t,b=A*A+C*C;b<i&&(i=b,s=v)}}return s}const r=Math.sqrt(n),o=this.getCellCoords(e-r,t-r),l=this.getCellCoords(e+r,t+r);for(let c=o.gx;c<=l.gx;c++)for(let h=o.gz;h<=l.gz;h++){const u=this.getKey(c,h),d=this.grid.get(u);if(d)for(let p=0;p<d.length;p++){const g=d[p],_=Tt.get(g);if(!_||_.currentHP<=0)continue;const m=yt.get(g);if(!m)continue;const f=m.worldX-e,x=m.worldY-t,y=f*f+x*x;y<i&&(i=y,s=g)}}return s}static queryRadius(e,t,n){const i=[],s=this.getCellCoords(e-n,t-n),r=this.getCellCoords(e+n,t+n),o=n*n;for(let l=s.gx;l<=r.gx;l++)for(let c=s.gz;c<=r.gz;c++){const h=this.getKey(l,c),u=this.grid.get(h);if(u)for(let d=0;d<u.length;d++){const p=u[d],g=yt.get(p);if(!g)continue;const _=g.worldX-e,m=g.worldY-t;_*_+m*m<=o&&i.push(p)}}return i}}class an{static score=0;static highScore=0;static combo=1;static comboCount=0;static comboTimer=0;static COMBO_TIMEOUT=3.5;static MAX_COMBO=5;static popups=[];static init(){try{const e=localStorage.getItem("alienv2_highscore");e&&(this.highScore=parseInt(e,10)||0)}catch{this.highScore=0}}static tick(e){this.comboTimer>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1,this.comboCount=0,this.comboTimer=0));for(let t=this.popups.length-1;t>=0;t--){const n=this.popups[t];n.elapsed+=e,n.worldZ+=e*12,n.elapsed>=n.duration&&this.popups.splice(t,1)}}static addScore(e,t,n){this.comboCount++,this.combo=Math.min(this.MAX_COMBO,1+Math.floor(this.comboCount/2)),this.comboTimer=this.COMBO_TIMEOUT;const i=e*this.combo;if(this.score+=i,this.score>this.highScore){this.highScore=this.score;try{localStorage.setItem("alienv2_highscore",this.highScore.toString())}catch{}}if(n){const s=this.combo>1?`+${i} (x${this.combo})`:`+${i}`,r=this.combo>=4?"#f59e0b":this.combo>=2?"#3b82f6":"#10b981";this.popups.push({text:t?`${t} ${s}`:s,points:i,worldX:n.x,worldY:n.y,worldZ:n.z??15,color:r,duration:1.4,elapsed:0})}return i}static getScore(){return this.score}static getHighScore(){return this.highScore}static getCombo(){return this.combo}static getComboTimerRatio(){return this.comboTimer/this.COMBO_TIMEOUT}static reset(){this.score=0,this.combo=1,this.comboCount=0,this.comboTimer=0,this.popups=[]}}class kt{static ctx=null;static masterGain=null;static noiseBuffer=null;static isInitialized=!1;static init(){const e=()=>{this.ensureAudioContext(),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),it.addSystem(this.tick.bind(this))}static ensureAudioContext(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination);const t=this.ctx.sampleRate*1;this.noiseBuffer=this.ctx.createBuffer(1,t,this.ctx.sampleRate);const n=this.noiseBuffer.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.isInitialized=!0,console.log("[AudioSystem] Procedural WebAudio engine initialized.")}catch(e){console.warn("[AudioSystem] WebAudio initialization deferred:",e)}}static processEvent(e){this.isInitialized||this.ensureAudioContext(),!(!this.ctx||this.ctx.state==="suspended")&&(e.type==="laser"?this.playLaserSFX():e.type==="blast"||e.type==="blast_zonal"?this.playExplosionSFX(1):e.type==="blast360"?(this.playExplosionSFX(1.4),this.playCollapseRumbleSFX()):e.type==="shake"&&e.data.intensity>10&&this.playClusterBoomSFX())}static tick(e){this.ctx&&this.ctx.state}static playLaserSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(150,e+.08),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.08),t.onended=()=>{t.disconnect(),n.disconnect()}}static playExplosionSFX(e=1){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,n=this.ctx.createBufferSource(),i=this.ctx.createBiquadFilter(),s=this.ctx.createGain();n.buffer=this.noiseBuffer,i.type="lowpass",i.frequency.setValueAtTime(160*e,t),i.frequency.exponentialRampToValueAtTime(20,t+.5),s.gain.setValueAtTime(.5*e,t),s.gain.exponentialRampToValueAtTime(.001,t+.55),n.connect(i),i.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.55),n.onended=()=>{n.disconnect(),i.disconnect(),s.disconnect()}}static playClusterBoomSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(65,e),t.frequency.exponentialRampToValueAtTime(15,e+.9),n.gain.setValueAtTime(.7,e),n.gain.exponentialRampToValueAtTime(.001,e+.95),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.95),t.onended=()=>{t.disconnect(),n.disconnect()},this.playExplosionSFX(1.8)}static playCollapseRumbleSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(45,e),t.frequency.exponentialRampToValueAtTime(15,e+1.2),n.gain.setValueAtTime(.6,e),n.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+1.2),t.onended=()=>{t.disconnect(),n.disconnect()}}static playClusterLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(60,e+.25),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.25),t.onended=()=>{t.disconnect(),n.disconnect()}}static playClusterSplitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(1200,e),n.Q.setValueAtTime(4,e),i.gain.setValueAtTime(.6,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.12),t.onended=()=>{t.disconnect(),n.disconnect(),i.disconnect()}}static playJetFlybySFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="lowpass",n.frequency.setValueAtTime(250,e),n.frequency.linearRampToValueAtTime(1800,e+.4),n.frequency.exponentialRampToValueAtTime(200,e+1.2),i.gain.setValueAtTime(.05,e),i.gain.linearRampToValueAtTime(.45,e+.4),i.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+1.2),t.onended=()=>{t.disconnect(),n.disconnect(),i.disconnect()}}static playMissileLaunchSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(650,e+.35),n.gain.setValueAtTime(.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.35),t.onended=()=>{t.disconnect(),n.disconnect()}}static playShieldHitSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(550,e),t.frequency.exponentialRampToValueAtTime(120,e+.15),n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.15),t.onended=()=>{t.disconnect(),n.disconnect()}}static beamOsc=null;static beamSubOsc=null;static beamFilter=null;static beamGain=null;static isBeamAudioActive=!1;static startContinuousBeamAudio(){if(this.ensureAudioContext(),!(!this.ctx||!this.masterGain||this.isBeamAudioActive))try{const e=this.ctx.currentTime;this.isBeamAudioActive=!0,this.beamGain=this.ctx.createGain(),this.beamGain.gain.setValueAtTime(.001,e),this.beamGain.gain.exponentialRampToValueAtTime(.25,e+.08),this.beamFilter=this.ctx.createBiquadFilter(),this.beamFilter.type="lowpass",this.beamFilter.frequency.setValueAtTime(750,e),this.beamFilter.Q.setValueAtTime(3.5,e),this.beamOsc=this.ctx.createOscillator(),this.beamOsc.type="sawtooth",this.beamOsc.frequency.setValueAtTime(160,e),this.beamSubOsc=this.ctx.createOscillator(),this.beamSubOsc.type="sine",this.beamSubOsc.frequency.setValueAtTime(65,e),this.beamOsc.connect(this.beamFilter),this.beamSubOsc.connect(this.beamFilter),this.beamFilter.connect(this.beamGain),this.beamGain.connect(this.masterGain),this.beamOsc.start(e),this.beamSubOsc.start(e)}catch(e){console.warn("[AudioSystem] Error starting beam audio:",e),this.isBeamAudioActive=!1}}static stopContinuousBeamAudio(){if(!(!this.isBeamAudioActive||!this.ctx)){this.isBeamAudioActive=!1;try{const e=this.ctx.currentTime;this.beamGain&&(this.beamGain.gain.setValueAtTime(this.beamGain.gain.value,e),this.beamGain.gain.exponentialRampToValueAtTime(1e-4,e+.06));const t=this.beamOsc,n=this.beamSubOsc,i=this.beamGain,s=this.beamFilter;setTimeout(()=>{try{t?.stop(),n?.stop(),t?.disconnect(),n?.disconnect(),s?.disconnect(),i?.disconnect()}catch{}},70),this.beamOsc=null,this.beamSubOsc=null,this.beamFilter=null,this.beamGain=null}catch{this.beamOsc=null,this.beamSubOsc=null,this.beamFilter=null,this.beamGain=null}}}static playOverheatSFX(){if(this.ensureAudioContext(),!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.buffer=this.noiseBuffer,n.type="bandpass",n.frequency.setValueAtTime(2400,e),n.frequency.exponentialRampToValueAtTime(500,e+.4),n.Q.setValueAtTime(2,e),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(n),n.connect(i),i.connect(this.masterGain),t.start(e),t.stop(e+.4),t.onended=()=>{t.disconnect(),n.disconnect(),i.disconnect()};const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(480,e),s.frequency.exponentialRampToValueAtTime(90,e+.35),r.gain.setValueAtTime(.22,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+.35),s.onended=()=>{s.disconnect(),r.disconnect()}}}class Os{static nextId=1;static vehicles=[];static roadRows=[];static roadCols=[];static intersections=[];static MAX_VEHICLES=36;static isInitialized=!1;static init(){this.vehicles=[],this.roadRows=[],this.roadCols=[],this.intersections=[],this.extractRoadNetwork(),this.spawnInitialFleet(),this.isInitialized=!0}static extractRoadNetwork(){const e=new Set,t=new Set;for(let n=0;n<Ce.GRID_DIM;n++)for(let i=0;i<Ce.GRID_DIM;i++){const s=Ce.getCell(n,i);s&&s.overlayType===dn.ROAD&&(e.add(i),t.add(n),(s.terrainType===5||s.isIntersection)&&this.intersections.push({x:s.worldX,z:s.worldZ}))}this.roadRows=Array.from(e),this.roadCols=Array.from(t)}static spawnInitialFleet(){if(!(this.roadRows.length===0&&this.roadCols.length===0))for(let e=0;e<this.MAX_VEHICLES;e++){const t=this.createRandomVehicle();t&&this.vehicles.push(t)}}static createRandomVehicle(){const e=Math.random()>.5,t=Math.random()>.5?1:-1,n=t*2.8;let i=0,s=0,r=0,o=0,l=0;const c=26+Math.random()*14;if(e&&this.roadRows.length>0){const p=this.roadRows[Math.floor(Math.random()*this.roadRows.length)],g=Ce.getCell(Math.floor(Math.random()*Ce.GRID_DIM),p);if(!g)return null;i=-460+Math.random()*920,s=g.worldZ+n,r=t===1?0:Math.PI,o=t*c,l=0}else if(this.roadCols.length>0){const p=this.roadCols[Math.floor(Math.random()*this.roadCols.length)],g=Ce.getCell(p,Math.floor(Math.random()*Ce.GRID_DIM));if(!g)return null;i=g.worldX+n,s=-460+Math.random()*920,r=t===1?Math.PI*.5:-Math.PI*.5,o=0,l=t*c}else return null;const h=Math.random();let u="sedan",d=3900150;if(h<.15)u="police",d=1120295;else if(h<.35)u="cab",d=16436245;else if(h<.55)u="truck",d=10265519;else{const p=[15680580,3900150,1096065,9133302,15067115,3621201];d=p[Math.floor(Math.random()*p.length)]}return{id:this.nextId++,x:i,y:s,vx:o,vy:l,speed:c,heading:r,targetHeading:r,roadAxis:e?"EW":"NS",direction:t,type:u,color:d,alive:!0,respawnTimer:0,laneOffset:n}}static tick(e){this.isInitialized||this.init();const t=480;for(let n=0;n<this.vehicles.length;n++){const i=this.vehicles[n];if(!i.alive){if(i.respawnTimer-=e,i.respawnTimer<=0){const s=this.createRandomVehicle();s&&(s.id=i.id,this.vehicles[n]=s)}continue}i.x+=i.vx*e,i.y+=i.vy*e,i.x>t?i.x=-t:i.x<-t&&(i.x=t),i.y>t?i.y=-t:i.y<-t&&(i.y=t);for(const s of this.intersections){const r=s.x-i.x,o=s.z-i.y;if(r*r+o*o<16&&Math.random()<e*1.8){i.roadAxis==="EW"?(i.roadAxis="NS",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?Math.PI*.5:-Math.PI*.5,i.vx=0,i.vy=i.direction*i.speed,i.x=s.x+i.direction*2.8):(i.roadAxis="EW",i.direction=Math.random()>.5?1:-1,i.targetHeading=i.direction===1?0:Math.PI,i.vx=i.direction*i.speed,i.vy=0,i.y=s.z+i.direction*2.8);break}}i.heading+=(i.targetHeading-i.heading)*Math.min(1,e*8)}}static applyDamageInRadius(e,t,n){let i=0;const s=n*n;for(const r of this.vehicles){if(!r.alive)continue;const o=r.x-e,l=r.y-t;o*o+l*l<=s&&(this.destroyVehicle(r),i++)}return i}static checkRayHit(e){for(const t of this.vehicles){if(!t.alive)continue;const n=t.x-e.x,i=t.y-e.z;if(n*n+i*i<=16)return t}return null}static destroyVehicle(e){if(!e.alive)return;e.alive=!1,e.respawnTimer=6,xe.fxQueue.push({type:"blast",x:e.x,y:e.y,z:2,data:{entityId:0,targetFrame:0}}),xe.fxQueue.push({type:"fire",x:e.x,y:e.y,z:0,data:{}}),xe.fxQueue.push({type:"smoke",x:e.x,y:e.y,z:0,data:{count:8}}),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}}),Gn.spawnDecal(e.x,e.y,"scorch",12);const t=e.type==="police"?"Police Cruiser":e.type==="truck"?"Cargo Truck":"Vehicle";an.addScore(50,t,{x:e.x,y:e.y,z:4}),kt.playExplosionSFX(.8)}}class fn{static nextId=1;static jets=[];static turrets=[];static missiles=[];static tracers=[];static playerShield=100;static MAX_SHIELD=100;static playerHull=100;static MAX_HULL=100;static shieldRegenTimer=0;static shieldFlareTimer=0;static jetSpawnTimer=5;static isInitialized=!1;static init(){this.jets=[],this.turrets=[],this.missiles=[],this.tracers=[],this.playerShield=100,this.playerHull=100,this.shieldRegenTimer=0,this.shieldFlareTimer=0,this.jetSpawnTimer=5,this.spawnGroundTurrets(),this.isInitialized=!0}static spawnGroundTurrets(){const e=[{x:-140,y:-160,z:2},{x:160,y:-140,z:2},{x:-180,y:150,z:2},{x:150,y:160,z:2}];for(const t of e)this.turrets.push({id:this.nextId++,x:t.x,y:t.y,z:t.z,yaw:0,pitch:.3,reloadTimer:2+Math.random()*3,hp:120,maxHp:120,alive:!0})}static spawnFighterWing(e,t){const n=Math.floor(Math.random()*4);let i=0,s=0;const r=520;n===0?(i=-r,s=-r+Math.random()*r*2):n===1?(i=r,s=-r+Math.random()*r*2):n===2?(i=-r+Math.random()*r*2,s=-r):(i=-r+Math.random()*r*2,s=r);const o=120,l=e-i,c=t-s,h=Math.atan2(c,l);for(let u=0;u<2;u++){const d=h+Math.PI*.5,p=u===0?-16:16,g=i+Math.cos(d)*p,_=s+Math.sin(d)*p;this.jets.push({id:this.nextId++,x:g,y:_,z:75+(Math.random()-.5)*10,vx:Math.cos(h)*o,vy:Math.sin(h)*o,vz:0,speed:o,heading:h,pitch:0,roll:0,state:"approach",attackTimer:0,burstCount:0,burstInterval:0,hp:40,maxHp:40,alive:!0,smokeTimer:0})}kt.playJetFlybySFX()}static tick(e){this.isInitialized||this.init();let t=0,n=0,i=75;for(const r of it.entities)if(rn.has(r)){const o=yt.get(r);o&&(t=o.worldX,n=o.worldY,i=o.worldZ||75);break}this.shieldFlareTimer>0&&(this.shieldFlareTimer-=e),this.shieldRegenTimer>0?this.shieldRegenTimer-=e:this.playerShield<this.MAX_SHIELD&&(this.playerShield=Math.min(this.MAX_SHIELD,this.playerShield+e*20)),this.jets.filter(r=>r.alive).length===0&&(this.jetSpawnTimer-=e,this.jetSpawnTimer<=0&&(this.jetSpawnTimer=16,this.spawnFighterWing(t,n)));for(let r=this.jets.length-1;r>=0;r--){const o=this.jets[r];if(!o.alive){this.jets.splice(r,1);continue}const l=t-o.x,c=n-o.y,h=i-o.z,u=Math.sqrt(l*l+c*c);if(o.state==="approach"){let p=Math.atan2(c,l)-o.heading;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;o.heading+=p*Math.min(1,e*3.5),o.roll=p*1.5,o.vx=Math.cos(o.heading)*o.speed,o.vy=Math.sin(o.heading)*o.speed,u<180&&(o.state="attack",o.burstCount=4,o.burstInterval=.08)}else if(o.state==="attack"){if(o.burstInterval-=e,o.burstInterval<=0&&o.burstCount>0){o.burstInterval=.12,o.burstCount--;const d=220,p=Math.sqrt(l*l+c*c+h*h);this.tracers.push({x:o.x,y:o.y,z:o.z,vx:l/p*d,vy:c/p*d,vz:h/p*d,lifetime:1.2})}(u<60||o.burstCount<=0)&&(o.state="breakaway")}else if(o.state==="breakaway"&&(o.roll=.8,o.vz=e*15,Math.abs(o.x)>520||Math.abs(o.y)>520)){o.alive=!1;continue}o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.smokeTimer+=e,o.smokeTimer>=.04&&(o.smokeTimer=0,xe.fxQueue.push({type:"smoke",x:o.x,y:o.y,z:o.z,data:{count:1}}))}for(let r=this.tracers.length-1;r>=0;r--){const o=this.tracers[r];o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,o.lifetime-=e;const l=o.x-t,c=o.y-n,h=o.z-i;if(l*l+c*c+h*h<18*18){this.applyDamageToPlayer(12),this.tracers.splice(r,1);continue}o.lifetime<=0&&this.tracers.splice(r,1)}for(const r of this.turrets){if(!r.alive)continue;const o=t-r.x,l=n-r.y,c=i-r.z,h=Math.sqrt(o*o+l*l);r.yaw=Math.atan2(l,o),r.pitch=Math.atan2(c,Math.max(1,h)),r.reloadTimer-=e,r.reloadTimer<=0&&h<260&&(r.reloadTimer=5.5+Math.random()*2,this.missiles.push({id:this.nextId++,x:r.x,y:r.y,z:r.z+4,vx:Math.cos(r.yaw)*20,vy:Math.sin(r.yaw)*20,vz:35,speed:85,lifetime:5.5,alive:!0}),kt.playMissileLaunchSFX(),xe.fxQueue.push({type:"sparks",x:r.x,y:r.y,z:r.z+4,data:{count:8}}))}for(let r=this.missiles.length-1;r>=0;r--){const o=this.missiles[r];if(!o.alive){this.missiles.splice(r,1);continue}if(o.lifetime-=e,o.lifetime<=0){this.detonateMissile(o,!1),this.missiles.splice(r,1);continue}const l=t-o.x,c=n-o.y,h=i-o.z,u=Math.sqrt(l*l+c*c+h*h);if(u<14){this.applyDamageToPlayer(25),this.detonateMissile(o,!0),this.missiles.splice(r,1);continue}const d=l/u,p=c/u,g=h/u,_=3.8*e;o.vx+=(d*o.speed-o.vx)*_,o.vy+=(p*o.speed-o.vy)*_,o.vz+=(g*o.speed-o.vz)*_,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,xe.fxQueue.push({type:"smoke",x:o.x,y:o.y,z:o.z,data:{count:2}})}}static applyDamageToPlayer(e){this.shieldRegenTimer=4,this.shieldFlareTimer=.35,this.playerShield>0?(this.playerShield=Math.max(0,this.playerShield-e),kt.playShieldHitSFX()):(this.playerHull=Math.max(0,this.playerHull-e),kt.playExplosionSFX(.7)),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}})}static detonateMissile(e,t){xe.fxQueue.push({type:"blast",x:e.x,y:e.y,z:e.z,data:{entityId:0,targetFrame:0}}),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:t?10:4}})}static checkTargetHit(e,t,n,i){for(const s of this.jets){if(!s.alive)continue;const r=s.x-e,o=s.y-t;if(r*r+o*o<=n*n)return s.hp-=i,s.hp<=0&&(s.alive=!1,xe.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),xe.fxQueue.push({type:"debris",x:s.x,y:s.y,z:s.z,data:{count:25,palette:[5592405,8947848,16729088]}}),an.addScore(400,"Interceptor Jet",{x:s.x,y:s.y,z:s.z}),kt.playExplosionSFX(1.4)),!0}for(const s of this.turrets){if(!s.alive)continue;const r=s.x-e,o=s.y-t;if(r*r+o*o<=(n+8)*(n+8))return s.hp-=i,s.hp<=0&&(s.alive=!1,xe.fxQueue.push({type:"blast360",x:s.x,y:s.y,z:s.z+4,data:{entityId:0,targetFrame:0}}),Gn.spawnDecal(s.x,s.y,"crater",20),an.addScore(300,"SAM Turret",{x:s.x,y:s.y,z:s.z+4}),kt.playExplosionSFX(1.2)),!0}for(const s of this.missiles){if(!s.alive)continue;const r=s.x-e,o=s.y-t;if(r*r+o*o<=(n+6)*(n+6))return s.alive=!1,xe.fxQueue.push({type:"blast",x:s.x,y:s.y,z:s.z,data:{entityId:0,targetFrame:0}}),an.addScore(150,"Missile Intercepted",{x:s.x,y:s.y,z:s.z}),!0}return!1}}const Sv=3,bv=80*80,Kh=3,Tv=.35,Ev=.5,Av=.3,wv=.6;class xe{static fxQueue=[];static ambientTimer=0;static clusterTimer=0;static statTimer=0;static clusterCooldown=new Map;static destroyedBuildings=new Set;static totalBuildingCount=0;static destructionPercentage=0;static init(){this.destroyedBuildings.clear(),this.destructionPercentage=0,it.addSystem(this.tick.bind(this))}static tick(e){if(this.ambientTimer+=e,this.ambientTimer>=Ev){this.ambientTimer=0;for(const n of it.entities){const i=zt.get(n),s=yt.get(n);if(!i||!s)continue;const r=1-i.totalHp/i.maxTotalHp;r>Av&&Math.random()<r*.6&&this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:n}}),r>wv&&Math.random()<(r-.3)*.4&&this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:2,entityId:n}})}}this.clusterTimer+=e,this.clusterTimer>=Sv&&(this.clusterTimer=0,this.checkClusterExplosions());const t=performance.now()/1e3;for(const[n,i]of this.clusterCooldown)t>i&&this.clusterCooldown.delete(n);this.statTimer+=e,this.statTimer>=.5&&(this.statTimer=0,this.updateDestructionStats())}static updateDestructionStats(){let e=0,t=0;for(const n of it.entities){const i=zt.get(n);i&&(e++,i.totalHp<=0&&(t++,this.destroyedBuildings.add(n)))}e>0&&(this.totalBuildingCount=e,this.destructionPercentage=Math.min(100,Math.round(t/e*1e3)/10),Ri.updateScore(this.destructionPercentage))}static getDestructionPercentage(){return this.destructionPercentage}static applyCollateralDamage(e,t,n,i=64,s=25){Os.applyDamageInRadius(t,n,i),fn.checkTargetHit(t,n,i,s);const r=Ii.queryRadius(t,n,i);for(const o of r){if(o===e)continue;const l=yt.get(o),c=zt.get(o);if(!l||!c||c.totalHp<=0)continue;const h=l.worldX-t,u=l.worldY-n,d=Math.sqrt(h*h+u*u);if(d<=i&&d>.1){const p=1-d/i,g=Math.round(s*p);if(g<=0)continue;const _=[Ln.CENTER,Ln.TOP_CENTER,Ln.BASE_CENTER,Ln.BASE_LEFT,Ln.BASE_RIGHT],m=_[Math.floor(Math.random()*_.length)],f=c.zones.get(m);if(f){f.hp=Math.max(0,f.hp-g),c.totalHp=Math.max(0,c.totalHp-g);const x=Tt.get(o);x&&(x.currentHP=c.totalHp);const y=la.computeZoneLevel(f.hp/f.maxHp);y>f.level&&(f.level=y,c.globalDamageLevel=la.computeGlobalLevel(c,Array.from(c.zones.values()))),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:o,intensity:"light"}}),this.fxQueue.push({type:"smoke",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:3,entityId:o}}),this.fxQueue.push({type:"sparks",x:l.worldX,y:l.worldY,z:l.worldZ,data:{count:4,entityId:o}})}}}}static checkClusterExplosions(){const e=[];for(const n of it.entities){if(this.clusterCooldown.has(n))continue;const i=zt.get(n),s=yt.get(n);if(!i||!s)continue;1-i.totalHp/i.maxTotalHp>=Tv&&e.push({entity:n,x:s.worldX,z:s.worldY})}if(e.length<Kh)return;const t=new Set;for(let n=0;n<e.length;n++){if(t.has(n))continue;const i=[e[n]];for(let c=n+1;c<e.length;c++){if(t.has(c))continue;const h=e[n].x-e[c].x,u=e[n].z-e[c].z;h*h+u*u<=bv&&i.push(e[c])}if(i.length<Kh)continue;const s=i.reduce((c,h)=>c+h.x,0)/i.length,r=i.reduce((c,h)=>c+h.z,0)/i.length,o=performance.now()/1e3;i.forEach(c=>{t.add(e.indexOf(c)),this.clusterCooldown.set(c.entity,o+10)});const l=i[0].entity;this.fxQueue.push({type:"blast",x:s,y:r,z:10,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s+12,y:r+8,z:12,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast",x:s-10,y:r-6,z:8,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"blast360",x:s,y:r,z:6,data:{entityId:l,targetFrame:0}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}}),this.fxQueue.push({type:"smoke",x:s,y:r,z:0,data:{count:20,entityId:l}}),this.fxQueue.push({type:"debris",x:s,y:r,z:0,data:{count:35,palette:[8930338,11162931,6697745,2236962],entityId:l}}),this.fxQueue.push({type:"dust",x:s,y:r,z:0,data:{count:18,entityId:l}}),this.fxQueue.push({type:"sparks",x:s,y:r,z:0,data:{count:20,entityId:l}}),console.log(`[DestructionSystem] Cluster blast! ${i.length} buildings @ (${s.toFixed(0)}, ${r.toFixed(0)})`)}}static applyZonalDamage(e,t,n,i){const s=zt.get(e),r=jt.get(e),o=yt.get(e);if(!s||!r||!o)return;const l=s.zones.get(t);if(!l)return;l.hp=Math.max(0,l.hp-n),s.totalHp=Math.max(0,s.totalHp-n);const c=Tt.get(e);c&&(c.currentHP=s.totalHp);const h=la.computeZoneLevel(l.hp/l.maxHp),u=h>l.level;u&&(l.level=h,s.globalDamageLevel=la.computeGlobalLevel(s,Array.from(s.zones.values())));const{typeKey:d,def:p}=mt.getTypeInfo(e,r.texturePrefix),g=mt.BUILDING_MAX_FRAMES[d]??14,_=1-s.totalHp/s.maxTotalHp,m=Math.min(Math.floor(_*g),g),f=p&&p.visualScale||1,y=(p&&p.width||16)*Math.SQRT2*f,v=Math.max(18,Math.round(y*1.15));if(s.totalHp>0){const C=_>.6?"crater":"scorch",b=_>.6?Math.round(v*.6):10+h*3;Gn.spawnDecal(o.worldX,o.worldY,C,b)}this.fxQueue.push({type:"blast_zonal",x:o.worldX,y:o.worldY,z:o.worldZ,data:{entityId:e,targetFrame:m,zone:t,level:Math.max(1,h),uvCenter:i}});const R=u?h*2+4:3;this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:R}});const E=Math.max(8,h*6+8);let A=[8930338,11162931,6697745];if(d==="1"?A=[16777215,14540253,11184810,16729156]:d==="3"&&(A=[13808780,11184810,8947848,6045747]),this.fxQueue.push({type:"debris",x:o.worldX,y:o.worldY,z:o.worldZ,data:{count:E,entityId:e,palette:A}}),this.fxQueue.push({type:"dust",x:o.worldX,y:o.worldY,z:o.worldZ,data:{count:12,entityId:e}}),this.fxQueue.push({type:"smoke",x:o.worldX,y:o.worldY,z:o.worldZ,data:{count:8,entityId:e}}),this.fxQueue.push({type:"sparks",x:o.worldX,y:o.worldY,z:o.worldZ,data:{count:10,entityId:e}}),this.fxQueue.push({type:"fire",x:o.worldX,y:o.worldY,z:o.worldZ,data:{entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:u||h>=2?"heavy":"light"}}),an.addScore(10,void 0,{x:o.worldX,y:o.worldY,z:20}),s.totalHp<=0){if(!this.destroyedBuildings.has(e)){this.destroyedBuildings.add(e);let C=100;p&&(p.is3D?C=2500:p.tier==="background"?C=500:p.tier==="midground"?C=250:p.footprintTiles&&p.footprintTiles>=3&&(C=1e3)),an.addScore(C,p?.name||"Demolished",{x:o.worldX,y:o.worldY,z:30}),this.updateDestructionStats()}p&&p.is3D||(mt.trigger2DDemolition(e,v,A),ii.spawnDemolitionVolcano(o.worldX,1,o.worldY,v,A),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}),this.fxQueue.push({type:"blast360",x:o.worldX,y:o.worldY,z:6,data:{entityId:e,targetFrame:g}}))}}static applyDamage(e,t){const n=Tt.get(e),i=jt.get(e),s=yt.get(e);if(!n||!i||!s)return;n.currentHP=Math.max(0,n.currentHP-t);const r=zt.get(e);r&&(r.totalHp=n.currentHP);const o=i.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/),l=o?o[1]:"3",c=mt.BUILDING_MAX_FRAMES[l]??14,h=Mv.computeFrameIndex(n.currentHP,n.maxHP,c);let u=[8930338,11162931,6697745];if(l==="1"?u=[16777215,14540253,11184810,16729156]:l==="3"&&(u=[13808780,11184810,8947848,6045747]),an.addScore(10,void 0,{x:s.worldX,y:s.worldY,z:20}),h!==n.state){n.state=h;const{def:d}=mt.getTypeInfo(e,i.texturePrefix),p=d&&d.visualScale||1,g=d&&d.width||16,_=Math.max(18,Math.round(g*Math.SQRT2*p*1.15));if(n.currentHP<=0){if(!this.destroyedBuildings.has(e)){this.destroyedBuildings.add(e);let m=100;d&&(d.is3D?m=2500:d.tier==="background"?m=500:d.tier==="midground"?m=250:d.footprintTiles&&d.footprintTiles>=3&&(m=1e3)),an.addScore(m,d?.name||"Demolished",{x:s.worldX,y:s.worldY,z:30}),this.updateDestructionStats()}(!d||!d.is3D)&&(mt.trigger2DDemolition(e,_,u),ii.spawnDemolitionVolcano(s.worldX,1,s.worldY,_,u),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:12}}))}else Gn.spawnDecal(s.worldX,s.worldY,"scorch",15);this.fxQueue.push({type:h===c?"blast":"blast360",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:e,targetFrame:h}}),this.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:8}}),this.fxQueue.push({type:"debris",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:Math.min(h*3,30),entityId:e,palette:u}}),this.fxQueue.push({type:"dust",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:15,entityId:e}}),this.fxQueue.push({type:"smoke",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:8,entityId:e}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:12,entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:"heavy"}})}else this.fxQueue.push({type:"fire",x:s.worldX,y:s.worldY,z:s.worldZ,data:{entityId:e}}),this.fxQueue.push({type:"sparks",x:s.worldX,y:s.worldY,z:s.worldZ,data:{count:5,entityId:e}}),this.fxQueue.push({type:"hit_fx",x:0,y:0,z:0,data:{entityId:e,intensity:"light"}})}static executeTextureSwap(e,t){const n=jt.get(e);n&&(n.currentFrame=t)}}const un=0,or=2,bo=.5,ca=450,Rv=450,Cv=5,Iv=.3,Zh=140,To=450,Pv=.35,Lv=1024,Dd=Lv/or,$h=-Dd+60,Qh=Dd-60;class Ai{static camera;static shakeIntensity=un;static shakeDuration=un;static shakeMaxDuration=un;static targetX=un;static targetZ=un;static ZOOM_STORAGE_KEY="alienv2_camera_zoom_frustum";static DEFAULT_FRUSTUM_ZOOM=380;static targetFrustumSize=380;static currentFrustumSize=380;static init(e){this.camera=e;const t=localStorage.getItem(this.ZOOM_STORAGE_KEY);if(t){const n=parseFloat(t);!isNaN(n)&&n>=320&&n<=To?this.targetFrustumSize=n:this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM}else this.targetFrustumSize=this.DEFAULT_FRUSTUM_ZOOM;this.currentFrustumSize=this.targetFrustumSize,Ie.setFrustumSize(this.currentFrustumSize),window.addEventListener("wheel",n=>{this.targetFrustumSize=Math.max(Zh,Math.min(To,this.targetFrustumSize+n.deltaY*Pv));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}},{passive:!0})}static adjustZoom(e){this.targetFrustumSize=Math.max(Zh,Math.min(To,this.targetFrustumSize+e));try{localStorage.setItem(this.ZOOM_STORAGE_KEY,this.targetFrustumSize.toString())}catch{}}static setTarget(e,t){this.targetX=e,this.targetZ=t}static addShake(e,t){this.shakeIntensity=e,this.shakeDuration=t,this.shakeMaxDuration=t}static isPointInView(e,t){const n=this.currentFrustumSize/or+150;return Math.abs(e-this.targetX)<n&&Math.abs(t-this.targetZ)<n}static currentCamX=un;static currentCamZ=un;static tick(e){if(!this.camera)return;if(Math.abs(this.currentFrustumSize-this.targetFrustumSize)>.05){const l=1-Math.exp(-14*e);this.currentFrustumSize+=(this.targetFrustumSize-this.currentFrustumSize)*l,Ie.setFrustumSize(this.currentFrustumSize)}const t=Math.max($h,Math.min(Qh,this.targetX))+ca,n=Math.max($h,Math.min(Qh,this.targetZ))+ca;this.currentCamX===un&&this.currentCamZ===un&&(this.currentCamX=t,this.currentCamZ=n);const i=1-Math.exp(-14*e);this.currentCamX+=(t-this.currentCamX)*i,this.currentCamZ+=(n-this.currentCamZ)*i;let s=this.currentCamX,r=this.currentCamZ,o=Rv;if(this.shakeDuration>un){const l=1-this.shakeDuration/this.shakeMaxDuration,c=Math.exp(-l*Cv)*this.shakeIntensity,h=(Math.random()-bo)*or*c,u=(Math.random()-bo)*or*c,d=(Math.random()-bo)*Iv*or*c;s+=h,r+=u,o+=d,this.shakeDuration-=e,this.shakeDuration<=un&&(this.shakeIntensity=un)}this.camera.position.set(s,o,r),this.camera.lookAt(s-ca,un,r-ca)}}const ir=2,qt=0,Mi=1,Jh=160,eu="3",Dv=Math.SQRT1_2,Fv=Math.SQRT1_2,ha=Math.PI/4,Nv=Math.sqrt(1.5),fs=.5,Uv=0,Ov=0,Bv=.2,tu=1;function nu(a,e){const t=(a+e+1024)/2048;return Math.min(750,Math.max(100,100+Math.floor(t*650)))}const iu=64,zv=1,kv=.4,Hv=9999,Gv=1.5,Vv=2,Wv=Math.PI/2.5,Xv=14,Eo=.15,Yv=1.05,qv=.92,jv=.45,Kv=.15,Zv=16777215,$v=1.025,Qv=.96,Jv=.08,eM=16772829,tM=8,nM=Math.PI*2*3,iM=`
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
`;class mt{static sprites=new Map;static models3D=new Map;static shadowMeshes=new Map;static sharedShadowGeo=null;static sharedShadowMat=null;static sharedShadowTex=null;static mixers=new Map;static animActions=new Map;static dummyHitSprites=new Map;static sharedGeometry=new Tn(tu,tu);static hitFxMap=new Map;static flashMap=new Map;static blendMap=new Map;static lastFrameMap=new Map;static cachedTexture=new Map;static cachedOffset=new Map;static cachedTypeKey=new Map;static cachedDef=new Map;static collapseMap=new Map;static FRAME_STEP_SPEED=10;static displayFrameMap=new Map;static demoStateMap=new Map;static partialDamageTimeMap=new Map;static demo2DMap=new Map;static getSharedShadowTexture(){if(!this.sharedShadowTex){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(t){const n=t.createRadialGradient(32,32,4,32,32,30);n.addColorStop(0,"rgba(0, 0, 0, 0.65)"),n.addColorStop(.45,"rgba(0, 0, 0, 0.35)"),n.addColorStop(.8,"rgba(0, 0, 0, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0.0)"),t.fillStyle=n,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill()}this.sharedShadowTex=new Aa(e),this.sharedShadowTex.generateMipmaps=!1,this.sharedShadowTex.minFilter=Nt}return this.sharedShadowTex}static getOrCreateShadow(e,t,n){let i=this.shadowMeshes.get(e);if(!i){this.sharedShadowGeo||(this.sharedShadowGeo=new Tn(1,1)),this.sharedShadowMat||(this.sharedShadowMat=new ot({map:this.getSharedShadowTexture(),transparent:!0,opacity:.45,depthWrite:!1,depthTest:!0})),i=new Se(this.sharedShadowGeo,this.sharedShadowMat),i.rotation.x=-Math.PI/2,i.rotation.z=Math.PI/4,i.renderOrder=4;const s=n*1.35;i.scale.set(s,s,1),i.position.set(t.worldX,.04,t.worldY),Ie.groundGroup.add(i),this.shadowMeshes.set(e,i)}return i}static getTypeInfo(e,t){let n=this.cachedTypeKey.get(e),i=this.cachedDef.get(e);if(!n||!i){const s=t?t.match(/building_([a-zA-Z0-9_]+)_stage_/):null;n=s?s[1]:eu,i=lt[n]||lt[eu],this.cachedTypeKey.set(e,n),this.cachedDef.set(e,i)}return{typeKey:n,def:i}}static triggerCollapse(e,t){this.collapseMap.has(e)||this.collapseMap.set(e,{tiltAngle:qt,impactVector:t.clone().normalize()})}static trigger2DDemolition(e,t,n){this.demo2DMap.has(e)||this.demo2DMap.set(e,{elapsed:qt,duration:1.2,footprintSize:t,craterSpawned:!1,palette:n})}static crushBuildingsInTrajectory(e,t,n=iu){for(const i of jt.keys()){const s=yt.get(i),r=Tt.get(i);if(!s||!r||r.currentHP<=qt)continue;const o=s.worldX-e.worldX,l=s.worldY-e.worldY,c=Math.sqrt(o*o+l*l);c>zv&&c<=n&&(o*t.x+l*t.z)/c>kv&&xe.applyDamage(i,Hv)}}static getSpritePosition(e){const t=this.models3D.get(e);if(t)return t.position.clone();const n=this.sprites.get(e);return n?n.position.clone():null}static getVisualCenter(e){const t=this.dummyHitSprites.get(e);if(t)return t.position.clone();const n=this.sprites.get(e);if(n)return n.position.clone();const i=this.models3D.get(e);return i?new I(i.position.x,30,i.position.z):null}static getSpriteScale(e){const t=this.models3D.get(e);if(t)return t.scale.clone();const n=this.sprites.get(e);return n?n.scale.clone():null}static applyHitFX(e,t){let n=this.hitFxMap.get(e);n||(n=[],this.hitFxMap.set(e,n)),t==="heavy"?(n.push({type:"shudder",elapsed:qt,duration:Eo,amplitude:jv}),n.push({type:"squash",elapsed:qt,duration:Eo,scaleXMult:Yv,scaleYMult:qv}),this.flashMap.set(e,{timeLeft:Kv,color:Zv}),Ri.triggerFlash()):(n.push({type:"squash",elapsed:qt,duration:Eo,scaleXMult:$v,scaleYMult:Qv}),this.flashMap.set(e,{timeLeft:Jv,color:eM}))}static tick(e){for(const t of jt.keys()){const n=jt.get(t),i=yt.get(t);if(!n||!i)continue;const{typeKey:s,def:r}=this.getTypeInfo(t,n.texturePrefix);if(r&&r.is3D){const _=this.sprites.get(t);_&&(_.visible=!1,Ie.cityGroup.remove(_),_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose()),this.sprites.delete(t)),this.update3DBuilding(t,n,i,s,r,e);continue}this.updateZonalFrame(t,n,e);const o=this.getOrCreateSprite(t,n,i),l=o.material,{texture:c,offset:h}=this.updateTextureAndOffset(t,n,l,e),u=this.processHitEffects(t,e),d=this.demo2DMap.get(t);let p=qt,g=qt;if(d){d.elapsed+=e;const _=Math.min(1,d.elapsed/d.duration);if(_<.95&&Math.random()<.22){const m=i.worldX+(Math.random()-fs)*(d.footprintSize*.35),f=i.worldY+(Math.random()-fs)*(d.footprintSize*.35),x=4+Math.random()*20;Math.random()<.4?xe.fxQueue.push({type:"blast360",x:m,y:f,z:x,data:{entityId:t,targetFrame:0}}):xe.fxQueue.push({type:"smoke",x:m,y:f,z:x,data:{count:3,entityId:t}}),Math.random()<.3&&xe.fxQueue.push({type:"sparks",x:m,y:f,z:x,data:{count:5,entityId:t}})}if(p=_*24,g=Math.sin(_*Math.PI)*.08,_>.35&&(n.opacity=Math.max(0,1-(_-.35)/.65)),_>=1&&(n.visible=!1,n.opacity=0,!d.craterSpawned)){d.craterSpawned=!0,Gn.spawnDecal(i.worldX,i.worldY,"crater",d.footprintSize),xe.fxQueue.push({type:"smoke",x:i.worldX,y:i.worldY,z:1,data:{count:16,entityId:t}}),xe.fxQueue.push({type:"sparks",x:i.worldX,y:i.worldY,z:2,data:{count:10,entityId:t}}),o&&ya.unregisterObject(o);const m=this.shadowMeshes.get(t);m&&(m.visible=!1)}}else{const _=zt.get(t),m=Tt.get(t),f=_?_.totalHp:m?m.currentHP:100,x=_?_.maxTotalHp:m?m.maxHP:100;if(f>0&&f<x*.5&&Math.random()<.035&&Ai.isPointInView(i.worldX,i.worldY)){const y=r?(r.height||40)*(r.visualScale||1):30,v=i.worldX+(Math.random()-fs)*6,R=i.worldY+(Math.random()-fs)*6,E=y*.5+Math.random()*(y*.3);Math.random()<.6?xe.fxQueue.push({type:"smoke",x:v,y:R,z:E,data:{count:2,entityId:t}}):xe.fxQueue.push({type:"fire",x:v,y:R,z:E,data:{entityId:t}})}}this.updateTransformAndPhysics(t,o,i,n,s,h,c,e,u,p,g),this.processHitFlash(t,l,e),o.visible=n.visible,l.uniforms.opacity.value=n.opacity}this.cleanupDestroyedEntities()}static BUILDING_MAX_FRAMES={1:14,2:14,3:14,4:13,5:14,b1:3,b2:3,b3:3,b4:2,res_bronze:3,res_sky:2,sky_artdeco:3,sky_biotech:3,sky_cyber:3,mega_titan:3,spaceship_hq:6,cyber_reactor:6,financial_tower:6,statue_liberty:2,pentagon_defense:4,hospital_civic:4,mall_shopping:4,school_civic:4};static updateZonalFrame(e,t,n){const i=zt.get(e),s=Tt.get(e),r=i?i.totalHp:s?s.currentHP:100,o=i?i.maxTotalHp:s?s.maxHP:100,{typeKey:l}=this.getTypeInfo(e,t.texturePrefix),c=this.BUILDING_MAX_FRAMES[l]??14,h=Math.max(0,Math.min(1,1-r/o)),u=Math.min(Math.floor(h*c),c);let d=this.displayFrameMap.get(e)??t.currentFrame??0;if(d<u){const p=Math.floor(d);d=Math.min(u,d+n*this.FRAME_STEP_SPEED),this.displayFrameMap.set(e,d);const g=Math.floor(d);if(t.currentFrame=g,g>p){const _=yt.get(e);_&&xe.fxQueue.push({type:"smoke",x:_.worldX,y:_.worldY,z:_.worldZ,data:{count:3,entityId:e}})}}}static getOrCreateSprite(e,t,n){let i=this.sprites.get(e);if(!i){const s=new Kt({vertexShader:iM,fragmentShader:sM,uniforms:{mapA:{value:null},mapB:{value:null},mixRatio:{value:0},flashColor:{value:new ye(16777215)},flashIntensity:{value:0},opacity:{value:1}},transparent:!0,side:Rt,depthWrite:!1,depthTest:!0});i=new Se(this.sharedGeometry,s),i.castShadow=!1,i.receiveShadow=!1,i.rotation.y=ha;const r=nu(n.worldX,n.worldY);i.renderOrder=r,Ie.cityGroup.add(i),ya.registerObject(i,e),this.sprites.set(e,i);const{typeKey:o}=this.getTypeInfo(e,t.texturePrefix),l=hi[o];l&&Ca.createZonesForBuilding(e,i,l)}return i}static updateTextureAndOffset(e,t,n,i){let s=this.cachedTexture.get(e),r=this.cachedOffset.get(e);const o=this.lastFrameMap.get(e),{typeKey:l}=this.getTypeInfo(e,t.texturePrefix);let c=this.blendMap.get(e);if(!c){const h=`${t.texturePrefix}${t.currentFrame}`,u=en.getTexture(h);c={texA:u,texB:u,mixRatio:0,isBlending:!1},this.blendMap.set(e,c)}if(o!==t.currentFrame||s===void 0){const h=`${t.texturePrefix}${t.currentFrame}`,u=en.getTexture(h);r=en.getSpriteOffset(l,t.currentFrame),this.lastFrameMap.set(e,t.currentFrame),this.cachedTexture.set(e,u),this.cachedOffset.set(e,r),u&&c.texB!==u&&(c.texA=c.texB||u,c.texB=u,c.mixRatio=0,c.isBlending=!0)}return c.isBlending&&(c.mixRatio=Math.min(1,c.mixRatio+i*3.33),c.mixRatio>=1&&(c.texA=c.texB,c.isBlending=!1)),c.texA&&(n.uniforms.mapA.value=c.texA),c.texB&&(n.uniforms.mapB.value=c.texB),n.uniforms.mixRatio.value=c.mixRatio,{texture:c.texB,offset:r,typeKey:l}}static processHitEffects(e,t){let n=Mi,i=Mi,s=qt,r=qt;const o=this.hitFxMap.get(e);if(o){for(let l=o.length-1;l>=qt;l--){const c=o[l];if(c.elapsed+=t,c.elapsed>=c.duration){o.splice(l,1);continue}const h=c.elapsed/c.duration;if(c.type==="squash"){const u=Math.exp(-h*6)*Math.cos(h*nM),p=Math.sin(h*Math.PI)*u;n*=Mi+(c.scaleXMult-Mi)*p,i*=Mi+(c.scaleYMult-Mi)*p}else if(c.type==="shudder"){const u=c.amplitude*Math.exp(-h*tM);s+=(Math.random()-fs)*ir*u,r+=(Math.random()-fs)*ir*u}}o.length===qt&&this.hitFxMap.delete(e)}return{scaleXMult:n,scaleYMult:i,shudderDX:s,shudderDZ:r}}static updateTransformAndPhysics(e,t,n,i,s,r,o,l,c,h=qt,u=qt){const{def:d}=this.getTypeInfo(e,i.texturePrefix),p=d&&d.visualScale||1,g=d&&d.heightScale&&d.heightScale>1?d.heightScale:1,_=d&&d.width||16,m=r?r.w:o?.image?.width||Jh,f=r?r.h:o?.image?.height||Jh,x=(r?r.dx:-m/ir)+Uv,y=r&&typeof r.y_max=="number"?r.y_max:f*.95,v=r&&typeof r.y_min=="number"?r.y_min:0,R=Math.min(m*.25,Math.max(16,(y-v)*.25)),E=y-R;let A;r&&typeof r.base_cy=="number"&&r.base_cy>=f*.55&&y-r.base_cy<=f*.45?A=r.base_cy:A=E,A+=Ov;const C=_*Math.SQRT2*p,b=C*(f/m)*Nv*g,M=C*c.scaleXMult,P=b*c.scaleYMult,N=(-x-m/ir)/m*C,O=-N*Dv,H=N*Fv,X=n.worldX+O+c.shudderDX,G=n.worldY+H+c.shudderDZ,J=(A-f/ir)/f,V=(n.worldZ||0)+J*b+Bv,ee=this.collapseMap.get(e);if(ee){t.matrixAutoUpdate=!0,ee.tiltAngle+=l*Gv;const ve=ee.tiltAngle*.3*(ee.impactVector.x>=0?1:-1);t.scale.set(M,P,Mi),t.rotation.set(0,ha,ve),t.position.set(X,V-ee.tiltAngle*Vv,G),ee.tiltAngle>=Wv&&(this.crushBuildingsInTrajectory(n,ee.impactVector,iu),this.collapseMap.delete(e),i.currentFrame=this.BUILDING_MAX_FRAMES[s]??Xv)}else t.matrixAutoUpdate=!0,t.scale.set(M,P,Mi),t.rotation.set(0,ha,u),t.position.set(X,V-h,G);const le=this.getOrCreateShadow(e,n,_*p);if(le){le.position.set(n.worldX+c.shudderDX*.2,.04,n.worldY+c.shudderDZ*.2),le.visible=i.visible;const ve=le.material;ee?ve.opacity=Math.max(0,.45-ee.tiltAngle*.5):ve.opacity=.45*(i.opacity??1)}}static processHitFlash(e,t,n){const i=this.flashMap.get(e);i?(t.uniforms.flashColor.value.setHex(i.color),t.uniforms.flashIntensity.value=.8,i.timeLeft-=n,i.timeLeft<=qt&&(t.uniforms.flashIntensity.value=0,this.flashMap.delete(e))):t.uniforms.flashIntensity.value=0}static update3DBuilding(e,t,n,i,s,r){const o=this.getOrCreateModel3D(e,t,n,i,s);if(!o)return!1;const l=zt.get(e),c=Tt.get(e),h=l?l.totalHp:c?c.currentHP:100,u=l?l.maxTotalHp:c?c.maxHP:100,d=Math.max(0,Math.min(1,1-h/u)),p=this.mixers.get(e),g=this.animActions.get(e);let _=this.demoStateMap.get(e);const m=.8;if(h<=0&&!_&&(_={isDemolishing:!0,elapsedTime:this.partialDamageTimeMap.get(e)||0,maxDuration:g?g.maxDuration:4},this.demoStateMap.set(e,_),xe.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:30,data:{entityId:e,targetFrame:0}}),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:14}})),_&&_.isDemolishing&&p){if(_.elapsedTime<_.maxDuration){const E=_.elapsedTime;if(_.elapsedTime+=r,p.update(r),Math.random()<.25){const M=n.worldX+(Math.random()-.5)*30,P=n.worldY+(Math.random()-.5)*30,N=10+Math.random()*80,O=Math.random()>.5?"blast":"blast360";xe.fxQueue.push({type:O,x:M,y:P,z:N,data:{entityId:e,targetFrame:0}})}Math.random()<.15&&xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const A=E<1&&_.elapsedTime>=1,C=E<2.5&&_.elapsedTime>=2.5,b=E<3.8&&_.elapsedTime>=3.8;(A||C||b)&&(xe.applyCollateralDamage(e,n.worldX,n.worldY,64,25),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}})),Math.random()<.35&&xe.fxQueue.push({type:"smoke",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:3,entityId:e}}),Math.random()<.25&&xe.fxQueue.push({type:"sparks",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:4,entityId:e}}),Math.random()<.2&&xe.fxQueue.push({type:"debris",x:n.worldX,y:n.worldY,z:n.worldZ,data:{count:5,entityId:e,palette:[8947848,5592405,11184810]}}),E<_.maxDuration&&_.elapsedTime>=_.maxDuration&&(Gn.spawnDecal(n.worldX,n.worldY,"crater",38),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:16}}),xe.fxQueue.push({type:"blast360",x:n.worldX,y:n.worldY,z:4,data:{entityId:e,targetFrame:0}}))}}else if(p){const E=d*m;let A=this.partialDamageTimeMap.get(e)||0;A+=(E-A)*Math.min(1,r*5),this.partialDamageTimeMap.set(e,A),p.setTime(A),d>.25&&Math.random()<.12&&xe.fxQueue.push({type:"smoke",x:n.worldX+(Math.random()-.5)*15,y:n.worldY+(Math.random()-.5)*15,z:10+Math.random()*40,data:{count:2,entityId:e}}),d>.5&&Math.random()<.15&&xe.fxQueue.push({type:"sparks",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:15+Math.random()*50,data:{count:3,entityId:e}}),d>.75&&Math.random()<.18&&xe.fxQueue.push({type:"debris",x:n.worldX+(Math.random()-.5)*20,y:n.worldY+(Math.random()-.5)*20,z:20+Math.random()*60,data:{count:3,entityId:e,palette:[10066329,6710886]}})}const f=this.processHitEffects(e,r),x=o.userData.baseScale||1;o.scale.set(x*f.scaleXMult,x*f.scaleYMult,x*f.scaleXMult);const y=o.userData.basePosX??n.worldX,v=o.userData.basePosZ??n.worldY,R=o.userData.basePosY??0;return o.position.set(y+f.shudderDX,R,v+f.shudderDZ),this.processHitFlash3D(e,o,r),o.visible=t.visible,!0}static getOrCreateModel3D(e,t,n,i,s){let r=this.models3D.get(e);if(!r){const o=s.gltfKey||"skyscraper_demolition",l=en.getGLTF(o);if(!l)return null;r=fv(l.scene);const c=nu(n.worldX,n.worldY);r.renderOrder=c;const h=[];r.traverse(N=>{if(N.renderOrder=c,(N.name==="GroundPlane"||N.name.toLowerCase().includes("ground")||N.name.toLowerCase().includes("pixelground"))&&h.push(N),N.isMesh){const O=N;O.castShadow=!0,O.receiveShadow=!0,O.material&&(Array.isArray(O.material)?O.material:[O.material]).forEach(X=>{X.depthWrite=!0,X.depthTest=!0,X.side=Rt,(X.isMeshStandardMaterial||X.isMeshPhysicalMaterial)&&(X.roughness=.6,X.metalness=.1,X.emissive&&(X.emissiveIntensity=.2))})}});for(const N of h)N.parent&&N.parent.remove(N);if(l.animations&&l.animations.length>0){const N=new tm(r),O=[];let H=0;for(const X of l.animations){const G=N.clipAction(X);G.setLoop(Ju,1),G.clampWhenFinished=!0,G.play(),O.push(G),X.duration>H&&(H=X.duration)}this.mixers.set(e,N),this.animActions.set(e,{actions:O,maxDuration:H}),N.setTime(0)}r.updateMatrixWorld(!0);const u=new Bn().setFromObject(r),d=new I;u.getSize(d);const p=s&&s.visualScale||1,g=(s.height||180)*p,_=(s.width||64)*p,m=d.y>.1?g/d.y:1,f=_*Math.SQRT2,x=d.x>.1&&d.z>.1?f/Math.max(d.x,d.z):m,y=Math.min(m,x);r.scale.set(y,y,y),r.updateMatrixWorld(!0);const v=new Bn().setFromObject(r),R=v.min.y,E=n.worldX,A=n.worldY,C=-R;r.position.set(E,C,A),r.userData={baseScale:y,basePosX:E,basePosY:C,basePosZ:A},Ie.cityGroup.add(r),ya.registerObject(r,e),this.models3D.set(e,r);const b=Math.max(30,v.max.y-v.min.y),M=Math.max(20,Math.max(v.max.x-v.min.x,v.max.z-v.min.z)),P=hi[i]||hi.mega_titan;if(P){const N=new Se(new Tn(1,1),new ot({visible:!0,transparent:!0,opacity:0,depthWrite:!1}));N.position.set(n.worldX,b/2,n.worldY),N.scale.set(M,b,1),N.rotation.y=ha,N.userData={entity:e},Ie.cityGroup.add(N),Ca.createZonesForBuilding(e,N,P),this.dummyHitSprites.set(e,N)}}return r}static processHitFlash3D(e,t,n){const i=this.flashMap.get(e);i&&(t.traverse(s=>{if(s.isMesh){const r=s;r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(i.color),l.emissiveIntensity=.8)})}}),i.timeLeft-=n,i.timeLeft<=qt&&(t.traverse(s=>{if(s.isMesh){const r=s;r.material&&(Array.isArray(r.material)?r.material:[r.material]).forEach(l=>{l.emissive&&(l.emissive.setHex(0),l.emissiveIntensity=0)})}}),this.flashMap.delete(e)))}static cleanupDestroyedEntities(){for(const[e,t]of this.sprites.entries())if(!it.entities.has(e)||!jt.has(e)){Ie.cityGroup.remove(t),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose();const n=this.shadowMeshes.get(e);n&&(Ie.groundGroup.remove(n),this.shadowMeshes.delete(e)),this.sprites.delete(e),this.hitFxMap.delete(e),this.flashMap.delete(e),this.lastFrameMap.delete(e),this.cachedTexture.delete(e),this.cachedOffset.delete(e),this.cachedTypeKey.delete(e),this.cachedDef.delete(e),this.displayFrameMap.delete(e),this.demoStateMap.delete(e),this.demo2DMap.delete(e),this.blendMap.delete(e)}for(const[e,t]of this.models3D.entries())if(!it.entities.has(e)||!jt.has(e)){Ie.cityGroup.remove(t),t.traverse(s=>{if(s.isMesh){const r=s;r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(o=>o.dispose()):r.material.dispose()}});const n=this.dummyHitSprites.get(e);n&&(Ie.cityGroup.remove(n),n.geometry.dispose(),this.dummyHitSprites.delete(e));const i=this.shadowMeshes.get(e);i&&(Ie.groundGroup.remove(i),this.shadowMeshes.delete(e)),this.models3D.delete(e),this.mixers.delete(e),this.animActions.delete(e),this.hitFxMap.delete(e),this.flashMap.delete(e),this.cachedTypeKey.delete(e),this.cachedDef.delete(e),this.displayFrameMap.delete(e),this.demoStateMap.delete(e),this.demo2DMap.delete(e),this.blendMap.delete(e)}}static clearAll(){for(const[,e]of this.sprites.entries())Ie.cityGroup.remove(e),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose();for(const[,e]of this.shadowMeshes.entries())Ie.groundGroup.remove(e);this.shadowMeshes.clear();for(const[,e]of this.models3D.entries())Ie.cityGroup.remove(e),e.traverse(t=>{if(t.isMesh){const n=t;n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()}});for(const[,e]of this.dummyHitSprites.entries())Ie.cityGroup.remove(e),e.geometry.dispose();this.sprites.clear(),this.models3D.clear(),this.mixers.clear(),this.animActions.clear(),this.dummyHitSprites.clear(),this.hitFxMap.clear(),this.flashMap.clear(),this.lastFrameMap.clear(),this.cachedTexture.clear(),this.cachedOffset.clear(),this.cachedTypeKey.clear(),this.cachedDef.clear(),this.demo2DMap.clear()}}const bi={defaultTerrain:_e.GRASS,zones:[{id:"airport",terrain:_e.SIDEWALK,gx:0,gz:0,w:16,h:16},{id:"tech",terrain:_e.PLAZA_STONE,gx:0,gz:16,w:16,h:21},{id:"sports",terrain:_e.GRASS,gx:37,gz:0,w:27,h:16},{id:"park",terrain:_e.GRASS,gx:37,gz:16,w:27,h:21},{id:"financial",terrain:_e.PLAZA_STONE,gx:16,gz:0,w:21,h:16},{id:"financial",terrain:_e.PLAZA_STONE,gx:16,gz:16,w:21,h:21},{id:"civic",terrain:_e.PLAZA_STONE,gx:0,gz:37,w:16,h:27},{id:"residential",terrain:_e.GRASS,gx:16,gz:37,w:21,h:27},{id:"docks",terrain:_e.SIDEWALK,gx:48,gz:33,w:2,h:31},{id:"water",terrain:_e.WATER,gx:50,gz:33,w:14,h:31}],roads:[{id:"ave_0",axis:"NS",gx:0,gz:0,length:64},{id:"ave_16",axis:"NS",gx:16,gz:0,length:64},{id:"ave_32",axis:"NS",gx:32,gz:0,length:64},{id:"ave_48",axis:"NS",gx:48,gz:0,length:64},{id:"st_0",axis:"EW",gx:0,gz:0,length:64},{id:"st_16",axis:"EW",gx:0,gz:16,length:64},{id:"st_32",axis:"EW",gx:0,gz:32,length:49},{id:"st_48",axis:"EW",gx:0,gz:48,length:49}],landmarks:[{key:"mega_titan",gx:22,gz:22,terrain:_e.PLAZA_STONE,bufferTiles:2},{key:"spaceship_hq",gx:38,gz:22,terrain:_e.PLAZA_STONE,bufferTiles:2},{key:"financial_tower",gx:22,gz:38,terrain:_e.PLAZA_STONE,bufferTiles:2},{key:"cyber_reactor",gx:38,gz:38,terrain:_e.PLAZA_STONE,bufferTiles:2},{key:"hospital_civic",gx:6,gz:22,terrain:_e.SIDEWALK,bufferTiles:1},{key:"pentagon_defense",gx:6,gz:38,terrain:_e.PLAZA_STONE,bufferTiles:1},{key:"mega_stadium",gx:38,gz:6,terrain:_e.GRASS,bufferTiles:2},{key:"mall_shopping",gx:22,gz:6,terrain:_e.SIDEWALK,bufferTiles:1},{key:"school_civic",gx:6,gz:54,terrain:_e.PLAZA_STONE,bufferTiles:1},{key:"1",gx:54,gz:6,terrain:_e.PLAZA_STONE,bufferTiles:1},{key:"2",gx:54,gz:22,terrain:_e.SIDEWALK,bufferTiles:1},{key:"3",gx:22,gz:54,terrain:_e.SIDEWALK,bufferTiles:1}],islands:[{gx:50,gz:33,w:14,h:31,platformGx:54,platformGz:42,platformW:5,platformH:5,landmark:"statue_liberty"}]};class rM{static planCityLayout(e,t,n,i,s){const r=[],o=[],l=(h,u,d,p,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<p+g;m++){const f=h+_,x=u+m;if(f<0||f>=e||x<0||x>=e||t[f][x])return!1}return!0},c=(h,u,d,p,g=0)=>{for(let _=-g;_<d+g;_++)for(let m=-g;m<p+g;m++){const f=h+_,x=u+m;f>=0&&f<e&&x>=0&&x<e&&(t[f][x]=!0)}};if(s)for(let h=0;h<e;h++)for(let u=0;u<e;u++){if(t[h][u])continue;const p=s[h][u]?.prototype;if(p&&p.buildingType){const g=p.buildingType,_=lt[g]||lt[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=m>1||f>1?1:0;l(h,u,m,f,x)&&(c(h,u,m,f,x),r.push({gx:h,gz:u,w:m,h:f,typeKey:g,lotType:"wfc_cluster"}))}}for(const h of bi.zones){const u=n[h.id];if(!u||u.length===0)continue;const d=[];for(let f=h.gx;f<h.gx+h.w&&f<e;f++)for(let x=h.gz;x<h.gz+h.h&&x<e;x++)t[f][x]||d.push({gx:f,gz:x});const p=h.gx*1337+h.gz*7331;d.sort((f,x)=>(f.gx*97+f.gz*193+p)%100-(x.gx*97+x.gz*193+p)%100);const g=i[h.id]??.95,_=Math.floor(d.length*Math.min(.98,g));let m=0;for(const{gx:f,gz:x}of d){if(m>=_)break;if(t[f][x])continue;const y=Math.abs(f*97+x*193+p+m*13)%u.length;let v=u[y],R=lt[v]||lt[3],E=R.footprintTiles??1,A=R.footprintTiles??1,C=E>1||A>1?1:0;l(f,x,E,A,C)||(v=u.find(M=>(lt[M]?.footprintTiles??1)===1)||"b1",R=lt[v]||lt[3],E=1,A=1,C=0),l(f,x,E,A,C)&&(c(f,x,E,A,C),r.push({gx:f,gz:x,w:E,h:A,typeKey:v,lotType:"urban_cluster"}),m++)}}for(let h=0;h<e;h++)for(let u=0;u<e;u++)if(!t[h][u]){const d=bi.zones.find(m=>h>=m.gx&&h<m.gx+m.w&&u>=m.gz&&u<m.gz+m.h);if(d&&d.terrain===_e.WATER)continue;const p=d?n[d.id]||["b1","b2","b3","b4"]:["b1","b2","b3","b4"],g=Math.abs(h*1337+u*7331)%p.length;let _=p[g];(lt[_]?.footprintTiles??1)>1&&(_=p.find(m=>(lt[m]?.footprintTiles??1)===1)||"b1"),l(h,u,1,1,0)&&(c(h,u,1,1,0),r.push({gx:h,gz:u,w:1,h:1,typeKey:_,lotType:"dense_infill"}))}return{lots:r,bufferTerrain:o}}}const aM={airport:["b4","sky_biotech","4","b3","sky_cyber","b1","b2"],financial:["sky_cyber","sky_artdeco","sky_biotech","5","b4","mega_titan","b3","res_sky"],tech:["sky_cyber","sky_biotech","b4","5","sky_artdeco","res_sky","b3","b2"],civic:["res_sky","b3","b4","res_bronze","1","2","b1","b2"],park:["b1","b2","b3","res_bronze"],sports:["mega_stadium","b3","b4","res_sky","b1","b2"],residential:["b1","b2","res_bronze","b3","res_sky","b1","b2"],docks:["b1","b2","4","b3","b4","b1","b2"]},oM={airport:1,financial:1,tech:1,civic:1,park:1,sports:1,residential:1,docks:1};class yl{static generateCity(){Ce.init();const e=Ce.GRID_DIM,t=Array.from({length:e},()=>Array(e).fill(!1)),n=(g,_,m,f,x=1)=>{for(let y=-x;y<m+x;y++)for(let v=-x;v<f+x;v++){const R=g+y,E=_+v;R>=0&&R<e&&E>=0&&E<e&&(t[R][E]=!0)}},i=(g,_,m,f)=>{for(let x=0;x<m;x++)for(let y=0;y<f;y++){const v=g+x,R=_+y;if(v>=e||R>=e||t[v][R])return!1}return!0},s=(g,_,m,f,x,y=0)=>{for(let v=-y;v<m+y;v++)for(let R=-y;R<f+y;R++){const E=Ce.getCell(g+v,_+R);E&&E.overlayType!==dn.ROAD&&(E.terrainType=x)}},r=(g,_,m,f="dense",x=0)=>{const y=lt[m]||lt[3],v=y.footprintTiles??1,R=y.footprintTiles??1;if(!i(g,_,v,R))return!1;n(g,_,v,R,x);const E=si.computeLotWorldPos(g,_,v,R),A=it.createEntity(),C=si.calculateAndRegisterLot(A,E.x,E.z,m,f);return this.spawnBuildingEntity(A,C,m),!0};let o=0;for(const g of bi.landmarks){const _=lt[g.key]||lt[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=g.bufferTiles??1;s(g.gx,g.gz,m,f,g.terrain,x),r(g.gx,g.gz,g.key,"landmark",x)&&o++}for(const g of bi.islands){s(g.platformGx,g.platformGz,g.platformW,g.platformH,_e.PLAZA_STONE);for(let _=0;_<g.platformW;_++)for(let m=0;m<g.platformH;m++){const f=g.platformGx+_,x=g.platformGz+m;f>=0&&f<e&&x>=0&&x<e&&(t[f][x]=!1)}if(g.landmark){const _=lt[g.landmark]||lt[3],m=_.footprintTiles??1,f=_.footprintTiles??1,x=g.platformGx+Math.floor((g.platformW-m)/2),y=g.platformGz+Math.floor((g.platformH-f)/2);r(x,y,g.landmark,"landmark",0)&&o++}}for(const g of bi.zones)for(let _=g.gx;_<g.gx+g.w&&_<e;_++)for(let m=g.gz;m<g.gz+g.h&&m<e;m++){const f=Ce.getCell(_,m);f&&f.overlayType!==dn.ROAD&&(f.terrainType=g.terrain),g.terrain===_e.WATER&&(t[_][m]=!0)}const l=new Set,c=new Set;for(const g of bi.roads){g.axis==="NS"?l.add(g.gx):c.add(g.gz);for(let _=0;_<g.length;_++){const m=g.axis==="NS"?g.gx:g.gx+_,f=g.axis==="NS"?g.gz+_:g.gz;m<0||m>=e||f<0||f>=e||(Ce.setRoad(m,f,g.axis),t[m][f]=!0)}for(const _ of g.waypoints??[]){const m=g.axis==="NS"?g.gx:g.gx+_.cellOffset,f=g.axis==="NS"?g.gz+_.cellOffset:g.gz,x=Ce.getCell(m,f);x&&Ce.roadWaypoints.push({worldX:x.worldX,worldZ:x.worldZ,name:_.name,nextWaypoints:[]})}}for(const g of l)for(const _ of c)Ce.setIntersection(g,_);for(const g of l)for(let _=0;_<e;_++)Ce.setSidewalkIfNotRoad(g-1,_),Ce.setSidewalkIfNotRoad(g+1,_);for(const g of c)for(let _=0;_<e;_++)Ce.setSidewalkIfNotRoad(_,g-1),Ce.setSidewalkIfNotRoad(_,g+1);const u=new kd(e).solve(42);if(u)for(let g=0;g<e;g++)for(let _=0;_<e;_++){if(t[g][_])continue;const f=u[g][_].prototype;Ce.setTerrain(g,_,f.terrainType),f.overlayType===dn.ROAD&&(f.isIntersection?Ce.setIntersection(g,_):Ce.setRoad(g,_,f.roadAxis||"NS"),t[g][_]=!0)}const d=rM.planCityLayout(e,t,aM,oM,u);for(const g of d.bufferTerrain){const _=Ce.getCell(g.gx,g.gz);_&&_.overlayType!==dn.ROAD&&(_.terrainType=g.terrain)}const p=(g,_,m,f="dense")=>{const x=lt[m]||lt[3],y=x.footprintTiles??1,v=x.footprintTiles??1,R=si.computeLotWorldPos(g,_,y,v),E=it.createEntity(),A=si.calculateAndRegisterLot(E,R.x,R.z,m,f);return this.spawnBuildingEntity(E,A,m),!0};for(const g of d.lots)p(g.gx,g.gz,g.typeKey,g.lotType)&&o++;console.log(`[CityGenerator] ${o} buildings | ${bi.roads.length} road segs | ${Ce.roadWaypoints.length} waypoints | ${bi.islands.length} island(s)`),Ii.rebuild()}static spawnBuildingEntity(e,t,n){const i=lt[n]||lt[3];yt.set(e,{worldX:t.centerWorldX,worldY:t.centerWorldZ,worldZ:0});const s=vl(i),r=hi[n]||hi[3],o=Math.max(5,Math.round(s/r.length)),l=o*r.length;Tt.set(e,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const h of r)c.set(h.id,{id:h.id,level:0,hp:o,maxHp:o});zt.set(e,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Ra.set(e,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),jt.set(e,{meshId:`building_${e}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}class ps{static isShowcaseMode=!1;static showcaseEntities=[];static SHOWCASE_KEYS=["1","2","3","4","b1","b2","b3","b4","res_bronze","res_sky","5","sky_artdeco","sky_biotech","sky_cyber","mega_titan","spaceship_hq","cyber_reactor","financial_tower","statue_liberty","pentagon_defense"];static toggleMode(){this.setMode(this.isShowcaseMode?"city":"showcase")}static setMode(e){e==="showcase"!==this.isShowcaseMode&&(this.isShowcaseMode=e==="showcase",this.clearWorld(),this.isShowcaseMode?this.generateShowcase():(yl.generateCity(),wa.finalizeMap()))}static clearWorld(){const e=[];for(const t of it.entities)rn.has(t)||e.push(t);for(const t of e)it.destroyEntity(t),yt.delete(t),Tt.delete(t),zt.delete(t),Ra.delete(t),dv.delete(t),jt.delete(t);mt.clearAll(),Ca.clearAll(),Ce.init(),Ii.clear(),this.showcaseEntities=[]}static generateShowcase(){const e=this.SHOWCASE_KEYS,t=7,n=90,i=110,s=-540/2,r=-40;for(let o=0;o<e.length;o++){const l=e[o],c=Math.floor(o/t),h=o%t,u=s+h*n,d=r+c*i,p=it.createEntity(),g=lt[l]||lt[3];yt.set(p,{worldX:u,worldY:d,worldZ:0});const _=vl(g),m=hi[l]||hi[3],f=Math.max(5,Math.round(_/m.length)),x=f*m.length;Tt.set(p,{currentHP:x,maxHP:x,state:0});const y=new Map;for(const v of m)y.set(v.id,{id:v.id,level:0,hp:f,maxHp:f});zt.set(p,{zones:y,totalHp:x,maxTotalHp:x,globalDamageLevel:0}),Ra.set(p,{width:g.width*g.visualScale,length:g.length*g.visualScale,height:g.height,active:!0}),jt.set(p,{meshId:`building_${p}`,texturePrefix:`building_${l}_stage_`,currentFrame:0,visible:!0,opacity:1}),si.calculateAndRegisterLot(p,u,d,l,"showcase"),this.showcaseEntities.push({entity:p,typeKey:l,def:g,worldX:u,worldY:d})}wa.finalizeMap(),Ii.rebuild();for(const o of rn){const l=yt.get(o);l&&(l.worldX=0,l.worldY=-120,l.worldZ=75)}}static resetAllHP(){for(const e of this.showcaseEntities){const t=Tt.get(e.entity),n=zt.get(e.entity),i=jt.get(e.entity);if(t&&(t.currentHP=t.maxHP,t.state=0),n){n.totalHp=n.maxTotalHp,n.globalDamageLevel=0;for(const s of n.zones.values())s.hp=s.maxHp,s.level=0}i&&(i.currentFrame=0)}}static damageAll(e=25){for(const t of this.showcaseEntities){const n=zt.get(t.entity);if(n)for(const i of n.zones.values()){const s=i.maxHp*e/100;xe.applyZonalDamage(t.entity,i.id,s,{x:.5,y:.5})}}}static getShowcaseBuildings(){return this.showcaseEntities}}class wt{static nextId=1;static canisters=[];static bomblets=[];static CLUSTER_COOLDOWN_TIME=2.5;static clusterCooldown=0;static BEAM_MAX_HEAT=100;static BEAM_HEAT_BUILD_RATE=25;static BEAM_HEAT_COOL_RATE=35;static BEAM_OVERHEAT_RESET_THRESHOLD=15;static beamHeat=0;static beamOverheated=!1;static beamFiring=!1;static beamOrigin=new I;static beamTarget=new I;static init(){this.canisters=[],this.bomblets=[],this.clusterCooldown=0,this.beamHeat=0,this.beamOverheated=!1,this.beamFiring=!1,it.addSystem(this.tick.bind(this))}static tick(e){this.clusterCooldown>0&&(this.clusterCooldown=Math.max(0,this.clusterCooldown-e)),this.beamFiring&&!this.beamOverheated?(this.beamHeat=Math.min(this.BEAM_MAX_HEAT,this.beamHeat+this.BEAM_HEAT_BUILD_RATE*e),this.beamHeat>=this.BEAM_MAX_HEAT&&(this.beamOverheated=!0,this.beamFiring=!1,kt.stopContinuousBeamAudio(),kt.playOverheatSFX())):(this.beamHeat=Math.max(0,this.beamHeat-this.BEAM_HEAT_COOL_RATE*e),this.beamOverheated&&this.beamHeat<=this.BEAM_OVERHEAT_RESET_THRESHOLD&&(this.beamOverheated=!1));for(const n of it.entities)if(rn.has(n)){const i=ai.get(n);i&&(i.clusterCooldown=this.clusterCooldown,i.clusterMaxCooldown=this.CLUSTER_COOLDOWN_TIME,i.beamHeat=this.beamHeat,i.beamMaxHeat=this.BEAM_MAX_HEAT,i.beamOverheated=this.beamOverheated,i.beamFiring=this.beamFiring&&!this.beamOverheated);break}const t=85;for(let n=this.canisters.length-1;n>=0;n--){const i=this.canisters[n];i.vz-=t*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,Math.random()<.4&&xe.fxQueue.push({type:"smoke",x:i.x,y:i.y,z:i.z,data:{count:1}}),i.z<=i.splitAltitude&&(this.splitCanister(i),this.canisters.splice(n,1))}for(let n=this.bomblets.length-1;n>=0;n--){const i=this.bomblets[n];i.vz-=t*1.1*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.rotation+=i.rotSpeed*e,Math.random()<.3&&xe.fxQueue.push({type:"sparks",x:i.x,y:i.y,z:i.z,data:{count:2}}),i.z<=0&&(this.detonateBomblet(i),this.bomblets.splice(n,1))}}static fireClusterBomb(e,t){if(this.clusterCooldown>0)return!1;this.clusterCooldown=this.CLUSTER_COOLDOWN_TIME;const n=t.x-e.x,i=t.y-e.z,s=e.y,r=Math.max(.6,Math.sqrt(2*s/85)),o=n/(r*1.5),l=i/(r*1.5);return this.canisters.push({id:this.nextId++,x:e.x,y:e.z,z:e.y,vx:o,vy:l,vz:-15,targetX:t.x,targetY:t.y,splitAltitude:Math.max(25,e.y*.45)}),kt.playClusterLaunchSFX(),!0}static splitCanister(e){kt.playClusterSplitSFX(),xe.fxQueue.push({type:"blast",x:e.x,y:e.y,z:e.z,data:{entityId:0,targetFrame:0}}),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:6}});const t=6,n=28;for(let i=0;i<t;i++){const s=i/t*Math.PI*2+(Math.random()-.5)*.3,r=n*(.8+Math.random()*.4),o=e.vx*.4+Math.cos(s)*r,l=e.vy*.4+Math.sin(s)*r,c=8+Math.random()*8;this.bomblets.push({id:this.nextId++,x:e.x,y:e.y,z:e.z,vx:o,vy:l,vz:c,rotation:Math.random()*Math.PI*2,rotSpeed:(Math.random()-.5)*15})}}static detonateBomblet(e){xe.applyCollateralDamage(0,e.x,e.y,45,50),Gn.spawnDecal(e.x,e.y,"crater",28),xe.fxQueue.push({type:"blast360",x:e.x,y:e.y,z:2,data:{entityId:0,targetFrame:0}}),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:10}}),xe.fxQueue.push({type:"debris",x:e.x,y:e.y,z:0,data:{count:18,palette:[8930338,11162931,5592405,2236962]}}),xe.fxQueue.push({type:"dust",x:e.x,y:e.y,z:0,data:{count:12}}),xe.fxQueue.push({type:"fire",x:e.x,y:e.y,z:0,data:{}}),kt.playExplosionSFX(1.3)}static isClusterReady(){return this.clusterCooldown<=0}static getClusterCooldownRatio(){return this.clusterCooldown/this.CLUSTER_COOLDOWN_TIME}static setBeamFiring(e){if(this.beamOverheated){this.beamFiring=!1;return}this.beamFiring=e}static isBeamFiring(){return this.beamFiring&&!this.beamOverheated}static isBeamOverheated(){return this.beamOverheated}static getBeamHeatRatio(){return Math.min(1,this.beamHeat/this.BEAM_MAX_HEAT)}static getBeamHeat(){return this.beamHeat}static updateBeamEndpoints(e,t,n,i,s,r){this.beamOrigin.set(e,t,n),this.beamTarget.set(i,s,r)}}const In=14,su=2.2,ru=.45,au=2.2,lM=75,cM=62463,hM=17510,uM=9684477,dM=3900150,fM=65535;class Ia{static mothershipGroup=null;static playerEntity=null;static groundShadowRing=null;static aimReticleGroup=null;static reticleRingMat=null;static reticleDotMat=null;static aimTargetX=0;static aimTargetZ=0;static lastX=0;static lastZ=0;static currentTiltX=0;static currentTiltZ=0;static currentShadowY=.1;static tick(e){if(this.playerEntity===null){for(const t of it.entities)if(rn.has(t)){this.playerEntity=t,this.initMesh();const n=yt.get(t);n&&(this.lastX=n.worldX,this.lastZ=n.worldY,this.aimTargetX=n.worldX,this.aimTargetZ=n.worldY);break}}if(this.playerEntity!==null){const t=yt.get(this.playerEntity);if(t&&(t.worldZ<40&&(t.worldZ=lM),this.mothershipGroup)){const n=(t.worldX-this.lastX)/Math.max(.001,e),i=(t.worldY-this.lastZ)/Math.max(.001,e);this.lastX=t.worldX,this.lastZ=t.worldY;const s=Math.max(-.25,Math.min(.25,-n*.003)),r=Math.max(-.25,Math.min(.25,i*.003)),o=1-Math.exp(-10*e);this.currentTiltX+=(r-this.currentTiltX)*o,this.currentTiltZ+=(s-this.currentTiltZ)*o;const l=Math.sin(performance.now()*.0025)*1.8;if(this.mothershipGroup.position.set(t.worldX,t.worldZ+l,t.worldY),this.mothershipGroup.rotation.y+=e*.3,this.mothershipGroup.rotation.x=this.currentTiltX,this.mothershipGroup.rotation.z=this.currentTiltZ,this.groundShadowRing){let u=.1;const d=Ii.queryRadius(t.worldX,t.worldY,16);for(const _ of d){const m=yt.get(_);if(!m)continue;const f=Math.abs(m.worldX-t.worldX),x=Math.abs(m.worldY-t.worldY);if(f<14&&x<14){const y=mt.getSpriteScale(_),v=y?Math.min(60,y.y*.7):20;v>u&&(u=v)}}const p=1-Math.exp(-12*e);this.currentShadowY+=(u-this.currentShadowY)*p,this.groundShadowRing.position.set(t.worldX,this.currentShadowY+.1,t.worldY),this.groundShadowRing.rotation.z+=e*.4;const g=this.groundShadowRing.material;g&&(g.opacity=.35+Math.sin(performance.now()*.004)*.12)}const c=Math.max(-80,Math.min(80,(this.aimTargetX-t.worldX)*.22)),h=Math.max(-80,Math.min(80,(this.aimTargetZ-t.worldY)*.22));Ai.setTarget(t.worldX+c,t.worldY+h)}}}static initMesh(){this.mothershipGroup=new gt,this.mothershipGroup.name="MothershipUFO";const e=new Sn(In*.4,In,In*.35,32),t=new Ct({color:cM,emissive:hM,emissiveIntensity:.6,roughness:.2,metalness:.8,depthTest:!0,depthWrite:!0}),n=new Se(e,t);n.scale.set(su,ru,au),n.castShadow=!0,n.renderOrder=0,this.mothershipGroup.add(n);const i=new br(In*.65,24,16,0,Math.PI*2,0,Math.PI*.5),s=new Ct({color:uM,emissive:dM,emissiveIntensity:.9,transparent:!0,opacity:.85,roughness:.1,depthTest:!0,depthWrite:!1}),r=new Se(i,s);r.position.y=In*.15,r.scale.set(su*.7,ru*1.5,au*.7),r.renderOrder=1,this.mothershipGroup.add(r);const o=new Sn(In*.3,In*.1,In*.1,16),l=new ot({color:fM,depthTest:!0,depthWrite:!0}),c=new Se(o,l);c.position.y=-In*.18,c.renderOrder=0,this.mothershipGroup.add(c),Ie.ufoScene.add(this.mothershipGroup);const h=new Wi(In*.8,In*1.2,32),u=new ot({color:62463,side:Rt,transparent:!0,opacity:.35,depthTest:!1,depthWrite:!1});this.groundShadowRing=new Se(h,u),this.groundShadowRing.rotation.x=-Math.PI/2,this.groundShadowRing.renderOrder=800,Ie.playerGroup.add(this.groundShadowRing),this.aimReticleGroup=new gt,this.aimReticleGroup.name="AimTargetReticle";const d=new Wi(4.2,5.4,32);this.reticleRingMat=new ot({color:62463,side:Rt,transparent:!0,opacity:.85,depthTest:!1,depthWrite:!1});const p=new Se(d,this.reticleRingMat);p.rotation.x=-Math.PI/2,p.renderOrder=900,this.aimReticleGroup.add(p);for(let m=0;m<4;m++){const f=m*Math.PI/2,x=new Tn(.8,2.5),y=new Se(x,this.reticleRingMat);y.rotation.x=-Math.PI/2,y.position.set(Math.cos(f)*6.5,0,Math.sin(f)*6.5),y.rotation.z=-f,y.renderOrder=900,this.aimReticleGroup.add(y)}const g=new Nl(.9,16);this.reticleDotMat=new ot({color:16777215,side:Rt,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1});const _=new Se(g,this.reticleDotMat);_.rotation.x=-Math.PI/2,_.renderOrder=901,this.aimReticleGroup.add(_),Ie.playerGroup.add(this.aimReticleGroup)}static updateAimTarget(e,t,n,i){if(this.aimTargetX=e,this.aimTargetZ=n,this.aimReticleGroup){this.aimReticleGroup.position.set(e,t+.15,n),this.aimReticleGroup.rotation.y+=.04;const s=i?16724838:62463;this.reticleRingMat&&this.reticleRingMat.color.getHex()!==s&&this.reticleRingMat.color.setHex(s)}}static getPlayerMeshPosition(){return this.mothershipGroup?this.mothershipGroup.position.clone():null}}const ou=25,lu=0,cu=120,pM=.1;class wi{static groundPlane=new ni(new I(0,1,0),0);static midHeightPlane=new ni(new I(0,1,0),-30);static raycaster=new Vl;static pointerVector=new me;static groundIntersectPoint=new I;static midIntersectPoint=new I;static tempProj=new I;static targetPos={x:0,y:0};static initializedTarget=!1;static mouseFollowMode=!1;static fKeyWasDown=!1;static lastHoverCheckTime=0;static cachedHoveredHit=null;static cachedHoveredEntity=null;static cachedFallbackPoint=null;static HOVER_CHECK_INTERVAL=.033;static beamDamageTimer=0;static init(){it.addSystem(this.tick.bind(this))}static tick(e){for(const t of it.entities)if(rn.has(t)){const n=yt.get(t),i=ai.get(t);if(!n||!i)continue;this.initializedTarget||(this.targetPos.x=n.worldX,this.targetPos.y=n.worldY,this.initializedTarget=!0);let s=0,r=0;(Ue.isKeyDown("KeyW")||Ue.isKeyDown("ArrowUp")||Ue.isKeyDown("w"))&&(s-=1,r-=1),(Ue.isKeyDown("KeyS")||Ue.isKeyDown("ArrowDown")||Ue.isKeyDown("s"))&&(s+=1,r+=1),(Ue.isKeyDown("KeyA")||Ue.isKeyDown("ArrowLeft")||Ue.isKeyDown("a"))&&(s-=1,r+=1),(Ue.isKeyDown("KeyD")||Ue.isKeyDown("ArrowRight")||Ue.isKeyDown("d"))&&(s+=1,r-=1);const o=Ue.joystickVector;(o.x!==0||o.y!==0)&&(s+=o.y+o.x,r+=o.y-o.x),Ue.isKeyDown("KeyF")||Ue.isKeyDown("f")?this.fKeyWasDown||(this.mouseFollowMode=!this.mouseFollowMode,this.fKeyWasDown=!0):this.fKeyWasDown=!1;const l=Math.sqrt(s*s+r*r);if(l>0){const x=Ue.isKeyDown("ShiftLeft")||Ue.isKeyDown("ShiftRight")?cu*1.6:cu;this.targetPos.x+=s/l*x*e,this.targetPos.y+=r/l*x*e,this.targetPos.x=Math.max(-480,Math.min(480,this.targetPos.x)),this.targetPos.y=Math.max(-480,Math.min(480,this.targetPos.y))}else if(this.mouseFollowMode){const f=this.getMouseGroundPosition();f&&(this.targetPos.x=Math.max(-480,Math.min(480,f.x)),this.targetPos.y=Math.max(-480,Math.min(480,f.z)))}const c=1-Math.exp(-10*e);if(n.worldX+=(this.targetPos.x-n.worldX)*c,n.worldY+=(this.targetPos.y-n.worldY)*c,this.lastHoverCheckTime+=e,this.lastHoverCheckTime>=this.HOVER_CHECK_INTERVAL){if(this.lastHoverCheckTime=0,this.cachedHoveredHit=Ca.getHitZone(Ie.camera),this.cachedFallbackPoint=null,this.cachedHoveredHit)this.cachedHoveredEntity=this.cachedHoveredHit.entity;else{const f=Ue.getMouseNDC();this.pointerVector.set(f.x,f.y);const x=this.findBestBuildingNearCursor(this.pointerVector,Ie.camera);x?(this.cachedHoveredEntity=x.entity,this.cachedFallbackPoint=x.point):this.cachedHoveredEntity=null}if(this.cachedHoveredEntity!==null){const f=jt.get(this.cachedHoveredEntity),x=zt.get(this.cachedHoveredEntity),y=Tt.get(this.cachedHoveredEntity),v=f?f.texturePrefix.match(/building_([a-zA-Z0-9_]+)_stage_/):null,R=v?v[1]:"3",E=lt[R]||lt[3],A=x?x.totalHp:y?y.currentHP:100,C=x?x.maxTotalHp:y?y.maxHP:100,b=f?f.currentFrame:0;Ri.updateTargetInspector({name:E.name,key:R,hp:A,maxHp:C,frame:b})}else Ri.updateTargetInspector(null)}const h=this.getMouseGroundPosition()||new I(n.worldX,0,n.worldY);let u=h.x,d=.1,p=h.z,g=!1;if(this.cachedHoveredHit)u=this.cachedHoveredHit.point.x,d=this.cachedHoveredHit.point.y,p=this.cachedHoveredHit.point.z,g=!0;else if(this.cachedHoveredEntity!==null){const f=this.cachedFallbackPoint||mt.getVisualCenter(this.cachedHoveredEntity)||mt.getSpritePosition(this.cachedHoveredEntity);f&&(u=f.x,d=f.y,p=f.z,g=!0)}if(Ia.updateAimTarget(u,d,p,g),this.tempProj.set(u,d,p).project(Ie.camera),this.tempProj.z<=1){const f=(this.tempProj.x*.5+.5)*window.innerWidth,x=(-this.tempProj.y*.5+.5)*window.innerHeight;Ri.setTargetReticle({x:f,y:x})}else Ri.setTargetReticle(null);Ue.isKeyDown("Digit1")||Ue.isKeyDown("1")?i.currentSelected="laser":Ue.isKeyDown("Digit2")||Ue.isKeyDown("2")?i.currentSelected="cluster":(Ue.isKeyDown("Digit3")||Ue.isKeyDown("3"))&&(i.currentSelected="beam");const _=Ia.getPlayerMeshPosition()||new I(n.worldX,75,n.worldY);Ue.isSecondaryPointerDown()&&wt.isClusterReady()&&wt.fireClusterBomb(_,{x:h.x,y:h.z});const m=Ue.isPointerDown()||Ue.isKeyDown("Space");if(i.currentSelected==="beam")if(m&&!wt.isBeamOverheated()){wt.setBeamFiring(!0),kt.startContinuousBeamAudio();const f=this.getAimTarget(n,h);if(wt.updateBeamEndpoints(_.x,_.y-3,_.z,f.impactPoint.x,f.impactPoint.y,f.impactPoint.z),this.beamDamageTimer+=e,this.beamDamageTimer>=.06){this.beamDamageTimer=0;const x=25;f.targetEntity!==null&&xe.applyZonalDamage(f.targetEntity,f.targetZone,x,f.targetUV),fn.checkTargetHit(f.impactPoint.x,f.impactPoint.z,18,x),Os.applyDamageInRadius(f.impactPoint.x,f.impactPoint.z,14),xe.fxQueue.push({type:"sparks",x:f.impactPoint.x,y:f.impactPoint.y,z:f.impactPoint.z,data:{count:6}}),f.impactPoint.y<=2.5&&Gn.spawnDecal(f.impactPoint.x,f.impactPoint.z,"scorch",8.5),xe.fxQueue.push({type:"shake",x:0,y:0,z:0,data:{intensity:4}})}}else wt.isBeamFiring()&&(wt.setBeamFiring(!1),kt.stopContinuousBeamAudio());else if(wt.isBeamFiring()&&(wt.setBeamFiring(!1),kt.stopContinuousBeamAudio()),m){if(i.currentSelected==="cluster")wt.isClusterReady()&&wt.fireClusterBomb(_,{x:h.x,y:h.z});else if(i.heatLevel<=lu){const f=this.getAimTarget(n,h);f.targetEntity!==null?(xe.applyZonalDamage(f.targetEntity,f.targetZone,ou,f.targetUV),i.heatLevel=i.fireRate,xe.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:f.impactPoint.x,ty:f.impactPoint.y,tz:f.impactPoint.z}})):(i.heatLevel=i.fireRate,fn.checkTargetHit(f.impactPoint.x,f.impactPoint.z,14,ou),Os.applyDamageInRadius(f.impactPoint.x,f.impactPoint.z,8),xe.fxQueue.push({type:"laser",x:_.x,y:_.y-3,z:_.z,data:{tx:f.impactPoint.x,ty:f.impactPoint.y,tz:f.impactPoint.z}}))}}i.heatLevel>lu&&(i.heatLevel-=e)}}static findBestBuildingNearCursor(e,t){this.raycaster.setFromCamera(e,t);const n=this.raycaster.ray.intersectPlane(this.midHeightPlane,this.midIntersectPoint),i=n?this.midIntersectPoint.x:0,s=n?this.midIntersectPoint.z:0,r=Ii.queryRadius(i,s,64);if(r.length===0)return null;let o=null,l=pM;for(let c=0;c<r.length;c++){const h=r[c],u=Tt.get(h);if(!u||u.currentHP<=0)continue;const d=mt.getVisualCenter(h)||mt.getSpritePosition(h);if(!d)continue;this.tempProj.copy(d).project(t);const p=this.tempProj.x-e.x,g=this.tempProj.y-e.y;let _=Math.hypot(p,g);const m=jt.get(h),{def:f}=mt.getTypeInfo(h,m?m.texturePrefix:"");f&&(f.tier==="foreground"||f.width<=32||f.height&&f.height<=60)?_*=.6:f&&f.tier==="landmark"&&(_*=1.25),_<l&&(l=_,o={entity:h,point:d})}return o}static getMouseGroundPosition(){const e=Ue.getMouseNDC();return this.pointerVector.set(e.x,e.y),this.raycaster.setFromCamera(this.pointerVector,Ie.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.groundIntersectPoint)}static findClosestBuildingNear(e,t,n){return Ii.findClosest(e,t,n)}static getAimTarget(e,t){let n=null,i=Ln.CENTER,s={x:.5,y:.5},r=null;if(Ue.isKeyDown("Space"))n=this.findClosestBuildingNear(e.worldX,e.worldY,1/0),n&&(r=mt.getVisualCenter(n)||mt.getSpritePosition(n));else if(this.cachedHoveredHit)n=this.cachedHoveredHit.entity,i=this.cachedHoveredHit.zone,s=this.cachedHoveredHit.uvCenter,r=this.cachedHoveredHit.point;else if(this.cachedHoveredEntity!==null)n=this.cachedHoveredEntity,i=Ln.CENTER,s={x:.5,y:.5},r=this.cachedFallbackPoint||mt.getVisualCenter(n)||mt.getSpritePosition(n);else{const o=Ue.getMouseNDC();this.pointerVector.set(o.x,o.y);const l=this.findBestBuildingNearCursor(this.pointerVector,Ie.camera);l?(n=l.entity,i=Ln.CENTER,s={x:.5,y:.5},r=l.point):t&&(r=t)}return r||(r=t||new I(e.worldX,0,e.worldY)),{targetEntity:n,targetZone:i,targetUV:s,impactPoint:r}}}const hu=0,uu=100,Si=.5,du=60,fu=25,pu=100,mM=25,gM=.8,_M=12;function ua(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}class Ri{static scoreElement;static flashOverlay;static controlPanel;static modeToggleButton;static showcaseTools;static targetInfoPanel;static labelsContainer;static targetReticle;static labelElements=new Map;static scoreValEl=null;static highValEl=null;static comboBadgeEl=null;static destructValEl=null;static destructBarEl=null;static shieldValEl=null;static shieldBarEl=null;static hullValEl=null;static hullBarEl=null;static weaponBtn1=null;static weaponBtn2=null;static weaponBtn3=null;static clusterOverlayEl=null;static beamHeatOverlayEl=null;static beamHeatTextEl=null;static autopilotBtn=null;static popupsContainer=null;static currentDestructionPercent=0;static tempVec=new I;static init(){const e=document.createElement("div");e.style.position="fixed",e.style.top="14px",e.style.left="14px",e.style.right="14px",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="flex-start",e.style.color="white",e.style.fontFamily="system-ui, -apple-system, sans-serif",e.style.zIndex="1000",e.style.pointerEvents="none",this.scoreElement=document.createElement("div"),this.scoreElement.style.background="rgba(15, 23, 42, 0.82)",this.scoreElement.style.backdropFilter="blur(10px)",this.scoreElement.style.padding="8px 14px",this.scoreElement.style.borderRadius="12px",this.scoreElement.style.border="1px solid rgba(255, 255, 255, 0.12)",this.scoreElement.style.boxShadow="0 6px 20px rgba(0, 0, 0, 0.5)",this.scoreElement.style.pointerEvents="auto",this.scoreElement.style.minWidth="210px",this.scoreElement.style.maxWidth="280px",this.scoreElement.innerHTML=`
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
    `,e.appendChild(this.scoreElement),this.scoreValEl=this.scoreElement.querySelector("#hud-score-val"),this.highValEl=this.scoreElement.querySelector("#hud-high-val"),this.comboBadgeEl=this.scoreElement.querySelector("#hud-combo-badge"),this.destructValEl=this.scoreElement.querySelector("#hud-destruct-val"),this.destructBarEl=this.scoreElement.querySelector("#hud-destruct-bar"),this.shieldValEl=this.scoreElement.querySelector("#hud-shield-val"),this.shieldBarEl=this.scoreElement.querySelector("#hud-shield-bar"),this.hullValEl=this.scoreElement.querySelector("#hud-hull-val"),this.hullBarEl=this.scoreElement.querySelector("#hud-hull-bar"),this.weaponBtn1=this.scoreElement.querySelector("#weapon-btn-1"),this.weaponBtn2=this.scoreElement.querySelector("#weapon-btn-2"),this.weaponBtn3=this.scoreElement.querySelector("#weapon-btn-3"),this.clusterOverlayEl=this.scoreElement.querySelector("#cluster-cooldown-overlay"),this.beamHeatOverlayEl=this.scoreElement.querySelector("#beam-heat-overlay"),this.beamHeatTextEl=this.scoreElement.querySelector("#beam-btn-text"),this.autopilotBtn=this.scoreElement.querySelector("#autopilot-btn"),this.autopilotBtn&&(this.autopilotBtn.onclick=()=>{wi.mouseFollowMode=!wi.mouseFollowMode,this.autopilotBtn&&this.autopilotBtn.blur()}),this.weaponBtn1&&(this.weaponBtn1.onclick=()=>{for(const s of it.entities)if(rn.has(s)){const r=ai.get(s);r&&(r.currentSelected="laser");break}}),this.weaponBtn2&&(this.weaponBtn2.onclick=()=>{for(const s of it.entities)if(rn.has(s)){const r=ai.get(s);r&&(r.currentSelected="cluster");break}}),this.weaponBtn3&&(this.weaponBtn3.onclick=()=>{for(const s of it.entities)if(rn.has(s)){const r=ai.get(s);r&&(r.currentSelected="beam");break}}),this.popupsContainer=document.createElement("div"),this.popupsContainer.style.position="fixed",this.popupsContainer.style.top="0",this.popupsContainer.style.left="0",this.popupsContainer.style.width="100%",this.popupsContainer.style.height="100%",this.popupsContainer.style.pointerEvents="none",this.popupsContainer.style.zIndex="999",document.body.appendChild(this.popupsContainer),this.controlPanel=document.createElement("div"),this.controlPanel.style.display="flex",this.controlPanel.style.gap="8px",this.controlPanel.style.pointerEvents="auto";const t=typeof window<"u"&&(window.location.search.includes("debug=1")||window.location.search.includes("showcase=1"));this.modeToggleButton=document.createElement("button"),this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.setAttribute("aria-pressed","false"),this.modeToggleButton.style.padding="8px 14px",this.modeToggleButton.style.borderRadius="10px",this.modeToggleButton.style.border="1px solid rgba(59, 130, 246, 0.5)",this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.color="white",this.modeToggleButton.style.fontWeight="600",this.modeToggleButton.style.fontSize="12px",this.modeToggleButton.style.cursor="pointer",this.modeToggleButton.style.boxShadow="0 4px 14px rgba(59, 130, 246, 0.4)",this.modeToggleButton.style.transition="all 0.2s ease",this.modeToggleButton.innerText="🔬 SHOWCASE",this.modeToggleButton.onclick=()=>{ps.toggleMode(),this.updateModeUI(),this.modeToggleButton.blur()},this.showcaseTools=document.createElement("div"),this.showcaseTools.style.display="none",this.showcaseTools.style.gap="8px";const n=this.createActionButton("🔄 Repair","#059669","Repair all showcase buildings",()=>ps.resetAllHP()),i=this.createActionButton("💥 -25%","#dc2626","Damage all showcase buildings by 25 percent",()=>ps.damageAll(mM));this.showcaseTools.appendChild(n),this.showcaseTools.appendChild(i),t&&(this.controlPanel.appendChild(this.modeToggleButton),this.controlPanel.appendChild(this.showcaseTools),e.appendChild(this.controlPanel)),document.body.appendChild(e),this.targetInfoPanel=document.createElement("div"),this.targetInfoPanel.style.position="fixed",this.targetInfoPanel.style.bottom="20px",this.targetInfoPanel.style.left="50%",this.targetInfoPanel.style.transform="translateX(-50%)",this.targetInfoPanel.style.background="rgba(15, 23, 42, 0.88)",this.targetInfoPanel.style.backdropFilter="blur(10px)",this.targetInfoPanel.style.padding="8px 18px",this.targetInfoPanel.style.borderRadius="12px",this.targetInfoPanel.style.border="1px solid rgba(59, 130, 246, 0.5)",this.targetInfoPanel.style.color="white",this.targetInfoPanel.style.fontFamily="system-ui, monospace",this.targetInfoPanel.style.fontSize="13px",this.targetInfoPanel.style.pointerEvents="none",this.targetInfoPanel.style.display="none",this.targetInfoPanel.style.boxShadow="0 8px 24px rgba(0,0,0,0.5)",document.body.appendChild(this.targetInfoPanel),this.labelsContainer=document.createElement("div"),this.labelsContainer.style.position="fixed",this.labelsContainer.style.top="0",this.labelsContainer.style.left="0",this.labelsContainer.style.width="100vw",this.labelsContainer.style.height="100vh",this.labelsContainer.style.pointerEvents="none",this.labelsContainer.style.zIndex="900",document.body.appendChild(this.labelsContainer),this.flashOverlay=document.createElement("div"),this.flashOverlay.style.position="fixed",this.flashOverlay.style.top="0",this.flashOverlay.style.left="0",this.flashOverlay.style.width="100vw",this.flashOverlay.style.height="100vh",this.flashOverlay.style.backgroundColor="white",this.flashOverlay.style.opacity="0",this.flashOverlay.style.pointerEvents="none",this.flashOverlay.style.transition="opacity 0.08s ease-out",this.flashOverlay.style.zIndex="9999",document.body.appendChild(this.flashOverlay),this.targetReticle=document.createElement("div"),this.targetReticle.style.position="fixed",this.targetReticle.style.pointerEvents="none",this.targetReticle.style.display="none",this.targetReticle.style.width="48px",this.targetReticle.style.height="48px",this.targetReticle.style.transform="translate(-50%, -50%)",this.targetReticle.style.zIndex="950",this.targetReticle.style.transition="left 0.04s ease-out, top 0.04s ease-out",this.targetReticle.innerHTML=`
      <div style="position:absolute; top:0; left:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:0; right:0; width:10px; height:10px; border-top:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; left:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-left:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; bottom:0; right:0; width:10px; height:10px; border-bottom:2px solid #38bdf8; border-right:2px solid #38bdf8; filter:drop-shadow(0 0 4px #38bdf8);"></div>
      <div style="position:absolute; top:50%; left:50%; width:4px; height:4px; transform:translate(-50%, -50%); border-radius:50%; background:#38bdf8; box-shadow:0 0 6px #38bdf8;"></div>
    `,document.body.appendChild(this.targetReticle)}static setTargetReticle(e){if(this.targetReticle){if(!e){this.targetReticle.style.display="none";return}this.targetReticle.style.left=`${e.x}px`,this.targetReticle.style.top=`${e.y}px`,this.targetReticle.style.display="block"}}static createActionButton(e,t,n,i){const s=document.createElement("button");return s.setAttribute("aria-label",n),s.style.padding="10px 18px",s.style.borderRadius="12px",s.style.border="none",s.style.background=t,s.style.color="white",s.style.fontWeight="600",s.style.fontSize="14px",s.style.cursor="pointer",s.style.transition="transform 0.15s ease",s.innerText=e,s.onclick=()=>{i(),s.blur()},s.onmouseover=()=>s.style.transform="scale(1.05)",s.onmouseout=()=>s.style.transform="scale(1.0)",s.onfocus=()=>{s.style.transform="scale(1.05)",s.style.outline="3px solid rgba(255, 255, 255, 0.8)",s.style.outlineOffset="2px"},s.onblur=()=>{s.style.transform="scale(1.0)",s.style.outline="none"},s}static updateModeUI(){const e=ps.isShowcaseMode;this.modeToggleButton.setAttribute("aria-pressed",e?"true":"false"),e?(this.modeToggleButton.innerText="🌆 RETURN TO CITY MODE",this.modeToggleButton.setAttribute("aria-label","Return to city mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #059669 0%, #10b981 100%)",this.modeToggleButton.style.borderColor="rgba(16, 185, 129, 0.5)",this.showcaseTools.style.display="flex"):(this.modeToggleButton.innerText="🔬 ENTER TEST SHOWCASE MODE",this.modeToggleButton.setAttribute("aria-label","Enter test showcase mode"),this.modeToggleButton.style.background="linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",this.modeToggleButton.style.borderColor="rgba(59, 130, 246, 0.5)",this.showcaseTools.style.display="none",this.clearLabels())}static updateTargetInspector(e){if(!e){this.targetInfoPanel.style.display="none";return}this.targetInfoPanel.style.display="block";const t=Math.round(e.hp/e.maxHp*uu),n=t>du?"#10b981":t>fu?"#f59e0b":"#ef4444",i=ua(e.name),s=ua(e.key);this.targetInfoPanel.innerHTML=`
      <div style="font-weight: bold; font-size: 13px; margin-bottom: 3px; color: #60a5fa; letter-spacing: 0.5px;">🎯 TARGET: ${i} <span style="opacity: 0.7; font-weight: normal; font-size: 12px;">[${s}]</span></div>
      <div style="font-size: 12px;">HP: <span style="color: ${n}; font-weight: bold;">${e.hp}/${e.maxHp} (${t}%)</span> · Frame: <span style="color: #f472b6; font-weight: bold;">#${e.frame}</span></div>
    `}static tick(e){if(!ps.isShowcaseMode)this.clearLabels();else{const l=ps.getShowcaseBuildings(),c=new Set;for(const h of l){c.add(h.entity);let u=this.labelElements.get(h.entity);u||(u=document.createElement("div"),u.style.position="absolute",u.style.transform="translate(-50%, -100%)",u.style.background="rgba(15, 23, 42, 0.85)",u.style.border="1px solid rgba(255, 255, 255, 0.2)",u.style.borderRadius="8px",u.style.padding="4px 8px",u.style.color="#e2e8f0",u.style.fontFamily="monospace",u.style.fontSize="11px",u.style.whiteSpace="nowrap",u.style.pointerEvents="none",u.style.boxShadow="0 4px 12px rgba(0,0,0,0.4)",this.labelsContainer.appendChild(u),this.labelElements.set(h.entity,u));const d=h.def.height*gM;if(this.tempVec.set(h.worldX,d,h.worldY),this.tempVec.project(e),this.tempVec.z>1){u.style.display="none";continue}const p=(this.tempVec.x*Si+Si)*window.innerWidth,g=(-this.tempVec.y*Si+Si)*window.innerHeight;u.style.left=`${p}px`,u.style.top=`${g-_M}px`,u.style.display="block";const _=Tt.get(h.entity),m=jt.get(h.entity),f=zt.get(h.entity),x=f?f.totalHp:_?_.currentHP:pu,y=f?f.maxTotalHp:_?_.maxHP:pu,v=Math.max(hu,Math.round(x/y*uu)),R=m?m.currentFrame:hu,E=v>du?"#34d399":v>fu?"#fbbf24":"#f87171",A=ua(h.def.name),C=ua(h.typeKey);u.innerHTML=`<b>${A}</b> <span style="color:#94a3b8;">[${C}]</span><br/><span style="color:${E};">HP ${v}%</span> · Fr #${R}`}for(const[h,u]of this.labelElements.entries())c.has(h)||(this.labelsContainer.removeChild(u),this.labelElements.delete(h))}if(this.scoreValEl&&(this.scoreValEl.innerText=an.getScore().toLocaleString()),this.highValEl&&(this.highValEl.innerText=an.getHighScore().toLocaleString()),this.comboBadgeEl){const l=an.getCombo();l>1?(this.comboBadgeEl.style.display="block",this.comboBadgeEl.innerText=`x${l} COMBO!`,this.comboBadgeEl.style.background=l>=4?"#ef4444":l>=3?"#f59e0b":"#3b82f6",this.comboBadgeEl.style.boxShadow=`0 0 10px ${l>=4?"#ef4444":"#f59e0b"}`):this.comboBadgeEl.style.display="none"}if(this.destructValEl&&this.destructBarEl&&(this.destructValEl.innerText=`${this.currentDestructionPercent.toFixed(1)}%`,this.destructBarEl.style.width=`${Math.min(100,this.currentDestructionPercent)}%`),this.shieldValEl&&this.shieldBarEl){const l=Math.max(0,Math.round(fn.playerShield));this.shieldValEl.innerText=`${l}%`,this.shieldBarEl.style.width=`${l}%`}if(this.hullValEl&&this.hullBarEl){const l=Math.max(0,Math.round(fn.playerHull));this.hullValEl.innerText=`${l}%`,this.hullBarEl.style.width=`${l}%`,this.hullBarEl.style.background=l>50?"#4ade80":l>25?"#facc15":"#ef4444"}let t="laser";for(const l of it.entities)if(rn.has(l)){const c=ai.get(l);c&&(t=c.currentSelected);break}const n=t==="laser",i=t==="cluster",s=t==="beam";this.weaponBtn1&&(this.weaponBtn1.style.background=n?"#0284c7":"#1e293b",this.weaponBtn1.style.borderColor=n?"#38bdf8":"rgba(255,255,255,0.2)",this.weaponBtn1.style.color=n?"#ffffff":"#94a3b8"),this.weaponBtn2&&(this.weaponBtn2.style.background=i?"#d97706":"#1e293b",this.weaponBtn2.style.borderColor=i?"#f59e0b":"rgba(255,255,255,0.2)",this.weaponBtn2.style.color=i?"#ffffff":"#94a3b8");const r=wt.getBeamHeatRatio(),o=wt.isBeamOverheated();if(this.weaponBtn3&&(o?(this.weaponBtn3.style.background="rgba(127, 29, 29, 0.85)",this.weaponBtn3.style.borderColor="#ef4444",this.weaponBtn3.style.color="#fca5a5"):s?(this.weaponBtn3.style.background="#0e7490",this.weaponBtn3.style.borderColor="#06b6d4",this.weaponBtn3.style.color="#ffffff"):(this.weaponBtn3.style.background="#1e293b",this.weaponBtn3.style.borderColor="rgba(255,255,255,0.2)",this.weaponBtn3.style.color="#94a3b8")),this.clusterOverlayEl&&(this.clusterOverlayEl.style.height=`${wt.getClusterCooldownRatio()*100}%`),this.beamHeatOverlayEl&&(this.beamHeatOverlayEl.style.height=`${r*100}%`,this.beamHeatOverlayEl.style.background=o?"rgba(239, 68, 68, 0.7)":r>.7?"rgba(249, 115, 22, 0.6)":"rgba(6, 182, 212, 0.45)"),this.beamHeatTextEl&&(o?(this.beamHeatTextEl.innerText="OVERHEAT!",this.beamHeatTextEl.style.color="#fca5a5"):r>.08?(this.beamHeatTextEl.innerText=`BEAM ${Math.round(r*100)}%`,this.beamHeatTextEl.style.color="#ffffff"):(this.beamHeatTextEl.innerText="[3] BEAM",this.beamHeatTextEl.style.color=s?"#ffffff":"#94a3b8")),this.autopilotBtn&&(wi.mouseFollowMode?(this.autopilotBtn.innerText="⚡ [F] AUTOPILOT",this.autopilotBtn.style.background="rgba(16, 185, 129, 0.25)",this.autopilotBtn.style.borderColor="#10b981",this.autopilotBtn.style.color="#34d399",this.autopilotBtn.style.boxShadow="0 0 10px rgba(16, 185, 129, 0.4)"):(this.autopilotBtn.innerText="🛸 [F] TWIN-STICK",this.autopilotBtn.style.background="rgba(56, 189, 248, 0.12)",this.autopilotBtn.style.borderColor="rgba(56, 189, 248, 0.4)",this.autopilotBtn.style.color="#38bdf8",this.autopilotBtn.style.boxShadow="none")),this.popupsContainer){let l="";for(const c of an.popups)if(this.tempVec.set(c.worldX,c.worldZ,c.worldY),this.tempVec.project(e),this.tempVec.z<=1){const h=(this.tempVec.x*Si+Si)*window.innerWidth,u=(-this.tempVec.y*Si+Si)*window.innerHeight,d=Math.max(0,1-c.elapsed/c.duration);l+=`<div style="position: absolute; left: ${h}px; top: ${u}px; transform: translate(-50%, -50%); font-size: 16px; font-weight: 800; color: ${c.color}; text-shadow: 0 2px 8px rgba(0,0,0,0.9); opacity: ${d}; pointer-events: none; white-space: nowrap;">${c.text}</div>`}this.popupsContainer.innerHTML=l}}static clearLabels(){for(const e of this.labelElements.values())this.labelsContainer.removeChild(e);this.labelElements.clear()}static triggerFlash(){this.flashOverlay&&(this.flashOverlay.style.transition="none",this.flashOverlay.style.opacity="0.5",this.flashOverlay.offsetWidth,this.flashOverlay.style.transition="opacity 0.1s ease-out",this.flashOverlay.style.opacity="0")}static updateScore(e){this.currentDestructionPercent=e,this.destructValEl&&this.destructBarEl&&(this.destructValEl.innerText=`${e.toFixed(1)}%`,this.destructBarEl.style.width=`${Math.min(100,e)}%`)}}const ms=0,gs=0,xM=.25,yM=16777215,vM=.1,mu=1;class gu{mesh;material;textures;currentFrame=gs;speed=xM;frameDurations;loop=!0;timer=ms;playing=!0;active=!0;onFrameChange;onComplete;constructor(e){this.textures=e,this.material=new fd({map:this.textures[gs]||null,color:yM,transparent:!0,alphaTest:vM}),this.mesh=new pp(this.material)}reset(e,t,n){this.textures=e,this.currentFrame=gs,this.timer=ms,this.loop=t,this.frameDurations=n,this.playing=!0,this.active=!0,this.material.map=e[gs]||null,this.material.needsUpdate=!0,this.onComplete=void 0,this.onFrameChange=void 0,this.mesh.visible=!0}gotoFrame(e){this.textures.length!==ms&&(this.currentFrame=Math.max(gs,Math.min(e,this.textures.length-mu)),this.timer=ms,this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0)}play(){this.playing=!0}stop(){this.playing=!1}tick(e){if(!this.active||!this.playing||this.textures.length===ms)return;if(this.timer+=e,this.timer<ms){this.mesh.visible=!1;return}else this.mesh.visible||(this.mesh.visible=!0);const t=this.frameDurations?.[this.currentFrame]??this.speed;if(this.timer>=t){if(this.timer-=t,this.currentFrame++,this.currentFrame>=this.textures.length)if(this.loop)this.currentFrame=gs;else{this.currentFrame=this.textures.length-mu,this.playing=!1,this.active=!1,this.onComplete&&this.onComplete();return}this.material.map=this.textures[this.currentFrame],this.material.needsUpdate=!0,this.onFrameChange&&this.onFrameChange(this.currentFrame)}}destroy(){this.active=!1,this.material.dispose()}}const pt=0,_u=.5,sr=.5,xu=11,yu=7,vu=10,MM=50,SM=8,bM=8,TM=16,Mu=2,EM=3,Su=1.2,AM=.15,bu=18,wM=2,Tu=3,RM=2,CM=7,IM=6,PM=.05,LM=.1,DM=.5,FM=14,NM=3,UM=18,OM=1,Eu=1,BM=1.5,zM=.2,kM=1,HM=.8,Au=80,GM=[.02,.02,.02,.04,.08,.08,.08,.08,.08,.08,.08],wu=[.02,.02,.02,.04,.08,.08,.08],VM=[.01,.01,.02,.02,.02,.02,.02,.02,.02,.02];class Ru{static activeSprites=[];static inactiveSprites=[];static lightPool=[];static shockwavePool=[];static laserPool=[];static sharedShockwaveGeo;static sharedLaserHitGeo;static sharedLaserHitMat;static sharedLaserOuterMat;static sharedLaserCoreMat;static scratchBuildingPos=new I;static scratchTargetPos=new I;static blastTextures=[];static blast360Textures=[];static fireTextures=[];static getBlastTextures(){if(this.blastTextures.length<xu){this.blastTextures=[];for(let e=pt;e<xu;e++){const t=en.getTexture(`fx_blast_${e}`);t&&this.blastTextures.push(t)}}return this.blastTextures}static getBlast360Textures(){if(this.blast360Textures.length<yu){this.blast360Textures=[];for(let e=pt;e<yu;e++){const t=en.getTexture(`fx_blast360_${e}`);t&&this.blast360Textures.push(t)}}return this.blast360Textures}static getFireTextures(){if(this.fireTextures.length<vu){this.fireTextures=[];for(let e=pt;e<vu;e++){const t=en.getTexture(`fx_fire_${e}`);t&&this.fireTextures.push(t)}}return this.fireTextures}static preloadTextureArrays(){this.getBlastTextures(),this.getBlast360Textures(),this.getFireTextures();for(let e=pt;e<MM;e++)this.inactiveSprites.push(new gu([]));this.initLightPool(),this.initShockwavePool(),this.initLaserPool()}static initLightPool(){for(let e=pt;e<bM;e++){const t=new kl(16755268,0,20);t.visible=!1,Ie.effectsGroup.add(t),this.lightPool.push({light:t,elapsed:pt,duration:.15,active:!1})}}static initShockwavePool(){this.sharedShockwaveGeo=new Wi(.8,1.4,32);for(let e=pt;e<TM;e++){const t=new ot({color:62463,side:Rt,transparent:!0,opacity:.95,blending:kn}),n=new Se(this.sharedShockwaveGeo,t);n.rotation.x=-Math.PI/2,n.visible=!1,Ie.effectsGroup.add(n),this.shockwavePool.push({mesh:n,material:t,elapsed:pt,duration:.35,maxRadius:28,active:!1})}}static initLaserPool(){this.sharedLaserOuterMat=new yr({color:65535,linewidth:3,transparent:!0,opacity:.9,blending:kn,depthTest:!1,depthWrite:!1}),this.sharedLaserCoreMat=new yr({color:16777215,linewidth:1,transparent:!0,opacity:1,blending:kn,depthTest:!1,depthWrite:!1}),this.sharedLaserHitGeo=new Wi(.3,1.8,16),this.sharedLaserHitMat=new ot({color:65535,side:Rt,transparent:!0,opacity:1,blending:kn,depthTest:!1,depthWrite:!1});for(let e=pt;e<SM;e++){const t=new Float32Array(6),n=new Gt(t,3),i=new Dt;i.setAttribute("position",n);const s=new vr(i,this.sharedLaserOuterMat);s.renderOrder=600,s.visible=!1;const r=new vr(i,this.sharedLaserCoreMat);r.renderOrder=601,r.visible=!1;const o=new Se(this.sharedLaserHitGeo,this.sharedLaserHitMat);o.renderOrder=602,o.visible=!1,Ie.effectsGroup.add(s),Ie.effectsGroup.add(r),Ie.effectsGroup.add(o),this.laserPool.push({positions:t,posAttr:n,geometry:i,outerLine:s,coreLine:r,impactMesh:o,elapsed:pt,duration:Au/1e3,active:!1})}}static getSprite(e,t,n){let i=this.inactiveSprites.pop();return i||(i=new gu(e)),i.reset(e,t,n),i}static tick(e){for(;xe.fxQueue.length>pt;){const t=xe.fxQueue.shift();if(t){if(kt.processEvent(t),t.type!=="shake"){if(t.type==="laser"){const n=Ai.isPointInView(t.x,t.z),i=Ai.isPointInView(t.data.tx,t.data.tz);if(!n&&!i)continue}else if(!Ai.isPointInView(t.x,t.y))continue}if(t.type==="blast"||t.type==="blast360")this.spawnExplosion(t.x,t.y,t.z,t.type,t.data);else if(t.type==="blast_zonal")this.spawnZonalExplosion(t.x,t.y,t.z,t.data);else if(t.type==="fire")this.spawnFire(t.x,t.y,t.z,t.data);else if(t.type==="shake")Ai.addShake(t.data.intensity,.2);else if(t.type==="hit_fx")mt.applyHitFX(t.data.entityId,t.data.intensity);else if(t.type==="debris"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ii.spawnBrickBurst(n.x,n.y,n.z,t.data.count,t.data.palette)}else if(t.type==="dust"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ii.spawnDustCloud(n.x,n.y,n.z,t.data.count)}else if(t.type==="smoke"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ii.spawnSmokePlume(n.x,n.y,n.z,t.data.count)}else if(t.type==="sparks"){const n=this.getBuildingPos3D(t.data.entityId,t.x,t.y,t.z);ii.spawnSparkBurst(n.x,n.y,n.z,t.data.count)}else t.type==="laser"&&this.spawnLaser(t.x,t.y,t.z,t.data.tx,t.data.ty,t.data.tz)}}for(let t=pt;t<this.lightPool.length;t++){const n=this.lightPool[t];if(n.active)if(n.elapsed+=e,n.elapsed>=n.duration)n.active=!1,n.light.visible=!1;else{const i=1-n.elapsed/n.duration;n.light.intensity=i*10}}for(let t=pt;t<this.shockwavePool.length;t++){const n=this.shockwavePool[t];if(n.active)if(n.elapsed+=e,n.elapsed>=n.duration)n.active=!1,n.mesh.visible=!1;else{const i=n.elapsed/n.duration,s=Math.max(.1,i*n.maxRadius);n.mesh.scale.set(s,s,1),n.material.opacity=(1-i)*.8}}for(let t=pt;t<this.laserPool.length;t++){const n=this.laserPool[t];n.active&&(n.elapsed+=e,n.elapsed>=n.duration&&(n.active=!1,n.outerLine.visible=!1,n.coreLine.visible=!1,n.impactMesh.visible=!1))}for(let t=this.activeSprites.length-1;t>=pt;t--){const n=this.activeSprites[t];n.tick(e),n.active||(Ie.effectsGroup.remove(n.mesh),this.inactiveSprites.push(n),this.activeSprites.splice(t,1))}}static getBuildingPos3D(e,t,n,i){if(e!==void 0){const s=mt.getSpritePosition(e);if(s)return s}return this.scratchBuildingPos.set(t,i,n)}static spawnImpactLight(e,t,n,i=.15){if(this.lightPool.length===pt)return;let s=this.lightPool.find(r=>!r.active);s||(s=this.lightPool.reduce((r,o)=>o.elapsed>r.elapsed?o:r,this.lightPool[0])),s.light.position.set(e,t,n),s.light.intensity=10,s.light.visible=!0,s.elapsed=pt,s.duration=i,s.active=!0}static spawnShockwave(e,t,n,i=.35,s=28){if(this.shockwavePool.length===pt)return;let r=this.shockwavePool.find(o=>!o.active);r||(r=this.shockwavePool.reduce((o,l)=>l.elapsed>o.elapsed?l:o,this.shockwavePool[0])),r.mesh.position.set(e,t,n),r.mesh.scale.set(.1,.1,1),r.material.opacity=.8,r.mesh.visible=!0,r.elapsed=pt,r.duration=i,r.maxRadius=s,r.active=!0}static spawnExplosion(e,t,n,i,s){const r=i==="blast"?this.getBlastTextures():this.getBlast360Textures();if(r.length===pt)return;const o=i==="blast"?[...GM]:[...wu],l=this.getSprite(r,!1,o),c=this.scratchTargetPos.set(e,n+Su,t);if(s&&s.entityId!==void 0){const u=mt.getSpritePosition(s.entityId),d=mt.getSpriteScale(s.entityId);u&&(c.copy(u),d&&(c.y-=d.y*AM))}l.mesh.position.copy(c),l.mesh.scale.set(bu,bu,1),Ie.effectsGroup.add(l.mesh),this.activeSprites.push(l),this.spawnImpactLight(c.x,c.y,c.z,.15),this.spawnShockwave(c.x,.05,c.z,.35,28),ii.spawnBrickBurst(c.x,c.y,c.z,15),ii.spawnSparkBurst(c.x,c.y,c.z,10),Gn.spawnDecal(c.x,c.z,"scorch",12);for(let u=pt;u<wM;u++){const d=this.getSprite(r,!1,o),p=(Math.random()-sr)*Tu,g=(Math.random()-sr)*Tu,_=(Math.random()-sr)*RM;d.mesh.position.set(c.x+p,c.y+_,c.z+g);const m=CM+Math.random()*IM;d.mesh.scale.set(m,m,1),d.timer=-(PM+Math.random()*LM),Ie.effectsGroup.add(d.mesh),this.activeSprites.push(d)}const h=i==="blast"?Mu:EM;l.onFrameChange=u=>{u===h&&s&&s.entityId!==void 0&&s.targetFrame!==void 0&&xe.executeTextureSwap(s.entityId,s.targetFrame)}}static spawnZonalExplosion(e,t,n,i){const s=this.blast360Textures;if(s.length===pt)return;const r=[...wu],o=this.getSprite(s,!1,r),l=this.scratchTargetPos.set(e,n+Su,t);if(i&&i.entityId!==void 0){const d=mt.getSpritePosition(i.entityId),p=mt.getSpriteScale(i.entityId);if(d&&p&&i.uvCenter){l.copy(d);const g=i.uvCenter.x-_u,_=_u-i.uvCenter.y;l.x+=g*p.x,l.y+=_*p.y,l.z+=DM}}o.mesh.position.copy(l);const c=FM,h=i.level?c+i.level*NM:UM;o.mesh.scale.set(h,h,1),Ie.effectsGroup.add(o.mesh),this.activeSprites.push(o);const u=Mu;o.onFrameChange=d=>{d===u&&i&&i.entityId!==void 0&&i.targetFrame!==void 0&&xe.executeTextureSwap(i.entityId,i.targetFrame)}}static spawnFire(e,t,n,i){const s=this.getFireTextures();if(s.length===pt)return;const r=this.getSprite(s,!1,[...VM]),o=this.scratchTargetPos.set(e,n+OM,t);if(i&&i.entityId!==void 0){const c=mt.getSpritePosition(i.entityId);c&&(o.copy(c),o.x+=(Math.random()-sr)*Eu,o.y+=(Math.random()-zM)*BM,o.z+=(Math.random()-sr)*Eu)}r.mesh.position.copy(o);const l=kM+Math.random()*HM;r.mesh.scale.set(l,l,1),Ie.effectsGroup.add(r.mesh),this.activeSprites.push(r)}static spawnLaser(e,t,n,i,s,r){if(this.laserPool.length===pt)return;let o=this.laserPool.find(l=>!l.active);o||(o=this.laserPool.reduce((l,c)=>c.elapsed>l.elapsed?c:l,this.laserPool[0])),o.positions[0]=e,o.positions[1]=t,o.positions[2]=n,o.positions[3]=i,o.positions[4]=s,o.positions[5]=r,o.posAttr.needsUpdate=!0,o.geometry.computeBoundingSphere(),o.impactMesh.position.set(i,s,r),o.impactMesh.rotation.x=-Math.PI/4,o.outerLine.visible=!0,o.coreLine.visible=!0,o.impactMesh.visible=!0,o.elapsed=pt,o.duration=Au/1e3,o.active=!0}}class Cu{static group=null;static canisterMeshes=[];static bombletMeshes=[];static canisterMaterial=null;static canisterTipMaterial=null;static bombletMaterial=null;static beamGroup=null;static beamOuterMesh=null;static beamInnerMesh=null;static beamImpactDisc=null;static beamImpactLight=null;static beamTime=0;static init(){if(this.group)return;this.group=new gt,Ie.scene.add(this.group),this.canisterMaterial=new Ct({color:2042167,metalness:.8,roughness:.3}),this.canisterTipMaterial=new ot({color:15680580}),this.bombletMaterial=new Ct({color:16096779,emissive:14251782,emissiveIntensity:.8,roughness:.2}),this.beamGroup=new gt,this.beamGroup.visible=!1;const e=new Sn(1,1,1,16,1,!0),t=new ot({color:61695,transparent:!0,opacity:.65,blending:kn,side:Rt,depthWrite:!1});this.beamOuterMesh=new Se(e,t),this.beamOuterMesh.renderOrder=2100,this.beamGroup.add(this.beamOuterMesh);const n=new Sn(1,1,1,12,1,!0),i=new ot({color:16777215,transparent:!0,opacity:.95,blending:kn,side:Rt,depthWrite:!1});this.beamInnerMesh=new Se(n,i),this.beamInnerMesh.renderOrder=2101,this.beamGroup.add(this.beamInnerMesh);const s=new Wi(.4,3.5,24),r=new ot({color:61695,transparent:!0,opacity:.9,blending:kn,side:Rt,depthWrite:!1});this.beamImpactDisc=new Se(s,r),this.beamImpactDisc.rotation.x=-Math.PI/2,this.beamImpactDisc.renderOrder=2102,this.beamGroup.add(this.beamImpactDisc),this.beamImpactLight=new kl(61695,4.5,36),this.beamImpactLight.castShadow=!1,this.beamGroup.add(this.beamImpactLight),Ie.scene.add(this.beamGroup)}static tick(e){if(this.group||this.init(),!this.group)return;const t=wt.canisters,n=wt.bomblets;for(;this.canisterMeshes.length<t.length;){const i=this.createCanisterMesh();this.group.add(i),this.canisterMeshes.push(i)}for(let i=0;i<this.canisterMeshes.length;i++){const s=this.canisterMeshes[i];if(i<t.length){const r=t[i];s.visible=!0,s.position.set(r.x,r.z,r.y),Math.sqrt(r.vx*r.vx+r.vy*r.vy+r.vz*r.vz)>.1&&s.quaternion.setFromUnitVectors(new I(0,-1,0),new I(r.vx,r.vz,r.vy).normalize())}else s.visible=!1}for(;this.bombletMeshes.length<n.length;){const i=this.createBombletMesh();this.group.add(i),this.bombletMeshes.push(i)}for(let i=0;i<this.bombletMeshes.length;i++){const s=this.bombletMeshes[i];if(i<n.length){const r=n[i];s.visible=!0,s.position.set(r.x,r.z,r.y),s.rotation.y=r.rotation,s.rotation.x=r.rotation*.7}else s.visible=!1}if(this.beamGroup)if(wt.isBeamFiring()){this.beamTime+=e,this.beamGroup.visible=!0;const i=wt.beamOrigin,s=wt.beamTarget;this.beamDir.subVectors(s,i);const r=this.beamDir.length();if(r>.1){this.beamMid.addVectors(i,s).multiplyScalar(.5),this.beamQuat.setFromUnitVectors(this.upVector,this.beamDir.normalize());const o=1.65+Math.sin(this.beamTime*28)*.35+(Math.random()-.5)*.18,l=.65+(Math.random()-.5)*.1;if(this.beamOuterMesh&&(this.beamOuterMesh.position.copy(this.beamMid),this.beamOuterMesh.quaternion.copy(this.beamQuat),this.beamOuterMesh.scale.set(o,r,o)),this.beamInnerMesh&&(this.beamInnerMesh.position.copy(this.beamMid),this.beamInnerMesh.quaternion.copy(this.beamQuat),this.beamInnerMesh.scale.set(l,r,l)),this.beamImpactDisc){this.beamImpactDisc.position.set(s.x,s.y+.1,s.z),this.beamImpactDisc.rotation.z+=e*16;const c=1.45+Math.sin(this.beamTime*24)*.35;this.beamImpactDisc.scale.set(c,c,1)}this.beamImpactLight&&(this.beamImpactLight.position.set(s.x,s.y+.8,s.z),this.beamImpactLight.intensity=6.8+Math.random()*3)}}else this.beamGroup.visible=!1}static beamDir=new I;static beamMid=new I;static beamQuat=new bn;static upVector=new I(0,1,0);static createCanisterMesh(){const e=new gt,t=new Sn(.9,.9,3.2,8),n=new Se(t,this.canisterMaterial);e.add(n);const i=new Mr(.9,1.4,8),s=new Se(i,this.canisterTipMaterial);s.position.y=-2,s.rotation.x=Math.PI,e.add(s);const r=new Bt(2.4,.8,.1),o=new Se(r,this.canisterMaterial);o.position.y=1.2,e.add(o);const l=o.clone();return l.rotation.y=Math.PI/2,e.add(l),e}static createBombletMesh(){const e=new Ol(.85);return new Se(e,this.bombletMaterial)}}class Iu{static group=null;static vehicleMeshes=[];static glassMaterial=null;static headlightMaterial=null;static taillightMaterial=null;static policeRedMaterial=null;static policeBlueMaterial=null;static policeOffMaterial=null;static flasherTimer=0;static flasherPhase=!1;static init(){this.group||(this.group=new gt,Ie.scene.add(this.group),this.glassMaterial=new Ct({color:1976635,roughness:.1,metalness:.9}),this.headlightMaterial=new ot({color:16776171}),this.taillightMaterial=new ot({color:15680580}),this.policeRedMaterial=new ot({color:16711731}),this.policeBlueMaterial=new ot({color:35071}),this.policeOffMaterial=new ot({color:3359061}))}static tick(e){if(this.group||this.init(),!this.group)return;this.flasherTimer+=e,this.flasherTimer>=.15&&(this.flasherTimer=0,this.flasherPhase=!this.flasherPhase);const t=Os.vehicles;for(;this.vehicleMeshes.length<t.length;){const n=t[this.vehicleMeshes.length],i=this.createVehicleMesh(n);this.group.add(i),this.vehicleMeshes.push(i)}for(let n=0;n<this.vehicleMeshes.length;n++){const i=this.vehicleMeshes[n];if(n<t.length){const s=t[n];if(s.alive){if(i.visible=!0,i.position.set(s.x,.7,s.y),i.rotation.y=-s.heading+Math.PI*.5,s.type==="police"){const r=i.getObjectByName("police_red"),o=i.getObjectByName("police_blue");r&&o&&(r.material=this.flasherPhase?this.policeRedMaterial:this.policeOffMaterial,o.material=this.flasherPhase?this.policeOffMaterial:this.policeBlueMaterial)}}else i.visible=!1}else i.visible=!1}}static createVehicleMesh(e){const t=new gt,n=e.type==="truck",i=n?3:2.2,s=n?2.4:1.1,r=n?6.2:4.4,o=new Ct({color:e.color,roughness:.4,metalness:.3}),l=new Bt(i,s,r),c=new Se(l,o);if(c.position.y=s*.5,t.add(c),n){const m=new Ct({color:13751771,roughness:.6}),f=new Bt(i*.95,s*1.1,r*.65),x=new Se(f,m);x.position.set(0,s*1.05,-.8),t.add(x)}else{const m=i*.85,f=.85,x=r*.55,y=new Bt(m,f,x),v=new Se(y,this.glassMaterial);v.position.set(0,s+f*.5,-.2),t.add(v)}const h=new Bt(.45,.3,.1),u=new Se(h,this.headlightMaterial);u.position.set(-i*.35,s*.5,r*.5+.05),t.add(u);const d=new Se(h,this.headlightMaterial);d.position.set(i*.35,s*.5,r*.5+.05),t.add(d);const p=new Bt(.5,.3,.1),g=new Se(p,this.taillightMaterial);g.position.set(-i*.35,s*.5,-r*.5-.05),t.add(g);const _=new Se(p,this.taillightMaterial);if(_.position.set(i*.35,s*.5,-r*.5-.05),t.add(_),e.type==="police"){const m=new Bt(.45,.25,.45),f=new Se(m,this.policeRedMaterial);f.name="police_red",f.position.set(-.4,s+.95,-.2),t.add(f);const x=new Se(m,this.policeBlueMaterial);x.name="police_blue",x.position.set(.4,s+.95,-.2),t.add(x)}return t}}class Pu{static group=null;static jetMeshes=[];static turretMeshes=[];static missileMeshes=[];static tracerLine=null;static tracerPositions=null;static tracerGeometry=null;static jetFuselageMat=null;static jetCanopyMat=null;static jetEngineMat=null;static turretBaseMat=null;static missileMat=null;static shieldMesh=null;static shieldMaterial=null;static init(){if(this.group)return;this.group=new gt,Ie.scene.add(this.group),this.jetFuselageMat=new Ct({color:4674921,metalness:.7,roughness:.3}),this.jetCanopyMat=new Ct({color:165063,metalness:.9,roughness:.1}),this.jetEngineMat=new ot({color:16347926}),this.turretBaseMat=new Ct({color:3359061,metalness:.8,roughness:.4}),this.missileMat=new Ct({color:16317180,metalness:.5,roughness:.3});const e=30;this.tracerPositions=new Float32Array(e*6),this.tracerGeometry=new Dt,this.tracerGeometry.setAttribute("position",new Gt(this.tracerPositions,3));const t=new yr({color:16707722,linewidth:2});this.tracerLine=new _d(this.tracerGeometry,t),this.group.add(this.tracerLine);const n=new br(22,16,16);this.shieldMaterial=new ot({color:3718648,transparent:!0,opacity:0,wireframe:!0}),this.shieldMesh=new Se(n,this.shieldMaterial),this.group.add(this.shieldMesh)}static tick(e){if(this.group||this.init(),!this.group)return;const t=fn.jets;for(;this.jetMeshes.length<t.length;){const o=this.createJetMesh();this.group.add(o),this.jetMeshes.push(o)}for(let o=0;o<this.jetMeshes.length;o++){const l=this.jetMeshes[o];if(o<t.length&&t[o].alive){const c=t[o];l.visible=!0,l.position.set(c.x,c.z,c.y),l.rotation.y=-c.heading+Math.PI*.5,l.rotation.z=c.roll,l.rotation.x=c.pitch}else l.visible=!1}const n=fn.turrets;for(;this.turretMeshes.length<n.length;){const o=this.createTurretMesh();this.group.add(o),this.turretMeshes.push(o)}for(let o=0;o<this.turretMeshes.length;o++){const l=this.turretMeshes[o];if(o<n.length&&n[o].alive){const c=n[o];l.visible=!0,l.position.set(c.x,c.z,c.y);const h=l.getObjectByName("launcher");h&&(h.rotation.y=-c.yaw+Math.PI*.5,h.rotation.x=-c.pitch)}else l.visible=!1}const i=fn.missiles;for(;this.missileMeshes.length<i.length;){const o=this.createMissileMesh();this.group.add(o),this.missileMeshes.push(o)}for(let o=0;o<this.missileMeshes.length;o++){const l=this.missileMeshes[o];if(o<i.length&&i[o].alive){const c=i[o];l.visible=!0,l.position.set(c.x,c.z,c.y),Math.sqrt(c.vx*c.vx+c.vy*c.vy+c.vz*c.vz)>.1&&l.quaternion.setFromUnitVectors(new I(0,1,0),new I(c.vx,c.vz,c.vy).normalize())}else l.visible=!1}const s=fn.tracers;if(this.tracerPositions&&this.tracerGeometry){let o=0;for(const l of s){if(o>=this.tracerPositions.length)break;this.tracerPositions[o++]=l.x,this.tracerPositions[o++]=l.z,this.tracerPositions[o++]=l.y,this.tracerPositions[o++]=l.x+l.vx*.04,this.tracerPositions[o++]=l.z+l.vz*.04,this.tracerPositions[o++]=l.y+l.vy*.04}for(let l=o;l<this.tracerPositions.length;l++)this.tracerPositions[l]=0;this.tracerGeometry.attributes.position.needsUpdate=!0}const r=Ia.getPlayerMeshPosition();this.shieldMesh&&this.shieldMaterial&&r&&(this.shieldMesh.position.copy(r),fn.shieldFlareTimer>0?(this.shieldMaterial.opacity=fn.shieldFlareTimer/.35*.7,this.shieldMesh.visible=!0):this.shieldMesh.visible=!1)}static createJetMesh(){const e=new gt,t=new Mr(1.2,8.5,6),n=new Se(t,this.jetFuselageMat);n.rotation.x=Math.PI*.5,e.add(n);const i=new Bt(1,.7,2.8),s=new Se(i,this.jetCanopyMat);s.position.set(0,.6,.4),e.add(s);const r=new Bt(9,.15,3.4),o=new Se(r,this.jetFuselageMat);o.position.set(0,0,-1),e.add(o);const l=new Bt(.15,1.8,1.8),c=new Se(l,this.jetFuselageMat);c.position.set(0,.9,-3.2),e.add(c);const h=new Sn(.6,.6,.4,8),u=new Se(h,this.jetEngineMat);return u.position.set(0,0,-4.2),u.rotation.x=Math.PI*.5,e.add(u),e}static createTurretMesh(){const e=new gt,t=new Sn(4,4.8,2,8),n=new Se(t,this.turretBaseMat);n.position.y=1,e.add(n);const i=new gt;i.name="launcher",i.position.y=2.4;const s=new Bt(3.2,1.8,4),r=new Se(s,this.turretBaseMat);i.add(r);const o=new Se(new Sn(.3,.3,3.8,6),this.missileMat);o.position.set(-1,.4,.4),o.rotation.x=Math.PI*.5,i.add(o);const l=o.clone();return l.position.x=1,i.add(l),e.add(i),e}static createMissileMesh(){const e=new gt,t=new Sn(.35,.35,2.6,6),n=new Se(t,this.missileMat);e.add(n);const i=new Mr(.35,.8,6),s=new Se(i,this.missileMat);return s.position.y=1.6,e.add(s),e}}class WM{static initialized=!1;static container=null;static joystickKnob=null;static activeTouchId=null;static joyCenterX=0;static joyCenterY=0;static JOY_MAX_RADIUS=42;static isTouchDevice(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)}static init(){if(this.initialized)return;this.initialized=!0;const e=this.isTouchDevice();Ue.isMobile=e,e&&(this.buildControlsDOM(),this.attachJoystickEvents())}static buildControlsDOM(){this.container=document.createElement("div"),this.container.id="mobile-controls",this.container.style.position="fixed",this.container.style.inset="0",this.container.style.pointerEvents="none",this.container.style.zIndex="1500",this.container.style.userSelect="none",this.container.style.webkitUserSelect="none",this.container.style.touchAction="none";const e=document.createElement("div");e.id="mobile-joystick-zone",e.style.position="absolute",e.style.bottom="26px",e.style.left="26px",e.style.width="116px",e.style.height="116px",e.style.borderRadius="50%",e.style.background="radial-gradient(circle, rgba(15, 23, 42, 0.65) 0%, rgba(3, 7, 18, 0.85) 100%)",e.style.border="2px solid rgba(56, 189, 248, 0.45)",e.style.boxShadow="0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 16px rgba(56, 189, 248, 0.2)",e.style.pointerEvents="auto",e.style.touchAction="none",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center";const t=document.createElement("div");t.style.position="absolute",t.style.width="24px",t.style.height="24px",t.style.borderRadius="50%",t.style.border="1px dashed rgba(56, 189, 248, 0.35)",t.style.pointerEvents="none",e.appendChild(t),this.joystickKnob=document.createElement("div"),this.joystickKnob.id="mobile-joystick-knob",this.joystickKnob.style.width="48px",this.joystickKnob.style.height="48px",this.joystickKnob.style.borderRadius="50%",this.joystickKnob.style.background="radial-gradient(circle at 35% 35%, #38bdf8 0%, #0284c7 60%, #0369a1 100%)",this.joystickKnob.style.boxShadow="0 0 16px rgba(56, 189, 248, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6)",this.joystickKnob.style.border="1px solid rgba(255, 255, 255, 0.5)",this.joystickKnob.style.pointerEvents="none",this.joystickKnob.style.transition="transform 0.05s ease-out",e.appendChild(this.joystickKnob),this.container.appendChild(e);const n=document.createElement("div");n.id="mobile-action-dock",n.style.position="absolute",n.style.bottom="26px",n.style.right="26px",n.style.display="flex",n.style.flexDirection="column",n.style.alignItems="flex-end",n.style.gap="14px",n.style.pointerEvents="auto";const i=document.createElement("button");i.id="mobile-fire-btn",i.setAttribute("aria-label","Fire Primary Laser"),i.style.width="64px",i.style.height="64px",i.style.borderRadius="50%",i.style.background="radial-gradient(circle at 35% 35%, #0ea5e9 0%, #0284c7 70%, #0369a1 100%)",i.style.border="2px solid rgba(255, 255, 255, 0.6)",i.style.boxShadow="0 4px 18px rgba(14, 165, 233, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)",i.style.color="#ffffff",i.style.fontFamily="system-ui, sans-serif",i.style.fontSize="12px",i.style.fontWeight="800",i.style.letterSpacing="0.5px",i.style.cursor="pointer",i.style.touchAction="none",i.innerText="⚡ RAY";const s=document.createElement("button");s.id="mobile-bomb-btn",s.setAttribute("aria-label","Fire Cluster Bomb"),s.style.width="52px",s.style.height="52px",s.style.borderRadius="50%",s.style.background="radial-gradient(circle at 35% 35%, #f59e0b 0%, #d97706 70%, #b45309 100%)",s.style.border="2px solid rgba(255, 255, 255, 0.5)",s.style.boxShadow="0 4px 14px rgba(245, 158, 11, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5)",s.style.color="#000000",s.style.fontFamily="system-ui, sans-serif",s.style.fontSize="11px",s.style.fontWeight="900",s.style.cursor="pointer",s.style.touchAction="none",s.innerText="💣 BOMB";const r=document.createElement("button");r.id="mobile-flight-btn",r.setAttribute("aria-label","Toggle Flight Autopilot"),r.style.width="42px",r.style.height="42px",r.style.borderRadius="50%",r.style.background="rgba(15, 23, 42, 0.8)",r.style.backdropFilter="blur(6px)",r.style.border="1.5px solid rgba(56, 189, 248, 0.5)",r.style.color="#38bdf8",r.style.fontSize="16px",r.style.cursor="pointer",r.style.touchAction="none",r.innerText="🛸",r.onclick=u=>{u.stopPropagation(),wi.mouseFollowMode=!wi.mouseFollowMode,r.style.background=wi.mouseFollowMode?"rgba(16, 185, 129, 0.3)":"rgba(15, 23, 42, 0.8)",r.style.borderColor=wi.mouseFollowMode?"#10b981":"rgba(56, 189, 248, 0.5)"};const o=document.createElement("button");o.id="mobile-beam-btn",o.setAttribute("aria-label","Fire Continuous Death Ray"),o.style.width="58px",o.style.height="58px",o.style.borderRadius="50%",o.style.background="radial-gradient(circle at 35% 35%, #06b6d4 0%, #0891b2 70%, #0e7490 100%)",o.style.border="2px solid rgba(255, 255, 255, 0.6)",o.style.boxShadow="0 4px 16px rgba(6, 182, 212, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.6)",o.style.color="#ffffff",o.style.fontFamily="system-ui, sans-serif",o.style.fontSize="11px",o.style.fontWeight="900",o.style.cursor="pointer",o.style.touchAction="none",o.innerText="⚡ BEAM",i.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const d of it.entities)if(rn.has(d)){const p=ai.get(d);p&&(p.currentSelected="laser");break}Ue.setVirtualFirePrimary(!0),i.style.transform="scale(0.92)"},{passive:!1});const l=u=>{u.preventDefault(),Ue.setVirtualFirePrimary(!1),i.style.transform="scale(1.0)"};i.addEventListener("touchend",l,{passive:!1}),i.addEventListener("touchcancel",l,{passive:!1}),o.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation();for(const d of it.entities)if(rn.has(d)){const p=ai.get(d);p&&(p.currentSelected="beam");break}Ue.setVirtualFirePrimary(!0),o.style.transform="scale(0.92)"},{passive:!1});const c=u=>{u.preventDefault(),Ue.setVirtualFirePrimary(!1),o.style.transform="scale(1.0)"};o.addEventListener("touchend",c,{passive:!1}),o.addEventListener("touchcancel",c,{passive:!1}),s.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),Ue.setVirtualFireSecondary(!0),s.style.transform="scale(0.92)"},{passive:!1});const h=u=>{u.preventDefault(),Ue.setVirtualFireSecondary(!1),s.style.transform="scale(1.0)"};s.addEventListener("touchend",h,{passive:!1}),s.addEventListener("touchcancel",h,{passive:!1}),n.appendChild(r),n.appendChild(s),n.appendChild(o),n.appendChild(i),this.container.appendChild(n),document.body.appendChild(this.container)}static attachJoystickEvents(){const e=document.getElementById("mobile-joystick-zone");if(!e)return;const t=s=>{if(s.preventDefault(),this.activeTouchId!==null)return;const r=s.changedTouches[0];this.activeTouchId=r.identifier;const o=e.getBoundingClientRect();this.joyCenterX=o.left+o.width/2,this.joyCenterY=o.top+o.height/2,this.updateJoystick(r.clientX,r.clientY)},n=s=>{if(s.preventDefault(),this.activeTouchId!==null)for(let r=0;r<s.changedTouches.length;r++){const o=s.changedTouches[r];if(o.identifier===this.activeTouchId){this.updateJoystick(o.clientX,o.clientY);break}}},i=s=>{if(this.activeTouchId!==null){for(let r=0;r<s.changedTouches.length;r++)if(s.changedTouches[r].identifier===this.activeTouchId){this.resetJoystick();break}}};e.addEventListener("touchstart",t,{passive:!1}),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",i,{passive:!1}),window.addEventListener("touchcancel",i,{passive:!1})}static updateJoystick(e,t){let n=e-this.joyCenterX,i=t-this.joyCenterY;const s=Math.hypot(n,i);s>this.JOY_MAX_RADIUS&&(n=n/s*this.JOY_MAX_RADIUS,i=i/s*this.JOY_MAX_RADIUS),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(${n}px, ${i}px)`);const r=n/this.JOY_MAX_RADIUS,o=i/this.JOY_MAX_RADIUS;Ue.setVirtualJoystick(r,o)}static resetJoystick(){this.activeTouchId=null,this.joystickKnob&&(this.joystickKnob.style.transform="translate(0px, 0px)"),Ue.setVirtualJoystick(0,0)}}const XM="modulepreload",YM=function(a,e){return new URL(a,e).href},Lu={},qM=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(t.map(c=>{if(c=YM(c,n),c in Lu)return;Lu[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=r.length-1;g>=0;g--){const _=r[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":XM,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return i.then(r=>{for(const o of r||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};class jM{static async loadAndInstantiate(e="/map_data.json"){try{let t=null;if(typeof window<"u"){const u=new URLSearchParams(window.location.search);if(u.has("reset"))localStorage.removeItem("custom_baked_map"),console.log("[MapLoader] Cleared custom baked map from localStorage.");else if(u.has("seed")){const d=parseInt(u.get("seed"),10)||42,p=u.get("preset")||"retro_arcade";console.log(`[MapLoader] Dynamic on-the-fly bake requested via URL: seed=${d}, preset=${p}...`);const{MapBaker:g}=await qM(async()=>{const{MapBaker:m}=await import("./MapBaker-Cx9ArgVb.js");return{MapBaker:m}},__vite__mapDeps([0,1]),import.meta.url);t=(await g.bake(d,p)).data}if(!t){const d=localStorage.getItem("custom_baked_map");if(d)try{const p=JSON.parse(d);p&&p.tiles&&p.tiles.length>0&&(console.log(`[MapLoader] Loading custom baked map from Map Studio (seed: ${p.seed}, buildings: ${p.buildings?.length})...`),t=p)}catch(p){console.warn("[MapLoader] Failed to parse custom_baked_map from localStorage:",p)}}}if(!t)if(en.mapData&&en.mapData.tiles)t=en.mapData;else{const u=en.getAssetUrl(e);console.log(`[MapLoader] Fetching authoritative city map from ${u}...`);let d=await fetch(u);if(!d.ok&&e!=="/generated_map.json"){const p=en.getAssetUrl("/generated_map.json");d=await fetch(p)}d.ok&&(t=await d.json())}if(!t||!t.tiles||t.tiles.length===0)return console.warn("[MapLoader] Pre-baked map invalid or missing tiles. Falling back to live CityGenerator..."),yl.generateCity(),!0;Ce.init();const n=Ce.GRID_DIM,i=Array.isArray(t.tiles[0]);for(let u=0;u<n;u++)for(let d=0;d<n;d++){let p=_e.GRASS,g=dn.NONE,_=!1,m,f;if(i){const y=t.tiles[u]?.[d];y&&(p=y.terrainType,g=y.overlayType,_=!!y.isIntersection,m=y.roadAxis,f=y.tileSprite)}else{const y=t.tiles[d*n+u];typeof y=="number"?(p=y,p===_e.ROAD_STRAIGHT_NS||p===_e.ROAD_STRAIGHT_EW||p===_e.ROAD_INTERSECTION||p===_e.ROAD_ROUNDABOUT||p>=_e.ROAD_CURVE_NE&&p<=_e.ROAD_CURVE_SW?g=dn.ROAD:p===_e.SIDEWALK&&(g=dn.SIDEWALK)):y&&typeof y=="object"&&(p=y.terrainType,g=y.overlayType,_=!!y.isIntersection,m=y.roadAxis,f=y.tileSprite)}Ce.setTerrain(u,d,p);const x=Ce.getCell(u,d);x&&f&&(x.tileSprite=f),g===dn.ROAD?p===_e.ROAD_ROUNDABOUT?Ce.setRoundabout(u,d):p>=_e.ROAD_CURVE_NE&&p<=_e.ROAD_CURVE_SW?Ce.setRoadCurve(u,d,p):_||p===_e.ROAD_INTERSECTION?Ce.setIntersection(u,d):Ce.setRoad(u,d,m==="EW"?"EW":"NS"):g===dn.SIDEWALK&&Ce.setSidewalkIfNotRoad(u,d)}Ce.roadWaypoints=(t.roadWaypoints||[]).map(u=>({worldX:u.worldX,worldZ:u.worldZ,name:u.name,nextWaypoints:[]}));let s=0;const r=Array.from({length:n},()=>new Uint8Array(n));for(let u=0;u<n;u++)for(let d=0;d<n;d++){const p=Ce.getCell(u,d);p&&(p.overlayType===dn.ROAD||p.terrainType===_e.WATER||p.terrainType===_e.WATER_SHORE)&&(r[u][d]=1)}for(const u of t.buildings||[]){const d=u.gx??u.gridX??0,p=u.gz??u.gridZ??0,g=u.w??u.footprintWidth??1,_=u.h??u.footprintHeight??1,m=lt[u.typeKey],f=m?.footprintTiles??g,x=m?.footprintTiles??_;if(d<0||p<0||d+f>n||p+x>n){console.warn(`[MapLoader] Skipping building '${u.typeKey}' at (${d}, ${p}) — exceeds grid bounds!`);continue}const y=f>=3||x>=3?1:0;let v=!1;for(let b=-y;b<f+y;b++){for(let M=-y;M<x+y;M++){const P=d+b,N=p+M;if(P<0||P>=n||N<0||N>=n)continue;if(b>=0&&b<f&&M>=0&&M<x){if(r[P][N]!==0){v=!0;break}}else if(y>0&&r[P][N]===2){v=!0;break}}if(v)break}if(v){console.warn(`[MapLoader] Skipping overlapping building '${u.typeKey}' at (${d}, ${p})`);continue}for(let b=-y;b<f+y;b++)for(let M=-y;M<x+y;M++){const P=d+b,N=p+M;if(P<0||P>=n||N<0||N>=n)continue;b>=0&&b<f&&M>=0&&M<x?r[P][N]=2:r[P][N]===0&&(r[P][N]=3)}let R=u.centerWorldX,E=u.centerWorldZ;if(R===void 0||E===void 0){const b=si.computeLotWorldPos(d,p,f,x);R=b.x,E=b.z}const A=it.createEntity(),C=si.calculateAndRegisterLot(A,R,E,u.typeKey,u.lotType);this.spawnBuildingEntity(A,C,u.typeKey),s++}let o=(t.seed||424242)^2654435769;const l=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=[{typeKey:"b1",lotType:"commercial"},{typeKey:"b2",lotType:"residential"},{typeKey:"b3",lotType:"residential"},{typeKey:"b4",lotType:"commercial"},{typeKey:"res_bronze",lotType:"residential"},{typeKey:"res_sky",lotType:"residential"}];for(let u=1;u<n-1;u++)for(let d=1;d<n-1;d++)if(r[u][d]===0){let p=!1;for(let g=-1;g<=1;g++){for(let _=-1;_<=1;_++){const m=Ce.getCell(u+g,d+_);if(m&&(m.overlayType===dn.ROAD||m.overlayType===dn.SIDEWALK)){p=!0;break}}if(p)break}if(p&&l()<.44){r[u][d]=2;const g=c[Math.floor(l()*c.length)],_=si.computeLotWorldPos(u,d,1,1),m=it.createEntity(),f=si.calculateAndRegisterLot(m,_.x,_.z,g.typeKey,g.lotType);this.spawnBuildingEntity(m,f,g.typeKey),s++}}Ii.rebuild();const h=t.metadata?.generatedAt?new Date(t.metadata.generatedAt).toLocaleString():"unknown date";return console.log(`[MapLoader] Successfully loaded city map (${s} buildings, seed: ${t.seed}, baked at: ${h})`),!0}catch(t){return console.warn("[MapLoader] Error loading pre-baked map:",t),console.log("[MapLoader] Falling back to live CityGenerator..."),yl.generateCity(),!1}}static spawnBuildingEntity(e,t,n){const i=lt[n]||lt[3];yt.set(e,{worldX:t.centerWorldX,worldY:t.centerWorldZ,worldZ:0});const s=vl(i),r=hi[n]||hi[3],o=Math.max(5,Math.round(s/r.length)),l=o*r.length;Tt.set(e,{currentHP:l,maxHP:l,state:0});const c=new Map;for(const h of r)c.set(h.id,{id:h.id,level:0,hp:o,maxHp:o});zt.set(e,{zones:c,totalHp:l,maxTotalHp:l,globalDamageLevel:0}),Ra.set(e,{width:i.width*i.visualScale,length:i.length*i.visualScale,height:i.height,active:!0}),jt.set(e,{meshId:`building_${e}`,texturePrefix:`building_${n}_stage_`,currentFrame:0,visible:!0,opacity:1})}}async function KM(){const a=document.getElementById("app");if(!a)throw new Error("No app container found!");const e=document.getElementById("loading-progress"),t=document.getElementById("loading-screen");Ue.init(),WM.init(),e&&(e.style.width="30%"),Ie.init(a),Yh.init(),Cu.init(),Iu.init(),Pu.init(),Ri.init(),Ai.init(Ie.camera),ya.init(Ie.camera),e&&(e.style.width="60%"),console.log("Loading assets..."),await en.loadAll(),Ru.preloadTextureArrays(),console.log("Assets loaded."),wa.init(),an.init(),wi.init(),xe.init(),ii.init(),kt.init(),wt.init(),Os.init(),fn.init(),e&&(e.style.width="85%"),await jM.loadAndInstantiate(),wa.finalizeMap(),e&&(e.style.width="100%"),t&&setTimeout(()=>{t.style.opacity="0",t.style.visibility="hidden"},150);const n=it.createEntity();rn.add(n),yt.set(n,{worldX:0,worldY:0,worldZ:75}),ai.set(n,{currentSelected:"laser",heatLevel:0,fireRate:.2,clusterCooldown:0,clusterMaxCooldown:2.5,beamHeat:0,beamMaxHeat:100,beamOverheated:!1,beamFiring:!1});let i=performance.now();function s(){requestAnimationFrame(s);const r=performance.now(),o=(r-i)/1e3;i=r,an.tick(o),Os.tick(o),fn.tick(o),it.tick(o),Ai.tick(o),mt.tick(o),Iu.tick(o),Pu.tick(o),Cu.tick(o),Ia.tick(o),Yh.tick(o),Ru.tick(o),Ri.tick(Ie.camera),Ie.render()}s(),console.log("Engine fully initialized and running.")}KM().catch(console.error);
