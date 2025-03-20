(function(K,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("nanostores")):typeof define=="function"&&define.amd?define(["exports","nanostores"],F):(K=typeof globalThis<"u"?globalThis:K||self,F(K.bitcoinconnect={},K.nanostores))})(this,function(K,F){"use strict";var rr=Object.defineProperty;var or=(K,F,de)=>F in K?rr(K,F,{enumerable:!0,configurable:!0,writable:!0,value:de}):K[F]=de;var z=(K,F,de)=>or(K,typeof F!="symbol"?F+"":F,de);const de={OP_FALSE:0,OP_0:0,OP_PUSHDATA1:76,OP_PUSHDATA2:77,OP_PUSHDATA4:78,OP_1NEGATE:79,OP_RESERVED:80,OP_TRUE:81,OP_1:81,OP_2:82,OP_3:83,OP_4:84,OP_5:85,OP_6:86,OP_7:87,OP_8:88,OP_9:89,OP_10:90,OP_11:91,OP_12:92,OP_13:93,OP_14:94,OP_15:95,OP_16:96,OP_NOP:97,OP_VER:98,OP_IF:99,OP_NOTIF:100,OP_VERIF:101,OP_VERNOTIF:102,OP_ELSE:103,OP_ENDIF:104,OP_VERIFY:105,OP_RETURN:106,OP_TOALTSTACK:107,OP_FROMALTSTACK:108,OP_2DROP:109,OP_2DUP:110,OP_3DUP:111,OP_2OVER:112,OP_2ROT:113,OP_2SWAP:114,OP_IFDUP:115,OP_DEPTH:116,OP_DROP:117,OP_DUP:118,OP_NIP:119,OP_OVER:120,OP_PICK:121,OP_ROLL:122,OP_ROT:123,OP_SWAP:124,OP_TUCK:125,OP_CAT:126,OP_SUBSTR:127,OP_LEFT:128,OP_RIGHT:129,OP_SIZE:130,OP_INVERT:131,OP_AND:132,OP_OR:133,OP_XOR:134,OP_EQUAL:135,OP_EQUALVERIFY:136,OP_RESERVED1:137,OP_RESERVED2:138,OP_1ADD:139,OP_1SUB:140,OP_2MUL:141,OP_2DIV:142,OP_NEGATE:143,OP_ABS:144,OP_NOT:145,OP_0NOTEQUAL:146,OP_ADD:147,OP_SUB:148,OP_MUL:149,OP_DIV:150,OP_MOD:151,OP_LSHIFT:152,OP_RSHIFT:153,OP_BOOLAND:154,OP_BOOLOR:155,OP_NUMEQUAL:156,OP_NUMEQUALVERIFY:157,OP_NUMNOTEQUAL:158,OP_LESSTHAN:159,OP_GREATERTHAN:160,OP_LESSTHANOREQUAL:161,OP_GREATERTHANOREQUAL:162,OP_MIN:163,OP_MAX:164,OP_WITHIN:165,OP_RIPEMD160:166,OP_SHA1:167,OP_SHA256:168,OP_HASH160:169,OP_HASH256:170,OP_CODESEPARATOR:171,OP_CHECKSIG:172,OP_CHECKSIGVERIFY:173,OP_CHECKMULTISIG:174,OP_CHECKMULTISIGVERIFY:175,OP_NOP1:176,OP_NOP2:177,OP_CHECKLOCKTIMEVERIFY:177,OP_NOP3:178,OP_CHECKSEQUENCEVERIFY:178,OP_NOP4:179,OP_NOP5:180,OP_NOP6:181,OP_NOP7:182,OP_NOP8:183,OP_NOP9:184,OP_NOP10:185,OP_CHECKSIGADD:186,OP_PUBKEYHASH:253,OP_PUBKEY:254,OP_INVALIDOPCODE:255};for(const n of Object.keys(de));const Oe="0123456789abcdefABCDEF",Ae=Oe.split("").map(n=>n.codePointAt(0)),Te=Array(256).fill(!0).map((n,t)=>{const r=String.fromCodePoint(t),o=Oe.indexOf(r);return o<0?void 0:o<16?o:o-6}),nn=new TextEncoder,rn=new TextDecoder;function dt(n){const t=n.reduce((f,h)=>f+h.length,0),r=new Uint8Array(t);let o=0;for(const f of n)r.set(f,o),o+=f.length;return r}function ce(n){const t=n||new Uint8Array;return t.length>512?an(t):on(t)}function on(n){let t="";for(let r=0;r<n.length;++r)t+=Oe[Te[Ae[n[r]>>4]]],t+=Oe[Te[Ae[n[r]&15]]];return t}function an(n){const t=new Uint8Array(n.length*2);for(let r=0;r<n.length;++r)t[r*2]=Ae[n[r]>>4],t[r*2+1]=Ae[n[r]&15];return rn.decode(t)}function Se(n){const t=nn.encode(n||""),r=new Uint8Array(Math.floor(t.length/2));let o;for(o=0;o<r.length;o++){const f=Te[t[o*2]],h=Te[t[o*2+1]];if(f===void 0||h===void 0)break;r[o]=f<<4|h}return o===r.length?r:r.slice(0,o)}function sn(n,t){const r=Math.min(n.length,t.length);for(let o=0;o<r;++o)if(n[o]!==t[o])return n[o]<t[o]?-1:1;return n.length===t.length?0:n.length>t.length?1:-1}function cn(n,t,r,o){if(t+4>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(o=o.toUpperCase(),r>4294967295)throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${r}`);return o==="LE"?(n[t]=r&255,n[t+1]=r>>8&255,n[t+2]=r>>16&255,n[t+3]=r>>24&255):(n[t]=r>>24&255,n[t+1]=r>>16&255,n[t+2]=r>>8&255,n[t+3]=r&255),t+4}function ln(n,t,r){if(t+4>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(r=r.toUpperCase(),r==="LE"){let o=0;return o=(o<<8)+n[t+3]>>>0,o=(o<<8)+n[t+2]>>>0,o=(o<<8)+n[t+1]>>>0,o=(o<<8)+n[t]>>>0,o}else{let o=0;return o=(o<<8)+n[t]>>>0,o=(o<<8)+n[t+1]>>>0,o=(o<<8)+n[t+2]>>>0,o=(o<<8)+n[t+3]>>>0,o}}var qe;function un(n){return qe==null?void 0:qe.get(n)}var Xe;function fn(n){return Xe==null?void 0:Xe.get(n)}var Ve;function dn(n,t){var r;return(r=Ve==null?void 0:Ve.get(n))==null?void 0:r.get(t)}function me(n){var r,o;const t=typeof n;return t==="string"?`"${n}"`:t==="number"||t==="bigint"||t==="boolean"?`${n}`:t==="object"||t==="function"?(n&&((o=(r=Object.getPrototypeOf(n))==null?void 0:r.constructor)==null?void 0:o.name))??"null":t}function q(n,t,r,o,f){const h=f&&"input"in f?f.input:r.value,l=(f==null?void 0:f.expected)??n.expects??null,m=(f==null?void 0:f.received)??me(h),E={kind:n.kind,type:n.type,input:h,expected:l,received:m,message:`Invalid ${t}: ${l?`Expected ${l} but r`:"R"}eceived ${m}`,requirement:n.requirement,path:f==null?void 0:f.path,issues:f==null?void 0:f.issues,lang:o.lang,abortEarly:o.abortEarly,abortPipeEarly:o.abortPipeEarly},c=n.kind==="schema",d=(f==null?void 0:f.message)??n.message??dn(n.reference,E.lang)??(c?fn(E.lang):null)??o.message??un(E.lang);d&&(E.message=typeof d=="function"?d(E):d),c&&(r.typed=!1),r.issues?r.issues.push(E):r.issues=[E]}function pn(n,t){const r=[...new Set(n)];return r.length>1?`(${r.join(` ${t} `)})`:r[0]??"never"}function Qe(n){return{kind:"validation",type:"integer",reference:Qe,async:!1,expects:null,requirement:Number.isInteger,message:n,_run(t,r){return t.typed&&!this.requirement(t.value)&&q(this,"integer",t,r),t}}}function pt(n,t){return{kind:"validation",type:"length",reference:pt,async:!1,expects:`${n}`,requirement:n,message:t,_run(r,o){return r.typed&&r.value.length!==this.requirement&&q(this,"length",r,o,{received:`${r.value.length}`}),r}}}function Re(n,t){return{kind:"validation",type:"max_value",reference:Re,async:!1,expects:`<=${n instanceof Date?n.toJSON():me(n)}`,requirement:n,message:t,_run(r,o){return r.typed&&r.value>this.requirement&&q(this,"value",r,o,{received:r.value instanceof Date?r.value.toJSON():me(r.value)}),r}}}function Ce(n,t){return{kind:"validation",type:"min_value",reference:Ce,async:!1,expects:`>=${n instanceof Date?n.toJSON():me(n)}`,requirement:n,message:t,_run(r,o){return r.typed&&r.value<this.requirement&&q(this,"value",r,o,{received:r.value instanceof Date?r.value.toJSON():me(r.value)}),r}}}function ht(n,t){return{kind:"validation",type:"regex",reference:ht,async:!1,expects:`${n}`,requirement:n,message:t,_run(r,o){return r.typed&&!this.requirement.test(r.value)&&q(this,"format",r,o),r}}}function gt(n,t){return{kind:"schema",type:"array",reference:gt,expects:"Array",async:!1,item:n,message:t,_run(r,o){var h;const f=r.value;if(Array.isArray(f)){r.typed=!0,r.value=[];for(let l=0;l<f.length;l++){const m=f[l],E=this.item._run({typed:!1,value:m},o);if(E.issues){const c={type:"array",origin:"value",input:f,key:l,value:m};for(const d of E.issues)d.path?d.path.unshift(c):d.path=[c],(h=r.issues)==null||h.push(d);if(r.issues||(r.issues=E.issues),o.abortEarly){r.typed=!1;break}}E.typed||(r.typed=!1),r.value.push(E.value)}}else q(this,"type",r,o);return r}}}function mt(n){return{kind:"schema",type:"bigint",reference:mt,expects:"bigint",async:!1,message:n,_run(t,r){return typeof t.value=="bigint"?t.typed=!0:q(this,"type",t,r),t}}}function xe(n,t){return{kind:"schema",type:"instance",reference:xe,expects:n.name,async:!1,class:n,message:t,_run(r,o){return r.value instanceof this.class?r.typed=!0:q(this,"type",r,o),r}}}function Ne(n){return{kind:"schema",type:"number",reference:Ne,expects:"number",async:!1,message:n,_run(t,r){return typeof t.value=="number"&&!isNaN(t.value)?t.typed=!0:q(this,"type",t,r),t}}}function wt(n){return{kind:"schema",type:"string",reference:wt,expects:"string",async:!1,message:n,_run(t,r){return typeof t.value=="string"?t.typed=!0:q(this,"type",t,r),t}}}function vt(n){let t;if(n)for(const r of n)t?t.push(...r.issues):t=r.issues;return t}function yt(n,t){return{kind:"schema",type:"union",reference:yt,expects:pn(n.map(r=>r.expects),"|"),async:!1,options:n,message:t,_run(r,o){let f,h,l;for(const m of this.options){const E=m._run({typed:!1,value:r.value},o);if(E.typed)if(E.issues)h?h.push(E):h=[E];else{f=E;break}else l?l.push(E):l=[E]}if(f)return f;if(h){if(h.length===1)return h[0];q(this,"type",r,o,{issues:vt(h)}),r.typed=!0}else{if((l==null?void 0:l.length)===1)return l[0];q(this,"type",r,o,{issues:vt(l)})}return r}}}function we(...n){return{...n[0],pipe:n,_run(t,r){for(const o of n)if(o.kind!=="metadata"){if(t.issues&&(o.kind==="schema"||o.kind==="transformation")){t.typed=!1;break}(!t.issues||!r.abortEarly&&!r.abortPipeEarly)&&(t=o._run(t,r))}return t}}}Se("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");const Je=n=>we(xe(Uint8Array),pt(n));Je(32),Je(20),Je(32),xe(Uint8Array),we(wt(),ht(/^([0-9a-f]{2})+$/i)),we(Ne(),Qe(),Ce(0),Re(255)),we(Ne(),Qe(),Ce(0),Re(4294967295)),we(mt(),Ce(0n),Re(0x7fffffffffffffffn)),gt(yt([xe(Uint8Array),Ne()])),Uint8Array.from([123,181,45,122,159,239,88,50,62,177,191,122,64,125,179,130,210,243,242,216,27,177,34,79,73,254,81,143,109,72,211,124,123,181,45,122,159,239,88,50,62,177,191,122,64,125,179,130,210,243,242,216,27,177,34,79,73,254,81,143,109,72,211,124]),Uint8Array.from([241,239,78,94,192,99,202,218,109,148,202,250,157,152,126,160,105,38,88,57,236,193,31,151,45,119,165,46,216,193,204,144,241,239,78,94,192,99,202,218,109,148,202,250,157,152,126,160,105,38,88,57,236,193,31,151,45,119,165,46,216,193,204,144]),Uint8Array.from([7,73,119,52,167,155,203,53,91,155,140,125,3,79,18,28,244,52,215,62,247,45,218,25,135,0,97,251,82,191,235,47,7,73,119,52,167,155,203,53,91,155,140,125,3,79,18,28,244,52,215,62,247,45,218,25,135,0,97,251,82,191,235,47]),Uint8Array.from([174,234,143,220,66,8,152,49,5,115,75,88,8,29,30,38,56,211,95,28,181,64,8,212,211,87,202,3,190,120,233,238,174,234,143,220,66,8,152,49,5,115,75,88,8,29,30,38,56,211,95,28,181,64,8,212,211,87,202,3,190,120,233,238]),Uint8Array.from([25,65,161,242,229,110,185,95,162,169,241,148,190,92,1,247,33,111,51,237,130,176,145,70,52,144,208,91,245,22,160,21,25,65,161,242,229,110,185,95,162,169,241,148,190,92,1,247,33,111,51,237,130,176,145,70,52,144,208,91,245,22,160,21]),Uint8Array.from([244,10,72,223,75,42,112,200,180,146,75,242,101,70,97,237,61,149,253,102,163,19,235,135,35,117,151,198,40,228,160,49,244,10,72,223,75,42,112,200,180,146,75,242,101,70,97,237,61,149,253,102,163,19,235,135,35,117,151,198,40,228,160,49]),Uint8Array.from([232,15,225,99,156,156,160,80,227,175,27,57,193,67,198,62,66,156,188,235,21,217,64,251,181,197,161,244,175,87,197,233,232,15,225,99,156,156,160,80,227,175,27,57,193,67,198,62,66,156,188,235,21,217,64,251,181,197,161,244,175,87,197,233]),Uint8Array.from([72,28,151,28,60,11,70,215,240,178,117,174,89,141,78,44,126,215,49,156,89,74,92,110,199,158,160,212,153,2,148,240,72,28,151,28,60,11,70,215,240,178,117,174,89,141,78,44,126,215,49,156,89,74,92,110,199,158,160,212,153,2,148,240]),Uint8Array.from([191,201,4,3,77,28,136,232,200,14,34,229,61,36,86,109,100,130,78,214,66,114,129,192,145,0,249,77,205,82,201,129,191,201,4,3,77,28,136,232,200,14,34,229,61,36,86,109,100,130,78,214,66,114,129,192,145,0,249,77,205,82,201,129]);function hn(n){if(n.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let c=0;c<t.length;c++)t[c]=255;for(let c=0;c<n.length;c++){const d=n.charAt(c),b=d.charCodeAt(0);if(t[b]!==255)throw new TypeError(d+" is ambiguous");t[b]=c}const r=n.length,o=n.charAt(0),f=Math.log(r)/Math.log(256),h=Math.log(256)/Math.log(r);function l(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";let d=0,b=0,R=0;const N=c.length;for(;R!==N&&c[R]===0;)R++,d++;const I=(N-R)*h+1>>>0,y=new Uint8Array(I);for(;R!==N;){let M=c[R],D=0;for(let W=I-1;(M!==0||D<b)&&W!==-1;W--,D++)M+=256*y[W]>>>0,y[W]=M%r>>>0,M=M/r>>>0;if(M!==0)throw new Error("Non-zero carry");b=D,R++}let x=I-b;for(;x!==I&&y[x]===0;)x++;let U=o.repeat(d);for(;x<I;++x)U+=n.charAt(y[x]);return U}function m(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array;let d=0,b=0,R=0;for(;c[d]===o;)b++,d++;const N=(c.length-d)*f+1>>>0,I=new Uint8Array(N);for(;d<c.length;){const M=c.charCodeAt(d);if(M>255)return;let D=t[M];if(D===255)return;let W=0;for(let A=N-1;(D!==0||W<R)&&A!==-1;A--,W++)D+=r*I[A]>>>0,I[A]=D%256>>>0,D=D/256>>>0;if(D!==0)throw new Error("Non-zero carry");R=W,d++}let y=N-R;for(;y!==N&&I[y]===0;)y++;const x=new Uint8Array(b+(N-y));let U=b;for(;y!==N;)x[U++]=I[y++];return x}function E(c){const d=m(c);if(d)return d;throw new Error("Non-base"+r+" character")}return{encode:l,decodeUnsafe:m,decode:E}}var gn="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";hn(gn);function mn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var le={},Et;function wn(){if(Et)return le;Et=1,Object.defineProperty(le,"__esModule",{value:!0}),le.bech32m=le.bech32=void 0;const n="qpzry9x8gf2tvdw0s3jn54khce6mua7l",t={};for(let c=0;c<n.length;c++){const d=n.charAt(c);t[d]=c}function r(c){const d=c>>25;return(c&33554431)<<5^-(d>>0&1)&996825010^-(d>>1&1)&642813549^-(d>>2&1)&513874426^-(d>>3&1)&1027748829^-(d>>4&1)&705979059}function o(c){let d=1;for(let b=0;b<c.length;++b){const R=c.charCodeAt(b);if(R<33||R>126)return"Invalid prefix ("+c+")";d=r(d)^R>>5}d=r(d);for(let b=0;b<c.length;++b){const R=c.charCodeAt(b);d=r(d)^R&31}return d}function f(c,d,b,R){let N=0,I=0;const y=(1<<b)-1,x=[];for(let U=0;U<c.length;++U)for(N=N<<d|c[U],I+=d;I>=b;)I-=b,x.push(N>>I&y);if(R)I>0&&x.push(N<<b-I&y);else{if(I>=d)return"Excess padding";if(N<<b-I&y)return"Non-zero padding"}return x}function h(c){return f(c,8,5,!0)}function l(c){const d=f(c,5,8,!1);if(Array.isArray(d))return d}function m(c){const d=f(c,5,8,!1);if(Array.isArray(d))return d;throw new Error(d)}function E(c){let d;c==="bech32"?d=1:d=734539939;function b(y,x,U){if(U=U||90,y.length+7+x.length>U)throw new TypeError("Exceeds length limit");y=y.toLowerCase();let M=o(y);if(typeof M=="string")throw new Error(M);let D=y+"1";for(let W=0;W<x.length;++W){const A=x[W];if(A>>5!==0)throw new Error("Non 5-bit word");M=r(M)^A,D+=n.charAt(A)}for(let W=0;W<6;++W)M=r(M);M^=d;for(let W=0;W<6;++W){const A=M>>(5-W)*5&31;D+=n.charAt(A)}return D}function R(y,x){if(x=x||90,y.length<8)return y+" too short";if(y.length>x)return"Exceeds length limit";const U=y.toLowerCase(),M=y.toUpperCase();if(y!==U&&y!==M)return"Mixed-case string "+y;y=U;const D=y.lastIndexOf("1");if(D===-1)return"No separator character for "+y;if(D===0)return"Missing prefix for "+y;const W=y.slice(0,D),A=y.slice(D+1);if(A.length<6)return"Data too short";let X=o(W);if(typeof X=="string")return X;const ie=[];for(let ee=0;ee<A.length;++ee){const Y=A.charAt(ee),ae=t[Y];if(ae===void 0)return"Unknown character "+Y;X=r(X)^ae,!(ee+6>=A.length)&&ie.push(ae)}return X!==d?"Invalid checksum for "+y:{prefix:W,words:ie}}function N(y,x){const U=R(y,x);if(typeof U=="object")return U}function I(y,x){const U=R(y,x);if(typeof U=="object")return U;throw new Error(U)}return{decodeUnsafe:N,decode:I,encode:b,toWords:h,fromWordsUnsafe:l,fromWords:m}}return le.bech32=E("bech32"),le.bech32m=E("bech32m"),le}wn();const bt="0123456789abcdefABCDEF";bt.split("").map(n=>n.codePointAt(0)),Array(256).fill(!0).map((n,t)=>{const r=String.fromCodePoint(t),o=bt.indexOf(r);return o<0?void 0:o<16?o:o-6}),new TextEncoder,new TextDecoder;function vn(n,t,r,o){if(t+2>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(o=o.toUpperCase(),r>65535)throw new Error(`The value of "value" is out of range. It must be >= 0 and <= 65535. Received ${r}`);o==="LE"?(n[t]=r&255,n[t+1]=r>>8&255):(n[t]=r>>8&255,n[t+1]=r&255)}function yn(n,t,r,o){if(t+4>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(o=o.toUpperCase(),r>4294967295)throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${4294967295}. Received ${r}`);o==="LE"?(n[t]=r&255,n[t+1]=r>>8&255,n[t+2]=r>>16&255,n[t+3]=r>>24&255):(n[t]=r>>24&255,n[t+1]=r>>16&255,n[t+2]=r>>8&255,n[t+3]=r&255)}function En(n,t,r,o){if(t+8>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(o=o.toUpperCase(),r>0xffffffffffffffffn)throw new Error(`The value of "value" is out of range. It must be >= 0 and <= ${0xffffffffffffffffn}. Received ${r}`);o==="LE"?(n[t]=Number(r&0xffn),n[t+1]=Number(r>>8n&0xffn),n[t+2]=Number(r>>16n&0xffn),n[t+3]=Number(r>>24n&0xffn),n[t+4]=Number(r>>32n&0xffn),n[t+5]=Number(r>>40n&0xffn),n[t+6]=Number(r>>48n&0xffn),n[t+7]=Number(r>>56n&0xffn)):(n[t]=Number(r>>56n&0xffn),n[t+1]=Number(r>>48n&0xffn),n[t+2]=Number(r>>40n&0xffn),n[t+3]=Number(r>>32n&0xffn),n[t+4]=Number(r>>24n&0xffn),n[t+5]=Number(r>>16n&0xffn),n[t+6]=Number(r>>8n&0xffn),n[t+7]=Number(r&0xffn))}function bn(n,t,r){if(t+2>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(r=r.toUpperCase(),r==="LE"){let o=0;return o=(o<<8)+n[t+1],o=(o<<8)+n[t],o}else{let o=0;return o=(o<<8)+n[t],o=(o<<8)+n[t+1],o}}function _n(n,t,r){if(t+4>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(r=r.toUpperCase(),r==="LE"){let o=0;return o=(o<<8)+n[t+3]>>>0,o=(o<<8)+n[t+2]>>>0,o=(o<<8)+n[t+1]>>>0,o=(o<<8)+n[t]>>>0,o}else{let o=0;return o=(o<<8)+n[t]>>>0,o=(o<<8)+n[t+1]>>>0,o=(o<<8)+n[t+2]>>>0,o=(o<<8)+n[t+3]>>>0,o}}function Pn(n,t,r){if(t+8>n.length)throw new Error("Offset is outside the bounds of Uint8Array");if(r=r.toUpperCase(),r==="LE"){let o=0n;return o=(o<<8n)+BigInt(n[t+7]),o=(o<<8n)+BigInt(n[t+6]),o=(o<<8n)+BigInt(n[t+5]),o=(o<<8n)+BigInt(n[t+4]),o=(o<<8n)+BigInt(n[t+3]),o=(o<<8n)+BigInt(n[t+2]),o=(o<<8n)+BigInt(n[t+1]),o=(o<<8n)+BigInt(n[t]),o}else{let o=0n;return o=(o<<8n)+BigInt(n[t]),o=(o<<8n)+BigInt(n[t+1]),o=(o<<8n)+BigInt(n[t+2]),o=(o<<8n)+BigInt(n[t+3]),o=(o<<8n)+BigInt(n[t+4]),o=(o<<8n)+BigInt(n[t+5]),o=(o<<8n)+BigInt(n[t+6]),o=(o<<8n)+BigInt(n[t+7]),o}}const On=n=>{if(n<0||n>0xffffffffffffffffn)throw new RangeError("value out of range")};function An(n){if(n<0||n>Number.MAX_SAFE_INTEGER||n%1!==0)throw new RangeError("value out of range")}function _t(n){typeof n=="number"?An(n):On(n)}function Tn(n,t,r){_t(n),r===void 0&&(r=0),t===void 0&&(t=new Uint8Array(Pt(n)));let o=0;return n<253?(t.set([Number(n)],r),o=1):n<=65535?(t.set([253],r),vn(t,r+1,Number(n),"LE"),o=3):n<=4294967295?(t.set([254],r),yn(t,r+1,Number(n),"LE"),o=5):(t.set([255],r),En(t,r+1,BigInt(n),"LE"),o=9),{buffer:t,bytes:o}}function Sn(n,t){t===void 0&&(t=0);const r=n.at(t);if(r===void 0)throw new Error("buffer too small");if(r<253)return{numberValue:r,bigintValue:BigInt(r),bytes:1};if(r===253){const o=bn(n,t+1,"LE");return{numberValue:o,bigintValue:BigInt(o),bytes:3}}else if(r===254){const o=_n(n,t+1,"LE");return{numberValue:o,bigintValue:BigInt(o),bytes:5}}else{const o=Pn(n,t+1,"LE");return{numberValue:o<=Number.MAX_SAFE_INTEGER?Number(o):null,bigintValue:o,bytes:9}}}function Pt(n){return _t(n),n<253?1:n<=65535?3:n<=4294967295?5:9}Se("0000000000000000000000000000000000000000000000000000000000000000"),Se("0000000000000000000000000000000000000000000000000000000000000001"),Se("ffffffffffffffff");var Ot;(function(n){n[n.UNSIGNED_TX=0]="UNSIGNED_TX",n[n.GLOBAL_XPUB=1]="GLOBAL_XPUB"})(Ot||(Ot={}));var Z;(function(n){n[n.NON_WITNESS_UTXO=0]="NON_WITNESS_UTXO",n[n.WITNESS_UTXO=1]="WITNESS_UTXO",n[n.PARTIAL_SIG=2]="PARTIAL_SIG",n[n.SIGHASH_TYPE=3]="SIGHASH_TYPE",n[n.REDEEM_SCRIPT=4]="REDEEM_SCRIPT",n[n.WITNESS_SCRIPT=5]="WITNESS_SCRIPT",n[n.BIP32_DERIVATION=6]="BIP32_DERIVATION",n[n.FINAL_SCRIPTSIG=7]="FINAL_SCRIPTSIG",n[n.FINAL_SCRIPTWITNESS=8]="FINAL_SCRIPTWITNESS",n[n.POR_COMMITMENT=9]="POR_COMMITMENT",n[n.TAP_KEY_SIG=19]="TAP_KEY_SIG",n[n.TAP_SCRIPT_SIG=20]="TAP_SCRIPT_SIG",n[n.TAP_LEAF_SCRIPT=21]="TAP_LEAF_SCRIPT",n[n.TAP_BIP32_DERIVATION=22]="TAP_BIP32_DERIVATION",n[n.TAP_INTERNAL_KEY=23]="TAP_INTERNAL_KEY",n[n.TAP_MERKLE_ROOT=24]="TAP_MERKLE_ROOT"})(Z||(Z={}));var re;(function(n){n[n.REDEEM_SCRIPT=0]="REDEEM_SCRIPT",n[n.WITNESS_SCRIPT=1]="WITNESS_SCRIPT",n[n.BIP32_DERIVATION=2]="BIP32_DERIVATION",n[n.TAP_INTERNAL_KEY=5]="TAP_INTERNAL_KEY",n[n.TAP_TREE=6]="TAP_TREE",n[n.TAP_BIP32_DERIVATION=7]="TAP_BIP32_DERIVATION"})(re||(re={}));const Rn=n=>[...Array(n).keys()],Cn=n=>n.length===33&&[2,3].includes(n[0])||n.length===65&&n[0]===4;function Ze(n,t=Cn){function r(m){if(m.key[0]!==n)throw new Error("Decode Error: could not decode bip32Derivation with key 0x"+ce(m.key));const E=m.key.slice(1);if(!t(E))throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x"+ce(m.key));if(m.value.length/4%1!==0)throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");const c={masterFingerprint:m.value.slice(0,4),pubkey:E,path:"m"};for(const d of Rn(m.value.length/4-1)){const b=ln(m.value,d*4+4,"LE"),R=!!(b&2147483648),N=b&2147483647;c.path+="/"+N.toString(10)+(R?"'":"")}return c}function o(m){const E=Uint8Array.from([n]),c=dt([E,m.pubkey]),d=m.path.split("/"),b=new Uint8Array(d.length*4);b.set(m.masterFingerprint,0);let R=4;return d.slice(1).forEach(N=>{const I=N.slice(-1)==="'";let y=2147483647&parseInt(I?N.slice(0,-1):N,10);I&&(y+=2147483648),cn(b,R,y,"LE"),R+=4}),{key:c,value:b}}const f="{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; }";function h(m){return m.pubkey instanceof Uint8Array&&m.masterFingerprint instanceof Uint8Array&&typeof m.path=="string"&&t(m.pubkey)&&m.masterFingerprint.length===4}function l(m,E,c){const d=ce(E.pubkey);return c.has(d)?!1:(c.add(d),m.filter(b=>sn(b.pubkey,E.pubkey)===0).length===0)}return{decode:r,encode:o,check:h,expected:f,canAddToArray:l}}function At(n){return t;function t(r){let o;if(n.includes(r.key[0])&&(o=r.key.slice(1),!(o.length===33||o.length===65)||![2,3,4].includes(o[0])))throw new Error("Format Error: invalid pubkey in key 0x"+ce(r.key));return o}}function Tt(n){function t(l){if(l.key[0]!==n)throw new Error("Decode Error: could not decode redeemScript with key 0x"+ce(l.key));return l.value}function r(l){return{key:Uint8Array.from([n]),value:l}}const o="Uint8Array";function f(l){return l instanceof Uint8Array}function h(l,m){return!!l&&!!m&&l.redeemScript===void 0}return{decode:t,encode:r,check:f,expected:o,canAdd:h}}const xn=n=>n.length===32;function St(n){const t=Ze(n,xn);function r(l){const{numberValue:m,bytes:E}=Sn(l.value),c=t.decode({key:l.key,value:l.value.slice(E+Number(m)*32)}),d=new Array(Number(m));for(let b=0,R=E;b<m;b++,R+=32)d[b]=l.value.slice(R,R+32);return{...c,leafHashes:d}}function o(l){const m=t.encode(l),E=Pt(l.leafHashes.length),c=new Uint8Array(E);Tn(l.leafHashes.length,c);const d=dt([c,...l.leafHashes,m.value]);return{...m,value:d}}const f="{ masterFingerprint: Uint8Array; pubkey: Uint8Array; path: string; leafHashes: Uint8Array[]; }";function h(l){return Array.isArray(l.leafHashes)&&l.leafHashes.every(m=>m instanceof Uint8Array&&m.length===32)&&t.check(l)}return{decode:r,encode:o,check:h,expected:f,canAddToArray:t.canAddToArray}}function Rt(n){function t(l){if(l.key[0]!==n||l.key.length!==1)throw new Error("Decode Error: could not decode tapInternalKey with key 0x"+ce(l.key));if(l.value.length!==32)throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");return l.value}function r(l){return{key:Uint8Array.from([n]),value:l}}const o="Uint8Array";function f(l){return l instanceof Uint8Array&&l.length===32}function h(l,m){return!!l&&!!m&&l.tapInternalKey===void 0}return{decode:t,encode:r,check:f,expected:o,canAdd:h}}function Ct(n){function t(l){if(l.key[0]!==n)throw new Error("Decode Error: could not decode witnessScript with key 0x"+ce(l.key));return l.value}function r(l){return{key:Uint8Array.from([n]),value:l}}const o="Uint8Array";function f(l){return l instanceof Uint8Array}function h(l,m){return!!l&&!!m&&l.witnessScript===void 0}return{decode:t,encode:r,check:f,expected:o,canAdd:h}}Ze(Z.BIP32_DERIVATION),Tt(Z.REDEEM_SCRIPT),Ct(Z.WITNESS_SCRIPT),At([Z.PARTIAL_SIG,Z.BIP32_DERIVATION]),St(Z.TAP_BIP32_DERIVATION),Rt(Z.TAP_INTERNAL_KEY),Ze(re.BIP32_DERIVATION),Tt(re.REDEEM_SCRIPT),Ct(re.WITNESS_SCRIPT),At([re.BIP32_DERIVATION]),St(re.TAP_BIP32_DERIVATION),Rt(re.TAP_INTERNAL_KEY);const Nn=()=>({MAJOR:0,MINOR:1,PATCH:1,STRING:"0.1.1"}),kn=()=>({ENDPOINT:"https://openbook.0.srcpad.pro"}),In=()=>({ENDPOINT:"https://counterparty.0.srcpad.pro",RPC_USER:"rpc",RPC_PASSWORD:"rpc"}),Un=()=>({ENDPOINT:"https://bitcoin.0.srcpad.pro",RPC_USER:"rpc",RPC_PASSWORD:"rpc"}),Mn=()=>({ENDPOINT:"https://fulcrum.0.srcpad.pro",RPC_USER:"rpc",RPC_PASSWORD:"rpc"}),Ln=()=>({ENDPOINT:"https://stamps.0.srcpad.pro"}),Dn={VERSION:Nn(),OPENBOOK:kn(),COUNTERPARTY:In(),STAMPS:Ln(),ELECTRUM:Mn(),BITCOIN:Un()},et=()=>Dn;async function tt(n,t){try{const r={jsonrpc:"2.0",id:1,method:n,params:t},o=btoa(`${et().BITCOIN.RPC_USER}:${et().BITCOIN.RPC_PASSWORD}`);return await(await fetch(et().BITCOIN.ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Basic ${o}`},body:JSON.stringify(r)})).json()}catch(r){console.error(r)}}const ke={bitcoin:{getRawTransaction:async({txid:n,verbose:t})=>await tt("getrawtransaction",[n,t]),getMempoolFee:async()=>{const n=new URL("https://mempool.space/api/v1/fees/recommended");return await(await fetch(n)).json()},sendRawTransaction:async({txHex:n})=>await tt("sendrawtransaction",[n]),customCallRPC:async({method:n,params:t})=>await tt(n,t)}};class Wn{constructor(){z(this,"provider");z(this,"label","Leather");z(this,"icon","https://openbook.0.srcpad.pro/static/assets/leather.png");this.provider=globalThis.LeatherProvider}async connectWallet(){if(typeof globalThis<"u"&&this.provider)try{const{result:t}=await this.provider.request("getAddresses");if(t&&t.addresses.length>0){const r=t.addresses.find(o=>o.type==="p2wpkh");if(r){const o=r.address,f=r.publicKey;return{address:o,publicKey:f}}}}catch(t){return console.error("Error connecting to Leather Wallet:",t),null}else throw new Error("Leather Wallet not installed");return null}async signMessage(t){if(typeof globalThis<"u"&&this.provider){const{result:r}=await this.provider.request("signMessage",{message:t,paymentType:"p2wpkh",network:"mainnet"});return r.signature}throw new Error("Leather Wallet not installed")}async signPSBT(t,r){if(typeof globalThis<"u"&&this.provider)try{const{inputsToSign:o,broadcast:f}=r,h={hex:t,broadcast:f};return r&&o&&(h.allowedSighash=o[0].sighashTypes,h.signAtIndex=o.map(m=>m.index)),(await this.provider.request("signPsbt",h)).result.hex}catch(o){return console.error("Error signing PSBT with Leather Wallet:",o),null}else throw new Error("Leather Wallet not installed")}async pushTX(t){return await ke.bitcoin.sendRawTransaction({txHex:t})}}const $n=new Wn;class Bn{constructor(){z(this,"provider");z(this,"label","OKX");z(this,"icon","https://openbook.0.srcpad.pro/static/assets/okx.png");this.provider=globalThis.okxwallet}async connectWallet(){var t;if(typeof globalThis<"u"&&((t=this.provider)!=null&&t.bitcoin))try{return await this.provider.bitcoin.connect()}catch(r){return console.error("Error connecting to OKX Wallet:",r),null}else throw new Error("OKX Wallet not installed")}async signMessage(t){var r;if(typeof globalThis<"u"&&((r=this.provider)!=null&&r.bitcoin))return await this.provider.bitcoin.signMessage(t);throw new Error("OKX Wallet not installed")}async signPSBT(t,r){var o;if(typeof globalThis<"u"&&((o=this.provider)!=null&&o.bitcoin))try{if(r){const h={};return"autoFinalized"in r&&(h.autoFinalized=r.autoFinalized),"inputsToSign"in r&&(h.toSignInputs=r.inputsToSign),await this.provider.bitcoin.signPsbt(t,h)}return await this.provider.bitcoin.signPsbt(t)}catch(f){return console.error("Error signing PSBT with OKX Wallet:",f),null}else throw new Error("OKX Wallet not installed")}async pushTX(t){return await ke.bitcoin.sendRawTransaction({txHex:t})}}const jn=new Bn;class Hn{constructor(){z(this,"provider");z(this,"label","Unisat");z(this,"icon","https://openbook.0.srcpad.pro/static/assets/unisat.png");this.provider=globalThis.unisat}async connectWallet(){if(typeof globalThis<"u"&&this.provider)try{const r=(await this.provider.requestAccounts())[0],o=await this.provider.getPublicKey();return{address:r,publicKey:o}}catch(t){return console.error("Error connecting to Unisat Wallet:",t),null}else throw new Error("Unisat Wallet not installed")}async signMessage(t){if(typeof globalThis<"u"&&this.provider)return await this.provider.signMessage(t);throw new Error("Unisat Wallet not installed")}async signPSBT(t,r){if(typeof globalThis<"u"&&this.provider)try{if(r){const f={};return"autoFinalized"in r&&(f.autoFinalized=r.autoFinalized),"inputsToSign"in r&&(f.toSignInputs=r.inputsToSign),await this.provider.signPsbt(t,f)}return await this.provider.signPsbt(t)}catch(o){return console.error("Error signing PSBT with Unisat Wallet:",o),null}else throw new Error("Unisat Wallet not installed")}async pushTX(t){return await ke.bitcoin.sendRawTransaction({txHex:t})}}const Kn=new Hn;class zn{constructor(){z(this,"provider");z(this,"label","TapWallet");z(this,"icon","https://openbook.0.srcpad.pro/static/assets/tapwallet.png");this.provider=globalThis.tapwallet}async connectWallet(){if(typeof globalThis<"u"&&this.provider)try{const r=(await this.provider.requestAccounts())[0],o=await this.provider.getPublicKey();return{address:r,publicKey:o}}catch(t){return console.error("Error connecting to TapWallet:",t),null}else throw new Error("TapWallet not installed")}async signMessage(t){if(typeof globalThis<"u"&&this.provider)return await this.provider.signMessage(t);throw new Error("TapWallet not installed")}async signPSBT(t,r){if(typeof globalThis<"u"&&this.provider)try{if(r){const f={};return"autoFinalized"in r&&(f.autoFinalized=r.autoFinalized),"inputsToSign"in r&&(f.toSignInputs=r.inputsToSign),await this.provider.signPsbt(t,f)}return await this.provider.signPsbt(t)}catch(o){return console.error("Error signing PSBT with TapWallet:",o),null}else throw new Error("TapWallet not installed")}async pushTX(t){return await ke.bitcoin.sendRawTransaction({txHex:t})}}const Yn=new zn,oe={Leather:$n,OKX:jn,TapWallet:Yn,Unisat:Kn};class xt{constructor(){z(this,"walletAddress",null);z(this,"publicKey",null);z(this,"connected",!1);z(this,"walletProvider",null);this.connectWalletFromLocalStorage()}connectWalletFromLocalStorage(){const t=localStorage.getItem("wallets"),r=localStorage.getItem("activeProvider");if(t&&r){const f=JSON.parse(t)[r];f&&oe[r]&&(this.walletProvider=oe[r].label,this.walletAddress=f.address,this.publicKey=f.publicKey,this.connected=!0)}}async connectWallet(t){const r=oe[t];if(r){const{address:o,publicKey:f}=await r.connectWallet()||{};if(o&&f){this.walletProvider=r.label,this.walletAddress=o,this.publicKey=f,this.connected=!0;const h=localStorage.getItem("wallets"),l=h?JSON.parse(h):{};l[t]={address:o,publicKey:f},localStorage.setItem("wallets",JSON.stringify(l)),localStorage.setItem("activeProvider",t)}}}disconnectWallet(){this.walletAddress=null,this.connected=!1,this.walletProvider=null;const t=localStorage.getItem("wallets"),r=localStorage.getItem("activeProvider");if(t&&r){const o=JSON.parse(t);delete o[r],localStorage.setItem("wallets",JSON.stringify(o))}localStorage.removeItem("activeProvider")}async signMessage(t){const r=oe[this.walletProvider];return this.walletProvider?await r.signMessage(t):(console.error("Wallet provider is not defined"),null)}async signPSBT(t,r={}){var o;try{if(console.log("🔍 Checking WalletManager instance before signing"),console.log("walletProvider:",this.walletProvider),console.log("walletAddress:",this.walletAddress),console.log("Connected:",this.connected),this.walletProvider||(console.warn("⚠️ `walletProvider` es undefined en `signPSBT()`, intentando obtenerlo..."),this.walletProvider=((o=globalThis.walletManagerInstance)==null?void 0:o.walletProvider)??null),!this.walletProvider)return console.error("❌ `walletProvider` sigue siendo undefined (signPSBT)"),null;const f=oe[this.walletProvider];return f?await f.signPSBT(t,r):(console.error("❌ Wallet configuration not found for provider:",this.walletProvider),null)}catch(f){return console.error("❌ Error signing PSBT:",f),null}}async pushTX(t){try{if(!this.walletProvider)return console.error("Wallet provider is not defined"),null;const r=oe[this.walletProvider];if(!r)return console.error("Wallet configuration not found for provider:",this.walletProvider),null;const o=await r.pushTX(t);return typeof o=="string"?o:(o==null?void 0:o.result)||null}catch(r){return console.error("Error pushing TX:",r),null}}}const Ie=F.atom(null);function Nt(){return Ie.get()||(console.warn("🆕 walletManagerInstance doesnt exist, creating it..."),Ie.set(new xt)),Ie.get()}const kt=`
      :host {
        display: inline-flex !important;
        align-items: center !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        
        /* Color variables with defaults */
        --btn-primary-color: #f7931a;
        --btn-primary-hover: #e88a18;
        --btn-primary-shadow: rgba(247, 147, 26, 0.2);
        --btn-primary-shadow-hover: rgba(247, 147, 26, 0.3);
        
        --btn-connected-color: #2ecc71;
        --btn-connected-hover: #e74c3c;
        --btn-connected-shadow: rgba(46, 204, 113, 0.2);
        --btn-connected-shadow-hover: rgba(231, 76, 60, 0.3);
        
        --wallet-info-bg: rgba(247, 147, 26, 0.1);
        --wallet-info-color: #333;
        
        --modal-bg: white;
        --modal-text: #333;
        --modal-border: #f0f0f0;
        --modal-option-border: #eee;
        --modal-option-hover: #f9f9f9;
        --modal-option-hover-border: #ddd;
        --modal-close-color: #999;
        --modal-close-hover: #f5f5f5;
        --modal-close-hover-color: #333;
        
        /* Dark theme variables */
        --dark-btn-primary-color: #2c2c2c;
        --dark-btn-primary-hover: #3c3c3c;
        --dark-btn-connected-color: #207245;
        --dark-btn-connected-hover: #c0392b;
        --dark-wallet-info-bg: rgba(202, 114, 6, 0.85);
        --dark-wallet-info-color: #e0e0e0;
        --dark-modal-bg: #1e1e1e;
        --dark-modal-text: #e0e0e0;
        --dark-modal-border: #333;
        --dark-modal-option-border: #333;
        --dark-modal-option-hover: #2a2a2a;
        --dark-modal-option-hover-border: #444;
        --dark-modal-close-hover: #333;
        --dark-modal-close-hover-color: #e0e0e0;
      }
      
      *, *::before, *::after {
        box-sizing: border-box;
      }
      
      /* Container for the entire component when connected */
      .wallet-container {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        gap: 8px !important;
      }
      
      .wallet-info {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 14px !important;
        color: var(--wallet-info-color) !important;
        background-color: var(--wallet-info-bg) !important;
        padding: 8px 16px !important;
        border-radius: 8px !important;
        transition: all 0.3s ease !important;
        margin-right: 0 !important;
        height: 40px !important;
      }
      
      .theme-dark .wallet-info {
        color: var(--dark-wallet-info-color) !important;
        background-color: var(--dark-wallet-info-bg) !important;
      }
      
      .wallet-icon {
        margin-right: 8px !important;
        display: inline-flex !important;
        align-items: center !important;
      }
      
      .wallet-address {
        font-weight: 500 !important;
      }
      
      .bitcoin-connect-button {
        display: flex !important;
        align-items: center !important;
        padding: 10px 16px !important;
        background-color: var(--btn-primary-color) !important;
        color: white !important;
        border: none !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        min-width: 150px !important;
        justify-content: center !important;
        font-size: 14px !important;
        box-shadow: 0 4px 12px var(--btn-primary-shadow) !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .bitcoin-connect-button::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%) !important;
        transform: translateX(-100%) !important;
        transition: transform 0.6s ease !important;
      }
      
      .bitcoin-connect-button:hover::before {
        transform: translateX(100%) !important;
      }
      
      .bitcoin-connect-button.connected {
        background-color: var(--btn-connected-color) !important;
        min-width: unset !important;
        width: 40px !important;
        height: 40px !important;
        padding: 0 !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 12px var(--btn-connected-shadow) !important;
        order: 2 !important;
      }
      
      .bitcoin-connect-button:hover {
        background-color: var(--btn-primary-hover) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 16px var(--btn-primary-shadow-hover) !important;
      }
      
      .bitcoin-connect-button.connected:hover {
        background-color: var(--btn-connected-hover) !important;
        box-shadow: 0 6px 16px var(--btn-connected-shadow-hover) !important;
      }
      
      .bitcoin-connect-icon {
        margin-right: 8px !important;
        display: inline-flex !important;
        align-items: center !important;
      }
      
      .bitcoin-connect-button.connected .bitcoin-connect-icon {
        margin-right: 0 !important;
      }
      
      .bitcoin-connect-button.loading {
        opacity: 0.7 !important;
        cursor: wait !important;
      }
      
      .spinner {
        display: inline-block !important;
        width: 20px !important;
        height: 20px !important;
        border: 2px solid rgba(255,255,255,0.3) !important;
        border-radius: 50% !important;
        border-top-color: white !important;
        animation: spin 1s ease-in-out infinite !important;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      .bitcoin-connect-status {
        margin-top: 8px !important;
        font-size: 0.85rem !important;
        color: #555 !important;
        text-align: center !important;
      }
      
      dialog {
        padding: 0 !important;
        border: none !important;
        border-radius: 10px !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
        max-width: 400px !important;
        width: 90% !important;
        background-color: var(--modal-bg) !important;
        overflow: hidden !important;
      }
      
      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5) !important;
        backdrop-filter: blur(4px) !important;
      }
      
      .wallet-modal-content {
        padding: 24px !important;
      }
      
      .wallet-modal-header {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 20px !important;
        padding-bottom: 16px !important;
        border-bottom: 1px solid var(--modal-border) !important;
      }
      
      .wallet-modal-header h2 {
        margin: 0 !important;
        font-size: 1.25rem !important;
        color: var(--modal-text) !important;
        font-weight: 600 !important;
      }
      
      .wallet-modal-close {
        background: none !important;
        border: none !important;
        font-size: 1.5rem !important;
        cursor: pointer !important;
        color: var(--modal-close-color) !important;
        width: 32px !important;
        height: 32px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 6px !important;
        transition: all 0.2s ease !important;
      }
      
      .wallet-modal-close:hover {
        background-color: var(--modal-close-hover) !important;
        color: var(--modal-close-hover-color) !important;
      }
      
      .wallet-list {
        display: grid !important;
        grid-gap: 12px !important;
      }
      
      .wallet-option {
        display: flex !important;
        align-items: center !important;
        padding: 16px !important;
        border: 1px solid var(--modal-option-border) !important;
        border-radius: 8px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .wallet-option::before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 4px !important;
        height: 100% !important;
        background-color: transparent !important;
        transition: all 0.2s ease !important;
      }
      
      .wallet-option:hover {
        background-color: var(--modal-option-hover) !important;
        border-color: var(--modal-option-hover-border) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
      }
      
      .wallet-option:hover::before {
        background-color: var(--btn-primary-color) !important;
      }
      
      .wallet-option img {
        width: 28px !important;
        height: 28px !important;
        margin-right: 16px !important;
        border-radius: 6px !important;
        object-fit: contain !important;
      }
      
      .wallet-option-label {
        color: var(--modal-text) !important;
        font-size: 15px !important;
        font-weight: 500 !important;
      }
      
      .theme-dark {
        color-scheme: dark !important;
      }
      
      .theme-dark .bitcoin-connect-button {
        background-color: var(--dark-btn-primary-color) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
      }
      
      .theme-dark .bitcoin-connect-button:hover {
        background-color: var(--dark-btn-primary-hover) !important;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4) !important;
      }
      
      .theme-dark .bitcoin-connect-button.connected {
        background-color: var(--dark-btn-connected-color) !important;
      }
      
      .theme-dark .bitcoin-connect-button.connected:hover {
        background-color: var(--dark-btn-connected-hover) !important;
      }
      
      .theme-dark dialog {
        background-color: var(--dark-modal-bg) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
      }
      
      .theme-dark .wallet-modal-header {
        border-bottom-color: var(--dark-modal-border) !important;
      }
      
      .theme-dark .wallet-modal-header h2 {
        color: var(--dark-modal-text) !important;
      }
      
      .theme-dark .wallet-modal-close:hover {
        background-color: var(--dark-modal-close-hover) !important;
        color: var(--dark-modal-close-hover-color) !important;
      }
      
      .theme-dark .wallet-option {
        border-color: var(--dark-modal-option-border) !important;
      }
      
      .theme-dark .wallet-option:hover {
        background-color: var(--dark-modal-option-hover) !important;
        border-color: var(--dark-modal-option-hover-border) !important;
      }
      
      .theme-dark .wallet-option-label {
        color: var(--dark-modal-text) !important;
      }
    `,nt=`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 4091.27 4091.73">
 <g>
  <metadata/>
  <g>
   <path fill="#F7931A" fill-rule="nonzero" d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"/>
   <path fill="white" fill-rule="nonzero" d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"/>
  </g>
 </g>
</svg>
`;let rt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.isLoading=!1;try{this.walletManager=Nt(),console.log("WalletManager initialized:",this.walletManager)}catch(t){console.error("Error initializing WalletManager:",t),this.walletManager={connected:!1,walletAddress:null,walletProvider:null,connectWallet:()=>console.error("WalletManager not available"),disconnectWallet:()=>console.error("WalletManager not available")}}this.applyCustomColors()}static get observedAttributes(){return["button-text","connected-text","loading-text","modal-title","theme","show-address","show-provider","primary-color","primary-hover","connected-color","connected-hover","wallet-info-bg","wallet-info-color"]}get options(){return{buttonText:this.getAttribute("button-text")||"Connect Wallet",connectedText:this.getAttribute("connected-text")||"Wallet Connected",loadingText:this.getAttribute("loading-text")||"Connecting...",modalTitle:this.getAttribute("modal-title")||"Select your Wallet",theme:this.getAttribute("theme")||"default",showAddress:this.getAttribute("show-address")!=="false",showProvider:this.getAttribute("show-provider")!=="false"}}connectedCallback(){console.log("BitcoinConnectButton connected to DOM"),setTimeout(()=>{this.render(),this.updateButtonState()},0)}attributeChangedCallback(t,r,o){r!==o&&((t.includes("color")||t.includes("hover")||t.includes("bg"))&&this.applyCustomColors(),this.render(),this.updateButtonState())}applyCustomColors(){const t={"--btn-primary-color":this.getAttribute("primary-color"),"--btn-primary-hover":this.getAttribute("primary-hover"),"--btn-connected-color":this.getAttribute("connected-color"),"--btn-connected-hover":this.getAttribute("connected-hover"),"--wallet-info-bg":this.getAttribute("wallet-info-bg"),"--wallet-info-color":this.getAttribute("wallet-info-color"),"--btn-primary-shadow":this.getAttribute("primary-shadow"),"--btn-primary-shadow-hover":this.getAttribute("primary-shadow-hover"),"--btn-connected-shadow":this.getAttribute("connected-shadow"),"--btn-connected-shadow-hover":this.getAttribute("connected-shadow-hover"),"--modal-bg":this.getAttribute("modal-bg"),"--modal-text":this.getAttribute("modal-text"),"--modal-border":this.getAttribute("modal-border"),"--modal-option-border":this.getAttribute("modal-option-border"),"--modal-option-hover":this.getAttribute("modal-option-hover"),"--modal-option-hover-border":this.getAttribute("modal-option-hover-border"),"--modal-close-color":this.getAttribute("modal-close-color"),"--modal-close-hover":this.getAttribute("modal-close-hover"),"--modal-close-hover-color":this.getAttribute("modal-close-hover-color")};this.style.cssText=Object.entries(t).filter(([r,o])=>o!=null).map(([r,o])=>`${r}: ${o};`).join(" ")}render(){let t="";for(const[h,l]of Object.entries(oe))t+=`
        <div class="wallet-option" data-provider="${h}">
          ${l.icon?`<img src="${l.icon}" alt="${l.label} logo" />`:""}
          <span class="wallet-option-label">${l.label}</span>
        </div>
      `;let r="";if(this.walletManager.walletAddress){const h=this.walletManager.walletAddress;r=`${h.slice(0,6)}...${h.slice(-4)}`}const o=()=>this.isLoading?'<span class="spinner"></span>':this.walletManager.connected?`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>`:`
      <span class="bitcoin-connect-icon" style="width: 24px; height: 24px;">
        ${nt}  
      </span>
      ${this.options.buttonText}`,f=`
      <style>${kt}</style>
      
      <div class="${this.options.theme==="dark"?"theme-dark":""} wallet-container">
        ${this.walletManager.connected?`
          <div class="wallet-info">
            <span class="wallet-icon" style="width: 24px; height: 24px;">
            ${nt}
            </span>
            <span class="wallet-address">${r}</span>
          </div>
        `:""}
        
        <button class="bitcoin-connect-button ${this.walletManager.connected?"connected":""} ${this.isLoading?"loading":""}">
          ${o()}
        </button>
        
        <!-- Modal using native dialog -->
        <dialog id="wallet-dialog">
          <div class="wallet-modal-content">
            <div class="wallet-modal-header">
              <h2>${this.options.modalTitle}</h2>
              <button class="wallet-modal-close">×</button>
            </div>
            <div class="wallet-list">
              ${t}
            </div>
          </div>
        </dialog>
      </div>
    `;this.shadowRoot.innerHTML=f,this.shadowRoot.querySelector(".bitcoin-connect-button").addEventListener("click",this.handleButtonClick.bind(this)),this.shadowRoot.querySelector(".wallet-modal-close").addEventListener("click",()=>this.hideModal()),this.shadowRoot.querySelector("dialog").addEventListener("cancel",()=>this.hideModal());for(const h of this.shadowRoot.querySelectorAll(".wallet-option"))h.addEventListener("click",()=>{const l=h.dataset.provider;this.hideModal(),this.connectWallet(l)})}shouldShowStatus(){return this.walletManager.connected&&(this.options.showAddress||this.options.showProvider)}getStatusText(){let t="";if(this.options.showProvider&&this.walletManager.walletProvider&&(t+=`Wallet: ${this.walletManager.walletProvider}`),this.options.showAddress&&this.walletManager.walletAddress){t&&(t+=" | ");const r=this.walletManager.walletAddress,o=`${r.slice(0,6)}...${r.slice(-4)}`;t+=`Address: ${o}`}return t}showModal(){const t=this.shadowRoot.querySelector("dialog");t&&t.showModal()}hideModal(){const t=this.shadowRoot.querySelector("dialog");t&&t.close()}async handleButtonClick(){this.isLoading||(this.walletManager.connected?await this.disconnect():this.showModal())}async connectWallet(t){try{this.setLoading(!0),await this.walletManager.connectWallet(t),this.updateButtonState(),this.dispatchEvent(new CustomEvent("wallet-connected",{bubbles:!0,composed:!0,detail:{address:this.walletManager.walletAddress,publicKey:this.walletManager.publicKey,provider:this.walletManager.walletProvider}}))}catch(r){console.error("Error connecting wallet:",r),this.dispatchEvent(new CustomEvent("wallet-error",{bubbles:!0,composed:!0,detail:{error:r}}))}finally{this.setLoading(!1)}}async disconnect(){try{this.setLoading(!0),this.walletManager.disconnectWallet(),this.updateButtonState(),this.dispatchEvent(new CustomEvent("wallet-disconnected",{bubbles:!0,composed:!0}))}catch(t){console.error("Error disconnecting wallet:",t),this.dispatchEvent(new CustomEvent("wallet-error",{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.setLoading(!1)}}setLoading(t){this.isLoading=t,this.render()}updateButtonState(){this.render()}getWalletManager(){return this.walletManager}};typeof window<"u"&&!customElements.get("bitcoin-connect")&&customElements.define("bitcoin-connect",rt);const Gn=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));var Ue={exports:{}},O={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It;function Fn(){if(It)return O;It=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),l=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),b=Symbol.iterator;function R(a){return a===null||typeof a!="object"?null:(a=b&&a[b]||a["@@iterator"],typeof a=="function"?a:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,y={};function x(a,u,_){this.props=a,this.context=u,this.refs=y,this.updater=_||N}x.prototype.isReactComponent={},x.prototype.setState=function(a,u){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,u,"setState")},x.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function U(){}U.prototype=x.prototype;function M(a,u,_){this.props=a,this.context=u,this.refs=y,this.updater=_||N}var D=M.prototype=new U;D.constructor=M,I(D,x.prototype),D.isPureReactComponent=!0;var W=Array.isArray,A={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function ie(a,u,_,P,C,$){return _=$.ref,{$$typeof:n,type:a,key:u,ref:_!==void 0?_:null,props:$}}function ee(a,u){return ie(a.type,u,void 0,void 0,void 0,a.props)}function Y(a){return typeof a=="object"&&a!==null&&a.$$typeof===n}function ae(a){var u={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(_){return u[_]})}var Me=/\/+/g;function ye(a,u){return typeof a=="object"&&a!==null&&a.key!=null?ae(""+a.key):u.toString(36)}function he(){}function Le(a){switch(a.status){case"fulfilled":return a.value;case"rejected":throw a.reason;default:switch(typeof a.status=="string"?a.then(he,he):(a.status="pending",a.then(function(u){a.status==="pending"&&(a.status="fulfilled",a.value=u)},function(u){a.status==="pending"&&(a.status="rejected",a.reason=u)})),a.status){case"fulfilled":return a.value;case"rejected":throw a.reason}}throw a}function se(a,u,_,P,C){var $=typeof a;($==="undefined"||$==="boolean")&&(a=null);var T=!1;if(a===null)T=!0;else switch($){case"bigint":case"string":case"number":T=!0;break;case"object":switch(a.$$typeof){case n:case t:T=!0;break;case d:return T=a._init,se(T(a._payload),u,_,P,C)}}if(T)return C=C(a),T=P===""?"."+ye(a,0):P,W(C)?(_="",T!=null&&(_=T.replace(Me,"$&/")+"/"),se(C,u,_,"",function(Ee){return Ee})):C!=null&&(Y(C)&&(C=ee(C,_+(C.key==null||a&&a.key===C.key?"":(""+C.key).replace(Me,"$&/")+"/")+T)),u.push(C)),1;T=0;var Q=P===""?".":P+":";if(W(a))for(var B=0;B<a.length;B++)P=a[B],$=Q+ye(P,B),T+=se(P,u,_,$,C);else if(B=R(a),typeof B=="function")for(a=B.call(a),B=0;!(P=a.next()).done;)P=P.value,$=Q+ye(P,B++),T+=se(P,u,_,$,C);else if($==="object"){if(typeof a.then=="function")return se(Le(a),u,_,P,C);throw u=String(a),Error("Objects are not valid as a React child (found: "+(u==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":u)+"). If you meant to render a collection of children, use an array instead.")}return T}function V(a,u,_){if(a==null)return a;var P=[],C=0;return se(a,P,"","",function($){return u.call(_,$,C++)}),P}function ge(a){if(a._status===-1){var u=a._result;u=u(),u.then(function(_){(a._status===0||a._status===-1)&&(a._status=1,a._result=_)},function(_){(a._status===0||a._status===-1)&&(a._status=2,a._result=_)}),a._status===-1&&(a._status=0,a._result=u)}if(a._status===1)return a._result.default;throw a._result}var De=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var u=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(u))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function H(){}return O.Children={map:V,forEach:function(a,u,_){V(a,function(){u.apply(this,arguments)},_)},count:function(a){var u=0;return V(a,function(){u++}),u},toArray:function(a){return V(a,function(u){return u})||[]},only:function(a){if(!Y(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},O.Component=x,O.Fragment=r,O.Profiler=f,O.PureComponent=M,O.StrictMode=o,O.Suspense=E,O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,O.act=function(){throw Error("act(...) is not supported in production builds of React.")},O.cache=function(a){return function(){return a.apply(null,arguments)}},O.cloneElement=function(a,u,_){if(a==null)throw Error("The argument must be a React element, but you passed "+a+".");var P=I({},a.props),C=a.key,$=void 0;if(u!=null)for(T in u.ref!==void 0&&($=void 0),u.key!==void 0&&(C=""+u.key),u)!X.call(u,T)||T==="key"||T==="__self"||T==="__source"||T==="ref"&&u.ref===void 0||(P[T]=u[T]);var T=arguments.length-2;if(T===1)P.children=_;else if(1<T){for(var Q=Array(T),B=0;B<T;B++)Q[B]=arguments[B+2];P.children=Q}return ie(a.type,C,void 0,void 0,$,P)},O.createContext=function(a){return a={$$typeof:l,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null},a.Provider=a,a.Consumer={$$typeof:h,_context:a},a},O.createElement=function(a,u,_){var P,C={},$=null;if(u!=null)for(P in u.key!==void 0&&($=""+u.key),u)X.call(u,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(C[P]=u[P]);var T=arguments.length-2;if(T===1)C.children=_;else if(1<T){for(var Q=Array(T),B=0;B<T;B++)Q[B]=arguments[B+2];C.children=Q}if(a&&a.defaultProps)for(P in T=a.defaultProps,T)C[P]===void 0&&(C[P]=T[P]);return ie(a,$,void 0,void 0,null,C)},O.createRef=function(){return{current:null}},O.forwardRef=function(a){return{$$typeof:m,render:a}},O.isValidElement=Y,O.lazy=function(a){return{$$typeof:d,_payload:{_status:-1,_result:a},_init:ge}},O.memo=function(a,u){return{$$typeof:c,type:a,compare:u===void 0?null:u}},O.startTransition=function(a){var u=A.T,_={};A.T=_;try{var P=a(),C=A.S;C!==null&&C(_,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(H,De)}catch($){De($)}finally{A.T=u}},O.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},O.use=function(a){return A.H.use(a)},O.useActionState=function(a,u,_){return A.H.useActionState(a,u,_)},O.useCallback=function(a,u){return A.H.useCallback(a,u)},O.useContext=function(a){return A.H.useContext(a)},O.useDebugValue=function(){},O.useDeferredValue=function(a,u){return A.H.useDeferredValue(a,u)},O.useEffect=function(a,u){return A.H.useEffect(a,u)},O.useId=function(){return A.H.useId()},O.useImperativeHandle=function(a,u,_){return A.H.useImperativeHandle(a,u,_)},O.useInsertionEffect=function(a,u){return A.H.useInsertionEffect(a,u)},O.useLayoutEffect=function(a,u){return A.H.useLayoutEffect(a,u)},O.useMemo=function(a,u){return A.H.useMemo(a,u)},O.useOptimistic=function(a,u){return A.H.useOptimistic(a,u)},O.useReducer=function(a,u,_){return A.H.useReducer(a,u,_)},O.useRef=function(a){return A.H.useRef(a)},O.useState=function(a){return A.H.useState(a)},O.useSyncExternalStore=function(a,u,_){return A.H.useSyncExternalStore(a,u,_)},O.useTransition=function(){return A.H.useTransition()},O.version="19.0.0",O}var ve={exports:{}};/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ve.exports;var Ut;function qn(){return Ut||(Ut=1,function(n,t){process.env.NODE_ENV!=="production"&&function(){function r(e,i){Object.defineProperty(h.prototype,e,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",i[0],i[1])}})}function o(e){return e===null||typeof e!="object"?null:(e=Lt&&e[Lt]||e["@@iterator"],typeof e=="function"?e:null)}function f(e,i){e=(e=e.constructor)&&(e.displayName||e.name)||"ReactClass";var s=e+"."+i;Dt[s]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",i,e),Dt[s]=!0)}function h(e,i,s){this.props=e,this.context=i,this.refs=st,this.updater=s||Wt}function l(){}function m(e,i,s){this.props=e,this.context=i,this.refs=st,this.updater=s||Wt}function E(e){return""+e}function c(e){try{E(e);var i=!1}catch{i=!0}if(i){i=console;var s=i.error,p=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s.call(i,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",p),E(e)}}function d(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===er?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case Q:return"Portal";case ot:return"Profiler";case Ee:return"StrictMode";case Be:return"Suspense";case at:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case it:return(e.displayName||"Context")+".Provider";case We:return(e._context.displayName||"Context")+".Consumer";case $e:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case be:return i=e.displayName||null,i!==null?i:d(e.type)||"Memo";case _e:i=e._payload,e=e._init;try{return d(e(i))}catch{}}return null}function b(e){return typeof e=="string"||typeof e=="function"||e===B||e===ot||e===Ee||e===Be||e===at||e===Zn||typeof e=="object"&&e!==null&&(e.$$typeof===_e||e.$$typeof===be||e.$$typeof===it||e.$$typeof===We||e.$$typeof===$e||e.$$typeof===tr||e.getModuleId!==void 0)}function R(){}function N(){if(Pe===0){$t=console.log,Bt=console.info,jt=console.warn,Ht=console.error,Kt=console.group,zt=console.groupCollapsed,Yt=console.groupEnd;var e={configurable:!0,enumerable:!0,value:R,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Pe++}function I(){if(Pe--,Pe===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:te({},e,{value:$t}),info:te({},e,{value:Bt}),warn:te({},e,{value:jt}),error:te({},e,{value:Ht}),group:te({},e,{value:Kt}),groupCollapsed:te({},e,{value:zt}),groupEnd:te({},e,{value:Yt})})}0>Pe&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function y(e){if(ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ct=i&&i[1]||"",Gt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+Gt}function x(e,i){if(!e||lt)return"";var s=ut.get(e);if(s!==void 0)return s;lt=!0,s=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var p=null;p=S.H,S.H=null,N();try{var g={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(ne){var Fe=ne}Reflect.construct(e,[],J)}else{try{J.call()}catch(ne){Fe=ne}e.call(J.prototype)}}else{try{throw Error()}catch(ne){Fe=ne}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(ne){if(ne&&Fe&&typeof ne.stack=="string")return[ne.stack,Fe.stack]}return[null,null]}};g.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var v=Object.getOwnPropertyDescriptor(g.DetermineComponentFrameRoot,"name");v&&v.configurable&&Object.defineProperty(g.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var w=g.DetermineComponentFrameRoot(),L=w[0],k=w[1];if(L&&k){var j=L.split(`
`),G=k.split(`
`);for(w=v=0;v<j.length&&!j[v].includes("DetermineComponentFrameRoot");)v++;for(;w<G.length&&!G[w].includes("DetermineComponentFrameRoot");)w++;if(v===j.length||w===G.length)for(v=j.length-1,w=G.length-1;1<=v&&0<=w&&j[v]!==G[w];)w--;for(;1<=v&&0<=w;v--,w--)if(j[v]!==G[w]){if(v!==1||w!==1)do if(v--,w--,0>w||j[v]!==G[w]){var fe=`
`+j[v].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),typeof e=="function"&&ut.set(e,fe),fe}while(1<=v&&0<=w);break}}}finally{lt=!1,S.H=p,I(),Error.prepareStackTrace=s}return j=(j=e?e.displayName||e.name:"")?y(j):"",typeof e=="function"&&ut.set(e,j),j}function U(e){if(e==null)return"";if(typeof e=="function"){var i=e.prototype;return x(e,!(!i||!i.isReactComponent))}if(typeof e=="string")return y(e);switch(e){case Be:return y("Suspense");case at:return y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case $e:return e=x(e.render,!1),e;case be:return U(e.type);case _e:i=e._payload,e=e._init;try{return U(e(i))}catch{}}return""}function M(){var e=S.A;return e===null?null:e.getOwner()}function D(e){if(Ke.call(e,"key")){var i=Object.getOwnPropertyDescriptor(e,"key").get;if(i&&i.isReactWarning)return!1}return e.key!==void 0}function W(e,i){function s(){Ft||(Ft=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",i))}s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}function A(){var e=d(this.type);return Xt[e]||(Xt[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function X(e,i,s,p,g,v){return s=v.ref,e={$$typeof:T,type:e,key:i,props:v,_owner:g},(s!==void 0?s:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:A}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function ie(e,i){return i=X(e.type,i,void 0,void 0,e._owner,e.props),i._store.validated=e._store.validated,i}function ee(e,i){if(typeof e=="object"&&e&&e.$$typeof!==nr){if(He(e))for(var s=0;s<e.length;s++){var p=e[s];Y(p)&&ae(p,i)}else if(Y(e))e._store&&(e._store.validated=1);else if(s=o(e),typeof s=="function"&&s!==e.entries&&(s=s.call(e),s!==e))for(;!(e=s.next()).done;)Y(e.value)&&ae(e.value,i)}}function Y(e){return typeof e=="object"&&e!==null&&e.$$typeof===T}function ae(e,i){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,i=Me(i),!Vt[i])){Vt[i]=!0;var s="";e&&e._owner!=null&&e._owner!==M()&&(s=null,typeof e._owner.tag=="number"?s=d(e._owner.type):typeof e._owner.name=="string"&&(s=e._owner.name),s=" It was passed a child from "+s+".");var p=S.getCurrentStack;S.getCurrentStack=function(){var g=U(e.type);return p&&(g+=p()||""),g},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',i,s),S.getCurrentStack=p}}function Me(e){var i="",s=M();return s&&(s=d(s.type))&&(i=`

Check the render method of \``+s+"`."),i||(e=d(e))&&(i=`

Check the top-level render call using <`+e+">."),i}function ye(e){var i={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return i[s]})}function he(e,i){return typeof e=="object"&&e!==null&&e.key!=null?(c(e.key),ye(""+e.key)):i.toString(36)}function Le(){}function se(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Le,Le):(e.status="pending",e.then(function(i){e.status==="pending"&&(e.status="fulfilled",e.value=i)},function(i){e.status==="pending"&&(e.status="rejected",e.reason=i)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function V(e,i,s,p,g){var v=typeof e;(v==="undefined"||v==="boolean")&&(e=null);var w=!1;if(e===null)w=!0;else switch(v){case"bigint":case"string":case"number":w=!0;break;case"object":switch(e.$$typeof){case T:case Q:w=!0;break;case _e:return w=e._init,V(w(e._payload),i,s,p,g)}}if(w){w=e,g=g(w);var L=p===""?"."+he(w,0):p;return He(g)?(s="",L!=null&&(s=L.replace(Jt,"$&/")+"/"),V(g,i,s,"",function(j){return j})):g!=null&&(Y(g)&&(g.key!=null&&(w&&w.key===g.key||c(g.key)),s=ie(g,s+(g.key==null||w&&w.key===g.key?"":(""+g.key).replace(Jt,"$&/")+"/")+L),p!==""&&w!=null&&Y(w)&&w.key==null&&w._store&&!w._store.validated&&(s._store.validated=2),g=s),i.push(g)),1}if(w=0,L=p===""?".":p+":",He(e))for(var k=0;k<e.length;k++)p=e[k],v=L+he(p,k),w+=V(p,i,s,v,g);else if(k=o(e),typeof k=="function")for(k===e.entries&&(Qt||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Qt=!0),e=k.call(e),k=0;!(p=e.next()).done;)p=p.value,v=L+he(p,k++),w+=V(p,i,s,v,g);else if(v==="object"){if(typeof e.then=="function")return V(se(e),i,s,p,g);throw i=String(e),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.")}return w}function ge(e,i,s){if(e==null)return e;var p=[],g=0;return V(e,p,"","",function(v){return i.call(s,v,g++)}),p}function De(e){if(e._status===-1){var i=e._result;i=i(),i.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return i=e._result,i===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,i),"default"in i||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,i),i.default;throw e._result}function H(){var e=S.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function a(){}function u(e){if(ze===null)try{var i=("require"+Math.random()).slice(0,7);ze=(n&&n[i]).call(n,"timers").setImmediate}catch{ze=function(p){en===!1&&(en=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var g=new MessageChannel;g.port1.onmessage=p,g.port2.postMessage(void 0)}}return ze(e)}function _(e){return 1<e.length&&typeof AggregateError=="function"?new AggregateError(e):e[0]}function P(e,i){i!==Ye-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ye=i}function C(e,i,s){var p=S.actQueue;if(p!==null)if(p.length!==0)try{$(p),u(function(){return C(e,i,s)});return}catch(g){S.thrownErrors.push(g)}else S.actQueue=null;0<S.thrownErrors.length?(p=_(S.thrownErrors),S.thrownErrors.length=0,s(p)):i(e)}function $(e){if(!ft){ft=!0;var i=0;try{for(;i<e.length;i++){var s=e[i];do{S.didUsePromise=!1;var p=s(!1);if(p!==null){if(S.didUsePromise){e[i]=s,e.splice(0,i);return}s=p}else break}while(!0)}e.length=0}catch(g){e.splice(0,i+1),S.thrownErrors.push(g)}finally{ft=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var T=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),We=Symbol.for("react.consumer"),it=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),be=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Zn=Symbol.for("react.offscreen"),Lt=Symbol.iterator,Dt={},Wt={isMounted:function(){return!1},enqueueForceUpdate:function(e){f(e,"forceUpdate")},enqueueReplaceState:function(e){f(e,"replaceState")},enqueueSetState:function(e){f(e,"setState")}},te=Object.assign,st={};Object.freeze(st),h.prototype.isReactComponent={},h.prototype.setState=function(e,i){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var ue={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},je;for(je in ue)ue.hasOwnProperty(je)&&r(je,ue[je]);l.prototype=h.prototype,ue=m.prototype=new l,ue.constructor=m,te(ue,h.prototype),ue.isPureReactComponent=!0;var He=Array.isArray,er=Symbol.for("react.client.reference"),S={H:null,A:null,T:null,S:null,actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null},Ke=Object.prototype.hasOwnProperty,tr=Symbol.for("react.client.reference"),Pe=0,$t,Bt,jt,Ht,Kt,zt,Yt;R.__reactDisabledLog=!0;var ct,Gt,lt=!1,ut=new(typeof WeakMap=="function"?WeakMap:Map),nr=Symbol.for("react.client.reference"),Ft,qt,Xt={},Vt={},Qt=!1,Jt=/\/+/g,Zt=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},en=!1,ze=null,Ye=0,Ge=!1,ft=!1,tn=typeof queueMicrotask=="function"?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:u;t.Children={map:ge,forEach:function(e,i,s){ge(e,function(){i.apply(this,arguments)},s)},count:function(e){var i=0;return ge(e,function(){i++}),i},toArray:function(e){return ge(e,function(i){return i})||[]},only:function(e){if(!Y(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=B,t.Profiler=ot,t.PureComponent=m,t.StrictMode=Ee,t.Suspense=Be,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.act=function(e){var i=S.actQueue,s=Ye;Ye++;var p=S.actQueue=i!==null?i:[],g=!1;try{var v=e()}catch(k){S.thrownErrors.push(k)}if(0<S.thrownErrors.length)throw P(i,s),e=_(S.thrownErrors),S.thrownErrors.length=0,e;if(v!==null&&typeof v=="object"&&typeof v.then=="function"){var w=v;return tn(function(){g||Ge||(Ge=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(k,j){g=!0,w.then(function(G){if(P(i,s),s===0){try{$(p),u(function(){return C(G,k,j)})}catch(J){S.thrownErrors.push(J)}if(0<S.thrownErrors.length){var fe=_(S.thrownErrors);S.thrownErrors.length=0,j(fe)}}else k(G)},function(G){P(i,s),0<S.thrownErrors.length&&(G=_(S.thrownErrors),S.thrownErrors.length=0),j(G)})}}}var L=v;if(P(i,s),s===0&&($(p),p.length!==0&&tn(function(){g||Ge||(Ge=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),S.actQueue=null),0<S.thrownErrors.length)throw e=_(S.thrownErrors),S.thrownErrors.length=0,e;return{then:function(k,j){g=!0,s===0?(S.actQueue=p,u(function(){return C(L,k,j)})):k(L)}}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,i,s){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var p=te({},e.props),g=e.key,v=e._owner;if(i!=null){var w;e:{if(Ke.call(i,"ref")&&(w=Object.getOwnPropertyDescriptor(i,"ref").get)&&w.isReactWarning){w=!1;break e}w=i.ref!==void 0}w&&(v=M()),D(i)&&(c(i.key),g=""+i.key);for(L in i)!Ke.call(i,L)||L==="key"||L==="__self"||L==="__source"||L==="ref"&&i.ref===void 0||(p[L]=i[L])}var L=arguments.length-2;if(L===1)p.children=s;else if(1<L){w=Array(L);for(var k=0;k<L;k++)w[k]=arguments[k+2];p.children=w}for(p=X(e.type,g,void 0,void 0,v,p),g=2;g<arguments.length;g++)ee(arguments[g],p.type);return p},t.createContext=function(e){return e={$$typeof:it,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:We,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},t.createElement=function(e,i,s){if(b(e))for(var p=2;p<arguments.length;p++)ee(arguments[p],e);else{if(p="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null)var g="null";else He(e)?g="array":e!==void 0&&e.$$typeof===T?(g="<"+(d(e.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e;console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,p)}var v;if(p={},g=null,i!=null)for(v in qt||!("__self"in i)||"key"in i||(qt=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),D(i)&&(c(i.key),g=""+i.key),i)Ke.call(i,v)&&v!=="key"&&v!=="__self"&&v!=="__source"&&(p[v]=i[v]);var w=arguments.length-2;if(w===1)p.children=s;else if(1<w){for(var L=Array(w),k=0;k<w;k++)L[k]=arguments[k+2];Object.freeze&&Object.freeze(L),p.children=L}if(e&&e.defaultProps)for(v in w=e.defaultProps,w)p[v]===void 0&&(p[v]=w[v]);return g&&W(p,typeof e=="function"?e.displayName||e.name||"Unknown":e),X(e,g,void 0,void 0,M(),p)},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){e!=null&&e.$$typeof===be?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?console.error("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&e.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var i={$$typeof:$e,render:e},s;return Object.defineProperty(i,"displayName",{enumerable:!1,configurable:!0,get:function(){return s},set:function(p){s=p,e.name||e.displayName||(Object.defineProperty(e,"name",{value:p}),e.displayName=p)}}),i},t.isValidElement=Y,t.lazy=function(e){return{$$typeof:_e,_payload:{_status:-1,_result:e},_init:De}},t.memo=function(e,i){b(e)||console.error("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e),i={$$typeof:be,type:e,compare:i===void 0?null:i};var s;return Object.defineProperty(i,"displayName",{enumerable:!1,configurable:!0,get:function(){return s},set:function(p){s=p,e.name||e.displayName||(Object.defineProperty(e,"name",{value:p}),e.displayName=p)}}),i},t.startTransition=function(e){var i=S.T,s={};S.T=s,s._updatedFibers=new Set;try{var p=e(),g=S.S;g!==null&&g(s,p),typeof p=="object"&&p!==null&&typeof p.then=="function"&&p.then(a,Zt)}catch(v){Zt(v)}finally{i===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),S.T=i}},t.unstable_useCacheRefresh=function(){return H().useCacheRefresh()},t.use=function(e){return H().use(e)},t.useActionState=function(e,i,s){return H().useActionState(e,i,s)},t.useCallback=function(e,i){return H().useCallback(e,i)},t.useContext=function(e){var i=H();return e.$$typeof===We&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),i.useContext(e)},t.useDebugValue=function(e,i){return H().useDebugValue(e,i)},t.useDeferredValue=function(e,i){return H().useDeferredValue(e,i)},t.useEffect=function(e,i){return H().useEffect(e,i)},t.useId=function(){return H().useId()},t.useImperativeHandle=function(e,i,s){return H().useImperativeHandle(e,i,s)},t.useInsertionEffect=function(e,i){return H().useInsertionEffect(e,i)},t.useLayoutEffect=function(e,i){return H().useLayoutEffect(e,i)},t.useMemo=function(e,i){return H().useMemo(e,i)},t.useOptimistic=function(e,i){return H().useOptimistic(e,i)},t.useReducer=function(e,i,s){return H().useReducer(e,i,s)},t.useRef=function(e){return H().useRef(e)},t.useState=function(e){return H().useState(e)},t.useSyncExternalStore=function(e,i,s){return H().useSyncExternalStore(e,i,s)},t.useTransition=function(){return H().useTransition()},t.version="19.0.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()}(ve,ve.exports)),ve.exports}var Mt;function Xn(){return Mt||(Mt=1,process.env.NODE_ENV==="production"?Ue.exports=Fn():Ue.exports=qn()),Ue.exports}var pe=Xn();const Vn=mn(pe),Qn=()=>{typeof window<"u"&&Promise.resolve().then(()=>Gn)},Jn=pe.forwardRef((n,t)=>{const r=pe.useRef(null);pe.useEffect(()=>{Qn()},[]),pe.useImperativeHandle(t,()=>({connectWallet:async c=>{if(r.current)return r.current.connectWallet(c)},disconnectWallet:()=>{r.current&&r.current.disconnectWallet()},getWalletInfo:()=>{if(r.current){const c=r.current.walletManager||{};return{address:c.walletAddress||null,provider:c.walletProvider||null,connected:c.connected||!1}}return{address:null,provider:null,connected:!1}}})),pe.useEffect(()=>{const c=r.current;if(!c)return;const d=R=>{const N=R;n.onConnect&&N.detail&&n.onConnect(N.detail.provider,N.detail.address)},b=()=>{n.onDisconnect&&n.onDisconnect()};return c.addEventListener("wallet-connected",d),c.addEventListener("wallet-disconnected",b),()=>{c.removeEventListener("wallet-connected",d),c.removeEventListener("wallet-disconnected",b)}},[n.onConnect,n.onDisconnect]);const{className:o,style:f,onConnect:h,onDisconnect:l,...m}=n,E={};for(const[c,d]of Object.entries(m))typeof d=="boolean"?E[c]=d?"true":"false":d!=null&&(E[c]=String(d));return Vn.createElement("bitcoin-connect",{ref:r,className:o,style:f,...E})});Jn.displayName="BitcoinConnectButton",K.BitcoinConnectButton=rt,K.WalletManager=xt,K.btc_logo=nt,K.styles=kt,K.useWallet=Nt,K.walletManagerStore=Ie,K.walletProviders=oe,Object.defineProperty(K,Symbol.toStringTag,{value:"Module"})});
