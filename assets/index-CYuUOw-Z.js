var Qd=Object.defineProperty;var qd=(e,t,n)=>t in e?Qd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ve=(e,t,n)=>qd(e,typeof t!="symbol"?t+"":t,n);function Xd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Ui(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},Hi={},cc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),of=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Fo=Symbol.iterator;function cf(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dc=Object.assign,fc={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||uc}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pc(){}pc.prototype=Sn.prototype;function Wa(e,t,n){this.props=e,this.context=t,this.refs=fc,this.updater=n||uc}var Ba=Wa.prototype=new pc;Ba.constructor=Wa;dc(Ba,Sn.prototype);Ba.isPureReactComponent=!0;var Uo=Array.isArray,hc=Object.prototype.hasOwnProperty,$a={current:null},mc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,n){var r,s={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)hc.call(t,r)&&!mc.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:wr,type:e,key:a,ref:o,props:s,_owner:$a.current}}function uf(e,t){return{$$typeof:wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function df(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ho=/\/+/g;function cs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?df(""+e.key):t.toString(36)}function Jr(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wr:case Jd:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+cs(o,0):r,Uo(s)?(n="",e!=null&&(n=e.replace(Ho,"$&/")+"/"),Jr(s,t,n,"",function(u){return u})):s!=null&&(Ka(s)&&(s=uf(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ho,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Uo(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+cs(a,l);o+=Jr(a,t,n,c,s)}else if(c=cf(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+cs(a,l++),o+=Jr(a,t,n,c,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function _r(e,t,n){if(e==null)return e;var r=[],s=0;return Jr(e,r,"","",function(a){return t.call(n,a,s++)}),r}function ff(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Zr={transition:null},pf={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:$a};function xc(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:_r,forEach:function(e,t,n){_r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _r(e,function(){t++}),t},toArray:function(e){return _r(e,function(t){return t})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Sn;L.Fragment=Zd;L.Profiler=tf;L.PureComponent=Wa;L.StrictMode=ef;L.Suspense=af;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;L.act=xc;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dc({},e.props),s=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=$a.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)hc.call(t,c)&&!mc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:wr,type:e.type,key:s,ref:a,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:rf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:nf,_context:e},e.Consumer=e};L.createElement=gc;L.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:sf,render:e}};L.isValidElement=Ka;L.lazy=function(e){return{$$typeof:lf,_payload:{_status:-1,_result:e},_init:ff}};L.memo=function(e,t){return{$$typeof:of,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};L.unstable_act=xc;L.useCallback=function(e,t){return de.current.useCallback(e,t)};L.useContext=function(e){return de.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return de.current.useDeferredValue(e)};L.useEffect=function(e,t){return de.current.useEffect(e,t)};L.useId=function(){return de.current.useId()};L.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return de.current.useMemo(e,t)};L.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};L.useRef=function(e){return de.current.useRef(e)};L.useState=function(e){return de.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return de.current.useTransition()};L.version="18.3.1";cc.exports=L;var N=cc.exports;const q=Ui(N),hf=Xd({__proto__:null,default:q},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=N,gf=Symbol.for("react.element"),xf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,yf=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jf={key:!0,ref:!0,__self:!0,__source:!0};function vc(e,t,n){var r,s={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)vf.call(t,r)&&!jf.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:gf,type:e,key:a,ref:o,props:s,_owner:yf.current}}Hi.Fragment=xf;Hi.jsx=vc;Hi.jsxs=vc;lc.exports=Hi;var i=lc.exports,yc={exports:{}},be={},jc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,_){var R=E.length;E.push(_);e:for(;0<R;){var Y=R-1>>>1,Z=E[Y];if(0<s(Z,_))E[Y]=_,E[R]=Z,R=Y;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var _=E[0],R=E.pop();if(R!==_){E[0]=R;e:for(var Y=0,Z=E.length,Pr=Z>>>1;Y<Pr;){var Tt=2*(Y+1)-1,ls=E[Tt],Pt=Tt+1,zr=E[Pt];if(0>s(ls,R))Pt<Z&&0>s(zr,ls)?(E[Y]=zr,E[Pt]=R,Y=Pt):(E[Y]=ls,E[Tt]=R,Y=Tt);else if(Pt<Z&&0>s(zr,R))E[Y]=zr,E[Pt]=R,Y=Pt;else break e}}return _}function s(E,_){var R=E.sortIndex-_.sortIndex;return R!==0?R:E.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,p=null,g=3,v=!1,j=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=E)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function y(E){if(x=!1,m(E),!j)if(n(c)!==null)j=!0,as(b);else{var _=n(u);_!==null&&os(y,_.startTime-E)}}function b(E,_){j=!1,x&&(x=!1,h(P),P=-1),v=!0;var R=g;try{for(m(_),p=n(c);p!==null&&(!(p.expirationTime>_)||E&&!ve());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var Z=Y(p.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&r(c),m(_)}else r(c);p=n(c)}if(p!==null)var Pr=!0;else{var Tt=n(u);Tt!==null&&os(y,Tt.startTime-_),Pr=!1}return Pr}finally{p=null,g=R,v=!1}}var C=!1,T=null,P=-1,H=5,O=-1;function ve(){return!(e.unstable_now()-O<H)}function Pn(){if(T!==null){var E=e.unstable_now();O=E;var _=!0;try{_=T(!0,E)}finally{_?zn():(C=!1,T=null)}}else C=!1}var zn;if(typeof f=="function")zn=function(){f(Pn)};else if(typeof MessageChannel<"u"){var Do=new MessageChannel,Gd=Do.port2;Do.port1.onmessage=Pn,zn=function(){Gd.postMessage(null)}}else zn=function(){k(Pn,0)};function as(E){T=E,C||(C=!0,zn())}function os(E,_){P=k(function(){E(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||v||(j=!0,as(b))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var R=g;g=_;try{return E()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,_){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=g;g=E;try{return _()}finally{g=R}},e.unstable_scheduleCallback=function(E,_,R){var Y=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,E={id:d++,callback:_,priorityLevel:E,startTime:R,expirationTime:Z,sortIndex:-1},R>Y?(E.sortIndex=R,t(u,E),n(c)===null&&E===n(u)&&(x?(h(P),P=-1):x=!0,os(y,R-Y))):(E.sortIndex=Z,t(c,E),j||v||(j=!0,as(b))),E},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(E){var _=g;return function(){var R=g;g=_;try{return E.apply(this,arguments)}finally{g=R}}}})(wc);jc.exports=wc;var wf=jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf=N,ke=wf;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nc=new Set,tr={};function Bt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(tr[e]=t,e=0;e<t.length;e++)Nc.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hs=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wo={},Bo={};function bf(e){return Hs.call(Bo,e)?!0:Hs.call(Wo,e)?!1:kf.test(e)?Bo[e]=!0:(Wo[e]=!0,!1)}function Sf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ef(e,t,n,r){if(t===null||typeof t>"u"||Sf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,s,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ya);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ya);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ya);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var s=ie.hasOwnProperty(t)?ie[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ef(t,n,s,r)&&(n=null),r||s===null?bf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rt=Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Ws=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),bc=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),$s=Symbol.for("react.suspense_list"),Xa=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),$o=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,us;function Wn(e){if(us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||""}return`
`+us+e}var ds=!1;function fs(e,t){if(!e||ds)return"";ds=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),a=r.stack.split(`
`),o=s.length-1,l=a.length-1;1<=o&&0<=l&&s[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==a[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{ds=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wn(e):""}function Cf(e){switch(e.tag){case 5:return Wn(e.type);case 16:return Wn("Lazy");case 13:return Wn("Suspense");case 19:return Wn("SuspenseList");case 0:case 2:case 15:return e=fs(e.type,!1),e;case 11:return e=fs(e.type.render,!1),e;case 1:return e=fs(e.type,!0),e;default:return""}}function Ks(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case qt:return"Portal";case Ws:return"Profiler";case Qa:return"StrictMode";case Bs:return"Suspense";case $s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xa:return t=e.displayName||null,t!==null?t:Ks(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Ks(e(t))}catch{}}return null}function Tf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ks(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pf(e){var t=Ec(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rr(e){e._valueTracker||(e._valueTracker=Pf(e))}function Cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ec(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vs(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tc(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function Ys(e,t){Tc(e,t);var n=wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gs(e,t.type,wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gs(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function cn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Bn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wt(n)}}function Pc(e,t){var n=wt(t.value),r=wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,_c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zf=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){zf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Oc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Rc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Oc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var _f=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xs(e,t){if(t){if(_f[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Js(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zs=null;function Ja(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,un=null,dn=null;function Qo(e){if(e=br(e)){if(typeof ea!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Vi(t),ea(e.stateNode,e.type,t))}}function Lc(e){un?dn?dn.push(e):dn=[e]:un=e}function Ic(){if(un){var e=un,t=dn;if(dn=un=null,Qo(e),t)for(e=0;e<t.length;e++)Qo(t[e])}}function Mc(e,t){return e(t)}function Ac(){}var ps=!1;function Dc(e,t,n){if(ps)return e(t,n);ps=!0;try{return Mc(e,t,n)}finally{ps=!1,(un!==null||dn!==null)&&(Ac(),Ic())}}function rr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ta=!1;if(Je)try{var On={};Object.defineProperty(On,"passive",{get:function(){ta=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{ta=!1}function Of(e,t,n,r,s,a,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Yn=!1,pi=null,hi=!1,na=null,Rf={onError:function(e){Yn=!0,pi=e}};function Lf(e,t,n,r,s,a,o,l,c){Yn=!1,pi=null,Of.apply(Rf,arguments)}function If(e,t,n,r,s,a,o,l,c){if(Lf.apply(this,arguments),Yn){if(Yn){var u=pi;Yn=!1,pi=null}else throw Error(w(198));hi||(hi=!0,na=u)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qo(e){if($t(e)!==e)throw Error(w(188))}function Mf(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return qo(s),e;if(a===r)return qo(s),t;a=a.sibling}throw Error(w(188))}if(n.return!==r.return)n=s,r=a;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=a;break}if(l===r){o=!0,r=s,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=s;break}if(l===r){o=!0,r=a,n=s;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Uc(e){return e=Mf(e),e!==null?Hc(e):null}function Hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hc(e);if(t!==null)return t;e=e.sibling}return null}var Wc=ke.unstable_scheduleCallback,Xo=ke.unstable_cancelCallback,Af=ke.unstable_shouldYield,Df=ke.unstable_requestPaint,G=ke.unstable_now,Ff=ke.unstable_getCurrentPriorityLevel,Za=ke.unstable_ImmediatePriority,Bc=ke.unstable_UserBlockingPriority,mi=ke.unstable_NormalPriority,Uf=ke.unstable_LowPriority,$c=ke.unstable_IdlePriority,Wi=null,$e=null;function Hf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Wi,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:$f,Wf=Math.log,Bf=Math.LN2;function $f(e){return e>>>=0,e===0?32:31-(Wf(e)/Bf|0)|0}var Ir=64,Mr=4194304;function $n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=$n(l):(a&=o,a!==0&&(r=$n(a)))}else o=n&~s,o!==0?r=$n(o):a!==0&&(r=$n(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),s=1<<n,r|=e[n],t&=~s;return r}function Kf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-De(a),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=Kf(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kc(){var e=Ir;return Ir<<=1,!(Ir&4194240)&&(Ir=64),e}function hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Yf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-De(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var M=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yc,to,Gc,Qc,qc,ia=!1,Ar=[],ft=null,pt=null,ht=null,ir=new Map,sr=new Map,ot=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Rn(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=br(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Qf(e,t,n,r,s){switch(t){case"focusin":return ft=Rn(ft,e,t,n,r,s),!0;case"dragenter":return pt=Rn(pt,e,t,n,r,s),!0;case"mouseover":return ht=Rn(ht,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return ir.set(a,Rn(ir.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,sr.set(a,Rn(sr.get(a)||null,e,t,n,r,s)),!0}return!1}function Xc(e){var t=Ot(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Fc(n),t!==null){e.blockedOn=t,qc(e.priority,function(){Gc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zs=r,n.target.dispatchEvent(r),Zs=null}else return t=br(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function Zo(e,t,n){ei(e)&&n.delete(t)}function qf(){ia=!1,ft!==null&&ei(ft)&&(ft=null),pt!==null&&ei(pt)&&(pt=null),ht!==null&&ei(ht)&&(ht=null),ir.forEach(Zo),sr.forEach(Zo)}function Ln(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,qf)))}function ar(e){function t(s){return Ln(s,e)}if(0<Ar.length){Ln(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&Ln(ft,e),pt!==null&&Ln(pt,e),ht!==null&&Ln(ht,e),ir.forEach(t),sr.forEach(t),n=0;n<ot.length;n++)r=ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ot.length&&(n=ot[0],n.blockedOn===null);)Xc(n),n.blockedOn===null&&ot.shift()}var fn=rt.ReactCurrentBatchConfig,xi=!0;function Xf(e,t,n,r){var s=M,a=fn.transition;fn.transition=null;try{M=1,no(e,t,n,r)}finally{M=s,fn.transition=a}}function Jf(e,t,n,r){var s=M,a=fn.transition;fn.transition=null;try{M=4,no(e,t,n,r)}finally{M=s,fn.transition=a}}function no(e,t,n,r){if(xi){var s=sa(e,t,n,r);if(s===null)bs(e,t,r,vi,n),Jo(e,r);else if(Qf(s,e,t,n,r))r.stopPropagation();else if(Jo(e,r),t&4&&-1<Gf.indexOf(e)){for(;s!==null;){var a=br(s);if(a!==null&&Yc(a),a=sa(e,t,n,r),a===null&&bs(e,t,r,vi,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else bs(e,t,r,null,n)}}var vi=null;function sa(e,t,n,r){if(vi=null,e=Ja(r),e=Ot(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function Jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Za:return 1;case Bc:return 4;case mi:case Uf:return 16;case $c:return 536870912;default:return 16}default:return 16}}var ct=null,ro=null,ti=null;function Zc(){if(ti)return ti;var e,t=ro,n=t.length,r,s="value"in ct?ct.value:ct.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[a-r];r++);return ti=s.slice(e,1<r?1-r:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dr(){return!0}function el(){return!1}function Se(e){function t(n,r,s,a,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Dr:el,this.isPropagationStopped=el,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dr)},persist:function(){},isPersistent:Dr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Se(En),kr=$({},En,{view:0,detail:0}),Zf=Se(kr),ms,gs,In,Bi=$({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==In&&(In&&e.type==="mousemove"?(ms=e.screenX-In.screenX,gs=e.screenY-In.screenY):gs=ms=0,In=e),ms)},movementY:function(e){return"movementY"in e?e.movementY:gs}}),tl=Se(Bi),ep=$({},Bi,{dataTransfer:0}),tp=Se(ep),np=$({},kr,{relatedTarget:0}),xs=Se(np),rp=$({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=Se(rp),sp=$({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=Se(sp),op=$({},En,{data:0}),nl=Se(op),lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=up[e])?!!t[e]:!1}function so(){return dp}var fp=$({},kr,{key:function(e){if(e.key){var t=lp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=Se(fp),hp=$({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rl=Se(hp),mp=$({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),gp=Se(mp),xp=$({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=Se(xp),yp=$({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Se(yp),wp=[9,13,27,32],ao=Je&&"CompositionEvent"in window,Gn=null;Je&&"documentMode"in document&&(Gn=document.documentMode);var Np=Je&&"TextEvent"in window&&!Gn,eu=Je&&(!ao||Gn&&8<Gn&&11>=Gn),il=" ",sl=!1;function tu(e,t){switch(e){case"keyup":return wp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function kp(e,t){switch(e){case"compositionend":return nu(t);case"keypress":return t.which!==32?null:(sl=!0,il);case"textInput":return e=t.data,e===il&&sl?null:e;default:return null}}function bp(e,t){if(Jt)return e==="compositionend"||!ao&&tu(e,t)?(e=Zc(),ti=ro=ct=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eu&&t.locale!=="ko"?null:t.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sp[e.type]:t==="textarea"}function ru(e,t,n,r){Lc(r),t=yi(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,or=null;function Ep(e){hu(e,0)}function $i(e){var t=tn(e);if(Cc(t))return e}function Cp(e,t){if(e==="change")return t}var iu=!1;if(Je){var vs;if(Je){var ys="oninput"in document;if(!ys){var ol=document.createElement("div");ol.setAttribute("oninput","return;"),ys=typeof ol.oninput=="function"}vs=ys}else vs=!1;iu=vs&&(!document.documentMode||9<document.documentMode)}function ll(){Qn&&(Qn.detachEvent("onpropertychange",su),or=Qn=null)}function su(e){if(e.propertyName==="value"&&$i(or)){var t=[];ru(t,or,e,Ja(e)),Dc(Ep,t)}}function Tp(e,t,n){e==="focusin"?(ll(),Qn=t,or=n,Qn.attachEvent("onpropertychange",su)):e==="focusout"&&ll()}function Pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(or)}function zp(e,t){if(e==="click")return $i(t)}function _p(e,t){if(e==="input"||e==="change")return $i(t)}function Op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:Op;function lr(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Hs.call(t,s)||!Ue(e[s],t[s]))return!1}return!0}function cl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ul(e,t){var n=cl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cl(n)}}function au(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?au(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ou(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rp(e){var t=ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&au(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=ul(n,a);var o=ul(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=Je&&"documentMode"in document&&11>=document.documentMode,Zt=null,aa=null,qn=null,oa=!1;function dl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oa||Zt==null||Zt!==fi(r)||(r=Zt,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qn&&lr(qn,r)||(qn=r,r=yi(aa,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},js={},lu={};Je&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function Ki(e){if(js[e])return js[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lu)return js[e]=t[n];return e}var cu=Ki("animationend"),uu=Ki("animationiteration"),du=Ki("animationstart"),fu=Ki("transitionend"),pu=new Map,fl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){pu.set(e,t),Bt(t,[e])}for(var ws=0;ws<fl.length;ws++){var Ns=fl[ws],Ip=Ns.toLowerCase(),Mp=Ns[0].toUpperCase()+Ns.slice(1);kt(Ip,"on"+Mp)}kt(cu,"onAnimationEnd");kt(uu,"onAnimationIteration");kt(du,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(fu,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function pl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,If(r,t,void 0,e),e.currentTarget=null}function hu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==a&&s.isPropagationStopped())break e;pl(s,l,u),a=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==a&&s.isPropagationStopped())break e;pl(s,l,u),a=c}}}if(hi)throw e=na,hi=!1,na=null,e}function D(e,t){var n=t[fa];n===void 0&&(n=t[fa]=new Set);var r=e+"__bubble";n.has(r)||(mu(t,e,2,!1),n.add(r))}function ks(e,t,n){var r=0;t&&(r|=4),mu(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Ur]){e[Ur]=!0,Nc.forEach(function(n){n!=="selectionchange"&&(Ap.has(n)||ks(n,!1,e),ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,ks("selectionchange",!1,t))}}function mu(e,t,n,r){switch(Jc(t)){case 1:var s=Xf;break;case 4:s=Jf;break;default:s=no}n=s.bind(null,t,n,e),s=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function bs(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ot(l),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Dc(function(){var u=a,d=Ja(n),p=[];e:{var g=pu.get(e);if(g!==void 0){var v=io,j=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":v=pp;break;case"focusin":j="focus",v=xs;break;case"focusout":j="blur",v=xs;break;case"beforeblur":case"afterblur":v=xs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=tl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=gp;break;case cu:case uu:case du:v=ip;break;case fu:v=vp;break;case"scroll":v=Zf;break;case"wheel":v=jp;break;case"copy":case"cut":case"paste":v=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=rl}var x=(t&4)!==0,k=!x&&e==="scroll",h=x?g!==null?g+"Capture":null:g;x=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=rr(f,h),y!=null&&x.push(ur(f,y,m)))),k)break;f=f.return}0<x.length&&(g=new v(g,j,null,n,d),p.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Zs&&(j=n.relatedTarget||n.fromElement)&&(Ot(j)||j[Ze]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(j=n.relatedTarget||n.toElement,v=u,j=j?Ot(j):null,j!==null&&(k=$t(j),j!==k||j.tag!==5&&j.tag!==6)&&(j=null)):(v=null,j=u),v!==j)){if(x=tl,y="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=rl,y="onPointerLeave",h="onPointerEnter",f="pointer"),k=v==null?g:tn(v),m=j==null?g:tn(j),g=new x(y,f+"leave",v,n,d),g.target=k,g.relatedTarget=m,y=null,Ot(d)===u&&(x=new x(h,f+"enter",j,n,d),x.target=m,x.relatedTarget=k,y=x),k=y,v&&j)t:{for(x=v,h=j,f=0,m=x;m;m=Kt(m))f++;for(m=0,y=h;y;y=Kt(y))m++;for(;0<f-m;)x=Kt(x),f--;for(;0<m-f;)h=Kt(h),m--;for(;f--;){if(x===h||h!==null&&x===h.alternate)break t;x=Kt(x),h=Kt(h)}x=null}else x=null;v!==null&&hl(p,g,v,x,!1),j!==null&&k!==null&&hl(p,k,j,x,!0)}}e:{if(g=u?tn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var b=Cp;else if(al(g))if(iu)b=_p;else{b=Pp;var C=Tp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=zp);if(b&&(b=b(e,u))){ru(p,b,n,d);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Gs(g,"number",g.value)}switch(C=u?tn(u):window,e){case"focusin":(al(C)||C.contentEditable==="true")&&(Zt=C,aa=u,qn=null);break;case"focusout":qn=aa=Zt=null;break;case"mousedown":oa=!0;break;case"contextmenu":case"mouseup":case"dragend":oa=!1,dl(p,n,d);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":dl(p,n,d)}var T;if(ao)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jt?tu(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(eu&&n.locale!=="ko"&&(Jt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jt&&(T=Zc()):(ct=d,ro="value"in ct?ct.value:ct.textContent,Jt=!0)),C=yi(u,P),0<C.length&&(P=new nl(P,e,null,n,d),p.push({event:P,listeners:C}),T?P.data=T:(T=nu(n),T!==null&&(P.data=T)))),(T=Np?kp(e,n):bp(e,n))&&(u=yi(u,"onBeforeInput"),0<u.length&&(d=new nl("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}hu(p,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=rr(e,n),a!=null&&r.unshift(ur(e,a,s)),a=rr(e,t),a!=null&&r.push(ur(e,a,s))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hl(e,t,n,r,s){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=rr(n,a),c!=null&&o.unshift(ur(n,c,l))):s||(c=rr(n,a),c!=null&&o.push(ur(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Dp=/\r\n?/g,Fp=/\u0000|\uFFFD/g;function ml(e){return(typeof e=="string"?e:""+e).replace(Dp,`
`).replace(Fp,"")}function Hr(e,t,n){if(t=ml(t),ml(e)!==t&&n)throw Error(w(425))}function ji(){}var la=null,ca=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,Up=typeof clearTimeout=="function"?clearTimeout:void 0,gl=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof gl<"u"?function(e){return gl.resolve(null).then(e).catch(Wp)}:da;function Wp(e){setTimeout(function(){throw e})}function Ss(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ar(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Be="__reactFiber$"+Cn,dr="__reactProps$"+Cn,Ze="__reactContainer$"+Cn,fa="__reactEvents$"+Cn,Bp="__reactListeners$"+Cn,$p="__reactHandles$"+Cn;function Ot(e){var t=e[Be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xl(e);e!==null;){if(n=e[Be])return n;e=xl(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[Be]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Vi(e){return e[dr]||null}var pa=[],nn=-1;function bt(e){return{current:e}}function F(e){0>nn||(e.current=pa[nn],pa[nn]=null,nn--)}function A(e,t){nn++,pa[nn]=e.current,e.current=t}var Nt={},le=bt(Nt),me=bt(!1),Dt=Nt;function vn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ge(e){return e=e.childContextTypes,e!=null}function wi(){F(me),F(le)}function vl(e,t,n){if(le.current!==Nt)throw Error(w(168));A(le,t),A(me,n)}function gu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(w(108,Tf(e)||"Unknown",s));return $({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Dt=le.current,A(le,e),A(me,me.current),!0}function yl(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=gu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(le),A(le,e)):F(me),A(me,n)}var Ge=null,Yi=!1,Es=!1;function xu(e){Ge===null?Ge=[e]:Ge.push(e)}function Kp(e){Yi=!0,xu(e)}function St(){if(!Es&&Ge!==null){Es=!0;var e=0,t=M;try{var n=Ge;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ge=null,Yi=!1}catch(s){throw Ge!==null&&(Ge=Ge.slice(e+1)),Wc(Za,St),s}finally{M=t,Es=!1}}return null}var rn=[],sn=0,ki=null,bi=0,Ce=[],Te=0,Ft=null,Qe=1,qe="";function zt(e,t){rn[sn++]=bi,rn[sn++]=ki,ki=e,bi=t}function vu(e,t,n){Ce[Te++]=Qe,Ce[Te++]=qe,Ce[Te++]=Ft,Ft=e;var r=Qe;e=qe;var s=32-De(r)-1;r&=~(1<<s),n+=1;var a=32-De(t)+s;if(30<a){var o=s-s%5;a=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qe=1<<32-De(t)+s|n<<s|r,qe=a+e}else Qe=1<<a|n<<s|r,qe=e}function lo(e){e.return!==null&&(zt(e,1),vu(e,1,0))}function co(e){for(;e===ki;)ki=rn[--sn],rn[sn]=null,bi=rn[--sn],rn[sn]=null;for(;e===Ft;)Ft=Ce[--Te],Ce[Te]=null,qe=Ce[--Te],Ce[Te]=null,Qe=Ce[--Te],Ce[Te]=null}var Ne=null,we=null,U=!1,Me=null;function yu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,we=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Qe,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,we=null,!0):!1;default:return!1}}function ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(U){var t=we;if(t){var n=t;if(!jl(e,t)){if(ha(e))throw Error(w(418));t=mt(n.nextSibling);var r=Ne;t&&jl(e,t)?yu(r,n):(e.flags=e.flags&-4097|2,U=!1,Ne=e)}}else{if(ha(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,Ne=e}}}function wl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Wr(e){if(e!==Ne)return!1;if(!U)return wl(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=we)){if(ha(e))throw ju(),Error(w(418));for(;t;)yu(e,t),t=mt(t.nextSibling)}if(wl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Ne?mt(e.stateNode.nextSibling):null;return!0}function ju(){for(var e=we;e;)e=mt(e.nextSibling)}function yn(){we=Ne=null,U=!1}function uo(e){Me===null?Me=[e]:Me.push(e)}var Vp=rt.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=s.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Br(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nl(e){var t=e._init;return t(e._payload)}function wu(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function s(h,f){return h=yt(h,f),h.index=0,h.sibling=null,h}function a(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,f,m,y){return f===null||f.tag!==6?(f=Rs(m,h.mode,y),f.return=h,f):(f=s(f,m),f.return=h,f)}function c(h,f,m,y){var b=m.type;return b===Xt?d(h,f,m.props.children,y,m.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===st&&Nl(b)===f.type)?(y=s(f,m.props),y.ref=Mn(h,f,m),y.return=h,y):(y=ci(m.type,m.key,m.props,null,h.mode,y),y.ref=Mn(h,f,m),y.return=h,y)}function u(h,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ls(m,h.mode,y),f.return=h,f):(f=s(f,m.children||[]),f.return=h,f)}function d(h,f,m,y,b){return f===null||f.tag!==7?(f=At(m,h.mode,y,b),f.return=h,f):(f=s(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Rs(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Or:return m=ci(f.type,f.key,f.props,null,h.mode,m),m.ref=Mn(h,null,f),m.return=h,m;case qt:return f=Ls(f,h.mode,m),f.return=h,f;case st:var y=f._init;return p(h,y(f._payload),m)}if(Bn(f)||_n(f))return f=At(f,h.mode,m,null),f.return=h,f;Br(h,f)}return null}function g(h,f,m,y){var b=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:l(h,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Or:return m.key===b?c(h,f,m,y):null;case qt:return m.key===b?u(h,f,m,y):null;case st:return b=m._init,g(h,f,b(m._payload),y)}if(Bn(m)||_n(m))return b!==null?null:d(h,f,m,y,null);Br(h,m)}return null}function v(h,f,m,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,l(f,h,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Or:return h=h.get(y.key===null?m:y.key)||null,c(f,h,y,b);case qt:return h=h.get(y.key===null?m:y.key)||null,u(f,h,y,b);case st:var C=y._init;return v(h,f,m,C(y._payload),b)}if(Bn(y)||_n(y))return h=h.get(m)||null,d(f,h,y,b,null);Br(f,y)}return null}function j(h,f,m,y){for(var b=null,C=null,T=f,P=f=0,H=null;T!==null&&P<m.length;P++){T.index>P?(H=T,T=null):H=T.sibling;var O=g(h,T,m[P],y);if(O===null){T===null&&(T=H);break}e&&T&&O.alternate===null&&t(h,T),f=a(O,f,P),C===null?b=O:C.sibling=O,C=O,T=H}if(P===m.length)return n(h,T),U&&zt(h,P),b;if(T===null){for(;P<m.length;P++)T=p(h,m[P],y),T!==null&&(f=a(T,f,P),C===null?b=T:C.sibling=T,C=T);return U&&zt(h,P),b}for(T=r(h,T);P<m.length;P++)H=v(T,h,P,m[P],y),H!==null&&(e&&H.alternate!==null&&T.delete(H.key===null?P:H.key),f=a(H,f,P),C===null?b=H:C.sibling=H,C=H);return e&&T.forEach(function(ve){return t(h,ve)}),U&&zt(h,P),b}function x(h,f,m,y){var b=_n(m);if(typeof b!="function")throw Error(w(150));if(m=b.call(m),m==null)throw Error(w(151));for(var C=b=null,T=f,P=f=0,H=null,O=m.next();T!==null&&!O.done;P++,O=m.next()){T.index>P?(H=T,T=null):H=T.sibling;var ve=g(h,T,O.value,y);if(ve===null){T===null&&(T=H);break}e&&T&&ve.alternate===null&&t(h,T),f=a(ve,f,P),C===null?b=ve:C.sibling=ve,C=ve,T=H}if(O.done)return n(h,T),U&&zt(h,P),b;if(T===null){for(;!O.done;P++,O=m.next())O=p(h,O.value,y),O!==null&&(f=a(O,f,P),C===null?b=O:C.sibling=O,C=O);return U&&zt(h,P),b}for(T=r(h,T);!O.done;P++,O=m.next())O=v(T,h,P,O.value,y),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?P:O.key),f=a(O,f,P),C===null?b=O:C.sibling=O,C=O);return e&&T.forEach(function(Pn){return t(h,Pn)}),U&&zt(h,P),b}function k(h,f,m,y){if(typeof m=="object"&&m!==null&&m.type===Xt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Or:e:{for(var b=m.key,C=f;C!==null;){if(C.key===b){if(b=m.type,b===Xt){if(C.tag===7){n(h,C.sibling),f=s(C,m.props.children),f.return=h,h=f;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===st&&Nl(b)===C.type){n(h,C.sibling),f=s(C,m.props),f.ref=Mn(h,C,m),f.return=h,h=f;break e}n(h,C);break}else t(h,C);C=C.sibling}m.type===Xt?(f=At(m.props.children,h.mode,y,m.key),f.return=h,h=f):(y=ci(m.type,m.key,m.props,null,h.mode,y),y.ref=Mn(h,f,m),y.return=h,h=y)}return o(h);case qt:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=s(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ls(m,h.mode,y),f.return=h,h=f}return o(h);case st:return C=m._init,k(h,f,C(m._payload),y)}if(Bn(m))return j(h,f,m,y);if(_n(m))return x(h,f,m,y);Br(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=s(f,m),f.return=h,h=f):(n(h,f),f=Rs(m,h.mode,y),f.return=h,h=f),o(h)):n(h,f)}return k}var jn=wu(!0),Nu=wu(!1),Si=bt(null),Ei=null,an=null,fo=null;function po(){fo=an=Ei=null}function ho(e){var t=Si.current;F(Si),e._currentValue=t}function ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pn(e,t){Ei=e,fo=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(fo!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(Ei===null)throw Error(w(308));an=e,Ei.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Rt=null;function mo(e){Rt===null?Rt=[e]:Rt.push(e)}function ku(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,mo(t)):(n.next=s.next,s.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,et(e,n)}return s=r.interleaved,s===null?(t.next=t,mo(r)):(t.next=s.next,s.next=t),r.interleaved=t,et(e,n)}function ri(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}function kl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ci(e,t,n,r){var s=e.updateQueue;at=!1;var a=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(a!==null){var p=s.baseState;o=0,d=u=c=null,l=a;do{var g=l.lane,v=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var j=e,x=l;switch(g=t,v=n,x.tag){case 1:if(j=x.payload,typeof j=="function"){p=j.call(v,p,g);break e}p=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=x.payload,g=typeof j=="function"?j.call(v,p,g):j,g==null)break e;p=$({},p,g);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,c=p):d=d.next=v,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Ht|=o,e.lanes=o,e.memoizedState=p}}function bl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(w(191,s));s.call(r)}}}var Sr={},Ke=bt(Sr),fr=bt(Sr),pr=bt(Sr);function Lt(e){if(e===Sr)throw Error(w(174));return e}function xo(e,t){switch(A(pr,t),A(fr,e),A(Ke,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qs(t,e)}F(Ke),A(Ke,t)}function wn(){F(Ke),F(fr),F(pr)}function Su(e){Lt(pr.current);var t=Lt(Ke.current),n=qs(t,e.type);t!==n&&(A(fr,e),A(Ke,n))}function vo(e){fr.current===e&&(F(Ke),F(fr))}var W=bt(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function yo(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var ii=rt.ReactCurrentDispatcher,Ts=rt.ReactCurrentBatchConfig,Ut=0,B=null,X=null,ee=null,Pi=!1,Xn=!1,hr=0,Yp=0;function se(){throw Error(w(321))}function jo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ue(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,s,a){if(Ut=a,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?Xp:Jp,e=n(r,s),Xn){a=0;do{if(Xn=!1,hr=0,25<=a)throw Error(w(301));a+=1,ee=X=null,t.updateQueue=null,ii.current=Zp,e=n(r,s)}while(Xn)}if(ii.current=zi,t=X!==null&&X.next!==null,Ut=0,ee=X=B=null,Pi=!1,t)throw Error(w(300));return e}function No(){var e=hr!==0;return hr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?B.memoizedState=ee=e:ee=ee.next=e,ee}function Oe(){if(X===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?B.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?B.memoizedState=ee=e:ee=ee.next=e}return ee}function mr(e,t){return typeof t=="function"?t(e):t}function Ps(e){var t=Oe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=X,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var o=s.next;s.next=a.next,a.next=o}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var l=o=null,c=null,u=a;do{var d=u.lane;if((Ut&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,o=r):c=c.next=p,B.lanes|=d,Ht|=d}u=u.next}while(u!==null&&u!==a);c===null?o=r:c.next=l,Ue(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,B.lanes|=a,Ht|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zs(e){var t=Oe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do a=e(a,o.action),o=o.next;while(o!==s);Ue(a,t.memoizedState)||(he=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Eu(){}function Cu(e,t){var n=B,r=Oe(),s=t(),a=!Ue(r.memoizedState,s);if(a&&(r.memoizedState=s,he=!0),r=r.queue,ko(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,gr(9,Pu.bind(null,n,r,s,t),void 0,null),te===null)throw Error(w(349));Ut&30||Tu(n,t,s)}return s}function Tu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pu(e,t,n,r){t.value=n,t.getSnapshot=r,_u(t)&&Ou(e)}function zu(e,t,n){return n(function(){_u(t)&&Ou(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ue(e,n)}catch{return!0}}function Ou(e){var t=et(e,1);t!==null&&Fe(t,e,1,-1)}function Sl(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=qp.bind(null,B,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return Oe().memoizedState}function si(e,t,n,r){var s=We();B.flags|=e,s.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function Gi(e,t,n,r){var s=Oe();r=r===void 0?null:r;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,r!==null&&jo(r,o.deps)){s.memoizedState=gr(t,n,a,r);return}}B.flags|=e,s.memoizedState=gr(1|t,n,a,r)}function El(e,t){return si(8390656,8,e,t)}function ko(e,t){return Gi(2048,8,e,t)}function Lu(e,t){return Gi(4,2,e,t)}function Iu(e,t){return Gi(4,4,e,t)}function Mu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Au(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4,4,Mu.bind(null,t,e),n)}function bo(){}function Du(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fu(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uu(e,t,n){return Ut&21?(Ue(n,t)||(n=Kc(),B.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function Gp(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ts.transition;Ts.transition={};try{e(!1),t()}finally{M=n,Ts.transition=r}}function Hu(){return Oe().memoizedState}function Qp(e,t,n){var r=vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wu(e))Bu(t,n);else if(n=ku(e,t,n,r),n!==null){var s=ue();Fe(n,e,r,s),$u(n,t,r)}}function qp(e,t,n){var r=vt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wu(e))Bu(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(s.hasEagerState=!0,s.eagerState=l,Ue(l,o)){var c=t.interleaved;c===null?(s.next=s,mo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=ku(e,t,s,r),n!==null&&(s=ue(),Fe(n,e,r,s),$u(n,t,r))}}function Wu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Bu(e,t){Xn=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}var zi={readContext:_e,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Xp={readContext:_e,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:El,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,si(4194308,4,Mu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4194308,4,e,t)},useInsertionEffect:function(e,t){return si(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qp.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Sl,useDebugValue:bo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Sl(!1),t=e[0];return e=Gp.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,s=We();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),te===null)throw Error(w(349));Ut&30||Tu(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,El(zu.bind(null,r,a,e),[e]),r.flags|=2048,gr(9,Pu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=We(),t=te.identifierPrefix;if(U){var n=qe,r=Qe;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:_e,useCallback:Du,useContext:_e,useEffect:ko,useImperativeHandle:Au,useInsertionEffect:Lu,useLayoutEffect:Iu,useMemo:Fu,useReducer:Ps,useRef:Ru,useState:function(){return Ps(mr)},useDebugValue:bo,useDeferredValue:function(e){var t=Oe();return Uu(t,X.memoizedState,e)},useTransition:function(){var e=Ps(mr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:Cu,useId:Hu,unstable_isNewReconciler:!1},Zp={readContext:_e,useCallback:Du,useContext:_e,useEffect:ko,useImperativeHandle:Au,useInsertionEffect:Lu,useLayoutEffect:Iu,useMemo:Fu,useReducer:zs,useRef:Ru,useState:function(){return zs(mr)},useDebugValue:bo,useDeferredValue:function(e){var t=Oe();return X===null?t.memoizedState=e:Uu(t,X.memoizedState,e)},useTransition:function(){var e=zs(mr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:Cu,useId:Hu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),s=vt(e),a=Xe(r,s);a.payload=t,n!=null&&(a.callback=n),t=gt(e,a,s),t!==null&&(Fe(t,e,s,r),ri(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),s=vt(e),a=Xe(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=gt(e,a,s),t!==null&&(Fe(t,e,s,r),ri(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=vt(e),s=Xe(n,r);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,r),t!==null&&(Fe(t,e,r,n),ri(t,e,r))}};function Cl(e,t,n,r,s,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!lr(n,r)||!lr(s,a):!0}function Ku(e,t,n){var r=!1,s=Nt,a=t.contextType;return typeof a=="object"&&a!==null?a=_e(a):(s=ge(t)?Dt:le.current,r=t.contextTypes,a=(r=r!=null)?vn(e,s):Nt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Tl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function va(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},go(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=_e(a):(a=ge(t)?Dt:le.current,s.context=vn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(xa(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Qi.enqueueReplaceState(s,s.state,null),Ci(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=Cf(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function _s(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eh=typeof WeakMap=="function"?WeakMap:Map;function Vu(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Pa=r),ya(e,t)},n}function Yu(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){ya(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ya(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Pl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eh;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=hh.bind(null,e,t,n),t.then(e,e))}function zl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _l(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var th=rt.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?Nu(t,null,n,r):jn(t,e.child,n,r)}function Ol(e,t,n,r,s){n=n.render;var a=t.ref;return pn(t,s),r=wo(e,t,n,r,a,s),n=No(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(U&&n&&lo(t),t.flags|=1,ce(e,t,r,s),t.child)}function Rl(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Oo(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Gu(e,t,a,r,s)):(e=ci(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:lr,n(o,r)&&e.ref===t.ref)return tt(e,t,s)}return t.flags|=1,e=yt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,tt(e,t,s)}return ja(e,t,n,r,s)}function Qu(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(ln,je),je|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(ln,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,A(ln,je),je|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,A(ln,je),je|=r;return ce(e,t,s,n),t.child}function qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,s){var a=ge(n)?Dt:le.current;return a=vn(t,a),pn(t,s),n=wo(e,t,n,r,a,s),r=No(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,tt(e,t,s)):(U&&r&&lo(t),t.flags|=1,ce(e,t,n,s),t.child)}function Ll(e,t,n,r,s){if(ge(n)){var a=!0;Ni(t)}else a=!1;if(pn(t,s),t.stateNode===null)ai(e,t),Ku(t,n,r),va(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=ge(n)?Dt:le.current,u=vn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Tl(t,o,r,u),at=!1;var g=t.memoizedState;o.state=g,Ci(t,r,o,s),c=t.memoizedState,l!==r||g!==c||me.current||at?(typeof d=="function"&&(xa(t,n,d,r),c=t.memoizedState),(l=at||Cl(t,n,l,r,g,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,bu(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Le(t.type,l),o.props=u,p=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=ge(n)?Dt:le.current,c=vn(t,c));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==c)&&Tl(t,o,r,c),at=!1,g=t.memoizedState,o.state=g,Ci(t,r,o,s);var j=t.memoizedState;l!==p||g!==j||me.current||at?(typeof v=="function"&&(xa(t,n,v,r),j=t.memoizedState),(u=at||Cl(t,n,u,r,g,j,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,j,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,j,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),o.props=r,o.state=j,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,a,s)}function wa(e,t,n,r,s,a){qu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&yl(t,n,!1),tt(e,t,a);r=t.stateNode,th.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=jn(t,e.child,null,a),t.child=jn(t,null,l,a)):ce(e,t,l,a),t.memoizedState=r.state,s&&yl(t,n,!0),t.child}function Xu(e){var t=e.stateNode;t.pendingContext?vl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vl(e,t.context,!1),xo(e,t.containerInfo)}function Il(e,t,n,r,s){return yn(),uo(s),t.flags|=256,ce(e,t,n,r),t.child}var Na={dehydrated:null,treeContext:null,retryLane:0};function ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,t,n){var r=t.pendingProps,s=W.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),A(W,s&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ji(o,r,0,null),e=At(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ka(n),t.memoizedState=Na,e):So(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return nh(e,t,o,r,l,s,n);if(a){a=r.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=yt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?a=yt(l,a):(a=At(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Na,r}return a=e.child,e=a.sibling,r=yt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function So(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $r(e,t,n,r){return r!==null&&uo(r),jn(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nh(e,t,n,r,s,a,o){if(n)return t.flags&256?(t.flags&=-257,r=_s(Error(w(422))),$r(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=Ji({mode:"visible",children:r.children},s,0,null),a=At(a,s,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&jn(t,e.child,null,o),t.child.memoizedState=ka(o),t.memoizedState=Na,a);if(!(t.mode&1))return $r(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(w(419)),r=_s(a,r,void 0),$r(e,t,o,r)}if(l=(o&e.childLanes)!==0,he||l){if(r=te,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,et(e,s),Fe(r,e,s,-1))}return _o(),r=_s(Error(w(421))),$r(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=mh.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,we=mt(s.nextSibling),Ne=t,U=!0,Me=null,e!==null&&(Ce[Te++]=Qe,Ce[Te++]=qe,Ce[Te++]=Ft,Qe=e.id,qe=e.overflow,Ft=t),t=So(t,r.children),t.flags|=4096,t)}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ga(e.return,t,n)}function Os(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Zu(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ml(e,n,t);else if(e.tag===19)Ml(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(W,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Os(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ti(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Os(t,!0,n,null,a);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ai(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rh(e,t,n){switch(t.tag){case 3:Xu(t),yn();break;case 5:Su(t);break;case 1:ge(t.type)&&Ni(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;A(Si,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Ju(e,t,n):(A(W,W.current&1),e=tt(e,t,n),e!==null?e.sibling:null);A(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zu(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),A(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Qu(e,t,n)}return tt(e,t,n)}var ed,ba,td,nd;ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ba=function(){};td=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Lt(Ke.current);var a=null;switch(n){case"input":s=Vs(e,s),r=Vs(e,r),a=[];break;case"select":s=$({},s,{value:void 0}),r=$({},r,{value:void 0}),a=[];break;case"textarea":s=Qs(e,s),r=Qs(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}Xs(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(tr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(tr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&D("scroll",e),a||l===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};nd=function(e,t,n,r){n!==r&&(t.flags|=4)};function An(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ih(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ge(t.type)&&wi(),ae(t),null;case 3:return r=t.stateNode,wn(),F(me),F(le),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Oa(Me),Me=null))),ba(e,t),ae(t),null;case 5:vo(t);var s=Lt(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)td(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Lt(Ke.current),Wr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Be]=t,r[dr]=a,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(s=0;s<Kn.length;s++)D(Kn[s],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Ko(r,a),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},D("invalid",r);break;case"textarea":Yo(r,a),D("invalid",r)}Xs(n,a),s=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Hr(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Hr(r.textContent,l,e),s=["children",""+l]):tr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":Rr(r),Vo(r,a,!0);break;case"textarea":Rr(r),Go(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ji)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Be]=t,e[dr]=r,ed(e,t,!1,!1),t.stateNode=e;e:{switch(o=Js(n,r),n){case"dialog":D("cancel",e),D("close",e),s=r;break;case"iframe":case"object":case"embed":D("load",e),s=r;break;case"video":case"audio":for(s=0;s<Kn.length;s++)D(Kn[s],e);s=r;break;case"source":D("error",e),s=r;break;case"img":case"image":case"link":D("error",e),D("load",e),s=r;break;case"details":D("toggle",e),s=r;break;case"input":Ko(e,r),s=Vs(e,r),D("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=$({},r,{value:void 0}),D("invalid",e);break;case"textarea":Yo(e,r),s=Qs(e,r),D("invalid",e);break;default:s=r}Xs(n,s),l=s;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Rc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&_c(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&nr(e,c):typeof c=="number"&&nr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(tr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&D("scroll",e):c!=null&&Ga(e,a,c,o))}switch(n){case"input":Rr(e),Vo(e,r,!1);break;case"textarea":Rr(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?cn(e,!!r.multiple,a,!1):r.defaultValue!=null&&cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)nd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Lt(pr.current),Lt(Ke.current),Wr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Be]=t,(a=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=t,t.stateNode=r}return ae(t),null;case 13:if(F(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))ju(),yn(),t.flags|=98560,a=!1;else if(a=Wr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Be]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),a=!1}else Me!==null&&(Oa(Me),Me=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?J===0&&(J=3):_o())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return wn(),ba(e,t),e===null&&cr(t.stateNode.containerInfo),ae(t),null;case 10:return ho(t.type._context),ae(t),null;case 17:return ge(t.type)&&wi(),ae(t),null;case 19:if(F(W),a=t.memoizedState,a===null)return ae(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)An(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ti(e),o!==null){for(t.flags|=128,An(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&G()>kn&&(t.flags|=128,r=!0,An(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!U)return ae(t),null}else 2*G()-a.renderingStartTime>kn&&n!==1073741824&&(t.flags|=128,r=!0,An(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=G(),t.sibling=null,n=W.current,A(W,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function sh(e,t){switch(co(t),t.tag){case 1:return ge(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),F(me),F(le),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(F(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(W),null;case 4:return wn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var Kr=!1,oe=!1,ah=typeof WeakSet=="function"?WeakSet:Set,S=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){K(e,t,r)}}var Al=!1;function oh(e,t){if(la=xi,e=ou(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var v;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==a||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++u===s&&(l=o),g===a&&++d===r&&(c=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:e,selectionRange:n},xi=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var x=j.memoizedProps,k=j.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:Le(t.type,x),k);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return j=Al,Al=!1,j}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Sa(t,n,a)}s=s.next}while(s!==r)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ea(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[dr],delete t[fa],delete t[Bp],delete t[$p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function id(e){return e.tag===5||e.tag===3||e.tag===4}function Dl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ca(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}var ne=null,Ie=!1;function it(e,t,n){for(n=n.child;n!==null;)sd(e,t,n),n=n.sibling}function sd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 5:oe||on(n,t);case 6:var r=ne,s=Ie;ne=null,it(e,t,n),ne=r,Ie=s,ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ie?(e=ne,n=n.stateNode,e.nodeType===8?Ss(e.parentNode,n):e.nodeType===1&&Ss(e,n),ar(e)):Ss(ne,n.stateNode));break;case 4:r=ne,s=Ie,ne=n.stateNode.containerInfo,Ie=!0,it(e,t,n),ne=r,Ie=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Sa(n,t,o),s=s.next}while(s!==r)}it(e,t,n);break;case 1:if(!oe&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){K(n,t,l)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,it(e,t,n),oe=r):it(e,t,n);break;default:it(e,t,n)}}function Fl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ah),t.forEach(function(r){var s=gh.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ne=l.stateNode,Ie=!1;break e;case 3:ne=l.stateNode.containerInfo,Ie=!0;break e;case 4:ne=l.stateNode.containerInfo,Ie=!0;break e}l=l.return}if(ne===null)throw Error(w(160));sd(a,o,s),ne=null,Ie=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){K(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}function ad(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),He(e),r&4){try{Jn(3,e,e.return),qi(3,e)}catch(x){K(e,e.return,x)}try{Jn(5,e,e.return)}catch(x){K(e,e.return,x)}}break;case 1:Re(t,e),He(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Re(t,e),He(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var s=e.stateNode;try{nr(s,"")}catch(x){K(e,e.return,x)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Tc(s,a),Js(l,o);var u=Js(l,a);for(o=0;o<c.length;o+=2){var d=c[o],p=c[o+1];d==="style"?Rc(s,p):d==="dangerouslySetInnerHTML"?_c(s,p):d==="children"?nr(s,p):Ga(s,d,p,u)}switch(l){case"input":Ys(s,a);break;case"textarea":Pc(s,a);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?cn(s,!!a.multiple,v,!1):g!==!!a.multiple&&(a.defaultValue!=null?cn(s,!!a.multiple,a.defaultValue,!0):cn(s,!!a.multiple,a.multiple?[]:"",!1))}s[dr]=a}catch(x){K(e,e.return,x)}}break;case 6:if(Re(t,e),He(e),r&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(x){K(e,e.return,x)}}break;case 3:if(Re(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(x){K(e,e.return,x)}break;case 4:Re(t,e),He(e);break;case 13:Re(t,e),He(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(To=G())),r&4&&Fl(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||d,Re(t,e),oe=u):Re(t,e),He(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(S=e,d=e.child;d!==null;){for(p=S=d;S!==null;){switch(g=S,v=g.child,g.tag){case 0:case 11:case 14:case 15:Jn(4,g,g.return);break;case 1:on(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(x){K(r,n,x)}}break;case 5:on(g,g.return);break;case 22:if(g.memoizedState!==null){Hl(p);continue}}v!==null?(v.return=g,S=v):Hl(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{s=p.stateNode,u?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Oc("display",o))}catch(x){K(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){K(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Re(t,e),He(e),r&4&&Fl(e);break;case 21:break;default:Re(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(id(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(nr(s,""),r.flags&=-33);var a=Dl(e);Ta(e,a,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dl(e);Ca(e,l,o);break;default:throw Error(w(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lh(e,t,n){S=e,od(e)}function od(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var s=S,a=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Kr;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||oe;l=Kr;var u=oe;if(Kr=o,(oe=c)&&!u)for(S=s;S!==null;)o=S,c=o.child,o.tag===22&&o.memoizedState!==null?Wl(s):c!==null?(c.return=o,S=c):Wl(s);for(;a!==null;)S=a,od(a),a=a.sibling;S=s,Kr=l,oe=u}Ul(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,S=a):Ul(e)}}function Ul(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&bl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bl(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ar(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&Ea(t)}catch(g){K(t,t.return,g)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Hl(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Wl(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qi(4,t)}catch(c){K(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){K(t,s,c)}}var a=t.return;try{Ea(t)}catch(c){K(t,a,c)}break;case 5:var o=t.return;try{Ea(t)}catch(c){K(t,o,c)}}}catch(c){K(t,t.return,c)}if(t===e){S=null;break}var l=t.sibling;if(l!==null){l.return=t.return,S=l;break}S=t.return}}var ch=Math.ceil,_i=rt.ReactCurrentDispatcher,Eo=rt.ReactCurrentOwner,ze=rt.ReactCurrentBatchConfig,I=0,te=null,Q=null,re=0,je=0,ln=bt(0),J=0,xr=null,Ht=0,Xi=0,Co=0,Zn=null,pe=null,To=0,kn=1/0,Ye=null,Oi=!1,Pa=null,xt=null,Vr=!1,ut=null,Ri=0,er=0,za=null,oi=-1,li=0;function ue(){return I&6?G():oi!==-1?oi:oi=G()}function vt(e){return e.mode&1?I&2&&re!==0?re&-re:Vp.transition!==null?(li===0&&(li=Kc()),li):(e=M,e!==0||(e=window.event,e=e===void 0?16:Jc(e.type)),e):1}function Fe(e,t,n,r){if(50<er)throw er=0,za=null,Error(w(185));Nr(e,n,r),(!(I&2)||e!==te)&&(e===te&&(!(I&2)&&(Xi|=n),J===4&&lt(e,re)),xe(e,r),n===1&&I===0&&!(t.mode&1)&&(kn=G()+500,Yi&&St()))}function xe(e,t){var n=e.callbackNode;Vf(e,t);var r=gi(e,e===te?re:0);if(r===0)n!==null&&Xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xo(n),t===1)e.tag===0?Kp(Bl.bind(null,e)):xu(Bl.bind(null,e)),Hp(function(){!(I&6)&&St()}),n=null;else{switch(Vc(r)){case 1:n=Za;break;case 4:n=Bc;break;case 16:n=mi;break;case 536870912:n=$c;break;default:n=mi}n=md(n,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ld(e,t){if(oi=-1,li=0,I&6)throw Error(w(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var r=gi(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var s=I;I|=2;var a=ud();(te!==e||re!==t)&&(Ye=null,kn=G()+500,Mt(e,t));do try{fh();break}catch(l){cd(e,l)}while(!0);po(),_i.current=a,I=s,Q!==null?t=0:(te=null,re=0,t=J)}if(t!==0){if(t===2&&(s=ra(e),s!==0&&(r=s,t=_a(e,s))),t===1)throw n=xr,Mt(e,0),lt(e,r),xe(e,G()),n;if(t===6)lt(e,r);else{if(s=e.current.alternate,!(r&30)&&!uh(s)&&(t=Li(e,r),t===2&&(a=ra(e),a!==0&&(r=a,t=_a(e,a))),t===1))throw n=xr,Mt(e,0),lt(e,r),xe(e,G()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:_t(e,pe,Ye);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=To+500-G(),10<t)){if(gi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=da(_t.bind(null,e,pe,Ye),t);break}_t(e,pe,Ye);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-De(r);a=1<<o,o=t[o],o>s&&(s=o),r&=~a}if(r=s,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ch(r/1960))-r,10<r){e.timeoutHandle=da(_t.bind(null,e,pe,Ye),r);break}_t(e,pe,Ye);break;case 5:_t(e,pe,Ye);break;default:throw Error(w(329))}}}return xe(e,G()),e.callbackNode===n?ld.bind(null,e):null}function _a(e,t){var n=Zn;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=Li(e,t),e!==2&&(t=pe,pe=n,t!==null&&Oa(t)),e}function Oa(e){pe===null?pe=e:pe.push.apply(pe,e)}function uh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Ue(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~Co,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Bl(e){if(I&6)throw Error(w(327));hn();var t=gi(e,0);if(!(t&1))return xe(e,G()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=_a(e,r))}if(n===1)throw n=xr,Mt(e,0),lt(e,t),xe(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,pe,Ye),xe(e,G()),null}function Po(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(kn=G()+500,Yi&&St())}}function Wt(e){ut!==null&&ut.tag===0&&!(I&6)&&hn();var t=I;I|=1;var n=ze.transition,r=M;try{if(ze.transition=null,M=1,e)return e()}finally{M=r,ze.transition=n,I=t,!(I&6)&&St()}}function zo(){je=ln.current,F(ln)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Up(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:wn(),F(me),F(le),yo();break;case 5:vo(r);break;case 4:wn();break;case 13:F(W);break;case 19:F(W);break;case 10:ho(r.type._context);break;case 22:case 23:zo()}n=n.return}if(te=e,Q=e=yt(e.current,null),re=je=t,J=0,xr=null,Co=Xi=Ht=0,pe=Zn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=s,r.next=o}n.pending=r}Rt=null}return e}function cd(e,t){do{var n=Q;try{if(po(),ii.current=zi,Pi){for(var r=B.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pi=!1}if(Ut=0,ee=X=B=null,Xn=!1,hr=0,Eo.current=null,n===null||n.return===null){J=1,xr=t,Q=null;break}e:{var a=e,o=n.return,l=n,c=t;if(t=re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=zl(o);if(v!==null){v.flags&=-257,_l(v,o,l,a,t),v.mode&1&&Pl(a,u,t),t=v,c=u;var j=t.updateQueue;if(j===null){var x=new Set;x.add(c),t.updateQueue=x}else j.add(c);break e}else{if(!(t&1)){Pl(a,u,t),_o();break e}c=Error(w(426))}}else if(U&&l.mode&1){var k=zl(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),_l(k,o,l,a,t),uo(Nn(c,l));break e}}a=c=Nn(c,l),J!==4&&(J=2),Zn===null?Zn=[a]:Zn.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Vu(a,c,t);kl(a,h);break e;case 1:l=c;var f=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xt===null||!xt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var y=Yu(a,l,t);kl(a,y);break e}}a=a.return}while(a!==null)}fd(n)}catch(b){t=b,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ud(){var e=_i.current;return _i.current=zi,e===null?zi:e}function _o(){(J===0||J===3||J===2)&&(J=4),te===null||!(Ht&268435455)&&!(Xi&268435455)||lt(te,re)}function Li(e,t){var n=I;I|=2;var r=ud();(te!==e||re!==t)&&(Ye=null,Mt(e,t));do try{dh();break}catch(s){cd(e,s)}while(!0);if(po(),I=n,_i.current=r,Q!==null)throw Error(w(261));return te=null,re=0,J}function dh(){for(;Q!==null;)dd(Q)}function fh(){for(;Q!==null&&!Af();)dd(Q)}function dd(e){var t=hd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?fd(e):Q=t,Eo.current=null}function fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sh(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Q=null;return}}else if(n=ih(n,t,je),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);J===0&&(J=5)}function _t(e,t,n){var r=M,s=ze.transition;try{ze.transition=null,M=1,ph(e,t,n,r)}finally{ze.transition=s,M=r}return null}function ph(e,t,n,r){do hn();while(ut!==null);if(I&6)throw Error(w(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Yf(e,a),e===te&&(Q=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vr||(Vr=!0,md(mi,function(){return hn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ze.transition,ze.transition=null;var o=M;M=1;var l=I;I|=4,Eo.current=null,oh(e,n),ad(n,e),Rp(ca),xi=!!la,ca=la=null,e.current=n,lh(n),Df(),I=l,M=o,ze.transition=a}else e.current=n;if(Vr&&(Vr=!1,ut=e,Ri=s),a=e.pendingLanes,a===0&&(xt=null),Hf(n.stateNode),xe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Oi)throw Oi=!1,e=Pa,Pa=null,e;return Ri&1&&e.tag!==0&&hn(),a=e.pendingLanes,a&1?e===za?er++:(er=0,za=e):er=0,St(),null}function hn(){if(ut!==null){var e=Vc(Ri),t=ze.transition,n=M;try{if(ze.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,Ri=0,I&6)throw Error(w(331));var s=I;for(I|=4,S=e.current;S!==null;){var a=S,o=a.child;if(S.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Jn(8,d,a)}var p=d.child;if(p!==null)p.return=d,S=p;else for(;S!==null;){d=S;var g=d.sibling,v=d.return;if(rd(d),d===u){S=null;break}if(g!==null){g.return=v,S=g;break}S=v}}}var j=a.alternate;if(j!==null){var x=j.child;if(x!==null){j.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}S=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,S=o;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Jn(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,S=h;break e}S=a.return}}var f=e.current;for(S=f;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=f;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qi(9,l)}}catch(b){K(l,l.return,b)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(I=s,St(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Wi,e)}catch{}r=!0}return r}finally{M=n,ze.transition=t}}return!1}function $l(e,t,n){t=Nn(n,t),t=Vu(e,t,1),e=gt(e,t,1),t=ue(),e!==null&&(Nr(e,1,t),xe(e,t))}function K(e,t,n){if(e.tag===3)$l(e,e,n);else for(;t!==null;){if(t.tag===3){$l(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=Nn(n,e),e=Yu(t,e,1),t=gt(t,e,1),e=ue(),t!==null&&(Nr(t,1,e),xe(t,e));break}}t=t.return}}function hh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>G()-To?Mt(e,0):Co|=n),xe(e,t)}function pd(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=ue();e=et(e,t),e!==null&&(Nr(e,t,n),xe(e,n))}function mh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pd(e,n)}function gh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),pd(e,n)}var hd;hd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,rh(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&vu(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ai(e,t),e=t.pendingProps;var s=vn(t,le.current);pn(t,n),s=wo(null,t,r,e,s,n);var a=No();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(a=!0,Ni(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,go(t),s.updater=Qi,t.stateNode=s,s._reactInternals=t,va(t,r,e,n),t=wa(null,t,r,!0,a,n)):(t.tag=0,U&&a&&lo(t),ce(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ai(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=vh(r),e=Le(r,e),s){case 0:t=ja(null,t,r,e,n);break e;case 1:t=Ll(null,t,r,e,n);break e;case 11:t=Ol(null,t,r,e,n);break e;case 14:t=Rl(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),ja(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),Ll(e,t,r,s,n);case 3:e:{if(Xu(t),e===null)throw Error(w(387));r=t.pendingProps,a=t.memoizedState,s=a.element,bu(e,t),Ci(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=Nn(Error(w(423)),t),t=Il(e,t,r,n,s);break e}else if(r!==s){s=Nn(Error(w(424)),t),t=Il(e,t,r,n,s);break e}else for(we=mt(t.stateNode.containerInfo.firstChild),Ne=t,U=!0,Me=null,n=Nu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),r===s){t=tt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&ma(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,o=s.children,ua(r,s)?o=null:a!==null&&ua(r,a)&&(t.flags|=32),qu(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&ma(t),null;case 13:return Ju(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),Ol(e,t,r,s,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,o=s.value,A(Si,r._currentValue),r._currentValue=o,a!==null)if(Ue(a.value,o)){if(a.children===s.children&&!me.current){t=tt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Xe(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),ga(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ga(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ce(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,pn(t,n),s=_e(s),r=r(s),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,s=Le(r,t.pendingProps),s=Le(r.type,s),Rl(e,t,r,s,n);case 15:return Gu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),ai(e,t),t.tag=1,ge(r)?(e=!0,Ni(t)):e=!1,pn(t,n),Ku(t,r,s),va(t,r,s,n),wa(null,t,r,!0,e,n);case 19:return Zu(e,t,n);case 22:return Qu(e,t,n)}throw Error(w(156,t.tag))};function md(e,t){return Wc(e,t)}function xh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new xh(e,t,n,r)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vh(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Xa)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ci(e,t,n,r,s,a){var o=2;if(r=e,typeof e=="function")Oo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xt:return At(n.children,s,a,t);case Qa:o=8,s|=8;break;case Ws:return e=Pe(12,n,t,s|2),e.elementType=Ws,e.lanes=a,e;case Bs:return e=Pe(13,n,t,s),e.elementType=Bs,e.lanes=a,e;case $s:return e=Pe(19,n,t,s),e.elementType=$s,e.lanes=a,e;case Sc:return Ji(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:o=10;break e;case bc:o=9;break e;case qa:o=11;break e;case Xa:o=14;break e;case st:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function At(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Sc,e.lanes=n,e.stateNode={isHidden:!1},e}function Rs(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Ls(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yh(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hs(0),this.expirationTimes=hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,s,a,o,l,c){return e=new yh(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Pe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(a),e}function jh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gd(e){if(!e)return Nt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ge(n))return gu(e,n,t)}return t}function xd(e,t,n,r,s,a,o,l,c){return e=Ro(n,r,!0,e,s,a,o,l,c),e.context=gd(null),n=e.current,r=ue(),s=vt(n),a=Xe(r,s),a.callback=t??null,gt(n,a,s),e.current.lanes=s,Nr(e,s,r),xe(e,r),e}function Zi(e,t,n,r){var s=t.current,a=ue(),o=vt(s);return n=gd(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(s,t,o),e!==null&&(Fe(e,s,o,a),ri(e,s,o)),o}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Kl(e,t),(e=e.alternate)&&Kl(e,t)}function wh(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Io(e){this._internalRoot=e}es.prototype.render=Io.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Zi(e,t,null,null)};es.prototype.unmount=Io.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Zi(null,e,null,null)}),t[Ze]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ot.length&&t!==0&&t<ot[n].priority;n++);ot.splice(n,0,e),n===0&&Xc(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vl(){}function Nh(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var u=Ii(o);a.call(u)}}var o=xd(t,r,e,0,null,!1,!1,"",Vl);return e._reactRootContainer=o,e[Ze]=o.current,cr(e.nodeType===8?e.parentNode:e),Wt(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Ii(c);l.call(u)}}var c=Ro(e,0,!1,null,null,!1,!1,"",Vl);return e._reactRootContainer=c,e[Ze]=c.current,cr(e.nodeType===8?e.parentNode:e),Wt(function(){Zi(t,c,n,r)}),c}function ns(e,t,n,r,s){var a=n._reactRootContainer;if(a){var o=a;if(typeof s=="function"){var l=s;s=function(){var c=Ii(o);l.call(c)}}Zi(t,o,e,s)}else o=Nh(n,t,e,s,r);return Ii(o)}Yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$n(t.pendingLanes);n!==0&&(eo(t,n|1),xe(t,G()),!(I&6)&&(kn=G()+500,St()))}break;case 13:Wt(function(){var r=et(e,1);if(r!==null){var s=ue();Fe(r,e,1,s)}}),Lo(e,1)}};to=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=ue();Fe(t,e,134217728,n)}Lo(e,134217728)}};Gc=function(e){if(e.tag===13){var t=vt(e),n=et(e,t);if(n!==null){var r=ue();Fe(n,e,t,r)}Lo(e,t)}};Qc=function(){return M};qc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ea=function(e,t,n){switch(t){case"input":if(Ys(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Vi(r);if(!s)throw Error(w(90));Cc(r),Ys(r,s)}}}break;case"textarea":Pc(e,n);break;case"select":t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}};Mc=Po;Ac=Wt;var kh={usingClientEntryPoint:!1,Events:[br,tn,Vi,Lc,Ic,Po]},Dn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bh={bundleType:Dn.bundleType,version:Dn.version,rendererPackageName:Dn.rendererPackageName,rendererConfig:Dn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Uc(e),e===null?null:e.stateNode},findFiberByHostInstance:Dn.findFiberByHostInstance||wh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Wi=Yr.inject(bh),$e=Yr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(w(200));return jh(e,t,null,n)};be.createRoot=function(e,t){if(!Mo(e))throw Error(w(299));var n=!1,r="",s=vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,s),e[Ze]=t.current,cr(e.nodeType===8?e.parentNode:e),new Io(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Uc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Wt(e)};be.hydrate=function(e,t,n){if(!ts(t))throw Error(w(200));return ns(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",o=vd;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=xd(t,null,e,1,n??null,s,!1,a,o),e[Ze]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new es(t)};be.render=function(e,t,n){if(!ts(t))throw Error(w(200));return ns(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!ts(e))throw Error(w(40));return e._reactRootContainer?(Wt(function(){ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};be.unstable_batchedUpdates=Po;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ts(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return ns(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function yd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yd)}catch(e){console.error(e)}}yd(),yc.exports=be;var Sh=yc.exports,jd,Yl=Sh;jd=Yl.createRoot,Yl.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vr.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const Gl="popstate";function Eh(e){e===void 0&&(e={});function t(r,s){let{pathname:a,search:o,hash:l}=r.location;return Ra("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Mi(s)}return Th(t,n,null,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ch(){return Math.random().toString(36).substr(2,8)}function Ql(e,t){return{usr:e.state,key:e.key,idx:t}}function Ra(e,t,n,r){return n===void 0&&(n=null),vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||Ch()})}function Mi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Th(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:a=!1}=r,o=s.history,l=dt.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(vr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=dt.Pop;let k=d(),h=k==null?null:k-u;u=k,c&&c({action:l,location:x.location,delta:h})}function g(k,h){l=dt.Push;let f=Ra(x.location,k,h);u=d()+1;let m=Ql(f,u),y=x.createHref(f);try{o.pushState(m,"",y)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;s.location.assign(y)}a&&c&&c({action:l,location:x.location,delta:1})}function v(k,h){l=dt.Replace;let f=Ra(x.location,k,h);u=d();let m=Ql(f,u),y=x.createHref(f);o.replaceState(m,"",y),a&&c&&c({action:l,location:x.location,delta:0})}function j(k){let h=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof k=="string"?k:Mi(k);return f=f.replace(/ $/,"%20"),V(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let x={get action(){return l},get location(){return e(s,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Gl,p),c=k,()=>{s.removeEventListener(Gl,p),c=null}},createHref(k){return t(s,k)},createURL:j,encodeLocation(k){let h=j(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:v,go(k){return o.go(k)}};return x}var ql;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ql||(ql={}));function Ph(e,t,n){return n===void 0&&(n="/"),zh(e,t,n)}function zh(e,t,n,r){let s=typeof t=="string"?Tn(t):t,a=bn(s.pathname||"/",n);if(a==null)return null;let o=Nd(e);_h(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Wh(a);l=Uh(o[c],u)}return l}function Nd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(a,o,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(V(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=jt([r,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(V(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nd(a.children,t,d,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Dh(u,a.index),routesMeta:d})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of kd(a.path))s(a,o,c)}),t}function kd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return s?[a,""]:[a];let o=kd(r.join("/")),l=[];return l.push(...o.map(c=>c===""?a:[a,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function _h(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Oh=/^:[\w-]+$/,Rh=3,Lh=2,Ih=1,Mh=10,Ah=-2,Xl=e=>e==="*";function Dh(e,t){let n=e.split("/"),r=n.length;return n.some(Xl)&&(r+=Ah),t&&(r+=Lh),n.filter(s=>!Xl(s)).reduce((s,a)=>s+(Oh.test(a)?Rh:a===""?Ih:Mh),r)}function Fh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Uh(e,t,n){let{routesMeta:r}=e,s={},a="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=a==="/"?t:t.slice(a.length)||"/",p=La({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:jt([a,p.pathname]),pathnameBase:Vh(jt([a,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(a=jt([a,p.pathnameBase]))}return o}function La(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hh(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let a=s[0],o=a.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let x=l[p]||"";o=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const j=l[p];return v&&!j?u[g]=void 0:u[g]=(j||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Hh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Wh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Bh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Tn(e):e;return{pathname:n?n.startsWith("/")?n:$h(n,t):t,search:Yh(r),hash:Gh(s)}}function $h(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Is(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bd(e,t){let n=Kh(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Tn(e):(s=vr({},e),V(!s.pathname||!s.pathname.includes("?"),Is("?","pathname","search",s)),V(!s.pathname||!s.pathname.includes("#"),Is("#","pathname","hash",s)),V(!s.search||!s.search.includes("#"),Is("#","search","hash",s)));let a=e===""||s.pathname==="",o=a?"/":s.pathname,l;if(o==null)l=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}l=p>=0?t[p]:"/"}let c=Bh(s,l),u=o&&o!=="/"&&o.endsWith("/"),d=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const jt=e=>e.join("/").replace(/\/\/+/g,"/"),Vh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Yh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ed=["post","put","patch","delete"];new Set(Ed);const qh=["get",...Ed];new Set(qh);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}const rs=N.createContext(null),Cd=N.createContext(null),Et=N.createContext(null),is=N.createContext(null),Ct=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Td=N.createContext(null);function Xh(e,t){let{relative:n}=t===void 0?{}:t;Er()||V(!1);let{basename:r,navigator:s}=N.useContext(Et),{hash:a,pathname:o,search:l}=ss(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:jt([r,o])),s.createHref({pathname:c,search:l,hash:a})}function Er(){return N.useContext(is)!=null}function Cr(){return Er()||V(!1),N.useContext(is).location}function Pd(e){N.useContext(Et).static||N.useLayoutEffect(e)}function Jh(){let{isDataRoute:e}=N.useContext(Ct);return e?fm():Zh()}function Zh(){Er()||V(!1);let e=N.useContext(rs),{basename:t,future:n,navigator:r}=N.useContext(Et),{matches:s}=N.useContext(Ct),{pathname:a}=Cr(),o=JSON.stringify(bd(s,n.v7_relativeSplatPath)),l=N.useRef(!1);return Pd(()=>{l.current=!0}),N.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=Sd(u,JSON.parse(o),a,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:jt([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,o,a,e])}function em(){let{matches:e}=N.useContext(Ct),t=e[e.length-1];return t?t.params:{}}function ss(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(Et),{matches:s}=N.useContext(Ct),{pathname:a}=Cr(),o=JSON.stringify(bd(s,r.v7_relativeSplatPath));return N.useMemo(()=>Sd(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function tm(e,t){return nm(e,t)}function nm(e,t,n,r){Er()||V(!1);let{navigator:s}=N.useContext(Et),{matches:a}=N.useContext(Ct),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=Cr(),d;if(t){var p;let k=typeof t=="string"?Tn(t):t;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||V(!1),d=k}else d=u;let g=d.pathname||"/",v=g;if(c!=="/"){let k=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let j=Ph(e,{pathname:v}),x=om(j&&j.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:jt([c,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:jt([c,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&x?N.createElement(is.Provider,{value:{location:yr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dt.Pop}},x):x}function rm(){let e=dm(),t=Qh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:s},n):null,null)}const im=N.createElement(rm,null);class sm extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Ct.Provider,{value:this.props.routeContext},N.createElement(Td.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:t,match:n,children:r}=e,s=N.useContext(rs);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ct.Provider,{value:t},r)}function om(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||V(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:g,errors:v}=n,j=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||j){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,p,g)=>{let v,j=!1,x=null,k=null;n&&(v=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||im,c&&(u<0&&g===0?(pm("route-fallback"),j=!0,k=null):u===g&&(j=!0,k=p.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,g+1)),f=()=>{let m;return v?m=x:j?m=k:p.route.Component?m=N.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,N.createElement(am,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?N.createElement(sm,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var zd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zd||{}),_d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_d||{});function lm(e){let t=N.useContext(rs);return t||V(!1),t}function cm(e){let t=N.useContext(Cd);return t||V(!1),t}function um(e){let t=N.useContext(Ct);return t||V(!1),t}function Od(e){let t=um(),n=t.matches[t.matches.length-1];return n.route.id||V(!1),n.route.id}function dm(){var e;let t=N.useContext(Td),n=cm(),r=Od();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fm(){let{router:e}=lm(zd.UseNavigateStable),t=Od(_d.UseNavigateStable),n=N.useRef(!1);return Pd(()=>{n.current=!0}),N.useCallback(function(s,a){a===void 0&&(a={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,yr({fromRouteId:t},a)))},[e,t])}const Jl={};function pm(e,t,n){Jl[e]||(Jl[e]=!0)}function hm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ye(e){V(!1)}function mm(e){let{basename:t="/",children:n=null,location:r,navigationType:s=dt.Pop,navigator:a,static:o=!1,future:l}=e;Er()&&V(!1);let c=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:c,navigator:a,static:o,future:yr({v7_relativeSplatPath:!1},l)}),[c,l,a,o]);typeof r=="string"&&(r=Tn(r));let{pathname:d="/",search:p="",hash:g="",state:v=null,key:j="default"}=r,x=N.useMemo(()=>{let k=bn(d,c);return k==null?null:{location:{pathname:k,search:p,hash:g,state:v,key:j},navigationType:s}},[c,d,p,g,v,j,s]);return x==null?null:N.createElement(Et.Provider,{value:u},N.createElement(is.Provider,{children:n,value:x}))}function gm(e){let{children:t,location:n}=e;return tm(Ia(t),n)}new Promise(()=>{});function Ia(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,s)=>{if(!N.isValidElement(r))return;let a=[...t,s];if(r.type===N.Fragment){n.push.apply(n,Ia(r.props.children,a));return}r.type!==ye&&V(!1),!r.props.index||!r.props.children||V(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ia(r.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ai(){return Ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ai.apply(this,arguments)}function Rd(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,a;for(a=0;a<r.length;a++)s=r[a],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function xm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vm(e,t){return e.button===0&&(!t||t==="_self")&&!xm(e)}const ym=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],wm="6";try{window.__reactRouterVersion=wm}catch{}const Nm=N.createContext({isTransitioning:!1}),km="startTransition",Zl=hf[km];function bm(e){let{basename:t,children:n,future:r,window:s}=e,a=N.useRef();a.current==null&&(a.current=Eh({window:s,v5Compat:!0}));let o=a.current,[l,c]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=N.useCallback(p=>{u&&Zl?Zl(()=>c(p)):c(p)},[c,u]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.useEffect(()=>hm(r),[r]),N.createElement(mm,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z=N.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:a,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=t,g=Rd(t,ym),{basename:v}=N.useContext(Et),j,x=!1;if(typeof u=="string"&&Em.test(u)&&(j=u,Sm))try{let m=new URL(window.location.href),y=u.startsWith("//")?new URL(m.protocol+u):new URL(u),b=bn(y.pathname,v);y.origin===m.origin&&b!=null?u=b+y.search+y.hash:x=!0}catch{}let k=Xh(u,{relative:s}),h=Tm(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:s,viewTransition:p});function f(m){r&&r(m),m.defaultPrevented||h(m)}return N.createElement("a",Ai({},g,{href:j||k,onClick:x||a?r:f,ref:n,target:c}))}),Vt=N.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:u,children:d}=t,p=Rd(t,jm),g=ss(c,{relative:p.relative}),v=Cr(),j=N.useContext(Cd),{navigator:x,basename:k}=N.useContext(Et),h=j!=null&&Pm(g)&&u===!0,f=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,m=v.pathname,y=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;s||(m=m.toLowerCase(),y=y?y.toLowerCase():null,f=f.toLowerCase()),y&&k&&(y=bn(y,k)||y);const b=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let C=m===f||!o&&m.startsWith(f)&&m.charAt(b)==="/",T=y!=null&&(y===f||!o&&y.startsWith(f)&&y.charAt(f.length)==="/"),P={isActive:C,isPending:T,isTransitioning:h},H=C?r:void 0,O;typeof a=="function"?O=a(P):O=[a,C?"active":null,T?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let ve=typeof l=="function"?l(P):l;return N.createElement(z,Ai({},p,{"aria-current":H,className:O,ref:n,style:ve,to:c,viewTransition:u}),typeof d=="function"?d(P):d)});var Ma;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ma||(Ma={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function Cm(e){let t=N.useContext(rs);return t||V(!1),t}function Tm(e,t){let{target:n,replace:r,state:s,preventScrollReset:a,relative:o,viewTransition:l}=t===void 0?{}:t,c=Jh(),u=Cr(),d=ss(e,{relative:o});return N.useCallback(p=>{if(vm(p,n)){p.preventDefault();let g=r!==void 0?r:Mi(u)===Mi(d);c(e,{replace:g,state:s,preventScrollReset:a,relative:o,viewTransition:l})}},[u,c,d,r,s,n,e,a,o,l])}function Pm(e,t){t===void 0&&(t={});let n=N.useContext(Nm);n==null&&V(!1);let{basename:r}=Cm(Ma.useViewTransitionState),s=ss(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=bn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=bn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return La(s.pathname,o)!=null||La(s.pathname,a)!=null}var zm=typeof Element<"u",_m=typeof Map=="function",Om=typeof Set=="function",Rm=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ui(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,s;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ui(e[r],t[r]))return!1;return!0}var a;if(_m&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!ui(r.value[1],t.get(r.value[0])))return!1;return!0}if(Om&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Rm&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;if(zm&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&e.$$typeof)&&!ui(e[s[r]],t[s[r]]))return!1;return!0}return e!==e&&t!==t}var Lm=function(t,n){try{return ui(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Im=Ui(Lm);var Mm=function(e,t,n,r,s,a,o,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,s,a,o,l],d=0;c=new Error(t.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Am=Mm;const tc=Ui(Am);var Dm=function(t,n,r,s){var a=r?r.call(s,t,n):void 0;if(a!==void 0)return!!a;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var o=Object.keys(t),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!c(d))return!1;var p=t[d],g=n[d];if(a=r?r.call(s,p,g,d):void 0,a===!1||a===void 0&&p!==g)return!1}return!0};const Fm=Ui(Dm);var Ld=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Ld||{}),Ms={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},nc=Object.values(Ld),Ao={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Um=Object.entries(Ao).reduce((e,[t,n])=>(e[n]=t,e),{}),Ae="data-rh",mn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},gn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Hm=e=>{let t=gn(e,"title");const n=gn(e,mn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=gn(e,mn.DEFAULT_TITLE);return t||r||void 0},Wm=e=>gn(e,mn.ON_CHANGE_CLIENT_STATE)||(()=>{}),As=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),Bm=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const s=Object.keys(r);for(let a=0;a<s.length;a+=1){const l=s[a].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),$m=e=>console&&typeof console.warn=="function"&&console.warn(e),Fn=(e,t,n)=>{const r={};return n.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&$m(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,a)=>{const o={};a.filter(c=>{let u;const d=Object.keys(c);for(let g=0;g<d.length;g+=1){const v=d[g],j=v.toLowerCase();t.indexOf(j)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(j==="rel"&&c[j].toLowerCase()==="stylesheet")&&(u=j),t.indexOf(v)!==-1&&(v==="innerHTML"||v==="cssText"||v==="itemprop")&&(u=v)}if(!u||!c[u])return!1;const p=c[u].toLowerCase();return r[u]||(r[u]={}),o[u]||(o[u]={}),r[u][p]?!1:(o[u][p]=!0,!0)}).reverse().forEach(c=>s.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...o[u]};r[u]=d}return s},[]).reverse()},Km=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},Vm=e=>({baseTag:Bm(["href"],e),bodyAttributes:As("bodyAttributes",e),defer:gn(e,mn.DEFER),encode:gn(e,mn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:As("htmlAttributes",e),linkTags:Fn("link",["rel","href"],e),metaTags:Fn("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Fn("noscript",["innerHTML"],e),onChangeClientState:Wm(e),scriptTags:Fn("script",["src","innerHTML"],e),styleTags:Fn("style",["cssText"],e),title:Hm(e),titleAttributes:As("titleAttributes",e),prioritizeSeoTags:Km(e,mn.PRIORITIZE_SEO_TAGS)}),Id=e=>Array.isArray(e)?e.join(""):e,Ym=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Ds=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(Ym(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},rc=(e,t)=>({...e,[t]:void 0}),Gm=["noscript","script","style"],Aa=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Md=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),Qm=(e,t,n,r)=>{const s=Md(n),a=Id(t);return s?`<${e} ${Ae}="true" ${s}>${Aa(a,r)}</${e}>`:`<${e} ${Ae}="true">${Aa(a,r)}</${e}>`},qm=(e,t,n=!0)=>t.reduce((r,s)=>{const a=s,o=Object.keys(a).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const p=typeof a[d]>"u"?d:`${d}="${Aa(a[d],n)}"`;return u?`${u} ${p}`:p},""),l=a.innerHTML||a.cssText||"",c=Gm.indexOf(e)===-1;return`${r}<${e} ${Ae}="true" ${o}${c?"/>":`>${l}</${e}>`}`},""),Ad=(e,t={})=>Object.keys(e).reduce((n,r)=>{const s=Ao[r];return n[s||r]=e[r],n},t),Xm=(e,t,n)=>{const r={key:t,[Ae]:!0},s=Ad(n,r);return[q.createElement("title",s,t)]},di=(e,t)=>t.map((n,r)=>{const s={key:r,[Ae]:!0};return Object.keys(n).forEach(a=>{const l=Ao[a]||a;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[l]=n[a]}),q.createElement(e,s)}),Ee=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>Xm(e,t.title,t.titleAttributes),toString:()=>Qm(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Ad(t),toString:()=>Md(t)};default:return{toComponent:()=>di(e,t),toString:()=>qm(e,t,n)}}},Jm=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const s=Ds(e,Ms.meta),a=Ds(t,Ms.link),o=Ds(n,Ms.script);return{priorityMethods:{toComponent:()=>[...di("meta",s.priority),...di("link",a.priority),...di("script",o.priority)],toString:()=>`${Ee("meta",s.priority,r)} ${Ee("link",a.priority,r)} ${Ee("script",o.priority,r)}`},metaTags:s.default,linkTags:a.default,scriptTags:o.default}},Zm=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:s,noscriptTags:a,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:u}=e;let{linkTags:d,metaTags:p,scriptTags:g}=e,v={toComponent:()=>{},toString:()=>""};return u&&({priorityMethods:v,linkTags:d,metaTags:p,scriptTags:g}=Jm(e)),{priority:v,base:Ee("base",t,r),bodyAttributes:Ee("bodyAttributes",n,r),htmlAttributes:Ee("htmlAttributes",s,r),link:Ee("link",d,r),meta:Ee("meta",p,r),noscript:Ee("noscript",a,r),script:Ee("script",g,r),style:Ee("style",o,r),title:Ee("title",{title:l,titleAttributes:c},r)}},Da=Zm,Gr=[],Dd=!!(typeof window<"u"&&window.document&&window.document.createElement),Fa=class{constructor(e,t){Ve(this,"instances",[]);Ve(this,"canUseDOM",Dd);Ve(this,"context");Ve(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Gr:this.instances,add:e=>{(this.canUseDOM?Gr:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Gr:this.instances).indexOf(e);(this.canUseDOM?Gr:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Da({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},eg={},Fd=q.createContext(eg),It,Ud=(It=class extends N.Component{constructor(n){super(n);Ve(this,"helmetData");this.helmetData=new Fa(this.props.context||{},It.canUseDOM)}render(){return q.createElement(Fd.Provider,{value:this.helmetData.value},this.props.children)}},Ve(It,"canUseDOM",Dd),It),Yt=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Ae}]`),s=[].slice.call(r),a=[];let o;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const d=u,p=typeof l[d]>"u"?"":l[d];c.setAttribute(u,p)}c.setAttribute(Ae,"true"),s.some((u,d)=>(o=d,c.isEqualNode(u)))?s.splice(o,1):a.push(c)}),s.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),a.forEach(l=>n.appendChild(l)),{oldTags:s,newTags:a}},Ua=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Ae),s=r?r.split(","):[],a=[...s],o=Object.keys(t);for(const l of o){const c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),s.indexOf(l)===-1&&s.push(l);const u=a.indexOf(l);u!==-1&&a.splice(u,1)}for(let l=a.length-1;l>=0;l-=1)n.removeAttribute(a[l]);s.length===a.length?n.removeAttribute(Ae):n.getAttribute(Ae)!==o.join(",")&&n.setAttribute(Ae,o.join(","))},tg=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=Id(e)),Ua("title",t)},ic=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:s,linkTags:a,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:p,titleAttributes:g}=e;Ua("body",r),Ua("html",s),tg(p,g);const v={baseTag:Yt("base",n),linkTags:Yt("link",a),metaTags:Yt("meta",o),noscriptTags:Yt("noscript",l),scriptTags:Yt("script",u),styleTags:Yt("style",d)},j={},x={};Object.keys(v).forEach(k=>{const{newTags:h,oldTags:f}=v[k];h.length&&(j[k]=h),f.length&&(x[k]=v[k].oldTags)}),t&&t(),c(e,j,x)},Un=null,ng=e=>{Un&&cancelAnimationFrame(Un),e.defer?Un=requestAnimationFrame(()=>{ic(e,()=>{Un=null})}):(ic(e),Un=null)},rg=ng,sc=class extends N.Component{constructor(){super(...arguments);Ve(this,"rendered",!1)}shouldComponentUpdate(t){return!Fm(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const s=Vm(t.get().map(a=>{const o={...a.props};return delete o.context,o}));Ud.canUseDOM?rg(s):Da&&(r=Da(s)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},Us,ig=(Us=class extends N.Component{shouldComponentUpdate(e){return!Im(rc(this.props,"helmetData"),rc(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return tc(nc.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${nc.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),tc(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return q.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:s,...a}=r.props,o=Object.keys(a).reduce((c,u)=>(c[Um[u]||u]=a[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,s),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,s);break;default:t=this.mapObjectTypeChildren(r,t,o,s);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof Fa)){const s=r;r=new Fa(s.context,!0),delete n.helmetData}return r?q.createElement(sc,{...n,context:r.value}):q.createElement(Fd.Consumer,null,s=>q.createElement(sc,{...n,context:s}))}},Ve(Us,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Us);const sg=()=>{const[e,t]=N.useState(!1),n=()=>{t(!e)},r=()=>{t(!1)};return i.jsxs("nav",{className:"navbar",children:[i.jsx(z,{to:"/",className:"brand",onClick:r,children:i.jsx("img",{src:"/assets/logo.jpg",alt:"EducateHers Kenya",className:"brand-logo",onError:s=>{console.error("Logo failed to load"),s.currentTarget.style.display="none"}})}),i.jsxs("button",{className:`hamburger ${e?"active":""}`,onClick:n,"aria-label":"Toggle menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsxs("ul",{className:`navlinks ${e?"open":""}`,children:[i.jsx("li",{children:i.jsx(Vt,{to:"/",end:!0,onClick:r,children:"Home"})}),i.jsx("li",{children:i.jsx(Vt,{to:"/what-we-do",onClick:r,children:"What We Do"})}),i.jsx("li",{children:i.jsx(Vt,{to:"/events",onClick:r,children:"Events"})}),i.jsx("li",{children:i.jsx(Vt,{to:"/volunteer",onClick:r,children:"Volunteer"})}),i.jsx("li",{children:i.jsx(Vt,{to:"/blog",onClick:r,children:"Blog"})}),i.jsx("li",{children:i.jsx(Vt,{to:"/contact",onClick:r,children:"Contact"})}),i.jsx("li",{children:i.jsx(z,{to:"/donate",className:"donate-btn",onClick:r,children:"❤️ Donate"})})]})]})};function Fs(e){return e?e.trim().replace(/[<>]/g,"").replace(/javascript:/gi,"").replace(/on\w+\s*=/gi,"").slice(0,1e4):""}function Hd(e){return e?e.trim().toLowerCase().slice(0,254):""}function Wd(e){var s;if(!e||e.length>254||!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e))return!1;const n=["tempmail","throwaway","guerrillamail","10minutemail"],r=((s=e.split("@")[1])==null?void 0:s.toLowerCase())||"";return!n.some(a=>r.includes(a))}function ag(e){return!e||e.trim().length<2||e.length>100?!1:/^[a-zA-ZÀ-ÿ\s'-]+$/.test(e)}function og(e){return!e||e.trim().length<10||e.length>5e3?!1:![/\b(viagra|cialis|casino|lottery|prize)\b/gi,/\b(click here|buy now|limited offer)\b/gi,/(http[s]?:\/\/){3,}/gi].some(n=>n.test(e))}const Gt={};function Bd(e,t=3,n=6e4){const r=Date.now();return Gt[e]||(Gt[e]=[]),Gt[e]=Gt[e].filter(s=>r-s<n),Gt[e].length>=t?!1:(Gt[e].push(r),!0)}function $d(){const e=[navigator.userAgent,navigator.language,new Date().getTimezoneOffset(),screen.width,screen.height];let t=0;const n=e.join("|");for(let r=0;r<n.length;r++){const s=n.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return t.toString(36)}function Ha(e){return[/<script[^>]*>.*?<\/script>/gi,/<iframe[^>]*>.*?<\/iframe>/gi,/javascript:/gi,/onerror\s*=/gi,/onclick\s*=/gi,/<embed[^>]*>/gi,/<object[^>]*>/gi].some(n=>n.test(e))}async function lg(e){const t="b748c57c-61ad-4d84-a4cc-42ee20d806d3",n=$d();if(!Bd(`contact-${n}`,3,6e4))return{success:!1,message:"Too many submission attempts. Please wait a moment before trying again."};const r=Fs(e.name),s=Hd(e.email),a=Fs(e.message),o=Fs(e.reason);if(!ag(r))return{success:!1,message:"Please enter a valid name (2-100 characters, letters only)."};if(!Wd(s))return{success:!1,message:"Please enter a valid email address."};if(!og(a))return{success:!1,message:"Message must be between 10 and 5000 characters and contain appropriate content."};if(Ha(a)||Ha(r))return{success:!1,message:"Invalid content detected. Please remove any HTML or script tags."};try{const c=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:t,name:r,email:s,subject:`Contact Form: ${o}`,message:`
Reason: ${o}

Message:
${a}

---
From: ${r}
Email: ${s}
        `.trim(),from_name:"EducateHers Kenya Website",replyto:s,botcheck:!1})})).json();if(c.success)return{success:!0,message:"Thank you for your message! We will get back to you soon."};throw new Error(c.message||"Failed to submit form")}catch(l){return console.error("Contact form submission error:",l),{success:!1,message:"Sorry, something went wrong. Please try again or email us directly at info@educateherskenya.net"}}}async function cg(e){const t="b748c57c-61ad-4d84-a4cc-42ee20d806d3",n=$d();if(!Bd(`newsletter-${n}`,3,6e4))return{success:!1,message:"Too many subscription attempts. Please wait a moment before trying again."};const r=Hd(e.email);if(!Wd(r))return{success:!1,message:"Please enter a valid email address."};if(Ha(r))return{success:!1,message:"Invalid email format detected."};try{const a=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:t,email:r,subject:"New Newsletter Subscription",message:`
New newsletter subscription request:

Email: ${r}
Subscribed at: ${new Date().toLocaleString()}
        `.trim(),from_name:"EducateHers Kenya Website",replyto:r,botcheck:!1})})).json();if(a.success)return{success:!0,message:"Successfully subscribed to our newsletter!"};throw new Error(a.message||"Failed to subscribe")}catch(s){return console.error("Newsletter subscription error:",s),{success:!1,message:"Sorry, something went wrong. Please try again later."}}}function Kd(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}var Vd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ac=q.createContext&&q.createContext(Vd),ug=["attr","size","title"];function dg(e,t){if(e==null)return{};var n=fg(e,t),r,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Di(){return Di=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Di.apply(this,arguments)}function oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Fi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oc(Object(n),!0).forEach(function(r){pg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pg(e,t,n){return t=hg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hg(e){var t=mg(e,"string");return typeof t=="symbol"?t:t+""}function mg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yd(e){return e&&e.map((t,n)=>q.createElement(t.tag,Fi({key:n},t.attr),Yd(t.child)))}function Tr(e){return t=>q.createElement(gg,Di({attr:Fi({},e.attr)},t),Yd(e.child))}function gg(e){var t=n=>{var{attr:r,size:s,title:a}=e,o=dg(e,ug),l=s||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),q.createElement("svg",Di({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:c,style:Fi(Fi({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&q.createElement("title",null,a),e.children)};return ac!==void 0?q.createElement(ac.Consumer,null,n=>t(n)):t(Vd)}function xg(e){return Tr({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function vg(e){return Tr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function yg(e){return Tr({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function jg(e){return Tr({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function wg(e){return Tr({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function Ng(){const[e,t]=N.useState(""),[n,r]=N.useState(!1),[s,a]=N.useState(!1),[o,l]=N.useState(""),c=async u=>{if(u.preventDefault(),!e.trim()){l("Please enter your email");return}if(!Kd(e)){l("Please enter a valid email");return}a(!0),l("");try{const d=await cg({email:e});d.success?(r(!0),t(""),setTimeout(()=>r(!1),5e3)):l(d.message)}catch(d){l("Something went wrong. Please try again."),console.error("Newsletter subscription error:",d)}finally{a(!1)}};return i.jsxs("footer",{className:"footer",children:[i.jsx("div",{className:"footer-main",children:i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-column",children:[i.jsx(z,{to:"/",className:"footer-brand",children:i.jsx("img",{src:"/assets/logo.jpg",alt:"EducateHers Kenya",className:"footer-logo"})}),i.jsx("p",{className:"footer-about",children:"Empowering girls through education and advocating for gender equality in Kenya and beyond."}),i.jsxs("div",{className:"footer-social",children:[i.jsx("a",{href:"https://www.facebook.com/educatehers",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Facebook",children:i.jsx(xg,{})}),i.jsx("a",{href:"https://x.com/EducateHERs",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Twitter",children:i.jsx(jg,{})}),i.jsx("a",{href:"https://www.instagram.com/educateherskenya/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Instagram",children:i.jsx(vg,{})}),i.jsx("a",{href:"https://www.linkedin.com/company/educate-hers/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"LinkedIn",children:i.jsx(yg,{})}),i.jsx("a",{href:"https://www.youtube.com/@EducateHERs",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"YouTube",children:i.jsx(wg,{})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{className:"footer-heading",children:"Quick Links"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(z,{to:"/",children:"Home"})}),i.jsx("li",{children:i.jsx(z,{to:"/what-we-do",children:"What We Do"})}),i.jsx("li",{children:i.jsx(z,{to:"/events",children:"Events"})}),i.jsx("li",{children:i.jsx(z,{to:"/volunteer",children:"Volunteer"})}),i.jsx("li",{children:i.jsx(z,{to:"/blog",children:"Blog"})}),i.jsx("li",{children:i.jsx(z,{to:"/contact",children:"Contact Us"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{className:"footer-heading",children:"Get Involved"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(z,{to:"/volunteer",children:"Become a Volunteer"})}),i.jsx("li",{children:i.jsx(z,{to:"/donate",children:"Make a Donation"})}),i.jsx("li",{children:i.jsx(z,{to:"/events",children:"Attend an Event"})}),i.jsx("li",{children:i.jsx(z,{to:"/contact",children:"Partner with Us"})}),i.jsx("li",{children:i.jsx(z,{to:"/donate",children:"Sponsor a Girl"})})]})]}),i.jsxs("div",{className:"footer-column",children:[i.jsx("h3",{className:"footer-heading",children:"Stay Connected"}),i.jsxs("div",{className:"footer-contact",children:[i.jsxs("div",{className:"footer-contact-item",children:[i.jsx("i",{className:"fas fa-envelope"}),i.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),i.jsxs("div",{className:"footer-contact-item",children:[i.jsx("i",{className:"fas fa-phone"}),i.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]}),i.jsxs("div",{className:"footer-contact-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsxs("span",{children:["Galleria Office and Business Park",i.jsx("br",{}),"Seminary Road, Karen Area",i.jsx("br",{}),"Nairobi, Kenya",i.jsx("br",{}),"P. O. Box 46162-00100"]})]})]}),i.jsxs("div",{className:"footer-newsletter",children:[i.jsx("h4",{className:"footer-newsletter-title",children:"Newsletter"}),i.jsx("p",{className:"footer-newsletter-text",children:"Subscribe to get updates"}),i.jsxs("form",{onSubmit:c,className:"newsletter-form",children:[i.jsx("input",{type:"email",value:e,onChange:u=>{t(u.target.value),l("")},placeholder:"Your email",required:!0,className:"newsletter-input","aria-label":"Email address for newsletter",disabled:s}),i.jsx("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe to newsletter",disabled:s,children:s?i.jsx("i",{className:"fas fa-spinner fa-spin"}):i.jsx("i",{className:"fas fa-paper-plane"})})]}),n&&i.jsxs("p",{className:"newsletter-success",children:[i.jsx("i",{className:"fas fa-check-circle"})," Thank you for subscribing!"]}),o&&i.jsxs("p",{className:"newsletter-error",children:[i.jsx("i",{className:"fas fa-exclamation-circle"})," ",o]})]})]})]})}),i.jsx("div",{className:"footer-bottom",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," EducateHers Kenya. All rights reserved."]}),i.jsxs("div",{className:"footer-legal",children:[i.jsx(z,{to:"/privacy",children:"Privacy Policy"}),i.jsx("span",{className:"footer-divider",children:"•"}),i.jsx(z,{to:"/terms",children:"Terms of Service"}),i.jsx("span",{className:"footer-divider",children:"•"}),i.jsx(z,{to:"/cookies",children:"Cookie Policy"})]})]})})]})}function nt({title:e="EducateHers Kenya - Empowering Girls Through Education",description:t="EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women in Kenya.",keywords:n="girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls",author:r="EducateHers Kenya",image:s="https://educateherskenya.org/og-image.jpg",url:a="https://educateherskenya.org",type:o="website",publishedTime:l,modifiedTime:c,section:u,tags:d=[]}){const p=e.includes("EducateHers Kenya")?e:`${e} | EducateHers Kenya`,g=typeof window<"u"?window.location.href:a;return i.jsxs(ig,{children:[i.jsx("title",{children:p}),i.jsx("meta",{name:"title",content:p}),i.jsx("meta",{name:"description",content:t}),i.jsx("meta",{name:"keywords",content:n}),i.jsx("meta",{name:"author",content:r}),i.jsx("meta",{name:"robots",content:"index, follow"}),i.jsx("meta",{name:"language",content:"English"}),i.jsx("meta",{name:"revisit-after",content:"7 days"}),i.jsx("link",{rel:"canonical",href:g}),i.jsx("meta",{property:"og:type",content:o}),i.jsx("meta",{property:"og:url",content:g}),i.jsx("meta",{property:"og:title",content:p}),i.jsx("meta",{property:"og:description",content:t}),i.jsx("meta",{property:"og:image",content:s}),i.jsx("meta",{property:"og:site_name",content:"EducateHers Kenya"}),i.jsx("meta",{property:"og:locale",content:"en_US"}),l&&i.jsx("meta",{property:"article:published_time",content:l}),c&&i.jsx("meta",{property:"article:modified_time",content:c}),u&&i.jsx("meta",{property:"article:section",content:u}),d.map(v=>i.jsx("meta",{property:"article:tag",content:v},v)),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:url",content:g}),i.jsx("meta",{name:"twitter:title",content:p}),i.jsx("meta",{name:"twitter:description",content:t}),i.jsx("meta",{name:"twitter:image",content:s}),i.jsx("meta",{name:"twitter:site",content:"@EducateHERs"}),i.jsx("meta",{name:"twitter:creator",content:"@EducateHERs"}),i.jsx("meta",{name:"theme-color",content:"#00a9ce"}),i.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),i.jsx("meta",{name:"format-detection",content:"telephone=no"}),i.jsx("meta",{name:"geo.region",content:"KE"}),i.jsx("meta",{name:"geo.placename",content:"Kenya"}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"NGO",name:"EducateHers Kenya",alternateName:"EducateHers",url:"https://educateherskenya.org",logo:"https://educateherskenya.org/logo.png",description:t,address:{"@type":"PostalAddress",addressCountry:"KE",addressLocality:"Kenya"},sameAs:["https://www.facebook.com/educatehers","https://x.com/EducateHERs","https://www.instagram.com/educateherskenya/","https://www.linkedin.com/company/educate-hers/","https://www.youtube.com/@EducateHERs"],contactPoint:{"@type":"ContactPoint",contactType:"Customer Service",email:"info@educateherskenya.org"}})})]})}function kg(){return i.jsxs("main",{children:[i.jsx(nt,{title:"Home",description:"EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women across Kenya.",keywords:"girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls, gender-responsive education",url:"https://educateherskenya.org"}),i.jsx("section",{className:"hero-section","aria-label":"Hero banner",children:i.jsxs("div",{className:"hero-overlay",children:[i.jsx("h1",{className:"hero-title",children:"EDUCATE HER EMPOWER THE WORLD"}),i.jsx("p",{className:"hero-subtitle",children:"We promote gender equality in education through awareness-building, training programs, and the implementation of gender-responsive practices"}),i.jsx(z,{to:"/donate",children:i.jsx("button",{className:"hero-donate-btn","aria-label":"Make a donation",children:"Donate"})})]})}),i.jsxs("section",{className:"ways-to-help-section","aria-labelledby":"ways-to-help-heading",children:[i.jsx("h2",{id:"ways-to-help-heading",className:"visually-hidden",children:"Ways to Help"}),i.jsxs("div",{className:"ways-grid",children:[i.jsxs("article",{className:"card help-card",children:[i.jsx("div",{className:"help-icon teal",role:"img","aria-label":"Money emoji",children:"💰"}),i.jsx("h3",{className:"help-title teal",children:"CROWDFUNDING"}),i.jsx("p",{className:"help-description",children:"We can't educate her alone, will be better with your donation. We call on fundraising from anything that you can."}),i.jsx(z,{to:"/donate",children:i.jsx("button",{className:"help-btn btn-teal",children:"Partner with us and Educate Her today"})})]}),i.jsxs("article",{className:"card help-card",children:[i.jsx("div",{className:"help-icon orange",role:"img","aria-label":"Graduation cap emoji",children:"🎓"}),i.jsx("h3",{className:"help-title orange",children:"GIVE SCHOLARSHIP"}),i.jsx("p",{className:"help-description",children:"We think that education is best way to help needy. You are nonprofit organization, NGO, if you can, let do it."}),i.jsx(z,{to:"/donate",children:i.jsx("button",{className:"help-btn btn-orange",children:"Support a Scholar"})})]}),i.jsxs("article",{className:"card help-card",children:[i.jsx("div",{className:"help-icon teal",role:"img","aria-label":"Handshake emoji",children:"🤝"}),i.jsx("h3",{className:"help-title teal",children:"VOLUNTEER"}),i.jsx("p",{className:"help-description",children:"Share your time, skills, and passion to mentor and empower young girls through our volunteer programs."}),i.jsx(z,{to:"/volunteer",className:"help-btn-link",children:i.jsx("button",{className:"help-btn btn-teal",children:"Join Our Team"})})]})]})]}),i.jsxs("section",{className:"stats-section","aria-labelledby":"stats-heading",children:[i.jsx("h2",{id:"stats-heading",className:"visually-hidden",children:"Our Impact Statistics"}),i.jsxs("div",{className:"stats-grid",children:[i.jsx(Qr,{number:"3+",label:"Projects"}),i.jsx(Qr,{number:"20,000+",label:"Donations"}),i.jsx(Qr,{number:"10+",label:"Volunteers"}),i.jsx(Qr,{number:"3+",label:"Years"})]})]}),i.jsxs("section",{className:"volunteer-info-section",children:[i.jsxs("div",{className:"volunteer-header",children:[i.jsx("h2",{className:"volunteer-main-title",children:"Help Us"}),i.jsx("h3",{className:"volunteer-subtitle",children:"Raise Your Funds For a Cause That You Care"}),i.jsx("p",{className:"volunteer-intro",children:"Hello. We have been present for over 3 years in the market. We are here to Educate Her"})]}),i.jsxs("div",{className:"volunteer-opportunities-grid",children:[i.jsx(qr,{number:"01",title:"Advocacy Support",description:"Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."}),i.jsx(qr,{number:"02",title:"Community Engagement",description:"Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."}),i.jsx(qr,{number:"03",title:"Event Support",description:"Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusivity in education."}),i.jsx(qr,{number:"04",title:"Collaborative Efforts",description:"Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations"})]}),i.jsx("div",{className:"volunteer-cta",children:i.jsx(z,{to:"/volunteer",children:i.jsx("button",{className:"volunteer-cta-btn",children:"Become Our Volunteer"})})})]}),i.jsxs("section",{className:"why-choose-section",children:[i.jsxs("div",{className:"why-choose-header",children:[i.jsx("p",{className:"why-choose-tagline",children:"ONE OF THE BEST AROUND"}),i.jsx("h2",{className:"why-choose-title",children:"Why You Should Choose Us"})]}),i.jsxs("div",{className:"why-choose-grid",children:[i.jsxs("div",{className:"why-choose-card",children:[i.jsx("h3",{className:"why-choose-card-title",children:"Empowering Girls"}),i.jsx("p",{className:"why-choose-card-description",children:"Education empowers girls by providing them with knowledge, skills, and confidence to make informed decisions about their lives. When girls are educated, they are more likely to marry later, have fewer children, and participate more actively in the workforce, thus increasing their opportunities for personal and professional growth."})]}),i.jsxs("div",{className:"why-choose-card",children:[i.jsx("h3",{className:"why-choose-card-title",children:"Breaking the Cycle of Poverty"}),i.jsx("p",{className:"why-choose-card-description",children:"Education is a powerful tool for breaking the cycle of poverty, and when girls are educated, they are more likely to escape poverty themselves and contribute to their communities' economic development. By donating to an organization that advocates for gender equality by educating girls, you are directly contributing to uplifting entire communities and fostering sustainable development."})]}),i.jsxs("div",{className:"why-choose-card",children:[i.jsx("h3",{className:"why-choose-card-title",children:"Building Resilient Communities"}),i.jsx("p",{className:"why-choose-card-description",children:"Educated girls are better equipped to face and respond to challenges such as climate change, conflict, and natural disasters. By supporting education initiatives for girls, you are investing in the resilience and sustainability of communities, as educated individuals are more adaptable, resourceful, and capable of driving positive change."})]}),i.jsxs("div",{className:"why-choose-card",children:[i.jsx("h3",{className:"why-choose-card-title",children:"Promoting Health and Well-being"}),i.jsx("p",{className:"why-choose-card-description",children:"Educated girls are more likely to have access to healthcare information and resources, leading to improved health outcomes for themselves and their families. By supporting initiatives that educate girls about health and hygiene, you are contributing to the overall well-being of communities and reducing the prevalence of diseases and maternal mortality rates."})]}),i.jsxs("div",{className:"why-choose-card",children:[i.jsx("h3",{className:"why-choose-card-title",children:"Creating Future Leaders"}),i.jsx("p",{className:"why-choose-card-description",children:"Educated girls are the future leaders, innovators, and changemakers of society. By investing in their education today, you are investing in the leaders of tomorrow who will advocate for justice, equality, and human rights. Your contribution can have a ripple effect, inspiring other girls to pursue education and become agents of positive change in their communities and beyond."})]})]})]}),i.jsxs("section",{className:"team-section",children:[i.jsxs("div",{className:"team-header",children:[i.jsx("p",{className:"team-tagline",children:"OUR TEAMS"}),i.jsx("h2",{className:"team-title",children:"Our Awesome Team"}),i.jsx("p",{className:"team-subtitle",children:"We work with a very great team focused on helping Her be educated"})]}),i.jsxs("div",{className:"team-grid",children:[i.jsxs("div",{className:"team-card",children:[i.jsxs("div",{className:"team-image-container",children:[i.jsx("img",{src:"/assets/team/cyprian-chenani.png",alt:"Cyprian Chenani",className:"team-image"}),i.jsx("div",{className:"team-overlay",children:i.jsxs("div",{className:"team-social",children:[i.jsx("a",{href:"#",className:"social-icon","aria-label":"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Email",children:i.jsx("i",{className:"fas fa-envelope"})})]})})]}),i.jsxs("div",{className:"team-card-content",children:[i.jsx("h3",{className:"team-member-name",children:"Cyprian Chenani, Bsc"}),i.jsx("p",{className:"team-member-role",children:"Founder/Lead Advocate"}),i.jsx("p",{className:"team-description",children:"As the driving force behind our advocacy campaign, our Founder/Lead Advocate sets the vision and direction for our efforts. With a passion for social change and a commitment to empowering youth voices."})]})]}),i.jsxs("div",{className:"team-card",children:[i.jsxs("div",{className:"team-image-container",children:[i.jsx("img",{src:"/assets/team/bramuel-wekesa-2.jpg",alt:"Bramuel Wekesa",className:"team-image"}),i.jsx("div",{className:"team-overlay",children:i.jsxs("div",{className:"team-social",children:[i.jsx("a",{href:"#",className:"social-icon","aria-label":"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Email",children:i.jsx("i",{className:"fas fa-envelope"})})]})})]}),i.jsxs("div",{className:"team-card-content",children:[i.jsx("h3",{className:"team-member-name",children:"Bramuel Wekesa, Bsc"}),i.jsx("p",{className:"team-member-role",children:"Campaign Coordinator/Event Planner"}),i.jsx("p",{className:"team-description",children:"The mastermind behind our advocacy events and campaigns, orchestrating every detail to ensure their success. From coordinating logistics to rallying support from partners and volunteers."})]})]}),i.jsxs("div",{className:"team-card",children:[i.jsxs("div",{className:"team-image-container",children:[i.jsx("img",{src:"/assets/team/emmanuel-kwoba.jpeg",alt:"Emmanuel P. Kwoba",className:"team-image"}),i.jsx("div",{className:"team-overlay",children:i.jsxs("div",{className:"team-social",children:[i.jsx("a",{href:"#",className:"social-icon","aria-label":"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Email",children:i.jsx("i",{className:"fas fa-envelope"})})]})})]}),i.jsxs("div",{className:"team-card-content",children:[i.jsx("h3",{className:"team-member-name",children:"Emmanuel P. Kwoba"}),i.jsx("p",{className:"team-member-role",children:"Web Developer/Technical Support"}),i.jsx("p",{className:"team-description",children:"Ensures that our website runs smoothly and effectively serves as a hub for our advocacy efforts. Keeps our online platform up to date, secure, and user-friendly, empowering us to reach a wider audience."})]})]}),i.jsxs("div",{className:"team-card",children:[i.jsxs("div",{className:"team-image-container",children:[i.jsx("img",{src:"/assets/team/eve-maina.jpg",alt:"Eve Maina",className:"team-image"}),i.jsx("div",{className:"team-overlay",children:i.jsxs("div",{className:"team-social",children:[i.jsx("a",{href:"#",className:"social-icon","aria-label":"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Twitter",children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("a",{href:"#",className:"social-icon","aria-label":"Email",children:i.jsx("i",{className:"fas fa-envelope"})})]})})]}),i.jsxs("div",{className:"team-card-content",children:[i.jsx("h3",{className:"team-member-name",children:"Eve Maina"}),i.jsx("p",{className:"team-member-role",children:"Communications Specialist"}),i.jsx("p",{className:"team-description",children:"The linchpin of our outreach efforts, responsible for crafting clear, concise, and compelling messaging that resonates with our target audience through strategic communication strategies."})]})]})]})]}),i.jsx("section",{className:"partners-section","aria-labelledby":"partners-heading",children:i.jsxs("div",{className:"partners-container",children:[i.jsx("h2",{id:"partners-heading",className:"partners-title",children:"Our Partners & Collaborators"}),i.jsx("p",{className:"partners-subtitle",children:"Working together with organizations that share our vision for gender equality in education"}),i.jsxs("div",{className:"partners-grid",children:[i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/uniport-loans.png",alt:"Uniport Loans Ltd",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/apceiu.png",alt:"APCEIU - Asia-Pacific Centre of Education for International Understanding",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/biji-biji.png",alt:"Biji Biji Initiative",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/government-kenya.png",alt:"The Government of Kenya",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/ministry-education.png",alt:"Ministry of Education Kenya",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/uniport-loans.png",alt:"Uniport Loans Ltd",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/apceiu.png",alt:"APCEIU - Asia-Pacific Centre of Education for International Understanding",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/biji-biji.png",alt:"Biji Biji Initiative",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/government-kenya.png",alt:"The Government of Kenya",className:"partner-logo"})}),i.jsx("div",{className:"partner-logo-container",children:i.jsx("img",{src:"/assets/partners/ministry-education.png",alt:"Ministry of Education Kenya",className:"partner-logo"})})]}),i.jsxs("p",{className:"partners-cta-text",children:["Interested in partnering with us? ",i.jsx(z,{to:"/contact",className:"partners-cta-link",children:"Get in touch"})]})]})}),i.jsxs("section",{className:"cta-section",children:[i.jsx("h2",{className:"cta-title",children:"Join Our Mission"}),i.jsx("p",{className:"cta-description",children:"Together, we can create lasting change. Whether through volunteering, donations, or spreading awareness, every action counts."}),i.jsx(z,{to:"/contact",className:"cta-link",children:i.jsx("button",{className:"cta-btn",children:"Contact Us"})})]})]})}function Qr({number:e,label:t}){return i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-number",children:e}),i.jsx("div",{className:"stat-label",children:t})]})}function qr({number:e,title:t,description:n}){return i.jsxs("div",{className:"volunteer-opportunity",children:[i.jsxs("div",{className:"volunteer-number",children:[e,"."]}),i.jsxs("div",{className:"volunteer-content",children:[i.jsxs("h4",{className:"volunteer-opportunity-title",children:[t,":"]}),i.jsx("p",{className:"volunteer-opportunity-description",children:n})]})]})}function bg(){const[e,t]=N.useState("All"),[n,r]=N.useState("upcoming"),[s,a]=N.useState(null),o=[{id:"7",title:"Gender Inclusion Training Workshop – Turkana 2025",date:"October 18, 2025",time:"All Day",location:"Lodwar Youth Empowerment Centre, Turkana County",category:"Training",description:"Intensive workshop bringing together youth leaders, teachers, and community representatives to strengthen advocacy for gender-inclusive education in Turkana County. Equipped 30 participants with practical tools to promote girls' education, address cultural barriers such as early marriage, and foster inclusive classroom and community practices. Participants formed school-based EducateHers Clubs to sustain advocacy activities and mentorship beyond the workshop.",image:"/assets/events/turkana-training.jpg",isPast:!0}],l=["All","Workshop","Fundraiser","Networking","Training","Community"],c=o.filter(d=>n==="upcoming"?!d.isPast:d.isPast).filter(d=>e==="All"||d.category===e),u=o.filter(d=>!d.isPast&&d.isFeatured);return i.jsxs("main",{className:"events-page",children:[i.jsx(nt,{title:"Events",description:"Join EducateHers Kenya at our upcoming workshops, fundraisers, training sessions, and community events. Be part of the movement to empower girls through education in Kenya.",keywords:"EducateHers Kenya events, girls education workshops, fundraising events Kenya, training sessions, community events, gender equality events",url:"https://educateherskenya.org/events"}),i.jsx("section",{className:"events-hero",children:i.jsxs("div",{className:"events-hero-content",children:[i.jsx("h1",{className:"events-hero-title",children:"Our Events"}),i.jsx("p",{className:"events-hero-subtitle",children:"Join us at our upcoming events and be part of the movement to empower girls through education"})]})}),s&&i.jsx("div",{className:"event-modal-overlay",onClick:()=>a(null),children:i.jsxs("div",{className:"event-modal",onClick:d=>d.stopPropagation(),children:[i.jsx("button",{className:"event-modal-close",onClick:()=>a(null),children:i.jsx("i",{className:"fas fa-times"})}),i.jsxs("div",{className:"event-modal-image",children:[i.jsx("img",{src:s.image,alt:s.title,onError:d=>{d.currentTarget.src="https://via.placeholder.com/800x400/00a9ce/ffffff?text=Event+Image"}}),i.jsx("div",{className:"event-modal-category",children:s.category})]}),i.jsxs("div",{className:"event-modal-content",children:[i.jsx("h2",{className:"event-modal-title",children:s.title}),i.jsxs("div",{className:"event-modal-meta",children:[i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:s.date})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:s.time})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:s.location})]})]}),i.jsxs("div",{className:"event-modal-description",children:[i.jsx("h3",{children:"About This Event"}),i.jsx("p",{children:s.description})]}),!s.isPast&&s.spots&&i.jsxs("div",{className:"event-modal-spots",children:[i.jsx("i",{className:"fas fa-users"}),i.jsxs("strong",{children:[s.spots," spots remaining"]})," - Register soon!"]}),!s.isPast&&s.registrationLink&&i.jsxs("div",{className:"event-modal-actions",children:[i.jsxs("a",{href:s.registrationLink,className:"event-modal-register-btn",children:[i.jsx("i",{className:"fas fa-ticket-alt"})," Register Now"]}),i.jsx("button",{className:"event-modal-secondary-btn",onClick:()=>a(null),children:"Close"})]}),s.isPast&&i.jsxs("div",{className:"event-modal-past-badge",children:[i.jsx("i",{className:"fas fa-check-circle"})," This event has concluded"]})]})]})}),u.length>0&&i.jsx("section",{className:"featured-events-section",children:i.jsxs("div",{className:"events-container",children:[i.jsx("h2",{className:"section-title",children:"Featured Events"}),i.jsx("div",{className:"featured-events-grid",children:u.map(d=>i.jsxs("article",{className:"featured-event-card",children:[i.jsx("div",{className:"featured-event-badge",children:"Featured"}),i.jsxs("div",{className:"featured-event-image",children:[i.jsx("img",{src:d.image,alt:d.title,onError:p=>{p.currentTarget.src="https://via.placeholder.com/600x400/00a9ce/ffffff?text=Event+Image"}}),i.jsx("div",{className:"featured-event-category",children:d.category})]}),i.jsxs("div",{className:"featured-event-content",children:[i.jsx("h3",{children:d.title}),i.jsxs("div",{className:"featured-event-meta",children:[i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:d.date})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:d.time})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:d.location})]})]}),i.jsx("p",{className:"featured-event-description",children:d.description}),d.spots&&d.spots<20&&i.jsxs("div",{className:"spots-alert",children:[i.jsx("i",{className:"fas fa-exclamation-circle"}),"Only ",d.spots," spots remaining!"]}),i.jsxs("a",{href:d.registrationLink,className:"featured-event-btn",children:[i.jsx("i",{className:"fas fa-ticket-alt"})," Register Now"]})]})]},d.id))})]})}),i.jsx("section",{className:"events-list-section",children:i.jsxs("div",{className:"events-container",children:[i.jsxs("div",{className:"events-tabs",children:[i.jsxs("button",{className:`events-tab ${n==="upcoming"?"active":""}`,onClick:()=>r("upcoming"),children:[i.jsx("i",{className:"fas fa-calendar-plus"})," Upcoming Events"]}),i.jsxs("button",{className:`events-tab ${n==="past"?"active":""}`,onClick:()=>r("past"),children:[i.jsx("i",{className:"fas fa-history"})," Past Events"]})]}),i.jsxs("div",{className:"category-filter",children:[i.jsx("span",{className:"filter-label",children:"Filter by:"}),i.jsx("div",{className:"category-buttons",children:l.map(d=>i.jsx("button",{className:`category-btn ${e===d?"active":""}`,onClick:()=>t(d),children:d},d))})]}),c.length>0?i.jsx("div",{className:"events-grid",children:c.map(d=>i.jsxs("article",{className:"event-card",onClick:()=>a(d),style:{cursor:"pointer"},children:[i.jsxs("div",{className:"event-card-image",children:[i.jsx("img",{src:d.image,alt:d.title,onError:p=>{p.currentTarget.src="https://via.placeholder.com/400x250/00a9ce/ffffff?text=Event+Image"}}),i.jsx("div",{className:"event-card-category",children:d.category})]}),i.jsxs("div",{className:"event-card-content",children:[i.jsx("h3",{className:"event-card-title",children:d.title}),i.jsxs("div",{className:"event-card-meta",children:[i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),i.jsx("span",{children:d.date})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsx("span",{children:d.time})]}),i.jsxs("div",{className:"event-meta-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:d.location})]})]}),i.jsx("p",{className:"event-card-description",children:d.description}),!d.isPast&&d.spots&&i.jsxs("div",{className:"event-spots",children:[i.jsx("i",{className:"fas fa-users"}),d.spots," spots left"]}),i.jsx("div",{className:"event-card-btn-container",children:i.jsxs("button",{className:"event-card-btn",children:[d.isPast?"View Details":"Learn More",i.jsx("i",{className:"fas fa-arrow-right"})]})})]})]},d.id))}):i.jsxs("div",{className:"no-events",children:[i.jsx("i",{className:"fas fa-calendar-times"}),i.jsx("p",{children:"No events found in this category."})]})]})}),i.jsx("section",{className:"events-cta",children:i.jsxs("div",{className:"events-cta-content",children:[i.jsx("h2",{children:"Want to Host an Event with Us?"}),i.jsx("p",{children:"Partner with EducateHers Kenya to create impactful events for girls' education"}),i.jsxs(z,{to:"/contact",className:"events-cta-btn",children:["Get in Touch ",i.jsx("i",{className:"fas fa-arrow-right"})]})]})})]})}const Qt=({number:e,title:t,description:n})=>i.jsxs("div",{className:"responsibility-item",children:[i.jsx("div",{className:"responsibility-number",children:e}),i.jsxs("div",{className:"responsibility-content",children:[i.jsx("h3",{className:"responsibility-title",children:t}),i.jsx("p",{className:"responsibility-description",children:n})]})]}),Hn=({text:e})=>i.jsxs("div",{className:"qualification-item",children:[i.jsx("i",{className:"fas fa-check-circle qualification-icon"}),i.jsx("p",{className:"qualification-text",children:e})]}),Xr=({icon:e,text:t})=>i.jsxs("div",{className:"benefit-item",children:[i.jsx("div",{className:"benefit-icon",children:e}),i.jsx("p",{className:"benefit-text",children:t})]});function Sg(){return i.jsxs("main",{className:"volunteer-page",children:[i.jsx(nt,{title:"Volunteer",description:"Join EducateHers Kenya as a volunteer advocate for gender equality in education. Make a difference in girls' lives through mentorship, advocacy, and community outreach programs.",keywords:"volunteer Kenya, volunteer opportunities, gender equality volunteer, education volunteer, girls education advocate, volunteer Kenya NGO",url:"https://educateherskenya.org/volunteer"}),i.jsx("section",{className:"volunteer-hero",children:i.jsxs("div",{className:"volunteer-hero-content",children:[i.jsx("h1",{className:"volunteer-main-title",children:"Volunteer"}),i.jsx("h2",{className:"volunteer-subtitle",children:"Join EducateHERs in Promoting Gender Equality in Education"})]})}),i.jsx("section",{className:"position-info-section",children:i.jsxs("div",{className:"position-info-container",children:[i.jsx("h2",{className:"position-title",children:"Position: Volunteer Advocate for Gender Equality in Education"}),i.jsxs("div",{className:"position-details",children:[i.jsxs("div",{className:"position-detail-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Location:"})," Remote (meetings may be conducted either in person or virtually)"]})]}),i.jsxs("div",{className:"position-detail-item",children:[i.jsx("i",{className:"fas fa-clock"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Duration:"})," Flexible, based on volunteer availability and commitment"]})]})]})]})}),i.jsx("section",{className:"about-section",children:i.jsxs("div",{className:"about-container",children:[i.jsx("h2",{className:"section-heading",children:"About EducateHERs"}),i.jsx("p",{className:"about-text",children:"EducateHERs is a dynamic organization dedicated to promoting gender equality in education through consulting, training, advocacy, and awareness initiatives. Our mission is to create inclusive learning environments that empower all individuals, regardless of gender, to reach their full potential."})]})}),i.jsx("section",{className:"responsibilities-section",children:i.jsxs("div",{className:"responsibilities-container",children:[i.jsx("h2",{className:"section-heading",children:"Key Responsibilities"}),i.jsxs("div",{className:"responsibilities-grid",children:[i.jsx(Qt,{number:"01",title:"Advocacy Support",description:"Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."}),i.jsx(Qt,{number:"02",title:"Community Engagement",description:"Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."}),i.jsx(Qt,{number:"03",title:"Meeting Participation",description:"Attend regular meetings either in person or virtually to discuss ongoing projects, share insights, and collaborate with team members."}),i.jsx(Qt,{number:"04",title:"Content Creation",description:"Contribute to the development of compelling content, including articles, social media posts, and educational resources, to raise awareness about gender equality in education."}),i.jsx(Qt,{number:"05",title:"Event Support",description:"Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusive in education."}),i.jsx(Qt,{number:"06",title:"Collaborative Efforts",description:"Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations."})]})]})}),i.jsx("section",{className:"qualifications-section",children:i.jsxs("div",{className:"qualifications-container",children:[i.jsx("h2",{className:"section-heading",children:"Qualifications"}),i.jsxs("div",{className:"qualifications-grid",children:[i.jsx(Hn,{text:"Passion for promoting gender equality in education and creating positive social change."}),i.jsx(Hn,{text:"Excellent communication and interpersonal skills."}),i.jsx(Hn,{text:"Ability to work effectively both independently and as part of a team."}),i.jsx(Hn,{text:"Willingness to attend meetings either in person or virtually, based on availability."}),i.jsx(Hn,{text:"Commitment to upholding the values and mission of EducateHERs."})]})]})}),i.jsx("section",{className:"benefits-section",children:i.jsxs("div",{className:"benefits-container",children:[i.jsx("h2",{className:"section-heading",children:"Benefits"}),i.jsxs("div",{className:"benefits-grid",children:[i.jsx(Xr,{icon:"🎯",text:"Opportunity to contribute to meaningful advocacy efforts and drive real change in promoting gender equality in education."}),i.jsx(Xr,{icon:"📈",text:"Gain valuable experience in advocacy, community engagement, and event coordination."}),i.jsx(Xr,{icon:"🤝",text:"Expand your professional network by collaborating with diverse stakeholders and organizations."}),i.jsx(Xr,{icon:"💖",text:"Personal satisfaction of making a difference in the lives of students, educators, and communities."})]})]})}),i.jsx("section",{className:"application-cta-section",children:i.jsxs("div",{className:"application-cta-container",children:[i.jsx("h2",{className:"application-cta-title",children:"How to Apply"}),i.jsx("p",{className:"application-cta-text",children:"If you are passionate about gender equality in education and eager to make a difference, we invite you to join us as a Volunteer Advocate for EducateHERs. Please send a brief statement of interest outlining your motivation for volunteering and any relevant experience by filling application form."}),i.jsxs("a",{href:"https://forms.gle/ogAkJ1SL8GmQzi3P6",target:"_blank",rel:"noopener noreferrer",className:"application-btn",children:["Fill Application Form",i.jsx("i",{className:"fas fa-arrow-right"})]}),i.jsxs("p",{className:"volunteer-note",children:[i.jsx("strong",{children:"NOTE:"})," THIS POSITION IS VOLUNTARY AND DOES NOT OFFER FINANCIAL COMPENSATION."]}),i.jsx("p",{className:"volunteer-tagline",children:"Join us in shaping a more inclusive future for education!"})]})})]})}const Eg=({icon:e,title:t,description:n,color:r})=>i.jsxs("article",{className:`service-card service-card-${r}`,children:[i.jsx("div",{className:"service-icon",role:"img","aria-label":`${t} icon`,children:e}),i.jsx("h3",{className:"service-title",children:t}),i.jsx("p",{className:"service-description",children:n})]});function Cg(){const e=[{icon:"💼",title:"Consulting Services",description:"We offer personalized consulting services to schools and educational organizations. Assess their current practices, policies, and curricula related to gender inclusion and provide recommendations for improvement.",color:"teal"},{icon:"🎓",title:"Workshops and Training",description:"We design and conduct workshops, seminars, and training sessions for teachers, educators, parents, and students. These sessions cover topics such as gender stereotypes, promoting inclusive classrooms, creating safe spaces, and fostering gender equality.",color:"orange"},{icon:"📚",title:"Curriculum Development",description:"We collaborate with schools to develop gender-inclusive curriculum materials, lesson plans, and teaching resources. These materials reflect diverse perspectives and challenge traditional gender roles.",color:"teal"},{icon:"📖",title:"Resource Creation",description:"We create and provide educational resources, toolkits, and guides that institutions can use to integrate gender equality into their educational practices.",color:"orange"},{icon:"💻",title:"Online Courses",description:"We develop online courses and webinars that educators and parents can access remotely. This allows for a broader reach and greater convenience for participants.",color:"teal"},{icon:"📢",title:"Awareness Campaigns/Campaign Strategy",description:"We partner with schools, NGOs, and government agencies to create and implement awareness campaigns aimed at changing societal attitudes and perceptions about gender inequalities in education. Develop comprehensive campaign strategies that outline goals, target audiences, messaging, channels, and activities.",color:"orange"},{icon:"📊",title:"Impact Measurement",description:"We offer evaluation and assessment services to measure the impact of gender equality initiatives. This data can help schools and organizations track progress and identify areas for improvement.",color:"teal"},{icon:"🤝",title:"Collaborations",description:"We partner with schools, colleges, universities, NGOs, government bodies, and community organizations to create a united front for advocacy efforts.",color:"orange"},{icon:"🎨",title:"Content Creation",description:"Develop compelling content, including videos, infographics, posters, articles, and social media posts, to convey key messages and raise awareness.",color:"teal"},{icon:"🎯",title:"Event Coordination",description:"Organize workshops, seminars, panel discussions, conferences, and awareness events to engage the community, share insights, and drive conversations.",color:"orange"},{icon:"🤲",title:"Partnerships and Sponsorships",description:"Collaborate with corporate sponsors, philanthropic organizations, and brands aligned with the cause to secure funding and resources for campaigns and events.",color:"teal"},{icon:"🌐",title:"Online Presence",description:"Establish a strong online presence through social media platforms, a dedicated website, and email marketing to reach a wider audience and disseminate campaign messages.",color:"orange"},{icon:"📈",title:"Data Collection",description:"Collect data and feedback to measure the impact of campaigns, which can be used to refine strategies and demonstrate outcomes to stakeholders.",color:"teal"}];return i.jsxs("main",{className:"what-we-do-page",children:[i.jsx(nt,{title:"What We Do",description:"EducateHers Kenya offers consulting services, training programs, online courses, and advocacy campaigns to promote gender equality in education. Learn about our comprehensive approach to empowering girls through education.",keywords:"gender equality education, consulting services Kenya, training programs, online courses, advocacy campaigns, STEM education, girls empowerment programs",url:"https://educateherskenya.org/what-we-do"}),i.jsx("section",{className:"what-we-do-hero",children:i.jsxs("div",{className:"what-we-do-hero-content",children:[i.jsx("h1",{className:"what-we-do-main-title",children:"What We Do"}),i.jsx("p",{className:"what-we-do-intro",children:"Empowering educators, transforming institutions, and advocating for gender equality in education through comprehensive services and strategic initiatives."})]})}),i.jsxs("section",{className:"key-components-section",children:[i.jsxs("div",{className:"key-components-header",children:[i.jsx("h2",{className:"key-components-title",children:"Key Components"}),i.jsx("p",{className:"key-components-subtitle",children:"Our multi-faceted approach to advancing gender equality in education"})]}),i.jsx("div",{className:"services-grid",children:e.map((t,n)=>i.jsx(Eg,{icon:t.icon,title:t.title,description:t.description,color:t.color},n))})]}),i.jsxs("section",{className:"what-we-do-cta",children:[i.jsx("h2",{className:"what-we-do-cta-title",children:"Ready to Partner With Us?"}),i.jsx("p",{className:"what-we-do-cta-description",children:"Join us in creating lasting change through education and advocacy"}),i.jsxs("div",{className:"what-we-do-cta-buttons",children:[i.jsx("a",{href:"/contact",className:"cta-btn-primary",children:"Get in Touch"}),i.jsx("a",{href:"/volunteer",className:"cta-btn-secondary",children:"Become a Volunteer"})]})]})]})}const jr=[{id:"1",slug:"gced-in-action-empowering-girls-turkana-kenya",title:"[GCED in Action] Empowering Girls through Youth Training: Unveiling Gender Barriers in Turkana, Kenya",excerpt:"A transformative youth workshop in Turkana's marginalized Lokori area addresses severe gender disparities in education, where only 46.6% of girls are enrolled compared to the national average of 92.5%.",date:"August 5, 2023",category:"Impact",author:"EducateHers Kenya Team",readTime:"8 min read",emoji:"🎓",gradient:"linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%)",content:[{type:"paragraph",text:"This transformative effort seeks to combat gender disparities in education through a youth workshop recently conducted in the marginalized Lokori area of Turkana, Kenya. For years, the region has faced severe gender discrimination in education. The school enrollment rate for children aged 6-13 in Turkana stands at a mere 50%, with even lower figures for girls at 46.6%, compared to the national average of 92.5% (Turkana County Government, 2015)."},{type:"paragraph",text:"High levels of insecurity, cultural biases, extreme poverty, and inadequate infrastructure have further marginalized this community. Supported by UNESCO APCEIU and the Biji-Biji Initiative, the groundbreaking initiative, named #EducateHERs, Empower the World, convened stakeholders, facilitators, and participants on August 5th, 2023, to address the pressing issue of unequal education opportunities. The workshop aimed to advocate for Sustainable Development Goals (SDGs) 4 and 5, promoting Inclusive Education and Gender Equality."},{type:"heading",text:"Unveiling Barriers: Insights Before the Workshop"},{type:"paragraph",text:"The pre-workshop survey, conducted among respondents including youth, teachers, and parents from Turkana, provided crucial insights into the region's educational landscape. Participants unanimously pointed out that 'Poverty and financial constraints' (73%) and 'Cultural and traditional beliefs' (55%) were the main contributors to unequal educational opportunities for girls. This highlights the considerable impact of both socio-economic difficulties and entrenched cultural norms in maintaining gender disparities."},{type:"paragraph",text:"The survey also illuminated various challenges faced by girls in pursuing education, with 'Early marriage' (64%), 'Gender-based violence and insecurity' (45%), and 'Cultural beliefs' (18%) emerging as significant obstacles. These findings emphasize the need to address concerns such as early marriage, violence, and cultural hindrances that impede girls' educational progress."},{type:"heading",text:"A Transformative Workshop That Ignited Change"},{type:"paragraph",text:"The workshop's transformative influence became apparent in the post-workshop evaluations. Following their participation, 90% of attendees noted an improved grasp of obstacles to girls' education. Their confidence in recognizing and addressing these challenges experienced a favourable change, as 80% now expressed elevated levels of assurance. The workshop also facilitated the formulation of practical recommendations aimed at eliminating gender-related obstacles."},{type:"heading",text:"Addressing Disparities: A Paradigm Shift"},{type:"paragraph",text:"Participants' perceptions underwent a significant transformation before and after the workshop. Initially, 55% of respondents acknowledged 'Cultural and traditional beliefs' as a hindrance, a figure that surged to 100% post-workshop. This shift underscores the workshop's profound impact on heightening awareness of how cultural norms perpetuate unequal educational opportunities."},{type:"quote",text:"The program enabled many girls who lacked exposure to envision the broader world. The workshop's success in generating awareness among them will carry back to their communities, fostering transformative change.",author:"Val Omoro, Youth Participant"},{type:"paragraph",text:"More feedback can be found in our documentary: https://www.youtube.com/watch?v=3ZJSrqGdOfo"},{type:"heading",text:"Sustaining Change: Extending to Social Media and Beyond"},{type:"paragraph",text:"The campaign's reach extended beyond the workshop to social media platforms such as Facebook (https://fb.watch/mG1zMoJIfN/), Twitter, and YouTube. Engagement metrics consistently exceeded set targets, with views, likes, and comments reflecting a strong resonance with the campaign's content."},{type:"heading",text:"Educators' Role in Fostering Inclusion"},{type:"paragraph",text:"The Google Classroom analysis revealed an encouraging scenario: a substantial majority of teachers (74%) displayed a solid grasp of the gender inclusion concept. This understanding was mirrored in their confidence, with educators supporting community sensitization on gender inclusion in education (82%) and advocating for educating parents on the importance of sending their daughters to school (73%)."},{type:"stats",items:[{number:"90%",label:"Improved Understanding",description:"Attendees gained better grasp of obstacles"},{number:"80%",label:"Elevated Confidence",description:"Increased assurance in addressing challenges"},{number:"100%",label:"Cultural Awareness",description:"Post-workshop recognition of cultural barriers"},{number:"82%",label:"Community Support",description:"Teachers backing gender inclusion efforts"}]},{type:"paragraph",text:"A remarkable 100% of participants recognized the importance of supporting girls' education by addressing basic needs and challenging cultural beliefs."},{type:"quote",text:"I learnt that by educating a girl, you educate the whole nation and the generation that comes after the girl.",author:"Susan Wanjiku, Student at AIC Kangitit Girls"},{type:"paragraph",text:"We aspire to engage numerous educators in supporting the initiative through the adoption of gender-inclusive language and participation in professional development training (79%) to tackle gender-related subjects, cultivating an inclusive atmosphere that goes beyond stereotypes."},{type:"heading",text:"Paving the Path Forward"},{type:"paragraph",text:"As the transformative #EducateHERs, Empower the World campaign concluded, the participants' determination to pave a new path for girls' education in Turkana was palpable. The collaborative efforts of local organizations, educators, and community members have ignited a beacon of change."},{type:"paragraph",text:"We hope that through this initiative we will experience a higher retention of girls in schools. We plan to continue our efforts to bring about change through more initiatives and campaigns. Follow us or support our future project through our socials."}]}],Tg=e=>jr.find(t=>t.slug===e),Pg=e=>e==="All"?jr:jr.filter(t=>t.category===e);function zg(){const[e,t]=q.useState(""),[n,r]=q.useState("All"),s=["All","Success Stories","Impact","Insights","News","Community","Programs"],a=q.useMemo(()=>{let o=jr;if(n!=="All"&&(o=Pg(n)),e.trim()){const l=e.toLowerCase();o=o.filter(c=>c.title.toLowerCase().includes(l)||c.excerpt.toLowerCase().includes(l)||c.category.toLowerCase().includes(l))}return o},[e,n]);return i.jsxs("main",{className:"blog-page-modern",children:[i.jsx(nt,{title:"Blog & Stories",description:"Read inspiring stories from EducateHers Kenya students, volunteers, and partners. Stay updated on our latest programs, success stories, and impact in girls' education across Kenya.",keywords:"EducateHers Kenya blog, girls education stories, Kenya education news, success stories, student testimonials, education impact, gender equality stories",url:"https://educateherskenya.org/blog",type:"website"}),i.jsx("section",{className:"blog-hero-modern",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"hero-content-blog",children:[i.jsxs("div",{className:"hero-badge-blog",children:[i.jsx("i",{className:"fas fa-book-open"}),i.jsx("span",{children:"Stories & Insights"})]}),i.jsxs("h1",{className:"hero-title-blog",children:["Blog & ",i.jsx("span",{className:"text-gradient-blog",children:"Stories"})]}),i.jsx("p",{className:"hero-subtitle-blog",children:"Read inspiring stories from our students, volunteers, and partners. Stay updated on our latest programs and impact."})]})})}),i.jsx("section",{className:"filter-section-modern",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"filter-wrapper",children:[i.jsx("div",{className:"category-filters",children:s.map(o=>i.jsx("button",{className:`filter-btn ${o===n?"active":""}`,onClick:()=>r(o),children:o},o))}),i.jsxs("div",{className:"search-box",children:[i.jsx("i",{className:"fas fa-search"}),i.jsx("input",{type:"text",placeholder:"Search articles...",value:e,onChange:o=>t(o.target.value)})]})]})})}),i.jsx("section",{className:"blog-posts-section",children:i.jsxs("div",{className:"container",children:[a.length===0?i.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[i.jsx("h3",{style:{color:"#666",fontSize:"24px",marginBottom:"10px"},children:"No posts found"}),i.jsx("p",{style:{color:"#999"},children:"Try adjusting your search or filter criteria"})]}):i.jsx("div",{className:"posts-grid",children:a.map(o=>i.jsxs("article",{className:"blog-card-modern",children:[i.jsxs("div",{className:"card-image-wrapper",style:{background:o.gradient},children:[i.jsx("span",{className:"post-emoji",children:o.emoji}),i.jsx("div",{className:"card-category",children:o.category})]}),i.jsxs("div",{className:"card-content",children:[i.jsxs("div",{className:"card-meta",children:[i.jsxs("span",{className:"post-date",children:[i.jsx("i",{className:"fas fa-calendar"}),o.date]}),i.jsxs("span",{className:"post-read-time",children:[i.jsx("i",{className:"fas fa-clock"}),o.readTime]})]}),i.jsx("h3",{className:"post-title",children:o.title}),i.jsx("p",{className:"post-excerpt",children:o.excerpt}),i.jsxs(z,{to:`/blog/${o.slug}`,className:"read-more-btn",children:["Read Article",i.jsx("i",{className:"fas fa-arrow-right"})]})]})]},o.id))}),i.jsx("div",{className:"load-more-wrapper",children:i.jsxs("button",{className:"load-more-btn",children:[i.jsx("span",{children:"Load More Stories"}),i.jsx("i",{className:"fas fa-chevron-down"})]})})]})}),i.jsx("section",{className:"blog-cta-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"cta-card-blog",children:[i.jsx("div",{className:"cta-icon-blog",children:i.jsx("i",{className:"fas fa-pen-fancy"})}),i.jsx("h3",{className:"cta-title-blog",children:"Want to Share Your Story?"}),i.jsx("p",{className:"cta-text-blog",children:"We'd love to feature your experience with EducateHers Kenya on our blog."}),i.jsxs(z,{to:"/contact",className:"cta-button-blog",children:[i.jsx("span",{children:"Submit Your Story"}),i.jsx("i",{className:"fas fa-paper-plane"})]})]})})}),i.jsx("style",{children:`
        .blog-page-modern {
          background: #f8fafc;
        }

        /* Hero Section */
        .blog-hero-modern {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .blog-hero-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          animation: float 20s linear infinite;
        }

        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-100px); }
        }

        .hero-content-blog {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge-blog {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-badge-blog i {
          font-size: 1.1rem;
        }

        .hero-title-blog {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .text-gradient-blog {
          background: linear-gradient(90deg, #ff6b35 0%, #ffb366 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle-blog {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Filter Section */
        .filter-section-modern {
          background: white;
          padding: 30px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .filter-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .category-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          flex: 1;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 20px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .filter-btn:hover {
          border-color: #00a9ce;
          color: #00a9ce;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          border-color: #00a9ce;
          color: white;
        }

        .search-box {
          position: relative;
          flex-shrink: 0;
        }

        .search-box i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-box input {
          padding: 10px 20px 10px 45px;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          width: 250px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          outline: none;
          border-color: #00a9ce;
          box-shadow: 0 0 0 3px rgba(0, 169, 206, 0.1);
        }

        /* Blog Posts Section */
        .blog-posts-section {
          padding: 60px 0;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .blog-card-modern {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .blog-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 169, 206, 0.15);
          border-color: #00a9ce;
        }

        .card-image-wrapper {
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .card-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .post-emoji {
          font-size: 4.5rem;
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
        }

        .blog-card-modern:hover .post-emoji {
          transform: scale(1.2) rotate(5deg);
        }

        .card-category {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.95);
          padding: 6px 15px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #00a9ce;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 25px;
        }

        .card-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: #64748b;
        }

        .card-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-meta i {
          color: #00a9ce;
        }

        .post-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .blog-card-modern:hover .post-title {
          color: #00a9ce;
        }

        .post-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          color: #00a9ce;
          text-decoration: none;
          border-radius: 20px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 169, 206, 0.3);
        }

        .read-more-btn i {
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover i {
          transform: translateX(3px);
        }

        /* Load More */
        .load-more-wrapper {
          text-align: center;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          font-weight: 600;
          color: #2d3748;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .load-more-btn:hover {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          border-color: #00a9ce;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
        }

        /* CTA Section */
        .blog-cta-section {
          padding: 60px 0 80px;
        }

        .cta-card-blog {
          background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 169, 206, 0.2);
        }

        .cta-card-blog::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .cta-icon-blog {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-title-blog {
          font-size: 2.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .cta-text-blog {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .cta-button-blog {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 35px;
          background: white;
          color: #00a9ce;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-button-blog:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: #f0f9ff;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title-blog {
            font-size: 2.5rem;
          }

          .hero-subtitle-blog {
            font-size: 1.1rem;
          }

          .filter-wrapper {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box input {
            width: 100%;
          }

          .posts-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .cta-title-blog {
            font-size: 1.8rem;
          }

          .cta-card-blog {
            padding: 40px 25px;
          }
        }
      `})]})}function _g(){const{slug:e}=em(),t=Tg(e||""),n=jr.filter(o=>o.slug!==e).slice(0,3),r=window.location.href,s=(t==null?void 0:t.title)||"";t!=null&&t.excerpt;const a=o=>{const l=encodeURIComponent(r),c=encodeURIComponent(s);let u="";switch(o){case"facebook":u=`https://www.facebook.com/sharer/sharer.php?u=${l}`;break;case"twitter":u=`https://twitter.com/intent/tweet?url=${l}&text=${c}`;break;case"linkedin":u=`https://www.linkedin.com/sharing/share-offsite/?url=${l}`;break;case"whatsapp":u=`https://wa.me/?text=${c}%20${l}`;break;default:return}window.open(u,"_blank")};return t?i.jsxs("main",{className:"blog-post-page",children:[i.jsx(nt,{title:t.title,description:t.excerpt,keywords:`${t.category}, girls education Kenya, EducateHers Kenya, ${t.title.toLowerCase()}`,url:`https://educateherskenya.org/blog/${t.slug}`,type:"article",publishedTime:t.date,section:t.category,tags:[t.category,"girls education","Kenya","empowerment"],author:t.author}),i.jsx("section",{className:"post-hero",style:{background:t.gradient},children:i.jsxs("div",{className:"container",children:[i.jsxs(z,{to:"/blog",className:"back-link",children:[i.jsx("i",{className:"fas fa-arrow-left"}),"Back to Blog"]}),i.jsxs("div",{className:"post-hero-content",children:[i.jsx("div",{className:"category-badge",children:t.category}),i.jsx("h1",{className:"post-hero-title",children:t.title}),i.jsxs("div",{className:"post-meta-info",children:[i.jsxs("span",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-calendar"}),t.date]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-user"}),t.author]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-clock"}),t.readTime]})]})]})]})}),i.jsx("section",{className:"post-content-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"post-content-wrapper",children:[i.jsx("article",{className:"post-article",children:t.content.map((o,l)=>{if(o.type==="paragraph")return i.jsx("p",{className:"content-paragraph",children:o.text},l);if(o.type==="heading")return i.jsx("h2",{className:"content-heading",children:o.text},l);if(o.type==="quote")return i.jsxs("blockquote",{className:"content-quote",children:[i.jsxs("p",{children:['"',o.text,'"']}),"author"in o&&o.author&&i.jsxs("cite",{children:["— ",o.author]})]},l);if(o.type==="list"&&"items"in o&&o.items){const c=o;return i.jsx("ul",{className:"content-list",children:c.items.map((u,d)=>i.jsx("li",{children:u},d))},l)}if(o.type==="stats"&&"items"in o&&o.items){const c=o;return i.jsx("div",{className:"stats-grid",children:c.items.map((u,d)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-number",children:u.number}),i.jsx("div",{className:"stat-label",children:u.label}),i.jsx("div",{className:"stat-description",children:u.description})]},d))},l)}return null})}),i.jsxs("aside",{className:"post-sidebar",children:[i.jsxs("div",{className:"sidebar-card share-card",children:[i.jsx("h3",{children:"Share This Article"}),i.jsxs("div",{className:"share-buttons",children:[i.jsx("button",{className:"share-btn facebook",onClick:()=>a("facebook"),children:i.jsx("i",{className:"fab fa-facebook-f"})}),i.jsx("button",{className:"share-btn twitter",onClick:()=>a("twitter"),children:i.jsx("i",{className:"fab fa-twitter"})}),i.jsx("button",{className:"share-btn linkedin",onClick:()=>a("linkedin"),children:i.jsx("i",{className:"fab fa-linkedin-in"})}),i.jsx("button",{className:"share-btn whatsapp",onClick:()=>a("whatsapp"),children:i.jsx("i",{className:"fab fa-whatsapp"})})]})]}),i.jsxs("div",{className:"sidebar-card cta-card",children:[i.jsx("div",{className:"cta-icon",children:i.jsx("i",{className:"fas fa-heart"})}),i.jsx("h3",{children:"Support Our Mission"}),i.jsx("p",{children:"Help us empower more girls through education"}),i.jsxs(z,{to:"/donate",className:"sidebar-cta-btn",children:["Donate Now",i.jsx("i",{className:"fas fa-arrow-right"})]})]}),i.jsxs("div",{className:"sidebar-card newsletter-card",children:[i.jsx("h3",{children:"Stay Updated"}),i.jsx("p",{children:"Get our latest stories delivered to your inbox"}),i.jsx("input",{type:"email",placeholder:"Your email",className:"newsletter-input"}),i.jsx("button",{className:"newsletter-btn",children:"Subscribe"})]})]})]})})}),n.length>0&&i.jsx("section",{className:"related-posts-section",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{className:"section-title",children:"Related Articles"}),i.jsx("div",{className:"related-posts-grid",children:n.map(o=>i.jsxs(z,{to:`/blog/${o.slug}`,className:"related-post-card",children:[i.jsx("div",{className:"related-post-image",style:{background:o.gradient},children:i.jsx("span",{children:o.emoji})}),i.jsxs("div",{className:"related-post-content",children:[i.jsx("span",{className:"related-category",children:o.category}),i.jsx("h4",{children:o.title})]})]},o.id))})]})}),i.jsx("style",{children:`
        .blog-post-page {
          background: #f8fafc;
        }

        /* Hero Section */
        .post-hero {
          padding: 100px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .post-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .back-link:hover {
          transform: translateX(-5px);
        }

        .post-hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .category-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .post-hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .post-meta-info {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.95rem;
        }

        .meta-item i {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Content Section */
        .post-content-section {
          padding: 60px 0;
        }

        .post-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 50px;
          align-items: start;
        }

        .post-article {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .content-paragraph {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2d3748;
          margin-bottom: 25px;
        }

        .content-heading {
          font-size: 2rem;
          font-weight: 700;
          color: #00a9ce;
          margin: 40px 0 20px;
        }

        .content-quote {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 4px solid #00a9ce;
          padding: 25px 30px;
          margin: 30px 0;
          border-radius: 8px;
        }

        .content-quote p {
          font-size: 1.2rem;
          font-style: italic;
          color: #2d3748;
          margin-bottom: 10px;
        }

        .content-quote cite {
          color: #00a9ce;
          font-weight: 600;
        }

        .content-list {
          margin: 25px 0;
          padding-left: 0;
          list-style: none;
        }

        .content-list li {
          padding-left: 35px;
          position: relative;
          margin-bottom: 15px;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #2d3748;
        }

        .content-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00a9ce;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 40px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #bae6fd;
          border-radius: 16px;
          padding: 25px;
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #00a9ce;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 5px;
        }

        .stat-description {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* Sidebar */
        .post-sidebar {
          position: sticky;
          top: 20px;
        }

        .sidebar-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .sidebar-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .share-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .share-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .share-btn:hover {
          transform: translateY(-3px);
        }

        .share-btn.facebook { background: #1877f2; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0077b5; }
        .share-btn.whatsapp { background: #25d366; }

        .cta-card {
          background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
          color: white;
          text-align: center;
        }

        .cta-card h3,
        .cta-card p {
          color: white;
        }

        .cta-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-size: 1.5rem;
        }

        .sidebar-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 25px;
          background: white;
          color: #00a9ce;
          text-decoration: none;
          border-radius: 20px;
          font-weight: 700;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .sidebar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .newsletter-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          margin: 15px 0 10px;
          font-size: 0.95rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #00a9ce;
        }

        .newsletter-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
        }

        /* Related Posts */
        .related-posts-section {
          padding: 60px 0 80px;
          background: white;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 40px;
          text-align: center;
        }

        .related-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .related-post-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .related-post-card:hover {
          transform: translateY(-5px);
          border-color: #00a9ce;
          box-shadow: 0 10px 30px rgba(0, 169, 206, 0.15);
        }

        .related-post-image {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .related-post-content {
          padding: 20px;
        }

        .related-category {
          display: inline-block;
          font-size: 0.85rem;
          color: #00a9ce;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .related-post-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d3748;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .post-hero-title {
            font-size: 2rem;
          }

          .post-content-wrapper {
            grid-template-columns: 1fr;
          }

          .post-article {
            padding: 30px 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .related-posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}):i.jsxs("div",{className:"container",style:{padding:"100px 20px",textAlign:"center"},children:[i.jsx(nt,{title:"Blog Post Not Found"}),i.jsx("h1",{children:"Blog post not found"}),i.jsx(z,{to:"/blog",style:{color:"#00a9ce",textDecoration:"underline"},children:"Back to Blog"})]})}function Og(){const[e,t]=N.useState({name:"",email:"",reason:"",message:""}),[n,r]=N.useState({}),[s,a]=N.useState(!1),[o,l]=N.useState(!1),[c,u]=N.useState(""),[d,p]=N.useState(!1),g=()=>{const x={};return e.name.trim()||(x.name="Name is required"),e.email.trim()?Kd(e.email)||(x.email="Please enter a valid email"):x.email="Email is required",e.reason||(x.reason="Please select a reason"),e.message.trim()||(x.message="Message is required"),r(x),Object.keys(x).length===0},v=x=>k=>{t(h=>({...h,[x]:k.target.value})),n[x]&&r(h=>({...h,[x]:void 0}))},j=async x=>{if(x.preventDefault(),!!g()){l(!0),p(!1),u("");try{const k=await lg(e);k.success?(a(!0),u(k.message),t({name:"",email:"",reason:"",message:""}),setTimeout(()=>{a(!1),u("")},7e3)):(p(!0),u(k.message))}catch(k){p(!0),u("An unexpected error occurred. Please try again or email us directly."),console.error("Form submission error:",k)}finally{l(!1)}}};return i.jsxs("section",{children:[i.jsx(nt,{title:"Contact Us",description:"Get in touch with EducateHers Kenya. Have questions, want to volunteer, partner with us, or support our mission? We'd love to hear from you. Contact us today.",keywords:"contact EducateHers Kenya, Kenya NGO contact, email EducateHers, get involved, partner with us, support girls education",url:"https://educateherskenya.org/contact"}),i.jsx("h1",{children:"Get In Touch"}),i.jsx("p",{style:{fontSize:"1.15rem",marginBottom:"2rem"},children:"Have questions or want to get involved? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem",marginBottom:"2rem"},children:[i.jsxs("div",{children:[i.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[i.jsx("h3",{style:{color:"#00a9ce",marginBottom:"0.5rem"},children:"📧 Email"}),i.jsx("p",{style:{margin:0},children:"info@educateherskenya.net"})]}),i.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[i.jsx("h3",{style:{color:"#ff8c42",marginBottom:"0.5rem"},children:"📱 Phone"}),i.jsx("p",{style:{margin:0},children:"+254 703 257 597"})]}),i.jsxs("div",{className:"card",children:[i.jsx("h3",{style:{color:"#00a9ce",marginBottom:"0.5rem"},children:"📍 Location"}),i.jsxs("p",{style:{margin:0},children:["Galleria Office and Business Park",i.jsx("br",{}),"Seminary Road, Karen Area",i.jsx("br",{}),"Nairobi, Kenya",i.jsx("br",{}),"P. O. Box 46162-00100"]})]})]}),i.jsxs("div",{children:[s&&c&&!d&&i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(0,169,206,0.1), rgba(96,212,244,0.1))",border:"2px solid var(--primary-teal)",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[i.jsx("i",{className:"fas fa-check-circle",style:{color:"var(--primary-teal)",fontSize:"1.5rem"}}),i.jsx("span",{style:{color:"var(--primary-teal)",fontWeight:600},children:c})]}),d&&c&&i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,107,53,0.1))",border:"2px solid var(--primary-orange)",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[i.jsx("i",{className:"fas fa-exclamation-circle",style:{color:"var(--primary-orange)",fontSize:"1.5rem"}}),i.jsx("span",{style:{color:"var(--primary-orange)",fontWeight:600},children:c})]}),i.jsxs("form",{onSubmit:j,noValidate:!0,children:[i.jsxs("div",{style:{marginBottom:"1.5rem"},children:[i.jsx("label",{htmlFor:"name",children:"Name *"}),i.jsx("input",{id:"name",type:"text",value:e.name,onChange:v("name"),style:{borderColor:n.name?"#ef4444":void 0}}),n.name&&i.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:n.name})]}),i.jsxs("div",{style:{marginBottom:"1.5rem"},children:[i.jsx("label",{htmlFor:"email",children:"Email *"}),i.jsx("input",{id:"email",type:"email",value:e.email,onChange:v("email"),style:{borderColor:n.email?"#ef4444":void 0}}),n.email&&i.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:n.email})]}),i.jsxs("div",{style:{marginBottom:"1.5rem"},children:[i.jsx("label",{htmlFor:"reason",children:"Reason for Contact *"}),i.jsxs("select",{id:"reason",value:e.reason,onChange:v("reason"),style:{borderColor:n.reason?"#ef4444":void 0,width:"100%",padding:"0.75rem",fontSize:"1rem",borderRadius:"8px",border:"2px solid #ddd",backgroundColor:"white",cursor:"pointer",transition:"border-color 0.2s"},children:[i.jsx("option",{value:"",children:"-- Select a reason --"}),i.jsx("option",{value:"volunteer",children:"Volunteer Opportunities"}),i.jsx("option",{value:"partnership",children:"Partnership Inquiry"}),i.jsx("option",{value:"donation",children:"Donation Information"}),i.jsx("option",{value:"sponsorship",children:"Sponsorship Programs"}),i.jsx("option",{value:"events",children:"Event Information"}),i.jsx("option",{value:"general",children:"General Inquiry"}),i.jsx("option",{value:"feedback",children:"Feedback or Suggestions"}),i.jsx("option",{value:"media",children:"Media/Press Inquiry"}),i.jsx("option",{value:"other",children:"Other"})]}),n.reason&&i.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:n.reason})]}),i.jsxs("div",{style:{marginBottom:"1.5rem"},children:[i.jsx("label",{htmlFor:"message",children:"Message *"}),i.jsx("textarea",{id:"message",rows:6,value:e.message,onChange:v("message"),style:{borderColor:n.message?"#ef4444":void 0,resize:"vertical"}}),n.message&&i.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:n.message})]}),i.jsx("button",{type:"submit",style:{width:"100%",fontSize:"1.1rem"},disabled:o,children:o?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-spinner fa-spin",style:{marginRight:"0.5rem"}}),"Sending..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-paper-plane",style:{marginRight:"0.5rem"}}),"Send Message"]})})]})]})]}),i.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,179,102,0.1))",padding:"2rem",borderRadius:"12px",textAlign:"center"},children:[i.jsx("h3",{children:"Follow Our Journey"}),i.jsx("p",{style:{marginBottom:"1rem"},children:"Stay connected and see the impact we're making every day."}),i.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[i.jsxs("a",{href:"https://x.com/EducateHERs",target:"_blank",rel:"noopener noreferrer",style:{background:"#1DA1F2",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseOut:x=>x.currentTarget.style.transform="translateY(0)",children:[i.jsx("i",{className:"fab fa-twitter"}),"Twitter"]}),i.jsxs("a",{href:"https://www.facebook.com/educatehers",target:"_blank",rel:"noopener noreferrer",style:{background:"#4267B2",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseOut:x=>x.currentTarget.style.transform="translateY(0)",children:[i.jsx("i",{className:"fab fa-facebook-f"}),"Facebook"]}),i.jsxs("a",{href:"https://www.instagram.com/educateherskenya/",target:"_blank",rel:"noopener noreferrer",style:{background:"#E1306C",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseOut:x=>x.currentTarget.style.transform="translateY(0)",children:[i.jsx("i",{className:"fab fa-instagram"}),"Instagram"]}),i.jsxs("a",{href:"https://www.linkedin.com/company/educate-hers/",target:"_blank",rel:"noopener noreferrer",style:{background:"#0077B5",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseOut:x=>x.currentTarget.style.transform="translateY(0)",children:[i.jsx("i",{className:"fab fa-linkedin-in"}),"LinkedIn"]}),i.jsxs("a",{href:"https://www.youtube.com/@EducateHERs",target:"_blank",rel:"noopener noreferrer",style:{background:"#FF0000",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:x=>x.currentTarget.style.transform="translateY(-2px)",onMouseOut:x=>x.currentTarget.style.transform="translateY(0)",children:[i.jsx("i",{className:"fab fa-youtube"}),"YouTube"]})]})]})]})}function Rg(){return i.jsxs("main",{className:"donate-page-modern",children:[i.jsx(nt,{title:"Donate",description:"Support EducateHers Kenya and help empower girls through education. Your donation provides scholarships, STEM programs, and educational resources to girls across Kenya. Make a difference today.",keywords:"donate to EducateHers Kenya, support girls education, Kenya education donation, scholarship fund, girls empowerment donation, support gender equality",url:"https://educateherskenya.org/donate"}),i.jsx("section",{className:"donate-hero-modern",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"hero-card-wrapper",children:i.jsxs("div",{className:"hero-card-modern",children:[i.jsxs("div",{className:"hero-badge-modern",children:[i.jsx("span",{className:"badge-pulse"}),i.jsx("i",{className:"fas fa-heart"}),i.jsx("span",{children:"Make an Impact"})]}),i.jsxs("h1",{className:"hero-title-large",children:["Transform Lives Through",i.jsx("span",{className:"text-gradient",children:" Education"})]}),i.jsx("p",{className:"hero-subtitle-modern",children:"Every contribution empowers girls across Kenya with quality education, mentorship, and opportunities to reach their full potential."}),i.jsxs("div",{className:"hero-stats-modern",children:[i.jsxs("div",{className:"stat-modern",children:[i.jsx("div",{className:"stat-number",children:"1,500+"}),i.jsx("div",{className:"stat-label",children:"Girls Empowered"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-modern",children:[i.jsx("div",{className:"stat-number",children:"500+"}),i.jsx("div",{className:"stat-label",children:"Scholarships"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-modern",children:[i.jsx("div",{className:"stat-number",children:"50+"}),i.jsx("div",{className:"stat-label",children:"Communities"})]})]})]})})})}),i.jsx("style",{children:`
        .donate-hero-modern {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .donate-hero-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.4;
        }

        .hero-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-card-modern {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          max-width: 900px;
          width: 100%;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .hero-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00a9ce, #ff6b35, #00a9ce);
          border-radius: 24px 24px 0 0;
        }

        .hero-badge-modern {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0, 169, 206, 0.3);
          position: relative;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-badge-modern i {
          font-size: 16px;
        }

        .hero-title-large {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .text-gradient {
          background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle-modern {
          font-size: 18px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 40px;
          max-width: 700px;
        }

        .hero-stats-modern {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat-modern {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #718096;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, #cbd5e0, transparent);
        }

        @media (max-width: 768px) {
          .donate-hero-modern {
            padding: 40px 0;
          }

          .hero-card-modern {
            padding: 40px 24px;
            border-radius: 16px;
          }

          .hero-title-large {
            font-size: 32px;
          }

          .hero-subtitle-modern {
            font-size: 16px;
          }

          .stat-number {
            font-size: 28px;
          }

          .stat-divider {
            display: none;
          }

          .hero-stats-modern {
            gap: 20px;
          }
        }
      `}),i.jsx("section",{className:"donate-content-modern",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"content-grid-modern",children:[i.jsxs("div",{className:"impact-section-modern",children:[i.jsxs("div",{className:"impact-card-wrapper",children:[i.jsxs("div",{className:"section-header-modern",children:[i.jsxs("div",{className:"label-with-icon",children:[i.jsx("div",{className:"label-icon-circle",children:i.jsx("i",{className:"fas fa-bullseye"})}),i.jsx("span",{className:"section-label-modern",children:"Your Impact"})]}),i.jsx("h2",{className:"section-title-modern",children:"Every Donation Creates Change"}),i.jsx("p",{className:"section-description-modern",children:"Your support directly funds education and life-changing opportunities for girls."})]}),i.jsxs("div",{className:"impact-tiers-modern",children:[i.jsxs("div",{className:"tier-card-modern tier-bronze",children:[i.jsx("div",{className:"tier-icon-modern",children:i.jsx("span",{children:"📚"})}),i.jsxs("div",{className:"tier-content-modern",children:[i.jsx("div",{className:"tier-amount-modern",children:"KES 5,000"}),i.jsx("p",{className:"tier-description-modern",children:"School supplies for 5 girls"})]}),i.jsx("div",{className:"tier-glow"})]}),i.jsxs("div",{className:"tier-card-modern tier-silver",children:[i.jsx("div",{className:"tier-icon-modern",children:i.jsx("span",{children:"🎓"})}),i.jsxs("div",{className:"tier-content-modern",children:[i.jsx("div",{className:"tier-amount-modern",children:"KES 20,000"}),i.jsx("p",{className:"tier-description-modern",children:"One term of education"})]}),i.jsx("div",{className:"tier-glow"})]}),i.jsxs("div",{className:"tier-card-modern tier-gold",children:[i.jsx("div",{className:"tier-icon-modern",children:i.jsx("span",{children:"👥"})}),i.jsxs("div",{className:"tier-content-modern",children:[i.jsx("div",{className:"tier-amount-modern",children:"KES 50,000"}),i.jsx("p",{className:"tier-description-modern",children:"Mentorship for 20 girls"})]}),i.jsx("div",{className:"tier-glow"})]}),i.jsxs("div",{className:"tier-card-modern tier-platinum featured-tier",children:[i.jsxs("div",{className:"featured-label",children:[i.jsx("i",{className:"fas fa-star"}),i.jsx("span",{children:"Most Impact"})]}),i.jsx("div",{className:"tier-icon-modern",children:i.jsx("span",{children:"🏆"})}),i.jsxs("div",{className:"tier-content-modern",children:[i.jsx("div",{className:"tier-amount-modern",children:"KES 100,000+"}),i.jsx("p",{className:"tier-description-modern",children:"Full year scholarship"})]}),i.jsx("div",{className:"tier-glow"})]})]}),i.jsxs("div",{className:"trust-badges-modern",children:[i.jsxs("div",{className:"trust-badge-modern",children:[i.jsx("div",{className:"trust-icon-modern",children:i.jsx("i",{className:"fas fa-certificate"})}),i.jsx("span",{className:"trust-text-modern",children:"Registered Non-Profit"})]}),i.jsxs("div",{className:"trust-badge-modern",children:[i.jsx("div",{className:"trust-icon-modern",children:i.jsx("i",{className:"fas fa-check-double"})}),i.jsx("span",{className:"trust-text-modern",children:"100% Transparent"})]}),i.jsxs("div",{className:"trust-badge-modern",children:[i.jsx("div",{className:"trust-icon-modern",children:i.jsx("i",{className:"fas fa-file-invoice-dollar"})}),i.jsx("span",{className:"trust-text-modern",children:"Tax Deductible"})]})]})]}),i.jsx("style",{children:`
                .impact-section-modern {
                  margin-bottom: 40px;
                }

                .impact-card-wrapper {
                  background: white;
                  border-radius: 20px;
                  padding: 40px;
                  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                  border: 1px solid rgba(0, 169, 206, 0.1);
                  position: relative;
                  overflow: hidden;
                }

                .impact-card-wrapper::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  height: 4px;
                  background: linear-gradient(90deg, #00a9ce, #ff6b35, #00a9ce);
                }

                .section-header-modern {
                  text-align: center;
                  margin-bottom: 40px;
                }

                .label-with-icon {
                  display: inline-flex;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 16px;
                }

                .label-icon-circle {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #00a9ce, #0891b2);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 18px;
                  box-shadow: 0 4px 12px rgba(0, 169, 206, 0.3);
                }

                .section-label-modern {
                  font-size: 16px;
                  font-weight: 600;
                  color: #00a9ce;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                }

                .section-title-modern {
                  font-size: 32px;
                  font-weight: 800;
                  color: #1a1a1a;
                  margin-bottom: 12px;
                }

                .section-description-modern {
                  font-size: 16px;
                  color: #4a5568;
                  max-width: 600px;
                  margin: 0 auto;
                  line-height: 1.6;
                }

                .impact-tiers-modern {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                  gap: 20px;
                  margin-bottom: 40px;
                }

                .tier-card-modern {
                  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                  border-radius: 16px;
                  padding: 30px 24px;
                  text-align: center;
                  position: relative;
                  transition: all 0.3s ease;
                  border: 2px solid transparent;
                  cursor: pointer;
                }

                .tier-card-modern:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                }

                .tier-card-modern.tier-bronze {
                  border-color: #cd7f32;
                }

                .tier-card-modern.tier-bronze:hover {
                  background: linear-gradient(135deg, #fff5eb 0%, #ffe8d1 100%);
                  border-color: #cd7f32;
                }

                .tier-card-modern.tier-silver {
                  border-color: #c0c0c0;
                }

                .tier-card-modern.tier-silver:hover {
                  background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
                  border-color: #a0a0a0;
                }

                .tier-card-modern.tier-gold {
                  border-color: #ffd700;
                }

                .tier-card-modern.tier-gold:hover {
                  background: linear-gradient(135deg, #fffaeb 0%, #fff4d1 100%);
                  border-color: #f0c000;
                }

                .tier-card-modern.tier-platinum {
                  background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                  border-color: #00a9ce;
                  color: white;
                }

                .tier-card-modern.tier-platinum:hover {
                  background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                  box-shadow: 0 12px 30px rgba(0, 169, 206, 0.4);
                }

                .tier-card-modern.tier-platinum .tier-amount-modern,
                .tier-card-modern.tier-platinum .tier-description-modern {
                  color: white;
                }

                .featured-label {
                  position: absolute;
                  top: 12px;
                  right: 12px;
                  background: rgba(255, 255, 255, 0.3);
                  backdrop-filter: blur(10px);
                  padding: 6px 12px;
                  border-radius: 20px;
                  font-size: 12px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  color: white;
                }

                .featured-label i {
                  font-size: 10px;
                }

                .tier-icon-modern {
                  font-size: 48px;
                  margin-bottom: 16px;
                  display: inline-block;
                  transition: transform 0.3s ease;
                }

                .tier-card-modern:hover .tier-icon-modern {
                  transform: scale(1.1) rotate(5deg);
                }

                .tier-amount-modern {
                  font-size: 24px;
                  font-weight: 800;
                  color: #1a1a1a;
                  margin-bottom: 8px;
                }

                .tier-description-modern {
                  font-size: 14px;
                  color: #4a5568;
                  line-height: 1.5;
                }

                .tier-glow {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 100%;
                  height: 100%;
                  transform: translate(-50%, -50%);
                  background: radial-gradient(circle, rgba(0, 169, 206, 0.1) 0%, transparent 70%);
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  pointer-events: none;
                }

                .tier-card-modern:hover .tier-glow {
                  opacity: 1;
                }

                .trust-badges-modern {
                  display: flex;
                  justify-content: center;
                  gap: 24px;
                  flex-wrap: wrap;
                  padding-top: 30px;
                  border-top: 1px solid #e2e8f0;
                }

                .trust-badge-modern {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  padding: 12px 20px;
                  background: #f7fafc;
                  border-radius: 50px;
                  transition: all 0.3s ease;
                }

                .trust-badge-modern:hover {
                  background: #edf2f7;
                  transform: translateY(-2px);
                }

                .trust-icon-modern {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #00a9ce, #0891b2);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 14px;
                }

                .trust-text-modern {
                  font-size: 14px;
                  font-weight: 600;
                  color: #2d3748;
                }

                @media (max-width: 768px) {
                  .impact-card-wrapper {
                    padding: 30px 20px;
                  }

                  .section-title-modern {
                    font-size: 24px;
                  }

                  .impact-tiers-modern {
                    grid-template-columns: 1fr;
                    gap: 16px;
                  }

                  .trust-badges-modern {
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                  }
                }
              `})]}),i.jsx("div",{className:"donation-section-modern",children:i.jsxs("div",{className:"donation-card-wrapper",children:[i.jsxs("div",{className:"donation-card-modern",children:[i.jsxs("div",{className:"card-header-modern",children:[i.jsx("div",{className:"header-icon-modern",children:i.jsx("i",{className:"fas fa-hand-holding-heart"})}),i.jsx("h3",{className:"card-title-modern",children:"Make Your Donation"}),i.jsx("p",{className:"card-subtitle-modern",children:"Support our mission today"})]}),i.jsxs("div",{className:"upgrade-notice-modern",children:[i.jsxs("div",{className:"notice-header",children:[i.jsx("div",{className:"notice-icon-modern",children:i.jsx("i",{className:"fas fa-cog fa-spin"})}),i.jsx("div",{className:"notice-badge-modern",children:"Upgrading"})]}),i.jsx("h4",{className:"notice-title-modern",children:"Payment System Enhancement"}),i.jsx("p",{className:"notice-text-modern",children:"We're enhancing our payment system with improved security and more options."}),i.jsxs("ul",{className:"features-list-modern",children:[i.jsxs("li",{children:[i.jsx("i",{className:"fas fa-check-circle"})," Mobile Money Integration"]}),i.jsxs("li",{children:[i.jsx("i",{className:"fas fa-check-circle"})," International Payments"]}),i.jsxs("li",{children:[i.jsx("i",{className:"fas fa-check-circle"})," Instant Receipts"]})]})]}),i.jsxs("div",{className:"contact-wrapper-modern",children:[i.jsxs("div",{className:"contact-header-text",children:[i.jsx("h4",{children:"Get in Touch to Donate"}),i.jsx("p",{children:"Choose your preferred way to reach us"})]}),i.jsxs("div",{className:"contact-grid-modern",children:[i.jsx("a",{href:"mailto:info@educateherskenya.net",className:"contact-card-item",children:i.jsxs("div",{className:"contact-card-inner",children:[i.jsx("div",{className:"contact-icon-wrapper email-icon",children:i.jsx("i",{className:"fas fa-envelope"})}),i.jsx("h5",{className:"contact-method-title",children:"Email Us"}),i.jsx("p",{className:"contact-method-value",children:"info@educateherskenya.net"}),i.jsx("div",{className:"contact-hover-arrow",children:i.jsx("i",{className:"fas fa-arrow-right"})})]})}),i.jsx("a",{href:"tel:+254703257597",className:"contact-card-item",children:i.jsxs("div",{className:"contact-card-inner",children:[i.jsx("div",{className:"contact-icon-wrapper phone-icon",children:i.jsx("i",{className:"fas fa-phone-alt"})}),i.jsx("h5",{className:"contact-method-title",children:"Call Us"}),i.jsx("p",{className:"contact-method-value",children:"+254 703 257 597"}),i.jsx("div",{className:"contact-hover-arrow",children:i.jsx("i",{className:"fas fa-arrow-right"})})]})}),i.jsx(z,{to:"/contact",className:"contact-card-item",children:i.jsxs("div",{className:"contact-card-inner",children:[i.jsx("div",{className:"contact-icon-wrapper form-icon",children:i.jsx("i",{className:"fas fa-paper-plane"})}),i.jsx("h5",{className:"contact-method-title",children:"Send Message"}),i.jsx("p",{className:"contact-method-value",children:"Fill out our form"}),i.jsx("div",{className:"contact-hover-arrow",children:i.jsx("i",{className:"fas fa-arrow-right"})})]})})]}),i.jsxs("div",{className:"security-badge-modern",children:[i.jsx("div",{className:"security-icon-circle",children:i.jsx("i",{className:"fas fa-shield-check"})}),i.jsxs("div",{className:"security-text-content",children:[i.jsx("span",{className:"security-title",children:"Secure & Confidential"}),i.jsx("span",{className:"security-subtitle",children:"Your information is protected"})]})]})]})]}),i.jsx("style",{children:`
                  .donation-card-wrapper {
                    background: white;
                    border-radius: 24px;
                    padding: 60px 40px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s ease;
                  }

                  .donation-card-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
                  }

                  .donation-card-wrapper:hover {
                    box-shadow: 0 20px 60px rgba(0, 169, 206, 0.15);
                    transform: translateY(-5px);
                  }

                  .card-header-modern {
                    text-align: center;
                    margin-bottom: 50px;
                  }

                  .header-icon-modern {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    font-size: 2rem;
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 169, 206, 0.3);
                    transition: all 0.4s ease;
                  }

                  .donation-card-wrapper:hover .header-icon-modern {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.4);
                  }

                  .card-title-modern {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 10px;
                    letter-spacing: -0.5px;
                  }

                  .card-subtitle-modern {
                    font-size: 1.2rem;
                    color: #718096;
                    font-weight: 400;
                  }

                  .upgrade-notice-modern {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 50px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 169, 206, 0.3);
                    transition: all 0.4s ease;
                  }

                  .upgrade-notice-modern::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    animation: pulse-glow 3s ease-in-out infinite;
                  }

                  .upgrade-notice-modern:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.4);
                  }

                  .notice-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                  }

                  .notice-icon-modern {
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                  }

                  .notice-badge-modern {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 20px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                  }

                  .notice-title-modern {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    position: relative;
                    z-index: 1;
                  }

                  .notice-text-modern {
                    font-size: 1.05rem;
                    opacity: 0.95;
                    line-height: 1.6;
                    margin-bottom: 25px;
                    position: relative;
                    z-index: 1;
                  }

                  .features-list-modern {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                  }

                  .features-list-modern li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1rem;
                    padding: 12px 18px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 12px;
                    backdrop-filter: blur(5px);
                    transition: all 0.3s ease;
                  }

                  .features-list-modern li:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateX(5px);
                  }

                  .features-list-modern li i {
                    color: #ff6b35;
                    font-size: 1.2rem;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                  }

                  .contact-wrapper-modern {
                    margin-top: 40px;
                  }

                  .contact-header-text {
                    text-align: center;
                    margin-bottom: 40px;
                  }

                  .contact-header-text h4 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 8px;
                  }

                  .contact-header-text p {
                    font-size: 1.05rem;
                    color: #718096;
                  }

                  .contact-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    margin-bottom: 40px;
                  }

                  .contact-card-item {
                    text-decoration: none;
                    display: block;
                    height: 100%;
                  }

                  .contact-card-inner {
                    background: white;
                    border: 2px solid #e0f2fe;
                    border-radius: 20px;
                    padding: 35px 25px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  }

                  .contact-card-inner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                  }

                  .contact-card-item:hover .contact-card-inner {
                    border-color: #00a9ce;
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.2);
                  }

                  .contact-card-item:hover .contact-card-inner::before {
                    transform: scaleX(1);
                  }

                  .contact-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                    margin: 0 auto 20px;
                    position: relative;
                    transition: all 0.4s ease;
                  }

                  .contact-icon-wrapper::after {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    background: inherit;
                    opacity: 0.2;
                    z-index: -1;
                    transition: all 0.4s ease;
                  }

                  .contact-card-item:hover .contact-icon-wrapper {
                    transform: scale(1.1) rotate(10deg);
                  }

                  .contact-card-item:hover .contact-icon-wrapper::after {
                    inset: -12px;
                    opacity: 0.3;
                  }

                  .contact-icon-wrapper.email-icon {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                  }

                  .contact-icon-wrapper.phone-icon {
                    background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%);
                  }

                  .contact-icon-wrapper.form-icon {
                    background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
                  }

                  .contact-method-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 10px;
                  }

                  .contact-method-value {
                    font-size: 1.05rem;
                    color: #00a9ce;
                    font-weight: 600;
                    margin-bottom: 15px;
                  }

                  .contact-hover-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #00a9ce;
                    font-size: 1rem;
                    margin-top: auto;
                    transition: all 0.4s ease;
                  }

                  .contact-card-item:hover .contact-hover-arrow {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                    color: white;
                    transform: translateX(5px);
                  }

                  .security-badge-modern {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    padding: 25px 35px;
                    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                    border: 2px solid #86efac;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                  }

                  .security-badge-modern:hover {
                    border-color: #4ade80;
                    box-shadow: 0 8px 20px rgba(74, 222, 128, 0.2);
                  }

                  .security-icon-circle {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: white;
                    flex-shrink: 0;
                    animation: shield-pulse 2s ease-in-out infinite;
                  }

                  .security-text-content {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                  }

                  .security-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #166534;
                    display: block;
                  }

                  .security-subtitle {
                    font-size: 0.95rem;
                    color: #15803d;
                    display: block;
                  }

                  @keyframes pulse-glow {
                    0%, 100% {
                      opacity: 0.5;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @keyframes shield-pulse {
                    0%, 100% {
                      transform: scale(1);
                    }
                    50% {
                      transform: scale(1.1);
                    }
                  }

                  @media (max-width: 768px) {
                    .donation-card-wrapper {
                      padding: 40px 25px;
                      border-radius: 20px;
                    }

                    .header-icon-modern {
                      width: 70px;
                      height: 70px;
                      font-size: 1.7rem;
                    }

                    .card-title-modern {
                      font-size: 2rem;
                    }

                    .card-subtitle-modern {
                      font-size: 1.05rem;
                    }

                    .upgrade-notice-modern {
                      padding: 30px 25px;
                    }

                    .notice-header {
                      flex-direction: column;
                      align-items: flex-start;
                    }

                    .notice-title-modern {
                      font-size: 1.4rem;
                    }

                    .contact-grid-modern {
                      grid-template-columns: 1fr;
                      gap: 20px;
                    }

                    .contact-header-text h4 {
                      font-size: 1.5rem;
                    }

                    .contact-icon-wrapper {
                      width: 70px;
                      height: 70px;
                      font-size: 1.7rem;
                    }

                    .contact-method-title {
                      font-size: 1.15rem;
                    }

                    .contact-method-value {
                      font-size: 0.95rem;
                    }

                    .security-badge-modern {
                      flex-direction: column;
                      text-align: center;
                      padding: 25px 20px;
                    }

                    .security-icon-circle {
                      width: 50px;
                      height: 50px;
                      font-size: 1.3rem;
                    }

                    .divider-modern::before,
                    .divider-modern::after {
                      width: 25%;
                    }
                  }
                `})]})})]})})}),i.jsx("section",{className:"other-ways-modern",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"other-ways-card-wrapper",children:[i.jsxs("div",{className:"section-header-modern center",children:[i.jsxs("div",{className:"label-with-icon centered",children:[i.jsx("div",{className:"label-icon-circle",children:i.jsx("i",{className:"fas fa-hands-helping"})}),i.jsx("span",{className:"section-label-modern",children:"More Ways to Help"})]}),i.jsx("h2",{className:"section-title-modern",children:"Choose Your Impact Path"}),i.jsx("p",{className:"section-description-modern",children:"Multiple ways to support our mission"})]}),i.jsxs("div",{className:"ways-grid-modern",children:[i.jsxs("div",{className:"way-card-modern",children:[i.jsx("div",{className:"way-icon-modern recurring",children:i.jsx("i",{className:"fas fa-sync"})}),i.jsx("h3",{className:"way-title-modern",children:"Monthly Giving"}),i.jsx("p",{className:"way-description-modern",children:"Create sustainable impact through recurring contributions"}),i.jsxs(z,{to:"/contact",className:"way-link-modern",children:["Learn More ",i.jsx("i",{className:"fas fa-arrow-right"})]})]}),i.jsxs("div",{className:"way-card-modern",children:[i.jsx("div",{className:"way-icon-modern inkind",children:i.jsx("i",{className:"fas fa-boxes"})}),i.jsx("h3",{className:"way-title-modern",children:"In-Kind Donations"}),i.jsx("p",{className:"way-description-modern",children:"Donate books, supplies, or educational materials"}),i.jsxs(z,{to:"/contact",className:"way-link-modern",children:["Learn More ",i.jsx("i",{className:"fas fa-arrow-right"})]})]}),i.jsxs("div",{className:"way-card-modern",children:[i.jsx("div",{className:"way-icon-modern corporate",children:i.jsx("i",{className:"fas fa-briefcase"})}),i.jsx("h3",{className:"way-title-modern",children:"Corporate Partnership"}),i.jsx("p",{className:"way-description-modern",children:"Align your CSR goals with our mission"}),i.jsxs(z,{to:"/contact",className:"way-link-modern",children:["Partner With Us ",i.jsx("i",{className:"fas fa-arrow-right"})]})]}),i.jsxs("div",{className:"way-card-modern",children:[i.jsx("div",{className:"way-icon-modern fundraise",children:i.jsx("i",{className:"fas fa-bullhorn"})}),i.jsx("h3",{className:"way-title-modern",children:"Start a Campaign"}),i.jsx("p",{className:"way-description-modern",children:"Fundraise and rally your network"}),i.jsxs(z,{to:"/contact",className:"way-link-modern",children:["Get Started ",i.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),i.jsx("style",{children:`
              .other-ways-card-wrapper {
                background: white;
                border-radius: 24px;
                padding: 60px 40px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                position: relative;
                overflow: hidden;
                transition: all 0.4s ease;
              }

              .other-ways-card-wrapper::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 6px;
                background: linear-gradient(90deg, #ff6b35 0%, #00a9ce 100%);
              }

              .other-ways-card-wrapper:hover {
                box-shadow: 0 20px 60px rgba(255, 107, 53, 0.15);
                transform: translateY(-5px);
              }

              .section-header-modern {
                text-align: center;
                margin-bottom: 50px;
              }

              .label-with-icon {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
              }

              .label-with-icon.centered {
                justify-content: center;
              }

              .label-icon-circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.3rem;
                box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
              }

              .section-label-modern {
                font-size: 1rem;
                font-weight: 600;
                color: #ff6b35;
                text-transform: uppercase;
                letter-spacing: 1px;
              }

              .section-title-modern {
                font-size: 2.5rem;
                font-weight: 700;
                color: #2d3748;
                margin-bottom: 15px;
                letter-spacing: -0.5px;
              }

              .section-description-modern {
                font-size: 1.15rem;
                color: #718096;
              }

              .ways-grid-modern {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
              }

              .way-card-modern {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                border: 2px solid #e2e8f0;
                border-radius: 20px;
                padding: 35px 30px;
                text-align: center;
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
              }

              .way-card-modern::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                transform: scaleX(0);
                transition: transform 0.4s ease;
              }

              .way-card-modern:nth-child(1)::before {
                background: linear-gradient(90deg, #00a9ce 0%, #0891b2 100%);
              }

              .way-card-modern:nth-child(2)::before {
                background: linear-gradient(90deg, #ff6b35 0%, #f97316 100%);
              }

              .way-card-modern:nth-child(3)::before {
                background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
              }

              .way-card-modern:nth-child(4)::before {
                background: linear-gradient(90deg, #ff6b35 0%, #00a9ce 100%);
              }

              .way-card-modern:hover {
                border-color: #00a9ce;
                transform: translateY(-8px);
                box-shadow: 0 15px 40px rgba(0, 169, 206, 0.2);
                background: white;
              }

              .way-card-modern:hover::before {
                transform: scaleX(1);
              }

              .way-icon-modern {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 25px;
                font-size: 2rem;
                color: white;
                position: relative;
                transition: all 0.4s ease;
              }

              .way-icon-modern::after {
                content: '';
                position: absolute;
                inset: -8px;
                border-radius: 50%;
                background: inherit;
                opacity: 0.2;
                z-index: -1;
                transition: all 0.4s ease;
              }

              .way-card-modern:hover .way-icon-modern {
                transform: scale(1.1) rotate(10deg);
              }

              .way-card-modern:hover .way-icon-modern::after {
                inset: -12px;
                opacity: 0.3;
              }

              .way-icon-modern.recurring {
                background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
              }

              .way-icon-modern.inkind {
                background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%);
              }

              .way-icon-modern.corporate {
                background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
              }

              .way-icon-modern.fundraise {
                background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
              }

              .way-title-modern {
                font-size: 1.5rem;
                font-weight: 700;
                color: #2d3748;
                margin-bottom: 15px;
              }

              .way-description-modern {
                font-size: 1.05rem;
                color: #64748b;
                line-height: 1.6;
                margin-bottom: 25px;
              }

              .way-link-modern {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 12px 24px;
                background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
                color: #00a9ce;
                text-decoration: none;
                border-radius: 25px;
                font-weight: 600;
                transition: all 0.3s ease;
              }

              .way-link-modern:hover {
                background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                color: white;
                transform: translateX(5px);
                box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
              }

              .way-link-modern i {
                transition: transform 0.3s ease;
              }

              .way-link-modern:hover i {
                transform: translateX(3px);
              }

              @media (max-width: 768px) {
                .other-ways-card-wrapper {
                  padding: 40px 25px;
                  border-radius: 20px;
                }

                .section-title-modern {
                  font-size: 2rem;
                }

                .ways-grid-modern {
                  grid-template-columns: 1fr;
                  gap: 20px;
                }

                .way-card-modern {
                  padding: 30px 25px;
                }

                .way-icon-modern {
                  width: 70px;
                  height: 70px;
                  font-size: 1.7rem;
                }

                .way-title-modern {
                  font-size: 1.3rem;
                }
              }
            `})]})})})]})}function Lg(){return i.jsx("main",{className:"legal-page",children:i.jsxs("div",{className:"legal-container",children:[i.jsxs("div",{className:"legal-header",children:[i.jsx("h1",{children:"Privacy Policy"}),i.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),i.jsxs("div",{className:"legal-content",children:[i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"1. Introduction"}),i.jsx("p",{children:'EducateHers Kenya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.'}),i.jsx("p",{children:"Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"2. Information We Collect"}),i.jsx("h3",{children:"Personal Information"}),i.jsx("p",{children:"We may collect personal information that you voluntarily provide to us when you:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Register for our programs or volunteer opportunities"}),i.jsx("li",{children:"Make a donation"}),i.jsx("li",{children:"Subscribe to our newsletter"}),i.jsx("li",{children:"Contact us via our contact form"}),i.jsx("li",{children:"Participate in our events"})]}),i.jsx("p",{children:"This information may include:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Name and contact information (email address, phone number, postal address)"}),i.jsx("li",{children:"Demographic information"}),i.jsx("li",{children:"Payment information (processed securely through third-party payment processors)"}),i.jsx("li",{children:"Volunteer application information"})]}),i.jsx("h3",{children:"Automatically Collected Information"}),i.jsx("p",{children:"When you visit our website, we may automatically collect certain information, including:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"IP address"}),i.jsx("li",{children:"Browser type and version"}),i.jsx("li",{children:"Pages visited and time spent on pages"}),i.jsx("li",{children:"Referring website addresses"}),i.jsx("li",{children:"Device information"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"3. How We Use Your Information"}),i.jsx("p",{children:"We use the information we collect to:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Process donations and maintain donation records"}),i.jsx("li",{children:"Communicate with you about our programs and services"}),i.jsx("li",{children:"Send newsletters and updates (with your consent)"}),i.jsx("li",{children:"Process volunteer applications"}),i.jsx("li",{children:"Respond to your inquiries and requests"}),i.jsx("li",{children:"Improve our website and services"}),i.jsx("li",{children:"Comply with legal obligations"}),i.jsx("li",{children:"Prevent fraud and enhance security"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"4. Sharing Your Information"}),i.jsx("p",{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Service Providers:"})," With trusted third-party service providers who assist us in operating our website, conducting our operations, or servicing you (e.g., payment processors, email service providers)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Legal Requirements:"})," When required by law or to protect our rights and safety"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Business Transfers:"})," In connection with any merger, sale of company assets, or acquisition"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"With Your Consent:"})," When you have given us explicit permission to share your information"]})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"5. Data Security"}),i.jsx("p",{children:"We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"6. Your Rights"}),i.jsx("p",{children:"You have the right to:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Access:"})," Request access to the personal information we hold about you"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Correction:"})," Request correction of inaccurate or incomplete information"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Deletion:"})," Request deletion of your personal information"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Opt-Out:"})," Unsubscribe from marketing communications at any time"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Data Portability:"})," Request a copy of your personal information in a structured format"]})]}),i.jsxs("p",{children:["To exercise these rights, please contact us at ",i.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"7. Cookies and Tracking Technologies"}),i.jsxs("p",{children:["We use cookies and similar tracking technologies to enhance your experience on our website. For more information about how we use cookies, please see our ",i.jsx(z,{to:"/cookies",children:"Cookie Policy"}),"."]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"8. Third-Party Links"}),i.jsx("p",{children:"Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"9. Children's Privacy"}),i.jsx("p",{children:"Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"10. International Data Transfers"}),i.jsx("p",{children:"Your information may be transferred to and maintained on computers located outside of Kenya or your jurisdiction where data protection laws may differ. By using our services, you consent to this transfer."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"11. Changes to This Privacy Policy"}),i.jsx("p",{children:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.'})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"12. Contact Us"}),i.jsx("p",{children:"If you have questions or concerns about this Privacy Policy, please contact us:"}),i.jsxs("div",{className:"contact-info",children:[i.jsx("p",{children:i.jsx("strong",{children:"EducateHers Kenya"})}),i.jsxs("p",{children:["Galleria Office and Business Park",i.jsx("br",{}),"Seminary Road, Karen Area",i.jsx("br",{}),"Nairobi, Kenya",i.jsx("br",{}),"P. O. Box 46162-00100"]}),i.jsxs("p",{children:["Email: ",i.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),i.jsxs("p",{children:["Phone: ",i.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),i.jsxs("div",{className:"legal-footer",children:[i.jsxs(z,{to:"/",className:"back-link",children:[i.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),i.jsxs("div",{className:"legal-links",children:[i.jsx(z,{to:"/terms",children:"Terms of Service"}),i.jsx("span",{children:"•"}),i.jsx(z,{to:"/cookies",children:"Cookie Policy"})]})]})]})})}function Ig(){return i.jsx("main",{className:"legal-page",children:i.jsxs("div",{className:"legal-container",children:[i.jsxs("div",{className:"legal-header",children:[i.jsx("h1",{children:"Terms of Service"}),i.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),i.jsxs("div",{className:"legal-content",children:[i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"1. Acceptance of Terms"}),i.jsx("p",{children:'Welcome to EducateHers Kenya. By accessing or using our website, services, programs, or events, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.'})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"2. About EducateHers Kenya"}),i.jsx("p",{children:"EducateHers Kenya is a non-profit organization dedicated to empowering girls through education and advocating for gender equality in Kenya and beyond. We provide educational programs, mentorship, and resources to support girls' education."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"3. Use of Our Services"}),i.jsx("h3",{children:"Eligibility"}),i.jsx("p",{children:"You must be at least 13 years old to use our services independently. If you are under 18, you must have parental or guardian consent."}),i.jsx("h3",{children:"Acceptable Use"}),i.jsx("p",{children:"You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others. You agree not to:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Use our services for any illegal or unauthorized purpose"}),i.jsx("li",{children:"Violate any laws in your jurisdiction"}),i.jsx("li",{children:"Transmit any harmful, offensive, or inappropriate content"}),i.jsx("li",{children:"Attempt to gain unauthorized access to our systems"}),i.jsx("li",{children:"Interfere with or disrupt our services"}),i.jsx("li",{children:"Impersonate any person or entity"}),i.jsx("li",{children:"Collect or harvest personal data of other users"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"4. Donations and Payments"}),i.jsx("h3",{children:"Donation Policy"}),i.jsx("p",{children:"All donations made to EducateHers Kenya are voluntary and non-refundable except as required by law. Donations are processed through secure third-party payment processors."}),i.jsx("h3",{children:"Tax Deductibility"}),i.jsx("p",{children:"EducateHers Kenya is a registered non-profit organization. Donations may be tax-deductible to the extent allowed by law. We will provide receipts for tax purposes."}),i.jsx("h3",{children:"Use of Donations"}),i.jsx("p",{children:"Donations are used to support our programs and operations. While we make every effort to use donations for specific campaigns as indicated, we reserve the right to allocate funds where they are most needed."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"5. Volunteer Programs"}),i.jsx("p",{children:"If you apply to volunteer with EducateHers Kenya:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"You must provide accurate and complete information in your application"}),i.jsx("li",{children:"You may be required to undergo background checks or screening"}),i.jsx("li",{children:"You agree to follow our volunteer guidelines and code of conduct"}),i.jsx("li",{children:"We reserve the right to accept or reject any volunteer application"}),i.jsx("li",{children:"Volunteer positions are unpaid unless otherwise specified"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"6. Intellectual Property"}),i.jsx("h3",{children:"Our Content"}),i.jsx("p",{children:"All content on our website, including text, graphics, logos, images, videos, and software, is the property of EducateHers Kenya or its licensors and is protected by copyright and other intellectual property laws."}),i.jsx("h3",{children:"Limited License"}),i.jsx("p",{children:"You are granted a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Reproduce, distribute, or modify our content without permission"}),i.jsx("li",{children:"Use our content for commercial purposes"}),i.jsx("li",{children:"Remove any copyright or proprietary notices"})]}),i.jsx("h3",{children:"User-Generated Content"}),i.jsx("p",{children:"If you submit content to us (e.g., testimonials, photos, stories), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content for our organizational purposes."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"7. Privacy and Data Protection"}),i.jsxs("p",{children:["Your privacy is important to us. Please review our ",i.jsx(z,{to:"/privacy",children:"Privacy Policy"})," to understand how we collect, use, and protect your personal information."]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"8. Disclaimer of Warranties"}),i.jsx("p",{children:'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:'}),i.jsxs("ul",{children:[i.jsx("li",{children:"Our services will be uninterrupted or error-free"}),i.jsx("li",{children:"Defects will be corrected"}),i.jsx("li",{children:"Our website is free of viruses or harmful components"}),i.jsx("li",{children:"The information provided is accurate or complete"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"9. Limitation of Liability"}),i.jsx("p",{children:"To the fullest extent permitted by law, EducateHers Kenya shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, including but not limited to:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Loss of profits or revenue"}),i.jsx("li",{children:"Loss of data"}),i.jsx("li",{children:"Business interruption"}),i.jsx("li",{children:"Personal injury"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"10. Indemnification"}),i.jsx("p",{children:"You agree to indemnify, defend, and hold harmless EducateHers Kenya and its officers, directors, employees, and volunteers from any claims, losses, damages, liabilities, and expenses arising from:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Your use of our services"}),i.jsx("li",{children:"Your violation of these Terms"}),i.jsx("li",{children:"Your violation of any rights of another party"})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"11. External Links"}),i.jsx("p",{children:"Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party websites is at your own risk."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"12. Modification of Services"}),i.jsx("p",{children:"We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We may also change these Terms at any time by posting the updated Terms on our website."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"13. Termination"}),i.jsx("p",{children:"We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"14. Governing Law"}),i.jsx("p",{children:"These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"15. Severability"}),i.jsx("p",{children:"If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"16. Contact Information"}),i.jsx("p",{children:"If you have questions about these Terms of Service, please contact us:"}),i.jsxs("div",{className:"contact-info",children:[i.jsx("p",{children:i.jsx("strong",{children:"EducateHers Kenya"})}),i.jsxs("p",{children:["Galleria Office and Business Park",i.jsx("br",{}),"Seminary Road, Karen Area",i.jsx("br",{}),"Nairobi, Kenya",i.jsx("br",{}),"P. O. Box 46162-00100"]}),i.jsxs("p",{children:["Email: ",i.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),i.jsxs("p",{children:["Phone: ",i.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),i.jsxs("div",{className:"legal-footer",children:[i.jsxs(z,{to:"/",className:"back-link",children:[i.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),i.jsxs("div",{className:"legal-links",children:[i.jsx(z,{to:"/privacy",children:"Privacy Policy"}),i.jsx("span",{children:"•"}),i.jsx(z,{to:"/cookies",children:"Cookie Policy"})]})]})]})})}function Mg(){return i.jsx("main",{className:"legal-page",children:i.jsxs("div",{className:"legal-container",children:[i.jsxs("div",{className:"legal-header",children:[i.jsx("h1",{children:"Cookie Policy"}),i.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),i.jsxs("div",{className:"legal-content",children:[i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"1. What Are Cookies?"}),i.jsx("p",{children:"Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."}),i.jsx("p",{children:"Cookies allow websites to recognize your device and store some information about your preferences or past actions."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"2. How We Use Cookies"}),i.jsx("p",{children:"EducateHers Kenya uses cookies to enhance your experience on our website and to help us understand how our website is being used. We use cookies for the following purposes:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Essential Cookies:"})," These are necessary for the website to function properly"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Performance Cookies:"})," Help us understand how visitors interact with our website"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Functionality Cookies:"})," Remember your preferences and settings"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Analytics Cookies:"})," Help us improve our website by collecting anonymous information"]})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"3. Types of Cookies We Use"}),i.jsx("h3",{children:"Essential Cookies"}),i.jsx("p",{children:"These cookies are strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided."}),i.jsxs("table",{className:"cookie-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Cookie Name"}),i.jsx("th",{children:"Purpose"}),i.jsx("th",{children:"Duration"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"session_id"}),i.jsx("td",{children:"Maintains your session state"}),i.jsx("td",{children:"Session"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"csrf_token"}),i.jsx("td",{children:"Security protection"}),i.jsx("td",{children:"Session"})]})]})]}),i.jsx("h3",{children:"Performance and Analytics Cookies"}),i.jsx("p",{children:"These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us optimize our website and improve user experience."}),i.jsxs("table",{className:"cookie-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Cookie Name"}),i.jsx("th",{children:"Purpose"}),i.jsx("th",{children:"Duration"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"_ga"}),i.jsx("td",{children:"Google Analytics - tracks user behavior"}),i.jsx("td",{children:"2 years"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"_gid"}),i.jsx("td",{children:"Google Analytics - distinguishes users"}),i.jsx("td",{children:"24 hours"})]})]})]}),i.jsx("h3",{children:"Functionality Cookies"}),i.jsx("p",{children:"These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, personalized features."}),i.jsxs("table",{className:"cookie-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Cookie Name"}),i.jsx("th",{children:"Purpose"}),i.jsx("th",{children:"Duration"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"language_pref"}),i.jsx("td",{children:"Remembers your language preference"}),i.jsx("td",{children:"1 year"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"newsletter_dismissed"}),i.jsx("td",{children:"Remembers if you dismissed the newsletter popup"}),i.jsx("td",{children:"30 days"})]})]})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"4. Third-Party Cookies"}),i.jsx("p",{children:"We may use third-party services that also set cookies on your device. These include:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Google Analytics:"})," To analyze website traffic and user behavior"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Social Media Platforms:"})," To enable social sharing and display social media content"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Payment Processors:"})," To process secure donations (M-Changa, payment gateways)"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Video Platforms:"})," To embed videos from YouTube or other platforms"]})]}),i.jsx("p",{children:"These third parties have their own privacy and cookie policies, which we encourage you to review."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"5. How Long Do Cookies Last?"}),i.jsx("p",{children:"Cookies can be either:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Session Cookies:"})," Temporary cookies that expire when you close your browser"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Persistent Cookies:"})," Remain on your device for a set period or until you delete them"]})]}),i.jsx("p",{children:"The duration of each cookie varies based on its purpose. Most of our cookies are session cookies or expire within 1-2 years."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"6. Managing Cookies"}),i.jsx("h3",{children:"Browser Settings"}),i.jsx("p",{children:"Most web browsers allow you to control cookies through their settings. You can:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"View what cookies are stored on your device"}),i.jsx("li",{children:"Delete existing cookies"}),i.jsx("li",{children:"Block all cookies"}),i.jsx("li",{children:"Block third-party cookies only"}),i.jsx("li",{children:"Set your browser to ask before accepting cookies"})]}),i.jsx("h3",{children:"How to Control Cookies in Different Browsers:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Google Chrome:"})," Settings → Privacy and security → Cookies and other site data"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Mozilla Firefox:"})," Options → Privacy & Security → Cookies and Site Data"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Safari:"})," Preferences → Privacy → Cookies and website data"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Microsoft Edge:"})," Settings → Privacy, search, and services → Cookies and site permissions"]})]}),i.jsx("h3",{children:"Important Note"}),i.jsx("p",{children:"Please note that blocking or deleting cookies may impact your experience on our website and prevent you from accessing certain features. Some parts of our website may not function properly if you disable cookies."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"7. Do Not Track Signals"}),i.jsx("p",{children:'Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no standard for how websites should respond to these signals. We do not currently respond to "Do Not Track" signals.'})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"8. Mobile Devices"}),i.jsx("p",{children:"If you access our website through a mobile device, you can control cookies through your device settings. The process varies by device manufacturer and operating system."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"9. Updates to This Cookie Policy"}),i.jsx("p",{children:'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.'}),i.jsx("p",{children:"We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"10. Your Consent"}),i.jsx("p",{children:"By using our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or refrain from using our website."})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"11. More Information"}),i.jsxs("p",{children:["For more information about how we protect your privacy, please read our ",i.jsx(z,{to:"/privacy",children:"Privacy Policy"}),"."]}),i.jsx("p",{children:"To learn more about cookies in general, you can visit:"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"https://www.allaboutcookies.org",target:"_blank",rel:"noopener noreferrer",children:"All About Cookies"})}),i.jsx("li",{children:i.jsx("a",{href:"https://www.youronlinechoices.com",target:"_blank",rel:"noopener noreferrer",children:"Your Online Choices"})})]})]}),i.jsxs("section",{className:"legal-section",children:[i.jsx("h2",{children:"12. Contact Us"}),i.jsx("p",{children:"If you have questions about our use of cookies, please contact us:"}),i.jsxs("div",{className:"contact-info",children:[i.jsx("p",{children:i.jsx("strong",{children:"EducateHers Kenya"})}),i.jsxs("p",{children:["Galleria Office and Business Park",i.jsx("br",{}),"Seminary Road, Karen Area",i.jsx("br",{}),"Nairobi, Kenya",i.jsx("br",{}),"P. O. Box 46162-00100"]}),i.jsxs("p",{children:["Email: ",i.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),i.jsxs("p",{children:["Phone: ",i.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),i.jsxs("div",{className:"legal-footer",children:[i.jsxs(z,{to:"/",className:"back-link",children:[i.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),i.jsxs("div",{className:"legal-links",children:[i.jsx(z,{to:"/privacy",children:"Privacy Policy"}),i.jsx("span",{children:"•"}),i.jsx(z,{to:"/terms",children:"Terms of Service"})]})]})]})})}function Ag(){return i.jsxs("section",{style:{textAlign:"center",padding:"4rem 2rem"},children:[i.jsx("div",{style:{fontSize:"6rem",marginBottom:"1rem"},children:"🔍"}),i.jsx("h1",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"404 - Page Not Found"}),i.jsx("p",{style:{fontSize:"1.2rem",marginBottom:"2rem",maxWidth:"600px",margin:"0 auto 2rem"},children:"Oops! The page you're looking for doesn't exist. It might have been moved or deleted."}),i.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[i.jsx(z,{to:"/",style:{textDecoration:"none"},children:i.jsx("button",{style:{fontSize:"1.1rem"},children:"← Back to Home"})}),i.jsx(z,{to:"/contact",style:{textDecoration:"none"},children:i.jsx("button",{style:{fontSize:"1.1rem",background:"linear-gradient(135deg, #ff8c42, #ffb366)"},children:"Contact Us"})})]})]})}function Dg(){return i.jsx(Ud,{children:i.jsxs("div",{className:"app",children:[i.jsx(sg,{}),i.jsxs(gm,{children:[i.jsx(ye,{path:"/",element:i.jsx(kg,{})}),i.jsx(ye,{path:"/events",element:i.jsx(bg,{})}),i.jsx(ye,{path:"/volunteer",element:i.jsx(Sg,{})}),i.jsx(ye,{path:"/what-we-do",element:i.jsx(Cg,{})}),i.jsx(ye,{path:"/blog",element:i.jsx(zg,{})}),i.jsx(ye,{path:"/blog/:slug",element:i.jsx(_g,{})}),i.jsx(ye,{path:"/contact",element:i.jsx(Og,{})}),i.jsx(ye,{path:"/donate",element:i.jsx(Rg,{})}),i.jsx(ye,{path:"/privacy",element:i.jsx(Lg,{})}),i.jsx(ye,{path:"/terms",element:i.jsx(Ig,{})}),i.jsx(ye,{path:"/cookies",element:i.jsx(Mg,{})}),i.jsx(ye,{path:"*",element:i.jsx(Ag,{})})]}),i.jsx(Ng,{})]})})}const Fg=jd(document.getElementById("root"));Fg.render(i.jsx(q.StrictMode,{children:i.jsx(bm,{children:i.jsx(Dg,{})})}));
