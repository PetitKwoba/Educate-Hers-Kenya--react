(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function l(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=l(f);fetch(f.href,p)}})();function wa(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var xo={exports:{}},Wr={},vo={exports:{}},ee={};var Wu;function Yp(){if(Wu)return ee;Wu=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function L(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,T={};function O(k,R,Z){this.props=k,this.context=R,this.refs=T,this.updater=Z||M}O.prototype.isReactComponent={},O.prototype.setState=function(k,R){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,R,"setState")},O.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function K(){}K.prototype=O.prototype;function F(k,R,Z){this.props=k,this.context=R,this.refs=T,this.updater=Z||M}var J=F.prototype=new K;J.constructor=F,q(J,O.prototype),J.isPureReactComponent=!0;var se=Array.isArray,ce=Object.prototype.hasOwnProperty,ge={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function Ee(k,R,Z){var te,re={},ie=null,ue=null;if(R!=null)for(te in R.ref!==void 0&&(ue=R.ref),R.key!==void 0&&(ie=""+R.key),R)ce.call(R,te)&&!we.hasOwnProperty(te)&&(re[te]=R[te]);var oe=arguments.length-2;if(oe===1)re.children=Z;else if(1<oe){for(var he=Array(oe),Ze=0;Ze<oe;Ze++)he[Ze]=arguments[Ze+2];re.children=he}if(k&&k.defaultProps)for(te in oe=k.defaultProps,oe)re[te]===void 0&&(re[te]=oe[te]);return{$$typeof:a,type:k,key:ie,ref:ue,props:re,_owner:ge.current}}function He(k,R){return{$$typeof:a,type:k.type,key:R,ref:k.ref,props:k.props,_owner:k._owner}}function We(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function cn(k){var R={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Z){return R[Z]})}var kt=/\/+/g;function Je(k,R){return typeof k=="object"&&k!==null&&k.key!=null?cn(""+k.key):R.toString(36)}function pt(k,R,Z,te,re){var ie=typeof k;(ie==="undefined"||ie==="boolean")&&(k=null);var ue=!1;if(k===null)ue=!0;else switch(ie){case"string":case"number":ue=!0;break;case"object":switch(k.$$typeof){case a:case c:ue=!0}}if(ue)return ue=k,re=re(ue),k=te===""?"."+Je(ue,0):te,se(re)?(Z="",k!=null&&(Z=k.replace(kt,"$&/")+"/"),pt(re,R,Z,"",function(Ze){return Ze})):re!=null&&(We(re)&&(re=He(re,Z+(!re.key||ue&&ue.key===re.key?"":(""+re.key).replace(kt,"$&/")+"/")+k)),R.push(re)),1;if(ue=0,te=te===""?".":te+":",se(k))for(var oe=0;oe<k.length;oe++){ie=k[oe];var he=te+Je(ie,oe);ue+=pt(ie,R,Z,he,re)}else if(he=L(k),typeof he=="function")for(k=he.call(k),oe=0;!(ie=k.next()).done;)ie=ie.value,he=te+Je(ie,oe++),ue+=pt(ie,R,Z,he,re);else if(ie==="object")throw R=String(k),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ue}function Nt(k,R,Z){if(k==null)return k;var te=[],re=0;return pt(k,te,"","",function(ie){return R.call(Z,ie,re++)}),te}function Ke(k){if(k._status===-1){var R=k._result;R=R(),R.then(function(Z){(k._status===0||k._status===-1)&&(k._status=1,k._result=Z)},function(Z){(k._status===0||k._status===-1)&&(k._status=2,k._result=Z)}),k._status===-1&&(k._status=0,k._result=R)}if(k._status===1)return k._result.default;throw k._result}var je={current:null},D={transition:null},Q={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:D,ReactCurrentOwner:ge};function W(){throw Error("act(...) is not supported in production builds of React.")}return ee.Children={map:Nt,forEach:function(k,R,Z){Nt(k,function(){R.apply(this,arguments)},Z)},count:function(k){var R=0;return Nt(k,function(){R++}),R},toArray:function(k){return Nt(k,function(R){return R})||[]},only:function(k){if(!We(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ee.Component=O,ee.Fragment=l,ee.Profiler=f,ee.PureComponent=F,ee.StrictMode=u,ee.Suspense=m,ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ee.act=W,ee.cloneElement=function(k,R,Z){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var te=q({},k.props),re=k.key,ie=k.ref,ue=k._owner;if(R!=null){if(R.ref!==void 0&&(ie=R.ref,ue=ge.current),R.key!==void 0&&(re=""+R.key),k.type&&k.type.defaultProps)var oe=k.type.defaultProps;for(he in R)ce.call(R,he)&&!we.hasOwnProperty(he)&&(te[he]=R[he]===void 0&&oe!==void 0?oe[he]:R[he])}var he=arguments.length-2;if(he===1)te.children=Z;else if(1<he){oe=Array(he);for(var Ze=0;Ze<he;Ze++)oe[Ze]=arguments[Ze+2];te.children=oe}return{$$typeof:a,type:k.type,key:re,ref:ie,props:te,_owner:ue}},ee.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:p,_context:k},k.Consumer=k},ee.createElement=Ee,ee.createFactory=function(k){var R=Ee.bind(null,k);return R.type=k,R},ee.createRef=function(){return{current:null}},ee.forwardRef=function(k){return{$$typeof:x,render:k}},ee.isValidElement=We,ee.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:Ke}},ee.memo=function(k,R){return{$$typeof:w,type:k,compare:R===void 0?null:R}},ee.startTransition=function(k){var R=D.transition;D.transition={};try{k()}finally{D.transition=R}},ee.unstable_act=W,ee.useCallback=function(k,R){return je.current.useCallback(k,R)},ee.useContext=function(k){return je.current.useContext(k)},ee.useDebugValue=function(){},ee.useDeferredValue=function(k){return je.current.useDeferredValue(k)},ee.useEffect=function(k,R){return je.current.useEffect(k,R)},ee.useId=function(){return je.current.useId()},ee.useImperativeHandle=function(k,R,Z){return je.current.useImperativeHandle(k,R,Z)},ee.useInsertionEffect=function(k,R){return je.current.useInsertionEffect(k,R)},ee.useLayoutEffect=function(k,R){return je.current.useLayoutEffect(k,R)},ee.useMemo=function(k,R){return je.current.useMemo(k,R)},ee.useReducer=function(k,R,Z){return je.current.useReducer(k,R,Z)},ee.useRef=function(k){return je.current.useRef(k)},ee.useState=function(k){return je.current.useState(k)},ee.useSyncExternalStore=function(k,R,Z){return je.current.useSyncExternalStore(k,R,Z)},ee.useTransition=function(){return je.current.useTransition()},ee.version="18.3.1",ee}var Uu;function Ho(){return Uu||(Uu=1,vo.exports=Yp()),vo.exports}var Bu;function Gp(){if(Bu)return Wr;Bu=1;var a=Ho(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(x,m,w){var v,E={},L=null,M=null;w!==void 0&&(L=""+w),m.key!==void 0&&(L=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)u.call(m,v)&&!p.hasOwnProperty(v)&&(E[v]=m[v]);if(x&&x.defaultProps)for(v in m=x.defaultProps,m)E[v]===void 0&&(E[v]=m[v]);return{$$typeof:c,type:x,key:L,ref:M,props:E,_owner:f.current}}return Wr.Fragment=l,Wr.jsx=h,Wr.jsxs=h,Wr}var $u;function Qp(){return $u||($u=1,xo.exports=Gp()),xo.exports}var n=Qp(),b=Ho();const Pe=wa(b);var oa={},yo={exports:{}},Xe={},wo={exports:{}},jo={};var Ku;function Xp(){return Ku||(Ku=1,(function(a){function c(D,Q){var W=D.length;D.push(Q);e:for(;0<W;){var k=W-1>>>1,R=D[k];if(0<f(R,Q))D[k]=Q,D[W]=R,W=k;else break e}}function l(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var Q=D[0],W=D.pop();if(W!==Q){D[0]=W;e:for(var k=0,R=D.length,Z=R>>>1;k<Z;){var te=2*(k+1)-1,re=D[te],ie=te+1,ue=D[ie];if(0>f(re,W))ie<R&&0>f(ue,re)?(D[k]=ue,D[ie]=W,k=ie):(D[k]=re,D[te]=W,k=te);else if(ie<R&&0>f(ue,W))D[k]=ue,D[ie]=W,k=ie;else break e}}return Q}function f(D,Q){var W=D.sortIndex-Q.sortIndex;return W!==0?W:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var h=Date,x=h.now();a.unstable_now=function(){return h.now()-x}}var m=[],w=[],v=1,E=null,L=3,M=!1,q=!1,T=!1,O=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(D){for(var Q=l(w);Q!==null;){if(Q.callback===null)u(w);else if(Q.startTime<=D)u(w),Q.sortIndex=Q.expirationTime,c(m,Q);else break;Q=l(w)}}function se(D){if(T=!1,J(D),!q)if(l(m)!==null)q=!0,Ke(ce);else{var Q=l(w);Q!==null&&je(se,Q.startTime-D)}}function ce(D,Q){q=!1,T&&(T=!1,K(Ee),Ee=-1),M=!0;var W=L;try{for(J(Q),E=l(m);E!==null&&(!(E.expirationTime>Q)||D&&!cn());){var k=E.callback;if(typeof k=="function"){E.callback=null,L=E.priorityLevel;var R=k(E.expirationTime<=Q);Q=a.unstable_now(),typeof R=="function"?E.callback=R:E===l(m)&&u(m),J(Q)}else u(m);E=l(m)}if(E!==null)var Z=!0;else{var te=l(w);te!==null&&je(se,te.startTime-Q),Z=!1}return Z}finally{E=null,L=W,M=!1}}var ge=!1,we=null,Ee=-1,He=5,We=-1;function cn(){return!(a.unstable_now()-We<He)}function kt(){if(we!==null){var D=a.unstable_now();We=D;var Q=!0;try{Q=we(!0,D)}finally{Q?Je():(ge=!1,we=null)}}else ge=!1}var Je;if(typeof F=="function")Je=function(){F(kt)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,Nt=pt.port2;pt.port1.onmessage=kt,Je=function(){Nt.postMessage(null)}}else Je=function(){O(kt,0)};function Ke(D){we=D,ge||(ge=!0,Je())}function je(D,Q){Ee=O(function(){D(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_continueExecution=function(){q||M||(q=!0,Ke(ce))},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return L},a.unstable_getFirstCallbackNode=function(){return l(m)},a.unstable_next=function(D){switch(L){case 1:case 2:case 3:var Q=3;break;default:Q=L}var W=L;L=Q;try{return D()}finally{L=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=L;L=D;try{return Q()}finally{L=W}},a.unstable_scheduleCallback=function(D,Q,W){var k=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?k+W:k):W=k,D){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=W+R,D={id:v++,callback:Q,priorityLevel:D,startTime:W,expirationTime:R,sortIndex:-1},W>k?(D.sortIndex=W,c(w,D),l(m)===null&&D===l(w)&&(T?(K(Ee),Ee=-1):T=!0,je(se,W-k))):(D.sortIndex=R,c(m,D),q||M||(q=!0,Ke(ce))),D},a.unstable_shouldYield=cn,a.unstable_wrapCallback=function(D){var Q=L;return function(){var W=L;L=Q;try{return D.apply(this,arguments)}finally{L=W}}}})(jo)),jo}var Vu;function Jp(){return Vu||(Vu=1,wo.exports=Xp()),wo.exports}var qu;function Zp(){if(qu)return Xe;qu=1;var a=Ho(),c=Jp();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,f={};function p(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(f[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function L(e){return m.call(E,e)?!0:m.call(v,e)?!1:w.test(e)?E[e]=!0:(v[e]=!0,!1)}function M(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,t,r,i){if(t===null||typeof t>"u"||M(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,r,i,s,o,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=d}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(K,F);O[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(K,F);O[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(K,F);O[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function J(e,t,r,i){var s=O.hasOwnProperty(t)?O[t]:null;(s!==null?s.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(q(t,r,s,i)&&(r=null),i||s===null?L(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,i=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var se=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),ge=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),We=Symbol.for("react.provider"),cn=Symbol.for("react.context"),kt=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),D=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,k;function R(e){if(k===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var Z=!1;function te(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var i=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){i=C}e.call(t.prototype)}else{try{throw Error()}catch(C){i=C}e()}}catch(C){if(C&&i&&typeof C.stack=="string"){for(var s=C.stack.split(`
`),o=i.stack.split(`
`),d=s.length-1,g=o.length-1;1<=d&&0<=g&&s[d]!==o[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==o[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==o[g]){var y=`
`+s[d].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=d&&0<=g);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?R(e):""}function re(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=te(e.type,!1),e;case 11:return e=te(e.type.render,!1),e;case 1:return e=te(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case we:return"Fragment";case ge:return"Portal";case He:return"Profiler";case Ee:return"StrictMode";case Je:return"Suspense";case pt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cn:return(e.displayName||"Context")+".Consumer";case We:return(e._context.displayName||"Context")+".Provider";case kt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nt:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function he(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ze(e){var t=he(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Ze(e))}function qo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=he(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var r=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Yo(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=oe(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Go(e,t){t=t.checked,t!=null&&J(e,"checked",t,!1)}function ba(e,t){Go(e,t);var r=oe(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Sa(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Sa(e,t,r){(t!=="number"||Jr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var nr=Array.isArray;function bn(e,t,r,i){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&i&&(e[r].defaultSelected=!0)}else{for(r=""+oe(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ea(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(nr(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:oe(r)}}function Jo(e,t){var r=oe(t.value),i=oe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function el(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?el(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,tl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xd=["Webkit","ms","Moz","O"];Object.keys(ir).forEach(function(e){Xd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ir[t]=ir[e]})});function nl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ir.hasOwnProperty(e)&&ir[e]?(""+t).trim():t+"px"}function rl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,s=nl(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,s):e[r]=s}}var Jd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(Jd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _a=null,Sn=null,En=null;function il(e){if(e=Er(e)){if(typeof _a!="function")throw Error(l(280));var t=e.stateNode;t&&(t=ki(t),_a(e.stateNode,e.type,t))}}function al(e){Sn?En?En.push(e):En=[e]:Sn=e}function sl(){if(Sn){var e=Sn,t=En;if(En=Sn=null,il(e),t)for(e=0;e<t.length;e++)il(t[e])}}function ol(e,t){return e(t)}function ll(){}var La=!1;function cl(e,t,r){if(La)return e(t,r);La=!0;try{return ol(e,t,r)}finally{La=!1,(Sn!==null||En!==null)&&(ll(),sl())}}function ar(e,t){var r=e.stateNode;if(r===null)return null;var i=ki(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Oa=!1;if(x)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Oa=!1}function Zd(e,t,r,i,s,o,d,g,y){var C=Array.prototype.slice.call(arguments,3);try{t.apply(r,C)}catch(z){this.onError(z)}}var or=!1,ei=null,ti=!1,Ia=null,ef={onError:function(e){or=!0,ei=e}};function tf(e,t,r,i,s,o,d,g,y){or=!1,ei=null,Zd.apply(ef,arguments)}function nf(e,t,r,i,s,o,d,g,y){if(tf.apply(this,arguments),or){if(or){var C=ei;or=!1,ei=null}else throw Error(l(198));ti||(ti=!0,Ia=C)}}function un(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ul(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dl(e){if(un(e)!==e)throw Error(l(188))}function rf(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){r=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return dl(s),e;if(o===i)return dl(s),t;o=o.sibling}throw Error(l(188))}if(r.return!==i.return)r=s,i=o;else{for(var d=!1,g=s.child;g;){if(g===r){d=!0,r=s,i=o;break}if(g===i){d=!0,i=s,r=o;break}g=g.sibling}if(!d){for(g=o.child;g;){if(g===r){d=!0,r=o,i=s;break}if(g===i){d=!0,i=o,r=s;break}g=g.sibling}if(!d)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function fl(e){return e=rf(e),e!==null?pl(e):null}function pl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pl(e);if(t!==null)return t;e=e.sibling}return null}var hl=c.unstable_scheduleCallback,ml=c.unstable_cancelCallback,af=c.unstable_shouldYield,sf=c.unstable_requestPaint,Ne=c.unstable_now,of=c.unstable_getCurrentPriorityLevel,Ma=c.unstable_ImmediatePriority,gl=c.unstable_UserBlockingPriority,ni=c.unstable_NormalPriority,lf=c.unstable_LowPriority,xl=c.unstable_IdlePriority,ri=null,bt=null;function cf(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:ff,uf=Math.log,df=Math.LN2;function ff(e){return e>>>=0,e===0?32:31-(uf(e)/df|0)|0}var ii=64,ai=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes,d=r&268435455;if(d!==0){var g=d&~s;g!==0?i=lr(g):(o&=d,o!==0&&(i=lr(o)))}else d=r&~s,d!==0?i=lr(d):o!==0&&(i=lr(o));if(i===0)return 0;if(t!==0&&t!==i&&(t&s)===0&&(s=i&-i,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if((i&4)!==0&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-ht(t),s=1<<r,i|=e[r],t&=~s;return i}function pf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hf(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-ht(o),g=1<<d,y=s[d];y===-1?((g&r)===0||(g&i)!==0)&&(s[d]=pf(g,t)):y<=t&&(e.expiredLanes|=g),o&=~g}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vl(){var e=ii;return ii<<=1,(ii&4194240)===0&&(ii=64),e}function Aa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function cr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=r}function mf(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-ht(r),o=1<<s;t[s]=0,i[s]=-1,e[s]=-1,r&=~o}}function Fa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-ht(r),s=1<<i;s&t|e[i]&t&&(e[i]|=t),r&=~s}}var le=0;function yl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wl,Ha,jl,kl,Nl,Wa=!1,oi=[],Ut=null,Bt=null,$t=null,ur=new Map,dr=new Map,Kt=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bl(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function fr(e,t,r,i,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Er(t),t!==null&&Ha(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function xf(e,t,r,i,s){switch(t){case"focusin":return Ut=fr(Ut,e,t,r,i,s),!0;case"dragenter":return Bt=fr(Bt,e,t,r,i,s),!0;case"mouseover":return $t=fr($t,e,t,r,i,s),!0;case"pointerover":var o=s.pointerId;return ur.set(o,fr(ur.get(o)||null,e,t,r,i,s)),!0;case"gotpointercapture":return o=s.pointerId,dr.set(o,fr(dr.get(o)||null,e,t,r,i,s)),!0}return!1}function Sl(e){var t=dn(e.target);if(t!==null){var r=un(t);if(r!==null){if(t=r.tag,t===13){if(t=ul(r),t!==null){e.blockedOn=t,Nl(e.priority,function(){jl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Ra=i,r.target.dispatchEvent(i),Ra=null}else return t=Er(r),t!==null&&Ha(t),e.blockedOn=r,!1;t.shift()}return!0}function El(e,t,r){li(e)&&r.delete(t)}function vf(){Wa=!1,Ut!==null&&li(Ut)&&(Ut=null),Bt!==null&&li(Bt)&&(Bt=null),$t!==null&&li($t)&&($t=null),ur.forEach(El),dr.forEach(El)}function pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,vf)))}function hr(e){function t(s){return pr(s,e)}if(0<oi.length){pr(oi[0],e);for(var r=1;r<oi.length;r++){var i=oi[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Ut!==null&&pr(Ut,e),Bt!==null&&pr(Bt,e),$t!==null&&pr($t,e),ur.forEach(t),dr.forEach(t),r=0;r<Kt.length;r++)i=Kt[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Kt.length&&(r=Kt[0],r.blockedOn===null);)Sl(r),r.blockedOn===null&&Kt.shift()}var Cn=se.ReactCurrentBatchConfig,ci=!0;function yf(e,t,r,i){var s=le,o=Cn.transition;Cn.transition=null;try{le=1,Ua(e,t,r,i)}finally{le=s,Cn.transition=o}}function wf(e,t,r,i){var s=le,o=Cn.transition;Cn.transition=null;try{le=4,Ua(e,t,r,i)}finally{le=s,Cn.transition=o}}function Ua(e,t,r,i){if(ci){var s=Ba(e,t,r,i);if(s===null)ss(e,t,i,ui,r),bl(e,i);else if(xf(s,e,t,r,i))i.stopPropagation();else if(bl(e,i),t&4&&-1<gf.indexOf(e)){for(;s!==null;){var o=Er(s);if(o!==null&&wl(o),o=Ba(e,t,r,i),o===null&&ss(e,t,i,ui,r),o===s)break;s=o}s!==null&&i.stopPropagation()}else ss(e,t,i,null,r)}}var ui=null;function Ba(e,t,r,i){if(ui=null,e=za(i),e=dn(e),e!==null)if(t=un(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ul(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ui=e,null}function Cl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case Ma:return 1;case gl:return 4;case ni:case lf:return 16;case xl:return 536870912;default:return 16}default:return 16}}var Vt=null,$a=null,di=null;function Tl(){if(di)return di;var e,t=$a,r=t.length,i,s="value"in Vt?Vt.value:Vt.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var d=r-e;for(i=1;i<=d&&t[r-i]===s[o-i];i++);return di=s.slice(e,1<i?1-i:void 0)}function fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function Pl(){return!1}function et(e){function t(r,i,s,o,d){this._reactName=r,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(r=e[g],this[g]=r?r(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:Pl,this.isPropagationStopped=Pl,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ka=et(Tn),mr=W({},Tn,{view:0,detail:0}),jf=et(mr),Va,qa,gr,hi=W({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(Va=e.screenX-gr.screenX,qa=e.screenY-gr.screenY):qa=Va=0,gr=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),Rl=et(hi),kf=W({},hi,{dataTransfer:0}),Nf=et(kf),bf=W({},mr,{relatedTarget:0}),Ya=et(bf),Sf=W({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ef=et(Sf),Cf=W({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tf=et(Cf),Pf=W({},Tn,{data:0}),zl=et(Pf),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_f[e])?!!t[e]:!1}function Ga(){return Lf}var Of=W({},mr,{key:function(e){if(e.key){var t=Rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ga,charCode:function(e){return e.type==="keypress"?fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),If=et(Of),Mf=W({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_l=et(Mf),Df=W({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ga}),Af=et(Df),Ff=W({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hf=et(Ff),Wf=W({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uf=et(Wf),Bf=[9,13,27,32],Qa=x&&"CompositionEvent"in window,xr=null;x&&"documentMode"in document&&(xr=document.documentMode);var $f=x&&"TextEvent"in window&&!xr,Ll=x&&(!Qa||xr&&8<xr&&11>=xr),Ol=" ",Il=!1;function Ml(e,t){switch(e){case"keyup":return Bf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Kf(e,t){switch(e){case"compositionend":return Dl(t);case"keypress":return t.which!==32?null:(Il=!0,Ol);case"textInput":return e=t.data,e===Ol&&Il?null:e;default:return null}}function Vf(e,t){if(Pn)return e==="compositionend"||!Qa&&Ml(e,t)?(e=Tl(),di=$a=Vt=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ll&&t.locale!=="ko"?null:t.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qf[e.type]:t==="textarea"}function Fl(e,t,r,i){al(i),t=yi(t,"onChange"),0<t.length&&(r=new Ka("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var vr=null,yr=null;function Yf(e){rc(e,0)}function mi(e){var t=On(e);if(qo(t))return e}function Gf(e,t){if(e==="change")return t}var Hl=!1;if(x){var Xa;if(x){var Ja="oninput"in document;if(!Ja){var Wl=document.createElement("div");Wl.setAttribute("oninput","return;"),Ja=typeof Wl.oninput=="function"}Xa=Ja}else Xa=!1;Hl=Xa&&(!document.documentMode||9<document.documentMode)}function Ul(){vr&&(vr.detachEvent("onpropertychange",Bl),yr=vr=null)}function Bl(e){if(e.propertyName==="value"&&mi(yr)){var t=[];Fl(t,yr,e,za(e)),cl(Yf,t)}}function Qf(e,t,r){e==="focusin"?(Ul(),vr=t,yr=r,vr.attachEvent("onpropertychange",Bl)):e==="focusout"&&Ul()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(yr)}function Jf(e,t){if(e==="click")return mi(t)}function Zf(e,t){if(e==="input"||e==="change")return mi(t)}function ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:ep;function wr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var s=r[i];if(!m.call(t,s)||!mt(e[s],t[s]))return!1}return!0}function $l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kl(e,t){var r=$l(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$l(r)}}function Vl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ql(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tp(e){var t=ql(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Vl(r.ownerDocument.documentElement,r)){if(i!==null&&Za(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!e.extend&&o>i&&(s=i,i=o,o=s),s=Kl(r,o);var d=Kl(r,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=x&&"documentMode"in document&&11>=document.documentMode,Rn=null,es=null,jr=null,ts=!1;function Yl(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ts||Rn==null||Rn!==Jr(i)||(i=Rn,"selectionStart"in i&&Za(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jr&&wr(jr,i)||(jr=i,i=yi(es,"onSelect"),0<i.length&&(t=new Ka("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Rn)))}function gi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var zn={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionend:gi("Transition","TransitionEnd")},ns={},Gl={};x&&(Gl=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function xi(e){if(ns[e])return ns[e];if(!zn[e])return e;var t=zn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Gl)return ns[e]=t[r];return e}var Ql=xi("animationend"),Xl=xi("animationiteration"),Jl=xi("animationstart"),Zl=xi("transitionend"),ec=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){ec.set(e,t),p(t,[e])}for(var rs=0;rs<tc.length;rs++){var is=tc[rs],rp=is.toLowerCase(),ip=is[0].toUpperCase()+is.slice(1);qt(rp,"on"+ip)}qt(Ql,"onAnimationEnd"),qt(Xl,"onAnimationIteration"),qt(Jl,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(Zl,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function nc(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,nf(i,t,void 0,e),e.currentTarget=null}function rc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],s=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var d=i.length-1;0<=d;d--){var g=i[d],y=g.instance,C=g.currentTarget;if(g=g.listener,y!==o&&s.isPropagationStopped())break e;nc(s,g,C),o=y}else for(d=0;d<i.length;d++){if(g=i[d],y=g.instance,C=g.currentTarget,g=g.listener,y!==o&&s.isPropagationStopped())break e;nc(s,g,C),o=y}}}if(ti)throw e=Ia,ti=!1,Ia=null,e}function fe(e,t){var r=t[fs];r===void 0&&(r=t[fs]=new Set);var i=e+"__bubble";r.has(i)||(ic(t,e,2,!1),r.add(i))}function as(e,t,r){var i=0;t&&(i|=4),ic(r,e,i,t)}var vi="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[vi]){e[vi]=!0,u.forEach(function(r){r!=="selectionchange"&&(ap.has(r)||as(r,!1,e),as(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vi]||(t[vi]=!0,as("selectionchange",!1,t))}}function ic(e,t,r,i){switch(Cl(t)){case 1:var s=yf;break;case 4:s=wf;break;default:s=Ua}r=s.bind(null,t,r,e),s=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function ss(e,t,r,i,s){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var y=d.tag;if((y===3||y===4)&&(y=d.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;d=d.return}for(;g!==null;){if(d=dn(g),d===null)return;if(y=d.tag,y===5||y===6){i=o=d;continue e}g=g.parentNode}}i=i.return}cl(function(){var C=o,z=za(r),_=[];e:{var P=ec.get(e);if(P!==void 0){var A=Ka,U=e;switch(e){case"keypress":if(fi(r)===0)break e;case"keydown":case"keyup":A=If;break;case"focusin":U="focus",A=Ya;break;case"focusout":U="blur",A=Ya;break;case"beforeblur":case"afterblur":A=Ya;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Af;break;case Ql:case Xl:case Jl:A=Ef;break;case Zl:A=Hf;break;case"scroll":A=jf;break;case"wheel":A=Uf;break;case"copy":case"cut":case"paste":A=Tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=_l}var B=(t&4)!==0,be=!B&&e==="scroll",N=B?P!==null?P+"Capture":null:P;B=[];for(var j=C,S;j!==null;){S=j;var I=S.stateNode;if(S.tag===5&&I!==null&&(S=I,N!==null&&(I=ar(j,N),I!=null&&B.push(br(j,I,S)))),be)break;j=j.return}0<B.length&&(P=new A(P,U,null,r,z),_.push({event:P,listeners:B}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",P&&r!==Ra&&(U=r.relatedTarget||r.fromElement)&&(dn(U)||U[zt]))break e;if((A||P)&&(P=z.window===z?z:(P=z.ownerDocument)?P.defaultView||P.parentWindow:window,A?(U=r.relatedTarget||r.toElement,A=C,U=U?dn(U):null,U!==null&&(be=un(U),U!==be||U.tag!==5&&U.tag!==6)&&(U=null)):(A=null,U=C),A!==U)){if(B=Rl,I="onMouseLeave",N="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(B=_l,I="onPointerLeave",N="onPointerEnter",j="pointer"),be=A==null?P:On(A),S=U==null?P:On(U),P=new B(I,j+"leave",A,r,z),P.target=be,P.relatedTarget=S,I=null,dn(z)===C&&(B=new B(N,j+"enter",U,r,z),B.target=S,B.relatedTarget=be,I=B),be=I,A&&U)t:{for(B=A,N=U,j=0,S=B;S;S=_n(S))j++;for(S=0,I=N;I;I=_n(I))S++;for(;0<j-S;)B=_n(B),j--;for(;0<S-j;)N=_n(N),S--;for(;j--;){if(B===N||N!==null&&B===N.alternate)break t;B=_n(B),N=_n(N)}B=null}else B=null;A!==null&&ac(_,P,A,B,!1),U!==null&&be!==null&&ac(_,be,U,B,!0)}}e:{if(P=C?On(C):window,A=P.nodeName&&P.nodeName.toLowerCase(),A==="select"||A==="input"&&P.type==="file")var $=Gf;else if(Al(P))if(Hl)$=Zf;else{$=Xf;var Y=Qf}else(A=P.nodeName)&&A.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=Jf);if($&&($=$(e,C))){Fl(_,$,r,z);break e}Y&&Y(e,P,C),e==="focusout"&&(Y=P._wrapperState)&&Y.controlled&&P.type==="number"&&Sa(P,"number",P.value)}switch(Y=C?On(C):window,e){case"focusin":(Al(Y)||Y.contentEditable==="true")&&(Rn=Y,es=C,jr=null);break;case"focusout":jr=es=Rn=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,Yl(_,r,z);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Yl(_,r,z)}var G;if(Qa)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Pn?Ml(e,r)&&(X="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(X="onCompositionStart");X&&(Ll&&r.locale!=="ko"&&(Pn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Pn&&(G=Tl()):(Vt=z,$a="value"in Vt?Vt.value:Vt.textContent,Pn=!0)),Y=yi(C,X),0<Y.length&&(X=new zl(X,e,null,r,z),_.push({event:X,listeners:Y}),G?X.data=G:(G=Dl(r),G!==null&&(X.data=G)))),(G=$f?Kf(e,r):Vf(e,r))&&(C=yi(C,"onBeforeInput"),0<C.length&&(z=new zl("onBeforeInput","beforeinput",null,r,z),_.push({event:z,listeners:C}),z.data=G))}rc(_,t)})}function br(e,t,r){return{instance:e,listener:t,currentTarget:r}}function yi(e,t){for(var r=t+"Capture",i=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=ar(e,r),o!=null&&i.unshift(br(e,o,s)),o=ar(e,t),o!=null&&i.push(br(e,o,s))),e=e.return}return i}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ac(e,t,r,i,s){for(var o=t._reactName,d=[];r!==null&&r!==i;){var g=r,y=g.alternate,C=g.stateNode;if(y!==null&&y===i)break;g.tag===5&&C!==null&&(g=C,s?(y=ar(r,o),y!=null&&d.unshift(br(r,y,g))):s||(y=ar(r,o),y!=null&&d.push(br(r,y,g)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var sp=/\r\n?/g,op=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(op,"")}function wi(e,t,r){if(t=sc(t),sc(e)!==t&&r)throw Error(l(425))}function ji(){}var os=null,ls=null;function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,oc=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof oc<"u"?function(e){return oc.resolve(null).then(e).catch(up)}:us;function up(e){setTimeout(function(){throw e})}function ds(e,t){var r=t,i=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(i===0){e.removeChild(s),hr(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=s}while(r);hr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),St="__reactFiber$"+Ln,Sr="__reactProps$"+Ln,zt="__reactContainer$"+Ln,fs="__reactEvents$"+Ln,dp="__reactListeners$"+Ln,fp="__reactHandles$"+Ln;function dn(e){var t=e[St];if(t)return t;for(var r=e.parentNode;r;){if(t=r[zt]||r[St]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=lc(e);e!==null;){if(r=e[St])return r;e=lc(e)}return t}e=r,r=e.parentNode}return null}function Er(e){return e=e[St]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function ki(e){return e[Sr]||null}var ps=[],In=-1;function Gt(e){return{current:e}}function pe(e){0>In||(e.current=ps[In],ps[In]=null,In--)}function de(e,t){In++,ps[In]=e.current,e.current=t}var Qt={},Me=Gt(Qt),Ve=Gt(!1),fn=Qt;function Mn(e,t){var r=e.type.contextTypes;if(!r)return Qt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function qe(e){return e=e.childContextTypes,e!=null}function Ni(){pe(Ve),pe(Me)}function cc(e,t,r){if(Me.current!==Qt)throw Error(l(168));de(Me,t),de(Ve,r)}function uc(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var s in i)if(!(s in t))throw Error(l(108,ue(e)||"Unknown",s));return W({},r,i)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,fn=Me.current,de(Me,e),de(Ve,Ve.current),!0}function dc(e,t,r){var i=e.stateNode;if(!i)throw Error(l(169));r?(e=uc(e,t,fn),i.__reactInternalMemoizedMergedChildContext=e,pe(Ve),pe(Me),de(Me,e)):pe(Ve),de(Ve,r)}var _t=null,Si=!1,hs=!1;function fc(e){_t===null?_t=[e]:_t.push(e)}function pp(e){Si=!0,fc(e)}function Xt(){if(!hs&&_t!==null){hs=!0;var e=0,t=le;try{var r=_t;for(le=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}_t=null,Si=!1}catch(s){throw _t!==null&&(_t=_t.slice(e+1)),hl(Ma,Xt),s}finally{le=t,hs=!1}}return null}var Dn=[],An=0,Ei=null,Ci=0,it=[],at=0,pn=null,Lt=1,Ot="";function hn(e,t){Dn[An++]=Ci,Dn[An++]=Ei,Ei=e,Ci=t}function pc(e,t,r){it[at++]=Lt,it[at++]=Ot,it[at++]=pn,pn=e;var i=Lt;e=Ot;var s=32-ht(i)-1;i&=~(1<<s),r+=1;var o=32-ht(t)+s;if(30<o){var d=s-s%5;o=(i&(1<<d)-1).toString(32),i>>=d,s-=d,Lt=1<<32-ht(t)+s|r<<s|i,Ot=o+e}else Lt=1<<o|r<<s|i,Ot=e}function ms(e){e.return!==null&&(hn(e,1),pc(e,1,0))}function gs(e){for(;e===Ei;)Ei=Dn[--An],Dn[An]=null,Ci=Dn[--An],Dn[An]=null;for(;e===pn;)pn=it[--at],it[at]=null,Ot=it[--at],it[at]=null,Lt=it[--at],it[at]=null}var tt=null,nt=null,me=!1,gt=null;function hc(e,t){var r=ct(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,nt=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=pn!==null?{id:Lt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ct(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,tt=e,nt=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(me){var t=nt;if(t){var r=t;if(!mc(e,t)){if(xs(e))throw Error(l(418));t=Yt(r.nextSibling);var i=tt;t&&mc(e,t)?hc(i,r):(e.flags=e.flags&-4097|2,me=!1,tt=e)}}else{if(xs(e))throw Error(l(418));e.flags=e.flags&-4097|2,me=!1,tt=e}}}function gc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Ti(e){if(e!==tt)return!1;if(!me)return gc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cs(e.type,e.memoizedProps)),t&&(t=nt)){if(xs(e))throw xc(),Error(l(418));for(;t;)hc(e,t),t=Yt(t.nextSibling)}if(gc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){nt=Yt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=tt?Yt(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=nt;e;)e=Yt(e.nextSibling)}function Fn(){nt=tt=null,me=!1}function ys(e){gt===null?gt=[e]:gt.push(e)}var hp=se.ReactCurrentBatchConfig;function Cr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var i=r.stateNode}if(!i)throw Error(l(147,e));var s=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(d){var g=s.refs;d===null?delete g[o]:g[o]=d},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vc(e){var t=e._init;return t(e._payload)}function yc(e){function t(N,j){if(e){var S=N.deletions;S===null?(N.deletions=[j],N.flags|=16):S.push(j)}}function r(N,j){if(!e)return null;for(;j!==null;)t(N,j),j=j.sibling;return null}function i(N,j){for(N=new Map;j!==null;)j.key!==null?N.set(j.key,j):N.set(j.index,j),j=j.sibling;return N}function s(N,j){return N=sn(N,j),N.index=0,N.sibling=null,N}function o(N,j,S){return N.index=S,e?(S=N.alternate,S!==null?(S=S.index,S<j?(N.flags|=2,j):S):(N.flags|=2,j)):(N.flags|=1048576,j)}function d(N){return e&&N.alternate===null&&(N.flags|=2),N}function g(N,j,S,I){return j===null||j.tag!==6?(j=uo(S,N.mode,I),j.return=N,j):(j=s(j,S),j.return=N,j)}function y(N,j,S,I){var $=S.type;return $===we?z(N,j,S.props.children,I,S.key):j!==null&&(j.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ke&&vc($)===j.type)?(I=s(j,S.props),I.ref=Cr(N,j,S),I.return=N,I):(I=Zi(S.type,S.key,S.props,null,N.mode,I),I.ref=Cr(N,j,S),I.return=N,I)}function C(N,j,S,I){return j===null||j.tag!==4||j.stateNode.containerInfo!==S.containerInfo||j.stateNode.implementation!==S.implementation?(j=fo(S,N.mode,I),j.return=N,j):(j=s(j,S.children||[]),j.return=N,j)}function z(N,j,S,I,$){return j===null||j.tag!==7?(j=kn(S,N.mode,I,$),j.return=N,j):(j=s(j,S),j.return=N,j)}function _(N,j,S){if(typeof j=="string"&&j!==""||typeof j=="number")return j=uo(""+j,N.mode,S),j.return=N,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ce:return S=Zi(j.type,j.key,j.props,null,N.mode,S),S.ref=Cr(N,null,j),S.return=N,S;case ge:return j=fo(j,N.mode,S),j.return=N,j;case Ke:var I=j._init;return _(N,I(j._payload),S)}if(nr(j)||Q(j))return j=kn(j,N.mode,S,null),j.return=N,j;Pi(N,j)}return null}function P(N,j,S,I){var $=j!==null?j.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return $!==null?null:g(N,j,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ce:return S.key===$?y(N,j,S,I):null;case ge:return S.key===$?C(N,j,S,I):null;case Ke:return $=S._init,P(N,j,$(S._payload),I)}if(nr(S)||Q(S))return $!==null?null:z(N,j,S,I,null);Pi(N,S)}return null}function A(N,j,S,I,$){if(typeof I=="string"&&I!==""||typeof I=="number")return N=N.get(S)||null,g(j,N,""+I,$);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ce:return N=N.get(I.key===null?S:I.key)||null,y(j,N,I,$);case ge:return N=N.get(I.key===null?S:I.key)||null,C(j,N,I,$);case Ke:var Y=I._init;return A(N,j,S,Y(I._payload),$)}if(nr(I)||Q(I))return N=N.get(S)||null,z(j,N,I,$,null);Pi(j,I)}return null}function U(N,j,S,I){for(var $=null,Y=null,G=j,X=j=0,_e=null;G!==null&&X<S.length;X++){G.index>X?(_e=G,G=null):_e=G.sibling;var ae=P(N,G,S[X],I);if(ae===null){G===null&&(G=_e);break}e&&G&&ae.alternate===null&&t(N,G),j=o(ae,j,X),Y===null?$=ae:Y.sibling=ae,Y=ae,G=_e}if(X===S.length)return r(N,G),me&&hn(N,X),$;if(G===null){for(;X<S.length;X++)G=_(N,S[X],I),G!==null&&(j=o(G,j,X),Y===null?$=G:Y.sibling=G,Y=G);return me&&hn(N,X),$}for(G=i(N,G);X<S.length;X++)_e=A(G,N,X,S[X],I),_e!==null&&(e&&_e.alternate!==null&&G.delete(_e.key===null?X:_e.key),j=o(_e,j,X),Y===null?$=_e:Y.sibling=_e,Y=_e);return e&&G.forEach(function(on){return t(N,on)}),me&&hn(N,X),$}function B(N,j,S,I){var $=Q(S);if(typeof $!="function")throw Error(l(150));if(S=$.call(S),S==null)throw Error(l(151));for(var Y=$=null,G=j,X=j=0,_e=null,ae=S.next();G!==null&&!ae.done;X++,ae=S.next()){G.index>X?(_e=G,G=null):_e=G.sibling;var on=P(N,G,ae.value,I);if(on===null){G===null&&(G=_e);break}e&&G&&on.alternate===null&&t(N,G),j=o(on,j,X),Y===null?$=on:Y.sibling=on,Y=on,G=_e}if(ae.done)return r(N,G),me&&hn(N,X),$;if(G===null){for(;!ae.done;X++,ae=S.next())ae=_(N,ae.value,I),ae!==null&&(j=o(ae,j,X),Y===null?$=ae:Y.sibling=ae,Y=ae);return me&&hn(N,X),$}for(G=i(N,G);!ae.done;X++,ae=S.next())ae=A(G,N,X,ae.value,I),ae!==null&&(e&&ae.alternate!==null&&G.delete(ae.key===null?X:ae.key),j=o(ae,j,X),Y===null?$=ae:Y.sibling=ae,Y=ae);return e&&G.forEach(function(qp){return t(N,qp)}),me&&hn(N,X),$}function be(N,j,S,I){if(typeof S=="object"&&S!==null&&S.type===we&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ce:e:{for(var $=S.key,Y=j;Y!==null;){if(Y.key===$){if($=S.type,$===we){if(Y.tag===7){r(N,Y.sibling),j=s(Y,S.props.children),j.return=N,N=j;break e}}else if(Y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Ke&&vc($)===Y.type){r(N,Y.sibling),j=s(Y,S.props),j.ref=Cr(N,Y,S),j.return=N,N=j;break e}r(N,Y);break}else t(N,Y);Y=Y.sibling}S.type===we?(j=kn(S.props.children,N.mode,I,S.key),j.return=N,N=j):(I=Zi(S.type,S.key,S.props,null,N.mode,I),I.ref=Cr(N,j,S),I.return=N,N=I)}return d(N);case ge:e:{for(Y=S.key;j!==null;){if(j.key===Y)if(j.tag===4&&j.stateNode.containerInfo===S.containerInfo&&j.stateNode.implementation===S.implementation){r(N,j.sibling),j=s(j,S.children||[]),j.return=N,N=j;break e}else{r(N,j);break}else t(N,j);j=j.sibling}j=fo(S,N.mode,I),j.return=N,N=j}return d(N);case Ke:return Y=S._init,be(N,j,Y(S._payload),I)}if(nr(S))return U(N,j,S,I);if(Q(S))return B(N,j,S,I);Pi(N,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,j!==null&&j.tag===6?(r(N,j.sibling),j=s(j,S),j.return=N,N=j):(r(N,j),j=uo(S,N.mode,I),j.return=N,N=j),d(N)):r(N,j)}return be}var Hn=yc(!0),wc=yc(!1),Ri=Gt(null),zi=null,Wn=null,ws=null;function js(){ws=Wn=zi=null}function ks(e){var t=Ri.current;pe(Ri),e._currentValue=t}function Ns(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Un(e,t){zi=e,ws=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(zi===null)throw Error(l(308));Wn=e,zi.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var mn=null;function bs(e){mn===null?mn=[e]:mn.push(e)}function jc(e,t,r,i){var s=t.interleaved;return s===null?(r.next=r,bs(t)):(r.next=s.next,s.next=r),t.interleaved=r,It(e,i)}function It(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Jt=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,It(e,r)}return s=i.interleaved,s===null?(t.next=t,bs(i)):(t.next=s.next,s.next=t),i.interleaved=t,It(e,r)}function _i(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Fa(e,r)}}function Nc(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=d:o=o.next=d,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Li(e,t,r,i){var s=e.updateQueue;Jt=!1;var o=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var y=g,C=y.next;y.next=null,d===null?o=C:d.next=C,d=y;var z=e.alternate;z!==null&&(z=z.updateQueue,g=z.lastBaseUpdate,g!==d&&(g===null?z.firstBaseUpdate=C:g.next=C,z.lastBaseUpdate=y))}if(o!==null){var _=s.baseState;d=0,z=C=y=null,g=o;do{var P=g.lane,A=g.eventTime;if((i&P)===P){z!==null&&(z=z.next={eventTime:A,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var U=e,B=g;switch(P=t,A=r,B.tag){case 1:if(U=B.payload,typeof U=="function"){_=U.call(A,_,P);break e}_=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=B.payload,P=typeof U=="function"?U.call(A,_,P):U,P==null)break e;_=W({},_,P);break e;case 2:Jt=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,P=s.effects,P===null?s.effects=[g]:P.push(g))}else A={eventTime:A,lane:P,tag:g.tag,payload:g.payload,callback:g.callback,next:null},z===null?(C=z=A,y=_):z=z.next=A,d|=P;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;P=g,g=P.next,P.next=null,s.lastBaseUpdate=P,s.shared.pending=null}}while(!0);if(z===null&&(y=_),s.baseState=y,s.firstBaseUpdate=C,s.lastBaseUpdate=z,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);vn|=d,e.lanes=d,e.memoizedState=_}}function bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],s=i.callback;if(s!==null){if(i.callback=null,i=r,typeof s!="function")throw Error(l(191,s));s.call(i)}}}var Tr={},Et=Gt(Tr),Pr=Gt(Tr),Rr=Gt(Tr);function gn(e){if(e===Tr)throw Error(l(174));return e}function Es(e,t){switch(de(Rr,t),de(Pr,e),de(Et,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ca(t,e)}pe(Et),de(Et,t)}function Bn(){pe(Et),pe(Pr),pe(Rr)}function Sc(e){gn(Rr.current);var t=gn(Et.current),r=Ca(t,e.type);t!==r&&(de(Pr,e),de(Et,r))}function Cs(e){Pr.current===e&&(pe(Et),pe(Pr))}var xe=Gt(0);function Oi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function Ps(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var Ii=se.ReactCurrentDispatcher,Rs=se.ReactCurrentBatchConfig,xn=0,ve=null,Ce=null,Re=null,Mi=!1,zr=!1,_r=0,mp=0;function De(){throw Error(l(321))}function zs(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!mt(e[r],t[r]))return!1;return!0}function _s(e,t,r,i,s,o){if(xn=o,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?yp:wp,e=r(i,s),zr){o=0;do{if(zr=!1,_r=0,25<=o)throw Error(l(301));o+=1,Re=Ce=null,t.updateQueue=null,Ii.current=jp,e=r(i,s)}while(zr)}if(Ii.current=Fi,t=Ce!==null&&Ce.next!==null,xn=0,Re=Ce=ve=null,Mi=!1,t)throw Error(l(300));return e}function Ls(){var e=_r!==0;return _r=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function ot(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,Ce=e;else{if(e===null)throw Error(l(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function Lr(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=Ce,s=i.baseQueue,o=r.pending;if(o!==null){if(s!==null){var d=s.next;s.next=o.next,o.next=d}i.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,i=i.baseState;var g=d=null,y=null,C=o;do{var z=C.lane;if((xn&z)===z)y!==null&&(y=y.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),i=C.hasEagerState?C.eagerState:e(i,C.action);else{var _={lane:z,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};y===null?(g=y=_,d=i):y=y.next=_,ve.lanes|=z,vn|=z}C=C.next}while(C!==null&&C!==o);y===null?d=i:y.next=g,mt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseState=d,t.baseQueue=y,r.lastRenderedState=i}if(e=r.interleaved,e!==null){s=e;do o=s.lane,ve.lanes|=o,vn|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Is(e){var t=ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var d=s=s.next;do o=e(o,d.action),d=d.next;while(d!==s);mt(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,i]}function Ec(){}function Cc(e,t){var r=ve,i=ot(),s=t(),o=!mt(i.memoizedState,s);if(o&&(i.memoizedState=s,Ye=!0),i=i.queue,Ms(Rc.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(r.flags|=2048,Or(9,Pc.bind(null,r,i,s,t),void 0,null),ze===null)throw Error(l(349));(xn&30)!==0||Tc(r,t,s)}return s}function Tc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pc(e,t,r,i){t.value=r,t.getSnapshot=i,zc(t)&&_c(e)}function Rc(e,t,r){return r(function(){zc(t)&&_c(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!mt(e,r)}catch{return!0}}function _c(e){var t=It(e,1);t!==null&&wt(t,e,1,-1)}function Lc(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=vp.bind(null,ve,e),[t.memoizedState,e]}function Or(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Oc(){return ot().memoizedState}function Di(e,t,r,i){var s=Ct();ve.flags|=e,s.memoizedState=Or(1|t,r,void 0,i===void 0?null:i)}function Ai(e,t,r,i){var s=ot();i=i===void 0?null:i;var o=void 0;if(Ce!==null){var d=Ce.memoizedState;if(o=d.destroy,i!==null&&zs(i,d.deps)){s.memoizedState=Or(t,r,o,i);return}}ve.flags|=e,s.memoizedState=Or(1|t,r,o,i)}function Ic(e,t){return Di(8390656,8,e,t)}function Ms(e,t){return Ai(2048,8,e,t)}function Mc(e,t){return Ai(4,2,e,t)}function Dc(e,t){return Ai(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fc(e,t,r){return r=r!=null?r.concat([e]):null,Ai(4,4,Ac.bind(null,t,e),r)}function Ds(){}function Hc(e,t){var r=ot();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&zs(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Wc(e,t){var r=ot();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&zs(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function Uc(e,t,r){return(xn&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r):(mt(r,t)||(r=vl(),ve.lanes|=r,vn|=r,e.baseState=!0),t)}function gp(e,t){var r=le;le=r!==0&&4>r?r:4,e(!0);var i=Rs.transition;Rs.transition={};try{e(!1),t()}finally{le=r,Rs.transition=i}}function Bc(){return ot().memoizedState}function xp(e,t,r){var i=rn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},$c(e))Kc(t,r);else if(r=jc(e,t,r,i),r!==null){var s=Be();wt(r,e,i,s),Vc(r,t,i)}}function vp(e,t,r){var i=rn(e),s={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if($c(e))Kc(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,g=o(d,r);if(s.hasEagerState=!0,s.eagerState=g,mt(g,d)){var y=t.interleaved;y===null?(s.next=s,bs(t)):(s.next=y.next,y.next=s),t.interleaved=s;return}}catch{}r=jc(e,t,s,i),r!==null&&(s=Be(),wt(r,e,i,s),Vc(r,t,i))}}function $c(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Kc(e,t){zr=Mi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Vc(e,t,r){if((r&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Fa(e,r)}}var Fi={readContext:st,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},yp={readContext:st,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Ic,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Di(4194308,4,Ac.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Di(4194308,4,e,t)},useInsertionEffect:function(e,t){return Di(4,2,e,t)},useMemo:function(e,t){var r=Ct();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=Ct();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=xp.bind(null,ve,e),[i.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Lc,useDebugValue:Ds,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Lc(!1),t=e[0];return e=gp.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=ve,s=Ct();if(me){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),ze===null)throw Error(l(349));(xn&30)!==0||Tc(i,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Ic(Rc.bind(null,i,o,e),[e]),i.flags|=2048,Or(9,Pc.bind(null,i,o,r,t),void 0,null),r},useId:function(){var e=Ct(),t=ze.identifierPrefix;if(me){var r=Ot,i=Lt;r=(i&~(1<<32-ht(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=_r++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=mp++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wp={readContext:st,useCallback:Hc,useContext:st,useEffect:Ms,useImperativeHandle:Fc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Wc,useReducer:Os,useRef:Oc,useState:function(){return Os(Lr)},useDebugValue:Ds,useDeferredValue:function(e){var t=ot();return Uc(t,Ce.memoizedState,e)},useTransition:function(){var e=Os(Lr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:Cc,useId:Bc,unstable_isNewReconciler:!1},jp={readContext:st,useCallback:Hc,useContext:st,useEffect:Ms,useImperativeHandle:Fc,useInsertionEffect:Mc,useLayoutEffect:Dc,useMemo:Wc,useReducer:Is,useRef:Oc,useState:function(){return Is(Lr)},useDebugValue:Ds,useDeferredValue:function(e){var t=ot();return Ce===null?t.memoizedState=e:Uc(t,Ce.memoizedState,e)},useTransition:function(){var e=Is(Lr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ec,useSyncExternalStore:Cc,useId:Bc,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function As(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:W({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hi={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Be(),s=rn(e),o=Mt(i,s);o.payload=t,r!=null&&(o.callback=r),t=Zt(e,o,s),t!==null&&(wt(t,e,s,i),_i(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Be(),s=rn(e),o=Mt(i,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Zt(e,o,s),t!==null&&(wt(t,e,s,i),_i(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Be(),i=rn(e),s=Mt(r,i);s.tag=2,t!=null&&(s.callback=t),t=Zt(e,s,i),t!==null&&(wt(t,e,i,r),_i(t,e,i))}};function qc(e,t,r,i,s,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,d):t.prototype&&t.prototype.isPureReactComponent?!wr(r,i)||!wr(s,o):!0}function Yc(e,t,r){var i=!1,s=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=st(o):(s=qe(t)?fn:Me.current,i=t.contextTypes,o=(i=i!=null)?Mn(e,s):Qt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gc(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function Fs(e,t,r,i){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},Ss(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=st(o):(o=qe(t)?fn:Me.current,s.context=Mn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(As(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hi.enqueueReplaceState(s,s.state,null),Li(e,r,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var r="",i=t;do r+=re(i),i=i.return;while(i);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Hs(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ws(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Qc(e,t,r){r=Mt(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){qi||(qi=!0,no=i),Ws(e,t)},r}function Xc(e,t,r){r=Mt(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=t.value;r.payload=function(){return i(s)},r.callback=function(){Ws(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ws(e,t),typeof i!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function Jc(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new kp;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(r)||(s.add(r),e=Mp.bind(null,e,t,r),t.then(e,e))}function Zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eu(e,t,r,i,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Mt(-1,1),t.tag=2,Zt(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Np=se.ReactCurrentOwner,Ye=!1;function Ue(e,t,r,i){t.child=e===null?wc(t,null,r,i):Hn(t,e.child,r,i)}function tu(e,t,r,i,s){r=r.render;var o=t.ref;return Un(t,s),i=_s(e,t,r,i,o,s),r=Ls(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Dt(e,t,s)):(me&&r&&ms(t),t.flags|=1,Ue(e,t,i,s),t.child)}function nu(e,t,r,i,s){if(e===null){var o=r.type;return typeof o=="function"&&!co(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,ru(e,t,o,i,s)):(e=Zi(r.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&s)===0){var d=o.memoizedProps;if(r=r.compare,r=r!==null?r:wr,r(d,i)&&e.ref===t.ref)return Dt(e,t,s)}return t.flags|=1,e=sn(o,i),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,r,i,s){if(e!==null){var o=e.memoizedProps;if(wr(o,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=o,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,Dt(e,t,s)}return Us(e,t,r,i,s)}function iu(e,t,r){var i=t.pendingProps,s=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Vn,rt),rt|=r;else{if((r&1073741824)===0)return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Vn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:r,de(Vn,rt),rt|=i}else o!==null?(i=o.baseLanes|r,t.memoizedState=null):i=r,de(Vn,rt),rt|=i;return Ue(e,t,s,r),t.child}function au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Us(e,t,r,i,s){var o=qe(r)?fn:Me.current;return o=Mn(t,o),Un(t,s),r=_s(e,t,r,i,o,s),i=Ls(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Dt(e,t,s)):(me&&i&&ms(t),t.flags|=1,Ue(e,t,r,s),t.child)}function su(e,t,r,i,s){if(qe(r)){var o=!0;bi(t)}else o=!1;if(Un(t,s),t.stateNode===null)Ui(e,t),Yc(t,r,i),Fs(t,r,i,s),i=!0;else if(e===null){var d=t.stateNode,g=t.memoizedProps;d.props=g;var y=d.context,C=r.contextType;typeof C=="object"&&C!==null?C=st(C):(C=qe(r)?fn:Me.current,C=Mn(t,C));var z=r.getDerivedStateFromProps,_=typeof z=="function"||typeof d.getSnapshotBeforeUpdate=="function";_||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==i||y!==C)&&Gc(t,d,i,C),Jt=!1;var P=t.memoizedState;d.state=P,Li(t,i,d,s),y=t.memoizedState,g!==i||P!==y||Ve.current||Jt?(typeof z=="function"&&(As(t,r,z,i),y=t.memoizedState),(g=Jt||qc(t,r,g,i,P,y,C))?(_||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=y),d.props=i,d.state=y,d.context=C,i=g):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,kc(e,t),g=t.memoizedProps,C=t.type===t.elementType?g:xt(t.type,g),d.props=C,_=t.pendingProps,P=d.context,y=r.contextType,typeof y=="object"&&y!==null?y=st(y):(y=qe(r)?fn:Me.current,y=Mn(t,y));var A=r.getDerivedStateFromProps;(z=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==_||P!==y)&&Gc(t,d,i,y),Jt=!1,P=t.memoizedState,d.state=P,Li(t,i,d,s);var U=t.memoizedState;g!==_||P!==U||Ve.current||Jt?(typeof A=="function"&&(As(t,r,A,i),U=t.memoizedState),(C=Jt||qc(t,r,C,i,P,U,y)||!1)?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,U,y),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,U,y)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=U),d.props=i,d.state=U,d.context=y,i=C):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),i=!1)}return Bs(e,t,r,i,o,s)}function Bs(e,t,r,i,s,o){au(e,t);var d=(t.flags&128)!==0;if(!i&&!d)return s&&dc(t,r,!1),Dt(e,t,o);i=t.stateNode,Np.current=t;var g=d&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&d?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,g,o)):Ue(e,t,g,o),t.memoizedState=i.state,s&&dc(t,r,!0),t.child}function ou(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),Es(e,t.containerInfo)}function lu(e,t,r,i,s){return Fn(),ys(s),t.flags|=256,Ue(e,t,r,i),t.child}var $s={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function cu(e,t,r){var i=t.pendingProps,s=xe.current,o=!1,d=(t.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),de(xe,s&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=i.children,e=i.fallback,o?(i=t.mode,o=t.child,d={mode:"hidden",children:d},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=ea(d,i,0,null),e=kn(e,i,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ks(r),t.memoizedState=$s,e):Vs(t,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return bp(e,t,d,i,g,s,r);if(o){o=i.fallback,d=t.mode,s=e.child,g=s.sibling;var y={mode:"hidden",children:i.children};return(d&1)===0&&t.child!==s?(i=t.child,i.childLanes=0,i.pendingProps=y,t.deletions=null):(i=sn(s,y),i.subtreeFlags=s.subtreeFlags&14680064),g!==null?o=sn(g,o):(o=kn(o,d,r,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,d=e.child.memoizedState,d=d===null?Ks(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~r,t.memoizedState=$s,i}return o=e.child,e=o.sibling,i=sn(o,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Vs(e,t){return t=ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,r,i){return i!==null&&ys(i),Hn(t,e.child,null,r),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bp(e,t,r,i,s,o,d){if(r)return t.flags&256?(t.flags&=-257,i=Hs(Error(l(422))),Wi(e,t,d,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,s=t.mode,i=ea({mode:"visible",children:i.children},s,0,null),o=kn(o,s,d,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,(t.mode&1)!==0&&Hn(t,e.child,null,d),t.child.memoizedState=Ks(d),t.memoizedState=$s,o);if((t.mode&1)===0)return Wi(e,t,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var g=i.dgst;return i=g,o=Error(l(419)),i=Hs(o,i,void 0),Wi(e,t,d,i)}if(g=(d&e.childLanes)!==0,Ye||g){if(i=ze,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(i.suspendedLanes|d))!==0?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,It(e,s),wt(i,e,s,-1))}return lo(),i=Hs(Error(l(421))),Wi(e,t,d,i)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Dp.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,nt=Yt(s.nextSibling),tt=t,me=!0,gt=null,e!==null&&(it[at++]=Lt,it[at++]=Ot,it[at++]=pn,Lt=e.id,Ot=e.overflow,pn=t),t=Vs(t,i.children),t.flags|=4096,t)}function uu(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ns(e.return,t,r)}function qs(e,t,r,i,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=r,o.tailMode=s)}function du(e,t,r){var i=t.pendingProps,s=i.revealOrder,o=i.tail;if(Ue(e,t,i.children,r),i=xe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,r,t);else if(e.tag===19)uu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(de(xe,i),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&Oi(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),qs(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Oi(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}qs(t,!0,r,null,o);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=sn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=sn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Sp(e,t,r){switch(t.tag){case 3:ou(t),Fn();break;case 5:Sc(t);break;case 1:qe(t.type)&&bi(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,s=t.memoizedProps.value;de(Ri,i._currentValue),i._currentValue=s;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(de(xe,xe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?cu(e,t,r):(de(xe,xe.current&1),e=Dt(e,t,r),e!==null?e.sibling:null);de(xe,xe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,(e.flags&128)!==0){if(i)return du(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(xe,xe.current),i)break;return null;case 22:case 23:return t.lanes=0,iu(e,t,r)}return Dt(e,t,r)}var fu,Ys,pu,hu;fu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ys=function(){},pu=function(e,t,r,i){var s=e.memoizedProps;if(s!==i){e=t.stateNode,gn(Et.current);var o=null;switch(r){case"input":s=Na(e,s),i=Na(e,i),o=[];break;case"select":s=W({},s,{value:void 0}),i=W({},i,{value:void 0}),o=[];break;case"textarea":s=Ea(e,s),i=Ea(e,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ji)}Ta(r,i);var d;r=null;for(C in s)if(!i.hasOwnProperty(C)&&s.hasOwnProperty(C)&&s[C]!=null)if(C==="style"){var g=s[C];for(d in g)g.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(f.hasOwnProperty(C)?o||(o=[]):(o=o||[]).push(C,null));for(C in i){var y=i[C];if(g=s?.[C],i.hasOwnProperty(C)&&y!==g&&(y!=null||g!=null))if(C==="style")if(g){for(d in g)!g.hasOwnProperty(d)||y&&y.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in y)y.hasOwnProperty(d)&&g[d]!==y[d]&&(r||(r={}),r[d]=y[d])}else r||(o||(o=[]),o.push(C,r)),r=y;else C==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,g=g?g.__html:void 0,y!=null&&g!==y&&(o=o||[]).push(C,y)):C==="children"?typeof y!="string"&&typeof y!="number"||(o=o||[]).push(C,""+y):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(f.hasOwnProperty(C)?(y!=null&&C==="onScroll"&&fe("scroll",e),o||g===y||(o=[])):(o=o||[]).push(C,y))}r&&(o=o||[]).push("style",r);var C=o;(t.updateQueue=C)&&(t.flags|=4)}},hu=function(e,t,r,i){r!==i&&(t.flags|=4)};function Ir(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Ep(e,t,r){var i=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return qe(t.type)&&Ni(),Ae(t),null;case 3:return i=t.stateNode,Bn(),pe(Ve),pe(Me),Ps(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(ao(gt),gt=null))),Ys(e,t),Ae(t),null;case 5:Cs(t);var s=gn(Rr.current);if(r=t.type,e!==null&&t.stateNode!=null)pu(e,t,r,i,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ae(t),null}if(e=gn(Et.current),Ti(t)){i=t.stateNode,r=t.type;var o=t.memoizedProps;switch(i[St]=t,i[Sr]=o,e=(t.mode&1)!==0,r){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(s=0;s<kr.length;s++)fe(kr[s],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":Yo(i,o),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},fe("invalid",i);break;case"textarea":Xo(i,o),fe("invalid",i)}Ta(r,o),s=null;for(var d in o)if(o.hasOwnProperty(d)){var g=o[d];d==="children"?typeof g=="string"?i.textContent!==g&&(o.suppressHydrationWarning!==!0&&wi(i.textContent,g,e),s=["children",g]):typeof g=="number"&&i.textContent!==""+g&&(o.suppressHydrationWarning!==!0&&wi(i.textContent,g,e),s=["children",""+g]):f.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&fe("scroll",i)}switch(r){case"input":Xr(i),Qo(i,o,!0);break;case"textarea":Xr(i),Zo(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ji)}i=s,t.updateQueue=i,i!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=el(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(r,{is:i.is}):(e=d.createElement(r),r==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,r),e[St]=t,e[Sr]=i,fu(e,t,!1,!1),t.stateNode=e;e:{switch(d=Pa(r,i),r){case"dialog":fe("cancel",e),fe("close",e),s=i;break;case"iframe":case"object":case"embed":fe("load",e),s=i;break;case"video":case"audio":for(s=0;s<kr.length;s++)fe(kr[s],e);s=i;break;case"source":fe("error",e),s=i;break;case"img":case"image":case"link":fe("error",e),fe("load",e),s=i;break;case"details":fe("toggle",e),s=i;break;case"input":Yo(e,i),s=Na(e,i),fe("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=W({},i,{value:void 0}),fe("invalid",e);break;case"textarea":Xo(e,i),s=Ea(e,i),fe("invalid",e);break;default:s=i}Ta(r,s),g=s;for(o in g)if(g.hasOwnProperty(o)){var y=g[o];o==="style"?rl(e,y):o==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&tl(e,y)):o==="children"?typeof y=="string"?(r!=="textarea"||y!=="")&&rr(e,y):typeof y=="number"&&rr(e,""+y):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(f.hasOwnProperty(o)?y!=null&&o==="onScroll"&&fe("scroll",e):y!=null&&J(e,o,y,d))}switch(r){case"input":Xr(e),Qo(e,i,!1);break;case"textarea":Xr(e),Zo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+oe(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?bn(e,!!i.multiple,o,!1):i.defaultValue!=null&&bn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ji)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)hu(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(r=gn(Rr.current),gn(Et.current),Ti(t)){if(i=t.stateNode,r=t.memoizedProps,i[St]=t,(o=i.nodeValue!==r)&&(e=tt,e!==null))switch(e.tag){case 3:wi(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(i.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[St]=t,t.stateNode=i}return Ae(t),null;case 13:if(pe(xe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&nt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)xc(),Fn(),t.flags|=98560,o=!1;else if(o=Ti(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[St]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else gt!==null&&(ao(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Te===0&&(Te=3):lo())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return Bn(),Ys(e,t),e===null&&Nr(t.stateNode.containerInfo),Ae(t),null;case 10:return ks(t.type._context),Ae(t),null;case 17:return qe(t.type)&&Ni(),Ae(t),null;case 19:if(pe(xe),o=t.memoizedState,o===null)return Ae(t),null;if(i=(t.flags&128)!==0,d=o.rendering,d===null)if(i)Ir(o,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Oi(e),d!==null){for(t.flags|=128,Ir(o,!1),i=d.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)o=r,e=i,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return de(xe,xe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ne()>qn&&(t.flags|=128,i=!0,Ir(o,!1),t.lanes=4194304)}else{if(!i)if(e=Oi(d),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!me)return Ae(t),null}else 2*Ne()-o.renderingStartTime>qn&&r!==1073741824&&(t.flags|=128,i=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(r=o.last,r!==null?r.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ne(),t.sibling=null,r=xe.current,de(xe,i?r&1|2:r&1),t):(Ae(t),null);case 22:case 23:return oo(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(rt&1073741824)!==0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Cp(e,t){switch(gs(t),t.tag){case 1:return qe(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),pe(Ve),pe(Me),Ps(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Cs(t),null;case 13:if(pe(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(xe),null;case 4:return Bn(),null;case 10:return ks(t.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var Bi=!1,Fe=!1,Tp=typeof WeakSet=="function"?WeakSet:Set,H=null;function Kn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ke(e,t,i)}else r.current=null}function Gs(e,t,r){try{r()}catch(i){ke(e,t,i)}}var mu=!1;function Pp(e,t){if(os=ci,e=ql(),Za(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var d=0,g=-1,y=-1,C=0,z=0,_=e,P=null;t:for(;;){for(var A;_!==r||s!==0&&_.nodeType!==3||(g=d+s),_!==o||i!==0&&_.nodeType!==3||(y=d+i),_.nodeType===3&&(d+=_.nodeValue.length),(A=_.firstChild)!==null;)P=_,_=A;for(;;){if(_===e)break t;if(P===r&&++C===s&&(g=d),P===o&&++z===i&&(y=d),(A=_.nextSibling)!==null)break;_=P,P=_.parentNode}_=A}r=g===-1||y===-1?null:{start:g,end:y}}else r=null}r=r||{start:0,end:0}}else r=null;for(ls={focusedElem:e,selectionRange:r},ci=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var B=U.memoizedProps,be=U.memoizedState,N=t.stateNode,j=N.getSnapshotBeforeUpdate(t.elementType===t.type?B:xt(t.type,B),be);N.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(I){ke(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return U=mu,mu=!1,U}function Mr(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Gs(t,r,o)}s=s.next}while(s!==i)}}function $i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Qs(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function gu(e){var t=e.alternate;t!==null&&(e.alternate=null,gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Sr],delete t[fs],delete t[dp],delete t[fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xu(e){return e.tag===5||e.tag===3||e.tag===4}function vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ji));else if(i!==4&&(e=e.child,e!==null))for(Xs(e,t,r),e=e.sibling;e!==null;)Xs(e,t,r),e=e.sibling}function Js(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Js(e,t,r),e=e.sibling;e!==null;)Js(e,t,r),e=e.sibling}var Oe=null,vt=!1;function en(e,t,r){for(r=r.child;r!==null;)yu(e,t,r),r=r.sibling}function yu(e,t,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ri,r)}catch{}switch(r.tag){case 5:Fe||Kn(r,t);case 6:var i=Oe,s=vt;Oe=null,en(e,t,r),Oe=i,vt=s,Oe!==null&&(vt?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(vt?(e=Oe,r=r.stateNode,e.nodeType===8?ds(e.parentNode,r):e.nodeType===1&&ds(e,r),hr(e)):ds(Oe,r.stateNode));break;case 4:i=Oe,s=vt,Oe=r.stateNode.containerInfo,vt=!0,en(e,t,r),Oe=i,vt=s;break;case 0:case 11:case 14:case 15:if(!Fe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&Gs(r,t,d),s=s.next}while(s!==i)}en(e,t,r);break;case 1:if(!Fe&&(Kn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(g){ke(r,t,g)}en(e,t,r);break;case 21:en(e,t,r);break;case 22:r.mode&1?(Fe=(i=Fe)||r.memoizedState!==null,en(e,t,r),Fe=i):en(e,t,r);break;default:en(e,t,r)}}function wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Tp),t.forEach(function(i){var s=Ap.bind(null,e,i);r.has(i)||(r.add(i),i.then(s,s))})}}function yt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var s=r[i];try{var o=e,d=t,g=d;e:for(;g!==null;){switch(g.tag){case 5:Oe=g.stateNode,vt=!1;break e;case 3:Oe=g.stateNode.containerInfo,vt=!0;break e;case 4:Oe=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Oe===null)throw Error(l(160));yu(o,d,s),Oe=null,vt=!1;var y=s.alternate;y!==null&&(y.return=null),s.return=null}catch(C){ke(s,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ju(t,e),t=t.sibling}function ju(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),Tt(e),i&4){try{Mr(3,e,e.return),$i(3,e)}catch(B){ke(e,e.return,B)}try{Mr(5,e,e.return)}catch(B){ke(e,e.return,B)}}break;case 1:yt(t,e),Tt(e),i&512&&r!==null&&Kn(r,r.return);break;case 5:if(yt(t,e),Tt(e),i&512&&r!==null&&Kn(r,r.return),e.flags&32){var s=e.stateNode;try{rr(s,"")}catch(B){ke(e,e.return,B)}}if(i&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,d=r!==null?r.memoizedProps:o,g=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{g==="input"&&o.type==="radio"&&o.name!=null&&Go(s,o),Pa(g,d);var C=Pa(g,o);for(d=0;d<y.length;d+=2){var z=y[d],_=y[d+1];z==="style"?rl(s,_):z==="dangerouslySetInnerHTML"?tl(s,_):z==="children"?rr(s,_):J(s,z,_,C)}switch(g){case"input":ba(s,o);break;case"textarea":Jo(s,o);break;case"select":var P=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?bn(s,!!o.multiple,A,!1):P!==!!o.multiple&&(o.defaultValue!=null?bn(s,!!o.multiple,o.defaultValue,!0):bn(s,!!o.multiple,o.multiple?[]:"",!1))}s[Sr]=o}catch(B){ke(e,e.return,B)}}break;case 6:if(yt(t,e),Tt(e),i&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(B){ke(e,e.return,B)}}break;case 3:if(yt(t,e),Tt(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(B){ke(e,e.return,B)}break;case 4:yt(t,e),Tt(e);break;case 13:yt(t,e),Tt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(to=Ne())),i&4&&wu(e);break;case 22:if(z=r!==null&&r.memoizedState!==null,e.mode&1?(Fe=(C=Fe)||z,yt(t,e),Fe=C):yt(t,e),Tt(e),i&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!z&&(e.mode&1)!==0)for(H=e,z=e.child;z!==null;){for(_=H=z;H!==null;){switch(P=H,A=P.child,P.tag){case 0:case 11:case 14:case 15:Mr(4,P,P.return);break;case 1:Kn(P,P.return);var U=P.stateNode;if(typeof U.componentWillUnmount=="function"){i=P,r=P.return;try{t=i,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(B){ke(i,r,B)}}break;case 5:Kn(P,P.return);break;case 22:if(P.memoizedState!==null){bu(_);continue}}A!==null?(A.return=P,H=A):bu(_)}z=z.sibling}e:for(z=null,_=e;;){if(_.tag===5){if(z===null){z=_;try{s=_.stateNode,C?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(g=_.stateNode,y=_.memoizedProps.style,d=y!=null&&y.hasOwnProperty("display")?y.display:null,g.style.display=nl("display",d))}catch(B){ke(e,e.return,B)}}}else if(_.tag===6){if(z===null)try{_.stateNode.nodeValue=C?"":_.memoizedProps}catch(B){ke(e,e.return,B)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;z===_&&(z=null),_=_.return}z===_&&(z=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yt(t,e),Tt(e),i&4&&wu(e);break;case 21:break;default:yt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(xu(r)){var i=r;break e}r=r.return}throw Error(l(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(rr(s,""),i.flags&=-33);var o=vu(e);Js(e,o,s);break;case 3:case 4:var d=i.stateNode.containerInfo,g=vu(e);Xs(e,g,d);break;default:throw Error(l(161))}}catch(y){ke(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rp(e,t,r){H=e,ku(e)}function ku(e,t,r){for(var i=(e.mode&1)!==0;H!==null;){var s=H,o=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||Bi;if(!d){var g=s.alternate,y=g!==null&&g.memoizedState!==null||Fe;g=Bi;var C=Fe;if(Bi=d,(Fe=y)&&!C)for(H=s;H!==null;)d=H,y=d.child,d.tag===22&&d.memoizedState!==null?Su(s):y!==null?(y.return=d,H=y):Su(s);for(;o!==null;)H=o,ku(o),o=o.sibling;H=s,Bi=g,Fe=C}Nu(e)}else(s.subtreeFlags&8772)!==0&&o!==null?(o.return=s,H=o):Nu(e)}}function Nu(e){for(;H!==null;){var t=H;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||$i(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Fe)if(r===null)i.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:xt(t.type,r.memoizedProps);i.componentDidUpdate(s,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bc(t,o,i);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}bc(t,d,r)}break;case 5:var g=t.stateNode;if(r===null&&t.flags&4){r=g;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&r.focus();break;case"img":y.src&&(r.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var z=C.memoizedState;if(z!==null){var _=z.dehydrated;_!==null&&hr(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Fe||t.flags&512&&Qs(t)}catch(P){ke(t,t.return,P)}}if(t===e){H=null;break}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function bu(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var r=t.sibling;if(r!==null){r.return=t.return,H=r;break}H=t.return}}function Su(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{$i(4,t)}catch(y){ke(t,r,y)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var s=t.return;try{i.componentDidMount()}catch(y){ke(t,s,y)}}var o=t.return;try{Qs(t)}catch(y){ke(t,o,y)}break;case 5:var d=t.return;try{Qs(t)}catch(y){ke(t,d,y)}}}catch(y){ke(t,t.return,y)}if(t===e){H=null;break}var g=t.sibling;if(g!==null){g.return=t.return,H=g;break}H=t.return}}var zp=Math.ceil,Ki=se.ReactCurrentDispatcher,Zs=se.ReactCurrentOwner,lt=se.ReactCurrentBatchConfig,ne=0,ze=null,Se=null,Ie=0,rt=0,Vn=Gt(0),Te=0,Dr=null,vn=0,Vi=0,eo=0,Ar=null,Ge=null,to=0,qn=1/0,At=null,qi=!1,no=null,tn=null,Yi=!1,nn=null,Gi=0,Fr=0,ro=null,Qi=-1,Xi=0;function Be(){return(ne&6)!==0?Ne():Qi!==-1?Qi:Qi=Ne()}function rn(e){return(e.mode&1)===0?1:(ne&2)!==0&&Ie!==0?Ie&-Ie:hp.transition!==null?(Xi===0&&(Xi=vl()),Xi):(e=le,e!==0||(e=window.event,e=e===void 0?16:Cl(e.type)),e)}function wt(e,t,r,i){if(50<Fr)throw Fr=0,ro=null,Error(l(185));cr(e,r,i),((ne&2)===0||e!==ze)&&(e===ze&&((ne&2)===0&&(Vi|=r),Te===4&&an(e,Ie)),Qe(e,i),r===1&&ne===0&&(t.mode&1)===0&&(qn=Ne()+500,Si&&Xt()))}function Qe(e,t){var r=e.callbackNode;hf(e,t);var i=si(e,e===ze?Ie:0);if(i===0)r!==null&&ml(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&ml(r),t===1)e.tag===0?pp(Cu.bind(null,e)):fc(Cu.bind(null,e)),cp(function(){(ne&6)===0&&Xt()}),r=null;else{switch(yl(i)){case 1:r=Ma;break;case 4:r=gl;break;case 16:r=ni;break;case 536870912:r=xl;break;default:r=ni}r=Iu(r,Eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Eu(e,t){if(Qi=-1,Xi=0,(ne&6)!==0)throw Error(l(327));var r=e.callbackNode;if(Yn()&&e.callbackNode!==r)return null;var i=si(e,e===ze?Ie:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ji(e,i);else{t=i;var s=ne;ne|=2;var o=Pu();(ze!==e||Ie!==t)&&(At=null,qn=Ne()+500,wn(e,t));do try{Op();break}catch(g){Tu(e,g)}while(!0);js(),Ki.current=o,ne=s,Se!==null?t=0:(ze=null,Ie=0,t=Te)}if(t!==0){if(t===2&&(s=Da(e),s!==0&&(i=s,t=io(e,s))),t===1)throw r=Dr,wn(e,0),an(e,i),Qe(e,Ne()),r;if(t===6)an(e,i);else{if(s=e.current.alternate,(i&30)===0&&!_p(s)&&(t=Ji(e,i),t===2&&(o=Da(e),o!==0&&(i=o,t=io(e,o))),t===1))throw r=Dr,wn(e,0),an(e,i),Qe(e,Ne()),r;switch(e.finishedWork=s,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:jn(e,Ge,At);break;case 3:if(an(e,i),(i&130023424)===i&&(t=to+500-Ne(),10<t)){if(si(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){Be(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=us(jn.bind(null,e,Ge,At),t);break}jn(e,Ge,At);break;case 4:if(an(e,i),(i&4194240)===i)break;for(t=e.eventTimes,s=-1;0<i;){var d=31-ht(i);o=1<<d,d=t[d],d>s&&(s=d),i&=~o}if(i=s,i=Ne()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zp(i/1960))-i,10<i){e.timeoutHandle=us(jn.bind(null,e,Ge,At),i);break}jn(e,Ge,At);break;case 5:jn(e,Ge,At);break;default:throw Error(l(329))}}}return Qe(e,Ne()),e.callbackNode===r?Eu.bind(null,e):null}function io(e,t){var r=Ar;return e.current.memoizedState.isDehydrated&&(wn(e,t).flags|=256),e=Ji(e,t),e!==2&&(t=Ge,Ge=r,t!==null&&ao(t)),e}function ao(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function _p(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var s=r[i],o=s.getSnapshot;s=s.value;try{if(!mt(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~eo,t&=~Vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ht(t),i=1<<r;e[r]=-1,t&=~i}}function Cu(e){if((ne&6)!==0)throw Error(l(327));Yn();var t=si(e,0);if((t&1)===0)return Qe(e,Ne()),null;var r=Ji(e,t);if(e.tag!==0&&r===2){var i=Da(e);i!==0&&(t=i,r=io(e,i))}if(r===1)throw r=Dr,wn(e,0),an(e,t),Qe(e,Ne()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Ge,At),Qe(e,Ne()),null}function so(e,t){var r=ne;ne|=1;try{return e(t)}finally{ne=r,ne===0&&(qn=Ne()+500,Si&&Xt())}}function yn(e){nn!==null&&nn.tag===0&&(ne&6)===0&&Yn();var t=ne;ne|=1;var r=lt.transition,i=le;try{if(lt.transition=null,le=1,e)return e()}finally{le=i,lt.transition=r,ne=t,(ne&6)===0&&Xt()}}function oo(){rt=Vn.current,pe(Vn)}function wn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,lp(r)),Se!==null)for(r=Se.return;r!==null;){var i=r;switch(gs(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ni();break;case 3:Bn(),pe(Ve),pe(Me),Ps();break;case 5:Cs(i);break;case 4:Bn();break;case 13:pe(xe);break;case 19:pe(xe);break;case 10:ks(i.type._context);break;case 22:case 23:oo()}r=r.return}if(ze=e,Se=e=sn(e.current,null),Ie=rt=t,Te=0,Dr=null,eo=Vi=vn=0,Ge=Ar=null,mn!==null){for(t=0;t<mn.length;t++)if(r=mn[t],i=r.interleaved,i!==null){r.interleaved=null;var s=i.next,o=r.pending;if(o!==null){var d=o.next;o.next=s,i.next=d}r.pending=i}mn=null}return e}function Tu(e,t){do{var r=Se;try{if(js(),Ii.current=Fi,Mi){for(var i=ve.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Mi=!1}if(xn=0,Re=Ce=ve=null,zr=!1,_r=0,Zs.current=null,r===null||r.return===null){Te=1,Dr=t,Se=null;break}e:{var o=e,d=r.return,g=r,y=t;if(t=Ie,g.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var C=y,z=g,_=z.tag;if((z.mode&1)===0&&(_===0||_===11||_===15)){var P=z.alternate;P?(z.updateQueue=P.updateQueue,z.memoizedState=P.memoizedState,z.lanes=P.lanes):(z.updateQueue=null,z.memoizedState=null)}var A=Zc(d);if(A!==null){A.flags&=-257,eu(A,d,g,o,t),A.mode&1&&Jc(o,C,t),t=A,y=C;var U=t.updateQueue;if(U===null){var B=new Set;B.add(y),t.updateQueue=B}else U.add(y);break e}else{if((t&1)===0){Jc(o,C,t),lo();break e}y=Error(l(426))}}else if(me&&g.mode&1){var be=Zc(d);if(be!==null){(be.flags&65536)===0&&(be.flags|=256),eu(be,d,g,o,t),ys($n(y,g));break e}}o=y=$n(y,g),Te!==4&&(Te=2),Ar===null?Ar=[o]:Ar.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var N=Qc(o,y,t);Nc(o,N);break e;case 1:g=y;var j=o.type,S=o.stateNode;if((o.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(tn===null||!tn.has(S)))){o.flags|=65536,t&=-t,o.lanes|=t;var I=Xc(o,g,t);Nc(o,I);break e}}o=o.return}while(o!==null)}zu(r)}catch($){t=$,Se===r&&r!==null&&(Se=r=r.return);continue}break}while(!0)}function Pu(){var e=Ki.current;return Ki.current=Fi,e===null?Fi:e}function lo(){(Te===0||Te===3||Te===2)&&(Te=4),ze===null||(vn&268435455)===0&&(Vi&268435455)===0||an(ze,Ie)}function Ji(e,t){var r=ne;ne|=2;var i=Pu();(ze!==e||Ie!==t)&&(At=null,wn(e,t));do try{Lp();break}catch(s){Tu(e,s)}while(!0);if(js(),ne=r,Ki.current=i,Se!==null)throw Error(l(261));return ze=null,Ie=0,Te}function Lp(){for(;Se!==null;)Ru(Se)}function Op(){for(;Se!==null&&!af();)Ru(Se)}function Ru(e){var t=Ou(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?zu(e):Se=t,Zs.current=null}function zu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Ep(r,t,rt),r!==null){Se=r;return}}else{if(r=Cp(r,t),r!==null){r.flags&=32767,Se=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Te===0&&(Te=5)}function jn(e,t,r){var i=le,s=lt.transition;try{lt.transition=null,le=1,Ip(e,t,r,i)}finally{lt.transition=s,le=i}return null}function Ip(e,t,r,i){do Yn();while(nn!==null);if((ne&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(mf(e,o),e===ze&&(Se=ze=null,Ie=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Yi||(Yi=!0,Iu(ni,function(){return Yn(),null})),o=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||o){o=lt.transition,lt.transition=null;var d=le;le=1;var g=ne;ne|=4,Zs.current=null,Pp(e,r),ju(r,e),tp(ls),ci=!!os,ls=os=null,e.current=r,Rp(r),sf(),ne=g,le=d,lt.transition=o}else e.current=r;if(Yi&&(Yi=!1,nn=e,Gi=s),o=e.pendingLanes,o===0&&(tn=null),cf(r.stateNode),Qe(e,Ne()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],i(s.value,{componentStack:s.stack,digest:s.digest});if(qi)throw qi=!1,e=no,no=null,e;return(Gi&1)!==0&&e.tag!==0&&Yn(),o=e.pendingLanes,(o&1)!==0?e===ro?Fr++:(Fr=0,ro=e):Fr=0,Xt(),null}function Yn(){if(nn!==null){var e=yl(Gi),t=lt.transition,r=le;try{if(lt.transition=null,le=16>e?16:e,nn===null)var i=!1;else{if(e=nn,nn=null,Gi=0,(ne&6)!==0)throw Error(l(331));var s=ne;for(ne|=4,H=e.current;H!==null;){var o=H,d=o.child;if((H.flags&16)!==0){var g=o.deletions;if(g!==null){for(var y=0;y<g.length;y++){var C=g[y];for(H=C;H!==null;){var z=H;switch(z.tag){case 0:case 11:case 15:Mr(8,z,o)}var _=z.child;if(_!==null)_.return=z,H=_;else for(;H!==null;){z=H;var P=z.sibling,A=z.return;if(gu(z),z===C){H=null;break}if(P!==null){P.return=A,H=P;break}H=A}}}var U=o.alternate;if(U!==null){var B=U.child;if(B!==null){U.child=null;do{var be=B.sibling;B.sibling=null,B=be}while(B!==null)}}H=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,H=d;else e:for(;H!==null;){if(o=H,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Mr(9,o,o.return)}var N=o.sibling;if(N!==null){N.return=o.return,H=N;break e}H=o.return}}var j=e.current;for(H=j;H!==null;){d=H;var S=d.child;if((d.subtreeFlags&2064)!==0&&S!==null)S.return=d,H=S;else e:for(d=j;H!==null;){if(g=H,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:$i(9,g)}}catch($){ke(g,g.return,$)}if(g===d){H=null;break e}var I=g.sibling;if(I!==null){I.return=g.return,H=I;break e}H=g.return}}if(ne=s,Xt(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ri,e)}catch{}i=!0}return i}finally{le=r,lt.transition=t}}return!1}function _u(e,t,r){t=$n(r,t),t=Qc(e,t,1),e=Zt(e,t,1),t=Be(),e!==null&&(cr(e,1,t),Qe(e,t))}function ke(e,t,r){if(e.tag===3)_u(e,e,r);else for(;t!==null;){if(t.tag===3){_u(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tn===null||!tn.has(i))){e=$n(r,e),e=Xc(t,e,1),t=Zt(t,e,1),e=Be(),t!==null&&(cr(t,1,e),Qe(t,e));break}}t=t.return}}function Mp(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&r,ze===e&&(Ie&r)===r&&(Te===4||Te===3&&(Ie&130023424)===Ie&&500>Ne()-to?wn(e,0):eo|=r),Qe(e,t)}function Lu(e,t){t===0&&((e.mode&1)===0?t=1:(t=ai,ai<<=1,(ai&130023424)===0&&(ai=4194304)));var r=Be();e=It(e,t),e!==null&&(cr(e,t,r),Qe(e,r))}function Dp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Lu(e,r)}function Ap(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),Lu(e,r)}var Ou;Ou=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ye=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ye=!1,Sp(e,t,r);Ye=(e.flags&131072)!==0}else Ye=!1,me&&(t.flags&1048576)!==0&&pc(t,Ci,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Ui(e,t),e=t.pendingProps;var s=Mn(t,Me.current);Un(t,r),s=_s(null,t,i,e,s,r);var o=Ls();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(i)?(o=!0,bi(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ss(t),s.updater=Hi,t.stateNode=s,s._reactInternals=t,Fs(t,i,e,r),t=Bs(null,t,i,!0,o,r)):(t.tag=0,me&&o&&ms(t),Ue(null,t,s,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,s=i._init,i=s(i._payload),t.type=i,s=t.tag=Hp(i),e=xt(i,e),s){case 0:t=Us(null,t,i,e,r);break e;case 1:t=su(null,t,i,e,r);break e;case 11:t=tu(null,t,i,e,r);break e;case 14:t=nu(null,t,i,xt(i.type,e),r);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:xt(i,s),Us(e,t,i,s,r);case 1:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:xt(i,s),su(e,t,i,s,r);case 3:e:{if(ou(t),e===null)throw Error(l(387));i=t.pendingProps,o=t.memoizedState,s=o.element,kc(e,t),Li(t,i,null,r);var d=t.memoizedState;if(i=d.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=$n(Error(l(423)),t),t=lu(e,t,i,r,s);break e}else if(i!==s){s=$n(Error(l(424)),t),t=lu(e,t,i,r,s);break e}else for(nt=Yt(t.stateNode.containerInfo.firstChild),tt=t,me=!0,gt=null,r=wc(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fn(),i===s){t=Dt(e,t,r);break e}Ue(e,t,i,r)}t=t.child}return t;case 5:return Sc(t),e===null&&vs(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,d=s.children,cs(i,s)?d=null:o!==null&&cs(i,o)&&(t.flags|=32),au(e,t),Ue(e,t,d,r),t.child;case 6:return e===null&&vs(t),null;case 13:return cu(e,t,r);case 4:return Es(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Hn(t,null,i,r):Ue(e,t,i,r),t.child;case 11:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:xt(i,s),tu(e,t,i,s,r);case 7:return Ue(e,t,t.pendingProps,r),t.child;case 8:return Ue(e,t,t.pendingProps.children,r),t.child;case 12:return Ue(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,s=t.pendingProps,o=t.memoizedProps,d=s.value,de(Ri,i._currentValue),i._currentValue=d,o!==null)if(mt(o.value,d)){if(o.children===s.children&&!Ve.current){t=Dt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var g=o.dependencies;if(g!==null){d=o.child;for(var y=g.firstContext;y!==null;){if(y.context===i){if(o.tag===1){y=Mt(-1,r&-r),y.tag=2;var C=o.updateQueue;if(C!==null){C=C.shared;var z=C.pending;z===null?y.next=y:(y.next=z.next,z.next=y),C.pending=y}}o.lanes|=r,y=o.alternate,y!==null&&(y.lanes|=r),Ns(o.return,r,t),g.lanes|=r;break}y=y.next}}else if(o.tag===10)d=o.type===t.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=r,g=d.alternate,g!==null&&(g.lanes|=r),Ns(d,r,t),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}Ue(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,i=t.pendingProps.children,Un(t,r),s=st(s),i=i(s),t.flags|=1,Ue(e,t,i,r),t.child;case 14:return i=t.type,s=xt(i,t.pendingProps),s=xt(i.type,s),nu(e,t,i,s,r);case 15:return ru(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,s=t.pendingProps,s=t.elementType===i?s:xt(i,s),Ui(e,t),t.tag=1,qe(i)?(e=!0,bi(t)):e=!1,Un(t,r),Yc(t,i,s),Fs(t,i,s,r),Bs(null,t,i,!0,e,r);case 19:return du(e,t,r);case 22:return iu(e,t,r)}throw Error(l(156,t.tag))};function Iu(e,t){return hl(e,t)}function Fp(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,r,i){return new Fp(e,t,r,i)}function co(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hp(e){if(typeof e=="function")return co(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kt)return 11;if(e===Nt)return 14}return 2}function sn(e,t){var r=e.alternate;return r===null?(r=ct(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zi(e,t,r,i,s,o){var d=2;if(i=e,typeof e=="function")co(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case we:return kn(r.children,s,o,t);case Ee:d=8,s|=8;break;case He:return e=ct(12,r,t,s|2),e.elementType=He,e.lanes=o,e;case Je:return e=ct(13,r,t,s),e.elementType=Je,e.lanes=o,e;case pt:return e=ct(19,r,t,s),e.elementType=pt,e.lanes=o,e;case je:return ea(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case We:d=10;break e;case cn:d=9;break e;case kt:d=11;break e;case Nt:d=14;break e;case Ke:d=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=ct(d,r,t,s),t.elementType=e,t.type=i,t.lanes=o,t}function kn(e,t,r,i){return e=ct(7,e,i,t),e.lanes=r,e}function ea(e,t,r,i){return e=ct(22,e,i,t),e.elementType=je,e.lanes=r,e.stateNode={isHidden:!1},e}function uo(e,t,r){return e=ct(6,e,null,t),e.lanes=r,e}function fo(e,t,r){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wp(e,t,r,i,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function po(e,t,r,i,s,o,d,g,y){return e=new Wp(e,t,r,g,y),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(o),e}function Up(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Mu(e){if(!e)return Qt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(qe(r))return uc(e,r,t)}return t}function Du(e,t,r,i,s,o,d,g,y){return e=po(r,i,!0,e,s,o,d,g,y),e.context=Mu(null),r=e.current,i=Be(),s=rn(r),o=Mt(i,s),o.callback=t??null,Zt(r,o,s),e.current.lanes=s,cr(e,s,i),Qe(e,i),e}function ta(e,t,r,i){var s=t.current,o=Be(),d=rn(s);return r=Mu(r),t.context===null?t.context=r:t.pendingContext=r,t=Mt(o,d),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Zt(s,t,d),e!==null&&(wt(e,s,d,o),_i(e,s,d)),d}function na(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ho(e,t){Au(e,t),(e=e.alternate)&&Au(e,t)}function Bp(){return null}var Fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function mo(e){this._internalRoot=e}ra.prototype.render=mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));ta(e,t,null,null)},ra.prototype.unmount=mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){ta(null,e,null,null)}),t[zt]=null}};function ra(e){this._internalRoot=e}ra.prototype.unstable_scheduleHydration=function(e){if(e){var t=kl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Kt.length&&t!==0&&t<Kt[r].priority;r++);Kt.splice(r,0,e),r===0&&Sl(e)}};function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function $p(e,t,r,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var C=na(d);o.call(C)}}var d=Du(t,i,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=d,e[zt]=d.current,Nr(e.nodeType===8?e.parentNode:e),yn(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var g=i;i=function(){var C=na(y);g.call(C)}}var y=po(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=y,e[zt]=y.current,Nr(e.nodeType===8?e.parentNode:e),yn(function(){ta(t,y,r,i)}),y}function aa(e,t,r,i,s){var o=r._reactRootContainer;if(o){var d=o;if(typeof s=="function"){var g=s;s=function(){var y=na(d);g.call(y)}}ta(t,d,e,s)}else d=$p(r,t,e,s,i);return na(d)}wl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=lr(t.pendingLanes);r!==0&&(Fa(t,r|1),Qe(t,Ne()),(ne&6)===0&&(qn=Ne()+500,Xt()))}break;case 13:yn(function(){var i=It(e,1);if(i!==null){var s=Be();wt(i,e,1,s)}}),ho(e,1)}},Ha=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var r=Be();wt(t,e,134217728,r)}ho(e,134217728)}},jl=function(e){if(e.tag===13){var t=rn(e),r=It(e,t);if(r!==null){var i=Be();wt(r,e,t,i)}ho(e,t)}},kl=function(){return le},Nl=function(e,t){var r=le;try{return le=e,t()}finally{le=r}},_a=function(e,t,r){switch(t){case"input":if(ba(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var s=ki(i);if(!s)throw Error(l(90));qo(i),ba(i,s)}}}break;case"textarea":Jo(e,r);break;case"select":t=r.value,t!=null&&bn(e,!!r.multiple,t,!1)}},ol=so,ll=yn;var Kp={usingClientEntryPoint:!1,Events:[Er,On,ki,al,sl,so]},Hr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fl(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{ri=sa.inject(Vp),bt=sa}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp,Xe.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!go(t))throw Error(l(200));return Up(e,t,null,r)},Xe.createRoot=function(e,t){if(!go(e))throw Error(l(299));var r=!1,i="",s=Fu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=po(e,1,!1,null,null,r,!1,i,s),e[zt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new mo(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=fl(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return yn(e)},Xe.hydrate=function(e,t,r){if(!ia(t))throw Error(l(200));return aa(null,e,t,!0,r)},Xe.hydrateRoot=function(e,t,r){if(!go(e))throw Error(l(405));var i=r!=null&&r.hydratedSources||null,s=!1,o="",d=Fu;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=Du(t,null,e,1,r??null,s,!1,o,d),e[zt]=t.current,Nr(e),i)for(e=0;e<i.length;e++)r=i[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new ra(t)},Xe.render=function(e,t,r){if(!ia(t))throw Error(l(200));return aa(null,e,t,!1,r)},Xe.unmountComponentAtNode=function(e){if(!ia(e))throw Error(l(40));return e._reactRootContainer?(yn(function(){aa(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1},Xe.unstable_batchedUpdates=so,Xe.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!ia(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return aa(e,t,r,!1,i)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Yu;function eh(){if(Yu)return yo.exports;Yu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),yo.exports=Zp(),yo.exports}var Gu;function th(){if(Gu)return oa;Gu=1;var a=eh();return oa.createRoot=a.createRoot,oa.hydrateRoot=a.hydrateRoot,oa}var nh=th();var Qu="popstate";function rh(a={}){function c(u,f){let{pathname:p,search:h,hash:x}=u.location;return _o("",{pathname:p,search:h,hash:x},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function l(u,f){return typeof f=="string"?f:Vr(f)}return ah(c,l,null,a)}function ye(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Pt(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ih(){return Math.random().toString(36).substring(2,10)}function Xu(a,c){return{usr:a.state,key:a.key,idx:c}}function _o(a,c,l=null,u){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof c=="string"?er(c):c,state:l,key:c&&c.key||u||ih()}}function Vr({pathname:a="/",search:c="",hash:l=""}){return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function er(a){let c={};if(a){let l=a.indexOf("#");l>=0&&(c.hash=a.substring(l),a=a.substring(0,l));let u=a.indexOf("?");u>=0&&(c.search=a.substring(u),a=a.substring(0,u)),a&&(c.pathname=a)}return c}function ah(a,c,l,u={}){let{window:f=document.defaultView,v5Compat:p=!1}=u,h=f.history,x="POP",m=null,w=v();w==null&&(w=0,h.replaceState({...h.state,idx:w},""));function v(){return(h.state||{idx:null}).idx}function E(){x="POP";let O=v(),K=O==null?null:O-w;w=O,m&&m({action:x,location:T.location,delta:K})}function L(O,K){x="PUSH";let F=_o(T.location,O,K);w=v()+1;let J=Xu(F,w),se=T.createHref(F);try{h.pushState(J,"",se)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;f.location.assign(se)}p&&m&&m({action:x,location:T.location,delta:1})}function M(O,K){x="REPLACE";let F=_o(T.location,O,K);w=v();let J=Xu(F,w),se=T.createHref(F);h.replaceState(J,"",se),p&&m&&m({action:x,location:T.location,delta:0})}function q(O){return sh(O)}let T={get action(){return x},get location(){return a(f,h)},listen(O){if(m)throw new Error("A history only accepts one active listener");return f.addEventListener(Qu,E),m=O,()=>{f.removeEventListener(Qu,E),m=null}},createHref(O){return c(f,O)},createURL:q,encodeLocation(O){let K=q(O);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:L,replace:M,go(O){return h.go(O)}};return T}function sh(a,c=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),ye(l,"No window.location.(origin|href) available to create URL");let u=typeof a=="string"?a:Vr(a);return u=u.replace(/ $/,"%20"),!c&&u.startsWith("//")&&(u=l+u),new URL(u,l)}function hd(a,c,l="/"){return oh(a,c,l,!1)}function oh(a,c,l,u){let f=typeof c=="string"?er(c):c,p=Wt(f.pathname||"/",l);if(p==null)return null;let h=md(a);lh(h);let x=null;for(let m=0;x==null&&m<h.length;++m){let w=yh(p);x=xh(h[m],w,u)}return x}function md(a,c=[],l=[],u="",f=!1){let p=(h,x,m=f,w)=>{let v={relativePath:w===void 0?h.path||"":w,caseSensitive:h.caseSensitive===!0,childrenIndex:x,route:h};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(u)&&m)return;ye(v.relativePath.startsWith(u),`Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(u.length)}let E=Ht([u,v.relativePath]),L=l.concat(v);h.children&&h.children.length>0&&(ye(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),md(h.children,c,L,E,m)),!(h.path==null&&!h.index)&&c.push({path:E,score:mh(E,h.index),routesMeta:L})};return a.forEach((h,x)=>{if(h.path===""||!h.path?.includes("?"))p(h,x);else for(let m of gd(h.path))p(h,x,!0,m)}),c}function gd(a){let c=a.split("/");if(c.length===0)return[];let[l,...u]=c,f=l.endsWith("?"),p=l.replace(/\?$/,"");if(u.length===0)return f?[p,""]:[p];let h=gd(u.join("/")),x=[];return x.push(...h.map(m=>m===""?p:[p,m].join("/"))),f&&x.push(...h),x.map(m=>a.startsWith("/")&&m===""?"/":m)}function lh(a){a.sort((c,l)=>c.score!==l.score?l.score-c.score:gh(c.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}var ch=/^:[\w-]+$/,uh=3,dh=2,fh=1,ph=10,hh=-2,Ju=a=>a==="*";function mh(a,c){let l=a.split("/"),u=l.length;return l.some(Ju)&&(u+=hh),c&&(u+=dh),l.filter(f=>!Ju(f)).reduce((f,p)=>f+(ch.test(p)?uh:p===""?fh:ph),u)}function gh(a,c){return a.length===c.length&&a.slice(0,-1).every((u,f)=>u===c[f])?a[a.length-1]-c[c.length-1]:0}function xh(a,c,l=!1){let{routesMeta:u}=a,f={},p="/",h=[];for(let x=0;x<u.length;++x){let m=u[x],w=x===u.length-1,v=p==="/"?c:c.slice(p.length)||"/",E=ga({path:m.relativePath,caseSensitive:m.caseSensitive,end:w},v),L=m.route;if(!E&&w&&l&&!u[u.length-1].route.index&&(E=ga({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!E)return null;Object.assign(f,E.params),h.push({params:f,pathname:Ht([p,E.pathname]),pathnameBase:Nh(Ht([p,E.pathnameBase])),route:L}),E.pathnameBase!=="/"&&(p=Ht([p,E.pathnameBase]))}return h}function ga(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[l,u]=vh(a.path,a.caseSensitive,a.end),f=c.match(l);if(!f)return null;let p=f[0],h=p.replace(/(.)\/+$/,"$1"),x=f.slice(1);return{params:u.reduce((w,{paramName:v,isOptional:E},L)=>{if(v==="*"){let q=x[L]||"";h=p.slice(0,p.length-q.length).replace(/(.)\/+$/,"$1")}const M=x[L];return E&&!M?w[v]=void 0:w[v]=(M||"").replace(/%2F/g,"/"),w},{}),pathname:p,pathnameBase:h,pattern:a}}function vh(a,c=!1,l=!0){Pt(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let u=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,m)=>(u.push({paramName:x,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(u.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),u]}function yh(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Pt(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),a}}function Wt(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let l=c.endsWith("/")?c.length-1:c.length,u=a.charAt(l);return u&&u!=="/"?null:a.slice(l)||"/"}var wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function jh(a,c="/"){let{pathname:l,search:u="",hash:f=""}=typeof a=="string"?er(a):a,p;return l?(l=l.replace(/\/\/+/g,"/"),l.startsWith("/")?p=Zu(l.substring(1),"/"):p=Zu(l,c)):p=c,{pathname:p,search:bh(u),hash:Sh(f)}}function Zu(a,c){let l=c.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?l.length>1&&l.pop():f!=="."&&l.push(f)}),l.length>1?l.join("/"):"/"}function ko(a,c,l,u){return`Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kh(a){return a.filter((c,l)=>l===0||c.route.path&&c.route.path.length>0)}function xd(a){let c=kh(a);return c.map((l,u)=>u===c.length-1?l.pathname:l.pathnameBase)}function vd(a,c,l,u=!1){let f;typeof a=="string"?f=er(a):(f={...a},ye(!f.pathname||!f.pathname.includes("?"),ko("?","pathname","search",f)),ye(!f.pathname||!f.pathname.includes("#"),ko("#","pathname","hash",f)),ye(!f.search||!f.search.includes("#"),ko("#","search","hash",f)));let p=a===""||f.pathname==="",h=p?"/":f.pathname,x;if(h==null)x=l;else{let E=c.length-1;if(!u&&h.startsWith("..")){let L=h.split("/");for(;L[0]==="..";)L.shift(),E-=1;f.pathname=L.join("/")}x=E>=0?c[E]:"/"}let m=jh(f,x),w=h&&h!=="/"&&h.endsWith("/"),v=(p||h===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(w||v)&&(m.pathname+="/"),m}var Ht=a=>a.join("/").replace(/\/\/+/g,"/"),Nh=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),bh=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Sh=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Eh=class{constructor(a,c,l,u=!1){this.status=a,this.statusText=c||"",this.internal=u,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function Ch(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Th(a){return a.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var yd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wd(a,c){let l=a;if(typeof l!="string"||!wh.test(l))return{absoluteURL:void 0,isExternal:!1,to:l};let u=l,f=!1;if(yd)try{let p=new URL(window.location.href),h=l.startsWith("//")?new URL(p.protocol+l):new URL(l),x=Wt(h.pathname,c);h.origin===p.origin&&x!=null?l=x+h.search+h.hash:f=!0}catch{Pt(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jd=["POST","PUT","PATCH","DELETE"];new Set(jd);var Ph=["GET",...jd];new Set(Ph);var tr=b.createContext(null);tr.displayName="DataRouter";var ja=b.createContext(null);ja.displayName="DataRouterState";var Rh=b.createContext(!1),kd=b.createContext({isTransitioning:!1});kd.displayName="ViewTransition";var zh=b.createContext(new Map);zh.displayName="Fetchers";var _h=b.createContext(null);_h.displayName="Await";var ft=b.createContext(null);ft.displayName="Navigation";var Yr=b.createContext(null);Yr.displayName="Location";var Rt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var Wo=b.createContext(null);Wo.displayName="RouteError";var Nd="REACT_ROUTER_ERROR",Lh="REDIRECT",Oh="ROUTE_ERROR_RESPONSE";function Ih(a){if(a.startsWith(`${Nd}:${Lh}:{`))try{let c=JSON.parse(a.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Mh(a){if(a.startsWith(`${Nd}:${Oh}:{`))try{let c=JSON.parse(a.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Eh(c.status,c.statusText,c.data)}catch{}}function Dh(a,{relative:c}={}){ye(Gr(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:u}=b.useContext(ft),{hash:f,pathname:p,search:h}=Qr(a,{relative:c}),x=p;return l!=="/"&&(x=p==="/"?l:Ht([l,p])),u.createHref({pathname:x,search:h,hash:f})}function Gr(){return b.useContext(Yr)!=null}function ln(){return ye(Gr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Yr).location}var bd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sd(a){b.useContext(ft).static||b.useLayoutEffect(a)}function Ah(){let{isDataRoute:a}=b.useContext(Rt);return a?Jh():Fh()}function Fh(){ye(Gr(),"useNavigate() may be used only in the context of a <Router> component.");let a=b.useContext(tr),{basename:c,navigator:l}=b.useContext(ft),{matches:u}=b.useContext(Rt),{pathname:f}=ln(),p=JSON.stringify(xd(u)),h=b.useRef(!1);return Sd(()=>{h.current=!0}),b.useCallback((m,w={})=>{if(Pt(h.current,bd),!h.current)return;if(typeof m=="number"){l.go(m);return}let v=vd(m,JSON.parse(p),f,w.relative==="path");a==null&&c!=="/"&&(v.pathname=v.pathname==="/"?c:Ht([c,v.pathname])),(w.replace?l.replace:l.push)(v,w.state,w)},[c,l,p,f,a])}b.createContext(null);function Hh(){let{matches:a}=b.useContext(Rt),c=a[a.length-1];return c?c.params:{}}function Qr(a,{relative:c}={}){let{matches:l}=b.useContext(Rt),{pathname:u}=ln(),f=JSON.stringify(xd(l));return b.useMemo(()=>vd(a,JSON.parse(f),u,c==="path"),[a,f,u,c])}function Wh(a,c){return Ed(a,c)}function Ed(a,c,l,u,f){ye(Gr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=b.useContext(ft),{matches:h}=b.useContext(Rt),x=h[h.length-1],m=x?x.params:{},w=x?x.pathname:"/",v=x?x.pathnameBase:"/",E=x&&x.route;{let F=E&&E.path||"";Td(w,!E||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let L=ln(),M;if(c){let F=typeof c=="string"?er(c):c;ye(v==="/"||F.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${F.pathname}" was given in the \`location\` prop.`),M=F}else M=L;let q=M.pathname||"/",T=q;if(v!=="/"){let F=v.replace(/^\//,"").split("/");T="/"+q.replace(/^\//,"").split("/").slice(F.length).join("/")}let O=hd(a,{pathname:T});Pt(E||O!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Pt(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Vh(O&&O.map(F=>Object.assign({},F,{params:Object.assign({},m,F.params),pathname:Ht([v,p.encodeLocation?p.encodeLocation(F.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?v:Ht([v,p.encodeLocation?p.encodeLocation(F.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:F.pathnameBase])})),h,l,u,f);return c&&K?b.createElement(Yr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},K):K}function Uh(){let a=Xh(),c=Ch(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),l=a instanceof Error?a.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},c),l?b.createElement("pre",{style:f},l):null,h)}var Bh=b.createElement(Uh,null),Cd=class extends b.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,c){return c.location!==a.location||c.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:c.error,location:c.location,revalidation:a.revalidation||c.revalidation}}componentDidCatch(a,c){this.props.onError?this.props.onError(a,c):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const l=Mh(a.digest);l&&(a=l)}let c=a!==void 0?b.createElement(Rt.Provider,{value:this.props.routeContext},b.createElement(Wo.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?b.createElement($h,{error:a},c):c}};Cd.contextType=Rh;var No=new WeakMap;function $h({children:a,error:c}){let{basename:l}=b.useContext(ft);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let u=Ih(c.digest);if(u){let f=No.get(c);if(f)throw f;let p=wd(u.location,l);if(yd&&!No.get(c))if(p.isExternal||u.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:u.replace}));throw No.set(c,h),h}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return a}function Kh({routeContext:a,match:c,children:l}){let u=b.useContext(tr);return u&&u.static&&u.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=c.route.id),b.createElement(Rt.Provider,{value:a},l)}function Vh(a,c=[],l=null,u=null,f=null){if(a==null){if(!l)return null;if(l.errors)a=l.matches;else if(c.length===0&&!l.initialized&&l.matches.length>0)a=l.matches;else return null}let p=a,h=l?.errors;if(h!=null){let v=p.findIndex(E=>E.route.id&&h?.[E.route.id]!==void 0);ye(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,v+1))}let x=!1,m=-1;if(l)for(let v=0;v<p.length;v++){let E=p[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(m=v),E.route.id){let{loaderData:L,errors:M}=l,q=E.route.loader&&!L.hasOwnProperty(E.route.id)&&(!M||M[E.route.id]===void 0);if(E.route.lazy||q){x=!0,m>=0?p=p.slice(0,m+1):p=[p[0]];break}}}let w=l&&u?(v,E)=>{u(v,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:Th(l.matches),errorInfo:E})}:void 0;return p.reduceRight((v,E,L)=>{let M,q=!1,T=null,O=null;l&&(M=h&&E.route.id?h[E.route.id]:void 0,T=E.route.errorElement||Bh,x&&(m<0&&L===0?(Td("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,O=null):m===L&&(q=!0,O=E.route.hydrateFallbackElement||null)));let K=c.concat(p.slice(0,L+1)),F=()=>{let J;return M?J=T:q?J=O:E.route.Component?J=b.createElement(E.route.Component,null):E.route.element?J=E.route.element:J=v,b.createElement(Kh,{match:E,routeContext:{outlet:v,matches:K,isDataRoute:l!=null},children:J})};return l&&(E.route.ErrorBoundary||E.route.errorElement||L===0)?b.createElement(Cd,{location:l.location,revalidation:l.revalidation,component:T,error:M,children:F(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:w}):F()},null)}function Uo(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qh(a){let c=b.useContext(tr);return ye(c,Uo(a)),c}function Yh(a){let c=b.useContext(ja);return ye(c,Uo(a)),c}function Gh(a){let c=b.useContext(Rt);return ye(c,Uo(a)),c}function Bo(a){let c=Gh(a),l=c.matches[c.matches.length-1];return ye(l.route.id,`${a} can only be used on routes that contain a unique "id"`),l.route.id}function Qh(){return Bo("useRouteId")}function Xh(){let a=b.useContext(Wo),c=Yh("useRouteError"),l=Bo("useRouteError");return a!==void 0?a:c.errors?.[l]}function Jh(){let{router:a}=qh("useNavigate"),c=Bo("useNavigate"),l=b.useRef(!1);return Sd(()=>{l.current=!0}),b.useCallback(async(f,p={})=>{Pt(l.current,bd),l.current&&(typeof f=="number"?await a.navigate(f):await a.navigate(f,{fromRouteId:c,...p}))},[a,c])}var ed={};function Td(a,c,l){!c&&!ed[a]&&(ed[a]=!0,Pt(!1,l))}b.memo(Zh);function Zh({routes:a,future:c,state:l,onError:u}){return Ed(a,void 0,l,u,c)}function $e(a){ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function em({basename:a="/",children:c=null,location:l,navigationType:u="POP",navigator:f,static:p=!1,unstable_useTransitions:h}){ye(!Gr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=a.replace(/^\/*/,"/"),m=b.useMemo(()=>({basename:x,navigator:f,static:p,unstable_useTransitions:h,future:{}}),[x,f,p,h]);typeof l=="string"&&(l=er(l));let{pathname:w="/",search:v="",hash:E="",state:L=null,key:M="default"}=l,q=b.useMemo(()=>{let T=Wt(w,x);return T==null?null:{location:{pathname:T,search:v,hash:E,state:L,key:M},navigationType:u}},[x,w,v,E,L,M,u]);return Pt(q!=null,`<Router basename="${x}"> is not able to match the URL "${w}${v}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:b.createElement(ft.Provider,{value:m},b.createElement(Yr.Provider,{children:c,value:q}))}function tm({children:a,location:c}){return Wh(Lo(a),c)}function Lo(a,c=[]){let l=[];return b.Children.forEach(a,(u,f)=>{if(!b.isValidElement(u))return;let p=[...c,f];if(u.type===b.Fragment){l.push.apply(l,Lo(u.props.children,p));return}ye(u.type===$e,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ye(!u.props.index||!u.props.children,"An index route cannot have child routes.");let h={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Lo(u.props.children,p)),l.push(h)}),l}var pa="get",ha="application/x-www-form-urlencoded";function ka(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function nm(a){return ka(a)&&a.tagName.toLowerCase()==="button"}function rm(a){return ka(a)&&a.tagName.toLowerCase()==="form"}function im(a){return ka(a)&&a.tagName.toLowerCase()==="input"}function am(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function sm(a,c){return a.button===0&&(!c||c==="_self")&&!am(a)}var la=null;function om(){if(la===null)try{new FormData(document.createElement("form"),0),la=!1}catch{la=!0}return la}var lm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bo(a){return a!=null&&!lm.has(a)?(Pt(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ha}"`),null):a}function cm(a,c){let l,u,f,p,h;if(rm(a)){let x=a.getAttribute("action");u=x?Wt(x,c):null,l=a.getAttribute("method")||pa,f=bo(a.getAttribute("enctype"))||ha,p=new FormData(a)}else if(nm(a)||im(a)&&(a.type==="submit"||a.type==="image")){let x=a.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||x.getAttribute("action");if(u=m?Wt(m,c):null,l=a.getAttribute("formmethod")||x.getAttribute("method")||pa,f=bo(a.getAttribute("formenctype"))||bo(x.getAttribute("enctype"))||ha,p=new FormData(x,a),!om()){let{name:w,type:v,value:E}=a;if(v==="image"){let L=w?`${w}.`:"";p.append(`${L}x`,"0"),p.append(`${L}y`,"0")}else w&&p.append(w,E)}}else{if(ka(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=pa,u=null,f=ha,h=a}return p&&f==="text/plain"&&(h=p,p=void 0),{action:u,method:l.toLowerCase(),encType:f,formData:p,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function $o(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function um(a,c,l,u){let f=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:c&&Wt(f.pathname,c)==="/"?f.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${u}`,f}async function dm(a,c){if(a.id in c)return c[a.id];try{let l=await import(a.module);return c[a.id]=l,l}catch(l){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fm(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function pm(a,c,l){let u=await Promise.all(a.map(async f=>{let p=c.routes[f.route.id];if(p){let h=await dm(p,l);return h.links?h.links():[]}return[]}));return xm(u.flat(1).filter(fm).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function td(a,c,l,u,f,p){let h=(m,w)=>l[w]?m.route.id!==l[w].route.id:!0,x=(m,w)=>l[w].pathname!==m.pathname||l[w].route.path?.endsWith("*")&&l[w].params["*"]!==m.params["*"];return p==="assets"?c.filter((m,w)=>h(m,w)||x(m,w)):p==="data"?c.filter((m,w)=>{let v=u.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(h(m,w)||x(m,w))return!0;if(m.route.shouldRevalidate){let E=m.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function hm(a,c,{includeHydrateFallback:l}={}){return mm(a.map(u=>{let f=c.routes[u.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),l&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function mm(a){return[...new Set(a)]}function gm(a){let c={},l=Object.keys(a).sort();for(let u of l)c[u]=a[u];return c}function xm(a,c){let l=new Set;return new Set(c),a.reduce((u,f)=>{let p=JSON.stringify(gm(f));return l.has(p)||(l.add(p),u.push({key:p,link:f})),u},[])}function Pd(){let a=b.useContext(tr);return $o(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function vm(){let a=b.useContext(ja);return $o(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ko=b.createContext(void 0);Ko.displayName="FrameworkContext";function Rd(){let a=b.useContext(Ko);return $o(a,"You must render this element inside a <HydratedRouter> element"),a}function ym(a,c){let l=b.useContext(Ko),[u,f]=b.useState(!1),[p,h]=b.useState(!1),{onFocus:x,onBlur:m,onMouseEnter:w,onMouseLeave:v,onTouchStart:E}=c,L=b.useRef(null);b.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let T=K=>{K.forEach(F=>{h(F.isIntersecting)})},O=new IntersectionObserver(T,{threshold:.5});return L.current&&O.observe(L.current),()=>{O.disconnect()}}},[a]),b.useEffect(()=>{if(u){let T=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(T)}}},[u]);let M=()=>{f(!0)},q=()=>{f(!1),h(!1)};return l?a!=="intent"?[p,L,{}]:[p,L,{onFocus:Ur(x,M),onBlur:Ur(m,q),onMouseEnter:Ur(w,M),onMouseLeave:Ur(v,q),onTouchStart:Ur(E,M)}]:[!1,L,{}]}function Ur(a,c){return l=>{a&&a(l),l.defaultPrevented||c(l)}}function wm({page:a,...c}){let{router:l}=Pd(),u=b.useMemo(()=>hd(l.routes,a,l.basename),[l.routes,a,l.basename]);return u?b.createElement(km,{page:a,matches:u,...c}):null}function jm(a){let{manifest:c,routeModules:l}=Rd(),[u,f]=b.useState([]);return b.useEffect(()=>{let p=!1;return pm(a,c,l).then(h=>{p||f(h)}),()=>{p=!0}},[a,c,l]),u}function km({page:a,matches:c,...l}){let u=ln(),{future:f,manifest:p,routeModules:h}=Rd(),{basename:x}=Pd(),{loaderData:m,matches:w}=vm(),v=b.useMemo(()=>td(a,c,w,p,u,"data"),[a,c,w,p,u]),E=b.useMemo(()=>td(a,c,w,p,u,"assets"),[a,c,w,p,u]),L=b.useMemo(()=>{if(a===u.pathname+u.search+u.hash)return[];let T=new Set,O=!1;if(c.forEach(F=>{let J=p.routes[F.route.id];!J||!J.hasLoader||(!v.some(se=>se.route.id===F.route.id)&&F.route.id in m&&h[F.route.id]?.shouldRevalidate||J.hasClientLoader?O=!0:T.add(F.route.id))}),T.size===0)return[];let K=um(a,x,f.unstable_trailingSlashAwareDataRequests,"data");return O&&T.size>0&&K.searchParams.set("_routes",c.filter(F=>T.has(F.route.id)).map(F=>F.route.id).join(",")),[K.pathname+K.search]},[x,f.unstable_trailingSlashAwareDataRequests,m,u,p,v,c,a,h]),M=b.useMemo(()=>hm(E,p),[E,p]),q=jm(E);return b.createElement(b.Fragment,null,L.map(T=>b.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...l})),M.map(T=>b.createElement("link",{key:T,rel:"modulepreload",href:T,...l})),q.map(({key:T,link:O})=>b.createElement("link",{key:T,nonce:l.nonce,...O,crossOrigin:O.crossOrigin??l.crossOrigin})))}function Nm(...a){return c=>{a.forEach(l=>{typeof l=="function"?l(c):l!=null&&(l.current=c)})}}var bm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bm&&(window.__reactRouterVersion="7.13.0")}catch{}function Sm({basename:a,children:c,unstable_useTransitions:l,window:u}){let f=b.useRef();f.current==null&&(f.current=rh({window:u,v5Compat:!0}));let p=f.current,[h,x]=b.useState({action:p.action,location:p.location}),m=b.useCallback(w=>{l===!1?x(w):b.startTransition(()=>x(w))},[l]);return b.useLayoutEffect(()=>p.listen(m),[p,m]),b.createElement(em,{basename:a,children:c,location:h.location,navigationType:h.action,navigator:p,unstable_useTransitions:l})}var zd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V=b.forwardRef(function({onClick:c,discover:l="render",prefetch:u="none",relative:f,reloadDocument:p,replace:h,state:x,target:m,to:w,preventScrollReset:v,viewTransition:E,unstable_defaultShouldRevalidate:L,...M},q){let{basename:T,unstable_useTransitions:O}=b.useContext(ft),K=typeof w=="string"&&zd.test(w),F=wd(w,T);w=F.to;let J=Dh(w,{relative:f}),[se,ce,ge]=ym(u,M),we=Tm(w,{replace:h,state:x,target:m,preventScrollReset:v,relative:f,viewTransition:E,unstable_defaultShouldRevalidate:L,unstable_useTransitions:O});function Ee(We){c&&c(We),We.defaultPrevented||we(We)}let He=b.createElement("a",{...M,...ge,href:F.absoluteURL||J,onClick:F.isExternal||p?c:Ee,ref:Nm(q,ce),target:m,"data-discover":!K&&l==="render"?"true":void 0});return se&&!K?b.createElement(b.Fragment,null,He,b.createElement(wm,{page:J})):He});V.displayName="Link";var Ft=b.forwardRef(function({"aria-current":c="page",caseSensitive:l=!1,className:u="",end:f=!1,style:p,to:h,viewTransition:x,children:m,...w},v){let E=Qr(h,{relative:w.relative}),L=ln(),M=b.useContext(ja),{navigator:q,basename:T}=b.useContext(ft),O=M!=null&&Lm(E)&&x===!0,K=q.encodeLocation?q.encodeLocation(E).pathname:E.pathname,F=L.pathname,J=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;l||(F=F.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&T&&(J=Wt(J,T)||J);const se=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ce=F===K||!f&&F.startsWith(K)&&F.charAt(se)==="/",ge=J!=null&&(J===K||!f&&J.startsWith(K)&&J.charAt(K.length)==="/"),we={isActive:ce,isPending:ge,isTransitioning:O},Ee=ce?c:void 0,He;typeof u=="function"?He=u(we):He=[u,ce?"active":null,ge?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let We=typeof p=="function"?p(we):p;return b.createElement(V,{...w,"aria-current":Ee,className:He,ref:v,style:We,to:h,viewTransition:x},typeof m=="function"?m(we):m)});Ft.displayName="NavLink";var Em=b.forwardRef(({discover:a="render",fetcherKey:c,navigate:l,reloadDocument:u,replace:f,state:p,method:h=pa,action:x,onSubmit:m,relative:w,preventScrollReset:v,viewTransition:E,unstable_defaultShouldRevalidate:L,...M},q)=>{let{unstable_useTransitions:T}=b.useContext(ft),O=zm(),K=_m(x,{relative:w}),F=h.toLowerCase()==="get"?"get":"post",J=typeof x=="string"&&zd.test(x),se=ce=>{if(m&&m(ce),ce.defaultPrevented)return;ce.preventDefault();let ge=ce.nativeEvent.submitter,we=ge?.getAttribute("formmethod")||h,Ee=()=>O(ge||ce.currentTarget,{fetcherKey:c,method:we,navigate:l,replace:f,state:p,relative:w,preventScrollReset:v,viewTransition:E,unstable_defaultShouldRevalidate:L});T&&l!==!1?b.startTransition(()=>Ee()):Ee()};return b.createElement("form",{ref:q,method:F,action:K,onSubmit:u?m:se,...M,"data-discover":!J&&a==="render"?"true":void 0})});Em.displayName="Form";function Cm(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _d(a){let c=b.useContext(tr);return ye(c,Cm(a)),c}function Tm(a,{target:c,replace:l,state:u,preventScrollReset:f,relative:p,viewTransition:h,unstable_defaultShouldRevalidate:x,unstable_useTransitions:m}={}){let w=Ah(),v=ln(),E=Qr(a,{relative:p});return b.useCallback(L=>{if(sm(L,c)){L.preventDefault();let M=l!==void 0?l:Vr(v)===Vr(E),q=()=>w(a,{replace:M,state:u,preventScrollReset:f,relative:p,viewTransition:h,unstable_defaultShouldRevalidate:x});m?b.startTransition(()=>q()):q()}},[v,w,E,l,u,c,a,f,p,h,x,m])}var Pm=0,Rm=()=>`__${String(++Pm)}__`;function zm(){let{router:a}=_d("useSubmit"),{basename:c}=b.useContext(ft),l=Qh(),u=a.fetch,f=a.navigate;return b.useCallback(async(p,h={})=>{let{action:x,method:m,encType:w,formData:v,body:E}=cm(p,c);if(h.navigate===!1){let L=h.fetcherKey||Rm();await u(L,l,h.action||x,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:E,formMethod:h.method||m,formEncType:h.encType||w,flushSync:h.flushSync})}else await f(h.action||x,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:v,body:E,formMethod:h.method||m,formEncType:h.encType||w,replace:h.replace,state:h.state,fromRouteId:l,flushSync:h.flushSync,viewTransition:h.viewTransition})},[u,f,c,l])}function _m(a,{relative:c}={}){let{basename:l}=b.useContext(ft),u=b.useContext(Rt);ye(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),p={...Qr(a||".",{relative:c})},h=ln();if(a==null){p.search=h.search;let x=new URLSearchParams(p.search),m=x.getAll("index");if(m.some(v=>v==="")){x.delete("index"),m.filter(E=>E).forEach(E=>x.append("index",E));let v=x.toString();p.search=v?`?${v}`:""}}return(!a||a===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(p.pathname=p.pathname==="/"?l:Ht([l,p.pathname])),Vr(p)}function Lm(a,{relative:c}={}){let l=b.useContext(kd);ye(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=_d("useViewTransitionState"),f=Qr(a,{relative:c});if(!l.isTransitioning)return!1;let p=Wt(l.currentLocation.pathname,u)||l.currentLocation.pathname,h=Wt(l.nextLocation.pathname,u)||l.nextLocation.pathname;return ga(f.pathname,h)!=null||ga(f.pathname,p)!=null}var So,nd;function Om(){if(nd)return So;nd=1;var a=typeof Element<"u",c=typeof Map=="function",l=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function f(p,h){if(p===h)return!0;if(p&&h&&typeof p=="object"&&typeof h=="object"){if(p.constructor!==h.constructor)return!1;var x,m,w;if(Array.isArray(p)){if(x=p.length,x!=h.length)return!1;for(m=x;m--!==0;)if(!f(p[m],h[m]))return!1;return!0}var v;if(c&&p instanceof Map&&h instanceof Map){if(p.size!==h.size)return!1;for(v=p.entries();!(m=v.next()).done;)if(!h.has(m.value[0]))return!1;for(v=p.entries();!(m=v.next()).done;)if(!f(m.value[1],h.get(m.value[0])))return!1;return!0}if(l&&p instanceof Set&&h instanceof Set){if(p.size!==h.size)return!1;for(v=p.entries();!(m=v.next()).done;)if(!h.has(m.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(p)&&ArrayBuffer.isView(h)){if(x=p.length,x!=h.length)return!1;for(m=x;m--!==0;)if(p[m]!==h[m])return!1;return!0}if(p.constructor===RegExp)return p.source===h.source&&p.flags===h.flags;if(p.valueOf!==Object.prototype.valueOf&&typeof p.valueOf=="function"&&typeof h.valueOf=="function")return p.valueOf()===h.valueOf();if(p.toString!==Object.prototype.toString&&typeof p.toString=="function"&&typeof h.toString=="function")return p.toString()===h.toString();if(w=Object.keys(p),x=w.length,x!==Object.keys(h).length)return!1;for(m=x;m--!==0;)if(!Object.prototype.hasOwnProperty.call(h,w[m]))return!1;if(a&&p instanceof Element)return!1;for(m=x;m--!==0;)if(!((w[m]==="_owner"||w[m]==="__v"||w[m]==="__o")&&p.$$typeof)&&!f(p[w[m]],h[w[m]]))return!1;return!0}return p!==p&&h!==h}return So=function(h,x){try{return f(h,x)}catch(m){if((m.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw m}},So}var Im=Om();const Mm=wa(Im);var Eo,rd;function Dm(){if(rd)return Eo;rd=1;var a=function(c,l,u,f,p,h,x,m){if(!c){var w;if(l===void 0)w=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var v=[u,f,p,h,x,m],E=0;w=new Error(l.replace(/%s/g,function(){return v[E++]})),w.name="Invariant Violation"}throw w.framesToPop=1,w}};return Eo=a,Eo}var Am=Dm();const id=wa(Am);var Co,ad;function Fm(){return ad||(ad=1,Co=function(c,l,u,f){var p=u?u.call(f,c,l):void 0;if(p!==void 0)return!!p;if(c===l)return!0;if(typeof c!="object"||!c||typeof l!="object"||!l)return!1;var h=Object.keys(c),x=Object.keys(l);if(h.length!==x.length)return!1;for(var m=Object.prototype.hasOwnProperty.bind(l),w=0;w<h.length;w++){var v=h[w];if(!m(v))return!1;var E=c[v],L=l[v];if(p=u?u.call(f,E,L,v):void 0,p===!1||p===void 0&&E!==L)return!1}return!0}),Co}var Hm=Fm();const Wm=wa(Hm);var Ld=(a=>(a.BASE="base",a.BODY="body",a.HEAD="head",a.HTML="html",a.LINK="link",a.META="meta",a.NOSCRIPT="noscript",a.SCRIPT="script",a.STYLE="style",a.TITLE="title",a.FRAGMENT="Symbol(react.fragment)",a))(Ld||{}),To={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},sd=Object.values(Ld),Vo={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Um=Object.entries(Vo).reduce((a,[c,l])=>(a[l]=c,a),{}),jt="data-rh",Jn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Zn=(a,c)=>{for(let l=a.length-1;l>=0;l-=1){const u=a[l];if(Object.prototype.hasOwnProperty.call(u,c))return u[c]}return null},Bm=a=>{let c=Zn(a,"title");const l=Zn(a,Jn.TITLE_TEMPLATE);if(Array.isArray(c)&&(c=c.join("")),l&&c)return l.replace(/%s/g,()=>c);const u=Zn(a,Jn.DEFAULT_TITLE);return c||u||void 0},$m=a=>Zn(a,Jn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Po=(a,c)=>c.filter(l=>typeof l[a]<"u").map(l=>l[a]).reduce((l,u)=>({...l,...u}),{}),Km=(a,c)=>c.filter(l=>typeof l.base<"u").map(l=>l.base).reverse().reduce((l,u)=>{if(!l.length){const f=Object.keys(u);for(let p=0;p<f.length;p+=1){const x=f[p].toLowerCase();if(a.indexOf(x)!==-1&&u[x])return l.concat(u)}}return l},[]),Vm=a=>console&&typeof console.warn=="function"&&console.warn(a),Br=(a,c,l)=>{const u={};return l.filter(f=>Array.isArray(f[a])?!0:(typeof f[a]<"u"&&Vm(`Helmet: ${a} should be of type "Array". Instead found type "${typeof f[a]}"`),!1)).map(f=>f[a]).reverse().reduce((f,p)=>{const h={};p.filter(m=>{let w;const v=Object.keys(m);for(let L=0;L<v.length;L+=1){const M=v[L],q=M.toLowerCase();c.indexOf(q)!==-1&&!(w==="rel"&&m[w].toLowerCase()==="canonical")&&!(q==="rel"&&m[q].toLowerCase()==="stylesheet")&&(w=q),c.indexOf(M)!==-1&&(M==="innerHTML"||M==="cssText"||M==="itemprop")&&(w=M)}if(!w||!m[w])return!1;const E=m[w].toLowerCase();return u[w]||(u[w]={}),h[w]||(h[w]={}),u[w][E]?!1:(h[w][E]=!0,!0)}).reverse().forEach(m=>f.push(m));const x=Object.keys(h);for(let m=0;m<x.length;m+=1){const w=x[m],v={...u[w],...h[w]};u[w]=v}return f},[]).reverse()},qm=(a,c)=>{if(Array.isArray(a)&&a.length){for(let l=0;l<a.length;l+=1)if(a[l][c])return!0}return!1},Ym=a=>({baseTag:Km(["href"],a),bodyAttributes:Po("bodyAttributes",a),defer:Zn(a,Jn.DEFER),encode:Zn(a,Jn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Po("htmlAttributes",a),linkTags:Br("link",["rel","href"],a),metaTags:Br("meta",["name","charset","http-equiv","property","itemprop"],a),noscriptTags:Br("noscript",["innerHTML"],a),onChangeClientState:$m(a),scriptTags:Br("script",["src","innerHTML"],a),styleTags:Br("style",["cssText"],a),title:Bm(a),titleAttributes:Po("titleAttributes",a),prioritizeSeoTags:qm(a,Jn.PRIORITIZE_SEO_TAGS)}),Od=a=>Array.isArray(a)?a.join(""):a,Gm=(a,c)=>{const l=Object.keys(a);for(let u=0;u<l.length;u+=1)if(c[l[u]]&&c[l[u]].includes(a[l[u]]))return!0;return!1},Ro=(a,c)=>Array.isArray(a)?a.reduce((l,u)=>(Gm(u,c)?l.priority.push(u):l.default.push(u),l),{priority:[],default:[]}):{default:a,priority:[]},od=(a,c)=>({...a,[c]:void 0}),Qm=["noscript","script","style"],Oo=(a,c=!0)=>c===!1?String(a):String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Id=a=>Object.keys(a).reduce((c,l)=>{const u=typeof a[l]<"u"?`${l}="${a[l]}"`:`${l}`;return c?`${c} ${u}`:u},""),Xm=(a,c,l,u)=>{const f=Id(l),p=Od(c);return f?`<${a} ${jt}="true" ${f}>${Oo(p,u)}</${a}>`:`<${a} ${jt}="true">${Oo(p,u)}</${a}>`},Jm=(a,c,l=!0)=>c.reduce((u,f)=>{const p=f,h=Object.keys(p).filter(w=>!(w==="innerHTML"||w==="cssText")).reduce((w,v)=>{const E=typeof p[v]>"u"?v:`${v}="${Oo(p[v],l)}"`;return w?`${w} ${E}`:E},""),x=p.innerHTML||p.cssText||"",m=Qm.indexOf(a)===-1;return`${u}<${a} ${jt}="true" ${h}${m?"/>":`>${x}</${a}>`}`},""),Md=(a,c={})=>Object.keys(a).reduce((l,u)=>{const f=Vo[u];return l[f||u]=a[u],l},c),Zm=(a,c,l)=>{const u={key:c,[jt]:!0},f=Md(l,u);return[Pe.createElement("title",f,c)]},ma=(a,c)=>c.map((l,u)=>{const f={key:u,[jt]:!0};return Object.keys(l).forEach(p=>{const x=Vo[p]||p;if(x==="innerHTML"||x==="cssText"){const m=l.innerHTML||l.cssText;f.dangerouslySetInnerHTML={__html:m}}else f[x]=l[p]}),Pe.createElement(a,f)}),ut=(a,c,l=!0)=>{switch(a){case"title":return{toComponent:()=>Zm(a,c.title,c.titleAttributes),toString:()=>Xm(a,c.title,c.titleAttributes,l)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Md(c),toString:()=>Id(c)};default:return{toComponent:()=>ma(a,c),toString:()=>Jm(a,c,l)}}},eg=({metaTags:a,linkTags:c,scriptTags:l,encode:u})=>{const f=Ro(a,To.meta),p=Ro(c,To.link),h=Ro(l,To.script);return{priorityMethods:{toComponent:()=>[...ma("meta",f.priority),...ma("link",p.priority),...ma("script",h.priority)],toString:()=>`${ut("meta",f.priority,u)} ${ut("link",p.priority,u)} ${ut("script",h.priority,u)}`},metaTags:f.default,linkTags:p.default,scriptTags:h.default}},tg=a=>{const{baseTag:c,bodyAttributes:l,encode:u=!0,htmlAttributes:f,noscriptTags:p,styleTags:h,title:x="",titleAttributes:m,prioritizeSeoTags:w}=a;let{linkTags:v,metaTags:E,scriptTags:L}=a,M={toComponent:()=>{},toString:()=>""};return w&&({priorityMethods:M,linkTags:v,metaTags:E,scriptTags:L}=eg(a)),{priority:M,base:ut("base",c,u),bodyAttributes:ut("bodyAttributes",l,u),htmlAttributes:ut("htmlAttributes",f,u),link:ut("link",v,u),meta:ut("meta",E,u),noscript:ut("noscript",p,u),script:ut("script",L,u),style:ut("style",h,u),title:ut("title",{title:x,titleAttributes:m},u)}},Io=tg,ca=[],Dd=!!(typeof window<"u"&&window.document&&window.document.createElement),Mo=class{instances=[];canUseDOM=Dd;context;value={setHelmet:a=>{this.context.helmet=a},helmetInstances:{get:()=>this.canUseDOM?ca:this.instances,add:a=>{(this.canUseDOM?ca:this.instances).push(a)},remove:a=>{const c=(this.canUseDOM?ca:this.instances).indexOf(a);(this.canUseDOM?ca:this.instances).splice(c,1)}}};constructor(a,c){this.context=a,this.canUseDOM=c||!1,c||(a.helmet=Io({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ng={},Ad=Pe.createContext(ng),Fd=class Hd extends b.Component{static canUseDOM=Dd;helmetData;constructor(c){super(c),this.helmetData=new Mo(this.props.context||{},Hd.canUseDOM)}render(){return Pe.createElement(Ad.Provider,{value:this.helmetData.value},this.props.children)}},Gn=(a,c)=>{const l=document.head||document.querySelector("head"),u=l.querySelectorAll(`${a}[${jt}]`),f=[].slice.call(u),p=[];let h;return c&&c.length&&c.forEach(x=>{const m=document.createElement(a);for(const w in x)if(Object.prototype.hasOwnProperty.call(x,w))if(w==="innerHTML")m.innerHTML=x.innerHTML;else if(w==="cssText")m.styleSheet?m.styleSheet.cssText=x.cssText:m.appendChild(document.createTextNode(x.cssText));else{const v=w,E=typeof x[v]>"u"?"":x[v];m.setAttribute(w,E)}m.setAttribute(jt,"true"),f.some((w,v)=>(h=v,m.isEqualNode(w)))?f.splice(h,1):p.push(m)}),f.forEach(x=>x.parentNode?.removeChild(x)),p.forEach(x=>l.appendChild(x)),{oldTags:f,newTags:p}},Do=(a,c)=>{const l=document.getElementsByTagName(a)[0];if(!l)return;const u=l.getAttribute(jt),f=u?u.split(","):[],p=[...f],h=Object.keys(c);for(const x of h){const m=c[x]||"";l.getAttribute(x)!==m&&l.setAttribute(x,m),f.indexOf(x)===-1&&f.push(x);const w=p.indexOf(x);w!==-1&&p.splice(w,1)}for(let x=p.length-1;x>=0;x-=1)l.removeAttribute(p[x]);f.length===p.length?l.removeAttribute(jt):l.getAttribute(jt)!==h.join(",")&&l.setAttribute(jt,h.join(","))},rg=(a,c)=>{typeof a<"u"&&document.title!==a&&(document.title=Od(a)),Do("title",c)},ld=(a,c)=>{const{baseTag:l,bodyAttributes:u,htmlAttributes:f,linkTags:p,metaTags:h,noscriptTags:x,onChangeClientState:m,scriptTags:w,styleTags:v,title:E,titleAttributes:L}=a;Do("body",u),Do("html",f),rg(E,L);const M={baseTag:Gn("base",l),linkTags:Gn("link",p),metaTags:Gn("meta",h),noscriptTags:Gn("noscript",x),scriptTags:Gn("script",w),styleTags:Gn("style",v)},q={},T={};Object.keys(M).forEach(O=>{const{newTags:K,oldTags:F}=M[O];K.length&&(q[O]=K),F.length&&(T[O]=M[O].oldTags)}),c&&c(),m(a,q,T)},$r=null,ig=a=>{$r&&cancelAnimationFrame($r),a.defer?$r=requestAnimationFrame(()=>{ld(a,()=>{$r=null})}):(ld(a),$r=null)},ag=ig,cd=class extends b.Component{rendered=!1;shouldComponentUpdate(a){return!Wm(a,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:a}=this.props.context;a.remove(this),this.emitChange()}emitChange(){const{helmetInstances:a,setHelmet:c}=this.props.context;let l=null;const u=Ym(a.get().map(f=>{const p={...f.props};return delete p.context,p}));Fd.canUseDOM?ag(u):Io&&(l=Io(u)),c(l)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:a}=this.props.context;a.add(this),this.emitChange()}render(){return this.init(),null}},sg=class extends b.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(a){return!Mm(od(this.props,"helmetData"),od(a,"helmetData"))}mapNestedChildrenToProps(a,c){if(!c)return null;switch(a.type){case"script":case"noscript":return{innerHTML:c};case"style":return{cssText:c};default:throw new Error(`<${a.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(a,c,l,u){return{...c,[a.type]:[...c[a.type]||[],{...l,...this.mapNestedChildrenToProps(a,u)}]}}mapObjectTypeChildren(a,c,l,u){switch(a.type){case"title":return{...c,[a.type]:u,titleAttributes:{...l}};case"body":return{...c,bodyAttributes:{...l}};case"html":return{...c,htmlAttributes:{...l}};default:return{...c,[a.type]:{...l}}}}mapArrayTypeChildrenToProps(a,c){let l={...c};return Object.keys(a).forEach(u=>{l={...l,[u]:a[u]}}),l}warnOnInvalidChildren(a,c){return id(sd.some(l=>a.type===l),typeof a.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${sd.join(", ")} are allowed. Helmet does not support rendering <${a.type}> elements. Refer to our API for more information.`),id(!c||typeof c=="string"||Array.isArray(c)&&!c.some(l=>typeof l!="string"),`Helmet expects a string as a child of <${a.type}>. Did you forget to wrap your children in braces? ( <${a.type}>{\`\`}</${a.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(a,c){let l={};return Pe.Children.forEach(a,u=>{if(!u||!u.props)return;const{children:f,...p}=u.props,h=Object.keys(p).reduce((m,w)=>(m[Um[w]||w]=p[w],m),{});let{type:x}=u;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(u,f),x){case"Symbol(react.fragment)":c=this.mapChildrenToProps(f,c);break;case"link":case"meta":case"noscript":case"script":case"style":l=this.flattenArrayTypeChildren(u,l,h,f);break;default:c=this.mapObjectTypeChildren(u,c,h,f);break}}),this.mapArrayTypeChildrenToProps(l,c)}render(){const{children:a,...c}=this.props;let l={...c},{helmetData:u}=c;if(a&&(l=this.mapChildrenToProps(a,l)),u&&!(u instanceof Mo)){const f=u;u=new Mo(f.context,!0),delete l.helmetData}return u?Pe.createElement(cd,{...l,context:u.value}):Pe.createElement(Ad.Consumer,null,f=>Pe.createElement(cd,{...l,context:f}))}},Wd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ud=Pe.createContext&&Pe.createContext(Wd),og=["attr","size","title"];function lg(a,c){if(a==null)return{};var l=cg(a,c),u,f;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(f=0;f<p.length;f++)u=p[f],!(c.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(a,u)&&(l[u]=a[u])}return l}function cg(a,c){if(a==null)return{};var l={};for(var u in a)if(Object.prototype.hasOwnProperty.call(a,u)){if(c.indexOf(u)>=0)continue;l[u]=a[u]}return l}function xa(){return xa=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a},xa.apply(this,arguments)}function dd(a,c){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);c&&(u=u.filter(function(f){return Object.getOwnPropertyDescriptor(a,f).enumerable})),l.push.apply(l,u)}return l}function va(a){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?dd(Object(l),!0).forEach(function(u){ug(a,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):dd(Object(l)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(l,u))})}return a}function ug(a,c,l){return c=dg(c),c in a?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,a}function dg(a){var c=fg(a,"string");return typeof c=="symbol"?c:c+""}function fg(a,c){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var u=l.call(a,c);if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function Ud(a){return a&&a.map((c,l)=>Pe.createElement(c.tag,va({key:l},c.attr),Ud(c.child)))}function Le(a){return c=>Pe.createElement(pg,xa({attr:va({},a.attr)},c),Ud(a.child))}function pg(a){var c=l=>{var{attr:u,size:f,title:p}=a,h=lg(a,og),x=f||l.size||"1em",m;return l.className&&(m=l.className),a.className&&(m=(m?m+" ":"")+a.className),Pe.createElement("svg",xa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,u,h,{className:m,style:va(va({color:a.color||l.color},l.style),a.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),p&&Pe.createElement("title",null,p),a.children)};return ud!==void 0?Pe.createElement(ud.Consumer,null,l=>c(l)):c(Wd)}function hg(a){return Le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(a)}function mg(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(a)}function gg(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(a)}function xg(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(a)}function fd(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(a)}function vg(a){return Le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}function yg(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(a)}function wg(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(a)}function Bd(a){return Le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(a)}function $d(a){return Le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(a)}function jg(a){return Le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(a)}function Kd(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(a)}function kg(a){return Le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(a)}function Ng(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(a)}function bg(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(a)}function Sg(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(a)}function Eg(a){return Le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(a)}function ya(a){return Le({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(a)}function Cg(){const[a,c]=b.useState(!1);b.useEffect(()=>{const u=localStorage.getItem("theme"),f=window.matchMedia("(prefers-color-scheme: dark)").matches,p=u||(f?"dark":"light");c(p==="dark"),document.documentElement.setAttribute("data-theme",p)},[]);const l=()=>{const u=a?"light":"dark";c(!a),document.documentElement.setAttribute("data-theme",u),localStorage.setItem("theme",u)};return n.jsx("button",{className:`theme-toggle ${a?"dark":"light"}`,onClick:l,"aria-label":`Switch to ${a?"light":"dark"} mode`,title:`Switch to ${a?"light":"dark"} mode`,children:n.jsx("span",{className:"theme-toggle-track",children:n.jsx("span",{className:"theme-toggle-thumb",children:a?n.jsx(Ng,{className:"icon"}):n.jsx(Eg,{className:"icon"})})})})}const Tg=()=>{const[a,c]=b.useState(!1),l=()=>{c(!a)},u=()=>{c(!1)};return n.jsxs("nav",{className:"navbar",children:[n.jsx(V,{to:"/",className:"brand",onClick:u,children:n.jsx("img",{src:"/assets/logo.jpg",alt:"EducateHers Kenya",className:"brand-logo",onError:f=>{console.error("Logo failed to load"),f.currentTarget.style.display="none"}})}),n.jsxs("button",{className:`hamburger ${a?"active":""}`,onClick:l,"aria-label":"Toggle menu",children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]}),n.jsxs("ul",{className:`navlinks ${a?"open":""}`,children:[n.jsx("li",{children:n.jsx(Ft,{to:"/",end:!0,onClick:u,children:"Home"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/what-we-do",onClick:u,children:"What We Do"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/events",onClick:u,children:"Events"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/volunteer",onClick:u,children:"Volunteer"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/blog",onClick:u,children:"Blog"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/team",onClick:u,children:"Team"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/gallery",onClick:u,children:"Gallery"})}),n.jsx("li",{children:n.jsx(Ft,{to:"/contact",onClick:u,children:"Contact"})}),n.jsx("li",{className:"theme-toggle-nav",children:n.jsx(Cg,{})}),n.jsx("li",{children:n.jsx(V,{to:"/donate",className:"donate-btn",onClick:u,children:"❤️ Donate"})})]})]})};function zo(a){return a?a.trim().replace(/[<>]/g,"").replace(/javascript:/gi,"").replace(/on\w+\s*=/gi,"").slice(0,1e4):""}function Vd(a){return a?a.trim().toLowerCase().slice(0,254):""}function qd(a){if(!a||a.length>254||!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a))return!1;const l=["tempmail","throwaway","guerrillamail","10minutemail"],u=a.split("@")[1]?.toLowerCase()||"";return!l.some(f=>u.includes(f))}function Pg(a){return!a||a.trim().length<2||a.length>100?!1:/^[a-zA-ZÀ-ÿ\s'-]+$/.test(a)}function Rg(a){return!a||a.trim().length<10||a.length>5e3?!1:![/\b(viagra|cialis|casino|lottery|prize)\b/gi,/\b(click here|buy now|limited offer)\b/gi,/(http[s]?:\/\/){3,}/gi].some(l=>l.test(a))}const Qn={};function Yd(a,c=3,l=6e4){const u=Date.now();return Qn[a]||(Qn[a]=[]),Qn[a]=Qn[a].filter(f=>u-f<l),Qn[a].length>=c?!1:(Qn[a].push(u),!0)}function Gd(){const a=[navigator.userAgent,navigator.language,new Date().getTimezoneOffset(),screen.width,screen.height];let c=0;const l=a.join("|");for(let u=0;u<l.length;u++){const f=l.charCodeAt(u);c=(c<<5)-c+f,c=c&c}return c.toString(36)}function Ao(a){return[/<script[^>]*>.*?<\/script>/gi,/<iframe[^>]*>.*?<\/iframe>/gi,/javascript:/gi,/onerror\s*=/gi,/onclick\s*=/gi,/<embed[^>]*>/gi,/<object[^>]*>/gi].some(l=>l.test(a))}async function zg(a){const c="b748c57c-61ad-4d84-a4cc-42ee20d806d3",l=Gd();if(!Yd(`contact-${l}`,3,6e4))return{success:!1,message:"Too many submission attempts. Please wait a moment before trying again."};const u=zo(a.name),f=Vd(a.email),p=zo(a.message),h=zo(a.reason);if(!Pg(u))return{success:!1,message:"Please enter a valid name (2-100 characters, letters only)."};if(!qd(f))return{success:!1,message:"Please enter a valid email address."};if(!Rg(p))return{success:!1,message:"Message must be between 10 and 5000 characters and contain appropriate content."};if(Ao(p)||Ao(u))return{success:!1,message:"Invalid content detected. Please remove any HTML or script tags."};try{const m=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:c,name:u,email:f,subject:`Contact Form: ${h}`,message:`
Reason: ${h}

Message:
${p}

---
From: ${u}
Email: ${f}
        `.trim(),from_name:"EducateHers Kenya Website",replyto:f,botcheck:!1})})).json();if(m.success)return{success:!0,message:"Thank you for your message! We will get back to you soon."};throw new Error(m.message||"Failed to submit form")}catch(x){return console.error("Contact form submission error:",x),{success:!1,message:"Sorry, something went wrong. Please try again or email us directly at info@educateherskenya.net"}}}async function _g(a){const c="b748c57c-61ad-4d84-a4cc-42ee20d806d3",l=Gd();if(!Yd(`newsletter-${l}`,3,6e4))return{success:!1,message:"Too many subscription attempts. Please wait a moment before trying again."};const u=Vd(a.email);if(!qd(u))return{success:!1,message:"Please enter a valid email address."};if(Ao(u))return{success:!1,message:"Invalid email format detected."};try{const p=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:c,email:u,subject:"New Newsletter Subscription",message:`
New newsletter subscription request:

Email: ${u}
Subscribed at: ${new Date().toLocaleString()}
        `.trim(),from_name:"EducateHers Kenya Website",replyto:u,botcheck:!1})})).json();if(p.success)return{success:!0,message:"Successfully subscribed to our newsletter!"};throw new Error(p.message||"Failed to subscribe")}catch(f){return console.error("Newsletter subscription error:",f),{success:!1,message:"Sorry, something went wrong. Please try again later."}}}function Qd(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}function Lg(){const[a,c]=b.useState(""),[l,u]=b.useState(!1),[f,p]=b.useState(!1),[h,x]=b.useState(""),m=async w=>{if(w.preventDefault(),!a.trim()){x("Please enter your email");return}if(!Qd(a)){x("Please enter a valid email");return}p(!0),x("");try{const v=await _g({email:a});v.success?(u(!0),c(""),setTimeout(()=>u(!1),5e3)):x(v.message)}catch(v){x("Something went wrong. Please try again."),console.error("Newsletter subscription error:",v)}finally{p(!1)}};return n.jsxs("footer",{className:"footer",children:[n.jsx("div",{className:"footer-main",children:n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"footer-column",children:[n.jsx(V,{to:"/",className:"footer-brand",children:n.jsx("img",{src:"/assets/logo.jpg",alt:"EducateHers Kenya",className:"footer-logo"})}),n.jsx("p",{className:"footer-about",children:"Empowering girls through education and advocating for gender equality in Kenya and beyond."}),n.jsxs("div",{className:"footer-social",children:[n.jsx("a",{href:"https://www.facebook.com/educatehers",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Facebook",children:n.jsx(hg,{})}),n.jsx("a",{href:"https://x.com/EducateHERs",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Twitter",children:n.jsx(xg,{})}),n.jsx("a",{href:"https://www.instagram.com/educateherskenya/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"Instagram",children:n.jsx(mg,{})}),n.jsx("a",{href:"https://www.linkedin.com/company/educate-hers/",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"LinkedIn",children:n.jsx(gg,{})}),n.jsx("a",{href:"https://www.youtube.com/@EducateHERs",target:"_blank",rel:"noopener noreferrer",className:"footer-social-icon","aria-label":"YouTube",children:n.jsx(vg,{})})]})]}),n.jsxs("div",{className:"footer-column",children:[n.jsx("h3",{className:"footer-heading",children:"Quick Links"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(V,{to:"/",children:"Home"})}),n.jsx("li",{children:n.jsx(V,{to:"/what-we-do",children:"What We Do"})}),n.jsx("li",{children:n.jsx(V,{to:"/events",children:"Events"})}),n.jsx("li",{children:n.jsx(V,{to:"/volunteer",children:"Volunteer"})}),n.jsx("li",{children:n.jsx(V,{to:"/blog",children:"Blog"})}),n.jsx("li",{children:n.jsx(V,{to:"/contact",children:"Contact Us"})})]})]}),n.jsxs("div",{className:"footer-column",children:[n.jsx("h3",{className:"footer-heading",children:"Get Involved"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(V,{to:"/volunteer",children:"Become a Volunteer"})}),n.jsx("li",{children:n.jsx(V,{to:"/donate",children:"Make a Donation"})}),n.jsx("li",{children:n.jsx(V,{to:"/events",children:"Attend an Event"})}),n.jsx("li",{children:n.jsx(V,{to:"/contact",children:"Partner with Us"})}),n.jsx("li",{children:n.jsx(V,{to:"/donate",children:"Sponsor a Girl"})})]})]}),n.jsxs("div",{className:"footer-column",children:[n.jsx("h3",{className:"footer-heading",children:"Stay Connected"}),n.jsxs("div",{className:"footer-contact",children:[n.jsxs("div",{className:"footer-contact-item",children:[n.jsx("i",{className:"fas fa-envelope"}),n.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),n.jsxs("div",{className:"footer-contact-item",children:[n.jsx("i",{className:"fas fa-phone"}),n.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]}),n.jsxs("div",{className:"footer-contact-item",children:[n.jsx("i",{className:"fas fa-map-marker-alt"}),n.jsxs("span",{children:["Galleria Office and Business Park",n.jsx("br",{}),"Seminary Road, Karen Area",n.jsx("br",{}),"Nairobi, Kenya",n.jsx("br",{}),"P. O. Box 46162-00100"]})]})]}),n.jsxs("div",{className:"footer-newsletter",children:[n.jsx("h4",{className:"footer-newsletter-title",children:"Newsletter"}),n.jsx("p",{className:"footer-newsletter-text",children:"Subscribe to get updates"}),n.jsxs("form",{onSubmit:m,className:"newsletter-form",children:[n.jsx("input",{type:"email",value:a,onChange:w=>{c(w.target.value),x("")},placeholder:"Your email",required:!0,className:"newsletter-input","aria-label":"Email address for newsletter",disabled:f}),n.jsx("button",{type:"submit",className:"newsletter-btn","aria-label":"Subscribe to newsletter",disabled:f,children:f?n.jsx("i",{className:"fas fa-spinner fa-spin"}):n.jsx("i",{className:"fas fa-paper-plane"})})]}),l&&n.jsxs("p",{className:"newsletter-success",children:[n.jsx("i",{className:"fas fa-check-circle"})," Thank you for subscribing!"]}),h&&n.jsxs("p",{className:"newsletter-error",children:[n.jsx("i",{className:"fas fa-exclamation-circle"})," ",h]})]})]})]})}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("div",{className:"footer-bottom-content",children:[n.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," EducateHers Kenya. All rights reserved."]}),n.jsxs("div",{className:"footer-legal",children:[n.jsx(V,{to:"/privacy",children:"Privacy Policy"}),n.jsx("span",{className:"footer-divider",children:"•"}),n.jsx(V,{to:"/terms",children:"Terms of Service"}),n.jsx("span",{className:"footer-divider",children:"•"}),n.jsx(V,{to:"/cookies",children:"Cookie Policy"})]})]})})]})}function Og(){const a=ln(),c=void 0;return b.useEffect(()=>{},[c]),b.useEffect(()=>{},[a,c]),null}function Ig(){const[a,c]=b.useState(!1),l="254703257597",u="Hello EducateHers Kenya! I would like to know more about your programs.",f=()=>{const p=`https://wa.me/${l}?text=${encodeURIComponent(u)}`;window.open(p,"_blank","noopener,noreferrer")};return n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"whatsapp-widget",onClick:()=>c(!a),"aria-label":"Open WhatsApp chat",children:a?n.jsx(ya,{}):n.jsx(fd,{})}),a&&n.jsxs("div",{className:"whatsapp-popup",children:[n.jsxs("div",{className:"whatsapp-header",children:[n.jsx(fd,{}),n.jsx("h3",{children:"Chat with us"}),n.jsx("button",{onClick:()=>c(!1),"aria-label":"Close WhatsApp popup",children:n.jsx(ya,{})})]}),n.jsxs("div",{className:"whatsapp-body",children:[n.jsx("p",{children:"Hello! 👋"}),n.jsx("p",{children:"How can we help you today?"}),n.jsx("button",{className:"whatsapp-start-chat",onClick:f,children:"Start Chat"})]})]})]})}function Mg(){const[a,c]=b.useState(!1),[l,u]=b.useState(""),[f,p]=b.useState(!1);b.useEffect(()=>{if(localStorage.getItem("newsletterPopupSeen"))return;const w=E=>{E.clientY<=0&&c(!0)},v=setTimeout(()=>{localStorage.getItem("newsletterPopupSeen")||c(!0)},3e4);return document.addEventListener("mouseleave",w),()=>{document.removeEventListener("mouseleave",w),clearTimeout(v)}},[]);const h=()=>{c(!1),localStorage.setItem("newsletterPopupSeen","true")},x=m=>{m.preventDefault(),console.log("Newsletter signup:",l),p(!0),setTimeout(()=>{h()},2e3)};return a?n.jsx("div",{className:"newsletter-overlay",onClick:h,children:n.jsxs("div",{className:"newsletter-popup",onClick:m=>m.stopPropagation(),children:[n.jsx("button",{className:"newsletter-close",onClick:h,"aria-label":"Close newsletter popup",children:n.jsx(ya,{})}),f?n.jsxs("div",{className:"newsletter-success",children:[n.jsx("h2",{children:"Thank You! 🎉"}),n.jsx("p",{children:"You've successfully subscribed to our newsletter."})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"newsletter-icon",children:n.jsx(Kd,{})}),n.jsx("h2",{children:"Stay Connected!"}),n.jsx("p",{children:"Subscribe to our newsletter for updates on our programs, events, and impact stories."}),n.jsxs("form",{onSubmit:x,className:"newsletter-form",children:[n.jsx("input",{type:"email",placeholder:"Enter your email",value:l,onChange:m=>u(m.target.value),required:!0,"aria-label":"Email address"}),n.jsx("button",{type:"submit",children:"Subscribe"})]}),n.jsx("p",{className:"newsletter-privacy",children:"We respect your privacy. Unsubscribe at any time."})]})]})}):null}const Dg=()=>{const[a,c]=b.useState(!1);b.useEffect(()=>{const f=h=>{h.clientY<=0&&!a&&c(!0)},p=setTimeout(()=>{document.addEventListener("mouseleave",f)},3e3);return()=>{clearTimeout(p),document.removeEventListener("mouseleave",f)}},[a]);const l=()=>{c(!1)},u=()=>{window.open("https://www.mchanga.africa/fundraiser/125738","_blank","noopener,noreferrer"),c(!1)};return a?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"donation-exit-overlay",onClick:l}),n.jsxs("div",{className:"donation-exit-popup",children:[n.jsx("button",{className:"donation-exit-close",onClick:l,"aria-label":"Close popup",children:n.jsx("i",{className:"fas fa-times"})}),n.jsxs("div",{className:"donation-exit-content",children:[n.jsx("div",{className:"donation-exit-icon",children:n.jsx("i",{className:"fas fa-heart"})}),n.jsx("h2",{className:"donation-exit-title",children:"Wait! Before You Go..."}),n.jsx("p",{className:"donation-exit-message",children:"Your donation can change a girl's life. Help us provide education to girls in need."}),n.jsxs("div",{className:"donation-exit-stats",children:[n.jsxs("div",{className:"exit-stat-item",children:[n.jsx("div",{className:"exit-stat-number",children:"500+"}),n.jsx("div",{className:"exit-stat-label",children:"Girls Supported"})]}),n.jsxs("div",{className:"exit-stat-item",children:[n.jsx("div",{className:"exit-stat-number",children:"100%"}),n.jsx("div",{className:"exit-stat-label",children:"Goes to Education"})]})]}),n.jsxs("button",{className:"donation-exit-button",onClick:u,children:[n.jsx("span",{className:"button-icon",children:n.jsx("i",{className:"fas fa-hand-holding-heart"})}),n.jsx("span",{className:"button-text",children:"Donate via M-Changa"}),n.jsx("span",{className:"button-arrow",children:n.jsx("i",{className:"fas fa-arrow-right"})})]}),n.jsx("button",{className:"donation-exit-decline",onClick:l,children:"Maybe Later"})]})]})]}):null};function dt({title:a="EducateHers Kenya - Empowering Girls Through Education",description:c="EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women in Kenya.",keywords:l="girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls",author:u="EducateHers Kenya",image:f="https://educateherskenya.org/og-image.jpg",url:p="https://educateherskenya.org",type:h="website",publishedTime:x,modifiedTime:m,section:w,tags:v=[]}){const E=a.includes("EducateHers Kenya")?a:`${a} | EducateHers Kenya`,L=typeof window<"u"?window.location.href:p;return n.jsxs(sg,{children:[n.jsx("title",{children:E}),n.jsx("meta",{name:"title",content:E}),n.jsx("meta",{name:"description",content:c}),n.jsx("meta",{name:"keywords",content:l}),n.jsx("meta",{name:"author",content:u}),n.jsx("meta",{name:"robots",content:"index, follow"}),n.jsx("meta",{name:"language",content:"English"}),n.jsx("meta",{name:"revisit-after",content:"7 days"}),n.jsx("link",{rel:"canonical",href:L}),n.jsx("meta",{property:"og:type",content:h}),n.jsx("meta",{property:"og:url",content:L}),n.jsx("meta",{property:"og:title",content:E}),n.jsx("meta",{property:"og:description",content:c}),n.jsx("meta",{property:"og:image",content:f}),n.jsx("meta",{property:"og:site_name",content:"EducateHers Kenya"}),n.jsx("meta",{property:"og:locale",content:"en_US"}),x&&n.jsx("meta",{property:"article:published_time",content:x}),m&&n.jsx("meta",{property:"article:modified_time",content:m}),w&&n.jsx("meta",{property:"article:section",content:w}),v.map(M=>n.jsx("meta",{property:"article:tag",content:M},M)),n.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),n.jsx("meta",{name:"twitter:url",content:L}),n.jsx("meta",{name:"twitter:title",content:E}),n.jsx("meta",{name:"twitter:description",content:c}),n.jsx("meta",{name:"twitter:image",content:f}),n.jsx("meta",{name:"twitter:site",content:"@EducateHERs"}),n.jsx("meta",{name:"twitter:creator",content:"@EducateHERs"}),n.jsx("meta",{name:"theme-color",content:"#00a9ce"}),n.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),n.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),n.jsx("meta",{name:"format-detection",content:"telephone=no"}),n.jsx("meta",{name:"geo.region",content:"KE"}),n.jsx("meta",{name:"geo.placename",content:"Kenya"}),n.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"NGO",name:"EducateHers Kenya",alternateName:"EducateHers",url:"https://educateherskenya.org",logo:"https://educateherskenya.org/logo.png",description:c,address:{"@type":"PostalAddress",addressCountry:"KE",addressLocality:"Kenya"},sameAs:["https://www.facebook.com/educatehers","https://x.com/EducateHERs","https://www.instagram.com/educateherskenya/","https://www.linkedin.com/company/educate-hers/","https://www.youtube.com/@EducateHERs"],contactPoint:{"@type":"ContactPoint",contactType:"Customer Service",email:"info@educateherskenya.org"}})})]})}function Fo({children:a,animation:c="fade-in",delay:l=0,threshold:u=.1}){const[f,p]=b.useState(!1),h=b.useRef(null);return b.useEffect(()=>{const x=new IntersectionObserver(([w])=>{w.isIntersecting&&setTimeout(()=>{p(!0)},l)},{threshold:u}),m=h.current;return m&&x.observe(m),()=>{m&&x.unobserve(m)}},[l,u]),n.jsx("div",{ref:h,className:`scroll-animation ${c} ${f?"visible":""}`,children:a})}function ua({end:a,duration:c=2e3,suffix:l=""}){const[u,f]=b.useState(0),[p,h]=b.useState(!1),x=b.useRef(null);return b.useEffect(()=>{const m=new IntersectionObserver(([v])=>{if(v.isIntersecting&&!p){h(!0);const E=Date.now(),L=typeof a=="string"?parseInt(a.replace(/\D/g,"")):a,M=()=>{const T=Date.now()-E,O=Math.min(T/c,1),K=Math.floor(O*L);f(K),O<1?requestAnimationFrame(M):f(L)};M()}},{threshold:.5}),w=x.current;return w&&m.observe(w),()=>{w&&m.unobserve(w)}},[a,c,p]),n.jsxs("span",{ref:x,className:"counter-animation",children:[u.toLocaleString(),l]})}const Nn=[{name:"Sarah Mwangi",role:"Scholarship Recipient, 2023",quote:"EducateHers Kenya changed my life. Thanks to their scholarship program, I'm now pursuing my dream of becoming a teacher. I want to inspire other girls just like they inspired me."},{name:"James Omondi",role:"School Principal, Turkana",quote:"The gender-responsive education training from EducateHers Kenya transformed our school. We've seen a significant increase in girls' enrollment and performance. Their approach is truly impactful."},{name:"Mary Njeri",role:"University Student",quote:"I'm forever grateful to EducateHers Kenya. Their mentorship program gave me the confidence to pursue STEM education. Now I'm studying engineering and want to be a role model for other girls."}];function Ag(){const[a,c]=b.useState(0),[l,u]=b.useState(!0);b.useEffect(()=>{if(!l)return;const x=setInterval(()=>{c(m=>m===Nn.length-1?0:m+1)},5e3);return()=>clearInterval(x)},[l]);const f=()=>{u(!1),c(x=>x===0?Nn.length-1:x-1)},p=()=>{u(!1),c(x=>x===Nn.length-1?0:x+1)},h=x=>{u(!1),c(x)};return n.jsx("section",{className:"testimonials-section","aria-labelledby":"testimonials-heading",children:n.jsxs("div",{className:"testimonials-container",children:[n.jsx("h2",{id:"testimonials-heading",className:"testimonials-title",children:"Success Stories"}),n.jsx("p",{className:"testimonials-subtitle",children:"Hear from those whose lives we've touched"}),n.jsxs("div",{className:"testimonials-slider",children:[n.jsx("button",{className:"slider-arrow left",onClick:f,"aria-label":"Previous testimonial",children:n.jsx(Bd,{})}),n.jsxs("div",{className:"testimonials-content",children:[n.jsx(bg,{className:"quote-icon","aria-hidden":"true"}),n.jsx("blockquote",{className:"testimonial-quote",children:n.jsx("p",{children:Nn[a].quote})}),n.jsxs("div",{className:"testimonial-author",children:[n.jsx("h3",{children:Nn[a].name}),n.jsx("p",{children:Nn[a].role})]})]}),n.jsx("button",{className:"slider-arrow right",onClick:p,"aria-label":"Next testimonial",children:n.jsx($d,{})})]}),n.jsx("div",{className:"slider-dots",children:Nn.map((x,m)=>n.jsx("button",{className:`dot ${m===a?"active":""}`,onClick:()=>h(m),"aria-label":`Go to testimonial ${m+1}`,"aria-current":m===a},m))})]})})}const Fg=[{question:"What is EducateHers Kenya's mission?",answer:"Our mission is to promote gender equality in education through awareness-building, training programs, and the implementation of gender-responsive practices. We empower girls through education and create opportunities for young women across Kenya."},{question:"How can I donate to EducateHers Kenya?",answer:"You can donate through our website by clicking the 'Donate' button. We accept various payment methods and all donations go directly towards supporting girls' education programs, scholarships, and community initiatives."},{question:"Can I volunteer with EducateHers Kenya?",answer:"Yes! We welcome volunteers who are passionate about girls' education and gender equality. Visit our Volunteer page to learn about current opportunities and how to apply. We offer both remote and on-site volunteer positions."},{question:"How are donations used?",answer:"Donations are used to fund scholarships, educational materials, training programs for teachers and communities, advocacy initiatives, and operational costs. We maintain full transparency and provide regular updates on how funds are utilized."},{question:"Where does EducateHers Kenya operate?",answer:"We primarily operate in Kenya, with a focus on underserved communities where girls face significant barriers to education. Our recent projects include work in Turkana County and other regions across the country."},{question:"How can schools partner with EducateHers Kenya?",answer:"Schools interested in partnering with us can contact us through our Contact page. We collaborate with schools to implement gender-responsive education practices, provide training, and support girls' educational initiatives."},{question:"What is gender-responsive education?",answer:"Gender-responsive education addresses the different needs, experiences, and circumstances of girls and boys. It includes teaching methods, curricula, and school environments that promote gender equality and empower all students to reach their full potential."},{question:"How can I stay updated on your work?",answer:"Follow us on social media (Facebook, Twitter, Instagram, LinkedIn, and YouTube) and check our blog regularly for updates on our programs, events, and impact stories. You can also subscribe to our newsletter for monthly updates."}];function Hg(){const[a,c]=b.useState(null),l=u=>{c(a===u?null:u)};return n.jsx("section",{className:"faq-section","aria-labelledby":"faq-heading",children:n.jsxs("div",{className:"faq-container",children:[n.jsx("h2",{id:"faq-heading",className:"faq-title",children:"Frequently Asked Questions"}),n.jsx("p",{className:"faq-subtitle",children:"Find answers to common questions about our organization and programs"}),n.jsx("div",{className:"faq-list",children:Fg.map((u,f)=>n.jsxs("div",{className:"faq-item",children:[n.jsxs("button",{className:`faq-question ${a===f?"active":""}`,onClick:()=>l(f),"aria-expanded":a===f,"aria-controls":`faq-answer-${f}`,children:[n.jsx("span",{children:u.question}),a===f?n.jsx(jg,{}):n.jsx(wg,{})]}),n.jsx("div",{id:`faq-answer-${f}`,className:`faq-answer ${a===f?"open":""}`,role:"region","aria-labelledby":`faq-question-${f}`,children:n.jsx("p",{children:u.answer})})]},f))})]})})}function Wg(){return n.jsxs("main",{children:[n.jsx(dt,{title:"Home",description:"EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women across Kenya.",keywords:"girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls, gender-responsive education",url:"https://educateherskenya.org"}),n.jsx("section",{className:"hero-section","aria-label":"Hero banner",children:n.jsxs("div",{className:"hero-overlay",children:[n.jsx("h1",{className:"hero-title",children:"EDUCATE HER EMPOWER THE WORLD"}),n.jsx("p",{className:"hero-subtitle",children:"We promote gender equality in education through awareness-building, training programs, and the implementation of gender-responsive practices"}),n.jsx(V,{to:"/donate",children:n.jsx("button",{className:"hero-donate-btn","aria-label":"Make a donation",children:"Donate"})})]})}),n.jsxs("section",{className:"ways-to-help-section","aria-labelledby":"ways-to-help-heading",children:[n.jsx("h2",{id:"ways-to-help-heading",className:"visually-hidden",children:"Ways to Help"}),n.jsx(Fo,{animation:"fade-in",children:n.jsxs("div",{className:"ways-grid",children:[n.jsxs("article",{className:"card help-card",children:[n.jsx("div",{className:"help-icon teal",role:"img","aria-label":"Money emoji",children:"💰"}),n.jsx("h3",{className:"help-title teal",children:"CROWDFUNDING"}),n.jsx("p",{className:"help-description",children:"We can't educate her alone, will be better with your donation. We call on fundraising from anything that you can."}),n.jsx(V,{to:"/donate",children:n.jsx("button",{className:"help-btn btn-teal",children:"Partner with us and Educate Her today"})})]}),n.jsxs("article",{className:"card help-card",children:[n.jsx("div",{className:"help-icon orange",role:"img","aria-label":"Graduation cap emoji",children:"🎓"}),n.jsx("h3",{className:"help-title orange",children:"GIVE SCHOLARSHIP"}),n.jsx("p",{className:"help-description",children:"We think that education is best way to help needy. You are nonprofit organization, NGO, if you can, let do it."}),n.jsx(V,{to:"/donate",children:n.jsx("button",{className:"help-btn btn-orange",children:"Support a Scholar"})})]}),n.jsxs("article",{className:"card help-card",children:[n.jsx("div",{className:"help-icon teal",role:"img","aria-label":"Handshake emoji",children:"🤝"}),n.jsx("h3",{className:"help-title teal",children:"VOLUNTEER"}),n.jsx("p",{className:"help-description",children:"Share your time, skills, and passion to mentor and empower young girls through our volunteer programs."}),n.jsx(V,{to:"/volunteer",className:"help-btn-link",children:n.jsx("button",{className:"help-btn btn-teal",children:"Join Our Team"})})]})]})})]}),n.jsxs("section",{className:"stats-section","aria-labelledby":"stats-heading",children:[n.jsx("h2",{id:"stats-heading",className:"visually-hidden",children:"Our Impact Statistics"}),n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:n.jsx(ua,{end:3,suffix:"+"})}),n.jsx("div",{className:"stat-label",children:"Projects"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:n.jsx(ua,{end:2e4,suffix:"+"})}),n.jsx("div",{className:"stat-label",children:"Donations"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:n.jsx(ua,{end:10,suffix:"+"})}),n.jsx("div",{className:"stat-label",children:"Volunteers"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-number",children:n.jsx(ua,{end:3,suffix:"+"})}),n.jsx("div",{className:"stat-label",children:"Years"})]})]})]}),n.jsxs("section",{className:"volunteer-info-section",children:[n.jsxs("div",{className:"volunteer-header",children:[n.jsx("h2",{className:"volunteer-main-title",children:"Help Us"}),n.jsx("h3",{className:"volunteer-subtitle",children:"Raise Your Funds For a Cause That You Care"}),n.jsx("p",{className:"volunteer-intro",children:"Hello. We have been present for over 3 years in the market. We are here to Educate Her"})]}),n.jsxs("div",{className:"volunteer-opportunities-grid",children:[n.jsx(da,{number:"01",title:"Advocacy Support",description:"Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."}),n.jsx(da,{number:"02",title:"Community Engagement",description:"Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."}),n.jsx(da,{number:"03",title:"Event Support",description:"Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusivity in education."}),n.jsx(da,{number:"04",title:"Collaborative Efforts",description:"Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations"})]}),n.jsx("div",{className:"volunteer-cta",children:n.jsx(V,{to:"/volunteer",children:n.jsx("button",{className:"volunteer-cta-btn",children:"Become Our Volunteer"})})})]}),n.jsxs("section",{className:"why-choose-section",children:[n.jsxs("div",{className:"why-choose-header",children:[n.jsx("p",{className:"why-choose-tagline",children:"ONE OF THE BEST AROUND"}),n.jsx("h2",{className:"why-choose-title",children:"Why You Should Choose Us"})]}),n.jsxs("div",{className:"why-choose-grid",children:[n.jsxs("div",{className:"why-choose-card",children:[n.jsx("h3",{className:"why-choose-card-title",children:"Empowering Girls"}),n.jsx("p",{className:"why-choose-card-description",children:"Education empowers girls by providing them with knowledge, skills, and confidence to make informed decisions about their lives. When girls are educated, they are more likely to marry later, have fewer children, and participate more actively in the workforce, thus increasing their opportunities for personal and professional growth."})]}),n.jsxs("div",{className:"why-choose-card",children:[n.jsx("h3",{className:"why-choose-card-title",children:"Breaking the Cycle of Poverty"}),n.jsx("p",{className:"why-choose-card-description",children:"Education is a powerful tool for breaking the cycle of poverty, and when girls are educated, they are more likely to escape poverty themselves and contribute to their communities' economic development. By donating to an organization that advocates for gender equality by educating girls, you are directly contributing to uplifting entire communities and fostering sustainable development."})]}),n.jsxs("div",{className:"why-choose-card",children:[n.jsx("h3",{className:"why-choose-card-title",children:"Building Resilient Communities"}),n.jsx("p",{className:"why-choose-card-description",children:"Educated girls are better equipped to face and respond to challenges such as climate change, conflict, and natural disasters. By supporting education initiatives for girls, you are investing in the resilience and sustainability of communities, as educated individuals are more adaptable, resourceful, and capable of driving positive change."})]}),n.jsxs("div",{className:"why-choose-card",children:[n.jsx("h3",{className:"why-choose-card-title",children:"Promoting Health and Well-being"}),n.jsx("p",{className:"why-choose-card-description",children:"Educated girls are more likely to have access to healthcare information and resources, leading to improved health outcomes for themselves and their families. By supporting initiatives that educate girls about health and hygiene, you are contributing to the overall well-being of communities and reducing the prevalence of diseases and maternal mortality rates."})]}),n.jsxs("div",{className:"why-choose-card",children:[n.jsx("h3",{className:"why-choose-card-title",children:"Creating Future Leaders"}),n.jsx("p",{className:"why-choose-card-description",children:"Educated girls are the future leaders, innovators, and changemakers of society. By investing in their education today, you are investing in the leaders of tomorrow who will advocate for justice, equality, and human rights. Your contribution can have a ripple effect, inspiring other girls to pursue education and become agents of positive change in their communities and beyond."})]})]})]}),n.jsxs("section",{className:"team-section",children:[n.jsxs("div",{className:"team-header",children:[n.jsx("p",{className:"team-tagline",children:"OUR TEAMS"}),n.jsx("h2",{className:"team-title",children:"Our Awesome Team"}),n.jsx("p",{className:"team-subtitle",children:"We work with a very great team focused on helping Her be educated"})]}),n.jsxs("div",{className:"team-grid",children:[n.jsxs("div",{className:"team-card",children:[n.jsxs("div",{className:"team-image-container",children:[n.jsx("img",{src:"/assets/team/cyprian-chenani.png",alt:"Cyprian Chenani",className:"team-image"}),n.jsx("div",{className:"team-overlay",children:n.jsxs("div",{className:"team-social",children:[n.jsx("a",{href:"https://www.linkedin.com/in/cyprianchenani",className:"social-icon","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-linkedin"})}),n.jsx("a",{href:"https://www.facebook.com/share/17cr3VHsuY/?mibextid=wwXIfr",className:"social-icon","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-facebook"})}),n.jsx("a",{href:"mailto:cyprian.chenani@educateherskenya.net",className:"social-icon","aria-label":"Email",children:n.jsx("i",{className:"fas fa-envelope"})})]})})]}),n.jsxs("div",{className:"team-card-content",children:[n.jsx("h3",{className:"team-member-name",children:"Cyprian Chenani, Bsc"}),n.jsx("p",{className:"team-member-role",children:"Founder/Lead Advocate"}),n.jsx("p",{className:"team-description",children:"As the driving force behind our advocacy campaign, our Founder/Lead Advocate sets the vision and direction for our efforts. With a passion for social change and a commitment to empowering youth voices."})]})]}),n.jsxs("div",{className:"team-card",children:[n.jsxs("div",{className:"team-image-container",children:[n.jsx("img",{src:"/assets/team/emmanuel-kwoba.jpeg",alt:"Emmanuel P. Kwoba",className:"team-image"}),n.jsx("div",{className:"team-overlay",children:n.jsxs("div",{className:"team-social",children:[n.jsx("a",{href:"https://www.linkedin.com/in/emmanuel-petit-kwoba/",className:"social-icon","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-linkedin"})}),n.jsx("a",{href:"https://www.facebook.com/petit.kwoba/",className:"social-icon","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-facebook"})}),n.jsx("a",{href:"mailto:emmanuel.kwoba@educateherskenya.net",className:"social-icon","aria-label":"Email",children:n.jsx("i",{className:"fas fa-envelope"})})]})})]}),n.jsxs("div",{className:"team-card-content",children:[n.jsx("h3",{className:"team-member-name",children:"Emmanuel P. Kwoba"}),n.jsx("p",{className:"team-member-role",children:"Web Developer/Technical Support"}),n.jsx("p",{className:"team-description",children:"Ensures that our website runs smoothly and effectively serves as a hub for our advocacy efforts. Keeps our online platform up to date, secure, and user-friendly, empowering us to reach a wider audience."})]})]}),n.jsxs("div",{className:"team-card",children:[n.jsxs("div",{className:"team-image-container",children:[n.jsx("img",{src:"assets/team/eve-main.png",alt:"Eve Maina",className:"team-image"}),n.jsx("div",{className:"team-overlay",children:n.jsxs("div",{className:"team-social",children:[n.jsx("a",{href:"https://www.linkedin.com/in/eve-maina/",className:"social-icon","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-linkedin"})}),n.jsx("a",{href:"#",className:"social-icon","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-facebook"})}),n.jsx("a",{href:"mailto:ewanjiru@educateherskenya.net",className:"social-icon","aria-label":"Email",children:n.jsx("i",{className:"fas fa-envelope"})})]})})]}),n.jsxs("div",{className:"team-card-content",children:[n.jsx("h3",{className:"team-member-name",children:"Eve Maina"}),n.jsx("p",{className:"team-member-role",children:"Communications Specialist"}),n.jsx("p",{className:"team-description",children:"The linchpin of our outreach efforts, responsible for crafting clear, concise, and compelling messaging that resonates with our target audience through strategic communication strategies."})]})]})]})]}),n.jsx("section",{className:"partners-section","aria-labelledby":"partners-heading",children:n.jsxs("div",{className:"partners-container",children:[n.jsx("h2",{id:"partners-heading",className:"partners-title",children:"Our Partners & Collaborators"}),n.jsx("p",{className:"partners-subtitle",children:"Working together with organizations that share our vision for gender equality in education"}),n.jsxs("div",{className:"partners-grid",children:[n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/uniport-loans.png",alt:"Uniport Loans Ltd",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/apceiu.png",alt:"APCEIU - Asia-Pacific Centre of Education for International Understanding",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/biji-biji.png",alt:"Biji Biji Initiative",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/government-kenya.png",alt:"The Government of Kenya",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/ministry-education.png",alt:"Ministry of Education Kenya",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/uniport-loans.png",alt:"Uniport Loans Ltd",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/apceiu.png",alt:"APCEIU - Asia-Pacific Centre of Education for International Understanding",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/biji-biji.png",alt:"Biji Biji Initiative",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/government-kenya.png",alt:"The Government of Kenya",className:"partner-logo"})}),n.jsx("div",{className:"partner-logo-container",children:n.jsx("img",{src:"/assets/partners/ministry-education.png",alt:"Ministry of Education Kenya",className:"partner-logo"})})]}),n.jsxs("p",{className:"partners-cta-text",children:["Interested in partnering with us? ",n.jsx(V,{to:"/contact",className:"partners-cta-link",children:"Get in touch"})]})]})}),n.jsx(Ag,{}),n.jsx(Hg,{}),n.jsxs("section",{className:"cta-section",children:[n.jsx("h2",{className:"cta-title",children:"Join Our Mission"}),n.jsx("p",{className:"cta-description",children:"Together, we can create lasting change. Whether through volunteering, donations, or spreading awareness, every action counts."}),n.jsx(V,{to:"/contact",className:"cta-link",children:n.jsx("button",{className:"cta-btn",children:"Contact Us"})})]})]})}function da({number:a,title:c,description:l}){return n.jsxs("div",{className:"volunteer-opportunity",children:[n.jsxs("div",{className:"volunteer-number",children:[a,"."]}),n.jsxs("div",{className:"volunteer-content",children:[n.jsxs("h4",{className:"volunteer-opportunity-title",children:[c,":"]}),n.jsx("p",{className:"volunteer-opportunity-description",children:l})]})]})}function Ug(){const[a,c]=b.useState("All"),[l,u]=b.useState("upcoming"),[f,p]=b.useState(null),h=[{id:"7",title:"Gender Inclusion Training Workshop – Turkana 2025",date:"October 18, 2025",time:"All Day",location:"Lodwar Youth Empowerment Centre, Turkana County",category:"Training",description:"Intensive workshop bringing together youth leaders, teachers, and community representatives to strengthen advocacy for gender-inclusive education in Turkana County. Equipped 30 participants with practical tools to promote girls' education, address cultural barriers such as early marriage, and foster inclusive classroom and community practices. Participants formed school-based EducateHers Clubs to sustain advocacy activities and mentorship beyond the workshop.",image:"/assets/events/turkana-training.jpg",isPast:!0}],x=["All","Workshop","Fundraiser","Networking","Training","Community"],m=h.filter(v=>l==="upcoming"?!v.isPast:v.isPast).filter(v=>a==="All"||v.category===a),w=h.filter(v=>!v.isPast&&v.isFeatured);return n.jsxs("main",{className:"events-page",children:[n.jsx(dt,{title:"Events",description:"Join EducateHers Kenya at our upcoming workshops, fundraisers, training sessions, and community events. Be part of the movement to empower girls through education in Kenya.",keywords:"EducateHers Kenya events, girls education workshops, fundraising events Kenya, training sessions, community events, gender equality events",url:"https://educateherskenya.org/events"}),n.jsx("section",{className:"events-hero",children:n.jsxs("div",{className:"events-hero-content",children:[n.jsx("h1",{className:"events-hero-title",children:"Our Events"}),n.jsx("p",{className:"events-hero-subtitle",children:"Join us at our upcoming events and be part of the movement to empower girls through education"})]})}),f&&n.jsx("div",{className:"event-modal-overlay",onClick:()=>p(null),children:n.jsxs("div",{className:"event-modal",onClick:v=>v.stopPropagation(),children:[n.jsx("button",{className:"event-modal-close",onClick:()=>p(null),children:n.jsx("i",{className:"fas fa-times"})}),n.jsxs("div",{className:"event-modal-image",children:[n.jsx("img",{src:f.image,alt:f.title,onError:v=>{v.currentTarget.src="https://via.placeholder.com/800x400/00a9ce/ffffff?text=Event+Image"}}),n.jsx("div",{className:"event-modal-category",children:f.category})]}),n.jsxs("div",{className:"event-modal-content",children:[n.jsx("h2",{className:"event-modal-title",children:f.title}),n.jsxs("div",{className:"event-modal-meta",children:[n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-calendar-alt"}),n.jsx("span",{children:f.date})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-clock"}),n.jsx("span",{children:f.time})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-map-marker-alt"}),n.jsx("span",{children:f.location})]})]}),n.jsxs("div",{className:"event-modal-description",children:[n.jsx("h3",{children:"About This Event"}),n.jsx("p",{children:f.description})]}),!f.isPast&&f.spots&&n.jsxs("div",{className:"event-modal-spots",children:[n.jsx("i",{className:"fas fa-users"}),n.jsxs("strong",{children:[f.spots," spots remaining"]})," - Register soon!"]}),!f.isPast&&f.registrationLink&&n.jsxs("div",{className:"event-modal-actions",children:[n.jsxs("a",{href:f.registrationLink,className:"event-modal-register-btn",children:[n.jsx("i",{className:"fas fa-ticket-alt"})," Register Now"]}),n.jsx("button",{className:"event-modal-secondary-btn",onClick:()=>p(null),children:"Close"})]}),f.isPast&&n.jsxs("div",{className:"event-modal-past-badge",children:[n.jsx("i",{className:"fas fa-check-circle"})," This event has concluded"]})]})]})}),w.length>0&&n.jsx("section",{className:"featured-events-section",children:n.jsxs("div",{className:"events-container",children:[n.jsx("h2",{className:"section-title",children:"Featured Events"}),n.jsx("div",{className:"featured-events-grid",children:w.map(v=>n.jsxs("article",{className:"featured-event-card",children:[n.jsx("div",{className:"featured-event-badge",children:"Featured"}),n.jsxs("div",{className:"featured-event-image",children:[n.jsx("img",{src:v.image,alt:v.title,onError:E=>{E.currentTarget.src="https://via.placeholder.com/600x400/00a9ce/ffffff?text=Event+Image"}}),n.jsx("div",{className:"featured-event-category",children:v.category})]}),n.jsxs("div",{className:"featured-event-content",children:[n.jsx("h3",{children:v.title}),n.jsxs("div",{className:"featured-event-meta",children:[n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-calendar-alt"}),n.jsx("span",{children:v.date})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-clock"}),n.jsx("span",{children:v.time})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-map-marker-alt"}),n.jsx("span",{children:v.location})]})]}),n.jsx("p",{className:"featured-event-description",children:v.description}),v.spots&&v.spots<20&&n.jsxs("div",{className:"spots-alert",children:[n.jsx("i",{className:"fas fa-exclamation-circle"}),"Only ",v.spots," spots remaining!"]}),n.jsxs("a",{href:v.registrationLink,className:"featured-event-btn",children:[n.jsx("i",{className:"fas fa-ticket-alt"})," Register Now"]})]})]},v.id))})]})}),n.jsx("section",{className:"events-list-section",children:n.jsxs("div",{className:"events-container",children:[n.jsxs("div",{className:"events-tabs",children:[n.jsxs("button",{className:`events-tab ${l==="upcoming"?"active":""}`,onClick:()=>u("upcoming"),children:[n.jsx("i",{className:"fas fa-calendar-plus"})," Upcoming Events"]}),n.jsxs("button",{className:`events-tab ${l==="past"?"active":""}`,onClick:()=>u("past"),children:[n.jsx("i",{className:"fas fa-history"})," Past Events"]})]}),n.jsxs("div",{className:"category-filter",children:[n.jsx("span",{className:"filter-label",children:"Filter by:"}),n.jsx("div",{className:"category-buttons",children:x.map(v=>n.jsx("button",{className:`category-btn ${a===v?"active":""}`,onClick:()=>c(v),children:v},v))})]}),m.length>0?n.jsx("div",{className:"events-grid",children:m.map(v=>n.jsxs("article",{className:"event-card",onClick:()=>p(v),style:{cursor:"pointer"},children:[n.jsxs("div",{className:"event-card-image",children:[n.jsx("img",{src:v.image,alt:v.title,onError:E=>{E.currentTarget.src="https://via.placeholder.com/400x250/00a9ce/ffffff?text=Event+Image"}}),n.jsx("div",{className:"event-card-category",children:v.category})]}),n.jsxs("div",{className:"event-card-content",children:[n.jsx("h3",{className:"event-card-title",children:v.title}),n.jsxs("div",{className:"event-card-meta",children:[n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-calendar-alt"}),n.jsx("span",{children:v.date})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-clock"}),n.jsx("span",{children:v.time})]}),n.jsxs("div",{className:"event-meta-item",children:[n.jsx("i",{className:"fas fa-map-marker-alt"}),n.jsx("span",{children:v.location})]})]}),n.jsx("p",{className:"event-card-description",children:v.description}),!v.isPast&&v.spots&&n.jsxs("div",{className:"event-spots",children:[n.jsx("i",{className:"fas fa-users"}),v.spots," spots left"]}),n.jsx("div",{className:"event-card-btn-container",children:n.jsxs("button",{className:"event-card-btn",children:[v.isPast?"View Details":"Learn More",n.jsx("i",{className:"fas fa-arrow-right"})]})})]})]},v.id))}):n.jsxs("div",{className:"no-events",children:[n.jsx("i",{className:"fas fa-calendar-times"}),n.jsx("p",{children:"No events found in this category."})]})]})}),n.jsx("section",{className:"events-cta",children:n.jsxs("div",{className:"events-cta-content",children:[n.jsx("h2",{children:"Want to Host an Event with Us?"}),n.jsx("p",{children:"Partner with EducateHers Kenya to create impactful events for girls' education"}),n.jsxs(V,{to:"/contact",className:"events-cta-btn",children:["Get in Touch ",n.jsx("i",{className:"fas fa-arrow-right"})]})]})})]})}const Xn=({number:a,title:c,description:l})=>n.jsxs("div",{className:"responsibility-item",children:[n.jsx("div",{className:"responsibility-number",children:a}),n.jsxs("div",{className:"responsibility-content",children:[n.jsx("h3",{className:"responsibility-title",children:c}),n.jsx("p",{className:"responsibility-description",children:l})]})]}),Kr=({text:a})=>n.jsxs("div",{className:"qualification-item",children:[n.jsx("i",{className:"fas fa-check-circle qualification-icon"}),n.jsx("p",{className:"qualification-text",children:a})]}),fa=({icon:a,text:c})=>n.jsxs("div",{className:"benefit-item",children:[n.jsx("div",{className:"benefit-icon",children:a}),n.jsx("p",{className:"benefit-text",children:c})]});function Bg(){return n.jsxs("main",{className:"volunteer-page",children:[n.jsx(dt,{title:"Volunteer",description:"Join EducateHers Kenya as a volunteer advocate for gender equality in education. Make a difference in girls' lives through mentorship, advocacy, and community outreach programs.",keywords:"volunteer Kenya, volunteer opportunities, gender equality volunteer, education volunteer, girls education advocate, volunteer Kenya NGO",url:"https://educateherskenya.org/volunteer"}),n.jsx("section",{className:"volunteer-hero",children:n.jsxs("div",{className:"volunteer-hero-content",children:[n.jsx("h1",{className:"volunteer-main-title",children:"Volunteer"}),n.jsx("h2",{className:"volunteer-subtitle",children:"Join EducateHERs in Promoting Gender Equality in Education"})]})}),n.jsx("section",{className:"position-info-section",children:n.jsxs("div",{className:"position-info-container",children:[n.jsx("h2",{className:"position-title",children:"Position: Volunteer Advocate for Gender Equality in Education"}),n.jsxs("div",{className:"position-details",children:[n.jsxs("div",{className:"position-detail-item",children:[n.jsx("i",{className:"fas fa-map-marker-alt"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Location:"})," Remote (meetings may be conducted either in person or virtually)"]})]}),n.jsxs("div",{className:"position-detail-item",children:[n.jsx("i",{className:"fas fa-clock"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Duration:"})," Flexible, based on volunteer availability and commitment"]})]})]})]})}),n.jsx("section",{className:"about-section",children:n.jsxs("div",{className:"about-container",children:[n.jsx("h2",{className:"section-heading",children:"About EducateHERs"}),n.jsx("p",{className:"about-text",children:"EducateHERs is a dynamic organization dedicated to promoting gender equality in education through consulting, training, advocacy, and awareness initiatives. Our mission is to create inclusive learning environments that empower all individuals, regardless of gender, to reach their full potential."})]})}),n.jsx("section",{className:"responsibilities-section",children:n.jsxs("div",{className:"responsibilities-container",children:[n.jsx("h2",{className:"section-heading",children:"Key Responsibilities"}),n.jsxs("div",{className:"responsibilities-grid",children:[n.jsx(Xn,{number:"01",title:"Advocacy Support",description:"Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."}),n.jsx(Xn,{number:"02",title:"Community Engagement",description:"Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."}),n.jsx(Xn,{number:"03",title:"Meeting Participation",description:"Attend regular meetings either in person or virtually to discuss ongoing projects, share insights, and collaborate with team members."}),n.jsx(Xn,{number:"04",title:"Content Creation",description:"Contribute to the development of compelling content, including articles, social media posts, and educational resources, to raise awareness about gender equality in education."}),n.jsx(Xn,{number:"05",title:"Event Support",description:"Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusive in education."}),n.jsx(Xn,{number:"06",title:"Collaborative Efforts",description:"Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations."})]})]})}),n.jsx("section",{className:"qualifications-section",children:n.jsxs("div",{className:"qualifications-container",children:[n.jsx("h2",{className:"section-heading",children:"Qualifications"}),n.jsxs("div",{className:"qualifications-grid",children:[n.jsx(Kr,{text:"Passion for promoting gender equality in education and creating positive social change."}),n.jsx(Kr,{text:"Excellent communication and interpersonal skills."}),n.jsx(Kr,{text:"Ability to work effectively both independently and as part of a team."}),n.jsx(Kr,{text:"Willingness to attend meetings either in person or virtually, based on availability."}),n.jsx(Kr,{text:"Commitment to upholding the values and mission of EducateHERs."})]})]})}),n.jsx("section",{className:"benefits-section",children:n.jsxs("div",{className:"benefits-container",children:[n.jsx("h2",{className:"section-heading",children:"Benefits"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsx(fa,{icon:"🎯",text:"Opportunity to contribute to meaningful advocacy efforts and drive real change in promoting gender equality in education."}),n.jsx(fa,{icon:"📈",text:"Gain valuable experience in advocacy, community engagement, and event coordination."}),n.jsx(fa,{icon:"🤝",text:"Expand your professional network by collaborating with diverse stakeholders and organizations."}),n.jsx(fa,{icon:"💖",text:"Personal satisfaction of making a difference in the lives of students, educators, and communities."})]})]})}),n.jsx("section",{className:"application-cta-section",children:n.jsxs("div",{className:"application-cta-container",children:[n.jsx("h2",{className:"application-cta-title",children:"How to Apply"}),n.jsx("p",{className:"application-cta-text",children:"If you are passionate about gender equality in education and eager to make a difference, we invite you to join us as a Volunteer Advocate for EducateHERs. Please send a brief statement of interest outlining your motivation for volunteering and any relevant experience by filling application form."}),n.jsxs("a",{href:"https://forms.gle/ogAkJ1SL8GmQzi3P6",target:"_blank",rel:"noopener noreferrer",className:"application-btn",children:["Fill Application Form",n.jsx("i",{className:"fas fa-arrow-right"})]}),n.jsxs("p",{className:"volunteer-note",children:[n.jsx("strong",{children:"NOTE:"})," THIS POSITION IS VOLUNTARY AND DOES NOT OFFER FINANCIAL COMPENSATION."]}),n.jsx("p",{className:"volunteer-tagline",children:"Join us in shaping a more inclusive future for education!"})]})})]})}const $g=({icon:a,title:c,description:l,color:u})=>n.jsxs("article",{className:`service-card service-card-${u}`,children:[n.jsx("div",{className:"service-icon",role:"img","aria-label":`${c} icon`,children:a}),n.jsx("h3",{className:"service-title",children:c}),n.jsx("p",{className:"service-description",children:l})]});function Kg(){const a=[{icon:"💼",title:"Consulting Services",description:"We offer personalized consulting services to schools and educational organizations. Assess their current practices, policies, and curricula related to gender inclusion and provide recommendations for improvement.",color:"teal"},{icon:"🎓",title:"Workshops and Training",description:"We design and conduct workshops, seminars, and training sessions for teachers, educators, parents, and students. These sessions cover topics such as gender stereotypes, promoting inclusive classrooms, creating safe spaces, and fostering gender equality.",color:"orange"},{icon:"📚",title:"Curriculum Development",description:"We collaborate with schools to develop gender-inclusive curriculum materials, lesson plans, and teaching resources. These materials reflect diverse perspectives and challenge traditional gender roles.",color:"teal"},{icon:"📖",title:"Resource Creation",description:"We create and provide educational resources, toolkits, and guides that institutions can use to integrate gender equality into their educational practices.",color:"orange"},{icon:"💻",title:"Online Courses",description:"We develop online courses and webinars that educators and parents can access remotely. This allows for a broader reach and greater convenience for participants.",color:"teal"},{icon:"📢",title:"Awareness Campaigns/Campaign Strategy",description:"We partner with schools, NGOs, and government agencies to create and implement awareness campaigns aimed at changing societal attitudes and perceptions about gender inequalities in education. Develop comprehensive campaign strategies that outline goals, target audiences, messaging, channels, and activities.",color:"orange"},{icon:"📊",title:"Impact Measurement",description:"We offer evaluation and assessment services to measure the impact of gender equality initiatives. This data can help schools and organizations track progress and identify areas for improvement.",color:"teal"},{icon:"🤝",title:"Collaborations",description:"We partner with schools, colleges, universities, NGOs, government bodies, and community organizations to create a united front for advocacy efforts.",color:"orange"},{icon:"🎨",title:"Content Creation",description:"Develop compelling content, including videos, infographics, posters, articles, and social media posts, to convey key messages and raise awareness.",color:"teal"},{icon:"🎯",title:"Event Coordination",description:"Organize workshops, seminars, panel discussions, conferences, and awareness events to engage the community, share insights, and drive conversations.",color:"orange"},{icon:"🤲",title:"Partnerships and Sponsorships",description:"Collaborate with corporate sponsors, philanthropic organizations, and brands aligned with the cause to secure funding and resources for campaigns and events.",color:"teal"},{icon:"🌐",title:"Online Presence",description:"Establish a strong online presence through social media platforms, a dedicated website, and email marketing to reach a wider audience and disseminate campaign messages.",color:"orange"},{icon:"📈",title:"Data Collection",description:"Collect data and feedback to measure the impact of campaigns, which can be used to refine strategies and demonstrate outcomes to stakeholders.",color:"teal"}];return n.jsxs("main",{className:"what-we-do-page",children:[n.jsx(dt,{title:"What We Do",description:"EducateHers Kenya offers consulting services, training programs, online courses, and advocacy campaigns to promote gender equality in education. Learn about our comprehensive approach to empowering girls through education.",keywords:"gender equality education, consulting services Kenya, training programs, online courses, advocacy campaigns, STEM education, girls empowerment programs",url:"https://educateherskenya.org/what-we-do"}),n.jsx("section",{className:"what-we-do-hero",children:n.jsxs("div",{className:"what-we-do-hero-content",children:[n.jsx("h1",{className:"what-we-do-main-title",children:"What We Do"}),n.jsx("p",{className:"what-we-do-intro",children:"Empowering educators, transforming institutions, and advocating for gender equality in education through comprehensive services and strategic initiatives."})]})}),n.jsxs("section",{className:"key-components-section",children:[n.jsxs("div",{className:"key-components-header",children:[n.jsx("h2",{className:"key-components-title",children:"Key Components"}),n.jsx("p",{className:"key-components-subtitle",children:"Our multi-faceted approach to advancing gender equality in education"})]}),n.jsx("div",{className:"services-grid",children:a.map((c,l)=>n.jsx($g,{icon:c.icon,title:c.title,description:c.description,color:c.color},l))})]}),n.jsxs("section",{className:"what-we-do-cta",children:[n.jsx("h2",{className:"what-we-do-cta-title",children:"Ready to Partner With Us?"}),n.jsx("p",{className:"what-we-do-cta-description",children:"Join us in creating lasting change through education and advocacy"}),n.jsxs("div",{className:"what-we-do-cta-buttons",children:[n.jsx("a",{href:"/contact",className:"cta-btn-primary",children:"Get in Touch"}),n.jsx("a",{href:"/volunteer",className:"cta-btn-secondary",children:"Become a Volunteer"})]})]})]})}const qr=[{id:"1",slug:"gced-in-action-empowering-girls-turkana-kenya",title:"[GCED in Action] Empowering Girls through Youth Training: Unveiling Gender Barriers in Turkana, Kenya",excerpt:"A transformative youth workshop in Turkana's marginalized Lokori area addresses severe gender disparities in education, where only 46.6% of girls are enrolled compared to the national average of 92.5%.",date:"August 5, 2023",category:"Impact",author:"EducateHers Kenya Team",readTime:"8 min read",emoji:"🎓",gradient:"linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%)",content:[{type:"paragraph",text:"This transformative effort seeks to combat gender disparities in education through a youth workshop recently conducted in the marginalized Lokori area of Turkana, Kenya. For years, the region has faced severe gender discrimination in education. The school enrollment rate for children aged 6-13 in Turkana stands at a mere 50%, with even lower figures for girls at 46.6%, compared to the national average of 92.5% (Turkana County Government, 2015)."},{type:"paragraph",text:"High levels of insecurity, cultural biases, extreme poverty, and inadequate infrastructure have further marginalized this community. Supported by UNESCO APCEIU and the Biji-Biji Initiative, the groundbreaking initiative, named #EducateHERs, Empower the World, convened stakeholders, facilitators, and participants on August 5th, 2023, to address the pressing issue of unequal education opportunities. The workshop aimed to advocate for Sustainable Development Goals (SDGs) 4 and 5, promoting Inclusive Education and Gender Equality."},{type:"heading",text:"Unveiling Barriers: Insights Before the Workshop"},{type:"paragraph",text:"The pre-workshop survey, conducted among respondents including youth, teachers, and parents from Turkana, provided crucial insights into the region's educational landscape. Participants unanimously pointed out that 'Poverty and financial constraints' (73%) and 'Cultural and traditional beliefs' (55%) were the main contributors to unequal educational opportunities for girls. This highlights the considerable impact of both socio-economic difficulties and entrenched cultural norms in maintaining gender disparities."},{type:"paragraph",text:"The survey also illuminated various challenges faced by girls in pursuing education, with 'Early marriage' (64%), 'Gender-based violence and insecurity' (45%), and 'Cultural beliefs' (18%) emerging as significant obstacles. These findings emphasize the need to address concerns such as early marriage, violence, and cultural hindrances that impede girls' educational progress."},{type:"heading",text:"A Transformative Workshop That Ignited Change"},{type:"paragraph",text:"The workshop's transformative influence became apparent in the post-workshop evaluations. Following their participation, 90% of attendees noted an improved grasp of obstacles to girls' education. Their confidence in recognizing and addressing these challenges experienced a favourable change, as 80% now expressed elevated levels of assurance. The workshop also facilitated the formulation of practical recommendations aimed at eliminating gender-related obstacles."},{type:"heading",text:"Addressing Disparities: A Paradigm Shift"},{type:"paragraph",text:"Participants' perceptions underwent a significant transformation before and after the workshop. Initially, 55% of respondents acknowledged 'Cultural and traditional beliefs' as a hindrance, a figure that surged to 100% post-workshop. This shift underscores the workshop's profound impact on heightening awareness of how cultural norms perpetuate unequal educational opportunities."},{type:"quote",text:"The program enabled many girls who lacked exposure to envision the broader world. The workshop's success in generating awareness among them will carry back to their communities, fostering transformative change.",author:"Val Omoro, Youth Participant"},{type:"paragraph",text:"More feedback can be found in our documentary: https://www.youtube.com/watch?v=3ZJSrqGdOfo"},{type:"heading",text:"Sustaining Change: Extending to Social Media and Beyond"},{type:"paragraph",text:"The campaign's reach extended beyond the workshop to social media platforms such as Facebook (https://fb.watch/mG1zMoJIfN/), Twitter, and YouTube. Engagement metrics consistently exceeded set targets, with views, likes, and comments reflecting a strong resonance with the campaign's content."},{type:"heading",text:"Educators' Role in Fostering Inclusion"},{type:"paragraph",text:"The Google Classroom analysis revealed an encouraging scenario: a substantial majority of teachers (74%) displayed a solid grasp of the gender inclusion concept. This understanding was mirrored in their confidence, with educators supporting community sensitization on gender inclusion in education (82%) and advocating for educating parents on the importance of sending their daughters to school (73%)."},{type:"stats",items:[{number:"90%",label:"Improved Understanding",description:"Attendees gained better grasp of obstacles"},{number:"80%",label:"Elevated Confidence",description:"Increased assurance in addressing challenges"},{number:"100%",label:"Cultural Awareness",description:"Post-workshop recognition of cultural barriers"},{number:"82%",label:"Community Support",description:"Teachers backing gender inclusion efforts"}]},{type:"paragraph",text:"A remarkable 100% of participants recognized the importance of supporting girls' education by addressing basic needs and challenging cultural beliefs."},{type:"quote",text:"I learnt that by educating a girl, you educate the whole nation and the generation that comes after the girl.",author:"Susan Wanjiku, Student at AIC Kangitit Girls"},{type:"paragraph",text:"We aspire to engage numerous educators in supporting the initiative through the adoption of gender-inclusive language and participation in professional development training (79%) to tackle gender-related subjects, cultivating an inclusive atmosphere that goes beyond stereotypes."},{type:"heading",text:"Paving the Path Forward"},{type:"paragraph",text:"As the transformative #EducateHERs, Empower the World campaign concluded, the participants' determination to pave a new path for girls' education in Turkana was palpable. The collaborative efforts of local organizations, educators, and community members have ignited a beacon of change."},{type:"paragraph",text:"We hope that through this initiative we will experience a higher retention of girls in schools. We plan to continue our efforts to bring about change through more initiatives and campaigns. Follow us or support our future project through our socials."}]}],Vg=a=>qr.find(c=>c.slug===a),qg=a=>a==="All"?qr:qr.filter(c=>c.category===a);function Yg(){const[a,c]=Pe.useState(""),[l,u]=Pe.useState("All"),f=["All","Success Stories","Impact","Insights","News","Community","Programs"],p=Pe.useMemo(()=>{let h=qr;if(l!=="All"&&(h=qg(l)),a.trim()){const x=a.toLowerCase();h=h.filter(m=>m.title.toLowerCase().includes(x)||m.excerpt.toLowerCase().includes(x)||m.category.toLowerCase().includes(x))}return h},[a,l]);return n.jsxs("main",{className:"blog-page-modern",children:[n.jsx(dt,{title:"Blog & Stories",description:"Read inspiring stories from EducateHers Kenya students, volunteers, and partners. Stay updated on our latest programs, success stories, and impact in girls' education across Kenya.",keywords:"EducateHers Kenya blog, girls education stories, Kenya education news, success stories, student testimonials, education impact, gender equality stories",url:"https://educateherskenya.org/blog",type:"website"}),n.jsx("section",{className:"blog-hero-modern",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"hero-content-blog",children:[n.jsxs("div",{className:"hero-badge-blog",children:[n.jsx("i",{className:"fas fa-book-open"}),n.jsx("span",{children:"Stories & Insights"})]}),n.jsxs("h1",{className:"hero-title-blog",children:["Blog & ",n.jsx("span",{className:"text-gradient-blog",children:"Stories"})]}),n.jsx("p",{className:"hero-subtitle-blog",children:"Read inspiring stories from our students, volunteers, and partners. Stay updated on our latest programs and impact."})]})})}),n.jsx("section",{className:"filter-section-modern",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"filter-wrapper",children:[n.jsx("div",{className:"category-filters",children:f.map(h=>n.jsx("button",{className:`filter-btn ${h===l?"active":""}`,onClick:()=>u(h),children:h},h))}),n.jsxs("div",{className:"search-box",children:[n.jsx("i",{className:"fas fa-search"}),n.jsx("input",{type:"text",placeholder:"Search articles...",value:a,onChange:h=>c(h.target.value)})]})]})})}),n.jsx("section",{className:"blog-posts-section",children:n.jsxs("div",{className:"container",children:[p.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"60px 20px"},children:[n.jsx("h3",{style:{color:"#666",fontSize:"24px",marginBottom:"10px"},children:"No posts found"}),n.jsx("p",{style:{color:"#999"},children:"Try adjusting your search or filter criteria"})]}):n.jsx("div",{className:"posts-grid",children:p.map(h=>n.jsxs("article",{className:"blog-card-modern",children:[n.jsxs("div",{className:"card-image-wrapper",style:{background:h.gradient},children:[n.jsx("span",{className:"post-emoji",children:h.emoji}),n.jsx("div",{className:"card-category",children:h.category})]}),n.jsxs("div",{className:"card-content",children:[n.jsxs("div",{className:"card-meta",children:[n.jsxs("span",{className:"post-date",children:[n.jsx("i",{className:"fas fa-calendar"}),h.date]}),n.jsxs("span",{className:"post-read-time",children:[n.jsx("i",{className:"fas fa-clock"}),h.readTime]})]}),n.jsx("h3",{className:"post-title",children:h.title}),n.jsx("p",{className:"post-excerpt",children:h.excerpt}),n.jsxs(V,{to:`/blog/${h.slug}`,className:"read-more-btn",children:["Read Article",n.jsx("i",{className:"fas fa-arrow-right"})]})]})]},h.id))}),n.jsx("div",{className:"load-more-wrapper",children:n.jsxs("button",{className:"load-more-btn",children:[n.jsx("span",{children:"Load More Stories"}),n.jsx("i",{className:"fas fa-chevron-down"})]})})]})}),n.jsx("section",{className:"blog-cta-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"cta-card-blog",children:[n.jsx("div",{className:"cta-icon-blog",children:n.jsx("i",{className:"fas fa-pen-fancy"})}),n.jsx("h3",{className:"cta-title-blog",children:"Want to Share Your Story?"}),n.jsx("p",{className:"cta-text-blog",children:"We'd love to feature your experience with EducateHers Kenya on our blog."}),n.jsxs(V,{to:"/contact",className:"cta-button-blog",children:[n.jsx("span",{children:"Submit Your Story"}),n.jsx("i",{className:"fas fa-paper-plane"})]})]})})}),n.jsx("style",{children:`
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
      `})]})}function Gg(){const{slug:a}=Hh(),c=Vg(a||""),l=qr.filter(h=>h.slug!==a).slice(0,3),u=window.location.href,f=c?.title||"";c?.excerpt;const p=h=>{const x=encodeURIComponent(u),m=encodeURIComponent(f);let w="";switch(h){case"facebook":w=`https://www.facebook.com/sharer/sharer.php?u=${x}`;break;case"twitter":w=`https://twitter.com/intent/tweet?url=${x}&text=${m}`;break;case"linkedin":w=`https://www.linkedin.com/sharing/share-offsite/?url=${x}`;break;case"whatsapp":w=`https://wa.me/?text=${m}%20${x}`;break;default:return}window.open(w,"_blank")};return c?n.jsxs("main",{className:"blog-post-page",children:[n.jsx(dt,{title:c.title,description:c.excerpt,keywords:`${c.category}, girls education Kenya, EducateHers Kenya, ${c.title.toLowerCase()}`,url:`https://educateherskenya.org/blog/${c.slug}`,type:"article",publishedTime:c.date,section:c.category,tags:[c.category,"girls education","Kenya","empowerment"],author:c.author}),n.jsx("section",{className:"post-hero",style:{background:c.gradient},children:n.jsxs("div",{className:"container",children:[n.jsxs(V,{to:"/blog",className:"back-link",children:[n.jsx("i",{className:"fas fa-arrow-left"}),"Back to Blog"]}),n.jsxs("div",{className:"post-hero-content",children:[n.jsx("div",{className:"category-badge",children:c.category}),n.jsx("h1",{className:"post-hero-title",children:c.title}),n.jsxs("div",{className:"post-meta-info",children:[n.jsxs("span",{className:"meta-item",children:[n.jsx("i",{className:"fas fa-calendar"}),c.date]}),n.jsxs("span",{className:"meta-item",children:[n.jsx("i",{className:"fas fa-user"}),c.author]}),n.jsxs("span",{className:"meta-item",children:[n.jsx("i",{className:"fas fa-clock"}),c.readTime]})]})]})]})}),n.jsx("section",{className:"post-content-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"post-content-wrapper",children:[n.jsx("article",{className:"post-article",children:c.content.map((h,x)=>{if(h.type==="paragraph")return n.jsx("p",{className:"content-paragraph",children:h.text},x);if(h.type==="heading")return n.jsx("h2",{className:"content-heading",children:h.text},x);if(h.type==="quote")return n.jsxs("blockquote",{className:"content-quote",children:[n.jsxs("p",{children:['"',h.text,'"']}),"author"in h&&h.author&&n.jsxs("cite",{children:["— ",h.author]})]},x);if(h.type==="list"&&"items"in h&&h.items){const m=h;return n.jsx("ul",{className:"content-list",children:m.items.map((w,v)=>n.jsx("li",{children:w},v))},x)}if(h.type==="stats"&&"items"in h&&h.items){const m=h;return n.jsx("div",{className:"stats-grid",children:m.items.map((w,v)=>n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-number",children:w.number}),n.jsx("div",{className:"stat-label",children:w.label}),n.jsx("div",{className:"stat-description",children:w.description})]},v))},x)}return null})}),n.jsxs("aside",{className:"post-sidebar",children:[n.jsxs("div",{className:"sidebar-card share-card",children:[n.jsx("h3",{children:"Share This Article"}),n.jsxs("div",{className:"share-buttons",children:[n.jsx("button",{className:"share-btn facebook",onClick:()=>p("facebook"),children:n.jsx("i",{className:"fab fa-facebook-f"})}),n.jsx("button",{className:"share-btn twitter",onClick:()=>p("twitter"),children:n.jsx("i",{className:"fab fa-twitter"})}),n.jsx("button",{className:"share-btn linkedin",onClick:()=>p("linkedin"),children:n.jsx("i",{className:"fab fa-linkedin-in"})}),n.jsx("button",{className:"share-btn whatsapp",onClick:()=>p("whatsapp"),children:n.jsx("i",{className:"fab fa-whatsapp"})})]})]}),n.jsxs("div",{className:"sidebar-card cta-card",children:[n.jsx("div",{className:"cta-icon",children:n.jsx("i",{className:"fas fa-heart"})}),n.jsx("h3",{children:"Support Our Mission"}),n.jsx("p",{children:"Help us empower more girls through education"}),n.jsxs(V,{to:"/donate",className:"sidebar-cta-btn",children:["Donate Now",n.jsx("i",{className:"fas fa-arrow-right"})]})]}),n.jsxs("div",{className:"sidebar-card newsletter-card",children:[n.jsx("h3",{children:"Stay Updated"}),n.jsx("p",{children:"Get our latest stories delivered to your inbox"}),n.jsx("input",{type:"email",placeholder:"Your email",className:"newsletter-input"}),n.jsx("button",{className:"newsletter-btn",children:"Subscribe"})]})]})]})})}),l.length>0&&n.jsx("section",{className:"related-posts-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"section-title",children:"Related Articles"}),n.jsx("div",{className:"related-posts-grid",children:l.map(h=>n.jsxs(V,{to:`/blog/${h.slug}`,className:"related-post-card",children:[n.jsx("div",{className:"related-post-image",style:{background:h.gradient},children:n.jsx("span",{children:h.emoji})}),n.jsxs("div",{className:"related-post-content",children:[n.jsx("span",{className:"related-category",children:h.category}),n.jsx("h4",{children:h.title})]})]},h.id))})]})}),n.jsx("style",{children:`
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
      `})]}):n.jsxs("div",{className:"container",style:{padding:"100px 20px",textAlign:"center"},children:[n.jsx(dt,{title:"Blog Post Not Found"}),n.jsx("h1",{children:"Blog post not found"}),n.jsx(V,{to:"/blog",style:{color:"#00a9ce",textDecoration:"underline"},children:"Back to Blog"})]})}function Qg(){const[a,c]=b.useState({name:"",email:"",reason:"",message:""}),[l,u]=b.useState({}),[f,p]=b.useState(!1),[h,x]=b.useState(!1),[m,w]=b.useState(""),[v,E]=b.useState(!1),L=()=>{const T={};return a.name.trim()||(T.name="Name is required"),a.email.trim()?Qd(a.email)||(T.email="Please enter a valid email"):T.email="Email is required",a.reason||(T.reason="Please select a reason"),a.message.trim()||(T.message="Message is required"),u(T),Object.keys(T).length===0},M=T=>O=>{c(K=>({...K,[T]:O.target.value})),l[T]&&u(K=>({...K,[T]:void 0}))},q=async T=>{if(T.preventDefault(),!!L()){x(!0),E(!1),w("");try{const O=await zg(a);O.success?(p(!0),w(O.message),c({name:"",email:"",reason:"",message:""}),setTimeout(()=>{p(!1),w("")},7e3)):(E(!0),w(O.message))}catch(O){E(!0),w("An unexpected error occurred. Please try again or email us directly."),console.error("Form submission error:",O)}finally{x(!1)}}};return n.jsxs("section",{children:[n.jsx(dt,{title:"Contact Us",description:"Get in touch with EducateHers Kenya. Have questions, want to volunteer, partner with us, or support our mission? We'd love to hear from you. Contact us today.",keywords:"contact EducateHers Kenya, Kenya NGO contact, email EducateHers, get involved, partner with us, support girls education",url:"https://educateherskenya.org/contact"}),n.jsx("h1",{children:"Get In Touch"}),n.jsx("p",{style:{fontSize:"1.15rem",marginBottom:"2rem"},children:"Have questions or want to get involved? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem",marginBottom:"2rem"},children:[n.jsxs("div",{children:[n.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[n.jsx("h3",{style:{color:"#00a9ce",marginBottom:"0.5rem"},children:"📧 Email"}),n.jsx("p",{style:{margin:0},children:"info@educateherskenya.net"})]}),n.jsxs("div",{className:"card",style:{marginBottom:"1rem"},children:[n.jsx("h3",{style:{color:"#ff8c42",marginBottom:"0.5rem"},children:"📱 Phone"}),n.jsx("p",{style:{margin:0},children:"+254 703 257 597"})]}),n.jsxs("div",{className:"card",children:[n.jsx("h3",{style:{color:"#00a9ce",marginBottom:"0.5rem"},children:"📍 Location"}),n.jsxs("p",{style:{margin:0},children:["Galleria Office and Business Park",n.jsx("br",{}),"Seminary Road, Karen Area",n.jsx("br",{}),"Nairobi, Kenya",n.jsx("br",{}),"P. O. Box 46162-00100"]})]})]}),n.jsxs("div",{children:[f&&m&&!v&&n.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(0,169,206,0.1), rgba(96,212,244,0.1))",border:"2px solid var(--primary-teal)",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[n.jsx("i",{className:"fas fa-check-circle",style:{color:"var(--primary-teal)",fontSize:"1.5rem"}}),n.jsx("span",{style:{color:"var(--primary-teal)",fontWeight:600},children:m})]}),v&&m&&n.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,107,53,0.1))",border:"2px solid var(--primary-orange)",borderRadius:"8px",padding:"1rem",marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"},children:[n.jsx("i",{className:"fas fa-exclamation-circle",style:{color:"var(--primary-orange)",fontSize:"1.5rem"}}),n.jsx("span",{style:{color:"var(--primary-orange)",fontWeight:600},children:m})]}),n.jsxs("form",{onSubmit:q,noValidate:!0,children:[n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{htmlFor:"name",children:"Name *"}),n.jsx("input",{id:"name",type:"text",value:a.name,onChange:M("name"),style:{borderColor:l.name?"#ef4444":void 0}}),l.name&&n.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:l.name})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{htmlFor:"email",children:"Email *"}),n.jsx("input",{id:"email",type:"email",value:a.email,onChange:M("email"),style:{borderColor:l.email?"#ef4444":void 0}}),l.email&&n.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:l.email})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{htmlFor:"reason",children:"Reason for Contact *"}),n.jsxs("select",{id:"reason",value:a.reason,onChange:M("reason"),style:{borderColor:l.reason?"#ef4444":void 0,width:"100%",padding:"0.75rem",fontSize:"1rem",borderRadius:"8px",border:"2px solid #ddd",backgroundColor:"white",cursor:"pointer",transition:"border-color 0.2s"},children:[n.jsx("option",{value:"",children:"-- Select a reason --"}),n.jsx("option",{value:"volunteer",children:"Volunteer Opportunities"}),n.jsx("option",{value:"partnership",children:"Partnership Inquiry"}),n.jsx("option",{value:"donation",children:"Donation Information"}),n.jsx("option",{value:"sponsorship",children:"Sponsorship Programs"}),n.jsx("option",{value:"events",children:"Event Information"}),n.jsx("option",{value:"general",children:"General Inquiry"}),n.jsx("option",{value:"feedback",children:"Feedback or Suggestions"}),n.jsx("option",{value:"media",children:"Media/Press Inquiry"}),n.jsx("option",{value:"other",children:"Other"})]}),l.reason&&n.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:l.reason})]}),n.jsxs("div",{style:{marginBottom:"1.5rem"},children:[n.jsx("label",{htmlFor:"message",children:"Message *"}),n.jsx("textarea",{id:"message",rows:6,value:a.message,onChange:M("message"),style:{borderColor:l.message?"#ef4444":void 0,resize:"vertical"}}),l.message&&n.jsx("div",{style:{color:"#ef4444",fontSize:"0.875rem",marginTop:"0.25rem"},children:l.message})]}),n.jsx("button",{type:"submit",style:{width:"100%",fontSize:"1.1rem"},disabled:h,children:h?n.jsxs(n.Fragment,{children:[n.jsx("i",{className:"fas fa-spinner fa-spin",style:{marginRight:"0.5rem"}}),"Sending..."]}):n.jsxs(n.Fragment,{children:[n.jsx("i",{className:"fas fa-paper-plane",style:{marginRight:"0.5rem"}}),"Send Message"]})})]})]})]}),n.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,179,102,0.1))",padding:"2rem",borderRadius:"12px",textAlign:"center"},children:[n.jsx("h3",{children:"Follow Our Journey"}),n.jsx("p",{style:{marginBottom:"1rem"},children:"Stay connected and see the impact we're making every day."}),n.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[n.jsxs("a",{href:"https://x.com/EducateHERs",target:"_blank",rel:"noopener noreferrer",style:{background:"#1DA1F2",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:T=>T.currentTarget.style.transform="translateY(-2px)",onMouseOut:T=>T.currentTarget.style.transform="translateY(0)",children:[n.jsx("i",{className:"fab fa-twitter"}),"Twitter"]}),n.jsxs("a",{href:"https://www.facebook.com/educatehers",target:"_blank",rel:"noopener noreferrer",style:{background:"#4267B2",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:T=>T.currentTarget.style.transform="translateY(-2px)",onMouseOut:T=>T.currentTarget.style.transform="translateY(0)",children:[n.jsx("i",{className:"fab fa-facebook-f"}),"Facebook"]}),n.jsxs("a",{href:"https://www.instagram.com/educateherskenya/",target:"_blank",rel:"noopener noreferrer",style:{background:"#E1306C",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:T=>T.currentTarget.style.transform="translateY(-2px)",onMouseOut:T=>T.currentTarget.style.transform="translateY(0)",children:[n.jsx("i",{className:"fab fa-instagram"}),"Instagram"]}),n.jsxs("a",{href:"https://www.linkedin.com/company/educate-hers/",target:"_blank",rel:"noopener noreferrer",style:{background:"#0077B5",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:T=>T.currentTarget.style.transform="translateY(-2px)",onMouseOut:T=>T.currentTarget.style.transform="translateY(0)",children:[n.jsx("i",{className:"fab fa-linkedin-in"}),"LinkedIn"]}),n.jsxs("a",{href:"https://www.youtube.com/@EducateHERs",target:"_blank",rel:"noopener noreferrer",style:{background:"#FF0000",padding:"0.75rem 1.5rem",borderRadius:"8px",color:"white",textDecoration:"none",fontWeight:600,transition:"transform 0.2s",border:"none",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"0.5rem"},onMouseOver:T=>T.currentTarget.style.transform="translateY(-2px)",onMouseOut:T=>T.currentTarget.style.transform="translateY(0)",children:[n.jsx("i",{className:"fab fa-youtube"}),"YouTube"]})]})]})]})}function Xg(){return n.jsxs("main",{className:"donate-page-modern",children:[n.jsx(dt,{title:"Donate",description:"Support EducateHers Kenya and help empower girls through education. Your donation provides scholarships, STEM programs, and educational resources to girls across Kenya. Make a difference today.",keywords:"donate to EducateHers Kenya, support girls education, Kenya education donation, scholarship fund, girls empowerment donation, support gender equality",url:"https://educateherskenya.org/donate"}),n.jsx("section",{className:"donate-hero-modern",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"hero-card-wrapper",children:n.jsxs("div",{className:"hero-card-modern",children:[n.jsxs("div",{className:"hero-badge-modern",children:[n.jsx("span",{className:"badge-pulse"}),n.jsx("i",{className:"fas fa-heart"}),n.jsx("span",{children:"Make an Impact"})]}),n.jsxs("h1",{className:"hero-title-large",children:["Transform Lives Through",n.jsx("span",{className:"text-gradient",children:" Education"})]}),n.jsx("p",{className:"hero-subtitle-modern",children:"Every contribution empowers girls across Kenya with quality education, mentorship, and opportunities to reach their full potential."}),n.jsxs("div",{className:"hero-stats-modern",children:[n.jsxs("div",{className:"stat-modern",children:[n.jsx("div",{className:"stat-number",children:"1,500+"}),n.jsx("div",{className:"stat-label",children:"Girls Empowered"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-modern",children:[n.jsx("div",{className:"stat-number",children:"500+"}),n.jsx("div",{className:"stat-label",children:"Scholarships"})]}),n.jsx("div",{className:"stat-divider"}),n.jsxs("div",{className:"stat-modern",children:[n.jsx("div",{className:"stat-number",children:"50+"}),n.jsx("div",{className:"stat-label",children:"Communities"})]})]})]})})})}),n.jsx("style",{children:`
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
      `}),n.jsx("section",{className:"donate-content-modern",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"content-grid-modern",children:[n.jsxs("div",{className:"impact-section-modern",children:[n.jsxs("div",{className:"impact-card-wrapper",children:[n.jsxs("div",{className:"section-header-modern",children:[n.jsxs("div",{className:"label-with-icon",children:[n.jsx("div",{className:"label-icon-circle",children:n.jsx("i",{className:"fas fa-bullseye"})}),n.jsx("span",{className:"section-label-modern",children:"Your Impact"})]}),n.jsx("h2",{className:"section-title-modern",children:"Every Donation Creates Change"}),n.jsx("p",{className:"section-description-modern",children:"Your support directly funds education and life-changing opportunities for girls."})]}),n.jsxs("div",{className:"impact-tiers-modern",children:[n.jsxs("div",{className:"tier-card-modern tier-bronze",children:[n.jsx("div",{className:"tier-icon-modern",children:n.jsx("span",{children:"📚"})}),n.jsxs("div",{className:"tier-content-modern",children:[n.jsx("div",{className:"tier-amount-modern",children:"KES 5,000"}),n.jsx("p",{className:"tier-description-modern",children:"School supplies for 5 girls"})]}),n.jsx("div",{className:"tier-glow"})]}),n.jsxs("div",{className:"tier-card-modern tier-silver",children:[n.jsx("div",{className:"tier-icon-modern",children:n.jsx("span",{children:"🎓"})}),n.jsxs("div",{className:"tier-content-modern",children:[n.jsx("div",{className:"tier-amount-modern",children:"KES 20,000"}),n.jsx("p",{className:"tier-description-modern",children:"One term of education"})]}),n.jsx("div",{className:"tier-glow"})]}),n.jsxs("div",{className:"tier-card-modern tier-gold",children:[n.jsx("div",{className:"tier-icon-modern",children:n.jsx("span",{children:"👥"})}),n.jsxs("div",{className:"tier-content-modern",children:[n.jsx("div",{className:"tier-amount-modern",children:"KES 50,000"}),n.jsx("p",{className:"tier-description-modern",children:"Mentorship for 20 girls"})]}),n.jsx("div",{className:"tier-glow"})]}),n.jsxs("div",{className:"tier-card-modern tier-platinum featured-tier",children:[n.jsxs("div",{className:"featured-label",children:[n.jsx("i",{className:"fas fa-star"}),n.jsx("span",{children:"Most Impact"})]}),n.jsx("div",{className:"tier-icon-modern",children:n.jsx("span",{children:"🏆"})}),n.jsxs("div",{className:"tier-content-modern",children:[n.jsx("div",{className:"tier-amount-modern",children:"KES 100,000+"}),n.jsx("p",{className:"tier-description-modern",children:"Full year scholarship"})]}),n.jsx("div",{className:"tier-glow"})]})]}),n.jsxs("div",{className:"trust-badges-modern",children:[n.jsxs("div",{className:"trust-badge-modern",children:[n.jsx("div",{className:"trust-icon-modern",children:n.jsx("i",{className:"fas fa-certificate"})}),n.jsx("span",{className:"trust-text-modern",children:"Registered Non-Profit"})]}),n.jsxs("div",{className:"trust-badge-modern",children:[n.jsx("div",{className:"trust-icon-modern",children:n.jsx("i",{className:"fas fa-check-double"})}),n.jsx("span",{className:"trust-text-modern",children:"100% Transparent"})]}),n.jsxs("div",{className:"trust-badge-modern",children:[n.jsx("div",{className:"trust-icon-modern",children:n.jsx("i",{className:"fas fa-file-invoice-dollar"})}),n.jsx("span",{className:"trust-text-modern",children:"Tax Deductible"})]})]})]}),n.jsx("style",{children:`
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
              `})]}),n.jsx("div",{className:"donation-section-modern",children:n.jsxs("div",{className:"donation-card-wrapper",children:[n.jsxs("div",{className:"donation-card-modern",children:[n.jsxs("div",{className:"card-header-modern",children:[n.jsx("div",{className:"header-icon-modern",children:n.jsx("i",{className:"fas fa-hand-holding-heart"})}),n.jsx("h3",{className:"card-title-modern",children:"Make Your Donation"}),n.jsx("p",{className:"card-subtitle-modern",children:"Support our mission today"})]}),n.jsx("div",{className:"donation-link-wrapper",children:n.jsxs("a",{href:"https://www.mchanga.africa/fundraiser/125738?_gl=1*1mrzoua*_gcl_au*MTg5MzE4MjI4OC4xNzYyMzQzNDU3LjI0Njg0NzMyOC4xNzYyMzQ0MTUwLjE3NjIzNDQ4MzE",target:"_blank",rel:"noopener noreferrer",className:"donation-button-primary",children:[n.jsx("span",{className:"button-icon",children:n.jsx("i",{className:"fas fa-heart"})}),n.jsxs("span",{className:"button-content",children:[n.jsx("span",{className:"button-text",children:"Donate Now"}),n.jsx("span",{className:"button-subtext",children:"via M-Changa"})]}),n.jsx("span",{className:"button-arrow",children:n.jsx("i",{className:"fas fa-arrow-right"})})]})}),n.jsxs("div",{className:"contact-wrapper-modern",children:[n.jsxs("div",{className:"contact-header-text",children:[n.jsx("h4",{children:"Get in Touch to Donate"}),n.jsx("p",{children:"Choose your preferred way to reach us"})]}),n.jsxs("div",{className:"contact-grid-modern",children:[n.jsx("a",{href:"mailto:info@educateherskenya.net",className:"contact-card-item",children:n.jsxs("div",{className:"contact-card-inner",children:[n.jsx("div",{className:"contact-icon-wrapper email-icon",children:n.jsx("i",{className:"fas fa-envelope"})}),n.jsx("h5",{className:"contact-method-title",children:"Email Us"}),n.jsx("p",{className:"contact-method-value",children:"info@educateherskenya.net"}),n.jsx("div",{className:"contact-hover-arrow",children:n.jsx("i",{className:"fas fa-arrow-right"})})]})}),n.jsx("a",{href:"tel:+254703257597",className:"contact-card-item",children:n.jsxs("div",{className:"contact-card-inner",children:[n.jsx("div",{className:"contact-icon-wrapper phone-icon",children:n.jsx("i",{className:"fas fa-phone-alt"})}),n.jsx("h5",{className:"contact-method-title",children:"Call Us"}),n.jsx("p",{className:"contact-method-value",children:"+254 703 257 597"}),n.jsx("div",{className:"contact-hover-arrow",children:n.jsx("i",{className:"fas fa-arrow-right"})})]})}),n.jsx(V,{to:"/contact",className:"contact-card-item",children:n.jsxs("div",{className:"contact-card-inner",children:[n.jsx("div",{className:"contact-icon-wrapper form-icon",children:n.jsx("i",{className:"fas fa-paper-plane"})}),n.jsx("h5",{className:"contact-method-title",children:"Send Message"}),n.jsx("p",{className:"contact-method-value",children:"Fill out our form"}),n.jsx("div",{className:"contact-hover-arrow",children:n.jsx("i",{className:"fas fa-arrow-right"})})]})})]}),n.jsxs("div",{className:"security-badge-modern",children:[n.jsx("div",{className:"security-icon-circle",children:n.jsx("i",{className:"fas fa-shield-check"})}),n.jsxs("div",{className:"security-text-content",children:[n.jsx("span",{className:"security-title",children:"Secure & Confidential"}),n.jsx("span",{className:"security-subtitle",children:"Your information is protected"})]})]})]})]}),n.jsx("style",{children:`
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

                  .donation-link-wrapper {
                    margin: 30px 0;
                  }

                  .donation-button-primary {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                    color: white;
                    padding: 24px 32px;
                    border-radius: 16px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1.1rem;
                    box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                    position: relative;
                    overflow: hidden;
                  }

                  .donation-button-primary::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s;
                  }

                  .donation-button-primary:hover::before {
                    left: 100%;
                  }

                  .donation-button-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 32px rgba(255, 107, 53, 0.4);
                  }

                  .donation-button-primary:active {
                    transform: translateY(-2px);
                  }

                  .button-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 12px;
                    font-size: 1.3rem;
                    flex-shrink: 0;
                  }

                  .button-content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    text-align: left;
                  }

                  .button-text {
                    font-size: 1.2rem;
                    font-weight: 700;
                    line-height: 1.2;
                  }

                  .button-subtext {
                    font-size: 0.9rem;
                    opacity: 0.9;
                    font-weight: 400;
                    margin-top: 2px;
                  }

                  .button-arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2rem;
                    transition: transform 0.3s;
                  }

                  .donation-button-primary:hover .button-arrow {
                    transform: translateX(5px);
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
                `})]})})]})})}),n.jsx("section",{className:"other-ways-modern",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"other-ways-card-wrapper",children:[n.jsxs("div",{className:"section-header-modern center",children:[n.jsxs("div",{className:"label-with-icon centered",children:[n.jsx("div",{className:"label-icon-circle",children:n.jsx("i",{className:"fas fa-hands-helping"})}),n.jsx("span",{className:"section-label-modern",children:"More Ways to Help"})]}),n.jsx("h2",{className:"section-title-modern",children:"Choose Your Impact Path"}),n.jsx("p",{className:"section-description-modern",children:"Multiple ways to support our mission"})]}),n.jsxs("div",{className:"ways-grid-modern",children:[n.jsxs("div",{className:"way-card-modern",children:[n.jsx("div",{className:"way-icon-modern recurring",children:n.jsx("i",{className:"fas fa-sync"})}),n.jsx("h3",{className:"way-title-modern",children:"Monthly Giving"}),n.jsx("p",{className:"way-description-modern",children:"Create sustainable impact through recurring contributions"}),n.jsxs(V,{to:"/contact",className:"way-link-modern",children:["Learn More ",n.jsx("i",{className:"fas fa-arrow-right"})]})]}),n.jsxs("div",{className:"way-card-modern",children:[n.jsx("div",{className:"way-icon-modern inkind",children:n.jsx("i",{className:"fas fa-boxes"})}),n.jsx("h3",{className:"way-title-modern",children:"In-Kind Donations"}),n.jsx("p",{className:"way-description-modern",children:"Donate books, supplies, or educational materials"}),n.jsxs(V,{to:"/contact",className:"way-link-modern",children:["Learn More ",n.jsx("i",{className:"fas fa-arrow-right"})]})]}),n.jsxs("div",{className:"way-card-modern",children:[n.jsx("div",{className:"way-icon-modern corporate",children:n.jsx("i",{className:"fas fa-briefcase"})}),n.jsx("h3",{className:"way-title-modern",children:"Corporate Partnership"}),n.jsx("p",{className:"way-description-modern",children:"Align your CSR goals with our mission"}),n.jsxs(V,{to:"/contact",className:"way-link-modern",children:["Partner With Us ",n.jsx("i",{className:"fas fa-arrow-right"})]})]}),n.jsxs("div",{className:"way-card-modern",children:[n.jsx("div",{className:"way-icon-modern fundraise",children:n.jsx("i",{className:"fas fa-bullhorn"})}),n.jsx("h3",{className:"way-title-modern",children:"Start a Campaign"}),n.jsx("p",{className:"way-description-modern",children:"Fundraise and rally your network"}),n.jsxs(V,{to:"/contact",className:"way-link-modern",children:["Get Started ",n.jsx("i",{className:"fas fa-arrow-right"})]})]})]}),n.jsx("style",{children:`
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
            `})]})})})]})}function Jg(){return n.jsx("main",{className:"legal-page",children:n.jsxs("div",{className:"legal-container",children:[n.jsxs("div",{className:"legal-header",children:[n.jsx("h1",{children:"Privacy Policy"}),n.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),n.jsxs("div",{className:"legal-content",children:[n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"1. Introduction"}),n.jsx("p",{children:'EducateHers Kenya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.'}),n.jsx("p",{children:"Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"2. Information We Collect"}),n.jsx("h3",{children:"Personal Information"}),n.jsx("p",{children:"We may collect personal information that you voluntarily provide to us when you:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Register for our programs or volunteer opportunities"}),n.jsx("li",{children:"Make a donation"}),n.jsx("li",{children:"Subscribe to our newsletter"}),n.jsx("li",{children:"Contact us via our contact form"}),n.jsx("li",{children:"Participate in our events"})]}),n.jsx("p",{children:"This information may include:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Name and contact information (email address, phone number, postal address)"}),n.jsx("li",{children:"Demographic information"}),n.jsx("li",{children:"Payment information (processed securely through third-party payment processors)"}),n.jsx("li",{children:"Volunteer application information"})]}),n.jsx("h3",{children:"Automatically Collected Information"}),n.jsx("p",{children:"When you visit our website, we may automatically collect certain information, including:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"IP address"}),n.jsx("li",{children:"Browser type and version"}),n.jsx("li",{children:"Pages visited and time spent on pages"}),n.jsx("li",{children:"Referring website addresses"}),n.jsx("li",{children:"Device information"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"3. How We Use Your Information"}),n.jsx("p",{children:"We use the information we collect to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Process donations and maintain donation records"}),n.jsx("li",{children:"Communicate with you about our programs and services"}),n.jsx("li",{children:"Send newsletters and updates (with your consent)"}),n.jsx("li",{children:"Process volunteer applications"}),n.jsx("li",{children:"Respond to your inquiries and requests"}),n.jsx("li",{children:"Improve our website and services"}),n.jsx("li",{children:"Comply with legal obligations"}),n.jsx("li",{children:"Prevent fraud and enhance security"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"4. Sharing Your Information"}),n.jsx("p",{children:"We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Service Providers:"})," With trusted third-party service providers who assist us in operating our website, conducting our operations, or servicing you (e.g., payment processors, email service providers)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Legal Requirements:"})," When required by law or to protect our rights and safety"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Business Transfers:"})," In connection with any merger, sale of company assets, or acquisition"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"With Your Consent:"})," When you have given us explicit permission to share your information"]})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"5. Data Security"}),n.jsx("p",{children:"We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"6. Your Rights"}),n.jsx("p",{children:"You have the right to:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Access:"})," Request access to the personal information we hold about you"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Correction:"})," Request correction of inaccurate or incomplete information"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Deletion:"})," Request deletion of your personal information"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Opt-Out:"})," Unsubscribe from marketing communications at any time"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Data Portability:"})," Request a copy of your personal information in a structured format"]})]}),n.jsxs("p",{children:["To exercise these rights, please contact us at ",n.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"7. Cookies and Tracking Technologies"}),n.jsxs("p",{children:["We use cookies and similar tracking technologies to enhance your experience on our website. For more information about how we use cookies, please see our ",n.jsx(V,{to:"/cookies",children:"Cookie Policy"}),"."]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"8. Third-Party Links"}),n.jsx("p",{children:"Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"9. Children's Privacy"}),n.jsx("p",{children:"Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"10. International Data Transfers"}),n.jsx("p",{children:"Your information may be transferred to and maintained on computers located outside of Kenya or your jurisdiction where data protection laws may differ. By using our services, you consent to this transfer."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"11. Changes to This Privacy Policy"}),n.jsx("p",{children:'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.'})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"12. Contact Us"}),n.jsx("p",{children:"If you have questions or concerns about this Privacy Policy, please contact us:"}),n.jsxs("div",{className:"contact-info",children:[n.jsx("p",{children:n.jsx("strong",{children:"EducateHers Kenya"})}),n.jsxs("p",{children:["Galleria Office and Business Park",n.jsx("br",{}),"Seminary Road, Karen Area",n.jsx("br",{}),"Nairobi, Kenya",n.jsx("br",{}),"P. O. Box 46162-00100"]}),n.jsxs("p",{children:["Email: ",n.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),n.jsxs("p",{children:["Phone: ",n.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),n.jsxs("div",{className:"legal-footer",children:[n.jsxs(V,{to:"/",className:"back-link",children:[n.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),n.jsxs("div",{className:"legal-links",children:[n.jsx(V,{to:"/terms",children:"Terms of Service"}),n.jsx("span",{children:"•"}),n.jsx(V,{to:"/cookies",children:"Cookie Policy"})]})]})]})})}function Zg(){return n.jsx("main",{className:"legal-page",children:n.jsxs("div",{className:"legal-container",children:[n.jsxs("div",{className:"legal-header",children:[n.jsx("h1",{children:"Terms of Service"}),n.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),n.jsxs("div",{className:"legal-content",children:[n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"1. Acceptance of Terms"}),n.jsx("p",{children:'Welcome to EducateHers Kenya. By accessing or using our website, services, programs, or events, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.'})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"2. About EducateHers Kenya"}),n.jsx("p",{children:"EducateHers Kenya is a non-profit organization dedicated to empowering girls through education and advocating for gender equality in Kenya and beyond. We provide educational programs, mentorship, and resources to support girls' education."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"3. Use of Our Services"}),n.jsx("h3",{children:"Eligibility"}),n.jsx("p",{children:"You must be at least 13 years old to use our services independently. If you are under 18, you must have parental or guardian consent."}),n.jsx("h3",{children:"Acceptable Use"}),n.jsx("p",{children:"You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others. You agree not to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use our services for any illegal or unauthorized purpose"}),n.jsx("li",{children:"Violate any laws in your jurisdiction"}),n.jsx("li",{children:"Transmit any harmful, offensive, or inappropriate content"}),n.jsx("li",{children:"Attempt to gain unauthorized access to our systems"}),n.jsx("li",{children:"Interfere with or disrupt our services"}),n.jsx("li",{children:"Impersonate any person or entity"}),n.jsx("li",{children:"Collect or harvest personal data of other users"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"4. Donations and Payments"}),n.jsx("h3",{children:"Donation Policy"}),n.jsx("p",{children:"All donations made to EducateHers Kenya are voluntary and non-refundable except as required by law. Donations are processed through secure third-party payment processors."}),n.jsx("h3",{children:"Tax Deductibility"}),n.jsx("p",{children:"EducateHers Kenya is a registered non-profit organization. Donations may be tax-deductible to the extent allowed by law. We will provide receipts for tax purposes."}),n.jsx("h3",{children:"Use of Donations"}),n.jsx("p",{children:"Donations are used to support our programs and operations. While we make every effort to use donations for specific campaigns as indicated, we reserve the right to allocate funds where they are most needed."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"5. Volunteer Programs"}),n.jsx("p",{children:"If you apply to volunteer with EducateHers Kenya:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"You must provide accurate and complete information in your application"}),n.jsx("li",{children:"You may be required to undergo background checks or screening"}),n.jsx("li",{children:"You agree to follow our volunteer guidelines and code of conduct"}),n.jsx("li",{children:"We reserve the right to accept or reject any volunteer application"}),n.jsx("li",{children:"Volunteer positions are unpaid unless otherwise specified"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"6. Intellectual Property"}),n.jsx("h3",{children:"Our Content"}),n.jsx("p",{children:"All content on our website, including text, graphics, logos, images, videos, and software, is the property of EducateHers Kenya or its licensors and is protected by copyright and other intellectual property laws."}),n.jsx("h3",{children:"Limited License"}),n.jsx("p",{children:"You are granted a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Reproduce, distribute, or modify our content without permission"}),n.jsx("li",{children:"Use our content for commercial purposes"}),n.jsx("li",{children:"Remove any copyright or proprietary notices"})]}),n.jsx("h3",{children:"User-Generated Content"}),n.jsx("p",{children:"If you submit content to us (e.g., testimonials, photos, stories), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content for our organizational purposes."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"7. Privacy and Data Protection"}),n.jsxs("p",{children:["Your privacy is important to us. Please review our ",n.jsx(V,{to:"/privacy",children:"Privacy Policy"})," to understand how we collect, use, and protect your personal information."]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"8. Disclaimer of Warranties"}),n.jsx("p",{children:'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that:'}),n.jsxs("ul",{children:[n.jsx("li",{children:"Our services will be uninterrupted or error-free"}),n.jsx("li",{children:"Defects will be corrected"}),n.jsx("li",{children:"Our website is free of viruses or harmful components"}),n.jsx("li",{children:"The information provided is accurate or complete"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"9. Limitation of Liability"}),n.jsx("p",{children:"To the fullest extent permitted by law, EducateHers Kenya shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, including but not limited to:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Loss of profits or revenue"}),n.jsx("li",{children:"Loss of data"}),n.jsx("li",{children:"Business interruption"}),n.jsx("li",{children:"Personal injury"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"10. Indemnification"}),n.jsx("p",{children:"You agree to indemnify, defend, and hold harmless EducateHers Kenya and its officers, directors, employees, and volunteers from any claims, losses, damages, liabilities, and expenses arising from:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Your use of our services"}),n.jsx("li",{children:"Your violation of these Terms"}),n.jsx("li",{children:"Your violation of any rights of another party"})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"11. External Links"}),n.jsx("p",{children:"Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party websites is at your own risk."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"12. Modification of Services"}),n.jsx("p",{children:"We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We may also change these Terms at any time by posting the updated Terms on our website."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"13. Termination"}),n.jsx("p",{children:"We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"14. Governing Law"}),n.jsx("p",{children:"These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"15. Severability"}),n.jsx("p",{children:"If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"16. Contact Information"}),n.jsx("p",{children:"If you have questions about these Terms of Service, please contact us:"}),n.jsxs("div",{className:"contact-info",children:[n.jsx("p",{children:n.jsx("strong",{children:"EducateHers Kenya"})}),n.jsxs("p",{children:["Galleria Office and Business Park",n.jsx("br",{}),"Seminary Road, Karen Area",n.jsx("br",{}),"Nairobi, Kenya",n.jsx("br",{}),"P. O. Box 46162-00100"]}),n.jsxs("p",{children:["Email: ",n.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),n.jsxs("p",{children:["Phone: ",n.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),n.jsxs("div",{className:"legal-footer",children:[n.jsxs(V,{to:"/",className:"back-link",children:[n.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),n.jsxs("div",{className:"legal-links",children:[n.jsx(V,{to:"/privacy",children:"Privacy Policy"}),n.jsx("span",{children:"•"}),n.jsx(V,{to:"/cookies",children:"Cookie Policy"})]})]})]})})}function ex(){return n.jsx("main",{className:"legal-page",children:n.jsxs("div",{className:"legal-container",children:[n.jsxs("div",{className:"legal-header",children:[n.jsx("h1",{children:"Cookie Policy"}),n.jsx("p",{className:"legal-updated",children:"Last Updated: November 5, 2025"})]}),n.jsxs("div",{className:"legal-content",children:[n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"1. What Are Cookies?"}),n.jsx("p",{children:"Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."}),n.jsx("p",{children:"Cookies allow websites to recognize your device and store some information about your preferences or past actions."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"2. How We Use Cookies"}),n.jsx("p",{children:"EducateHers Kenya uses cookies to enhance your experience on our website and to help us understand how our website is being used. We use cookies for the following purposes:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Essential Cookies:"})," These are necessary for the website to function properly"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Performance Cookies:"})," Help us understand how visitors interact with our website"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Functionality Cookies:"})," Remember your preferences and settings"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Analytics Cookies:"})," Help us improve our website by collecting anonymous information"]})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"3. Types of Cookies We Use"}),n.jsx("h3",{children:"Essential Cookies"}),n.jsx("p",{children:"These cookies are strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided."}),n.jsxs("table",{className:"cookie-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Cookie Name"}),n.jsx("th",{children:"Purpose"}),n.jsx("th",{children:"Duration"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"session_id"}),n.jsx("td",{children:"Maintains your session state"}),n.jsx("td",{children:"Session"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"csrf_token"}),n.jsx("td",{children:"Security protection"}),n.jsx("td",{children:"Session"})]})]})]}),n.jsx("h3",{children:"Performance and Analytics Cookies"}),n.jsx("p",{children:"These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us optimize our website and improve user experience."}),n.jsxs("table",{className:"cookie-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Cookie Name"}),n.jsx("th",{children:"Purpose"}),n.jsx("th",{children:"Duration"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"_ga"}),n.jsx("td",{children:"Google Analytics - tracks user behavior"}),n.jsx("td",{children:"2 years"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"_gid"}),n.jsx("td",{children:"Google Analytics - distinguishes users"}),n.jsx("td",{children:"24 hours"})]})]})]}),n.jsx("h3",{children:"Functionality Cookies"}),n.jsx("p",{children:"These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, personalized features."}),n.jsxs("table",{className:"cookie-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Cookie Name"}),n.jsx("th",{children:"Purpose"}),n.jsx("th",{children:"Duration"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"language_pref"}),n.jsx("td",{children:"Remembers your language preference"}),n.jsx("td",{children:"1 year"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"newsletter_dismissed"}),n.jsx("td",{children:"Remembers if you dismissed the newsletter popup"}),n.jsx("td",{children:"30 days"})]})]})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"4. Third-Party Cookies"}),n.jsx("p",{children:"We may use third-party services that also set cookies on your device. These include:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Google Analytics:"})," To analyze website traffic and user behavior"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Social Media Platforms:"})," To enable social sharing and display social media content"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Payment Processors:"})," To process secure donations (M-Changa, payment gateways)"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Video Platforms:"})," To embed videos from YouTube or other platforms"]})]}),n.jsx("p",{children:"These third parties have their own privacy and cookie policies, which we encourage you to review."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"5. How Long Do Cookies Last?"}),n.jsx("p",{children:"Cookies can be either:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Session Cookies:"})," Temporary cookies that expire when you close your browser"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Persistent Cookies:"})," Remain on your device for a set period or until you delete them"]})]}),n.jsx("p",{children:"The duration of each cookie varies based on its purpose. Most of our cookies are session cookies or expire within 1-2 years."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"6. Managing Cookies"}),n.jsx("h3",{children:"Browser Settings"}),n.jsx("p",{children:"Most web browsers allow you to control cookies through their settings. You can:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"View what cookies are stored on your device"}),n.jsx("li",{children:"Delete existing cookies"}),n.jsx("li",{children:"Block all cookies"}),n.jsx("li",{children:"Block third-party cookies only"}),n.jsx("li",{children:"Set your browser to ask before accepting cookies"})]}),n.jsx("h3",{children:"How to Control Cookies in Different Browsers:"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Google Chrome:"})," Settings → Privacy and security → Cookies and other site data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Mozilla Firefox:"})," Options → Privacy & Security → Cookies and Site Data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Safari:"})," Preferences → Privacy → Cookies and website data"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Microsoft Edge:"})," Settings → Privacy, search, and services → Cookies and site permissions"]})]}),n.jsx("h3",{children:"Important Note"}),n.jsx("p",{children:"Please note that blocking or deleting cookies may impact your experience on our website and prevent you from accessing certain features. Some parts of our website may not function properly if you disable cookies."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"7. Do Not Track Signals"}),n.jsx("p",{children:'Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no standard for how websites should respond to these signals. We do not currently respond to "Do Not Track" signals.'})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"8. Mobile Devices"}),n.jsx("p",{children:"If you access our website through a mobile device, you can control cookies through your device settings. The process varies by device manufacturer and operating system."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"9. Updates to This Cookie Policy"}),n.jsx("p",{children:'We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.'}),n.jsx("p",{children:"We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"10. Your Consent"}),n.jsx("p",{children:"By using our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or refrain from using our website."})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"11. More Information"}),n.jsxs("p",{children:["For more information about how we protect your privacy, please read our ",n.jsx(V,{to:"/privacy",children:"Privacy Policy"}),"."]}),n.jsx("p",{children:"To learn more about cookies in general, you can visit:"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("a",{href:"https://www.allaboutcookies.org",target:"_blank",rel:"noopener noreferrer",children:"All About Cookies"})}),n.jsx("li",{children:n.jsx("a",{href:"https://www.youronlinechoices.com",target:"_blank",rel:"noopener noreferrer",children:"Your Online Choices"})})]})]}),n.jsxs("section",{className:"legal-section",children:[n.jsx("h2",{children:"12. Contact Us"}),n.jsx("p",{children:"If you have questions about our use of cookies, please contact us:"}),n.jsxs("div",{className:"contact-info",children:[n.jsx("p",{children:n.jsx("strong",{children:"EducateHers Kenya"})}),n.jsxs("p",{children:["Galleria Office and Business Park",n.jsx("br",{}),"Seminary Road, Karen Area",n.jsx("br",{}),"Nairobi, Kenya",n.jsx("br",{}),"P. O. Box 46162-00100"]}),n.jsxs("p",{children:["Email: ",n.jsx("a",{href:"mailto:info@educateherskenya.net",children:"info@educateherskenya.net"})]}),n.jsxs("p",{children:["Phone: ",n.jsx("a",{href:"tel:+254703257597",children:"+254 703 257 597"})]})]})]})]}),n.jsxs("div",{className:"legal-footer",children:[n.jsxs(V,{to:"/",className:"back-link",children:[n.jsx("i",{className:"fas fa-arrow-left"})," Back to Home"]}),n.jsxs("div",{className:"legal-links",children:[n.jsx(V,{to:"/privacy",children:"Privacy Policy"}),n.jsx("span",{children:"•"}),n.jsx(V,{to:"/terms",children:"Terms of Service"})]})]})]})})}const tx=[{name:"Cyprian Chenani, Bsc",role:"Founder/Lead Advocate",description:"As the driving force behind our advocacy campaign, our Founder/Lead Advocate sets the vision and direction for our efforts. With a passion for social change and a commitment to empowering youth voices.",image:"/assets/team/cyprian-chenani.png",social:{linkedin:"https://www.linkedin.com/in/cyprianchenani",facebook:"https://www.facebook.com/share/17cr3VHsuY/?mibextid=wwXIfr",email:"mailto:cyprian.chenani@educateherskenya.net"}},{name:"Bramuel Wekesa, Bsc",role:"Campaign Coordinator/Event Planner",description:"The mastermind behind our advocacy events and campaigns, orchestrating every detail to ensure their success. From coordinating logistics to rallying support from partners and volunteers.",image:"/assets/team/bramuel-wekesa-2.jpg",social:{linkedin:"#",facebook:"#",email:"#"}},{name:"Emmanuel P. Kwoba",role:"Web Developer/Technical Support",description:"Ensures that our website runs smoothly and effectively serves as a hub for our advocacy efforts. Keeps our online platform up to date, secure, and user-friendly, empowering us to reach a wider audience.",image:"/assets/team/emmanuel-kwoba.jpeg",social:{linkedin:"https://www.linkedin.com/in/emmanuel-petit-kwoba/",facebook:"https://www.facebook.com/petit.kwoba/",email:"mailto:emmanuel.kwoba@educateherskenya.net"}},{name:"Eve Maina",role:"Communications Specialist",description:"The linchpin of our outreach efforts, responsible for crafting clear, concise, and compelling messaging that resonates with our target audience through strategic communication strategies.",image:"assets/team/eve-main.png",social:{linkedin:"https://www.linkedin.com/in/eve-maina/",facebook:"#",email:"mailto:ewanjiru@educateherskenya.net"}}];function nx(){return n.jsxs("main",{className:"team-page",children:[n.jsx(dt,{title:"Our Team",description:"Meet the dedicated team behind EducateHers Kenya. Our passionate professionals work tirelessly to promote gender equality in education and empower girls across Kenya.",keywords:"EducateHers Kenya team, education NGO staff, gender equality advocates, nonprofit team Kenya",url:"https://educateherskenya.org/team"}),n.jsx("section",{className:"page-hero",children:n.jsxs("div",{className:"page-hero-content",children:[n.jsx("h1",{children:"Our Team"}),n.jsx("p",{children:"Meet the passionate individuals driving change in girls' education"})]})}),n.jsxs("section",{className:"team-section",children:[n.jsxs("div",{className:"team-header",children:[n.jsx("p",{className:"team-tagline",children:"OUR TEAMS"}),n.jsx("h2",{className:"team-title",children:"Our Awesome Team"}),n.jsx("p",{className:"team-subtitle",children:"We work with a very great team focused on helping Her be educated"})]}),n.jsx("div",{className:"team-grid",children:tx.map((a,c)=>n.jsxs("div",{className:"team-card",children:[n.jsxs("div",{className:"team-image-container",children:[n.jsx("img",{src:a.image,alt:a.name,className:"team-image"}),n.jsx("div",{className:"team-overlay",children:n.jsxs("div",{className:"team-social",children:[n.jsx("a",{href:a.social.linkedin,className:"social-icon","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-linkedin"})}),n.jsx("a",{href:a.social.facebook,className:"social-icon","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"fab fa-facebook"})}),n.jsx("a",{href:a.social.email,className:"social-icon","aria-label":"Email",children:n.jsx("i",{className:"fas fa-envelope"})})]})})]}),n.jsxs("div",{className:"team-card-content",children:[n.jsx("h3",{className:"team-member-name",children:a.name}),n.jsx("p",{className:"team-member-role",children:a.role}),n.jsx("p",{className:"team-description",children:a.description})]})]},c))})]}),n.jsxs("section",{className:"cta-section",children:[n.jsx("h2",{className:"cta-title",children:"Join Our Mission"}),n.jsx("p",{className:"cta-description",children:"Together, we can create lasting change. Whether through volunteering, donations, or spreading awareness, every action counts."}),n.jsx(V,{to:"/volunteer",className:"cta-link",children:n.jsx("button",{className:"cta-btn",children:"Become a Volunteer"})})]})]})}const pd=[{src:"/images/gallery/event1.jpg",alt:"Girls at educational workshop",category:"workshops",caption:"Gender-Responsive Education Workshop in Turkana County"},{src:"/images/gallery/event2.jpg",alt:"Community gathering for girls education",category:"community",caption:"Community awareness session on girls' education"},{src:"/images/gallery/program1.jpg",alt:"Scholarship recipients graduation",category:"programs",caption:"Scholarship program graduation ceremony"},{src:"/images/gallery/event3.jpg",alt:"Annual fundraising event",category:"events",caption:"Annual fundraising gala 2025"},{src:"/images/gallery/workshop1.jpg",alt:"Teachers training session",category:"workshops",caption:"Teacher training on gender equality"},{src:"/images/gallery/community1.jpg",alt:"Village outreach program",category:"community",caption:"Village outreach program"}];function rx(){const[a,c]=b.useState("all"),[l,u]=b.useState(null),f=a==="all"?pd:pd.filter(v=>v.category===a),p=v=>{u(v)},h=()=>{u(null)},x=()=>{l!==null&&u(l===0?f.length-1:l-1)},m=()=>{l!==null&&u(l===f.length-1?0:l+1)},w=v=>{v.key==="Escape"&&h(),v.key==="ArrowLeft"&&x(),v.key==="ArrowRight"&&m()};return n.jsxs("main",{className:"gallery-page",children:[n.jsx(dt,{title:"Photo Gallery",description:"Browse photos from our programs, events, workshops, and community initiatives. See the impact of EducateHers Kenya in empowering girls through education.",keywords:"EducateHers Kenya photos, girls education events, community programs Kenya, education workshops",url:"https://educateherskenya.org/gallery"}),n.jsx("section",{className:"page-hero",children:n.jsxs("div",{className:"page-hero-content",children:[n.jsx("h1",{children:"Photo Gallery"}),n.jsx("p",{children:"Capturing moments of empowerment and change"})]})}),n.jsx("section",{className:"gallery-section",children:n.jsxs("div",{className:"container",children:[n.jsx(Fo,{animation:"fade-in",children:n.jsxs("div",{className:"gallery-filters",children:[n.jsx("button",{className:a==="all"?"active":"",onClick:()=>c("all"),children:"All"}),n.jsx("button",{className:a==="events"?"active":"",onClick:()=>c("events"),children:"Events"}),n.jsx("button",{className:a==="programs"?"active":"",onClick:()=>c("programs"),children:"Programs"}),n.jsx("button",{className:a==="community"?"active":"",onClick:()=>c("community"),children:"Community"}),n.jsx("button",{className:a==="workshops"?"active":"",onClick:()=>c("workshops"),children:"Workshops"})]})}),n.jsx("div",{className:"gallery-grid",children:f.map((v,E)=>n.jsx(Fo,{animation:"fade-in",delay:E*50,children:n.jsxs("div",{className:"gallery-item",onClick:()=>p(E),role:"button",tabIndex:0,onKeyDown:L=>L.key==="Enter"&&p(E),children:[n.jsx("img",{src:v.src,alt:v.alt,loading:"lazy"}),n.jsx("div",{className:"gallery-overlay",children:n.jsx("p",{children:v.caption||v.alt})})]})},E))})]})}),l!==null&&n.jsxs("div",{className:"lightbox-overlay",onClick:h,onKeyDown:w,role:"dialog","aria-modal":"true","aria-label":"Image lightbox",children:[n.jsx("button",{className:"lightbox-close",onClick:h,"aria-label":"Close lightbox",children:n.jsx(ya,{})}),n.jsx("button",{className:"lightbox-arrow left",onClick:v=>{v.stopPropagation(),x()},"aria-label":"Previous image",children:n.jsx(Bd,{})}),n.jsxs("div",{className:"lightbox-content",onClick:v=>v.stopPropagation(),children:[n.jsx("img",{src:f[l].src,alt:f[l].alt}),f[l].caption&&n.jsx("p",{className:"lightbox-caption",children:f[l].caption})]}),n.jsx("button",{className:"lightbox-arrow right",onClick:v=>{v.stopPropagation(),m()},"aria-label":"Next image",children:n.jsx($d,{})}),n.jsxs("div",{className:"lightbox-counter",children:[l+1," / ",f.length]})]})]})}function ix(){return n.jsxs("main",{className:"not-found-page",children:[n.jsx(dt,{title:"404 - Page Not Found",description:"The page you're looking for doesn't exist. Return to EducateHers Kenya homepage.",url:"https://educateherskenya.org/404"}),n.jsx("section",{className:"not-found-section",children:n.jsxs("div",{className:"not-found-container",children:[n.jsx("div",{className:"not-found-icon",children:n.jsx(Sg,{})}),n.jsx("h1",{className:"not-found-title",children:"404"}),n.jsx("h2",{className:"not-found-subtitle",children:"Oops! Page Not Found"}),n.jsx("p",{className:"not-found-description",children:"The page you're looking for doesn't exist or has been moved. But don't worry, you can find plenty of other ways to support girls' education!"}),n.jsxs("div",{className:"not-found-actions",children:[n.jsxs(V,{to:"/",className:"not-found-btn primary",children:[n.jsx(kg,{})," Back to Home"]}),n.jsxs(V,{to:"/blog",className:"not-found-btn secondary",children:[n.jsx(yg,{})," Read Our Blog"]}),n.jsxs(V,{to:"/contact",className:"not-found-btn secondary",children:[n.jsx(Kd,{})," Contact Us"]})]}),n.jsxs("div",{className:"not-found-suggestions",children:[n.jsx("h3",{children:"You might be interested in:"}),n.jsxs("div",{className:"suggestions-grid",children:[n.jsxs(V,{to:"/what-we-do",className:"suggestion-card",children:[n.jsx("h4",{children:"Our Programs"}),n.jsx("p",{children:"Learn about our gender-responsive education initiatives"})]}),n.jsxs(V,{to:"/donate",className:"suggestion-card",children:[n.jsx("h4",{children:"Make a Donation"}),n.jsx("p",{children:"Support girls' education in Kenya"})]}),n.jsxs(V,{to:"/volunteer",className:"suggestion-card",children:[n.jsx("h4",{children:"Volunteer"}),n.jsx("p",{children:"Join our team and make a difference"})]}),n.jsxs(V,{to:"/events",className:"suggestion-card",children:[n.jsx("h4",{children:"Upcoming Events"}),n.jsx("p",{children:"See what we're working on next"})]})]})]})]})})]})}function ax(){return n.jsxs(Fd,{children:[n.jsx(Og,{}),n.jsxs("div",{className:"app",children:[n.jsx(Tg,{}),n.jsxs(tm,{children:[n.jsx($e,{path:"/",element:n.jsx(Wg,{})}),n.jsx($e,{path:"/events",element:n.jsx(Ug,{})}),n.jsx($e,{path:"/volunteer",element:n.jsx(Bg,{})}),n.jsx($e,{path:"/what-we-do",element:n.jsx(Kg,{})}),n.jsx($e,{path:"/blog",element:n.jsx(Yg,{})}),n.jsx($e,{path:"/blog/:slug",element:n.jsx(Gg,{})}),n.jsx($e,{path:"/contact",element:n.jsx(Qg,{})}),n.jsx($e,{path:"/donate",element:n.jsx(Xg,{})}),n.jsx($e,{path:"/privacy",element:n.jsx(Jg,{})}),n.jsx($e,{path:"/terms",element:n.jsx(Zg,{})}),n.jsx($e,{path:"/cookies",element:n.jsx(ex,{})}),n.jsx($e,{path:"/team",element:n.jsx(nx,{})}),n.jsx($e,{path:"/gallery",element:n.jsx(rx,{})}),n.jsx($e,{path:"*",element:n.jsx(ix,{})})]}),n.jsx(Lg,{}),n.jsx(Ig,{}),n.jsx(Mg,{}),n.jsx(Dg,{})]})]})}const sx=nh.createRoot(document.getElementById("root"));sx.render(n.jsx(Pe.StrictMode,{children:n.jsx(Sm,{children:n.jsx(ax,{})})}));
