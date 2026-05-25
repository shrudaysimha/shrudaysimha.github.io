(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function _y(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pd={exports:{}},kl={};var Wv;function ib(){if(Wv)return kl;Wv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return kl.Fragment=t,kl.jsx=n,kl.jsxs=n,kl}var qv;function ab(){return qv||(qv=1,Pd.exports=ib()),Pd.exports}var q=ab(),zd={exports:{}},ae={};var Yv;function rb(){if(Yv)return ae;Yv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function x(z,et,_t){this.props=z,this.context=et,this.refs=S,this.updater=_t||E}x.prototype.isReactComponent={},x.prototype.setState=function(z,et){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,et,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function R(){}R.prototype=x.prototype;function w(z,et,_t){this.props=z,this.context=et,this.refs=S,this.updater=_t||E}var C=w.prototype=new R;C.constructor=w,M(C,x.prototype),C.isPureReactComponent=!0;var N=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function T(z,et,_t){var Et=_t.ref;return{$$typeof:o,type:z,key:et,ref:Et!==void 0?Et:null,props:_t}}function L(z,et){return T(z.type,et,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function j(z){var et={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(_t){return et[_t]})}var Q=/\/+/g;function ut(z,et){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):et.toString(36)}function ot(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(et){z.status==="pending"&&(z.status="fulfilled",z.value=et)},function(et){z.status==="pending"&&(z.status="rejected",z.reason=et)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,et,_t,Et,Lt){var st=typeof z;(st==="undefined"||st==="boolean")&&(z=null);var ht=!1;if(z===null)ht=!0;else switch(st){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(z.$$typeof){case o:case t:ht=!0;break;case _:return ht=z._init,B(ht(z._payload),et,_t,Et,Lt)}}if(ht)return Lt=Lt(z),ht=Et===""?"."+ut(z,0):Et,N(Lt)?(_t="",ht!=null&&(_t=ht.replace(Q,"$&/")+"/"),B(Lt,et,_t,"",function(Ht){return Ht})):Lt!=null&&(H(Lt)&&(Lt=L(Lt,_t+(Lt.key==null||z&&z.key===Lt.key?"":(""+Lt.key).replace(Q,"$&/")+"/")+ht)),et.push(Lt)),1;ht=0;var Dt=Et===""?".":Et+":";if(N(z))for(var kt=0;kt<z.length;kt++)Et=z[kt],st=Dt+ut(Et,kt),ht+=B(Et,et,_t,st,Lt);else if(kt=y(z),typeof kt=="function")for(z=kt.call(z),kt=0;!(Et=z.next()).done;)Et=Et.value,st=Dt+ut(Et,kt++),ht+=B(Et,et,_t,st,Lt);else if(st==="object"){if(typeof z.then=="function")return B(ot(z),et,_t,Et,Lt);throw et=String(z),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ht}function G(z,et,_t){if(z==null)return z;var Et=[],Lt=0;return B(z,Et,"","",function(st){return et.call(_t,st,Lt++)}),Et}function $(z){if(z._status===-1){var et=z._result;et=et(),et.then(function(_t){(z._status===0||z._status===-1)&&(z._status=1,z._result=_t)},function(_t){(z._status===0||z._status===-1)&&(z._status=2,z._result=_t)}),z._status===-1&&(z._status=0,z._result=et)}if(z._status===1)return z._result.default;throw z._result}var St=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},xt={map:G,forEach:function(z,et,_t){G(z,function(){et.apply(this,arguments)},_t)},count:function(z){var et=0;return G(z,function(){et++}),et},toArray:function(z){return G(z,function(et){return et})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ae.Activity=g,ae.Children=xt,ae.Component=x,ae.Fragment=n,ae.Profiler=s,ae.PureComponent=w,ae.StrictMode=a,ae.Suspense=p,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ae.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},ae.cache=function(z){return function(){return z.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(z,et,_t){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Et=M({},z.props),Lt=z.key;if(et!=null)for(st in et.key!==void 0&&(Lt=""+et.key),et)!I.call(et,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&et.ref===void 0||(Et[st]=et[st]);var st=arguments.length-2;if(st===1)Et.children=_t;else if(1<st){for(var ht=Array(st),Dt=0;Dt<st;Dt++)ht[Dt]=arguments[Dt+2];Et.children=ht}return T(z.type,Lt,Et)},ae.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ae.createElement=function(z,et,_t){var Et,Lt={},st=null;if(et!=null)for(Et in et.key!==void 0&&(st=""+et.key),et)I.call(et,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Lt[Et]=et[Et]);var ht=arguments.length-2;if(ht===1)Lt.children=_t;else if(1<ht){for(var Dt=Array(ht),kt=0;kt<ht;kt++)Dt[kt]=arguments[kt+2];Lt.children=Dt}if(z&&z.defaultProps)for(Et in ht=z.defaultProps,ht)Lt[Et]===void 0&&(Lt[Et]=ht[Et]);return T(z,st,Lt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(z){return{$$typeof:f,render:z}},ae.isValidElement=H,ae.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:$}},ae.memo=function(z,et){return{$$typeof:d,type:z,compare:et===void 0?null:et}},ae.startTransition=function(z){var et=O.T,_t={};O.T=_t;try{var Et=z(),Lt=O.S;Lt!==null&&Lt(_t,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(P,St)}catch(st){St(st)}finally{et!==null&&_t.types!==null&&(et.types=_t.types),O.T=et}},ae.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ae.use=function(z){return O.H.use(z)},ae.useActionState=function(z,et,_t){return O.H.useActionState(z,et,_t)},ae.useCallback=function(z,et){return O.H.useCallback(z,et)},ae.useContext=function(z){return O.H.useContext(z)},ae.useDebugValue=function(){},ae.useDeferredValue=function(z,et){return O.H.useDeferredValue(z,et)},ae.useEffect=function(z,et){return O.H.useEffect(z,et)},ae.useEffectEvent=function(z){return O.H.useEffectEvent(z)},ae.useId=function(){return O.H.useId()},ae.useImperativeHandle=function(z,et,_t){return O.H.useImperativeHandle(z,et,_t)},ae.useInsertionEffect=function(z,et){return O.H.useInsertionEffect(z,et)},ae.useLayoutEffect=function(z,et){return O.H.useLayoutEffect(z,et)},ae.useMemo=function(z,et){return O.H.useMemo(z,et)},ae.useOptimistic=function(z,et){return O.H.useOptimistic(z,et)},ae.useReducer=function(z,et,_t){return O.H.useReducer(z,et,_t)},ae.useRef=function(z){return O.H.useRef(z)},ae.useState=function(z){return O.H.useState(z)},ae.useSyncExternalStore=function(z,et,_t){return O.H.useSyncExternalStore(z,et,_t)},ae.useTransition=function(){return O.H.useTransition()},ae.version="19.2.4",ae}var jv;function zm(){return jv||(jv=1,zd.exports=rb()),zd.exports}var Te=zm();const sb=_y(Te);var Fd={exports:{}},Xl={},Bd={exports:{}},Id={};var Zv;function ob(){return Zv||(Zv=1,(function(o){function t(B,G){var $=B.length;B.push(G);t:for(;0<$;){var St=$-1>>>1,xt=B[St];if(0<s(xt,G))B[St]=G,B[$]=xt,$=St;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var G=B[0],$=B.pop();if($!==G){B[0]=$;t:for(var St=0,xt=B.length,z=xt>>>1;St<z;){var et=2*(St+1)-1,_t=B[et],Et=et+1,Lt=B[Et];if(0>s(_t,$))Et<xt&&0>s(Lt,_t)?(B[St]=Lt,B[Et]=$,St=Et):(B[St]=_t,B[et]=$,St=et);else if(Et<xt&&0>s(Lt,$))B[St]=Lt,B[Et]=$,St=Et;else break t}}return G}function s(B,G){var $=B.sortIndex-G.sortIndex;return $!==0?$:B.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=B)a(d),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(d)}}function N(B){if(M=!1,C(B),!E)if(n(p)!==null)E=!0,P||(P=!0,j());else{var G=n(d);G!==null&&ot(N,G.startTime-B)}}var P=!1,O=-1,I=5,T=-1;function L(){return S?!0:!(o.unstable_now()-T<I)}function H(){if(S=!1,P){var B=o.unstable_now();T=B;var G=!0;try{t:{E=!1,M&&(M=!1,R(O),O=-1),y=!0;var $=v;try{e:{for(C(B),g=n(p);g!==null&&!(g.expirationTime>B&&L());){var St=g.callback;if(typeof St=="function"){g.callback=null,v=g.priorityLevel;var xt=St(g.expirationTime<=B);if(B=o.unstable_now(),typeof xt=="function"){g.callback=xt,C(B),G=!0;break e}g===n(p)&&a(p),C(B)}else a(p);g=n(p)}if(g!==null)G=!0;else{var z=n(d);z!==null&&ot(N,z.startTime-B),G=!1}}break t}finally{g=null,v=$,y=!1}G=void 0}}finally{G?j():P=!1}}}var j;if(typeof w=="function")j=function(){w(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ut=Q.port2;Q.port1.onmessage=H,j=function(){ut.postMessage(null)}}else j=function(){x(H,0)};function ot(B,G){O=x(function(){B(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var $=v;v=G;try{return B()}finally{v=$}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=v;v=B;try{return G()}finally{v=$}},o.unstable_scheduleCallback=function(B,G,$){var St=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?St+$:St):$=St,B){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=$+xt,B={id:_++,callback:G,priorityLevel:B,startTime:$,expirationTime:xt,sortIndex:-1},$>St?(B.sortIndex=$,t(d,B),n(p)===null&&B===n(d)&&(M?(R(O),O=-1):M=!0,ot(N,$-St))):(B.sortIndex=xt,t(p,B),E||y||(E=!0,P||(P=!0,j()))),B},o.unstable_shouldYield=L,o.unstable_wrapCallback=function(B){var G=v;return function(){var $=v;v=G;try{return B.apply(this,arguments)}finally{v=$}}}})(Id)),Id}var Kv;function lb(){return Kv||(Kv=1,Bd.exports=ob()),Bd.exports}var Hd={exports:{}},kn={};var Qv;function ub(){if(Qv)return kn;Qv=1;var o=zm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},kn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},kn.requestFormReset=function(p){a.d.r(p)},kn.unstable_batchedUpdates=function(p,d){return p(d)},kn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.2.4",kn}var Jv;function cb(){if(Jv)return Hd.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hd.exports=ub(),Hd.exports}var $v;function fb(){if($v)return Xl;$v=1;var o=lb(),t=zm(),n=cb();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var b=!1,D=h.child;D;){if(D===r){b=!0,r=h,u=m;break}if(D===u){b=!0,u=h,r=m;break}D=D.sibling}if(!b){for(D=m.child;D;){if(D===r){b=!0,r=m,u=h;break}if(D===u){b=!0,u=m,r=h;break}D=D.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case w:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:ut(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return ut(e(i))}catch{}}return null}var ot=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function z(e){return{current:e}}function et(e){0>xt||(e.current=St[xt],St[xt]=null,xt--)}function _t(e,i){xt++,St[xt]=e.current,e.current=i}var Et=z(null),Lt=z(null),st=z(null),ht=z(null);function Dt(e,i){switch(_t(st,i),_t(Lt,e),_t(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=pv(i),e=mv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Et),_t(Et,e)}function kt(){et(Et),et(Lt),et(st)}function Ht(e){e.memoizedState!==null&&_t(ht,e);var i=Et.current,r=mv(i,e.type);i!==r&&(_t(Lt,e),_t(Et,r))}function he(e){Lt.current===e&&(et(Et),et(Lt)),ht.current===e&&(et(ht),Il._currentValue=$)}var rn,_e;function de(e){if(rn===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",_e=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+_e}var we=!1;function se(e,i){if(!e||we)return"";we=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){rt=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),b=m[0],D=m[1];if(b&&D){var V=b.split(`
`),nt=D.split(`
`);for(h=u=0;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(u===V.length||h===nt.length)for(u=V.length-1,h=nt.length-1;1<=u&&0<=h&&V[u]!==nt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(V[u]!==nt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||V[u]!==nt[h]){var dt=`
`+V[u].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=u&&0<=h);break}}}finally{we=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?de(r):""}function sn(e,i){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==i&&i!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return de("Activity");default:return""}}function k(e){try{var i="",r=null;do i+=sn(e,r),r=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Qe=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,F=o.unstable_requestPaint,A=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,bt=null,Tt=null;function Bt(e){if(typeof Xt=="function"&&ee(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var zt=Math.clz32?Math.clz32:W,wt=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(wt(e)/le|0)|0}var Nt=256,At=262144,Ft=4194304;function Mt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var D=u&134217727;return D!==0?(u=D&~m,u!==0?h=Mt(u):(b&=D,b!==0?h=Mt(b):r||(r=D&~e,r!==0&&(h=Mt(r))))):(D=u&~m,D!==0?h=Mt(D):b!==0?h=Mt(b):r||(r=u&~e,r!==0&&(h=Mt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Rt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ne(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function be(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ji(e,i,r,u,h,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var D=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(r=b&~r;0<r;){var dt=31-zt(r),gt=1<<dt;D[dt]=0,V[dt]=-1;var rt=nt[dt];if(rt!==null)for(nt[dt]=null,dt=0;dt<rt.length;dt++){var ct=rt[dt];ct!==null&&(ct.lane&=-536870913)}r&=~gt}u!==0&&bu(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function bu(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-zt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&261930}function Qo(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-zt(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function Ls(e,i){var r=i&-i;return r=(r&42)!==0?1:Jo(r),(r&(e.suspendedLanes|i))!==0?0:r}function Jo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $o(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function oa(e,i){var r=G.p;try{return G.p=e,i()}finally{G.p=r}}var Di=Math.random().toString(36).slice(2),mn="__reactFiber$"+Di,Dn="__reactProps$"+Di,Zi="__reactContainer$"+Di,Ps="__reactEvents$"+Di,zs="__reactListeners$"+Di,Eu="__reactHandles$"+Di,tl="__reactResources$"+Di,jr="__reactMarker$"+Di;function el(e){delete e[mn],delete e[Dn],delete e[Ps],delete e[zs],delete e[Eu]}function ar(e){var i=e[mn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Zi]||r[mn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Mv(e);e!==null;){if(r=e[mn])return r;e=Mv(e)}return i}e=r,r=e.parentNode}return null}function rr(e){if(e=e[mn]||e[Zi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Zr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function sr(e){var i=e[tl];return i||(i=e[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function U(e){e[jr]=!0}var Z=new Set,lt={};function at(e,i){J(e,i),J(e+"Capture",i)}function J(e,i){for(lt[e]=i,e=0;e<i.length;e++)Z.add(i[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Ot={};function Gt(e){return Qe.call(Ot,e)?!0:Qe.call(It,e)?!1:Ut.test(e)?Ot[e]=!0:(It[e]=!0,!1)}function Wt(e,i,r){if(Gt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Jt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function qt(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,r){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){if(!e._valueTracker){var i=De(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Pe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ie(e){return e.replace(Ue,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,r,u,h,m,b,D){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$t(i)):e.value!==""+$t(i)&&(e.value=""+$t(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Nn(e,b,$t(i)):r!=null?Nn(e,b,$t(r)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+$t(D):e.removeAttribute("name")}function Ta(e,i,r,u,h,m,b,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){je(e);return}r=r!=null?""+$t(r):"",i=i!=null?""+$t(i):r,D||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=D?e.checked:!!u,e.defaultChecked=!!u,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),je(e)}function Nn(e,i,r){i==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ui(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+$t(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Be(e,i,r){if(i!=null&&(i=""+$t(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+$t(r):""}function Ln(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(ot(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=$t(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u),je(e)}function bn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||On.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Fs(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&Pn(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Pn(e,m,i[m])}function Ki(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $S=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tu(e){return tM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Aa(){}var Nf=null;function Lf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Is=null;function d0(e){var i=rr(e);if(i&&(e=i.stateNode)){var r=e[Dn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ie(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[Dn]||null;if(!h)throw Error(a(90));Un(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&Pe(u)}break t;case"textarea":Be(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Ui(e,!!r.multiple,i,!1)}}}var Of=!1;function p0(e,i,r){if(Of)return e(i,r);Of=!0;try{var u=e(i);return u}finally{if(Of=!1,(Bs!==null||Is!==null)&&(hc(),Bs&&(i=Bs,e=Is,Is=Bs=null,d0(i),e)))for(i=0;i<e.length;i++)d0(e[i])}}function nl(e,i){var r=e.stateNode;if(r===null)return null;var u=r[Dn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=!1;if(Ra)try{var il={};Object.defineProperty(il,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{Pf=!1}var or=null,zf=null,Au=null;function m0(){if(Au)return Au;var e,i=zf,r=i.length,u,h="value"in or?or.value:or.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var b=r-e;for(u=1;u<=b&&i[r-u]===h[m-u];u++);return Au=h.slice(e,1<u?1-u:void 0)}function Ru(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Cu(){return!0}function _0(){return!1}function $n(e){function i(r,u,h,m,b){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(r=e[D],this[D]=r?r(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Cu:_0,this.isPropagationStopped=_0,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=$n(Kr),al=g({},Kr,{view:0,detail:0}),eM=$n(al),Ff,Bf,rl,Du=g({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(Ff=e.screenX-rl.screenX,Bf=e.screenY-rl.screenY):Bf=Ff=0,rl=e),Ff)},movementY:function(e){return"movementY"in e?e.movementY:Bf}}),g0=$n(Du),nM=g({},Du,{dataTransfer:0}),iM=$n(nM),aM=g({},al,{relatedTarget:0}),If=$n(aM),rM=g({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),sM=$n(rM),oM=g({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lM=$n(oM),uM=g({},Kr,{data:0}),v0=$n(uM),cM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=hM[e])?!!i[e]:!1}function Hf(){return dM}var pM=g({},al,{key:function(e){if(e.key){var i=cM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(e){return e.type==="keypress"?Ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mM=$n(pM),_M=g({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=$n(_M),gM=g({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),vM=$n(gM),xM=g({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yM=$n(xM),SM=g({},Du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),MM=$n(SM),bM=g({},Kr,{newState:0,oldState:0}),EM=$n(bM),TM=[9,13,27,32],Gf=Ra&&"CompositionEvent"in window,sl=null;Ra&&"documentMode"in document&&(sl=document.documentMode);var AM=Ra&&"TextEvent"in window&&!sl,y0=Ra&&(!Gf||sl&&8<sl&&11>=sl),S0=" ",M0=!1;function b0(e,i){switch(e){case"keyup":return TM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function RM(e,i){switch(e){case"compositionend":return E0(i);case"keypress":return i.which!==32?null:(M0=!0,S0);case"textInput":return e=i.data,e===S0&&M0?null:e;default:return null}}function CM(e,i){if(Hs)return e==="compositionend"||!Gf&&b0(e,i)?(e=m0(),Au=zf=or=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return y0&&i.locale!=="ko"?null:i.data;default:return null}}var wM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!wM[e.type]:i==="textarea"}function A0(e,i,r,u){Bs?Is?Is.push(u):Is=[u]:Bs=u,i=xc(i,"onChange"),0<i.length&&(r=new wu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var ol=null,ll=null;function DM(e){lv(e,0)}function Uu(e){var i=Zr(e);if(Pe(i))return e}function R0(e,i){if(e==="change")return i}var C0=!1;if(Ra){var Vf;if(Ra){var kf="oninput"in document;if(!kf){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),kf=typeof w0.oninput=="function"}Vf=kf}else Vf=!1;C0=Vf&&(!document.documentMode||9<document.documentMode)}function D0(){ol&&(ol.detachEvent("onpropertychange",U0),ll=ol=null)}function U0(e){if(e.propertyName==="value"&&Uu(ll)){var i=[];A0(i,ll,e,Lf(e)),p0(DM,i)}}function UM(e,i,r){e==="focusin"?(D0(),ol=i,ll=r,ol.attachEvent("onpropertychange",U0)):e==="focusout"&&D0()}function NM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uu(ll)}function LM(e,i){if(e==="click")return Uu(i)}function OM(e,i){if(e==="input"||e==="change")return Uu(i)}function PM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var di=typeof Object.is=="function"?Object.is:PM;function ul(e,i){if(di(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!Qe.call(i,h)||!di(e[h],i[h]))return!1}return!0}function N0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,i){var r=N0(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=N0(r)}}function O0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?O0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function P0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Kt(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Kt(e.document)}return i}function Xf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var zM=Ra&&"documentMode"in document&&11>=document.documentMode,Gs=null,Wf=null,cl=null,qf=!1;function z0(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qf||Gs==null||Gs!==Kt(u)||(u=Gs,"selectionStart"in u&&Xf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),cl&&ul(cl,u)||(cl=u,u=xc(Wf,"onSelect"),0<u.length&&(i=new wu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=Gs)))}function Qr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Vs={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},Yf={},F0={};Ra&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Jr(e){if(Yf[e])return Yf[e];if(!Vs[e])return e;var i=Vs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in F0)return Yf[e]=i[r];return e}var B0=Jr("animationend"),I0=Jr("animationiteration"),H0=Jr("animationstart"),FM=Jr("transitionrun"),BM=Jr("transitionstart"),IM=Jr("transitioncancel"),G0=Jr("transitionend"),V0=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function Qi(e,i){V0.set(e,i),at(i,[e])}var Nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],ks=0,Zf=0;function Lu(){for(var e=ks,i=Zf=ks=0;i<e;){var r=Ni[i];Ni[i++]=null;var u=Ni[i];Ni[i++]=null;var h=Ni[i];Ni[i++]=null;var m=Ni[i];if(Ni[i++]=null,u!==null&&h!==null){var b=u.pending;b===null?h.next=h:(h.next=b.next,b.next=h),u.pending=h}m!==0&&k0(r,h,m)}}function Ou(e,i,r,u){Ni[ks++]=e,Ni[ks++]=i,Ni[ks++]=r,Ni[ks++]=u,Zf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Kf(e,i,r,u){return Ou(e,i,r,u),Pu(e)}function $r(e,i){return Ou(e,null,null,i),Pu(e)}function k0(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=r|536870912),m):null}function Pu(e){if(50<Nl)throw Nl=0,rd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Xs={};function HM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,i,r,u){return new HM(e,i,r,u)}function Qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,i){var r=e.alternate;return r===null?(r=pi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function X0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function zu(e,i,r,u,h,m){var b=0;if(u=e,typeof e=="function")Qf(e)&&(b=1);else if(typeof e=="string")b=W1(e,r,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=pi(31,r,i,h),e.elementType=T,e.lanes=m,e;case M:return ts(r.children,h,m,i);case S:b=8,h|=24;break;case x:return e=pi(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case N:return e=pi(13,r,i,h),e.elementType=N,e.lanes=m,e;case P:return e=pi(19,r,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:b=10;break t;case R:b=9;break t;case C:b=11;break t;case O:b=14;break t;case I:b=16,u=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=pi(b,r,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function ts(e,i,r,u){return e=pi(7,e,u,i),e.lanes=r,e}function Jf(e,i,r){return e=pi(6,e,null,i),e.lanes=r,e}function W0(e){var i=pi(18,null,null,0);return i.stateNode=e,i}function $f(e,i,r){return i=pi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var q0=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var r=q0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:k(i)},q0.set(e,i),i)}return{value:e,source:i,stack:k(i)}}var Ws=[],qs=0,Fu=null,fl=0,Oi=[],Pi=0,lr=null,la=1,ua="";function wa(e,i){Ws[qs++]=fl,Ws[qs++]=Fu,Fu=e,fl=i}function Y0(e,i,r){Oi[Pi++]=la,Oi[Pi++]=ua,Oi[Pi++]=lr,lr=e;var u=la;e=ua;var h=32-zt(u)-1;u&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var b=h-h%5;m=(u&(1<<b)-1).toString(32),u>>=b,h-=b,la=1<<32-zt(i)+h|r<<h|u,ua=m+e}else la=1<<m|r<<h|u,ua=e}function th(e){e.return!==null&&(wa(e,1),Y0(e,1,0))}function eh(e){for(;e===Fu;)Fu=Ws[--qs],Ws[qs]=null,fl=Ws[--qs],Ws[qs]=null;for(;e===lr;)lr=Oi[--Pi],Oi[Pi]=null,ua=Oi[--Pi],Oi[Pi]=null,la=Oi[--Pi],Oi[Pi]=null}function j0(e,i){Oi[Pi++]=la,Oi[Pi++]=ua,Oi[Pi++]=lr,la=i.id,ua=i.overflow,lr=e}var zn=null,Ze=null,xe=!1,ur=null,zi=!1,nh=Error(a(519));function cr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(Li(i,e)),nh}function Z0(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[mn]=e,i[Dn]=u,r){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(r=0;r<Ol.length;r++)me(Ol[r],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Ta(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),Ln(i,u.value,u.defaultValue,u.children)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||hv(i.textContent,r)?(u.popover!=null&&(me("beforetoggle",i),me("toggle",i)),u.onScroll!=null&&me("scroll",i),u.onScrollEnd!=null&&me("scrollend",i),u.onClick!=null&&(i.onclick=Aa),i=!0):i=!1,i||cr(e,!0)}function K0(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:zn=zn.return}}function Ys(e){if(e!==zn)return!1;if(!xe)return K0(e),xe=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||yd(e.type,e.memoizedProps)),r=!r),r&&Ze&&cr(e),K0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=Sv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=Sv(e)}else i===27?(i=Ze,Er(e.type)?(e=Td,Td=null,Ze=e):Ze=i):Ze=zn?Bi(e.stateNode.nextSibling):null;return!0}function es(){Ze=zn=null,xe=!1}function ih(){var e=ur;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),ur=null),e}function hl(e){ur===null?ur=[e]:ur.push(e)}var ah=z(null),ns=null,Da=null;function fr(e,i,r){_t(ah,i._currentValue),i._currentValue=r}function Ua(e){e._currentValue=ah.current,et(ah)}function rh(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function sh(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=h;for(var V=0;V<i.length;V++)if(D.context===i[V]){m.lanes|=r,D=m.alternate,D!==null&&(D.lanes|=r),rh(m.return,r,e),u||(b=null);break t}m=D.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),rh(b,r,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function js(e,i,r,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var D=h.type;di(h.pendingProps.value,b.value)||(e!==null?e.push(D):e=[D])}}else if(h===ht.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Il):e=[Il])}h=h.return}e!==null&&sh(i,e,r,u),i.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return Q0(ns,e)}function Iu(e,i){return ns===null&&is(e),Q0(e,i)}function Q0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Da===null){if(e===null)throw Error(a(308));Da=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Da=Da.next=i;return r}var GM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},VM=o.unstable_scheduleCallback,kM=o.unstable_NormalPriority,_n={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oh(){return{controller:new GM,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&VM(kM,function(){e.controller.abort()})}var pl=null,lh=0,Zs=0,Ks=null;function XM(e,i){if(pl===null){var r=pl=[];lh=0,Zs=fd(),Ks={status:"pending",value:void 0,then:function(u){r.push(u)}}}return lh++,i.then(J0,J0),i}function J0(){if(--lh===0&&pl!==null){Ks!==null&&(Ks.status="fulfilled");var e=pl;pl=null,Zs=0,Ks=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function WM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var $0=B.S;B.S=function(e,i){zg=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&XM(e,i),$0!==null&&$0(e,i)};var as=z(null);function uh(){var e=as.current;return e!==null?e:We.pooledCache}function Hu(e,i){i===null?_t(as,as.current):_t(as,i.pool)}function t_(){var e=uh();return e===null?null:{parent:_n._currentValue,pool:e}}var Qs=Error(a(460)),ch=Error(a(474)),Gu=Error(a(542)),Vu={then:function(){}};function e_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Aa,Aa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,a_(e),e;default:if(typeof i.status=="string")i.then(Aa,Aa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,a_(e),e}throw ss=i,Qs}}function rs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ss=r,Qs):r}}var ss=null;function i_(){if(ss===null)throw Error(a(459));var e=ss;return ss=null,e}function a_(e){if(e===Qs||e===Gu)throw Error(a(483))}var Js=null,ml=0;function ku(e){var i=ml;return ml+=1,Js===null&&(Js=[]),n_(Js,e,i)}function _l(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Xu(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function r_(e){function i(K,X){if(e){var tt=K.deletions;tt===null?(K.deletions=[X],K.flags|=16):tt.push(X)}}function r(K,X){if(!e)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function u(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function h(K,X){return K=Ca(K,X),K.index=0,K.sibling=null,K}function m(K,X,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<X?(K.flags|=67108866,X):tt):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function b(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function D(K,X,tt,mt){return X===null||X.tag!==6?(X=Jf(tt,K.mode,mt),X.return=K,X):(X=h(X,tt),X.return=K,X)}function V(K,X,tt,mt){var Qt=tt.type;return Qt===M?dt(K,X,tt.props.children,mt,tt.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===I&&rs(Qt)===X.type)?(X=h(X,tt.props),_l(X,tt),X.return=K,X):(X=zu(tt.type,tt.key,tt.props,null,K.mode,mt),_l(X,tt),X.return=K,X)}function nt(K,X,tt,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=$f(tt,K.mode,mt),X.return=K,X):(X=h(X,tt.children||[]),X.return=K,X)}function dt(K,X,tt,mt,Qt){return X===null||X.tag!==7?(X=ts(tt,K.mode,mt,Qt),X.return=K,X):(X=h(X,tt),X.return=K,X)}function gt(K,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Jf(""+X,K.mode,tt),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return tt=zu(X.type,X.key,X.props,null,K.mode,tt),_l(tt,X),tt.return=K,tt;case E:return X=$f(X,K.mode,tt),X.return=K,X;case I:return X=rs(X),gt(K,X,tt)}if(ot(X)||j(X))return X=ts(X,K.mode,tt,null),X.return=K,X;if(typeof X.then=="function")return gt(K,ku(X),tt);if(X.$$typeof===w)return gt(K,Iu(K,X),tt);Xu(K,X)}return null}function rt(K,X,tt,mt){var Qt=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Qt!==null?null:D(K,X,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===Qt?V(K,X,tt,mt):null;case E:return tt.key===Qt?nt(K,X,tt,mt):null;case I:return tt=rs(tt),rt(K,X,tt,mt)}if(ot(tt)||j(tt))return Qt!==null?null:dt(K,X,tt,mt,null);if(typeof tt.then=="function")return rt(K,X,ku(tt),mt);if(tt.$$typeof===w)return rt(K,X,Iu(K,tt),mt);Xu(K,tt)}return null}function ct(K,X,tt,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,D(X,K,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return K=K.get(mt.key===null?tt:mt.key)||null,V(X,K,mt,Qt);case E:return K=K.get(mt.key===null?tt:mt.key)||null,nt(X,K,mt,Qt);case I:return mt=rs(mt),ct(K,X,tt,mt,Qt)}if(ot(mt)||j(mt))return K=K.get(tt)||null,dt(X,K,mt,Qt,null);if(typeof mt.then=="function")return ct(K,X,tt,ku(mt),Qt);if(mt.$$typeof===w)return ct(K,X,tt,Iu(X,mt),Qt);Xu(X,mt)}return null}function Vt(K,X,tt,mt){for(var Qt=null,Ae=null,jt=X,ue=X=0,ve=null;jt!==null&&ue<tt.length;ue++){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var Re=rt(K,jt,tt[ue],mt);if(Re===null){jt===null&&(jt=ve);break}e&&jt&&Re.alternate===null&&i(K,jt),X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,jt=ve}if(ue===tt.length)return r(K,jt),xe&&wa(K,ue),Qt;if(jt===null){for(;ue<tt.length;ue++)jt=gt(K,tt[ue],mt),jt!==null&&(X=m(jt,X,ue),Ae===null?Qt=jt:Ae.sibling=jt,Ae=jt);return xe&&wa(K,ue),Qt}for(jt=u(jt);ue<tt.length;ue++)ve=ct(jt,K,ue,tt[ue],mt),ve!==null&&(e&&ve.alternate!==null&&jt.delete(ve.key===null?ue:ve.key),X=m(ve,X,ue),Ae===null?Qt=ve:Ae.sibling=ve,Ae=ve);return e&&jt.forEach(function(wr){return i(K,wr)}),xe&&wa(K,ue),Qt}function te(K,X,tt,mt){if(tt==null)throw Error(a(151));for(var Qt=null,Ae=null,jt=X,ue=X=0,ve=null,Re=tt.next();jt!==null&&!Re.done;ue++,Re=tt.next()){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var wr=rt(K,jt,Re.value,mt);if(wr===null){jt===null&&(jt=ve);break}e&&jt&&wr.alternate===null&&i(K,jt),X=m(wr,X,ue),Ae===null?Qt=wr:Ae.sibling=wr,Ae=wr,jt=ve}if(Re.done)return r(K,jt),xe&&wa(K,ue),Qt;if(jt===null){for(;!Re.done;ue++,Re=tt.next())Re=gt(K,Re.value,mt),Re!==null&&(X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return xe&&wa(K,ue),Qt}for(jt=u(jt);!Re.done;ue++,Re=tt.next())Re=ct(jt,K,ue,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&jt.delete(Re.key===null?ue:Re.key),X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return e&&jt.forEach(function(nb){return i(K,nb)}),xe&&wa(K,ue),Qt}function Xe(K,X,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===M&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var Qt=tt.key;X!==null;){if(X.key===Qt){if(Qt=tt.type,Qt===M){if(X.tag===7){r(K,X.sibling),mt=h(X,tt.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===I&&rs(Qt)===X.type){r(K,X.sibling),mt=h(X,tt.props),_l(mt,tt),mt.return=K,K=mt;break t}r(K,X);break}else i(K,X);X=X.sibling}tt.type===M?(mt=ts(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=zu(tt.type,tt.key,tt.props,null,K.mode,mt),_l(mt,tt),mt.return=K,K=mt)}return b(K);case E:t:{for(Qt=tt.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){r(K,X.sibling),mt=h(X,tt.children||[]),mt.return=K,K=mt;break t}else{r(K,X);break}else i(K,X);X=X.sibling}mt=$f(tt,K.mode,mt),mt.return=K,K=mt}return b(K);case I:return tt=rs(tt),Xe(K,X,tt,mt)}if(ot(tt))return Vt(K,X,tt,mt);if(j(tt)){if(Qt=j(tt),typeof Qt!="function")throw Error(a(150));return tt=Qt.call(tt),te(K,X,tt,mt)}if(typeof tt.then=="function")return Xe(K,X,ku(tt),mt);if(tt.$$typeof===w)return Xe(K,X,Iu(K,tt),mt);Xu(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(r(K,X.sibling),mt=h(X,tt),mt.return=K,K=mt):(r(K,X),mt=Jf(tt,K.mode,mt),mt.return=K,K=mt),b(K)):r(K,X)}return function(K,X,tt,mt){try{ml=0;var Qt=Xe(K,X,tt,mt);return Js=null,Qt}catch(jt){if(jt===Qs||jt===Gu)throw jt;var Ae=pi(29,jt,null,K.mode);return Ae.lanes=mt,Ae.return=K,Ae}}}var os=r_(!0),s_=r_(!1),hr=!1;function fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function dr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pr(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Pu(e),k0(e,null,r),i}return Ou(e,u,i,r),Pu(e)}function gl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Qo(e,r)}}function dh(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var ph=!1;function vl(){if(ph){var e=Ks;if(e!==null)throw e}}function xl(e,i,r,u){ph=!1;var h=e.updateQueue;hr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var V=D,nt=V.next;V.next=null,b===null?m=nt:b.next=nt,b=V;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,D=dt.lastBaseUpdate,D!==b&&(D===null?dt.firstBaseUpdate=nt:D.next=nt,dt.lastBaseUpdate=V))}if(m!==null){var gt=h.baseState;b=0,dt=nt=V=null,D=m;do{var rt=D.lane&-536870913,ct=rt!==D.lane;if(ct?(ge&rt)===rt:(u&rt)===rt){rt!==0&&rt===Zs&&(ph=!0),dt!==null&&(dt=dt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Vt=e,te=D;rt=i;var Xe=r;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){gt=Vt.call(Xe,gt,rt);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,rt=typeof Vt=="function"?Vt.call(Xe,gt,rt):Vt,rt==null)break t;gt=g({},gt,rt);break t;case 2:hr=!0}}rt=D.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},dt===null?(nt=dt=ct,V=gt):dt=dt.next=ct,b|=rt;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;ct=D,D=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);dt===null&&(V=gt),h.baseState=V,h.firstBaseUpdate=nt,h.lastBaseUpdate=dt,m===null&&(h.shared.lanes=0),xr|=b,e.lanes=b,e.memoizedState=gt}}function o_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function l_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)o_(r[e],i)}var $s=z(null),Wu=z(0);function u_(e,i){e=Ha,_t(Wu,e),_t($s,i),Ha=e|i.baseLanes}function mh(){_t(Wu,Ha),_t($s,$s.current)}function _h(){Ha=Wu.current,et($s),et(Wu)}var mi=z(null),Fi=null;function mr(e){var i=e.alternate;_t(cn,cn.current&1),_t(mi,e),Fi===null&&(i===null||$s.current!==null||i.memoizedState!==null)&&(Fi=e)}function gh(e){_t(cn,cn.current),_t(mi,e),Fi===null&&(Fi=e)}function c_(e){e.tag===22?(_t(cn,cn.current),_t(mi,e),Fi===null&&(Fi=e)):_r()}function _r(){_t(cn,cn.current),_t(mi,mi.current)}function _i(e){et(mi),Fi===e&&(Fi=null),et(cn)}var cn=z(0);function qu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||bd(r)||Ed(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Na=0,oe=null,Ve=null,gn=null,Yu=!1,to=!1,ls=!1,ju=0,yl=0,eo=null,qM=0;function on(){throw Error(a(321))}function vh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!di(e[r],i[r]))return!1;return!0}function xh(e,i,r,u,h,m){return Na=m,oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Y_:Oh,ls=!1,m=r(u,h),ls=!1,to&&(m=h_(i,r,u,h)),f_(e),m}function f_(e){B.H=bl;var i=Ve!==null&&Ve.next!==null;if(Na=0,gn=Ve=oe=null,Yu=!1,yl=0,eo=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&Bu(e)&&(vn=!0))}function h_(e,i,r,u){oe=e;var h=0;do{if(to&&(eo=null),yl=0,to=!1,25<=h)throw Error(a(301));if(h+=1,gn=Ve=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=j_,m=i(r,u)}while(to);return m}function YM(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Sl(i):i,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(oe.flags|=1024),i}function yh(){var e=ju!==0;return ju=0,e}function Sh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Mh(e){if(Yu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Yu=!1}Na=0,gn=Ve=oe=null,to=!1,yl=ju=0,eo=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?oe.memoizedState=gn=e:gn=gn.next=e,gn}function fn(){if(Ve===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var i=gn===null?oe.memoizedState:gn.next;if(i!==null)gn=i,Ve=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},gn===null?oe.memoizedState=gn=e:gn=gn.next=e}return gn}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sl(e){var i=yl;return yl+=1,eo===null&&(eo=[]),e=n_(eo,e,i),i=oe,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Y_:Oh),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sl(e);if(e.$$typeof===w)return Fn(e)}throw Error(a(438,String(e)))}function bh(e){var i=null,r=oe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=oe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Zu(),oe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=L;return i.index++,r}function La(e,i){return typeof i=="function"?i(e):i}function Qu(e){var i=fn();return Eh(i,Ve,e)}function Eh(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var D=b=null,V=null,nt=i,dt=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(ge&gt)===gt:(Na&gt)===gt){var rt=nt.revertLane;if(rt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Zs&&(dt=!0);else if((Na&rt)===rt){nt=nt.next,rt===Zs&&(dt=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(D=V=gt,b=m):V=V.next=gt,oe.lanes|=rt,xr|=rt;gt=nt.action,ls&&r(m,gt),m=nt.hasEagerState?nt.eagerState:r(m,gt)}else rt={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(D=V=rt,b=m):V=V.next=rt,oe.lanes|=gt,xr|=gt;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?b=m:V.next=D,!di(m,e.memoizedState)&&(vn=!0,dt&&(r=Ks,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=V,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Th(e){var i=fn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);di(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function d_(e,i,r){var u=oe,h=fn(),m=xe;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!di((Ve||h).memoizedState,r);if(b&&(h.memoizedState=r,vn=!0),h=h.queue,Ch(__.bind(null,u,h,e),[e]),h.getSnapshot!==i||b||gn!==null&&gn.memoizedState.tag&1){if(u.flags|=2048,no(9,{destroy:void 0},m_.bind(null,u,h,r,i),null),We===null)throw Error(a(349));m||(Na&127)!==0||p_(u,i,r)}return r}function p_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=oe.updateQueue,i===null?(i=Zu(),oe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function m_(e,i,r,u){i.value=r,i.getSnapshot=u,g_(i)&&v_(e)}function __(e,i,r){return r(function(){g_(i)&&v_(e)})}function g_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!di(e,r)}catch{return!0}}function v_(e){var i=$r(e,2);i!==null&&ai(i,e,2)}function Ah(e){var i=Zn();if(typeof e=="function"){var r=e;if(e=r(),ls){Bt(!0);try{r()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},i}function x_(e,i,r,u){return e.baseState=r,Eh(e,Ve,typeof u=="function"?u:La)}function jM(e,i,r,u,h){if(tc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};B.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,y_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function y_(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=B.T,b={};B.T=b;try{var D=r(h,u),V=B.S;V!==null&&V(b,D),S_(e,i,D)}catch(nt){Rh(e,i,nt)}finally{m!==null&&b.types!==null&&(m.types=b.types),B.T=m}}else try{m=r(h,u),S_(e,i,m)}catch(nt){Rh(e,i,nt)}}function S_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){M_(e,i,u)},function(u){return Rh(e,i,u)}):M_(e,i,r)}function M_(e,i,r){i.status="fulfilled",i.value=r,b_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,y_(e,r)))}function Rh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,b_(i),i=i.next;while(i!==u)}e.action=null}function b_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function E_(e,i){return i}function T_(e,i){if(xe){var r=We.formState;if(r!==null){t:{var u=oe;if(xe){if(Ze){e:{for(var h=Ze,m=zi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Bi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ze=Bi(h.nextSibling),u=h.data==="F!";break t}}cr(u)}u=!1}u&&(i=r[0])}}return r=Zn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E_,lastRenderedState:i},r.queue=u,r=X_.bind(null,oe,u),u.dispatch=r,u=Ah(!1),m=Lh.bind(null,oe,!1,u.queue),u=Zn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=jM.bind(null,oe,h,m,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function A_(e){var i=fn();return R_(i,Ve,e)}function R_(e,i,r){if(i=Eh(e,i,E_)[0],e=Qu(La)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Sl(i)}catch(b){throw b===Qs?Gu:b}else u=i;i=fn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(oe.flags|=2048,no(9,{destroy:void 0},ZM.bind(null,h,r),null)),[u,m,e]}function ZM(e,i){e.action=i}function C_(e){var i=fn(),r=Ve;if(r!==null)return R_(i,r,e);fn(),i=i.memoizedState,r=fn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function no(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=oe.updateQueue,i===null&&(i=Zu(),oe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function w_(){return fn().memoizedState}function Ju(e,i,r,u){var h=Zn();oe.flags|=e,h.memoizedState=no(1|i,{destroy:void 0},r,u===void 0?null:u)}function $u(e,i,r,u){var h=fn();u=u===void 0?null:u;var m=h.memoizedState.inst;Ve!==null&&u!==null&&vh(u,Ve.memoizedState.deps)?h.memoizedState=no(i,m,r,u):(oe.flags|=e,h.memoizedState=no(1|i,m,r,u))}function D_(e,i){Ju(8390656,8,e,i)}function Ch(e,i){$u(2048,8,e,i)}function KM(e){oe.flags|=4;var i=oe.updateQueue;if(i===null)i=Zu(),oe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function U_(e){var i=fn().memoizedState;return KM({ref:i,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function N_(e,i){return $u(4,2,e,i)}function L_(e,i){return $u(4,4,e,i)}function O_(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function P_(e,i,r){r=r!=null?r.concat([e]):null,$u(4,4,O_.bind(null,i,e),r)}function wh(){}function z_(e,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&vh(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function F_(e,i){var r=fn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&vh(i,u[1]))return u[0];if(u=e(),ls){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[u,i],u}function Dh(e,i,r){return r===void 0||(Na&1073741824)!==0&&(ge&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Bg(),oe.lanes|=e,xr|=e,r)}function B_(e,i,r,u){return di(r,i)?r:$s.current!==null?(e=Dh(e,r,u),di(e,i)||(vn=!0),e):(Na&42)===0||(Na&1073741824)!==0&&(ge&261930)===0?(vn=!0,e.memoizedState=r):(e=Bg(),oe.lanes|=e,xr|=e,i)}function I_(e,i,r,u,h){var m=G.p;G.p=m!==0&&8>m?m:8;var b=B.T,D={};B.T=D,Lh(e,!1,i,r);try{var V=h(),nt=B.S;if(nt!==null&&nt(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var dt=WM(V,u);Ml(e,i,dt,xi(e))}else Ml(e,i,u,xi(e))}catch(gt){Ml(e,i,{then:function(){},status:"rejected",reason:gt},xi())}finally{G.p=m,b!==null&&D.types!==null&&(b.types=D.types),B.T=b}}function QM(){}function Uh(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=H_(e).queue;I_(e,h,i,$,r===null?QM:function(){return G_(e),r(u)})}function H_(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:$},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function G_(e){var i=H_(e);i.next===null&&(i=e.alternate.memoizedState),Ml(e,i.next.queue,{},xi())}function Nh(){return Fn(Il)}function V_(){return fn().memoizedState}function k_(){return fn().memoizedState}function JM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=xi();e=dr(r);var u=pr(i,e,r);u!==null&&(ai(u,i,r),gl(u,i,r)),i={cache:oh()},e.payload=i;return}i=i.return}}function $M(e,i,r){var u=xi();r={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},tc(e)?W_(i,r):(r=Kf(e,i,r,u),r!==null&&(ai(r,e,u),q_(r,i,u)))}function X_(e,i,r){var u=xi();Ml(e,i,r,u)}function Ml(e,i,r,u){var h={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(tc(e))W_(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,D=m(b,r);if(h.hasEagerState=!0,h.eagerState=D,di(D,b))return Ou(e,i,h,0),We===null&&Lu(),!1}catch{}if(r=Kf(e,i,h,u),r!==null)return ai(r,e,u),q_(r,i,u),!0}return!1}function Lh(e,i,r,u){if(u={lane:2,revertLane:fd(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},tc(e)){if(i)throw Error(a(479))}else i=Kf(e,r,u,2),i!==null&&ai(i,e,2)}function tc(e){var i=e.alternate;return e===oe||i!==null&&i===oe}function W_(e,i){to=Yu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function q_(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Qo(e,r)}}var bl={readContext:Fn,use:Ku,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};bl.useEffectEvent=on;var Y_={readContext:Fn,use:Ku,useCallback:function(e,i){return Zn().memoizedState=[e,i===void 0?null:i],e},useContext:Fn,useEffect:D_,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Ju(4194308,4,O_.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Ju(4194308,4,e,i)},useInsertionEffect:function(e,i){Ju(4,2,e,i)},useMemo:function(e,i){var r=Zn();i=i===void 0?null:i;var u=e();if(ls){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=Zn();if(r!==void 0){var h=r(i);if(ls){Bt(!0);try{r(i)}finally{Bt(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=$M.bind(null,oe,e),[u.memoizedState,e]},useRef:function(e){var i=Zn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ah(e);var i=e.queue,r=X_.bind(null,oe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(e,i){var r=Zn();return Dh(r,e,i)},useTransition:function(){var e=Ah(!1);return e=I_.bind(null,oe,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=oe,h=Zn();if(xe){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),We===null)throw Error(a(349));(ge&127)!==0||p_(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,D_(__.bind(null,u,m,e),[e]),u.flags|=2048,no(9,{destroy:void 0},m_.bind(null,u,m,r,i),null),r},useId:function(){var e=Zn(),i=We.identifierPrefix;if(xe){var r=ua,u=la;r=(u&~(1<<32-zt(u)-1)).toString(32)+r,i="_"+i+"R_"+r,r=ju++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=qM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Nh,useFormState:T_,useActionState:T_,useOptimistic:function(e){var i=Zn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Lh.bind(null,oe,!0,r),r.dispatch=i,[e,i]},useMemoCache:bh,useCacheRefresh:function(){return Zn().memoizedState=JM.bind(null,oe)},useEffectEvent:function(e){var i=Zn(),r={impl:e};return i.memoizedState=r,function(){if((Ne&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Oh={readContext:Fn,use:Ku,useCallback:z_,useContext:Fn,useEffect:Ch,useImperativeHandle:P_,useInsertionEffect:N_,useLayoutEffect:L_,useMemo:F_,useReducer:Qu,useRef:w_,useState:function(){return Qu(La)},useDebugValue:wh,useDeferredValue:function(e,i){var r=fn();return B_(r,Ve.memoizedState,e,i)},useTransition:function(){var e=Qu(La)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Sl(e),i]},useSyncExternalStore:d_,useId:V_,useHostTransitionStatus:Nh,useFormState:A_,useActionState:A_,useOptimistic:function(e,i){var r=fn();return x_(r,Ve,e,i)},useMemoCache:bh,useCacheRefresh:k_};Oh.useEffectEvent=U_;var j_={readContext:Fn,use:Ku,useCallback:z_,useContext:Fn,useEffect:Ch,useImperativeHandle:P_,useInsertionEffect:N_,useLayoutEffect:L_,useMemo:F_,useReducer:Th,useRef:w_,useState:function(){return Th(La)},useDebugValue:wh,useDeferredValue:function(e,i){var r=fn();return Ve===null?Dh(r,e,i):B_(r,Ve.memoizedState,e,i)},useTransition:function(){var e=Th(La)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Sl(e),i]},useSyncExternalStore:d_,useId:V_,useHostTransitionStatus:Nh,useFormState:C_,useActionState:C_,useOptimistic:function(e,i){var r=fn();return Ve!==null?x_(r,Ve,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:bh,useCacheRefresh:k_};j_.useEffectEvent=U_;function Ph(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var zh={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=xi(),h=dr(u);h.payload=i,r!=null&&(h.callback=r),i=pr(e,h,u),i!==null&&(ai(i,e,u),gl(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=xi(),h=dr(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=pr(e,h,u),i!==null&&(ai(i,e,u),gl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=xi(),u=dr(r);u.tag=2,i!=null&&(u.callback=i),i=pr(e,u,r),i!==null&&(ai(i,e,r),gl(i,e,r))}};function Z_(e,i,r,u,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,b):i.prototype&&i.prototype.isPureReactComponent?!ul(r,u)||!ul(h,m):!0}function K_(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&zh.enqueueReplaceState(i,i.state,null)}function us(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Q_(e){Nu(e)}function J_(e){console.error(e)}function $_(e){Nu(e)}function ec(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function tg(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Fh(e,i,r){return r=dr(r),r.tag=3,r.payload={element:null},r.callback=function(){ec(e,i)},r}function eg(e){return e=dr(e),e.tag=3,e}function ng(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){tg(i,r,u)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){tg(i,r,u),typeof h!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function t1(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&js(i,r,h,!0),r=mi.current,r!==null){switch(r.tag){case 31:case 13:return Fi===null?dc():r.alternate===null&&ln===0&&(ln=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Vu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),ld(e,u,h)),!1;case 22:return r.flags|=65536,u===Vu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),ld(e,u,h)),!1}throw Error(a(435,r.tag))}return ld(e,u,h),dc(),!1}if(xe)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==nh&&(e=Error(a(422),{cause:u}),hl(Li(e,r)))):(u!==nh&&(i=Error(a(423),{cause:u}),hl(Li(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Li(u,r),h=Fh(e.stateNode,u,h),dh(e,h),ln!==4&&(ln=2)),!1;var m=Error(a(520),{cause:u});if(m=Li(m,r),Ul===null?Ul=[m]:Ul.push(m),ln!==4&&(ln=2),i===null)return!0;u=Li(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Fh(r.stateNode,u,e),dh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yr===null||!yr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=eg(h),ng(h,e,r,u),dh(r,h),!1}r=r.return}while(r!==null);return!1}var Bh=Error(a(461)),vn=!1;function Bn(e,i,r,u){i.child=e===null?s_(i,null,r,u):os(i,e.child,r,u)}function ig(e,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var b={};for(var D in u)D!=="ref"&&(b[D]=u[D])}else b=u;return is(i),u=xh(e,i,r,b,m,h),D=yh(),e!==null&&!vn?(Sh(e,i,h),Oa(e,i,h)):(xe&&D&&th(i),i.flags|=1,Bn(e,i,u,h),i.child)}function ag(e,i,r,u,h){if(e===null){var m=r.type;return typeof m=="function"&&!Qf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,rg(e,i,m,u,h)):(e=zu(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!qh(e,h)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:ul,r(b,u)&&e.ref===i.ref)return Oa(e,i,h)}return i.flags|=1,e=Ca(m,u),e.ref=i.ref,e.return=i,i.child=e}function rg(e,i,r,u,h){if(e!==null){var m=e.memoizedProps;if(ul(m,u)&&e.ref===i.ref)if(vn=!1,i.pendingProps=u=m,qh(e,h))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,Oa(e,i,h)}return Ih(e,i,r,u,h)}function sg(e,i,r,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return og(e,i,m,r,u)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hu(i,m!==null?m.cachePool:null),m!==null?u_(i,m):mh(),c_(i);else return u=i.lanes=536870912,og(e,i,m!==null?m.baseLanes|r:r,r,u)}else m!==null?(Hu(i,m.cachePool),u_(i,m),_r(),i.memoizedState=null):(e!==null&&Hu(i,null),mh(),_r());return Bn(e,i,h,r),i.child}function El(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function og(e,i,r,u,h){var m=uh();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Hu(i,null),mh(),c_(i),e!==null&&js(e,i,u,!0),i.childLanes=h,null}function nc(e,i){return i=ac({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function lg(e,i,r){return os(i,e.child,null,r),e=nc(i,i.pendingProps),e.flags|=2,_i(i),i.memoizedState=null,e}function e1(e,i,r){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(xe){if(u.mode==="hidden")return e=nc(i,u),i.lanes=536870912,El(null,e);if(gh(i),(e=Ze)?(e=yv(e,zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:lr!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=i,i.child=r,zn=i,Ze=null)):e=null,e===null)throw cr(i);return i.lanes=536870912,null}return nc(i,u)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(gh(i),h)if(i.flags&256)i.flags&=-257,i=lg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||js(e,i,r,!1),h=(r&e.childLanes)!==0,vn||h){if(u=We,u!==null&&(b=Ls(u,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,$r(e,b),ai(u,e,b),Bh;dc(),i=lg(e,i,r)}else e=m.treeContext,Ze=Bi(b.nextSibling),zn=i,xe=!0,ur=null,zi=!1,e!==null&&j0(i,e),i=nc(i,u),i.flags|=4096;return i}return e=Ca(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ic(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Ih(e,i,r,u,h){return is(i),r=xh(e,i,r,u,void 0,h),u=yh(),e!==null&&!vn?(Sh(e,i,h),Oa(e,i,h)):(xe&&u&&th(i),i.flags|=1,Bn(e,i,r,h),i.child)}function ug(e,i,r,u,h,m){return is(i),i.updateQueue=null,r=h_(i,u,r,h),f_(e),u=yh(),e!==null&&!vn?(Sh(e,i,m),Oa(e,i,m)):(xe&&u&&th(i),i.flags|=1,Bn(e,i,r,m),i.child)}function cg(e,i,r,u,h){if(is(i),i.stateNode===null){var m=Xs,b=r.contextType;typeof b=="object"&&b!==null&&(m=Fn(b)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=zh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},fh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Fn(b):Xs,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Ph(i,r,b,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&zh.enqueueReplaceState(m,m.state,null),xl(i,u,m,h),vl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var D=i.memoizedProps,V=us(r,D);m.props=V;var nt=m.context,dt=r.contextType;b=Xs,typeof dt=="object"&&dt!==null&&(b=Fn(dt));var gt=r.getDerivedStateFromProps;dt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||nt!==b)&&K_(i,m,u,b),hr=!1;var rt=i.memoizedState;m.state=rt,xl(i,u,m,h),vl(),nt=i.memoizedState,D||rt!==nt||hr?(typeof gt=="function"&&(Ph(i,r,gt,u),nt=i.memoizedState),(V=hr||Z_(i,r,V,u,rt,nt,b))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=nt),m.props=u,m.state=nt,m.context=b,u=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,hh(e,i),b=i.memoizedProps,dt=us(r,b),m.props=dt,gt=i.pendingProps,rt=m.context,nt=r.contextType,V=Xs,typeof nt=="object"&&nt!==null&&(V=Fn(nt)),D=r.getDerivedStateFromProps,(nt=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==gt||rt!==V)&&K_(i,m,u,V),hr=!1,rt=i.memoizedState,m.state=rt,xl(i,u,m,h),vl();var ct=i.memoizedState;b!==gt||rt!==ct||hr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof D=="function"&&(Ph(i,r,D,u),ct=i.memoizedState),(dt=hr||Z_(i,r,dt,u,rt,ct,V)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ct,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ct,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ct),m.props=u,m.state=ct,m.context=V,u=dt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,ic(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=os(i,e.child,null,h),i.child=os(i,null,r,h)):Bn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Oa(e,i,h),e}function fg(e,i,r,u){return es(),i.flags|=256,Bn(e,i,r,u),i.child}var Hh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gh(e){return{baseLanes:e,cachePool:t_()}}function Vh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=vi),e}function hg(e,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(xe){if(h?mr(i):_r(),(e=Ze)?(e=yv(e,zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:lr!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=i,i.child=r,zn=i,Ze=null)):e=null,e===null)throw cr(i);return Ed(e)?i.lanes=32:i.lanes=536870912,null}var D=u.children;return u=u.fallback,h?(_r(),h=i.mode,D=ac({mode:"hidden",children:D},h),u=ts(u,h,r,null),D.return=i,u.return=i,D.sibling=u,i.child=D,u=i.child,u.memoizedState=Gh(r),u.childLanes=Vh(e,b,r),i.memoizedState=Hh,El(null,u)):(mr(i),kh(i,D))}var V=e.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(m)i.flags&256?(mr(i),i.flags&=-257,i=Xh(e,i,r)):i.memoizedState!==null?(_r(),i.child=e.child,i.flags|=128,i=null):(_r(),D=u.fallback,h=i.mode,u=ac({mode:"visible",children:u.children},h),D=ts(D,h,r,null),D.flags|=2,u.return=i,D.return=i,u.sibling=D,i.child=u,os(i,e.child,null,r),u=i.child,u.memoizedState=Gh(r),u.childLanes=Vh(e,b,r),i.memoizedState=Hh,i=El(null,u));else if(mr(i),Ed(D)){if(b=D.nextSibling&&D.nextSibling.dataset,b)var nt=b.dgst;b=nt,u=Error(a(419)),u.stack="",u.digest=b,hl({value:u,source:null,stack:null}),i=Xh(e,i,r)}else if(vn||js(e,i,r,!1),b=(r&e.childLanes)!==0,vn||b){if(b=We,b!==null&&(u=Ls(b,r),u!==0&&u!==V.retryLane))throw V.retryLane=u,$r(e,u),ai(b,e,u),Bh;bd(D)||dc(),i=Xh(e,i,r)}else bd(D)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ze=Bi(D.nextSibling),zn=i,xe=!0,ur=null,zi=!1,e!==null&&j0(i,e),i=kh(i,u.children),i.flags|=4096);return i}return h?(_r(),D=u.fallback,h=i.mode,V=e.child,nt=V.sibling,u=Ca(V,{mode:"hidden",children:u.children}),u.subtreeFlags=V.subtreeFlags&65011712,nt!==null?D=Ca(nt,D):(D=ts(D,h,r,null),D.flags|=2),D.return=i,u.return=i,u.sibling=D,i.child=u,El(null,u),u=i.child,D=e.child.memoizedState,D===null?D=Gh(r):(h=D.cachePool,h!==null?(V=_n._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=t_(),D={baseLanes:D.baseLanes|r,cachePool:h}),u.memoizedState=D,u.childLanes=Vh(e,b,r),i.memoizedState=Hh,El(e.child,u)):(mr(i),r=e.child,e=r.sibling,r=Ca(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function kh(e,i){return i=ac({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ac(e,i){return e=pi(22,e,null,i),e.lanes=0,e}function Xh(e,i,r){return os(i,e.child,null,r),e=kh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function dg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),rh(e.return,i,r)}function Wh(e,i,r,u,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=u,b.tail=r,b.tailMode=h,b.treeForkCount=m)}function pg(e,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var b=cn.current,D=(b&2)!==0;if(D?(b=b&1|2,i.flags|=128):b&=1,_t(cn,b),Bn(e,i,u,r),u=xe?fl:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,r,i);else if(e.tag===19)dg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&qu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Wh(i,!1,h,r,m,u);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&qu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Wh(i,!0,r,null,m,u);break;case"together":Wh(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Oa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),xr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(js(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ca(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ca(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function qh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function n1(e,i,r){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),fr(i,_n,e.memoizedState.cache),es();break;case 27:case 5:Ht(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:fr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,gh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(mr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?hg(e,i,r):(mr(i),e=Oa(e,i,r),e!==null?e.sibling:null);mr(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(js(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return pg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(cn,cn.current),u)break;return null;case 22:return i.lanes=0,sg(e,i,r,i.pendingProps);case 24:fr(i,_n,e.memoizedState.cache)}return Oa(e,i,r)}function mg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!qh(e,r)&&(i.flags&128)===0)return vn=!1,n1(e,i,r);vn=(e.flags&131072)!==0}else vn=!1,xe&&(i.flags&1048576)!==0&&Y0(i,fl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=rs(i.elementType),i.type=e,typeof e=="function")Qf(e)?(u=us(e,u),i.tag=1,i=cg(null,i,e,u,r)):(i.tag=0,i=Ih(null,i,e,u,r));else{if(e!=null){var h=e.$$typeof;if(h===C){i.tag=11,i=ig(null,i,e,u,r);break t}else if(h===O){i.tag=14,i=ag(null,i,e,u,r);break t}}throw i=ut(e)||e,Error(a(306,i,""))}}return i;case 0:return Ih(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=us(u,i.pendingProps),cg(e,i,u,h,r);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,hh(e,i),xl(i,u,null,r);var b=i.memoizedState;if(u=b.cache,fr(i,_n,u),u!==m.cache&&sh(i,[_n],r,!0),vl(),u=b.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=fg(e,i,u,r);break t}else if(u!==h){h=Li(Error(a(424)),i),hl(h),i=fg(e,i,u,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=Bi(e.firstChild),zn=i,xe=!0,ur=null,zi=!0,r=s_(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(es(),u===h){i=Oa(e,i,r);break t}Bn(e,i,u,r)}i=i.child}return i;case 26:return ic(e,i),e===null?(r=Av(i.type,null,i.pendingProps,null))?i.memoizedState=r:xe||(r=i.type,e=i.pendingProps,u=yc(st.current).createElement(r),u[mn]=i,u[Dn]=e,In(u,r,e),U(u),i.stateNode=u):i.memoizedState=Av(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ht(i),e===null&&xe&&(u=i.stateNode=bv(i.type,i.pendingProps,st.current),zn=i,zi=!0,h=Ze,Er(i.type)?(Td=h,Ze=Bi(u.firstChild)):Ze=h),Bn(e,i,i.pendingProps.children,r),ic(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&xe&&((h=u=Ze)&&(u=N1(u,i.type,i.pendingProps,zi),u!==null?(i.stateNode=u,zn=i,Ze=Bi(u.firstChild),zi=!1,h=!0):h=!1),h||cr(i)),Ht(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,u=m.children,yd(h,m)?u=null:b!==null&&yd(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=xh(e,i,YM,null,null,r),Il._currentValue=h),ic(e,i),Bn(e,i,u,r),i.child;case 6:return e===null&&xe&&((e=r=Ze)&&(r=L1(r,i.pendingProps,zi),r!==null?(i.stateNode=r,zn=i,Ze=null,e=!0):e=!1),e||cr(i)),null;case 13:return hg(e,i,r);case 4:return Dt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=os(i,null,u,r):Bn(e,i,u,r),i.child;case 11:return ig(e,i,i.type,i.pendingProps,r);case 7:return Bn(e,i,i.pendingProps,r),i.child;case 8:return Bn(e,i,i.pendingProps.children,r),i.child;case 12:return Bn(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,fr(i,i.type,u.value),Bn(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,is(i),h=Fn(h),u=u(h),i.flags|=1,Bn(e,i,u,r),i.child;case 14:return ag(e,i,i.type,i.pendingProps,r);case 15:return rg(e,i,i.type,i.pendingProps,r);case 19:return pg(e,i,r);case 31:return e1(e,i,r);case 22:return sg(e,i,r,i.pendingProps);case 24:return is(i),u=Fn(_n),e===null?(h=uh(),h===null&&(h=We,m=oh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},fh(i),fr(i,_n,h)):((e.lanes&r)!==0&&(hh(e,i),xl(i,null,null,r),vl()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),fr(i,_n,u)):(u=m.cache,fr(i,_n,u),u!==h.cache&&sh(i,[_n],r,!0))),Bn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Pa(e){e.flags|=4}function Yh(e,i,r,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Vg())e.flags|=8192;else throw ss=Vu,ch}else e.flags&=-16777217}function _g(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uv(i))if(Vg())e.flags|=8192;else throw ss=Vu,ch}function rc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Fe():536870912,e.lanes|=i,so|=i)}function Tl(e,i){if(!xe)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function i1(e,i,r){var u=i.pendingProps;switch(eh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ua(_n),kt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ys(i)?Pa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ih())),Ke(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Pa(i),m!==null?(Ke(i),_g(i,m)):(Ke(i),Yh(i,h,null,u,r))):m?m!==e.memoizedState?(Pa(i),Ke(i),_g(i,m)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&Pa(i),Ke(i),Yh(i,h,e,u,r)),null;case 27:if(he(i),r=st.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}e=Et.current,Ys(i)?Z0(i):(e=bv(h,u,r),i.stateNode=e,Pa(i))}return Ke(i),null;case 5:if(he(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(m=Et.current,Ys(i))Z0(i);else{var b=yc(st.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?b.createElement("select",{is:u.is}):b.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?b.createElement(h,{is:u.is}):b.createElement(h)}}m[mn]=i,m[Dn]=u;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(In(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&Pa(i)}}return Ke(i),Yh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=st.current,Ys(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=zn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[mn]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||hv(e.nodeValue,r)),e||cr(i,!0)}else e=yc(e).createTextNode(u),e[mn]=i,i.stateNode=e}return Ke(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(u=Ys(i),r!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[mn]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else r=ih(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ke(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ys(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[mn]=i}else es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),h=!1}else h=ih(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=r,i):(r=u!==null,e=e!==null&&e.memoizedState!==null,r&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),rc(i,i.updateQueue),Ke(i),null);case 4:return kt(),e===null&&md(i.stateNode.containerInfo),Ke(i),null;case 10:return Ua(i.type),Ke(i),null;case 19:if(et(cn),u=i.memoizedState,u===null)return Ke(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Tl(u,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=qu(e),m!==null){for(i.flags|=128,Tl(u,!1),e=m.updateQueue,i.updateQueue=e,rc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)X0(r,e),r=r.sibling;return _t(cn,cn.current&1|2),xe&&wa(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&A()>cc&&(i.flags|=128,h=!0,Tl(u,!1),i.lanes=4194304)}else{if(!h)if(e=qu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,rc(i,e),Tl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!xe)return Ke(i),null}else 2*A()-u.renderingStartTime>cc&&r!==536870912&&(i.flags|=128,h=!0,Tl(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=A(),e.sibling=null,r=cn.current,_t(cn,h?r&1|2:r&1),xe&&wa(i,u.treeForkCount),e):(Ke(i),null);case 22:case 23:return _i(i),_h(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),r=i.updateQueue,r!==null&&rc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&et(as),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ua(_n),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function a1(e,i){switch(eh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ua(_n),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return he(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_i(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));es()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(cn),null;case 4:return kt(),null;case 10:return Ua(i.type),null;case 22:case 23:return _i(i),_h(),e!==null&&et(as),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ua(_n),null;case 25:return null;default:return null}}function gg(e,i){switch(eh(i),i.tag){case 3:Ua(_n),kt();break;case 26:case 27:case 5:he(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:et(cn);break;case 10:Ua(i.type);break;case 22:case 23:_i(i),_h(),e!==null&&et(as);break;case 24:Ua(_n)}}function Al(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var m=r.create,b=r.inst;u=m(),b.destroy=u}r=r.next}while(r!==h)}}catch(D){He(i,i.return,D)}}function gr(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var b=u.inst,D=b.destroy;if(D!==void 0){b.destroy=void 0,h=i;var V=r,nt=D;try{nt()}catch(dt){He(h,V,dt)}}}u=u.next}while(u!==m)}}catch(dt){He(i,i.return,dt)}}function vg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{l_(i,r)}catch(u){He(e,e.return,u)}}}function xg(e,i,r){r.props=us(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){He(e,i,u)}}function Rl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(h){He(e,i,h)}}function ca(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){He(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){He(e,i,h)}else r.current=null}function yg(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){He(e,e.return,h)}}function jh(e,i,r){try{var u=e.stateNode;A1(u,e.type,r,i),u[Dn]=i}catch(h){He(e,e.return,h)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function Zh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Aa));else if(u!==4&&(u===27&&Er(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Kh(e,i,r),e=e.sibling;e!==null;)Kh(e,i,r),e=e.sibling}function sc(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&Er(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(sc(e,i,r),e=e.sibling;e!==null;)sc(e,i,r),e=e.sibling}function Mg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);In(i,u,r),i[mn]=e,i[Dn]=r}catch(m){He(e,e.return,m)}}var za=!1,xn=!1,Qh=!1,bg=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function r1(e,i){if(e=e.containerInfo,vd=Rc,e=P0(e),Xf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,D=-1,V=-1,nt=0,dt=0,gt=e,rt=null;e:for(;;){for(var ct;gt!==r||h!==0&&gt.nodeType!==3||(D=b+h),gt!==m||u!==0&&gt.nodeType!==3||(V=b+u),gt.nodeType===3&&(b+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)rt=gt,gt=ct;for(;;){if(gt===e)break e;if(rt===r&&++nt===h&&(D=b),rt===m&&++dt===u&&(V=b),(ct=gt.nextSibling)!==null)break;gt=rt,rt=gt.parentNode}gt=ct}r=D===-1||V===-1?null:{start:D,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(xd={focusedElem:e,selectionRange:r},Rc=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var Vt=us(r.type,h);e=u.getSnapshotBeforeUpdate(Vt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(te){He(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Md(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function Eg(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ba(e,r),u&4&&Al(5,r);break;case 1:if(Ba(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){He(r,r.return,b)}else{var h=us(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){He(r,r.return,b)}}u&64&&vg(r),u&512&&Rl(r,r.return);break;case 3:if(Ba(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{l_(e,i)}catch(b){He(r,r.return,b)}}break;case 27:i===null&&u&4&&Mg(r);case 26:case 5:Ba(e,r),i===null&&u&4&&yg(r),u&512&&Rl(r,r.return);break;case 12:Ba(e,r);break;case 31:Ba(e,r),u&4&&Rg(e,r);break;case 13:Ba(e,r),u&4&&Cg(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=p1.bind(null,r),O1(e,r))));break;case 22:if(u=r.memoizedState!==null||za,!u){i=i!==null&&i.memoizedState!==null||xn,h=za;var m=xn;za=u,(xn=i)&&!m?Ia(e,r,(r.subtreeFlags&8772)!==0):Ba(e,r),za=h,xn=m}break;case 30:break;default:Ba(e,r)}}function Tg(e){var i=e.alternate;i!==null&&(e.alternate=null,Tg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&el(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,ti=!1;function Fa(e,i,r){for(r=r.child;r!==null;)Ag(e,i,r),r=r.sibling}function Ag(e,i,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,r)}catch{}switch(r.tag){case 26:xn||ca(r,i),Fa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:xn||ca(r,i);var u=$e,h=ti;Er(r.type)&&($e=r.stateNode,ti=!1),Fa(e,i,r),zl(r.stateNode),$e=u,ti=h;break;case 5:xn||ca(r,i);case 6:if(u=$e,h=ti,$e=null,Fa(e,i,r),$e=u,ti=h,$e!==null)if(ti)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(r.stateNode)}catch(m){He(r,i,m)}else try{$e.removeChild(r.stateNode)}catch(m){He(r,i,m)}break;case 18:$e!==null&&(ti?(e=$e,vv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),mo(e)):vv($e,r.stateNode));break;case 4:u=$e,h=ti,$e=r.stateNode.containerInfo,ti=!0,Fa(e,i,r),$e=u,ti=h;break;case 0:case 11:case 14:case 15:gr(2,r,i),xn||gr(4,r,i),Fa(e,i,r);break;case 1:xn||(ca(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&xg(r,i,u)),Fa(e,i,r);break;case 21:Fa(e,i,r);break;case 22:xn=(u=xn)||r.memoizedState!==null,Fa(e,i,r),xn=u;break;default:Fa(e,i,r)}}function Rg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mo(e)}catch(r){He(i,i.return,r)}}}function Cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mo(e)}catch(r){He(i,i.return,r)}}function s1(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new bg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new bg),i;default:throw Error(a(435,e.tag))}}function oc(e,i){var r=s1(e);i.forEach(function(u){if(!r.has(u)){r.add(u);var h=m1.bind(null,e,u);u.then(h,h)}})}function ei(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=e,b=i,D=b;t:for(;D!==null;){switch(D.tag){case 27:if(Er(D.type)){$e=D.stateNode,ti=!1;break t}break;case 5:$e=D.stateNode,ti=!1;break t;case 3:case 4:$e=D.stateNode.containerInfo,ti=!0;break t}D=D.return}if($e===null)throw Error(a(160));Ag(m,b,h),$e=null,ti=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)wg(i,e),i=i.sibling}var Ji=null;function wg(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(i,e),ni(e),u&4&&(gr(3,e,e.return),Al(3,e),gr(5,e,e.return));break;case 1:ei(i,e),ni(e),u&512&&(xn||r===null||ca(r,r.return)),u&64&&za&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Ji;if(ei(i,e),ni(e),u&512&&(xn||r===null||ca(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[jr]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),In(m,u,r),m[mn]=e,U(m),u=m;break t;case"link":var b=wv("link","href",h).get(u+(r.href||""));if(b){for(var D=0;D<b.length;D++)if(m=b[D],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(D,1);break e}}m=h.createElement(u),In(m,u,r),h.head.appendChild(m);break;case"meta":if(b=wv("meta","content",h).get(u+(r.content||""))){for(D=0;D<b.length;D++)if(m=b[D],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(D,1);break e}}m=h.createElement(u),In(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[mn]=e,U(m),u=m}e.stateNode=u}else Dv(h,e.type,e.stateNode);else e.stateNode=Cv(h,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?Dv(h,e.type,e.stateNode):Cv(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&jh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ei(i,e),ni(e),u&512&&(xn||r===null||ca(r,r.return)),r!==null&&u&4&&jh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ei(i,e),ni(e),u&512&&(xn||r===null||ca(r,r.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(Vt){He(e,e.return,Vt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,jh(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Qh=!0);break;case 6:if(ei(i,e),ni(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(Vt){He(e,e.return,Vt)}}break;case 3:if(bc=null,h=Ji,Ji=Sc(i.containerInfo),ei(i,e),Ji=h,ni(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Vt){He(e,e.return,Vt)}Qh&&(Qh=!1,Dg(e));break;case 4:u=Ji,Ji=Sc(e.stateNode.containerInfo),ei(i,e),ni(e),Ji=u;break;case 12:ei(i,e),ni(e);break;case 31:ei(i,e),ni(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,oc(e,u)));break;case 13:ei(i,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(uc=A()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,oc(e,u)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,nt=za,dt=xn;if(za=nt||h,xn=dt||V,ei(i,e),xn=dt,za=nt,ni(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||V||za||xn||cs(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(m=V.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{D=V.stateNode;var gt=V.memoizedProps.style,rt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;D.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Vt){He(V,V.return,Vt)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(Vt){He(V,V.return,Vt)}}}else if(i.tag===18){if(r===null){V=i;try{var ct=V.stateNode;h?xv(ct,!0):xv(V.stateNode,!1)}catch(Vt){He(V,V.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,oc(e,r))));break;case 19:ei(i,e),ni(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,oc(e,u)));break;case 30:break;case 21:break;default:ei(i,e),ni(e)}}function ni(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(Sg(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Zh(e);sc(e,m,h);break;case 5:var b=r.stateNode;r.flags&32&&(bn(b,""),r.flags&=-33);var D=Zh(e);sc(e,D,b);break;case 3:case 4:var V=r.stateNode.containerInfo,nt=Zh(e);Kh(e,nt,V);break;default:throw Error(a(161))}}catch(dt){He(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Dg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Eg(e,i.alternate,i),i=i.sibling}function cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:gr(4,i,i.return),cs(i);break;case 1:ca(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&xg(i,i.return,r),cs(i);break;case 27:zl(i.stateNode);case 26:case 5:ca(i,i.return),cs(i);break;case 22:i.memoizedState===null&&cs(i);break;case 30:cs(i);break;default:cs(i)}e=e.sibling}}function Ia(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(h,m,r),Al(4,m);break;case 1:if(Ia(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){He(u,u.return,nt)}if(u=m,h=u.updateQueue,h!==null){var D=u.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)o_(V[h],D)}catch(nt){He(u,u.return,nt)}}r&&b&64&&vg(m),Rl(m,m.return);break;case 27:Mg(m);case 26:case 5:Ia(h,m,r),r&&u===null&&b&4&&yg(m),Rl(m,m.return);break;case 12:Ia(h,m,r);break;case 31:Ia(h,m,r),r&&b&4&&Rg(h,m);break;case 13:Ia(h,m,r),r&&b&4&&Cg(h,m);break;case 22:m.memoizedState===null&&Ia(h,m,r),Rl(m,m.return);break;case 30:break;default:Ia(h,m,r)}i=i.sibling}}function Jh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&dl(r))}function $h(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dl(e))}function $i(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ug(e,i,r,u),i=i.sibling}function Ug(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:$i(e,i,r,u),h&2048&&Al(9,i);break;case 1:$i(e,i,r,u);break;case 3:$i(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dl(e)));break;case 12:if(h&2048){$i(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,D=m.onPostCommit;typeof D=="function"&&D(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){He(i,i.return,V)}}else $i(e,i,r,u);break;case 31:$i(e,i,r,u);break;case 13:$i(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?$i(e,i,r,u):Cl(e,i):m._visibility&2?$i(e,i,r,u):(m._visibility|=2,io(e,i,r,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Jh(b,i);break;case 24:$i(e,i,r,u),h&2048&&$h(i.alternate,i);break;default:$i(e,i,r,u)}}function io(e,i,r,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,D=r,V=u,nt=b.flags;switch(b.tag){case 0:case 11:case 15:io(m,b,D,V,h),Al(8,b);break;case 23:break;case 22:var dt=b.stateNode;b.memoizedState!==null?dt._visibility&2?io(m,b,D,V,h):Cl(m,b):(dt._visibility|=2,io(m,b,D,V,h)),h&&nt&2048&&Jh(b.alternate,b);break;case 24:io(m,b,D,V,h),h&&nt&2048&&$h(b.alternate,b);break;default:io(m,b,D,V,h)}i=i.sibling}}function Cl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:Cl(r,u),h&2048&&Jh(u.alternate,u);break;case 24:Cl(r,u),h&2048&&$h(u.alternate,u);break;default:Cl(r,u)}i=i.sibling}}var wl=8192;function ao(e,i,r){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)Ng(e,i,r),e=e.sibling}function Ng(e,i,r){switch(e.tag){case 26:ao(e,i,r),e.flags&wl&&e.memoizedState!==null&&q1(r,Ji,e.memoizedState,e.memoizedProps);break;case 5:ao(e,i,r);break;case 3:case 4:var u=Ji;Ji=Sc(e.stateNode.containerInfo),ao(e,i,r),Ji=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=wl,wl=16777216,ao(e,i,r),wl=u):ao(e,i,r));break;default:ao(e,i,r)}}function Lg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];Rn=u,Pg(u,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Og(e),e=e.sibling}function Og(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&gr(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,lc(e)):Dl(e);break;default:Dl(e)}}function lc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];Rn=u,Pg(u,e)}Lg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:gr(8,i,i.return),lc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,lc(i));break;default:lc(i)}e=e.sibling}}function Pg(e,i){for(;Rn!==null;){var r=Rn;switch(r.tag){case 0:case 11:case 15:gr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:dl(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,Rn=u;else t:for(r=e;Rn!==null;){u=Rn;var h=u.sibling,m=u.return;if(Tg(u),u===r){Rn=null;break t}if(h!==null){h.return=m,Rn=h;break t}Rn=m}}}var o1={getCacheForType:function(e){var i=Fn(_n),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Fn(_n).controller.signal}},l1=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,pe=null,ge=0,Ie=0,gi=null,vr=!1,ro=!1,td=!1,Ha=0,ln=0,xr=0,fs=0,ed=0,vi=0,so=0,Ul=null,ii=null,nd=!1,uc=0,zg=0,cc=1/0,fc=null,yr=null,En=0,Sr=null,oo=null,Ga=0,id=0,ad=null,Fg=null,Nl=0,rd=null;function xi(){return(Ne&2)!==0&&ge!==0?ge&-ge:B.T!==null?fd():$o()}function Bg(){if(vi===0)if((ge&536870912)===0||xe){var e=At;At<<=1,(At&3932160)===0&&(At=262144),vi=e}else vi=536870912;return e=mi.current,e!==null&&(e.flags|=32),vi}function ai(e,i,r){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(lo(e,0),Mr(e,ge,vi,!1)),Vn(e,r),((Ne&2)===0||e!==We)&&(e===We&&((Ne&2)===0&&(fs|=r),ln===4&&Mr(e,ge,vi,!1)),fa(e))}function Ig(e,i,r){if((Ne&6)!==0)throw Error(a(327));var u=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Rt(e,i),h=u?f1(e,i):od(e,i,!0),m=u;do{if(h===0){ro&&!u&&Mr(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!u1(r)){h=od(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var D=e;h=Ul;var V=D.current.memoizedState.isDehydrated;if(V&&(lo(D,b).flags|=256),b=od(D,b,!1),b!==2){if(td&&!V){D.errorRecoveryDisabledLanes|=m,fs|=m,h=4;break t}m=ii,ii=h,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){lo(e,0),Mr(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Mr(u,i,vi,!vr);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=uc+300-A(),10<h)){if(Mr(u,i,vi,!vr),vt(u,0,!0)!==0)break t;Ga=i,u.timeoutHandle=_v(Hg.bind(null,u,r,ii,fc,nd,i,vi,fs,so,vr,m,"Throttled",-0,0),h);break t}Hg(u,r,ii,fc,nd,i,vi,fs,so,vr,m,null,-0,0)}}break}while(!0);fa(e)}function Hg(e,i,r,u,h,m,b,D,V,nt,dt,gt,rt,ct){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Aa},Ng(i,m,gt);var Vt=(m&62914560)===m?uc-A():(m&4194048)===m?zg-A():0;if(Vt=Y1(gt,Vt),Vt!==null){Ga=m,e.cancelPendingCommit=Vt(jg.bind(null,e,i,m,r,u,h,b,D,V,dt,gt,null,rt,ct)),Mr(e,m,b,!nt);return}}jg(e,i,m,r,u,h,b,D,V)}function u1(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!di(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(e,i,r,u){i&=~ed,i&=~fs,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),b=1<<m;u[m]=-1,h&=~b}r!==0&&bu(e,r,i)}function hc(){return(Ne&6)===0?(Ll(0),!1):!0}function sd(){if(pe!==null){if(Ie===0)var e=pe.return;else e=pe,Da=ns=null,Mh(e),Js=null,ml=0,e=pe;for(;e!==null;)gg(e.alternate,e),e=e.return;pe=null}}function lo(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,w1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ga=0,sd(),We=e,pe=r=Ca(e.current,null),ge=i,Ie=0,gi=null,vr=!1,ro=Rt(e,i),td=!1,so=vi=ed=fs=xr=ln=0,ii=Ul=null,nd=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-zt(u),m=1<<h;i|=e[h],u&=~m}return Ha=i,Lu(),r}function Gg(e,i){oe=null,B.H=bl,i===Qs||i===Gu?(i=i_(),Ie=3):i===ch?(i=i_(),Ie=4):Ie=i===Bh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,pe===null&&(ln=1,ec(e,Li(i,e.current)))}function Vg(){var e=mi.current;return e===null?!0:(ge&4194048)===ge?Fi===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Fi:!1}function kg(){var e=B.H;return B.H=bl,e===null?bl:e}function Xg(){var e=B.A;return B.A=o1,e}function dc(){ln=4,vr||(ge&4194048)!==ge&&mi.current!==null||(ro=!0),(xr&134217727)===0&&(fs&134217727)===0||We===null||Mr(We,ge,vi,!1)}function od(e,i,r){var u=Ne;Ne|=2;var h=kg(),m=Xg();(We!==e||ge!==i)&&(fc=null,lo(e,i)),i=!1;var b=ln;t:do try{if(Ie!==0&&pe!==null){var D=pe,V=gi;switch(Ie){case 8:sd(),b=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var nt=Ie;if(Ie=0,gi=null,uo(e,D,V,nt),r&&ro){b=0;break t}break;default:nt=Ie,Ie=0,gi=null,uo(e,D,V,nt)}}c1(),b=ln;break}catch(dt){Gg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Da=ns=null,Ne=u,B.H=h,B.A=m,pe===null&&(We=null,ge=0,Lu()),b}function c1(){for(;pe!==null;)Wg(pe)}function f1(e,i){var r=Ne;Ne|=2;var u=kg(),h=Xg();We!==e||ge!==i?(fc=null,cc=A()+500,lo(e,i)):ro=Rt(e,i);t:do try{if(Ie!==0&&pe!==null){i=pe;var m=gi;e:switch(Ie){case 1:Ie=0,gi=null,uo(e,i,m,1);break;case 2:case 9:if(e_(m)){Ie=0,gi=null,qg(i);break}i=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),fa(e)},m.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:e_(m)?(Ie=0,gi=null,qg(i)):(Ie=0,gi=null,uo(e,i,m,7));break;case 5:var b=null;switch(pe.tag){case 26:b=pe.memoizedState;case 5:case 27:var D=pe;if(b?Uv(b):D.stateNode.complete){Ie=0,gi=null;var V=D.sibling;if(V!==null)pe=V;else{var nt=D.return;nt!==null?(pe=nt,pc(nt)):pe=null}break e}}Ie=0,gi=null,uo(e,i,m,5);break;case 6:Ie=0,gi=null,uo(e,i,m,6);break;case 8:sd(),ln=6;break t;default:throw Error(a(462))}}h1();break}catch(dt){Gg(e,dt)}while(!0);return Da=ns=null,B.H=u,B.A=h,Ne=r,pe!==null?0:(We=null,ge=0,Lu(),ln)}function h1(){for(;pe!==null&&!Yt();)Wg(pe)}function Wg(e){var i=mg(e.alternate,e,Ha);e.memoizedProps=e.pendingProps,i===null?pc(e):pe=i}function qg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=ug(r,i,i.pendingProps,i.type,void 0,ge);break;case 11:i=ug(r,i,i.pendingProps,i.type.render,i.ref,ge);break;case 5:Mh(i);default:gg(r,i),i=pe=X0(i,Ha),i=mg(r,i,Ha)}e.memoizedProps=e.pendingProps,i===null?pc(e):pe=i}function uo(e,i,r,u){Da=ns=null,Mh(i),Js=null,ml=0;var h=i.return;try{if(t1(e,h,i,r,ge)){ln=1,ec(e,Li(r,e.current)),pe=null;return}}catch(m){if(h!==null)throw pe=h,m;ln=1,ec(e,Li(r,e.current)),pe=null;return}i.flags&32768?(xe||u===1?e=!0:ro||(ge&536870912)!==0?e=!1:(vr=e=!0,(u===2||u===9||u===3||u===6)&&(u=mi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Yg(i,e)):pc(i)}function pc(e){var i=e;do{if((i.flags&32768)!==0){Yg(i,vr);return}e=i.return;var r=i1(i.alternate,i,Ha);if(r!==null){pe=r;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);ln===0&&(ln=5)}function Yg(e,i){do{var r=a1(e.alternate,e);if(r!==null){r.flags&=32767,pe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=r}while(e!==null);ln=6,pe=null}function jg(e,i,r,u,h,m,b,D,V){e.cancelPendingCommit=null;do mc();while(En!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Zf,ji(e,r,m,b,D,V),e===We&&(pe=We=null,ge=0),oo=i,Sr=e,Ga=r,id=m,ad=h,Fg=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_1(ft,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,h=G.p,G.p=2,b=Ne,Ne|=4;try{r1(e,i,r)}finally{Ne=b,G.p=h,B.T=u}}En=1,Zg(),Kg(),Qg()}}function Zg(){if(En===1){En=0;var e=Sr,i=oo,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var u=G.p;G.p=2;var h=Ne;Ne|=4;try{wg(i,e);var m=xd,b=P0(e.containerInfo),D=m.focusedElem,V=m.selectionRange;if(b!==D&&D&&D.ownerDocument&&O0(D.ownerDocument.documentElement,D)){if(V!==null&&Xf(D)){var nt=V.start,dt=V.end;if(dt===void 0&&(dt=nt),"selectionStart"in D)D.selectionStart=nt,D.selectionEnd=Math.min(dt,D.value.length);else{var gt=D.ownerDocument||document,rt=gt&&gt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Vt=D.textContent.length,te=Math.min(V.start,Vt),Xe=V.end===void 0?te:Math.min(V.end,Vt);!ct.extend&&te>Xe&&(b=Xe,Xe=te,te=b);var K=L0(D,te),X=L0(D,Xe);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var tt=gt.createRange();tt.setStart(K.node,K.offset),ct.removeAllRanges(),te>Xe?(ct.addRange(tt),ct.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),ct.addRange(tt))}}}}for(gt=[],ct=D;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<gt.length;D++){var mt=gt[D];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Rc=!!vd,xd=vd=null}finally{Ne=h,G.p=u,B.T=r}}e.current=i,En=2}}function Kg(){if(En===2){En=0;var e=Sr,i=oo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var u=G.p;G.p=2;var h=Ne;Ne|=4;try{Eg(e,i.alternate,i)}finally{Ne=h,G.p=u,B.T=r}}En=3}}function Qg(){if(En===4||En===3){En=0,F();var e=Sr,i=oo,r=Ga,u=Fg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,oo=Sr=null,Jg(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(yr=null),Os(r),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=B.T,h=G.p,G.p=2,B.T=null;try{for(var m=e.onRecoverableError,b=0;b<u.length;b++){var D=u[b];m(D.value,{componentStack:D.stack})}}finally{B.T=i,G.p=h}}(Ga&3)!==0&&mc(),fa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===rd?Nl++:(Nl=0,rd=e):Nl=0,Ll(0)}}function Jg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,dl(i)))}function mc(){return Zg(),Kg(),Qg(),$g()}function $g(){if(En!==5)return!1;var e=Sr,i=id;id=0;var r=Os(Ga),u=B.T,h=G.p;try{G.p=32>r?32:r,B.T=null,r=ad,ad=null;var m=Sr,b=Ga;if(En=0,oo=Sr=null,Ga=0,(Ne&6)!==0)throw Error(a(331));var D=Ne;if(Ne|=4,Og(m.current),Ug(m,m.current,b,r),Ne=D,Ll(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{G.p=h,B.T=u,Jg(e,i)}}function tv(e,i,r){i=Li(r,i),i=Fh(e.stateNode,i,2),e=pr(e,i,2),e!==null&&(Vn(e,2),fa(e))}function He(e,i,r){if(e.tag===3)tv(e,e,r);else for(;i!==null;){if(i.tag===3){tv(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(yr===null||!yr.has(u))){e=Li(r,e),r=eg(2),u=pr(i,r,2),u!==null&&(ng(r,u,i,e),Vn(u,2),fa(u));break}}i=i.return}}function ld(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new l1;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(td=!0,h.add(r),e=d1.bind(null,e,i,r),i.then(e,e))}function d1(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(ge&r)===r&&(ln===4||ln===3&&(ge&62914560)===ge&&300>A()-uc?(Ne&2)===0&&lo(e,0):ed|=r,so===ge&&(so=0)),fa(e)}function ev(e,i){i===0&&(i=Fe()),e=$r(e,i),e!==null&&(Vn(e,i),fa(e))}function p1(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),ev(e,r)}function m1(e,i){var r=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),ev(e,r)}function _1(e,i){return Me(e,i)}var _c=null,co=null,ud=!1,gc=!1,cd=!1,br=0;function fa(e){e!==co&&e.next===null&&(co===null?_c=co=e:co=co.next=e),gc=!0,ud||(ud=!0,v1())}function Ll(e,i){if(!cd&&gc){cd=!0;do for(var r=!1,u=_c;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var b=u.suspendedLanes,D=u.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(b&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,rv(u,m))}else m=ge,m=vt(u,u===We?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Rt(u,m)||(r=!0,rv(u,m));u=u.next}while(r);cd=!1}}function g1(){nv()}function nv(){gc=ud=!1;var e=0;br!==0&&C1()&&(e=br);for(var i=A(),r=null,u=_c;u!==null;){var h=u.next,m=iv(u,i);m===0?(u.next=null,r===null?_c=h:r.next=h,h===null&&(co=r)):(r=u,(e!==0||(m&3)!==0)&&(gc=!0)),u=h}En!==0&&En!==5||Ll(e),br!==0&&(br=0)}function iv(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-zt(m),D=1<<b,V=h[b];V===-1?((D&r)===0||(D&u)!==0)&&(h[b]=ne(D,i)):V<=i&&(e.expiredLanes|=D),m&=~D}if(i=We,r=ge,r=vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Oe(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Rt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&Oe(u),Os(r)){case 2:case 8:r=yt;break;case 32:r=ft;break;case 268435456:r=Ct;break;default:r=ft}return u=av.bind(null,e),r=Me(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&Oe(u),e.callbackPriority=2,e.callbackNode=null,2}function av(e,i){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(mc()&&e.callbackNode!==r)return null;var u=ge;return u=vt(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Ig(e,u,i),iv(e,A()),e.callbackNode!=null&&e.callbackNode===r?av.bind(null,e):null)}function rv(e,i){if(mc())return null;Ig(e,i,!0)}function v1(){D1(function(){(Ne&6)!==0?Me(pt,g1):nv()})}function fd(){if(br===0){var e=Zs;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),br=e}return br}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tu(""+e)}function ov(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function x1(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=sv((h[Dn]||null).action),b=u.submitter;b&&(i=(i=b[Dn]||null)?sv(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var D=new wu("action","action",null,u,h);e.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(br!==0){var V=b?ov(h,b):new FormData(h);Uh(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(D.preventDefault(),V=b?ov(h,b):new FormData(h),Uh(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var hd=0;hd<jf.length;hd++){var dd=jf[hd],y1=dd.toLowerCase(),S1=dd[0].toUpperCase()+dd.slice(1);Qi(y1,"on"+S1)}Qi(B0,"onAnimationEnd"),Qi(I0,"onAnimationIteration"),Qi(H0,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(FM,"onTransitionRun"),Qi(BM,"onTransitionStart"),Qi(IM,"onTransitionCancel"),Qi(G0,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function lv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var b=u.length-1;0<=b;b--){var D=u[b],V=D.instance,nt=D.currentTarget;if(D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=nt;try{m(h)}catch(dt){Nu(dt)}h.currentTarget=null,m=V}else for(b=0;b<u.length;b++){if(D=u[b],V=D.instance,nt=D.currentTarget,D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=nt;try{m(h)}catch(dt){Nu(dt)}h.currentTarget=null,m=V}}}}function me(e,i){var r=i[Ps];r===void 0&&(r=i[Ps]=new Set);var u=e+"__bubble";r.has(u)||(uv(i,e,2,!1),r.add(u))}function pd(e,i,r){var u=0;i&&(u|=4),uv(r,e,u,i)}var vc="_reactListening"+Math.random().toString(36).slice(2);function md(e){if(!e[vc]){e[vc]=!0,Z.forEach(function(r){r!=="selectionchange"&&(M1.has(r)||pd(r,!1,e),pd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[vc]||(i[vc]=!0,pd("selectionchange",!1,i))}}function uv(e,i,r,u){switch(Bv(i)){case 2:var h=K1;break;case 8:h=Q1;break;default:h=Dd}r=h.bind(null,i,r,e),h=void 0,!Pf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function _d(e,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var D=u.stateNode.containerInfo;if(D===h)break;if(b===4)for(b=u.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;D!==null;){if(b=ar(D),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){u=m=b;continue t}D=D.parentNode}}u=u.return}p0(function(){var nt=m,dt=Lf(r),gt=[];t:{var rt=V0.get(e);if(rt!==void 0){var ct=wu,Vt=e;switch(e){case"keypress":if(Ru(r)===0)break t;case"keydown":case"keyup":ct=mM;break;case"focusin":Vt="focus",ct=If;break;case"focusout":Vt="blur",ct=If;break;case"beforeblur":case"afterblur":ct=If;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=iM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=vM;break;case B0:case I0:case H0:ct=sM;break;case G0:ct=yM;break;case"scroll":case"scrollend":ct=eM;break;case"wheel":ct=MM;break;case"copy":case"cut":case"paste":ct=lM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=x0;break;case"toggle":case"beforetoggle":ct=EM}var te=(i&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),K=te?rt!==null?rt+"Capture":null:rt;te=[];for(var X=nt,tt;X!==null;){var mt=X;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=nl(X,K),mt!=null&&te.push(Pl(X,mt,tt))),Xe)break;X=X.return}0<te.length&&(rt=new ct(rt,Vt,null,r,dt),gt.push({event:rt,listeners:te}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&r!==Nf&&(Vt=r.relatedTarget||r.fromElement)&&(ar(Vt)||Vt[Zi]))break t;if((ct||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Vt=r.relatedTarget||r.toElement,ct=nt,Vt=Vt?ar(Vt):null,Vt!==null&&(Xe=l(Vt),te=Vt.tag,Vt!==Xe||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ct=null,Vt=nt),ct!==Vt)){if(te=g0,mt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=x0,mt="onPointerLeave",K="onPointerEnter",X="pointer"),Xe=ct==null?rt:Zr(ct),tt=Vt==null?rt:Zr(Vt),rt=new te(mt,X+"leave",ct,r,dt),rt.target=Xe,rt.relatedTarget=tt,mt=null,ar(dt)===nt&&(te=new te(K,X+"enter",Vt,r,dt),te.target=tt,te.relatedTarget=Xe,mt=te),Xe=mt,ct&&Vt)e:{for(te=b1,K=ct,X=Vt,tt=0,mt=K;mt;mt=te(mt))tt++;mt=0;for(var Qt=X;Qt;Qt=te(Qt))mt++;for(;0<tt-mt;)K=te(K),tt--;for(;0<mt-tt;)X=te(X),mt--;for(;tt--;){if(K===X||X!==null&&K===X.alternate){te=K;break e}K=te(K),X=te(X)}te=null}else te=null;ct!==null&&cv(gt,rt,ct,te,!1),Vt!==null&&Xe!==null&&cv(gt,Xe,Vt,te,!0)}}t:{if(rt=nt?Zr(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ae=R0;else if(T0(rt))if(C0)Ae=OM;else{Ae=NM;var jt=UM}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Ki(nt.elementType)&&(Ae=R0):Ae=LM;if(Ae&&(Ae=Ae(e,nt))){A0(gt,Ae,r,dt);break t}jt&&jt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Nn(rt,"number",rt.value)}switch(jt=nt?Zr(nt):window,e){case"focusin":(T0(jt)||jt.contentEditable==="true")&&(Gs=jt,Wf=nt,cl=null);break;case"focusout":cl=Wf=Gs=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,z0(gt,r,dt);break;case"selectionchange":if(zM)break;case"keydown":case"keyup":z0(gt,r,dt)}var ue;if(Gf)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Hs?b0(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(y0&&r.locale!=="ko"&&(Hs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hs&&(ue=m0()):(or=dt,zf="value"in or?or.value:or.textContent,Hs=!0)),jt=xc(nt,ve),0<jt.length&&(ve=new v0(ve,e,null,r,dt),gt.push({event:ve,listeners:jt}),ue?ve.data=ue:(ue=E0(r),ue!==null&&(ve.data=ue)))),(ue=AM?RM(e,r):CM(e,r))&&(ve=xc(nt,"onBeforeInput"),0<ve.length&&(jt=new v0("onBeforeInput","beforeinput",null,r,dt),gt.push({event:jt,listeners:ve}),jt.data=ue)),x1(gt,e,nt,r,dt)}lv(gt,i)})}function Pl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function xc(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=nl(e,r),h!=null&&u.unshift(Pl(e,h,m)),h=nl(e,i),h!=null&&u.push(Pl(e,h,m))),e.tag===3)return u;e=e.return}return[]}function b1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,i,r,u,h){for(var m=i._reactName,b=[];r!==null&&r!==u;){var D=r,V=D.alternate,nt=D.stateNode;if(D=D.tag,V!==null&&V===u)break;D!==5&&D!==26&&D!==27||nt===null||(V=nt,h?(nt=nl(r,m),nt!=null&&b.unshift(Pl(r,nt,V))):h||(nt=nl(r,m),nt!=null&&b.push(Pl(r,nt,V)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function fv(e){return(typeof e=="string"?e:""+e).replace(E1,`
`).replace(T1,"")}function hv(e,i){return i=fv(i),fv(e)===i}function ke(e,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||bn(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&bn(e,""+u);break;case"className":Jt(e,"class",u);break;case"tabIndex":Jt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,r,u);break;case"style":Fs(e,u,m);break;case"data":if(i!=="object"){Jt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=Tu(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&ke(e,i,"name",h.name,h,null),ke(e,i,"formEncType",h.formEncType,h,null),ke(e,i,"formMethod",h.formMethod,h,null),ke(e,i,"formTarget",h.formTarget,h,null)):(ke(e,i,"encType",h.encType,h,null),ke(e,i,"method",h.method,h,null),ke(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=Tu(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=Aa);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=Tu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":me("beforetoggle",e),me("toggle",e),Wt(e,"popover",u);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Wt(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=$S.get(r)||r,Wt(e,r,u))}}function gd(e,i,r,u,h,m){switch(r){case"style":Fs(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?bn(e,u):(typeof u=="number"||typeof u=="bigint")&&bn(e,""+u);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Dn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):Wt(e,r,u)}}}function In(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,m,b,r,null)}}h&&ke(e,i,"srcSet",r.srcSet,r,null),u&&ke(e,i,"src",r.src,r,null);return;case"input":me("invalid",e);var D=m=b=h=null,V=null,nt=null;for(u in r)if(r.hasOwnProperty(u)){var dt=r[u];if(dt!=null)switch(u){case"name":h=dt;break;case"type":b=dt;break;case"checked":V=dt;break;case"defaultChecked":nt=dt;break;case"value":m=dt;break;case"defaultValue":D=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:ke(e,i,u,dt,r,null)}}Ta(e,m,D,V,nt,b,h,!1);return;case"select":me("invalid",e),u=b=m=null;for(h in r)if(r.hasOwnProperty(h)&&(D=r[h],D!=null))switch(h){case"value":m=D;break;case"defaultValue":b=D;break;case"multiple":u=D;default:ke(e,i,h,D,r,null)}i=m,r=b,e.multiple=!!u,i!=null?Ui(e,!!u,i,!1):r!=null&&Ui(e,!!u,r,!0);return;case"textarea":me("invalid",e),m=h=u=null;for(b in r)if(r.hasOwnProperty(b)&&(D=r[b],D!=null))switch(b){case"value":u=D;break;case"defaultValue":h=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:ke(e,i,b,D,r,null)}Ln(e,u,h,m);return;case"option":for(V in r)r.hasOwnProperty(V)&&(u=r[V],u!=null)&&(V==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ke(e,i,V,u,r,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(u=0;u<Ol.length;u++)me(Ol[u],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(u=r[nt],u!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,nt,u,r,null)}return;default:if(Ki(i)){for(dt in r)r.hasOwnProperty(dt)&&(u=r[dt],u!==void 0&&gd(e,i,dt,u,r,void 0));return}}for(D in r)r.hasOwnProperty(D)&&(u=r[D],u!=null&&ke(e,i,D,u,r,null))}function A1(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,D=null,V=null,nt=null,dt=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=gt;default:u.hasOwnProperty(ct)||ke(e,i,ct,null,u,gt)}}for(var rt in u){var ct=u[rt];if(gt=r[rt],u.hasOwnProperty(rt)&&(ct!=null||gt!=null))switch(rt){case"type":m=ct;break;case"name":h=ct;break;case"checked":nt=ct;break;case"defaultChecked":dt=ct;break;case"value":b=ct;break;case"defaultValue":D=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==gt&&ke(e,i,rt,ct,u,gt)}}Un(e,b,D,V,nt,dt,m,h);return;case"select":ct=b=D=rt=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ct=V;default:u.hasOwnProperty(m)||ke(e,i,m,null,u,V)}for(h in u)if(m=u[h],V=r[h],u.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":rt=m;break;case"defaultValue":D=m;break;case"multiple":b=m;default:m!==V&&ke(e,i,h,m,u,V)}i=D,r=b,u=ct,rt!=null?Ui(e,!!r,rt,!1):!!u!=!!r&&(i!=null?Ui(e,!!r,i,!0):Ui(e,!!r,r?[]:"",!1));return;case"textarea":ct=rt=null;for(D in r)if(h=r[D],r.hasOwnProperty(D)&&h!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:ke(e,i,D,null,u,h)}for(b in u)if(h=u[b],m=r[b],u.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":rt=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&ke(e,i,b,h,u,m)}Be(e,rt,ct);return;case"option":for(var Vt in r)rt=r[Vt],r.hasOwnProperty(Vt)&&rt!=null&&!u.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:ke(e,i,Vt,null,u,rt));for(V in u)rt=u[V],ct=r[V],u.hasOwnProperty(V)&&rt!==ct&&(rt!=null||ct!=null)&&(V==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":ke(e,i,V,rt,u,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!u.hasOwnProperty(te)&&ke(e,i,te,null,u,rt);for(nt in u)if(rt=u[nt],ct=r[nt],u.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:ke(e,i,nt,rt,u,ct)}return;default:if(Ki(i)){for(var Xe in r)rt=r[Xe],r.hasOwnProperty(Xe)&&rt!==void 0&&!u.hasOwnProperty(Xe)&&gd(e,i,Xe,void 0,u,rt);for(dt in u)rt=u[dt],ct=r[dt],!u.hasOwnProperty(dt)||rt===ct||rt===void 0&&ct===void 0||gd(e,i,dt,rt,u,ct);return}}for(var K in r)rt=r[K],r.hasOwnProperty(K)&&rt!=null&&!u.hasOwnProperty(K)&&ke(e,i,K,null,u,rt);for(gt in u)rt=u[gt],ct=r[gt],!u.hasOwnProperty(gt)||rt===ct||rt==null&&ct==null||ke(e,i,gt,rt,u,ct)}function dv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),u=0;u<r.length;u++){var h=r[u],m=h.transferSize,b=h.initiatorType,D=h.duration;if(m&&D&&dv(b)){for(b=0,D=h.responseEnd,u+=1;u<r.length;u++){var V=r[u],nt=V.startTime;if(nt>D)break;var dt=V.transferSize,gt=V.initiatorType;dt&&dv(gt)&&(V=V.responseEnd,b+=dt*(V<D?1:(D-nt)/(V-nt)))}if(--u,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vd=null,xd=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function C1(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var _v=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(e){return gv.resolve(null).then(e).catch(U1)}:_v;function U1(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function vv(e,i){var r=i,u=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(u===0){e.removeChild(h),mo(i);return}u--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")u++;else if(r==="html")zl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,zl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,D=m.nodeName;m[jr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&zl(e.ownerDocument.body);r=h}while(r);mo(i)}function xv(e,i){var r=e;e=0;do{var u=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=u}while(r)}function Md(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Md(r),el(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function N1(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[jr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function L1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Bi(e.nextSibling),e===null))return null;return e}function yv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Bi(e.nextSibling),e===null))return null;return e}function bd(e){return e.data==="$?"||e.data==="$~"}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O1(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Td=null;function Sv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Bi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Mv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function bv(e,i,r){switch(i=yc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function zl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);el(e)}var Ii=new Map,Ev=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Va=G.d;G.d={f:P1,r:z1,D:F1,C:B1,L:I1,m:H1,X:V1,S:G1,M:k1};function P1(){var e=Va.f(),i=hc();return e||i}function z1(e){var i=rr(e);i!==null&&i.tag===5&&i.type==="form"?G_(i):Va.r(e)}var fo=typeof document>"u"?null:document;function Tv(e,i,r){var u=fo;if(u&&typeof i=="string"&&i){var h=ie(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Ev.has(h)||(Ev.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),In(i,"link",e),U(i),u.head.appendChild(i)))}}function F1(e){Va.D(e),Tv("dns-prefetch",e,null)}function B1(e,i){Va.C(e,i),Tv("preconnect",e,i)}function I1(e,i,r){Va.L(e,i,r);var u=fo;if(u&&e&&i){var h='link[rel="preload"][as="'+ie(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+ie(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+ie(r.imageSizes)+'"]')):h+='[href="'+ie(e)+'"]';var m=h;switch(i){case"style":m=ho(e);break;case"script":m=po(e)}Ii.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ii.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Fl(m))||i==="script"&&u.querySelector(Bl(m))||(i=u.createElement("link"),In(i,"link",e),U(i),u.head.appendChild(i)))}}function H1(e,i){Va.m(e,i);var r=fo;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ie(u)+'"][href="'+ie(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=po(e)}if(!Ii.has(m)&&(e=g({rel:"modulepreload",href:e},i),Ii.set(m,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Bl(m)))return}u=r.createElement("link"),In(u,"link",e),U(u),r.head.appendChild(u)}}}function G1(e,i,r){Va.S(e,i,r);var u=fo;if(u&&e){var h=sr(u).hoistableStyles,m=ho(e);i=i||"default";var b=h.get(m);if(!b){var D={loading:0,preload:null};if(b=u.querySelector(Fl(m)))D.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ii.get(m))&&Ad(e,r);var V=b=u.createElement("link");U(V),In(V,"link",e),V._p=new Promise(function(nt,dt){V.onload=nt,V.onerror=dt}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Mc(b,i,u)}b={type:"stylesheet",instance:b,count:1,state:D},h.set(m,b)}}}function V1(e,i){Va.X(e,i);var r=fo;if(r&&e){var u=sr(r).hoistableScripts,h=po(e),m=u.get(h);m||(m=r.querySelector(Bl(h)),m||(e=g({src:e,async:!0},i),(i=Ii.get(h))&&Rd(e,i),m=r.createElement("script"),U(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function k1(e,i){Va.M(e,i);var r=fo;if(r&&e){var u=sr(r).hoistableScripts,h=po(e),m=u.get(h);m||(m=r.querySelector(Bl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Ii.get(h))&&Rd(e,i),m=r.createElement("script"),U(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function Av(e,i,r,u){var h=(h=st.current)?Sc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ho(r.href),r=sr(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=ho(r.href);var m=sr(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(Fl(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Ii.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ii.set(e,r),m||X1(h,e,r,b.state))),i&&u===null)throw Error(a(528,""));return b}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=po(r),r=sr(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function ho(e){return'href="'+ie(e)+'"'}function Fl(e){return'link[rel="stylesheet"]['+e+"]"}function Rv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function X1(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),In(i,"link",r),U(i),e.head.appendChild(i))}function po(e){return'[src="'+ie(e)+'"]'}function Bl(e){return"script[async]"+e}function Cv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+ie(r.href)+'"]');if(u)return i.instance=u,U(u),u;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),U(u),In(u,"style",h),Mc(u,r.precedence,e),i.instance=u;case"stylesheet":h=ho(r.href);var m=e.querySelector(Fl(h));if(m)return i.state.loading|=4,i.instance=m,U(m),m;u=Rv(r),(h=Ii.get(h))&&Ad(u,h),m=(e.ownerDocument||e).createElement("link"),U(m);var b=m;return b._p=new Promise(function(D,V){b.onload=D,b.onerror=V}),In(m,"link",u),i.state.loading|=4,Mc(m,r.precedence,e),i.instance=m;case"script":return m=po(r.src),(h=e.querySelector(Bl(m)))?(i.instance=h,U(h),h):(u=r,(h=Ii.get(m))&&(u=g({},r),Rd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),U(h),In(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Mc(u,r.precedence,e));return i.instance}function Mc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,b=0;b<u.length;b++){var D=u[b];if(D.dataset.precedence===i)m=D;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var bc=null;function wv(e,i,r){if(bc===null){var u=new Map,h=bc=new Map;h.set(r,u)}else h=bc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[jr]||m[mn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var D=u.get(b);D?D.push(m):u.set(b,[m])}}return u}function Dv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function W1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function q1(e,i,r,u){if(r.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=ho(u.href),m=i.querySelector(Fl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ec.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,U(m);return}m=i.ownerDocument||i,u=Rv(u),(h=Ii.get(h))&&Ad(u,h),m=m.createElement("link"),U(m);var b=m;b._p=new Promise(function(D,V){b.onload=D,b.onerror=V}),In(m,"link",u),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ec.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Cd=0;function Y1(e,i){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var u=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Cd===0&&(Cd=62500*R1());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Cd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tc=null;function Ac(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tc=new Map,i.forEach(j1,e),Tc=null,Ec.call(e))}function j1(e,i){if(!(i.state.loading&4)){var r=Tc.get(e);if(r)var u=r.get(null);else{r=new Map,Tc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),u=b)}u&&r.set(null,u)}h=i.instance,b=h.getAttribute("data-precedence"),m=r.get(b)||u,m===u&&r.set(null,h),r.set(b,h),this.count++,u=Ec.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Il={$$typeof:w,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Z1(e,i,r,u,h,m,b,D,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Nv(e,i,r,u,h,m,b,D,V,nt,dt,gt){return e=new Z1(e,i,r,b,V,nt,dt,gt,D),i=1,m===!0&&(i|=24),m=pi(3,null,null,i),e.current=m,m.stateNode=e,i=oh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},fh(m),e}function Lv(e){return e?(e=Xs,e):Xs}function Ov(e,i,r,u,h,m){h=Lv(h),u.context===null?u.context=h:u.pendingContext=h,u=dr(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=pr(e,u,i),r!==null&&(ai(r,e,i),gl(r,e,i))}function Pv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function wd(e,i){Pv(e,i),(e=e.alternate)&&Pv(e,i)}function zv(e){if(e.tag===13||e.tag===31){var i=$r(e,67108864);i!==null&&ai(i,e,67108864),wd(e,67108864)}}function Fv(e){if(e.tag===13||e.tag===31){var i=xi();i=Jo(i);var r=$r(e,i);r!==null&&ai(r,e,i),wd(e,i)}}var Rc=!0;function K1(e,i,r,u){var h=B.T;B.T=null;var m=G.p;try{G.p=2,Dd(e,i,r,u)}finally{G.p=m,B.T=h}}function Q1(e,i,r,u){var h=B.T;B.T=null;var m=G.p;try{G.p=8,Dd(e,i,r,u)}finally{G.p=m,B.T=h}}function Dd(e,i,r,u){if(Rc){var h=Ud(u);if(h===null)_d(e,i,u,Cc,r),Iv(e,u);else if($1(h,e,i,r,u))u.stopPropagation();else if(Iv(e,u),i&4&&-1<J1.indexOf(e)){for(;h!==null;){var m=rr(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Mt(m.pendingLanes);if(b!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;b;){var V=1<<31-zt(b);D.entanglements[1]|=V,b&=~V}fa(m),(Ne&6)===0&&(cc=A()+500,Ll(0))}}break;case 31:case 13:D=$r(m,2),D!==null&&ai(D,m,2),hc(),wd(m,2)}if(m=Ud(u),m===null&&_d(e,i,u,Cc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else _d(e,i,u,null,r)}}function Ud(e){return e=Lf(e),Nd(e)}var Cc=null;function Nd(e){if(Cc=null,e=ar(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Cc=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pt:return 2;case yt:return 8;case ft:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Ld=!1,Tr=null,Ar=null,Rr=null,Hl=new Map,Gl=new Map,Cr=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iv(e,i){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(i.pointerId)}}function Vl(e,i,r,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=rr(i),i!==null&&zv(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function $1(e,i,r,u,h){switch(i){case"focusin":return Tr=Vl(Tr,e,i,r,u,h),!0;case"dragenter":return Ar=Vl(Ar,e,i,r,u,h),!0;case"mouseover":return Rr=Vl(Rr,e,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Hl.set(m,Vl(Hl.get(m)||null,e,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Gl.set(m,Vl(Gl.get(m)||null,e,i,r,u,h)),!0}return!1}function Hv(e){var i=ar(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,oa(e.priority,function(){Fv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,oa(e.priority,function(){Fv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Ud(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);Nf=u,r.target.dispatchEvent(u),Nf=null}else return i=rr(r),i!==null&&zv(i),e.blockedOn=r,!1;i.shift()}return!0}function Gv(e,i,r){wc(e)&&r.delete(i)}function tb(){Ld=!1,Tr!==null&&wc(Tr)&&(Tr=null),Ar!==null&&wc(Ar)&&(Ar=null),Rr!==null&&wc(Rr)&&(Rr=null),Hl.forEach(Gv),Gl.forEach(Gv)}function Dc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ld||(Ld=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,tb)))}var Uc=null;function Vv(e){Uc!==e&&(Uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Uc===e&&(Uc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Nd(u||r)===null)continue;break}var m=rr(r);m!==null&&(e.splice(i,3),i-=3,Uh(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function mo(e){function i(V){return Dc(V,e)}Tr!==null&&Dc(Tr,e),Ar!==null&&Dc(Ar,e),Rr!==null&&Dc(Rr,e),Hl.forEach(i),Gl.forEach(i);for(var r=0;r<Cr.length;r++){var u=Cr[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Cr.length&&(r=Cr[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&Cr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],b=h[Dn]||null;if(typeof m=="function")b||Vv(r);else if(b){var D=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[Dn]||null)D=b.formAction;else if(Nd(h)!==null)continue}else D=b.action;typeof D=="function"?r[u+1]=D:(r.splice(u,3),u-=3),Vv(r)}}}function kv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(r,20)}function r(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Od(e){this._internalRoot=e}Nc.prototype.render=Od.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=xi();Ov(r,u,e,i,null,null)},Nc.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Ov(e.current,2,null,e,null,null),hc(),i[Zi]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var i=$o();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Cr.length&&i!==0&&i<Cr[r].priority;r++);Cr.splice(r,0,e),r===0&&Hv(e)}};var Xv=t.version;if(Xv!=="19.2.4")throw Error(a(527,Xv,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{bt=Lc.inject(eb),Tt=Lc}catch{}}return Xl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Q_,m=J_,b=$_;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Nv(e,1,!1,null,null,r,u,null,h,m,b,kv),e[Zi]=i.current,md(e),new Od(i)},Xl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",m=Q_,b=J_,D=$_,V=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(D=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=Nv(e,1,!0,i,r??null,u,h,V,m,b,D,kv),i.context=Lv(null),r=i.current,u=xi(),u=Jo(u),h=dr(u),h.callback=null,pr(r,h,u),r=u,i.current.lanes=r,Vn(i,r),fa(i),e[Zi]=i.current,md(e),new Nc(i)},Xl.version="19.2.4",Xl}var tx;function hb(){if(tx)return Fd.exports;tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Fd.exports=fb(),Fd.exports}var db=hb();const pb=_y(db);function ja(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function gy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bo={duration:.5,overwrite:!1,delay:0},Fm,Gn,tn,Wi=1e8,Ye=1/Wi,Ap=Math.PI*2,mb=Ap/4,_b=0,vy=Math.sqrt,gb=Math.cos,vb=Math.sin,wn=function(t){return typeof t=="string"},un=function(t){return typeof t=="function"},$a=function(t){return typeof t=="number"},Bm=function(t){return typeof t>"u"},Ma=function(t){return typeof t=="object"},si=function(t){return t!==!1},Im=function(){return typeof window<"u"},Oc=function(t){return un(t)||wn(t)},xy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jn=Array.isArray,xb=/random\([^)]+\)/g,yb=/,\s*/g,ex=/(?:-?\.?\d|\.)+/gi,yy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sy=/[+-]=-?[.\d]+/,Sb=/[^,'"\[\]\s]+/gi,Mb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,da,Rp,Hm,Ci={},pf={},My,by=function(t){return(pf=Io(t,Ci))&&hi},Gm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},su=function(t,n){return!n&&console.warn(t)},Ey=function(t,n){return t&&(Ci[t]=n)&&pf&&(pf[t]=n)||Ci},ou=function(){return 0},bb={suppressEvents:!0,isStart:!0,kill:!1},rf={suppressEvents:!0,kill:!1},Eb={suppressEvents:!0},Vm={},Gr=[],Cp={},Ty,Mi={},Vd={},nx=30,sf=[],km="",Xm=function(t){var n=t[0],a,s;if(Ma(n)||un(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=sf.length;s--&&!sf[s].targetTest(n););a=sf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Zy(t[s],a)))||t.splice(s,1);return t},Rs=function(t){return t._gsap||Xm(qi(t))[0]._gsap},Ay=function(t,n,a){return(a=t[n])&&un(a)?t[n]():Bm(a)&&t.getAttribute&&t.getAttribute(n)||a},oi=function(t,n){return(t=t.split(",")).forEach(n)||t},hn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},Lo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},Tb=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},mf=function(){var t=Gr.length,n=Gr.slice(0),a,s;for(Cp={},Gr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Wm=function(t){return!!(t._initted||t._startAt||t.add)},Ry=function(t,n,a,s){Gr.length&&!Gn&&mf(),t.render(n,a,!!(Gn&&n<0&&Wm(t))),Gr.length&&!Gn&&mf()},Cy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(Sb).length<2?n:wn(t)?t.trim():t},wy=function(t){return t},wi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},Ab=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Io=function(t,n){for(var a in n)t[a]=n[a];return t},ix=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ma(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},_f=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},iu=function(t){var n=t.parent||nn,a=t.keyframes?Ab(jn(t.keyframes)):wi;if(si(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},Rb=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},Dy=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Ef=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},kr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Cs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},Cb=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},wp=function(t,n,a,s){return t._startAt&&(Gn?t._startAt.revert(rf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},wb=function o(t){return!t||t._ts&&o(t.parent)},ax=function(t){return t._repeat?Ho(t._tTime,t=t.duration()+t._rDelay)*t:0},Ho=function(t,n){var a=Math.floor(t=en(t/n));return t&&a===t?a-1:a},gf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Tf=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ye)||0))},Af=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=en(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Tf(t),a._dirty||Cs(a,t)),t},Uy=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=gf(t.rawTime(),n),(!n._dur||gu(0,n.totalDuration(),a)-n._tTime>Ye)&&n.render(a,!0)),Cs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ye}},ma=function(t,n,a,s){return n.parent&&kr(n),n._start=en(($a(a)?a:a||t!==nn?Gi(t,a,n):t._time)+n._delay),n._end=en(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Dy(t,n,"_first","_last",t._sort?"_start":0),Dp(n)||(t._recent=n),s||Uy(t,n),t._ts<0&&Af(t,t._tTime),t},Ny=function(t,n){return(Ci.ScrollTrigger||Gm("scrollTrigger",n))&&Ci.ScrollTrigger.create(n,t)},Ly=function(t,n,a,s,l){if(Ym(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!Gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ty!==bi.frame)return Gr.push(t),t._lazy=[l,s],1},Db=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Dp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},Ub=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&Db(t)&&!(!t._initted&&Dp(t))||(t._ts<0||t._dp._ts<0)&&!Dp(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=gu(0,t._tDur,n),_=Ho(p,f),t._yoyo&&_&1&&(c=1-c),_!==Ho(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Gn||s||t._zTime===Ye||!n&&t._zTime){if(!t._initted&&Ly(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?Ye:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&wp(t,n,a,!0),t._onUpdate&&!a&&Ei(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Ei(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&kr(t,1),!a&&!Gn&&(Ei(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},Nb=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Go=function(t,n,a,s){var l=t._repeat,c=en(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:en(c*(l+1)+t._rDelay*l):c,f>0&&!s&&Af(t,t._tTime=t._tDur*f),t.parent&&Tf(t),a||Cs(t.parent,t),t},rx=function(t){return t instanceof Qn?Cs(t):Go(t,t._dur)},Lb={_start:0,endTime:ou,totalDuration:ou},Gi=function o(t,n,a){var s=t.labels,l=t._recent||Lb,c=t.duration()>=Wi?l.endTime(!1):t._dur,f,p,d;return wn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(jn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},au=function(t,n,a){var s=$a(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=si(p.vars.inherit)&&p.parent;c.immediateRender=si(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new Sn(n[0],c,n[l+1])},Yr=function(t,n){return t||t===0?n(t):n},gu=function(t,n,a){return a<t?t:a>n?n:a},qn=function(t,n){return!wn(t)||!(n=Mb.exec(t))?"":n[1]},Ob=function(t,n,a){return Yr(a,function(s){return gu(t,n,s)})},Up=[].slice,Oy=function(t,n){return t&&Ma(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ma(t[0]))&&!t.nodeType&&t!==da},Pb=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return wn(s)&&!n||Oy(s,1)?(l=a).push.apply(l,qi(s)):a.push(s)})||a},qi=function(t,n,a){return tn&&!n&&tn.selector?tn.selector(t):wn(t)&&!a&&(Rp||!Vo())?Up.call((n||Hm).querySelectorAll(t),0):jn(t)?Pb(t,a):Oy(t)?Up.call(t,0):t?[t]:[]},Np=function(t){return t=qi(t)[0]||su("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return qi(n,a.querySelectorAll?a:a===t?su("Invalid scope")||Hm.createElement("div"):t)}},Py=function(t){return t.sort(function(){return .5-Math.random()})},zy=function(t){if(un(t))return t;var n=Ma(t)?t:{each:t},a=ws(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return wn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,R,w,C,N,P,O,I,T;if(!S){if(T=n.grid==="auto"?0:(n.grid||[1,Wi])[1],!T){for(O=-Wi;O<(O=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(S=c[M]=[],x=p?Math.min(T,M)*_-.5:s%T,R=T===Wi?0:p?M*g/T-.5:s/T|0,O=0,I=Wi,P=0;P<M;P++)w=P%T-x,C=R-(P/T|0),S[P]=N=d?Math.abs(d==="y"?C:w):vy(w*w+C*C),N>O&&(O=N),N<I&&(I=N);s==="random"&&Py(S),S.max=O-I,S.min=I,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(T>M?M-1:d?d==="y"?M/T:T:Math.max(T,M/T))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=qn(n.amount||n.each)||0,a=a&&M<0?qy(a):a}return M=(S[v]-S.min)/S.max||0,en(S.b+(a?a(M):M)*S.v)+S.u}},Lp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=en(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+($a(a)?0:qn(a))}},Fy=function(t,n){var a=jn(t),s,l;return!a&&Ma(t)&&(s=a=t.radius||Wi,t.values?(t=qi(t.values),(l=!$a(t[0]))&&(s*=s)):t=Lp(t.increment)),Yr(n,a?un(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Wi,_=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-p,v=v*v+y*y):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,l||_===c||$a(c)?_:_+qn(c)}:Lp(t))},By=function(t,n,a,s){return Yr(jn(t)?!n:a===!0?!!(a=0):!s,function(){return jn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},zb=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},Fb=function(t,n){return function(a){return t(parseFloat(a))+(n||qn(a))}},Bb=function(t,n,a){return Hy(t,n,0,1,a)},Iy=function(t,n,a){return Yr(a,function(s){return t[~~n(s)]})},Ib=function o(t,n,a){var s=n-t;return jn(t)?Iy(t,o(0,t.length),n):Yr(a,function(l){return(s+(l-t)%s)%s+t})},Hb=function o(t,n,a){var s=n-t,l=s*2;return jn(t)?Iy(t,o(0,t.length-1),n):Yr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},lu=function(t){return t.replace(xb,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(yb);return By(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},Hy=function(t,n,a,s,l){var c=n-t,f=s-a;return Yr(l,function(p){return a+((p-t)/c*f||0)})},Gb=function o(t,n,a,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=wn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(jn(t)&&!jn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return _[M](E-M)},a=n}else s||(t=Io(jn(t)?[]:{},t));if(!_){for(p in n)qm.call(f,t,p,"get",n[p]);l=function(E){return Km(E,f)||(c?t.p:t)}}}return Yr(a,l)},sx=function(t,n,a){var s=t.labels,l=Wi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Ei=function(t,n,a){var s=t.vars,l=s[n],c=tn,f=t._ctx,p,d,_;if(l)return p=s[n+"Params"],d=s.callbackScope||t,a&&Gr.length&&mf(),f&&(tn=f),_=p?l.apply(d,p):l.call(d),tn=c,_},$l=function(t){return kr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Gn),t.progress()<1&&Ei(t,"onInterrupt"),t},No,Gy=[],Vy=function(t){if(t)if(t=!t.name&&t.default||t,Im()||t.headless){var n=t.name,a=un(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:ou,render:Km,add:qm,kill:iE,modifier:nE,rawVars:0},c={targetTest:0,get:0,getSetter:Zm,aliases:{},register:0};if(Vo(),t!==s){if(Mi[n])return;wi(s,wi(_f(t,l),c)),Io(s.prototype,Io(l,_f(t,c))),Mi[s.prop=n]=s,t.targetTest&&(sf.push(s),Vm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Ey(n,s),t.register&&t.register(hi,s,li)}else Gy.push(t)},qe=255,tu={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},kd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*qe+.5|0},ky=function(t,n,a){var s=t?$a(t)?[t>>16,t>>8&qe,t&qe]:0:tu.black,l,c,f,p,d,_,g,v,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),tu[t])s=tu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&qe,s&qe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&qe,t&qe]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(ex),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=kd(p+1/3,l,c),s[1]=kd(p,l,c),s[2]=kd(p-1/3,l,c);else if(~t.indexOf("="))return s=t.match(yy),a&&s.length<4&&(s[3]=1),s}else s=t.match(ex)||tu.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/qe,c=s[1]/qe,f=s[2]/qe,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(y=g-v,d=_>.5?y/(2-g-v):y/(g+v),p=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},Xy=function(t){var n=[],a=[],s=-1;return t.split(Vr).forEach(function(l){var c=l.match(Uo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},ox=function(t,n,a){var s="",l=(t+s).match(Vr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=ky(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=Xy(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Vr,"1").split(Uo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Vr),g=d.length-1;f<g;f++)s+=d[f]+l[f];return s+d[g]},Vr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in tu)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),Vb=/hsl[a]?\(/,Wy=function(t){var n=t.join(" "),a;if(Vr.lastIndex=0,Vr.test(n))return a=Vb.test(n),t[1]=ox(t[1],a),t[0]=ox(t[0],a,Xy(t[1])),!0},uu,bi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],p,d,_,g,v,y,E=function M(S){var x=o()-s,R=S===!0,w,C,N,P;if((x>t||x<0)&&(a+=x-n),s+=x,N=s-a,w=N-c,(w>0||R)&&(P=++g.frame,v=N-g.time*1e3,g.time=N=N/1e3,c+=w+(w>=l?4:l-w),C=1),R||(p=d(M)),C)for(y=0;y<f.length;y++)f[y](N,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){My&&(!Rp&&Im()&&(da=Rp=window,Hm=da.document||{},Ci.gsap=hi,(da.gsapVersions||(da.gsapVersions=[])).push(hi.version),by(pf||da.GreenSockGlobals||!da.gsap&&da||{}),Gy.forEach(Vy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},uu=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),uu=0,d=ou},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,R){var w=x?function(C,N,P,O){S(C,N,P,O),g.remove(w)}:S;return g.remove(S),f[R?"unshift":"push"](w),Vo(),w},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g})(),Vo=function(){return!uu&&bi.wake()},Se={},kb=/^[\d.\-M][\d.\-,\s]/,Xb=/["']/g,Wb=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(Xb,"").trim():+d,s=p.substr(f+1).trim();return n},qb=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},Yb=function(t){var n=(t+"").split("("),a=Se[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[Wb(n[1])]:qb(t).split(",").map(Cy)):Se._CE&&kb.test(t)?Se._CE("",t):a},qy=function(t){return function(n){return 1-t(1-n)}},Yy=function o(t,n){for(var a=t._first,s;a;)a instanceof Qn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},ws=function(t,n){return t&&(un(t)?t:Se[t]||Yb(t))||n},Ns=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return oi(t,function(f){Se[f]=Ci[f]=l,Se[c=f.toLowerCase()]=a;for(var p in l)Se[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Se[f+"."+p]=l[p]}),l},jy=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Xd=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/Ap*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*vb((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:jy(f);return l=Ap/l,p.config=function(d,_){return o(t,d,_)},p},Wd=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:jy(a);return s.config=function(l){return o(t,l)},s};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ns(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;Ns("Elastic",Xd("in"),Xd("out"),Xd());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ns("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ns("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ns("Circ",function(o){return-(vy(1-o*o)-1)});Ns("Sine",function(o){return o===1?1:-gb(o*mb)+1});Ns("Back",Wd("in"),Wd("out"),Wd());Se.SteppedEase=Se.steps=Ci.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-Ye;return function(f){return((s*gu(0,c,f)|0)+l)*a}}};Bo.ease=Se["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return km+=o+","+o+"Params,"});var Zy=function(t,n){this.id=_b++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Ay,this.set=n?n.getSetter:Zm},cu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Go(this,+n.duration,1,1),this.data=n.data,tn&&(this._ctx=tn,tn.data.push(this)),uu||bi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Go(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Vo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Af(this,a),!l._dp||l.parent||Uy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ma(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ye||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Ry(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+ax(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+ax(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Ho(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?gf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ye?0:this._rts,this.totalTime(gu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Tf(this),Cb(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=en(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ma(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(si(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=Eb);var s=Gn;return Gn=a,Wm(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Gn=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,rx(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,rx(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Gi(this,a),si(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,si(s)),this._dur||(this._zTime=-Ye),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Ye)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,l=s._prom;return new Promise(function(c){var f=un(a)?a:wy,p=function(){var _=s.then;s.then=null,l&&l(),un(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=_),c(f),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){$l(this)},o})();wi(cu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Qn=(function(o){gy(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=si(a.sortChildren),nn&&ma(a.parent||nn,ja(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Ny(ja(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return au(0,arguments,this),this},n.from=function(s,l,c){return au(1,arguments,this),this},n.fromTo=function(s,l,c,f){return au(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,iu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Sn(s,l,Gi(this,c),1),this},n.call=function(s,l,c){return ma(this,Sn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Sn(s,c,Gi(this,p)),this},n.staggerFrom=function(s,l,c,f,p,d,_){return c.runBackwards=1,iu(c).immediateRender=si(c.immediateRender),this.staggerTo(s,l,c,f,p,d,_)},n.staggerFromTo=function(s,l,c,f,p,d,_,g){return f.startAt=c,iu(f).immediateRender=si(f.immediateRender),this.staggerTo(s,l,f,p,d,_,g)},n.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:en(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,y,E,M,S,x,R,w,C,N,P,O;if(this!==nn&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,C=this._start,w=this._ts,x=!w,g&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=en(_%S),_===p?(M=this._repeat,v=d):(N=en(_/S),M=~~N,M&&M===N&&(v=d,M--),v>d&&(v=d)),N=Ho(this._tTime,S),!f&&this._tTime&&N!==M&&this._tTime-N*S-this._dur<=0&&(N=M),P&&M&1&&(v=d-v,O=1),M!==N&&!this._lock){var I=P&&N&1,T=I===(P&&M&1);if(M<N&&(I=!I),f=I?0:_%d?d:_,this._lock=1,this.render(f||(O?0:en(M*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,N=M),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,T&&(this._lock=2,f=I?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;Yy(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=Nb(this,en(f),en(v)),R&&(_-=v-(v=R._start))),this._tTime=_,this._time=v,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&d&&!l&&!N&&(Ei(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){R=0,E&&(_+=this._zTime=-Ye);break}}y=E}else{y=this._last;for(var L=s<0?s:v;y;){if(E=y._prev,(y._act||L<=y._end)&&y._ts&&R!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(L-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(L-y._start)*y._ts,l,c||Gn&&Wm(y)),v!==this._time||!this._ts&&!x){R=0,E&&(_+=this._zTime=L?-Ye:Ye);break}}y=E}}if(R&&!l&&(this.pause(),R.render(v>=f?0:-Ye)._zTime=v>=f?1:-1,this._ts))return this._start=C,Tf(this),this.render(s,l,c);this._onUpdate&&!l&&Ei(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&kr(this,1),!l&&!(s<0&&!f)&&(_||f||!p)&&(Ei(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if($a(l)||(l=Gi(this,l,s)),!(s instanceof cu)){if(jn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(wn(s))return this.addLabel(s,l);if(un(s))s=Sn.delayedCall(0,s);else return this}return this!==s?ma(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Wi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Sn?l&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return wn(s)?this.removeLabel(s):un(s)?this.killTweensOf(s):(s.parent===this&&Ef(this,s),s===this._recent&&(this._recent=this._last),Cs(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(bi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Gi(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=Sn.delayedCall(0,l||ou,c);return f.data="isPause",this._hasPause=1,ma(this,f,Gi(this,s))},n.removePause=function(s){var l=this._first;for(s=Gi(this,s);l;)l._start===s&&l.data==="isPause"&&kr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Fr!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=qi(s),p=this._first,d=$a(l),_;p;)p instanceof Sn?Tb(p._targets,f)&&(d?(!Fr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Gi(c,s),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,y,E=Sn.to(c,wi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Ye,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==S&&Go(E,S,0,1).render(E._time,!0,!0),y=1}_&&_.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,wi({startAt:{time:Gi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),sx(this,Gi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),sx(this,Gi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ye)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(s=en(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=s);return Cs(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Cs(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,p=Wi,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ma(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=en(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Go(c,c===nn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(nn._ts&&(Ry(nn,gf(s,nn)),Ty=bi.frame),bi.frame>=nx){nx+=Ai.autoSleep||120;var l=nn._first;if((!l||!l._ts)&&Ai.autoSleep&&bi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||bi.sleep()}}},t})(cu);wi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jb=function(t,n,a,s,l,c,f){var p=new li(this._pt,t,n,0,1,eS,null,l),d=0,_=0,g,v,y,E,M,S,x,R;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=lu(s)),c&&(R=[a,s],c(R,t,n),a=R[0],s=R[1]),v=a.match(Gd)||[];g=Gd.exec(s);)E=g[0],M=s.substring(d,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[_++]&&(S=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:S,c:E.charAt(1)==="="?Lo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},d=Gd.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(Sy.test(s)||x)&&(p.e=0),this._pt=p,p},qm=function(t,n,a,s,l,c,f,p,d,_){un(s)&&(s=s(l||0,t,c));var g=t[n],v=a!=="get"?a:un(g)?d?t[n.indexOf("set")||!un(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,y=un(g)?d?$b:$y:jm,E;if(wn(s)&&(~s.indexOf("random(")&&(s=lu(s)),s.charAt(1)==="="&&(E=Lo(v,s)+(qn(v)||0),(E||E===0)&&(s=E))),!_||v!==s||Op)return!isNaN(v*s)&&s!==""?(E=new li(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?eE:tS,0,y),d&&(E.fp=d),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&Gm(n,s),jb.call(this,t,n,v,s,y,p||Ai.stringFilter,d))},Zb=function(t,n,a,s,l){if(un(t)&&(t=ru(t,l,n,a,s)),!Ma(t)||t.style&&t.nodeType||jn(t)||xy(t))return wn(t)?ru(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=ru(t[f],l,n,a,s);return c},Ky=function(t,n,a,s,l,c){var f,p,d,_;if(Mi[t]&&(f=new Mi[t]).init(l,f.rawVars?n[t]:Zb(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=p=new li(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==No))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Fr,Op,Ym=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,R=x&&x.data==="nested"?x.vars.targets:S,w=t._overwrite==="auto"&&!Fm,C=t.timeline,N,P,O,I,T,L,H,j,Q,ut,ot,B,G;if(C&&(!v||!l)&&(l="none"),t._ease=ws(l,Bo.ease),t._yEase=g?qy(ws(g===!0?l:g,Bo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!C&&!!s.runBackwards,!C||v&&!s.stagger){if(j=S[0]?Rs(S[0]).harness:0,B=j&&s[j.prop],N=_f(s,Vm),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&E?rf:bb),M._lazy=0),c){if(kr(t._startAt=Sn.set(S,wi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&si(p),startAt:null,delay:0,onUpdate:d&&function(){return Ei(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Gn||!f&&!y)&&t._startAt.revert(rf),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&E&&!M){if(n&&(f=!1),O=wi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&si(p),immediateRender:f,stagger:0,parent:x},N),B&&(O[j.prop]=B),kr(t._startAt=Sn.set(S,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Gn?t._startAt.revert(rf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Ye,Ye);else if(!n)return}for(t._pt=t._ptCache=0,p=E&&si(p)||p&&!E,P=0;P<S.length;P++){if(T=S[P],H=T._gsap||Xm(S)[P]._gsap,t._ptLookup[P]=ut={},Cp[H.id]&&Gr.length&&mf(),ot=R===S?P:R.indexOf(T),j&&(Q=new j).init(T,B||N,t,ot,R)!==!1&&(t._pt=I=new li(t._pt,T,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function($){ut[$]=I}),Q.priority&&(L=1)),!j||B)for(O in N)Mi[O]&&(Q=Ky(O,N,t,ot,T,R))?Q.priority&&(L=1):ut[O]=I=qm.call(t,T,O,"get",N[O],ot,R,0,s.stringFilter);t._op&&t._op[P]&&t.kill(T,t._op[P]),w&&t._pt&&(Fr=t,nn.killTweensOf(T,ut,t.globalTime(n)),G=!t.parent,Fr=0),t._pt&&p&&(Cp[H.id]=1)}L&&nS(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!G,v&&n<=0&&C.render(Wi,!0,!0)},Kb=function(t,n,a,s,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Op=1,t.vars[n]="+=0",Ym(t,f),Op=0,p?su(n+" not eligible for reset"):1;d.push(_)}for(y=d.length;y--;)g=d[y],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=hn(a)+qn(g.e)),g.b&&(g.b=_.s+qn(g.b))},Qb=function(t,n){var a=t[0]?Rs(t[0]).harness:0,s=a&&a.aliases,l,c,f,p;if(!s)return n;l=Io({},n);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},Jb=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(jn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},ru=function(t,n,a,s,l){return un(t)?t.call(n,a,s,l):wn(t)&&~t.indexOf("random(")?lu(t):t},Qy=km+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Jy={};oi(Qy+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Jy[o]=1});var Sn=(function(o){gy(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:iu(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,y=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,x=p.yoyoEase,R=s.parent||nn,w=(jn(a)||xy(a)?$a(a[0]):"length"in s)?[a]:qi(a),C,N,P,O,I,T,L,H;if(f._targets=w.length?Xm(w):su("GSAP target "+a+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||Oc(d)||Oc(_)){if(s=f.vars,C=f.timeline=new Qn({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:w}),C.kill(),C.parent=C._dp=ja(f),C._start=0,v||Oc(d)||Oc(_)){if(O=w.length,L=v&&zy(v),Ma(v))for(I in v)~Qy.indexOf(I)&&(H||(H={}),H[I]=v[I]);for(N=0;N<O;N++)P=_f(s,Jy),P.stagger=0,x&&(P.yoyoEase=x),H&&Io(P,H),T=w[N],P.duration=+ru(d,ja(f),N,T,w),P.delay=(+ru(_,ja(f),N,T,w)||0)-f._delay,!v&&O===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),C.to(T,P,L?L(N,T,w):0),C._ease=Se.none;C.duration()?d=_=0:f.timeline=0}else if(E){iu(wi(C.vars.defaults,{ease:"none"})),C._ease=ws(E.ease||s.ease||"none");var j=0,Q,ut,ot;if(jn(E))E.forEach(function(B){return C.to(w,B,">")}),C.duration();else{P={};for(I in E)I==="ease"||I==="easeEach"||Jb(I,E[I],P,E.easeEach);for(I in P)for(Q=P[I].sort(function(B,G){return B.t-G.t}),j=0,N=0;N<Q.length;N++)ut=Q[N],ot={ease:ut.e,duration:(ut.t-(N?Q[N-1].t:0))/100*d},ot[I]=ut.v,C.to(w,ot,j),j+=ot.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return y===!0&&!Fm&&(Fr=ja(f),nn.killTweensOf(w),Fr=0),ma(R,ja(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!E&&f._start===en(R._time)&&si(g)&&wb(ja(f))&&R.data!=="nested")&&(f._tTime=-Ye,f.render(Math.max(0,-_)||0)),S&&Ny(ja(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-Ye&&!_?p:s<Ye?0:s,v,y,E,M,S,x,R,w,C;if(!d)Ub(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=en(g%M),g===p?(E=this._repeat,v=d):(S=en(g/M),E=~~S,E&&E===S?(v=d,E--):v>d&&(v=d)),x=this._yoyo&&E&1,x&&(C=this._yEase,v=d-v),S=Ho(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(w&&this._yEase&&Yy(w,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(en(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Ly(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(C||this._ease)(v/d),this._from&&(this.ratio=R=1-R),!f&&g&&!l&&!S&&(Ei(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(R,y.d),y=y._next;w&&w.render(s<0?s:w._dur*w._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&wp(this,s,l,c),Ei(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Ei(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&wp(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&kr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(Ei(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,p){uu||bi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Ym(this,d),_=this._ease(d/this._dur),Kb(this,s,l,c,f,_,d,p)?this.resetTo(s,l,c,f,1):(Af(this,0),this.parent||Dy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?$l(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,Fr&&Fr.vars.overwrite!==!0)._first||$l(this),this.parent&&c!==this.timeline.totalDuration()&&Go(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?qi(s):f,d=this._ptLookup,_=this._pt,g,v,y,E,M,S,x;if((!l||l==="all")&&Rb(f,p))return l==="all"&&(this._pt=0),$l(this);for(g=this._op=this._op||[],l!=="all"&&(wn(l)&&(M={},oi(l,function(R){return M[R]=1}),l=M),l=Qb(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,E=v,y={}):(y=g[x]=g[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Ef(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&$l(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return au(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return au(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return nn.killTweensOf(s,l,c)},t})(cu);wi(Sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(o){Sn[o]=function(){var t=new Qn,n=Up.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var jm=function(t,n,a){return t[n]=a},$y=function(t,n,a){return t[n](a)},$b=function(t,n,a,s){return t[n](s.fp,a)},tE=function(t,n,a){return t.setAttribute(n,a)},Zm=function(t,n){return un(t[n])?$y:Bm(t[n])&&t.setAttribute?tE:jm},tS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},eE=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},eS=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Km=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},nE=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},iE=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Ef(this,n,"_pt"):n.dep||(a=1),n=s;return!a},aE=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},nS=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},li=(function(){function o(n,a,s,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||tS,this.d=p||this,this.set=d||jm,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=aE,this.m=a,this.mt=l,this.tween=s},o})();oi(km+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Vm[o]=1});Ci.TweenMax=Ci.TweenLite=Sn;Ci.TimelineLite=Ci.TimelineMax=Qn;nn=new Qn({sortChildren:!1,defaults:Bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=Wy;var Ds=[],of={},rE=[],lx=0,sE=0,qd=function(t){return(of[t]||rE).map(function(n){return n()})},Pp=function(){var t=Date.now(),n=[];t-lx>2&&(qd("matchMediaInit"),Ds.forEach(function(a){var s=a.queries,l=a.conditions,c,f,p,d;for(f in s)c=da.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),qd("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),lx=t,qd("matchMedia"))},iS=(function(){function o(n,a){this.selector=a&&Np(a),this.data=[],this._r=[],this.isReverted=!1,this.id=sE++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){un(a)&&(l=s,s=a,a=un);var c=this,f=function(){var d=tn,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=Np(l)),tn=c,g=s.apply(c,arguments),un(g)&&c._r.push(g),tn=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===un?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=tn;tn=null,a(this),tn=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof Sn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Qn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Sn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ds.length;c--;)Ds[c].id===this.id&&Ds.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),oE=(function(){function o(n){this.contexts=[],this.scope=n,tn&&tn.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){Ma(a)||(a={matches:a});var c=new iS(0,l||this.scope),f=c.conditions={},p,d,_;tn&&!c.selector&&(c.selector=tn.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=da.matchMedia(a[d]),p&&(Ds.indexOf(c)<0&&Ds.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Pp):p.addEventListener("change",Pp)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),vf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return Vy(s)})},timeline:function(t){return new Qn(t)},getTweensOf:function(t,n){return nn.getTweensOf(t,n)},getProperty:function(t,n,a,s){wn(t)&&(t=qi(t)[0]);var l=Rs(t||{}).get,c=a?wy:Cy;return a==="native"&&(a=""),t&&(n?c((Mi[n]&&Mi[n].get||l)(t,n,a,s)):function(f,p,d){return c((Mi[f]&&Mi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=qi(t),t.length>1){var s=t.map(function(_){return hi.quickSetter(_,n,a)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=Mi[n],f=Rs(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;No._pt=0,g.init(t,a?_+a:_,No,0,[t]),g.render(1,g),No._pt&&Km(1,No)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=hi.to(t,wi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ws(t.ease,Bo.ease)),ix(Bo,t||{})},config:function(t){return ix(Ai,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Mi[f]&&!Ci[f]&&su(n+" effect requires "+f+" plugin.")}),Vd[n]=function(f,p,d){return a(qi(f),wi(p||{},l),d)},c&&(Qn.prototype[n]=function(f,p,d){return this.add(Vd[n](f,Ma(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Se[t]=ws(n)},parseEase:function(t,n){return arguments.length?ws(t,n):Se},getById:function(t){return nn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Qn(t),s,l;for(a.smoothChildTiming=si(t.smoothChildTiming),nn.remove(a),a._dp=0,a._time=a._tTime=nn._time,s=nn._first;s;)l=s._next,(n||!(!s._dur&&s instanceof Sn&&s.vars.onComplete===s._targets[0]))&&ma(a,s,s._start-s._delay),s=l;return ma(nn,a,0),a},context:function(t,n){return t?new iS(t,n):tn},matchMedia:function(t){return new oE(t)},matchMediaRefresh:function(){return Ds.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Pp()},addEventListener:function(t,n){var a=of[t]||(of[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=of[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:Ib,wrapYoyo:Hb,distribute:zy,random:By,snap:Fy,normalize:Bb,getUnit:qn,clamp:Ob,splitColor:ky,toArray:qi,selector:Np,mapRange:Hy,pipe:zb,unitize:Fb,interpolate:Gb,shuffle:Py},install:by,effects:Vd,ticker:bi,updateRoot:Qn.updateRoot,plugins:Mi,globalTimeline:nn,core:{PropTween:li,globals:Ey,Tween:Sn,Timeline:Qn,Animation:cu,getCache:Rs,_removeLinkedListItem:Ef,reverting:function(){return Gn},context:function(t){return t&&tn&&(tn.data.push(t),t._ctx=tn),tn},suppressOverwrites:function(t){return Fm=t}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return vf[o]=Sn[o]});bi.add(Qn.updateRoot);No=vf.to({},{duration:0});var lE=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},uE=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=lE(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},Yd=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,d;if(wn(l)&&(p={},oi(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}uE(f,l)}}}},hi=vf.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Gn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Yd("roundProps",Lp),Yd("modifiers"),Yd("snap",Fy))||vf;Sn.version=Qn.version=hi.version="3.14.2";My=1;Im()&&Vo();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;var ux,Br,Oo,Qm,Es,cx,Jm,cE=function(){return typeof window<"u"},tr={},ys=180/Math.PI,Po=Math.PI/180,_o=Math.atan2,fx=1e8,$m=/([A-Z])/g,fE=/(left|right|width|margin|padding|x)/i,hE=/[\s,\(]\S/,ga={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zp=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},dE=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},pE=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},mE=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},_E=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},aS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},rS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},gE=function(t,n,a){return t.style[n]=a},vE=function(t,n,a){return t.style.setProperty(n,a)},xE=function(t,n,a){return t._gsap[n]=a},yE=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},SE=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},ME=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},an="transform",ui=an+"Origin",bE=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in tr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ga[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Za(s,f)}):this.tfm[t]=c.x?c[t]:Za(s,t),t===ui&&(this.tfm.zOrigin=c.zOrigin);else return ga.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(an)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ui,n,"")),t=an}(l||n)&&this.props.push(t,n,l[t])},sS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},EE=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace($m,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Jm(),(!l||!l.isStart)&&!a[an]&&(sS(a),s.zOrigin&&a[ui]&&(a[ui]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},oS=function(t,n){var a={target:t,props:[],revert:EE,save:bE};return t._gsap||hi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},lS,Fp=function(t,n){var a=Br.createElementNS?Br.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Br.createElement(t);return a&&a.style?a:Br.createElement(t)},Ti=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace($m,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,ko(n)||n,1)||""},hx="O,Moz,ms,Ms,Webkit".split(","),ko=function(t,n,a){var s=n||Es,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(hx[c]+t in l););return c<0?null:(c===3?"ms":c>=0?hx[c]:"")+t},Bp=function(){cE()&&window.document&&(ux=window,Br=ux.document,Oo=Br.documentElement,Es=Fp("div")||{style:{}},Fp("div"),an=ko(an),ui=an+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lS=!!ko("perspective"),Jm=hi.core.reverting,Qm=1)},dx=function(t){var n=t.ownerSVGElement,a=Fp("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),Oo.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),Oo.removeChild(a),l},px=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},uS=function(t){var n,a;try{n=t.getBBox()}catch{n=dx(t),a=1}return n&&(n.width||n.height)||a||(n=dx(t)),n&&!n.width&&!n.x&&!n.y?{x:+px(t,["x","cx","x1"])||0,y:+px(t,["y","cy","y1"])||0,width:0,height:0}:n},cS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&uS(t))},Xr=function(t,n){if(n){var a=t.style,s;n in tr&&n!==ui&&(n=an),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace($m,"-$1").toLowerCase())):a.removeAttribute(n)}},Ir=function(t,n,a,s,l,c){var f=new li(t._pt,n,a,0,1,c?rS:aS);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},mx={deg:1,rad:1,turn:1},TE={grid:1,flex:1},Wr=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=Es.style,p=fE.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||mx[s]||mx[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),x=t.getCTM&&cS(t),(y||c==="%")&&(tr[n]||~n.indexOf("adius")))return E=x?t.getBBox()[p?"width":"height"]:t[_],hn(y?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Br||!M.appendChild)&&(M=Br.body),S=M._gsap,S&&y&&S.width&&p&&S.time===bi.time&&!S.uncache)return hn(l/S.width*g);if(y&&(n==="height"||n==="width")){var R=t.style[n];t.style[n]=g+s,E=t[_],R?t.style[n]=R:Xr(t,n)}else(y||c==="%")&&!TE[Ti(M,"display")]&&(f.position=Ti(t,"position")),M===t&&(f.position="static"),M.appendChild(Es),E=Es[_],M.removeChild(Es),f.position="absolute";return p&&y&&(S=Rs(M),S.time=bi.time,S.width=M[_]),hn(v?E*l/g:E&&l?g/E*l:0)},Za=function(t,n,a,s){var l;return Qm||Bp(),n in ga&&n!=="transform"&&(n=ga[n],~n.indexOf(",")&&(n=n.split(",")[0])),tr[n]&&n!=="transform"?(l=hu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:yf(Ti(t,ui))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=xf[n]&&xf[n](t,n,a)||Ti(t,n)||Ay(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Wr(t,n,l,a)+a:l},AE=function(t,n,a,s){if(!a||a==="none"){var l=ko(n,t,1),c=l&&Ti(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Ti(t,"borderTopColor"))}var f=new li(this._pt,t.style,n,0,1,eS),p=0,d=0,_,g,v,y,E,M,S,x,R,w,C,N;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ti(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Ti(t,n)||s,M?t.style[n]=M:Xr(t,n)),_=[a,s],Wy(_),a=_[0],s=_[1],v=a.match(Uo)||[],N=s.match(Uo)||[],N.length){for(;g=Uo.exec(s);)S=g[0],R=s.substring(p,g.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),S!==(M=v[d++]||"")&&(y=parseFloat(M)||0,C=M.substr((y+"").length),S.charAt(1)==="="&&(S=Lo(y,S)+C),x=parseFloat(S),w=S.substr((x+"").length),p=Uo.lastIndex-w.length,w||(w=w||Ai.units[n]||C,p===s.length&&(s+=w,f.e+=w)),C!==w&&(y=Wr(t,n,M,w)||0),f._pt={_next:f._pt,p:R||d===1?R:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?rS:aS;return Sy.test(s)&&(f.e=0),this._pt=f,f},_x={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RE=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=_x[a]||a,n[1]=_x[s]||s,n.join(" ")},CE=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],tr[f]&&(p=1,f=f==="transformOrigin"?ui:an),Xr(a,f);p&&(Xr(a,an),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",hu(a,1),c.uncache=1,sS(s)))}},xf={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new li(t._pt,n,a,0,0,CE);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},fu=[1,0,0,1,0,0],fS={},hS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},gx=function(t){var n=Ti(t,an);return hS(n)?fu:n.substr(7).match(yy).map(hn)},t0=function(t,n){var a=t._gsap||Rs(t),s=t.style,l=gx(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?fu:l):(l===fu&&!t.offsetParent&&t!==Oo&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Oo.appendChild(t)),l=gx(t),p?s.display=p:Xr(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Oo.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Ip=function(t,n,a,s,l,c){var f=t._gsap,p=l||t0(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=p[0],E=p[1],M=p[2],S=p[3],x=p[4],R=p[5],w=n.split(" "),C=parseFloat(w[0])||0,N=parseFloat(w[1])||0,P,O,I,T;a?p!==fu&&(O=y*S-E*M)&&(I=C*(S/O)+N*(-M/O)+(M*R-S*x)/O,T=C*(-E/O)+N*(y/O)-(y*R-E*x)/O,C=I,N=T):(P=uS(t),C=P.x+(~w[0].indexOf("%")?C/100*P.width:C),N=P.y+(~(w[1]||w[0]).indexOf("%")?N/100*P.height:N)),s||s!==!1&&f.smooth?(x=C-d,R=N-_,f.xOffset=g+(x*y+R*M)-x,f.yOffset=v+(x*E+R*S)-R):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=N,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ui]="0px 0px",c&&(Ir(c,f,"xOrigin",d,C),Ir(c,f,"yOrigin",_,N),Ir(c,f,"xOffset",g,f.xOffset),Ir(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+N)},hu=function(t,n){var a=t._gsap||new Zy(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Ti(t,ui)||"0",_,g,v,y,E,M,S,x,R,w,C,N,P,O,I,T,L,H,j,Q,ut,ot,B,G,$,St,xt,z,et,_t,Et,Lt;return _=g=v=M=S=x=R=w=C=0,y=E=1,a.svg=!!(t.getCTM&&cS(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[an]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[an]!=="none"?p[an]:"")),s.scale=s.rotate=s.translate="none"),O=t0(t,a.svg),a.svg&&(a.uncache?($=t.getBBox(),d=a.xOrigin-$.x+"px "+(a.yOrigin-$.y)+"px",G=""):G=!n&&t.getAttribute("data-svg-origin"),Ip(t,G||d,!!G||a.originIsAbsolute,a.smooth!==!1,O)),N=a.xOrigin||0,P=a.yOrigin||0,O!==fu&&(H=O[0],j=O[1],Q=O[2],ut=O[3],_=ot=O[4],g=B=O[5],O.length===6?(y=Math.sqrt(H*H+j*j),E=Math.sqrt(ut*ut+Q*Q),M=H||j?_o(j,H)*ys:0,R=Q||ut?_o(Q,ut)*ys+M:0,R&&(E*=Math.abs(Math.cos(R*Po))),a.svg&&(_-=N-(N*H+P*Q),g-=P-(N*j+P*ut))):(Lt=O[6],_t=O[7],xt=O[8],z=O[9],et=O[10],Et=O[11],_=O[12],g=O[13],v=O[14],I=_o(Lt,et),S=I*ys,I&&(T=Math.cos(-I),L=Math.sin(-I),G=ot*T+xt*L,$=B*T+z*L,St=Lt*T+et*L,xt=ot*-L+xt*T,z=B*-L+z*T,et=Lt*-L+et*T,Et=_t*-L+Et*T,ot=G,B=$,Lt=St),I=_o(-Q,et),x=I*ys,I&&(T=Math.cos(-I),L=Math.sin(-I),G=H*T-xt*L,$=j*T-z*L,St=Q*T-et*L,Et=ut*L+Et*T,H=G,j=$,Q=St),I=_o(j,H),M=I*ys,I&&(T=Math.cos(I),L=Math.sin(I),G=H*T+j*L,$=ot*T+B*L,j=j*T-H*L,B=B*T-ot*L,H=G,ot=$),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=hn(Math.sqrt(H*H+j*j+Q*Q)),E=hn(Math.sqrt(B*B+Lt*Lt)),I=_o(ot,B),R=Math.abs(I)>2e-4?I*ys:0,C=Et?1/(Et<0?-Et:Et):0),a.svg&&(G=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!hS(Ti(t,an)),G&&t.setAttribute("transform",G))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(y*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=hn(y),a.scaleY=hn(E),a.rotation=hn(M)+f,a.rotationX=hn(S)+f,a.rotationY=hn(x)+f,a.skewX=R+f,a.skewY=w+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ui]=yf(d)),a.xOffset=a.yOffset=0,a.force3D=Ai.force3D,a.renderTransform=a.svg?DE:lS?dS:wE,a.uncache=0,a},yf=function(t){return(t=t.split(" "))[0]+" "+t[1]},jd=function(t,n,a){var s=qn(n);return hn(parseFloat(n)+parseFloat(Wr(t,"x",a+"px",s)))+s},wE=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,dS(t,n)},hs="0deg",Wl="0px",ds=") ",dS=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,x=a.force3D,R=a.target,w=a.zOrigin,C="",N=x==="auto"&&t&&t!==1||x===!0;if(w&&(g!==hs||_!==hs)){var P=parseFloat(_)*Po,O=Math.sin(P),I=Math.cos(P),T;P=parseFloat(g)*Po,T=Math.cos(P),c=jd(R,c,O*T*-w),f=jd(R,f,-Math.sin(P)*-w),p=jd(R,p,I*T*-w+w)}S!==Wl&&(C+="perspective("+S+ds),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(N||c!==Wl||f!==Wl||p!==Wl)&&(C+=p!==Wl||N?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ds),d!==hs&&(C+="rotate("+d+ds),_!==hs&&(C+="rotateY("+_+ds),g!==hs&&(C+="rotateX("+g+ds),(v!==hs||y!==hs)&&(C+="skew("+v+", "+y+ds),(E!==1||M!==1)&&(C+="scale("+E+", "+M+ds),R.style[an]=C||"translate(0, 0)"},DE=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,x=a.yOffset,R=a.forceCSS,w=parseFloat(c),C=parseFloat(f),N,P,O,I,T;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Po,d*=Po,N=Math.cos(p)*g,P=Math.sin(p)*g,O=Math.sin(p-d)*-v,I=Math.cos(p-d)*v,d&&(_*=Po,T=Math.tan(d-_),T=Math.sqrt(1+T*T),O*=T,I*=T,_&&(T=Math.tan(_),T=Math.sqrt(1+T*T),N*=T,P*=T)),N=hn(N),P=hn(P),O=hn(O),I=hn(I)):(N=g,I=v,P=O=0),(w&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(w=Wr(y,"x",c,"px"),C=Wr(y,"y",f,"px")),(E||M||S||x)&&(w=hn(w+E-(E*N+M*O)+S),C=hn(C+M-(E*P+M*I)+x)),(s||l)&&(T=y.getBBox(),w=hn(w+s/100*T.width),C=hn(C+l/100*T.height)),T="matrix("+N+","+P+","+O+","+I+","+w+","+C+")",y.setAttribute("transform",T),R&&(y.style[an]=T)},UE=function(t,n,a,s,l){var c=360,f=wn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?ys:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*fx)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*fx)%c-~~(d/c)*c)),t._pt=v=new li(t._pt,n,a,s,d,dE),v.e=_,v.u="deg",t._props.push(a),v},vx=function(t,n){for(var a in n)t[a]=n[a];return t},NE=function(t,n,a){var s=vx({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,y,E;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[an]=n,f=hu(a,1),Xr(a,an),a.setAttribute("transform",d)):(d=getComputedStyle(a)[an],c[an]=n,f=hu(a,1),c[an]=d);for(p in tr)d=s[p],_=f[p],d!==_&&l.indexOf(p)<0&&(y=qn(d),E=qn(_),g=y!==E?Wr(a,p,d,E):parseFloat(d),v=parseFloat(_),t._pt=new li(t._pt,f,p,g,v-g,zp),t._pt.u=E||0,t._props.push(p));vx(f,s)};oi("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});xf[t>1?"border"+o:o]=function(f,p,d,_,g){var v,y;if(arguments.length<4)return v=c.map(function(E){return Za(f,E,d)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,y,g)}});var pS={name:"css",register:Bp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,y,E,M,S,x,R,w,C,N,P,O,I,T;Qm||Bp(),this.styles=this.styles||oS(t),I=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(Mi[M]&&Ky(M,n,a,s,t,l)))){if(y=typeof _,E=xf[M],y==="function"&&(_=_.call(a,s,t,l),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=lu(_)),E)E(this,t,M,_,a)&&(O=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Vr.lastIndex=0,Vr.test(d)||(S=qn(d),x=qn(_),x?S!==x&&(d=Wr(t,M,d,x)+x):S&&(_+=S)),this.add(f,"setProperty",d,_,s,l,0,0,M),c.push(M),I.push(M,0,f[M]);else if(y!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,s,t,l):p[M],wn(d)&&~d.indexOf("random(")&&(d=lu(d)),qn(d+"")||d==="auto"||(d+=Ai.units[M]||qn(Za(t,M))||""),(d+"").charAt(1)==="="&&(d=Za(t,M))):d=Za(t,M),v=parseFloat(d),R=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),R&&(_=_.substr(2)),g=parseFloat(_),M in ga&&(M==="autoAlpha"&&(v===1&&Za(t,"visibility")==="hidden"&&g&&(v=0),I.push("visibility",0,f.visibility),Ir(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ga[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in tr,w){if(this.styles.save(M),T=_,y==="string"&&_.substring(0,6)==="var(--"){if(_=Ti(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var L=t.style.perspective;t.style.perspective=_,_=Ti(t,"perspective"),L?t.style.perspective=L:Xr(t,"perspective")}g=parseFloat(_)}if(C||(N=t._gsap,N.renderTransform&&!n.parseTransform||hu(t,n.parseTransform),P=n.smoothOrigin!==!1&&N.smooth,C=this._pt=new li(this._pt,f,an,0,1,N.renderTransform,N,0,-1),C.dep=1),M==="scale")this._pt=new li(this._pt,N,"scaleY",N.scaleY,(R?Lo(N.scaleY,R+g):g)-N.scaleY||0,zp),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){I.push(ui,0,f[ui]),_=RE(_),N.svg?Ip(t,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==N.zOrigin&&Ir(this,N,"zOrigin",N.zOrigin,x),Ir(this,f,M,yf(d),yf(_)));continue}else if(M==="svgOrigin"){Ip(t,_,1,P,0,this);continue}else if(M in fS){UE(this,N,M,v,R?Lo(v,R+_):_);continue}else if(M==="smoothOrigin"){Ir(this,N,"smooth",N.smooth,_);continue}else if(M==="force3D"){N[M]=_;continue}else if(M==="transform"){NE(this,_,t);continue}}else M in f||(M=ko(M)||M);if(w||(g||g===0)&&(v||v===0)&&!hE.test(_)&&M in f)S=(d+"").substr((v+"").length),g||(g=0),x=qn(_)||(M in Ai.units?Ai.units[M]:S),S!==x&&(v=Wr(t,M,d,x)),this._pt=new li(this._pt,w?N:f,M,v,(R?Lo(v,R+g):g)-v,!w&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?_E:zp),this._pt.u=x||0,w&&T!==_?(this._pt.b=d,this._pt.e=T,this._pt.r=mE):S!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=pE);else if(M in f)AE.call(this,t,M,d,R?R+_:_);else if(M in t)this.add(t,M,d||t[M],R?R+_:_,s,l);else if(M!=="parseTransform"){Gm(M,_);continue}w||(M in f?I.push(M,0,f[M]):typeof t[M]=="function"?I.push(M,2,t[M]()):I.push(M,1,d||t[M])),c.push(M)}}O&&nS(this)},render:function(t,n){if(n.tween._time||!Jm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Za,aliases:ga,getSetter:function(t,n,a){var s=ga[n];return s&&s.indexOf(",")<0&&(n=s),n in tr&&n!==ui&&(t._gsap.x||Za(t,"x"))?a&&cx===a?n==="scale"?yE:xE:(cx=a||{})&&(n==="scale"?SE:ME):t.style&&!Bm(t.style[n])?gE:~n.indexOf("-")?vE:Zm(t,n)},core:{_removeProperty:Xr,_getMatrix:t0}};hi.utils.checkPrefix=ko;hi.core.getStyleSaver=oS;(function(o,t,n,a){var s=oi(o+","+t+","+n,function(l){tr[l]=1});oi(t,function(l){Ai.units[l]="deg",fS[l]=1}),ga[s[13]]=o+","+t,oi(a,function(l){var c=l.split(":");ga[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ai.units[o]="px"});hi.registerPlugin(pS);var Mn=hi.registerPlugin(pS)||hi;Mn.core.Tween;const Hp=({variant:o="primary",children:t,className:n="",icon:a,...s})=>{const l="rounded-full px-8 py-3 font-medium transition-all duration-300 ease-out flex items-center justify-center gap-2 transform active:scale-95 hover:-translate-y-1",c={primary:"bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 border border-transparent",secondary:"bg-transparent text-dark-grey border border-gray-300 hover:border-gray-800 hover:bg-gray-50"};return q.jsxs("button",{className:`${l} ${c[o]} ${n}`,...s,children:[t,a&&q.jsx("span",{className:"ml-1",children:a})]})},LE=({isHidden:o,onNavigate:t})=>{const[n,a]=Te.useState(!1),s=Te.useRef(null);Te.useEffect(()=>{const c=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),Te.useEffect(()=>{s.current&&Mn.to(s.current,{y:o?-100:0,opacity:o?0:1,duration:.8,ease:"power3.inOut",pointerEvents:o?"none":"all"})},[o]);const l=[{label:"Work",mode:"projects"},{label:"About",mode:"about"}];return q.jsx("nav",{ref:s,className:`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${n?"py-4":"py-8"}`,children:q.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex items-center justify-between",children:[q.jsxs("div",{className:"flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1",onClick:()=>t("home"),children:[q.jsx("div",{className:"w-8 h-8 bg-dark-grey rounded-lg"}),q.jsx("span",{className:"font-bold text-xl tracking-tight text-dark-grey",children:"Hruday's Portfolio"})]}),q.jsx("div",{className:"hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/40 shadow-sm",children:l.map(c=>q.jsx("button",{onClick:()=>t(c.mode),className:"text-sm font-medium text-gray-600 hover:text-dark-grey transition-all duration-300 hover:-translate-y-1 bg-transparent border-none cursor-pointer",children:c.label},c.label))}),q.jsx("div",{className:"flex items-center gap-4",children:q.jsx(Hp,{variant:"secondary",className:"!px-5 !py-2 text-sm hidden sm:flex transition-transform duration-300 hover:-translate-y-1",onClick:()=>t("contact"),children:"Contact"})})]})})};const e0="182",OE=0,xx=1,PE=2,lf=1,zE=2,eu=3,qr=0,ci=1,_a=2,Qa=0,zo=1,yx=2,Sx=3,Mx=4,FE=5,Ms=100,BE=101,IE=102,HE=103,GE=104,VE=200,kE=201,XE=202,WE=203,Gp=204,Vp=205,qE=206,YE=207,jE=208,ZE=209,KE=210,QE=211,JE=212,$E=213,tT=214,kp=0,Xp=1,Wp=2,Xo=3,qp=4,Yp=5,jp=6,Zp=7,mS=0,eT=1,nT=2,ya=0,_S=1,gS=2,vS=3,xS=4,yS=5,SS=6,MS=7,bS=300,Us=301,Wo=302,Kp=303,Qp=304,Rf=306,Jp=1e3,Ka=1001,$p=1002,Hn=1003,iT=1004,Pc=1005,Yn=1006,Zd=1007,Ts=1008,Xi=1009,ES=1010,TS=1011,du=1012,n0=1013,ba=1014,va=1015,er=1016,i0=1017,a0=1018,pu=1020,AS=35902,RS=35899,CS=1021,wS=1022,aa=1023,nr=1026,As=1027,DS=1028,r0=1029,qo=1030,s0=1031,o0=1033,uf=33776,cf=33777,ff=33778,hf=33779,tm=35840,em=35841,nm=35842,im=35843,am=36196,rm=37492,sm=37496,om=37488,lm=37489,um=37490,cm=37491,fm=37808,hm=37809,dm=37810,pm=37811,mm=37812,_m=37813,gm=37814,vm=37815,xm=37816,ym=37817,Sm=37818,Mm=37819,bm=37820,Em=37821,Tm=36492,Am=36494,Rm=36495,Cm=36283,wm=36284,Dm=36285,Um=36286,aT=3200,rT=0,sT=1,zr="",Vi="srgb",Yo="srgb-linear",Sf="linear",Ge="srgb",go=7680,bx=519,oT=512,lT=513,uT=514,l0=515,cT=516,fT=517,u0=518,hT=519,Ex=35044,Tx="300 es",xa=2e3,Mf=2001;function US(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dT(){const o=bf("canvas");return o.style.display="block",o}const Ax={};function Rx(...o){const t="THREE."+o.shift();console.log(t,...o)}function re(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ce(...o){const t="THREE."+o.shift();console.error(t,...o)}function mu(...o){const t=o.join(" ");t in Ax||(Ax[t]=!0,re(...o))}function pT(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class Zo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=Math.PI/180,Nm=180/Math.PI;function vu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Xn[o&255]+Xn[o>>8&255]+Xn[o>>16&255]+Xn[o>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function mT(o,t){return(o%t+t)%t}function Qd(o,t,n){return(1-n)*o+n*t}function ql(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ri(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(t=0,n=0){Le.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3],v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(g!==M||p!==v||d!==y||_!==E){let S=p*v+d*y+_*E+g*M;S<0&&(v=-v,y=-y,E=-E,M=-M,S=-S);let x=1-f;if(S<.9995){const R=Math.acos(S),w=Math.sin(R);x=Math.sin(x*R)/w,f=Math.sin(f*R)/w,p=p*x+v*f,d=d*x+y*f,_=_*x+E*f,g=g*x+M*f}else{p=p*x+v*f,d=d*x+y*f,_=_*x+E*f,g=g*x+M*f;const R=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=R,d*=R,_*=R,g*=R}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+_*g+p*y-d*v,t[n+1]=p*E+_*v+d*g-f*y,t[n+2]=d*E+_*y+f*v-p*g,t[n+3]=_*E-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(l/2),v=p(a/2),y=p(s/2),E=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g+v*y*E;break;case"YZX":this._x=v*_*g+d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g-v*y*E;break;case"XZY":this._x=v*_*g-d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g+v*y*E;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-l*p,this._y=s*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,s=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,n=0,a=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Cx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Cx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=s+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Jd.copy(this).projectOnVector(t),this.sub(Jd)}reflect(t){return this.sub(Jd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jd=new it,Cx=new xu;class ce{constructor(t,n,a,s,l,c,f,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d)}set(t,n,a,s,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],M=s[0],S=s[3],x=s[6],R=s[1],w=s[4],C=s[7],N=s[2],P=s[5],O=s[8];return l[0]=c*M+f*R+p*N,l[3]=c*S+f*w+p*P,l[6]=c*x+f*C+p*O,l[1]=d*M+_*R+g*N,l[4]=d*S+_*w+g*P,l[7]=d*x+_*C+g*O,l[2]=v*M+y*R+E*N,l[5]=v*S+y*w+E*P,l[8]=v*x+y*C+E*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+s*l*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,y=d*l-c*p,E=n*g+a*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(s*d-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*p)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply($d.makeScale(t,n)),this}rotate(t){return this.premultiply($d.makeRotation(-t)),this}translate(t,n){return this.premultiply($d.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new ce,wx=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dx=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _T(){const o={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ge&&(s.r=Ja(s.r),s.g=Ja(s.g),s.b=Ja(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ge&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zr?Sf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Yo]:{primaries:t,whitePoint:a,transfer:Sf,toXYZ:wx,fromXYZ:Dx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:wx,fromXYZ:Dx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),o}const Ee=_T();function Ja(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vo;class gT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{vo===void 0&&(vo=bf("canvas")),vo.width=t.width,vo.height=t.height;const s=vo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=vo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ja(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ja(n[a]/255)*255):n[a]=Ja(n[a]);return{data:n,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vT=0;class c0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=vu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(tp(s[c].image)):l.push(tp(s[c]))}else l=tp(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function tp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?gT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let xT=0;const ep=new it;class Jn extends Zo{constructor(t=Jn.DEFAULT_IMAGE,n=Jn.DEFAULT_MAPPING,a=Ka,s=Ka,l=Yn,c=Ts,f=aa,p=Xi,d=Jn.DEFAULT_ANISOTROPY,_=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=vu(),this.name="",this.source=new c0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ep).x}get height(){return this.source.getSize(ep).y}get depth(){return this.source.getSize(ep).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){re(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jp:t.x=t.x-Math.floor(t.x);break;case Ka:t.x=t.x<0?0:1;break;case $p:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jp:t.y=t.y-Math.floor(t.y);break;case Ka:t.y=t.y<0?0:1;break;case $p:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=bS;Jn.DEFAULT_ANISOTROPY=1;class dn{constructor(t=0,n=0,a=0,s=1){dn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],y=p[5],E=p[9],M=p[2],S=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,C=(y+1)/2,N=(x+1)/2,P=(_+v)/4,O=(g+M)/4,I=(E+S)/4;return w>C&&w>N?w<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(w),s=P/a,l=O/a):C>N?C<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),a=P/s,l=I/s):N<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(N),a=O/l,s=I/l),this.set(a,s,l,n),this}let R=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(g-M)/R,this.z=(v-_)/R,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yT extends Zo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,t,n),this.scissorTest=!1,this.viewport=new dn(0,0,t,n);const s={width:t,height:n,depth:a.depth},l=new Jn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new c0(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sa extends yT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class NS extends Jn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ST extends Jn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yu{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ta.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ta.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ta.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ta):ta.fromBufferAttribute(l,c),ta.applyMatrix4(t.matrixWorld),this.expandByPoint(ta);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zc.copy(a.boundingBox)),zc.applyMatrix4(t.matrixWorld),this.union(zc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ta),ta.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yl),Fc.subVectors(this.max,Yl),xo.subVectors(t.a,Yl),yo.subVectors(t.b,Yl),So.subVectors(t.c,Yl),Dr.subVectors(yo,xo),Ur.subVectors(So,yo),ps.subVectors(xo,So);let n=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-ps.z,ps.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,ps.z,0,-ps.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-ps.y,ps.x,0];return!np(n,xo,yo,So,Fc)||(n=[1,0,0,0,1,0,0,0,1],!np(n,xo,yo,So,Fc))?!1:(Bc.crossVectors(Dr,Ur),n=[Bc.x,Bc.y,Bc.z],np(n,xo,yo,So,Fc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ta).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ta).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ka=[new it,new it,new it,new it,new it,new it,new it,new it],ta=new it,zc=new yu,xo=new it,yo=new it,So=new it,Dr=new it,Ur=new it,ps=new it,Yl=new it,Fc=new it,Bc=new it,ms=new it;function np(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){ms.fromArray(o,l);const f=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),p=t.dot(ms),d=n.dot(ms),_=a.dot(ms);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const MT=new yu,jl=new it,ip=new it;class Cf{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):MT.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jl.subVectors(t,this.center);const n=jl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(jl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ip.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jl.copy(t.center).add(ip)),this.expandByPoint(jl.copy(t.center).sub(ip))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xa=new it,ap=new it,Ic=new it,Nr=new it,rp=new it,Hc=new it,sp=new it;class LS{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Xa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Xa.copy(this.origin).addScaledVector(this.direction,n),Xa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){ap.copy(t).add(n).multiplyScalar(.5),Ic.copy(n).sub(t).normalize(),Nr.copy(this.origin).sub(ap);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Ic),f=Nr.dot(this.direction),p=-Nr.dot(Ic),d=Nr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,E;if(_>0)if(g=c*p-f,v=c*f-p,E=l*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ap).addScaledVector(Ic,v),y}intersectSphere(t,n){Xa.subVectors(t.center,this.origin);const a=Xa.dot(this.direction),s=Xa.dot(Xa)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Xa)!==null}intersectTriangle(t,n,a,s,l){rp.subVectors(n,t),Hc.subVectors(a,t),sp.crossVectors(rp,Hc);let c=this.direction.dot(sp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Nr.subVectors(this.origin,t);const p=f*this.direction.dot(Hc.crossVectors(Nr,Hc));if(p<0)return null;const d=f*this.direction.dot(rp.cross(Nr));if(d<0||p+d>c)return null;const _=-f*Nr.dot(sp);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S)}set(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),l=1/Mo.setFromMatrixColumn(t,1).length(),c=1/Mo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=y+E*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=E+y*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,E=d*_,M=d*g;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,E=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=E*d-y,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=E*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=y*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bT,t,ET)}lookAt(t,n,a){const s=this.elements;return yi.subVectors(t,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),Lr.crossVectors(a,yi),Lr.lengthSq()===0&&(Math.abs(a.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),Lr.crossVectors(a,yi)),Lr.normalize(),Gc.crossVectors(yi,Lr),s[0]=Lr.x,s[4]=Gc.x,s[8]=yi.x,s[1]=Lr.y,s[5]=Gc.y,s[9]=yi.y,s[2]=Lr.z,s[6]=Gc.z,s[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],M=a[6],S=a[10],x=a[14],R=a[3],w=a[7],C=a[11],N=a[15],P=s[0],O=s[4],I=s[8],T=s[12],L=s[1],H=s[5],j=s[9],Q=s[13],ut=s[2],ot=s[6],B=s[10],G=s[14],$=s[3],St=s[7],xt=s[11],z=s[15];return l[0]=c*P+f*L+p*ut+d*$,l[4]=c*O+f*H+p*ot+d*St,l[8]=c*I+f*j+p*B+d*xt,l[12]=c*T+f*Q+p*G+d*z,l[1]=_*P+g*L+v*ut+y*$,l[5]=_*O+g*H+v*ot+y*St,l[9]=_*I+g*j+v*B+y*xt,l[13]=_*T+g*Q+v*G+y*z,l[2]=E*P+M*L+S*ut+x*$,l[6]=E*O+M*H+S*ot+x*St,l[10]=E*I+M*j+S*B+x*xt,l[14]=E*T+M*Q+S*G+x*z,l[3]=R*P+w*L+C*ut+N*$,l[7]=R*O+w*H+C*ot+N*St,l[11]=R*I+w*j+C*B+N*xt,l[15]=R*T+w*Q+C*G+N*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15],R=p*y-d*v,w=f*y-d*g,C=f*v-p*g,N=c*y-d*_,P=c*v-p*_,O=c*g-f*_;return n*(M*R-S*w+x*C)-a*(E*R-S*N+x*P)+s*(E*w-M*N+x*O)-l*(E*C-M*P+S*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],R=g*S*d-M*v*d+M*p*y-f*S*y-g*p*x+f*v*x,w=E*v*d-_*S*d-E*p*y+c*S*y+_*p*x-c*v*x,C=_*M*d-E*g*d+E*f*y-c*M*y-_*f*x+c*g*x,N=E*g*p-_*M*p-E*f*v+c*M*v+_*f*S-c*g*S,P=n*R+a*w+s*C+l*N;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return t[0]=R*O,t[1]=(M*v*l-g*S*l-M*s*y+a*S*y+g*s*x-a*v*x)*O,t[2]=(f*S*l-M*p*l+M*s*d-a*S*d-f*s*x+a*p*x)*O,t[3]=(g*p*l-f*v*l-g*s*d+a*v*d+f*s*y-a*p*y)*O,t[4]=w*O,t[5]=(_*S*l-E*v*l+E*s*y-n*S*y-_*s*x+n*v*x)*O,t[6]=(E*p*l-c*S*l-E*s*d+n*S*d+c*s*x-n*p*x)*O,t[7]=(c*v*l-_*p*l+_*s*d-n*v*d-c*s*y+n*p*y)*O,t[8]=C*O,t[9]=(E*g*l-_*M*l-E*a*y+n*M*y+_*a*x-n*g*x)*O,t[10]=(c*M*l-E*f*l+E*a*d-n*M*d-c*a*x+n*f*x)*O,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*y-n*f*y)*O,t[12]=N*O,t[13]=(_*M*s-E*g*s+E*a*v-n*M*v-_*a*S+n*g*S)*O,t[14]=(E*f*s-c*M*s-E*a*p+n*M*p+c*a*S-n*f*S)*O,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*O,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,y=l*_,E=l*g,M=c*_,S=c*g,x=f*g,R=p*d,w=p*_,C=p*g,N=a.x,P=a.y,O=a.z;return s[0]=(1-(M+x))*N,s[1]=(y+C)*N,s[2]=(E-w)*N,s[3]=0,s[4]=(y-C)*P,s[5]=(1-(v+x))*P,s[6]=(S+R)*P,s[7]=0,s[8]=(E+w)*O,s[9]=(S-R)*O,s[10]=(1-(v+M))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let l=Mo.set(s[0],s[1],s[2]).length();const c=Mo.set(s[4],s[5],s[6]).length(),f=Mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),ea.copy(this);const d=1/l,_=1/c,g=1/f;return ea.elements[0]*=d,ea.elements[1]*=d,ea.elements[2]*=d,ea.elements[4]*=_,ea.elements[5]*=_,ea.elements[6]*=_,ea.elements[8]*=g,ea.elements[9]*=g,ea.elements[10]*=g,n.setFromRotationMatrix(ea),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=xa,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-s),v=(n+t)/(n-t),y=(a+s)/(a-s);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===xa)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Mf)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=xa,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),y=-(a+s)/(a-s);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===xa)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===Mf)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Mo=new it,ea=new pn,bT=new it(0,0,0),ET=new it(1,1,1),Lr=new it,Gc=new it,yi=new it,Ux=new pn,Nx=new xu;class ir{constructor(t=0,n=0,a=0,s=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Ux.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ux,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class OS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let TT=0;const Lx=new it,bo=new xu,Wa=new pn,Vc=new it,Zl=new it,AT=new it,RT=new xu,Ox=new it(1,0,0),Px=new it(0,1,0),zx=new it(0,0,1),Fx={type:"added"},CT={type:"removed"},Eo={type:"childadded",child:null},op={type:"childremoved",child:null};class fi extends Zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=vu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fi.DEFAULT_UP.clone();const t=new it,n=new ir,a=new xu,s=new it(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pn},normalMatrix:{value:new ce}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(Ox,t)}rotateY(t){return this.rotateOnAxis(Px,t)}rotateZ(t){return this.rotateOnAxis(zx,t)}translateOnAxis(t,n){return Lx.copy(t).applyQuaternion(this.quaternion),this.position.add(Lx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ox,t)}translateY(t){return this.translateOnAxis(Px,t)}translateZ(t){return this.translateOnAxis(zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Vc.copy(t):Vc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Zl,Vc,this.up):Wa.lookAt(Vc,Zl,this.up),this.quaternion.setFromRotationMatrix(Wa),s&&(Wa.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(Wa),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fx),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(CT),op.child=t,this.dispatchEvent(op),op.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fx),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,t,AT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,RT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}fi.DEFAULT_UP=new it(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const na=new it,qa=new it,lp=new it,Ya=new it,To=new it,Ao=new it,Bx=new it,up=new it,cp=new it,fp=new it,hp=new dn,dp=new dn,pp=new dn;class ia{constructor(t=new it,n=new it,a=new it){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),na.subVectors(t,n),s.cross(na);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){na.subVectors(s,n),qa.subVectors(a,n),lp.subVectors(t,n);const c=na.dot(na),f=na.dot(qa),p=na.dot(lp),d=qa.dot(qa),_=qa.dot(lp),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(d*p-f*_)*v,E=(c*_-f*p)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(t,n,a,s,l,c,f,p){return this.getBarycoord(t,n,a,s,Ya)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ya.x),p.addScaledVector(c,Ya.y),p.addScaledVector(f,Ya.z),p)}static getInterpolatedAttribute(t,n,a,s,l,c){return hp.setScalar(0),dp.setScalar(0),pp.setScalar(0),hp.fromBufferAttribute(t,n),dp.fromBufferAttribute(t,a),pp.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(hp,l.x),c.addScaledVector(dp,l.y),c.addScaledVector(pp,l.z),c}static isFrontFacing(t,n,a,s){return na.subVectors(a,n),qa.subVectors(t,n),na.cross(qa).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return na.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),na.cross(qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ia.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ia.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return ia.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return ia.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ia.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;To.subVectors(s,a),Ao.subVectors(l,a),up.subVectors(t,a);const p=To.dot(up),d=Ao.dot(up);if(p<=0&&d<=0)return n.copy(a);cp.subVectors(t,s);const _=To.dot(cp),g=Ao.dot(cp);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(To,c);fp.subVectors(t,l);const y=To.dot(fp),E=Ao.dot(fp);if(E>=0&&y<=E)return n.copy(l);const M=y*d-p*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(Ao,f);const S=_*E-y*g;if(S<=0&&g-_>=0&&y-E>=0)return Bx.subVectors(l,s),f=(g-_)/(g-_+(y-E)),n.copy(s).addScaledVector(Bx,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(To,c).addScaledVector(Ao,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const PS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},kc={h:0,s:0,l:0};function mp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class ze{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ee.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ee.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ee.workingColorSpace){if(t=mT(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=mp(c,l,t+1/3),this.g=mp(c,l,t),this.b=mp(c,l,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,n=Vi){function a(l){l!==void 0&&parseFloat(l)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Vi){const a=PS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vi){return Ee.workingToColorSpace(Wn.copy(this),t),Math.round(ye(Wn.r*255,0,255))*65536+Math.round(ye(Wn.g*255,0,255))*256+Math.round(ye(Wn.b*255,0,255))}getHexString(t=Vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ee.workingColorSpace){Ee.workingToColorSpace(Wn.copy(this),n);const a=Wn.r,s=Wn.g,l=Wn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-l)/g+(s<l?6:0);break;case s:p=(l-a)/g+2;break;case l:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ee.workingColorSpace){return Ee.workingToColorSpace(Wn.copy(this),n),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Vi){Ee.workingToColorSpace(Wn.copy(this),t);const n=Wn.r,a=Wn.g,s=Wn.b;return t!==Vi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Or),this.setHSL(Or.h+t,Or.s+n,Or.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Or),t.getHSL(kc);const a=Qd(Or.h,kc.h,n),s=Qd(Or.s,kc.s,n),l=Qd(Or.l,kc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new ze;ze.NAMES=PS;let wT=0;class Su extends Zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=vu(),this.name="",this.type="Material",this.blending=zo,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gp,this.blendDst=Vp,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){re(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(a.blending=this.blending),this.side!==qr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Gp&&(a.blendSrc=this.blendSrc),this.blendDst!==Vp&&(a.blendDst=this.blendDst),this.blendEquation!==Ms&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(a.stencilFail=this.stencilFail),this.stencilZFail!==go&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zS extends Su{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=mS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new it,Xc=new Le;let DT=0;class ra{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Ex,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Xc.fromBufferAttribute(this,n),Xc.applyMatrix3(t),this.setXY(n,Xc.x,Xc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix3(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyMatrix4(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.applyNormalMatrix(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)yn.fromBufferAttribute(this,n),yn.transformDirection(t),this.setXYZ(n,yn.x,yn.y,yn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ql(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ri(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ql(n,this.array)),n}setX(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ql(n,this.array)),n}setY(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ql(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ql(n,this.array)),n}setW(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array),s=ri(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array),s=ri(s,this.array),l=ri(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ex&&(t.usage=this.usage),t}}class FS extends ra{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class BS extends ra{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ri extends ra{constructor(t,n,a){super(new Float32Array(t),n,a)}}let UT=0;const Hi=new pn,_p=new fi,Ro=new it,Si=new yu,Kl=new yu,Cn=new it;class Yi extends Zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=vu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(US(t)?BS:FS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,a){return Hi.makeTranslation(t,n,a),this.applyMatrix4(Hi),this}scale(t,n,a){return Hi.makeScale(t,n,a),this.applyMatrix4(Hi),this}lookAt(t){return _p.lookAt(t),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ri(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Kl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(Si.min,Kl.min),Si.expandByPoint(Cn),Cn.addVectors(Si.max,Kl.max),Si.expandByPoint(Cn)):(Si.expandByPoint(Kl.min),Si.expandByPoint(Kl.max))}Si.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Cn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Cn.fromBufferAttribute(f,d),p&&(Ro.fromBufferAttribute(t,d),Cn.add(Ro)),s=Math.max(s,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let I=0;I<a.count;I++)f[I]=new it,p[I]=new it;const d=new it,_=new it,g=new it,v=new Le,y=new Le,E=new Le,M=new it,S=new it;function x(I,T,L){d.fromBufferAttribute(a,I),_.fromBufferAttribute(a,T),g.fromBufferAttribute(a,L),v.fromBufferAttribute(l,I),y.fromBufferAttribute(l,T),E.fromBufferAttribute(l,L),_.sub(d),g.sub(d),y.sub(v),E.sub(v);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(H),f[I].add(M),f[T].add(M),f[L].add(M),p[I].add(S),p[T].add(S),p[L].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let I=0,T=R.length;I<T;++I){const L=R[I],H=L.start,j=L.count;for(let Q=H,ut=H+j;Q<ut;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new it,C=new it,N=new it,P=new it;function O(I){N.fromBufferAttribute(s,I),P.copy(N);const T=f[I];w.copy(T),w.sub(N.multiplyScalar(N.dot(T))).normalize(),C.crossVectors(P,T);const H=C.dot(p[I])<0?-1:1;c.setXYZW(I,w.x,w.y,w.z,H)}for(let I=0,T=R.length;I<T;++I){const L=R[I],H=L.start,j=L.count;for(let Q=H,ut=H+j;Q<ut;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ra(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new it,l=new it,c=new it,f=new it,p=new it,d=new it,_=new it,g=new it;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let y=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?y=p[M]*f.data.stride+f.offset:y=p[M]*_;for(let x=0;x<_;x++)v[E++]=d[y++]}return new ra(v,_,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];_.push(y.toJSON(t.data))}_.length>0&&(s[p]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ix=new pn,_s=new LS,Wc=new Cf,Hx=new it,qc=new it,Yc=new it,jc=new it,gp=new it,Zc=new it,Gx=new it,Kc=new it;class Ea extends fi{constructor(t=new Yi,n=new zS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Zc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(gp.fromBufferAttribute(g,t),c?Zc.addScaledVector(gp,_):Zc.addScaledVector(gp.sub(n),_))}n.add(Zc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(l),_s.copy(t.ray).recast(t.near),!(Wc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Wc,Hx)===null||_s.origin.distanceToSquared(Hx)>(t.far-t.near)**2))&&(Ix.copy(l).invert(),_s.copy(t.ray).applyMatrix4(Ix),!(a.boundingBox!==null&&_s.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,_s)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,N=w;C<N;C+=3){const P=f.getX(C),O=f.getX(C+1),I=f.getX(C+2);s=Qc(this,x,t,a,d,_,g,P,O,I),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=f.getX(S),w=f.getX(S+1),C=f.getX(S+2);s=Qc(this,c,t,a,d,_,g,R,w,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],R=Math.max(S.start,y.start),w=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,N=w;C<N;C+=3){const P=C,O=C+1,I=C+2;s=Qc(this,x,t,a,d,_,g,P,O,I),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const R=S,w=S+1,C=S+2;s=Qc(this,c,t,a,d,_,g,R,w,C),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function NT(o,t,n,a,s,l,c,f){let p;if(t.side===ci?p=a.intersectTriangle(c,l,s,!0,f):p=a.intersectTriangle(s,l,c,t.side===qr,f),p===null)return null;Kc.copy(f),Kc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Kc);return d<n.near||d>n.far?null:{distance:d,point:Kc.clone(),object:o}}function Qc(o,t,n,a,s,l,c,f,p,d){o.getVertexPosition(f,qc),o.getVertexPosition(p,Yc),o.getVertexPosition(d,jc);const _=NT(o,t,n,a,qc,Yc,jc,Gx);if(_){const g=new it;ia.getBarycoord(Gx,qc,Yc,jc,g),s&&(_.uv=ia.getInterpolatedAttribute(s,f,p,d,g,new Le)),l&&(_.uv1=ia.getInterpolatedAttribute(l,f,p,d,g,new Le)),c&&(_.normal=ia.getInterpolatedAttribute(c,f,p,d,g,new it),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new it,materialIndex:0};ia.getNormal(qc,Yc,jc,v.normal),_.face=v,_.barycoord=g}return _}class Mu extends Yi{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,c,l,0),E("z","y","x",1,-1,a,n,-t,c,l,1),E("x","z","y",1,1,t,a,n,s,c,2),E("x","z","y",1,-1,t,a,-n,s,c,3),E("x","y","z",1,-1,t,n,a,s,l,4),E("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new Ri(d,3)),this.setAttribute("normal",new Ri(_,3)),this.setAttribute("uv",new Ri(g,2));function E(M,S,x,R,w,C,N,P,O,I,T){const L=C/O,H=N/I,j=C/2,Q=N/2,ut=P/2,ot=O+1,B=I+1;let G=0,$=0;const St=new it;for(let xt=0;xt<B;xt++){const z=xt*H-Q;for(let et=0;et<ot;et++){const _t=et*L-j;St[M]=_t*R,St[S]=z*w,St[x]=ut,d.push(St.x,St.y,St.z),St[M]=0,St[S]=0,St[x]=P>0?1:-1,_.push(St.x,St.y,St.z),g.push(et/O),g.push(1-xt/I),G+=1}}for(let xt=0;xt<I;xt++)for(let z=0;z<O;z++){const et=v+z+ot*xt,_t=v+z+ot*(xt+1),Et=v+(z+1)+ot*(xt+1),Lt=v+(z+1)+ot*xt;p.push(et,_t,Lt),p.push(_t,Et,Lt),$+=6}f.addGroup(y,$,T),y+=$,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Kn(o){const t={};for(let n=0;n<o.length;n++){const a=jo(o[n]);for(const s in a)t[s]=a[s]}return t}function LT(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function IS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const OT={clone:jo,merge:Kn};var PT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sa extends Su{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PT,this.fragmentShader=zT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jo(t.uniforms),this.uniformsGroups=LT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class HS extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new it,Vx=new Le,kx=new Le;class ki extends HS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Nm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nm*2*Math.atan(Math.tan(Kd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Pr.x,Pr.y).multiplyScalar(-t/Pr.z)}getViewSize(t,n){return this.getViewBounds(t,Vx,kx),n.subVectors(kx,Vx)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Kd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Co=-90,wo=1;class FT extends fi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ki(Co,wo,t,n);s.layers=this.layers,this.add(s);const l=new ki(Co,wo,t,n);l.layers=this.layers,this.add(l);const c=new ki(Co,wo,t,n);c.layers=this.layers,this.add(c);const f=new ki(Co,wo,t,n);f.layers=this.layers,this.add(f);const p=new ki(Co,wo,t,n);p.layers=this.layers,this.add(p);const d=new ki(Co,wo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===xa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Mf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class GS extends Jn{constructor(t=[],n=Us,a,s,l,c,f,p,d,_){super(t,n,a,s,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class VS extends Sa{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new GS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mu(5,5,5),l=new sa({name:"CubemapFromEquirect",uniforms:jo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ci,blending:Qa});l.uniforms.tEquirect.value=n;const c=new Ea(s,l),f=n.minFilter;return n.minFilter===Ts&&(n.minFilter=Yn),new FT(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Jc extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class vp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Jc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class IT extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class HT extends Jn{constructor(t=null,n=1,a=1,s,l,c,f,p,d=Hn,_=Hn,g,v){super(null,c,f,p,d,_,s,l,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new it,GT=new it,VT=new ce;class Ss{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=xp.subVectors(a,n).cross(GT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(xp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||VT.getNormalMatrix(t),s=this.coplanarPoint(xp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Cf,kT=new Le(.5,.5),$c=new it;class kS{constructor(t=new Ss,n=new Ss,a=new Ss,s=new Ss,l=new Ss,c=new Ss){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=xa,a=!1){const s=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],y=l[7],E=l[8],M=l[9],S=l[10],x=l[11],R=l[12],w=l[13],C=l[14],N=l[15];if(s[0].setComponents(d-c,y-_,x-E,N-R).normalize(),s[1].setComponents(d+c,y+_,x+E,N+R).normalize(),s[2].setComponents(d+f,y+g,x+M,N+w).normalize(),s[3].setComponents(d-f,y-g,x-M,N-w).normalize(),a)s[4].setComponents(p,v,S,C).normalize(),s[5].setComponents(d-p,y-v,x-S,N-C).normalize();else if(s[4].setComponents(d-p,y-v,x-S,N-C).normalize(),n===xa)s[5].setComponents(d+p,y+v,x+S,N+C).normalize();else if(n===Mf)s[5].setComponents(p,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const n=kT.distanceTo(t.center);return gs.radius=.7071067811865476+n,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if($c.x=s.normal.x>0?t.max.x:t.min.x,$c.y=s.normal.y>0?t.max.y:t.min.y,$c.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($c)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XS extends Su{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xx=new pn,Lm=new LS,tf=new Cf,ef=new it;class XT extends fi{constructor(t=new Yi,n=new XS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),tf.copy(a.boundingSphere),tf.applyMatrix4(s),tf.radius+=l,t.ray.intersectsSphere(tf)===!1)return;Xx.copy(s).invert(),Lm.copy(t.ray).applyMatrix4(Xx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=v,M=y;E<M;E++){const S=d.getX(E);ef.fromBufferAttribute(g,S),Wx(ef,S,p,s,t,n,this)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let E=v,M=y;E<M;E++)ef.fromBufferAttribute(g,E),Wx(ef,E,p,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wx(o,t,n,a,s,l,c){const f=Lm.distanceSqToPoint(o);if(f<n){const p=new it;Lm.closestPointToPoint(o,p),p.applyMatrix4(a);const d=s.ray.origin.distanceTo(p);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class _u extends Jn{constructor(t,n,a=ba,s,l,c,f=Hn,p=Hn,d,_=nr,g=1){if(_!==nr&&_!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new c0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class WT extends _u{constructor(t,n=ba,a=Us,s,l,c=Hn,f=Hn,p,d=nr){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,s,l,c,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class WS extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class f0 extends Yi{constructor(t=[],n=[],a=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:s};const l=[],c=[];f(s),d(a),_(),this.setAttribute("position",new Ri(l,3)),this.setAttribute("normal",new Ri(l.slice(),3)),this.setAttribute("uv",new Ri(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const w=new it,C=new it,N=new it;for(let P=0;P<n.length;P+=3)y(n[P+0],w),y(n[P+1],C),y(n[P+2],N),p(w,C,N,R)}function p(R,w,C,N){const P=N+1,O=[];for(let I=0;I<=P;I++){O[I]=[];const T=R.clone().lerp(C,I/P),L=w.clone().lerp(C,I/P),H=P-I;for(let j=0;j<=H;j++)j===0&&I===P?O[I][j]=T:O[I][j]=T.clone().lerp(L,j/H)}for(let I=0;I<P;I++)for(let T=0;T<2*(P-I)-1;T++){const L=Math.floor(T/2);T%2===0?(v(O[I][L+1]),v(O[I+1][L]),v(O[I][L])):(v(O[I][L+1]),v(O[I+1][L+1]),v(O[I+1][L]))}}function d(R){const w=new it;for(let C=0;C<l.length;C+=3)w.x=l[C+0],w.y=l[C+1],w.z=l[C+2],w.normalize().multiplyScalar(R),l[C+0]=w.x,l[C+1]=w.y,l[C+2]=w.z}function _(){const R=new it;for(let w=0;w<l.length;w+=3){R.x=l[w+0],R.y=l[w+1],R.z=l[w+2];const C=S(R)/2/Math.PI+.5,N=x(R)/Math.PI+.5;c.push(C,1-N)}E(),g()}function g(){for(let R=0;R<c.length;R+=6){const w=c[R+0],C=c[R+2],N=c[R+4],P=Math.max(w,C,N),O=Math.min(w,C,N);P>.9&&O<.1&&(w<.2&&(c[R+0]+=1),C<.2&&(c[R+2]+=1),N<.2&&(c[R+4]+=1))}}function v(R){l.push(R.x,R.y,R.z)}function y(R,w){const C=R*3;w.x=t[C+0],w.y=t[C+1],w.z=t[C+2]}function E(){const R=new it,w=new it,C=new it,N=new it,P=new Le,O=new Le,I=new Le;for(let T=0,L=0;T<l.length;T+=9,L+=6){R.set(l[T+0],l[T+1],l[T+2]),w.set(l[T+3],l[T+4],l[T+5]),C.set(l[T+6],l[T+7],l[T+8]),P.set(c[L+0],c[L+1]),O.set(c[L+2],c[L+3]),I.set(c[L+4],c[L+5]),N.copy(R).add(w).add(C).divideScalar(3);const H=S(N);M(P,L+0,R,H),M(O,L+2,w,H),M(I,L+4,C,H)}}function M(R,w,C,N){N<0&&R.x===1&&(c[w]=R.x-1),C.x===0&&C.z===0&&(c[w]=N/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new f0(t.vertices,t.indices,t.radius,t.detail)}}class h0 extends f0{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,s=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,l,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new h0(t.radius,t.detail)}}class wf extends Yi{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,y=[],E=[],M=[],S=[];for(let x=0;x<_;x++){const R=x*v-c;for(let w=0;w<d;w++){const C=w*g-l;E.push(C,-R,0),M.push(0,0,1),S.push(w/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let R=0;R<f;R++){const w=R+d*x,C=R+d*(x+1),N=R+1+d*(x+1),P=R+1+d*x;y.push(w,C,P),y.push(C,N,P)}this.setIndex(y),this.setAttribute("position",new Ri(E,3)),this.setAttribute("normal",new Ri(M,3)),this.setAttribute("uv",new Ri(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wf(t.width,t.height,t.widthSegments,t.heightSegments)}}class qT extends sa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YT extends Su{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jT extends Su{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qS extends HS{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ZT extends ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class KT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function qx(o,t,n,a){const s=QT(a);switch(n){case CS:return o*t;case DS:return o*t/s.components*s.byteLength;case r0:return o*t/s.components*s.byteLength;case qo:return o*t*2/s.components*s.byteLength;case s0:return o*t*2/s.components*s.byteLength;case wS:return o*t*3/s.components*s.byteLength;case aa:return o*t*4/s.components*s.byteLength;case o0:return o*t*4/s.components*s.byteLength;case uf:case cf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case em:case im:return Math.max(o,16)*Math.max(t,8)/4;case tm:case nm:return Math.max(o,8)*Math.max(t,8)/2;case am:case rm:case om:case lm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sm:case um:case cm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case hm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case pm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case mm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case _m:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ym:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case bm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Em:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Tm:case Am:case Rm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Cm:case wm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Dm:case Um:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QT(o){switch(o){case Xi:case ES:return{byteLength:1,components:1};case du:case TS:case er:return{byteLength:2,components:1};case i0:case a0:return{byteLength:2,components:4};case ba:case n0:case va:return{byteLength:4,components:1};case AS:case RS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e0}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e0);function YS(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function JT(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:c}}var $T=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tA=`#ifdef USE_ALPHAHASH
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
#endif`,eA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rA=`#ifdef USE_AOMAP
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
#endif`,sA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oA=`#ifdef USE_BATCHING
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
#endif`,lA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hA=`#ifdef USE_IRIDESCENCE
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
#endif`,dA=`#ifdef USE_BUMPMAP
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
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MA=`#define PI 3.141592653589793
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
} // validated`,bA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EA=`vec3 transformedNormal = objectNormal;
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
#endif`,TA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wA="gl_FragColor = linearToOutputTexel( gl_FragColor );",DA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UA=`#ifdef USE_ENVMAP
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
#endif`,NA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LA=`#ifdef USE_ENVMAP
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
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HA=`#ifdef USE_GRADIENTMAP
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
}`,GA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XA=`uniform bool receiveShadow;
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
#endif`,WA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,qA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,QA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,$A=`#if defined( RE_IndirectDiffuse )
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l2=`#if defined( USE_POINTS_UV )
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
#endif`,u2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,B2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
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
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q2=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y2=`#ifdef USE_TRANSMISSION
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
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
}`,t3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`#include <common>
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
}`,r3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s3=`#define DISTANCE
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
}`,o3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c3=`uniform float scale;
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
}`,f3=`uniform vec3 diffuse;
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
}`,h3=`#include <common>
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
}`,d3=`uniform vec3 diffuse;
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
}`,p3=`#define LAMBERT
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
}`,m3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,_3=`#define MATCAP
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
}`,g3=`#define MATCAP
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
}`,v3=`#define NORMAL
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
}`,x3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y3=`#define PHONG
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
}`,S3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,M3=`#define STANDARD
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
}`,b3=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,E3=`#define TOON
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
}`,T3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,A3=`uniform float size;
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
}`,R3=`uniform vec3 diffuse;
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
}`,C3=`#include <common>
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
}`,w3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,D3=`uniform float rotation;
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
}`,U3=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:$T,alphahash_pars_fragment:tA,alphamap_fragment:eA,alphamap_pars_fragment:nA,alphatest_fragment:iA,alphatest_pars_fragment:aA,aomap_fragment:rA,aomap_pars_fragment:sA,batching_pars_vertex:oA,batching_vertex:lA,begin_vertex:uA,beginnormal_vertex:cA,bsdfs:fA,iridescence_fragment:hA,bumpmap_pars_fragment:dA,clipping_planes_fragment:pA,clipping_planes_pars_fragment:mA,clipping_planes_pars_vertex:_A,clipping_planes_vertex:gA,color_fragment:vA,color_pars_fragment:xA,color_pars_vertex:yA,color_vertex:SA,common:MA,cube_uv_reflection_fragment:bA,defaultnormal_vertex:EA,displacementmap_pars_vertex:TA,displacementmap_vertex:AA,emissivemap_fragment:RA,emissivemap_pars_fragment:CA,colorspace_fragment:wA,colorspace_pars_fragment:DA,envmap_fragment:UA,envmap_common_pars_fragment:NA,envmap_pars_fragment:LA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:WA,envmap_vertex:PA,fog_vertex:zA,fog_pars_vertex:FA,fog_fragment:BA,fog_pars_fragment:IA,gradientmap_pars_fragment:HA,lightmap_pars_fragment:GA,lights_lambert_fragment:VA,lights_lambert_pars_fragment:kA,lights_pars_begin:XA,lights_toon_fragment:qA,lights_toon_pars_fragment:YA,lights_phong_fragment:jA,lights_phong_pars_fragment:ZA,lights_physical_fragment:KA,lights_physical_pars_fragment:QA,lights_fragment_begin:JA,lights_fragment_maps:$A,lights_fragment_end:t2,logdepthbuf_fragment:e2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:i2,logdepthbuf_vertex:a2,map_fragment:r2,map_pars_fragment:s2,map_particle_fragment:o2,map_particle_pars_fragment:l2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:c2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:d2,morphtarget_pars_vertex:p2,morphtarget_vertex:m2,normal_fragment_begin:_2,normal_fragment_maps:g2,normal_pars_fragment:v2,normal_pars_vertex:x2,normal_vertex:y2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:b2,clearcoat_pars_fragment:E2,iridescence_pars_fragment:T2,opaque_fragment:A2,packing:R2,premultiplied_alpha_fragment:C2,project_vertex:w2,dithering_fragment:D2,dithering_pars_fragment:U2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:L2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:P2,shadowmap_vertex:z2,shadowmask_pars_fragment:F2,skinbase_vertex:B2,skinning_pars_vertex:I2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:V2,specularmap_pars_fragment:k2,tonemapping_fragment:X2,tonemapping_pars_fragment:W2,transmission_fragment:q2,transmission_pars_fragment:Y2,uv_pars_fragment:j2,uv_pars_vertex:Z2,uv_vertex:K2,worldpos_vertex:Q2,background_vert:J2,background_frag:$2,backgroundCube_vert:t3,backgroundCube_frag:e3,cube_vert:n3,cube_frag:i3,depth_vert:a3,depth_frag:r3,distance_vert:s3,distance_frag:o3,equirect_vert:l3,equirect_frag:u3,linedashed_vert:c3,linedashed_frag:f3,meshbasic_vert:h3,meshbasic_frag:d3,meshlambert_vert:p3,meshlambert_frag:m3,meshmatcap_vert:_3,meshmatcap_frag:g3,meshnormal_vert:v3,meshnormal_frag:x3,meshphong_vert:y3,meshphong_frag:S3,meshphysical_vert:M3,meshphysical_frag:b3,meshtoon_vert:E3,meshtoon_frag:T3,points_vert:A3,points_frag:R3,shadow_vert:C3,shadow_frag:w3,sprite_vert:D3,sprite_frag:U3},Pt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},pa={basic:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Kn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Kn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ze(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Kn([Pt.points,Pt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Kn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Kn([Pt.common,Pt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Kn([Pt.sprite,Pt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Kn([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Kn([Pt.lights,Pt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};pa.physical={uniforms:Kn([pa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const nf={r:0,b:0,g:0},vs=new ir,N3=new pn;function L3(o,t,n,a,s,l,c){const f=new ze(0);let p=l===!0?0:1,d,_,g=null,v=0,y=null;function E(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?n:t).get(C)),C}function M(w){let C=!1;const N=E(w);N===null?x(f,p):N&&N.isColor&&(x(N,1),C=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(w,C){const N=E(C);N&&(N.isCubeTexture||N.mapping===Rf)?(_===void 0&&(_=new Ea(new Mu(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:jo(pa.backgroundCube.uniforms),vertexShader:pa.backgroundCube.vertexShader,fragmentShader:pa.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,O,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),vs.copy(C.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(N3.makeRotationFromEuler(vs)),_.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ge,(g!==N||v!==N.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=N,v=N.version,y=o.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Ea(new wf(2,2),new sa({name:"BackgroundMaterial",uniforms:jo(pa.background.uniforms),vertexShader:pa.background.vertexShader,fragmentShader:pa.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ee.getTransfer(N.colorSpace)!==Ge,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=N,v=N.version,y=o.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,C){w.getRGB(nf,IS(o)),a.buffers.color.setClear(nf.r,nf.g,nf.b,C,c)}function R(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,C=1){f.set(w),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:M,addToRenderList:S,dispose:R}}function O3(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(L,H,j,Q,ut){let ot=!1;const B=g(Q,j,H);l!==B&&(l=B,d(l.object)),ot=y(L,Q,j,ut),ot&&E(L,Q,j,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ot||c)&&(c=!1,C(L,H,j,Q),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function p(){return o.createVertexArray()}function d(L){return o.bindVertexArray(L)}function _(L){return o.deleteVertexArray(L)}function g(L,H,j){const Q=j.wireframe===!0;let ut=a[L.id];ut===void 0&&(ut={},a[L.id]=ut);let ot=ut[H.id];ot===void 0&&(ot={},ut[H.id]=ot);let B=ot[Q];return B===void 0&&(B=v(p()),ot[Q]=B),B}function v(L){const H=[],j=[],Q=[];for(let ut=0;ut<n;ut++)H[ut]=0,j[ut]=0,Q[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Q,object:L,attributes:{},index:null}}function y(L,H,j,Q){const ut=l.attributes,ot=H.attributes;let B=0;const G=j.getAttributes();for(const $ in G)if(G[$].location>=0){const xt=ut[$];let z=ot[$];if(z===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),xt===void 0||xt.attribute!==z||z&&xt.data!==z.data)return!0;B++}return l.attributesNum!==B||l.index!==Q}function E(L,H,j,Q){const ut={},ot=H.attributes;let B=0;const G=j.getAttributes();for(const $ in G)if(G[$].location>=0){let xt=ot[$];xt===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor));const z={};z.attribute=xt,xt&&xt.data&&(z.data=xt.data),ut[$]=z,B++}l.attributes=ut,l.attributesNum=B,l.index=Q}function M(){const L=l.newAttributes;for(let H=0,j=L.length;H<j;H++)L[H]=0}function S(L){x(L,0)}function x(L,H){const j=l.newAttributes,Q=l.enabledAttributes,ut=l.attributeDivisors;j[L]=1,Q[L]===0&&(o.enableVertexAttribArray(L),Q[L]=1),ut[L]!==H&&(o.vertexAttribDivisor(L,H),ut[L]=H)}function R(){const L=l.newAttributes,H=l.enabledAttributes;for(let j=0,Q=H.length;j<Q;j++)H[j]!==L[j]&&(o.disableVertexAttribArray(j),H[j]=0)}function w(L,H,j,Q,ut,ot,B){B===!0?o.vertexAttribIPointer(L,H,j,ut,ot):o.vertexAttribPointer(L,H,j,Q,ut,ot)}function C(L,H,j,Q){M();const ut=Q.attributes,ot=j.getAttributes(),B=H.defaultAttributeValues;for(const G in ot){const $=ot[G];if($.location>=0){let St=ut[G];if(St===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(St=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(St=L.instanceColor)),St!==void 0){const xt=St.normalized,z=St.itemSize,et=t.get(St);if(et===void 0)continue;const _t=et.buffer,Et=et.type,Lt=et.bytesPerElement,st=Et===o.INT||Et===o.UNSIGNED_INT||St.gpuType===n0;if(St.isInterleavedBufferAttribute){const ht=St.data,Dt=ht.stride,kt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<$.locationSize;Ht++)x($.location+Ht,ht.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<$.locationSize;Ht++)S($.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Ht=0;Ht<$.locationSize;Ht++)w($.location+Ht,z/$.locationSize,Et,xt,Dt*Lt,(kt+z/$.locationSize*Ht)*Lt,st)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<$.locationSize;ht++)x($.location+ht,St.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<$.locationSize;ht++)S($.location+ht);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let ht=0;ht<$.locationSize;ht++)w($.location+ht,z/$.locationSize,Et,xt,z*Lt,z/$.locationSize*ht*Lt,st)}}else if(B!==void 0){const xt=B[G];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv($.location,xt);break;case 3:o.vertexAttrib3fv($.location,xt);break;case 4:o.vertexAttrib4fv($.location,xt);break;default:o.vertexAttrib1fv($.location,xt)}}}}R()}function N(){I();for(const L in a){const H=a[L];for(const j in H){const Q=H[j];for(const ut in Q)_(Q[ut].object),delete Q[ut];delete H[j]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const H=a[L.id];for(const j in H){const Q=H[j];for(const ut in Q)_(Q[ut].object),delete Q[ut];delete H[j]}delete a[L.id]}function O(L){for(const H in a){const j=a[H];if(j[L.id]===void 0)continue;const Q=j[L.id];for(const ut in Q)_(Q[ut].object),delete Q[ut];delete j[L.id]}}function I(){T(),c=!0,l!==s&&(l=s,d(l.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:I,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function P3(o,t,n){let a;function s(d){a=d}function l(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];n.update(y,a,1)}function p(d,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];n.update(E,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function z3(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==aa&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const I=O===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Xi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==va&&!I)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(re("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:C,maxSamples:N,samples:P}}function F3(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new Ss,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||l&&!S)l?_(null):d();else{const R=l?0:a,w=R*4;let C=x.clippingState||null;p.value=C,C=_(E,v,w,y);for(let N=0;N!==w;++N)C[N]=n[N];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const x=y+M*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let w=0,C=y;w!==M;++w,C+=4)c.copy(g[w]).applyMatrix4(R,f),c.normal.toArray(S,C),S[C+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function B3(o){let t=new WeakMap;function n(c,f){return f===Kp?c.mapping=Us:f===Qp&&(c.mapping=Wo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Kp||f===Qp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new VS(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Hr=4,Yx=[.125,.215,.35,.446,.526,.582],bs=20,I3=256,Ql=new qS,jx=new ze;let yp=null,Sp=0,Mp=0,bp=!1;const H3=new it;class Zx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=H3}=l;yp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yp,Sp,Mp),this._renderer.xr.enabled=bp,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Us||t.mapping===Wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:er,format:aa,colorSpace:Yo,depthBuffer:!1},s=Kx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G3(l)),this._blurMaterial=k3(l,t,n),this._ggxMaterial=V3(l,t,n)}return s}_compileMaterial(t){const n=new Ea(new Yi,t);this._renderer.compile(n,Ql)}_sceneToCubeUV(t,n,a,s,l){const p=new ki(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(jx),g.toneMapping=ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ea(new Mu,new zS({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,S=M.material;let x=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,x=!0):(S.color.copy(jx),x=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[w],l.y,l.z)):C===1?(p.up.set(0,0,d[w]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[w],l.z)):(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[w]));const N=this._cubeSize;Do(s,C*N,w>2?N:0,N,N),g.setRenderTarget(s),x&&g.render(M,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=R}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Us||t.mapping===Wo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Do(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,Ql)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,y=g*v,{_lodMax:E}=this,M=this._sizeLods[a],S=3*M*(a>E-Hr?a-E+Hr:0),x=4*(this._cubeSize-M);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=E-n,Do(l,S,x,3*M,2*M),s.setRenderTarget(l),s.render(f,Ql),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-a,Do(t,S,x,3*M,2*M),s.setRenderTarget(t),s.render(f,Ql)}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[s];g.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*bs-1),M=l/E,S=isFinite(l)?1+Math.floor(_*M):bs;S>bs&&re(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bs}`);const x=[];let R=0;for(let O=0;O<bs;++O){const I=O/M,T=Math.exp(-I*I/2);x.push(T),O===0?R+=T:O<S&&(R+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/R;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-a;const C=this._sizeLods[s],N=3*C*(s>w-Hr?s-w+Hr:0),P=4*(this._cubeSize-C);Do(n,N,P,3*C,2*C),p.setRenderTarget(n),p.render(g,Ql)}}function G3(o){const t=[],n=[],a=[];let s=o;const l=o-Hr+1+Yx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>o-Hr?p=Yx[c-o+Hr-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,M=3,S=2,x=1,R=new Float32Array(M*E*y),w=new Float32Array(S*E*y),C=new Float32Array(x*E*y);for(let P=0;P<y;P++){const O=P%3*2/3-1,I=P>2?0:-1,T=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];R.set(T,M*E*P),w.set(v,S*E*P);const L=[P,P,P,P,P,P];C.set(L,x*E*P)}const N=new Yi;N.setAttribute("position",new ra(R,M)),N.setAttribute("uv",new ra(w,S)),N.setAttribute("faceIndex",new ra(C,x)),a.push(new Ea(N,null)),s>Hr&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Kx(o,t,n){const a=new Sa(o,t,n);return a.texture.mapping=Rf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Do(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function V3(o,t,n){return new sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Df(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function k3(o,t,n){const a=new Float32Array(bs),s=new it(0,1,0);return new sa({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Qx(){return new sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Jx(){return new sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Df(){return`

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
	`}function X3(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Kp||p===Qp,_=p===Us||p===Wo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Zx(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new Zx(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function W3(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&mu("WebGLRenderer: "+a+" extension not supported."),s}}}function q3(o,t,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let w=0,C=R.length;w<C;w+=3){const N=R[w+0],P=R[w+1],O=R[w+2];v.push(N,P,P,O,O,N)}}else if(E!==void 0){const R=E.array;M=E.version;for(let w=0,C=R.length/3-1;w<C;w+=3){const N=w+0,P=w+1,O=w+2;v.push(N,P,P,O,O,N)}}else return;const S=new(US(v)?BS:FS)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function Y3(o,t,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,y){o.drawElements(a,y,l,v*c),n.update(y,a,1)}function d(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,l,v*c,E),n.update(y,a,E))}function _(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function g(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,l,v,0,M,0,E);let x=0;for(let R=0;R<E;R++)x+=y[R]*M[R];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function j3(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:Ce("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function Z3(o,t,n){const a=new WeakMap,s=new dn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let L=function(){I.dispose(),a.delete(f),f.removeEventListener("dispose",L)};var y=L;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),M===!0&&(C=2),S===!0&&(C=3);let N=f.attributes.position.count*C,P=1;N>t.maxTextureSize&&(P=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const O=new Float32Array(N*P*4*g),I=new NS(O,N,P,g);I.type=va,I.needsUpdate=!0;const T=C*4;for(let H=0;H<g;H++){const j=x[H],Q=R[H],ut=w[H],ot=N*P*4*H;for(let B=0;B<j.count;B++){const G=B*T;E===!0&&(s.fromBufferAttribute(j,B),O[ot+G+0]=s.x,O[ot+G+1]=s.y,O[ot+G+2]=s.z,O[ot+G+3]=0),M===!0&&(s.fromBufferAttribute(Q,B),O[ot+G+4]=s.x,O[ot+G+5]=s.y,O[ot+G+6]=s.z,O[ot+G+7]=0),S===!0&&(s.fromBufferAttribute(ut,B),O[ot+G+8]=s.x,O[ot+G+9]=s.y,O[ot+G+10]=s.z,O[ot+G+11]=ut.itemSize===4?s.w:1)}}v={count:g,texture:I,size:new Le(N,P)},a.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function K3(o,t,n,a){let s=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const Q3={[_S]:"LINEAR_TONE_MAPPING",[gS]:"REINHARD_TONE_MAPPING",[vS]:"CINEON_TONE_MAPPING",[xS]:"ACES_FILMIC_TONE_MAPPING",[SS]:"AGX_TONE_MAPPING",[MS]:"NEUTRAL_TONE_MAPPING",[yS]:"CUSTOM_TONE_MAPPING"};function J3(o,t,n,a,s){const l=new Sa(t,n,{type:o,depthBuffer:a,stencilBuffer:s}),c=new Sa(t,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new Yi;f.setAttribute("position",new Ri([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ri([0,2,0,0,2,0],2));const p=new qT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ea(f,p),_=new qS(-1,1,1,-1,0,1);let g=null,v=null,y=!1,E,M=null,S=[],x=!1;this.setSize=function(R,w){l.setSize(R,w),c.setSize(R,w);for(let C=0;C<S.length;C++){const N=S[C];N.setSize&&N.setSize(R,w)}},this.setEffects=function(R){S=R,x=S.length>0&&S[0].isRenderPass===!0;const w=l.width,C=l.height;for(let N=0;N<S.length;N++){const P=S[N];P.setSize&&P.setSize(w,C)}},this.begin=function(R,w){if(y||R.toneMapping===ya&&S.length===0)return!1;if(M=w,w!==null){const C=w.width,N=w.height;(l.width!==C||l.height!==N)&&this.setSize(C,N)}return x===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=ya,!0},this.hasRenderPass=function(){return x},this.end=function(R,w){R.toneMapping=E,y=!0;let C=l,N=c;for(let P=0;P<S.length;P++){const O=S[P];if(O.enabled!==!1&&(O.render(R,N,C,w),O.needsSwap!==!1)){const I=C;C=N,N=I}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,p.defines={},Ee.getTransfer(g)===Ge&&(p.defines.SRGB_TRANSFER="");const P=Q3[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(M),R.render(d,_),M=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const jS=new Jn,Om=new _u(1,1),ZS=new NS,KS=new ST,QS=new GS,$x=[],ty=[],ey=new Float32Array(16),ny=new Float32Array(9),iy=new Float32Array(4);function Ko(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=$x[s];if(l===void 0&&(l=new Float32Array(s),$x[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Tn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function An(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Uf(o,t){let n=ty[t];n===void 0&&(n=new Int32Array(t),ty[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function $3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function tR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2fv(this.addr,t),An(n,t)}}function eR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tn(n,t))return;o.uniform3fv(this.addr,t),An(n,t)}}function nR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4fv(this.addr,t),An(n,t)}}function iR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;iy.set(a),o.uniformMatrix2fv(this.addr,!1,iy),An(n,a)}}function aR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;ny.set(a),o.uniformMatrix3fv(this.addr,!1,ny),An(n,a)}}function rR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(n,t)}else{if(Tn(n,a))return;ey.set(a),o.uniformMatrix4fv(this.addr,!1,ey),An(n,a)}}function sR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function oR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2iv(this.addr,t),An(n,t)}}function lR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;o.uniform3iv(this.addr,t),An(n,t)}}function uR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4iv(this.addr,t),An(n,t)}}function cR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function fR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2uiv(this.addr,t),An(n,t)}}function hR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;o.uniform3uiv(this.addr,t),An(n,t)}}function dR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4uiv(this.addr,t),An(n,t)}}function pR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(Om.compareFunction=n.isReversedDepthBuffer()?u0:l0,l=Om):l=jS,n.setTexture2D(t||l,s)}function mR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||KS,s)}function _R(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||QS,s)}function gR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||ZS,s)}function vR(o){switch(o){case 5126:return $3;case 35664:return tR;case 35665:return eR;case 35666:return nR;case 35674:return iR;case 35675:return aR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return lR;case 35669:case 35673:return uR;case 5125:return cR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return gR}}function xR(o,t){o.uniform1fv(this.addr,t)}function yR(o,t){const n=Ko(t,this.size,2);o.uniform2fv(this.addr,n)}function SR(o,t){const n=Ko(t,this.size,3);o.uniform3fv(this.addr,n)}function MR(o,t){const n=Ko(t,this.size,4);o.uniform4fv(this.addr,n)}function bR(o,t){const n=Ko(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function ER(o,t){const n=Ko(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function TR(o,t){const n=Ko(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function AR(o,t){o.uniform1iv(this.addr,t)}function RR(o,t){o.uniform2iv(this.addr,t)}function CR(o,t){o.uniform3iv(this.addr,t)}function wR(o,t){o.uniform4iv(this.addr,t)}function DR(o,t){o.uniform1uiv(this.addr,t)}function UR(o,t){o.uniform2uiv(this.addr,t)}function NR(o,t){o.uniform3uiv(this.addr,t)}function LR(o,t){o.uniform4uiv(this.addr,t)}function OR(o,t,n){const a=this.cache,s=t.length,l=Uf(n,s);Tn(a,l)||(o.uniform1iv(this.addr,l),An(a,l));let c;this.type===o.SAMPLER_2D_SHADOW?c=Om:c=jS;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||c,l[f])}function PR(o,t,n){const a=this.cache,s=t.length,l=Uf(n,s);Tn(a,l)||(o.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||KS,l[c])}function zR(o,t,n){const a=this.cache,s=t.length,l=Uf(n,s);Tn(a,l)||(o.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||QS,l[c])}function FR(o,t,n){const a=this.cache,s=t.length,l=Uf(n,s);Tn(a,l)||(o.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||ZS,l[c])}function BR(o){switch(o){case 5126:return xR;case 35664:return yR;case 35665:return SR;case 35666:return MR;case 35674:return bR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return CR;case 35669:case 35673:return wR;case 5125:return DR;case 36294:return UR;case 36295:return NR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return FR}}class IR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=vR(n.type)}}class HR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BR(n.type)}}class GR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const Ep=/(\w+)(\])?(\[|\.)?/g;function ay(o,t){o.seq.push(t),o.map[t.id]=t}function VR(o,t,n){const a=o.name,s=a.length;for(Ep.lastIndex=0;;){const l=Ep.exec(a),c=Ep.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){ay(n,d===void 0?new IR(f,o,t):new HR(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new GR(f),ay(n,g)),n=g}}}class df{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);VR(f,p,this)}const s=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function ry(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const kR=37297;let XR=0;function WR(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const sy=new ce;function qR(o){Ee._getMatrix(sy,Ee.workingColorSpace,o);const t=`mat3( ${sy.elements.map(n=>n.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Sf:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function oy(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+WR(o.getShaderSource(t),f)}else return l}function YR(o,t){const n=qR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const jR={[_S]:"Linear",[gS]:"Reinhard",[vS]:"Cineon",[xS]:"ACESFilmic",[SS]:"AgX",[MS]:"Neutral",[yS]:"Custom"};function ZR(o,t){const n=jR[t];return n===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const af=new it;function KR(){Ee.getLuminanceCoefficients(af);const o=af.x.toFixed(4),t=af.y.toFixed(4),n=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nu).join(`
`)}function JR(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function $R(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function nu(o){return o!==""}function ly(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pm(o){return o.replace(tC,nC)}const eC=new Map;function nC(o,t){let n=fe[t];if(n===void 0){const a=eC.get(t);if(a!==void 0)n=fe[a],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Pm(n)}const iC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(o){return o.replace(iC,aC)}function aC(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function fy(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const rC={[lf]:"SHADOWMAP_TYPE_PCF",[eu]:"SHADOWMAP_TYPE_VSM"};function sC(o){return rC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oC={[Us]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[Rf]:"ENVMAP_TYPE_CUBE_UV"};function lC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":oC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const uC={[Wo]:"ENVMAP_MODE_REFRACTION"};function cC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":uC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fC={[mS]:"ENVMAP_BLENDING_MULTIPLY",[eT]:"ENVMAP_BLENDING_MIX",[nT]:"ENVMAP_BLENDING_ADD"};function hC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":fC[o.combine]||"ENVMAP_BLENDING_NONE"}function dC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function pC(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=sC(n),d=lC(n),_=cC(n),g=hC(n),v=dC(n),y=QR(n),E=JR(l),M=s.createProgram();let S,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nu).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nu).join(`
`),x.length>0&&(x+=`
`)):(S=[fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nu).join(`
`),x=[fy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ya?"#define TONE_MAPPING":"",n.toneMapping!==ya?fe.tonemapping_pars_fragment:"",n.toneMapping!==ya?ZR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,YR("linearToOutputTexel",n.outputColorSpace),KR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nu).join(`
`)),c=Pm(c),c=ly(c,n),c=uy(c,n),f=Pm(f),f=ly(f,n),f=uy(f,n),c=cy(c),f=cy(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Tx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=R+S+c,C=R+x+f,N=ry(s,s.VERTEX_SHADER,w),P=ry(s,s.FRAGMENT_SHADER,C);s.attachShader(M,N),s.attachShader(M,P),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(H){if(o.debug.checkShaderErrors){const j=s.getProgramInfoLog(M)||"",Q=s.getShaderInfoLog(N)||"",ut=s.getShaderInfoLog(P)||"",ot=j.trim(),B=Q.trim(),G=ut.trim();let $=!0,St=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,N,P);else{const xt=oy(s,N,"vertex"),z=oy(s,P,"fragment");Ce("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+xt+`
`+z)}else ot!==""?re("WebGLProgram: Program Info Log:",ot):(B===""||G==="")&&(St=!1);St&&(H.diagnostics={runnable:$,programLog:ot,vertexShader:{log:B,prefix:S},fragmentShader:{log:G,prefix:x}})}s.deleteShader(N),s.deleteShader(P),I=new df(s,M),T=$R(s,M)}let I;this.getUniforms=function(){return I===void 0&&O(this),I};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,kR)),L},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=XR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=P,this}let mC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new gC(t),n.set(t,a)),a}}class gC{constructor(t){this.id=mC++,this.code=t,this.usedTimes=0}}function vC(o,t,n,a,s,l,c){const f=new OS,p=new _C,d=new Set,_=[],g=new Map,v=s.logarithmicDepthBuffer;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function S(T,L,H,j,Q){const ut=j.fog,ot=Q.geometry,B=T.isMeshStandardMaterial?j.environment:null,G=(T.isMeshStandardMaterial?n:t).get(T.envMap||B),$=G&&G.mapping===Rf?G.image.height:null,St=E[T.type];T.precision!==null&&(y=s.getMaxPrecision(T.precision),y!==T.precision&&re("WebGLProgram.getParameters:",T.precision,"not supported, using",y,"instead."));const xt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,z=xt!==void 0?xt.length:0;let et=0;ot.morphAttributes.position!==void 0&&(et=1),ot.morphAttributes.normal!==void 0&&(et=2),ot.morphAttributes.color!==void 0&&(et=3);let _t,Et,Lt,st;if(St){const be=pa[St];_t=be.vertexShader,Et=be.fragmentShader}else _t=T.vertexShader,Et=T.fragmentShader,p.update(T),Lt=p.getVertexShaderID(T),st=p.getFragmentShaderID(T);const ht=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=Q.isInstancedMesh===!0,Ht=Q.isBatchedMesh===!0,he=!!T.map,rn=!!T.matcap,_e=!!G,de=!!T.aoMap,we=!!T.lightMap,se=!!T.bumpMap,sn=!!T.normalMap,k=!!T.displacementMap,Qe=!!T.emissiveMap,Me=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,F=T.clearcoat>0,A=T.dispersion>0,Y=T.iridescence>0,pt=T.sheen>0,yt=T.transmission>0,ft=Yt&&!!T.anisotropyMap,Zt=F&&!!T.clearcoatMap,Ct=F&&!!T.clearcoatNormalMap,Xt=F&&!!T.clearcoatRoughnessMap,ee=Y&&!!T.iridescenceMap,bt=Y&&!!T.iridescenceThicknessMap,Tt=pt&&!!T.sheenColorMap,Bt=pt&&!!T.sheenRoughnessMap,zt=!!T.specularMap,wt=!!T.specularColorMap,le=!!T.specularIntensityMap,W=yt&&!!T.transmissionMap,Nt=yt&&!!T.thicknessMap,At=!!T.gradientMap,Ft=!!T.alphaMap,Mt=T.alphaTest>0,vt=!!T.alphaHash,Rt=!!T.extensions;let ne=ya;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Fe={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Et,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:st,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&Q._colorsTexture!==null,instancing:kt,instancingColor:kt&&Q.instanceColor!==null,instancingMorph:kt&&Q.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Yo,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:rn,envMap:_e,envMapMode:_e&&G.mapping,envMapCubeUVHeight:$,aoMap:de,lightMap:we,bumpMap:se,normalMap:sn,displacementMap:k,emissiveMap:Qe,normalMapObjectSpace:sn&&T.normalMapType===sT,normalMapTangentSpace:sn&&T.normalMapType===rT,metalnessMap:Me,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:ft,clearcoat:F,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Xt,dispersion:A,iridescence:Y,iridescenceMap:ee,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Tt,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:wt,specularIntensityMap:le,transmission:yt,transmissionMap:W,thicknessMap:Nt,gradientMap:At,opaque:T.transparent===!1&&T.blending===zo&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:vt,combine:T.combine,mapUv:he&&M(T.map.channel),aoMapUv:de&&M(T.aoMap.channel),lightMapUv:we&&M(T.lightMap.channel),bumpMapUv:se&&M(T.bumpMap.channel),normalMapUv:sn&&M(T.normalMap.channel),displacementMapUv:k&&M(T.displacementMap.channel),emissiveMapUv:Qe&&M(T.emissiveMap.channel),metalnessMapUv:Me&&M(T.metalnessMap.channel),roughnessMapUv:Oe&&M(T.roughnessMap.channel),anisotropyMapUv:ft&&M(T.anisotropyMap.channel),clearcoatMapUv:Zt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&M(T.sheenRoughnessMap.channel),specularMapUv:zt&&M(T.specularMap.channel),specularColorMapUv:wt&&M(T.specularColorMap.channel),specularIntensityMapUv:le&&M(T.specularIntensityMap.channel),transmissionMapUv:W&&M(T.transmissionMap.channel),thicknessMapUv:Nt&&M(T.thicknessMap.channel),alphaMapUv:Ft&&M(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(sn||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&(he||Ft),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:et,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&Ee.getTransfer(T.map.colorSpace)===Ge,decodeVideoTextureEmissive:Qe&&T.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(T.emissiveMap.colorSpace)===Ge,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===ci,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Rt&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&T.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=d.has(1),Fe.vertexUv2s=d.has(2),Fe.vertexUv3s=d.has(3),d.clear(),Fe}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)L.push(H),L.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(R(L,T),w(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function R(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function w(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function C(T){const L=E[T.type];let H;if(L){const j=pa[L];H=OT.clone(j.uniforms)}else H=T.uniforms;return H}function N(T,L){let H=g.get(L);return H!==void 0?++H.usedTimes:(H=new pC(o,L,T,l),_.push(H),g.set(L,H)),H}function P(T){if(--T.usedTimes===0){const L=_.indexOf(T);_[L]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function O(T){p.remove(T)}function I(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:N,releaseProgram:P,releaseShaderCache:O,programs:_,dispose:I}}function xC(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function yC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function hy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function dy(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function p(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||yC),a.length>1&&a.sort(v||hy),s.length>1&&s.sort(v||hy)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:p,finish:_,sort:d}}function SC(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new dy,o.set(a,[c])):s>=l.length?(c=new dy,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function MC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new ze};break;case"SpotLight":n={position:new it,direction:new it,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=n,n}}}function bC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let EC=0;function TC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function AC(o){const t=new MC,n=bC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new it);const s=new it,l=new pn,c=new pn;function f(d){let _=0,g=0,v=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,R=0,w=0,C=0,N=0,P=0,O=0;d.sort(TC);for(let T=0,L=d.length;T<L;T++){const H=d[T],j=H.color,Q=H.intensity,ut=H.distance;let ot=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===qo?ot=H.shadow.map.texture:ot=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=j.r*Q,g+=j.g*Q,v+=j.b*Q;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],Q);O++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,$=n.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,a.directionalShadow[y]=$,a.directionalShadowMap[y]=ot,a.directionalShadowMatrix[y]=H.shadow.matrix,R++}a.directional[y]=B,y++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(j).multiplyScalar(Q),B.distance=ut,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[M]=B;const G=H.shadow;if(H.map&&(a.spotLightMap[N]=H.map,N++,G.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[M]=G.matrix,H.castShadow){const $=n.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,a.spotShadow[M]=$,a.spotShadowMap[M]=ot,C++}M++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(j).multiplyScalar(Q),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=B,S++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const G=H.shadow,$=n.get(H);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,a.pointShadow[E]=$,a.pointShadowMap[E]=ot,a.pointShadowMatrix[E]=H.shadow.matrix,w++}a.point[E]=B,E++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(Q),B.groundColor.copy(H.groundColor).multiplyScalar(Q),a.hemi[x]=B,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const I=a.hash;(I.directionalLength!==y||I.pointLength!==E||I.spotLength!==M||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==R||I.numPointShadows!==w||I.numSpotShadows!==C||I.numSpotMaps!==N||I.numLightProbes!==O)&&(a.directional.length=y,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=C+N-P,a.spotLightMap.length=N,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=O,I.directionalLength=y,I.pointLength=E,I.spotLength=M,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=R,I.numPointShadows=w,I.numSpotShadows=C,I.numSpotMaps=N,I.numLightProbes=O,a.version=EC++)}function p(d,_){let g=0,v=0,y=0,E=0,M=0;const S=_.matrixWorldInverse;for(let x=0,R=d.length;x<R;x++){const w=d[x];if(w.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(w.isSpotLight){const C=a.spot[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),c.identity(),l.copy(w.matrixWorld),l.premultiply(S),c.extractRotation(l),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),E++}else if(w.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const C=a.hemi[M];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:a}}function py(o){const t=new AC(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function RC(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new py(o),t.set(s,[f])):l>=c.length?(f=new py(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const CC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DC=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],UC=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],my=new pn,Jl=new it,Tp=new it;function NC(o,t,n){let a=new kS;const s=new Le,l=new Le,c=new dn,f=new YT,p=new jT,d={},_=n.maxTextureSize,g={[qr]:ci,[ci]:qr,[_a]:_a},v=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:CC,fragmentShader:wC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yi;E.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ea(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let x=this.type;this.render=function(P,O,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;P.type===zE&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=lf);const T=o.getRenderTarget(),L=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),j=o.state;j.setBlending(Qa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=x!==this.type;Q&&O.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(ot=>ot.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,ot=P.length;ut<ot;ut++){const B=P[ut],G=B.shadow;if(G===void 0){re("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const $=G.getFrameExtents();if(s.multiply($),l.copy(G.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/$.x),s.x=l.x*$.x,G.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/$.y),s.y=l.y*$.y,G.mapSize.y=l.y)),G.map===null||Q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===eu){if(B.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Sa(s.x,s.y,{format:qo,type:er,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new _u(s.x,s.y,va),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=nr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn}else{B.isPointLight?(G.map=new VS(s.x),G.map.depthTexture=new WT(s.x,ba)):(G.map=new Sa(s.x,s.y),G.map.depthTexture=new _u(s.x,s.y,ba)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=nr;const xt=o.state.buffers.depth.getReversed();this.type===lf?(G.map.depthTexture.compareFunction=xt?u0:l0,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Hn,G.map.depthTexture.magFilter=Hn)}G.camera.updateProjectionMatrix()}const St=G.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<St;xt++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(G.map),o.clear());const z=G.getViewport(xt);c.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),j.viewport(c)}if(B.isPointLight){const z=G.camera,et=G.matrix,_t=B.distance||z.far;_t!==z.far&&(z.far=_t,z.updateProjectionMatrix()),Jl.setFromMatrixPosition(B.matrixWorld),z.position.copy(Jl),Tp.copy(z.position),Tp.add(DC[xt]),z.up.copy(UC[xt]),z.lookAt(Tp),z.updateMatrixWorld(),et.makeTranslation(-Jl.x,-Jl.y,-Jl.z),my.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(my,z.coordinateSystem,z.reversedDepth)}else G.updateMatrices(B);a=G.getFrustum(),C(O,I,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===eu&&R(G,I),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(T,L,H)};function R(P,O){const I=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Sa(s.x,s.y,{format:qo,type:er})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(O,null,I,v,M,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(O,null,I,y,M,null)}function w(P,O,I,T){let L=null;const H=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)L=H;else if(L=I.isPointLight===!0?p:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=L.uuid,Q=O.uuid;let ut=d[j];ut===void 0&&(ut={},d[j]=ut);let ot=ut[Q];ot===void 0&&(ot=L.clone(),ut[Q]=ot,O.addEventListener("dispose",N)),L=ot}if(L.visible=O.visible,L.wireframe=O.wireframe,T===eu?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:g[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,I.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const j=o.properties.get(L);j.light=I}return L}function C(P,O,I,T,L){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===eu)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const Q=t.update(P),ut=P.material;if(Array.isArray(ut)){const ot=Q.groups;for(let B=0,G=ot.length;B<G;B++){const $=ot[B],St=ut[$.materialIndex];if(St&&St.visible){const xt=w(P,St,T,L);P.onBeforeShadow(o,P,O,I,Q,xt,$),o.renderBufferDirect(I,null,Q,xt,P,$),P.onAfterShadow(o,P,O,I,Q,xt,$)}}}else if(ut.visible){const ot=w(P,ut,T,L);P.onBeforeShadow(o,P,O,I,Q,ot,null),o.renderBufferDirect(I,null,Q,ot,P,null),P.onAfterShadow(o,P,O,I,Q,ot,null)}}const j=P.children;for(let Q=0,ut=j.length;Q<ut;Q++)C(j[Q],O,I,T,L)}function N(P){P.target.removeEventListener("dispose",N);for(const I in d){const T=d[I],L=P.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}const LC={[kp]:Xp,[Wp]:jp,[qp]:Zp,[Xo]:Yp,[Xp]:kp,[jp]:Wp,[Zp]:qp,[Yp]:Xo};function OC(o,t){function n(){let W=!1;const Nt=new dn;let At=null;const Ft=new dn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(o.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,vt,Rt,ne,Fe){Fe===!0&&(Mt*=ne,vt*=ne,Rt*=ne),Nt.set(Mt,vt,Rt,ne),Ft.equals(Nt)===!1&&(o.clearColor(Mt,vt,Rt,ne),Ft.copy(Nt))},reset:function(){W=!1,At=null,Ft.set(-1,0,0,0)}}}function a(){let W=!1,Nt=!1,At=null,Ft=null,Mt=null;return{setReversed:function(vt){if(Nt!==vt){const Rt=t.get("EXT_clip_control");vt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Nt},setTest:function(vt){vt?ht(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(vt){At!==vt&&!W&&(o.depthMask(vt),At=vt)},setFunc:function(vt){if(Nt&&(vt=LC[vt]),Ft!==vt){switch(vt){case kp:o.depthFunc(o.NEVER);break;case Xp:o.depthFunc(o.ALWAYS);break;case Wp:o.depthFunc(o.LESS);break;case Xo:o.depthFunc(o.LEQUAL);break;case qp:o.depthFunc(o.EQUAL);break;case Yp:o.depthFunc(o.GEQUAL);break;case jp:o.depthFunc(o.GREATER);break;case Zp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Mt!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),Mt=vt)},reset:function(){W=!1,At=null,Ft=null,Mt=null,Nt=!1}}}function s(){let W=!1,Nt=null,At=null,Ft=null,Mt=null,vt=null,Rt=null,ne=null,Fe=null;return{setTest:function(be){W||(be?ht(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(be){Nt!==be&&!W&&(o.stencilMask(be),Nt=be)},setFunc:function(be,Vn,ji){(At!==be||Ft!==Vn||Mt!==ji)&&(o.stencilFunc(be,Vn,ji),At=be,Ft=Vn,Mt=ji)},setOp:function(be,Vn,ji){(vt!==be||Rt!==Vn||ne!==ji)&&(o.stencilOp(be,Vn,ji),vt=be,Rt=Vn,ne=ji)},setLocked:function(be){W=be},setClear:function(be){Fe!==be&&(o.clearStencil(be),Fe=be)},reset:function(){W=!1,Nt=null,At=null,Ft=null,Mt=null,vt=null,Rt=null,ne=null,Fe=null}}}const l=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,w=null,C=null,N=null,P=null,O=new ze(0,0,0),I=0,T=!1,L=null,H=null,j=null,Q=null,ut=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),B=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=G>=2);let St=null,xt={};const z=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),_t=new dn().fromArray(z),Et=new dn().fromArray(et);function Lt(W,Nt,At,Ft){const Mt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<At;Rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Nt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return vt}const st={};st[o.TEXTURE_2D]=Lt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=Lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=Lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=Lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ht(o.DEPTH_TEST),c.setFunc(Xo),se(!1),sn(xx),ht(o.CULL_FACE),de(Qa);function ht(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Dt(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function kt(W,Nt){return g[W]!==Nt?(o.bindFramebuffer(W,Nt),g[W]=Nt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ht(W,Nt){let At=y,Ft=!1;if(W){At=v.get(Nt),At===void 0&&(At=[],v.set(Nt,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Rt=Mt.length;vt<Rt;vt++)At[vt]=o.COLOR_ATTACHMENT0+vt;At.length=Mt.length,Ft=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(At)}function he(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const rn={[Ms]:o.FUNC_ADD,[BE]:o.FUNC_SUBTRACT,[IE]:o.FUNC_REVERSE_SUBTRACT};rn[HE]=o.MIN,rn[GE]=o.MAX;const _e={[VE]:o.ZERO,[kE]:o.ONE,[XE]:o.SRC_COLOR,[Gp]:o.SRC_ALPHA,[KE]:o.SRC_ALPHA_SATURATE,[jE]:o.DST_COLOR,[qE]:o.DST_ALPHA,[WE]:o.ONE_MINUS_SRC_COLOR,[Vp]:o.ONE_MINUS_SRC_ALPHA,[ZE]:o.ONE_MINUS_DST_COLOR,[YE]:o.ONE_MINUS_DST_ALPHA,[QE]:o.CONSTANT_COLOR,[JE]:o.ONE_MINUS_CONSTANT_COLOR,[$E]:o.CONSTANT_ALPHA,[tT]:o.ONE_MINUS_CONSTANT_ALPHA};function de(W,Nt,At,Ft,Mt,vt,Rt,ne,Fe,be){if(W===Qa){M===!0&&(Dt(o.BLEND),M=!1);return}if(M===!1&&(ht(o.BLEND),M=!0),W!==FE){if(W!==S||be!==T){if((x!==Ms||C!==Ms)&&(o.blendEquation(o.FUNC_ADD),x=Ms,C=Ms),be)switch(W){case zo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFunc(o.ONE,o.ONE);break;case Sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case zo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Sx:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mx:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}R=null,w=null,N=null,P=null,O.set(0,0,0),I=0,S=W,T=be}return}Mt=Mt||Nt,vt=vt||At,Rt=Rt||Ft,(Nt!==x||Mt!==C)&&(o.blendEquationSeparate(rn[Nt],rn[Mt]),x=Nt,C=Mt),(At!==R||Ft!==w||vt!==N||Rt!==P)&&(o.blendFuncSeparate(_e[At],_e[Ft],_e[vt],_e[Rt]),R=At,w=Ft,N=vt,P=Rt),(ne.equals(O)===!1||Fe!==I)&&(o.blendColor(ne.r,ne.g,ne.b,Fe),O.copy(ne),I=Fe),S=W,T=!1}function we(W,Nt){W.side===_a?Dt(o.CULL_FACE):ht(o.CULL_FACE);let At=W.side===ci;Nt&&(At=!At),se(At),W.blending===zo&&W.transparent===!1?de(Qa):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ft=W.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){L!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),L=W)}function sn(W){W!==OE?(ht(o.CULL_FACE),W!==H&&(W===xx?o.cullFace(o.BACK):W===PE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),H=W}function k(W){W!==j&&(B&&o.lineWidth(W),j=W)}function Qe(W,Nt,At){W?(ht(o.POLYGON_OFFSET_FILL),(Q!==Nt||ut!==At)&&(o.polygonOffset(Nt,At),Q=Nt,ut=At)):Dt(o.POLYGON_OFFSET_FILL)}function Me(W){W?ht(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=o.TEXTURE0+ot-1),St!==W&&(o.activeTexture(W),St=W)}function Yt(W,Nt,At){At===void 0&&(St===null?At=o.TEXTURE0+ot-1:At=St);let Ft=xt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[At]=Ft),(Ft.type!==W||Ft.texture!==Nt)&&(St!==At&&(o.activeTexture(At),St=At),o.bindTexture(W,Nt||st[W]),Ft.type=W,Ft.texture=Nt)}function F(){const W=xt[St];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function yt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ee(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function bt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Tt(W){_t.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Bt(W){Et.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Et.copy(W))}function zt(W,Nt){let At=d.get(Nt);At===void 0&&(At=new WeakMap,d.set(Nt,At));let Ft=At.get(W);Ft===void 0&&(Ft=o.getUniformBlockIndex(Nt,W.name),At.set(W,Ft))}function wt(W,Nt){const Ft=d.get(Nt).get(W);p.get(Nt)!==Ft&&(o.uniformBlockBinding(Nt,Ft,W.__bindingPointIndex),p.set(Nt,Ft))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,xt={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,R=null,w=null,C=null,N=null,P=null,O=new ze(0,0,0),I=0,T=!1,L=null,H=null,j=null,Q=null,ut=null,_t.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ht,disable:Dt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:we,setFlipSided:se,setCullFace:sn,setLineWidth:k,setPolygonOffset:Qe,setScissorTest:Me,activeTexture:Oe,bindTexture:Yt,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:Y,texImage2D:ee,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Bt,reset:le}}function PC(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Le,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,A){return y?new OffscreenCanvas(F,A):bf("canvas")}function M(F,A,Y){let pt=1;const yt=Yt(F);if((yt.width>Y||yt.height>Y)&&(pt=Y/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Zt=Math.floor(pt*yt.height);g===void 0&&(g=E(ft,Zt));const Ct=A?E(ft,Zt):g;return Ct.width=ft,Ct.height=Zt,Ct.getContext("2d").drawImage(F,0,0,ft,Zt),re("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Zt+")."),Ct}else return"data"in F&&re("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),F;return F}function S(F){return F.generateMipmaps}function x(F){o.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(F,A,Y,pt,yt=!1){if(F!==null){if(o[F]!==void 0)return o[F];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ft=A;if(A===o.RED&&(Y===o.FLOAT&&(ft=o.R32F),Y===o.HALF_FLOAT&&(ft=o.R16F),Y===o.UNSIGNED_BYTE&&(ft=o.R8)),A===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ft=o.R8UI),Y===o.UNSIGNED_SHORT&&(ft=o.R16UI),Y===o.UNSIGNED_INT&&(ft=o.R32UI),Y===o.BYTE&&(ft=o.R8I),Y===o.SHORT&&(ft=o.R16I),Y===o.INT&&(ft=o.R32I)),A===o.RG&&(Y===o.FLOAT&&(ft=o.RG32F),Y===o.HALF_FLOAT&&(ft=o.RG16F),Y===o.UNSIGNED_BYTE&&(ft=o.RG8)),A===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ft=o.RG8UI),Y===o.UNSIGNED_SHORT&&(ft=o.RG16UI),Y===o.UNSIGNED_INT&&(ft=o.RG32UI),Y===o.BYTE&&(ft=o.RG8I),Y===o.SHORT&&(ft=o.RG16I),Y===o.INT&&(ft=o.RG32I)),A===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),Y===o.UNSIGNED_INT&&(ft=o.RGB32UI),Y===o.BYTE&&(ft=o.RGB8I),Y===o.SHORT&&(ft=o.RGB16I),Y===o.INT&&(ft=o.RGB32I)),A===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),Y===o.UNSIGNED_INT&&(ft=o.RGBA32UI),Y===o.BYTE&&(ft=o.RGBA8I),Y===o.SHORT&&(ft=o.RGBA16I),Y===o.INT&&(ft=o.RGBA32I)),A===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),A===o.RGBA){const Zt=yt?Sf:Ee.getTransfer(pt);Y===o.FLOAT&&(ft=o.RGBA32F),Y===o.HALF_FLOAT&&(ft=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(ft=Zt===Ge?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(F,A){let Y;return F?A===null||A===ba||A===pu?Y=o.DEPTH24_STENCIL8:A===va?Y=o.DEPTH32F_STENCIL8:A===du&&(Y=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ba||A===pu?Y=o.DEPTH_COMPONENT24:A===va?Y=o.DEPTH_COMPONENT32F:A===du&&(Y=o.DEPTH_COMPONENT16),Y}function N(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Hn&&F.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function P(F){const A=F.target;A.removeEventListener("dispose",P),I(A),A.isVideoTexture&&_.delete(A)}function O(F){const A=F.target;A.removeEventListener("dispose",O),L(A)}function I(F){const A=a.get(F);if(A.__webglInit===void 0)return;const Y=F.source,pt=v.get(Y);if(pt){const yt=pt[A.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&T(F),Object.keys(pt).length===0&&v.delete(Y)}a.remove(F)}function T(F){const A=a.get(F);o.deleteTexture(A.__webglTexture);const Y=F.source,pt=v.get(Y);delete pt[A.__cacheKey],c.memory.textures--}function L(F){const A=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let yt=0;yt<A.__webglFramebuffer[pt].length;yt++)o.deleteFramebuffer(A.__webglFramebuffer[pt][yt]);else o.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)o.deleteFramebuffer(A.__webglFramebuffer[pt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=F.textures;for(let pt=0,yt=Y.length;pt<yt;pt++){const ft=a.get(Y[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),c.memory.textures--),a.remove(Y[pt])}a.remove(F)}let H=0;function j(){H=0}function Q(){const F=H;return F>=s.maxTextures&&re("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),H+=1,F}function ut(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function ot(F,A){const Y=a.get(F);if(F.isVideoTexture&&Me(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Y.__version!==F.version){const pt=F.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{st(Y,F,A);return}}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+A)}function B(F,A){const Y=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){st(Y,F,A);return}else F.isExternalTexture&&(Y.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+A)}function G(F,A){const Y=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Y.__version!==F.version){st(Y,F,A);return}n.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+A)}function $(F,A){const Y=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Y.__version!==F.version){ht(Y,F,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+A)}const St={[Jp]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[$p]:o.MIRRORED_REPEAT},xt={[Hn]:o.NEAREST,[iT]:o.NEAREST_MIPMAP_NEAREST,[Pc]:o.NEAREST_MIPMAP_LINEAR,[Yn]:o.LINEAR,[Zd]:o.LINEAR_MIPMAP_NEAREST,[Ts]:o.LINEAR_MIPMAP_LINEAR},z={[oT]:o.NEVER,[hT]:o.ALWAYS,[lT]:o.LESS,[l0]:o.LEQUAL,[uT]:o.EQUAL,[u0]:o.GEQUAL,[cT]:o.GREATER,[fT]:o.NOTEQUAL};function et(F,A){if(A.type===va&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===Zd||A.magFilter===Pc||A.magFilter===Ts||A.minFilter===Yn||A.minFilter===Zd||A.minFilter===Pc||A.minFilter===Ts)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,St[A.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,St[A.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,St[A.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,xt[A.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Hn||A.minFilter!==Pc&&A.minFilter!==Ts||A.type===va&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(F,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function _t(F,A){let Y=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",P));const pt=A.source;let yt=v.get(pt);yt===void 0&&(yt={},v.set(pt,yt));const ft=ut(A);if(ft!==F.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),yt[ft].usedTimes++;const Zt=yt[F.__cacheKey];Zt!==void 0&&(yt[F.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(A)),F.__cacheKey=ft,F.__webglTexture=yt[ft].texture}return Y}function Et(F,A,Y){return Math.floor(Math.floor(F/Y)/A)}function Lt(F,A,Y,pt){const ft=F.updateRanges;if(ft.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,Y,pt,A.data);else{ft.sort((bt,Tt)=>bt.start-Tt.start);let Zt=0;for(let bt=1;bt<ft.length;bt++){const Tt=ft[Zt],Bt=ft[bt],zt=Tt.start+Tt.count,wt=Et(Bt.start,A.width,4),le=Et(Tt.start,A.width,4);Bt.start<=zt+1&&wt===le&&Et(Bt.start+Bt.count-1,A.width,4)===wt?Tt.count=Math.max(Tt.count,Bt.start+Bt.count-Tt.start):(++Zt,ft[Zt]=Bt)}ft.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let bt=0,Tt=ft.length;bt<Tt;bt++){const Bt=ft[bt],zt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),le=zt%A.width,W=Math.floor(zt/A.width),Nt=wt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,le,W,Nt,At,Y,pt,A.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function st(F,A,Y){let pt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=o.TEXTURE_3D);const yt=_t(F,A),ft=A.source;n.bindTexture(pt,F.__webglTexture,o.TEXTURE0+Y);const Zt=a.get(ft);if(ft.version!==Zt.__version||yt===!0){n.activeTexture(o.TEXTURE0+Y);const Ct=Ee.getPrimaries(Ee.workingColorSpace),Xt=A.colorSpace===zr?null:Ee.getPrimaries(A.colorSpace),ee=A.colorSpace===zr||Ct===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let bt=M(A.image,!1,s.maxTextureSize);bt=Oe(A,bt);const Tt=l.convert(A.format,A.colorSpace),Bt=l.convert(A.type);let zt=w(A.internalFormat,Tt,Bt,A.colorSpace,A.isVideoTexture);et(pt,A);let wt;const le=A.mipmaps,W=A.isVideoTexture!==!0,Nt=Zt.__version===void 0||yt===!0,At=ft.dataReady,Ft=N(A,bt);if(A.isDepthTexture)zt=C(A.format===As,A.type),Nt&&(W?n.texStorage2D(o.TEXTURE_2D,1,zt,bt.width,bt.height):n.texImage2D(o.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,Bt,null));else if(A.isDataTexture)if(le.length>0){W&&Nt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let Mt=0,vt=le.length;Mt<vt;Mt++)wt=le[Mt],W?At&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Tt,Bt,wt.data):n.texImage2D(o.TEXTURE_2D,Mt,zt,wt.width,wt.height,0,Tt,Bt,wt.data);A.generateMipmaps=!1}else W?(Nt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,bt.width,bt.height),At&&Lt(A,bt,Tt,Bt)):n.texImage2D(o.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,Bt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Nt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,le[0].width,le[0].height,bt.depth);for(let Mt=0,vt=le.length;Mt<vt;Mt++)if(wt=le[Mt],A.format!==aa)if(Tt!==null)if(W){if(At)if(A.layerUpdates.size>0){const Rt=qx(wt.width,wt.height,A.format,A.type);for(const ne of A.layerUpdates){const Fe=wt.data.subarray(ne*Rt/wt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ne,wt.width,wt.height,1,Tt,Fe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,bt.depth,Tt,wt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,wt.width,wt.height,bt.depth,0,wt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,wt.width,wt.height,bt.depth,Tt,Bt,wt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Mt,zt,wt.width,wt.height,bt.depth,0,Tt,Bt,wt.data)}else{W&&Nt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let Mt=0,vt=le.length;Mt<vt;Mt++)wt=le[Mt],A.format!==aa?Tt!==null?W?At&&n.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Tt,wt.data):n.compressedTexImage2D(o.TEXTURE_2D,Mt,zt,wt.width,wt.height,0,wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,wt.width,wt.height,Tt,Bt,wt.data):n.texImage2D(o.TEXTURE_2D,Mt,zt,wt.width,wt.height,0,Tt,Bt,wt.data)}else if(A.isDataArrayTexture)if(W){if(Nt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,bt.width,bt.height,bt.depth),At)if(A.layerUpdates.size>0){const Mt=qx(bt.width,bt.height,A.format,A.type);for(const vt of A.layerUpdates){const Rt=bt.data.subarray(vt*Mt/bt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Tt,Bt,Rt)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Bt,bt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,Tt,Bt,bt.data);else if(A.isData3DTexture)W?(Nt&&n.texStorage3D(o.TEXTURE_3D,Ft,zt,bt.width,bt.height,bt.depth),At&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,Bt,bt.data)):n.texImage3D(o.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,Tt,Bt,bt.data);else if(A.isFramebufferTexture){if(Nt)if(W)n.texStorage2D(o.TEXTURE_2D,Ft,zt,bt.width,bt.height);else{let Mt=bt.width,vt=bt.height;for(let Rt=0;Rt<Ft;Rt++)n.texImage2D(o.TEXTURE_2D,Rt,zt,Mt,vt,0,Tt,Bt,null),Mt>>=1,vt>>=1}}else if(le.length>0){if(W&&Nt){const Mt=Yt(le[0]);n.texStorage2D(o.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}for(let Mt=0,vt=le.length;Mt<vt;Mt++)wt=le[Mt],W?At&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Tt,Bt,wt):n.texImage2D(o.TEXTURE_2D,Mt,zt,Tt,Bt,wt);A.generateMipmaps=!1}else if(W){if(Nt){const Mt=Yt(bt);n.texStorage2D(o.TEXTURE_2D,Ft,zt,Mt.width,Mt.height)}At&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Bt,bt)}else n.texImage2D(o.TEXTURE_2D,0,zt,Tt,Bt,bt);S(A)&&x(pt),Zt.__version=ft.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function ht(F,A,Y){if(A.image.length!==6)return;const pt=_t(F,A),yt=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+Y);const ft=a.get(yt);if(yt.version!==ft.__version||pt===!0){n.activeTexture(o.TEXTURE0+Y);const Zt=Ee.getPrimaries(Ee.workingColorSpace),Ct=A.colorSpace===zr?null:Ee.getPrimaries(A.colorSpace),Xt=A.colorSpace===zr||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!ee&&!bt?Tt[vt]=M(A.image[vt],!0,s.maxCubemapSize):Tt[vt]=bt?A.image[vt].image:A.image[vt],Tt[vt]=Oe(A,Tt[vt]);const Bt=Tt[0],zt=l.convert(A.format,A.colorSpace),wt=l.convert(A.type),le=w(A.internalFormat,zt,wt,A.colorSpace),W=A.isVideoTexture!==!0,Nt=ft.__version===void 0||pt===!0,At=yt.dataReady;let Ft=N(A,Bt);et(o.TEXTURE_CUBE_MAP,A);let Mt;if(ee){W&&Nt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,Bt.width,Bt.height);for(let vt=0;vt<6;vt++){Mt=Tt[vt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];A.format!==aa?zt!==null?W?At&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,zt,ne.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,zt,wt,ne.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,zt,wt,ne.data)}}}else{if(Mt=A.mipmaps,W&&Nt){Mt.length>0&&Ft++;const vt=Yt(Tt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){W?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,zt,wt,Tt[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,Tt[vt].width,Tt[vt].height,0,zt,wt,Tt[vt].data);for(let Rt=0;Rt<Mt.length;Rt++){const Fe=Mt[Rt].image[vt].image;W?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Fe.width,Fe.height,zt,wt,Fe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,Fe.width,Fe.height,0,zt,wt,Fe.data)}}else{W?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,wt,Tt[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,zt,wt,Tt[vt]);for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];W?At&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,zt,wt,ne.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,zt,wt,ne.image[vt])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ft.__version=yt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Dt(F,A,Y,pt,yt,ft){const Zt=l.convert(Y.format,Y.colorSpace),Ct=l.convert(Y.type),Xt=w(Y.internalFormat,Zt,Ct,Y.colorSpace),ee=a.get(A),bt=a.get(Y);if(bt.__renderTarget=A,!ee.__hasExternalTextures){const Tt=Math.max(1,A.width>>ft),Bt=Math.max(1,A.height>>ft);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?n.texImage3D(yt,ft,Xt,Tt,Bt,A.depth,0,Zt,Ct,null):n.texImage2D(yt,ft,Xt,Tt,Bt,0,Zt,Ct,null)}n.bindFramebuffer(o.FRAMEBUFFER,F),Qe(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,yt,bt.__webglTexture,0,k(A)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,yt,bt.__webglTexture,ft),n.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(F,A,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,F),A.depthBuffer){const pt=A.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=C(A.stencilBuffer,yt),Zt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Qe(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),ft,A.width,A.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),ft,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ft,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,F)}else{const pt=A.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Zt=l.convert(ft.format,ft.colorSpace),Ct=l.convert(ft.type),Xt=w(ft.internalFormat,Zt,Ct,ft.colorSpace);Qe(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),Xt,A.width,A.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),Xt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(F,A,Y){const pt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(A.depthTexture);if(yt.__renderTarget=A,(!yt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),yt.__webglTexture===void 0){yt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),et(o.TEXTURE_CUBE_MAP,A.depthTexture);const ee=l.convert(A.depthTexture.format),bt=l.convert(A.depthTexture.type);let Tt;A.depthTexture.format===nr?Tt=o.DEPTH_COMPONENT24:A.depthTexture.format===As&&(Tt=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Tt,A.width,A.height,0,ee,bt,null)}}else ot(A.depthTexture,0);const ft=yt.__webglTexture,Zt=k(A),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Xt=A.depthTexture.format===As?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===nr)Qe(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ft,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ft,0);else if(A.depthTexture.format===As)Qe(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Ct,ft,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Ct,ft,0);else throw new Error("Unknown depthTexture format")}function he(F){const A=a.get(F),Y=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const pt=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const yt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),A.__depthDisposeCallback=yt}A.__boundDepthTexture=pt}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let pt=0;pt<6;pt++)Ht(A.__webglFramebuffer[pt],F,pt);else{const pt=F.texture.mipmaps;pt&&pt.length>0?Ht(A.__webglFramebuffer[0],F,0):Ht(A.__webglFramebuffer,F,0)}else if(Y){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=o.createRenderbuffer(),kt(A.__webglDepthbuffer[pt],F,!1);else{const yt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}else{const pt=F.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),kt(A.__webglDepthbuffer,F,!1);else{const yt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(F,A,Y){const pt=a.get(F);A!==void 0&&Dt(pt.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&he(F)}function _e(F){const A=F.texture,Y=a.get(F),pt=a.get(A);F.addEventListener("dispose",O);const yt=F.textures,ft=F.isWebGLCubeRenderTarget===!0,Zt=yt.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=A.version,c.memory.textures++),ft){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let Xt=0;Xt<A.mipmaps.length;Xt++)Y.__webglFramebuffer[Ct][Xt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,Xt=yt.length;Ct<Xt;Ct++){const ee=a.get(yt[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),c.memory.textures++)}if(F.samples>0&&Qe(F)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const Xt=yt[Ct];Y.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const ee=l.convert(Xt.format,Xt.colorSpace),bt=l.convert(Xt.type),Tt=w(Xt.internalFormat,ee,bt,Xt.colorSpace,F.isXRRenderTarget===!0),Bt=k(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Tt,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(Y.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){n.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),et(o.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let Xt=0;Xt<A.mipmaps.length;Xt++)Dt(Y.__webglFramebuffer[Ct][Xt],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Xt);else Dt(Y.__webglFramebuffer[Ct],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(A)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Ct=0,Xt=yt.length;Ct<Xt;Ct++){const ee=yt[Ct],bt=a.get(ee);let Tt=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Tt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Tt,bt.__webglTexture),et(Tt,ee),Dt(Y.__webglFramebuffer,F,ee,o.COLOR_ATTACHMENT0+Ct,Tt,0),S(ee)&&x(Tt)}n.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ct,pt.__webglTexture),et(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let Xt=0;Xt<A.mipmaps.length;Xt++)Dt(Y.__webglFramebuffer[Xt],F,A,o.COLOR_ATTACHMENT0,Ct,Xt);else Dt(Y.__webglFramebuffer,F,A,o.COLOR_ATTACHMENT0,Ct,0);S(A)&&x(Ct),n.unbindTexture()}F.depthBuffer&&he(F)}function de(F){const A=F.textures;for(let Y=0,pt=A.length;Y<pt;Y++){const yt=A[Y];if(S(yt)){const ft=R(F),Zt=a.get(yt).__webglTexture;n.bindTexture(ft,Zt),x(ft),n.unbindTexture()}}}const we=[],se=[];function sn(F){if(F.samples>0){if(Qe(F)===!1){const A=F.textures,Y=F.width,pt=F.height;let yt=o.COLOR_BUFFER_BIT;const ft=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=a.get(F),Ct=A.length>1;if(Ct)for(let ee=0;ee<A.length;ee++)n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=F.texture.mipmaps;Xt&&Xt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=a.get(A[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,Y,pt,0,0,Y,pt,yt,o.NEAREST),p===!0&&(we.length=0,se.length=0,we.push(o.COLOR_ATTACHMENT0+ee),F.depthBuffer&&F.resolveDepthBuffer===!1&&(we.push(ft),se.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<A.length;ee++){n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const bt=a.get(A[ee]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,bt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function k(F){return Math.min(s.maxSamples,F.samples)}function Qe(F){const A=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Me(F){const A=c.render.frame;_.get(F)!==A&&(_.set(F,A),F.update())}function Oe(F,A){const Y=F.colorSpace,pt=F.format,yt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Y!==Yo&&Y!==zr&&(Ee.getTransfer(Y)===Ge?(pt!==aa||yt!==Xi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",Y)),A}function Yt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.setTexture2D=ot,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=rn,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zC(o,t){function n(a,s=zr){let l;const c=Ee.getTransfer(s);if(a===Xi)return o.UNSIGNED_BYTE;if(a===i0)return o.UNSIGNED_SHORT_4_4_4_4;if(a===a0)return o.UNSIGNED_SHORT_5_5_5_1;if(a===AS)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===RS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===ES)return o.BYTE;if(a===TS)return o.SHORT;if(a===du)return o.UNSIGNED_SHORT;if(a===n0)return o.INT;if(a===ba)return o.UNSIGNED_INT;if(a===va)return o.FLOAT;if(a===er)return o.HALF_FLOAT;if(a===CS)return o.ALPHA;if(a===wS)return o.RGB;if(a===aa)return o.RGBA;if(a===nr)return o.DEPTH_COMPONENT;if(a===As)return o.DEPTH_STENCIL;if(a===DS)return o.RED;if(a===r0)return o.RED_INTEGER;if(a===qo)return o.RG;if(a===s0)return o.RG_INTEGER;if(a===o0)return o.RGBA_INTEGER;if(a===uf||a===cf||a===ff||a===hf)if(c===Ge)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===uf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===uf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===tm||a===em||a===nm||a===im)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===tm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===em)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===nm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===im)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===am||a===rm||a===sm||a===om||a===lm||a===um||a===cm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===am||a===rm)return c===Ge?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===sm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===om)return l.COMPRESSED_R11_EAC;if(a===lm)return l.COMPRESSED_SIGNED_R11_EAC;if(a===um)return l.COMPRESSED_RG11_EAC;if(a===cm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===fm||a===hm||a===dm||a===pm||a===mm||a===_m||a===gm||a===vm||a===xm||a===ym||a===Sm||a===Mm||a===bm||a===Em)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===fm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===mm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===_m)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===gm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===xm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===ym)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Sm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Mm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bm)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Em)return c===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Tm||a===Am||a===Rm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Tm)return c===Ge?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Am)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Rm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Cm||a===wm||a===Dm||a===Um)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Cm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===wm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Dm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Um)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===pu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const FC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
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

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new WS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new sa({vertexShader:FC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ea(new wf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends Zo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new IC,x={},R=n.getContextAttributes();let w=null,C=null;const N=[],P=[],O=new Le;let I=null;const T=new ki;T.viewport=new dn;const L=new ki;L.viewport=new dn;const H=[T,L],j=new ZT;let Q=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ht=N[st];return ht===void 0&&(ht=new vp,N[st]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(st){let ht=N[st];return ht===void 0&&(ht=new vp,N[st]=ht),ht.getGripSpace()},this.getHand=function(st){let ht=N[st];return ht===void 0&&(ht=new vp,N[st]=ht),ht.getHandSpace()};function ot(st){const ht=P.indexOf(st.inputSource);if(ht===-1)return;const Dt=N[ht];Dt!==void 0&&(Dt.update(st.inputSource,st.frame,d||c),Dt.dispatchEvent({type:st.type,data:st.inputSource}))}function B(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let st=0;st<N.length;st++){const ht=P[st];ht!==null&&(P[st]=null,N[st].disconnect(ht))}Q=null,ut=null,S.reset();for(const st in x)delete x[st];t.setRenderTarget(w),y=null,v=null,g=null,s=null,C=null,Lt.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){l=st,a.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){f=st,a.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(st){d=st},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Ht=null;R.depth&&(Ht=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=R.stencil?As:nr,kt=R.stencil?pu:ba);const he={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(he),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Sa(v.textureWidth,v.textureHeight,{format:aa,type:Xi,depthTexture:new _u(v.textureWidth,v.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Dt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,Dt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Sa(y.framebufferWidth,y.framebufferHeight,{format:aa,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Lt.setContext(s),Lt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(st){for(let ht=0;ht<st.removed.length;ht++){const Dt=st.removed[ht],kt=P.indexOf(Dt);kt>=0&&(P[kt]=null,N[kt].disconnect(Dt))}for(let ht=0;ht<st.added.length;ht++){const Dt=st.added[ht];let kt=P.indexOf(Dt);if(kt===-1){for(let he=0;he<N.length;he++)if(he>=P.length){P.push(Dt),kt=he;break}else if(P[he]===null){P[he]=Dt,kt=he;break}if(kt===-1)break}const Ht=N[kt];Ht&&Ht.connect(Dt)}}const $=new it,St=new it;function xt(st,ht,Dt){$.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(Dt.matrixWorld);const kt=$.distanceTo(St),Ht=ht.projectionMatrix.elements,he=Dt.projectionMatrix.elements,rn=Ht[14]/(Ht[10]-1),_e=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],sn=(he[8]+1)/he[0],k=rn*se,Qe=rn*sn,Me=kt/(-se+sn),Oe=Me*-se;if(ht.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Oe),st.translateZ(Me),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ht[10]===-1)st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Yt=rn+Me,F=_e+Me,A=k-Oe,Y=Qe+(kt-Oe),pt=de*_e/F*Yt,yt=we*_e/F*Yt;st.projectionMatrix.makePerspective(A,Y,pt,yt,Yt,F),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function z(st,ht){ht===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ht.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ht=st.near,Dt=st.far;S.texture!==null&&(S.depthNear>0&&(ht=S.depthNear),S.depthFar>0&&(Dt=S.depthFar)),j.near=L.near=T.near=ht,j.far=L.far=T.far=Dt,(Q!==j.near||ut!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),Q=j.near,ut=j.far),j.layers.mask=st.layers.mask|6,T.layers.mask=j.layers.mask&3,L.layers.mask=j.layers.mask&5;const kt=st.parent,Ht=j.cameras;z(j,kt);for(let he=0;he<Ht.length;he++)z(Ht[he],kt);Ht.length===2?xt(j,T,L):j.projectionMatrix.copy(T.projectionMatrix),et(st,j,kt)};function et(st,ht,Dt){Dt===null?st.matrix.copy(ht.matrixWorld):(st.matrix.copy(Dt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ht.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ht.projectionMatrix),st.projectionMatrixInverse.copy(ht.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Nm*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(st){p=st,v!==null&&(v.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(st){return x[st]};let _t=null;function Et(st,ht){if(_=ht.getViewerPose(d||c),E=ht,_!==null){const Dt=_.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let kt=!1;Dt.length!==j.cameras.length&&(j.cameras.length=0,kt=!0);for(let _e=0;_e<Dt.length;_e++){const de=Dt[_e];let we=null;if(y!==null)we=y.getViewport(de);else{const sn=g.getViewSubImage(v,de);we=sn.viewport,_e===0&&(t.setRenderTargetTextures(C,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(C))}let se=H[_e];se===void 0&&(se=new ki,se.layers.enable(_e),se.viewport=new dn,H[_e]=se),se.matrix.fromArray(de.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(de.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(j.matrix.copy(se.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),kt===!0&&j.cameras.push(se)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const _e=g.getDepthInformation(Dt[0]);_e&&_e.isValid&&_e.texture&&S.init(_e,s.renderState)}if(Ht&&Ht.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let _e=0;_e<Dt.length;_e++){const de=Dt[_e].camera;if(de){let we=x[de];we||(we=new WS,x[de]=we);const se=g.getCameraImage(de);we.sourceTexture=se}}}}for(let Dt=0;Dt<N.length;Dt++){const kt=P[Dt],Ht=N[Dt];kt!==null&&Ht!==void 0&&Ht.update(kt,ht,d||c)}_t&&_t(st,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Lt=new YS;Lt.setAnimationLoop(Et),this.setAnimationLoop=function(st){_t=st},this.dispose=function(){}}}const xs=new ir,GC=new pn;function VC(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,IS(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,R,w,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,R,w):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ci&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ci&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=t.get(x),w=R.envMap,C=R.envMapRotation;w&&(S.envMap.value=w,xs.copy(C),xs.x*=-1,xs.y*=-1,xs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),S.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(xs)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,R,w){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=w*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ci&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const R=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function kC(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,w){const C=w.program;a.uniformBlockBinding(R,C)}function d(R,w){let C=s[R.id];C===void 0&&(E(R),C=_(R),s[R.id]=C,R.addEventListener("dispose",S));const N=w.program;a.updateUBOMapping(R,N);const P=t.render.frame;l[R.id]!==P&&(v(R),l[R.id]=P)}function _(R){const w=g();R.__bindingPointIndex=w;const C=o.createBuffer(),N=R.__size,P=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,N,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,C),C}function g(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const w=s[R.id],C=R.uniforms,N=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let P=0,O=C.length;P<O;P++){const I=Array.isArray(C[P])?C[P]:[C[P]];for(let T=0,L=I.length;T<L;T++){const H=I[T];if(y(H,P,T,N)===!0){const j=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ot=0;ot<Q.length;ot++){const B=Q[ot],G=M(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,j+ut,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ut),ut+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(R,w,C,N){const P=R.value,O=w+"_"+C;if(N[O]===void 0)return typeof P=="number"||typeof P=="boolean"?N[O]=P:N[O]=P.clone(),!0;{const I=N[O];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return N[O]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function E(R){const w=R.uniforms;let C=0;const N=16;for(let O=0,I=w.length;O<I;O++){const T=Array.isArray(w[O])?w[O]:[w[O]];for(let L=0,H=T.length;L<H;L++){const j=T[L],Q=Array.isArray(j.value)?j.value:[j.value];for(let ut=0,ot=Q.length;ut<ot;ut++){const B=Q[ut],G=M(B),$=C%N,St=$%G.boundary,xt=$+St;C+=St,xt!==0&&N-xt<G.storage&&(C+=N-xt),j.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=C,C+=G.storage}}}const P=C%N;return P>0&&(C+=N-P),R.__size=C,R.__cache={},this}function M(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",R),w}function S(R){const w=R.target;w.removeEventListener("dispose",S);const C=c.indexOf(w.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function x(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},l={}}return{bind:p,update:d,dispose:x}}const XC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function WC(){return ha===null&&(ha=new HT(XC,16,16,qo,er),ha.name="DFG_LUT",ha.minFilter=Yn,ha.magFilter=Yn,ha.wrapS=Ka,ha.wrapT=Ka,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class qC{constructor(t={}){const{canvas:n=dT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Xi}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const M=y,S=new Set([o0,s0,r0]),x=new Set([Xi,ba,du,pu,i0,a0]),R=new Uint32Array(4),w=new Int32Array(4);let C=null,N=null;const P=[],O=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=Vi;let H=0,j=0,Q=null,ut=-1,ot=null;const B=new dn,G=new dn;let $=null;const St=new ze(0);let xt=0,z=n.width,et=n.height,_t=1,Et=null,Lt=null;const st=new dn(0,0,z,et),ht=new dn(0,0,z,et);let Dt=!1;const kt=new kS;let Ht=!1,he=!1;const rn=new pn,_e=new it,de=new dn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function sn(){return Q===null?_t:1}let k=a;function Qe(U,Z){return n.getContext(U,Z)}try{const U={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${e0}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",be,!1),k===null){const Z="webgl2";if(k=Qe(Z,U),k===null)throw Qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ce("WebGLRenderer: "+U.message),U}let Me,Oe,Yt,F,A,Y,pt,yt,ft,Zt,Ct,Xt,ee,bt,Tt,Bt,zt,wt,le,W,Nt,At,Ft,Mt;function vt(){Me=new W3(k),Me.init(),At=new zC(k,Me),Oe=new z3(k,Me,t,At),Yt=new OC(k,Me),Oe.reversedDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),F=new j3(k),A=new xC,Y=new PC(k,Me,Yt,A,Oe,At,F),pt=new B3(T),yt=new X3(T),ft=new JT(k),Ft=new O3(k,ft),Zt=new q3(k,ft,F,Ft),Ct=new K3(k,Zt,ft,F),le=new Z3(k,Oe,Y),Bt=new F3(A),Xt=new vC(T,pt,yt,Me,Oe,Ft,Bt),ee=new VC(T,A),bt=new SC,Tt=new RC(Me),wt=new L3(T,pt,yt,Yt,Ct,E,p),zt=new NC(T,Ct,Oe),Mt=new kC(k,F,Oe,Yt),W=new P3(k,Me,F),Nt=new Y3(k,Me,F),F.programs=Xt.programs,T.capabilities=Oe,T.extensions=Me,T.properties=A,T.renderLists=bt,T.shadowMap=zt,T.state=Yt,T.info=F}vt(),M!==Xi&&(I=new J3(M,n.width,n.height,s,l));const Rt=new HC(T,k);this.xr=Rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=Me.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Me.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(U){U!==void 0&&(_t=U,this.setSize(z,et,!1))},this.getSize=function(U){return U.set(z,et)},this.setSize=function(U,Z,lt=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,et=Z,n.width=Math.floor(U*_t),n.height=Math.floor(Z*_t),lt===!0&&(n.style.width=U+"px",n.style.height=Z+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(z*_t,et*_t).floor()},this.setDrawingBufferSize=function(U,Z,lt){z=U,et=Z,_t=lt,n.width=Math.floor(U*lt),n.height=Math.floor(Z*lt),this.setViewport(0,0,U,Z)},this.setEffects=function(U){if(M===Xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let Z=0;Z<U.length;Z++)if(U[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(B)},this.getViewport=function(U){return U.copy(st)},this.setViewport=function(U,Z,lt,at){U.isVector4?st.set(U.x,U.y,U.z,U.w):st.set(U,Z,lt,at),Yt.viewport(B.copy(st).multiplyScalar(_t).round())},this.getScissor=function(U){return U.copy(ht)},this.setScissor=function(U,Z,lt,at){U.isVector4?ht.set(U.x,U.y,U.z,U.w):ht.set(U,Z,lt,at),Yt.scissor(G.copy(ht).multiplyScalar(_t).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(U){Yt.setScissorTest(Dt=U)},this.setOpaqueSort=function(U){Et=U},this.setTransparentSort=function(U){Lt=U},this.getClearColor=function(U){return U.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(U=!0,Z=!0,lt=!0){let at=0;if(U){let J=!1;if(Q!==null){const Ut=Q.texture.format;J=S.has(Ut)}if(J){const Ut=Q.texture.type,It=x.has(Ut),Ot=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Ot.r,Jt=Ot.g,qt=Ot.b;It?(R[0]=Wt,R[1]=Jt,R[2]=qt,R[3]=Gt,k.clearBufferuiv(k.COLOR,0,R)):(w[0]=Wt,w[1]=Jt,w[2]=qt,w[3]=Gt,k.clearBufferiv(k.COLOR,0,w))}else at|=k.COLOR_BUFFER_BIT}Z&&(at|=k.DEPTH_BUFFER_BIT),lt&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",be,!1),wt.dispose(),bt.dispose(),Tt.dispose(),A.dispose(),pt.dispose(),yt.dispose(),Ct.dispose(),Ft.dispose(),Mt.dispose(),Xt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Os),Rt.removeEventListener("sessionend",$o),oa.stop()};function ne(U){U.preventDefault(),Rx("WebGLRenderer: Context Lost."),L=!0}function Fe(){Rx("WebGLRenderer: Context Restored."),L=!1;const U=F.autoReset,Z=zt.enabled,lt=zt.autoUpdate,at=zt.needsUpdate,J=zt.type;vt(),F.autoReset=U,zt.enabled=Z,zt.autoUpdate=lt,zt.needsUpdate=at,zt.type=J}function be(U){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Vn(U){const Z=U.target;Z.removeEventListener("dispose",Vn),ji(Z)}function ji(U){bu(U),A.remove(U)}function bu(U){const Z=A.get(U).programs;Z!==void 0&&(Z.forEach(function(lt){Xt.releaseProgram(lt)}),U.isShaderMaterial&&Xt.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,lt,at,J,Ut){Z===null&&(Z=we);const It=J.isMesh&&J.matrixWorld.determinant()<0,Ot=jr(U,Z,lt,at,J);Yt.setMaterial(at,It);let Gt=lt.index,Wt=1;if(at.wireframe===!0){if(Gt=Zt.getWireframeAttribute(lt),Gt===void 0)return;Wt=2}const Jt=lt.drawRange,qt=lt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),De=Math.min(De,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Je=De-$t;if(Je<0||Je===1/0)return;Ft.setup(J,at,Ot,lt,Gt);let je,Pe=W;if(Gt!==null&&(je=ft.get(Gt),Pe=Nt,Pe.setIndex(je)),J.isMesh)at.wireframe===!0?(Yt.setLineWidth(at.wireframeLinewidth*sn()),Pe.setMode(k.LINES)):Pe.setMode(k.TRIANGLES);else if(J.isLine){let Kt=at.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*sn()),J.isLineSegments?Pe.setMode(k.LINES):J.isLineLoop?Pe.setMode(k.LINE_LOOP):Pe.setMode(k.LINE_STRIP)}else J.isPoints?Pe.setMode(k.POINTS):J.isSprite&&Pe.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)mu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Kt=J._multiDrawStarts,Ue=J._multiDrawCounts,ie=J._multiDrawCount,Un=Gt?ft.get(Gt).bytesPerElement:1,Ta=A.get(at).currentProgram.getUniforms();for(let Nn=0;Nn<ie;Nn++)Ta.setValue(k,"_gl_DrawID",Nn),Pe.render(Kt[Nn]/Un,Ue[Nn])}else if(J.isInstancedMesh)Pe.renderInstances($t,Je,J.count);else if(lt.isInstancedBufferGeometry){const Kt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,Kt);Pe.renderInstances($t,Je,Ue)}else Pe.render($t,Je)};function Qo(U,Z,lt){U.transparent===!0&&U.side===_a&&U.forceSinglePass===!1?(U.side=ci,U.needsUpdate=!0,zs(U,Z,lt),U.side=qr,U.needsUpdate=!0,zs(U,Z,lt),U.side=_a):zs(U,Z,lt)}this.compile=function(U,Z,lt=null){lt===null&&(lt=U),N=Tt.get(lt),N.init(Z),O.push(N),lt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(N.pushLight(J),J.castShadow&&N.pushShadow(J))}),U!==lt&&U.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(N.pushLight(J),J.castShadow&&N.pushShadow(J))}),N.setupLights();const at=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ut=J.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Ot=Ut[It];Qo(Ot,lt,J),at.add(Ot)}else Qo(Ut,lt,J),at.add(Ut)}),N=O.pop(),at},this.compileAsync=function(U,Z,lt=null){const at=this.compile(U,Z,lt);return new Promise(J=>{function Ut(){if(at.forEach(function(It){A.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){J(U);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ls=null;function Jo(U){Ls&&Ls(U)}function Os(){oa.stop()}function $o(){oa.start()}const oa=new YS;oa.setAnimationLoop(Jo),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(U){Ls=U,Rt.setAnimationLoop(U),U===null?oa.stop():oa.start()},Rt.addEventListener("sessionstart",Os),Rt.addEventListener("sessionend",$o),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,at=I!==null&&(Q===null||lt)&&I.begin(T,Q);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,Z,Q),N=Tt.get(U,O.length),N.init(Z),O.push(N),rn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),kt.setFromProjectionMatrix(rn,xa,Z.reversedDepth),he=this.localClippingEnabled,Ht=Bt.init(this.clippingPlanes,he),C=bt.get(U,P.length),C.init(),P.push(C),Rt.enabled===!0&&Rt.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&Di(It,Z,-1/0,T.sortObjects)}Di(U,Z,0,T.sortObjects),C.finish(),T.sortObjects===!0&&C.sort(Et,Lt),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&wt.addToRenderList(C,U),this.info.render.frame++,Ht===!0&&Bt.beginShadows();const J=N.state.shadowsArray;if(zt.render(J,U,Z),Ht===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&I.hasRenderPass())===!1){const It=C.opaque,Ot=C.transmissive;if(N.setupLights(),Z.isArrayCamera){const Gt=Z.cameras;if(Ot.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];Dn(It,Ot,U,qt)}se&&wt.render(U);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];mn(C,U,qt,qt.viewport)}}else Ot.length>0&&Dn(It,Ot,U,Z),se&&wt.render(U),mn(C,U,Z)}Q!==null&&j===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),at&&I.end(T),U.isScene===!0&&U.onAfterRender(T,U,Z),Ft.resetDefaultState(),ut=-1,ot=null,O.pop(),O.length>0?(N=O[O.length-1],Ht===!0&&Bt.setGlobalState(T.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?C=P[P.length-1]:C=null};function Di(U,Z,lt,at){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)lt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)N.pushLight(U),U.castShadow&&N.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||kt.intersectsSprite(U)){at&&de.setFromMatrixPosition(U.matrixWorld).applyMatrix4(rn);const It=Ct.update(U),Ot=U.material;Ot.visible&&C.push(U,It,Ot,lt,de.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||kt.intersectsObject(U))){const It=Ct.update(U),Ot=U.material;if(at&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),de.copy(U.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(U.matrixWorld).applyMatrix4(rn)),Array.isArray(Ot)){const Gt=It.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Ot[qt.materialIndex];$t&&$t.visible&&C.push(U,It,$t,lt,de.z,qt)}}else Ot.visible&&C.push(U,It,Ot,lt,de.z,null)}}const Ut=U.children;for(let It=0,Ot=Ut.length;It<Ot;It++)Di(Ut[It],Z,lt,at)}function mn(U,Z,lt,at){const{opaque:J,transmissive:Ut,transparent:It}=U;N.setupLightsView(lt),Ht===!0&&Bt.setGlobalState(T.clippingPlanes,lt),at&&Yt.viewport(B.copy(at)),J.length>0&&Zi(J,Z,lt),Ut.length>0&&Zi(Ut,Z,lt),It.length>0&&Zi(It,Z,lt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Dn(U,Z,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[at.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[at.id]=new Sa(1,1,{generateMipmaps:!0,type:$t?er:Xi,minFilter:Ts,samples:Oe.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}const Ut=N.state.transmissionRenderTarget[at.id],It=at.viewport||B;Ut.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Ot=T.getRenderTarget(),Gt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Ut),T.getClearColor(St),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),se&&wt.render(lt);const Jt=T.toneMapping;T.toneMapping=ya;const qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),N.setupLightsView(at),Ht===!0&&Bt.setGlobalState(T.clippingPlanes,at),Zi(U,lt,at),Y.updateMultisampleRenderTarget(Ut),Y.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Je=Z.length;De<Je;De++){const je=Z[De],{object:Pe,geometry:Kt,material:Ue,group:ie}=je;if(Ue.side===_a&&Pe.layers.test(at.layers)){const Un=Ue.side;Ue.side=ci,Ue.needsUpdate=!0,Ps(Pe,lt,at,Kt,Ue,ie),Ue.side=Un,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(Y.updateMultisampleRenderTarget(Ut),Y.updateRenderTargetMipmap(Ut))}T.setRenderTarget(Ot,Gt,Wt),T.setClearColor(St,xt),qt!==void 0&&(at.viewport=qt),T.toneMapping=Jt}function Zi(U,Z,lt){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ut=U.length;J<Ut;J++){const It=U[J],{object:Ot,geometry:Gt,group:Wt}=It;let Jt=It.material;Jt.allowOverride===!0&&at!==null&&(Jt=at),Ot.layers.test(lt.layers)&&Ps(Ot,Z,lt,Gt,Jt,Wt)}}function Ps(U,Z,lt,at,J,Ut){U.onBeforeRender(T,Z,lt,at,J,Ut),U.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(T,Z,lt,at,U,Ut),J.transparent===!0&&J.side===_a&&J.forceSinglePass===!1?(J.side=ci,J.needsUpdate=!0,T.renderBufferDirect(lt,Z,at,J,U,Ut),J.side=qr,J.needsUpdate=!0,T.renderBufferDirect(lt,Z,at,J,U,Ut),J.side=_a):T.renderBufferDirect(lt,Z,at,J,U,Ut),U.onAfterRender(T,Z,lt,at,J,Ut)}function zs(U,Z,lt){Z.isScene!==!0&&(Z=we);const at=A.get(U),J=N.state.lights,Ut=N.state.shadowsArray,It=J.state.version,Ot=Xt.getParameters(U,J.state,Ut,Z,lt),Gt=Xt.getProgramCacheKey(Ot);let Wt=at.programs;at.environment=U.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(U.isMeshStandardMaterial?yt:pt).get(U.envMap||at.environment),at.envMapRotation=at.environment!==null&&U.envMap===null?Z.environmentRotation:U.envMapRotation,Wt===void 0&&(U.addEventListener("dispose",Vn),Wt=new Map,at.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(at.currentProgram===Jt&&at.lightsStateVersion===It)return tl(U,Ot),Jt}else Ot.uniforms=Xt.getUniforms(U),U.onBeforeCompile(Ot,T),Jt=Xt.acquireProgram(Ot,Gt),Wt.set(Gt,Jt),at.uniforms=Ot.uniforms;const qt=at.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qt.clippingPlanes=Bt.uniform),tl(U,Ot),at.needsLights=ar(U),at.lightsStateVersion=It,at.needsLights&&(qt.ambientLightColor.value=J.state.ambient,qt.lightProbe.value=J.state.probe,qt.directionalLights.value=J.state.directional,qt.directionalLightShadows.value=J.state.directionalShadow,qt.spotLights.value=J.state.spot,qt.spotLightShadows.value=J.state.spotShadow,qt.rectAreaLights.value=J.state.rectArea,qt.ltc_1.value=J.state.rectAreaLTC1,qt.ltc_2.value=J.state.rectAreaLTC2,qt.pointLights.value=J.state.point,qt.pointLightShadows.value=J.state.pointShadow,qt.hemisphereLights.value=J.state.hemi,qt.directionalShadowMap.value=J.state.directionalShadowMap,qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qt.spotShadowMap.value=J.state.spotShadowMap,qt.spotLightMatrix.value=J.state.spotLightMatrix,qt.spotLightMap.value=J.state.spotLightMap,qt.pointShadowMap.value=J.state.pointShadowMap,qt.pointShadowMatrix.value=J.state.pointShadowMatrix),at.currentProgram=Jt,at.uniformsList=null,Jt}function Eu(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=df.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function tl(U,Z){const lt=A.get(U);lt.outputColorSpace=Z.outputColorSpace,lt.batching=Z.batching,lt.batchingColor=Z.batchingColor,lt.instancing=Z.instancing,lt.instancingColor=Z.instancingColor,lt.instancingMorph=Z.instancingMorph,lt.skinning=Z.skinning,lt.morphTargets=Z.morphTargets,lt.morphNormals=Z.morphNormals,lt.morphColors=Z.morphColors,lt.morphTargetsCount=Z.morphTargetsCount,lt.numClippingPlanes=Z.numClippingPlanes,lt.numIntersection=Z.numClipIntersection,lt.vertexAlphas=Z.vertexAlphas,lt.vertexTangents=Z.vertexTangents,lt.toneMapping=Z.toneMapping}function jr(U,Z,lt,at,J){Z.isScene!==!0&&(Z=we),Y.resetTextureUnits();const Ut=Z.fog,It=at.isMeshStandardMaterial?Z.environment:null,Ot=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Yo,Gt=(at.isMeshStandardMaterial?yt:pt).get(at.envMap||It),Wt=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Je=ya;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Je=T.toneMapping);const je=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Pe=je!==void 0?je.length:0,Kt=A.get(at),Ue=N.state.lights;if(Ht===!0&&(he===!0||U!==ot)){const On=U===ot&&at.id===ut;Bt.setState(at,U,On)}let ie=!1;at.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ue.state.version||Kt.outputColorSpace!==Ot||J.isBatchedMesh&&Kt.batching===!1||!J.isBatchedMesh&&Kt.batching===!0||J.isBatchedMesh&&Kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Kt.instancing===!1||!J.isInstancedMesh&&Kt.instancing===!0||J.isSkinnedMesh&&Kt.skinning===!1||!J.isSkinnedMesh&&Kt.skinning===!0||J.isInstancedMesh&&Kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Kt.instancingMorph===!1&&J.morphTexture!==null||Kt.envMap!==Gt||at.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==De||Kt.toneMapping!==Je||Kt.morphTargetsCount!==Pe)&&(ie=!0):(ie=!0,Kt.__version=at.version);let Un=Kt.currentProgram;ie===!0&&(Un=zs(at,Z,J));let Ta=!1,Nn=!1,Ui=!1;const Be=Un.getUniforms(),Ln=Kt.uniforms;if(Yt.useProgram(Un.program)&&(Ta=!0,Nn=!0,Ui=!0),at.id!==ut&&(ut=at.id,Nn=!0),Ta||ot!==U){Yt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Be.setValue(k,"projectionMatrix",U.projectionMatrix),Be.setValue(k,"viewMatrix",U.matrixWorldInverse);const Pn=Be.map.cameraPosition;Pn!==void 0&&Pn.setValue(k,_e.setFromMatrixPosition(U.matrixWorld)),Oe.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),ot!==U&&(ot=U,Nn=!0,Ui=!0)}if(Kt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Be.setValue(k,"directionalShadowMap",Ue.state.directionalShadowMap,Y),Ue.state.spotShadowMap.length>0&&Be.setValue(k,"spotShadowMap",Ue.state.spotShadowMap,Y),Ue.state.pointShadowMap.length>0&&Be.setValue(k,"pointShadowMap",Ue.state.pointShadowMap,Y)),J.isSkinnedMesh){Be.setOptional(k,J,"bindMatrix"),Be.setOptional(k,J,"bindMatrixInverse");const On=J.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Be.setValue(k,"boneTexture",On.boneTexture,Y))}J.isBatchedMesh&&(Be.setOptional(k,J,"batchingTexture"),Be.setValue(k,"batchingTexture",J._matricesTexture,Y),Be.setOptional(k,J,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",J._indirectTexture,Y),Be.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",J._colorsTexture,Y));const bn=lt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&le.update(J,lt,Un),(Nn||Kt.receiveShadow!==J.receiveShadow)&&(Kt.receiveShadow=J.receiveShadow,Be.setValue(k,"receiveShadow",J.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Ln.envMap.value=Gt,Ln.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=WC()),Nn&&(Be.setValue(k,"toneMappingExposure",T.toneMappingExposure),Kt.needsLights&&el(Ln,Ui),Ut&&at.fog===!0&&ee.refreshFogUniforms(Ln,Ut),ee.refreshMaterialUniforms(Ln,at,_t,et,N.state.transmissionRenderTarget[U.id]),df.upload(k,Eu(Kt),Ln,Y)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(df.upload(k,Eu(Kt),Ln,Y),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(k,"center",J.center),Be.setValue(k,"modelViewMatrix",J.modelViewMatrix),Be.setValue(k,"normalMatrix",J.normalMatrix),Be.setValue(k,"modelMatrix",J.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const On=at.uniformsGroups;for(let Pn=0,Fs=On.length;Pn<Fs;Pn++){const Ki=On[Pn];Mt.update(Ki,Un),Mt.bind(Ki,Un)}}return Un}function el(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function ar(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(U,Z,lt){const at=A.get(U);at.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),A.get(U.texture).__webglTexture=Z,A.get(U.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,Z){const lt=A.get(U);lt.__webglFramebuffer=Z,lt.__useDefaultFramebuffer=Z===void 0};const rr=k.createFramebuffer();this.setRenderTarget=function(U,Z=0,lt=0){Q=U,H=Z,j=lt;let at=null,J=!1,Ut=!1;if(U){const Ot=A.get(U);if(Ot.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(k.FRAMEBUFFER,Ot.__webglFramebuffer),B.copy(U.viewport),G.copy(U.scissor),$=U.scissorTest,Yt.viewport(B),Yt.scissor(G),Yt.setScissorTest($),ut=-1;return}else if(Ot.__webglFramebuffer===void 0)Y.setupRenderTarget(U);else if(Ot.__hasExternalTextures)Y.rebindTextures(U,A.get(U.texture).__webglTexture,A.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Jt=U.depthTexture;if(Ot.__boundDepthTexture!==Jt){if(Jt!==null&&A.has(Jt)&&(U.width!==Jt.image.width||U.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(U)}}const Gt=U.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=A.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?at=Wt[Z][lt]:at=Wt[Z],J=!0):U.samples>0&&Y.useMultisampledRTT(U)===!1?at=A.get(U).__webglMultisampledFramebuffer:Array.isArray(Wt)?at=Wt[lt]:at=Wt,B.copy(U.viewport),G.copy(U.scissor),$=U.scissorTest}else B.copy(st).multiplyScalar(_t).floor(),G.copy(ht).multiplyScalar(_t).floor(),$=Dt;if(lt!==0&&(at=rr),Yt.bindFramebuffer(k.FRAMEBUFFER,at)&&Yt.drawBuffers(U,at),Yt.viewport(B),Yt.scissor(G),Yt.setScissorTest($),J){const Ot=A.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ot.__webglTexture,lt)}else if(Ut){const Ot=Z;for(let Gt=0;Gt<U.textures.length;Gt++){const Wt=A.get(U.textures[Gt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,lt,Ot)}}else if(U!==null&&lt!==0){const Ot=A.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,lt)}ut=-1},this.readRenderTargetPixels=function(U,Z,lt,at,J,Ut,It,Ot=0){if(!(U&&U.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Yt.bindFramebuffer(k.FRAMEBUFFER,Gt);try{const Wt=U.textures[Ot],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-at&&lt>=0&&lt<=U.height-J&&(U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(Z,lt,at,J,At.convert(Jt),At.convert(qt),Ut))}finally{const Wt=Q!==null?A.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(U,Z,lt,at,J,Ut,It,Ot=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(Z>=0&&Z<=U.width-at&&lt>=0&&lt<=U.height-J){Yt.bindFramebuffer(k.FRAMEBUFFER,Gt);const Wt=U.textures[Ot],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.bufferData(k.PIXEL_PACK_BUFFER,Ut.byteLength,k.STREAM_READ),U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(Z,lt,at,J,At.convert(Jt),At.convert(qt),0);const De=Q!==null?A.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(k.FRAMEBUFFER,De);const Je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await pT(k,Je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ut),k.deleteBuffer($t),k.deleteSync(Je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,Z=null,lt=0){const at=Math.pow(2,-lt),J=Math.floor(U.image.width*at),Ut=Math.floor(U.image.height*at),It=Z!==null?Z.x:0,Ot=Z!==null?Z.y:0;Y.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,It,Ot,J,Ut),Yt.unbindTexture()};const Zr=k.createFramebuffer(),sr=k.createFramebuffer();this.copyTextureToTexture=function(U,Z,lt=null,at=null,J=0,Ut=null){Ut===null&&(J!==0?(mu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=J,J=0):Ut=0);let It,Ot,Gt,Wt,Jt,qt,$t,De,Je;const je=U.isCompressedTexture?U.mipmaps[Ut]:U.image;if(lt!==null)It=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,Gt=lt.isBox3?lt.max.z-lt.min.z:1,Wt=lt.min.x,Jt=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const bn=Math.pow(2,-J);It=Math.floor(je.width*bn),Ot=Math.floor(je.height*bn),U.isDataArrayTexture?Gt=je.depth:U.isData3DTexture?Gt=Math.floor(je.depth*bn):Gt=1,Wt=0,Jt=0,qt=0}at!==null?($t=at.x,De=at.y,Je=at.z):($t=0,De=0,Je=0);const Pe=At.convert(Z.format),Kt=At.convert(Z.type);let Ue;Z.isData3DTexture?(Y.setTexture3D(Z,0),Ue=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Y.setTexture2DArray(Z,0),Ue=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(Z,0),Ue=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const ie=k.getParameter(k.UNPACK_ROW_LENGTH),Un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ta=k.getParameter(k.UNPACK_SKIP_PIXELS),Nn=k.getParameter(k.UNPACK_SKIP_ROWS),Ui=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qt);const Be=U.isDataArrayTexture||U.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(U.isDepthTexture){const bn=A.get(U),On=A.get(Z),Pn=A.get(bn.__renderTarget),Fs=A.get(On.__renderTarget);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let Ki=0;Ki<Gt;Ki++)Be&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(U).__webglTexture,J,qt+Ki),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(Z).__webglTexture,Ut,Je+Ki)),k.blitFramebuffer(Wt,Jt,It,Ot,$t,De,It,Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||A.has(U)){const bn=A.get(U),On=A.get(Z);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,Zr),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,sr);for(let Pn=0;Pn<Gt;Pn++)Be?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bn.__webglTexture,J,qt+Pn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bn.__webglTexture,J),Ln?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,On.__webglTexture,Ut,Je+Pn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,On.__webglTexture,Ut),J!==0?k.blitFramebuffer(Wt,Jt,It,Ot,$t,De,It,Ot,k.COLOR_BUFFER_BIT,k.NEAREST):Ln?k.copyTexSubImage3D(Ue,Ut,$t,De,Je+Pn,Wt,Jt,It,Ot):k.copyTexSubImage2D(Ue,Ut,$t,De,Wt,Jt,It,Ot);Yt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ln?U.isDataTexture||U.isData3DTexture?k.texSubImage3D(Ue,Ut,$t,De,Je,It,Ot,Gt,Pe,Kt,je.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,Ut,$t,De,Je,It,Ot,Gt,Pe,je.data):k.texSubImage3D(Ue,Ut,$t,De,Je,It,Ot,Gt,Pe,Kt,je):U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ut,$t,De,It,Ot,Pe,Kt,je.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ut,$t,De,je.width,je.height,Pe,je.data):k.texSubImage2D(k.TEXTURE_2D,Ut,$t,De,It,Ot,Pe,Kt,je);k.pixelStorei(k.UNPACK_ROW_LENGTH,ie),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ta),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ui),Ut===0&&Z.generateMipmaps&&k.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(U){A.get(U).__webglFramebuffer===void 0&&Y.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Y.setTextureCube(U,0):U.isData3DTexture?Y.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Y.setTexture2DArray(U,0):Y.setTexture2D(U,0),Yt.unbindTexture()},this.resetState=function(){H=0,j=0,Q=null,Yt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ee._getUnpackColorSpace()}}const JS=({activeSection:o})=>{const t=Te.useRef(null),n=Te.useRef(null),a=Te.useRef(null),s=Te.useRef(null),l=Te.useRef(null);return Te.useEffect(()=>{const c=t.current;if(!c)return;const f=new IT,p=new ki(75,window.innerWidth/window.innerHeight,.1,1e3);p.position.z=6,n.current=p;const d=new qC({antialias:!0,alpha:!0});d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.appendChild(d.domElement);const _=`
      varying vec3 vBarycentric;
      varying vec3 vPosition;
      varying vec2 vUv;
      uniform float uTime;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - 1.0 + 3.0*C.xxx;
        i = mod289(i);
        vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857;
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      attribute vec3 barycentric;

      void main() {
        vBarycentric = barycentric;
        vUv = uv;
        
        float noiseVal = snoise(position * 1.5 + uTime * 0.15);
        vec3 newPos = position + normal * noiseVal * 0.08; 

        vPosition = newPos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
      }
    `,g=`
      varying vec3 vBarycentric;
      varying vec3 vPosition;
      uniform float uTime;

      float rand(vec2 co){
          return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec3 d = fwidth(vBarycentric);
        float thickness = 1.2 + 0.5 * sin(uTime + vPosition.y); 
        vec3 a3 = smoothstep(vec3(0.0), d * thickness, vBarycentric);
        float edge = min(min(a3.x, a3.y), a3.z);
        
        float line = 1.0 - edge;
        float grain = rand(vPosition.xy * 10.0);
        line = smoothstep(0.3, 0.9, line); 
        line *= (0.7 + 0.3 * grain); 

        if(line < 0.05) discard;

        vec3 color = vec3(0.3, 0.3, 0.3); 
        gl_FragColor = vec4(color, line);
      }
    `,v=new h0(2.2,1),y=v.toNonIndexed(),E=y.attributes.position.count,M=[];for(let H=0;H<E;H+=3)M.push(1,0,0,0,1,0,0,0,1);y.setAttribute("barycentric",new Ri(M,3));const S=new sa({vertexShader:_,fragmentShader:g,uniforms:{uTime:{value:0}},side:_a,transparent:!0}),x=new Ea(y,S);x.position.set(1.8,0,0),a.current=x,f.add(x);const R=new Yi,w=800,C=new Float32Array(w*3);for(let H=0;H<w;H++){const j=4+Math.random()*2,Q=Math.random()*Math.PI*2,ut=Math.acos(2*Math.random()-1);C[H*3]=j*Math.sin(ut)*Math.cos(Q),C[H*3+1]=j*Math.sin(ut)*Math.sin(Q),C[H*3+2]=j*Math.cos(ut)}R.setAttribute("position",new ra(C,3));const N=new XS({size:.04,color:new ze(2450411),transparent:!0,opacity:.6,sizeAttenuation:!0});l.current=N;const P=new XT(R,N);s.current=P,f.add(P);let O;const I=new KT,T=()=>{O=requestAnimationFrame(T);const H=I.getElapsedTime();S.uniforms.uTime.value=H,a.current&&(a.current.rotation.x=Math.sin(H*.1)*.2,a.current.rotation.y=H*.15,a.current.position.y=Math.sin(H*.5)*.1),s.current&&(s.current.rotation.y=-H*.05,s.current.rotation.x=Math.sin(H*.05)*.1),d.render(f,p)};T();const L=()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L),cancelAnimationFrame(O),c&&d.domElement&&c.contains(d.domElement)&&c.removeChild(d.domElement),v.dispose(),y.dispose(),S.dispose(),R.dispose(),N.dispose(),d.dispose()}},[]),Te.useEffect(()=>{if(!n.current||!a.current||!s.current||!l.current)return;const c=Mn.timeline({defaults:{ease:"power3.inOut",duration:1.5}});switch(o){case"home":c.to(n.current.position,{x:0,z:6}),c.to(a.current.position,{x:1.8,y:0,z:0},0),c.to(a.current.material,{opacity:1},0),c.to(l.current.color,{r:.145,g:.388,b:.921},0),c.to(s.current.scale,{x:1,y:1,z:1},0);break;case"work":c.to(n.current.position,{x:3.5,z:3.5}),c.to(a.current.position,{x:1.8,y:0,z:0},0),c.to(a.current.material,{opacity:1},0),c.to(l.current.color,{r:.145,g:.388,b:.921},0),c.to(s.current.scale,{x:1.2,y:1.2,z:1.2},0);break;case"about":c.to(n.current.position,{x:0,z:6}),c.to(a.current.position,{x:3.5,y:0,z:0},0),c.to(a.current.material,{opacity:1},0),c.to(s.current.scale,{x:2.5,y:2.5,z:2.5,duration:2.5,ease:"slow(0.7, 0.7, false)"},0),c.to(l.current.color,{r:1,g:.717,b:0},0);break;case"contact":c.to(n.current.position,{x:0,y:0,z:14}),c.to(a.current.material,{opacity:0},0),c.to(l.current.color,{r:.13,g:.82,b:.93},0),c.to(s.current.scale,{x:1,y:1,z:1},0);break}},[o]),q.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-0 pointer-events-none"})},YC=({onExplore:o,isExploring:t=!1,activeSection:n})=>{const a=Te.useRef(null),s=Te.useRef(null),l=Te.useRef(null),c=Te.useRef(null),f=Te.useRef(null);return Te.useEffect(()=>{const p=Mn.context(()=>{const d="power3.out";if(t){const g="power2.inOut";f.current&&Mn.to(f.current,{y:-30,opacity:0,duration:.8,ease:g}),a.current&&Mn.to(a.current.children,{y:-50,opacity:0,stagger:.05,duration:.8,ease:g}),s.current&&Mn.to(s.current,{y:-50,opacity:0,duration:.8,ease:g,delay:.1}),l.current&&Mn.to(l.current,{y:-20,opacity:0,duration:.8,ease:g,delay:.1}),c.current&&Mn.to(c.current,{opacity:0,scale:.9,duration:.5})}else{const _=Mn.timeline({defaults:{ease:d}});a.current&&s.current&&l.current&&(f.current&&_.fromTo(f.current,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.6}),_.fromTo(a.current.children,{y:100,opacity:0},{y:0,opacity:1,duration:1,stagger:.1}).fromTo(s.current,{y:20,opacity:0},{y:0,opacity:1,duration:.8},"-=0.5").fromTo(l.current,{y:20,opacity:0},{y:0,opacity:1,duration:.8},"-=0.6")),c.current&&Mn.fromTo(c.current.children,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.8,delay:1.5,stagger:.2,ease:"back.out(1.7)"})}});return()=>p.revert()},[t]),q.jsxs("section",{className:"relative w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden",children:[q.jsx(JS,{activeSection:n}),q.jsxs("div",{ref:c,className:"absolute inset-0 pointer-events-none z-20 overflow-hidden hidden md:block",children:[q.jsx("div",{className:"absolute top-[30%] right-[15%] lg:right-[20%] animate-float-slow",children:q.jsxs("div",{className:"bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2",children:[q.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),q.jsx("span",{className:"text-xs font-mono text-gray-600 font-medium",children:"Accuracy: 98.2%"})]})}),q.jsx("div",{className:"absolute bottom-[25%] left-[20%] lg:left-[25%] animate-float-delayed",children:q.jsxs("div",{className:"bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2",children:[q.jsx("span",{className:"text-xs font-mono text-gray-500",children:"Epochs:"}),q.jsx("span",{className:"text-xs font-mono text-dark-grey font-bold",children:"500"})]})}),q.jsx("div",{className:"absolute bottom-[35%] right-[10%] lg:right-[15%] animate-float-slower",children:q.jsxs("div",{className:"bg-white/70 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-lg px-3 py-1.5 flex items-col gap-1",children:[q.jsx("span",{className:"text-[10px] uppercase tracking-wider text-gray-400",children:"Loss Function"}),q.jsx("span",{className:"text-xs font-mono text-blue-600 font-medium",children:"0.0241"})]})})]}),q.jsxs("div",{className:"relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center",children:[q.jsxs("div",{className:"relative z-0",children:[q.jsxs("div",{ref:f,className:"mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase",children:[q.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"}),"AI / ML Specialist"]}),q.jsxs("h1",{ref:a,className:"flex flex-col items-center leading-[0.85] text-dark-grey font-bold tracking-tighter mb-8 select-none",children:[q.jsx("span",{className:"block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem]",children:"From Code"}),q.jsx("span",{className:"block text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 pb-2",children:"To Reality"})]}),q.jsx("p",{ref:s,className:"text-lg md:text-xl text-gray-500 max-w-2xl mx-auto text-center mb-10 leading-relaxed font-normal",children:"Building the next generation of cognitive systems. Focusing on Large Language Models, Computer Vision, and Predictive Analytics."})]}),q.jsxs("div",{ref:l,className:"relative z-30 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto",children:[q.jsxs(Hp,{variant:"primary",className:"w-full sm:w-auto shadow-xl shadow-blue-600/10",onClick:o,children:["Explore Projects",q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[q.jsx("path",{d:"M5 12h14"}),q.jsx("path",{d:"m12 5 7 7-7 7"})]})]}),q.jsx(Hp,{variant:"secondary",className:"w-full sm:w-auto bg-white/50 backdrop-blur-sm",onClick:()=>window.open("https://github.com/shrudaysimha","_blank"),children:"GitHub Profile"})]})]}),q.jsx("style",{children:`
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(10px); }
        }
        @keyframes float-slower {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite 0.5s; }
      `})]})},jC=()=>q.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat"}}),ZC=({onBack:o})=>{const t=Te.useRef(null),n=Te.useRef(null);return Te.useEffect(()=>{t.current&&Mn.fromTo(t.current.children,{opacity:0,x:50},{opacity:1,x:0,duration:.8,stagger:.2,delay:.5,ease:"power3.out"}),n.current&&Mn.fromTo(n.current,{opacity:0,y:-20},{opacity:1,y:0,duration:.6,delay:.8,ease:"power2.out"})},[]),q.jsxs("section",{className:"absolute top-0 right-0 w-full md:w-[60%] h-screen overflow-y-auto z-40 bg-black/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none scroll-smooth",children:[q.jsx("div",{className:"fixed top-6 right-6 z-50",children:q.jsxs("button",{ref:n,onClick:o,className:"group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wide px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-white/10",children:[q.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"group-hover:-translate-x-1 transition-transform",children:q.jsx("path",{d:"m15 18-6-6 6-6"})}),"Back"]})}),q.jsx("div",{className:"flex flex-col",children:q.jsxs("div",{ref:t,className:"min-h-screen p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8",children:[q.jsxs("div",{className:"mb-2 pt-16 md:pt-0",children:[q.jsx("h2",{className:"text-3xl md:text-5xl font-bold tracking-tight text-white mb-4",children:"Selected Work"}),q.jsx("p",{className:"text-gray-400 max-w-md",children:"Deep dives into machine learning architectures, robotics, and data-driven intelligence."})]}),q.jsxs("div",{onClick:()=>window.open("https://github.com/shrudaysimha/RENEWABLE-ENERGY-POWERED-VEHICLE","_blank"),className:"group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 cursor-pointer",children:[q.jsxs("div",{className:"flex justify-between items-start mb-4",children:[q.jsx("div",{className:"px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-mono border border-orange-500/30",children:"Robotics / IoT"}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-gray-500 text-xs font-mono",children:"2025"}),q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-500 group-hover:text-orange-400 transition-colors",children:[q.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),q.jsx("polyline",{points:"15 3 21 3 21 9"}),q.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]}),q.jsx("h3",{className:"text-2xl text-gray-100 font-semibold mb-2 group-hover:text-orange-400 transition-colors",children:"Eco-Nav Autonomous Vehicle"}),q.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-4",children:"A renewable energy-powered autonomous vehicle featuring real-time obstacle avoidance. Integrated solar charging with ultrasonic sensor arrays for continuous, safe navigation."}),q.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[q.jsx("div",{className:"w-full h-1 bg-gray-800 rounded-full overflow-hidden flex-1",children:q.jsx("div",{className:"w-1/2 h-full bg-orange-500/50"})}),q.jsx("span",{className:"text-[10px] text-orange-400 font-mono",children:"SOLAR"})]})]}),q.jsxs("div",{onClick:()=>window.open("https://github.com/shrudaysimha/fingaurd","_blank"),className:"group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 cursor-pointer",children:[q.jsxs("div",{className:"flex justify-between items-start mb-4",children:[q.jsx("div",{className:"px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono border border-cyan-500/30",children:"Finance / Security"}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-gray-500 text-xs font-mono",children:"2025"}),q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-500 group-hover:text-cyan-400 transition-colors",children:[q.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),q.jsx("polyline",{points:"15 3 21 3 21 9"}),q.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]}),q.jsx("h3",{className:"text-2xl text-gray-100 font-semibold mb-2 group-hover:text-cyan-400 transition-colors",children:"Fin Guard"}),q.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-4",children:"An innovative financial security platform designed to safeguard transactions and monitor anomalies using advanced algorithms."}),q.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[q.jsx("div",{className:"w-full h-1 bg-gray-800 rounded-full overflow-hidden flex-1",children:q.jsx("div",{className:"w-3/4 h-full bg-cyan-500/50"})}),q.jsx("span",{className:"text-[10px] text-cyan-400 font-mono",children:"SECURE"})]})]}),q.jsxs("div",{onClick:()=>window.open("https://github.com/rounitraj7416/SONIC-GRID","_blank"),className:"group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 cursor-pointer",children:[q.jsxs("div",{className:"flex justify-between items-start mb-4",children:[q.jsx("div",{className:"px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-mono border border-green-500/50",children:"Web / Interactive"}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx("span",{className:"text-gray-500 text-xs font-mono",children:"2025"}),q.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-500 group-hover:text-green-400 transition-colors",children:[q.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),q.jsx("polyline",{points:"15 3 21 3 21 9"}),q.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})]}),q.jsx("h3",{className:"text-2xl text-gray-100 font-semibold mb-2 group-hover:text-green-400 transition-colors",children:"Sonic Grid"}),q.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-4",children:"A dynamic, interactive grid system featuring high-performance animations and reactive user interfaces tailored for modern web applications."}),q.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[q.jsx("div",{className:"w-full h-1 bg-gray-800 rounded-full overflow-hidden flex-1",children:q.jsx("div",{className:"w-2/3 h-full bg-green-400/50"})}),q.jsx("span",{className:"text-[10px] text-green-400 font-mono",children:"DYNAMIC"})]})]})]})})]})},KC=({onBack:o})=>{const t=Te.useRef(null);return Te.useLayoutEffect(()=>{let n=Mn.context(()=>{Mn.from(".animate-item",{y:40,opacity:0,duration:1,stagger:.1,ease:"power3.out",delay:.1})},t);return()=>n.revert()},[]),q.jsxs(q.Fragment,{children:[q.jsx("style",{children:`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}),q.jsx("div",{ref:t,className:"fixed inset-0 w-full h-screen flex z-30 pointer-events-none",children:q.jsxs("div",{className:"w-full lg:w-[65%] h-full bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/95 to-transparent pointer-events-auto overflow-y-auto hide-scrollbar relative z-10 px-[8vw] py-24 pb-32",children:[q.jsx("button",{onClick:o,className:"fixed top-8 left-[8vw] z-50 text-xs tracking-[0.2em] uppercase hover:text-[#F4A261] transition-colors border border-white/20 bg-[#0f0f0f]/50 backdrop-blur-md px-6 py-2 rounded-full text-white",children:"< Back"}),q.jsxs("div",{className:"max-w-2xl mt-8 pr-8",children:[q.jsx("p",{className:"animate-item text-[#F4A261] mb-4 tracking-[0.2em] uppercase font-bold text-xs",children:"— Introduction"}),q.jsxs("h1",{className:"animate-item text-5xl md:text-[5rem] font-extrabold leading-[1.05] mb-8 text-white tracking-tight",children:["AI & Data ",q.jsx("br",{}),"Science."]}),q.jsx("p",{className:"animate-item text-lg text-[#9CA3AF] max-w-[90%] leading-relaxed font-light mb-12",children:"I’m a first-year AI & Data Science undergraduate focused on building strong foundations in programming, mathematics, and applied AI. I actively work on machine learning, data science, and early-stage generative AI projects, with an emphasis on understanding concepts deeply and applying them through hands-on implementation."}),q.jsxs("div",{className:"animate-item mb-14",children:[q.jsx("h3",{className:"text-xl font-bold text-white mb-6 tracking-wide",children:"Currently Learning"}),q.jsxs("ul",{className:"space-y-4 text-[#9CA3AF]",children:[q.jsxs("li",{className:"flex items-start",children:[q.jsx("span",{className:"text-[#F4A261] mr-3",children:"▹"}),q.jsx("span",{children:"Python, C/C++, Data Structures & Algorithms"})]}),q.jsxs("li",{className:"flex items-start",children:[q.jsx("span",{className:"text-[#F4A261] mr-3",children:"▹"}),q.jsx("span",{children:"Statistics, Linear Algebra, Probability"})]}),q.jsxs("li",{className:"flex items-start",children:[q.jsx("span",{className:"text-[#F4A261] mr-3",children:"▹"}),q.jsx("span",{children:"Machine Learning, Deep Learning fundamentals"})]}),q.jsxs("li",{className:"flex items-start",children:[q.jsx("span",{className:"text-[#F4A261] mr-3",children:"▹"}),q.jsx("span",{children:"Generative AI, LLMs, and RAG systems"})]})]})]}),q.jsxs("div",{className:"animate-item mb-14 border-l-2 border-[#F4A261] pl-6 py-2",children:[q.jsx("h3",{className:"text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2",children:"Current Project"}),q.jsx("p",{className:"text-xl text-white font-medium",children:"Upzeal"}),q.jsx("p",{className:"text-[#9CA3AF] text-sm mt-1",children:"CTO"})]}),q.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-16",children:[q.jsxs("div",{className:"animate-item bg-[#1A1A1A] p-8 text-white border border-white/5 rounded-lg transition-transform hover:-translate-y-1 duration-300 shadow-lg",children:[q.jsx("svg",{className:"w-8 h-8 mb-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})}),q.jsx("h3",{className:"text-xl font-bold mb-3",children:"Looking to Collaborate"}),q.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"Intermediate AI / ML / Data Science projects, and research-oriented or problem-driven tech initiatives."})]}),q.jsxs("div",{className:"animate-item bg-[#F4A261] p-8 text-[#1A1A1A] rounded-lg transition-transform hover:-translate-y-1 duration-300 shadow-lg",children:[q.jsx("svg",{className:"w-8 h-8 mb-5",fill:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})}),q.jsx("h3",{className:"text-xl font-bold mb-3",children:"Seeking Opportunities"}),q.jsx("p",{className:"font-medium opacity-90 text-sm leading-relaxed",children:"Internships where I can learn, build, and contribute meaningfully to real-world challenges."})]})]}),q.jsxs("div",{className:"animate-item border-t border-white/10 pt-10",children:[q.jsx("p",{className:"text-xl text-white font-medium italic mb-6",children:'"I enjoy turning simple ideas into practical prototypes and improving my thinking through continuous learning and experimentation."'}),q.jsxs("a",{href:"mailto:shrudaysimha@gmail.com",className:"inline-flex items-center text-[#F4A261] hover:text-white transition-colors font-bold tracking-wide",children:["Mail: shrudaysimha@gmail.com",q.jsx("svg",{className:"w-5 h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})]})]})})]})},QC=({onBack:o})=>{const t=Te.useRef(null),n=Te.useRef(null),a=Te.useRef(null),[s,l]=Te.useState(!1);Te.useEffect(()=>{const d=Mn.timeline({defaults:{ease:"power3.out"}});t.current&&d.fromTo(t.current,{opacity:0},{opacity:.15,duration:1.5}),n.current&&d.fromTo(n.current.children,{y:50,opacity:0},{y:0,opacity:1,stagger:.15,duration:1},"-=1.0"),a.current&&d.fromTo(a.current,{opacity:0,y:-20},{opacity:1,y:0,duration:.6},"-=0.6")},[]);const c=()=>{try{const d=window.AudioContext||window.webkitAudioContext;if(!d)return;const _=new d,g=_.createOscillator(),v=_.createGain();g.connect(v),v.connect(_.destination),g.type="sine",g.frequency.setValueAtTime(800,_.currentTime),g.frequency.exponentialRampToValueAtTime(1200,_.currentTime+.1),v.gain.setValueAtTime(.05,_.currentTime),v.gain.exponentialRampToValueAtTime(.001,_.currentTime+.1),g.start(),g.stop(_.currentTime+.1)}catch{}},f=d=>{d.preventDefault(),!s&&(navigator.clipboard.writeText("shrudaysimha@gmail.com"),l(!0),c(),setTimeout(()=>{l(!1)},2e3))},p=[{label:"LINKEDIN",sub:"NETWORK",href:"https://linkedin.com",icon:q.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",viewBox:"0 0 24 24",children:[q.jsx("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M4 4h4v4H4zM4 16h4v4H4zM16 4h4v4h-4zM16 16h4v4h-4z"}),q.jsx("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M8 6h8M6 8v8M18 8v8M8 18h8",strokeOpacity:"0.5"})]})},{label:"GITHUB",sub:"REPOSITORIES",href:"https://github.com/shrudaysimha",icon:q.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",viewBox:"0 0 24 24",children:[q.jsx("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",clipPath:"inset(50% 0 0 0)"}),q.jsx("rect",{x:"4",y:"14",width:"6",height:"6",stroke:"currentColor",strokeWidth:"1.5"}),q.jsx("rect",{x:"14",y:"14",width:"6",height:"6",stroke:"currentColor",strokeWidth:"1.5"}),q.jsx("path",{d:"M12 4v8M7 14l5-4 5 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"square"})]})},{label:"EMAIL",sub:"CONTACT",href:"mailto:shrudaysimha@gmail.com",isEmail:!0,icon:q.jsxs("svg",{className:"w-8 h-8 text-white",fill:"none",viewBox:"0 0 24 24",children:[q.jsx("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M2 6h20v12H2z"}),q.jsx("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M2 6l10 7 10-7"}),q.jsx("circle",{cx:"12",cy:"13",r:"2",stroke:"currentColor",strokeWidth:"1.5",fill:"none"})]})}];return q.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden",children:[q.jsx("div",{ref:t,className:"absolute inset-0 pointer-events-none",style:{backgroundImage:`linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,backgroundSize:"40px 40px",maskImage:"radial-gradient(circle at center, black 40%, transparent 80%)"}}),q.jsx("div",{className:"fixed top-6 right-6 z-50",children:q.jsxs("button",{ref:a,onClick:o,className:"group flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors duration-300 text-sm font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-cyan-500/20 bg-black/40 backdrop-blur-md hover:bg-cyan-900/20",children:[q.jsx("span",{className:"text-xs mr-1",children:"[ESC]"}),"Abort"]})}),q.jsxs("div",{ref:n,className:"flex flex-col gap-4 w-full px-4 md:items-center",children:[q.jsxs("div",{className:"text-center mb-8",children:[q.jsx("h2",{className:"text-sm font-mono text-cyan-500 tracking-[0.3em] uppercase mb-2",children:"System // Connect"}),q.jsx("div",{className:"w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent mx-auto"})]}),p.map((d,_)=>{const g=d.isEmail&&s;return q.jsxs("a",{href:d.isEmail?"#":d.href,onClick:d.isEmail?f:void 0,target:d.isEmail?void 0:"_blank",rel:d.isEmail?void 0:"noopener noreferrer",className:`group relative w-full md:w-[600px] h-24 flex items-center bg-white/5 backdrop-blur-lg border border-white/10 hover:border-[#00f3ff] transition-all duration-500 ease-out hover:translate-x-5 overflow-hidden rounded-sm ${g?"border-green-500/50":""}`,children:[q.jsx("div",{className:"absolute inset-0 bg-[#00f3ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),q.jsx("div",{className:"absolute left-0 w-12 h-full flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out",children:q.jsx("svg",{className:`w-6 h-6 ${g?"text-green-400":"text-[#00f3ff]"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:q.jsx("path",{strokeLinecap:"square",strokeLinejoin:"miter",strokeWidth:"2",d:"M9 5l7 7-7 7"})})}),q.jsxs("div",{className:"flex-1 flex items-center justify-between px-8 pl-8 group-hover:pl-16 transition-all duration-300",children:[q.jsxs("div",{className:"flex flex-col",children:[q.jsx("span",{className:`text-2xl md:text-3xl font-mono font-light transition-colors duration-300 tracking-tight ${g?"text-green-400 font-bold":"text-white group-hover:text-[#00f3ff]"}`,children:g?"COPIED TO CLIPBOARD":d.label}),q.jsxs("span",{className:`text-[10px] font-mono tracking-[0.2em] uppercase ${g?"text-green-400/60":"text-gray-500 group-hover:text-[#00f3ff]/60"}`,children:["// ",g?"shrudaysimha@gmail.com":d.sub]})]}),q.jsx("div",{className:`w-12 h-12 flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ${g?"text-green-400 opacity-100":""}`,children:d.icon})]}),q.jsx("div",{className:`absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-[#00f3ff] ${g?"border-green-400":""}`}),q.jsx("div",{className:`absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-[#00f3ff] ${g?"border-green-400":""}`})]},_)})]})]})},JC=({isDark:o})=>{const t=Te.useRef(null);return Te.useEffect(()=>{const n=s=>{Mn.to(t.current,{x:s.clientX,y:s.clientY,duration:.2,ease:"power2.out"})},a=s=>{const l=s.target;l.tagName.toLowerCase()==="button"||l.tagName.toLowerCase()==="a"||l.closest("button")||l.closest("a")||l.classList.contains("interactive")?Mn.to(t.current,{scale:3,opacity:.4,duration:.2}):Mn.to(t.current,{scale:1,opacity:.8,duration:.2})};return window.addEventListener("mousemove",n),window.addEventListener("mouseover",a),()=>{window.removeEventListener("mousemove",n),window.removeEventListener("mouseover",a)}},[]),q.jsx("div",{ref:t,className:`
        hidden md:block 
        fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] 
        transform -translate-x-1/2 -translate-y-1/2
        transition-colors duration-500 ease-in-out
        ${o?"bg-[#f4f4f0]":"bg-gray-800"}
      `})},$C=()=>{const[o,t]=Te.useState("home"),n=Te.useRef(null),a=o==="projects"?"work":o==="about"?"about":o==="contact"?"contact":"home",s=o!=="home";return Te.useEffect(()=>{if(n.current){let l="#f4f4f0";o==="contact"?l="#0b0f19":o!=="home"&&(l="#0f0f0f"),Mn.to(n.current,{backgroundColor:l,duration:1.5,ease:"power2.inOut",delay:o!=="home"?.2:0})}},[o]),q.jsxs("main",{ref:n,className:"relative min-h-screen w-full bg-paper text-dark-grey font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden transition-colors",children:[q.jsx(jC,{}),q.jsx(JC,{isDark:s}),q.jsx(JS,{activeSection:a}),q.jsxs("div",{className:"relative z-20",children:[q.jsx(LE,{isHidden:o!=="home",onNavigate:t}),q.jsx("div",{className:o!=="home"?"pointer-events-none":"",children:q.jsx(YC,{isExploring:o!=="home",onExplore:()=>t("projects"),activeSection:o==="projects"?"work":o})}),o==="projects"&&q.jsx(ZC,{onBack:()=>t("home")}),o==="about"&&q.jsx(KC,{onBack:()=>t("home")}),o==="contact"&&q.jsx(QC,{onBack:()=>t("home")})]})]})};pb.createRoot(document.getElementById("root")).render(q.jsx(sb.StrictMode,{children:q.jsx($C,{})}));
