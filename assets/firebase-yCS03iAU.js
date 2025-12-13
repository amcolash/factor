import{o as gf,_ as wo}from"./vendor-D4Wc5AAw.js";var _u={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_f=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],u=r[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,u=a?r[i+1]:0,c=i+2<r.length,d=c?r[i+2]:0,f=s>>2,p=(s&3)<<4|u>>4;let T=(u&15)<<2|d>>6,P=d&63;c||(P=64,a||(T=64)),n.push(t[f],t[p],t[T],t[P])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Wc(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_f(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||d==null||p==null)throw new yf;const T=s<<2|u>>4;if(n.push(T),d!==64){const P=u<<4&240|d>>2;if(n.push(P),p!==64){const V=d<<6&192|p;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(r){const e=Wc(r);return Qc.encodeByteArray(e,!0)},Jc=function(r){return If(r).replace(/\./g,"")},Xc=function(r){try{return Qc.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=()=>vf().__FIREBASE_DEFAULTS__,Ef=()=>{if(typeof process>"u"||typeof _u>"u")return;const r=_u.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wf=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Xc(r[1]);return e&&JSON.parse(e)},Qi=()=>{try{return Tf()||Ef()||wf()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Af=r=>{var e,t;return(t=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Yc=()=>{var r;return(r=Qi())===null||r===void 0?void 0:r.config},Zc=r=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Pf(){var r;const e=(r=Qi())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Df(){const r=de();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function el(){return!Pf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tl(){try{return typeof indexedDB=="object"}catch{return!1}}function kf(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="FirebaseError";class ot extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=xf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Nf(s,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new ot(i,u,n)}}function Nf(r,e){return r.replace(Of,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Of=/\{\$([^}]+)}/g;function Mf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Kt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(yu(s)&&yu(a)){if(!Kt(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function yu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Lf(r,e){const t=new Ff(r,e);return t.subscribe.bind(t)}class Ff{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Uf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=js),i.error===void 0&&(i.error=js),i.complete===void 0&&(i.complete=js);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uf(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function js(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r){return r&&r._delegate?r._delegate:r}class $t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Rf;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zf(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:qf(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(r){return r===xt?void 0:r}function zf(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const Gf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Kf=H.INFO,$f={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Hf=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=$f[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ao{constructor(e){this.name=e,this._logLevel=Kf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qf(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Qf(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xs="@firebase/app",Iu="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new Ao("@firebase/app"),Jf="@firebase/app-compat",Xf="@firebase/analytics-compat",Yf="@firebase/analytics",Zf="@firebase/app-check-compat",em="@firebase/app-check",tm="@firebase/auth",nm="@firebase/auth-compat",rm="@firebase/database",im="@firebase/data-connect",sm="@firebase/database-compat",om="@firebase/functions",am="@firebase/functions-compat",um="@firebase/installations",cm="@firebase/installations-compat",lm="@firebase/messaging",hm="@firebase/messaging-compat",dm="@firebase/performance",fm="@firebase/performance-compat",mm="@firebase/remote-config",pm="@firebase/remote-config-compat",gm="@firebase/storage",_m="@firebase/storage-compat",ym="@firebase/firestore",Im="@firebase/vertexai",vm="@firebase/firestore-compat",Tm="firebase",Em="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]",wm={[Xs]:"fire-core",[Jf]:"fire-core-compat",[Yf]:"fire-analytics",[Xf]:"fire-analytics-compat",[em]:"fire-app-check",[Zf]:"fire-app-check-compat",[tm]:"fire-auth",[nm]:"fire-auth-compat",[rm]:"fire-rtdb",[im]:"fire-data-connect",[sm]:"fire-rtdb-compat",[om]:"fire-fn",[am]:"fire-fn-compat",[um]:"fire-iid",[cm]:"fire-iid-compat",[lm]:"fire-fcm",[hm]:"fire-fcm-compat",[dm]:"fire-perf",[fm]:"fire-perf-compat",[mm]:"fire-rc",[pm]:"fire-rc-compat",[gm]:"fire-gcs",[_m]:"fire-gcs-compat",[ym]:"fire-fst",[vm]:"fire-fst-compat",[Im]:"fire-vertex","fire-js":"fire-js",[Tm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,Am=new Map,Ys=new Map;function vu(r,e){try{r.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function wn(r){const e=r.name;if(Ys.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,r);for(const t of Vi.values())vu(t,r);for(const t of Am.values())vu(t,r);return!0}function Ji(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Rm(r,e,t=Ci){Ji(r,e).clearInstance(t)}function Je(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Vr("app","Firebase",bm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=Em;function Sm(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});if(t||(t=Yc()),!t)throw Et.create("no-options");const s=Vi.get(i);if(s){if(Kt(t,s.options)&&Kt(n,s.config))return s;throw Et.create("duplicate-app",{appName:i})}const a=new jf(i);for(const c of Ys.values())a.addComponent(c);const u=new Pm(t,n,a);return Vi.set(i,u),u}function Cm(r=Ci){const e=Vi.get(r);if(!e&&r===Ci&&Yc())return Sm();if(!e)throw Et.create("no-app",{appName:r});return e}function Bt(r,e,t){var n;let i=(n=wm[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(u.join(" "));return}wn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebase-heartbeat-database",Dm=1,_r="firebase-heartbeat-store";let Gs=null;function nl(){return Gs||(Gs=gf(Vm,Dm,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(r=>{throw Et.create("idb-open",{originalErrorMessage:r.message})})),Gs}async function km(r){try{const t=(await nl()).transaction(_r),n=await t.objectStore(_r).get(rl(r));return await t.done,n}catch(e){if(e instanceof ot)nt.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(t.message)}}}async function Tu(r,e){try{const n=(await nl()).transaction(_r,"readwrite");await n.objectStore(_r).put(e,rl(r)),await n.done}catch(t){if(t instanceof ot)nt.warn(t.message);else{const n=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nt.warn(n.message)}}}function rl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=1024,Nm=30*24*60*60*1e3;class Om{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lm(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Eu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Nm}),this._storage.overwrite(this._heartbeatsCache))}catch(n){nt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Eu(),{heartbeatsToSend:n,unsentEntries:i}=Mm(this._heartbeatsCache.heartbeats),s=Jc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nt.warn(t),""}}}function Eu(){return new Date().toISOString().substring(0,10)}function Mm(r,e=xm){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),wu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Lm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tl()?kf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await km(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wu(r){return Jc(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(r){wn(new $t("platform-logger",e=>new Wf(e),"PRIVATE")),wn(new $t("heartbeat",e=>new Om(e),"PRIVATE")),Bt(Xs,Iu,r),Bt(Xs,Iu,"esm2017"),Bt("fire-js","")}Fm("");var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,il;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(v,E,R){for(var _=Array(arguments.length-2),He=2;He<arguments.length;He++)_[He-2]=arguments[He];return g.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,y){y||(y=0);var v=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)v[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)v[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],E=I.g[2];var R=I.g[3],_=g+(R^y&(E^R))+v[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+v[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+v[2]+606105819&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+v[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+v[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+v[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+v[6]+2821735955&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+v[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+v[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+v[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+v[10]+4294925233&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+v[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+v[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+v[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+v[14]+2792965006&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+v[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^R&(y^E))+v[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+v[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+v[11]+643717713&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+v[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+v[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+v[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+v[15]+3634488961&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+v[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+v[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+v[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+v[3]+4107603335&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+v[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+v[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+v[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+v[7]+1735328473&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+v[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^R)+v[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+v[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+v[11]+1839030562&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+v[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+v[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+v[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+v[7]+4139469664&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+v[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+v[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+v[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+v[3]+3572445317&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+v[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+v[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+v[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+v[15]+530742520&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+v[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~R))+v[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+v[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+v[14]+2878612391&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+v[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+v[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+v[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+v[10]+4293915773&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+v[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+v[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+v[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+v[6]+2734768916&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+v[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+v[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+v[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+v[2]+718787259&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+R&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,v=this.B,E=this.h,R=0;R<g;){if(E==0)for(;R<=y;)i(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<g;)if(v[E++]=I.charCodeAt(R++),E==this.blockSize){i(this,v),E=0;break}}else for(;R<g;)if(v[E++]=I[R++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var v=0;32>v;v+=8)I[y++]=this.g[g]>>>v&255;return I};function s(I,g){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],v=!0,E=I.length-1;0<=E;E--){var R=I[E]|0;v&&R==g||(y[E]=R,v=!1)}this.g=y}var u={};function c(I){return-128<=I&&128>I?s(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(d(-I));for(var g=[],y=1,v=0;I>=y;v++)g[v]=I/y|0,y*=4294967296;return new a(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),v=p,E=0;E<I.length;E+=8){var R=Math.min(8,I.length-E),_=parseInt(I.substring(E,E+R),g);8>R?(R=d(Math.pow(g,R)),v=v.j(R).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var p=c(0),T=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(x(this))return-D(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var v=this.i(y);I+=(0<=v?v:4294967296+v)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(x(this))return"-"+D(this).toString(I);for(var g=d(Math.pow(I,6)),y=this,v="";;){var E=Q(y,g).g;y=G(y,E.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=E,V(y))return R+v;for(;6>R.length;)R="0"+R;v=R+v}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function x(I){return I.h==-1}r.l=function(I){return I=G(this,I),x(I)?-1:V(I)?0:1};function D(I){for(var g=I.g.length,y=[],v=0;v<g;v++)y[v]=~I.g[v];return new a(y,~I.h).add(T)}r.abs=function(){return x(this)?D(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],v=0,E=0;E<=g;E++){var R=v+(this.i(E)&65535)+(I.i(E)&65535),_=(R>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);v=_>>>16,R&=65535,_&=65535,y[E]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(I,g){return I.add(D(g))}r.j=function(I){if(V(this)||V(I))return p;if(x(this))return x(I)?D(this).j(D(I)):D(D(this).j(I));if(x(I))return D(this.j(D(I)));if(0>this.l(P)&&0>I.l(P))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<I.g.length;E++){var R=this.i(v)>>>16,_=this.i(v)&65535,He=I.i(E)>>>16,Fn=I.i(E)&65535;y[2*v+2*E]+=_*Fn,B(y,2*v+2*E),y[2*v+2*E+1]+=R*Fn,B(y,2*v+2*E+1),y[2*v+2*E+1]+=_*He,B(y,2*v+2*E+1),y[2*v+2*E+2]+=R*He,B(y,2*v+2*E+2)}for(v=0;v<g;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=g;v<2*g;v++)y[v]=0;return new a(y,0)};function B(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function F(I,g){this.g=I,this.h=g}function Q(I,g){if(V(g))throw Error("division by zero");if(V(I))return new F(p,p);if(x(I))return g=Q(D(I),g),new F(D(g.g),D(g.h));if(x(g))return g=Q(I,D(g)),new F(D(g.g),g.h);if(30<I.g.length){if(x(I)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=T,v=g;0>=v.l(I);)y=Y(y),v=Y(v);var E=$(y,1),R=$(v,1);for(v=$(v,2),y=$(y,2);!V(v);){var _=R.add(v);0>=_.l(I)&&(E=E.add(y),R=_),v=$(v,1),y=$(y,1)}return g=G(I,E.j(g)),new F(E,g)}for(E=p;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),R=d(y),_=R.j(g);x(_)||0<_.l(I);)y-=v,R=d(y),_=R.j(g);V(R)&&(R=T),E=E.add(R),I=G(I,_)}return new F(E,I)}r.A=function(I){return Q(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)&I.i(v);return new a(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)|I.i(v);return new a(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],v=0;v<g;v++)y[v]=this.i(v)^I.i(v);return new a(y,this.h^I.h)};function Y(I){for(var g=I.g.length+1,y=[],v=0;v<g;v++)y[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(y,I.h)}function $(I,g){var y=g>>5;g%=32;for(var v=I.g.length-y,E=[],R=0;R<v;R++)E[R]=0<g?I.i(R+y)>>>g|I.i(R+y+1)<<32-g:I.i(R+y);return new a(E,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,il=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,qt=a}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});var ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sl,or,ol,pi,Zs,al,ul,cl;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ai=="object"&&ai];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function i(o,l){if(l)e:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break e;h=h[A]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var b=h++;return{value:l(b,o[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,h){return o.call.apply(o.bind,arguments)}function p(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,T.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,b){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return l.prototype[A].apply(m,k)}}function x(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function D(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(c(m)){const A=o.length||0,b=m.length||0;o.length=A+b;for(let k=0;k<b;k++)o[A+k]=m[k]}else o.push(m)}}class G{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var Y=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function $(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function E(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Is;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class He{constructor(){this.h=this.g=null}add(l,h){const m=Fn.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Fn=new G(()=>new Nd,o=>o.reset());class Nd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Un,Bn=!1,Is=new He,_a=()=>{const o=u.Promise.resolve(void 0);Un=()=>{o.then(Od)}};var Od=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var l=Fn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Bn=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Md=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o}();function qn(o,l){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Y){e:{try{Q(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ld[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qn.aa.h.call(this)}}V(qn,ye);var Ld={2:"touch",3:"pen",4:"mouse"};qn.prototype.h=function(){qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),Fd=0;function Ud(o,l,h,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=A,this.key=++Fd,this.da=this.fa=!1}function jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gr(o){this.src=o,this.g={},this.h=0}Gr.prototype.add=function(o,l,h,m,A){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var k=Ts(o,l,m,A);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new Ud(l,this.src,b,!!m,A),l.fa=h,o.push(l)),l};function vs(o,l){var h=l.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,l,void 0),b;(b=0<=A)&&Array.prototype.splice.call(m,A,1),b&&(jr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ts(o,l,h,m){for(var A=0;A<o.length;++A){var b=o[A];if(!b.da&&b.listener==l&&b.capture==!!h&&b.ha==m)return A}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),ws={};function ya(o,l,h,m,A){if(Array.isArray(l)){for(var b=0;b<l.length;b++)ya(o,l[b],h,m,A);return null}return h=Ta(h),o&&o[zr]?o.K(l,h,d(m)?!!m.capture:!1,A):Bd(o,l,h,!1,m,A)}function Bd(o,l,h,m,A,b){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,te=Rs(o);if(te||(o[Es]=te=new Gr(o)),h=te.add(l,h,m,k,b),h.proxy)return h;if(m=qd(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Md||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(va(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qd(){function o(h){return l.call(o.src,o.listener,h)}const l=zd;return o}function Ia(o,l,h,m,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)Ia(o,l[b],h,m,A);else m=d(m)?!!m.capture:!!m,h=Ta(h),o&&o[zr]?(o=o.i,l=String(l).toString(),l in o.g&&(b=o.g[l],h=Ts(b,h,m,A),-1<h&&(jr(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[l],o.h--)))):o&&(o=Rs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ts(l,h,m,A)),(h=-1<o?l[o]:null)&&As(h))}function As(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[zr])vs(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent(va(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Rs(l))?(vs(h,o),h.h==0&&(h.src=null,l[Es]=null)):jr(o)}}}function va(o){return o in ws?ws[o]:ws[o]="on"+o}function zd(o,l){if(o.da)o=!0;else{l=new qn(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&As(o),o=h.call(m,l)}return o}function Rs(o){return o=o[Es],o instanceof Gr?o:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ta(o){return typeof o=="function"?o:(o[bs]||(o[bs]=function(l){return o.handleEvent(l)}),o[bs])}function Ie(){ct.call(this),this.i=new Gr(this),this.M=this,this.F=null}V(Ie,ct),Ie.prototype[zr]=!0,Ie.prototype.removeEventListener=function(o,l,h,m){Ia(this,o,l,h,m)};function be(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new ye(l,o);else if(l instanceof ye)l.target=l.target||o;else{var A=l;l=new ye(m,o),v(l,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var k=l.g=h[b];A=Kr(k,m,!0,l)&&A}if(k=l.g=o,A=Kr(k,m,!0,l)&&A,A=Kr(k,m,!1,l)&&A,h)for(b=0;b<h.length;b++)k=l.g=h[b],A=Kr(k,m,!1,l)&&A}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)jr(h[m]);delete o.g[l],o.h--}}this.F=null},Ie.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},Ie.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function Kr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,b=0;b<l.length;++b){var k=l[b];if(k&&!k.da&&k.capture==h){var te=k.listener,pe=k.ha||k.src;k.fa&&vs(o.i,k),A=te.call(pe,m)!==!1&&A}}return A&&!m.defaultPrevented}function Ea(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function wa(o){o.g=Ea(()=>{o.g=null,o.i&&(o.i=!1,wa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class jd extends ct{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:wa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(o){ct.call(this),this.h=o,this.g={}}V(zn,ct);var Aa=[];function Ra(o){$(o.g,function(l,h){this.g.hasOwnProperty(h)&&As(l)},o),o.g={}}zn.prototype.N=function(){zn.aa.N.call(this),Ra(this)},zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=u.JSON.stringify,Gd=u.JSON.parse,Kd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ss(){}Ss.prototype.h=null;function ba(o){return o.h||(o.h=o.i())}function Pa(){}var jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cs(){ye.call(this,"d")}V(Cs,ye);function Vs(){ye.call(this,"c")}V(Vs,ye);var St={},Sa=null;function $r(){return Sa=Sa||new Ie}St.La="serverreachability";function Ca(o){ye.call(this,St.La,o)}V(Ca,ye);function Gn(o){const l=$r();be(l,new Ca(l))}St.STAT_EVENT="statevent";function Va(o,l){ye.call(this,St.STAT_EVENT,o),this.stat=l}V(Va,ye);function Pe(o){const l=$r();be(l,new Va(l,o))}St.Ma="timingevent";function Da(o,l){ye.call(this,St.Ma,o),this.size=l}V(Da,ye);function Kn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function $d(o,l,h,m,A,b){o.info(function(){if(o.g)if(b)for(var k="",te=b.split("&"),pe=0;pe<te.length;pe++){var X=te[pe].split("=");if(1<X.length){var ve=X[0];X=X[1];var Te=ve.split("_");k=2<=Te.length&&Te[1]=="type"?k+(ve+"="+X+"&"):k+(ve+"=redacted&")}}else k=null;else k=b;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function Hd(o,l,h,m,A,b,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+h+`
`+b+" "+k})}function on(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Qd(o,h)+(m?" "+m:"")})}function Wd(o,l){o.info(function(){return"TIMEOUT: "+l})}$n.prototype.info=function(){};function Qd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Ps(h)}catch{return l}}var Hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ka={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ds;function Wr(){}V(Wr,Ss),Wr.prototype.g=function(){return new XMLHttpRequest},Wr.prototype.i=function(){return{}},Ds=new Wr;function lt(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var Na={},ks={};function xs(o,l,h){o.L=1,o.v=Yr(We(l)),o.m=h,o.P=!0,Oa(o,null)}function Oa(o,l){o.F=Date.now(),Qr(o),o.A=We(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Qa(h.i,"t",m),o.C=0,h=o.j.J,o.h=new xa,o.g=fu(o.j,h?l:null,!o.m),0<o.O&&(o.M=new jd(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Aa[0]=A.toString()),A=Aa);for(var b=0;b<A.length;b++){var k=ya(h,A[b],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Gn(),$d(o.i,o.u,o.A,o.l,o.R,o.m)}lt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Qe(o)==3?l.j():this.Y(o)},lt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Qe(this.g);var l=this.g.Ba();const cn=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||nu(this.g)))){this.J||Te!=4||l==7||(l==8||0>=cn?Gn(3):Gn(2)),Ns(this);var h=this.g.Z();this.X=h;t:if(Ma(this)){var m=nu(this.g);o="";var A=m.length,b=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),Hn(this);var k="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(b&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Hd(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,pe=this.g;if((te=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(te)){var X=te;break t}}X=null}if(h=X)on(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Os(this,h);else{this.o=!1,this.s=3,Pe(12),Ct(this),Hn(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<k.length;)if(Ue=Jd(this,k),Ue==ks){Te==4&&(this.s=4,Pe(14),h=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Na){this.s=4,Pe(15),on(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else on(this.i,this.l,Ue,null),Os(this,Ue);if(Ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||k.length!=0||this.h.h||(this.s=1,Pe(16),h=!1),this.o=this.o&&h,!h)on(this.i,this.l,k,"[Invalid Chunked Response]"),Ct(this),Hn(this);else if(0<k.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),qs(ve),ve.M=!0,Pe(11))}}else on(this.i,this.l,k,null),Os(this,k);Te==4&&Ct(this),this.o&&!this.J&&(Te==4?cu(this.j,this):(this.o=!1,Qr(this)))}else mf(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Ct(this),Hn(this)}}}catch{}finally{}};function Ma(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jd(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?ks:(h=Number(l.substring(h,m)),isNaN(h)?Na:(m+=1,m+h>l.length?ks:(l=l.slice(m,m+h),o.C=m+h,l)))}lt.prototype.cancel=function(){this.J=!0,Ct(this)};function Qr(o){o.S=Date.now()+o.I,La(o,o.I)}function La(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Kn(T(o.ba,o),l)}function Ns(o){o.B&&(u.clearTimeout(o.B),o.B=null)}lt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Wd(this.i,this.A),this.L!=2&&(Gn(),Pe(17)),Ct(this),this.s=2,Hn(this)):La(this,this.S-o)};function Hn(o){o.j.G==0||o.J||cu(o.j,o)}function Ct(o){Ns(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ra(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Os(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ms(h.h,o))){if(!o.K&&Ms(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ii(h),ni(h);else break e;Bs(h),Pe(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Kn(T(h.Za,h),6e3));if(1>=Ba(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dt(h,11)}else if((o.K||h.g==o)&&ii(h),!B(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const ve=X[3];ve!=null&&(h.la=ve,h.j.info("VER="+h.la));const Te=X[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const cn=X[5];cn!=null&&typeof cn=="number"&&0<cn&&(m=1.5*cn,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Ue=o.g;if(Ue){const oi=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var b=m.h;b.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ls(b,b.h),b.h=null))}if(m.D){const zs=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;zs&&(m.ya=zs,re(m.I,m.D,zs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=du(m,m.J?m.ia:null,m.W),k.K){qa(m.h,k);var te=k,pe=m.L;pe&&(te.I=pe),te.B&&(Ns(te),Qr(te)),m.g=k}else au(m);0<h.i.length&&ri(h)}else X[0]!="stop"&&X[0]!="close"||Dt(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Dt(h,7):Us(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Gn(4)}catch{}}var Xd=class{constructor(o,l){this.g=o,this.map=l}};function Fa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ua(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ba(o){return o.h?1:o.g?o.g.size:0}function Ms(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ls(o,l){o.g?o.g.add(l):o.h=l}function qa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Fa.prototype.cancel=function(){if(this.i=za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function za(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return x(o.i)}function Yd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function Zd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function ja(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Zd(o),m=Yd(o),A=m.length,b=0;b<A;b++)l.call(void 0,m[b],h&&h[b],o)}var Ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ef(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var b=o[h].substring(0,m);A=o[h].substring(m+1)}else b=o[h];l(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Vt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Vt){this.h=o.h,Jr(this,o.j),this.o=o.o,this.g=o.g,Xr(this,o.s),this.l=o.l;var l=o.i,h=new Jn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Ka(this,h),this.m=o.m}else o&&(l=String(o).match(Ga))?(this.h=!1,Jr(this,l[1]||"",!0),this.o=Wn(l[2]||""),this.g=Wn(l[3]||"",!0),Xr(this,l[4]),this.l=Wn(l[5]||"",!0),Ka(this,l[6]||"",!0),this.m=Wn(l[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Vt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Qn(l,$a,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Qn(l,$a,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Qn(h,h.charAt(0)=="/"?rf:nf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Qn(h,of)),o.join("")};function We(o){return new Vt(o)}function Jr(o,l,h){o.j=h?Wn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Xr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ka(o,l,h){l instanceof Jn?(o.i=l,af(o.i,o.h)):(h||(l=Qn(l,sf)),o.i=new Jn(l,o.h))}function re(o,l,h){o.i.set(l,h)}function Yr(o){return re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,tf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function tf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $a=/[#\/\?@]/g,nf=/[#\?:]/g,rf=/[#\?]/g,sf=/[#\?@]/g,of=/#/g;function Jn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ht(o){o.g||(o.g=new Map,o.h=0,o.i&&ef(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=Jn.prototype,r.add=function(o,l){ht(this),this.i=null,o=an(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ha(o,l){ht(o),l=an(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Wa(o,l){return ht(o),l=an(o,l),o.g.has(l)}r.forEach=function(o,l){ht(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(l,A,m,this)},this)},this)},r.na=function(){ht(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const A=o[m];for(let b=0;b<A.length;b++)h.push(l[m])}return h},r.V=function(o){ht(this);let l=[];if(typeof o=="string")Wa(this,o)&&(l=l.concat(this.g.get(an(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return ht(this),this.i=null,o=an(this,o),Wa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Qa(o,l,h){Ha(o,l),0<h.length&&(o.i=null,o.g.set(an(o,l),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const b=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=b;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function an(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function af(o,l){l&&!o.j&&(ht(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(Ha(this,m),Qa(this,A,h))},o)),o.j=l}function uf(o,l){const h=new $n;if(u.Image){const m=new Image;m.onload=P(dt,h,"TestLoadImage: loaded",!0,l,m),m.onerror=P(dt,h,"TestLoadImage: error",!1,l,m),m.onabort=P(dt,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=P(dt,h,"TestLoadImage: timeout",!1,l,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function cf(o,l){const h=new $n,m=new AbortController,A=setTimeout(()=>{m.abort(),dt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(b=>{clearTimeout(A),b.ok?dt(h,"TestPingServer: ok",!0,l):dt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),dt(h,"TestPingServer: error",!1,l)})}function dt(o,l,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function lf(){this.g=new Kd}function hf(o,l,h){const m=h||"";try{ja(o,function(A,b){let k=A;d(A)&&(k=Ps(A)),l.push(m+b+"="+encodeURIComponent(k))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function Zr(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Zr,Ss),Zr.prototype.g=function(){return new ei(this.l,this.j)},Zr.prototype.i=function(o){return function(){return o}}({});function ei(o,l){Ie.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ei,Ie),r=ei.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Yn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ja(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ja(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Xn(this):Yn(this),this.readyState==3&&Ja(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Xn(this))},r.Qa=function(o){this.g&&(this.response=o,Xn(this))},r.ga=function(){this.g&&Xn(this)};function Xn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Yn(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Yn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xa(o){let l="";return $(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function Fs(o,l,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=Xa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):re(o,l,h))}function ue(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(ue,Ie);var df=/^https?$/i,ff=["POST","PUT"];r=ue.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ds.g(),this.v=this.o?ba(this.o):ba(Ds),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(b){Ya(this,b);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())h.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ff,l,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of h)this.g.setRequestHeader(b,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){Ya(this,b)}};function Ya(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Za(o),ti(o)}function Za(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),ue.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?eu(this):this.bb())},r.bb=function(){eu(this)};function eu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qe(o)!=4||o.Z()!=2)){if(o.u&&Qe(o)==4)Ea(o.Ea,0,o);else if(be(o,"readystatechange"),Qe(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var m;if(m=k===0){var A=String(o.D).match(Ga)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!df.test(A?A.toLowerCase():"")}h=m}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var b=2<Qe(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",Za(o)}}finally{ti(o)}}}}function ti(o,l){if(o.g){tu(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||be(o,"ready");try{h.onreadystatechange=m}catch{}}}function tu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Qe(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Gd(l)}};function nu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(o){const l={};o=(o.g&&2<=Qe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(B(o[m]))continue;var h=E(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=l[A]||[];l[A]=b,b.push(h)}I(l,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function ru(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,o),this.cb=Zn("retryDelaySeedMs",1e4,o),this.Wa=Zn("forwardChannelMaxRetries",2,o),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Fa(o&&o.concurrentRequestLimit),this.Da=new lf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ru.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,m){Pe(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=du(this,null,this.W),ri(this)};function Us(o){if(iu(o),o.G==3){var l=o.U++,h=We(o.I);if(re(h,"SID",o.K),re(h,"RID",l),re(h,"TYPE","terminate"),er(o,h),l=new lt(o,o.j,l),l.L=2,l.v=Yr(We(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=fu(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qr(l)}hu(o)}function ni(o){o.g&&(qs(o),o.g.cancel(),o.g=null)}function iu(o){ni(o),o.u&&(u.clearTimeout(o.u),o.u=null),ii(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ri(o){if(!Ua(o.h)&&!o.s){o.s=!0;var l=o.Ga;Un||_a(),Bn||(Un(),Bn=!0),Is.add(l,o),o.B=0}}function pf(o,l){return Ba(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Kn(T(o.Ga,o,l),lu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new lt(this,this.j,o);let b=this.o;if(this.S&&(b?(b=g(b),v(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ou(this,A,l),h=We(this.I),re(h,"RID",o),re(h,"CVER",22),this.D&&re(h,"X-HTTP-Session-Id",this.D),er(this,h),b&&(this.O?l="headers="+encodeURIComponent(String(Xa(b)))+"&"+l:this.m&&Fs(h,this.m,b)),Ls(this.h,A),this.Ua&&re(h,"TYPE","init"),this.P?(re(h,"$req",l),re(h,"SID","null"),A.T=!0,xs(A,h,null)):xs(A,h,l),this.G=2}}else this.G==3&&(o?su(this,o):this.i.length==0||Ua(this.h)||su(this))};function su(o,l){var h;l?h=l.l:h=o.U++;const m=We(o.I);re(m,"SID",o.K),re(m,"RID",h),re(m,"AID",o.T),er(o,m),o.m&&o.o&&Fs(m,o.m,o.o),h=new lt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ou(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ls(o.h,h),xs(h,m,l)}function er(o,l){o.H&&$(o.H,function(h,m){re(l,m,h)}),o.l&&ja({},function(h,m){re(l,m,h)})}function ou(o,l,h){h=Math.min(o.i.length,h);var m=o.l?T(o.l.Na,o.l,o):null;e:{var A=o.i;let b=-1;for(;;){const k=["count="+h];b==-1?0<h?(b=A[0].g,k.push("ofs="+b)):b=0:k.push("ofs="+b);let te=!0;for(let pe=0;pe<h;pe++){let X=A[pe].g;const ve=A[pe].map;if(X-=b,0>X)b=Math.max(0,A[pe].g-100),te=!1;else try{hf(ve,k,"req"+X+"_")}catch{m&&m(ve)}}if(te){m=k.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,m}function au(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Un||_a(),Bn||(Un(),Bn=!0),Is.add(l,o),o.v=0}}function Bs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Kn(T(o.Fa,o),lu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,uu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Kn(T(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),ni(this),uu(this))};function qs(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function uu(o){o.g=new lt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=We(o.qa);re(l,"RID","rpc"),re(l,"SID",o.K),re(l,"AID",o.T),re(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&re(l,"TO",o.ja),re(l,"TYPE","xmlhttp"),er(o,l),o.m&&o.o&&Fs(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Yr(We(l)),h.m=null,h.P=!0,Oa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,ni(this),Bs(this),Pe(19))};function ii(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function cu(o,l){var h=null;if(o.g==l){ii(o),qs(o),o.g=null;var m=2}else if(Ms(o.h,l))h=l.D,qa(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=$r(),be(m,new Da(m,h)),ri(o)}else au(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&pf(o,l)||m==2&&Bs(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Dt(o,5);break;case 4:Dt(o,10);break;case 3:Dt(o,6);break;default:Dt(o,2)}}}function lu(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Dt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),m=o.Xa;const A=!m;m=new Vt(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Jr(m,"https"),Yr(m),A?uf(m.toString(),h):cf(m.toString(),h)}else Pe(2);o.G=0,o.l&&o.l.sa(l),hu(o),iu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function hu(o){if(o.G=0,o.ka=[],o.l){const l=za(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function du(o,l,h){var m=h instanceof Vt?We(h):new Vt(h);if(m.g!="")l&&(m.g=l+"."+m.g),Xr(m,m.s);else{var A=u.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var b=new Vt(null);m&&Jr(b,m),l&&(b.g=l),A&&Xr(b,A),h&&(b.l=h),m=b}return h=o.D,l=o.ya,h&&l&&re(m,h,l),re(m,"VER",o.la),er(o,m),m}function fu(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ue(new Zr({eb:h})):new ue(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function mu(){}r=mu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function si(){}si.prototype.g=function(o,l){return new Ne(o,l)};function Ne(o,l){Ie.call(this),this.g=new ru(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!B(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new un(this)}V(Ne,Ie),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){Us(this.g)},Ne.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ps(o),o=h);l.i.push(new Xd(l.Ya++,o)),l.G==3&&ri(l)},Ne.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,Ne.aa.N.call(this)};function pu(o){Cs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}V(pu,Cs);function gu(){Vs.call(this),this.status=1}V(gu,Vs);function un(o){this.g=o}V(un,mu),un.prototype.ua=function(){be(this.g,"a")},un.prototype.ta=function(o){be(this.g,new pu(o))},un.prototype.sa=function(o){be(this.g,new gu)},un.prototype.ra=function(){be(this.g,"b")},si.prototype.createWebChannel=si.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,cl=function(){return new si},ul=function(){return $r()},al=St,Zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,pi=Hr,ka.COMPLETE="complete",ol=ka,Pa.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,or=Pa,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,sl=ue}).apply(typeof ai<"u"?ai:typeof self<"u"?self:typeof window<"u"?window:{});const Ru="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Ao("@firebase/firestore");function mn(){return Ht.logLevel}function C(r,...e){if(Ht.logLevel<=H.DEBUG){const t=e.map(Ro);Ht.debug(`Firestore (${xn}): ${r}`,...t)}}function Ce(r,...e){if(Ht.logLevel<=H.ERROR){const t=e.map(Ro);Ht.error(`Firestore (${xn}): ${r}`,...t)}}function yr(r,...e){if(Ht.logLevel<=H.WARN){const t=e.map(Ro);Ht.warn(`Firestore (${xn}): ${r}`,...t)}}function Ro(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const e=`FIRESTORE (${xn}) INTERNAL ASSERTION FAILED: `+r;throw Ce(e),new Error(e)}function L(r,e){r||M()}function z(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Bm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class qm{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,t(c)):Promise.resolve();let s=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Um(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new Se(e)}}class zm{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jm{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new zm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Km{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){L(this.o===void 0);const n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(L(typeof t.token=="string"),this.R=t.token,new Gm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=$m(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function An(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function hl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ae(0,0))}static max(){return new U(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(),n===void 0?n=e.length-t:n>e.length-t&&M(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends Ir{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const Hm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oe extends Ir{construct(e,t,n){return new oe(e,t,n)}static isValidIdentifier(e){return Hm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new oe(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new oe(t)}static emptyPath(){return new oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(ne.fromString(e))}static fromName(e){return new N(ne.fromString(e).popFirst(5))}static empty(){return new N(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function eo(r){return r.fields.find(e=>e.kind===2)}function Nt(r){return r.fields.filter(e=>e.kind!==2)}Di.UNKNOWN_ID=-1;class gi{constructor(e,t){this.fieldPath=e,this.kind=t}}class vr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new vr(0,Me.min())}}function Wm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new ae(t+1,0):new ae(t,n));return new Me(i,N.empty(),e)}function dl(r){return new Me(r.readTime,r.key,-1)}class Me{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Me(U.min(),N.empty(),-1)}static max(){return new Me(U.max(),N.empty(),-1)}}function bo(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=N.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ml{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==fl)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,n)=>{t(e)})}static reject(e){return new w((t,n)=>{n(e)})}static waitFor(e){return new w((t,n)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>n(c))}),a=!0,s===i&&t()})}static or(e){let t=w.resolve(!1);for(const n of e)t=t.next(i=>i?w.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new w((n,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const d=c;t(e[d]).next(f=>{a[d]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new w((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static open(e,t,n,i){try{return new Xi(t,e.transaction(i,n))}catch(s){throw new hr(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new tt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new hr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Po(n.target.error);this.V.reject(new hr(e,i))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Jm(t)}}class je{static delete(e){return C("SimpleDb","Removing database:",e),Ot(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!tl())return!1;if(je.S())return!0;const e=de(),t=je.D(e),n=0<t&&t<10,i=pl(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.F=n,je.D(de())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{n(new hr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?n(new O(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new O(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new hr(e,a))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.F.O(a,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const u=Xi.open(this.db,e,s?"readonly":"readwrite",n),c=i(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function pl(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Qm{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ot(this.B.delete())}}class hr extends O{constructor(e,t){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function bt(r){return r.name==="IndexedDbTransactionError"}class Jm{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ot(n)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Ot(this.store.add(e))}get(e){return Ot(this.store.get(e)).next(t=>(t===void 0&&(t=null),C("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Ot(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Ot(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new w((a,u)=>{s.onerror=c=>{u(c.target.error)},s.onsuccess=c=>{a(c.target.result)}})}{const s=this.cursor(n),a=[];return this.W(s,(u,c)=>{a.push(c)}).next(()=>a)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new w((i,s)=>{n.onerror=a=>{s(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(e,t){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,a,u)=>u.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new w((n,i)=>{t.onerror=s=>{const a=Po(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(e,t){const n=[];return new w((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new Qm(u),d=t(u.primaryKey,u.value,c);if(d instanceof w){const f=d.catch(p=>(c.done(),w.reject(p)));n.push(f)}c.isDone?i():c.K===null?u.continue():u.continue(c.K)}}).next(()=>w.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ot(r){return new w((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Po(n.target.error);t(i)}})}let bu=!1;function Po(r){const e=je.D(de());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bu||(bu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Xm{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){C("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){bt(t)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await rn(t)}await this.X(6e4)})}}class Ym{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,i).next(u=>{i-=u,n.add(a)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(i,s)).next(u=>(C("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(e,t,u))).next(()=>a.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const a=dl(s);bo(a,n)>0&&(n=a)}),new Me(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Le.oe=-1;function Yi(r){return r==null}function Tr(r){return r===0&&1/r==-1/0}function Zm(r){return typeof r=="number"&&Number.isInteger(r)&&!Tr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Pu(e)),e=ep(r.get(t),e);return Pu(e)}function ep(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function Pu(r){return r+""}function qe(r){const e=r.length;if(L(e>=2),e===2)return L(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const a=r.indexOf("",s);switch((a<0||a>t)&&M(),r.charAt(a+1)){case"":const u=r.substring(s,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(s,a),i+="\0";break;case"":i+=r.substring(s,a+1);break;default:M()}s=a+2}return new ne(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r,e){return[r,Re(e)]}function gl(r,e,t){return[r,Re(e),t]}const tp={},np=["prefixPath","collectionGroup","readTime","documentId"],rp=["prefixPath","collectionGroup","documentId"],ip=["collectionGroup","readTime","prefixPath","documentId"],sp=["canonicalId","targetId"],op=["targetId","path"],ap=["path","targetId"],up=["collectionId","parent"],cp=["indexId","uid"],lp=["uid","sequenceNumber"],hp=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],dp=["indexId","uid","orderedDocumentKey"],fp=["userId","collectionPath","documentId"],mp=["userId","collectionPath","largestBatchId"],pp=["userId","collectionGroup","largestBatchId"],_l=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gp=[..._l,"documentOverlays"],yl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Il=yl,So=[...Il,"indexConfiguration","indexState","indexEntries"],_p=So,yp=[...So,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends ml{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function fe(r,e){const t=z(r);return je.C(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Pt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function vl(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ui(this.root,e,this.comparator,!0)}}class ui{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??ge.RED,this.left=i??ge.EMPTY,this.right=s??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ge(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ge.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,t,n,i,s){return this}insert(e,t,n){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vu(this.data.getIterator())}getIteratorFrom(e){return new Vu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Z(this.comparator);return t.data=e,t}}class Vu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ln(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.fields=e,e.sort(oe.comparator)}static empty(){return new ke([])}unionWith(e){let t=new Z(oe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return An(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tl("Invalid base64 string: "+s):s}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Ip=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(r){if(L(!!r),typeof r=="string"){let e=0;const t=Ip.exec(r);if(L(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ie(r.seconds),nanos:ie(r.nanos)}}function ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function it(r){return typeof r=="string"?he.fromBase64String(r):he.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Zi(r){const e=r.mapValue.fields.__previous_value__;return Co(e)?Zi(e):e}function Er(r){const e=rt(r.mapValue.fields.__local_write_time__.timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,n,i,s,a,u,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class Wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yi={nullValue:"NULL_VALUE"};function wt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Co(r)?4:El(r)?9007199254740991:es(r)?10:11:M()}function Ke(r,e){if(r===e)return!0;const t=wt(r);if(t!==wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Er(r).isEqual(Er(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=rt(i.timestampValue),u=rt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return it(i.bytesValue).isEqual(it(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ie(i.geoPointValue.latitude)===ie(s.geoPointValue.latitude)&&ie(i.geoPointValue.longitude)===ie(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ie(i.integerValue)===ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ie(i.doubleValue),u=ie(s.doubleValue);return a===u?Tr(a)===Tr(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return An(r.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Cu(a)!==Cu(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Ke(a[c],u[c])))return!1;return!0}(r,e);default:return M()}}function wr(r,e){return(r.values||[]).find(t=>Ke(t,e))!==void 0}function At(r,e){if(r===e)return 0;const t=wt(r),n=wt(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return function(s,a){const u=ie(s.integerValue||s.doubleValue),c=ie(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,e);case 3:return Du(r.timestampValue,e.timestampValue);case 4:return Du(Er(r),Er(e));case 5:return j(r.stringValue,e.stringValue);case 6:return function(s,a){const u=it(s),c=it(a);return u.compareTo(c)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const f=j(u[d],c[d]);if(f!==0)return f}return j(u.length,c.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const u=j(ie(s.latitude),ie(a.latitude));return u!==0?u:j(ie(s.longitude),ie(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ku(r.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,d,f;const p=s.fields||{},T=a.fields||{},P=(u=p.value)===null||u===void 0?void 0:u.arrayValue,V=(c=T.value)===null||c===void 0?void 0:c.arrayValue,x=j(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:ku(P,V)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===Tt.mapValue&&a===Tt.mapValue)return 0;if(s===Tt.mapValue)return 1;if(a===Tt.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const T=j(c[p],f[p]);if(T!==0)return T;const P=At(u[c[p]],d[f[p]]);if(P!==0)return P}return j(c.length,f.length)}(r.mapValue,e.mapValue);default:throw M()}}function Du(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=rt(r),n=rt(e),i=j(t.seconds,n.seconds);return i!==0?i:j(t.nanos,n.nanos)}function ku(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=At(t[i],n[i]);if(s)return s}return j(t.length,n.length)}function Rn(r){return no(r)}function no(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=rt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return it(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return N.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=no(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${no(t.fields[a])}`;return i+"}"}(r.mapValue):M()}function Ii(r){switch(wt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zi(r);return e?16+Ii(e):16;case 5:return 2*r.stringValue.length;case 6:return it(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+Ii(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Pt(n.fields,(s,a)=>{i+=s.length+Ii(a)}),i}(r.mapValue);default:throw M()}}function Vo(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ro(r){return!!r&&"integerValue"in r}function Ar(r){return!!r&&"arrayValue"in r}function xu(r){return!!r&&"nullValue"in r}function Nu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function vi(r){return!!r&&"mapValue"in r}function es(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function dr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Pt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=dr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function El(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const wl={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Tp(r){return"nullValue"in r?yi:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Vo(Wt.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?es(r)?wl:{mapValue:{}}:M()}function Ep(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Vo(Wt.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?wl:"mapValue"in r?es(r)?{mapValue:{}}:Tt:M()}function Ou(r,e){const t=At(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Mu(r,e){const t=At(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=oe.emptyPath(),n={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=dr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());vi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];vi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Pt(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Ae(dr(this.value))}}function Al(r){const e=[];return Pt(r.fields,(t,n)=>{const i=new oe([t]);if(vi(n)){const s=Al(n.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n,i,s,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ce(e,0,U.min(),U.min(),U.min(),Ae.empty(),0)}static newFoundDocument(e,t,n,i){return new ce(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new ce(e,2,t,U.min(),U.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ce(e,3,t,U.min(),U.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t){this.position=e,this.inclusive=t}}function Lu(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),t.key):n=At(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Fu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ke(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function wp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{}class W extends Rl{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Ap(e,t,n):t==="array-contains"?new Pp(e,n):t==="in"?new Dl(e,n):t==="not-in"?new Sp(e,n):t==="array-contains-any"?new Cp(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Rp(e,n):new bp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(At(t,this.value)):t!==null&&wt(this.value)===wt(t)&&this.matchesComparison(At(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ee extends Rl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ee(e,t)}matches(e){return Pn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pn(r){return r.op==="and"}function io(r){return r.op==="or"}function Do(r){return bl(r)&&Pn(r)}function bl(r){for(const e of r.filters)if(e instanceof ee)return!1;return!0}function so(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+Rn(r.value);if(Do(r))return r.filters.map(e=>so(e)).join(",");{const e=r.filters.map(t=>so(t)).join(",");return`${r.op}(${e})`}}function Pl(r,e){return r instanceof W?function(n,i){return i instanceof W&&n.op===i.op&&n.field.isEqual(i.field)&&Ke(n.value,i.value)}(r,e):r instanceof ee?function(n,i){return i instanceof ee&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&Pl(a,i.filters[u]),!0):!1}(r,e):void M()}function Sl(r,e){const t=r.filters.concat(e);return ee.create(t,r.op)}function Cl(r){return r instanceof W?function(t){return`${t.field.canonicalString()} ${t.op} ${Rn(t.value)}`}(r):r instanceof ee?function(t){return t.op.toString()+" {"+t.getFilters().map(Cl).join(" ,")+"}"}(r):"Filter"}class Ap extends W{constructor(e,t,n){super(e,t,n),this.key=N.fromName(n.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rp extends W{constructor(e,t){super(e,"in",t),this.keys=Vl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bp extends W{constructor(e,t){super(e,"not-in",t),this.keys=Vl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vl(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>N.fromName(n.referenceValue))}class Pp extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ar(t)&&wr(t.arrayValue,this.value)}}class Dl extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wr(this.value.arrayValue,t)}}class Sp extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!wr(this.value.arrayValue,t)}}class Cp extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ar(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>wr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t=null,n=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function oo(r,e=null,t=[],n=[],i=null,s=null,a=null){return new Vp(r,e,t,n,i,s,a)}function Qt(r){const e=z(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>so(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Rn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Rn(n)).join(",")),e.ue=t}return e.ue}function kr(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Pl(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Fu(r.startAt,e.startAt)&&Fu(r.endAt,e.endAt)}function xi(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ni(r,e){return r.filters.filter(t=>t instanceof W&&t.field.isEqual(e))}function Uu(r,e,t){let n=yi,i=!0;for(const s of Ni(r,e)){let a=yi,u=!0;switch(s.op){case"<":case"<=":a=Tp(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,u=!1;break;case"!=":case"not-in":a=yi}Ou({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Ou({value:n,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}function Bu(r,e,t){let n=Tt,i=!0;for(const s of Ni(r,e)){let a=Tt,u=!0;switch(s.op){case">=":case">":a=Ep(s.value),u=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,u=!1;break;case"!=":case"not-in":a=Tt}Mu({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const a=t.position[s];Mu({value:n,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(n=a,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,n=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dp(r,e,t,n,i,s,a,u){return new ts(r,e,t,n,i,s,a,u)}function ns(r){return new ts(r)}function qu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kp(r){return r.collectionGroup!==null}function fr(r){const e=z(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Z(oe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ki(s,n))}),t.has(oe.keyField().canonicalString())||e.ce.push(new ki(oe.keyField(),n))}return e.ce}function Fe(r){const e=z(r);return e.le||(e.le=xp(e,fr(r))),e.le}function xp(r,e){if(r.limitType==="F")return oo(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ki(i.field,s)});const t=r.endAt?new bn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new bn(r.startAt.position,r.startAt.inclusive):null;return oo(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ao(r,e,t){return new ts(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function rs(r,e){return kr(Fe(r),Fe(e))&&r.limitType===e.limitType}function kl(r){return`${Qt(Fe(r))}|lt:${r.limitType}`}function pn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Cl(i)).join(", ")}]`),Yi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Rn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Rn(i)).join(",")),`Target(${n})`}(Fe(r))}; limitType=${r.limitType})`}function xr(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):N.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of fr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,u,c){const d=Lu(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,fr(n),i)||n.endAt&&!function(a,u,c){const d=Lu(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,fr(n),i))}(r,e)}function Np(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function xl(r){return(e,t)=>{let n=!1;for(const i of fr(r)){const s=Op(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Op(r,e,t){const n=r.field.isKeyField()?N.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),d=u.data.field(s);return c!==null&&d!==null?At(c,d):M()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pt(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return vl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new se(N.comparator);function Oe(){return Mp}const Nl=new se(N.comparator);function ar(...r){let e=Nl;for(const t of r)e=e.insert(t.key,t);return e}function Ol(r){let e=Nl;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ze(){return mr()}function Ml(){return mr()}function mr(){return new at(r=>r.toString(),(r,e)=>r.isEqual(e))}const Lp=new se(N.comparator),Fp=new Z(N.comparator);function K(...r){let e=Fp;for(const t of r)e=e.add(t);return e}const Up=new Z(j);function Bp(){return Up}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(e)?"-0":e}}function Ll(r){return{integerValue:""+r}}function qp(r,e){return Zm(e)?Ll(e):ko(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this._=void 0}}function zp(r,e,t){return r instanceof Rr?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Co(s)&&(s=Zi(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof Jt?Ul(r,e):r instanceof Xt?Bl(r,e):function(i,s){const a=Fl(i,s),u=zu(a)+zu(i.Pe);return ro(a)&&ro(i.Pe)?Ll(u):ko(i.serializer,u)}(r,e)}function jp(r,e,t){return r instanceof Jt?Ul(r,e):r instanceof Xt?Bl(r,e):t}function Fl(r,e){return r instanceof br?function(n){return ro(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Rr extends is{}class Jt extends is{constructor(e){super(),this.elements=e}}function Ul(r,e){const t=ql(e);for(const n of r.elements)t.some(i=>Ke(i,n))||t.push(n);return{arrayValue:{values:t}}}class Xt extends is{constructor(e){super(),this.elements=e}}function Bl(r,e){let t=ql(e);for(const n of r.elements)t=t.filter(i=>!Ke(i,n));return{arrayValue:{values:t}}}class br extends is{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function zu(r){return ie(r.integerValue||r.doubleValue)}function ql(r){return Ar(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t){this.field=e,this.transform=t}}function Gp(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Jt&&i instanceof Jt||n instanceof Xt&&i instanceof Xt?An(n.elements,i.elements,Ke):n instanceof br&&i instanceof br?Ke(n.Pe,i.Pe):n instanceof Rr&&i instanceof Rr}(r.transform,e.transform)}class Kp{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ti(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ss{}function zl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new No(r.key,xe.none()):new Nn(r.key,r.data,xe.none());{const t=r.data,n=Ae.empty();let i=new Z(oe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new ut(r.key,n,new ke(i.toArray()),xe.none())}}function $p(r,e,t){r instanceof Nn?function(i,s,a){const u=i.value.clone(),c=Gu(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof ut?function(i,s,a){if(!Ti(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Gu(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(jl(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function pr(r,e,t,n){return r instanceof Nn?function(s,a,u,c){if(!Ti(s.precondition,a))return u;const d=s.value.clone(),f=Ku(s.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof ut?function(s,a,u,c){if(!Ti(s.precondition,a))return u;const d=Ku(s.fieldTransforms,c,a),f=a.data;return f.setAll(jl(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,u){return Ti(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function Hp(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Fl(n.transform,i||null);s!=null&&(t===null&&(t=Ae.empty()),t.set(n.field,s))}return t||null}function ju(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&An(n,i,(s,a)=>Gp(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Nn extends ss{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ut extends ss{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jl(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Gu(r,e,t){const n=new Map;L(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,u=e.data.field(s.field);n.set(s.field,jp(a,u,t[i]))}return n}function Ku(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,zp(s,a,e))}return n}class No extends ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gl extends ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&$p(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=pr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=pr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ml();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=zl(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&An(this.mutations,e.mutations,(t,n)=>ju(t,n))&&An(this.baseMutations,e.baseMutations,(t,n)=>ju(t,n))}}class Mo{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){L(e.mutations.length===n.length);let i=function(){return Lp}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,n[a].version);return new Mo(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,J;function Qp(r){switch(r){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Kl(r){if(r===void 0)return Ce("GRPC error has no .code"),S.UNKNOWN;switch(r){case le.OK:return S.OK;case le.CANCELLED:return S.CANCELLED;case le.UNKNOWN:return S.UNKNOWN;case le.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case le.INTERNAL:return S.INTERNAL;case le.UNAVAILABLE:return S.UNAVAILABLE;case le.UNAUTHENTICATED:return S.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case le.NOT_FOUND:return S.NOT_FOUND;case le.ALREADY_EXISTS:return S.ALREADY_EXISTS;case le.PERMISSION_DENIED:return S.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case le.ABORTED:return S.ABORTED;case le.OUT_OF_RANGE:return S.OUT_OF_RANGE;case le.UNIMPLEMENTED:return S.UNIMPLEMENTED;case le.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new qt([4294967295,4294967295],0);function $u(r){const e=Jp().encode(r),t=new il;return t.update(e),new Uint8Array(t.digest())}function Hu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qt([t,n],0),new qt([i,s],0)]}class Fo{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ur(`Invalid padding: ${t}`);if(n<0)throw new ur(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ur(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=qt.fromNumber(this.Te)}Ee(e,t,n){let i=e.add(t.multiply(qt.fromNumber(n)));return i.compare(Xp)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=$u(e),[n,i]=Hu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Fo(s,i,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=$u(e),[n,i]=Hu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Nr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new os(U.min(),i,new se(j),Oe(),K())}}class Nr{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Nr(n,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class $l{constructor(e,t){this.targetId=e,this.me=t}}class Hl{constructor(e,t,n=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Wu{constructor(){this.fe=0,this.ge=Qu(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=K(),t=K(),n=K();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:M()}}),new Nr(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Qu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Yp{constructor(e){this.Le=e,this.Be=new Map,this.ke=Oe(),this.qe=ci(),this.Qe=ci(),this.Ke=new se(j)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:M()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,n=e.me.count,i=this.Ye(t);if(i){const s=i.target;if(xi(s))if(n===0){const a=new N(s.path);this.We(t,a,ce.newNoDocument(a,U.min()))}else L(n===1);else{const a=this.Ze(t);if(a!==n){const u=this.Xe(e),c=u?this.et(u,e,a):1;if(c!==0){this.He(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=it(n).toUint8Array()}catch(c){if(c instanceof Tl)return yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Fo(a,i,s)}catch(c){return yr(c instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Te===0?null:u}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.Be.forEach((s,a)=>{const u=this.Ye(a);if(u){if(s.current&&xi(u.target)){const c=new N(u.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,ce.newNoDocument(c,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let n=K();this.Qe.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new os(e,t,this.Ke,this.ke,n);return this.ke=Oe(),this.qe=ci(),this.Qe=ci(),this.Ke=new se(j),i}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.ot(e,t)?i.Fe(t,1):i.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Wu,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Z(j),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Z(j),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Wu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ci(){return new se(N.comparator)}function Qu(){return new se(N.comparator)}const Zp={asc:"ASCENDING",desc:"DESCENDING"},eg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tg={and:"AND",or:"OR"};class ng{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uo(r,e){return r.useProto3Json||Yi(e)?e:{value:e}}function Sn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wl(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function rg(r,e){return Sn(r,e.toTimestamp())}function Ve(r){return L(!!r),U.fromTimestamp(function(t){const n=rt(t);return new ae(n.seconds,n.nanos)}(r))}function Uo(r,e){return co(r,e).canonicalString()}function co(r,e){const t=function(i){return new ne(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Ql(r){const e=ne.fromString(r);return L(ih(e)),e}function Oi(r,e){return Uo(r.databaseId,e.path)}function zt(r,e){const t=Ql(e);if(t.get(1)!==r.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new N(Yl(t))}function Jl(r,e){return Uo(r.databaseId,e)}function Xl(r){const e=Ql(r);return e.length===4?ne.emptyPath():Yl(e)}function lo(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Yl(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ju(r,e,t){return{name:Oi(r,e),fields:t.value.mapValue.fields}}function ig(r,e,t){const n=zt(r,e.name),i=Ve(e.updateTime),s=e.createTime?Ve(e.createTime):U.min(),a=new Ae({mapValue:{fields:e.fields}}),u=ce.newFoundDocument(n,i,s,a);return t&&u.setHasCommittedMutations(),t?u.setHasCommittedMutations():u}function sg(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),he.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),he.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const f=d.code===void 0?S.UNKNOWN:Kl(d.code);return new O(f,d.message||"")}(a);t=new Hl(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=zt(r,n.document.name),s=Ve(n.document.updateTime),a=n.document.createTime?Ve(n.document.createTime):U.min(),u=new Ae({mapValue:{fields:n.document.fields}}),c=ce.newFoundDocument(i,s,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];t=new Ei(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=zt(r,n.document),s=n.readTime?Ve(n.readTime):U.min(),a=ce.newNoDocument(i,s),u=n.removedTargetIds||[];t=new Ei([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=zt(r,n.document),s=n.removedTargetIds||[];t=new Ei([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new Wp(i,s),u=n.targetId;t=new $l(u,a)}}return t}function Mi(r,e){let t;if(e instanceof Nn)t={update:Ju(r,e.key,e.value)};else if(e instanceof No)t={delete:Oi(r,e.key)};else if(e instanceof ut)t={update:Ju(r,e.key,e.data),updateMask:hg(e.fieldMask)};else{if(!(e instanceof Gl))return M();t={verify:Oi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,a){const u=a.transform;if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Jt)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Xt)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof br)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(r,e.precondition)),t}function ho(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(Ve(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new Rr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];c=new Jt(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];c=new Xt(f)}else"increment"in u?c=new br(a,u.increment):M();const d=oe.fromServerFormat(u.fieldPath);return new xo(d,c)}(r,i)):[];if(e.update){e.update.name;const i=zt(r,e.update.name),s=new Ae({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(c){const d=c.fieldPaths||[];return new ke(d.map(f=>oe.fromServerFormat(f)))}(e.updateMask);return new ut(i,s,a,t,n)}return new Nn(i,s,t,n)}if(e.delete){const i=zt(r,e.delete);return new No(i,t)}if(e.verify){const i=zt(r,e.verify);return new Gl(i,t)}return M()}function og(r,e){return r&&r.length>0?(L(e!==void 0),r.map(t=>function(i,s){let a=i.updateTime?Ve(i.updateTime):Ve(s);return a.isEqual(U.min())&&(a=Ve(s)),new Kp(a,i.transformResults||[])}(t,e))):[]}function Zl(r,e){return{documents:[Jl(r,e.path)]}}function eh(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Jl(r,i);const s=function(d){if(d.length!==0)return rh(ee.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(T){return{field:gn(T.field),direction:ug(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=uo(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:i}}function th(r){let e=Xl(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){L(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const T=nh(p);return T instanceof ee&&Do(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(T=>function(V){return new ki(_n(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(p){let T;return T=typeof p=="object"?p.value:p,Yi(T)?null:T}(t.limit));let c=null;t.startAt&&(c=function(p){const T=!!p.before,P=p.values||[];return new bn(P,T)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const T=!p.before,P=p.values||[];return new bn(P,T)}(t.endAt)),Dp(e,i,a,s,u,"F",c,d)}function ag(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function nh(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=_n(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=_n(t.unaryFilter.field);return W.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(t.unaryFilter.field);return W.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return W.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(t){return W.create(_n(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ee.create(t.compositeFilter.filters.map(n=>nh(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(t.compositeFilter.op))}(r):M()}function ug(r){return Zp[r]}function cg(r){return eg[r]}function lg(r){return tg[r]}function gn(r){return{fieldPath:r.canonicalString()}}function _n(r){return oe.fromServerFormat(r.fieldPath)}function rh(r){return r instanceof W?function(t){if(t.op==="=="){if(Nu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(xu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Nu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(xu(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:cg(t.op),value:t.value}}}(r):r instanceof ee?function(t){const n=t.getFilters().map(i=>rh(i));return n.length===1?n[0]:{compositeFilter:{op:lg(t.op),filters:n}}}(r):M()}function hg(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ih(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,n,i,s=U.min(),a=U.min(),u=he.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new Xe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.ht=e}}function dg(r,e){let t;if(e.document)t=ig(r.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=N.fromSegments(e.noDocument.path),i=Zt(e.noDocument.readTime);t=ce.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const n=N.fromSegments(e.unknownDocument.path),i=Zt(e.unknownDocument.version);t=ce.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ae(i[0],i[1]);return U.fromTimestamp(s)}(e.readTime)),t}function Xu(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Li(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,a){return{name:Oi(s,a.key),fields:a.data.value.mapValue.fields,updateTime:Sn(s,a.version.toTimestamp()),createTime:Sn(s,a.createTime.toTimestamp())}}(r.ht,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Yt(e.version)};else{if(!e.isUnknownDocument())return M();n.unknownDocument={path:t.path.toArray(),version:Yt(e.version)}}return n}function Li(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Yt(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Zt(r){const e=new ae(r.seconds,r.nanoseconds);return U.fromTimestamp(e)}function Mt(r,e){const t=(e.baseMutations||[]).map(s=>ho(r.ht,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const u=e.mutations[s+1];a.updateTransforms=u.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>ho(r.ht,s)),i=ae.fromMillis(e.localWriteTimeMs);return new Oo(e.batchId,i,t,n)}function cr(r){const e=Zt(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?Zt(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return L(s.documents.length===1),Fe(ns(Xl(s.documents[0])))}(r.query):function(s){return Fe(th(s))}(r.query),new Xe(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,he.fromBase64String(r.resumeToken))}function oh(r,e){const t=Yt(e.snapshotVersion),n=Yt(e.lastLimboFreeSnapshotVersion);let i;i=xi(e.target)?Zl(r.ht,e.target):eh(r.ht,e.target).ct;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Qt(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function ah(r){const e=th({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ao(e,e.limit,"L"):e}function Ks(r,e){return new Lo(e.largestBatchId,ho(r.ht,e.overlayMutation))}function Yu(r,e){const t=e.path.lastSegment();return[r,Re(e.path.popLast()),t]}function Zu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Yt(n.readTime),documentKey:Re(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{getBundleMetadata(e,t){return ec(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:Zt(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return ec(e).put(function(i){return{bundleId:i.id,createTime:Yt(Ve(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return tc(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:ah(s.bundledQuery),readTime:Zt(s.readTime)}}(n)})}saveNamedQuery(e,t){return tc(e).put(function(i){return{name:i.name,readTime:Yt(Ve(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function ec(r){return fe(r,"bundles")}function tc(r){return fe(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const n=t.uid||"";return new as(e,n)}getOverlay(e,t){return tr(e).get(Yu(this.userId,t)).next(n=>n?Ks(this.serializer,n):null)}getOverlays(e,t){const n=ze();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,a)=>{const u=new Lo(t,a);i.push(this.Tt(e,u))}),w.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(a=>i.add(Re(a.getCollectionPath())));const s=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);s.push(tr(e).j("collectionPathOverlayIndex",u))}),w.waitFor(s)}getOverlaysForCollection(e,t,n){const i=ze(),s=Re(t),a=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return tr(e).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=Ks(this.serializer,c);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=ze();let a;const u=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tr(e).J({index:"collectionGroupOverlayIndex",range:u},(c,d,f)=>{const p=Ks(this.serializer,d);s.size()<i||p.largestBatchId===a?(s.set(p.getKey(),p),a=p.largestBatchId):f.done()}).next(()=>s)}Tt(e,t){return tr(e).put(function(i,s,a){const[u,c,d]=Yu(s,a.mutation.key);return{userId:s,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Mi(i.ht,a.mutation)}}(this.serializer,this.userId,t))}}function tr(r){return fe(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{It(e){return fe(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?he.fromUint8Array(n):he.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(ie(e.integerValue));else if("doubleValue"in e){const n=ie(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),Tr(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),typeof n=="string"&&(n=rt(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(it(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?El(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):es(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):M()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const n=e.fields||{};this.Rt(t,55);for(const i of Object.keys(n))this.gt(i,t),this.dt(n[i],t)}bt(e,t){var n,i;const s=e.fields||{};this.Rt(t,53);const a="value",u=((i=(n=s[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Rt(t,15),t.Vt(ie(u)),this.gt(a,t),this.dt(s[a],t)}vt(e,t){const n=e.values||[];this.Rt(t,50);for(const i of n)this.dt(i,t)}St(e,t){this.Rt(t,37),N.fromName(e).path.forEach(n=>{this.Rt(t,60),this.Ct(n,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}Lt.Ft=new Lt;function pg(r){if(r===0)return 8;let e=0;return r>>4==0&&(e+=4,r<<=4),r>>6==0&&(e+=2,r<<=2),r>>7==0&&(e+=1),e}function nc(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const a=pg(255&n[s]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(e/8)}class gg{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Lt(n.value),n=t.next();this.Bt()}kt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Lt(n);else if(n<2048)this.Lt(960|n>>>6),this.Lt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|n>>>12),this.Lt(128|63&n>>>6),this.Lt(128|63&n);else{const i=t.codePointAt(0);this.Lt(240|i>>>18),this.Lt(128|63&i>>>12),this.Lt(128|63&i>>>6),this.Lt(128|63&i)}}this.Bt()}Qt(e){const t=this.Kt(e),n=nc(t);this.$t(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ut(e){const t=this.Kt(e),n=nc(t);this.$t(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class _g{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class yg{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class nr{constructor(){this.Jt=new gg,this.Yt=new _g(this.Jt),this.Zt=new yg(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Ft(this.indexId,this.documentKey,this.arrayValue,n)}}function ft(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=rc(r.arrayValue,e.arrayValue),t!==0?t:(t=rc(r.directionalValue,e.directionalValue),t!==0?t:N.comparator(r.documentKey,e.documentKey)))}function rc(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.tn=new Z((t,n)=>oe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const n=t;n.isInequality()?this.tn=this.tn.add(n):this.rn.push(n)}}get sn(){return this.tn.size>1}on(e){if(L(e.collectionGroup===this.collectionId),this.sn)return!1;const t=eo(e);if(t!==void 0&&!this._n(t))return!1;const n=Nt(e);let i=new Set,s=0,a=0;for(;s<n.length&&this._n(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.tn.size>0){const u=this.tn.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[s];if(!this.an(u,c)||!this.un(this.nn[a++],c))return!1}++s}for(;s<n.length;++s){const u=n[s];if(a>=this.nn.length||!this.un(this.nn[a++],u))return!1}return!0}cn(){if(this.sn)return null;let e=new Z(oe.comparator);const t=[];for(const n of this.rn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new gi(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new gi(n.field,0))}for(const n of this.nn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new gi(n.field,n.dir==="asc"?0:1)));return new Di(Di.UNKNOWN_ID,this.collectionId,t,vr.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(r){var e,t;if(L(r instanceof W||r instanceof ee),r instanceof W){if(r instanceof Dl){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>W.create(r.field,"==",s)))||[];return ee.create(i,"or")}return r}const n=r.filters.map(i=>uh(i));return ee.create(n,r.op)}function Ig(r){if(r.getFilters().length===0)return[];const e=po(uh(r));return L(ch(e)),fo(e)||mo(e)?[e]:e.getFilters()}function fo(r){return r instanceof W}function mo(r){return r instanceof ee&&Do(r)}function ch(r){return fo(r)||mo(r)||function(t){if(t instanceof ee&&io(t)){for(const n of t.getFilters())if(!fo(n)&&!mo(n))return!1;return!0}return!1}(r)}function po(r){if(L(r instanceof W||r instanceof ee),r instanceof W)return r;if(r.filters.length===1)return po(r.filters[0]);const e=r.filters.map(n=>po(n));let t=ee.create(e,r.op);return t=Fi(t),ch(t)?t:(L(t instanceof ee),L(Pn(t)),L(t.filters.length>1),t.filters.reduce((n,i)=>Bo(n,i)))}function Bo(r,e){let t;return L(r instanceof W||r instanceof ee),L(e instanceof W||e instanceof ee),t=r instanceof W?e instanceof W?function(i,s){return ee.create([i,s],"and")}(r,e):sc(r,e):e instanceof W?sc(e,r):function(i,s){if(L(i.filters.length>0&&s.filters.length>0),Pn(i)&&Pn(s))return Sl(i,s.getFilters());const a=io(i)?i:s,u=io(i)?s:i,c=a.filters.map(d=>Bo(d,u));return ee.create(c,"or")}(r,e),Fi(t)}function sc(r,e){if(Pn(e))return Sl(e,r.getFilters());{const t=e.filters.map(n=>Bo(r,n));return ee.create(t,"or")}}function Fi(r){if(L(r instanceof W||r instanceof ee),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return Fi(e[0]);if(bl(r))return r;const t=e.map(i=>Fi(i)),n=[];return t.forEach(i=>{i instanceof W?n.push(i):i instanceof ee&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:ee.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.ln=new qo}addToCollectionParentIndex(e,t){return this.ln.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(Me.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(Me.min())}updateCollectionGroup(e,t,n){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class qo{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new Z(ne.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new Z(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Uint8Array(0);class Tg{constructor(e,t){this.databaseId=t,this.hn=new qo,this.Pn=new at(n=>Qt(n),(n,i)=>kr(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const s={collectionId:n,parent:Re(i)};return oc(e).put(s)}return w.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[hl(t),""],!1,!0);return oc(e).U(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;n.push(qe(a.parent))}return n})}addFieldIndex(e,t){const n=rr(e),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const a=dn(e);return s.next(u=>{a.put(Zu(u,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=rr(e),i=dn(e),s=hn(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rr(e),n=hn(e),i=dn(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return w.forEach(this.Tn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new ic(n).cn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=hn(e);let i=!0;const s=new Map;return w.forEach(this.Tn(t),a=>this.In(e,a).next(u=>{i&&(i=!!u),s.set(a,u)})).next(()=>{if(i){let a=K();const u=[];return w.forEach(s,(c,d)=>{C("IndexedDbIndexManager",`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(c)} to execute ${Qt(t)}`);const f=function(F,Q){const Y=eo(Q);if(Y===void 0)return null;for(const $ of Ni(F,Y.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(d,c),p=function(F,Q){const Y=new Map;for(const $ of Nt(Q))for(const I of Ni(F,$.fieldPath))switch(I.op){case"==":case"in":Y.set($.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Y.set($.fieldPath.canonicalString(),I.value),Array.from(Y.values())}return null}(d,c),T=function(F,Q){const Y=[];let $=!0;for(const I of Nt(Q)){const g=I.kind===0?Uu(F,I.fieldPath,F.startAt):Bu(F,I.fieldPath,F.startAt);Y.push(g.value),$&&($=g.inclusive)}return new bn(Y,$)}(d,c),P=function(F,Q){const Y=[];let $=!0;for(const I of Nt(Q)){const g=I.kind===0?Bu(F,I.fieldPath,F.endAt):Uu(F,I.fieldPath,F.endAt);Y.push(g.value),$&&($=g.inclusive)}return new bn(Y,$)}(d,c),V=this.En(c,d,T),x=this.En(c,d,P),D=this.dn(c,d,p),G=this.An(c.indexId,f,V,T.inclusive,x,P.inclusive,D);return w.forEach(G,B=>n.G(B,t.limit).next(F=>{F.forEach(Q=>{const Y=N.fromSegments(Q.documentKey);a.has(Y)||(a=a.add(Y),u.push(Y))})}))}).next(()=>u)}return w.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=Ig(ee.create(e.filters,"and")).map(n=>oo(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,n,i,s,a,u){const c=(t!=null?t.length:1)*Math.max(n.length,s.length),d=c/(t!=null?t.length:1),f=[];for(let p=0;p<c;++p){const T=t?this.Rn(t[p/d]):li,P=this.Vn(e,T,n[p%d],i),V=this.mn(e,T,s[p%d],a),x=u.map(D=>this.Vn(e,T,D,!0));f.push(...this.createRange(P,V,x))}return f}Vn(e,t,n,i){const s=new Ft(e,N.empty(),t,n);return i?s:s.en()}mn(e,t,n,i){const s=new Ft(e,N.empty(),t,n);return i?s.en():s}In(e,t){const n=new ic(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const u of s)n.on(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(e,t){let n=2;const i=this.Tn(t);return w.forEach(i,s=>this.In(e,s).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new Z(oe.comparator),f=!1;for(const p of c.filters)for(const T of p.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?f=!0:d=d.add(T.field));for(const p of c.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&n===2?1:n)}fn(e,t){const n=new nr;for(const i of Nt(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=n.Xt(i.kind);Lt.Ft.Et(s,a)}return n.Ht()}Rn(e){const t=new nr;return Lt.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const n=new nr;return Lt.Ft.Et(Vo(this.databaseId,t),n.Xt(function(s){const a=Nt(s);return a.length===0?0:a[a.length-1].kind}(e))),n.Ht()}dn(e,t,n){if(n===null)return[];let i=[];i.push(new nr);let s=0;for(const a of Nt(e)){const u=n[s++];for(const c of i)if(this.pn(t,a.fieldPath)&&Ar(u))i=this.yn(i,a,u);else{const d=c.Xt(a.kind);Lt.Ft.Et(u,d)}}return this.wn(i)}En(e,t,n){return this.dn(e,t,n.position)}wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ht();return t}yn(e,t,n){const i=[...e],s=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new nr;c.seed(u.Ht()),Lt.Ft.Et(a,c.Xt(t.kind)),s.push(c)}return s}pn(e,t){return!!e.filters.find(n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=rr(e),i=dn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const a=[];return w.forEach(s,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(f,p){const T=p?new vr(p.sequenceNumber,new Me(Zt(p.readTime),new N(qe(p.documentKey)),p.largestBatchId)):vr.empty(),P=f.fields.map(([V,x])=>new gi(oe.fromServerFormat(V),x));return new Di(f.indexId,f.collectionGroup,P,T)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:j(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=rr(e),s=dn(e);return this.Sn(e).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(u=>w.forEach(u,c=>s.put(Zu(c.indexId,this.uid,a,n)))))}updateIndexEntries(e,t){const n=new Map;return w.forEach(t,(i,s)=>{const a=n.get(i.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),w.forEach(u,c=>this.bn(e,i,c).next(d=>{const f=this.Dn(s,c);return d.isEqual(f)?w.resolve():this.vn(e,s,c,d,f)}))))})}Cn(e,t,n,i){return hn(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,n,i){return hn(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}bn(e,t,n){const i=hn(e);let s=new Z(ft);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(a,u)=>{s=s.add(new Ft(n.indexId,t,u.arrayValue,u.directionalValue))}).next(()=>s)}Dn(e,t){let n=new Z(ft);const i=this.fn(t,e);if(i==null)return n;const s=eo(t);if(s!=null){const a=e.data.field(s.fieldPath);if(Ar(a))for(const u of a.arrayValue.values||[])n=n.add(new Ft(t.indexId,e.key,this.Rn(u),i))}else n=n.add(new Ft(t.indexId,e.key,li,i));return n}vn(e,t,n,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(c,d,f,p,T){const P=c.getIterator(),V=d.getIterator();let x=ln(P),D=ln(V);for(;x||D;){let G=!1,B=!1;if(x&&D){const F=f(x,D);F<0?B=!0:F>0&&(G=!0)}else x!=null?B=!0:G=!0;G?(p(D),D=ln(V)):B?(T(x),x=ln(P)):(x=ln(P),D=ln(V))}}(i,s,ft,u=>{a.push(this.Cn(e,t,n,u))},u=>{a.push(this.Fn(e,t,n,u))}),w.waitFor(a)}Sn(e){let t=1;return dn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((a,u)=>ft(a,u)).filter((a,u,c)=>!u||ft(a,c[u-1])!==0);const i=[];i.push(e);for(const a of n){const u=ft(a,e),c=ft(a,t);if(u===0)i[0]=e.en();else if(u>0&&c<0)i.push(a),i.push(a.en());else if(c>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.Mn(i[a],i[a+1]))return[];const u=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,li,[]],c=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,li,[]];s.push(IDBKeyRange.bound(u,c))}return s}Mn(e,t){return ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ac)}getMinOffset(e,t){return w.mapArray(this.Tn(t),n=>this.In(e,n).next(i=>i||M())).next(ac)}}function oc(r){return fe(r,"collectionParents")}function hn(r){return fe(r,"indexEntries")}function rr(r){return fe(r,"indexConfiguration")}function dn(r){return fe(r,"indexState")}function ac(r){L(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;bo(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Me(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class we{static withCacheSize(e){return new we(e,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId);let u=0;const c=n.J({range:a},(f,p,T)=>(u++,T.delete()));s.push(c.next(()=>{L(u===1)}));const d=[];for(const f of t.mutations){const p=gl(e,f.key.path,t.batchId);s.push(i.delete(p)),d.push(f.key)}return w.waitFor(s).next(()=>d)}function Ui(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.DEFAULT_COLLECTION_PERCENTILE=10,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,we.DEFAULT=new we(41943040,we.DEFAULT_COLLECTION_PERCENTILE,we.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),we.DISABLED=new we(-1,0,0);class us{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.xn={}}static Pt(e,t,n,i){L(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new us(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).J({index:"userMutationsIndex",range:n},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=yn(e),a=mt(e);return a.add({}).next(u=>{L(typeof u=="number");const c=new Oo(u,t,n,i),d=function(P,V,x){const D=x.baseMutations.map(B=>Mi(P.ht,B)),G=x.mutations.map(B=>Mi(P.ht,B));return{userId:V,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:D,mutations:G}}(this.serializer,this.userId,c),f=[];let p=new Z((T,P)=>j(T.canonicalString(),P.canonicalString()));for(const T of i){const P=gl(this.userId,T.key.path,u);p=p.add(T.key.path.popLast()),f.push(a.put(d)),f.push(s.put(P,tp))}return p.forEach(T=>{f.push(this.indexManager.addToCollectionParentIndex(e,T))}),e.addOnCommittedListener(()=>{this.xn[u]=c.keys()}),w.waitFor(f).next(()=>c)})}lookupMutationBatch(e,t){return mt(e).get(t).next(n=>n?(L(n.userId===this.userId),Mt(this.serializer,n)):null)}On(e,t){return this.xn[t]?w.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.xn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return mt(e).J({index:"userMutationsIndex",range:i},(a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),s=Mt(this.serializer,u)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return mt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{n=s.batchId,a.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mt(e).U("userMutationsIndex",t).next(n=>n.map(i=>Mt(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=_i(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return yn(e).J({range:i},(a,u,c)=>{const[d,f,p]=a,T=qe(f);if(d===this.userId&&t.path.isEqual(T))return mt(e).get(p).next(P=>{if(!P)throw M();L(P.userId===this.userId),s.push(Mt(this.serializer,P))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Z(j);const i=[];return t.forEach(s=>{const a=_i(this.userId,s.path),u=IDBKeyRange.lowerBound(a),c=yn(e).J({range:u},(d,f,p)=>{const[T,P,V]=d,x=qe(P);T===this.userId&&s.path.isEqual(x)?n=n.add(V):p.done()});i.push(c)}),w.waitFor(i).next(()=>this.Nn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=_i(this.userId,n),a=IDBKeyRange.lowerBound(s);let u=new Z(j);return yn(e).J({range:a},(c,d,f)=>{const[p,T,P]=c,V=qe(T);p===this.userId&&n.isPrefixOf(V)?V.length===i&&(u=u.add(P)):f.done()}).next(()=>this.Nn(e,u))}Nn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(mt(e).get(s).next(a=>{if(a===null)throw M();L(a.userId===this.userId),n.push(Mt(this.serializer,a))}))}),w.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return lh(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),w.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return yn(e).J({range:n},(s,a,u)=>{if(s[0]===this.userId){const c=qe(s[1]);i.push(c)}else u.done()}).next(()=>{L(i.length===0)})})}containsKey(e,t){return hh(e,this.userId,t)}Bn(e){return dh(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hh(r,e,t){const n=_i(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let a=!1;return yn(r).J({range:s,H:!0},(u,c,d)=>{const[f,p,T]=u;f===e&&p===i&&(a=!0),d.done()}).next(()=>a)}function mt(r){return fe(r,"mutations")}function yn(r){return fe(r,"documentMutations")}function dh(r){return fe(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new en(0)}static Qn(){return new en(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const n=new en(t.highestTargetId);return t.highestTargetId=n.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>U.fromTimestamp(new ae(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Kn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.$n(e,i)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(n=>(n.targetCount+=1,this.Wn(t,n),this.$n(e,n))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>fn(e).delete(t.targetId)).next(()=>this.Kn(e)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.$n(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return fn(e).J((a,u)=>{const c=cr(u);c.sequenceNumber<=t&&n.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,t){return fn(e).J((n,i)=>{const s=cr(i);t(s)})}Kn(e){return cc(e).get("targetGlobalKey").next(t=>(L(t!==null),t))}$n(e,t){return cc(e).put("targetGlobalKey",t)}Un(e,t){return fn(e).put(oh(this.serializer,t))}Wn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Qt(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return fn(e).J({range:i,index:"queryTargetsIndex"},(a,u,c)=>{const d=cr(u);kr(t,d.target)&&(s=d,c.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=gt(e);return t.forEach(a=>{const u=Re(a.path);i.push(s.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(e,n,a))}),w.waitFor(i)}removeMatchingKeys(e,t,n){const i=gt(e);return w.forEach(t,s=>{const a=Re(s.path);return w.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=gt(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=gt(e);let s=K();return i.J({range:n,H:!0},(a,u,c)=>{const d=qe(a[1]),f=new N(d);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Re(t.path),i=IDBKeyRange.bound([n],[hl(n)],!1,!0);let s=0;return gt(e).J({index:"documentTargetsIndex",H:!0,range:i},([a,u],c,d)=>{a!==0&&(s++,d.done())}).next(()=>s>0)}ut(e,t){return fn(e).get(t).next(n=>n?cr(n):null)}}function fn(r){return fe(r,"targets")}function cc(r){return fe(r,"targetGlobal")}function gt(r){return fe(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc([r,e],[t,n]){const i=j(r,t);return i===0?j(e,n):i}class wg{constructor(e){this.Gn=e,this.buffer=new Z(lc),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();lc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class fh{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){bt(t)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await rn(t)}await this.Yn(3e5)})}}class Ag{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Le.oe);const n=new wg(t);return this.Zn.forEachTarget(e,i=>n.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>n.Hn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(uc)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uc):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,i,s,a,u,c,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(n=p,u=Date.now(),this.removeTargets(e,n,t))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),mn()<=H.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function mh(r,e){return new Ag(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.db=e,this.garbageCollector=mh(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(n,i)=>t(i))}addReference(e,t,n){return hi(e,n)}removeReference(e,t,n){return hi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return hi(e,t)}ir(e,t){return function(i,s){let a=!1;return dh(i).Y(u=>hh(i,u,s).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.rr(e,(a,u)=>{if(u<=t){const c=this.ir(e,a).next(d=>{if(!d)return s++,n.getEntry(e,a).next(()=>(n.removeEntry(a,U.min()),gt(e).delete(function(p){return[0,Re(p.path)]}(a))))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return hi(e,t)}rr(e,t){const n=gt(e);let i,s=Le.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(s!==Le.oe&&t(new N(qe(i)),s),s=d,i=c):s=Le.oe}).next(()=>{s!==Le.oe&&t(new N(qe(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hi(r,e){return gt(r).put(function(n,i){return{targetId:0,path:Re(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.changes=new at(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?w.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return kt(e).put(n)}removeEntry(e,t,n){return kt(e).delete(function(s,a){const u=s.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Li(a),u[u.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.sr(e,n)))}getEntry(e,t){let n=ce.newInvalidDocument(t);return kt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ir(t))},(i,s)=>{n=this._r(t,s)}).next(()=>n)}ar(e,t){let n={size:0,document:ce.newInvalidDocument(t)};return kt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ir(t))},(i,s)=>{n={document:this._r(t,s),size:Ui(s)}}).next(()=>n)}getEntries(e,t){let n=Oe();return this.ur(e,t,(i,s)=>{const a=this._r(i,s);n=n.insert(i,a)}).next(()=>n)}cr(e,t){let n=Oe(),i=new se(N.comparator);return this.ur(e,t,(s,a)=>{const u=this._r(s,a);n=n.insert(s,u),i=i.insert(s,Ui(a))}).next(()=>({documents:n,lr:i}))}ur(e,t,n){if(t.isEmpty())return w.resolve();let i=new Z(fc);t.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(ir(i.first()),ir(i.last())),a=i.getIterator();let u=a.getNext();return kt(e).J({index:"documentKeyIndex",range:s},(c,d,f)=>{const p=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&fc(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(ir(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const a=t.path,u=[a.popLast().toArray(),a.lastSegment(),Li(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return kt(e).U(IDBKeyRange.bound(u,c,!0)).next(d=>{s==null||s.incrementDocumentReadCount(d.length);let f=Oe();for(const p of d){const T=this._r(N.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);T.isFoundDocument()&&(xr(t,T)||i.has(T.key))&&(f=f.insert(T.key,T))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Oe();const a=dc(t,n),u=dc(t,Me.max());return kt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,f)=>{const p=this._r(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new Pg(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return hc(e).get("remoteDocumentGlobalKey").next(t=>(L(!!t),t))}sr(e,t){return hc(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const n=dg(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ce.newInvalidDocument(e)}}function gh(r){return new bg(r)}class Pg extends ph{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new at(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new Z((s,a)=>j(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const u=this.Pr.get(s);if(t.push(this.hr.removeEntry(e,s,u.readTime)),a.isValidDocument()){const c=Xu(this.hr.serializer,a);i=i.add(s.path.popLast());const d=Ui(c);n+=d-u.size,t.push(this.hr.addEntry(e,s,c))}else if(n-=u.size,this.trackRemovals){const c=Xu(this.hr.serializer,a.convertToNoDocument(U.min()));t.push(this.hr.addEntry(e,s,c))}}),i.forEach(s=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.hr.updateMetadata(e,n)),w.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(n=>(this.Pr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:n,lr:i})=>(i.forEach((s,a)=>{this.Pr.set(s,{size:a,readTime:n.get(s).readTime})}),n))}}function hc(r){return fe(r,"remoteDocumentGlobal")}function kt(r){return fe(r,"remoteDocumentsV14")}function ir(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function dc(r,e){const t=e.documentKey.path.toArray();return[r,Li(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function fc(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=j(t[s],n[s]),i)return i;return i=j(t.length,n.length),i||(i=j(t[t.length-2],n[n.length-2]),i||j(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&pr(n.mutation,i,ke.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){const i=ze();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=ar();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=ze();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,i){let s=Oe();const a=mr(),u=function(){return mr()}();return t.forEach((c,d)=>{const f=n.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ut)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),pr(f.mutation,d,f.mutation.getFieldMask(),ae.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var p;return u.set(d,new Sg(f,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,t){const n=mr();let i=new se((a,u)=>a-u),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=n.get(c)||ke.empty();f=u.applyToLocalView(d,f),n.set(c,f);const p=(i.get(u.batchId)||K()).add(c);i=i.insert(u.batchId,p)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,f=c.value,p=Ml();f.forEach(T=>{if(!s.has(T)){const P=zl(t.get(T),n.get(T));P!==null&&p.set(T,P),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):w.resolve(ze());let u=-1,c=s;return a.next(d=>w.forEach(d,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{c=c.insert(f,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,K())).next(f=>({batchId:u,changes:Ol(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new N(t)).next(n=>{let i=ar();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=ar();return this.indexManager.getCollectionParents(e,s).next(u=>w.forEach(u,c=>{const d=function(p,T){return new ts(T,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,n,i).next(f=>{f.forEach((p,T)=>{a=a.insert(p,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ce.newInvalidDocument(f)))});let u=ar();return a.forEach((c,d)=>{const f=s.get(c);f!==void 0&&pr(f.mutation,d,ke.empty(),ae.now()),xr(t,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return w.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(i){return{name:i.name,query:ah(i.bundledQuery),readTime:Ve(i.readTime)}}(t)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.overlays=new se(N.comparator),this.Er=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ze();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.Tt(e,t,s)}),w.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Er.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(n)),w.resolve()}getOverlaysForCollection(e,t,n){const i=ze(),s=t.length+1,a=new N(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>n&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new se((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let f=s.get(d.largestBatchId);f===null&&(f=ze(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=ze(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=i)););return w.resolve(u)}Tt(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(n.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Lo(t,n));let s=this.Er.get(t);s===void 0&&(s=K(),this.Er.set(t,s)),this.Er.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.dr=new Z(me.Ar),this.Rr=new Z(me.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new me(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new me(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new N(new ne([])),n=new me(t,e),i=new me(t,e+1),s=[];return this.Rr.forEachInRange([n,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new N(new ne([])),n=new me(t,e),i=new me(t,e+1);let s=K();return this.Rr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class me{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return N.comparator(e.key,t.key)||j(e.br,t.br)}static Vr(e,t){return j(e.br,t.br)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Z(me.Ar)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Oo(s,t,n,i);this.mutationQueue.push(a);for(const u of i)this.vr=this.vr.add(new me(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(e,t){return w.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Fr(n),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([n,i],a=>{const u=this.Cr(a.br);s.push(u)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Z(j);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],u=>{n=n.add(u.br)})}),w.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;N.isDocumentKey(s)||(s=s.child(""));const a=new me(new N(s),0);let u=new Z(j);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.br)),!0)},a),w.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(n=>{const i=this.Cr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){L(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return w.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new me(t,0),i=this.vr.firstAfterOrEqual(n);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.Nr=e,this.docs=function(){return new se(N.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return w.resolve(n?n.document.mutableCopy():ce.newInvalidDocument(t))}getEntries(e,t){let n=Oe();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():ce.newInvalidDocument(i))}),w.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Oe();const a=t.path,u=new N(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bo(dl(f),n)<=0||(i.has(f.key)||xr(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,n,i){M()}Lr(e,t){return w.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Ng(this)}getSize(e){return w.resolve(this.size)}}class Ng extends ph{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.hr.addEntry(e,i)):this.hr.removeEntry(n)}),w.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e){this.persistence=e,this.Br=new at(t=>Qt(t),kr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new zo,this.targetCount=0,this.Qr=en.qn()}forEachTarget(e,t){return this.Br.forEach((n,i)=>t(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),w.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new en(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.Un(t),w.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Br.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return w.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),w.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return w.resolve(n)}containsKey(e,t){return w.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Le(0),this.Ur=!1,this.Ur=!0,this.Wr=new Dg,this.referenceDelegate=e(this),this.Gr=new Og(this),this.indexManager=new vg,this.remoteDocumentCache=function(i){return new xg(i)}(n=>this.referenceDelegate.zr(n)),this.serializer=new sh(t),this.jr=new Cg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new kg(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const i=new Mg(this.$r.next());return this.referenceDelegate.Hr(),n(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,t){return w.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class Mg extends ml{constructor(e){super(),this.currentSequenceNumber=e}}class cs{constructor(e){this.persistence=e,this.Zr=new zo,this.Xr=null}static ei(e){return new cs(e)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),w.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),w.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(i=>this.ti.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ti,n=>{const i=N.fromPath(n);return this.ni(e,i).next(s=>{s||t.removeEntry(i,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return w.or([()=>w.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Bi{constructor(e,t){this.persistence=e,this.ri=new at(n=>Re(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=mh(this,t)}static ei(e,t){return new Bi(e,t)}Hr(){}Jr(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return w.forEach(this.ri,(n,i)=>this.ir(e,n,i).next(s=>s?w.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,t).next(u=>{u||(n++,s.removeEntry(a,U.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),w.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),w.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ii(e.data.value)),t}ir(e,t,n){return w.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.ri.get(t);return w.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.serializer=e}O(e,t,n,i){const s=new Xi("createOrUpgrade",t);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Su,{unique:!0}),c.createObjectStore("documentMutations")}(e),mc(e),function(c){c.createObjectStore("remoteDocuments")}(e));let a=w.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),mc(e)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(f=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Su,{unique:!0});const p=d.store("mutations"),T=f.map(P=>p.put(P));return w.waitFor(T)})}(e,s))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(a=a.next(()=>this.ii(s))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.si(s)))),n<7&&i>=7&&(a=a.next(()=>this.oi(s))),n<8&&i>=8&&(a=a.next(()=>this._i(e,s))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(a=a.next(()=>this.ai(s))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:fp});d.createIndex("collectionPathOverlayIndex",mp,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",pp,{unique:!1})})(e)})),n<13&&i>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:np});d.createIndex("documentKeyIndex",rp),d.createIndex("collectionGroupIndex",ip)}(e)).next(()=>this.ui(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this.ci(e,s))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:cp}).createIndex("sequenceNumberIndex",lp,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:hp}).createIndex("documentKeyIndex",dp,{unique:!1})}(e))),n<16&&i>=16&&(a=a.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(e)})),a}si(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Ui(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ii(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>w.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>w.forEach(u,c=>{L(c.userId===s.userId);const d=Mt(this.serializer,c);return lh(e,s.userId,d).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((a,u)=>{const c=new ne(a),d=function(p){return[0,Re(p)]}(c);s.push(t.get(d).next(f=>f?w.resolve():(p=>t.put({targetId:0,path:Re(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(s))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:up});const n=t.store("collectionParents"),i=new qo,s=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Re(c)})}};return t.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new ne(a);return s(c.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([a,u,c],d)=>{const f=qe(u);return s(f.popLast())}))}ai(e){const t=e.store("targets");return t.J((n,i)=>{const s=cr(i),a=oh(this.serializer,s);return t.put(a)})}ui(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,a)=>{const u=t.store("remoteDocumentsV14"),c=function(p){return p.document?new N(ne.fromString(p.document.name).popFirst(5)):p.noDocument?N.fromSegments(p.noDocument.path):p.unknownDocument?N.fromSegments(p.unknownDocument.path):M()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(d))}).next(()=>w.waitFor(i))}ci(e,t){const n=t.store("mutations"),i=gh(this.serializer),s=new jo(cs.ei,this.serializer.ht);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let f=(d=u.get(c.userId))!==null&&d!==void 0?d:K();Mt(this.serializer,c).keys().forEach(p=>f=f.add(p)),u.set(c.userId,f)}),w.forEach(u,(c,d)=>{const f=new Se(d),p=as.Pt(this.serializer,f),T=s.getIndexManager(f),P=us.Pt(f,this.serializer,T,s.referenceDelegate);return new _h(i,P,p,T).recalculateAndSaveOverlaysForDocumentKeys(new to(t,Le.oe),c).next()})})}}function mc(r){r.createObjectStore("targetDocuments",{keyPath:op}).createIndex("documentTargetsIndex",ap,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",sp,{unique:!0}),r.createObjectStore("targetGlobal")}const $s="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Go{constructor(e,t,n,i,s,a,u,c,d,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.li=s,this.window=a,this.document=u,this.hi=d,this.Pi=f,this.Ti=p,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=T=>Promise.resolve(),!Go.p())throw new O(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Rg(this,i),this.Vi=t+"main",this.serializer=new sh(c),this.mi=new je(this.Vi,this.Ti,new Lg(this.serializer)),this.Wr=new mg,this.Gr=new Eg(this.referenceDelegate,this.serializer),this.remoteDocumentCache=gh(this.serializer),this.jr=new fg,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,f===!1&&Ce("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(S.FAILED_PRECONDITION,$s);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new Le(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>di(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(bt(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return sr(e).get("owner").next(t=>w.resolve(this.Fi(t)))}Mi(e){return di(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=fe(t,"clientMetadata");return n.U().next(i=>{const s=this.Ni(i,18e5),a=i.filter(u=>s.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?w.resolve(!0):sr(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new O(S.FAILED_PRECONDITION,$s);return!1}}return!(!this.networkEnabled||!this.inForeground)||di(e).U().next(n=>this.Ni(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(s||a&&u)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new to(e,Le.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(n=>this.Oi(n.updateTimeMs,t)&&!this.Bi(n.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>di(e).U().next(t=>this.Ni(t,18e5).map(n=>n.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return us.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Tg(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return as.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,n){C("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(c){return c===17?yp:c===16?_p:c===15?So:c===14?Il:c===13?yl:c===12?gp:c===11?_l:void M()}(this.Ti);let a;return this.mi.runTransaction(e,i,s,u=>(a=new to(u,this.$r?this.$r.next():Le.oe),t==="readwrite-primary"?this.bi(a).next(c=>!!c||this.Di(a)).next(c=>{if(!c)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new O(S.FAILED_PRECONDITION,fl);return n(a)}).next(c=>this.Ci(a).next(()=>c)):this.Ui(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ui(e){return sr(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(S.FAILED_PRECONDITION,$s)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sr(e).put("owner",t)}static p(){return je.p()}vi(e){const t=sr(e);return t.get("owner").next(n=>this.Fi(n)?(C("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):w.resolve())}Oi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ce(`Detected an update time that is in the future: ${e} > ${n}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;el()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const n=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ce("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sr(r){return fe(r,"owner")}function di(r){return fe(r,"clientMetadata")}function yh(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=i}static zi(e,t){let n=K(),i=K();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ko(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return el()?8:pl(de())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Xi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Fg;return this.ts(e,t,a).next(u=>{if(s.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>s.result)}ns(e,t,n,i){return n.documentReadCount<this.Ji?(mn()<=H.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),w.resolve()):(mn()<=H.DEBUG&&C("QueryEngine","Query:",pn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Yi*i?(mn()<=H.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fe(t))):w.resolve())}Xi(e,t){if(qu(t))return w.resolve(null);let n=Fe(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ao(t,null,"F"),n=Fe(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=K(...s);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(c=>{const d=this.rs(t,u);return this.ss(t,d,a,c.readTime)?this.Xi(e,ao(t,null,"F")):this.os(e,d,t,c)}))})))}es(e,t,n,i){return qu(t)||i.isEqual(U.min())?w.resolve(null):this.Zi.getDocuments(e,n).next(s=>{const a=this.rs(t,s);return this.ss(t,a,n,i)?w.resolve(null):(mn()<=H.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pn(t)),this.os(e,a,t,Wm(i,-1)).next(u=>u))})}rs(e,t){let n=new Z(xl(e));return t.forEach((i,s)=>{xr(e,s)&&(n=n.add(s))}),n}ss(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,t,n){return mn()<=H.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",pn(t)),this.Zi.getDocumentsMatchingQuery(e,t,Me.min(),n)}os(e,t,n,i){return this.Zi.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,n,i){this.persistence=e,this._s=t,this.serializer=i,this.us=new se(j),this.cs=new at(s=>Qt(s),kr),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _h(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function vh(r,e,t,n){return new Ug(r,e,t,n)}async function Th(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let c=K();for(const d of i){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of s){u.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(n,c).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function Bg(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,f){const p=d.batch,T=p.keys();let P=w.resolve();return T.forEach(V=>{P=P.next(()=>f.getEntry(c,V)).next(x=>{const D=d.docVersions.get(V);L(D!==null),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function Eh(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function qg(r,e){const t=z(r),n=e.snapshotVersion;let i=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});i=t.us;const u=[];e.targetChanges.forEach((f,p)=>{const T=i.get(p);if(!T)return;u.push(t.Gr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(s,f.addedDocuments,p)));let P=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?P=P.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),i=i.insert(p,P),function(x,D,G){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(T,P,f)&&u.push(t.Gr.updateTargetData(s,P))});let c=Oe(),d=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(zg(s,a,e.documentUpdates).next(f=>{c=f.Is,d=f.Es})),!n.isEqual(U.min())){const f=t.Gr.getLastRemoteSnapshotVersion(s).next(p=>t.Gr.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return w.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(t.us=i,s))}function zg(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=Oe();return t.forEach((u,c)=>{const d=s.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Is:a,Es:i}})}function jg(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Gg(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Gr.getTargetData(n,e).next(s=>s?(i=s,w.resolve(i)):t.Gr.allocateTargetId(n).next(a=>(i=new Xe(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.us.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function go(r,e,t){const n=z(r),i=n.us.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bt(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.us=n.us.remove(e),n.cs.delete(i.target)}function pc(r,e,t){const n=z(r);let i=U.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const p=z(c),T=p.cs.get(f);return T!==void 0?w.resolve(p.us.get(T)):p.Gr.getTargetData(d,f)}(n,a,Fe(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>n._s.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?s:K())).next(u=>(Kg(n,Np(e),u),{documents:u,ds:s})))}function Kg(r,e,t){let n=r.ls.get(e)||U.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.ls.set(e,n)}class gc{constructor(){this.activeTargetIds=Bp()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wh{constructor(){this._o=new gc,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new gc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi=null;function Hs(){return fi===null?fi=function(){return 268435456+Math.round(2147483648*Math.random())}():fi++,"0x"+fi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class Qg extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(t,n,i,s,a){const u=Hs(),c=this.No(t,n.toUriEncodedString());C("RestConnection",`Sending RPC '${t}' ${u}:`,c,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,s,a),this.Bo(t,c,d,i).then(f=>(C("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw yr("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",i),f})}ko(t,n,i,s,a,u){return this.Oo(t,n,i,s,a)}Lo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}No(t,n){const i=Hg[t];return`${this.Fo}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,i){const s=Hs();return new Promise((a,u)=>{const c=new sl;c.setWithCredentials(!0),c.listenOnce(ol.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pi.NO_ERROR:const f=c.getResponseJson();C(Ee,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case pi.TIMEOUT:C(Ee,`RPC '${e}' ${s} timed out`),u(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:const p=c.getStatus();if(C(Ee,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const V=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN}(P.status);u(new O(V,P.message))}else u(new O(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new O(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(Ee,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);C(Ee,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",d,n,15)})}qo(e,t,n){const i=Hs(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cl(),u=ul(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const f=s.join("");C(Ee,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=a.createWebChannel(f,c);let T=!1,P=!1;const V=new Wg({Eo:D=>{P?C(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(T||(C(Ee,`Opening RPC '${e}' stream ${i} transport.`),p.open(),T=!0),C(Ee,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Ao:()=>p.close()}),x=(D,G,B)=>{D.listen(G,F=>{try{B(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return x(p,or.EventType.OPEN,()=>{P||(C(Ee,`RPC '${e}' stream ${i} transport opened.`),V.So())}),x(p,or.EventType.CLOSE,()=>{P||(P=!0,C(Ee,`RPC '${e}' stream ${i} transport closed`),V.Do())}),x(p,or.EventType.ERROR,D=>{P||(P=!0,yr(Ee,`RPC '${e}' stream ${i} transport errored:`,D),V.Do(new O(S.UNAVAILABLE,"The operation could not be completed")))}),x(p,or.EventType.MESSAGE,D=>{var G;if(!P){const B=D.data[0];L(!!B);const F=B,Q=(F==null?void 0:F.error)||((G=F[0])===null||G===void 0?void 0:G.error);if(Q){C(Ee,`RPC '${e}' stream ${i} received error:`,Q);const Y=Q.status;let $=function(y){const v=le[y];if(v!==void 0)return Kl(v)}(Y),I=Q.message;$===void 0&&($=S.INTERNAL,I="Unknown error status: "+Y+" with message "+Q.message),P=!0,V.Do(new O($,I)),p.close()}else C(Ee,`RPC '${e}' stream ${i} received:`,B),V.vo(B)}}),x(u,al.STAT_EVENT,D=>{D.stat===Zs.PROXY?C(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Zs.NOPROXY&&C(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(){return typeof window<"u"?window:null}function wi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(r){return new ng(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t,n=1e3,i=1.5,s=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t,n,i,s,a,u,c){this.li=e,this.Yo=n,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ah(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Ce(t.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Xo===t&&this.I_(n,i)},n=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(i)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{n(()=>this.E_(i))}),this.stream.onMessage(i=>{n(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xg extends Rh{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=sg(this.serializer,e),n=function(s){if(!("targetChange"in s))return U.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ve(a.readTime):U.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=lo(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=xi(c)?{documents:Zl(s,c)}:{query:eh(s,c).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Wl(s,a.resumeToken);const d=uo(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Sn(s,a.snapshotVersion.toTimestamp());const d=uo(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const n=ag(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=lo(this.serializer),t.removeTarget=e,this.c_(t)}}class Yg extends Rh{constructor(e,t,n,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return L(!!e.streamToken),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=og(e.writeResults,e.commitTime),n=Ve(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=lo(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Mi(this.serializer,n))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,co(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(S.UNKNOWN,s.toString())})}ko(e,t,n,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,co(t,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class e_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ce(t),this.C_=!1):C("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{n.enqueueAndForget(async()=>{sn(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=z(c);d.k_.add(4),await Or(d),d.K_.set("Unknown"),d.k_.delete(4),await hs(d)}(this))})}),this.K_=new e_(n,i)}}async function hs(r){if(sn(r))for(const e of r.q_)await e(!0)}async function Or(r){for(const e of r.q_)await e(!1)}function bh(r,e){const t=z(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Qo(t)?Wo(t):On(t).s_()&&Ho(t,e))}function $o(r,e){const t=z(r),n=On(t);t.B_.delete(e),n.s_()&&Ph(t,e),t.B_.size===0&&(n.s_()?n.a_():sn(t)&&t.K_.set("Unknown"))}function Ho(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}On(r).V_(e)}function Ph(r,e){r.U_.xe(e),On(r).m_(e)}function Wo(r){r.U_=new Yp({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),On(r).start(),r.K_.F_()}function Qo(r){return sn(r)&&!On(r).i_()&&r.B_.size>0}function sn(r){return z(r).k_.size===0}function Sh(r){r.U_=void 0}async function n_(r){r.K_.set("Online")}async function r_(r){r.B_.forEach((e,t)=>{Ho(r,e)})}async function i_(r,e){Sh(r),Qo(r)?(r.K_.O_(e),Wo(r)):r.K_.set("Unknown")}async function s_(r,e,t){if(r.K_.set("Online"),e instanceof Hl&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.B_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.B_.delete(u),i.U_.removeTarget(u))}(r,e)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await qi(r,n)}else if(e instanceof Ei?r.U_.$e(e):e instanceof $l?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(U.min()))try{const n=await Eh(r.localStore);t.compareTo(n)>=0&&await function(s,a){const u=s.U_.it(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.B_.get(d);f&&s.B_.set(d,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const f=s.B_.get(c);if(!f)return;s.B_.set(c,f.withResumeToken(he.EMPTY_BYTE_STRING,f.snapshotVersion)),Ph(s,c);const p=new Xe(f.target,c,d,f.sequenceNumber);Ho(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await qi(r,n)}}async function qi(r,e,t){if(!bt(e))throw e;r.k_.add(1),await Or(r),r.K_.set("Offline"),t||(t=()=>Eh(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await hs(r)})}function Ch(r,e){return e().catch(t=>qi(r,t,e))}async function Mr(r){const e=z(r),t=Rt(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;o_(e);)try{const i=await jg(e.localStore,n);if(i===null){e.L_.length===0&&t.a_();break}n=i.batchId,a_(e,i)}catch(i){await qi(e,i)}Vh(e)&&Dh(e)}function o_(r){return sn(r)&&r.L_.length<10}function a_(r,e){r.L_.push(e);const t=Rt(r);t.s_()&&t.f_&&t.g_(e.mutations)}function Vh(r){return sn(r)&&!Rt(r).i_()&&r.L_.length>0}function Dh(r){Rt(r).start()}async function u_(r){Rt(r).w_()}async function c_(r){const e=Rt(r);for(const t of r.L_)e.g_(t.mutations)}async function l_(r,e,t){const n=r.L_.shift(),i=Mo.from(n,e,t);await Ch(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Mr(r)}async function h_(r,e){e&&Rt(r).f_&&await async function(n,i){if(function(a){return Qp(a)&&a!==S.ABORTED}(i.code)){const s=n.L_.shift();Rt(n).__(),await Ch(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Mr(n)}}(r,e),Vh(r)&&Dh(r)}async function yc(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=sn(t);t.k_.add(3),await Or(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await hs(t)}async function d_(r,e){const t=z(r);e?(t.k_.delete(2),await hs(t)):e||(t.k_.add(2),await Or(t),t.K_.set("Unknown"))}function On(r){return r.W_||(r.W_=function(t,n,i){const s=z(t);return s.b_(),new Xg(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Ro:n_.bind(null,r),mo:r_.bind(null,r),po:i_.bind(null,r),R_:s_.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Qo(r)?Wo(r):r.K_.set("Unknown")):(await r.W_.stop(),Sh(r))})),r.W_}function Rt(r){return r.G_||(r.G_=function(t,n,i){const s=z(t);return s.b_(),new Yg(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:u_.bind(null,r),po:h_.bind(null,r),p_:c_.bind(null,r),y_:l_.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Mr(r)):(await r.G_.stop(),r.L_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,u=new Jo(e,t,a,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xo(r,e){if(Ce("AsyncQueue",`${e}: ${r}`),bt(r))return new O(S.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{static emptySet(e){return new In(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||N.comparator(t.key,n.key):(t,n)=>N.comparator(t.key,n.key),this.keyedMap=ar(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof In)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new In;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.z_=new se(N.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):M():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Cn{constructor(e,t,n,i,s,a,u,c,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Cn(e,t,In.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class m_{constructor(){this.queries=vc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const i=z(t),s=i.queries;i.queries=vc(),s.forEach((a,u)=>{for(const c of u.J_)c.onError(n)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function vc(){return new at(r=>kl(r),rs)}async function p_(r,e){const t=z(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.Y_()&&e.Z_()&&(n=2):(s=new f_,n=e.Z_()?0:1);try{switch(n){case 0:s.H_=await t.onListen(i,!0);break;case 1:s.H_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Xo(a,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.J_.push(e),e.ea(t.onlineState),s.H_&&e.ta(s.H_)&&Yo(t)}async function g_(r,e){const t=z(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.J_.indexOf(e);a>=0&&(s.J_.splice(a,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function __(r,e){const t=z(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.J_)u.ta(i)&&(n=!0);a.H_=i}}n&&Yo(t)}function y_(r,e,t){const n=z(r),i=n.queries.get(e);if(i)for(const s of i.J_)s.onError(t);n.queries.delete(e)}function Yo(r){r.X_.forEach(e=>{e.next()})}var _o,Tc;(Tc=_o||(_o={})).na="default",Tc.Cache="cache";class I_{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Cn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Cn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==_o.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class v_{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=K(),this.mutatedKeys=K(),this.Va=xl(e),this.ma=new In(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new Ic,i=t?t.ma:this.ma;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const T=i.get(f),P=xr(this.query,p)?p:null,V=!!T&&this.mutatedKeys.has(T.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;T&&P?T.data.isEqual(P.data)?V!==x&&(n.track({type:3,doc:P}),D=!0):this.ya(T,P)||(n.track({type:2,doc:P}),D=!0,(c&&this.Va(P,c)>0||d&&this.Va(P,d)<0)&&(u=!0)):!T&&P?(n.track({type:0,doc:P}),D=!0):T&&!P&&(n.track({type:1,doc:T}),D=!0,(c||d)&&(u=!0)),D&&(P?(a=a.add(P),s=x?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{ma:a,pa:n,ss:u,mutatedKeys:s}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,p)=>function(P,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(P)-x(V)}(f.type,p.type)||this.Va(f.doc,p.doc)),this.wa(n),i=i!=null&&i;const u=t&&!i?this.Sa():[],c=this.Ra.size===0&&this.current&&!i?1:0,d=c!==this.Aa;return this.Aa=c,a.length!==0||d?{snapshot:new Cn(this.query,e.ma,s,a,e.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ic,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=K(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new xh(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new kh(n))}),t}va(e){this.da=e.ds,this.Ra=K();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Cn.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class T_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class E_{constructor(e){this.key=e,this.Fa=!1}}class w_{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new at(u=>kl(u),rs),this.Oa=new Map,this.Na=new Set,this.La=new se(N.comparator),this.Ba=new Map,this.ka=new zo,this.qa={},this.Qa=new Map,this.Ka=en.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function A_(r,e,t=!0){const n=Uh(r);let i;const s=n.xa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await Nh(n,e,t,!0),i}async function R_(r,e){const t=Uh(r);await Nh(t,e,!0,!1)}async function Nh(r,e,t,n){const i=await Gg(r.localStore,Fe(e)),s=i.targetId,a=r.sharedClientState.addLocalQueryTarget(s,t);let u;return n&&(u=await b_(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&bh(r.remoteStore,i),u}async function b_(r,e,t,n,i){r.Ua=(p,T,P)=>async function(x,D,G,B){let F=D.view.ga(G);F.ss&&(F=await pc(x.localStore,D.query,!1).then(({documents:I})=>D.view.ga(I,F)));const Q=B&&B.targetChanges.get(D.targetId),Y=B&&B.targetMismatches.get(D.targetId)!=null,$=D.view.applyChanges(F,x.isPrimaryClient,Q,Y);return wc(x,D.targetId,$.ba),$.snapshot}(r,p,T,P);const s=await pc(r.localStore,e,!0),a=new v_(e,s.ds),u=a.ga(s.documents),c=Nr.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),d=a.applyChanges(u,r.isPrimaryClient,c);wc(r,t,d.ba);const f=new T_(e,t,a);return r.xa.set(e,f),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),d.snapshot}async function P_(r,e,t){const n=z(r),i=n.xa.get(e),s=n.Oa.get(i.targetId);if(s.length>1)return n.Oa.set(i.targetId,s.filter(a=>!rs(a,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await go(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&$o(n.remoteStore,i.targetId),yo(n,i.targetId)}).catch(rn)):(yo(n,i.targetId),await go(n.localStore,i.targetId,!0))}async function S_(r,e){const t=z(r),n=t.xa.get(e),i=t.Oa.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),$o(t.remoteStore,n.targetId))}async function C_(r,e,t){const n=Bh(r);try{const i=await function(a,u){const c=z(a),d=ae.now(),f=u.reduce((P,V)=>P.add(V.key),K());let p,T;return c.persistence.runTransaction("Locally write mutations","readwrite",P=>{let V=Oe(),x=K();return c.hs.getEntries(P,f).next(D=>{V=D,V.forEach((G,B)=>{B.isValidDocument()||(x=x.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(P,V)).next(D=>{p=D;const G=[];for(const B of u){const F=Hp(B,p.get(B.key).overlayedDocument);F!=null&&G.push(new ut(B.key,F,Al(F.value.mapValue),xe.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,G,u)}).next(D=>{T=D;const G=D.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(P,D.batchId,G)})}).then(()=>({batchId:T.batchId,changes:Ol(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let d=a.qa[a.currentUser.toKey()];d||(d=new se(j)),d=d.insert(u,c),a.qa[a.currentUser.toKey()]=d}(n,i.batchId,t),await Lr(n,i.changes),await Mr(n.remoteStore)}catch(i){const s=Xo(i,"Failed to persist write");t.reject(s)}}async function Oh(r,e){const t=z(r);try{const n=await qg(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ba.get(s);a&&(L(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Fa=!0:i.modifiedDocuments.size>0?L(a.Fa):i.removedDocuments.size>0&&(L(a.Fa),a.Fa=!1))}),await Lr(t,n,e)}catch(n){await rn(n)}}function Ec(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.xa.forEach((s,a)=>{const u=a.view.ea(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=z(a);c.onlineState=u;let d=!1;c.queries.forEach((f,p)=>{for(const T of p.J_)T.ea(u)&&(d=!0)}),d&&Yo(c)}(n.eventManager,e),i.length&&n.Ma.R_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function V_(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Ba.get(e),s=i&&i.key;if(s){let a=new se(N.comparator);a=a.insert(s,ce.newNoDocument(s,U.min()));const u=K().add(s),c=new os(U.min(),new Map,new se(j),a,u);await Oh(n,c),n.La=n.La.remove(s),n.Ba.delete(e),Zo(n)}else await go(n.localStore,e,!1).then(()=>yo(n,e,t)).catch(rn)}async function D_(r,e){const t=z(r),n=e.batch.batchId;try{const i=await Bg(t.localStore,e);Lh(t,n,null),Mh(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Lr(t,i)}catch(i){await rn(i)}}async function k_(r,e,t){const n=z(r);try{const i=await function(a,u){const c=z(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,u).next(p=>(L(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(n.localStore,e);Lh(n,e,t),Mh(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Lr(n,i)}catch(i){await rn(i)}}function Mh(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Lh(r,e,t){const n=z(r);let i=n.qa[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.qa[n.currentUser.toKey()]=i}}function yo(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||Fh(r,n)})}function Fh(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&($o(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),Zo(r))}function wc(r,e,t){for(const n of t)n instanceof kh?(r.ka.addReference(n.key,e),x_(r,n)):n instanceof xh?(C("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||Fh(r,n.key)):M()}function x_(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(C("SyncEngine","New document in limbo: "+t),r.Na.add(n),Zo(r))}function Zo(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new N(ne.fromString(e)),n=r.Ka.next();r.Ba.set(n,new E_(t)),r.La=r.La.insert(t,n),bh(r.remoteStore,new Xe(Fe(ns(t.path)),n,"TargetPurposeLimboResolution",Le.oe))}}async function Lr(r,e,t){const n=z(r),i=[],s=[],a=[];n.xa.isEmpty()||(n.xa.forEach((u,c)=>{a.push(n.Ua(c,e,t).then(d=>{var f;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){i.push(d);const p=Ko.zi(c.targetId,d);s.push(p)}}))}),await Promise.all(a),n.Ma.R_(i),await async function(c,d){const f=z(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(d,T=>w.forEach(T.Wi,P=>f.persistence.referenceDelegate.addReference(p,T.targetId,P)).next(()=>w.forEach(T.Gi,P=>f.persistence.referenceDelegate.removeReference(p,T.targetId,P)))))}catch(p){if(!bt(p))throw p;C("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const T=p.targetId;if(!p.fromCache){const P=f.us.get(T),V=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(V);f.us=f.us.insert(T,x)}}}(n.localStore,s))}async function N_(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const n=await Th(t.localStore,e);t.currentUser=e,function(s,a){s.Qa.forEach(u=>{u.forEach(c=>{c.reject(new O(S.CANCELLED,a))})}),s.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Lr(t,n.Ts)}}function O_(r,e){const t=z(r),n=t.Ba.get(e);if(n&&n.Fa)return K().add(n.key);{let i=K();const s=t.Oa.get(e);if(!s)return i;for(const a of s){const u=t.xa.get(a);i=i.unionWith(u.view.fa)}return i}}function Uh(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=O_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V_.bind(null,e),e.Ma.R_=__.bind(null,e.eventManager),e.Ma.Wa=y_.bind(null,e.eventManager),e}function Bh(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=D_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k_.bind(null,e),e}class Pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ls(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return vh(this.persistence,new Ih,e.initialUser,this.serializer)}ja(e){return new jo(cs.ei,this.serializer)}za(e){return new wh}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pr.provider={build:()=>new Pr};class M_ extends Pr{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){L(this.persistence.referenceDelegate instanceof Bi);const n=this.persistence.referenceDelegate.garbageCollector;return new fh(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new jo(n=>Bi.ei(n,t),this.serializer)}}class L_ extends Pr{constructor(e,t,n){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await Bh(this.Za.syncEngine),await Mr(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return vh(this.persistence,new Ih,e.initialUser,this.serializer)}Ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new fh(n,e.asyncQueue,t)}Ya(e,t){const n=new Ym(t,this.persistence);return new Xm(e.asyncQueue,n)}ja(e){const t=yh(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?we.withCacheSize(this.cacheSizeBytes):we.DEFAULT;return new Go(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Jg(),wi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new wh}}class zi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ec(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=N_.bind(null,this.syncEngine),await d_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m_}()}createDatastore(e){const t=ls(e.databaseInfo.databaseId),n=function(s){return new Qg(s)}(e.databaseInfo);return function(s,a,u,c){return new Zg(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,u){return new t_(n,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Ec(this.syncEngine,t,0),function(){return _c.p()?new _c:new $g}())}createSyncEngine(e,t){return function(i,s,a,u,c,d,f){const p=new w_(i,s,a,u,c,d);return f&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=z(i);C("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await Or(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}zi.provider={build:()=>new zi};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=ll.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async a=>{C("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(C("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xo(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ws(r,e){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Th(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Ac(r,e){r.asyncQueue.verifyOperationInProgress();const t=await B_(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>yc(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>yc(e.remoteStore,i)),r._onlineComponents=e}async function B_(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ws(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;yr("Error using user provided cache. Falling back to memory cache: "+t),await Ws(r,new Pr)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Ws(r,new M_(void 0));return r._offlineComponents}async function qh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Ac(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Ac(r,new zi))),r._onlineComponents}function q_(r){return qh(r).then(e=>e.syncEngine)}async function Rc(r){const e=await qh(r),t=e.eventManager;return t.onListen=A_.bind(null,e.syncEngine),t.onUnlisten=P_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=R_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=S_.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(r,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function j_(r,e,t,n){if(e===!0&&n===!0)throw new O(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Pc(r){if(!N.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ea(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M()}function jt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ea(r);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zh((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bm;switch(n.type){case"firstParty":return new jm(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=bc.get(t);n&&(C("ComponentProvider","Removing Datastore"),bc.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class De{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class tn extends ds{constructor(e,t,n){super(e,t,ns(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new N(e))}withConverter(e){return new tn(this.firestore,e,this._path)}}function uv(r,e,...t){if(r=_e(r),arguments.length===1&&(e=ll.newId()),z_("doc","path",e),r instanceof jh){const n=ne.fromString(e,...t);return Pc(n),new De(r,null,new N(n))}{if(!(r instanceof De||r instanceof tn))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return Pc(n),new De(r.firestore,r instanceof tn?r.converter:null,new N(n))}}function cv(r,e){return r=_e(r),e=_e(e),(r instanceof De||r instanceof tn)&&(e instanceof De||e instanceof tn)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ah(this,"async_queue_retry"),this.fu=()=>{const n=wi();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=wi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=wi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new tt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!bt(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw Ce("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const i=Jo.createAndSchedule(this,e,t,n,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Vc(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class Sr extends jh{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Cc,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function lv(r,e,t){t||(t="(default)");const n=Ji(r,"firestore");if(n.isInitialized(t)){const i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Kt(s,e))return i;throw new O(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Gh(r){if(r._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||G_(r),r._firestoreClient}function G_(r){var e,t,n;const i=r._freezeSettings(),s=function(u,c,d,f){return new vp(u,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,zh(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new U_(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function hv(r){if(r._initialized&&!r._terminated)throw new O(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!je.p())return Promise.resolve();const i=n+"main";await je.delete(i)}(yh(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function dv(r){return Rm(r.app,"firestore",r._databaseId.database),r._delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(he.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vn(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=/^__.*__$/;class $_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nn(e,this.data,t,this.fieldTransforms)}}class Kh{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $h(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ms{constructor(e,t,n,i,s,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new ms(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Lu(e),i}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.xu({path:n,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ji(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if($h(this.Mu)&&K_.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class H_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ls(e)}$u(e,t,n,i=!1){return new ms({Mu:e,methodName:t,Ku:n,path:oe.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hh(r){const e=r._freezeSettings(),t=ls(r._databaseId);return new H_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function W_(r,e,t,n,i,s={}){const a=r.$u(s.merge||s.mergeFields?2:0,e,t,i);sa("Data must be an object, but it was:",a,n);const u=Qh(n,a);let c,d;if(s.merge)c=new ke(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const T=Io(e,p,t);if(!a.contains(T))throw new O(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Xh(f,T)||f.push(T)}c=new ke(f),d=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=a.fieldTransforms;return new $_(new Ae(u),c,d)}class ps extends Fr{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ps}}function Wh(r,e,t){return new ms({Mu:3,Ku:e.settings.Ku,methodName:r._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ra extends Fr{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=Wh(this,e,!0),n=this.Uu.map(s=>Mn(s,t)),i=new Jt(n);return new xo(e.path,i)}isEqual(e){return e instanceof ra&&Kt(this.Uu,e.Uu)}}class ia extends Fr{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=Wh(this,e,!0),n=this.Uu.map(s=>Mn(s,t)),i=new Xt(n);return new xo(e.path,i)}isEqual(e){return e instanceof ia&&Kt(this.Uu,e.Uu)}}function Q_(r,e,t,n){const i=r.$u(1,e,t);sa("Data must be an object, but it was:",i,n);const s=[],a=Ae.empty();Pt(n,(c,d)=>{const f=oa(e,c,t);d=_e(d);const p=i.Bu(f);if(d instanceof ps)s.push(f);else{const T=Mn(d,p);T!=null&&(s.push(f),a.set(f,T))}});const u=new ke(s);return new Kh(a,u,i.fieldTransforms)}function J_(r,e,t,n,i,s){const a=r.$u(1,e,t),u=[Io(e,n,t)],c=[i];if(s.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)u.push(Io(e,s[T])),c.push(s[T+1]);const d=[],f=Ae.empty();for(let T=u.length-1;T>=0;--T)if(!Xh(d,u[T])){const P=u[T];let V=c[T];V=_e(V);const x=a.Bu(P);if(V instanceof ps)d.push(P);else{const D=Mn(V,x);D!=null&&(d.push(P),f.set(P,D))}}const p=new ke(d);return new Kh(f,p,a.fieldTransforms)}function Mn(r,e){if(Jh(r=_e(r)))return sa("Unsupported field value:",e,r),Qh(r,e);if(r instanceof Fr)return function(n,i){if(!$h(i.Mu))throw i.qu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,i){const s=[];let a=0;for(const u of n){let c=Mn(u,i.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qp(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ae.fromDate(n);return{timestampValue:Sn(i.serializer,s)}}if(n instanceof ae){const s=new ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(i.serializer,s)}}if(n instanceof ta)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vn)return{bytesValue:Wl(i.serializer,n._byteString)};if(n instanceof De){const s=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Uo(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof na)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.qu("VectorValues must only contain numeric values.");return ko(u.serializer,c)})}}}}}}(n,i);throw i.qu(`Unsupported field value: ${ea(n)}`)}(r,e)}function Qh(r,e){const t={};return vl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pt(r,(n,i)=>{const s=Mn(i,e.Ou(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function Jh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ae||r instanceof ta||r instanceof Vn||r instanceof De||r instanceof Fr||r instanceof na)}function sa(r,e,t){if(!Jh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=ea(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function Io(r,e,t){if((e=_e(e))instanceof fs)return e._internalPath;if(typeof e=="string")return oa(r,e);throw ji("Field path arguments must be of type string or ",r,!1,void 0,t)}const X_=new RegExp("[~\\*/\\[\\]]");function oa(r,e,t){if(e.search(X_)>=0)throw ji(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fs(...e.split("."))._internalPath}catch{throw ji(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ji(r,e,t,n,i){const s=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new O(S.INVALID_ARGUMENT,u+r+c)}function Xh(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Y_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Y_ extends Yh{data(){return super.data()}}function Zh(r,e){return typeof e=="string"?oa(r,e):e instanceof fs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ey{convertValue(e,t="none"){switch(wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(it(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Pt(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>ie(a.doubleValue));return new na(s)}convertGeoPoint(e){return new ta(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const t=rt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);L(ih(n));const i=new Wt(n.get(1),n.get(3)),s=new N(n.popFirst(5));return i.isEqual(t)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Yh{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ai(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Zh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ai extends ed{data(e={}){return super.data(e)}}class ny{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ai(this._firestore,this._userDataWriter,n.key,n,new lr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new Ai(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new Ai(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:ry(u.type),doc:c,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ry(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class td extends ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function fv(r,e,t){r=jt(r,De);const n=jt(r.firestore,Sr),i=ty(r.converter,e);return nd(n,[W_(Hh(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,xe.none())])}function mv(r,e,t,...n){r=jt(r,De);const i=jt(r.firestore,Sr),s=Hh(i);let a;return a=typeof(e=_e(e))=="string"||e instanceof fs?J_(s,"updateDoc",r._key,e,t,n):Q_(s,"updateDoc",r._key,e),nd(i,[a.toMutation(r._key,xe.exists(!0))])}function pv(r,...e){var t,n,i;r=_e(r);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Vc(e[a])||(s=e[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Vc(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,d,f;if(r instanceof De)d=jt(r.firestore,Sr),f=ns(r._key.path),c={next:p=>{e[a]&&e[a](iy(d,r,p))},error:e[a+1],complete:e[a+2]};else{const p=jt(r,ds);d=jt(p.firestore,Sr),f=p._query;const T=new td(d);c={next:P=>{e[a]&&e[a](new ny(d,T,p,P))},error:e[a+1],complete:e[a+2]},Z_(r._query)}return function(T,P,V,x){const D=new F_(x),G=new I_(P,D,V);return T.asyncQueue.enqueueAndForget(async()=>p_(await Rc(T),G)),()=>{D.eu(),T.asyncQueue.enqueueAndForget(async()=>g_(await Rc(T),G))}}(Gh(d),f,u,c)}function nd(r,e){return function(n,i){const s=new tt;return n.asyncQueue.enqueueAndForget(async()=>C_(await q_(n),i,s)),s.promise}(Gh(r),e)}function iy(r,e,t){const n=t.docs.get(e._key),i=new td(r);return new ed(r,i,e._key,n,new lr(t.hasPendingWrites,t.fromCache),e.converter)}class sy{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=ay(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function gv(r){return new sy(r)}class oy{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=zi.provider,this._offlineComponentProvider={build:t=>new L_(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function ay(r){return new oy(void 0)}function _v(...r){return new ra("arrayUnion",r)}function yv(...r){return new ia("arrayRemove",r)}(function(e,t=!0){(function(i){xn=i})(kn),wn(new $t("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new Sr(new qm(n.getProvider("auth-internal")),new Km(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wt(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Bt(Ru,"4.7.5",e),Bt(Ru,"4.7.5","esm2017")})();function rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uy=rd,id=new Vr("auth","Firebase",rd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Ao("@firebase/auth");function cy(r,...e){Gi.logLevel<=H.WARN&&Gi.warn(`Auth (${kn}): ${r}`,...e)}function Ri(r,...e){Gi.logLevel<=H.ERROR&&Gi.error(`Auth (${kn}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(r,...e){throw ua(r,...e)}function Be(r,...e){return ua(r,...e)}function aa(r,e,t){const n=Object.assign(Object.assign({},uy()),{[e]:t});return new Vr("auth","Firebase",n).create(e,{appName:r.name})}function Gt(r){return aa(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ly(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&$e(r,"argument-error"),aa(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ua(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return id.create(r,...e)}function q(r,e,...t){if(!r)throw ua(e,...t)}function Ye(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ri(e),new Error(e)}function st(r,e){r||Ye(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function hy(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hy()||Cf()||"connection"in navigator)?navigator.onLine:!0}function fy(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=bf()||Vf()}get(){return dy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(r,e){st(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Ur(3e4,6e4);function la(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ln(r,e,t,n,i={}){return od(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const u=Dr(Object.assign({key:r.config.apiKey},a)).slice(1),c=await r._getAdditionalHeaders();c["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:c},s);return Sf()||(d.referrerPolicy="no-referrer"),sd.fetch()(ad(r,r.config.apiHost,t,u),d)})}async function od(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},my),e);try{const i=new _y(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw mi(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,d]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(r,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw mi(r,"email-already-in-use",a);if(c==="USER_DISABLED")throw mi(r,"user-disabled",a);const f=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw aa(r,f,d);$e(r,f)}}catch(i){if(i instanceof ot)throw i;$e(r,"network-request-failed",{message:String(i)})}}async function gy(r,e,t,n,i={}){const s=await Ln(r,e,t,n,i);return"mfaPendingCredential"in s&&$e(r,"multi-factor-auth-required",{_serverResponse:s}),s}function ad(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?ca(r.config,i):`${r.config.apiScheme}://${i}`}class _y{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Be(this.auth,"network-request-failed")),py.get())})}}function mi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Be(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(r,e){return Ln(r,"POST","/v1/accounts:delete",e)}async function ud(r,e){return Ln(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iy(r,e=!1){const t=_e(r),n=await t.getIdToken(e),i=ha(n);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:gr(Qs(i.auth_time)),issuedAtTime:gr(Qs(i.iat)),expirationTime:gr(Qs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qs(r){return Number(r)*1e3}function ha(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Ri("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xc(t);return i?JSON.parse(i):(Ri("Failed to decode base64 JWT payload"),null)}catch(i){return Ri("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(r){const e=ha(r);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof ot&&vy(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function vy({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Cr(r,ud(t,{idToken:n}));q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cd(s.providerUserInfo):[],u=wy(r.providerData,a),c=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(u!=null&&u.length),f=c?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new To(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function Ey(r){const e=_e(r);await Ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wy(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function cd(r){return r.map(e=>{var{providerId:t}=e,n=wo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(r,e){const t=await od(r,{},async()=>{const n=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=ad(r,i,"/v1/token",`key=${s}`),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",sd.fetch()(a,{method:"POST",headers:u,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ry(r,e){return Ln(r,"POST","/v2/accounts:revokeToken",la(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=kc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Ay(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new vn;return n&&(q(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(r,e){q(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new To(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Iy(this,e)}reload(){return Ey(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ki(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Gt(this.auth));const e=await this.getIdToken();return await Cr(this,yy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,u,c,d,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,P=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,x=(u=t.tenantId)!==null&&u!==void 0?u:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:Q,isAnonymous:Y,providerData:$,stsTokenManager:I}=t;q(F&&I,e,"internal-error");const g=vn.fromJSON(this.name,I);q(typeof F=="string",e,"internal-error"),pt(p,e.name),pt(T,e.name),q(typeof Q=="boolean",e,"internal-error"),q(typeof Y=="boolean",e,"internal-error"),pt(P,e.name),pt(V,e.name),pt(x,e.name),pt(D,e.name),pt(G,e.name),pt(B,e.name);const y=new Ze({uid:F,auth:e,email:T,emailVerified:Q,displayName:p,isAnonymous:Y,photoURL:V,phoneNumber:P,tenantId:x,stsTokenManager:g,createdAt:G,lastLoginAt:B});return $&&Array.isArray($)&&(y.providerData=$.map(v=>Object.assign({},v))),D&&(y._redirectEventId=D),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new vn;i.updateFromServerResponse(t);const s=new Ze({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ki(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new vn;u.updateFromIdToken(n);const c=new Ze({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new To(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;function et(r){st(r instanceof Function,"Expected a class definition");let e=xc.get(r);return e?(st(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,xc.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ld.type="NONE";const Nc=ld;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r,e,t){return`firebase:${r}:${e}:${t}`}class Tn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Tn(et(Nc),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||et(Nc);const a=bi(n,e.config.apiKey,e.name);let u=null;for(const d of t)try{const f=await d._get(a);if(f){const p=Ze._fromJSON(e,f);d!==s&&(u=p),s=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Tn(s,e,n):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Tn(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(_d(e))return"Webos";if(dd(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(pd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function hd(r=de()){return/firefox\//i.test(r)}function dd(r=de()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(r=de()){return/crios\//i.test(r)}function md(r=de()){return/iemobile/i.test(r)}function pd(r=de()){return/android/i.test(r)}function gd(r=de()){return/blackberry/i.test(r)}function _d(r=de()){return/webos/i.test(r)}function da(r=de()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function by(r=de()){var e;return da(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Py(){return Df()&&document.documentMode===10}function yd(r=de()){return da(r)||pd(r)||_d(r)||gd(r)||/windows phone/i.test(r)||md(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(r,e=[]){let t;switch(r){case"Browser":t=Oc(de());break;case"Worker":t=`${Oc(de())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,u)=>{try{const c=e(s);a(c)}catch(c){u(c)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(r,e={}){return Ln(r,"GET","/v2/passwordPolicy",la(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=6;class Dy{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Vy,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(n=c.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mc(this),this.idTokenSubscription=new Mc(this),this.beforeStateQueue=new Sy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=id,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ud(this,{idToken:e}),n=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Je(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ki(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(Gt(this));const t=e?_e(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(Gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cy(this),t=new Dy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Ry(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gs(r){return _e(r)}class Mc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lf(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xy(r){fa=r}function Ny(r){return fa.loadJS(r)}function Oy(){return fa.gapiScript}function My(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(r,e){const t=Ji(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Kt(s,e??{}))return i;$e(i,"already-initialized")}return t.initialize({options:e})}function Fy(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Uy(r,e,t){const n=gs(r);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=vd(e),{host:a,port:u}=By(e),c=u===null?"":`:${u}`;n.config.emulator={url:`${s}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),qy()}function vd(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function By(r){const e=vd(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Lc(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Lc(a)}}}function Lc(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function qy(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(r,e){return gy(r,"POST","/v1/accounts:signInWithIdp",la(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy="http://localhost";class nn extends Td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=wo(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new nn(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return En(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,En(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,En(e,t)}buildRequest(){const e={requestUri:zy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends ma{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Br{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return yt.credential(t,n)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Br{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Br{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vt.credential(t,n)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ze._fromIdTokenResponse(e,n,i),a=Fc(n);return new Dn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Fc(n);return new Dn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Fc(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends ot{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,$i.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new $i(e,t,n,i)}}function Ed(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$i._fromErrorAndOperation(r,s,e,n):s})}async function jy(r,e,t=!1){const n=await Cr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Dn._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(r,e,t=!1){const{auth:n}=r;if(Je(n.app))return Promise.reject(Gt(n));const i="reauthenticate";try{const s=await Cr(r,Ed(n,i,e,r),t);q(s.idToken,n,"internal-error");const a=ha(s.idToken);q(a,n,"internal-error");const{sub:u}=a;return q(r.uid===u,n,"user-mismatch"),Dn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(r,e,t=!1){if(Je(r.app))return Promise.reject(Gt(r));const n="signIn",i=await Ed(r,n,e),s=await Dn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function $y(r,e,t,n){return _e(r).onIdTokenChanged(e,t,n)}function Hy(r,e,t){return _e(r).beforeAuthStateChanged(e,t)}function Iv(r,e,t,n){return _e(r).onAuthStateChanged(e,t,n)}const Hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hi,"1"),this.storage.removeItem(Hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=1e3,Qy=10;class Ad extends wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Py()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Qy):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ad.type="LOCAL";const Jy=Ad;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rd.type="SESSION";const bd=Rd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new _s(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,s)),c=await Xy(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const d=pa("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(p){const T=p;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(T.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Zy(r){Ge().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function eI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function nI(){return Pd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="firebaseLocalStorageDb",rI=1,Wi="firebaseLocalStorage",Cd="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ys(r,e){return r.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function iI(){const r=indexedDB.deleteDatabase(Sd);return new qr(r).toPromise()}function Eo(){const r=indexedDB.open(Sd,rI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Wi,{keyPath:Cd})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Wi)?e(n):(n.close(),await iI(),e(await Eo()))})})}async function Uc(r,e,t){const n=ys(r,!0).put({[Cd]:e,value:t});return new qr(n).toPromise()}async function sI(r,e){const t=ys(r,!1).get(e),n=await new qr(t).toPromise();return n===void 0?null:n.value}function Bc(r,e){const t=ys(r,!0).delete(e);return new qr(t).toPromise()}const oI=800,aI=3;class Vd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>aI)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(nI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await eI(),!this.activeServiceWorker)return;this.sender=new Yy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eo();return await Uc(e,Hi,"1"),await Bc(e,Hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uc(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>sI(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ys(i,!1).getAll();return new qr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vd.type="LOCAL";const uI=Vd;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(r,e){return e?et(e):(q(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,t){return En(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cI(r){return Ky(r.auth,new ga(r),r.bypassAuthState)}function lI(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),Gy(t,new ga(r),r.bypassAuthState)}async function hI(r){const{auth:e,user:t}=r;return q(t,e,"internal-error"),jy(t,new ga(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return hI;case"reauthViaPopup":case"reauthViaRedirect":return lI;default:$e(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Ur(2e3,1e4);async function vv(r,e,t){if(Je(r.app))return Promise.reject(Be(r,"operation-not-supported-in-this-environment"));const n=gs(r);ly(r,e,ma);const i=Dd(n,t);return new Ut(n,"signInViaPopup",e,i).executeNotNull()}class Ut extends kd{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="pendingRedirect",Pi=new Map;class mI extends kd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const n=await pI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pI(r,e){const t=yI(e),n=_I(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function gI(r,e){Pi.set(r._key(),e)}function _I(r){return et(r._redirectPersistence)}function yI(r){return bi(fI,r.config.apiKey,r.name)}async function II(r,e,t=!1){if(Je(r.app))return Promise.reject(Gt(r));const n=gs(r),i=Dd(n,e),a=await new mI(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=10*60*1e3;class TI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xd(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vI&&this.cachedEventUids.clear(),this.cachedEventUids.has(qc(e))}saveEventToCache(e){this.cachedEventUids.add(qc(e)),this.lastProcessedEventTime=Date.now()}}function qc(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xd({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(r,e={}){return Ln(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function bI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await wI(r);for(const t of e)try{if(PI(t))return}catch{}$e(r,"unauthorized-domain")}function PI(r){const e=vo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!RI.test(t))return!1;if(AI.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Ur(3e4,6e4);function zc(){const r=Ge().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function CI(r){return new Promise((e,t)=>{var n,i,s;function a(){zc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zc(),t(Be(r,"network-request-failed"))},timeout:SI.get()})}if(!((i=(n=Ge().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)a();else{const u=My("iframefcb");return Ge()[u]=()=>{gapi.load?a():t(Be(r,"network-request-failed"))},Ny(`${Oy()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw Si=null,e})}let Si=null;function VI(r){return Si=Si||CI(r),Si}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new Ur(5e3,15e3),kI="__/auth/iframe",xI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MI(r){const e=r.config;q(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ca(e,xI):`https://${r.config.authDomain}/${kI}`,n={apiKey:e.apiKey,appName:r.name,v:kn},i=OI.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Dr(n).slice(1)}`}async function LI(r){const e=await VI(r),t=Ge().gapi;return q(t,r,"internal-error"),e.open({where:document.body,url:MI(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Be(r,"network-request-failed"),u=Ge().setTimeout(()=>{s(a)},DI.get());function c(){Ge().clearTimeout(u),i(n)}n.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UI=500,BI=600,qI="_blank",zI="http://localhost";class jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jI(r,e,t,n=UI,i=BI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const c=Object.assign(Object.assign({},FI),{width:n.toString(),height:i.toString(),top:s,left:a}),d=de().toLowerCase();t&&(u=fd(d)?qI:t),hd(d)&&(e=e||zI,c.scrollbars="yes");const f=Object.entries(c).reduce((T,[P,V])=>`${T}${P}=${V},`,"");if(by(d)&&u!=="_self")return GI(e||"",u),new jc(null);const p=window.open(e||"",u,f);q(p,r,"popup-blocked");try{p.focus()}catch{}return new jc(p)}function GI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="__/auth/handler",$I="emulator/auth/handler",HI=encodeURIComponent("fac");async function Gc(r,e,t,n,i,s){q(r.config.authDomain,r,"auth-domain-config-required"),q(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:kn,eventId:i};if(e instanceof ma){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Mf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Br){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const c=await r._getAppCheckToken(),d=c?`#${HI}=${encodeURIComponent(c)}`:"";return`${WI(r)}?${Dr(u).slice(1)}${d}`}function WI({config:r}){return r.emulator?ca(r,$I):`https://${r.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="webStorageSupport";class QI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bd,this._completeRedirectFn=II,this._overrideRedirectResult=gI}async _openPopup(e,t,n,i){var s;st((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Gc(e,t,n,vo(),i);return jI(e,a,pa())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Gc(e,t,n,vo(),i);return Zy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(st(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await LI(e),n=new TI(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Js,{type:Js},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Js];a!==void 0&&t(!!a),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yd()||dd()||da()}}const JI=QI;var Kc="@firebase/auth",$c="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZI(r){wn(new $t("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(r)},d=new ky(n,i,s,c);return Fy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),wn(new $t("auth-internal",e=>{const t=gs(e.getProvider("auth").getImmediate());return(n=>new XI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(Kc,$c,YI(r)),Bt(Kc,$c,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=5*60,tv=Zc("authIdTokenMaxAge")||ev;let Hc=null;const nv=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>tv)return;const i=t==null?void 0:t.token;Hc!==i&&(Hc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tv(r=Cm()){const e=Ji(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Ly(r,{popupRedirectResolver:JI,persistence:[uI,Jy,bd]}),n=Zc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=nv(s.toString());Hy(t,a,()=>a(t.currentUser)),$y(t,u=>a(u))}}const i=Af("auth");return i&&Uy(t,`http://${i}`),t}function rv(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}xy({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Be("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",rv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZI("Browser");export{yt as G,lv as a,_v as b,hv as c,uv as d,yv as e,vv as f,Tv as g,pv as h,Sm as i,Bt as j,Iv as o,gv as p,cv as r,fv as s,dv as t,mv as u};
//# sourceMappingURL=firebase-yCS03iAU.js.map
