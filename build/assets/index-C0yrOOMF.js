(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Ch(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ec={exports:{}},Bo={},Sc={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function Dk(){if(Av)return Ae;Av=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=E&&O[E]||O["@@iterator"],typeof O=="function"?O:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,B={};function M(O,Q,me){this.props=O,this.context=Q,this.refs=B,this.updater=me||I}M.prototype.isReactComponent={},M.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function q(){}q.prototype=M.prototype;function W(O,Q,me){this.props=O,this.context=Q,this.refs=B,this.updater=me||I}var re=W.prototype=new q;re.constructor=W,A(re,M.prototype),re.isPureReactComponent=!0;var ae=Array.isArray,we=Object.prototype.hasOwnProperty,be={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function T(O,Q,me){var Re,Pe={},Le=null,ze=null;if(Q!=null)for(Re in Q.ref!==void 0&&(ze=Q.ref),Q.key!==void 0&&(Le=""+Q.key),Q)we.call(Q,Re)&&!D.hasOwnProperty(Re)&&(Pe[Re]=Q[Re]);var $e=arguments.length-2;if($e===1)Pe.children=me;else if(1<$e){for(var We=Array($e),En=0;En<$e;En++)We[En]=arguments[En+2];Pe.children=We}if(O&&O.defaultProps)for(Re in $e=O.defaultProps,$e)Pe[Re]===void 0&&(Pe[Re]=$e[Re]);return{$$typeof:i,type:O,key:Le,ref:ze,props:Pe,_owner:be.current}}function S(O,Q){return{$$typeof:i,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return Q[me]})}var L=/\/+/g;function R(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):Q.toString(36)}function Qe(O,Q,me,Re,Pe){var Le=typeof O;(Le==="undefined"||Le==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Le){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case i:case e:ze=!0}}if(ze)return ze=O,Pe=Pe(ze),O=Re===""?"."+R(ze,0):Re,ae(Pe)?(me="",O!=null&&(me=O.replace(L,"$&/")+"/"),Qe(Pe,Q,me,"",function(En){return En})):Pe!=null&&(P(Pe)&&(Pe=S(Pe,me+(!Pe.key||ze&&ze.key===Pe.key?"":(""+Pe.key).replace(L,"$&/")+"/")+O)),Q.push(Pe)),1;if(ze=0,Re=Re===""?".":Re+":",ae(O))for(var $e=0;$e<O.length;$e++){Le=O[$e];var We=Re+R(Le,$e);ze+=Qe(Le,Q,me,We,Pe)}else if(We=w(O),typeof We=="function")for(O=We.call(O),$e=0;!(Le=O.next()).done;)Le=Le.value,We=Re+R(Le,$e++),ze+=Qe(Le,Q,me,We,Pe);else if(Le==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ze}function an(O,Q,me){if(O==null)return O;var Re=[],Pe=0;return Qe(O,Re,"","",function(Le){return Q.call(me,Le,Pe++)}),Re}function mn(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var Ie={current:null},ie={transition:null},he={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ie,ReactCurrentOwner:be};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:an,forEach:function(O,Q,me){an(O,function(){Q.apply(this,arguments)},me)},count:function(O){var Q=0;return an(O,function(){Q++}),Q},toArray:function(O){return an(O,function(Q){return Q})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=M,Ae.Fragment=n,Ae.Profiler=s,Ae.PureComponent=W,Ae.StrictMode=r,Ae.Suspense=h,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Ae.act=oe,Ae.cloneElement=function(O,Q,me){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Re=A({},O.props),Pe=O.key,Le=O.ref,ze=O._owner;if(Q!=null){if(Q.ref!==void 0&&(Le=Q.ref,ze=be.current),Q.key!==void 0&&(Pe=""+Q.key),O.type&&O.type.defaultProps)var $e=O.type.defaultProps;for(We in Q)we.call(Q,We)&&!D.hasOwnProperty(We)&&(Re[We]=Q[We]===void 0&&$e!==void 0?$e[We]:Q[We])}var We=arguments.length-2;if(We===1)Re.children=me;else if(1<We){$e=Array(We);for(var En=0;En<We;En++)$e[En]=arguments[En+2];Re.children=$e}return{$$typeof:i,type:O.type,key:Pe,ref:Le,props:Re,_owner:ze}},Ae.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Ae.createElement=T,Ae.createFactory=function(O){var Q=T.bind(null,O);return Q.type=O,Q},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:c,render:O}},Ae.isValidElement=P,Ae.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:mn}},Ae.memo=function(O,Q){return{$$typeof:g,type:O,compare:Q===void 0?null:Q}},Ae.startTransition=function(O){var Q=ie.transition;ie.transition={};try{O()}finally{ie.transition=Q}},Ae.unstable_act=oe,Ae.useCallback=function(O,Q){return Ie.current.useCallback(O,Q)},Ae.useContext=function(O){return Ie.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return Ie.current.useDeferredValue(O)},Ae.useEffect=function(O,Q){return Ie.current.useEffect(O,Q)},Ae.useId=function(){return Ie.current.useId()},Ae.useImperativeHandle=function(O,Q,me){return Ie.current.useImperativeHandle(O,Q,me)},Ae.useInsertionEffect=function(O,Q){return Ie.current.useInsertionEffect(O,Q)},Ae.useLayoutEffect=function(O,Q){return Ie.current.useLayoutEffect(O,Q)},Ae.useMemo=function(O,Q){return Ie.current.useMemo(O,Q)},Ae.useReducer=function(O,Q,me){return Ie.current.useReducer(O,Q,me)},Ae.useRef=function(O){return Ie.current.useRef(O)},Ae.useState=function(O){return Ie.current.useState(O)},Ae.useSyncExternalStore=function(O,Q,me){return Ie.current.useSyncExternalStore(O,Q,me)},Ae.useTransition=function(){return Ie.current.useTransition()},Ae.version="18.3.1",Ae}var xv;function Ih(){return xv||(xv=1,Sc.exports=Dk()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function Fk(){if(Nv)return Bo;Nv=1;var i=Ih(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(c,h,g){var _,E={},w=null,I=null;g!==void 0&&(w=""+g),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(I=h.ref);for(_ in h)r.call(h,_)&&!o.hasOwnProperty(_)&&(E[_]=h[_]);if(c&&c.defaultProps)for(_ in h=c.defaultProps,h)E[_]===void 0&&(E[_]=h[_]);return{$$typeof:e,type:c,key:w,ref:I,props:E,_owner:s.current}}return Bo.Fragment=n,Bo.jsx=d,Bo.jsxs=d,Bo}var Dv;function Mk(){return Dv||(Dv=1,Ec.exports=Fk()),Ec.exports}var G=Mk(),U=Ih();const Ag=Ch(U);var Ll={},Tc={exports:{}},ri={},Cc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function Lk(){return Fv||(Fv=1,function(i){function e(ie,he){var oe=ie.length;ie.push(he);e:for(;0<oe;){var O=oe-1>>>1,Q=ie[O];if(0<s(Q,he))ie[O]=he,ie[oe]=Q,oe=O;else break e}}function n(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var he=ie[0],oe=ie.pop();if(oe!==he){ie[0]=oe;e:for(var O=0,Q=ie.length,me=Q>>>1;O<me;){var Re=2*(O+1)-1,Pe=ie[Re],Le=Re+1,ze=ie[Le];if(0>s(Pe,oe))Le<Q&&0>s(ze,Pe)?(ie[O]=ze,ie[Le]=oe,O=Le):(ie[O]=Pe,ie[Re]=oe,O=Re);else if(Le<Q&&0>s(ze,oe))ie[O]=ze,ie[Le]=oe,O=Le;else break e}}return he}function s(ie,he){var oe=ie.sortIndex-he.sortIndex;return oe!==0?oe:ie.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;i.unstable_now=function(){return o.now()}}else{var d=Date,c=d.now();i.unstable_now=function(){return d.now()-c}}var h=[],g=[],_=1,E=null,w=3,I=!1,A=!1,B=!1,M=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(ie){for(var he=n(g);he!==null;){if(he.callback===null)r(g);else if(he.startTime<=ie)r(g),he.sortIndex=he.expirationTime,e(h,he);else break;he=n(g)}}function ae(ie){if(B=!1,re(ie),!A)if(n(h)!==null)A=!0,mn(we);else{var he=n(g);he!==null&&Ie(ae,he.startTime-ie)}}function we(ie,he){A=!1,B&&(B=!1,q(T),T=-1),I=!0;var oe=w;try{for(re(he),E=n(h);E!==null&&(!(E.expirationTime>he)||ie&&!N());){var O=E.callback;if(typeof O=="function"){E.callback=null,w=E.priorityLevel;var Q=O(E.expirationTime<=he);he=i.unstable_now(),typeof Q=="function"?E.callback=Q:E===n(h)&&r(h),re(he)}else r(h);E=n(h)}if(E!==null)var me=!0;else{var Re=n(g);Re!==null&&Ie(ae,Re.startTime-he),me=!1}return me}finally{E=null,w=oe,I=!1}}var be=!1,D=null,T=-1,S=5,P=-1;function N(){return!(i.unstable_now()-P<S)}function L(){if(D!==null){var ie=i.unstable_now();P=ie;var he=!0;try{he=D(!0,ie)}finally{he?R():(be=!1,D=null)}}else be=!1}var R;if(typeof W=="function")R=function(){W(L)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,an=Qe.port2;Qe.port1.onmessage=L,R=function(){an.postMessage(null)}}else R=function(){M(L,0)};function mn(ie){D=ie,be||(be=!0,R())}function Ie(ie,he){T=M(function(){ie(i.unstable_now())},he)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ie){ie.callback=null},i.unstable_continueExecution=function(){A||I||(A=!0,mn(we))},i.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<ie?Math.floor(1e3/ie):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_getFirstCallbackNode=function(){return n(h)},i.unstable_next=function(ie){switch(w){case 1:case 2:case 3:var he=3;break;default:he=w}var oe=w;w=he;try{return ie()}finally{w=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ie,he){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=w;w=ie;try{return he()}finally{w=oe}},i.unstable_scheduleCallback=function(ie,he,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,ie){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,ie={id:_++,callback:he,priorityLevel:ie,startTime:oe,expirationTime:Q,sortIndex:-1},oe>O?(ie.sortIndex=oe,e(g,ie),n(h)===null&&ie===n(g)&&(B?(q(T),T=-1):B=!0,Ie(ae,oe-O))):(ie.sortIndex=Q,e(h,ie),A||I||(A=!0,mn(we))),ie},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(ie){var he=w;return function(){var oe=w;w=he;try{return ie.apply(this,arguments)}finally{w=oe}}}}(Ic)),Ic}var Mv;function Ok(){return Mv||(Mv=1,Cc.exports=Lk()),Cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function Vk(){if(Lv)return ri;Lv=1;var i=Ih(),e=Ok();function n(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,f=1;f<arguments.length;f++)a+="&args[]="+encodeURIComponent(arguments[f]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,s={};function o(t,a){d(t,a),d(t+"Capture",a)}function d(t,a){for(s[t]=a,t=0;t<a.length;t++)r.add(a[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function w(t){return h.call(E,t)?!0:h.call(_,t)?!1:g.test(t)?E[t]=!0:(_[t]=!0,!1)}function I(t,a,f,u){if(f!==null&&f.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return u?!1:f!==null?!f.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,a,f,u){if(a===null||typeof a>"u"||I(t,a,f,u))return!0;if(u)return!1;if(f!==null)switch(f.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function B(t,a,f,u,m,p,k){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=u,this.attributeNamespace=m,this.mustUseProperty=f,this.propertyName=t,this.type=a,this.sanitizeURL=p,this.removeEmptyString=k}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var a=t[0];M[a]=new B(a,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var a=t.replace(q,W);M[a]=new B(a,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var a=t.replace(q,W);M[a]=new B(a,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var a=t.replace(q,W);M[a]=new B(a,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function re(t,a,f,u){var m=M.hasOwnProperty(a)?M[a]:null;(m!==null?m.type!==0:u||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(A(a,f,m,u)&&(f=null),u||m===null?w(a)&&(f===null?t.removeAttribute(a):t.setAttribute(a,""+f)):m.mustUseProperty?t[m.propertyName]=f===null?m.type===3?!1:"":f:(a=m.attributeName,u=m.attributeNamespace,f===null?t.removeAttribute(a):(m=m.type,f=m===3||m===4&&f===!0?"":""+f,u?t.setAttributeNS(u,a,f):t.setAttribute(a,f))))}var ae=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),be=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),an=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Ie=Symbol.for("react.offscreen"),ie=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=ie&&t[ie]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,O;function Q(t){if(O===void 0)try{throw Error()}catch(f){var a=f.stack.trim().match(/\n( *(at )?)/);O=a&&a[1]||""}return`
`+O+t}var me=!1;function Re(t,a){if(!t||me)return"";me=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch($){var u=$}Reflect.construct(t,[],a)}else{try{a.call()}catch($){u=$}t.call(a.prototype)}else{try{throw Error()}catch($){u=$}t()}}catch($){if($&&u&&typeof $.stack=="string"){for(var m=$.stack.split(`
`),p=u.stack.split(`
`),k=m.length-1,C=p.length-1;1<=k&&0<=C&&m[k]!==p[C];)C--;for(;1<=k&&0<=C;k--,C--)if(m[k]!==p[C]){if(k!==1||C!==1)do if(k--,C--,0>C||m[k]!==p[C]){var x=`
`+m[k].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=k&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=f}return(t=t?t.displayName||t.name:"")?Q(t):""}function Pe(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=Re(t.type,!1),t;case 11:return t=Re(t.type.render,!1),t;case 1:return t=Re(t.type,!0),t;default:return""}}function Le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case be:return"Portal";case S:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case Qe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case L:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case an:return a=t.displayName||null,a!==null?a:Le(t.type)||"Memo";case mn:a=t._payload,t=t._init;try{return Le(t(a))}catch{}}return null}function ze(t){var a=t.type;switch(t.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=a.render,t=t.displayName||t.name||"",a.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(a);case 8:return a===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function $e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function We(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function En(t){var a=We(t)?"checked":"value",f=Object.getOwnPropertyDescriptor(t.constructor.prototype,a),u=""+t[a];if(!t.hasOwnProperty(a)&&typeof f<"u"&&typeof f.get=="function"&&typeof f.set=="function"){var m=f.get,p=f.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return m.call(this)},set:function(k){u=""+k,p.call(this,k)}}),Object.defineProperty(t,a,{enumerable:f.enumerable}),{getValue:function(){return u},setValue:function(k){u=""+k},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function ht(t){t._valueTracker||(t._valueTracker=En(t))}function ba(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var f=a.getValue(),u="";return t&&(u=We(t)?t.checked?"true":"false":t.value),t=u,t!==f?(a.setValue(t),!0):!1}function qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lr(t,a){var f=a.checked;return oe({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:f??t._wrapperState.initialChecked})}function Ea(t,a){var f=a.defaultValue==null?"":a.defaultValue,u=a.checked!=null?a.checked:a.defaultChecked;f=$e(a.value!=null?a.value:f),t._wrapperState={initialChecked:u,initialValue:f,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Hs(t,a){a=a.checked,a!=null&&re(t,"checked",a,!1)}function Ws(t,a){Hs(t,a);var f=$e(a.value),u=a.type;if(f!=null)u==="number"?(f===0&&t.value===""||t.value!=f)&&(t.value=""+f):t.value!==""+f&&(t.value=""+f);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}a.hasOwnProperty("value")?Sa(t,a.type,f):a.hasOwnProperty("defaultValue")&&Sa(t,a.type,$e(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(t.defaultChecked=!!a.defaultChecked)}function wf(t,a,f){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var u=a.type;if(!(u!=="submit"&&u!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+t._wrapperState.initialValue,f||a===t.value||(t.value=a),t.defaultValue=a}f=t.name,f!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,f!==""&&(t.name=f)}function Sa(t,a,f){(a!=="number"||qt(t.ownerDocument)!==t)&&(f==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+f&&(t.defaultValue=""+f))}var mt=Array.isArray;function vt(t,a,f,u){if(t=t.options,a){a={};for(var m=0;m<f.length;m++)a["$"+f[m]]=!0;for(f=0;f<t.length;f++)m=a.hasOwnProperty("$"+t[f].value),t[f].selected!==m&&(t[f].selected=m),m&&u&&(t[f].defaultSelected=!0)}else{for(f=""+$e(f),a=null,m=0;m<t.length;m++){if(t[m].value===f){t[m].selected=!0,u&&(t[m].defaultSelected=!0);return}a!==null||t[m].disabled||(a=t[m])}a!==null&&(a.selected=!0)}}function Gs(t,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},a,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ta(t,a){var f=a.value;if(f==null){if(f=a.children,a=a.defaultValue,f!=null){if(a!=null)throw Error(n(92));if(mt(f)){if(1<f.length)throw Error(n(93));f=f[0]}a=f}a==null&&(a=""),f=a}t._wrapperState={initialValue:$e(f)}}function Ca(t,a){var f=$e(a.value),u=$e(a.defaultValue);f!=null&&(f=""+f,f!==t.value&&(t.value=f),a.defaultValue==null&&t.defaultValue!==f&&(t.defaultValue=f)),u!=null&&(t.defaultValue=""+u)}function Ks(t){var a=t.textContent;a===t._wrapperState.initialValue&&a!==""&&a!==null&&(t.value=a)}function vn(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pn(t,a){return t==null||t==="http://www.w3.org/1999/xhtml"?vn(a):t==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pt,Qs=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,f,u,m){MSApp.execUnsafeLocalFunction(function(){return t(a,f,u,m)})}:t}(function(t,a){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=a;else{for(pt=pt||document.createElement("div"),pt.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=pt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;a.firstChild;)t.appendChild(a.firstChild)}});function Ht(t,a){if(a){var f=t.firstChild;if(f&&f===t.lastChild&&f.nodeType===3){f.nodeValue=a;return}}t.textContent=a}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vr=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(t){Vr.forEach(function(a){a=a+t.charAt(0).toUpperCase()+t.substring(1),Or[a]=Or[t]})});function Js(t,a,f){return a==null||typeof a=="boolean"||a===""?"":f||typeof a!="number"||a===0||Or.hasOwnProperty(t)&&Or[t]?(""+a).trim():a+"px"}function Ys(t,a){t=t.style;for(var f in a)if(a.hasOwnProperty(f)){var u=f.indexOf("--")===0,m=Js(f,a[f],u);f==="float"&&(f="cssFloat"),u?t.setProperty(f,m):t[f]=m}}var Xs=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zs(t,a){if(a){if(Xs[t]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function eo(t,a){if(t.indexOf("-")===-1)return typeof a.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jr=null;function Ia(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ra=null,hi=null,Wi=null;function Pa(t){if(t=To(t)){if(typeof Ra!="function")throw Error(n(280));var a=t.stateNode;a&&(a=Yf(a),Ra(t.stateNode,t.type,a))}}function Gi(t){hi?Wi?Wi.push(t):Wi=[t]:hi=t}function no(){if(hi){var t=hi,a=Wi;if(Wi=hi=null,Pa(t),a)for(t=0;t<a.length;t++)Pa(a[t])}}function Br(t,a){return t(a)}function io(){}var gt=!1;function to(t,a,f){if(gt)return t(a,f);gt=!0;try{return Br(t,a,f)}finally{gt=!1,(hi!==null||Wi!==null)&&(io(),no())}}function fn(t,a){var f=t.stateNode;if(f===null)return null;var u=Yf(f);if(u===null)return null;f=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(f&&typeof f!="function")throw Error(n(231,a,typeof f));return f}var Aa=!1;if(c)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Aa=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Aa=!1}function zr(t,a,f,u,m,p,k,C,x){var $=Array.prototype.slice.call(arguments,3);try{a.apply(f,$)}catch(X){this.onError(X)}}var $r=!1,xa=null,Ri=!1,ro=null,Yd={onError:function(t){$r=!0,xa=t}};function Na(t,a,f,u,m,p,k,C,x){$r=!1,xa=null,zr.apply(Yd,arguments)}function bf(t,a,f,u,m,p,k,C,x){if(Na.apply(this,arguments),$r){if($r){var $=xa;$r=!1,xa=null}else throw Error(n(198));Ri||(Ri=!0,ro=$)}}function Pi(t){var a=t,f=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,a.flags&4098&&(f=a.return),t=a.return;while(t)}return a.tag===3?f:null}function Ur(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Ai(t){if(Pi(t)!==t)throw Error(n(188))}function Ef(t){var a=t.alternate;if(!a){if(a=Pi(t),a===null)throw Error(n(188));return a!==t?null:t}for(var f=t,u=a;;){var m=f.return;if(m===null)break;var p=m.alternate;if(p===null){if(u=m.return,u!==null){f=u;continue}break}if(m.child===p.child){for(p=m.child;p;){if(p===f)return Ai(m),t;if(p===u)return Ai(m),a;p=p.sibling}throw Error(n(188))}if(f.return!==u.return)f=m,u=p;else{for(var k=!1,C=m.child;C;){if(C===f){k=!0,f=m,u=p;break}if(C===u){k=!0,u=m,f=p;break}C=C.sibling}if(!k){for(C=p.child;C;){if(C===f){k=!0,f=p,u=m;break}if(C===u){k=!0,u=p,f=m;break}C=C.sibling}if(!k)throw Error(n(189))}}if(f.alternate!==u)throw Error(n(190))}if(f.tag!==3)throw Error(n(188));return f.stateNode.current===f?t:a}function ao(t){return t=Ef(t),t!==null?Da(t):null}function Da(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var a=Da(t);if(a!==null)return a;t=t.sibling}return null}var Fa=e.unstable_scheduleCallback,so=e.unstable_cancelCallback,Sf=e.unstable_shouldYield,Xd=e.unstable_requestPaint,Ge=e.unstable_now,Tf=e.unstable_getCurrentPriorityLevel,qr=e.unstable_ImmediatePriority,Wt=e.unstable_UserBlockingPriority,mi=e.unstable_NormalPriority,oo=e.unstable_LowPriority,Cf=e.unstable_IdlePriority,Hr=null,si=null;function If(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Hr,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:Pf,fo=Math.log,Rf=Math.LN2;function Pf(t){return t>>>=0,t===0?32:31-(fo(t)/Rf|0)|0}var Ma=64,La=4194304;function Gt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wr(t,a){var f=t.pendingLanes;if(f===0)return 0;var u=0,m=t.suspendedLanes,p=t.pingedLanes,k=f&268435455;if(k!==0){var C=k&~m;C!==0?u=Gt(C):(p&=k,p!==0&&(u=Gt(p)))}else k=f&~m,k!==0?u=Gt(k):p!==0&&(u=Gt(p));if(u===0)return 0;if(a!==0&&a!==u&&!(a&m)&&(m=u&-u,p=a&-a,m>=p||m===16&&(p&4194240)!==0))return a;if(u&4&&(u|=f&16),a=t.entangledLanes,a!==0)for(t=t.entanglements,a&=u;0<a;)f=31-Gn(a),m=1<<f,u|=t[f],a&=~m;return u}function Zd(t,a){switch(t){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(t,a){for(var f=t.suspendedLanes,u=t.pingedLanes,m=t.expirationTimes,p=t.pendingLanes;0<p;){var k=31-Gn(p),C=1<<k,x=m[k];x===-1?(!(C&f)||C&u)&&(m[k]=Zd(C,a)):x<=a&&(t.expiredLanes|=C),p&=~C}}function oi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gr(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Kt(t){for(var a=[],f=0;31>f;f++)a.push(t);return a}function Qt(t,a,f){t.pendingLanes|=a,a!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,a=31-Gn(a),t[a]=f}function He(t,a){var f=t.pendingLanes&~a;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=a,t.mutableReadLanes&=a,t.entangledLanes&=a,a=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<f;){var m=31-Gn(f),p=1<<m;a[m]=0,u[m]=-1,t[m]=-1,f&=~p}}function Jt(t,a){var f=t.entangledLanes|=a;for(t=t.entanglements;f;){var u=31-Gn(f),m=1<<u;m&a|t[u]&a&&(t[u]|=a),f&=~m}}var Fe=0;function Yt(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Af,Oa,xf,Nf,Df,lo=!1,Ki=[],Pn=null,xi=null,Ni=null,Xt=new Map,vi=new Map,Qi=[],eu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(t,a){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Xt.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(a.pointerId)}}function Yn(t,a,f,u,m,p){return t===null||t.nativeEvent!==p?(t={blockedOn:a,domEventName:f,eventSystemFlags:u,nativeEvent:p,targetContainers:[m]},a!==null&&(a=To(a),a!==null&&Oa(a)),t):(t.eventSystemFlags|=u,a=t.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),t)}function nu(t,a,f,u,m){switch(a){case"focusin":return Pn=Yn(Pn,t,a,f,u,m),!0;case"dragenter":return xi=Yn(xi,t,a,f,u,m),!0;case"mouseover":return Ni=Yn(Ni,t,a,f,u,m),!0;case"pointerover":var p=m.pointerId;return Xt.set(p,Yn(Xt.get(p)||null,t,a,f,u,m)),!0;case"gotpointercapture":return p=m.pointerId,vi.set(p,Yn(vi.get(p)||null,t,a,f,u,m)),!0}return!1}function Mf(t){var a=Xr(t.target);if(a!==null){var f=Pi(a);if(f!==null){if(a=f.tag,a===13){if(a=Ur(f),a!==null){t.blockedOn=a,Df(t.priority,function(){xf(f)});return}}else if(a===3&&f.stateNode.current.memoizedState.isDehydrated){t.blockedOn=f.tag===3?f.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _t(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var f=Va(t.domEventName,t.eventSystemFlags,a[0],t.nativeEvent);if(f===null){f=t.nativeEvent;var u=new f.constructor(f.type,f);jr=u,f.target.dispatchEvent(u),jr=null}else return a=To(f),a!==null&&Oa(a),t.blockedOn=f,!1;a.shift()}return!0}function Kr(t,a,f){_t(t)&&f.delete(a)}function Lf(){lo=!1,Pn!==null&&_t(Pn)&&(Pn=null),xi!==null&&_t(xi)&&(xi=null),Ni!==null&&_t(Ni)&&(Ni=null),Xt.forEach(Kr),vi.forEach(Kr)}function Di(t,a){t.blockedOn===a&&(t.blockedOn=null,lo||(lo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lf)))}function Fi(t){function a(m){return Di(m,t)}if(0<Ki.length){Di(Ki[0],t);for(var f=1;f<Ki.length;f++){var u=Ki[f];u.blockedOn===t&&(u.blockedOn=null)}}for(Pn!==null&&Di(Pn,t),xi!==null&&Di(xi,t),Ni!==null&&Di(Ni,t),Xt.forEach(a),vi.forEach(a),f=0;f<Qi.length;f++)u=Qi[f],u.blockedOn===t&&(u.blockedOn=null);for(;0<Qi.length&&(f=Qi[0],f.blockedOn===null);)Mf(f),f.blockedOn===null&&Qi.shift()}var kt=ae.ReactCurrentBatchConfig,Zt=!0;function Xe(t,a,f,u){var m=Fe,p=kt.transition;kt.transition=null;try{Fe=1,uo(t,a,f,u)}finally{Fe=m,kt.transition=p}}function iu(t,a,f,u){var m=Fe,p=kt.transition;kt.transition=null;try{Fe=4,uo(t,a,f,u)}finally{Fe=m,kt.transition=p}}function uo(t,a,f,u){if(Zt){var m=Va(t,a,f,u);if(m===null)hu(t,a,u,Qr,f),Ff(t,u);else if(nu(m,t,a,f,u))u.stopPropagation();else if(Ff(t,u),a&4&&-1<eu.indexOf(t)){for(;m!==null;){var p=To(m);if(p!==null&&Af(p),p=Va(t,a,f,u),p===null&&hu(t,a,u,Qr,f),p===m)break;m=p}m!==null&&u.stopPropagation()}else hu(t,a,u,null,f)}}var Qr=null;function Va(t,a,f,u){if(Qr=null,t=Ia(u),t=Xr(t),t!==null)if(a=Pi(t),a===null)t=null;else if(f=a.tag,f===13){if(t=Ur(a),t!==null)return t;t=null}else if(f===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null);return Qr=t,null}function co(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case qr:return 1;case Wt:return 4;case mi:case oo:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var fi=null,ja=null,Xn=null;function ho(){if(Xn)return Xn;var t,a=ja,f=a.length,u,m="value"in fi?fi.value:fi.textContent,p=m.length;for(t=0;t<f&&a[t]===m[t];t++);var k=f-t;for(u=1;u<=k&&a[f-u]===m[p-u];u++);return Xn=m.slice(t,1<u?1-u:void 0)}function Ba(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function mo(){return!1}function An(t){function a(f,u,m,p,k){this._reactName=f,this._targetInst=m,this.type=u,this.nativeEvent=p,this.target=k,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(f=t[C],this[C]=f?f(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ji:mo,this.isPropagationStopped=mo,this}return oe(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),a}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=An(Mi),Yi=oe({},Mi,{view:0,detail:0}),tu=An(Yi),$a,wt,er,Jr=oe({},Yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xi,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==er&&(er&&t.type==="mousemove"?($a=t.screenX-er.screenX,wt=t.screenY-er.screenY):wt=$a=0,er=t),$a)},movementY:function(t){return"movementY"in t?t.movementY:wt}}),Ua=An(Jr),vo=oe({},Jr,{dataTransfer:0}),Of=An(vo),qa=oe({},Yi,{relatedTarget:0}),Ha=An(qa),Vf=oe({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),bt=An(Vf),jf=oe({},Mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bf=An(jf),zf=oe({},Mi,{data:0}),po=An(zf),Wa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=$f[t])?!!a[t]:!1}function Xi(){return Uf}var l=oe({},Yi,{key:function(t){if(t.key){var a=Wa[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kn[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xi,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v=An(l),y=oe({},Jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b=An(y),V=oe({},Yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xi}),H=An(V),te=oe({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=An(te),gn=oe({},Jr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=An(gn),Sn=[9,13,27,32],un=c&&"CompositionEvent"in window,pi=null;c&&"documentMode"in document&&(pi=document.documentMode);var li=c&&"TextEvent"in window&&!pi,Yr=c&&(!un||pi&&8<pi&&11>=pi),Ga=" ",S1=!1;function T1(t,a){switch(t){case"keyup":return Sn.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ka=!1;function x_(t,a){switch(t){case"compositionend":return C1(a);case"keypress":return a.which!==32?null:(S1=!0,Ga);case"textInput":return t=a.data,t===Ga&&S1?null:t;default:return null}}function N_(t,a){if(Ka)return t==="compositionend"||!un&&T1(t,a)?(t=ho(),Xn=ja=fi=null,Ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Yr&&a.locale!=="ko"?null:a.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!D_[t.type]:a==="textarea"}function R1(t,a,f,u){Gi(u),a=Kf(a,"onChange"),0<a.length&&(f=new za("onChange","change",null,f,u),t.push({event:f,listeners:a}))}var go=null,yo=null;function F_(t){W1(t,0)}function qf(t){var a=Za(t);if(ba(a))return t}function M_(t,a){if(t==="change")return a}var P1=!1;if(c){var ru;if(c){var au="oninput"in document;if(!au){var A1=document.createElement("div");A1.setAttribute("oninput","return;"),au=typeof A1.oninput=="function"}ru=au}else ru=!1;P1=ru&&(!document.documentMode||9<document.documentMode)}function x1(){go&&(go.detachEvent("onpropertychange",N1),yo=go=null)}function N1(t){if(t.propertyName==="value"&&qf(yo)){var a=[];R1(a,yo,t,Ia(t)),to(F_,a)}}function L_(t,a,f){t==="focusin"?(x1(),go=a,yo=f,go.attachEvent("onpropertychange",N1)):t==="focusout"&&x1()}function O_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qf(yo)}function V_(t,a){if(t==="click")return qf(a)}function j_(t,a){if(t==="input"||t==="change")return qf(a)}function B_(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Li=typeof Object.is=="function"?Object.is:B_;function _o(t,a){if(Li(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var f=Object.keys(t),u=Object.keys(a);if(f.length!==u.length)return!1;for(u=0;u<f.length;u++){var m=f[u];if(!h.call(a,m)||!Li(t[m],a[m]))return!1}return!0}function D1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function F1(t,a){var f=D1(t);t=0;for(var u;f;){if(f.nodeType===3){if(u=t+f.textContent.length,t<=a&&u>=a)return{node:f,offset:a-t};t=u}e:{for(;f;){if(f.nextSibling){f=f.nextSibling;break e}f=f.parentNode}f=void 0}f=D1(f)}}function M1(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?M1(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function L1(){for(var t=window,a=qt();a instanceof t.HTMLIFrameElement;){try{var f=typeof a.contentWindow.location.href=="string"}catch{f=!1}if(f)t=a.contentWindow;else break;a=qt(t.document)}return a}function su(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}function z_(t){var a=L1(),f=t.focusedElem,u=t.selectionRange;if(a!==f&&f&&f.ownerDocument&&M1(f.ownerDocument.documentElement,f)){if(u!==null&&su(f)){if(a=u.start,t=u.end,t===void 0&&(t=a),"selectionStart"in f)f.selectionStart=a,f.selectionEnd=Math.min(t,f.value.length);else if(t=(a=f.ownerDocument||document)&&a.defaultView||window,t.getSelection){t=t.getSelection();var m=f.textContent.length,p=Math.min(u.start,m);u=u.end===void 0?p:Math.min(u.end,m),!t.extend&&p>u&&(m=u,u=p,p=m),m=F1(f,p);var k=F1(f,u);m&&k&&(t.rangeCount!==1||t.anchorNode!==m.node||t.anchorOffset!==m.offset||t.focusNode!==k.node||t.focusOffset!==k.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),t.removeAllRanges(),p>u?(t.addRange(a),t.extend(k.node,k.offset)):(a.setEnd(k.node,k.offset),t.addRange(a)))}}for(a=[],t=f;t=t.parentNode;)t.nodeType===1&&a.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<a.length;f++)t=a[f],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $_=c&&"documentMode"in document&&11>=document.documentMode,Qa=null,ou=null,ko=null,fu=!1;function O1(t,a,f){var u=f.window===f?f.document:f.nodeType===9?f:f.ownerDocument;fu||Qa==null||Qa!==qt(u)||(u=Qa,"selectionStart"in u&&su(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ko&&_o(ko,u)||(ko=u,u=Kf(ou,"onSelect"),0<u.length&&(a=new za("onSelect","select",null,a,f),t.push({event:a,listeners:u}),a.target=Qa)))}function Hf(t,a){var f={};return f[t.toLowerCase()]=a.toLowerCase(),f["Webkit"+t]="webkit"+a,f["Moz"+t]="moz"+a,f}var Ja={animationend:Hf("Animation","AnimationEnd"),animationiteration:Hf("Animation","AnimationIteration"),animationstart:Hf("Animation","AnimationStart"),transitionend:Hf("Transition","TransitionEnd")},lu={},V1={};c&&(V1=document.createElement("div").style,"AnimationEvent"in window||(delete Ja.animationend.animation,delete Ja.animationiteration.animation,delete Ja.animationstart.animation),"TransitionEvent"in window||delete Ja.transitionend.transition);function Wf(t){if(lu[t])return lu[t];if(!Ja[t])return t;var a=Ja[t],f;for(f in a)if(a.hasOwnProperty(f)&&f in V1)return lu[t]=a[f];return t}var j1=Wf("animationend"),B1=Wf("animationiteration"),z1=Wf("animationstart"),$1=Wf("transitionend"),U1=new Map,q1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,a){U1.set(t,a),o(a,[t])}for(var du=0;du<q1.length;du++){var uu=q1[du],U_=uu.toLowerCase(),q_=uu[0].toUpperCase()+uu.slice(1);nr(U_,"on"+q_)}nr(j1,"onAnimationEnd"),nr(B1,"onAnimationIteration"),nr(z1,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr($1,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function H1(t,a,f){var u=t.type||"unknown-event";t.currentTarget=f,bf(u,a,void 0,t),t.currentTarget=null}function W1(t,a){a=(a&4)!==0;for(var f=0;f<t.length;f++){var u=t[f],m=u.event;u=u.listeners;e:{var p=void 0;if(a)for(var k=u.length-1;0<=k;k--){var C=u[k],x=C.instance,$=C.currentTarget;if(C=C.listener,x!==p&&m.isPropagationStopped())break e;H1(m,C,$),p=x}else for(k=0;k<u.length;k++){if(C=u[k],x=C.instance,$=C.currentTarget,C=C.listener,x!==p&&m.isPropagationStopped())break e;H1(m,C,$),p=x}}}if(Ri)throw t=ro,Ri=!1,ro=null,t}function Je(t,a){var f=a[_u];f===void 0&&(f=a[_u]=new Set);var u=t+"__bubble";f.has(u)||(G1(a,t,2,!1),f.add(u))}function cu(t,a,f){var u=0;a&&(u|=4),G1(f,t,u,a)}var Gf="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Gf]){t[Gf]=!0,r.forEach(function(f){f!=="selectionchange"&&(H_.has(f)||cu(f,!1,t),cu(f,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Gf]||(a[Gf]=!0,cu("selectionchange",!1,a))}}function G1(t,a,f,u){switch(co(a)){case 1:var m=Xe;break;case 4:m=iu;break;default:m=uo}f=m.bind(null,a,f,t),m=void 0,!Aa||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),u?m!==void 0?t.addEventListener(a,f,{capture:!0,passive:m}):t.addEventListener(a,f,!0):m!==void 0?t.addEventListener(a,f,{passive:m}):t.addEventListener(a,f,!1)}function hu(t,a,f,u,m){var p=u;if(!(a&1)&&!(a&2)&&u!==null)e:for(;;){if(u===null)return;var k=u.tag;if(k===3||k===4){var C=u.stateNode.containerInfo;if(C===m||C.nodeType===8&&C.parentNode===m)break;if(k===4)for(k=u.return;k!==null;){var x=k.tag;if((x===3||x===4)&&(x=k.stateNode.containerInfo,x===m||x.nodeType===8&&x.parentNode===m))return;k=k.return}for(;C!==null;){if(k=Xr(C),k===null)return;if(x=k.tag,x===5||x===6){u=p=k;continue e}C=C.parentNode}}u=u.return}to(function(){var $=p,X=Ia(f),Z=[];e:{var Y=U1.get(t);if(Y!==void 0){var se=za,de=t;switch(t){case"keypress":if(Ba(f)===0)break e;case"keydown":case"keyup":se=v;break;case"focusin":de="focus",se=Ha;break;case"focusout":de="blur",se=Ha;break;case"beforeblur":case"afterblur":se=Ha;break;case"click":if(f.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=H;break;case j1:case B1:case z1:se=bt;break;case $1:se=qe;break;case"scroll":se=tu;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=b}var ue=(a&4)!==0,ln=!ue&&t==="scroll",j=ue?Y!==null?Y+"Capture":null:Y;ue=[];for(var F=$,z;F!==null;){z=F;var ne=z.stateNode;if(z.tag===5&&ne!==null&&(z=ne,j!==null&&(ne=fn(F,j),ne!=null&&ue.push(Eo(F,ne,z)))),ln)break;F=F.return}0<ue.length&&(Y=new se(Y,de,null,f,X),Z.push({event:Y,listeners:ue}))}}if(!(a&7)){e:{if(Y=t==="mouseover"||t==="pointerover",se=t==="mouseout"||t==="pointerout",Y&&f!==jr&&(de=f.relatedTarget||f.fromElement)&&(Xr(de)||de[Et]))break e;if((se||Y)&&(Y=X.window===X?X:(Y=X.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(de=f.relatedTarget||f.toElement,se=$,de=de?Xr(de):null,de!==null&&(ln=Pi(de),de!==ln||de.tag!==5&&de.tag!==6)&&(de=null)):(se=null,de=$),se!==de)){if(ue=Ua,ne="onMouseLeave",j="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(ue=b,ne="onPointerLeave",j="onPointerEnter",F="pointer"),ln=se==null?Y:Za(se),z=de==null?Y:Za(de),Y=new ue(ne,F+"leave",se,f,X),Y.target=ln,Y.relatedTarget=z,ne=null,Xr(X)===$&&(ue=new ue(j,F+"enter",de,f,X),ue.target=z,ue.relatedTarget=ln,ne=ue),ln=ne,se&&de)n:{for(ue=se,j=de,F=0,z=ue;z;z=Ya(z))F++;for(z=0,ne=j;ne;ne=Ya(ne))z++;for(;0<F-z;)ue=Ya(ue),F--;for(;0<z-F;)j=Ya(j),z--;for(;F--;){if(ue===j||j!==null&&ue===j.alternate)break n;ue=Ya(ue),j=Ya(j)}ue=null}else ue=null;se!==null&&K1(Z,Y,se,ue,!1),de!==null&&ln!==null&&K1(Z,ln,de,ue,!0)}}e:{if(Y=$?Za($):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var ce=M_;else if(I1(Y))if(P1)ce=j_;else{ce=O_;var ve=L_}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(ce=V_);if(ce&&(ce=ce(t,$))){R1(Z,ce,f,X);break e}ve&&ve(t,Y,$),t==="focusout"&&(ve=Y._wrapperState)&&ve.controlled&&Y.type==="number"&&Sa(Y,"number",Y.value)}switch(ve=$?Za($):window,t){case"focusin":(I1(ve)||ve.contentEditable==="true")&&(Qa=ve,ou=$,ko=null);break;case"focusout":ko=ou=Qa=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,O1(Z,f,X);break;case"selectionchange":if($_)break;case"keydown":case"keyup":O1(Z,f,X)}var pe;if(un)e:{switch(t){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ka?T1(t,f)&&(ke="onCompositionEnd"):t==="keydown"&&f.keyCode===229&&(ke="onCompositionStart");ke&&(Yr&&f.locale!=="ko"&&(Ka||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ka&&(pe=ho()):(fi=X,ja="value"in fi?fi.value:fi.textContent,Ka=!0)),ve=Kf($,ke),0<ve.length&&(ke=new po(ke,t,null,f,X),Z.push({event:ke,listeners:ve}),pe?ke.data=pe:(pe=C1(f),pe!==null&&(ke.data=pe)))),(pe=li?x_(t,f):N_(t,f))&&($=Kf($,"onBeforeInput"),0<$.length&&(X=new po("onBeforeInput","beforeinput",null,f,X),Z.push({event:X,listeners:$}),X.data=pe))}W1(Z,a)})}function Eo(t,a,f){return{instance:t,listener:a,currentTarget:f}}function Kf(t,a){for(var f=a+"Capture",u=[];t!==null;){var m=t,p=m.stateNode;m.tag===5&&p!==null&&(m=p,p=fn(t,f),p!=null&&u.unshift(Eo(t,p,m)),p=fn(t,a),p!=null&&u.push(Eo(t,p,m))),t=t.return}return u}function Ya(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function K1(t,a,f,u,m){for(var p=a._reactName,k=[];f!==null&&f!==u;){var C=f,x=C.alternate,$=C.stateNode;if(x!==null&&x===u)break;C.tag===5&&$!==null&&(C=$,m?(x=fn(f,p),x!=null&&k.unshift(Eo(f,x,C))):m||(x=fn(f,p),x!=null&&k.push(Eo(f,x,C)))),f=f.return}k.length!==0&&t.push({event:a,listeners:k})}var W_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function Q1(t){return(typeof t=="string"?t:""+t).replace(W_,`
`).replace(G_,"")}function Qf(t,a,f){if(a=Q1(a),Q1(t)!==a&&f)throw Error(n(425))}function Jf(){}var mu=null,vu=null;function pu(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,K_=typeof clearTimeout=="function"?clearTimeout:void 0,J1=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof J1<"u"?function(t){return J1.resolve(null).then(t).catch(J_)}:gu;function J_(t){setTimeout(function(){throw t})}function yu(t,a){var f=a,u=0;do{var m=f.nextSibling;if(t.removeChild(f),m&&m.nodeType===8)if(f=m.data,f==="/$"){if(u===0){t.removeChild(m),Fi(a);return}u--}else f!=="$"&&f!=="$?"&&f!=="$!"||u++;f=m}while(f);Fi(a)}function ir(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return t}function Y1(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var f=t.data;if(f==="$"||f==="$!"||f==="$?"){if(a===0)return t;a--}else f==="/$"&&a++}t=t.previousSibling}return null}var Xa=Math.random().toString(36).slice(2),Zi="__reactFiber$"+Xa,So="__reactProps$"+Xa,Et="__reactContainer$"+Xa,_u="__reactEvents$"+Xa,Y_="__reactListeners$"+Xa,X_="__reactHandles$"+Xa;function Xr(t){var a=t[Zi];if(a)return a;for(var f=t.parentNode;f;){if(a=f[Et]||f[Zi]){if(f=a.alternate,a.child!==null||f!==null&&f.child!==null)for(t=Y1(t);t!==null;){if(f=t[Zi])return f;t=Y1(t)}return a}t=f,f=t.parentNode}return null}function To(t){return t=t[Zi]||t[Et],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Za(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Yf(t){return t[So]||null}var ku=[],es=-1;function tr(t){return{current:t}}function Ye(t){0>es||(t.current=ku[es],ku[es]=null,es--)}function Ke(t,a){es++,ku[es]=t.current,t.current=a}var rr={},Vn=tr(rr),Zn=tr(!1),Zr=rr;function ns(t,a){var f=t.type.contextTypes;if(!f)return rr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===a)return u.__reactInternalMemoizedMaskedChildContext;var m={},p;for(p in f)m[p]=a[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=a,t.__reactInternalMemoizedMaskedChildContext=m),m}function ei(t){return t=t.childContextTypes,t!=null}function Xf(){Ye(Zn),Ye(Vn)}function X1(t,a,f){if(Vn.current!==rr)throw Error(n(168));Ke(Vn,a),Ke(Zn,f)}function Z1(t,a,f){var u=t.stateNode;if(a=a.childContextTypes,typeof u.getChildContext!="function")return f;u=u.getChildContext();for(var m in u)if(!(m in a))throw Error(n(108,ze(t)||"Unknown",m));return oe({},f,u)}function Zf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Zr=Vn.current,Ke(Vn,t),Ke(Zn,Zn.current),!0}function em(t,a,f){var u=t.stateNode;if(!u)throw Error(n(169));f?(t=Z1(t,a,Zr),u.__reactInternalMemoizedMergedChildContext=t,Ye(Zn),Ye(Vn),Ke(Vn,t)):Ye(Zn),Ke(Zn,f)}var St=null,el=!1,wu=!1;function nm(t){St===null?St=[t]:St.push(t)}function Z_(t){el=!0,nm(t)}function ar(){if(!wu&&St!==null){wu=!0;var t=0,a=Fe;try{var f=St;for(Fe=1;t<f.length;t++){var u=f[t];do u=u(!0);while(u!==null)}St=null,el=!1}catch(m){throw St!==null&&(St=St.slice(t+1)),Fa(qr,ar),m}finally{Fe=a,wu=!1}}return null}var is=[],ts=0,nl=null,il=0,gi=[],yi=0,ea=null,Tt=1,Ct="";function na(t,a){is[ts++]=il,is[ts++]=nl,nl=t,il=a}function im(t,a,f){gi[yi++]=Tt,gi[yi++]=Ct,gi[yi++]=ea,ea=t;var u=Tt;t=Ct;var m=32-Gn(u)-1;u&=~(1<<m),f+=1;var p=32-Gn(a)+m;if(30<p){var k=m-m%5;p=(u&(1<<k)-1).toString(32),u>>=k,m-=k,Tt=1<<32-Gn(a)+m|f<<m|u,Ct=p+t}else Tt=1<<p|f<<m|u,Ct=t}function bu(t){t.return!==null&&(na(t,1),im(t,1,0))}function Eu(t){for(;t===nl;)nl=is[--ts],is[ts]=null,il=is[--ts],is[ts]=null;for(;t===ea;)ea=gi[--yi],gi[yi]=null,Ct=gi[--yi],gi[yi]=null,Tt=gi[--yi],gi[yi]=null}var di=null,ui=null,Ze=!1,Oi=null;function tm(t,a){var f=bi(5,null,null,0);f.elementType="DELETED",f.stateNode=a,f.return=t,a=t.deletions,a===null?(t.deletions=[f],t.flags|=16):a.push(f)}function rm(t,a){switch(t.tag){case 5:var f=t.type;return a=a.nodeType!==1||f.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(t.stateNode=a,di=t,ui=ir(a.firstChild),!0):!1;case 6:return a=t.pendingProps===""||a.nodeType!==3?null:a,a!==null?(t.stateNode=a,di=t,ui=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(f=ea!==null?{id:Tt,overflow:Ct}:null,t.memoizedState={dehydrated:a,treeContext:f,retryLane:1073741824},f=bi(18,null,null,0),f.stateNode=a,f.return=t,t.child=f,di=t,ui=null,!0):!1;default:return!1}}function Su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tu(t){if(Ze){var a=ui;if(a){var f=a;if(!rm(t,a)){if(Su(t))throw Error(n(418));a=ir(f.nextSibling);var u=di;a&&rm(t,a)?tm(u,f):(t.flags=t.flags&-4097|2,Ze=!1,di=t)}}else{if(Su(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ze=!1,di=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;di=t}function tl(t){if(t!==di)return!1;if(!Ze)return am(t),Ze=!0,!1;var a;if((a=t.tag!==3)&&!(a=t.tag!==5)&&(a=t.type,a=a!=="head"&&a!=="body"&&!pu(t.type,t.memoizedProps)),a&&(a=ui)){if(Su(t))throw sm(),Error(n(418));for(;a;)tm(t,a),a=ir(a.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,a=0;t;){if(t.nodeType===8){var f=t.data;if(f==="/$"){if(a===0){ui=ir(t.nextSibling);break e}a--}else f!=="$"&&f!=="$!"&&f!=="$?"||a++}t=t.nextSibling}ui=null}}else ui=di?ir(t.stateNode.nextSibling):null;return!0}function sm(){for(var t=ui;t;)t=ir(t.nextSibling)}function rs(){ui=di=null,Ze=!1}function Cu(t){Oi===null?Oi=[t]:Oi.push(t)}var ek=ae.ReactCurrentBatchConfig;function Co(t,a,f){if(t=f.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(f._owner){if(f=f._owner,f){if(f.tag!==1)throw Error(n(309));var u=f.stateNode}if(!u)throw Error(n(147,t));var m=u,p=""+t;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===p?a.ref:(a=function(k){var C=m.refs;k===null?delete C[p]:C[p]=k},a._stringRef=p,a)}if(typeof t!="string")throw Error(n(284));if(!f._owner)throw Error(n(290,t))}return t}function rl(t,a){throw t=Object.prototype.toString.call(a),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t))}function om(t){var a=t._init;return a(t._payload)}function fm(t){function a(j,F){if(t){var z=j.deletions;z===null?(j.deletions=[F],j.flags|=16):z.push(F)}}function f(j,F){if(!t)return null;for(;F!==null;)a(j,F),F=F.sibling;return null}function u(j,F){for(j=new Map;F!==null;)F.key!==null?j.set(F.key,F):j.set(F.index,F),F=F.sibling;return j}function m(j,F){return j=hr(j,F),j.index=0,j.sibling=null,j}function p(j,F,z){return j.index=z,t?(z=j.alternate,z!==null?(z=z.index,z<F?(j.flags|=2,F):z):(j.flags|=2,F)):(j.flags|=1048576,F)}function k(j){return t&&j.alternate===null&&(j.flags|=2),j}function C(j,F,z,ne){return F===null||F.tag!==6?(F=gc(z,j.mode,ne),F.return=j,F):(F=m(F,z),F.return=j,F)}function x(j,F,z,ne){var ce=z.type;return ce===D?X(j,F,z.props.children,ne,z.key):F!==null&&(F.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===mn&&om(ce)===F.type)?(ne=m(F,z.props),ne.ref=Co(j,F,z),ne.return=j,ne):(ne=Rl(z.type,z.key,z.props,null,j.mode,ne),ne.ref=Co(j,F,z),ne.return=j,ne)}function $(j,F,z,ne){return F===null||F.tag!==4||F.stateNode.containerInfo!==z.containerInfo||F.stateNode.implementation!==z.implementation?(F=yc(z,j.mode,ne),F.return=j,F):(F=m(F,z.children||[]),F.return=j,F)}function X(j,F,z,ne,ce){return F===null||F.tag!==7?(F=la(z,j.mode,ne,ce),F.return=j,F):(F=m(F,z),F.return=j,F)}function Z(j,F,z){if(typeof F=="string"&&F!==""||typeof F=="number")return F=gc(""+F,j.mode,z),F.return=j,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case we:return z=Rl(F.type,F.key,F.props,null,j.mode,z),z.ref=Co(j,null,F),z.return=j,z;case be:return F=yc(F,j.mode,z),F.return=j,F;case mn:var ne=F._init;return Z(j,ne(F._payload),z)}if(mt(F)||he(F))return F=la(F,j.mode,z,null),F.return=j,F;rl(j,F)}return null}function Y(j,F,z,ne){var ce=F!==null?F.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return ce!==null?null:C(j,F,""+z,ne);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case we:return z.key===ce?x(j,F,z,ne):null;case be:return z.key===ce?$(j,F,z,ne):null;case mn:return ce=z._init,Y(j,F,ce(z._payload),ne)}if(mt(z)||he(z))return ce!==null?null:X(j,F,z,ne,null);rl(j,z)}return null}function se(j,F,z,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return j=j.get(z)||null,C(F,j,""+ne,ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case we:return j=j.get(ne.key===null?z:ne.key)||null,x(F,j,ne,ce);case be:return j=j.get(ne.key===null?z:ne.key)||null,$(F,j,ne,ce);case mn:var ve=ne._init;return se(j,F,z,ve(ne._payload),ce)}if(mt(ne)||he(ne))return j=j.get(z)||null,X(F,j,ne,ce,null);rl(F,ne)}return null}function de(j,F,z,ne){for(var ce=null,ve=null,pe=F,ke=F=0,In=null;pe!==null&&ke<z.length;ke++){pe.index>ke?(In=pe,pe=null):In=pe.sibling;var Be=Y(j,pe,z[ke],ne);if(Be===null){pe===null&&(pe=In);break}t&&pe&&Be.alternate===null&&a(j,pe),F=p(Be,F,ke),ve===null?ce=Be:ve.sibling=Be,ve=Be,pe=In}if(ke===z.length)return f(j,pe),Ze&&na(j,ke),ce;if(pe===null){for(;ke<z.length;ke++)pe=Z(j,z[ke],ne),pe!==null&&(F=p(pe,F,ke),ve===null?ce=pe:ve.sibling=pe,ve=pe);return Ze&&na(j,ke),ce}for(pe=u(j,pe);ke<z.length;ke++)In=se(pe,j,ke,z[ke],ne),In!==null&&(t&&In.alternate!==null&&pe.delete(In.key===null?ke:In.key),F=p(In,F,ke),ve===null?ce=In:ve.sibling=In,ve=In);return t&&pe.forEach(function(mr){return a(j,mr)}),Ze&&na(j,ke),ce}function ue(j,F,z,ne){var ce=he(z);if(typeof ce!="function")throw Error(n(150));if(z=ce.call(z),z==null)throw Error(n(151));for(var ve=ce=null,pe=F,ke=F=0,In=null,Be=z.next();pe!==null&&!Be.done;ke++,Be=z.next()){pe.index>ke?(In=pe,pe=null):In=pe.sibling;var mr=Y(j,pe,Be.value,ne);if(mr===null){pe===null&&(pe=In);break}t&&pe&&mr.alternate===null&&a(j,pe),F=p(mr,F,ke),ve===null?ce=mr:ve.sibling=mr,ve=mr,pe=In}if(Be.done)return f(j,pe),Ze&&na(j,ke),ce;if(pe===null){for(;!Be.done;ke++,Be=z.next())Be=Z(j,Be.value,ne),Be!==null&&(F=p(Be,F,ke),ve===null?ce=Be:ve.sibling=Be,ve=Be);return Ze&&na(j,ke),ce}for(pe=u(j,pe);!Be.done;ke++,Be=z.next())Be=se(pe,j,ke,Be.value,ne),Be!==null&&(t&&Be.alternate!==null&&pe.delete(Be.key===null?ke:Be.key),F=p(Be,F,ke),ve===null?ce=Be:ve.sibling=Be,ve=Be);return t&&pe.forEach(function(Nk){return a(j,Nk)}),Ze&&na(j,ke),ce}function ln(j,F,z,ne){if(typeof z=="object"&&z!==null&&z.type===D&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case we:e:{for(var ce=z.key,ve=F;ve!==null;){if(ve.key===ce){if(ce=z.type,ce===D){if(ve.tag===7){f(j,ve.sibling),F=m(ve,z.props.children),F.return=j,j=F;break e}}else if(ve.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===mn&&om(ce)===ve.type){f(j,ve.sibling),F=m(ve,z.props),F.ref=Co(j,ve,z),F.return=j,j=F;break e}f(j,ve);break}else a(j,ve);ve=ve.sibling}z.type===D?(F=la(z.props.children,j.mode,ne,z.key),F.return=j,j=F):(ne=Rl(z.type,z.key,z.props,null,j.mode,ne),ne.ref=Co(j,F,z),ne.return=j,j=ne)}return k(j);case be:e:{for(ve=z.key;F!==null;){if(F.key===ve)if(F.tag===4&&F.stateNode.containerInfo===z.containerInfo&&F.stateNode.implementation===z.implementation){f(j,F.sibling),F=m(F,z.children||[]),F.return=j,j=F;break e}else{f(j,F);break}else a(j,F);F=F.sibling}F=yc(z,j.mode,ne),F.return=j,j=F}return k(j);case mn:return ve=z._init,ln(j,F,ve(z._payload),ne)}if(mt(z))return de(j,F,z,ne);if(he(z))return ue(j,F,z,ne);rl(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,F!==null&&F.tag===6?(f(j,F.sibling),F=m(F,z),F.return=j,j=F):(f(j,F),F=gc(z,j.mode,ne),F.return=j,j=F),k(j)):f(j,F)}return ln}var as=fm(!0),lm=fm(!1),al=tr(null),sl=null,ss=null,Iu=null;function Ru(){Iu=ss=sl=null}function Pu(t){var a=al.current;Ye(al),t._currentValue=a}function Au(t,a,f){for(;t!==null;){var u=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),t===f)break;t=t.return}}function os(t,a){sl=t,Iu=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&a&&(ni=!0),t.firstContext=null)}function _i(t){var a=t._currentValue;if(Iu!==t)if(t={context:t,memoizedValue:a,next:null},ss===null){if(sl===null)throw Error(n(308));ss=t,sl.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return a}var ia=null;function xu(t){ia===null?ia=[t]:ia.push(t)}function dm(t,a,f,u){var m=a.interleaved;return m===null?(f.next=f,xu(a)):(f.next=m.next,m.next=f),a.interleaved=f,It(t,u)}function It(t,a){t.lanes|=a;var f=t.alternate;for(f!==null&&(f.lanes|=a),f=t,t=t.return;t!==null;)t.childLanes|=a,f=t.alternate,f!==null&&(f.childLanes|=a),f=t,t=t.return;return f.tag===3?f.stateNode:null}var sr=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function um(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,a){return{eventTime:t,lane:a,tag:0,payload:null,callback:null,next:null}}function or(t,a,f){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,je&2){var m=u.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a,It(t,f)}return m=u.interleaved,m===null?(a.next=a,xu(u)):(a.next=m.next,m.next=a),u.interleaved=a,It(t,f)}function ol(t,a,f){if(a=a.updateQueue,a!==null&&(a=a.shared,(f&4194240)!==0)){var u=a.lanes;u&=t.pendingLanes,f|=u,a.lanes=f,Jt(t,f)}}function cm(t,a){var f=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,f===u)){var m=null,p=null;if(f=f.firstBaseUpdate,f!==null){do{var k={eventTime:f.eventTime,lane:f.lane,tag:f.tag,payload:f.payload,callback:f.callback,next:null};p===null?m=p=k:p=p.next=k,f=f.next}while(f!==null);p===null?m=p=a:p=p.next=a}else m=p=a;f={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=f;return}t=f.lastBaseUpdate,t===null?f.firstBaseUpdate=a:t.next=a,f.lastBaseUpdate=a}function fl(t,a,f,u){var m=t.updateQueue;sr=!1;var p=m.firstBaseUpdate,k=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var x=C,$=x.next;x.next=null,k===null?p=$:k.next=$,k=x;var X=t.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==k&&(C===null?X.firstBaseUpdate=$:C.next=$,X.lastBaseUpdate=x))}if(p!==null){var Z=m.baseState;k=0,X=$=x=null,C=p;do{var Y=C.lane,se=C.eventTime;if((u&Y)===Y){X!==null&&(X=X.next={eventTime:se,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var de=t,ue=C;switch(Y=a,se=f,ue.tag){case 1:if(de=ue.payload,typeof de=="function"){Z=de.call(se,Z,Y);break e}Z=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=ue.payload,Y=typeof de=="function"?de.call(se,Z,Y):de,Y==null)break e;Z=oe({},Z,Y);break e;case 2:sr=!0}}C.callback!==null&&C.lane!==0&&(t.flags|=64,Y=m.effects,Y===null?m.effects=[C]:Y.push(C))}else se={eventTime:se,lane:Y,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?($=X=se,x=Z):X=X.next=se,k|=Y;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;Y=C,C=Y.next,Y.next=null,m.lastBaseUpdate=Y,m.shared.pending=null}}while(!0);if(X===null&&(x=Z),m.baseState=x,m.firstBaseUpdate=$,m.lastBaseUpdate=X,a=m.shared.interleaved,a!==null){m=a;do k|=m.lane,m=m.next;while(m!==a)}else p===null&&(m.shared.lanes=0);aa|=k,t.lanes=k,t.memoizedState=Z}}function hm(t,a,f){if(t=a.effects,a.effects=null,t!==null)for(a=0;a<t.length;a++){var u=t[a],m=u.callback;if(m!==null){if(u.callback=null,u=f,typeof m!="function")throw Error(n(191,m));m.call(u)}}}var Io={},et=tr(Io),Ro=tr(Io),Po=tr(Io);function ta(t){if(t===Io)throw Error(n(174));return t}function Du(t,a){switch(Ke(Po,a),Ke(Ro,t),Ke(et,Io),t=a.nodeType,t){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:pn(null,"");break;default:t=t===8?a.parentNode:a,a=t.namespaceURI||null,t=t.tagName,a=pn(a,t)}Ye(et),Ke(et,a)}function fs(){Ye(et),Ye(Ro),Ye(Po)}function mm(t){ta(Po.current);var a=ta(et.current),f=pn(a,t.type);a!==f&&(Ke(Ro,t),Ke(et,f))}function Fu(t){Ro.current===t&&(Ye(et),Ye(Ro))}var nn=tr(0);function ll(t){for(var a=t;a!==null;){if(a.tag===13){var f=a.memoizedState;if(f!==null&&(f=f.dehydrated,f===null||f.data==="$?"||f.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Mu=[];function Lu(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var dl=ae.ReactCurrentDispatcher,Ou=ae.ReactCurrentBatchConfig,ra=0,tn=null,yn=null,Tn=null,ul=!1,Ao=!1,xo=0,nk=0;function jn(){throw Error(n(321))}function Vu(t,a){if(a===null)return!1;for(var f=0;f<a.length&&f<t.length;f++)if(!Li(t[f],a[f]))return!1;return!0}function ju(t,a,f,u,m,p){if(ra=p,tn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,dl.current=t===null||t.memoizedState===null?ak:sk,t=f(u,m),Ao){p=0;do{if(Ao=!1,xo=0,25<=p)throw Error(n(301));p+=1,Tn=yn=null,a.updateQueue=null,dl.current=ok,t=f(u,m)}while(Ao)}if(dl.current=ml,a=yn!==null&&yn.next!==null,ra=0,Tn=yn=tn=null,ul=!1,a)throw Error(n(300));return t}function Bu(){var t=xo!==0;return xo=0,t}function nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?tn.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function ki(){if(yn===null){var t=tn.alternate;t=t!==null?t.memoizedState:null}else t=yn.next;var a=Tn===null?tn.memoizedState:Tn.next;if(a!==null)Tn=a,yn=t;else{if(t===null)throw Error(n(310));yn=t,t={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},Tn===null?tn.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function No(t,a){return typeof a=="function"?a(t):a}function zu(t){var a=ki(),f=a.queue;if(f===null)throw Error(n(311));f.lastRenderedReducer=t;var u=yn,m=u.baseQueue,p=f.pending;if(p!==null){if(m!==null){var k=m.next;m.next=p.next,p.next=k}u.baseQueue=m=p,f.pending=null}if(m!==null){p=m.next,u=u.baseState;var C=k=null,x=null,$=p;do{var X=$.lane;if((ra&X)===X)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),u=$.hasEagerState?$.eagerState:t(u,$.action);else{var Z={lane:X,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(C=x=Z,k=u):x=x.next=Z,tn.lanes|=X,aa|=X}$=$.next}while($!==null&&$!==p);x===null?k=u:x.next=C,Li(u,a.memoizedState)||(ni=!0),a.memoizedState=u,a.baseState=k,a.baseQueue=x,f.lastRenderedState=u}if(t=f.interleaved,t!==null){m=t;do p=m.lane,tn.lanes|=p,aa|=p,m=m.next;while(m!==t)}else m===null&&(f.lanes=0);return[a.memoizedState,f.dispatch]}function $u(t){var a=ki(),f=a.queue;if(f===null)throw Error(n(311));f.lastRenderedReducer=t;var u=f.dispatch,m=f.pending,p=a.memoizedState;if(m!==null){f.pending=null;var k=m=m.next;do p=t(p,k.action),k=k.next;while(k!==m);Li(p,a.memoizedState)||(ni=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),f.lastRenderedState=p}return[p,u]}function vm(){}function pm(t,a){var f=tn,u=ki(),m=a(),p=!Li(u.memoizedState,m);if(p&&(u.memoizedState=m,ni=!0),u=u.queue,Uu(_m.bind(null,f,u,t),[t]),u.getSnapshot!==a||p||Tn!==null&&Tn.memoizedState.tag&1){if(f.flags|=2048,Do(9,ym.bind(null,f,u,m,a),void 0,null),Cn===null)throw Error(n(349));ra&30||gm(f,a,m)}return m}function gm(t,a,f){t.flags|=16384,t={getSnapshot:a,value:f},a=tn.updateQueue,a===null?(a={lastEffect:null,stores:null},tn.updateQueue=a,a.stores=[t]):(f=a.stores,f===null?a.stores=[t]:f.push(t))}function ym(t,a,f,u){a.value=f,a.getSnapshot=u,km(a)&&wm(t)}function _m(t,a,f){return f(function(){km(a)&&wm(t)})}function km(t){var a=t.getSnapshot;t=t.value;try{var f=a();return!Li(t,f)}catch{return!0}}function wm(t){var a=It(t,1);a!==null&&zi(a,t,1,-1)}function bm(t){var a=nt();return typeof t=="function"&&(t=t()),a.memoizedState=a.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},a.queue=t,t=t.dispatch=rk.bind(null,tn,t),[a.memoizedState,t]}function Do(t,a,f,u){return t={tag:t,create:a,destroy:f,deps:u,next:null},a=tn.updateQueue,a===null?(a={lastEffect:null,stores:null},tn.updateQueue=a,a.lastEffect=t.next=t):(f=a.lastEffect,f===null?a.lastEffect=t.next=t:(u=f.next,f.next=t,t.next=u,a.lastEffect=t)),t}function Em(){return ki().memoizedState}function cl(t,a,f,u){var m=nt();tn.flags|=t,m.memoizedState=Do(1|a,f,void 0,u===void 0?null:u)}function hl(t,a,f,u){var m=ki();u=u===void 0?null:u;var p=void 0;if(yn!==null){var k=yn.memoizedState;if(p=k.destroy,u!==null&&Vu(u,k.deps)){m.memoizedState=Do(a,f,p,u);return}}tn.flags|=t,m.memoizedState=Do(1|a,f,p,u)}function Sm(t,a){return cl(8390656,8,t,a)}function Uu(t,a){return hl(2048,8,t,a)}function Tm(t,a){return hl(4,2,t,a)}function Cm(t,a){return hl(4,4,t,a)}function Im(t,a){if(typeof a=="function")return t=t(),a(t),function(){a(null)};if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Rm(t,a,f){return f=f!=null?f.concat([t]):null,hl(4,4,Im.bind(null,a,t),f)}function qu(){}function Pm(t,a){var f=ki();a=a===void 0?null:a;var u=f.memoizedState;return u!==null&&a!==null&&Vu(a,u[1])?u[0]:(f.memoizedState=[t,a],t)}function Am(t,a){var f=ki();a=a===void 0?null:a;var u=f.memoizedState;return u!==null&&a!==null&&Vu(a,u[1])?u[0]:(t=t(),f.memoizedState=[t,a],t)}function xm(t,a,f){return ra&21?(Li(f,a)||(f=Gr(),tn.lanes|=f,aa|=f,t.baseState=!0),a):(t.baseState&&(t.baseState=!1,ni=!0),t.memoizedState=f)}function ik(t,a){var f=Fe;Fe=f!==0&&4>f?f:4,t(!0);var u=Ou.transition;Ou.transition={};try{t(!1),a()}finally{Fe=f,Ou.transition=u}}function Nm(){return ki().memoizedState}function tk(t,a,f){var u=ur(t);if(f={lane:u,action:f,hasEagerState:!1,eagerState:null,next:null},Dm(t))Fm(a,f);else if(f=dm(t,a,f,u),f!==null){var m=Jn();zi(f,t,u,m),Mm(f,a,u)}}function rk(t,a,f){var u=ur(t),m={lane:u,action:f,hasEagerState:!1,eagerState:null,next:null};if(Dm(t))Fm(a,m);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var k=a.lastRenderedState,C=p(k,f);if(m.hasEagerState=!0,m.eagerState=C,Li(C,k)){var x=a.interleaved;x===null?(m.next=m,xu(a)):(m.next=x.next,x.next=m),a.interleaved=m;return}}catch{}finally{}f=dm(t,a,m,u),f!==null&&(m=Jn(),zi(f,t,u,m),Mm(f,a,u))}}function Dm(t){var a=t.alternate;return t===tn||a!==null&&a===tn}function Fm(t,a){Ao=ul=!0;var f=t.pending;f===null?a.next=a:(a.next=f.next,f.next=a),t.pending=a}function Mm(t,a,f){if(f&4194240){var u=a.lanes;u&=t.pendingLanes,f|=u,a.lanes=f,Jt(t,f)}}var ml={readContext:_i,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},ak={readContext:_i,useCallback:function(t,a){return nt().memoizedState=[t,a===void 0?null:a],t},useContext:_i,useEffect:Sm,useImperativeHandle:function(t,a,f){return f=f!=null?f.concat([t]):null,cl(4194308,4,Im.bind(null,a,t),f)},useLayoutEffect:function(t,a){return cl(4194308,4,t,a)},useInsertionEffect:function(t,a){return cl(4,2,t,a)},useMemo:function(t,a){var f=nt();return a=a===void 0?null:a,t=t(),f.memoizedState=[t,a],t},useReducer:function(t,a,f){var u=nt();return a=f!==void 0?f(a):a,u.memoizedState=u.baseState=a,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},u.queue=t,t=t.dispatch=tk.bind(null,tn,t),[u.memoizedState,t]},useRef:function(t){var a=nt();return t={current:t},a.memoizedState=t},useState:bm,useDebugValue:qu,useDeferredValue:function(t){return nt().memoizedState=t},useTransition:function(){var t=bm(!1),a=t[0];return t=ik.bind(null,t[1]),nt().memoizedState=t,[a,t]},useMutableSource:function(){},useSyncExternalStore:function(t,a,f){var u=tn,m=nt();if(Ze){if(f===void 0)throw Error(n(407));f=f()}else{if(f=a(),Cn===null)throw Error(n(349));ra&30||gm(u,a,f)}m.memoizedState=f;var p={value:f,getSnapshot:a};return m.queue=p,Sm(_m.bind(null,u,p,t),[t]),u.flags|=2048,Do(9,ym.bind(null,u,p,f,a),void 0,null),f},useId:function(){var t=nt(),a=Cn.identifierPrefix;if(Ze){var f=Ct,u=Tt;f=(u&~(1<<32-Gn(u)-1)).toString(32)+f,a=":"+a+"R"+f,f=xo++,0<f&&(a+="H"+f.toString(32)),a+=":"}else f=nk++,a=":"+a+"r"+f.toString(32)+":";return t.memoizedState=a},unstable_isNewReconciler:!1},sk={readContext:_i,useCallback:Pm,useContext:_i,useEffect:Uu,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Cm,useMemo:Am,useReducer:zu,useRef:Em,useState:function(){return zu(No)},useDebugValue:qu,useDeferredValue:function(t){var a=ki();return xm(a,yn.memoizedState,t)},useTransition:function(){var t=zu(No)[0],a=ki().memoizedState;return[t,a]},useMutableSource:vm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1},ok={readContext:_i,useCallback:Pm,useContext:_i,useEffect:Uu,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:Cm,useMemo:Am,useReducer:$u,useRef:Em,useState:function(){return $u(No)},useDebugValue:qu,useDeferredValue:function(t){var a=ki();return yn===null?a.memoizedState=t:xm(a,yn.memoizedState,t)},useTransition:function(){var t=$u(No)[0],a=ki().memoizedState;return[t,a]},useMutableSource:vm,useSyncExternalStore:pm,useId:Nm,unstable_isNewReconciler:!1};function Vi(t,a){if(t&&t.defaultProps){a=oe({},a),t=t.defaultProps;for(var f in t)a[f]===void 0&&(a[f]=t[f]);return a}return a}function Hu(t,a,f,u){a=t.memoizedState,f=f(u,a),f=f==null?a:oe({},a,f),t.memoizedState=f,t.lanes===0&&(t.updateQueue.baseState=f)}var vl={isMounted:function(t){return(t=t._reactInternals)?Pi(t)===t:!1},enqueueSetState:function(t,a,f){t=t._reactInternals;var u=Jn(),m=ur(t),p=Rt(u,m);p.payload=a,f!=null&&(p.callback=f),a=or(t,p,m),a!==null&&(zi(a,t,m,u),ol(a,t,m))},enqueueReplaceState:function(t,a,f){t=t._reactInternals;var u=Jn(),m=ur(t),p=Rt(u,m);p.tag=1,p.payload=a,f!=null&&(p.callback=f),a=or(t,p,m),a!==null&&(zi(a,t,m,u),ol(a,t,m))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var f=Jn(),u=ur(t),m=Rt(f,u);m.tag=2,a!=null&&(m.callback=a),a=or(t,m,u),a!==null&&(zi(a,t,u,f),ol(a,t,u))}};function Lm(t,a,f,u,m,p,k){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,k):a.prototype&&a.prototype.isPureReactComponent?!_o(f,u)||!_o(m,p):!0}function Om(t,a,f){var u=!1,m=rr,p=a.contextType;return typeof p=="object"&&p!==null?p=_i(p):(m=ei(a)?Zr:Vn.current,u=a.contextTypes,p=(u=u!=null)?ns(t,m):rr),a=new a(f,p),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=vl,t.stateNode=a,a._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=m,t.__reactInternalMemoizedMaskedChildContext=p),a}function Vm(t,a,f,u){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(f,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(f,u),a.state!==t&&vl.enqueueReplaceState(a,a.state,null)}function Wu(t,a,f,u){var m=t.stateNode;m.props=f,m.state=t.memoizedState,m.refs={},Nu(t);var p=a.contextType;typeof p=="object"&&p!==null?m.context=_i(p):(p=ei(a)?Zr:Vn.current,m.context=ns(t,p)),m.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(Hu(t,a,p,f),m.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&vl.enqueueReplaceState(m,m.state,null),fl(t,f,m,u),m.state=t.memoizedState),typeof m.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,a){try{var f="",u=a;do f+=Pe(u),u=u.return;while(u);var m=f}catch(p){m=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:a,stack:m,digest:null}}function Gu(t,a,f){return{value:t,source:null,stack:f??null,digest:a??null}}function Ku(t,a){try{console.error(a.value)}catch(f){setTimeout(function(){throw f})}}var fk=typeof WeakMap=="function"?WeakMap:Map;function jm(t,a,f){f=Rt(-1,f),f.tag=3,f.payload={element:null};var u=a.value;return f.callback=function(){bl||(bl=!0,lc=u),Ku(t,a)},f}function Bm(t,a,f){f=Rt(-1,f),f.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var m=a.value;f.payload=function(){return u(m)},f.callback=function(){Ku(t,a)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(f.callback=function(){Ku(t,a),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})}),f}function zm(t,a,f){var u=t.pingCache;if(u===null){u=t.pingCache=new fk;var m=new Set;u.set(a,m)}else m=u.get(a),m===void 0&&(m=new Set,u.set(a,m));m.has(f)||(m.add(f),t=bk.bind(null,t,a,f),a.then(t,t))}function $m(t){do{var a;if((a=t.tag===13)&&(a=t.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return t;t=t.return}while(t!==null);return null}function Um(t,a,f,u,m){return t.mode&1?(t.flags|=65536,t.lanes=m,t):(t===a?t.flags|=65536:(t.flags|=128,f.flags|=131072,f.flags&=-52805,f.tag===1&&(f.alternate===null?f.tag=17:(a=Rt(-1,1),a.tag=2,or(f,a,1))),f.lanes|=1),t)}var lk=ae.ReactCurrentOwner,ni=!1;function Qn(t,a,f,u){a.child=t===null?lm(a,null,f,u):as(a,t.child,f,u)}function qm(t,a,f,u,m){f=f.render;var p=a.ref;return os(a,m),u=ju(t,a,f,u,p,m),f=Bu(),t!==null&&!ni?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~m,Pt(t,a,m)):(Ze&&f&&bu(a),a.flags|=1,Qn(t,a,u,m),a.child)}function Hm(t,a,f,u,m){if(t===null){var p=f.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&f.compare===null&&f.defaultProps===void 0?(a.tag=15,a.type=p,Wm(t,a,p,u,m)):(t=Rl(f.type,null,u,a,a.mode,m),t.ref=a.ref,t.return=a,a.child=t)}if(p=t.child,!(t.lanes&m)){var k=p.memoizedProps;if(f=f.compare,f=f!==null?f:_o,f(k,u)&&t.ref===a.ref)return Pt(t,a,m)}return a.flags|=1,t=hr(p,u),t.ref=a.ref,t.return=a,a.child=t}function Wm(t,a,f,u,m){if(t!==null){var p=t.memoizedProps;if(_o(p,u)&&t.ref===a.ref)if(ni=!1,a.pendingProps=u=p,(t.lanes&m)!==0)t.flags&131072&&(ni=!0);else return a.lanes=t.lanes,Pt(t,a,m)}return Qu(t,a,f,u,m)}function Gm(t,a,f){var u=a.pendingProps,m=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(us,ci),ci|=f;else{if(!(f&1073741824))return t=p!==null?p.baseLanes|f:f,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:t,cachePool:null,transitions:null},a.updateQueue=null,Ke(us,ci),ci|=t,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:f,Ke(us,ci),ci|=u}else p!==null?(u=p.baseLanes|f,a.memoizedState=null):u=f,Ke(us,ci),ci|=u;return Qn(t,a,m,f),a.child}function Km(t,a){var f=a.ref;(t===null&&f!==null||t!==null&&t.ref!==f)&&(a.flags|=512,a.flags|=2097152)}function Qu(t,a,f,u,m){var p=ei(f)?Zr:Vn.current;return p=ns(a,p),os(a,m),f=ju(t,a,f,u,p,m),u=Bu(),t!==null&&!ni?(a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~m,Pt(t,a,m)):(Ze&&u&&bu(a),a.flags|=1,Qn(t,a,f,m),a.child)}function Qm(t,a,f,u,m){if(ei(f)){var p=!0;Zf(a)}else p=!1;if(os(a,m),a.stateNode===null)gl(t,a),Om(a,f,u),Wu(a,f,u,m),u=!0;else if(t===null){var k=a.stateNode,C=a.memoizedProps;k.props=C;var x=k.context,$=f.contextType;typeof $=="object"&&$!==null?$=_i($):($=ei(f)?Zr:Vn.current,$=ns(a,$));var X=f.getDerivedStateFromProps,Z=typeof X=="function"||typeof k.getSnapshotBeforeUpdate=="function";Z||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(C!==u||x!==$)&&Vm(a,k,u,$),sr=!1;var Y=a.memoizedState;k.state=Y,fl(a,u,k,m),x=a.memoizedState,C!==u||Y!==x||Zn.current||sr?(typeof X=="function"&&(Hu(a,f,X,u),x=a.memoizedState),(C=sr||Lm(a,f,C,u,Y,x,$))?(Z||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(a.flags|=4194308)):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=x),k.props=u,k.state=x,k.context=$,u=C):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{k=a.stateNode,um(t,a),C=a.memoizedProps,$=a.type===a.elementType?C:Vi(a.type,C),k.props=$,Z=a.pendingProps,Y=k.context,x=f.contextType,typeof x=="object"&&x!==null?x=_i(x):(x=ei(f)?Zr:Vn.current,x=ns(a,x));var se=f.getDerivedStateFromProps;(X=typeof se=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(C!==Z||Y!==x)&&Vm(a,k,u,x),sr=!1,Y=a.memoizedState,k.state=Y,fl(a,u,k,m);var de=a.memoizedState;C!==Z||Y!==de||Zn.current||sr?(typeof se=="function"&&(Hu(a,f,se,u),de=a.memoizedState),($=sr||Lm(a,f,$,u,Y,de,x)||!1)?(X||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(u,de,x),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(u,de,x)),typeof k.componentDidUpdate=="function"&&(a.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof k.componentDidUpdate!="function"||C===t.memoizedProps&&Y===t.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&Y===t.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=de),k.props=u,k.state=de,k.context=x,u=$):(typeof k.componentDidUpdate!="function"||C===t.memoizedProps&&Y===t.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&Y===t.memoizedState||(a.flags|=1024),u=!1)}return Ju(t,a,f,u,p,m)}function Ju(t,a,f,u,m,p){Km(t,a);var k=(a.flags&128)!==0;if(!u&&!k)return m&&em(a,f,!1),Pt(t,a,p);u=a.stateNode,lk.current=a;var C=k&&typeof f.getDerivedStateFromError!="function"?null:u.render();return a.flags|=1,t!==null&&k?(a.child=as(a,t.child,null,p),a.child=as(a,null,C,p)):Qn(t,a,C,p),a.memoizedState=u.state,m&&em(a,f,!0),a.child}function Jm(t){var a=t.stateNode;a.pendingContext?X1(t,a.pendingContext,a.pendingContext!==a.context):a.context&&X1(t,a.context,!1),Du(t,a.containerInfo)}function Ym(t,a,f,u,m){return rs(),Cu(m),a.flags|=256,Qn(t,a,f,u),a.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xm(t,a,f){var u=a.pendingProps,m=nn.current,p=!1,k=(a.flags&128)!==0,C;if((C=k)||(C=t!==null&&t.memoizedState===null?!1:(m&2)!==0),C?(p=!0,a.flags&=-129):(t===null||t.memoizedState!==null)&&(m|=1),Ke(nn,m&1),t===null)return Tu(a),t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(a.mode&1?t.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(k=u.children,t=u.fallback,p?(u=a.mode,p=a.child,k={mode:"hidden",children:k},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=k):p=Pl(k,u,0,null),t=la(t,u,f,null),p.return=a,t.return=a,p.sibling=t,a.child=p,a.child.memoizedState=Xu(f),a.memoizedState=Yu,t):Zu(a,k));if(m=t.memoizedState,m!==null&&(C=m.dehydrated,C!==null))return dk(t,a,k,u,C,m,f);if(p){p=u.fallback,k=a.mode,m=t.child,C=m.sibling;var x={mode:"hidden",children:u.children};return!(k&1)&&a.child!==m?(u=a.child,u.childLanes=0,u.pendingProps=x,a.deletions=null):(u=hr(m,x),u.subtreeFlags=m.subtreeFlags&14680064),C!==null?p=hr(C,p):(p=la(p,k,f,null),p.flags|=2),p.return=a,u.return=a,u.sibling=p,a.child=u,u=p,p=a.child,k=t.child.memoizedState,k=k===null?Xu(f):{baseLanes:k.baseLanes|f,cachePool:null,transitions:k.transitions},p.memoizedState=k,p.childLanes=t.childLanes&~f,a.memoizedState=Yu,u}return p=t.child,t=p.sibling,u=hr(p,{mode:"visible",children:u.children}),!(a.mode&1)&&(u.lanes=f),u.return=a,u.sibling=null,t!==null&&(f=a.deletions,f===null?(a.deletions=[t],a.flags|=16):f.push(t)),a.child=u,a.memoizedState=null,u}function Zu(t,a){return a=Pl({mode:"visible",children:a},t.mode,0,null),a.return=t,t.child=a}function pl(t,a,f,u){return u!==null&&Cu(u),as(a,t.child,null,f),t=Zu(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function dk(t,a,f,u,m,p,k){if(f)return a.flags&256?(a.flags&=-257,u=Gu(Error(n(422))),pl(t,a,k,u)):a.memoizedState!==null?(a.child=t.child,a.flags|=128,null):(p=u.fallback,m=a.mode,u=Pl({mode:"visible",children:u.children},m,0,null),p=la(p,m,k,null),p.flags|=2,u.return=a,p.return=a,u.sibling=p,a.child=u,a.mode&1&&as(a,t.child,null,k),a.child.memoizedState=Xu(k),a.memoizedState=Yu,p);if(!(a.mode&1))return pl(t,a,k,null);if(m.data==="$!"){if(u=m.nextSibling&&m.nextSibling.dataset,u)var C=u.dgst;return u=C,p=Error(n(419)),u=Gu(p,u,void 0),pl(t,a,k,u)}if(C=(k&t.childLanes)!==0,ni||C){if(u=Cn,u!==null){switch(k&-k){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(u.suspendedLanes|k)?0:m,m!==0&&m!==p.retryLane&&(p.retryLane=m,It(t,m),zi(u,t,m,-1))}return vc(),u=Gu(Error(n(421))),pl(t,a,k,u)}return m.data==="$?"?(a.flags|=128,a.child=t.child,a=Ek.bind(null,t),m._reactRetry=a,null):(t=p.treeContext,ui=ir(m.nextSibling),di=a,Ze=!0,Oi=null,t!==null&&(gi[yi++]=Tt,gi[yi++]=Ct,gi[yi++]=ea,Tt=t.id,Ct=t.overflow,ea=a),a=Zu(a,u.children),a.flags|=4096,a)}function Zm(t,a,f){t.lanes|=a;var u=t.alternate;u!==null&&(u.lanes|=a),Au(t.return,a,f)}function ec(t,a,f,u,m){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:f,tailMode:m}:(p.isBackwards=a,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=f,p.tailMode=m)}function ev(t,a,f){var u=a.pendingProps,m=u.revealOrder,p=u.tail;if(Qn(t,a,u.children,f),u=nn.current,u&2)u=u&1|2,a.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zm(t,f,a);else if(t.tag===19)Zm(t,f,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break e;for(;t.sibling===null;){if(t.return===null||t.return===a)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ke(nn,u),!(a.mode&1))a.memoizedState=null;else switch(m){case"forwards":for(f=a.child,m=null;f!==null;)t=f.alternate,t!==null&&ll(t)===null&&(m=f),f=f.sibling;f=m,f===null?(m=a.child,a.child=null):(m=f.sibling,f.sibling=null),ec(a,!1,m,f,p);break;case"backwards":for(f=null,m=a.child,a.child=null;m!==null;){if(t=m.alternate,t!==null&&ll(t)===null){a.child=m;break}t=m.sibling,m.sibling=f,f=m,m=t}ec(a,!0,f,null,p);break;case"together":ec(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function gl(t,a){!(a.mode&1)&&t!==null&&(t.alternate=null,a.alternate=null,a.flags|=2)}function Pt(t,a,f){if(t!==null&&(a.dependencies=t.dependencies),aa|=a.lanes,!(f&a.childLanes))return null;if(t!==null&&a.child!==t.child)throw Error(n(153));if(a.child!==null){for(t=a.child,f=hr(t,t.pendingProps),a.child=f,f.return=a;t.sibling!==null;)t=t.sibling,f=f.sibling=hr(t,t.pendingProps),f.return=a;f.sibling=null}return a.child}function uk(t,a,f){switch(a.tag){case 3:Jm(a),rs();break;case 5:mm(a);break;case 1:ei(a.type)&&Zf(a);break;case 4:Du(a,a.stateNode.containerInfo);break;case 10:var u=a.type._context,m=a.memoizedProps.value;Ke(al,u._currentValue),u._currentValue=m;break;case 13:if(u=a.memoizedState,u!==null)return u.dehydrated!==null?(Ke(nn,nn.current&1),a.flags|=128,null):f&a.child.childLanes?Xm(t,a,f):(Ke(nn,nn.current&1),t=Pt(t,a,f),t!==null?t.sibling:null);Ke(nn,nn.current&1);break;case 19:if(u=(f&a.childLanes)!==0,t.flags&128){if(u)return ev(t,a,f);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ke(nn,nn.current),u)break;return null;case 22:case 23:return a.lanes=0,Gm(t,a,f)}return Pt(t,a,f)}var nv,nc,iv,tv;nv=function(t,a){for(var f=a.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break;for(;f.sibling===null;){if(f.return===null||f.return===a)return;f=f.return}f.sibling.return=f.return,f=f.sibling}},nc=function(){},iv=function(t,a,f,u){var m=t.memoizedProps;if(m!==u){t=a.stateNode,ta(et.current);var p=null;switch(f){case"input":m=Lr(t,m),u=Lr(t,u),p=[];break;case"select":m=oe({},m,{value:void 0}),u=oe({},u,{value:void 0}),p=[];break;case"textarea":m=Gs(t,m),u=Gs(t,u),p=[];break;default:typeof m.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Jf)}Zs(f,u);var k;f=null;for($ in m)if(!u.hasOwnProperty($)&&m.hasOwnProperty($)&&m[$]!=null)if($==="style"){var C=m[$];for(k in C)C.hasOwnProperty(k)&&(f||(f={}),f[k]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?p||(p=[]):(p=p||[]).push($,null));for($ in u){var x=u[$];if(C=m!=null?m[$]:void 0,u.hasOwnProperty($)&&x!==C&&(x!=null||C!=null))if($==="style")if(C){for(k in C)!C.hasOwnProperty(k)||x&&x.hasOwnProperty(k)||(f||(f={}),f[k]="");for(k in x)x.hasOwnProperty(k)&&C[k]!==x[k]&&(f||(f={}),f[k]=x[k])}else f||(p||(p=[]),p.push($,f)),f=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,C=C?C.__html:void 0,x!=null&&C!==x&&(p=p||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(p=p||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(s.hasOwnProperty($)?(x!=null&&$==="onScroll"&&Je("scroll",t),p||C===x||(p=[])):(p=p||[]).push($,x))}f&&(p=p||[]).push("style",f);var $=p;(a.updateQueue=$)&&(a.flags|=4)}},tv=function(t,a,f,u){f!==u&&(a.flags|=4)};function Fo(t,a){if(!Ze)switch(t.tailMode){case"hidden":a=t.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?t.tail=null:f.sibling=null;break;case"collapsed":f=t.tail;for(var u=null;f!==null;)f.alternate!==null&&(u=f),f=f.sibling;u===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Bn(t){var a=t.alternate!==null&&t.alternate.child===t.child,f=0,u=0;if(a)for(var m=t.child;m!==null;)f|=m.lanes|m.childLanes,u|=m.subtreeFlags&14680064,u|=m.flags&14680064,m.return=t,m=m.sibling;else for(m=t.child;m!==null;)f|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=t,m=m.sibling;return t.subtreeFlags|=u,t.childLanes=f,a}function ck(t,a,f){var u=a.pendingProps;switch(Eu(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(a),null;case 1:return ei(a.type)&&Xf(),Bn(a),null;case 3:return u=a.stateNode,fs(),Ye(Zn),Ye(Vn),Lu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(tl(a)?a.flags|=4:t===null||t.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Oi!==null&&(cc(Oi),Oi=null))),nc(t,a),Bn(a),null;case 5:Fu(a);var m=ta(Po.current);if(f=a.type,t!==null&&a.stateNode!=null)iv(t,a,f,u,m),t.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!u){if(a.stateNode===null)throw Error(n(166));return Bn(a),null}if(t=ta(et.current),tl(a)){u=a.stateNode,f=a.type;var p=a.memoizedProps;switch(u[Zi]=a,u[So]=p,t=(a.mode&1)!==0,f){case"dialog":Je("cancel",u),Je("close",u);break;case"iframe":case"object":case"embed":Je("load",u);break;case"video":case"audio":for(m=0;m<wo.length;m++)Je(wo[m],u);break;case"source":Je("error",u);break;case"img":case"image":case"link":Je("error",u),Je("load",u);break;case"details":Je("toggle",u);break;case"input":Ea(u,p),Je("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Je("invalid",u);break;case"textarea":Ta(u,p),Je("invalid",u)}Zs(f,p),m=null;for(var k in p)if(p.hasOwnProperty(k)){var C=p[k];k==="children"?typeof C=="string"?u.textContent!==C&&(p.suppressHydrationWarning!==!0&&Qf(u.textContent,C,t),m=["children",C]):typeof C=="number"&&u.textContent!==""+C&&(p.suppressHydrationWarning!==!0&&Qf(u.textContent,C,t),m=["children",""+C]):s.hasOwnProperty(k)&&C!=null&&k==="onScroll"&&Je("scroll",u)}switch(f){case"input":ht(u),wf(u,p,!0);break;case"textarea":ht(u),Ks(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Jf)}u=m,a.updateQueue=u,u!==null&&(a.flags|=4)}else{k=m.nodeType===9?m:m.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vn(f)),t==="http://www.w3.org/1999/xhtml"?f==="script"?(t=k.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=k.createElement(f,{is:u.is}):(t=k.createElement(f),f==="select"&&(k=t,u.multiple?k.multiple=!0:u.size&&(k.size=u.size))):t=k.createElementNS(t,f),t[Zi]=a,t[So]=u,nv(t,a,!1,!1),a.stateNode=t;e:{switch(k=eo(f,u),f){case"dialog":Je("cancel",t),Je("close",t),m=u;break;case"iframe":case"object":case"embed":Je("load",t),m=u;break;case"video":case"audio":for(m=0;m<wo.length;m++)Je(wo[m],t);m=u;break;case"source":Je("error",t),m=u;break;case"img":case"image":case"link":Je("error",t),Je("load",t),m=u;break;case"details":Je("toggle",t),m=u;break;case"input":Ea(t,u),m=Lr(t,u),Je("invalid",t);break;case"option":m=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},m=oe({},u,{value:void 0}),Je("invalid",t);break;case"textarea":Ta(t,u),m=Gs(t,u),Je("invalid",t);break;default:m=u}Zs(f,m),C=m;for(p in C)if(C.hasOwnProperty(p)){var x=C[p];p==="style"?Ys(t,x):p==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Qs(t,x)):p==="children"?typeof x=="string"?(f!=="textarea"||x!=="")&&Ht(t,x):typeof x=="number"&&Ht(t,""+x):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?x!=null&&p==="onScroll"&&Je("scroll",t):x!=null&&re(t,p,x,k))}switch(f){case"input":ht(t),wf(t,u,!1);break;case"textarea":ht(t),Ks(t);break;case"option":u.value!=null&&t.setAttribute("value",""+$e(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?vt(t,!!u.multiple,p,!1):u.defaultValue!=null&&vt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof m.onClick=="function"&&(t.onclick=Jf)}switch(f){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Bn(a),null;case 6:if(t&&a.stateNode!=null)tv(t,a,t.memoizedProps,u);else{if(typeof u!="string"&&a.stateNode===null)throw Error(n(166));if(f=ta(Po.current),ta(et.current),tl(a)){if(u=a.stateNode,f=a.memoizedProps,u[Zi]=a,(p=u.nodeValue!==f)&&(t=di,t!==null))switch(t.tag){case 3:Qf(u.nodeValue,f,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qf(u.nodeValue,f,(t.mode&1)!==0)}p&&(a.flags|=4)}else u=(f.nodeType===9?f:f.ownerDocument).createTextNode(u),u[Zi]=a,a.stateNode=u}return Bn(a),null;case 13:if(Ye(nn),u=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ze&&ui!==null&&a.mode&1&&!(a.flags&128))sm(),rs(),a.flags|=98560,p=!1;else if(p=tl(a),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=a.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Zi]=a}else rs(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Bn(a),p=!1}else Oi!==null&&(cc(Oi),Oi=null),p=!0;if(!p)return a.flags&65536?a:null}return a.flags&128?(a.lanes=f,a):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(a.child.flags|=8192,a.mode&1&&(t===null||nn.current&1?_n===0&&(_n=3):vc())),a.updateQueue!==null&&(a.flags|=4),Bn(a),null);case 4:return fs(),nc(t,a),t===null&&bo(a.stateNode.containerInfo),Bn(a),null;case 10:return Pu(a.type._context),Bn(a),null;case 17:return ei(a.type)&&Xf(),Bn(a),null;case 19:if(Ye(nn),p=a.memoizedState,p===null)return Bn(a),null;if(u=(a.flags&128)!==0,k=p.rendering,k===null)if(u)Fo(p,!1);else{if(_n!==0||t!==null&&t.flags&128)for(t=a.child;t!==null;){if(k=ll(t),k!==null){for(a.flags|=128,Fo(p,!1),u=k.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),a.subtreeFlags=0,u=f,f=a.child;f!==null;)p=f,t=u,p.flags&=14680066,k=p.alternate,k===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=k.childLanes,p.lanes=k.lanes,p.child=k.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=k.memoizedProps,p.memoizedState=k.memoizedState,p.updateQueue=k.updateQueue,p.type=k.type,t=k.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),f=f.sibling;return Ke(nn,nn.current&1|2),a.child}t=t.sibling}p.tail!==null&&Ge()>cs&&(a.flags|=128,u=!0,Fo(p,!1),a.lanes=4194304)}else{if(!u)if(t=ll(k),t!==null){if(a.flags|=128,u=!0,f=t.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),Fo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!k.alternate&&!Ze)return Bn(a),null}else 2*Ge()-p.renderingStartTime>cs&&f!==1073741824&&(a.flags|=128,u=!0,Fo(p,!1),a.lanes=4194304);p.isBackwards?(k.sibling=a.child,a.child=k):(f=p.last,f!==null?f.sibling=k:a.child=k,p.last=k)}return p.tail!==null?(a=p.tail,p.rendering=a,p.tail=a.sibling,p.renderingStartTime=Ge(),a.sibling=null,f=nn.current,Ke(nn,u?f&1|2:f&1),a):(Bn(a),null);case 22:case 23:return mc(),u=a.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(a.flags|=8192),u&&a.mode&1?ci&1073741824&&(Bn(a),a.subtreeFlags&6&&(a.flags|=8192)):Bn(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function hk(t,a){switch(Eu(a),a.tag){case 1:return ei(a.type)&&Xf(),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return fs(),Ye(Zn),Ye(Vn),Lu(),t=a.flags,t&65536&&!(t&128)?(a.flags=t&-65537|128,a):null;case 5:return Fu(a),null;case 13:if(Ye(nn),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(n(340));rs()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Ye(nn),null;case 4:return fs(),null;case 10:return Pu(a.type._context),null;case 22:case 23:return mc(),null;case 24:return null;default:return null}}var yl=!1,zn=!1,mk=typeof WeakSet=="function"?WeakSet:Set,le=null;function ds(t,a){var f=t.ref;if(f!==null)if(typeof f=="function")try{f(null)}catch(u){sn(t,a,u)}else f.current=null}function ic(t,a,f){try{f()}catch(u){sn(t,a,u)}}var rv=!1;function vk(t,a){if(mu=Zt,t=L1(),su(t)){if("selectionStart"in t)var f={start:t.selectionStart,end:t.selectionEnd};else e:{f=(f=t.ownerDocument)&&f.defaultView||window;var u=f.getSelection&&f.getSelection();if(u&&u.rangeCount!==0){f=u.anchorNode;var m=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{f.nodeType,p.nodeType}catch{f=null;break e}var k=0,C=-1,x=-1,$=0,X=0,Z=t,Y=null;n:for(;;){for(var se;Z!==f||m!==0&&Z.nodeType!==3||(C=k+m),Z!==p||u!==0&&Z.nodeType!==3||(x=k+u),Z.nodeType===3&&(k+=Z.nodeValue.length),(se=Z.firstChild)!==null;)Y=Z,Z=se;for(;;){if(Z===t)break n;if(Y===f&&++$===m&&(C=k),Y===p&&++X===u&&(x=k),(se=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=se}f=C===-1||x===-1?null:{start:C,end:x}}else f=null}f=f||{start:0,end:0}}else f=null;for(vu={focusedElem:t,selectionRange:f},Zt=!1,le=a;le!==null;)if(a=le,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,le=t;else for(;le!==null;){a=le;try{var de=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var ue=de.memoizedProps,ln=de.memoizedState,j=a.stateNode,F=j.getSnapshotBeforeUpdate(a.elementType===a.type?ue:Vi(a.type,ue),ln);j.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var z=a.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ne){sn(a,a.return,ne)}if(t=a.sibling,t!==null){t.return=a.return,le=t;break}le=a.return}return de=rv,rv=!1,de}function Mo(t,a,f){var u=a.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var m=u=u.next;do{if((m.tag&t)===t){var p=m.destroy;m.destroy=void 0,p!==void 0&&ic(a,f,p)}m=m.next}while(m!==u)}}function _l(t,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var f=a=a.next;do{if((f.tag&t)===t){var u=f.create;f.destroy=u()}f=f.next}while(f!==a)}}function tc(t){var a=t.ref;if(a!==null){var f=t.stateNode;switch(t.tag){case 5:t=f;break;default:t=f}typeof a=="function"?a(t):a.current=t}}function av(t){var a=t.alternate;a!==null&&(t.alternate=null,av(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&(delete a[Zi],delete a[So],delete a[_u],delete a[Y_],delete a[X_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sv(t){return t.tag===5||t.tag===3||t.tag===4}function ov(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,a,f){var u=t.tag;if(u===5||u===6)t=t.stateNode,a?f.nodeType===8?f.parentNode.insertBefore(t,a):f.insertBefore(t,a):(f.nodeType===8?(a=f.parentNode,a.insertBefore(t,f)):(a=f,a.appendChild(t)),f=f._reactRootContainer,f!=null||a.onclick!==null||(a.onclick=Jf));else if(u!==4&&(t=t.child,t!==null))for(rc(t,a,f),t=t.sibling;t!==null;)rc(t,a,f),t=t.sibling}function ac(t,a,f){var u=t.tag;if(u===5||u===6)t=t.stateNode,a?f.insertBefore(t,a):f.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(ac(t,a,f),t=t.sibling;t!==null;)ac(t,a,f),t=t.sibling}var xn=null,ji=!1;function fr(t,a,f){for(f=f.child;f!==null;)fv(t,a,f),f=f.sibling}function fv(t,a,f){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Hr,f)}catch{}switch(f.tag){case 5:zn||ds(f,a);case 6:var u=xn,m=ji;xn=null,fr(t,a,f),xn=u,ji=m,xn!==null&&(ji?(t=xn,f=f.stateNode,t.nodeType===8?t.parentNode.removeChild(f):t.removeChild(f)):xn.removeChild(f.stateNode));break;case 18:xn!==null&&(ji?(t=xn,f=f.stateNode,t.nodeType===8?yu(t.parentNode,f):t.nodeType===1&&yu(t,f),Fi(t)):yu(xn,f.stateNode));break;case 4:u=xn,m=ji,xn=f.stateNode.containerInfo,ji=!0,fr(t,a,f),xn=u,ji=m;break;case 0:case 11:case 14:case 15:if(!zn&&(u=f.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){m=u=u.next;do{var p=m,k=p.destroy;p=p.tag,k!==void 0&&(p&2||p&4)&&ic(f,a,k),m=m.next}while(m!==u)}fr(t,a,f);break;case 1:if(!zn&&(ds(f,a),u=f.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=f.memoizedProps,u.state=f.memoizedState,u.componentWillUnmount()}catch(C){sn(f,a,C)}fr(t,a,f);break;case 21:fr(t,a,f);break;case 22:f.mode&1?(zn=(u=zn)||f.memoizedState!==null,fr(t,a,f),zn=u):fr(t,a,f);break;default:fr(t,a,f)}}function lv(t){var a=t.updateQueue;if(a!==null){t.updateQueue=null;var f=t.stateNode;f===null&&(f=t.stateNode=new mk),a.forEach(function(u){var m=Sk.bind(null,t,u);f.has(u)||(f.add(u),u.then(m,m))})}}function Bi(t,a){var f=a.deletions;if(f!==null)for(var u=0;u<f.length;u++){var m=f[u];try{var p=t,k=a,C=k;e:for(;C!==null;){switch(C.tag){case 5:xn=C.stateNode,ji=!1;break e;case 3:xn=C.stateNode.containerInfo,ji=!0;break e;case 4:xn=C.stateNode.containerInfo,ji=!0;break e}C=C.return}if(xn===null)throw Error(n(160));fv(p,k,m),xn=null,ji=!1;var x=m.alternate;x!==null&&(x.return=null),m.return=null}catch($){sn(m,a,$)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)dv(a,t),a=a.sibling}function dv(t,a){var f=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bi(a,t),it(t),u&4){try{Mo(3,t,t.return),_l(3,t)}catch(ue){sn(t,t.return,ue)}try{Mo(5,t,t.return)}catch(ue){sn(t,t.return,ue)}}break;case 1:Bi(a,t),it(t),u&512&&f!==null&&ds(f,f.return);break;case 5:if(Bi(a,t),it(t),u&512&&f!==null&&ds(f,f.return),t.flags&32){var m=t.stateNode;try{Ht(m,"")}catch(ue){sn(t,t.return,ue)}}if(u&4&&(m=t.stateNode,m!=null)){var p=t.memoizedProps,k=f!==null?f.memoizedProps:p,C=t.type,x=t.updateQueue;if(t.updateQueue=null,x!==null)try{C==="input"&&p.type==="radio"&&p.name!=null&&Hs(m,p),eo(C,k);var $=eo(C,p);for(k=0;k<x.length;k+=2){var X=x[k],Z=x[k+1];X==="style"?Ys(m,Z):X==="dangerouslySetInnerHTML"?Qs(m,Z):X==="children"?Ht(m,Z):re(m,X,Z,$)}switch(C){case"input":Ws(m,p);break;case"textarea":Ca(m,p);break;case"select":var Y=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!p.multiple;var se=p.value;se!=null?vt(m,!!p.multiple,se,!1):Y!==!!p.multiple&&(p.defaultValue!=null?vt(m,!!p.multiple,p.defaultValue,!0):vt(m,!!p.multiple,p.multiple?[]:"",!1))}m[So]=p}catch(ue){sn(t,t.return,ue)}}break;case 6:if(Bi(a,t),it(t),u&4){if(t.stateNode===null)throw Error(n(162));m=t.stateNode,p=t.memoizedProps;try{m.nodeValue=p}catch(ue){sn(t,t.return,ue)}}break;case 3:if(Bi(a,t),it(t),u&4&&f!==null&&f.memoizedState.isDehydrated)try{Fi(a.containerInfo)}catch(ue){sn(t,t.return,ue)}break;case 4:Bi(a,t),it(t);break;case 13:Bi(a,t),it(t),m=t.child,m.flags&8192&&(p=m.memoizedState!==null,m.stateNode.isHidden=p,!p||m.alternate!==null&&m.alternate.memoizedState!==null||(fc=Ge())),u&4&&lv(t);break;case 22:if(X=f!==null&&f.memoizedState!==null,t.mode&1?(zn=($=zn)||X,Bi(a,t),zn=$):Bi(a,t),it(t),u&8192){if($=t.memoizedState!==null,(t.stateNode.isHidden=$)&&!X&&t.mode&1)for(le=t,X=t.child;X!==null;){for(Z=le=X;le!==null;){switch(Y=le,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Mo(4,Y,Y.return);break;case 1:ds(Y,Y.return);var de=Y.stateNode;if(typeof de.componentWillUnmount=="function"){u=Y,f=Y.return;try{a=u,de.props=a.memoizedProps,de.state=a.memoizedState,de.componentWillUnmount()}catch(ue){sn(u,f,ue)}}break;case 5:ds(Y,Y.return);break;case 22:if(Y.memoizedState!==null){hv(Z);continue}}se!==null?(se.return=Y,le=se):hv(Z)}X=X.sibling}e:for(X=null,Z=t;;){if(Z.tag===5){if(X===null){X=Z;try{m=Z.stateNode,$?(p=m.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(C=Z.stateNode,x=Z.memoizedProps.style,k=x!=null&&x.hasOwnProperty("display")?x.display:null,C.style.display=Js("display",k))}catch(ue){sn(t,t.return,ue)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=$?"":Z.memoizedProps}catch(ue){sn(t,t.return,ue)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===t)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===t)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===t)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Bi(a,t),it(t),u&4&&lv(t);break;case 21:break;default:Bi(a,t),it(t)}}function it(t){var a=t.flags;if(a&2){try{e:{for(var f=t.return;f!==null;){if(sv(f)){var u=f;break e}f=f.return}throw Error(n(160))}switch(u.tag){case 5:var m=u.stateNode;u.flags&32&&(Ht(m,""),u.flags&=-33);var p=ov(t);ac(t,p,m);break;case 3:case 4:var k=u.stateNode.containerInfo,C=ov(t);rc(t,C,k);break;default:throw Error(n(161))}}catch(x){sn(t,t.return,x)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function pk(t,a,f){le=t,uv(t)}function uv(t,a,f){for(var u=(t.mode&1)!==0;le!==null;){var m=le,p=m.child;if(m.tag===22&&u){var k=m.memoizedState!==null||yl;if(!k){var C=m.alternate,x=C!==null&&C.memoizedState!==null||zn;C=yl;var $=zn;if(yl=k,(zn=x)&&!$)for(le=m;le!==null;)k=le,x=k.child,k.tag===22&&k.memoizedState!==null?mv(m):x!==null?(x.return=k,le=x):mv(m);for(;p!==null;)le=p,uv(p),p=p.sibling;le=m,yl=C,zn=$}cv(t)}else m.subtreeFlags&8772&&p!==null?(p.return=m,le=p):cv(t)}}function cv(t){for(;le!==null;){var a=le;if(a.flags&8772){var f=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:zn||_l(5,a);break;case 1:var u=a.stateNode;if(a.flags&4&&!zn)if(f===null)u.componentDidMount();else{var m=a.elementType===a.type?f.memoizedProps:Vi(a.type,f.memoizedProps);u.componentDidUpdate(m,f.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=a.updateQueue;p!==null&&hm(a,p,u);break;case 3:var k=a.updateQueue;if(k!==null){if(f=null,a.child!==null)switch(a.child.tag){case 5:f=a.child.stateNode;break;case 1:f=a.child.stateNode}hm(a,k,f)}break;case 5:var C=a.stateNode;if(f===null&&a.flags&4){f=C;var x=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&f.focus();break;case"img":x.src&&(f.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var $=a.alternate;if($!==null){var X=$.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&Fi(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}zn||a.flags&512&&tc(a)}catch(Y){sn(a,a.return,Y)}}if(a===t){le=null;break}if(f=a.sibling,f!==null){f.return=a.return,le=f;break}le=a.return}}function hv(t){for(;le!==null;){var a=le;if(a===t){le=null;break}var f=a.sibling;if(f!==null){f.return=a.return,le=f;break}le=a.return}}function mv(t){for(;le!==null;){var a=le;try{switch(a.tag){case 0:case 11:case 15:var f=a.return;try{_l(4,a)}catch(x){sn(a,f,x)}break;case 1:var u=a.stateNode;if(typeof u.componentDidMount=="function"){var m=a.return;try{u.componentDidMount()}catch(x){sn(a,m,x)}}var p=a.return;try{tc(a)}catch(x){sn(a,p,x)}break;case 5:var k=a.return;try{tc(a)}catch(x){sn(a,k,x)}}}catch(x){sn(a,a.return,x)}if(a===t){le=null;break}var C=a.sibling;if(C!==null){C.return=a.return,le=C;break}le=a.return}}var gk=Math.ceil,kl=ae.ReactCurrentDispatcher,sc=ae.ReactCurrentOwner,wi=ae.ReactCurrentBatchConfig,je=0,Cn=null,cn=null,Nn=0,ci=0,us=tr(0),_n=0,Lo=null,aa=0,wl=0,oc=0,Oo=null,ii=null,fc=0,cs=1/0,At=null,bl=!1,lc=null,lr=null,El=!1,dr=null,Sl=0,Vo=0,dc=null,Tl=-1,Cl=0;function Jn(){return je&6?Ge():Tl!==-1?Tl:Tl=Ge()}function ur(t){return t.mode&1?je&2&&Nn!==0?Nn&-Nn:ek.transition!==null?(Cl===0&&(Cl=Gr()),Cl):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:co(t.type)),t):1}function zi(t,a,f,u){if(50<Vo)throw Vo=0,dc=null,Error(n(185));Qt(t,f,u),(!(je&2)||t!==Cn)&&(t===Cn&&(!(je&2)&&(wl|=f),_n===4&&cr(t,Nn)),ti(t,u),f===1&&je===0&&!(a.mode&1)&&(cs=Ge()+500,el&&ar()))}function ti(t,a){var f=t.callbackNode;yt(t,a);var u=Wr(t,t===Cn?Nn:0);if(u===0)f!==null&&so(f),t.callbackNode=null,t.callbackPriority=0;else if(a=u&-u,t.callbackPriority!==a){if(f!=null&&so(f),a===1)t.tag===0?Z_(pv.bind(null,t)):nm(pv.bind(null,t)),Q_(function(){!(je&6)&&ar()}),f=null;else{switch(Yt(u)){case 1:f=qr;break;case 4:f=Wt;break;case 16:f=mi;break;case 536870912:f=Cf;break;default:f=mi}f=Sv(f,vv.bind(null,t))}t.callbackPriority=a,t.callbackNode=f}}function vv(t,a){if(Tl=-1,Cl=0,je&6)throw Error(n(327));var f=t.callbackNode;if(hs()&&t.callbackNode!==f)return null;var u=Wr(t,t===Cn?Nn:0);if(u===0)return null;if(u&30||u&t.expiredLanes||a)a=Il(t,u);else{a=u;var m=je;je|=2;var p=yv();(Cn!==t||Nn!==a)&&(At=null,cs=Ge()+500,oa(t,a));do try{kk();break}catch(C){gv(t,C)}while(!0);Ru(),kl.current=p,je=m,cn!==null?a=0:(Cn=null,Nn=0,a=_n)}if(a!==0){if(a===2&&(m=oi(t),m!==0&&(u=m,a=uc(t,m))),a===1)throw f=Lo,oa(t,0),cr(t,u),ti(t,Ge()),f;if(a===6)cr(t,u);else{if(m=t.current.alternate,!(u&30)&&!yk(m)&&(a=Il(t,u),a===2&&(p=oi(t),p!==0&&(u=p,a=uc(t,p))),a===1))throw f=Lo,oa(t,0),cr(t,u),ti(t,Ge()),f;switch(t.finishedWork=m,t.finishedLanes=u,a){case 0:case 1:throw Error(n(345));case 2:fa(t,ii,At);break;case 3:if(cr(t,u),(u&130023424)===u&&(a=fc+500-Ge(),10<a)){if(Wr(t,0)!==0)break;if(m=t.suspendedLanes,(m&u)!==u){Jn(),t.pingedLanes|=t.suspendedLanes&m;break}t.timeoutHandle=gu(fa.bind(null,t,ii,At),a);break}fa(t,ii,At);break;case 4:if(cr(t,u),(u&4194240)===u)break;for(a=t.eventTimes,m=-1;0<u;){var k=31-Gn(u);p=1<<k,k=a[k],k>m&&(m=k),u&=~p}if(u=m,u=Ge()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*gk(u/1960))-u,10<u){t.timeoutHandle=gu(fa.bind(null,t,ii,At),u);break}fa(t,ii,At);break;case 5:fa(t,ii,At);break;default:throw Error(n(329))}}}return ti(t,Ge()),t.callbackNode===f?vv.bind(null,t):null}function uc(t,a){var f=Oo;return t.current.memoizedState.isDehydrated&&(oa(t,a).flags|=256),t=Il(t,a),t!==2&&(a=ii,ii=f,a!==null&&cc(a)),t}function cc(t){ii===null?ii=t:ii.push.apply(ii,t)}function yk(t){for(var a=t;;){if(a.flags&16384){var f=a.updateQueue;if(f!==null&&(f=f.stores,f!==null))for(var u=0;u<f.length;u++){var m=f[u],p=m.getSnapshot;m=m.value;try{if(!Li(p(),m))return!1}catch{return!1}}}if(f=a.child,a.subtreeFlags&16384&&f!==null)f.return=a,a=f;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function cr(t,a){for(a&=~oc,a&=~wl,t.suspendedLanes|=a,t.pingedLanes&=~a,t=t.expirationTimes;0<a;){var f=31-Gn(a),u=1<<f;t[f]=-1,a&=~u}}function pv(t){if(je&6)throw Error(n(327));hs();var a=Wr(t,0);if(!(a&1))return ti(t,Ge()),null;var f=Il(t,a);if(t.tag!==0&&f===2){var u=oi(t);u!==0&&(a=u,f=uc(t,u))}if(f===1)throw f=Lo,oa(t,0),cr(t,a),ti(t,Ge()),f;if(f===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=a,fa(t,ii,At),ti(t,Ge()),null}function hc(t,a){var f=je;je|=1;try{return t(a)}finally{je=f,je===0&&(cs=Ge()+500,el&&ar())}}function sa(t){dr!==null&&dr.tag===0&&!(je&6)&&hs();var a=je;je|=1;var f=wi.transition,u=Fe;try{if(wi.transition=null,Fe=1,t)return t()}finally{Fe=u,wi.transition=f,je=a,!(je&6)&&ar()}}function mc(){ci=us.current,Ye(us)}function oa(t,a){t.finishedWork=null,t.finishedLanes=0;var f=t.timeoutHandle;if(f!==-1&&(t.timeoutHandle=-1,K_(f)),cn!==null)for(f=cn.return;f!==null;){var u=f;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xf();break;case 3:fs(),Ye(Zn),Ye(Vn),Lu();break;case 5:Fu(u);break;case 4:fs();break;case 13:Ye(nn);break;case 19:Ye(nn);break;case 10:Pu(u.type._context);break;case 22:case 23:mc()}f=f.return}if(Cn=t,cn=t=hr(t.current,null),Nn=ci=a,_n=0,Lo=null,oc=wl=aa=0,ii=Oo=null,ia!==null){for(a=0;a<ia.length;a++)if(f=ia[a],u=f.interleaved,u!==null){f.interleaved=null;var m=u.next,p=f.pending;if(p!==null){var k=p.next;p.next=m,u.next=k}f.pending=u}ia=null}return t}function gv(t,a){do{var f=cn;try{if(Ru(),dl.current=ml,ul){for(var u=tn.memoizedState;u!==null;){var m=u.queue;m!==null&&(m.pending=null),u=u.next}ul=!1}if(ra=0,Tn=yn=tn=null,Ao=!1,xo=0,sc.current=null,f===null||f.return===null){_n=1,Lo=a,cn=null;break}e:{var p=t,k=f.return,C=f,x=a;if(a=Nn,C.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,X=C,Z=X.tag;if(!(X.mode&1)&&(Z===0||Z===11||Z===15)){var Y=X.alternate;Y?(X.updateQueue=Y.updateQueue,X.memoizedState=Y.memoizedState,X.lanes=Y.lanes):(X.updateQueue=null,X.memoizedState=null)}var se=$m(k);if(se!==null){se.flags&=-257,Um(se,k,C,p,a),se.mode&1&&zm(p,$,a),a=se,x=$;var de=a.updateQueue;if(de===null){var ue=new Set;ue.add(x),a.updateQueue=ue}else de.add(x);break e}else{if(!(a&1)){zm(p,$,a),vc();break e}x=Error(n(426))}}else if(Ze&&C.mode&1){var ln=$m(k);if(ln!==null){!(ln.flags&65536)&&(ln.flags|=256),Um(ln,k,C,p,a),Cu(ls(x,C));break e}}p=x=ls(x,C),_n!==4&&(_n=2),Oo===null?Oo=[p]:Oo.push(p),p=k;do{switch(p.tag){case 3:p.flags|=65536,a&=-a,p.lanes|=a;var j=jm(p,x,a);cm(p,j);break e;case 1:C=x;var F=p.type,z=p.stateNode;if(!(p.flags&128)&&(typeof F.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(lr===null||!lr.has(z)))){p.flags|=65536,a&=-a,p.lanes|=a;var ne=Bm(p,C,a);cm(p,ne);break e}}p=p.return}while(p!==null)}kv(f)}catch(ce){a=ce,cn===f&&f!==null&&(cn=f=f.return);continue}break}while(!0)}function yv(){var t=kl.current;return kl.current=ml,t===null?ml:t}function vc(){(_n===0||_n===3||_n===2)&&(_n=4),Cn===null||!(aa&268435455)&&!(wl&268435455)||cr(Cn,Nn)}function Il(t,a){var f=je;je|=2;var u=yv();(Cn!==t||Nn!==a)&&(At=null,oa(t,a));do try{_k();break}catch(m){gv(t,m)}while(!0);if(Ru(),je=f,kl.current=u,cn!==null)throw Error(n(261));return Cn=null,Nn=0,_n}function _k(){for(;cn!==null;)_v(cn)}function kk(){for(;cn!==null&&!Sf();)_v(cn)}function _v(t){var a=Ev(t.alternate,t,ci);t.memoizedProps=t.pendingProps,a===null?kv(t):cn=a,sc.current=null}function kv(t){var a=t;do{var f=a.alternate;if(t=a.return,a.flags&32768){if(f=hk(f,a),f!==null){f.flags&=32767,cn=f;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_n=6,cn=null;return}}else if(f=ck(f,a,ci),f!==null){cn=f;return}if(a=a.sibling,a!==null){cn=a;return}cn=a=t}while(a!==null);_n===0&&(_n=5)}function fa(t,a,f){var u=Fe,m=wi.transition;try{wi.transition=null,Fe=1,wk(t,a,f,u)}finally{wi.transition=m,Fe=u}return null}function wk(t,a,f,u){do hs();while(dr!==null);if(je&6)throw Error(n(327));f=t.finishedWork;var m=t.finishedLanes;if(f===null)return null;if(t.finishedWork=null,t.finishedLanes=0,f===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=f.lanes|f.childLanes;if(He(t,p),t===Cn&&(cn=Cn=null,Nn=0),!(f.subtreeFlags&2064)&&!(f.flags&2064)||El||(El=!0,Sv(mi,function(){return hs(),null})),p=(f.flags&15990)!==0,f.subtreeFlags&15990||p){p=wi.transition,wi.transition=null;var k=Fe;Fe=1;var C=je;je|=4,sc.current=null,vk(t,f),dv(f,t),z_(vu),Zt=!!mu,vu=mu=null,t.current=f,pk(f),Xd(),je=C,Fe=k,wi.transition=p}else t.current=f;if(El&&(El=!1,dr=t,Sl=m),p=t.pendingLanes,p===0&&(lr=null),If(f.stateNode),ti(t,Ge()),a!==null)for(u=t.onRecoverableError,f=0;f<a.length;f++)m=a[f],u(m.value,{componentStack:m.stack,digest:m.digest});if(bl)throw bl=!1,t=lc,lc=null,t;return Sl&1&&t.tag!==0&&hs(),p=t.pendingLanes,p&1?t===dc?Vo++:(Vo=0,dc=t):Vo=0,ar(),null}function hs(){if(dr!==null){var t=Yt(Sl),a=wi.transition,f=Fe;try{if(wi.transition=null,Fe=16>t?16:t,dr===null)var u=!1;else{if(t=dr,dr=null,Sl=0,je&6)throw Error(n(331));var m=je;for(je|=4,le=t.current;le!==null;){var p=le,k=p.child;if(le.flags&16){var C=p.deletions;if(C!==null){for(var x=0;x<C.length;x++){var $=C[x];for(le=$;le!==null;){var X=le;switch(X.tag){case 0:case 11:case 15:Mo(8,X,p)}var Z=X.child;if(Z!==null)Z.return=X,le=Z;else for(;le!==null;){X=le;var Y=X.sibling,se=X.return;if(av(X),X===$){le=null;break}if(Y!==null){Y.return=se,le=Y;break}le=se}}}var de=p.alternate;if(de!==null){var ue=de.child;if(ue!==null){de.child=null;do{var ln=ue.sibling;ue.sibling=null,ue=ln}while(ue!==null)}}le=p}}if(p.subtreeFlags&2064&&k!==null)k.return=p,le=k;else e:for(;le!==null;){if(p=le,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Mo(9,p,p.return)}var j=p.sibling;if(j!==null){j.return=p.return,le=j;break e}le=p.return}}var F=t.current;for(le=F;le!==null;){k=le;var z=k.child;if(k.subtreeFlags&2064&&z!==null)z.return=k,le=z;else e:for(k=F;le!==null;){if(C=le,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:_l(9,C)}}catch(ce){sn(C,C.return,ce)}if(C===k){le=null;break e}var ne=C.sibling;if(ne!==null){ne.return=C.return,le=ne;break e}le=C.return}}if(je=m,ar(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Hr,t)}catch{}u=!0}return u}finally{Fe=f,wi.transition=a}}return!1}function wv(t,a,f){a=ls(f,a),a=jm(t,a,1),t=or(t,a,1),a=Jn(),t!==null&&(Qt(t,1,a),ti(t,a))}function sn(t,a,f){if(t.tag===3)wv(t,t,f);else for(;a!==null;){if(a.tag===3){wv(a,t,f);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){t=ls(f,t),t=Bm(a,t,1),a=or(a,t,1),t=Jn(),a!==null&&(Qt(a,1,t),ti(a,t));break}}a=a.return}}function bk(t,a,f){var u=t.pingCache;u!==null&&u.delete(a),a=Jn(),t.pingedLanes|=t.suspendedLanes&f,Cn===t&&(Nn&f)===f&&(_n===4||_n===3&&(Nn&130023424)===Nn&&500>Ge()-fc?oa(t,0):oc|=f),ti(t,a)}function bv(t,a){a===0&&(t.mode&1?(a=La,La<<=1,!(La&130023424)&&(La=4194304)):a=1);var f=Jn();t=It(t,a),t!==null&&(Qt(t,a,f),ti(t,f))}function Ek(t){var a=t.memoizedState,f=0;a!==null&&(f=a.retryLane),bv(t,f)}function Sk(t,a){var f=0;switch(t.tag){case 13:var u=t.stateNode,m=t.memoizedState;m!==null&&(f=m.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(a),bv(t,f)}var Ev;Ev=function(t,a,f){if(t!==null)if(t.memoizedProps!==a.pendingProps||Zn.current)ni=!0;else{if(!(t.lanes&f)&&!(a.flags&128))return ni=!1,uk(t,a,f);ni=!!(t.flags&131072)}else ni=!1,Ze&&a.flags&1048576&&im(a,il,a.index);switch(a.lanes=0,a.tag){case 2:var u=a.type;gl(t,a),t=a.pendingProps;var m=ns(a,Vn.current);os(a,f),m=ju(null,a,u,t,m,f);var p=Bu();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,ei(u)?(p=!0,Zf(a)):p=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Nu(a),m.updater=vl,a.stateNode=m,m._reactInternals=a,Wu(a,u,t,f),a=Ju(null,a,u,!0,p,f)):(a.tag=0,Ze&&p&&bu(a),Qn(null,a,m,f),a=a.child),a;case 16:u=a.elementType;e:{switch(gl(t,a),t=a.pendingProps,m=u._init,u=m(u._payload),a.type=u,m=a.tag=Ck(u),t=Vi(u,t),m){case 0:a=Qu(null,a,u,t,f);break e;case 1:a=Qm(null,a,u,t,f);break e;case 11:a=qm(null,a,u,t,f);break e;case 14:a=Hm(null,a,u,Vi(u.type,t),f);break e}throw Error(n(306,u,""))}return a;case 0:return u=a.type,m=a.pendingProps,m=a.elementType===u?m:Vi(u,m),Qu(t,a,u,m,f);case 1:return u=a.type,m=a.pendingProps,m=a.elementType===u?m:Vi(u,m),Qm(t,a,u,m,f);case 3:e:{if(Jm(a),t===null)throw Error(n(387));u=a.pendingProps,p=a.memoizedState,m=p.element,um(t,a),fl(a,u,null,f);var k=a.memoizedState;if(u=k.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){m=ls(Error(n(423)),a),a=Ym(t,a,u,f,m);break e}else if(u!==m){m=ls(Error(n(424)),a),a=Ym(t,a,u,f,m);break e}else for(ui=ir(a.stateNode.containerInfo.firstChild),di=a,Ze=!0,Oi=null,f=lm(a,null,u,f),a.child=f;f;)f.flags=f.flags&-3|4096,f=f.sibling;else{if(rs(),u===m){a=Pt(t,a,f);break e}Qn(t,a,u,f)}a=a.child}return a;case 5:return mm(a),t===null&&Tu(a),u=a.type,m=a.pendingProps,p=t!==null?t.memoizedProps:null,k=m.children,pu(u,m)?k=null:p!==null&&pu(u,p)&&(a.flags|=32),Km(t,a),Qn(t,a,k,f),a.child;case 6:return t===null&&Tu(a),null;case 13:return Xm(t,a,f);case 4:return Du(a,a.stateNode.containerInfo),u=a.pendingProps,t===null?a.child=as(a,null,u,f):Qn(t,a,u,f),a.child;case 11:return u=a.type,m=a.pendingProps,m=a.elementType===u?m:Vi(u,m),qm(t,a,u,m,f);case 7:return Qn(t,a,a.pendingProps,f),a.child;case 8:return Qn(t,a,a.pendingProps.children,f),a.child;case 12:return Qn(t,a,a.pendingProps.children,f),a.child;case 10:e:{if(u=a.type._context,m=a.pendingProps,p=a.memoizedProps,k=m.value,Ke(al,u._currentValue),u._currentValue=k,p!==null)if(Li(p.value,k)){if(p.children===m.children&&!Zn.current){a=Pt(t,a,f);break e}}else for(p=a.child,p!==null&&(p.return=a);p!==null;){var C=p.dependencies;if(C!==null){k=p.child;for(var x=C.firstContext;x!==null;){if(x.context===u){if(p.tag===1){x=Rt(-1,f&-f),x.tag=2;var $=p.updateQueue;if($!==null){$=$.shared;var X=$.pending;X===null?x.next=x:(x.next=X.next,X.next=x),$.pending=x}}p.lanes|=f,x=p.alternate,x!==null&&(x.lanes|=f),Au(p.return,f,a),C.lanes|=f;break}x=x.next}}else if(p.tag===10)k=p.type===a.type?null:p.child;else if(p.tag===18){if(k=p.return,k===null)throw Error(n(341));k.lanes|=f,C=k.alternate,C!==null&&(C.lanes|=f),Au(k,f,a),k=p.sibling}else k=p.child;if(k!==null)k.return=p;else for(k=p;k!==null;){if(k===a){k=null;break}if(p=k.sibling,p!==null){p.return=k.return,k=p;break}k=k.return}p=k}Qn(t,a,m.children,f),a=a.child}return a;case 9:return m=a.type,u=a.pendingProps.children,os(a,f),m=_i(m),u=u(m),a.flags|=1,Qn(t,a,u,f),a.child;case 14:return u=a.type,m=Vi(u,a.pendingProps),m=Vi(u.type,m),Hm(t,a,u,m,f);case 15:return Wm(t,a,a.type,a.pendingProps,f);case 17:return u=a.type,m=a.pendingProps,m=a.elementType===u?m:Vi(u,m),gl(t,a),a.tag=1,ei(u)?(t=!0,Zf(a)):t=!1,os(a,f),Om(a,u,m),Wu(a,u,m,f),Ju(null,a,u,!0,t,f);case 19:return ev(t,a,f);case 22:return Gm(t,a,f)}throw Error(n(156,a.tag))};function Sv(t,a){return Fa(t,a)}function Tk(t,a,f,u){this.tag=t,this.key=f,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(t,a,f,u){return new Tk(t,a,f,u)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ck(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===L)return 11;if(t===an)return 14}return 2}function hr(t,a){var f=t.alternate;return f===null?(f=bi(t.tag,a,t.key,t.mode),f.elementType=t.elementType,f.type=t.type,f.stateNode=t.stateNode,f.alternate=t,t.alternate=f):(f.pendingProps=a,f.type=t.type,f.flags=0,f.subtreeFlags=0,f.deletions=null),f.flags=t.flags&14680064,f.childLanes=t.childLanes,f.lanes=t.lanes,f.child=t.child,f.memoizedProps=t.memoizedProps,f.memoizedState=t.memoizedState,f.updateQueue=t.updateQueue,a=t.dependencies,f.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},f.sibling=t.sibling,f.index=t.index,f.ref=t.ref,f}function Rl(t,a,f,u,m,p){var k=2;if(u=t,typeof t=="function")pc(t)&&(k=1);else if(typeof t=="string")k=5;else e:switch(t){case D:return la(f.children,m,p,a);case T:k=8,m|=8;break;case S:return t=bi(12,f,a,m|2),t.elementType=S,t.lanes=p,t;case R:return t=bi(13,f,a,m),t.elementType=R,t.lanes=p,t;case Qe:return t=bi(19,f,a,m),t.elementType=Qe,t.lanes=p,t;case Ie:return Pl(f,m,p,a);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:k=10;break e;case N:k=9;break e;case L:k=11;break e;case an:k=14;break e;case mn:k=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return a=bi(k,f,a,m),a.elementType=t,a.type=u,a.lanes=p,a}function la(t,a,f,u){return t=bi(7,t,u,a),t.lanes=f,t}function Pl(t,a,f,u){return t=bi(22,t,u,a),t.elementType=Ie,t.lanes=f,t.stateNode={isHidden:!1},t}function gc(t,a,f){return t=bi(6,t,null,a),t.lanes=f,t}function yc(t,a,f){return a=bi(4,t.children!==null?t.children:[],t.key,a),a.lanes=f,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}function Ik(t,a,f,u,m){this.tag=a,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=u,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function _c(t,a,f,u,m,p,k,C,x){return t=new Ik(t,a,f,C,x),a===1?(a=1,p===!0&&(a|=8)):a=0,p=bi(3,null,null,a),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:f,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(p),t}function Rk(t,a,f){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:be,key:u==null?null:""+u,children:t,containerInfo:a,implementation:f}}function Tv(t){if(!t)return rr;t=t._reactInternals;e:{if(Pi(t)!==t||t.tag!==1)throw Error(n(170));var a=t;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(ei(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(t.tag===1){var f=t.type;if(ei(f))return Z1(t,f,a)}return a}function Cv(t,a,f,u,m,p,k,C,x){return t=_c(f,u,!0,t,m,p,k,C,x),t.context=Tv(null),f=t.current,u=Jn(),m=ur(f),p=Rt(u,m),p.callback=a??null,or(f,p,m),t.current.lanes=m,Qt(t,m,u),ti(t,u),t}function Al(t,a,f,u){var m=a.current,p=Jn(),k=ur(m);return f=Tv(f),a.context===null?a.context=f:a.pendingContext=f,a=Rt(p,k),a.payload={element:t},u=u===void 0?null:u,u!==null&&(a.callback=u),t=or(m,a,k),t!==null&&(zi(t,m,k,p),ol(t,m,k)),k}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iv(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var f=t.retryLane;t.retryLane=f!==0&&f<a?f:a}}function kc(t,a){Iv(t,a),(t=t.alternate)&&Iv(t,a)}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function wc(t){this._internalRoot=t}Nl.prototype.render=wc.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(n(409));Al(t,a,null,null)},Nl.prototype.unmount=wc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;sa(function(){Al(null,t,null,null)}),a[Et]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var a=Nf();t={blockedOn:null,target:t,priority:a};for(var f=0;f<Qi.length&&a!==0&&a<Qi[f].priority;f++);Qi.splice(f,0,t),f===0&&Mf(t)}};function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pv(){}function Pk(t,a,f,u,m){if(m){if(typeof u=="function"){var p=u;u=function(){var $=xl(k);p.call($)}}var k=Cv(a,u,t,0,null,!1,!1,"",Pv);return t._reactRootContainer=k,t[Et]=k.current,bo(t.nodeType===8?t.parentNode:t),sa(),k}for(;m=t.lastChild;)t.removeChild(m);if(typeof u=="function"){var C=u;u=function(){var $=xl(x);C.call($)}}var x=_c(t,0,!1,null,null,!1,!1,"",Pv);return t._reactRootContainer=x,t[Et]=x.current,bo(t.nodeType===8?t.parentNode:t),sa(function(){Al(a,x,f,u)}),x}function Fl(t,a,f,u,m){var p=f._reactRootContainer;if(p){var k=p;if(typeof m=="function"){var C=m;m=function(){var x=xl(k);C.call(x)}}Al(a,k,t,m)}else k=Pk(f,a,t,m,u);return xl(k)}Af=function(t){switch(t.tag){case 3:var a=t.stateNode;if(a.current.memoizedState.isDehydrated){var f=Gt(a.pendingLanes);f!==0&&(Jt(a,f|1),ti(a,Ge()),!(je&6)&&(cs=Ge()+500,ar()))}break;case 13:sa(function(){var u=It(t,1);if(u!==null){var m=Jn();zi(u,t,1,m)}}),kc(t,1)}},Oa=function(t){if(t.tag===13){var a=It(t,134217728);if(a!==null){var f=Jn();zi(a,t,134217728,f)}kc(t,134217728)}},xf=function(t){if(t.tag===13){var a=ur(t),f=It(t,a);if(f!==null){var u=Jn();zi(f,t,a,u)}kc(t,a)}},Nf=function(){return Fe},Df=function(t,a){var f=Fe;try{return Fe=t,a()}finally{Fe=f}},Ra=function(t,a,f){switch(a){case"input":if(Ws(t,f),a=f.name,f.type==="radio"&&a!=null){for(f=t;f.parentNode;)f=f.parentNode;for(f=f.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<f.length;a++){var u=f[a];if(u!==t&&u.form===t.form){var m=Yf(u);if(!m)throw Error(n(90));ba(u),Ws(u,m)}}}break;case"textarea":Ca(t,f);break;case"select":a=f.value,a!=null&&vt(t,!!f.multiple,a,!1)}},Br=hc,io=sa;var Ak={usingClientEntryPoint:!1,Events:[To,Za,Yf,Gi,no,hc]},jo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xk={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ao(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Hr=Ml.inject(xk),si=Ml}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ak,ri.createPortal=function(t,a){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bc(a))throw Error(n(200));return Rk(t,a,null,f)},ri.createRoot=function(t,a){if(!bc(t))throw Error(n(299));var f=!1,u="",m=Rv;return a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=_c(t,1,!1,null,null,f,!1,u,m),t[Et]=a.current,bo(t.nodeType===8?t.parentNode:t),new wc(a)},ri.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ao(a),t=t===null?null:t.stateNode,t},ri.flushSync=function(t){return sa(t)},ri.hydrate=function(t,a,f){if(!Dl(a))throw Error(n(200));return Fl(null,t,a,!0,f)},ri.hydrateRoot=function(t,a,f){if(!bc(t))throw Error(n(405));var u=f!=null&&f.hydratedSources||null,m=!1,p="",k=Rv;if(f!=null&&(f.unstable_strictMode===!0&&(m=!0),f.identifierPrefix!==void 0&&(p=f.identifierPrefix),f.onRecoverableError!==void 0&&(k=f.onRecoverableError)),a=Cv(a,null,t,1,f??null,m,!1,p,k),t[Et]=a.current,bo(t),u)for(t=0;t<u.length;t++)f=u[t],m=f._getVersion,m=m(f._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[f,m]:a.mutableSourceEagerHydrationData.push(f,m);return new Nl(a)},ri.render=function(t,a,f){if(!Dl(a))throw Error(n(200));return Fl(null,t,a,!1,f)},ri.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(n(40));return t._reactRootContainer?(sa(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Et]=null})}),!0):!1},ri.unstable_batchedUpdates=hc,ri.unstable_renderSubtreeIntoContainer=function(t,a,f,u){if(!Dl(f))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Fl(t,a,f,!1,u)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var Ov;function jk(){if(Ov)return Tc.exports;Ov=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Tc.exports=Vk(),Tc.exports}var Vv;function Bk(){if(Vv)return Ll;Vv=1;var i=jk();return Ll.createRoot=i.createRoot,Ll.hydrateRoot=i.hydrateRoot,Ll}var zk=Bk();const $k=Ch(zk);var zo={},jv;function Uk(){if(jv)return zo;jv=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.parse=d,zo.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function d(w,I){const A=new o,B=w.length;if(B<2)return A;const M=(I==null?void 0:I.decode)||_;let q=0;do{const W=w.indexOf("=",q);if(W===-1)break;const re=w.indexOf(";",q),ae=re===-1?B:re;if(W>ae){q=w.lastIndexOf(";",W-1)+1;continue}const we=c(w,q,W),be=h(w,W,we),D=w.slice(we,be);if(A[D]===void 0){let T=c(w,W+1,ae),S=h(w,ae,T);const P=M(w.slice(T,S));A[D]=P}q=ae+1}while(q<B);return A}function c(w,I,A){do{const B=w.charCodeAt(I);if(B!==32&&B!==9)return I}while(++I<A);return A}function h(w,I,A){for(;I>A;){const B=w.charCodeAt(--I);if(B!==32&&B!==9)return I+1}return A}function g(w,I,A){const B=(A==null?void 0:A.encode)||encodeURIComponent;if(!i.test(w))throw new TypeError(`argument name is invalid: ${w}`);const M=B(I);if(!e.test(M))throw new TypeError(`argument val is invalid: ${I}`);let q=w+"="+M;if(!A)return q;if(A.maxAge!==void 0){if(!Number.isInteger(A.maxAge))throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);q+="; Max-Age="+A.maxAge}if(A.domain){if(!n.test(A.domain))throw new TypeError(`option domain is invalid: ${A.domain}`);q+="; Domain="+A.domain}if(A.path){if(!r.test(A.path))throw new TypeError(`option path is invalid: ${A.path}`);q+="; Path="+A.path}if(A.expires){if(!E(A.expires)||!Number.isFinite(A.expires.valueOf()))throw new TypeError(`option expires is invalid: ${A.expires}`);q+="; Expires="+A.expires.toUTCString()}if(A.httpOnly&&(q+="; HttpOnly"),A.secure&&(q+="; Secure"),A.partitioned&&(q+="; Partitioned"),A.priority)switch(typeof A.priority=="string"?A.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${A.priority}`)}if(A.sameSite)switch(typeof A.sameSite=="string"?A.sameSite.toLowerCase():A.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${A.sameSite}`)}return q}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return s.call(w)==="[object Date]"}return zo}Uk();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bv="popstate";function qk(i={}){function e(r,s){let{pathname:o,search:d,hash:c}=r.location;return Qc("",{pathname:o,search:d,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Xo(s)}return Wk(e,n,null,i)}function en(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function qi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hk(){return Math.random().toString(36).substring(2,10)}function zv(i,e){return{usr:i.state,key:i.key,idx:e}}function Qc(i,e,n=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Ls(e):e,state:n,key:e&&e.key||r||Hk()}}function Xo({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function Ls(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function Wk(i,e,n,r={}){let{window:s=document.defaultView,v5Compat:o=!1}=r,d=s.history,c="POP",h=null,g=_();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function _(){return(d.state||{idx:null}).idx}function E(){c="POP";let M=_(),q=M==null?null:M-g;g=M,h&&h({action:c,location:B.location,delta:q})}function w(M,q){c="PUSH";let W=Qc(B.location,M,q);g=_()+1;let re=zv(W,g),ae=B.createHref(W);try{d.pushState(re,"",ae)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;s.location.assign(ae)}o&&h&&h({action:c,location:B.location,delta:1})}function I(M,q){c="REPLACE";let W=Qc(B.location,M,q);g=_();let re=zv(W,g),ae=B.createHref(W);d.replaceState(re,"",ae),o&&h&&h({action:c,location:B.location,delta:0})}function A(M){let q=s.location.origin!=="null"?s.location.origin:s.location.href,W=typeof M=="string"?M:Xo(M);return W=W.replace(/ $/,"%20"),en(q,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,q)}let B={get action(){return c},get location(){return i(s,d)},listen(M){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(Bv,E),h=M,()=>{s.removeEventListener(Bv,E),h=null}},createHref(M){return e(s,M)},createURL:A,encodeLocation(M){let q=A(M);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:I,go(M){return d.go(M)}};return B}function xg(i,e,n="/"){return Gk(i,e,n,!1)}function Gk(i,e,n,r){let s=typeof e=="string"?Ls(e):e,o=Ir(s.pathname||"/",n);if(o==null)return null;let d=Ng(i);Kk(d);let c=null;for(let h=0;c==null&&h<d.length;++h){let g=aw(o);c=tw(d[h],g,r)}return c}function Ng(i,e=[],n=[],r=""){let s=(o,d,c)=>{let h={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:d,route:o};h.relativePath.startsWith("/")&&(en(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let g=Ot([r,h.relativePath]),_=n.concat(h);o.children&&o.children.length>0&&(en(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Ng(o.children,e,_,g)),!(o.path==null&&!o.index)&&e.push({path:g,score:nw(g,o.index),routesMeta:_})};return i.forEach((o,d)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))s(o,d);else for(let h of Dg(o.path))s(o,d,h)}),e}function Dg(i){let e=i.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let d=Dg(r.join("/")),c=[];return c.push(...d.map(h=>h===""?o:[o,h].join("/"))),s&&c.push(...d),c.map(h=>i.startsWith("/")&&h===""?"/":h)}function Kk(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:iw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Qk=/^:[\w-]+$/,Jk=3,Yk=2,Xk=1,Zk=10,ew=-2,$v=i=>i==="*";function nw(i,e){let n=i.split("/"),r=n.length;return n.some($v)&&(r+=ew),e&&(r+=Yk),n.filter(s=>!$v(s)).reduce((s,o)=>s+(Qk.test(o)?Jk:o===""?Xk:Zk),r)}function iw(i,e){return i.length===e.length&&i.slice(0,-1).every((r,s)=>r===e[s])?i[i.length-1]-e[e.length-1]:0}function tw(i,e,n=!1){let{routesMeta:r}=i,s={},o="/",d=[];for(let c=0;c<r.length;++c){let h=r[c],g=c===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",E=ad({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},_),w=h.route;if(!E&&g&&n&&!r[r.length-1].route.index&&(E=ad({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},_)),!E)return null;Object.assign(s,E.params),d.push({params:s,pathname:Ot([o,E.pathname]),pathnameBase:lw(Ot([o,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(o=Ot([o,E.pathnameBase]))}return d}function ad(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,r]=rw(i.path,i.caseSensitive,i.end),s=e.match(n);if(!s)return null;let o=s[0],d=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((g,{paramName:_,isOptional:E},w)=>{if(_==="*"){let A=c[w]||"";d=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const I=c[w];return E&&!I?g[_]=void 0:g[_]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:o,pathnameBase:d,pattern:i}}function rw(i,e=!1,n=!0){qi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],s="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,c,h)=>(r.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),s+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":i!==""&&i!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function aw(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qi(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Ir(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=i.charAt(n);return r&&r!=="/"?null:i.slice(n)||"/"}function sw(i,e="/"){let{pathname:n,search:r="",hash:s=""}=typeof i=="string"?Ls(i):i;return{pathname:n?n.startsWith("/")?n:ow(n,e):e,search:dw(r),hash:uw(s)}}function ow(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Rc(i,e,n,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fw(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rh(i){let e=fw(i);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function Ph(i,e,n,r=!1){let s;typeof i=="string"?s=Ls(i):(s={...i},en(!s.pathname||!s.pathname.includes("?"),Rc("?","pathname","search",s)),en(!s.pathname||!s.pathname.includes("#"),Rc("#","pathname","hash",s)),en(!s.search||!s.search.includes("#"),Rc("#","search","hash",s)));let o=i===""||s.pathname==="",d=o?"/":s.pathname,c;if(d==null)c=n;else{let E=e.length-1;if(!r&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),E-=1;s.pathname=w.join("/")}c=E>=0?e[E]:"/"}let h=sw(s,c),g=d&&d!=="/"&&d.endsWith("/"),_=(o||d===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(g||_)&&(h.pathname+="/"),h}var Ot=i=>i.join("/").replace(/\/\/+/g,"/"),lw=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),dw=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,uw=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function cw(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Fg=["POST","PUT","PATCH","DELETE"];new Set(Fg);var hw=["GET",...Fg];new Set(hw);var Os=U.createContext(null);Os.displayName="DataRouter";var Ad=U.createContext(null);Ad.displayName="DataRouterState";var Mg=U.createContext({isTransitioning:!1});Mg.displayName="ViewTransition";var mw=U.createContext(new Map);mw.displayName="Fetchers";var vw=U.createContext(null);vw.displayName="Await";var Hi=U.createContext(null);Hi.displayName="Navigation";var df=U.createContext(null);df.displayName="Location";var ct=U.createContext({outlet:null,matches:[],isDataRoute:!1});ct.displayName="Route";var Ah=U.createContext(null);Ah.displayName="RouteError";function pw(i,{relative:e}={}){en(Vs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=U.useContext(Hi),{hash:s,pathname:o,search:d}=uf(i,{relative:e}),c=o;return n!=="/"&&(c=o==="/"?n:Ot([n,o])),r.createHref({pathname:c,search:d,hash:s})}function Vs(){return U.useContext(df)!=null}function Dr(){return en(Vs(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(df).location}var Lg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Og(i){U.useContext(Hi).static||U.useLayoutEffect(i)}function Vg(){let{isDataRoute:i}=U.useContext(ct);return i?Pw():gw()}function gw(){en(Vs(),"useNavigate() may be used only in the context of a <Router> component.");let i=U.useContext(Os),{basename:e,navigator:n}=U.useContext(Hi),{matches:r}=U.useContext(ct),{pathname:s}=Dr(),o=JSON.stringify(Rh(r)),d=U.useRef(!1);return Og(()=>{d.current=!0}),U.useCallback((h,g={})=>{if(qi(d.current,Lg),!d.current)return;if(typeof h=="number"){n.go(h);return}let _=Ph(h,JSON.parse(o),s,g.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ot([e,_.pathname])),(g.replace?n.replace:n.push)(_,g.state,g)},[e,n,o,s,i])}U.createContext(null);function uf(i,{relative:e}={}){let{matches:n}=U.useContext(ct),{pathname:r}=Dr(),s=JSON.stringify(Rh(n));return U.useMemo(()=>Ph(i,JSON.parse(s),r,e==="path"),[i,s,r,e])}function yw(i,e){return jg(i,e)}function jg(i,e,n,r){var q;en(Vs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=U.useContext(Hi),{matches:o}=U.useContext(ct),d=o[o.length-1],c=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let W=_&&_.path||"";Bg(h,!_||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let E=Dr(),w;if(e){let W=typeof e=="string"?Ls(e):e;en(g==="/"||((q=W.pathname)==null?void 0:q.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${W.pathname}" was given in the \`location\` prop.`),w=W}else w=E;let I=w.pathname||"/",A=I;if(g!=="/"){let W=g.replace(/^\//,"").split("/");A="/"+I.replace(/^\//,"").split("/").slice(W.length).join("/")}let B=xg(i,{pathname:A});qi(_||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),qi(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Ew(B&&B.map(W=>Object.assign({},W,{params:Object.assign({},c,W.params),pathname:Ot([g,s.encodeLocation?s.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?g:Ot([g,s.encodeLocation?s.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),o,n,r);return e&&M?U.createElement(df.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},M):M}function _w(){let i=Rw(),e=cw(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:o},"ErrorBoundary")," or"," ",U.createElement("code",{style:o},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:s},n):null,d)}var kw=U.createElement(_w,null),ww=class extends U.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?U.createElement(ct.Provider,{value:this.props.routeContext},U.createElement(Ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bw({routeContext:i,match:e,children:n}){let r=U.useContext(Os);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(ct.Provider,{value:i},n)}function Ew(i,e=[],n=null,r=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let s=i,o=n==null?void 0:n.errors;if(o!=null){let h=s.findIndex(g=>g.route.id&&(o==null?void 0:o[g.route.id])!==void 0);en(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let d=!1,c=-1;if(n)for(let h=0;h<s.length;h++){let g=s[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=h),g.route.id){let{loaderData:_,errors:E}=n,w=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||w){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,g,_)=>{let E,w=!1,I=null,A=null;n&&(E=o&&g.route.id?o[g.route.id]:void 0,I=g.route.errorElement||kw,d&&(c<0&&_===0?(Bg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):c===_&&(w=!0,A=g.route.hydrateFallbackElement||null)));let B=e.concat(s.slice(0,_+1)),M=()=>{let q;return E?q=I:w?q=A:g.route.Component?q=U.createElement(g.route.Component,null):g.route.element?q=g.route.element:q=h,U.createElement(bw,{match:g,routeContext:{outlet:h,matches:B,isDataRoute:n!=null},children:q})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?U.createElement(ww,{location:n.location,revalidation:n.revalidation,component:I,error:E,children:M(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):M()},null)}function xh(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sw(i){let e=U.useContext(Os);return en(e,xh(i)),e}function Tw(i){let e=U.useContext(Ad);return en(e,xh(i)),e}function Cw(i){let e=U.useContext(ct);return en(e,xh(i)),e}function Nh(i){let e=Cw(i),n=e.matches[e.matches.length-1];return en(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function Iw(){return Nh("useRouteId")}function Rw(){var r;let i=U.useContext(Ah),e=Tw("useRouteError"),n=Nh("useRouteError");return i!==void 0?i:(r=e.errors)==null?void 0:r[n]}function Pw(){let{router:i}=Sw("useNavigate"),e=Nh("useNavigate"),n=U.useRef(!1);return Og(()=>{n.current=!0}),U.useCallback(async(s,o={})=>{qi(n.current,Lg),n.current&&(typeof s=="number"?i.navigate(s):await i.navigate(s,{fromRouteId:e,...o}))},[i,e])}var Uv={};function Bg(i,e,n){!e&&!Uv[i]&&(Uv[i]=!0,qi(!1,n))}U.memo(Aw);function Aw({routes:i,future:e,state:n}){return jg(i,void 0,n,e)}function ms({to:i,replace:e,state:n,relative:r}){en(Vs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=U.useContext(Hi);qi(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=U.useContext(ct),{pathname:d}=Dr(),c=Vg(),h=Ph(i,Rh(o),d,r==="path"),g=JSON.stringify(h);return U.useEffect(()=>{c(JSON.parse(g),{replace:e,state:n,relative:r})},[c,g,r,e,n]),null}function vs(i){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xw({basename:i="/",children:e=null,location:n,navigationType:r="POP",navigator:s,static:o=!1}){en(!Vs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=i.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:d,navigator:s,static:o,future:{}}),[d,s,o]);typeof n=="string"&&(n=Ls(n));let{pathname:h="/",search:g="",hash:_="",state:E=null,key:w="default"}=n,I=U.useMemo(()=>{let A=Ir(h,d);return A==null?null:{location:{pathname:A,search:g,hash:_,state:E,key:w},navigationType:r}},[d,h,g,_,E,w,r]);return qi(I!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:U.createElement(Hi.Provider,{value:c},U.createElement(df.Provider,{children:e,value:I}))}function Nw({children:i,location:e}){return yw(Jc(i),e)}function Jc(i,e=[]){let n=[];return U.Children.forEach(i,(r,s)=>{if(!U.isValidElement(r))return;let o=[...e,s];if(r.type===U.Fragment){n.push.apply(n,Jc(r.props.children,o));return}en(r.type===vs,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Jc(r.props.children,o)),n.push(d)}),n}var Wl="get",Gl="application/x-www-form-urlencoded";function xd(i){return i!=null&&typeof i.tagName=="string"}function Dw(i){return xd(i)&&i.tagName.toLowerCase()==="button"}function Fw(i){return xd(i)&&i.tagName.toLowerCase()==="form"}function Mw(i){return xd(i)&&i.tagName.toLowerCase()==="input"}function Lw(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ow(i,e){return i.button===0&&(!e||e==="_self")&&!Lw(i)}var Ol=null;function Vw(){if(Ol===null)try{new FormData(document.createElement("form"),0),Ol=!1}catch{Ol=!0}return Ol}var jw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pc(i){return i!=null&&!jw.has(i)?(qi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`),null):i}function Bw(i,e){let n,r,s,o,d;if(Fw(i)){let c=i.getAttribute("action");r=c?Ir(c,e):null,n=i.getAttribute("method")||Wl,s=Pc(i.getAttribute("enctype"))||Gl,o=new FormData(i)}else if(Dw(i)||Mw(i)&&(i.type==="submit"||i.type==="image")){let c=i.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=i.getAttribute("formaction")||c.getAttribute("action");if(r=h?Ir(h,e):null,n=i.getAttribute("formmethod")||c.getAttribute("method")||Wl,s=Pc(i.getAttribute("formenctype"))||Pc(c.getAttribute("enctype"))||Gl,o=new FormData(c,i),!Vw()){let{name:g,type:_,value:E}=i;if(_==="image"){let w=g?`${g}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else g&&o.append(g,E)}}else{if(xd(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Wl,r=null,s=Gl,d=i}return o&&s==="text/plain"&&(d=o,o=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:o,body:d}}function Dh(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function zw(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $w(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Uw(i,e,n){let r=await Promise.all(i.map(async s=>{let o=e.routes[s.route.id];if(o){let d=await zw(o,n);return d.links?d.links():[]}return[]}));return Gw(r.flat(1).filter($w).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function qv(i,e,n,r,s,o){let d=(h,g)=>n[g]?h.route.id!==n[g].route.id:!0,c=(h,g)=>{var _;return n[g].pathname!==h.pathname||((_=n[g].route.path)==null?void 0:_.endsWith("*"))&&n[g].params["*"]!==h.params["*"]};return o==="assets"?e.filter((h,g)=>d(h,g)||c(h,g)):o==="data"?e.filter((h,g)=>{var E;let _=r.routes[h.route.id];if(!_||!_.hasLoader)return!1;if(d(h,g)||c(h,g))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((E=n[0])==null?void 0:E.params)||{},nextUrl:new URL(i,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function qw(i,e){return Hw(i.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let s=[r.module];return r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function Hw(i){return[...new Set(i)]}function Ww(i){let e={},n=Object.keys(i).sort();for(let r of n)e[r]=i[r];return e}function Gw(i,e){let n=new Set;return new Set(e),i.reduce((r,s)=>{let o=JSON.stringify(Ww(s));return n.has(o)||(n.add(o),r.push({key:o,link:s})),r},[])}function Kw(i){let e=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Qw(){let i=U.useContext(Os);return Dh(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Jw(){let i=U.useContext(Ad);return Dh(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Fh=U.createContext(void 0);Fh.displayName="FrameworkContext";function zg(){let i=U.useContext(Fh);return Dh(i,"You must render this element inside a <HydratedRouter> element"),i}function Yw(i,e){let n=U.useContext(Fh),[r,s]=U.useState(!1),[o,d]=U.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:g,onMouseLeave:_,onTouchStart:E}=e,w=U.useRef(null);U.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let B=q=>{q.forEach(W=>{d(W.isIntersecting)})},M=new IntersectionObserver(B,{threshold:.5});return w.current&&M.observe(w.current),()=>{M.disconnect()}}},[i]),U.useEffect(()=>{if(r){let B=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(B)}}},[r]);let I=()=>{s(!0)},A=()=>{s(!1),d(!1)};return n?i!=="intent"?[o,w,{}]:[o,w,{onFocus:$o(c,I),onBlur:$o(h,A),onMouseEnter:$o(g,I),onMouseLeave:$o(_,A),onTouchStart:$o(E,I)}]:[!1,w,{}]}function $o(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function Xw({page:i,...e}){let{router:n}=Qw(),r=U.useMemo(()=>xg(n.routes,i,n.basename),[n.routes,i,n.basename]);return r?U.createElement(e2,{page:i,matches:r,...e}):null}function Zw(i){let{manifest:e,routeModules:n}=zg(),[r,s]=U.useState([]);return U.useEffect(()=>{let o=!1;return Uw(i,e,n).then(d=>{o||s(d)}),()=>{o=!0}},[i,e,n]),r}function e2({page:i,matches:e,...n}){let r=Dr(),{manifest:s,routeModules:o}=zg(),{loaderData:d,matches:c}=Jw(),h=U.useMemo(()=>qv(i,e,c,s,r,"data"),[i,e,c,s,r]),g=U.useMemo(()=>qv(i,e,c,s,r,"assets"),[i,e,c,s,r]),_=U.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let I=new Set,A=!1;if(e.forEach(M=>{var W;let q=s.routes[M.route.id];!q||!q.hasLoader||(!h.some(re=>re.route.id===M.route.id)&&M.route.id in d&&((W=o[M.route.id])!=null&&W.shouldRevalidate)||q.hasClientLoader?A=!0:I.add(M.route.id))}),I.size===0)return[];let B=Kw(i);return A&&I.size>0&&B.searchParams.set("_routes",e.filter(M=>I.has(M.route.id)).map(M=>M.route.id).join(",")),[B.pathname+B.search]},[d,r,s,h,e,i,o]),E=U.useMemo(()=>qw(g,s),[g,s]),w=Zw(g);return U.createElement(U.Fragment,null,_.map(I=>U.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...n})),E.map(I=>U.createElement("link",{key:I,rel:"modulepreload",href:I,...n})),w.map(({key:I,link:A})=>U.createElement("link",{key:I,...A})))}function n2(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var $g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$g&&(window.__reactRouterVersion="7.1.1")}catch{}function i2({basename:i,children:e,window:n}){let r=U.useRef();r.current==null&&(r.current=qk({window:n,v5Compat:!0}));let s=r.current,[o,d]=U.useState({action:s.action,location:s.location}),c=U.useCallback(h=>{U.startTransition(()=>d(h))},[d]);return U.useLayoutEffect(()=>s.listen(c),[s,c]),U.createElement(xw,{basename:i,children:e,location:o.location,navigationType:o.action,navigator:s})}var Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ts=U.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:s,reloadDocument:o,replace:d,state:c,target:h,to:g,preventScrollReset:_,viewTransition:E,...w},I){let{basename:A}=U.useContext(Hi),B=typeof g=="string"&&Ug.test(g),M,q=!1;if(typeof g=="string"&&B&&(M=g,$g))try{let S=new URL(window.location.href),P=g.startsWith("//")?new URL(S.protocol+g):new URL(g),N=Ir(P.pathname,A);P.origin===S.origin&&N!=null?g=N+P.search+P.hash:q=!0}catch{qi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=pw(g,{relative:s}),[re,ae,we]=Yw(r,w),be=s2(g,{replace:d,state:c,target:h,preventScrollReset:_,relative:s,viewTransition:E});function D(S){e&&e(S),S.defaultPrevented||be(S)}let T=U.createElement("a",{...w,...we,href:M||W,onClick:q||o?e:D,ref:n2(I,ae),target:h,"data-discover":!B&&n==="render"?"true":void 0});return re&&!B?U.createElement(U.Fragment,null,T,U.createElement(Xw,{page:W})):T});Ts.displayName="Link";var t2=U.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:s=!1,style:o,to:d,viewTransition:c,children:h,...g},_){let E=uf(d,{relative:g.relative}),w=Dr(),I=U.useContext(Ad),{navigator:A,basename:B}=U.useContext(Hi),M=I!=null&&u2(E)&&c===!0,q=A.encodeLocation?A.encodeLocation(E).pathname:E.pathname,W=w.pathname,re=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(W=W.toLowerCase(),re=re?re.toLowerCase():null,q=q.toLowerCase()),re&&B&&(re=Ir(re,B)||re);const ae=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let we=W===q||!s&&W.startsWith(q)&&W.charAt(ae)==="/",be=re!=null&&(re===q||!s&&re.startsWith(q)&&re.charAt(q.length)==="/"),D={isActive:we,isPending:be,isTransitioning:M},T=we?e:void 0,S;typeof r=="function"?S=r(D):S=[r,we?"active":null,be?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(D):o;return U.createElement(Ts,{...g,"aria-current":T,className:S,ref:_,style:P,to:d,viewTransition:c},typeof h=="function"?h(D):h)});t2.displayName="NavLink";var r2=U.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:s,state:o,method:d=Wl,action:c,onSubmit:h,relative:g,preventScrollReset:_,viewTransition:E,...w},I)=>{let A=l2(),B=d2(c,{relative:g}),M=d.toLowerCase()==="get"?"get":"post",q=typeof c=="string"&&Ug.test(c),W=re=>{if(h&&h(re),re.defaultPrevented)return;re.preventDefault();let ae=re.nativeEvent.submitter,we=(ae==null?void 0:ae.getAttribute("formmethod"))||d;A(ae||re.currentTarget,{fetcherKey:e,method:we,navigate:n,replace:s,state:o,relative:g,preventScrollReset:_,viewTransition:E})};return U.createElement("form",{ref:I,method:M,action:B,onSubmit:r?h:W,...w,"data-discover":!q&&i==="render"?"true":void 0})});r2.displayName="Form";function a2(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qg(i){let e=U.useContext(Os);return en(e,a2(i)),e}function s2(i,{target:e,replace:n,state:r,preventScrollReset:s,relative:o,viewTransition:d}={}){let c=Vg(),h=Dr(),g=uf(i,{relative:o});return U.useCallback(_=>{if(Ow(_,e)){_.preventDefault();let E=n!==void 0?n:Xo(h)===Xo(g);c(i,{replace:E,state:r,preventScrollReset:s,relative:o,viewTransition:d})}},[h,c,g,n,r,e,i,s,o,d])}var o2=0,f2=()=>`__${String(++o2)}__`;function l2(){let{router:i}=qg("useSubmit"),{basename:e}=U.useContext(Hi),n=Iw();return U.useCallback(async(r,s={})=>{let{action:o,method:d,encType:c,formData:h,body:g}=Bw(r,e);if(s.navigate===!1){let _=s.fetcherKey||f2();await i.fetch(_,n,s.action||o,{preventScrollReset:s.preventScrollReset,formData:h,body:g,formMethod:s.method||d,formEncType:s.encType||c,flushSync:s.flushSync})}else await i.navigate(s.action||o,{preventScrollReset:s.preventScrollReset,formData:h,body:g,formMethod:s.method||d,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,e,n])}function d2(i,{relative:e}={}){let{basename:n}=U.useContext(Hi),r=U.useContext(ct);en(r,"useFormAction must be used inside a RouteContext");let[s]=r.matches.slice(-1),o={...uf(i||".",{relative:e})},d=Dr();if(i==null){o.search=d.search;let c=new URLSearchParams(o.search),h=c.getAll("index");if(h.some(_=>_==="")){c.delete("index"),h.filter(E=>E).forEach(E=>c.append("index",E));let _=c.toString();o.search=_?`?${_}`:""}}return(!i||i===".")&&s.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Ot([n,o.pathname])),Xo(o)}function u2(i,e={}){let n=U.useContext(Mg);en(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=qg("useViewTransitionState"),s=uf(i,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Ir(n.currentLocation.pathname,r)||n.currentLocation.pathname,d=Ir(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ad(s.pathname,d)!=null||ad(s.pathname,o)!=null}new TextEncoder;var Hv={};/**
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
 */const Hg=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},c2=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const s=i[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=i[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=i[n++],d=i[n++],c=i[n++],h=((s&7)<<18|(o&63)<<12|(d&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=i[n++],d=i[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|d&63)}}return e.join("")},Wg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const o=i[s],d=s+1<i.length,c=d?i[s+1]:0,h=s+2<i.length,g=h?i[s+2]:0,_=o>>2,E=(o&3)<<4|c>>4;let w=(c&15)<<2|g>>6,I=g&63;h||(I=64,d||(w=64)),r.push(n[_],n[E],n[w],n[I])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Hg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):c2(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const o=n[i.charAt(s++)],c=s<i.length?n[i.charAt(s)]:0;++s;const g=s<i.length?n[i.charAt(s)]:64;++s;const E=s<i.length?n[i.charAt(s)]:64;if(++s,o==null||c==null||g==null||E==null)throw new h2;const w=o<<2|c>>4;if(r.push(w),g!==64){const I=c<<4&240|g>>2;if(r.push(I),E!==64){const A=g<<6&192|E;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class h2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m2=function(i){const e=Hg(i);return Wg.encodeByteArray(e,!0)},sd=function(i){return m2(i).replace(/\./g,"")},Gg=function(i){try{return Wg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function v2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p2=()=>v2().__FIREBASE_DEFAULTS__,g2=()=>{if(typeof process>"u"||typeof Hv>"u")return;const i=Hv.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},y2=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Gg(i[1]);return e&&JSON.parse(e)},Nd=()=>{try{return p2()||g2()||y2()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Kg=i=>{var e,n;return(n=(e=Nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},_2=i=>{const e=Kg(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Qg=()=>{var i;return(i=Nd())===null||i===void 0?void 0:i.config},Jg=i=>{var e;return(e=Nd())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class k2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function w2(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=i.iat||0,o=i.sub||i.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},i);return[sd(JSON.stringify(n)),sd(JSON.stringify(d)),""].join(".")}/**
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
 */function Wn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wn())}function E2(){var i;const e=(i=Nd())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function T2(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function C2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I2(){const i=Wn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function R2(){return!E2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function P2(){try{return typeof indexedDB=="object"}catch{return!1}}function A2(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const x2="FirebaseError";class Ut extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=x2,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cf.prototype.create)}}class cf{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],d=o?N2(o,r):"Error",c=`${this.serviceName}: ${d} (${s}).`;return new Ut(s,c,r)}}function N2(i,e){return i.replace(D2,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const D2=/\{\$([^}]+)}/g;function F2(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function od(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=i[s],d=e[s];if(Wv(o)&&Wv(d)){if(!od(o,d))return!1}else if(o!==d)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wv(i){return i!==null&&typeof i=="object"}/**
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
 */function hf(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function M2(i,e){const n=new L2(i,e);return n.subscribe.bind(n)}class L2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ac),s.error===void 0&&(s.error=Ac),s.complete===void 0&&(s.complete=Ac);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O2(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Ac(){}/**
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
 */function ft(i){return i&&i._delegate?i._delegate:i}class ma{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const da="[DEFAULT]";/**
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
 */class V2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new k2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B2(e))try{this.getOrInitializeService({instanceIdentifier:da})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=da){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=da){return this.instances.has(e)}getOptions(e=da){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,d]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&d.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const d=this.instances.get(s);return d&&e(d,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=da){return this.component?this.component.multipleInstances?e:da:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j2(i){return i===da?void 0:i}function B2(i){return i.instantiationMode==="EAGER"}/**
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
 */class z2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new V2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const $2={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},U2=Ne.INFO,q2={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},H2=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),s=q2[e];if(s)console[s](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=U2,this._logHandler=H2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const W2=(i,e)=>e.some(n=>i instanceof n);let Gv,Kv;function G2(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K2(){return Kv||(Kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,Yc=new WeakMap,Xg=new WeakMap,xc=new WeakMap,Lh=new WeakMap;function Q2(i){const e=new Promise((n,r)=>{const s=()=>{i.removeEventListener("success",o),i.removeEventListener("error",d)},o=()=>{n(wr(i.result)),s()},d=()=>{r(i.error),s()};i.addEventListener("success",o),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,i)}).catch(()=>{}),Lh.set(e,i),e}function J2(i){if(Yc.has(i))return;const e=new Promise((n,r)=>{const s=()=>{i.removeEventListener("complete",o),i.removeEventListener("error",d),i.removeEventListener("abort",d)},o=()=>{n(),s()},d=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",o),i.addEventListener("error",d),i.addEventListener("abort",d)});Yc.set(i,e)}let Xc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Yc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Xg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Y2(i){Xc=i(Xc)}function X2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Nc(this),e,...n);return Xg.set(r,e.sort?e.sort():[e]),wr(r)}:K2().includes(i)?function(...e){return i.apply(Nc(this),e),wr(Yg.get(this))}:function(...e){return wr(i.apply(Nc(this),e))}}function Z2(i){return typeof i=="function"?X2(i):(i instanceof IDBTransaction&&J2(i),W2(i,G2())?new Proxy(i,Xc):i)}function wr(i){if(i instanceof IDBRequest)return Q2(i);if(xc.has(i))return xc.get(i);const e=Z2(i);return e!==i&&(xc.set(i,e),Lh.set(e,i)),e}const Nc=i=>Lh.get(i);function eb(i,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const d=indexedDB.open(i,e),c=wr(d);return r&&d.addEventListener("upgradeneeded",h=>{r(wr(d.result),h.oldVersion,h.newVersion,wr(d.transaction),h)}),n&&d.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const nb=["get","getKey","getAll","getAllKeys","count"],ib=["put","add","delete","clear"],Dc=new Map;function Qv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ib.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nb.includes(n)))return;const o=async function(d,...c){const h=this.transaction(d,s?"readwrite":"readonly");let g=h.store;return r&&(g=g.index(c.shift())),(await Promise.all([g[n](...c),s&&h.done]))[0]};return Dc.set(e,o),o}Y2(i=>({...i,get:(e,n,r)=>Qv(e,n)||i.get(e,n,r),has:(e,n)=>!!Qv(e,n)||i.has(e,n)}));/**
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
 */class tb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rb(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",Jv="0.10.17";/**
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
 */const jt=new Mh("@firebase/app"),ab="@firebase/app-compat",sb="@firebase/analytics-compat",ob="@firebase/analytics",fb="@firebase/app-check-compat",lb="@firebase/app-check",db="@firebase/auth",ub="@firebase/auth-compat",cb="@firebase/database",hb="@firebase/data-connect",mb="@firebase/database-compat",vb="@firebase/functions",pb="@firebase/functions-compat",gb="@firebase/installations",yb="@firebase/installations-compat",_b="@firebase/messaging",kb="@firebase/messaging-compat",wb="@firebase/performance",bb="@firebase/performance-compat",Eb="@firebase/remote-config",Sb="@firebase/remote-config-compat",Tb="@firebase/storage",Cb="@firebase/storage-compat",Ib="@firebase/firestore",Rb="@firebase/vertexai",Pb="@firebase/firestore-compat",Ab="firebase",xb="11.1.0";/**
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
 */const eh="[DEFAULT]",Nb={[Zc]:"fire-core",[ab]:"fire-core-compat",[ob]:"fire-analytics",[sb]:"fire-analytics-compat",[lb]:"fire-app-check",[fb]:"fire-app-check-compat",[db]:"fire-auth",[ub]:"fire-auth-compat",[cb]:"fire-rtdb",[hb]:"fire-data-connect",[mb]:"fire-rtdb-compat",[vb]:"fire-fn",[pb]:"fire-fn-compat",[gb]:"fire-iid",[yb]:"fire-iid-compat",[_b]:"fire-fcm",[kb]:"fire-fcm-compat",[wb]:"fire-perf",[bb]:"fire-perf-compat",[Eb]:"fire-rc",[Sb]:"fire-rc-compat",[Tb]:"fire-gcs",[Cb]:"fire-gcs-compat",[Ib]:"fire-fst",[Pb]:"fire-fst-compat",[Rb]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const fd=new Map,Db=new Map,nh=new Map;function Yv(i,e){try{i.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Cs(i){const e=i.name;if(nh.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;nh.set(e,i);for(const n of fd.values())Yv(n,i);for(const n of Db.values())Yv(n,i);return!0}function Oh(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function tt(i){return i.settings!==void 0}/**
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
 */const Fb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new cf("app","Firebase",Fb);/**
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
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ma("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const js=xb;function Zg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=Qg()),!n)throw br.create("no-options");const o=fd.get(s);if(o){if(od(n,o.options)&&od(r,o.config))return o;throw br.create("duplicate-app",{appName:s})}const d=new z2(s);for(const h of nh.values())d.addComponent(h);const c=new Mb(n,r,d);return fd.set(s,c),c}function e0(i=eh){const e=fd.get(i);if(!e&&i===eh&&Qg())return Zg();if(!e)throw br.create("no-app",{appName:i});return e}function Er(i,e,n){var r;let s=(r=Nb[i])!==null&&r!==void 0?r:i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),d=e.match(/\s|\//);if(o||d){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&d&&c.push("and"),d&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}Cs(new ma(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lb="firebase-heartbeat-database",Ob=1,Zo="firebase-heartbeat-store";let Fc=null;function n0(){return Fc||(Fc=eb(Lb,Ob,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Zo)}catch(n){console.warn(n)}}}}).catch(i=>{throw br.create("idb-open",{originalErrorMessage:i.message})})),Fc}async function Vb(i){try{const n=(await n0()).transaction(Zo),r=await n.objectStore(Zo).get(i0(i));return await n.done,r}catch(e){if(e instanceof Ut)jt.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Xv(i,e){try{const r=(await n0()).transaction(Zo,"readwrite");await r.objectStore(Zo).put(e,i0(i)),await r.done}catch(n){if(n instanceof Ut)jt.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function i0(i){return`${i.name}!${i.options.appId}`}/**
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
 */const jb=1024,Bb=30*24*60*60*1e3;class zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(d=>d.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const c=new Date(d.date).valueOf();return Date.now()-c<=Bb}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zv(),{heartbeatsToSend:r,unsentEntries:s}=$b(this._heartbeatsCache.heartbeats),o=sd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return jt.warn(n),""}}}function Zv(){return new Date().toISOString().substring(0,10)}function $b(i,e=jb){const n=[];let r=i.slice();for(const s of i){const o=n.find(d=>d.agent===s.agent);if(o){if(o.dates.push(s.date),ep(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ep(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ub{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P2()?A2().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ep(i){return sd(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function qb(i){Cs(new ma("platform-logger",e=>new tb(e),"PRIVATE")),Cs(new ma("heartbeat",e=>new zb(e),"PRIVATE")),Er(Zc,Jv,i),Er(Zc,Jv,"esm2017"),Er("fire-js","")}qb("");function Vh(i,e){var n={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&e.indexOf(r)<0&&(n[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(i);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(i,r[s])&&(n[r[s]]=i[r[s]]);return n}function t0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hb=t0,r0=new cf("auth","Firebase",t0());/**
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
 */const ld=new Mh("@firebase/auth");function Wb(i,...e){ld.logLevel<=Ne.WARN&&ld.warn(`Auth (${js}): ${i}`,...e)}function Kl(i,...e){ld.logLevel<=Ne.ERROR&&ld.error(`Auth (${js}): ${i}`,...e)}/**
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
 */function lt(i,...e){throw Bh(i,...e)}function Ui(i,...e){return Bh(i,...e)}function jh(i,e,n){const r=Object.assign(Object.assign({},Hb()),{[e]:n});return new cf("auth","Firebase",r).create(e,{appName:i.name})}function Sr(i){return jh(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gb(i,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&lt(i,"argument-error"),jh(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bh(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return r0.create(i,...e)}function Ee(i,e,...n){if(!i)throw Bh(e,...n)}function Ft(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kl(e),new Error(e)}function Bt(i,e){i||Ft(e)}/**
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
 */function ih(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Kb(){return np()==="http:"||np()==="https:"}function np(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kb()||T2()||"connection"in navigator)?navigator.onLine:!0}function Jb(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class mf{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=b2()||C2()}get(){return Qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zh(i,e){Bt(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class a0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xb=new mf(3e4,6e4);function Bs(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Fr(i,e,n,r,s={}){return s0(i,s,async()=>{let o={},d={};r&&(e==="GET"?d=r:o={body:JSON.stringify(r)});const c=hf(Object.assign({key:i.config.apiKey},d)).slice(1),h=await i._getAdditionalHeaders();h["Content-Type"]="application/json",i.languageCode&&(h["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:h},o);return S2()||(g.referrerPolicy="no-referrer"),a0.fetch()(f0(i,i.config.apiHost,n,c),g)})}async function s0(i,e,n){i._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yb),e);try{const s=new e3(i),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const d=await o.json();if("needConfirmation"in d)throw Vl(i,"account-exists-with-different-credential",d);if(o.ok&&!("errorMessage"in d))return d;{const c=o.ok?d.errorMessage:d.error.message,[h,g]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vl(i,"credential-already-in-use",d);if(h==="EMAIL_EXISTS")throw Vl(i,"email-already-in-use",d);if(h==="USER_DISABLED")throw Vl(i,"user-disabled",d);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw jh(i,_,g);lt(i,_)}}catch(s){if(s instanceof Ut)throw s;lt(i,"network-request-failed",{message:String(s)})}}async function o0(i,e,n,r,s={}){const o=await Fr(i,e,n,r,s);return"mfaPendingCredential"in o&&lt(i,"multi-factor-auth-required",{_serverResponse:o}),o}function f0(i,e,n,r){const s=`${e}${n}?${r}`;return i.config.emulator?zh(i.config,s):`${i.config.apiScheme}://${s}`}function Zb(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ui(this.auth,"network-request-failed")),Xb.get())})}}function Vl(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ui(i,e,r);return s.customData._tokenResponse=n,s}function ip(i){return i!==void 0&&i.enterprise!==void 0}class n3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function i3(i,e){return Fr(i,"GET","/v2/recaptchaConfig",Bs(i,e))}/**
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
 */async function t3(i,e){return Fr(i,"POST","/v1/accounts:delete",e)}async function l0(i,e){return Fr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wo(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r3(i,e=!1){const n=ft(i),r=await n.getIdToken(e),s=$h(r);Ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,d=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Wo(Mc(s.auth_time)),issuedAtTime:Wo(Mc(s.iat)),expirationTime:Wo(Mc(s.exp)),signInProvider:d||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Mc(i){return Number(i)*1e3}function $h(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return Kl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gg(n);return s?JSON.parse(s):(Kl("Failed to decode base64 JWT payload"),null)}catch(s){return Kl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tp(i){const e=$h(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ef(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ut&&a3(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function a3({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class s3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dd(i){var e;const n=i.auth,r=await i.getIdToken(),s=await ef(i,l0(n,{idToken:r}));Ee(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const d=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?d0(o.providerUserInfo):[],c=f3(i.providerData,d),h=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(c!=null&&c.length),_=h?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new th(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(i,E)}async function o3(i){const e=ft(i);await dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f3(i,e){return[...i.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d0(i){return i.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function l3(i,e){const n=await s0(i,{},async()=>{const r=hf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=i.config,d=f0(i,s,"/v1/token",`key=${o}`),c=await i._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",a0.fetch()(d,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function d3(i,e){return Fr(i,"POST","/v2/accounts:revokeToken",Bs(i,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=tp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await l3(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,d=new ks;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),d.refreshToken=r),s&&(Ee(typeof s=="string","internal-error",{appName:e}),d.accessToken=s),o&&(Ee(typeof o=="number","internal-error",{appName:e}),d.expirationTime=o),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function vr(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new th(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ef(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r3(this,e)}reload(){return o3(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await ef(this,t3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,d,c,h,g,_;const E=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,I=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,A=(d=n.photoURL)!==null&&d!==void 0?d:void 0,B=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,q=(g=n.createdAt)!==null&&g!==void 0?g:void 0,W=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:re,emailVerified:ae,isAnonymous:we,providerData:be,stsTokenManager:D}=n;Ee(re&&D,e,"internal-error");const T=ks.fromJSON(this.name,D);Ee(typeof re=="string",e,"internal-error"),vr(E,e.name),vr(w,e.name),Ee(typeof ae=="boolean",e,"internal-error"),Ee(typeof we=="boolean",e,"internal-error"),vr(I,e.name),vr(A,e.name),vr(B,e.name),vr(M,e.name),vr(q,e.name),vr(W,e.name);const S=new Mt({uid:re,auth:e,email:w,emailVerified:ae,displayName:E,isAnonymous:we,photoURL:A,phoneNumber:I,tenantId:B,stsTokenManager:T,createdAt:q,lastLoginAt:W});return be&&Array.isArray(be)&&(S.providerData=be.map(P=>Object.assign({},P))),M&&(S._redirectEventId=M),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ks;s.updateFromServerResponse(n);const o=new Mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await dd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?d0(s.providerUserInfo):[],d=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new ks;c.updateFromIdToken(r);const h=new Mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:d}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new th(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,g),h}}/**
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
 */const rp=new Map;function Lt(i){Bt(i instanceof Function,"Expected a class definition");let e=rp.get(i);return e?(Bt(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,rp.set(i,e),e)}/**
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
 */class u0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}u0.type="NONE";const ap=u0;/**
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
 */function Ql(i,e,n){return`firebase:${i}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ql(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ql("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Lt(ap),e,r);const s=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let o=s[0]||Lt(ap);const d=Ql(r,e.config.apiKey,e.name);let c=null;for(const g of n)try{const _=await g._get(d);if(_){const E=Mt._fromJSON(e,_);g!==o&&(c=E),o=g;break}}catch{}const h=s.filter(g=>g._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new ws(o,e,r):(o=h[0],c&&await o._set(d,c.toJSON()),await Promise.all(n.map(async g=>{if(g!==o)try{await g._remove(d)}catch{}})),new ws(o,e,r))}}/**
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
 */function sp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g0(e))return"Blackberry";if(y0(e))return"Webos";if(h0(e))return"Safari";if((e.includes("chrome/")||m0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function c0(i=Wn()){return/firefox\//i.test(i)}function h0(i=Wn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function m0(i=Wn()){return/crios\//i.test(i)}function v0(i=Wn()){return/iemobile/i.test(i)}function p0(i=Wn()){return/android/i.test(i)}function g0(i=Wn()){return/blackberry/i.test(i)}function y0(i=Wn()){return/webos/i.test(i)}function Uh(i=Wn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function u3(i=Wn()){var e;return Uh(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c3(){return I2()&&document.documentMode===10}function _0(i=Wn()){return Uh(i)||p0(i)||y0(i)||g0(i)||/windows phone/i.test(i)||v0(i)}/**
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
 */function k0(i,e=[]){let n;switch(i){case"Browser":n=sp(Wn());break;case"Worker":n=`${sp(Wn())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class h3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((d,c)=>{try{const h=e(o);d(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function m3(i,e={}){return Fr(i,"GET","/v2/passwordPolicy",Bs(i,e))}/**
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
 */const v3=6;class p3{constructor(e){var n,r,s,o;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:v3,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,d,c;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(d=h.containsNumericCharacter)!==null&&d!==void 0?d:!0),h.isValid&&(h.isValid=(c=h.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class g3{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new op(this),this.idTokenSubscription=new op(this),this.beforeStateQueue=new h3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await l0(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!d||d===c)&&(h!=null&&h.user)&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Sr(this));const n=e?ft(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await m3(this),n=new p3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cf("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await d3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let d=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(c,this,"internal-error"),c.then(()=>{d||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,s);return()=>{d=!0,h()}}else{const h=e.addObserver(n);return()=>{d=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=k0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Wb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(i){return ft(i)}class op{constructor(e){this.auth=e,this.observer=null,this.addObserver=M2(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y3(i){Dd=i}function w0(i){return Dd.loadJS(i)}function _3(){return Dd.recaptchaEnterpriseScript}function k3(){return Dd.gapiScript}function w3(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class b3{constructor(){this.enterprise=new E3}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class E3{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const S3="recaptcha-enterprise",b0="NO_RECAPTCHA";class T3{constructor(e){this.type=S3,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(d,c)=>{i3(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const g=new n3(h);return o.tenantId==null?o._agentRecaptchaConfig=g:o._tenantRecaptchaConfigs[o.tenantId]=g,d(g.siteKey)}}).catch(h=>{c(h)})})}function s(o,d,c){const h=window.grecaptcha;ip(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(g=>{d(g)}).catch(()=>{d(b0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new b3().execute("siteKey",{action:"verify"}):new Promise((o,d)=>{r(this.auth).then(c=>{if(!n&&ip(window.grecaptcha))s(c,o,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let h=_3();h.length!==0&&(h+=c),w0(h).then(()=>{s(c,o,d)}).catch(g=>{d(g)})}}).catch(c=>{d(c)})})}}async function fp(i,e,n,r=!1,s=!1){const o=new T3(i);let d;if(s)d=b0;else try{d=await o.verify(n)}catch{d=await o.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,g=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:d}):Object.assign(c,{captchaResponse:d}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function E0(i,e,n,r,s){var o;if(!((o=i._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await fp(i,e,n,n==="getOobCode");return r(i,d)}else return r(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await fp(i,e,n,n==="getOobCode");return r(i,c)}else return Promise.reject(d)})}/**
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
 */function C3(i,e){const n=Oh(i,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(od(o,e??{}))return s;lt(s,"already-initialized")}return n.initialize({options:e})}function I3(i,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R3(i,e,n){const r=Mr(i);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=S0(e),{host:d,port:c}=P3(e),h=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${d}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:d,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),A3()}function S0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function P3(i){const e=S0(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:lp(r.substr(o.length+1))}}else{const[o,d]=r.split(":");return{host:o,port:lp(d)}}}function lp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function A3(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class T0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}async function x3(i,e){return Fr(i,"POST","/v1/accounts:sendOobCode",Bs(i,e))}async function N3(i,e){return x3(i,e)}/**
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
 */async function bs(i,e){return o0(i,"POST","/v1/accounts:signInWithIdp",Bs(i,e))}/**
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
 */const D3="http://localhost";class va extends T0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=Vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const d=new va(r,s);return d.idToken=o.idToken||void 0,d.accessToken=o.accessToken||void 0,d.secret=o.secret,d.nonce=o.nonce,d.pendingToken=o.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:D3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hf(n)}return e}}/**
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
 */class qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vf extends qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends vf{constructor(){super("facebook.com")}static credential(e){return va._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends vf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return va._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class gr extends vf{constructor(){super("github.com")}static credential(e){return va._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class yr extends vf{constructor(){super("twitter.com")}static credential(e,n){return va._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */async function F3(i,e){return o0(i,"POST","/v1/accounts:signUp",Bs(i,e))}/**
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
 */class pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await Mt._fromIdTokenResponse(e,r,s),d=dp(r);return new pa({user:o,providerId:d,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dp(r);return new pa({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ud extends Ut{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ud.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ud(e,n,r,s)}}function C0(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ud._fromErrorAndOperation(i,o,e,r):o})}async function M3(i,e,n=!1){const r=await ef(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return pa._forOperation(i,"link",r)}/**
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
 */async function L3(i,e,n=!1){const{auth:r}=i;if(tt(r.app))return Promise.reject(Sr(r));const s="reauthenticate";try{const o=await ef(i,C0(r,s,e,i),n);Ee(o.idToken,r,"internal-error");const d=$h(o.idToken);Ee(d,r,"internal-error");const{sub:c}=d;return Ee(i.uid===c,r,"user-mismatch"),pa._forOperation(i,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),o}}/**
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
 */async function O3(i,e,n=!1){if(tt(i.app))return Promise.reject(Sr(i));const r="signIn",s=await C0(i,r,e),o=await pa._fromIdTokenResponse(i,r,s);return n||await i._updateCurrentUser(o.user),o}/**
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
 */async function V3(i){const e=Mr(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j3(i,e,n){const r=Mr(i);await E0(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",N3)}async function B3(i,e,n){if(tt(i.app))return Promise.reject(Sr(i));const r=Mr(i),d=await E0(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",F3).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&V3(i),h}),c=await pa._fromIdTokenResponse(r,"signIn",d);return await r._updateCurrentUser(c.user),c}function z3(i,e,n,r){return ft(i).onIdTokenChanged(e,n,r)}function $3(i,e,n){return ft(i).beforeAuthStateChanged(e,n)}const cd="__sak";/**
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
 */class I0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cd,"1"),this.storage.removeItem(cd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const U3=1e3,q3=10;class R0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,c,h)=>{this.notifyListeners(d,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const d=this.storage.getItem(r);!n&&this.localCache[r]===d||this.notifyListeners(r,d)},o=this.storage.getItem(r);c3()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,q3):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},U3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}R0.type="LOCAL";const H3=R0;/**
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
 */class P0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}P0.type="SESSION";const A0=P0;/**
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
 */function W3(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,d=this.handlersMap[s];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(d).map(async g=>g(n.origin,o)),h=await W3(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fd.receivers=[];/**
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
 */function Hh(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class G3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,d;return new Promise((c,h)=>{const g=Hh("",20);s.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);d={messageChannel:s,onMessage(E){const w=E;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(d),s.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[s.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function rt(){return window}function K3(i){rt().location.href=i}/**
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
 */function x0(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Q3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J3(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Y3(){return x0()?self:null}/**
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
 */const N0="firebaseLocalStorageDb",X3=1,hd="firebaseLocalStorage",D0="fbase_key";class pf{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Md(i,e){return i.transaction([hd],e?"readwrite":"readonly").objectStore(hd)}function Z3(){const i=indexedDB.deleteDatabase(N0);return new pf(i).toPromise()}function rh(){const i=indexedDB.open(N0,X3);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(hd,{keyPath:D0})}catch(s){n(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(hd)?e(r):(r.close(),await Z3(),e(await rh()))})})}async function up(i,e,n){const r=Md(i,!0).put({[D0]:e,value:n});return new pf(r).toPromise()}async function e4(i,e){const n=Md(i,!1).get(e),r=await new pf(n).toPromise();return r===void 0?null:r.value}function cp(i,e){const n=Md(i,!0).delete(e);return new pf(n).toPromise()}const n4=800,i4=3;class F0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>i4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fd._getInstance(Y3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q3(),!this.activeServiceWorker)return;this.sender=new G3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rh();return await up(e,cd,"1"),await cp(e,cd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Md(s,!1).getAll();return new pf(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),n4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F0.type="LOCAL";const t4=F0;new mf(3e4,6e4);/**
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
 */function M0(i,e){return e?Lt(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Wh extends T0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r4(i){return O3(i.auth,new Wh(i),i.bypassAuthState)}function a4(i){const{auth:e,user:n}=i;return Ee(n,e,"internal-error"),L3(n,new Wh(i),i.bypassAuthState)}async function s4(i){const{auth:e,user:n}=i;return Ee(n,e,"internal-error"),M3(n,new Wh(i),i.bypassAuthState)}/**
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
 */class L0{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:d,type:c}=e;if(d){this.reject(d);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r4;case"linkViaPopup":case"linkViaRedirect":return s4;case"reauthViaPopup":case"reauthViaRedirect":return a4;default:lt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o4=new mf(2e3,1e4);async function f4(i,e,n){if(tt(i.app))return Promise.reject(Ui(i,"operation-not-supported-in-this-environment"));const r=Mr(i);Gb(i,e,qh);const s=M0(r,n);return new ua(r,"signInViaPopup",e,s).executeNotNull()}class ua extends L0{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,ua.currentPopupAction&&ua.currentPopupAction.cancel(),ua.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=Hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ua.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o4.get())};e()}}ua.currentPopupAction=null;/**
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
 */const l4="pendingRedirect",Jl=new Map;class d4 extends L0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await u4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u4(i,e){const n=m4(e),r=h4(i);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function c4(i,e){Jl.set(i._key(),e)}function h4(i){return Lt(i._redirectPersistence)}function m4(i){return Ql(l4,i.config.apiKey,i.name)}async function v4(i,e,n=!1){if(tt(i.app))return Promise.reject(Sr(i));const r=Mr(i),s=M0(r,e),d=await new d4(r,s,n).execute();return d&&!n&&(delete d.user._redirectEventId,await r._persistUserIfCurrent(d.user),await r._setRedirectUser(null,e)),d}/**
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
 */const p4=10*60*1e3;class g4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ui(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p4&&this.cachedEventUids.clear(),this.cachedEventUids.has(hp(e))}saveEventToCache(e){this.cachedEventUids.add(hp(e)),this.lastProcessedEventTime=Date.now()}}function hp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function O0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y4(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(i);default:return!1}}/**
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
 */async function _4(i,e={}){return Fr(i,"GET","/v1/projects",e)}/**
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
 */const k4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w4=/^https?/;async function b4(i){if(i.config.emulator)return;const{authorizedDomains:e}=await _4(i);for(const n of e)try{if(E4(n))return}catch{}lt(i,"unauthorized-domain")}function E4(i){const e=ih(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===r}if(!w4.test(n))return!1;if(k4.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const S4=new mf(3e4,6e4);function mp(){const i=rt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function T4(i){return new Promise((e,n)=>{var r,s,o;function d(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),n(Ui(i,"network-request-failed"))},timeout:S4.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=rt().gapi)===null||o===void 0)&&o.load)d();else{const c=w3("iframefcb");return rt()[c]=()=>{gapi.load?d():n(Ui(i,"network-request-failed"))},w0(`${k3()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function C4(i){return Yl=Yl||T4(i),Yl}/**
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
 */const I4=new mf(5e3,15e3),R4="__/auth/iframe",P4="emulator/auth/iframe",A4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N4(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?zh(e,P4):`https://${i.config.authDomain}/${R4}`,r={apiKey:e.apiKey,appName:i.name,v:js},s=x4.get(i.config.apiHost);s&&(r.eid=s);const o=i._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${hf(r).slice(1)}`}async function D4(i){const e=await C4(i),n=rt().gapi;return Ee(n,i,"internal-error"),e.open({where:document.body,url:N4(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A4,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const d=Ui(i,"network-request-failed"),c=rt().setTimeout(()=>{o(d)},I4.get());function h(){rt().clearTimeout(c),s(r)}r.ping(h).then(h,()=>{o(d)})}))}/**
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
 */const F4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M4=500,L4=600,O4="_blank",V4="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j4(i,e,n,r=M4,s=L4){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),d=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},F4),{width:r.toString(),height:s.toString(),top:o,left:d}),g=Wn().toLowerCase();n&&(c=m0(g)?O4:n),c0(g)&&(e=e||V4,h.scrollbars="yes");const _=Object.entries(h).reduce((w,[I,A])=>`${w}${I}=${A},`,"");if(u3(g)&&c!=="_self")return B4(e||"",c),new vp(null);const E=window.open(e||"",c,_);Ee(E,i,"popup-blocked");try{E.focus()}catch{}return new vp(E)}function B4(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const z4="__/auth/handler",$4="emulator/auth/handler",U4=encodeURIComponent("fac");async function pp(i,e,n,r,s,o){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof qh){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",F2(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,E]of Object.entries({}))d[_]=E}if(e instanceof vf){const _=e.getScopes().filter(E=>E!=="");_.length>0&&(d.scopes=_.join(","))}i.tenantId&&(d.tid=i.tenantId);const c=d;for(const _ of Object.keys(c))c[_]===void 0&&delete c[_];const h=await i._getAppCheckToken(),g=h?`#${U4}=${encodeURIComponent(h)}`:"";return`${q4(i)}?${hf(c).slice(1)}${g}`}function q4({config:i}){return i.emulator?zh(i,$4):`https://${i.authDomain}/${z4}`}/**
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
 */const Lc="webStorageSupport";class H4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=v4,this._overrideRedirectResult=c4}async _openPopup(e,n,r,s){var o;Bt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const d=await pp(e,n,r,ih(),s);return j4(e,d,Hh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await pp(e,n,r,ih(),s);return K3(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Bt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D4(e),r=new g4(e);return n.register("authEvent",s=>(Ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},s=>{var o;const d=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Lc];d!==void 0&&n(!!d),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||h0()||Uh()}}const W4=H4;var gp="@firebase/auth",yp="1.8.1";/**
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
 */class G4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function K4(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q4(i){Cs(new ma("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:d,authDomain:c}=r.options;Ee(d&&!d.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:d,authDomain:c,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k0(i)},g=new g3(r,s,o,h);return I3(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cs(new ma("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new G4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(gp,yp,K4(i)),Er(gp,yp,"esm2017")}/**
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
 */const J4=5*60,Y4=Jg("authIdTokenMaxAge")||J4;let _p=null;const X4=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Y4)return;const s=n==null?void 0:n.token;_p!==s&&(_p=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Z4(i=e0()){const e=Oh(i,"auth");if(e.isInitialized())return e.getImmediate();const n=C3(i,{popupRedirectResolver:W4,persistence:[t4,H3,A0]}),r=Jg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const d=X4(o.toString());$3(n,d,()=>d(n.currentUser)),z3(n,c=>d(c))}}const s=Kg("auth");return s&&R3(n,`http://${s}`),n}function e6(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}y3({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=s=>{const o=Ui("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",e6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q4("Browser");var n6="firebase",i6="11.1.0";/**
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
 */Er(n6,i6,"app");var kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ha,V0;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,T){function S(){}S.prototype=T.prototype,D.D=T.prototype,D.prototype=new S,D.prototype.constructor=D,D.C=function(P,N,L){for(var R=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)R[Qe-2]=arguments[Qe];return T.prototype[N].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(D,T,S){S||(S=0);var P=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)P[N]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(N=0;16>N;++N)P[N]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=D.g[0],S=D.g[1],N=D.g[2];var L=D.g[3],R=T+(L^S&(N^L))+P[0]+3614090360&4294967295;T=S+(R<<7&4294967295|R>>>25),R=L+(N^T&(S^N))+P[1]+3905402710&4294967295,L=T+(R<<12&4294967295|R>>>20),R=N+(S^L&(T^S))+P[2]+606105819&4294967295,N=L+(R<<17&4294967295|R>>>15),R=S+(T^N&(L^T))+P[3]+3250441966&4294967295,S=N+(R<<22&4294967295|R>>>10),R=T+(L^S&(N^L))+P[4]+4118548399&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(N^T&(S^N))+P[5]+1200080426&4294967295,L=T+(R<<12&4294967295|R>>>20),R=N+(S^L&(T^S))+P[6]+2821735955&4294967295,N=L+(R<<17&4294967295|R>>>15),R=S+(T^N&(L^T))+P[7]+4249261313&4294967295,S=N+(R<<22&4294967295|R>>>10),R=T+(L^S&(N^L))+P[8]+1770035416&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(N^T&(S^N))+P[9]+2336552879&4294967295,L=T+(R<<12&4294967295|R>>>20),R=N+(S^L&(T^S))+P[10]+4294925233&4294967295,N=L+(R<<17&4294967295|R>>>15),R=S+(T^N&(L^T))+P[11]+2304563134&4294967295,S=N+(R<<22&4294967295|R>>>10),R=T+(L^S&(N^L))+P[12]+1804603682&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(N^T&(S^N))+P[13]+4254626195&4294967295,L=T+(R<<12&4294967295|R>>>20),R=N+(S^L&(T^S))+P[14]+2792965006&4294967295,N=L+(R<<17&4294967295|R>>>15),R=S+(T^N&(L^T))+P[15]+1236535329&4294967295,S=N+(R<<22&4294967295|R>>>10),R=T+(N^L&(S^N))+P[1]+4129170786&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^N&(T^S))+P[6]+3225465664&4294967295,L=T+(R<<9&4294967295|R>>>23),R=N+(T^S&(L^T))+P[11]+643717713&4294967295,N=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(N^L))+P[0]+3921069994&4294967295,S=N+(R<<20&4294967295|R>>>12),R=T+(N^L&(S^N))+P[5]+3593408605&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^N&(T^S))+P[10]+38016083&4294967295,L=T+(R<<9&4294967295|R>>>23),R=N+(T^S&(L^T))+P[15]+3634488961&4294967295,N=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(N^L))+P[4]+3889429448&4294967295,S=N+(R<<20&4294967295|R>>>12),R=T+(N^L&(S^N))+P[9]+568446438&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^N&(T^S))+P[14]+3275163606&4294967295,L=T+(R<<9&4294967295|R>>>23),R=N+(T^S&(L^T))+P[3]+4107603335&4294967295,N=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(N^L))+P[8]+1163531501&4294967295,S=N+(R<<20&4294967295|R>>>12),R=T+(N^L&(S^N))+P[13]+2850285829&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^N&(T^S))+P[2]+4243563512&4294967295,L=T+(R<<9&4294967295|R>>>23),R=N+(T^S&(L^T))+P[7]+1735328473&4294967295,N=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(N^L))+P[12]+2368359562&4294967295,S=N+(R<<20&4294967295|R>>>12),R=T+(S^N^L)+P[5]+4294588738&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^N)+P[8]+2272392833&4294967295,L=T+(R<<11&4294967295|R>>>21),R=N+(L^T^S)+P[11]+1839030562&4294967295,N=L+(R<<16&4294967295|R>>>16),R=S+(N^L^T)+P[14]+4259657740&4294967295,S=N+(R<<23&4294967295|R>>>9),R=T+(S^N^L)+P[1]+2763975236&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^N)+P[4]+1272893353&4294967295,L=T+(R<<11&4294967295|R>>>21),R=N+(L^T^S)+P[7]+4139469664&4294967295,N=L+(R<<16&4294967295|R>>>16),R=S+(N^L^T)+P[10]+3200236656&4294967295,S=N+(R<<23&4294967295|R>>>9),R=T+(S^N^L)+P[13]+681279174&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^N)+P[0]+3936430074&4294967295,L=T+(R<<11&4294967295|R>>>21),R=N+(L^T^S)+P[3]+3572445317&4294967295,N=L+(R<<16&4294967295|R>>>16),R=S+(N^L^T)+P[6]+76029189&4294967295,S=N+(R<<23&4294967295|R>>>9),R=T+(S^N^L)+P[9]+3654602809&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^N)+P[12]+3873151461&4294967295,L=T+(R<<11&4294967295|R>>>21),R=N+(L^T^S)+P[15]+530742520&4294967295,N=L+(R<<16&4294967295|R>>>16),R=S+(N^L^T)+P[2]+3299628645&4294967295,S=N+(R<<23&4294967295|R>>>9),R=T+(N^(S|~L))+P[0]+4096336452&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~N))+P[7]+1126891415&4294967295,L=T+(R<<10&4294967295|R>>>22),R=N+(T^(L|~S))+P[14]+2878612391&4294967295,N=L+(R<<15&4294967295|R>>>17),R=S+(L^(N|~T))+P[5]+4237533241&4294967295,S=N+(R<<21&4294967295|R>>>11),R=T+(N^(S|~L))+P[12]+1700485571&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~N))+P[3]+2399980690&4294967295,L=T+(R<<10&4294967295|R>>>22),R=N+(T^(L|~S))+P[10]+4293915773&4294967295,N=L+(R<<15&4294967295|R>>>17),R=S+(L^(N|~T))+P[1]+2240044497&4294967295,S=N+(R<<21&4294967295|R>>>11),R=T+(N^(S|~L))+P[8]+1873313359&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~N))+P[15]+4264355552&4294967295,L=T+(R<<10&4294967295|R>>>22),R=N+(T^(L|~S))+P[6]+2734768916&4294967295,N=L+(R<<15&4294967295|R>>>17),R=S+(L^(N|~T))+P[13]+1309151649&4294967295,S=N+(R<<21&4294967295|R>>>11),R=T+(N^(S|~L))+P[4]+4149444226&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~N))+P[11]+3174756917&4294967295,L=T+(R<<10&4294967295|R>>>22),R=N+(T^(L|~S))+P[2]+718787259&4294967295,N=L+(R<<15&4294967295|R>>>17),R=S+(L^(N|~T))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+T&4294967295,D.g[1]=D.g[1]+(N+(R<<21&4294967295|R>>>11))&4294967295,D.g[2]=D.g[2]+N&4294967295,D.g[3]=D.g[3]+L&4294967295}r.prototype.u=function(D,T){T===void 0&&(T=D.length);for(var S=T-this.blockSize,P=this.B,N=this.h,L=0;L<T;){if(N==0)for(;L<=S;)s(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<T;)if(P[N++]=D.charCodeAt(L++),N==this.blockSize){s(this,P),N=0;break}}else for(;L<T;)if(P[N++]=D[L++],N==this.blockSize){s(this,P),N=0;break}}this.h=N,this.o+=T},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var T=1;T<D.length-8;++T)D[T]=0;var S=8*this.o;for(T=D.length-8;T<D.length;++T)D[T]=S&255,S/=256;for(this.u(D),D=Array(16),T=S=0;4>T;++T)for(var P=0;32>P;P+=8)D[S++]=this.g[T]>>>P&255;return D};function o(D,T){var S=c;return Object.prototype.hasOwnProperty.call(S,D)?S[D]:S[D]=T(D)}function d(D,T){this.h=T;for(var S=[],P=!0,N=D.length-1;0<=N;N--){var L=D[N]|0;P&&L==T||(S[N]=L,P=!1)}this.g=S}var c={};function h(D){return-128<=D&&128>D?o(D,function(T){return new d([T|0],0>T?-1:0)}):new d([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return M(g(-D));for(var T=[],S=1,P=0;D>=S;P++)T[P]=D/S|0,S*=4294967296;return new d(T,0)}function _(D,T){if(D.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D.charAt(0)=="-")return M(_(D.substring(1),T));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(T,8)),P=E,N=0;N<D.length;N+=8){var L=Math.min(8,D.length-N),R=parseInt(D.substring(N,N+L),T);8>L?(L=g(Math.pow(T,L)),P=P.j(L).add(g(R))):(P=P.j(S),P=P.add(g(R)))}return P}var E=h(0),w=h(1),I=h(16777216);i=d.prototype,i.m=function(){if(B(this))return-M(this).m();for(var D=0,T=1,S=0;S<this.g.length;S++){var P=this.i(S);D+=(0<=P?P:4294967296+P)*T,T*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(A(this))return"0";if(B(this))return"-"+M(this).toString(D);for(var T=g(Math.pow(D,6)),S=this,P="";;){var N=ae(S,T).g;S=q(S,N.j(T));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(D);if(S=N,A(S))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function A(D){if(D.h!=0)return!1;for(var T=0;T<D.g.length;T++)if(D.g[T]!=0)return!1;return!0}function B(D){return D.h==-1}i.l=function(D){return D=q(this,D),B(D)?-1:A(D)?0:1};function M(D){for(var T=D.g.length,S=[],P=0;P<T;P++)S[P]=~D.g[P];return new d(S,~D.h).add(w)}i.abs=function(){return B(this)?M(this):this},i.add=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],P=0,N=0;N<=T;N++){var L=P+(this.i(N)&65535)+(D.i(N)&65535),R=(L>>>16)+(this.i(N)>>>16)+(D.i(N)>>>16);P=R>>>16,L&=65535,R&=65535,S[N]=R<<16|L}return new d(S,S[S.length-1]&-2147483648?-1:0)};function q(D,T){return D.add(M(T))}i.j=function(D){if(A(this)||A(D))return E;if(B(this))return B(D)?M(this).j(M(D)):M(M(this).j(D));if(B(D))return M(this.j(M(D)));if(0>this.l(I)&&0>D.l(I))return g(this.m()*D.m());for(var T=this.g.length+D.g.length,S=[],P=0;P<2*T;P++)S[P]=0;for(P=0;P<this.g.length;P++)for(var N=0;N<D.g.length;N++){var L=this.i(P)>>>16,R=this.i(P)&65535,Qe=D.i(N)>>>16,an=D.i(N)&65535;S[2*P+2*N]+=R*an,W(S,2*P+2*N),S[2*P+2*N+1]+=L*an,W(S,2*P+2*N+1),S[2*P+2*N+1]+=R*Qe,W(S,2*P+2*N+1),S[2*P+2*N+2]+=L*Qe,W(S,2*P+2*N+2)}for(P=0;P<T;P++)S[P]=S[2*P+1]<<16|S[2*P];for(P=T;P<2*T;P++)S[P]=0;return new d(S,0)};function W(D,T){for(;(D[T]&65535)!=D[T];)D[T+1]+=D[T]>>>16,D[T]&=65535,T++}function re(D,T){this.g=D,this.h=T}function ae(D,T){if(A(T))throw Error("division by zero");if(A(D))return new re(E,E);if(B(D))return T=ae(M(D),T),new re(M(T.g),M(T.h));if(B(T))return T=ae(D,M(T)),new re(M(T.g),T.h);if(30<D.g.length){if(B(D)||B(T))throw Error("slowDivide_ only works with positive integers.");for(var S=w,P=T;0>=P.l(D);)S=we(S),P=we(P);var N=be(S,1),L=be(P,1);for(P=be(P,2),S=be(S,2);!A(P);){var R=L.add(P);0>=R.l(D)&&(N=N.add(S),L=R),P=be(P,1),S=be(S,1)}return T=q(D,N.j(T)),new re(N,T)}for(N=E;0<=D.l(T);){for(S=Math.max(1,Math.floor(D.m()/T.m())),P=Math.ceil(Math.log(S)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=g(S),R=L.j(T);B(R)||0<R.l(D);)S-=P,L=g(S),R=L.j(T);A(L)&&(L=w),N=N.add(L),D=q(D,R)}return new re(N,D)}i.A=function(D){return ae(this,D).h},i.and=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)&D.i(P);return new d(S,this.h&D.h)},i.or=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)|D.i(P);return new d(S,this.h|D.h)},i.xor=function(D){for(var T=Math.max(this.g.length,D.g.length),S=[],P=0;P<T;P++)S[P]=this.i(P)^D.i(P);return new d(S,this.h^D.h)};function we(D){for(var T=D.g.length+1,S=[],P=0;P<T;P++)S[P]=D.i(P)<<1|D.i(P-1)>>>31;return new d(S,D.h)}function be(D,T){var S=T>>5;T%=32;for(var P=D.g.length-S,N=[],L=0;L<P;L++)N[L]=0<T?D.i(L+S)>>>T|D.i(L+S+1)<<32-T:D.i(L+S);return new d(N,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,V0=r,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=g,d.fromString=_,ha=d}).apply(typeof kp<"u"?kp:typeof self<"u"?self:typeof window<"u"?window:{});var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j0,Uo,B0,Xl,ah,z0,$0,U0;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,v,y){return l==Array.prototype||l==Object.prototype||(l[v]=y.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof jl=="object"&&jl];for(var v=0;v<l.length;++v){var y=l[v];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function s(l,v){if(v)e:{var y=r;l=l.split(".");for(var b=0;b<l.length-1;b++){var V=l[b];if(!(V in y))break e;y=y[V]}l=l[l.length-1],b=y[l],v=v(b),v!=b&&v!=null&&e(y,l,{configurable:!0,writable:!0,value:v})}}function o(l,v){l instanceof String&&(l+="");var y=0,b=!1,V={next:function(){if(!b&&y<l.length){var H=y++;return{value:v(H,l[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(l){return l||function(){return o(this,function(v,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},c=this||self;function h(l){var v=typeof l;return v=v!="object"?v:l?Array.isArray(l)?"array":v:"null",v=="array"||v=="object"&&typeof l.length=="number"}function g(l){var v=typeof l;return v=="object"&&l!=null||v=="function"}function _(l,v,y){return l.call.apply(l.bind,arguments)}function E(l,v,y){if(!l)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,b),l.apply(v,V)}}return function(){return l.apply(v,arguments)}}function w(l,v,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:E,w.apply(null,arguments)}function I(l,v){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),l.apply(this,b)}}function A(l,v){function y(){}y.prototype=v.prototype,l.aa=v.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(b,V,H){for(var te=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)te[qe-2]=arguments[qe];return v.prototype[V].apply(b,te)}}function B(l){const v=l.length;if(0<v){const y=Array(v);for(let b=0;b<v;b++)y[b]=l[b];return y}return[]}function M(l,v){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(h(b)){const V=l.length||0,H=b.length||0;l.length=V+H;for(let te=0;te<H;te++)l[V+te]=b[te]}else l.push(b)}}class q{constructor(v,y){this.i=v,this.j=y,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function W(l){return/^[\s\xa0]*$/.test(l)}function re(){var l=c.navigator;return l&&(l=l.userAgent)?l:""}function ae(l){return ae[" "](l),l}ae[" "]=function(){};var we=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function be(l,v,y){for(const b in l)v.call(y,l[b],b,l)}function D(l,v){for(const y in l)v.call(void 0,l[y],y,l)}function T(l){const v={};for(const y in l)v[y]=l[y];return v}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,v){let y,b;for(let V=1;V<arguments.length;V++){b=arguments[V];for(y in b)l[y]=b[y];for(let H=0;H<S.length;H++)y=S[H],Object.prototype.hasOwnProperty.call(b,y)&&(l[y]=b[y])}}function N(l){var v=1;l=l.split(":");const y=[];for(;0<v&&l.length;)y.push(l.shift()),v--;return l.length&&y.push(l.join(":")),y}function L(l){c.setTimeout(()=>{throw l},0)}function R(){var l=he;let v=null;return l.g&&(v=l.g,l.g=l.g.next,l.g||(l.h=null),v.next=null),v}class Qe{constructor(){this.h=this.g=null}add(v,y){const b=an.get();b.set(v,y),this.h?this.h.next=b:this.g=b,this.h=b}}var an=new q(()=>new mn,l=>l.reset());class mn{constructor(){this.next=this.g=this.h=null}set(v,y){this.h=v,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ie=!1,he=new Qe,oe=()=>{const l=c.Promise.resolve(void 0);Ie=()=>{l.then(O)}};var O=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(y){L(y)}var v=an;v.j(l),100>v.h&&(v.h++,l.next=v.g,v.g=l)}ie=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(l,v){this.type=l,this.g=this.target=v,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var l=!1,v=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};c.addEventListener("test",y,v),c.removeEventListener("test",y,v)}catch{}return l}();function Pe(l,v){if(me.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,b=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=v,v=l.relatedTarget){if(we){e:{try{ae(v.nodeName);var V=!0;break e}catch{}V=!1}V||(v=null)}}else y=="mouseover"?v=l.fromElement:y=="mouseout"&&(v=l.toElement);this.relatedTarget=v,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Le[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Pe.aa.h.call(this)}}A(Pe,me);var Le={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),$e=0;function We(l,v,y,b,V){this.listener=l,this.proxy=null,this.src=v,this.type=y,this.capture=!!b,this.ha=V,this.key=++$e,this.da=this.fa=!1}function En(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ht(l){this.src=l,this.g={},this.h=0}ht.prototype.add=function(l,v,y,b,V){var H=l.toString();l=this.g[H],l||(l=this.g[H]=[],this.h++);var te=qt(l,v,b,V);return-1<te?(v=l[te],y||(v.fa=!1)):(v=new We(v,this.src,H,!!b,V),v.fa=y,l.push(v)),v};function ba(l,v){var y=v.type;if(y in l.g){var b=l.g[y],V=Array.prototype.indexOf.call(b,v,void 0),H;(H=0<=V)&&Array.prototype.splice.call(b,V,1),H&&(En(v),l.g[y].length==0&&(delete l.g[y],l.h--))}}function qt(l,v,y,b){for(var V=0;V<l.length;++V){var H=l[V];if(!H.da&&H.listener==v&&H.capture==!!y&&H.ha==b)return V}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Ea={};function Hs(l,v,y,b,V){if(Array.isArray(v)){for(var H=0;H<v.length;H++)Hs(l,v[H],y,b,V);return null}return y=Ks(y),l&&l[ze]?l.K(v,y,g(b)?!!b.capture:!!b,V):Ws(l,v,y,!1,b,V)}function Ws(l,v,y,b,V,H){if(!v)throw Error("Invalid event type");var te=g(V)?!!V.capture:!!V,qe=Ta(l);if(qe||(l[Lr]=qe=new ht(l)),y=qe.add(v,y,b,te,H),y.proxy)return y;if(b=wf(),y.proxy=b,b.src=l,b.listener=y,l.addEventListener)Re||(V=te),V===void 0&&(V=!1),l.addEventListener(v.toString(),b,V);else if(l.attachEvent)l.attachEvent(vt(v.toString()),b);else if(l.addListener&&l.removeListener)l.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function wf(){function l(y){return v.call(l.src,l.listener,y)}const v=Gs;return l}function Sa(l,v,y,b,V){if(Array.isArray(v))for(var H=0;H<v.length;H++)Sa(l,v[H],y,b,V);else b=g(b)?!!b.capture:!!b,y=Ks(y),l&&l[ze]?(l=l.i,v=String(v).toString(),v in l.g&&(H=l.g[v],y=qt(H,y,b,V),-1<y&&(En(H[y]),Array.prototype.splice.call(H,y,1),H.length==0&&(delete l.g[v],l.h--)))):l&&(l=Ta(l))&&(v=l.g[v.toString()],l=-1,v&&(l=qt(v,y,b,V)),(y=-1<l?v[l]:null)&&mt(y))}function mt(l){if(typeof l!="number"&&l&&!l.da){var v=l.src;if(v&&v[ze])ba(v.i,l);else{var y=l.type,b=l.proxy;v.removeEventListener?v.removeEventListener(y,b,l.capture):v.detachEvent?v.detachEvent(vt(y),b):v.addListener&&v.removeListener&&v.removeListener(b),(y=Ta(v))?(ba(y,l),y.h==0&&(y.src=null,v[Lr]=null)):En(l)}}}function vt(l){return l in Ea?Ea[l]:Ea[l]="on"+l}function Gs(l,v){if(l.da)l=!0;else{v=new Pe(v,this);var y=l.listener,b=l.ha||l.src;l.fa&&mt(l),l=y.call(b,v)}return l}function Ta(l){return l=l[Lr],l instanceof ht?l:null}var Ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(l){return typeof l=="function"?l:(l[Ca]||(l[Ca]=function(v){return l.handleEvent(v)}),l[Ca])}function vn(){Q.call(this),this.i=new ht(this),this.M=this,this.F=null}A(vn,Q),vn.prototype[ze]=!0,vn.prototype.removeEventListener=function(l,v,y,b){Sa(this,l,v,y,b)};function pn(l,v){var y,b=l.F;if(b)for(y=[];b;b=b.F)y.push(b);if(l=l.M,b=v.type||v,typeof v=="string")v=new me(v,l);else if(v instanceof me)v.target=v.target||l;else{var V=v;v=new me(b,l),P(v,V)}if(V=!0,y)for(var H=y.length-1;0<=H;H--){var te=v.g=y[H];V=pt(te,b,!0,v)&&V}if(te=v.g=l,V=pt(te,b,!0,v)&&V,V=pt(te,b,!1,v)&&V,y)for(H=0;H<y.length;H++)te=v.g=y[H],V=pt(te,b,!1,v)&&V}vn.prototype.N=function(){if(vn.aa.N.call(this),this.i){var l=this.i,v;for(v in l.g){for(var y=l.g[v],b=0;b<y.length;b++)En(y[b]);delete l.g[v],l.h--}}this.F=null},vn.prototype.K=function(l,v,y,b){return this.i.add(String(l),v,!1,y,b)},vn.prototype.L=function(l,v,y,b){return this.i.add(String(l),v,!0,y,b)};function pt(l,v,y,b){if(v=l.i.g[String(v)],!v)return!0;v=v.concat();for(var V=!0,H=0;H<v.length;++H){var te=v[H];if(te&&!te.da&&te.capture==y){var qe=te.listener,gn=te.ha||te.src;te.fa&&ba(l.i,te),V=qe.call(gn,b)!==!1&&V}}return V&&!b.defaultPrevented}function Qs(l,v,y){if(typeof l=="function")y&&(l=w(l,y));else if(l&&typeof l.handleEvent=="function")l=w(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:c.setTimeout(l,v||0)}function Ht(l){l.g=Qs(()=>{l.g=null,l.i&&(l.i=!1,Ht(l))},l.l);const v=l.h;l.h=null,l.m.apply(null,v)}class Or extends Q{constructor(v,y){super(),this.m=v,this.l=y,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Ht(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(l){Q.call(this),this.h=l,this.g={}}A(Vr,Q);var Js=[];function Ys(l){be(l.g,function(v,y){this.g.hasOwnProperty(y)&&mt(v)},l),l.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),Ys(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xs=c.JSON.stringify,Zs=c.JSON.parse,eo=class{stringify(l){return c.JSON.stringify(l,void 0)}parse(l){return c.JSON.parse(l,void 0)}};function jr(){}jr.prototype.h=null;function Ia(l){return l.h||(l.h=l.i())}function Ra(){}var hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){me.call(this,"d")}A(Wi,me);function Pa(){me.call(this,"c")}A(Pa,me);var Gi={},no=null;function Br(){return no=no||new vn}Gi.La="serverreachability";function io(l){me.call(this,Gi.La,l)}A(io,me);function gt(l){const v=Br();pn(v,new io(v))}Gi.STAT_EVENT="statevent";function to(l,v){me.call(this,Gi.STAT_EVENT,l),this.stat=v}A(to,me);function fn(l){const v=Br();pn(v,new to(v,l))}Gi.Ma="timingevent";function Aa(l,v){me.call(this,Gi.Ma,l),this.size=v}A(Aa,me);function Ii(l,v){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){l()},v)}function zr(){this.g=!0}zr.prototype.xa=function(){this.g=!1};function $r(l,v,y,b,V,H){l.info(function(){if(l.g)if(H)for(var te="",qe=H.split("&"),gn=0;gn<qe.length;gn++){var Oe=qe[gn].split("=");if(1<Oe.length){var Sn=Oe[0];Oe=Oe[1];var un=Sn.split("_");te=2<=un.length&&un[1]=="type"?te+(Sn+"="+Oe+"&"):te+(Sn+"=redacted&")}}else te=null;else te=H;return"XMLHTTP REQ ("+b+") [attempt "+V+"]: "+v+`
`+y+`
`+te})}function xa(l,v,y,b,V,H,te){l.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+V+"]: "+v+`
`+y+`
`+H+" "+te})}function Ri(l,v,y,b){l.info(function(){return"XMLHTTP TEXT ("+v+"): "+Yd(l,y)+(b?" "+b:"")})}function ro(l,v){l.info(function(){return"TIMEOUT: "+v})}zr.prototype.info=function(){};function Yd(l,v){if(!l.g)return v;if(!v)return null;try{var y=JSON.parse(v);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var b=y[l];if(!(2>b.length)){var V=b[1];if(Array.isArray(V)&&!(1>V.length)){var H=V[0];if(H!="noop"&&H!="stop"&&H!="close")for(var te=1;te<V.length;te++)V[te]=""}}}}return Xs(y)}catch{return v}}var Na={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pi;function Ur(){}A(Ur,jr),Ur.prototype.g=function(){return new XMLHttpRequest},Ur.prototype.i=function(){return{}},Pi=new Ur;function Ai(l,v,y,b){this.j=l,this.i=v,this.l=y,this.R=b||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ef}function Ef(){this.i=null,this.g="",this.h=!1}var ao={},Da={};function Fa(l,v,y){l.L=1,l.v=Jt(oi(v)),l.m=y,l.P=!0,so(l,null)}function so(l,v){l.F=Date.now(),Ge(l),l.A=oi(l.v);var y=l.A,b=l.R;Array.isArray(b)||(b=[String(b)]),Xt(y.i,"t",b),l.C=0,y=l.j.J,l.h=new Ef,l.g=zf(l.j,y?v:null,!l.m),0<l.O&&(l.M=new Or(w(l.Y,l,l.g),l.O)),v=l.U,y=l.g,b=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(Js[0]=V.toString()),V=Js);for(var H=0;H<V.length;H++){var te=Hs(y,V[H],b||v.handleEvent,!1,v.h||v);if(!te)break;v.g[te.key]=te}v=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,v)):(l.u="GET",l.g.ea(l.A,l.u,null,v)),gt(),$r(l.i,l.u,l.A,l.l,l.R,l.m)}Ai.prototype.ca=function(l){l=l.target;const v=this.M;v&&Xn(l)==3?v.j():this.Y(l)},Ai.prototype.Y=function(l){try{if(l==this.g)e:{const un=Xn(this.g);var v=this.g.Ba();const pi=this.g.Z();if(!(3>un)&&(un!=3||this.g&&(this.h.h||this.g.oa()||ho(this.g)))){this.J||un!=4||v==7||(v==8||0>=pi?gt(3):gt(2)),qr(this);var y=this.g.Z();this.X=y;n:if(Sf(this)){var b=ho(this.g);l="";var V=b.length,H=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mi(this),Wt(this);var te="";break n}this.h.i=new c.TextDecoder}for(v=0;v<V;v++)this.h.h=!0,l+=this.h.i.decode(b[v],{stream:!(H&&v==V-1)});b.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,xa(this.i,this.u,this.A,this.l,this.R,un,y),this.o){if(this.T&&!this.K){n:{if(this.g){var qe,gn=this.g;if((qe=gn.g?gn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(qe)){var Oe=qe;break n}}Oe=null}if(y=Oe)Ri(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,y);else{this.o=!1,this.s=3,fn(12),mi(this),Wt(this);break e}}if(this.P){y=!0;let li;for(;!this.J&&this.C<te.length;)if(li=Xd(this,te),li==Da){un==4&&(this.s=4,fn(14),y=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(li==ao){this.s=4,fn(15),Ri(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Ri(this.i,this.l,li,null),oo(this,li);if(Sf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),un!=4||te.length!=0||this.h.h||(this.s=1,fn(16),y=!1),this.o=this.o&&y,!y)Ri(this.i,this.l,te,"[Invalid Chunked Response]"),mi(this),Wt(this);else if(0<te.length&&!this.W){this.W=!0;var Sn=this.j;Sn.g==this&&Sn.ba&&!Sn.M&&(Sn.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),vo(Sn),Sn.M=!0,fn(11))}}else Ri(this.i,this.l,te,null),oo(this,te);un==4&&mi(this),this.o&&!this.J&&(un==4?Ha(this.j,this):(this.o=!1,Ge(this)))}else Ba(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,fn(12)):(this.s=0,fn(13)),mi(this),Wt(this)}}}catch{}finally{}};function Sf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Xd(l,v){var y=l.C,b=v.indexOf(`
`,y);return b==-1?Da:(y=Number(v.substring(y,b)),isNaN(y)?ao:(b+=1,b+y>v.length?Da:(v=v.slice(b,b+y),l.C=b+y,v)))}Ai.prototype.cancel=function(){this.J=!0,mi(this)};function Ge(l){l.S=Date.now()+l.I,Tf(l,l.I)}function Tf(l,v){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ii(w(l.ba,l),v)}function qr(l){l.B&&(c.clearTimeout(l.B),l.B=null)}Ai.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ro(this.i,this.A),this.L!=2&&(gt(),fn(17)),mi(this),this.s=2,Wt(this)):Tf(this,this.S-l)};function Wt(l){l.j.G==0||l.J||Ha(l.j,l)}function mi(l){qr(l);var v=l.M;v&&typeof v.ma=="function"&&v.ma(),l.M=null,Ys(l.U),l.g&&(v=l.g,l.g=null,v.abort(),v.ma())}function oo(l,v){try{var y=l.j;if(y.G!=0&&(y.g==l||Gn(y.h,l))){if(!l.K&&Gn(y.h,l)&&y.G==3){try{var b=y.Da.g.parse(v)}catch{b=null}if(Array.isArray(b)&&b.length==3){var V=b;if(V[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)qa(y),Mi(y);else break e;Ua(y),fn(18)}}else y.za=V[1],0<y.za-y.T&&37500>V[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ii(w(y.Za,y),6e3));if(1>=If(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else bt(y,11)}else if((l.K||y.g==l)&&qa(y),!W(v))for(V=y.Da.g.parse(v),v=0;v<V.length;v++){let Oe=V[v];if(y.T=Oe[0],Oe=Oe[1],y.G==2)if(Oe[0]=="c"){y.K=Oe[1],y.ia=Oe[2];const Sn=Oe[3];Sn!=null&&(y.la=Sn,y.j.info("VER="+y.la));const un=Oe[4];un!=null&&(y.Aa=un,y.j.info("SVER="+y.Aa));const pi=Oe[5];pi!=null&&typeof pi=="number"&&0<pi&&(b=1.5*pi,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const li=l.g;if(li){const Yr=li.g?li.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yr){var H=b.h;H.g||Yr.indexOf("spdy")==-1&&Yr.indexOf("quic")==-1&&Yr.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(fo(H,H.h),H.h=null))}if(b.D){const Ga=li.g?li.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(b.ya=Ga,He(b.I,b.D,Ga))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var te=l;if(b.qa=Bf(b,b.J?b.ia:null,b.W),te.K){Rf(b.h,te);var qe=te,gn=b.L;gn&&(qe.I=gn),qe.B&&(qr(qe),Ge(qe)),b.g=te}else Jr(b);0<y.i.length&&Yi(y)}else Oe[0]!="stop"&&Oe[0]!="close"||bt(y,7);else y.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?bt(y,7):An(y):Oe[0]!="noop"&&y.l&&y.l.ta(Oe),y.v=0)}}gt(4)}catch{}}var Cf=class{constructor(l,v){this.g=l,this.map=v}};function Hr(l){this.l=l||10,c.PerformanceNavigationTiming?(l=c.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function If(l){return l.h?1:l.g?l.g.size:0}function Gn(l,v){return l.h?l.h==v:l.g?l.g.has(v):!1}function fo(l,v){l.g?l.g.add(v):l.h=v}function Rf(l,v){l.h&&l.h==v?l.h=null:l.g&&l.g.has(v)&&l.g.delete(v)}Hr.prototype.cancel=function(){if(this.i=Pf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Pf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let v=l.i;for(const y of l.g.values())v=v.concat(y.D);return v}return B(l.i)}function Ma(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(h(l)){for(var v=[],y=l.length,b=0;b<y;b++)v.push(l[b]);return v}v=[],y=0;for(b in l)v[y++]=l[b];return v}function La(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(h(l)||typeof l=="string"){var v=[];l=l.length;for(var y=0;y<l;y++)v.push(y);return v}v=[],y=0;for(const b in l)v[y++]=b;return v}}}function Gt(l,v){if(l.forEach&&typeof l.forEach=="function")l.forEach(v,void 0);else if(h(l)||typeof l=="string")Array.prototype.forEach.call(l,v,void 0);else for(var y=La(l),b=Ma(l),V=b.length,H=0;H<V;H++)v.call(void 0,b[H],y&&y[H],l)}var Wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zd(l,v){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var b=l[y].indexOf("="),V=null;if(0<=b){var H=l[y].substring(0,b);V=l[y].substring(b+1)}else H=l[y];v(H,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function yt(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yt){this.h=l.h,Gr(this,l.j),this.o=l.o,this.g=l.g,Kt(this,l.s),this.l=l.l;var v=l.i,y=new Ki;y.i=v.i,v.g&&(y.g=new Map(v.g),y.h=v.h),Qt(this,y),this.m=l.m}else l&&(v=String(l).match(Wr))?(this.h=!1,Gr(this,v[1]||"",!0),this.o=Fe(v[2]||""),this.g=Fe(v[3]||"",!0),Kt(this,v[4]),this.l=Fe(v[5]||"",!0),Qt(this,v[6]||"",!0),this.m=Fe(v[7]||"")):(this.h=!1,this.i=new Ki(null,this.h))}yt.prototype.toString=function(){var l=[],v=this.j;v&&l.push(Yt(v,Oa,!0),":");var y=this.g;return(y||v=="file")&&(l.push("//"),(v=this.o)&&l.push(Yt(v,Oa,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Yt(y,y.charAt(0)=="/"?Nf:xf,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Yt(y,lo)),l.join("")};function oi(l){return new yt(l)}function Gr(l,v,y){l.j=y?Fe(v,!0):v,l.j&&(l.j=l.j.replace(/:$/,""))}function Kt(l,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);l.s=v}else l.s=null}function Qt(l,v,y){v instanceof Ki?(l.i=v,Qi(l.i,l.h)):(y||(v=Yt(v,Df)),l.i=new Ki(v,l.h))}function He(l,v,y){l.i.set(v,y)}function Jt(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Fe(l,v){return l?v?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Yt(l,v,y){return typeof l=="string"?(l=encodeURI(l).replace(v,Af),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Af(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Oa=/[#\/\?@]/g,xf=/[#\?:]/g,Nf=/[#\?]/g,Df=/[#\?@]/g,lo=/#/g;function Ki(l,v){this.h=this.g=null,this.i=l||null,this.j=!!v}function Pn(l){l.g||(l.g=new Map,l.h=0,l.i&&Zd(l.i,function(v,y){l.add(decodeURIComponent(v.replace(/\+/g," ")),y)}))}i=Ki.prototype,i.add=function(l,v){Pn(this),this.i=null,l=vi(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(v),this.h+=1,this};function xi(l,v){Pn(l),v=vi(l,v),l.g.has(v)&&(l.i=null,l.h-=l.g.get(v).length,l.g.delete(v))}function Ni(l,v){return Pn(l),v=vi(l,v),l.g.has(v)}i.forEach=function(l,v){Pn(this),this.g.forEach(function(y,b){y.forEach(function(V){l.call(v,V,b,this)},this)},this)},i.na=function(){Pn(this);const l=Array.from(this.g.values()),v=Array.from(this.g.keys()),y=[];for(let b=0;b<v.length;b++){const V=l[b];for(let H=0;H<V.length;H++)y.push(v[b])}return y},i.V=function(l){Pn(this);let v=[];if(typeof l=="string")Ni(this,l)&&(v=v.concat(this.g.get(vi(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)v=v.concat(l[y])}return v},i.set=function(l,v){return Pn(this),this.i=null,l=vi(this,l),Ni(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[v]),this.h+=1,this},i.get=function(l,v){return l?(l=this.V(l),0<l.length?String(l[0]):v):v};function Xt(l,v,y){xi(l,v),0<y.length&&(l.i=null,l.g.set(vi(l,v),B(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],v=Array.from(this.g.keys());for(var y=0;y<v.length;y++){var b=v[y];const H=encodeURIComponent(String(b)),te=this.V(b);for(b=0;b<te.length;b++){var V=H;te[b]!==""&&(V+="="+encodeURIComponent(String(te[b]))),l.push(V)}}return this.i=l.join("&")};function vi(l,v){return v=String(v),l.j&&(v=v.toLowerCase()),v}function Qi(l,v){v&&!l.j&&(Pn(l),l.i=null,l.g.forEach(function(y,b){var V=b.toLowerCase();b!=V&&(xi(this,b),Xt(this,V,y))},l)),l.j=v}function eu(l,v){const y=new zr;if(c.Image){const b=new Image;b.onload=I(Yn,y,"TestLoadImage: loaded",!0,v,b),b.onerror=I(Yn,y,"TestLoadImage: error",!1,v,b),b.onabort=I(Yn,y,"TestLoadImage: abort",!1,v,b),b.ontimeout=I(Yn,y,"TestLoadImage: timeout",!1,v,b),c.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=l}else v(!1)}function Ff(l,v){const y=new zr,b=new AbortController,V=setTimeout(()=>{b.abort(),Yn(y,"TestPingServer: timeout",!1,v)},1e4);fetch(l,{signal:b.signal}).then(H=>{clearTimeout(V),H.ok?Yn(y,"TestPingServer: ok",!0,v):Yn(y,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(V),Yn(y,"TestPingServer: error",!1,v)})}function Yn(l,v,y,b,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),b(y)}catch{}}function nu(){this.g=new eo}function Mf(l,v,y){const b=y||"";try{Gt(l,function(V,H){let te=V;g(V)&&(te=Xs(V)),v.push(b+H+"="+encodeURIComponent(te))})}catch(V){throw v.push(b+"type="+encodeURIComponent("_badmap")),V}}function _t(l){this.l=l.Ub||null,this.j=l.eb||!1}A(_t,jr),_t.prototype.g=function(){return new Kr(this.l,this.j)},_t.prototype.i=function(l){return function(){return l}}({});function Kr(l,v){vn.call(this),this.D=l,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Kr,vn),i=Kr.prototype,i.open=function(l,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=v,this.readyState=1,Fi(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(v.body=l),(this.D||c).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lf(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lf(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var v=l.value?l.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!l.done}))&&(this.response=this.responseText+=v)}l.done?Di(this):Fi(this),this.readyState==3&&Lf(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Di(this))},i.Qa=function(l){this.g&&(this.response=l,Di(this))},i.ga=function(){this.g&&Di(this)};function Di(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Fi(l)}i.setRequestHeader=function(l,v){this.u.append(l,v)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],v=this.h.entries();for(var y=v.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=v.next();return l.join(`\r
`)};function Fi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function kt(l){let v="";return be(l,function(y,b){v+=b,v+=":",v+=y,v+=`\r
`}),v}function Zt(l,v,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=kt(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):He(l,v,y))}function Xe(l){vn.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Xe,vn);var iu=/^https?$/i,uo=["POST","PUT"];i=Xe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,v,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);v=v?v.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pi.g(),this.v=this.o?Ia(this.o):Ia(Pi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(v,String(l),!0),this.B=!1}catch(H){Qr(this,H);return}if(l=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var V in b)y.set(V,b[V]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())y.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(H=>H.toLowerCase()=="content-type"),V=c.FormData&&l instanceof c.FormData,!(0<=Array.prototype.indexOf.call(uo,v,void 0))||b||V||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,te]of y)this.g.setRequestHeader(H,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ja(this),this.u=!0,this.g.send(l),this.u=!1}catch(H){Qr(this,H)}};function Qr(l,v){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=v,l.m=5,Va(l),fi(l)}function Va(l){l.A||(l.A=!0,pn(l,"complete"),pn(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pn(this,"complete"),pn(this,"abort"),fi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fi(this,!0)),Xe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?co(this):this.bb())},i.bb=function(){co(this)};function co(l){if(l.h&&typeof d<"u"&&(!l.v[1]||Xn(l)!=4||l.Z()!=2)){if(l.u&&Xn(l)==4)Qs(l.Ea,0,l);else if(pn(l,"readystatechange"),Xn(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var y;if(!(y=v)){var b;if(b=te===0){var V=String(l.D).match(Wr)[1]||null;!V&&c.self&&c.self.location&&(V=c.self.location.protocol.slice(0,-1)),b=!iu.test(V?V.toLowerCase():"")}y=b}if(y)pn(l,"complete"),pn(l,"success");else{l.m=6;try{var H=2<Xn(l)?l.g.statusText:""}catch{H=""}l.l=H+" ["+l.Z()+"]",Va(l)}}finally{fi(l)}}}}function fi(l,v){if(l.g){ja(l);const y=l.g,b=l.v[0]?()=>{}:null;l.g=null,l.v=null,v||pn(l,"ready");try{y.onreadystatechange=b}catch{}}}function ja(l){l.I&&(c.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Xn(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var v=this.g.responseText;return l&&v.indexOf(l)==0&&(v=v.substring(l.length)),Zs(v)}};function ho(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ba(l){const v={};l=(l.g&&2<=Xn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<l.length;b++){if(W(l[b]))continue;var y=N(l[b]);const V=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const H=v[V]||[];v[V]=H,H.push(y)}D(v,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(l,v,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||v}function mo(l){this.Aa=0,this.i=[],this.j=new zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,l),this.cb=Ji("retryDelaySeedMs",1e4,l),this.Wa=Ji("forwardChannelMaxRetries",2,l),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Hr(l&&l.concurrentRequestLimit),this.Da=new nu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=mo.prototype,i.la=8,i.G=1,i.connect=function(l,v,y,b){fn(0),this.W=l,this.H=v||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=Bf(this,null,this.W),Yi(this)};function An(l){if(za(l),l.G==3){var v=l.U++,y=oi(l.I);if(He(y,"SID",l.K),He(y,"RID",v),He(y,"TYPE","terminate"),wt(l,y),v=new Ai(l,l.j,v),v.L=2,v.v=Jt(oi(y)),y=!1,c.navigator&&c.navigator.sendBeacon)try{y=c.navigator.sendBeacon(v.v.toString(),"")}catch{}!y&&c.Image&&(new Image().src=v.v,y=!0),y||(v.g=zf(v.j,null),v.g.ea(v.v)),v.F=Date.now(),Ge(v)}jf(l)}function Mi(l){l.g&&(vo(l),l.g.cancel(),l.g=null)}function za(l){Mi(l),l.u&&(c.clearTimeout(l.u),l.u=null),qa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&c.clearTimeout(l.s),l.s=null)}function Yi(l){if(!si(l.h)&&!l.s){l.s=!0;var v=l.Ga;Ie||oe(),ie||(Ie(),ie=!0),he.add(v,l),l.B=0}}function tu(l,v){return If(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=v.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ii(w(l.Ga,l,v),Vf(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Ai(this,this.j,l);let H=this.o;if(this.S&&(H?(H=T(H),P(H,this.S)):H=this.S),this.m!==null||this.O||(V.H=H,H=null),this.P)e:{for(var v=0,y=0;y<this.i.length;y++){n:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break n}b=void 0}if(b===void 0)break;if(v+=b,4096<v){v=y;break e}if(v===4096||y===this.i.length-1){v=y+1;break e}}v=1e3}else v=1e3;v=er(this,V,v),y=oi(this.I),He(y,"RID",l),He(y,"CVER",22),this.D&&He(y,"X-HTTP-Session-Id",this.D),wt(this,y),H&&(this.O?v="headers="+encodeURIComponent(String(kt(H)))+"&"+v:this.m&&Zt(y,this.m,H)),fo(this.h,V),this.Ua&&He(y,"TYPE","init"),this.P?(He(y,"$req",v),He(y,"SID","null"),V.T=!0,Fa(V,y,null)):Fa(V,y,v),this.G=2}}else this.G==3&&(l?$a(this,l):this.i.length==0||si(this.h)||$a(this))};function $a(l,v){var y;v?y=v.l:y=l.U++;const b=oi(l.I);He(b,"SID",l.K),He(b,"RID",y),He(b,"AID",l.T),wt(l,b),l.m&&l.o&&Zt(b,l.m,l.o),y=new Ai(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),v&&(l.i=v.D.concat(l.i)),v=er(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),fo(l.h,y),Fa(y,b,v)}function wt(l,v){l.H&&be(l.H,function(y,b){He(v,b,y)}),l.l&&Gt({},function(y,b){He(v,b,y)})}function er(l,v,y){y=Math.min(l.i.length,y);var b=l.l?w(l.l.Na,l.l,l):null;e:{var V=l.i;let H=-1;for(;;){const te=["count="+y];H==-1?0<y?(H=V[0].g,te.push("ofs="+H)):H=0:te.push("ofs="+H);let qe=!0;for(let gn=0;gn<y;gn++){let Oe=V[gn].g;const Sn=V[gn].map;if(Oe-=H,0>Oe)H=Math.max(0,V[gn].g-100),qe=!1;else try{Mf(Sn,te,"req"+Oe+"_")}catch{b&&b(Sn)}}if(qe){b=te.join("&");break e}}}return l=l.i.splice(0,y),v.D=l,b}function Jr(l){if(!l.g&&!l.u){l.Y=1;var v=l.Fa;Ie||oe(),ie||(Ie(),ie=!0),he.add(v,l),l.v=0}}function Ua(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ii(w(l.Fa,l),Vf(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Of(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ii(w(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,fn(10),Mi(this),Of(this))};function vo(l){l.A!=null&&(c.clearTimeout(l.A),l.A=null)}function Of(l){l.g=new Ai(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var v=oi(l.qa);He(v,"RID","rpc"),He(v,"SID",l.K),He(v,"AID",l.T),He(v,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(v,"TO",l.ja),He(v,"TYPE","xmlhttp"),wt(l,v),l.m&&l.o&&Zt(v,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Jt(oi(v)),y.m=null,y.P=!0,so(y,l)}i.Za=function(){this.C!=null&&(this.C=null,Mi(this),Ua(this),fn(19))};function qa(l){l.C!=null&&(c.clearTimeout(l.C),l.C=null)}function Ha(l,v){var y=null;if(l.g==v){qa(l),vo(l),l.g=null;var b=2}else if(Gn(l.h,v))y=v.D,Rf(l.h,v),b=1;else return;if(l.G!=0){if(v.o)if(b==1){y=v.m?v.m.length:0,v=Date.now()-v.F;var V=l.B;b=Br(),pn(b,new Aa(b,y)),Yi(l)}else Jr(l);else if(V=v.s,V==3||V==0&&0<v.X||!(b==1&&tu(l,v)||b==2&&Ua(l)))switch(y&&0<y.length&&(v=l.h,v.i=v.i.concat(y)),V){case 1:bt(l,5);break;case 4:bt(l,10);break;case 3:bt(l,6);break;default:bt(l,2)}}}function Vf(l,v){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*v}function bt(l,v){if(l.j.info("Error code "+v),v==2){var y=w(l.fb,l),b=l.Xa;const V=!b;b=new yt(b||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Gr(b,"https"),Jt(b),V?eu(b.toString(),y):Ff(b.toString(),y)}else fn(2);l.G=0,l.l&&l.l.sa(v),jf(l),za(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),fn(2)):(this.j.info("Failed to ping google.com"),fn(1))};function jf(l){if(l.G=0,l.ka=[],l.l){const v=Pf(l.h);(v.length!=0||l.i.length!=0)&&(M(l.ka,v),M(l.ka,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.ra()}}function Bf(l,v,y){var b=y instanceof yt?oi(y):new yt(y);if(b.g!="")v&&(b.g=v+"."+b.g),Kt(b,b.s);else{var V=c.location;b=V.protocol,v=v?v+"."+V.hostname:V.hostname,V=+V.port;var H=new yt(null);b&&Gr(H,b),v&&(H.g=v),V&&Kt(H,V),y&&(H.l=y),b=H}return y=l.D,v=l.ya,y&&v&&He(b,y,v),He(b,"VER",l.la),wt(l,b),b}function zf(l,v,y){if(v&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=l.Ca&&!l.pa?new Xe(new _t({eb:y})):new Xe(l.pa),v.Ha(l.J),v}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function po(){}i=po.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Wa(){}Wa.prototype.g=function(l,v){return new Kn(l,v)};function Kn(l,v){vn.call(this),this.g=new mo(v),this.l=l,this.h=v&&v.messageUrlParams||null,l=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(l?l["X-WebChannel-Content-Type"]=v.messageContentType:l={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(l?l["X-WebChannel-Client-Profile"]=v.va:l={"X-WebChannel-Client-Profile":v.va}),this.g.S=l,(l=v&&v.Sb)&&!W(l)&&(this.g.m=l),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!W(v)&&(this.g.D=v,l=this.h,l!==null&&v in l&&(l=this.h,v in l&&delete l[v])),this.j=new Xi(this)}A(Kn,vn),Kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kn.prototype.close=function(){An(this.g)},Kn.prototype.o=function(l){var v=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Xs(l),l=y);v.i.push(new Cf(v.Ya++,l)),v.G==3&&Yi(v)},Kn.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Kn.aa.N.call(this)};function $f(l){Wi.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var v=l.__sm__;if(v){e:{for(const y in v){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,v=v!==null&&l in v?v[l]:void 0),this.data=v}else this.data=l}A($f,Wi);function Uf(){Pa.call(this),this.status=1}A(Uf,Pa);function Xi(l){this.g=l}A(Xi,po),Xi.prototype.ua=function(){pn(this.g,"a")},Xi.prototype.ta=function(l){pn(this.g,new $f(l))},Xi.prototype.sa=function(l){pn(this.g,new Uf)},Xi.prototype.ra=function(){pn(this.g,"b")},Wa.prototype.createWebChannel=Wa.prototype.g,Kn.prototype.send=Kn.prototype.o,Kn.prototype.open=Kn.prototype.m,Kn.prototype.close=Kn.prototype.close,U0=function(){return new Wa},$0=function(){return Br()},z0=Gi,ah={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Na.NO_ERROR=0,Na.TIMEOUT=8,Na.HTTP_ERROR=6,Xl=Na,bf.COMPLETE="complete",B0=bf,Ra.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",vn.prototype.listen=vn.prototype.K,Uo=Ra,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,j0=Xe}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});const wp="@firebase/firestore";/**
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
 */class qn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qn.UNAUTHENTICATED=new qn(null),qn.GOOGLE_CREDENTIALS=new qn("google-credentials-uid"),qn.FIRST_PARTY=new qn("first-party-uid"),qn.MOCK_USER=new qn("mock-user");/**
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
 */let zs="11.0.2";/**
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
 */const ga=new Mh("@firebase/firestore");function ps(){return ga.logLevel}function fe(i,...e){if(ga.logLevel<=Ne.DEBUG){const n=e.map(Gh);ga.debug(`Firestore (${zs}): ${i}`,...n)}}function zt(i,...e){if(ga.logLevel<=Ne.ERROR){const n=e.map(Gh);ga.error(`Firestore (${zs}): ${i}`,...n)}}function Is(i,...e){if(ga.logLevel<=Ne.WARN){const n=e.map(Gh);ga.warn(`Firestore (${zs}): ${i}`,...n)}}function Gh(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Se(i="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+i;throw zt(e),new Error(e)}function Ue(i,e){i||Se()}function Ce(i,e){return i}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class q0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class t6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qn.UNAUTHENTICATED))}shutdown(){}}class r6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class a6{constructor(e){this.t=e,this.currentUser=qn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Tr,e.enqueueRetryable(()=>s(this.currentUser))};const d=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Tr)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new qn(e)}}class s6{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class o6{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new s6(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l6{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ue(this.o===void 0);const r=o=>{o.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const d=o.token!==this.R;return this.R=o.token,fe("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new f6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function d6(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class H0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=d6(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%e.length))}return r}}function Me(i,e){return i<e?-1:i>e?1:0}function Rs(i,e,n){return i.length===e.length&&i.every((r,s)=>n(r,e[s]))}/**
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
 */class wn{static now(){return wn.fromMillis(Date.now())}static fromDate(e){return wn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wn(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ye(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new wn(0,0))}static max(){return new Te(new wn(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class nf{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(),r===void 0?r=e.length-n:r>e.length-n&&Se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nf.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nf?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=e.get(s),d=n.get(s);if(o<d)return-1;if(o>d)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class on extends nf{construct(e,n,r){return new on(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(ee.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new on(n)}static emptyPath(){return new on([])}}const u6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ln extends nf{construct(e,n,r){return new Ln(e,n,r)}static isValidIdentifier(e){return u6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ln.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ln(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new ye(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let d=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ye(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new ye(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(d=!d,s++):c!=="."||d?(r+=c,s++):(o(),s++)}if(o(),d)throw new ye(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ln(n)}static emptyPath(){return new Ln([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(on.fromString(e))}static fromName(e){return new _e(on.fromString(e).popFirst(5))}static empty(){return new _e(on.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&on.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return on.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new on(e.slice()))}}function c6(i,e){const n=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new wn(n+1,0):new wn(n,r));return new Rr(s,_e.empty(),e)}function h6(i){return new Rr(i.readTime,i.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Te.min(),_e.empty(),-1)}static max(){return new Rr(Te.max(),_e.empty(),-1)}}function m6(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(i.documentKey,e.documentKey),n!==0?n:Me(i.largestBatchId,e.largestBatchId))}/**
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
 */const v6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class p6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $s(i){if(i.code!==ee.FAILED_PRECONDITION||i.message!==v6)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,o=0,d=!1;e.forEach(c=>{++s,c.next(()=>{++o,d&&o===s&&n()},h=>r(h))}),d=!0,o===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,o)=>{r.push(n.call(this,s,o))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const o=e.length,d=new Array(o);let c=0;for(let h=0;h<o;h++){const g=h;n(e[g]).next(_=>{d[g]=_,++c,c===o&&r(d)},_=>s(_))}})}static doWhile(e,n){return new K((r,s)=>{const o=()=>{e()===!0?n().next(()=>{o()},s):r()};o()})}}function g6(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ld{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ld.oe=-1;function Od(i){return i==null}function md(i){return i===0&&1/i==-1/0}function y6(i){return typeof i=="number"&&Number.isInteger(i)&&!md(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function _6(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=bp(e)),e=k6(i.get(n),e);return bp(e)}function k6(i,e){let n=e;const r=i.length;for(let s=0;s<r;s++){const o=i.charAt(s);switch(o){case"\0":n+="";break;case"":n+="";break;default:n+=o}}return n}function bp(i){return i+""}/**
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
 */function Ep(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function ya(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function W0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class rn{constructor(e,n){this.comparator=e,this.root=n||Mn.EMPTY}insert(e,n){return new rn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Mn.BLACK,null,null))}remove(e){return new rn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mn{constructor(e,n,r,s,o){this.key=e,this.value=n,this.color=r??Mn.RED,this.left=s??Mn.EMPTY,this.right=o??Mn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,o){return new Mn(e??this.key,n??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,r),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Mn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Mn.EMPTY=null,Mn.RED=!0,Mn.BLACK=!1;Mn.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,n,r,s,o){return this}insert(e,n,r){return new Mn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bn{constructor(e){this.comparator=e,this.data=new rn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sp(this.data.getIterator())}getIteratorFrom(e){return new Sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new bn(this.comparator);return n.data=e,n}}class Sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $i{constructor(e){this.fields=e,e.sort(Ln.comparator)}static empty(){return new $i([])}unionWith(e){let n=new bn(Ln.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $i(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class G0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class On{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new G0("Invalid base64 string: "+o):o}}(e);return new On(n)}static fromUint8Array(e){const n=function(s){let o="";for(let d=0;d<s.length;++d)o+=String.fromCharCode(s[d]);return o}(e);return new On(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}On.EMPTY_BYTE_STRING=new On("");const w6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(i){if(Ue(!!i),typeof i=="string"){let e=0;const n=w6.exec(i);if(Ue(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dn(i.seconds),nanos:dn(i.nanos)}}function dn(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ar(i){return typeof i=="string"?On.fromBase64String(i):On.fromUint8Array(i)}/**
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
 */function Kh(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Vd(i){const e=i.mapValue.fields.__previous_value__;return Kh(e)?Vd(e):e}function tf(i){const e=Pr(i.mapValue.fields.__local_write_time__.timestampValue);return new wn(e.seconds,e.nanos)}/**
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
 */class b6{constructor(e,n,r,s,o,d,c,h,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=d,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=g}}class rf{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new rf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rf&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Kh(i)?4:S6(i)?9007199254740991:E6(i)?10:11:Se()}function dt(i,e){if(i===e)return!0;const n=xr(i);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return tf(i).isEqual(tf(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const d=Pr(s.timestampValue),c=Pr(o.timestampValue);return d.seconds===c.seconds&&d.nanos===c.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(s,o){return Ar(s.bytesValue).isEqual(Ar(o.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(s,o){return dn(s.geoPointValue.latitude)===dn(o.geoPointValue.latitude)&&dn(s.geoPointValue.longitude)===dn(o.geoPointValue.longitude)}(i,e);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return dn(s.integerValue)===dn(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const d=dn(s.doubleValue),c=dn(o.doubleValue);return d===c?md(d)===md(c):isNaN(d)&&isNaN(c)}return!1}(i,e);case 9:return Rs(i.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(s,o){const d=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ep(d)!==Ep(c))return!1;for(const h in d)if(d.hasOwnProperty(h)&&(c[h]===void 0||!dt(d[h],c[h])))return!1;return!0}(i,e);default:return Se()}}function af(i,e){return(i.values||[]).find(n=>dt(n,e))!==void 0}function Ps(i,e){if(i===e)return 0;const n=xr(i),r=xr(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return function(o,d){const c=dn(o.integerValue||o.doubleValue),h=dn(d.integerValue||d.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(i,e);case 3:return Tp(i.timestampValue,e.timestampValue);case 4:return Tp(tf(i),tf(e));case 5:return Me(i.stringValue,e.stringValue);case 6:return function(o,d){const c=Ar(o),h=Ar(d);return c.compareTo(h)}(i.bytesValue,e.bytesValue);case 7:return function(o,d){const c=o.split("/"),h=d.split("/");for(let g=0;g<c.length&&g<h.length;g++){const _=Me(c[g],h[g]);if(_!==0)return _}return Me(c.length,h.length)}(i.referenceValue,e.referenceValue);case 8:return function(o,d){const c=Me(dn(o.latitude),dn(d.latitude));return c!==0?c:Me(dn(o.longitude),dn(d.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Cp(i.arrayValue,e.arrayValue);case 10:return function(o,d){var c,h,g,_;const E=o.fields||{},w=d.fields||{},I=(c=E.value)===null||c===void 0?void 0:c.arrayValue,A=(h=w.value)===null||h===void 0?void 0:h.arrayValue,B=Me(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((_=A==null?void 0:A.values)===null||_===void 0?void 0:_.length)||0);return B!==0?B:Cp(I,A)}(i.mapValue,e.mapValue);case 11:return function(o,d){if(o===zl.mapValue&&d===zl.mapValue)return 0;if(o===zl.mapValue)return 1;if(d===zl.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),g=d.fields||{},_=Object.keys(g);h.sort(),_.sort();for(let E=0;E<h.length&&E<_.length;++E){const w=Me(h[E],_[E]);if(w!==0)return w;const I=Ps(c[h[E]],g[_[E]]);if(I!==0)return I}return Me(h.length,_.length)}(i.mapValue,e.mapValue);default:throw Se()}}function Tp(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const n=Pr(i),r=Pr(e),s=Me(n.seconds,r.seconds);return s!==0?s:Me(n.nanos,r.nanos)}function Cp(i,e){const n=i.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const o=Ps(n[s],r[s]);if(o)return o}return Me(n.length,r.length)}function As(i){return sh(i)}function sh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Ar(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return _e.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let r="[",s=!0;for(const o of n.values||[])s?s=!1:r+=",",r+=sh(o);return r+"]"}(i.arrayValue):"mapValue"in i?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const d of r)o?o=!1:s+=",",s+=`${d}:${sh(n.fields[d])}`;return s+"}"}(i.mapValue):Se()}function Zl(i){switch(xr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vd(i);return e?16+Zl(e):16;case 5:return 2*i.stringValue.length;case 6:return Ar(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Zl(o),0)}(i.arrayValue);case 10:case 11:return function(r){let s=0;return ya(r.fields,(o,d)=>{s+=o.length+Zl(d)}),s}(i.mapValue);default:throw Se()}}function oh(i){return!!i&&"integerValue"in i}function Qh(i){return!!i&&"arrayValue"in i}function Ip(i){return!!i&&"nullValue"in i}function Rp(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ed(i){return!!i&&"mapValue"in i}function E6(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Go(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ya(i.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Go(r)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Go(i.arrayValue.values[n]);return e}return Object.assign({},i)}function S6(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ti{constructor(e){this.value=e}static empty(){return new Ti({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ed(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Go(n)}setAll(e){let n=Ln.emptyPath(),r={},s=[];e.forEach((d,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,s),r={},s=[],n=c.popLast()}d?r[c.lastSegment()]=Go(d):s.push(c.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,s)}delete(e){const n=this.field(e.popLast());ed(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ed(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ya(n,(s,o)=>e[s]=o);for(const s of r)delete e[s]}clone(){return new Ti(Go(this.value))}}function K0(i){const e=[];return ya(i.fields,(n,r)=>{const s=new Ln([n]);if(ed(r)){const o=K0(r.mapValue).fields;if(o.length===0)e.push(s);else for(const d of o)e.push(s.child(d))}else e.push(s)}),new $i(e)}/**
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
 */class Hn{constructor(e,n,r,s,o,d,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=o,this.data=d,this.documentState=c}static newInvalidDocument(e){return new Hn(e,0,Te.min(),Te.min(),Te.min(),Ti.empty(),0)}static newFoundDocument(e,n,r,s){return new Hn(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new Hn(e,2,n,Te.min(),Te.min(),Ti.empty(),0)}static newUnknownDocument(e,n){return new Hn(e,3,n,Te.min(),Te.min(),Ti.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vd{constructor(e,n){this.position=e,this.inclusive=n}}function Pp(i,e,n){let r=0;for(let s=0;s<i.position.length;s++){const o=e[s],d=i.position[s];if(o.field.isKeyField()?r=_e.comparator(_e.fromName(d.referenceValue),n.key):r=Ps(d,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ap(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!dt(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class pd{constructor(e,n="asc"){this.field=e,this.dir=n}}function T6(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Q0{}class kn extends Q0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new I6(e,n,r):n==="array-contains"?new A6(e,r):n==="in"?new x6(e,r):n==="not-in"?new N6(e,r):n==="array-contains-any"?new D6(e,r):new kn(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new R6(e,r):new P6(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ut extends Q0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ut(e,n)}matches(e){return J0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function J0(i){return i.op==="and"}function Y0(i){return C6(i)&&J0(i)}function C6(i){for(const e of i.filters)if(e instanceof ut)return!1;return!0}function fh(i){if(i instanceof kn)return i.field.canonicalString()+i.op.toString()+As(i.value);if(Y0(i))return i.filters.map(e=>fh(e)).join(",");{const e=i.filters.map(n=>fh(n)).join(",");return`${i.op}(${e})`}}function X0(i,e){return i instanceof kn?function(r,s){return s instanceof kn&&r.op===s.op&&r.field.isEqual(s.field)&&dt(r.value,s.value)}(i,e):i instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,d,c)=>o&&X0(d,s.filters[c]),!0):!1}(i,e):void Se()}function Z0(i){return i instanceof kn?function(n){return`${n.field.canonicalString()} ${n.op} ${As(n.value)}`}(i):i instanceof ut?function(n){return n.op.toString()+" {"+n.getFilters().map(Z0).join(" ,")+"}"}(i):"Filter"}class I6 extends kn{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class R6 extends kn{constructor(e,n){super(e,"in",n),this.keys=ey("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class P6 extends kn{constructor(e,n){super(e,"not-in",n),this.keys=ey("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ey(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class A6 extends kn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qh(n)&&af(n.arrayValue,this.value)}}class x6 extends kn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&af(this.value.arrayValue,n)}}class N6 extends kn{constructor(e,n){super(e,"not-in",n)}matches(e){if(af(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!af(this.value.arrayValue,n)}}class D6 extends kn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>af(this.value.arrayValue,r))}}/**
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
 */class F6{constructor(e,n=null,r=[],s=[],o=null,d=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=d,this.endAt=c,this.ue=null}}function xp(i,e=null,n=[],r=[],s=null,o=null,d=null){return new F6(i,e,n,r,s,o,d)}function Jh(i){const e=Ce(i);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ue=n}return e.ue}function Yh(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!T6(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!X0(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Ap(i.startAt,e.startAt)&&Ap(i.endAt,e.endAt)}function lh(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class jd{constructor(e,n=null,r=[],s=[],o=null,d="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=d,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function M6(i,e,n,r,s,o,d,c){return new jd(i,e,n,r,s,o,d,c)}function Xh(i){return new jd(i)}function Np(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function L6(i){return i.collectionGroup!==null}function Ko(i){const e=Ce(i);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let c=new bn(Ln.comparator);return d.filters.forEach(h=>{h.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new pd(o,r))}),n.has(Ln.keyField().canonicalString())||e.ce.push(new pd(Ln.keyField(),r))}return e.ce}function at(i){const e=Ce(i);return e.le||(e.le=O6(e,Ko(i))),e.le}function O6(i,e){if(i.limitType==="F")return xp(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new pd(s.field,o)});const n=i.endAt?new vd(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new vd(i.startAt.position,i.startAt.inclusive):null;return xp(i.path,i.collectionGroup,e,i.filters,i.limit,n,r)}}function dh(i,e,n){return new jd(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Bd(i,e){return Yh(at(i),at(e))&&i.limitType===e.limitType}function ny(i){return`${Jh(at(i))}|lt:${i.limitType}`}function gs(i){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Z0(s)).join(", ")}]`),Od(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>As(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>As(s)).join(",")),`Target(${r})`}(at(i))}; limitType=${i.limitType})`}function zd(i,e){return e.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):_e.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(i,e)&&function(r,s){for(const o of Ko(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(i,e)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(i,e)&&function(r,s){return!(r.startAt&&!function(d,c,h){const g=Pp(d,c,h);return d.inclusive?g<=0:g<0}(r.startAt,Ko(r),s)||r.endAt&&!function(d,c,h){const g=Pp(d,c,h);return d.inclusive?g>=0:g>0}(r.endAt,Ko(r),s))}(i,e)}function V6(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function iy(i){return(e,n)=>{let r=!1;for(const s of Ko(i)){const o=j6(s,e,n);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function j6(i,e,n){const r=i.field.isKeyField()?_e.comparator(e.key,n.key):function(o,d,c){const h=d.data.field(o),g=c.data.field(o);return h!==null&&g!==null?Ps(h,g):Se()}(i.field,e,n);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return Se()}}/**
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
 */class _a{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ya(this.inner,(n,r)=>{for(const[s,o]of r)e(s,o)})}isEmpty(){return W0(this.inner)}size(){return this.innerSize}}/**
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
 */const B6=new rn(_e.comparator);function $t(){return B6}const ty=new rn(_e.comparator);function qo(...i){let e=ty;for(const n of i)e=e.insert(n.key,n);return e}function ry(i){let e=ty;return i.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ca(){return Qo()}function ay(){return Qo()}function Qo(){return new _a(i=>i.toString(),(i,e)=>i.isEqual(e))}const z6=new rn(_e.comparator),$6=new bn(_e.comparator);function De(...i){let e=$6;for(const n of i)e=e.add(n);return e}const U6=new bn(Me);function q6(){return U6}/**
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
 */function Zh(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:md(e)?"-0":e}}function sy(i){return{integerValue:""+i}}function H6(i,e){return y6(e)?sy(e):Zh(i,e)}/**
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
 */class $d{constructor(){this._=void 0}}function W6(i,e,n){return i instanceof gd?function(s,o){const d={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Kh(o)&&(o=Vd(o)),o&&(d.fields.__previous_value__=o),{mapValue:d}}(n,e):i instanceof sf?fy(i,e):i instanceof of?ly(i,e):function(s,o){const d=oy(s,o),c=Dp(d)+Dp(s.Pe);return oh(d)&&oh(s.Pe)?sy(c):Zh(s.serializer,c)}(i,e)}function G6(i,e,n){return i instanceof sf?fy(i,e):i instanceof of?ly(i,e):n}function oy(i,e){return i instanceof yd?function(r){return oh(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class gd extends $d{}class sf extends $d{constructor(e){super(),this.elements=e}}function fy(i,e){const n=dy(e);for(const r of i.elements)n.some(s=>dt(s,r))||n.push(r);return{arrayValue:{values:n}}}class of extends $d{constructor(e){super(),this.elements=e}}function ly(i,e){let n=dy(e);for(const r of i.elements)n=n.filter(s=>!dt(s,r));return{arrayValue:{values:n}}}class yd extends $d{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Dp(i){return dn(i.integerValue||i.doubleValue)}function dy(i){return Qh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function K6(i,e){return i.field.isEqual(e.field)&&function(r,s){return r instanceof sf&&s instanceof sf||r instanceof of&&s instanceof of?Rs(r.elements,s.elements,dt):r instanceof yd&&s instanceof yd?dt(r.Pe,s.Pe):r instanceof gd&&s instanceof gd}(i.transform,e.transform)}class Q6{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nd(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Ud{}function uy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new hy(i.key,Vt.none()):new gf(i.key,i.data,Vt.none());{const n=i.data,r=Ti.empty();let s=new bn(Ln.comparator);for(let o of e.fields)if(!s.has(o)){let d=n.field(o);d===null&&o.length>1&&(o=o.popLast(),d=n.field(o)),d===null?r.delete(o):r.set(o,d),s=s.add(o)}return new ka(i.key,r,new $i(s.toArray()),Vt.none())}}function J6(i,e,n){i instanceof gf?function(s,o,d){const c=s.value.clone(),h=Mp(s.fieldTransforms,o,d.transformResults);c.setAll(h),o.convertToFoundDocument(d.version,c).setHasCommittedMutations()}(i,e,n):i instanceof ka?function(s,o,d){if(!nd(s.precondition,o))return void o.convertToUnknownDocument(d.version);const c=Mp(s.fieldTransforms,o,d.transformResults),h=o.data;h.setAll(cy(s)),h.setAll(c),o.convertToFoundDocument(d.version,h).setHasCommittedMutations()}(i,e,n):function(s,o,d){o.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,n)}function Jo(i,e,n,r){return i instanceof gf?function(o,d,c,h){if(!nd(o.precondition,d))return c;const g=o.value.clone(),_=Lp(o.fieldTransforms,h,d);return g.setAll(_),d.convertToFoundDocument(d.version,g).setHasLocalMutations(),null}(i,e,n,r):i instanceof ka?function(o,d,c,h){if(!nd(o.precondition,d))return c;const g=Lp(o.fieldTransforms,h,d),_=d.data;return _.setAll(cy(o)),_.setAll(g),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(i,e,n,r):function(o,d,c){return nd(o.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):c}(i,e,n)}function Y6(i,e){let n=null;for(const r of i.fieldTransforms){const s=e.data.field(r.field),o=oy(r.transform,s||null);o!=null&&(n===null&&(n=Ti.empty()),n.set(r.field,o))}return n||null}function Fp(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rs(r,s,(o,d)=>K6(o,d))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class gf extends Ud{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ka extends Ud{constructor(e,n,r,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function cy(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=i.data.field(n);e.set(n,r)}}),e}function Mp(i,e,n){const r=new Map;Ue(i.length===n.length);for(let s=0;s<n.length;s++){const o=i[s],d=o.transform,c=e.data.field(o.field);r.set(o.field,G6(d,c,n[s]))}return r}function Lp(i,e,n){const r=new Map;for(const s of i){const o=s.transform,d=n.data.field(s.field);r.set(s.field,W6(o,d,e))}return r}class hy extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class X6 extends Ud{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z6{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&J6(o,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ay();return this.mutations.forEach(s=>{const o=e.get(s.key),d=o.overlayedDocument;let c=this.applyToLocalView(d,o.mutatedFields);c=n.has(s.key)?null:c;const h=uy(d,c);h!==null&&r.set(s.key,h),d.isValidDocument()||d.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),De())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>Fp(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>Fp(n,r))}}class e1{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ue(e.mutations.length===r.length);let s=function(){return z6}();const o=e.mutations;for(let d=0;d<o.length;d++)s=s.insert(o[d].key,r[d].version);return new e1(e,n,r,s)}}/**
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
 */class e9{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var hn,Ve;function i9(i){switch(i){default:return Se();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function my(i){if(i===void 0)return zt("GRPC error has no .code"),ee.UNKNOWN;switch(i){case hn.OK:return ee.OK;case hn.CANCELLED:return ee.CANCELLED;case hn.UNKNOWN:return ee.UNKNOWN;case hn.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case hn.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case hn.INTERNAL:return ee.INTERNAL;case hn.UNAVAILABLE:return ee.UNAVAILABLE;case hn.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case hn.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case hn.NOT_FOUND:return ee.NOT_FOUND;case hn.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case hn.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case hn.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case hn.ABORTED:return ee.ABORTED;case hn.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case hn.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case hn.DATA_LOSS:return ee.DATA_LOSS;default:return Se()}}(Ve=hn||(hn={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function t9(){return new TextEncoder}/**
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
 */const r9=new ha([4294967295,4294967295],0);function Op(i){const e=t9().encode(i),n=new V0;return n.update(e),new Uint8Array(n.digest())}function Vp(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ha([n,r],0),new ha([s,o],0)]}class n1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ha.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ha.fromNumber(r)));return s.compare(r9)===1&&(s=new ha([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Op(e),[r,s]=Vp(n);for(let o=0;o<this.hashCount;o++){const d=this.Ee(r,s,o);if(!this.de(d))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),d=new n1(o,s,n);return r.forEach(c=>d.insert(c)),d}insert(e){if(this.Te===0)return;const n=Op(e),[r,s]=Vp(n);for(let o=0;o<this.hashCount;o++){const d=this.Ee(r,s,o);this.Ae(d)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qd{constructor(e,n,r,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,yf.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qd(Te.min(),s,new rn(Me),$t(),De())}}class yf{constructor(e,n,r,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yf(r,n,De(),De(),De())}}/**
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
 */class id{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class vy{constructor(e,n){this.targetId=e,this.me=n}}class py{constructor(e,n,r=On.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jp{constructor(){this.fe=0,this.ge=Bp(),this.pe=On.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),n=De(),r=De();return this.ge.forEach((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Se()}}),new yf(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Bp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class a9{constructor(e){this.Le=e,this.Be=new Map,this.ke=$t(),this.qe=$l(),this.Qe=$l(),this.Ke=new rn(Me)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:Se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const o=s.target;if(lh(o))if(r===0){const d=new _e(o.path);this.We(n,d,Hn.newNoDocument(d,Te.min()))}else Ue(r===1);else{const d=this.Ze(n);if(d!==r){const c=this.Xe(e),h=c?this.et(c,e,d):1;if(h!==0){this.He(n);const g=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,g)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=n;let d,c;try{d=Ar(r).toUint8Array()}catch(h){if(h instanceof G0)return Is("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new n1(d,s,o)}catch(h){return Is(h instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(o=>{const d=this.Le.nt(),c=`projects/${d.projectId}/databases/${d.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.We(n,o,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((o,d)=>{const c=this.Ye(d);if(c){if(o.current&&lh(c.target)){const h=new _e(c.target.path);this.st(h).has(d)||this.ot(d,h)||this.We(d,h,Hn.newNoDocument(h,e))}o.be&&(n.set(d,o.ve()),o.Ce())}});let r=De();this.Qe.forEach((o,d)=>{let c=!0;d.forEachWhile(h=>{const g=this.Ye(h);return!g||g.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,d)=>d.setReadTime(e));const s=new qd(e,n,this.Ke,this.ke,r);return this.ke=$t(),this.qe=$l(),this.Qe=$l(),this.Ke=new rn(Me),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new jp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new bn(Me),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new bn(Me),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new jp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $l(){return new rn(_e.comparator)}function Bp(){return new rn(_e.comparator)}const s9={asc:"ASCENDING",desc:"DESCENDING"},o9={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f9={and:"AND",or:"OR"};class l9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uh(i,e){return i.useProto3Json||Od(e)?e:{value:e}}function _d(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gy(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function d9(i,e){return _d(i,e.toTimestamp())}function st(i){return Ue(!!i),Te.fromTimestamp(function(n){const r=Pr(n);return new wn(r.seconds,r.nanos)}(i))}function i1(i,e){return ch(i,e).canonicalString()}function ch(i,e){const n=function(s){return new on(["projects",s.projectId,"databases",s.database])}(i).child("documents");return e===void 0?n:n.child(e)}function yy(i){const e=on.fromString(i);return Ue(Ey(e)),e}function hh(i,e){return i1(i.databaseId,e.path)}function Oc(i,e){const n=yy(e);if(n.get(1)!==i.databaseId.projectId)throw new ye(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new ye(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new _e(ky(n))}function _y(i,e){return i1(i.databaseId,e)}function u9(i){const e=yy(i);return e.length===4?on.emptyPath():ky(e)}function mh(i){return new on(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ky(i){return Ue(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function zp(i,e,n){return{name:hh(i,e),fields:n.value.mapValue.fields}}function c9(i,e){let n;if("targetChange"in e){e.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=function(g,_){return g.useProto3Json?(Ue(_===void 0||typeof _=="string"),On.fromBase64String(_||"")):(Ue(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),On.fromUint8Array(_||new Uint8Array))}(i,e.targetChange.resumeToken),d=e.targetChange.cause,c=d&&function(g){const _=g.code===void 0?ee.UNKNOWN:my(g.code);return new ye(_,g.message||"")}(d);n=new py(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(i,r.document.name),o=st(r.document.updateTime),d=r.document.createTime?st(r.document.createTime):Te.min(),c=new Ti({mapValue:{fields:r.document.fields}}),h=Hn.newFoundDocument(s,o,d,c),g=r.targetIds||[],_=r.removedTargetIds||[];n=new id(g,_,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(i,r.document),o=r.readTime?st(r.readTime):Te.min(),d=Hn.newNoDocument(s,o),c=r.removedTargetIds||[];n=new id([],c,d.key,d)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(i,r.document),o=r.removedTargetIds||[];n=new id([],o,s,null)}else{if(!("filter"in e))return Se();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,d=new n9(s,o),c=r.targetId;n=new vy(c,d)}}return n}function h9(i,e){let n;if(e instanceof gf)n={update:zp(i,e.key,e.value)};else if(e instanceof hy)n={delete:hh(i,e.key)};else if(e instanceof ka)n={update:zp(i,e.key,e.data),updateMask:b9(e.fieldMask)};else{if(!(e instanceof X6))return Se();n={verify:hh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,d){const c=d.transform;if(c instanceof gd)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof sf)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof of)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof yd)return{fieldPath:d.field.canonicalString(),increment:c.Pe};throw Se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:d9(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:Se()}(i,e.precondition)),n}function m9(i,e){return i&&i.length>0?(Ue(e!==void 0),i.map(n=>function(s,o){let d=s.updateTime?st(s.updateTime):st(o);return d.isEqual(Te.min())&&(d=st(o)),new Q6(d,s.transformResults||[])}(n,e))):[]}function v9(i,e){return{documents:[_y(i,e.path)]}}function p9(i,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_y(i,s);const o=function(g){if(g.length!==0)return by(ut.create(g,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const d=function(g){if(g.length!==0)return g.map(_=>function(w){return{field:ys(w.field),direction:_9(w.dir)}}(_))}(e.orderBy);d&&(n.structuredQuery.orderBy=d);const c=uh(i,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ct:n,parent:s}}function g9(i){let e=u9(i.parent);const n=i.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1);const _=n.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let o=[];n.where&&(o=function(E){const w=wy(E);return w instanceof ut&&Y0(w)?w.getFilters():[w]}(n.where));let d=[];n.orderBy&&(d=function(E){return E.map(w=>function(A){return new pd(_s(A.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(w))}(n.orderBy));let c=null;n.limit&&(c=function(E){let w;return w=typeof E=="object"?E.value:E,Od(w)?null:w}(n.limit));let h=null;n.startAt&&(h=function(E){const w=!!E.before,I=E.values||[];return new vd(I,w)}(n.startAt));let g=null;return n.endAt&&(g=function(E){const w=!E.before,I=E.values||[];return new vd(I,w)}(n.endAt)),M6(e,s,d,o,c,"F",h,g)}function y9(i,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function wy(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return kn.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return kn.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=_s(n.unaryFilter.field);return kn.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=_s(n.unaryFilter.field);return kn.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(i):i.fieldFilter!==void 0?function(n){return kn.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return ut.create(n.compositeFilter.filters.map(r=>wy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Se()}}(n.compositeFilter.op))}(i):Se()}function _9(i){return s9[i]}function k9(i){return o9[i]}function w9(i){return f9[i]}function ys(i){return{fieldPath:i.canonicalString()}}function _s(i){return Ln.fromServerFormat(i.fieldPath)}function by(i){return i instanceof kn?function(n){if(n.op==="=="){if(Rp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(Ip(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(Ip(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:k9(n.op),value:n.value}}}(i):i instanceof ut?function(n){const r=n.getFilters().map(s=>by(s));return r.length===1?r[0]:{compositeFilter:{op:w9(n.op),filters:r}}}(i):Se()}function b9(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ey(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,o=Te.min(),d=Te.min(),c=On.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class E9{constructor(e){this.ht=e}}function S9(i){const e=g9({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?dh(e,e.limit,"L"):e}/**
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
 */class T9{constructor(){this.ln=new C9}addToCollectionParentIndex(e,n){return this.ln.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Rr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class C9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new bn(on.comparator),o=!s.has(r);return this.index[n]=s.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new bn(on.comparator)).toArray()}}/**
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
 */const $p={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ai{static withCacheSize(e){return new ai(e,ai.DEFAULT_COLLECTION_PERCENTILE,ai.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ai.DEFAULT_COLLECTION_PERCENTILE=10,ai.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ai.DEFAULT=new ai(41943040,ai.DEFAULT_COLLECTION_PERCENTILE,ai.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ai.DISABLED=new ai(-1,0,0);/**
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
 */class xs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new xs(0)}static Qn(){return new xs(-1)}}/**
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
 */function Up([i,e],[n,r]){const s=Me(i,n);return s===0?Me(e,r):s}class I9{constructor(e){this.Gn=e,this.buffer=new bn(Up),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Up(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class R9{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){fe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?fe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await $s(n)}await this.Yn(3e5)})}}class P9{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return K.resolve(Ld.oe);const r=new I9(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve($p)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$p):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,o,d,c,h,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,d=Date.now(),this.nthSequenceNumber(e,s))).next(E=>(r=E,c=Date.now(),this.removeTargets(e,r,n))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(g=Date.now(),ps()<=Ne.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-_}ms
	Determined least recently used ${s} in `+(c-d)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(g-h)+`ms
Total Duration: ${g-_}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function A9(i,e){return new P9(i,e)}/**
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
 */class x9{constructor(){this.changes=new _a(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class N9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class D9{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Jo(r.mutation,s,$i.empty(),wn.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,n,r=De()){const s=ca();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(o=>{let d=qo();return o.forEach((c,h)=>{d=d.insert(c,h.overlayedDocument)}),d}))}getOverlayedDocuments(e,n){const r=ca();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,De()))}populateOverlays(e,n,r){const s=[];return r.forEach(o=>{n.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(e,s).next(o=>{o.forEach((d,c)=>{n.set(d,c)})})}computeViews(e,n,r,s){let o=$t();const d=Qo(),c=function(){return Qo()}();return n.forEach((h,g)=>{const _=r.get(g.key);s.has(g.key)&&(_===void 0||_.mutation instanceof ka)?o=o.insert(g.key,g):_!==void 0?(d.set(g.key,_.mutation.getFieldMask()),Jo(_.mutation,g,_.mutation.getFieldMask(),wn.now())):d.set(g.key,$i.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((g,_)=>d.set(g,_)),n.forEach((g,_)=>{var E;return c.set(g,new N9(_,(E=d.get(g))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Qo();let s=new rn((d,c)=>d-c),o=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(d=>{for(const c of d)c.keys().forEach(h=>{const g=n.get(h);if(g===null)return;let _=r.get(h)||$i.empty();_=c.applyToLocalView(g,_),r.set(h,_);const E=(s.get(c.batchId)||De()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const d=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),g=h.key,_=h.value,E=ay();_.forEach(w=>{if(!o.has(w)){const I=uy(n.get(w),r.get(w));I!==null&&E.set(w,I),o=o.add(w)}}),d.push(this.documentOverlayCache.saveOverlays(e,g,E))}return K.waitFor(d)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(d){return _e.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L6(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(o=>{const d=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-o.size):K.resolve(ca());let c=-1,h=o;return d.next(g=>K.forEach(g,(_,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(_)?K.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{h=h.insert(_,w)}))).next(()=>this.populateOverlays(e,g,o)).next(()=>this.computeViews(e,h,g,De())).next(_=>({batchId:c,changes:ry(_)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let s=qo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const o=n.collectionGroup;let d=qo();return this.indexManager.getCollectionParents(e,o).next(c=>K.forEach(c,h=>{const g=function(E,w){return new jd(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,g,r,s).next(_=>{_.forEach((E,w)=>{d=d.insert(E,w)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,n,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(d=>(o=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,s))).next(d=>{o.forEach((h,g)=>{const _=g.getKey();d.get(_)===null&&(d=d.insert(_,Hn.newInvalidDocument(_)))});let c=qo();return d.forEach((h,g)=>{const _=o.get(h);_!==void 0&&Jo(_.mutation,g,$i.empty(),wn.now()),zd(n,g)&&(c=c.insert(h,g))}),c})}}/**
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
 */class F9{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return K.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:st(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:S9(s.bundledQuery),readTime:st(s.readTime)}}(n)),K.resolve()}}/**
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
 */class M9{constructor(){this.overlays=new rn(_e.comparator),this.Er=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ca();return K.forEach(n,s=>this.getOverlay(e,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,o)=>{this.Tt(e,n,o)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=ca(),o=n.length+1,d=new _e(n.child("")),c=this.overlays.getIteratorFrom(d);for(;c.hasNext();){const h=c.getNext().value,g=h.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let o=new rn((g,_)=>g-_);const d=this.overlays.getIterator();for(;d.hasNext();){const g=d.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>r){let _=o.get(g.largestBatchId);_===null&&(_=ca(),o=o.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const c=ca(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((g,_)=>c.set(g,_)),!(c.size()>=s)););return K.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const d=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,d)}this.overlays=this.overlays.insert(r.key,new e9(n,r));let o=this.Er.get(n);o===void 0&&(o=De(),this.Er.set(n,o)),this.Er.set(n,o.add(r.key))}}/**
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
 */class L9{constructor(){this.sessionToken=On.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
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
 */class t1{constructor(){this.dr=new bn(Rn.Ar),this.Rr=new bn(Rn.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Rn(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Rn(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new _e(new on([])),r=new Rn(n,e),s=new Rn(n,e+1),o=[];return this.Rr.forEachInRange([r,s],d=>{this.gr(d),o.push(d.key)}),o}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new _e(new on([])),r=new Rn(n,e),s=new Rn(n,e+1);let o=De();return this.Rr.forEachInRange([r,s],d=>{o=o.add(d.key)}),o}containsKey(e){const n=new Rn(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Rn{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return _e.comparator(e.key,n.key)||Me(e.br,n.br)}static Vr(e,n){return Me(e.br,n.br)||_e.comparator(e.key,n.key)}}/**
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
 */class O9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new bn(Rn.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new Z6(o,n,r,s);this.mutationQueue.push(d);for(const c of s)this.vr=this.vr.add(new Rn(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(d)}lookupMutationBatch(e,n){return K.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),o=s<0?0:s;return K.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Rn(n,0),s=new Rn(n,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],d=>{const c=this.Cr(d.br);o.push(c)}),K.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new bn(Me);return n.forEach(s=>{const o=new Rn(s,0),d=new Rn(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,d],c=>{r=r.add(c.br)})}),K.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let o=r;_e.isDocumentKey(o)||(o=o.child(""));const d=new Rn(new _e(o),0);let c=new bn(Me);return this.vr.forEachWhile(h=>{const g=h.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(c=c.add(h.br)),!0)},d),K.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return K.forEach(n.mutations,s=>{const o=new Rn(s.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Rn(n,0),s=this.vr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class V9{constructor(e){this.Nr=e,this.docs=function(){return new rn(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),o=s?s.size:0,d=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:d}),this.size+=d-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Hn.newInvalidDocument(n))}getEntries(e,n){let r=$t();return n.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Hn.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let o=$t();const d=n.path,c=new _e(d.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:g,value:{document:_}}=h.getNext();if(!d.isPrefixOf(g.path))break;g.path.length>d.length+1||m6(h6(_),r)<=0||(s.has(_.key)||zd(n,_))&&(o=o.insert(_.key,_.mutableCopy()))}return K.resolve(o)}getAllFromCollectionGroup(e,n,r,s){Se()}Lr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j9(this)}getSize(e){return K.resolve(this.size)}}class j9 extends x9{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class B9{constructor(e){this.persistence=e,this.Br=new _a(n=>Jh(n),Yh),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new t1,this.targetCount=0,this.Qr=xs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),K.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new xs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Un(n),K.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const o=[];return this.Br.forEach((d,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(d),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(o).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach(d=>{o.push(s.markPotentiallyOrphaned(e,d))}),K.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.qr.containsKey(n))}}/**
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
 */class Sy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Ld(0),this.Ur=!1,this.Ur=!0,this.Wr=new L9,this.referenceDelegate=e(this),this.Gr=new B9(this),this.indexManager=new T9,this.remoteDocumentCache=function(s){return new V9(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new E9(n),this.jr=new F9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new O9(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){fe("MemoryPersistence","Starting transaction:",e);const s=new z9(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(e,n){return K.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class z9 extends p6{constructor(e){super(),this.currentSequenceNumber=e}}class r1{constructor(e){this.persistence=e,this.Zr=new t1,this.Xr=null}static ei(e){return new r1(e)}get ti(){if(this.Xr)return this.Xr;throw Se()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),K.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,r=>{const s=_e.fromPath(r);return this.ni(e,s).next(o=>{o||n.removeEntry(s,Te.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return K.or([()=>K.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class kd{constructor(e,n){this.persistence=e,this.ri=new _a(r=>_6(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=A9(this,n)}static ei(e,n){return new kd(e,n)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return K.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(o=>o?K.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(e,d=>this.ir(e,d,n).next(c=>{c||(r++,o.removeEntry(d,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zl(e.data.value)),n}ir(e,n,r){return K.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class a1{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=De(),s=De();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new a1(e,n.fromCache,r,s)}}/**
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
 */class $9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U9{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return R2()?8:g6(Wn())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const o={result:null};return this.Xi(e,n).next(d=>{o.result=d}).next(()=>{if(!o.result)return this.es(e,n,s,r).next(d=>{o.result=d})}).next(()=>{if(o.result)return;const d=new $9;return this.ts(e,n,d).next(c=>{if(o.result=c,this.Hi)return this.ns(e,n,d,c.size)})}).next(()=>o.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ps()<=Ne.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(ps()<=Ne.DEBUG&&fe("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ps()<=Ne.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,at(n))):K.resolve())}Xi(e,n){if(Np(n))return K.resolve(null);let r=at(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=dh(n,null,"F"),r=at(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const d=De(...o);return this.Zi.getDocuments(e,d).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const g=this.rs(n,c);return this.ss(n,g,d,h.readTime)?this.Xi(e,dh(n,null,"F")):this.os(e,g,n,h)}))})))}es(e,n,r,s){return Np(n)||s.isEqual(Te.min())?K.resolve(null):this.Zi.getDocuments(e,r).next(o=>{const d=this.rs(n,o);return this.ss(n,d,r,s)?K.resolve(null):(ps()<=Ne.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.os(e,d,n,c6(s,-1)).next(c=>c))})}rs(e,n){let r=new bn(iy(e));return n.forEach((s,o)=>{zd(e,o)&&(r=r.add(o))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(e,n,r){return ps()<=Ne.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(o=>(n.forEach(d=>{o=o.insert(d.key,d)}),o))}}/**
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
 */class q9{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new rn(Me),this.cs=new _a(o=>Jh(o),Yh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D9(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function H9(i,e,n,r){return new q9(i,e,n,r)}async function Ty(i,e){const n=Ce(i);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const d=[],c=[];let h=De();for(const g of s){d.push(g.batchId);for(const _ of g.mutations)h=h.add(_.key)}for(const g of o){c.push(g.batchId);for(const _ of g.mutations)h=h.add(_.key)}return n.localDocuments.getDocuments(r,h).next(g=>({Ts:g,removedBatchIds:d,addedBatchIds:c}))})})}function W9(i,e){const n=Ce(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),o=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,g,_){const E=g.batch,w=E.keys();let I=K.resolve();return w.forEach(A=>{I=I.next(()=>_.getEntry(h,A)).next(B=>{const M=g.docVersions.get(A);Ue(M!==null),B.version.compareTo(M)<0&&(E.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),_.addEntry(B)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=De();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(h=h.add(c.batch.mutations[g].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Cy(i){const e=Ce(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function G9(i,e){const n=Ce(i),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const d=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((_,E)=>{const w=s.get(E);if(!w)return;c.push(n.Gr.removeMatchingKeys(o,_.removedDocuments,E).next(()=>n.Gr.addMatchingKeys(o,_.addedDocuments,E)));let I=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?I=I.withResumeToken(On.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(_.resumeToken,r)),s=s.insert(E,I),function(B,M,q){return B.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(w,I,_)&&c.push(n.Gr.updateTargetData(o,I))});let h=$t(),g=De();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(K9(o,d,e.documentUpdates).next(_=>{h=_.Is,g=_.Es})),!r.isEqual(Te.min())){const _=n.Gr.getLastRemoteSnapshotVersion(o).next(E=>n.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return K.waitFor(c).next(()=>d.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,h,g)).next(()=>h)}).then(o=>(n.us=s,o))}function K9(i,e,n){let r=De(),s=De();return n.forEach(o=>r=r.add(o)),e.getEntries(i,r).next(o=>{let d=$t();return n.forEach((c,h)=>{const g=o.get(c);h.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(Te.min())?(e.removeEntry(c,h.readTime),d=d.insert(c,h)):!g.isValidDocument()||h.version.compareTo(g.version)>0||h.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(h),d=d.insert(c,h)):fe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",g.version," Watch version:",h.version)}),{Is:d,Es:s}})}function Q9(i,e){const n=Ce(i);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J9(i,e){const n=Ce(i);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(o=>o?(s=o,K.resolve(s)):n.Gr.allocateTargetId(r).next(d=>(s=new _r(e,d,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function vh(i,e,n){const r=Ce(i),s=r.us.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,d=>r.persistence.referenceDelegate.removeTarget(d,s))}catch(d){if(!Us(d))throw d;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${d}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function qp(i,e,n){const r=Ce(i);let s=Te.min(),o=De();return r.persistence.runTransaction("Execute query","readwrite",d=>function(h,g,_){const E=Ce(h),w=E.cs.get(_);return w!==void 0?K.resolve(E.us.get(w)):E.Gr.getTargetData(g,_)}(r,d,at(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(d,c.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(d,e,n?s:Te.min(),n?o:De())).next(c=>(Y9(r,V6(e),c),{documents:c,ds:o})))}function Y9(i,e,n){let r=i.ls.get(e)||Te.min();n.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),i.ls.set(e,r)}class Hp{constructor(){this.activeTargetIds=q6()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class X9{constructor(){this._o=new Hp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Hp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Z9{uo(e){}shutdown(){}}/**
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
 */class Wp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ul=null;function Vc(){return Ul===null?Ul=function(){return 268435456+Math.round(2147483648*Math.random())}():Ul++,"0x"+Ul.toString(16)}/**
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
 */const eE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nE{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const $n="WebChannelConnection";class iE extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(n,r,s,o,d){const c=Vc(),h=this.No(n,r.toUriEncodedString());fe("RestConnection",`Sending RPC '${n}' ${c}:`,h,s);const g={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(g,o,d),this.Bo(n,h,g,s).then(_=>(fe("RestConnection",`Received RPC '${n}' ${c}: `,_),_),_=>{throw Is("RestConnection",`RPC '${n}' ${c} failed with error: `,_,"url: ",h,"request:",s),_})}ko(n,r,s,o,d,c){return this.Oo(n,r,s,o,d)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,d)=>n[d]=o),s&&s.headers.forEach((o,d)=>n[d]=o)}No(n,r){const s=eE[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const o=Vc();return new Promise((d,c)=>{const h=new j0;h.setWithCredentials(!0),h.listenOnce(B0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xl.NO_ERROR:const _=h.getResponseJson();fe($n,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),d(_);break;case Xl.TIMEOUT:fe($n,`RPC '${e}' ${o} timed out`),c(new ye(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Xl.HTTP_ERROR:const E=h.getStatus();if(fe($n,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const A=function(M){const q=M.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(q)>=0?q:ee.UNKNOWN}(I.status);c(new ye(A,I.message))}else c(new ye(ee.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new ye(ee.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{fe($n,`RPC '${e}' ${o} completed.`)}});const g=JSON.stringify(s);fe($n,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",g,r,15)})}qo(e,n,r){const s=Vc(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=U0(),c=$0(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(h.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,n,r),h.encodeInitMessageHeaders=!0;const _=o.join("");fe($n,`Creating RPC '${e}' stream ${s}: ${_}`,h);const E=d.createWebChannel(_,h);let w=!1,I=!1;const A=new nE({Eo:M=>{I?fe($n,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(w||(fe($n,`Opening RPC '${e}' stream ${s} transport.`),E.open(),w=!0),fe($n,`RPC '${e}' stream ${s} sending:`,M),E.send(M))},Ao:()=>E.close()}),B=(M,q,W)=>{M.listen(q,re=>{try{W(re)}catch(ae){setTimeout(()=>{throw ae},0)}})};return B(E,Uo.EventType.OPEN,()=>{I||(fe($n,`RPC '${e}' stream ${s} transport opened.`),A.So())}),B(E,Uo.EventType.CLOSE,()=>{I||(I=!0,fe($n,`RPC '${e}' stream ${s} transport closed`),A.Do())}),B(E,Uo.EventType.ERROR,M=>{I||(I=!0,Is($n,`RPC '${e}' stream ${s} transport errored:`,M),A.Do(new ye(ee.UNAVAILABLE,"The operation could not be completed")))}),B(E,Uo.EventType.MESSAGE,M=>{var q;if(!I){const W=M.data[0];Ue(!!W);const re=W,ae=(re==null?void 0:re.error)||((q=re[0])===null||q===void 0?void 0:q.error);if(ae){fe($n,`RPC '${e}' stream ${s} received error:`,ae);const we=ae.status;let be=function(S){const P=hn[S];if(P!==void 0)return my(P)}(we),D=ae.message;be===void 0&&(be=ee.INTERNAL,D="Unknown error status: "+we+" with message "+ae.message),I=!0,A.Do(new ye(be,D)),E.close()}else fe($n,`RPC '${e}' stream ${s} received:`,W),A.vo(W)}}),B(c,z0.STAT_EVENT,M=>{M.stat===ah.PROXY?fe($n,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===ah.NOPROXY&&fe($n,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function jc(){return typeof document<"u"?document:null}/**
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
 */function Hd(i){return new l9(i,!0)}/**
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
 */class Iy{constructor(e,n,r=1e3,s=1.5,o=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Ry{constructor(e,n,r,s,o,d,c,h){this.li=e,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Iy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?(zt(n.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ye(ee.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tE extends Ry{constructor(e,n,r,s,o,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,d),this.serializer=o}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=c9(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const d=o.targetChange;return d.targetIds&&d.targetIds.length?Te.min():d.readTime?st(d.readTime):Te.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=mh(this.serializer),n.addTarget=function(o,d){let c;const h=d.target;if(c=lh(h)?{documents:v9(o,h)}:{query:p9(o,h).ct},c.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){c.resumeToken=gy(o,d.resumeToken);const g=uh(o,d.expectedCount);g!==null&&(c.expectedCount=g)}else if(d.snapshotVersion.compareTo(Te.min())>0){c.readTime=_d(o,d.snapshotVersion.toTimestamp());const g=uh(o,d.expectedCount);g!==null&&(c.expectedCount=g)}return c}(this.serializer,e);const r=y9(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=mh(this.serializer),n.removeTarget=e,this.c_(n)}}class rE extends Ry{constructor(e,n,r,s,o,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,d),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=m9(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=mh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>h9(this.serializer,r))};this.c_(n)}}/**
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
 */class aE extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ye(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,d])=>this.connection.Oo(e,ch(n,r),s,o,d)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ye(ee.UNKNOWN,o.toString())})}ko(e,n,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,c])=>this.connection.ko(e,ch(n,r),s,d,c,o)).catch(d=>{throw d.name==="FirebaseError"?(d.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ye(ee.UNKNOWN,d.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(zt(n),this.C_=!1):fe("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class oE{constructor(e,n,r,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(d=>{r.enqueueAndForget(async()=>{wa(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(h){const g=Ce(h);g.k_.add(4),await _f(g),g.K_.set("Unknown"),g.k_.delete(4),await Wd(g)}(this))})}),this.K_=new sE(r,s)}}async function Wd(i){if(wa(i))for(const e of i.q_)await e(!0)}async function _f(i){for(const e of i.q_)await e(!1)}function Py(i,e){const n=Ce(i);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),l1(n)?f1(n):qs(n).s_()&&o1(n,e))}function s1(i,e){const n=Ce(i),r=qs(n);n.B_.delete(e),r.s_()&&Ay(n,e),n.B_.size===0&&(r.s_()?r.a_():wa(n)&&n.K_.set("Unknown"))}function o1(i,e){if(i.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qs(i).V_(e)}function Ay(i,e){i.U_.xe(e),qs(i).m_(e)}function f1(i){i.U_=new a9({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>i.B_.get(e)||null,nt:()=>i.datastore.serializer.databaseId}),qs(i).start(),i.K_.F_()}function l1(i){return wa(i)&&!qs(i).i_()&&i.B_.size>0}function wa(i){return Ce(i).k_.size===0}function xy(i){i.U_=void 0}async function fE(i){i.K_.set("Online")}async function lE(i){i.B_.forEach((e,n)=>{o1(i,e)})}async function dE(i,e){xy(i),l1(i)?(i.K_.O_(e),f1(i)):i.K_.set("Unknown")}async function uE(i,e,n){if(i.K_.set("Online"),e instanceof py&&e.state===2&&e.cause)try{await async function(s,o){const d=o.cause;for(const c of o.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,d),s.B_.delete(c),s.U_.removeTarget(c))}(i,e)}catch(r){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wd(i,r)}else if(e instanceof id?i.U_.$e(e):e instanceof vy?i.U_.Je(e):i.U_.Ge(e),!n.isEqual(Te.min()))try{const r=await Cy(i.localStore);n.compareTo(r)>=0&&await function(o,d){const c=o.U_.it(d);return c.targetChanges.forEach((h,g)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.B_.get(g);_&&o.B_.set(g,_.withResumeToken(h.resumeToken,d))}}),c.targetMismatches.forEach((h,g)=>{const _=o.B_.get(h);if(!_)return;o.B_.set(h,_.withResumeToken(On.EMPTY_BYTE_STRING,_.snapshotVersion)),Ay(o,h);const E=new _r(_.target,h,g,_.sequenceNumber);o1(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(i,n)}catch(r){fe("RemoteStore","Failed to raise snapshot:",r),await wd(i,r)}}async function wd(i,e,n){if(!Us(e))throw e;i.k_.add(1),await _f(i),i.K_.set("Offline"),n||(n=()=>Cy(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await n(),i.k_.delete(1),await Wd(i)})}function Ny(i,e){return e().catch(n=>wd(i,n,e))}async function Gd(i){const e=Ce(i),n=Nr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;cE(e);)try{const s=await Q9(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,hE(e,s)}catch(s){await wd(e,s)}Dy(e)&&Fy(e)}function cE(i){return wa(i)&&i.L_.length<10}function hE(i,e){i.L_.push(e);const n=Nr(i);n.s_()&&n.f_&&n.g_(e.mutations)}function Dy(i){return wa(i)&&!Nr(i).i_()&&i.L_.length>0}function Fy(i){Nr(i).start()}async function mE(i){Nr(i).w_()}async function vE(i){const e=Nr(i);for(const n of i.L_)e.g_(n.mutations)}async function pE(i,e,n){const r=i.L_.shift(),s=e1.from(r,e,n);await Ny(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await Gd(i)}async function gE(i,e){e&&Nr(i).f_&&await async function(r,s){if(function(d){return i9(d)&&d!==ee.ABORTED}(s.code)){const o=r.L_.shift();Nr(r).__(),await Ny(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gd(r)}}(i,e),Dy(i)&&Fy(i)}async function Gp(i,e){const n=Ce(i);n.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const r=wa(n);n.k_.add(3),await _f(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Wd(n)}async function yE(i,e){const n=Ce(i);e?(n.k_.delete(2),await Wd(n)):e||(n.k_.add(2),await _f(n),n.K_.set("Unknown"))}function qs(i){return i.W_||(i.W_=function(n,r,s){const o=Ce(n);return o.b_(),new tE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(i.datastore,i.asyncQueue,{Ro:fE.bind(null,i),mo:lE.bind(null,i),po:dE.bind(null,i),R_:uE.bind(null,i)}),i.q_.push(async e=>{e?(i.W_.__(),l1(i)?f1(i):i.K_.set("Unknown")):(await i.W_.stop(),xy(i))})),i.W_}function Nr(i){return i.G_||(i.G_=function(n,r,s){const o=Ce(n);return o.b_(),new rE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(i.datastore,i.asyncQueue,{Ro:()=>Promise.resolve(),mo:mE.bind(null,i),po:gE.bind(null,i),p_:vE.bind(null,i),y_:pE.bind(null,i)}),i.q_.push(async e=>{e?(i.G_.__(),await Gd(i)):(await i.G_.stop(),i.L_.length>0&&(fe("RemoteStore",`Stopping write stream with ${i.L_.length} pending writes`),i.L_=[]))})),i.G_}/**
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
 */class d1{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const d=Date.now()+r,c=new d1(e,n,d,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function u1(i,e){if(zt("AsyncQueue",`${e}: ${i}`),Us(i))return new ye(ee.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new rn(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Kp{constructor(){this.z_=new rn(_e.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):Se():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ns{constructor(e,n,r,s,o,d,c,h,g){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=d,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=g}static fromInitialDocuments(e,n,r,s,o){const d=[];return n.forEach(c=>{d.push({type:0,doc:c})}),new Ns(e,n,Es.emptySet(n),d,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _E{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class kE{constructor(){this.queries=Qp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=Ce(n),o=s.queries;s.queries=Qp(),o.forEach((d,c)=>{for(const h of c.J_)h.onError(r)})})(this,new ye(ee.ABORTED,"Firestore shutting down"))}}function Qp(){return new _a(i=>ny(i),Bd)}async function wE(i,e){const n=Ce(i);let r=3;const s=e.query;let o=n.queries.get(s);o?!o.Y_()&&e.Z_()&&(r=2):(o=new _E,r=e.Z_()?0:1);try{switch(r){case 0:o.H_=await n.onListen(s,!0);break;case 1:o.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(d){const c=u1(d,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,o),o.J_.push(e),e.ea(n.onlineState),o.H_&&e.ta(o.H_)&&c1(n)}async function bE(i,e){const n=Ce(i),r=e.query;let s=3;const o=n.queries.get(r);if(o){const d=o.J_.indexOf(e);d>=0&&(o.J_.splice(d,1),o.J_.length===0?s=e.Z_()?0:1:!o.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EE(i,e){const n=Ce(i);let r=!1;for(const s of e){const o=s.query,d=n.queries.get(o);if(d){for(const c of d.J_)c.ta(s)&&(r=!0);d.H_=s}}r&&c1(n)}function SE(i,e,n){const r=Ce(i),s=r.queries.get(e);if(s)for(const o of s.J_)o.onError(n);r.queries.delete(e)}function c1(i){i.X_.forEach(e=>{e.next()})}var ph,Jp;(Jp=ph||(ph={})).na="default",Jp.Cache="cache";class TE{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ph.Cache}}/**
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
 */class My{constructor(e){this.key=e}}class Ly{constructor(e){this.key=e}}class CE{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=De(),this.mutatedKeys=De(),this.Va=iy(e),this.ma=new Es(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Kp,s=n?n.ma:this.ma;let o=n?n.mutatedKeys:this.mutatedKeys,d=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,E)=>{const w=s.get(_),I=zd(this.query,E)?E:null,A=!!w&&this.mutatedKeys.has(w.key),B=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let M=!1;w&&I?w.data.isEqual(I.data)?A!==B&&(r.track({type:3,doc:I}),M=!0):this.ya(w,I)||(r.track({type:2,doc:I}),M=!0,(h&&this.Va(I,h)>0||g&&this.Va(I,g)<0)&&(c=!0)):!w&&I?(r.track({type:0,doc:I}),M=!0):w&&!I&&(r.track({type:1,doc:w}),M=!0,(h||g)&&(c=!0)),M&&(I?(d=d.add(I),o=B?o.add(_):o.delete(_)):(d=d.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;d.size>this.query.limit;){const _=this.query.limitType==="F"?d.last():d.first();d=d.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{ma:d,pa:r,ss:c,mutatedKeys:o}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const o=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const d=e.pa.j_();d.sort((_,E)=>function(I,A){const B=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return B(I)-B(A)}(_.type,E.type)||this.Va(_.doc,E.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],h=this.Ra.size===0&&this.current&&!s?1:0,g=h!==this.Aa;return this.Aa=h,d.length!==0||g?{snapshot:new Ns(this.query,e.ma,o,d,e.mutatedKeys,h===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Kp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=De(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new Ly(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new My(r))}),n}va(e){this.da=e.ds,this.Ra=De();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Ns.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class IE{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class RE{constructor(e){this.key=e,this.Fa=!1}}class PE{constructor(e,n,r,s,o,d){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=d,this.Ma={},this.xa=new _a(c=>ny(c),Bd),this.Oa=new Map,this.Na=new Set,this.La=new rn(_e.comparator),this.Ba=new Map,this.ka=new t1,this.qa={},this.Qa=new Map,this.Ka=xs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function AE(i,e,n=!0){const r=$y(i);let s;const o=r.xa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await Oy(r,e,n,!0),s}async function xE(i,e){const n=$y(i);await Oy(n,e,!0,!1)}async function Oy(i,e,n,r){const s=await J9(i.localStore,at(e)),o=s.targetId,d=i.sharedClientState.addLocalQueryTarget(o,n);let c;return r&&(c=await NE(i,e,o,d==="current",s.resumeToken)),i.isPrimaryClient&&n&&Py(i.remoteStore,s),c}async function NE(i,e,n,r,s){i.Ua=(E,w,I)=>async function(B,M,q,W){let re=M.view.ga(q);re.ss&&(re=await qp(B.localStore,M.query,!1).then(({documents:D})=>M.view.ga(D,re)));const ae=W&&W.targetChanges.get(M.targetId),we=W&&W.targetMismatches.get(M.targetId)!=null,be=M.view.applyChanges(re,B.isPrimaryClient,ae,we);return Xp(B,M.targetId,be.ba),be.snapshot}(i,E,w,I);const o=await qp(i.localStore,e,!0),d=new CE(e,o.ds),c=d.ga(o.documents),h=yf.createSynthesizedTargetChangeForCurrentChange(n,r&&i.onlineState!=="Offline",s),g=d.applyChanges(c,i.isPrimaryClient,h);Xp(i,n,g.ba);const _=new IE(e,n,d);return i.xa.set(e,_),i.Oa.has(n)?i.Oa.get(n).push(e):i.Oa.set(n,[e]),g.snapshot}async function DE(i,e,n){const r=Ce(i),s=r.xa.get(e),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(d=>!Bd(d,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&s1(r.remoteStore,s.targetId),gh(r,s.targetId)}).catch($s)):(gh(r,s.targetId),await vh(r.localStore,s.targetId,!0))}async function FE(i,e){const n=Ce(i),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),s1(n.remoteStore,r.targetId))}async function ME(i,e,n){const r=$E(i);try{const s=await function(d,c){const h=Ce(d),g=wn.now(),_=c.reduce((I,A)=>I.add(A.key),De());let E,w;return h.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=$t(),B=De();return h.hs.getEntries(I,_).next(M=>{A=M,A.forEach((q,W)=>{W.isValidDocument()||(B=B.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(I,A)).next(M=>{E=M;const q=[];for(const W of c){const re=Y6(W,E.get(W.key).overlayedDocument);re!=null&&q.push(new ka(W.key,re,K0(re.value.mapValue),Vt.exists(!0)))}return h.mutationQueue.addMutationBatch(I,g,q,c)}).next(M=>{w=M;const q=M.applyToLocalDocumentSet(E,B);return h.documentOverlayCache.saveOverlays(I,M.batchId,q)})}).then(()=>({batchId:w.batchId,changes:ry(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(d,c,h){let g=d.qa[d.currentUser.toKey()];g||(g=new rn(Me)),g=g.insert(c,h),d.qa[d.currentUser.toKey()]=g}(r,s.batchId,n),await kf(r,s.changes),await Gd(r.remoteStore)}catch(s){const o=u1(s,"Failed to persist write");n.reject(o)}}async function Vy(i,e){const n=Ce(i);try{const r=await G9(n.localStore,e);e.targetChanges.forEach((s,o)=>{const d=n.Ba.get(o);d&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?d.Fa=!0:s.modifiedDocuments.size>0?Ue(d.Fa):s.removedDocuments.size>0&&(Ue(d.Fa),d.Fa=!1))}),await kf(n,r,e)}catch(r){await $s(r)}}function Yp(i,e,n){const r=Ce(i);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((o,d)=>{const c=d.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(d,c){const h=Ce(d);h.onlineState=c;let g=!1;h.queries.forEach((_,E)=>{for(const w of E.J_)w.ea(c)&&(g=!0)}),g&&c1(h)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LE(i,e,n){const r=Ce(i);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),o=s&&s.key;if(o){let d=new rn(_e.comparator);d=d.insert(o,Hn.newNoDocument(o,Te.min()));const c=De().add(o),h=new qd(Te.min(),new Map,new rn(Me),d,c);await Vy(r,h),r.La=r.La.remove(o),r.Ba.delete(e),h1(r)}else await vh(r.localStore,e,!1).then(()=>gh(r,e,n)).catch($s)}async function OE(i,e){const n=Ce(i),r=e.batch.batchId;try{const s=await W9(n.localStore,e);By(n,r,null),jy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kf(n,s)}catch(s){await $s(s)}}async function VE(i,e,n){const r=Ce(i);try{const s=await function(d,c){const h=Ce(d);return h.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return h.mutationQueue.lookupMutationBatch(g,c).next(E=>(Ue(E!==null),_=E.keys(),h.mutationQueue.removeMutationBatch(g,E))).next(()=>h.mutationQueue.performConsistencyCheck(g)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(g,_,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>h.localDocuments.getDocuments(g,_))})}(r.localStore,e);By(r,e,n),jy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kf(r,s)}catch(s){await $s(s)}}function jy(i,e){(i.Qa.get(e)||[]).forEach(n=>{n.resolve()}),i.Qa.delete(e)}function By(i,e,n){const r=Ce(i);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(n?o.reject(n):o.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function gh(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const r of i.Oa.get(e))i.xa.delete(r),n&&i.Ma.Wa(r,n);i.Oa.delete(e),i.isPrimaryClient&&i.ka.yr(e).forEach(r=>{i.ka.containsKey(r)||zy(i,r)})}function zy(i,e){i.Na.delete(e.path.canonicalString());const n=i.La.get(e);n!==null&&(s1(i.remoteStore,n),i.La=i.La.remove(e),i.Ba.delete(n),h1(i))}function Xp(i,e,n){for(const r of n)r instanceof My?(i.ka.addReference(r.key,e),jE(i,r)):r instanceof Ly?(fe("SyncEngine","Document no longer in limbo: "+r.key),i.ka.removeReference(r.key,e),i.ka.containsKey(r.key)||zy(i,r.key)):Se()}function jE(i,e){const n=e.key,r=n.path.canonicalString();i.La.get(n)||i.Na.has(r)||(fe("SyncEngine","New document in limbo: "+n),i.Na.add(r),h1(i))}function h1(i){for(;i.Na.size>0&&i.La.size<i.maxConcurrentLimboResolutions;){const e=i.Na.values().next().value;i.Na.delete(e);const n=new _e(on.fromString(e)),r=i.Ka.next();i.Ba.set(r,new RE(n)),i.La=i.La.insert(n,r),Py(i.remoteStore,new _r(at(Xh(n.path)),r,"TargetPurposeLimboResolution",Ld.oe))}}async function kf(i,e,n){const r=Ce(i),s=[],o=[],d=[];r.xa.isEmpty()||(r.xa.forEach((c,h)=>{d.push(r.Ua(h,e,n).then(g=>{var _;if((g||n)&&r.isPrimaryClient){const E=g?!g.fromCache:(_=n==null?void 0:n.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(g){s.push(g);const E=a1.zi(h.targetId,g);o.push(E)}}))}),await Promise.all(d),r.Ma.R_(s),await async function(h,g){const _=Ce(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>K.forEach(g,w=>K.forEach(w.Wi,I=>_.persistence.referenceDelegate.addReference(E,w.targetId,I)).next(()=>K.forEach(w.Gi,I=>_.persistence.referenceDelegate.removeReference(E,w.targetId,I)))))}catch(E){if(!Us(E))throw E;fe("LocalStore","Failed to update sequence numbers: "+E)}for(const E of g){const w=E.targetId;if(!E.fromCache){const I=_.us.get(w),A=I.snapshotVersion,B=I.withLastLimboFreeSnapshotVersion(A);_.us=_.us.insert(w,B)}}}(r.localStore,o))}async function BE(i,e){const n=Ce(i);if(!n.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const r=await Ty(n.localStore,e);n.currentUser=e,function(o,d){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new ye(ee.CANCELLED,d))})}),o.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await kf(n,r.Ts)}}function zE(i,e){const n=Ce(i),r=n.Ba.get(e);if(r&&r.Fa)return De().add(r.key);{let s=De();const o=n.Oa.get(e);if(!o)return s;for(const d of o){const c=n.xa.get(d);s=s.unionWith(c.view.fa)}return s}}function $y(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.Ma.R_=EE.bind(null,e.eventManager),e.Ma.Wa=SE.bind(null,e.eventManager),e}function $E(i){const e=Ce(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VE.bind(null,e),e}class bd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return H9(this.persistence,new U9,e.initialUser,this.serializer)}ja(e){return new Sy(r1.ei,this.serializer)}za(e){return new X9}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bd.provider={build:()=>new bd};class UE extends bd{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ue(this.persistence.referenceDelegate instanceof kd);const r=this.persistence.referenceDelegate.garbageCollector;return new R9(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ai.withCacheSize(this.cacheSizeBytes):ai.DEFAULT;return new Sy(r=>kd.ei(r,n),this.serializer)}}class yh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await yE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kE}()}createDatastore(e){const n=Hd(e.databaseInfo.databaseId),r=function(o){return new iE(o)}(e.databaseInfo);return function(o,d,c,h){return new aE(o,d,c,h)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,o,d,c){return new oE(r,s,o,d,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Yp(this.syncEngine,n,0),function(){return Wp.p()?new Wp:new Z9}())}createSyncEngine(e,n){return function(s,o,d,c,h,g,_){const E=new PE(s,o,d,c,h,g);return _&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const o=Ce(s);fe("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await _f(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yh.provider={build:()=>new yh};/**
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
 */class qE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class HE{constructor(e,n,r,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=qn.UNAUTHENTICATED,this.clientId=H0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async d=>{fe("FirestoreClient","Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(r,d=>(fe("FirestoreClient","Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=u1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bc(i,e){i.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let r=n.initialUser;i.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ty(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Zp(i,e){i.asyncQueue.verifyOperationInProgress();const n=await WE(i);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(r=>Gp(e.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>Gp(e.remoteStore,s)),i._onlineComponents=e}async function WE(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bc(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===ee.FAILED_PRECONDITION||s.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Is("Error using user provided cache. Falling back to memory cache: "+n),await Bc(i,new bd)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await Bc(i,new UE(void 0));return i._offlineComponents}async function Uy(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await Zp(i,i._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await Zp(i,new yh))),i._onlineComponents}function GE(i){return Uy(i).then(e=>e.syncEngine)}async function KE(i){const e=await Uy(i),n=e.eventManager;return n.onListen=AE.bind(null,e.syncEngine),n.onUnlisten=DE.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xE.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FE.bind(null,e.syncEngine),n}function QE(i,e,n={}){const r=new Tr;return i.asyncQueue.enqueueAndForget(async()=>function(o,d,c,h,g){const _=new qE({next:w=>{_.eu(),d.enqueueAndForget(()=>bE(o,E));const I=w.docs.has(c);!I&&w.fromCache?g.reject(new ye(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&h&&h.source==="server"?g.reject(new ye(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),E=new TE(Xh(c.path),_,{includeMetadataChanges:!0,ua:!0});return wE(o,E)}(await KE(i),i.asyncQueue,e,n,r)),r.promise}/**
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
 */function qy(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const eg=new Map;/**
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
 */function JE(i,e,n){if(!n)throw new ye(ee.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function YE(i,e,n,r){if(e===!0&&r===!0)throw new ye(ee.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function ng(i){if(!_e.isDocumentKey(i))throw new ye(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function m1(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se()}function ff(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ye(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=m1(i);throw new ye(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */class ig{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class v1{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new t6;switch(r.type){case"firstParty":return new o6(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ye(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eg.get(n);r&&(fe("ComponentProvider","Removing Datastore"),eg.delete(n),r.terminate())}(this),Promise.resolve()}}function XE(i,e,n,r={}){var s;const o=(i=ff(i,v1))._getSettings(),d=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==d&&Is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},o),{host:d,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=qn.MOCK_USER;else{c=w2(r.mockUserToken,(s=i._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ye(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new qn(g)}i._authCredentials=new r6(new q0(c,h))}}/**
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
 */class p1{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new p1(this.firestore,e,this._query)}}class Ci{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ci(this.firestore,e,this._key)}}class lf extends p1{constructor(e,n,r){super(e,n,Xh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ci(this.firestore,null,new _e(e))}withConverter(e){return new lf(this.firestore,e,this._path)}}function ZE(i,e,...n){if(i=ft(i),arguments.length===1&&(e=H0.newId()),JE("doc","path",e),i instanceof v1){const r=on.fromString(e,...n);return ng(r),new Ci(i,null,new _e(r))}{if(!(i instanceof Ci||i instanceof lf))throw new ye(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(on.fromString(e,...n));return ng(r),new Ci(i.firestore,i instanceof lf?i.converter:null,new _e(r))}}/**
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
 */class tg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Iy(this,"async_queue_retry"),this.fu=()=>{const r=jc();r&&fe("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=jc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Tr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Us(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(d){let c=d.message||"";return d.stack&&(c=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),c}(r);throw zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=d1.createAndSchedule(this,e,n,r,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&Se()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class g1 extends v1{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tg(e),this._firestoreClient=void 0,await e}}}function eS(i,e){const n=typeof i=="object"?i:e0(),r=typeof i=="string"?i:"(default)",s=Oh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=_2("firestore");o&&XE(s,...o)}return s}function Hy(i){if(i._terminated)throw new ye(ee.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||nS(i),i._firestoreClient}function nS(i){var e,n,r;const s=i._freezeSettings(),o=function(c,h,g,_){return new b6(c,h,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,qy(_.experimentalLongPollingOptions),_.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,s);i._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(i._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),i._firestoreClient=new HE(i._authCredentials,i._appCheckCredentials,i._queue,o,i._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(i._componentsProvider))}/**
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
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(On.fromBase64String(e))}catch(n){throw new ye(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ds(On.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class y1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ln(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wy{constructor(e){this._methodName=e}}/**
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
 */class _1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class k1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const iS=/^__.*__$/;class tS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ka(e,this.data,this.fieldMask,n,this.fieldTransforms):new gf(e,this.data,n,this.fieldTransforms)}}function Gy(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class w1{constructor(e,n,r,s,o,d){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new w1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ed(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Gy(this.Mu)&&iS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class rS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hd(e)}$u(e,n,r,s=!1){return new w1({Mu:e,methodName:n,Ku:r,path:Ln.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aS(i){const e=i._freezeSettings(),n=Hd(i._databaseId);return new rS(i._databaseId,!!e.ignoreUndefinedProperties,n)}function sS(i,e,n,r,s,o={}){const d=i.$u(o.merge||o.mergeFields?2:0,e,n,s);Yy("Data must be an object, but it was:",d,r);const c=Qy(r,d);let h,g;if(o.merge)h=new $i(d.fieldMask),g=d.fieldTransforms;else if(o.mergeFields){const _=[];for(const E of o.mergeFields){const w=oS(e,E,n);if(!d.contains(w))throw new ye(ee.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);lS(_,w)||_.push(w)}h=new $i(_),g=d.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,g=d.fieldTransforms;return new tS(new Ti(c),h,g)}function Ky(i,e){if(Jy(i=ft(i)))return Yy("Unsupported field value:",e,i),Qy(i,e);if(i instanceof Wy)return function(r,s){if(!Gy(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const o=[];let d=0;for(const c of r){let h=Ky(c,s.ku(d));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),d++}return{arrayValue:{values:o}}}(i,e)}return function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return H6(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=wn.fromDate(r);return{timestampValue:_d(s.serializer,o)}}if(r instanceof wn){const o=new wn(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_d(s.serializer,o)}}if(r instanceof _1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ds)return{bytesValue:gy(s.serializer,r._byteString)};if(r instanceof Ci){const o=s.databaseId,d=r.firestore._databaseId;if(!d.isEqual(o))throw s.qu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:i1(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof k1)return function(d,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:d.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return Zh(c.serializer,h)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${m1(r)}`)}(i,e)}function Qy(i,e){const n={};return W0(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ya(i,(r,s)=>{const o=Ky(s,e.Ou(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Jy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof wn||i instanceof _1||i instanceof Ds||i instanceof Ci||i instanceof Wy||i instanceof k1)}function Yy(i,e,n){if(!Jy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=m1(n);throw r==="an object"?e.qu(i+" a custom object"):e.qu(i+" "+r)}}function oS(i,e,n){if((e=ft(e))instanceof y1)return e._internalPath;if(typeof e=="string")return Xy(i,e);throw Ed("Field path arguments must be of type string or ",i,!1,void 0,n)}const fS=new RegExp("[~\\*/\\[\\]]");function Xy(i,e,n){if(e.search(fS)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new y1(...e.split("."))._internalPath}catch{throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Ed(i,e,n,r,s){const o=r&&!r.isEmpty(),d=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||d)&&(h+=" (found",o&&(h+=` in field ${r}`),d&&(h+=` in document ${s}`),h+=")"),new ye(ee.INVALID_ARGUMENT,c+i+h)}function lS(i,e){return i.some(n=>n.isEqual(e))}/**
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
 */class Zy{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ci(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(e_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dS extends Zy{data(){return super.data()}}function e_(i,e){return typeof e=="string"?Xy(i,e):e instanceof y1?e._internalPath:e._delegate._internalPath}class uS{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ya(e,(s,o)=>{r[s]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,s;const o=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(d=>dn(d.doubleValue));return new k1(o)}convertGeoPoint(e){return new _1(dn(e.latitude),dn(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(tf(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new wn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=on.fromString(e);Ue(Ey(r));const s=new rf(r.get(1),r.get(3)),o=new _e(r.popFirst(5));return s.isEqual(n)||zt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function cS(i,e,n){let r;return r=i?i.toFirestore(e):e,r}/**
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
 */class hS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n_ extends Zy{constructor(e,n,r,s,o,d){super(e,n,r,s,d),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(e_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class mS extends n_{data(e={}){return super.data(e)}}/**
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
 */function vS(i){i=ff(i,Ci);const e=ff(i.firestore,g1);return QE(Hy(e),i._key).then(n=>_S(e,i,n))}class pS extends uS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ci(this.firestore,null,n)}}function gS(i,e,n){i=ff(i,Ci);const r=ff(i.firestore,g1),s=cS(i.converter,e);return yS(r,[sS(aS(r),"setDoc",i._key,s,i.converter!==null,n).toMutation(i._key,Vt.none())])}function yS(i,e){return function(r,s){const o=new Tr;return r.asyncQueue.enqueueAndForget(async()=>ME(await GE(r),s,o)),o.promise}(Hy(i),e)}function _S(i,e,n){const r=n.docs.get(e._key),s=new pS(i);return new n_(i,s,e._key,r,new hS(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){zs=s})(js),Cs(new ma("firestore",(r,{instanceIdentifier:s,options:o})=>{const d=r.getProvider("app").getImmediate(),c=new g1(new a6(r.getProvider("auth-internal")),new l6(r.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ye(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rf(g.options.projectId,_)}(d,s),d);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Er(wp,"4.7.5",e),Er(wp,"4.7.5","esm2017")})();const kS={apiKey:"AIzaSyAppowM5diojzKBohpiXdLdOtYmEzOGwtc",authDomain:"chatbotai-3a69d.firebaseapp.com",projectId:"chatbotai-3a69d",storageBucket:"chatbotai-3a69d.firebasestorage.app",messagingSenderId:"673240941868",appId:"1:673240941868:web:2b35aa72d1765c64141889"},i_=Zg(kS),wS=eS(i_),Kd=Z4(i_),t_=new Nt;t_.setCustomParameters({prompt:"select_account"});const r_=async()=>{try{const i=await f4(Kd,t_);return{uid:i.user.uid,email:i.user.email,displayName:i.user.displayName}}catch(i){throw i}},_h=async i=>{const e=ZE(wS,"users",i.uid);if(!(await vS(e)).exists()){const{displayName:r,email:s}=i,o=new Date;try{await gS(e,{displayName:r,email:s,createdAt:o})}catch(d){console.log(d)}}return e},bS=async(i,e)=>{if(!(!i||!e))return await B3(Kd,i,e)},ES=async i=>{if(i)try{return await j3(Kd,i),!0}catch(e){throw e}},SS=({onLogin:i})=>{const[e,n]=U.useState(""),[r,s]=U.useState(""),[o,d]=U.useState(null),c=async()=>{console.log("Google button clicked");try{d(null),console.log("Starting Google Sign In...");const g=await r_();console.log("Got user from Google:",g);const _=await _h(g);console.log("Created user document:",_),i(g)}catch(g){console.error("Detailed error:",g),g.code==="auth/cancelled-popup-request"||g.code==="auth/popup-closed-by-user"?d("Sign in was cancelled"):g.code==="auth/popup-blocked"?d("Popup was blocked by the browser. Please allow popups and try again."):d("An error occurred during sign in. Please try again."),setTimeout(()=>{d(null)},5e3)}},h=g=>{g.preventDefault(),i({email:e})};return console.log("Rendering SignInForm"),G.jsx("div",{className:"login-container",children:G.jsx("div",{className:"login-content",children:G.jsxs("div",{className:"sign-in-form",children:[G.jsx("h1",{children:"Hi there!"}),G.jsx("p",{children:"Welcome to Course Advisor"}),o&&G.jsx("div",{className:"error-message",children:o}),G.jsxs("form",{onSubmit:h,children:[G.jsxs("button",{type:"button",className:"google-sign-in",onClick:c,children:[G.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google logo",className:"google-icon"}),"Log in with Google"]}),G.jsx("div",{className:"divider",children:"or"}),G.jsx("input",{type:"email",placeholder:"Your email",value:e,onChange:g=>n(g.target.value)}),G.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:g=>s(g.target.value)}),G.jsx(Ts,{to:"/forgot-password",className:"forgot-password",children:"Forgot password?"}),G.jsx("button",{type:"submit",className:"email-sign-in",children:"Log in"}),G.jsxs("p",{className:"signup-link",children:["Don't have an account? ",G.jsx(Ts,{to:"/signup",children:"Sign up"})]})]})]})})})},TS=({onSignUp:i})=>{const[e,n]=U.useState(""),[r,s]=U.useState(""),[o,d]=U.useState(""),[c,h]=U.useState(""),[g,_]=U.useState(null),E=async I=>{if(I.preventDefault(),r!==o){_("Passwords don't match");return}try{const{user:A}=await bS(e,r);await _h({...A,displayName:c||e.split("@")[0]}),n(""),s(""),d(""),h(""),_(null),i({uid:A.uid,email:A.email,displayName:c||e.split("@")[0]})}catch(A){A.code==="auth/email-already-in-use"?_("Email already in use"):A.code==="auth/weak-password"?_("Password should be at least 6 characters"):(_("Error creating user"),console.error("User creation error:",A))}},w=async()=>{try{const I=await r_(),A=await _h(I);console.log("User document created:",A),i(I)}catch(I){console.error("Google sign in error:",I),_(I.message)}};return G.jsx("div",{className:"login-container",children:G.jsx("div",{className:"login-content",children:G.jsxs("div",{className:"sign-in-form",children:[G.jsx("h1",{children:"Create Account"}),G.jsx("p",{children:"Welcome to Course Advisor"}),g&&G.jsx("div",{className:"error-message",children:g}),G.jsxs("form",{onSubmit:E,children:[G.jsxs("button",{type:"button",className:"google-sign-in",onClick:w,children:[G.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google logo",className:"google-icon"}),"Sign up with Google"]}),G.jsx("div",{className:"divider",children:"or"}),G.jsx("input",{type:"text",placeholder:"Display Name",value:c,onChange:I=>h(I.target.value)}),G.jsx("input",{type:"email",placeholder:"Email",value:e,onChange:I=>n(I.target.value)}),G.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:I=>s(I.target.value)}),G.jsx("input",{type:"password",placeholder:"Confirm Password",value:o,onChange:I=>d(I.target.value)}),G.jsx("button",{type:"submit",className:"email-sign-in",children:"Sign Up"}),G.jsxs("p",{className:"signup-link",children:["Already have an account? ",G.jsx(Ts,{to:"/",children:"Sign in"})]})]})]})})})};var zc={exports:{}},$c,rg;function CS(){if(rg)return $c;rg=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $c=i,$c}var Uc,ag;function IS(){if(ag)return Uc;ag=1;var i=CS();function e(){}function n(){}return n.resetWarningCache=e,Uc=function(){function r(d,c,h,g,_,E){if(E!==i){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function s(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Uc}var sg;function RS(){return sg||(sg=1,zc.exports=IS()()),zc.exports}var PS=RS();const Ei=Ch(PS);function a_(i){return i&&i.__esModule?i.default:i}function Si(i,e,n){return e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}var Qd,ge,s_,Yo,o_,og,Sd={},f_=[],AS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function kr(i,e){for(var n in e)i[n]=e[n];return i}function l_(i){var e=i.parentNode;e&&e.removeChild(i)}function kh(i,e,n){var r,s,o,d={};for(o in e)o=="key"?r=e[o]:o=="ref"?s=e[o]:d[o]=e[o];if(arguments.length>2&&(d.children=arguments.length>3?Qd.call(arguments,2):n),typeof i=="function"&&i.defaultProps!=null)for(o in i.defaultProps)d[o]===void 0&&(d[o]=i.defaultProps[o]);return td(i,d,r,s,null)}function td(i,e,n,r,s){var o={type:i,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s??++s_};return s==null&&ge.vnode!=null&&ge.vnode(o),o}function xt(){return{current:null}}function Fs(i){return i.children}function ot(i,e){this.props=i,this.context=e}function Ms(i,e){if(e==null)return i.__?Ms(i.__,i.__.__k.indexOf(i)+1):null;for(var n;e<i.__k.length;e++)if((n=i.__k[e])!=null&&n.__e!=null)return n.__e;return typeof i.type=="function"?Ms(i):null}function d_(i){var e,n;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((n=i.__k[e])!=null&&n.__e!=null){i.__e=i.__c.base=n.__e;break}return d_(i)}}function fg(i){(!i.__d&&(i.__d=!0)&&Yo.push(i)&&!Td.__r++||og!==ge.debounceRendering)&&((og=ge.debounceRendering)||o_)(Td)}function Td(){for(var i;Td.__r=Yo.length;)i=Yo.sort(function(e,n){return e.__v.__b-n.__v.__b}),Yo=[],i.some(function(e){var n,r,s,o,d,c;e.__d&&(d=(o=(n=e).__v).__e,(c=n.__P)&&(r=[],(s=kr({},o)).__v=o.__v+1,b1(c,o,s,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[d]:null,r,d??Ms(o),o.__h),m_(r,o),o.__e!=d&&d_(o)))})}function u_(i,e,n,r,s,o,d,c,h,g){var _,E,w,I,A,B,M,q=r&&r.__k||f_,W=q.length;for(n.__k=[],_=0;_<e.length;_++)if((I=n.__k[_]=(I=e[_])==null||typeof I=="boolean"?null:typeof I=="string"||typeof I=="number"||typeof I=="bigint"?td(null,I,null,null,I):Array.isArray(I)?td(Fs,{children:I},null,null,null):I.__b>0?td(I.type,I.props,I.key,null,I.__v):I)!=null){if(I.__=n,I.__b=n.__b+1,(w=q[_])===null||w&&I.key==w.key&&I.type===w.type)q[_]=void 0;else for(E=0;E<W;E++){if((w=q[E])&&I.key==w.key&&I.type===w.type){q[E]=void 0;break}w=null}b1(i,I,w=w||Sd,s,o,d,c,h,g),A=I.__e,(E=I.ref)&&w.ref!=E&&(M||(M=[]),w.ref&&M.push(w.ref,null,I),M.push(E,I.__c||A,I)),A!=null?(B==null&&(B=A),typeof I.type=="function"&&I.__k===w.__k?I.__d=h=c_(I,h,i):h=h_(i,I,w,q,A,h),typeof n.type=="function"&&(n.__d=h)):h&&w.__e==h&&h.parentNode!=i&&(h=Ms(w))}for(n.__e=B,_=W;_--;)q[_]!=null&&(typeof n.type=="function"&&q[_].__e!=null&&q[_].__e==n.__d&&(n.__d=Ms(r,_+1)),p_(q[_],q[_]));if(M)for(_=0;_<M.length;_++)v_(M[_],M[++_],M[++_])}function c_(i,e,n){for(var r,s=i.__k,o=0;s&&o<s.length;o++)(r=s[o])&&(r.__=i,e=typeof r.type=="function"?c_(r,e,n):h_(n,r,r,s,r.__e,e));return e}function Cd(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(n){Cd(n,e)}):e.push(i)),e}function h_(i,e,n,r,s,o){var d,c,h;if(e.__d!==void 0)d=e.__d,e.__d=void 0;else if(n==null||s!=o||s.parentNode==null)e:if(o==null||o.parentNode!==i)i.appendChild(s),d=null;else{for(c=o,h=0;(c=c.nextSibling)&&h<r.length;h+=2)if(c==s)break e;i.insertBefore(s,o),d=o}return d!==void 0?d:s.nextSibling}function xS(i,e,n,r,s){var o;for(o in n)o==="children"||o==="key"||o in e||Id(i,o,null,n[o],r);for(o in e)s&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||Id(i,o,e[o],n[o],r)}function lg(i,e,n){e[0]==="-"?i.setProperty(e,n):i[e]=n==null?"":typeof n!="number"||AS.test(e)?n:n+"px"}function Id(i,e,n,r,s){var o;e:if(e==="style")if(typeof n=="string")i.style.cssText=n;else{if(typeof r=="string"&&(i.style.cssText=r=""),r)for(e in r)n&&e in n||lg(i.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||lg(i.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+o]=n,n?r||i.addEventListener(e,o?ug:dg,o):i.removeEventListener(e,o?ug:dg,o);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?i.setAttribute(e,n):i.removeAttribute(e))}}function dg(i){this.l[i.type+!1](ge.event?ge.event(i):i)}function ug(i){this.l[i.type+!0](ge.event?ge.event(i):i)}function b1(i,e,n,r,s,o,d,c,h){var g,_,E,w,I,A,B,M,q,W,re,ae=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(h=n.__h,c=e.__e=n.__e,e.__h=null,o=[c]),(g=ge.__b)&&g(e);try{e:if(typeof ae=="function"){if(M=e.props,q=(g=ae.contextType)&&r[g.__c],W=g?q?q.props.value:g.__:r,n.__c?B=(_=e.__c=n.__c).__=_.__E:("prototype"in ae&&ae.prototype.render?e.__c=_=new ae(M,W):(e.__c=_=new ot(M,W),_.constructor=ae,_.render=DS),q&&q.sub(_),_.props=M,_.state||(_.state={}),_.context=W,_.__n=r,E=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),ae.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=kr({},_.__s)),kr(_.__s,ae.getDerivedStateFromProps(M,_.__s))),w=_.props,I=_.state,E)ae.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(ae.getDerivedStateFromProps==null&&M!==w&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(M,W),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(M,_.__s,W)===!1||e.__v===n.__v){_.props=M,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(we){we&&(we.__=e)}),_.__h.length&&d.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(M,_.__s,W),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(w,I,A)})}_.context=W,_.props=M,_.state=_.__s,(g=ge.__r)&&g(e),_.__d=!1,_.__v=e,_.__P=i,g=_.render(_.props,_.state,_.context),_.state=_.__s,_.getChildContext!=null&&(r=kr(kr({},r),_.getChildContext())),E||_.getSnapshotBeforeUpdate==null||(A=_.getSnapshotBeforeUpdate(w,I)),re=g!=null&&g.type===Fs&&g.key==null?g.props.children:g,u_(i,Array.isArray(re)?re:[re],e,n,r,s,o,d,c,h),_.base=e.__e,e.__h=null,_.__h.length&&d.push(_),B&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=NS(n.__e,e,n,r,s,o,d,h);(g=ge.diffed)&&g(e)}catch(we){e.__v=null,(h||o!=null)&&(e.__e=c,e.__h=!!h,o[o.indexOf(c)]=null),ge.__e(we,e,n)}}function m_(i,e){ge.__c&&ge.__c(e,i),i.some(function(n){try{i=n.__h,n.__h=[],i.some(function(r){r.call(n)})}catch(r){ge.__e(r,n.__v)}})}function NS(i,e,n,r,s,o,d,c){var h,g,_,E=n.props,w=e.props,I=e.type,A=0;if(I==="svg"&&(s=!0),o!=null){for(;A<o.length;A++)if((h=o[A])&&"setAttribute"in h==!!I&&(I?h.localName===I:h.nodeType===3)){i=h,o[A]=null;break}}if(i==null){if(I===null)return document.createTextNode(w);i=s?document.createElementNS("http://www.w3.org/2000/svg",I):document.createElement(I,w.is&&w),o=null,c=!1}if(I===null)E===w||c&&i.data===w||(i.data=w);else{if(o=o&&Qd.call(i.childNodes),g=(E=n.props||Sd).dangerouslySetInnerHTML,_=w.dangerouslySetInnerHTML,!c){if(o!=null)for(E={},A=0;A<i.attributes.length;A++)E[i.attributes[A].name]=i.attributes[A].value;(_||g)&&(_&&(g&&_.__html==g.__html||_.__html===i.innerHTML)||(i.innerHTML=_&&_.__html||""))}if(xS(i,w,E,s,c),_)e.__k=[];else if(A=e.props.children,u_(i,Array.isArray(A)?A:[A],e,n,r,s&&I!=="foreignObject",o,d,o?o[0]:n.__k&&Ms(n,0),c),o!=null)for(A=o.length;A--;)o[A]!=null&&l_(o[A]);c||("value"in w&&(A=w.value)!==void 0&&(A!==E.value||A!==i.value||I==="progress"&&!A)&&Id(i,"value",A,E.value,!1),"checked"in w&&(A=w.checked)!==void 0&&A!==i.checked&&Id(i,"checked",A,E.checked,!1))}return i}function v_(i,e,n){try{typeof i=="function"?i(e):i.current=e}catch(r){ge.__e(r,n)}}function p_(i,e,n){var r,s;if(ge.unmount&&ge.unmount(i),(r=i.ref)&&(r.current&&r.current!==i.__e||v_(r,null,e)),(r=i.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){ge.__e(o,e)}r.base=r.__P=null}if(r=i.__k)for(s=0;s<r.length;s++)r[s]&&p_(r[s],e,typeof i.type!="function");n||i.__e==null||l_(i.__e),i.__e=i.__d=void 0}function DS(i,e,n){return this.constructor(i,n)}function g_(i,e,n){var r,s,o;ge.__&&ge.__(i,e),s=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],b1(e,i=(!r&&n||e).__k=kh(Fs,null,[i]),s||Sd,Sd,e.ownerSVGElement!==void 0,!r&&n?[n]:s?null:e.firstChild?Qd.call(e.childNodes):null,o,!r&&n?n:s?s.__e:e.firstChild,r),m_(o,i)}Qd=f_.slice,ge={__e:function(i,e){for(var n,r,s;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(i)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(i),s=n.__d),s)return n.__E=n}catch(o){i=o}throw i}},s_=0,ot.prototype.setState=function(i,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=kr({},this.state),typeof i=="function"&&(i=i(kr({},n),this.props)),i&&kr(n,i),i!=null&&this.__v&&(e&&this.__h.push(e),fg(this))},ot.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),fg(this))},ot.prototype.render=Fs,Yo=[],o_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Td.__r=0;var FS=0;function J(i,e,n,r,s){var o,d,c={};for(d in e)d=="ref"?o=e[d]:c[d]=e[d];var h={type:i,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--FS,__source:r,__self:s};if(typeof i=="function"&&(o=i.defaultProps))for(d in o)c[d]===void 0&&(c[d]=o[d]);return ge.vnode&&ge.vnode(h),h}function MS(i,e){try{window.localStorage[`emoji-mart.${i}`]=JSON.stringify(e)}catch{}}function LS(i){try{const e=window.localStorage[`emoji-mart.${i}`];if(e)return JSON.parse(e)}catch{}}var Cr={set:MS,get:LS};const qc=new Map,OS=[{v:15,emoji:"🫨"},{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function VS(){for(const{v:i,emoji:e}of OS)if(y_(e))return i}function jS(){return!y_("🇨🇦")}function y_(i){if(qc.has(i))return qc.get(i);const e=BS(i);return qc.set(i,e),e}const BS=(()=>{let i=null;try{navigator.userAgent.includes("jsdom")||(i=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!i)return()=>!1;const e=25,n=20,r=Math.floor(e/2);return i.font=r+"px Arial, Sans-Serif",i.textBaseline="top",i.canvas.width=n*2,i.canvas.height=e,s=>{i.clearRect(0,0,n*2,e),i.fillStyle="#FF0000",i.fillText(s,0,22),i.fillStyle="#0000FF",i.fillText(s,n,22);const o=i.getImageData(0,0,n,e).data,d=o.length;let c=0;for(;c<d&&!o[c+3];c+=4);if(c>=d)return!1;const h=n+c/4%n,g=Math.floor(c/4/n),_=i.getImageData(h,g,1,1).data;return!(o[c]!==_[0]||o[c+2]!==_[2]||i.measureText(s).width>=n)}})();var cg={latestVersion:VS,noCountryFlags:jS};const wh=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Fn=null;function zS(i){Fn||(Fn=Cr.get("frequently")||{});const e=i.id||i;e&&(Fn[e]||(Fn[e]=0),Fn[e]+=1,Cr.set("last",e),Cr.set("frequently",Fn))}function $S({maxFrequentRows:i,perLine:e}){if(!i)return[];Fn||(Fn=Cr.get("frequently"));let n=[];if(!Fn){Fn={};for(let o in wh.slice(0,e)){const d=wh[o];Fn[d]=e-o,n.push(d)}return n}const r=i*e,s=Cr.get("last");for(let o in Fn)n.push(o);if(n.sort((o,d)=>{const c=Fn[d],h=Fn[o];return c==h?o.localeCompare(d):c-h}),n.length>r){const o=n.slice(r);n=n.slice(0,r);for(let d of o)d!=s&&delete Fn[d];s&&n.indexOf(s)==-1&&(delete Fn[n[n.length-1]],n.splice(-1,1,s)),Cr.set("frequently",Fn)}return n}var __={add:zS,get:$S,DEFAULTS:wh},k_={};k_=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var Dt={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:15,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14,15]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","ko","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Un=null,xe=null;const Hc={};async function hg(i){if(Hc[i])return Hc[i];const n=await(await fetch(i)).json();return Hc[i]=n,n}let Wc=null,w_=null,b_=!1;function Jd(i,{caller:e}={}){return Wc||(Wc=new Promise(n=>{w_=n})),i?US(i):e&&!b_&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Wc}async function US(i){b_=!0;let{emojiVersion:e,set:n,locale:r}=i;if(e||(e=Dt.emojiVersion.value),n||(n=Dt.set.value),r||(r=Dt.locale.value),xe)xe.categories=xe.categories.filter(h=>!h.name);else{xe=(typeof i.data=="function"?await i.data():i.data)||await hg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),xe.emoticons={},xe.natives={},xe.categories.unshift({id:"frequent",emojis:[]});for(const h in xe.aliases){const g=xe.aliases[h],_=xe.emojis[g];_&&(_.aliases||(_.aliases=[]),_.aliases.push(h))}xe.originalCategories=xe.categories}if(Un=(typeof i.i18n=="function"?await i.i18n():i.i18n)||(r=="en"?a_(k_):await hg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`)),i.custom)for(let h in i.custom){h=parseInt(h);const g=i.custom[h],_=i.custom[h-1];if(!(!g.emojis||!g.emojis.length)){g.id||(g.id=`custom_${h+1}`),g.name||(g.name=Un.categories.custom),_&&!g.icon&&(g.target=_.target||_),xe.categories.push(g);for(const E of g.emojis)xe.emojis[E.id]=E}}i.categories&&(xe.categories=xe.originalCategories.filter(h=>i.categories.indexOf(h.id)!=-1).sort((h,g)=>{const _=i.categories.indexOf(h.id),E=i.categories.indexOf(g.id);return _-E}));let s=null,o=null;n=="native"&&(s=cg.latestVersion(),o=i.noCountryFlags||cg.noCountryFlags());let d=xe.categories.length,c=!1;for(;d--;){const h=xe.categories[d];if(h.id=="frequent"){let{maxFrequentRows:E,perLine:w}=i;E=E>=0?E:Dt.maxFrequentRows.value,w||(w=Dt.perLine.value),h.emojis=__.get({maxFrequentRows:E,perLine:w})}if(!h.emojis||!h.emojis.length){xe.categories.splice(d,1);continue}const{categoryIcons:g}=i;if(g){const E=g[h.id];E&&!h.icon&&(h.icon=E)}let _=h.emojis.length;for(;_--;){const E=h.emojis[_],w=E.id?E:xe.emojis[E],I=()=>{h.emojis.splice(_,1)};if(!w||i.exceptEmojis&&i.exceptEmojis.includes(w.id)){I();continue}if(s&&w.version>s){I();continue}if(o&&h.id=="flags"&&!KS.includes(w.id)){I();continue}if(!w.search){if(c=!0,w.search=","+[[w.id,!1],[w.name,!0],[w.keywords,!1],[w.emoticons,!1]].map(([B,M])=>{if(B)return(Array.isArray(B)?B:[B]).map(q=>(M?q.split(/[-|_|\s]+/):[q]).map(W=>W.toLowerCase())).flat()}).flat().filter(B=>B&&B.trim()).join(","),w.emoticons)for(const B of w.emoticons)xe.emoticons[B]||(xe.emoticons[B]=w.id);let A=0;for(const B of w.skins){if(!B)continue;A++;const{native:M}=B;M&&(xe.natives[M]=w.id,w.search+=`,${M}`);const q=A==1?"":`:skin-tone-${A}:`;B.shortcodes=`:${w.id}:${q}`}}}}c&&Ss.reset(),w_()}function E_(i,e,n){i||(i={});const r={};for(let s in e)r[s]=S_(s,i,e,n);return r}function S_(i,e,n,r){const s=n[i];let o=r&&r.getAttribute(i)||(e[i]!=null&&e[i]!=null?e[i]:null);return s&&(o!=null&&s.value&&typeof s.value!=typeof o&&(typeof s.value=="boolean"?o=o!="false":o=s.value.constructor(o)),s.transform&&o&&(o=s.transform(o)),(o==null||s.choices&&s.choices.indexOf(o)==-1)&&(o=s.value)),o}const qS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let bh=null;function HS(i){return i.id?i:xe.emojis[i]||xe.emojis[xe.aliases[i]]||xe.emojis[xe.natives[i]]}function WS(){bh=null}async function GS(i,{maxResults:e,caller:n}={}){if(!i||!i.trim().length)return null;e||(e=90),await Jd(null,{caller:n||"SearchIndex.search"});const r=i.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((c,h,g)=>c.trim()&&g.indexOf(c)==h);if(!r.length)return;let s=bh||(bh=Object.values(xe.emojis)),o,d;for(const c of r){if(!s.length)break;o=[],d={};for(const h of s){if(!h.search)continue;const g=h.search.indexOf(`,${c}`);g!=-1&&(o.push(h),d[h.id]||(d[h.id]=0),d[h.id]+=h.id==c?0:g+1)}s=o}return o.length<2||(o.sort((c,h)=>{const g=d[c.id],_=d[h.id];return g==_?c.id.localeCompare(h.id):g-_}),o.length>e&&(o=o.slice(0,e))),o}var Ss={search:GS,get:HS,reset:WS,SHORTCODES_REGEX:qS};const KS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function QS(i,e){return Array.isArray(i)&&Array.isArray(e)&&i.length===e.length&&i.every((n,r)=>n==e[r])}async function JS(i=1){for(let e in[...Array(i).keys()])await new Promise(requestAnimationFrame)}function YS(i,{skinIndex:e=0}={}){const n=i.skins[e]||(e=0,i.skins[e]),r={id:i.id,name:i.name,native:n.native,unified:n.unified,keywords:i.keywords,shortcodes:n.shortcodes||i.shortcodes};return i.skins.length>1&&(r.skin=e+1),n.src&&(r.src=n.src),i.aliases&&i.aliases.length&&(r.aliases=i.aliases),i.emoticons&&i.emoticons.length&&(r.emoticons=i.emoticons),r}const XS={activity:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:J("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:J("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:J("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:J("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[J("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),J("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[J("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),J("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:J("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[J("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),J("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:J("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[J("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),J("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[J("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),J("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:J("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:J("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},ZS={loupe:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:J("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:J("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Rd={categories:XS,search:ZS};function Eh(i){let{id:e,skin:n,emoji:r}=i;if(i.shortcodes){const c=i.shortcodes.match(Ss.SHORTCODES_REGEX);c&&(e=c[1],c[2]&&(n=c[2]))}if(r||(r=Ss.get(e||i.native)),!r)return i.fallback;const s=r.skins[n-1]||r.skins[0],o=s.src||(i.set!="native"&&!i.spritesheet?typeof i.getImageURL=="function"?i.getImageURL(i.set,s.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${i.set}@15.0.1/img/${i.set}/64/${s.unified}.png`:void 0),d=typeof i.getSpritesheetURL=="function"?i.getSpritesheetURL(i.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${i.set}@15.0.1/img/${i.set}/sheets-256/64.png`;return J("span",{class:"emoji-mart-emoji","data-emoji-set":i.set,children:o?J("img",{style:{maxWidth:i.size||"1em",maxHeight:i.size||"1em",display:"inline-block"},alt:s.native||s.shortcodes,src:o}):i.set=="native"?J("span",{style:{fontSize:i.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:s.native}):J("span",{style:{display:"block",width:i.size,height:i.size,backgroundImage:`url(${d})`,backgroundSize:`${100*xe.sheet.cols}% ${100*xe.sheet.rows}%`,backgroundPosition:`${100/(xe.sheet.cols-1)*s.x}% ${100/(xe.sheet.rows-1)*s.y}%`}})})}const eT=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class T_ extends eT{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,r){if(!this.component)return;const s=S_(e,{[e]:r},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:s}):(this.component.props[e]=s,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const r=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),r&&r.appendChild(this)}}}class nT extends T_{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var C_={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:i=>/\D/.test(i)?i:`${i}px`},set:Dt.set,skin:Dt.skin};class I_ extends T_{async connectedCallback(){const e=E_(this.props,C_,this);e.element=this,e.ref=n=>{this.component=n},await Jd(),!this.disconnected&&g_(J(Eh,{...e}),this)}constructor(e){super(e)}}Si(I_,"Props",C_);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",I_);var mg,Sh=[],vg=ge.__b,pg=ge.__r,gg=ge.diffed,yg=ge.__c,_g=ge.unmount;function iT(){var i;for(Sh.sort(function(e,n){return e.__v.__b-n.__v.__b});i=Sh.pop();)if(i.__P)try{i.__H.__h.forEach(rd),i.__H.__h.forEach(Th),i.__H.__h=[]}catch(e){i.__H.__h=[],ge.__e(e,i.__v)}}ge.__b=function(i){vg&&vg(i)},ge.__r=function(i){pg&&pg(i);var e=i.__c.__H;e&&(e.__h.forEach(rd),e.__h.forEach(Th),e.__h=[])},ge.diffed=function(i){gg&&gg(i);var e=i.__c;e&&e.__H&&e.__H.__h.length&&(Sh.push(e)!==1&&mg===ge.requestAnimationFrame||((mg=ge.requestAnimationFrame)||function(n){var r,s=function(){clearTimeout(o),kg&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(s,100);kg&&(r=requestAnimationFrame(s))})(iT))},ge.__c=function(i,e){e.some(function(n){try{n.__h.forEach(rd),n.__h=n.__h.filter(function(r){return!r.__||Th(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],ge.__e(r,n.__v)}}),yg&&yg(i,e)},ge.unmount=function(i){_g&&_g(i);var e,n=i.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{rd(r)}catch(s){e=s}}),e&&ge.__e(e,n.__v))};var kg=typeof requestAnimationFrame=="function";function rd(i){var e=i.__c;typeof e=="function"&&(i.__c=void 0,e())}function Th(i){i.__c=i.__()}function tT(i,e){for(var n in e)i[n]=e[n];return i}function wg(i,e){for(var n in i)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&i[r]!==e[r])return!0;return!1}function Pd(i){this.props=i}(Pd.prototype=new ot).isPureReactComponent=!0,Pd.prototype.shouldComponentUpdate=function(i,e){return wg(this.props,i)||wg(this.state,e)};var bg=ge.__b;ge.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),bg&&bg(i)};var rT=ge.__e;ge.__e=function(i,e,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),r.__c(i,e)}rT(i,e,n)};var Eg=ge.unmount;function Gc(){this.__u=0,this.t=null,this.__b=null}function R_(i){var e=i.__.__c;return e&&e.__e&&e.__e(i)}function ql(){this.u=null,this.o=null}ge.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),Eg&&Eg(i)},(Gc.prototype=new ot).__c=function(i,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var s=R_(r.__v),o=!1,d=function(){o||(o=!0,n.__R=null,s?s(c):c())};n.__R=d;var c=function(){if(!--r.__u){if(r.state.__e){var g=r.state.__e;r.__v.__k[0]=function E(w,I,A){return w&&(w.__v=null,w.__k=w.__k&&w.__k.map(function(B){return E(B,I,A)}),w.__c&&w.__c.__P===I&&(w.__e&&A.insertBefore(w.__e,w.__d),w.__c.__e=!0,w.__c.__P=A)),w}(g,g.__c.__P,g.__c.__O)}var _;for(r.setState({__e:r.__b=null});_=r.t.pop();)_.forceUpdate()}},h=e.__h===!0;r.__u++||h||r.setState({__e:r.__b=r.__v.__k[0]}),i.then(d,d)},Gc.prototype.componentWillUnmount=function(){this.t=[]},Gc.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(d,c,h){return d&&(d.__c&&d.__c.__H&&(d.__c.__H.__.forEach(function(g){typeof g.__c=="function"&&g.__c()}),d.__c.__H=null),(d=tT({},d)).__c!=null&&(d.__c.__P===h&&(d.__c.__P=c),d.__c=null),d.__k=d.__k&&d.__k.map(function(g){return o(g,c,h)})),d}(this.__b,n,r.__O=r.__P)}this.__b=null}var s=e.__e&&kh(Fs,null,i.fallback);return s&&(s.__h=null),[kh(Fs,null,e.__e?null:i.children),s]};var Sg=function(i,e,n){if(++n[1]===n[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(n=i.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;i.u=n=n[2]}};(ql.prototype=new ot).__e=function(i){var e=this,n=R_(e.__v),r=e.o.get(i);return r[0]++,function(s){var o=function(){e.props.revealOrder?(r.push(s),Sg(e,i,r)):s()};n?n(o):o()}},ql.prototype.render=function(i){this.u=null,this.o=new Map;var e=Cd(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return i.children},ql.prototype.componentDidUpdate=ql.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,n){Sg(i,n,e)})};var aT=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,sT=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,oT=typeof document<"u",fT=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};ot.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(ot.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var Tg=ge.event;function lT(){}function dT(){return this.cancelBubble}function uT(){return this.defaultPrevented}ge.event=function(i){return Tg&&(i=Tg(i)),i.persist=lT,i.isPropagationStopped=dT,i.isDefaultPrevented=uT,i.nativeEvent=i};var Cg={configurable:!0,get:function(){return this.class}},Ig=ge.vnode;ge.vnode=function(i){var e=i.type,n=i.props,r=n;if(typeof e=="string"){var s=e.indexOf("-")===-1;for(var o in r={},n){var d=n[o];oT&&o==="children"&&e==="noscript"||o==="value"&&"defaultValue"in n&&d==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&d===!0?d="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+e)&&!fT(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():s&&sT.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():d===null&&(d=void 0),r[o]=d)}e=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Cd(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),e=="select"&&r.defaultValue!=null&&(r.value=Cd(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),i.props=r,n.class!=n.className&&(Cg.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",Cg))}i.$$typeof=aT,Ig&&Ig(i)};var Rg=ge.__r;ge.__r=function(i){Rg&&Rg(i),i.__c};const cT={light:"outline",dark:"solid"};class hT extends Pd{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return J("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return J("img",{src:n.src})}const r=Rd.categories[e.id]||Rd.categories.custom,s=this.props.icons=="auto"?cT[this.props.theme]:this.props.icons;return r[s]||r}render(){let e=null;return J("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:J("div",{class:"flex relative",children:[this.categories.map((n,r)=>{const s=n.name||Un.categories[n.id],o=!this.props.unfocused&&n.id==this.state.categoryId;return o&&(e=r),J("button",{"aria-label":s,"aria-selected":o||void 0,title:s,type:"button",class:"flex flex-grow flex-center",onMouseDown:d=>d.preventDefault(),onClick:()=>{this.props.onClick({category:n,i:r})},children:this.renderIcon(n)})}),J("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=xe.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class mT extends Pd{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Hl={rowsPerRender:10};class vT extends ot{getInitialState(e=this.props){return{skin:Cr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Un.rtl?"rtl":"ltr",this.refs={menu:xt(),navigation:xt(),scroll:xt(),search:xt(),searchInput:xt(),skinToneButton:xt(),skinToneRadio:xt()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const s in this.nextState)this.props[s]=this.nextState[s],(s==="custom"||s==="categories")&&(n=!0);delete this.nextState;const r=this.getInitialState();if(n)return this.reset(r);this.setState(r)})}componentWillUnmount(){this.unregister()}async reset(e={}){await Jd(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){var e;document.removeEventListener("click",this.handleClickOutside),(e=this.darkMedia)==null||e.removeEventListener("change",this.darkMediaCallback),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=xe;this.refs.categories=new Map;const n=xe.categories.map(s=>s.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const r=(s,o)=>{const d=[];d.__categoryId=o.id,d.__index=s.length,this.grid.push(d);const c=this.grid.length-1,h=c%Hl.rowsPerRender?{}:xt();return h.index=c,h.posinset=this.grid.setsize+1,s.push(h),d};for(let s of e){const o=[];let d=r(o,s);for(let c of s.emojis)d.length==this.getPerLine()&&(d=r(o,s)),this.grid.setsize+=1,d.push(c);this.refs.categories.set(s.id,{root:xt(),rows:o})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addEventListener("change",this.darkMediaCallback)}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:r}=e,s=()=>{const{width:d}=n.getBoundingClientRect();return Math.floor(d/r)},o=new ResizeObserver(()=>{this.unobserve({except:o}),this.setState({perLine:s()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return o.observe(n),this.observers.push(o),s()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const r=this.state.searchResults||this.grid,s=r[e]&&r[e][n];if(s)return Ss.get(s)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,r=d=>{d!=e.state.categoryId&&e.setState({categoryId:d})},s={root:this.refs.scroll.current,threshold:[0,1]},o=new IntersectionObserver(d=>{for(const h of d){const g=h.target.dataset.id;n.set(g,h.intersectionRatio)}const c=[...n];for(const[h,g]of c)if(g){r(h);break}},s);for(const{root:d}of this.refs.categories.values())o.observe(d.current);this.observers.push(o)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(r=>{for(const s of r){const o=parseInt(s.target.dataset.index);s.isIntersecting?e[o]=!0:delete e[o]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Hl.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Hl.rowsPerRender}px`});for(const{rows:r}of this.refs.categories.values())for(const s of r)s.current&&n.observe(s.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:r,right:s,up:o,down:d}){const c=this.state.searchResults||this.grid;if(!c.length)return;let[h,g]=this.state.pos;const _=(()=>{if(h==0&&g==0&&!e.repeat&&(r||o))return null;if(h==-1)return!e.repeat&&(s||d)&&n.selectionStart==n.value.length?[0,0]:null;if(r||s){let E=c[h];const w=r?-1:1;if(g+=w,!E[g]){if(h+=w,E=c[h],!E)return h=r?0:c.length-1,g=r?0:c[h].length-1,[h,g];g=r?E.length-1:0}return[h,g]}if(o||d){h+=o?-1:1;const E=c[h];return E?(E[g]||(g=E.length-1),[h,g]):(h=o?0:c.length-1,g=o?0:c[h].length-1,[h,g])}})();if(_)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:_,keyboard:!0},()=>{this.scrollTo({row:_[0]})})}scrollTo({categoryId:e,row:n}){const r=this.state.searchResults||this.grid;if(!r.length)return;const s=this.refs.scroll.current,o=s.getBoundingClientRect();let d=0;if(n>=0&&(e=r[n].__categoryId),e&&(d=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(o.top-s.scrollTop)+1),n>=0)if(!n)d=0;else{const c=r[n].__index,h=d+c*this.props.emojiButtonSize,g=h+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(h<s.scrollTop)d=h;else if(g>s.scrollTop+o.height)d=g-o.height;else return}this.ignoreMouse(),s.scrollTop=d}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:r}){if(this.props.onEmojiSelect&&(!n&&r&&(n=this.getEmojiByPos(r)),n)){const s=YS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&__.add(s,this.props),this.props.onEmojiSelect(s,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Cr.set("skin",e)}renderNav(){return J(hT,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return J("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[J("div",{class:"flex flex-middle flex-grow",children:[J("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:J(Eh,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),J("div",{class:`margin-${this.dir[0]}`,children:e||n?J("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[J("div",{class:"preview-title ellipsis",children:e?e.name:Un.search_no_results_1}),J("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Un.search_no_results_2})]}):J("div",{class:"preview-placeholder color-c",children:Un.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:r,grid:s}){const o=this.props.emojiButtonSize,d=this.state.tempSkin||this.state.skin,h=(e.skins[d-1]||e.skins[0]).native,g=QS(this.state.pos,n),_=n.concat(e.id).join("");return J(mT,{selected:g,skin:d,size:o,children:J("button",{"aria-label":h,"aria-selected":g||void 0,"aria-posinset":r,"aria-setsize":s.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:E=>this.handleEmojiClick({e:E,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[J("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(r-1)%this.props.emojiButtonColors.length]:void 0}}),J(Eh,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:d,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},_)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return J("div",{children:[J("div",{class:"spacer"}),J("div",{class:"flex flex-middle",children:[J("div",{class:"search relative flex-grow",children:[J("input",{type:"search",ref:this.refs.searchInput,placeholder:Un.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),J("span",{class:"icon loupe flex",children:Rd.search.loupe}),this.state.searchResults&&J("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Rd.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?J("div",{class:"category",ref:this.refs.search,children:[J("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Un.categories.search}),J("div",{children:e.length?e.map((n,r)=>J("div",{class:"flex",children:n.map((s,o)=>this.renderEmojiButton(s,{pos:[r,o],posinset:r*this.props.perLine+o+1,grid:e}))})):J("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&J("a",{onClick:this.props.onAddCustomEmoji,children:Un.add_custom})})})]}):null}renderCategories(){const{categories:e}=xe,n=!!this.state.searchResults,r=this.getPerLine();return J("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(s=>{const{root:o,rows:d}=this.refs.categories.get(s.id);return J("div",{"data-id":s.target?s.target.id:s.id,class:"category",ref:o,children:[J("div",{class:`sticky padding-small align-${this.dir[0]}`,children:s.name||Un.categories[s.id]}),J("div",{class:"relative",style:{height:d.length*this.props.emojiButtonSize},children:d.map((c,h)=>{const g=c.index-c.index%Hl.rowsPerRender,_=this.state.visibleRows[g],E="current"in c?c:void 0;if(!_&&!E)return null;const w=h*r,I=w+r,A=s.emojis.slice(w,I);return A.length<r&&A.push(...new Array(r-A.length)),J("div",{"data-index":c.index,ref:E,class:"flex row",style:{top:h*this.props.emojiButtonSize},children:_&&A.map((B,M)=>{if(!B)return J("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const q=Ss.get(B);return this.renderEmojiButton(q,{pos:[c.index,M],posinset:c.posinset+M,grid:this.grid})})},c.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:J("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:J("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Un.skins.choose,title:Un.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:J("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return J("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),r=this.base.getBoundingClientRect(),s={};return this.dir=="ltr"?s.right=r.right-n.right-3:s.left=n.left-r.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?s.bottom=r.bottom-n.top+6:(s.top=n.bottom-r.top+3,s.bottom="auto"),J("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Un.skins.choose,class:"menu hidden","data-position":s.top?"top":"bottom",style:s,children:[...Array(6).keys()].map(o=>{const d=o+1,c=this.state.skin==d;return J("div",{children:[J("input",{type:"radio",name:"skin-tone",value:d,"aria-label":Un.skins[d],ref:c?this.refs.skinToneRadio:null,defaultChecked:c,onChange:()=>this.handleSkinMouseOver(d),onKeyDown:h=>{(h.code=="Enter"||h.code=="Space"||h.code=="Tab")&&(h.preventDefault(),this.handleSkinClick(d))}}),J("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(d),onMouseEnter:()=>this.handleSkinMouseOver(d),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[J("span",{class:`skin-tone skin-tone-${d}`}),J("span",{class:"margin-small-lr",children:Un.skins[d]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return J("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&J("div",{class:"padding-lr",children:this.renderSearch()}),J("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:J("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Si(this,"darkMediaCallback",()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})}),Si(this,"handleClickOutside",n=>{const{element:r}=this.props;n.target!=r&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Si(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Si(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Si(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Si(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:r}=n,s=await Ss.search(r),o=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!s)return this.setState({searchResults:s,pos:[-1,-1]},o);const d=n.selectionStart==n.value.length?[0,0]:[-1,-1],c=[];c.setsize=s.length;let h=null;for(let g of s)(!c.length||h.length==this.getPerLine())&&(h=[],h.__categoryId="search",h.__index=c.length,c.push(h)),h.push(g);this.ignoreMouse(),this.setState({searchResults:c,pos:d},o)}),Si(this,"handleSearchKeyDown",n=>{const r=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:r,left:!0});break;case"ArrowRight":this.navigate({e:n,input:r,right:!0});break;case"ArrowUp":this.navigate({e:n,input:r,up:!0});break;case"ArrowDown":this.navigate({e:n,input:r,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Si(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Si(this,"handleCategoryClick",({category:n,i:r})=>{this.scrollTo(r==0?{row:-1}:{categoryId:n.id})}),Si(this,"openSkins",n=>{const{currentTarget:r}=n,s=r.getBoundingClientRect();this.setState({showSkins:s},async()=>{await JS(2);const o=this.refs.menu.current;o&&(o.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class E1 extends nT{async connectedCallback(){const e=E_(this.props,Dt,this);e.element=this,e.ref=n=>{this.component=n},await Jd(e),!this.disconnected&&g_(J(vT,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:a_(P_)})}}Si(E1,"Props",Dt);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",E1);var P_={};P_=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`).map((N,L)=>N.startsWith("•")?G.jsxs("ul",{children:[G.jsx("li",{children:N.replace("•","").trim()})," "]},L):G.jsx("p",{children:N},L))}):G.jsx("span",{children:S.text}),G.jsx("span",{children:S.timestamp})]},P)),g&&G.jsxs("div",{className:"typing",children:["Typing",B]}),G.jsx("div",{ref:q})]}),G.jsxs("form",{className:"msg-form",onSubmit:S=>S.preventDefault(),children:[G.jsx("i",{className:"fa-solid fa-face-smile emoji",onClick:()=>w(S=>!S)}),E&&G.jsx("div",{className:"picker",children:G.jsx(pT,{data:wT,onEmojiSelect:W,theme:"dark"})}),G.jsx("textarea",{type:"text",className:"msg-input",placeholder:"Type a message..",value:o,onChange:re,onKeyDown:we,onFocus:()=>w(!1)}),G.jsx("i",{className:"fa-solid fa-paper-plane",onClick:ae})]})]})]})};A_.propTypes={chats:Ei.arrayOf(Ei.shape({id:Ei.string.isRequired,messages:Ei.arrayOf(Ei.shape({type:Ei.string.isRequired,text:Ei.string.isRequired,timestamp:Ei.string.isRequired}))})).isRequired,setChats:Ei.func.isRequired,activeChat:Ei.string,setActiveChat:Ei.func.isRequired,onNewChat:Ei.func.isRequired};const bT="/assets/avatar1-DOIKO6e6.svg",ET="/assets/avatar2-DAqQZHav.svg",ST="/assets/avatar3-BNDszvOo.svg",TT="/assets/avatar4-DMcIOodN.svg",CT="/assets/avatar5-lZCovT12.svg",IT="/assets/avatar6-DwObNTSb.svg",RT="/assets/avatar7-DiHKlv_r.svg",PT="/assets/avatar8-DCQ2K7tr.svg",AT="/assets/avatar9-CTAUdzU6.svg",xT="/assets/avatar10-DP0ywBiY.svg",NT="/assets/avatar11-D2zcunTQ.svg",DT=i=>{for(let e=i.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[i[e],i[n]]=[i[n],i[e]]}return i},FT=({onAvatarSelect:i})=>{const[e,n]=U.useState(()=>{const c=localStorage.getItem("avatar");return c?JSON.parse(c):null}),[r,s]=U.useState([]);U.useEffect(()=>{const h=DT([...[{id:1,url:bT,alt:"Avatar 1"},{id:2,url:ET,alt:"Avatar 2"},{id:3,url:ST,alt:"Avatar 3"},{id:4,url:TT,alt:"Avatar 4"},{id:5,url:CT,alt:"Avatar 5"},{id:6,url:IT,alt:"Avatar 6"},{id:7,url:RT,alt:"Avatar 7"},{id:8,url:PT,alt:"Avatar 8"},{id:9,url:AT,alt:"Avatar 9"},{id:10,url:xT,alt:"Avatar 10"},{id:11,url:NT,alt:"Avatar 11"}]]).slice(0,4);s(h)},[]);const o=c=>{n(c)},d=()=>{e&&i(e)};return G.jsx("div",{className:"avatar-selector-container",children:G.jsxs("div",{className:"avatar-selector-content",children:[G.jsx("h2",{children:"Choose Your Avatar"}),G.jsx("p",{children:"Select an avatar to represent you in Course Advisor"}),G.jsx("div",{className:"avatar-grid",children:r.map(c=>G.jsx("div",{className:`avatar-option ${(e==null?void 0:e.id)===c.id?"selected":""}`,onClick:()=>o(c),children:G.jsx("img",{src:c.url,alt:c.alt})},c.id))}),G.jsx("button",{className:"confirm-avatar-btn",onClick:d,disabled:!e,children:"Continue"})]})})},MT=()=>{const[i,e]=U.useState(""),[n,r]=U.useState(null),[s,o]=U.useState(null),d=async c=>{c.preventDefault();try{await ES(i),o("Password reset email sent! Check your inbox."),r(null),e("")}catch(h){h.code==="auth/user-not-found"?r("No account found with this email"):r("Error sending reset email. Please try again."),console.error("Password reset error:",h)}};return G.jsx("div",{className:"login-container",children:G.jsx("div",{className:"login-content",children:G.jsxs("div",{className:"sign-in-form",children:[G.jsx("h1",{children:"Reset Password"}),G.jsx("p",{children:"Enter your email to receive a password reset link"}),n&&G.jsx("div",{className:"error-message",children:n}),s&&G.jsx("div",{className:"success-message",children:s}),G.jsxs("form",{onSubmit:d,children:[G.jsx("input",{type:"email",placeholder:"Your email",value:i,onChange:c=>e(c.target.value),required:!0}),G.jsx("button",{type:"submit",className:"email-sign-in",children:"Send Reset Link"}),G.jsxs("p",{className:"signup-link",children:["Remember your password? ",G.jsx(Ts,{to:"/",children:"Sign in"})]})]})]})})})},LT=({user:i,onSignOut:e})=>G.jsxs("div",{className:"user-profile",children:[i&&i.avatarUrl&&G.jsx("img",{src:i.avatarUrl,alt:"User Avatar",className:"user-avatar"}),G.jsx("span",{className:"user-name",children:i==null?void 0:i.displayName}),G.jsx("button",{className:"sign-out-btn",onClick:e,children:"Sign Out"})]}),Dn=[];for(let i=0;i<256;++i)Dn.push((i+256).toString(16).slice(1));function OT(i,e=0){return(Dn[i[e+0]]+Dn[i[e+1]]+Dn[i[e+2]]+Dn[i[e+3]]+"-"+Dn[i[e+4]]+Dn[i[e+5]]+"-"+Dn[i[e+6]]+Dn[i[e+7]]+"-"+Dn[i[e+8]]+Dn[i[e+9]]+"-"+Dn[i[e+10]]+Dn[i[e+11]]+Dn[i[e+12]]+Dn[i[e+13]]+Dn[i[e+14]]+Dn[i[e+15]]).toLowerCase()}let Kc;const VT=new Uint8Array(16);function jT(){if(!Kc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Kc=crypto.getRandomValues.bind(crypto)}return Kc(VT)}const BT=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Pg={randomUUID:BT};function zT(i,e,n){if(Pg.randomUUID&&!e&&!i)return Pg.randomUUID();i=i||{};const r=i.random||(i.rng||jT)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,OT(r)}const $T=()=>{const[i,e]=U.useState(()=>{const w=localStorage.getItem("user");return w?JSON.parse(w):null}),[n,r]=U.useState(()=>{const w=localStorage.getItem("avatar");return w?JSON.parse(w):null}),[s,o]=U.useState(()=>{const w=localStorage.getItem("chats");return w?JSON.parse(w):[]}),[d,c]=U.useState(()=>localStorage.getItem("activeChat")||null);U.useEffect(()=>{i&&localStorage.setItem("user",JSON.stringify(i))},[i]),U.useEffect(()=>{n&&localStorage.setItem("avatar",JSON.stringify(n))},[n]),U.useEffect(()=>{localStorage.setItem("chats",JSON.stringify(s))},[s]),U.useEffect(()=>{d&&localStorage.setItem("activeChat",d)},[d]);const h=w=>{e(w),localStorage.setItem("user",JSON.stringify(w))},g=w=>{r(w),localStorage.setItem("avatar",JSON.stringify(w)),e(I=>({...I,avatarUrl:w.url}))},_=async()=>{try{await Kd.signOut(),localStorage.removeItem("user"),localStorage.removeItem("avatar"),localStorage.removeItem("chats"),localStorage.removeItem("activeChat"),e(null),r(null),o([]),c(null)}catch(w){console.error("Error signing out:",w)}},E=()=>({id:zT(),displayId:`Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,messages:[]});return G.jsx(i2,{children:G.jsxs("div",{className:"app",children:[i&&n&&G.jsx(LT,{user:i,onSignOut:_}),G.jsx("div",{className:"app-container",children:G.jsxs(Nw,{children:[G.jsx(vs,{path:"/signup",element:i?G.jsx(ms,{to:"/"}):G.jsx(TS,{onSignUp:h})}),G.jsx(vs,{path:"/forgot-password",element:i?G.jsx(ms,{to:"/"}):G.jsx(MT,{})}),G.jsx(vs,{path:"/select-avatar",element:i&&!n?G.jsx(FT,{onAvatarSelect:g}):G.jsx(ms,{to:"/"})}),G.jsx(vs,{path:"/login",element:i?G.jsx(ms,{to:"/"}):G.jsx(SS,{onLogin:h})}),G.jsx(vs,{path:"/",element:i?n?G.jsx(A_,{user:i,avatar:n,chats:s,setChats:o,activeChat:d,setActiveChat:c,onNewChat:E}):G.jsx(ms,{to:"/select-avatar"}):G.jsx(ms,{to:"/login"})})]})})]})})};$k.createRoot(document.getElementById("root")).render(G.jsx(Ag.StrictMode,{children:G.jsx($T,{})}));