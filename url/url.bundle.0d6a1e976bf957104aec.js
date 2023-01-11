var Client=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=11)}([,,function(e,t,a){},function(e,t,a){!function(t,a,r){function n(e,t){return typeof e===t}function l(e){var t=C.className,a=_._config.classPrefix||"";if(E&&(t=t.baseVal),_._config.enableJSClass){var r=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");t=t.replace(r,"$1"+a+"js$2")}_._config.enableClasses&&(t+=" "+a+e.join(" "+a),E?C.className.baseVal=t:C.className=t)}function i(e,t){if("object"==typeof e)for(var a in e)b(e,a)&&i(a,e[a]);else{var r=(e=e.toLowerCase()).split("."),n=_[r[0]];if(2==r.length&&(n=n[r[1]]),void 0!==n)return _;t="function"==typeof t?t():t,1==r.length?_[r[0]]=t:(!_[r[0]]||_[r[0]]instanceof Boolean||(_[r[0]]=new Boolean(_[r[0]])),_[r[0]][r[1]]=t),l([(t&&0!=t?"":"no-")+r.join("-")]),_._trigger(e,t)}return _}function o(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):E?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,a){return t+a.toUpperCase()})).replace(/^-/,"")}function c(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function u(e,t){return e-1===t||e===t||e+1===t}function m(e,t,r,n){var l,i,s,c,u="modernizr",m=o("div"),d=function(){var e=a.body;return e||((e=o(E?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(s=o("div")).id=n?n[r]:u+(r+1),m.appendChild(s);return(l=o("style")).type="text/css",l.id="s"+u,(d.fake?d:m).appendChild(l),d.appendChild(m),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(a.createTextNode(e)),m.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),i=t(m,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=c,C.offsetHeight):m.parentNode.removeChild(m),!!i}function d(e,t){return!!~(""+e).indexOf(t)}function v(e,a){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(c(e[n]),a))return!0;return!1}if("CSSSupportsRule"in t){for(var l=[];n--;)l.push("("+c(e[n])+":"+a+")");return m("@supports ("+(l=l.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==getComputedStyle(e,null).position}))}return r}function p(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,a,l){function i(){u&&(delete B.style,delete B.modElem)}if(l=!n(l,"undefined")&&l,!n(a,"undefined")){var c=v(e,a);if(!n(c,"undefined"))return c}for(var u,m,p,g,f,h=["modernizr","tspan","samp"];!B.style&&h.length;)u=!0,B.modElem=o(h.shift()),B.style=B.modElem.style;for(p=e.length,m=0;p>m;m++)if(g=e[m],f=B.style[g],d(g,"-")&&(g=s(g)),B.style[g]!==r){if(l||n(a,"undefined"))return i(),"pfx"!=t||g;try{B.style[g]=a}catch(e){}if(B.style[g]!=f)return i(),"pfx"!=t||g}return i(),!1}function f(e,t,a,r,l){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(i+" ")+i).split(" ");return n(t,"string")||n(t,"undefined")?g(o,t,r,l):function(e,t,a){var r;for(var l in e)if(e[l]in t)return!1===a?e[l]:n(r=t[e[l]],"function")?p(r,a||t):r;return!1}(o=(e+" "+w.join(i+" ")+i).split(" "),t,a)}function h(e,t,a){return f(e,r,r,t,a)}var x=[],y=[],$={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){y.push({name:e,fn:t,options:a})},addAsyncTest:function(e){y.push({name:null,fn:e})}},_=function(){};_.prototype=$,(_=new _).addTest("serviceworker","serviceWorker"in navigator),_.addTest("svg",!!a.createElementNS&&!!a.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),_.addTest("svgfilters",(function(){var e=!1;try{e="SVGFEColorMatrixElement"in t&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return e}));var S=$._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];$._prefixes=S;var C=a.documentElement,E="svg"===C.nodeName.toLowerCase();E||function(t,a){function r(){var e=f.elements;return"string"==typeof e?e.split(" "):e}function n(e){var t=g[e[v]];return t||(t={},p++,e[v]=p,g[p]=t),t}function l(e,t,r){return t||(t=a),c?t.createElement(e):(r||(r=n(t)),!(l=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||m.test(e)||l.tagUrn?l:r.frag.appendChild(l));var l}function i(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(a){return f.shivMethods?l(a,e,t):t.createElem(a)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(f,t.frag)}function o(e){e||(e=a);var t=n(e);return!f.shivCSS||s||t.hasCSS||(t.hasCSS=!!function(e,t){var a=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return a.innerHTML="x<style>"+t+"</style>",r.insertBefore(a.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||i(e,t),e}var s,c,u=t.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",p=0,g={};!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,c=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=!0,c=!0}}();var f={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==u.shivCSS,supportsUnknownElements:c,shivMethods:!1!==u.shivMethods,type:"default",shivDocument:o,createElement:l,createDocumentFragment:function(e,t){if(e||(e=a),c)return e.createDocumentFragment();for(var l=(t=t||n(e)).frag.cloneNode(),i=0,o=r(),s=o.length;s>i;i++)l.createElement(o[i]);return l},addElements:function(e,t){var a=f.elements;"string"!=typeof a&&(a=a.join(" ")),"string"!=typeof e&&(e=e.join(" ")),f.elements=a+" "+e,o(t)}};t.html5=f,o(a),e.exports&&(e.exports=f)}(void 0!==t?t:this,a);var b,k="Moz O ms Webkit",w=$._config.usePrefixes?k.toLowerCase().split(" "):[];$._domPrefixes=w,function(){var e={}.hasOwnProperty;b=n(e,"undefined")||n(e.call,"undefined")?function(e,t){return t in e&&n(e.constructor.prototype[t],"undefined")}:function(t,a){return e.call(t,a)}}(),$._l={},$.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),_.hasOwnProperty(e)&&setTimeout((function(){_._trigger(e,_[e])}),0)},$._trigger=function(e,t){if(this._l[e]){var a=this._l[e];setTimeout((function(){var e;for(e=0;e<a.length;e++)(0,a[e])(t)}),0),delete this._l[e]}},_._q.push((function(){$.addTest=i})),_.addTest("svgasimg",a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var T=$._config.usePrefixes?k.split(" "):[];$._cssomPrefixes=T;var M=function(e){var a,n=S.length,l=t.CSSRule;if(void 0===l)return r;if(!e)return!1;if((a=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in l)return"@"+e;for(var i=0;n>i;i++){var o=S[i];if(o.toUpperCase()+"_"+a in l)return"@-"+o.toLowerCase()+"-"+e}return!1};$.atRule=M;var N=function(){var e=!("onblur"in a.documentElement);return function(t,a){var n;return!!t&&(a&&"string"!=typeof a||(a=o(a||"div")),!(n=(t="on"+t)in a)&&e&&(a.setAttribute||(a=o("div")),a.setAttribute(t,""),n="function"==typeof a[t],a[t]!==r&&(a[t]=r),a.removeAttribute(t)),n)}}();$.hasEvent=N;$.prefixedCSSValue=function(e,t){var a=!1,r=o("div").style;if(e in r){var n=w.length;for(r[e]=t,a=r[e];n--&&!a;)r[e]="-"+w[n]+"-"+t,a=r[e]}return""===a&&(a=!1),a},_.addTest("video",(function(){var e=o("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t})),_.addTest("cssgradients",(function(){for(var e,t="background-image:",a="",r=0,n=S.length-1;n>r;r++)e=0===r?"to ":"",a+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";_._config.usePrefixes&&(a+=t+"-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");var l=o("a").style;return l.cssText=a,(""+l.backgroundImage).indexOf("gradient")>-1})),_.addTest("preserve3d",(function(){var e=o("a"),t=o("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),C.appendChild(e);var a=t.getBoundingClientRect();return C.removeChild(e),a.width&&a.width<4})),_.addTest("inlinesvg",(function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}));var D="CSS"in t&&"supports"in t.CSS,L="supportsCSS"in t;_.addTest("supports",D||L);var I={}.toString;_.addTest("svgclippaths",(function(){return!!a.createElementNS&&/SVGClipPath/.test(I.call(a.createElementNS("http://www.w3.org/2000/svg","clipPath")))})),_.addTest("svgforeignobject",(function(){return!!a.createElementNS&&/SVGForeignObject/.test(I.call(a.createElementNS("http://www.w3.org/2000/svg","foreignObject")))})),_.addTest("smil",(function(){return!!a.createElementNS&&/SVGAnimate/.test(I.call(a.createElementNS("http://www.w3.org/2000/svg","animate")))}));var G=function(){var e=t.matchMedia||t.msMatchMedia;return e?function(t){var a=e(t);return a&&a.matches||!1}:function(e){var a=!1;return m("@media "+e+" { #modernizr { position: absolute; } }",(function(e){a="absolute"==(t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle).position})),a}}();$.mq=G;var P=$.testStyles=m;_.addTest("touchevents",(function(){var e;if("ontouchstart"in t||t.DocumentTouch&&a instanceof DocumentTouch)e=!0;else{var r=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");P(r,(function(t){e=9===t.offsetTop}))}return e})),_.addTest("cssvalid",(function(){return P("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",(function(e){var t=o("input");return e.appendChild(t),t.clientWidth>10}))})),P("#modernizr { height: 50vh; }",(function(e){var a=parseInt(t.innerHeight/2,10),r=parseInt((t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).height,10);_.addTest("cssvhunit",r==a)})),P("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var a=e.childNodes[2],r=e.childNodes[1],n=e.childNodes[0],l=parseInt((r.offsetWidth-r.clientWidth)/2,10),i=n.clientWidth/100,o=n.clientHeight/100,s=parseInt(50*Math.max(i,o),10),c=parseInt((t.getComputedStyle?getComputedStyle(a,null):a.currentStyle).width,10);_.addTest("cssvmaxunit",u(s,c)||u(s,c-l))}),3),P("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",(function(e){var a=e.childNodes[2],r=e.childNodes[1],n=e.childNodes[0],l=parseInt((r.offsetWidth-r.clientWidth)/2,10),i=n.clientWidth/100,o=n.clientHeight/100,s=parseInt(50*Math.min(i,o),10),c=parseInt((t.getComputedStyle?getComputedStyle(a,null):a.currentStyle).width,10);_.addTest("cssvminunit",u(s,c)||u(s,c-l))}),3),P("#modernizr { width: 50vw; }",(function(e){var a=parseInt(t.innerWidth/2,10),r=parseInt((t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);_.addTest("cssvwunit",r==a)}));var O={elem:o("modernizr")};_._q.push((function(){delete O.elem}));var B={style:O.elem.style};_._q.unshift((function(){delete B.style})),$.testProp=function(e,t,a){return g([e],r,t,a)},$.testAllProps=f;var K=$.prefixed=function(e,t,a){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=s(e)),t?f(e,t,a):f(e,"pfx"))};$.prefixedCSS=function(e){var t=K(e);return t&&c(t)},_.addTest("requestanimationframe",!!K("requestAnimationFrame",t),{aliases:["raf"]}),$.testAllProps=h,_.addTest("cssfilters",(function(){if(_.supports)return h("filter","blur(2px)");var e=o("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(a.documentMode===r||a.documentMode>9)})),_.addTest("flexbox",h("flexBasis","1px",!0)),_.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),_.addTest("flexboxtweener",h("flexAlign","end",!0)),_.addTest("flexwrap",h("flexWrap","wrap",!0)),_.addTest("csstransforms",(function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)})),_.addTest("csstransforms3d",(function(){var e=!!h("perspective","1px",!0),t=_._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var a;_.supports?a="@supports (perspective: 1px)":(a="@media (transform-3d)",t&&(a+=",(-webkit-transform-3d)")),P("#modernizr{width:0;height:0}"+(a+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),(function(t){e=7===t.offsetWidth&&18===t.offsetHeight}))}return e})),_.addTest("csstransitions",h("transition","all",!0)),_.addTest("userselect",h("userSelect","none",!0)),function(){var e,t,a,r,l,i;for(var o in y)if(y.hasOwnProperty(o)){if(e=[],(t=y[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(r=n(t.fn,"function")?t.fn():t.fn,l=0;l<e.length;l++)1===(i=e[l].split(".")).length?_[i[0]]=r:(!_[i[0]]||_[i[0]]instanceof Boolean||(_[i[0]]=new Boolean(_[i[0]])),_[i[0]][i[1]]=r),x.push((r?"":"no-")+i.join("-"))}}(),l(x),delete $.addTest,delete $.addAsyncTest;for(var A=0;A<_._q.length;A++)_._q[A]();t.Modernizr=_}(window,document)},,,,,,,,function(e,t,a){"use strict";a.r(t);a(2),a(3),a(12)},function(e,t){console.log("ready!");var a=$("#website_url"),r=$("#facebook-result-final"),n=$("#linkedin-result-final"),l=$("#twitter-result-final"),i=$("#instagram-result-final"),o=$("#youtube-result-final"),s=$("#campaign_name2"),c=$("#ca-campaign2"),u=$("#utm_asset2"),m=$("#re-utm_asset2"),d=$("#utm_term2"),v=$("#re-utm_term2"),p=$("#social-form input"),g=$("#social-form select"),f=$("#social-form textarea"),h=$("#google-ad-result-final"),x=$("#linkedin-ad-result-final"),y=$("#facebook-ad-result-final"),_=$("#6sense-ad-result-final"),S=$("#email-result-final"),C=$("#contact-result-final"),E=$("#request-result-final"),b=$("#blog-result-final"),k=$("#sdrs-result-final");function w(e){e.val((function(e,t){return t.trimStart().trimEnd().replace(/\s+/g,"%20").toLowerCase()}))}$(".lowercase").bind("change keyup paste contextmenu input",(function(e){$(this).val((function(e,t){return t.toLowerCase()}))})),$(".underscore").bind("change keyup paste contextmenu input",(function(e){$(this).val((function(e,t){return t.replace(/\s+/g,"_").toLowerCase()}))}));$("#campaign_name2").val();s.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?(c.text(""),F()):(c.text("&utm_campaign="+$(this).val().toLowerCase()),F())})),u.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?(m.text(""),F()):(m.text("&utm_asset="+$(this).val().toLowerCase()),F())})),d.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?(v.text(""),F()):(v.text("&utm_term="+$(this).val().toLowerCase()),F())}));var T=$("#ca-campaign-email"),M=$("#ca-campaign-contact"),N=$("#ca-campaign-request"),D=$("#ca-campaign-blog"),L=$("#ca-campaign-sdrs"),I=$("#ca-campaign-fa"),G=$("#ca-campaign-li"),P=$("#ca-campaign-tw"),O=$("#ca-campaign-in"),B=$("#ca-campaign-yu"),K=$("#ca-campaign-go-ad"),A=$("#ca-campaign-li-ad"),j=$("#ca-campaign-fa-ad"),q=$("#ca-campaign-6sense-ad");function F(){r.val($.trim(I.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),n.val($.trim(G.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),l.val($.trim(P.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),i.val($.trim(O.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),o.val($.trim(B.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),h.val($.trim(K.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),x.val($.trim(A.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),y.val($.trim(j.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),_.val($.trim(q.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),S.val($.trim(T.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),C.val($.trim(M.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),E.val($.trim(N.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),b.val($.trim(D.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),k.val($.trim(L.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(c.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(m.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(v.text().replace(/(\r\n|\n|\r)/gm,""))),0!=I.text()||0!=G.text()||0!=P.text()||0!=O.text()||0!=B.text()||0!=K.text()||0!=A.text()||0!=j.text()||0!=q.text()||0!=T.text()||0!=M.text()||0!=N.text()||0!=D.text()||0!=L.text()||0!=c.text()||0!=m.text()||0!=v.text()?(r.addClass("key"),n.addClass("key"),l.addClass("key"),i.addClass("key"),o.addClass("key"),h.addClass("key"),x.addClass("key"),y.addClass("key"),_.addClass("key"),S.addClass("key"),C.addClass("key"),E.addClass("key"),b.addClass("key"),k.addClass("key")):(r.removeClass("key"),n.removeClass("key"),l.removeClass("key"),i.removeClass("key"),o.removeClass("key"),h.removeClass("key"),x.removeClass("key"),y.removeClass("key"),_.removeClass("key"),S.removeClass("key"),C.removeClass("key"),E.removeClass("key"),k.removeClass("key"))}a.bind("change keyup paste contextmenu input",(function(){w($(this));var e=$(this).val().match(/^http([s]?):\/\/.*/);if($(this).val().length<8||!e)$(this).removeClass("valid"),I.text(""),G.text(""),P.text(""),O.text(""),B.text(""),K.text(""),A.text(""),j.text(""),q.text(""),T.text(""),M.text(""),N.text(""),D.text(""),L.text(""),r.val(""),n.val(""),l.val(""),i.val(""),o.val(""),h.val(""),x.val(""),y.val(""),_.val(""),S.val(""),C.val(""),E.val(""),b.val(""),k.val("");else{$(this).removeClass("valid").addClass("valid"),F();var t=$(this).val();-1!==t.indexOf("?")?(I.text(t.substring(0,t.indexOf("?"))+"?utm_source=facebook&utm_medium=social&cls=MKTG&clp=Social_Media"),G.text(t.substring(0,t.indexOf("?"))+"?utm_source=linkedin&utm_medium=social&cls=MKTG&clp=Social_Media"),P.text(t.substring(0,t.indexOf("?"))+"?utm_source=twitter&utm_medium=social&cls=MKTG&clp=Social_Media"),O.text(t.substring(0,t.indexOf("?"))+"?utm_source=instagram&utm_medium=social&cls=MKTG&clp=Social_Media"),B.text(t.substring(0,t.indexOf("?"))+"?utm_source=youtube&utm_medium=social&cls=MKTG&clp=Social_Media"),K.text(t.substring(0,t.indexOf("?"))+"?utm_source=google&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),A.text(t.substring(0,t.indexOf("?"))+"?utm_source=linkedin&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),j.text(t.substring(0,t.indexOf("?"))+"?utm_source=facebook&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),q.text(t.substring(0,t.indexOf("?"))+"?utm_source=6sense&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),T.text(t.substring(0,t.indexOf("?"))+"?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),M.text("https://ujet.cx/contact-sales/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),N.text("https://ujet.cx/request-a-demo/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),D.text("https://ujet.cx/blog/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),L.text(t.substring(0,t.indexOf("?"))+"?utm_source=sdr&utm_medium=email&cls=MKTG&clp=Email")):(I.text($(this).val()+"?utm_source=facebook&utm_medium=social&cls=MKTG&clp=Social_Media"),G.text($(this).val()+"?utm_source=linkedin&utm_medium=social&cls=MKTG&clp=Social_Media"),P.text($(this).val()+"?utm_source=twitter&utm_medium=social&cls=MKTG&clp=Social_Media"),O.text($(this).val()+"?utm_source=instagram&utm_medium=social&cls=MKTG&clp=Social_Media"),B.text($(this).val()+"?utm_source=youtube&utm_medium=social&cls=MKTG&clp=Social_Media"),K.text($(this).val()+"?utm_source=google&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),A.text($(this).val()+"?utm_source=linkedin&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),j.text($(this).val()+"?utm_source=facebook&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),q.text($(this).val()+"?utm_source=6sense&utm_medium=cpc&cls=MKTG&clp=Digital_Adv"),T.text($(this).val()+"?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),M.text("https://ujet.cx/contact-sales/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),N.text("https://ujet.cx/request-a-demo/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),D.text("https://ujet.cx/blog/?utm_source=nurture&utm_medium=email&cls=MKTG&clp=Email"),L.text($(this).val()+"?utm_source=sdr&utm_medium=email&cls=MKTG&clp=Email"))}})),$("#clear-url1").on("click",(function(e){e.preventDefault(),a.val("")})),$("#clear").on("click",(function(e){e.preventDefault(),a.val(""),S.val(""),C.val(""),E.val(""),b.val(""),k.val(""),r.val(""),n.val(""),l.val(""),i.val(""),o.val(""),h.val(""),x.val(""),y.val(""),_.val(""),I.text(""),G.text(""),P.text(""),O.text(""),B.text(""),K.text(""),A.text(""),j.text(""),q.text(""),c.text(""),m.text(""),v.text(""),s.val(""),u.val(""),d.val(""),p.val(""),g.val(""),r.removeClass("key"),n.removeClass("key"),l.removeClass("key"),i.removeClass("key"),o.removeClass("key"),h.removeClass("key"),x.removeClass("key"),y.removeClass("key"),_.removeClass("key"),S.removeClass("key"),C.removeClass("key"),E.removeClass("key"),b.removeClass("key"),k.removeClass("key"),p.removeClass("valid"),g.removeClass("valid"),f.removeClass("valid"),$("#social-form .text-copied").remove()})),$("textarea.all-text").focus((function(){var e=$(this);e.select(),e.mouseup((function(){return e.unbind("mouseup"),!1}))}));var z=$("#website_url2"),R=$("#campaign_source"),W=$("#campaign_medium"),H=$("#campaign_name"),V=$("#utm_asset"),U=$("#re-utm_asset"),Y=$("#utm_term"),Z=$("#re-utm_term"),J=$("#campaign_content"),Q=$("#url-result"),X=$("#ca-source"),ee=$("#ca-medium"),te=$("#ca-campaign"),ae=$("#ca-content"),re=$("#url-result-final"),ne=$("#url-form input"),le=$("#url-form select"),ie=$("#url-form textarea"),oe=$("#cls"),se=$("#clp"),ce=$("#ca-cls"),ue=$("#ca-clp"),me=$("#clss"),de=$("#clps");function ve(){re.val($.trim(Q.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(ee.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(X.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(te.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(U.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(Z.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(ae.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(ce.text().replace(/(\r\n|\n|\r)/gm,""))+$.trim(ue.text().replace(/(\r\n|\n|\r)/gm,""))),0!=Q.text()||0!=X.text()||0!=ee.text()||0!=te.text()||0!=U.text()||0!=Z.text()?re.addClass("key"):re.removeClass("key")}z.on("change keyup paste contextmenu input",(function(){w($(this));var e=$(this).val().match(/^http([s]?):\/\/.*/);if($(this).val().length<8||!e)console.log("no valid!"),$(this).removeClass("valid"),Q.text(""),re.val("");else{ve(),$(this).removeClass("valid").addClass("valid");var t=$(this).val().replace(/(\r\n|\n|\r)/gm,"");-1!==t.indexOf("?")?Q.text(t.substring(0,t.indexOf("?"))+"?"):Q.text($(this).val().replace(/(\r\n|\n|\r)/gm,"")+"?")}})),W.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?ee.text(""):(ve(),ee.text("utm_medium="+$(this).val().toLowerCase()))})),R.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?X.text(""):(ve(),X.text("&utm_source="+$(this).val().toLowerCase()))})),H.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?te.text(""):(ve(),te.text("&utm_campaign="+$(this).val().toLowerCase()))})),V.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?U.text(""):(ve(),U.text("&utm_asset="+$(this).val().toLowerCase()))})),Y.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?Z.text(""):(ve(),Z.text("&utm_term="+$(this).val().toLowerCase()))})),oe.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?ce.text(""):(ve(),ce.text("&cls="+$(this).val()))})),se.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?ue.text(""):(ve(),ue.text("&clp="+$(this).val()))})),J.on("change keyup paste contextmenu input",(function(){0==$(this).val().length?ae.text(""):(ve(),ae.text("&utm_content="+$(this).val().toLowerCase()))})),$("#clear2").on("click",(function(e){e.preventDefault(),z.val(""),R.val(""),W.val(""),H.val(""),V.val(""),Y.val(""),J.val(""),oe.val(""),se.val(""),ce.text(""),ue.text(""),me.val(""),de.val(""),ne.val(""),le.val(""),Q.text(""),X.text(""),ee.text(""),te.text(""),U.text(""),Z.text(""),ae.text(""),re.val("").removeClass("key"),ne.removeClass("valid"),le.removeClass("valid"),ie.removeClass("valid"),$("#url-form .text-copied").remove()})),$("input").on("change keyup paste contextmenu input",(function(){$(this).val().length>0?$(this).removeClass("valid").addClass("valid"):$(this).removeClass("valid")}));const pe="https://script.google.com/macros/s/AKfycbwja_tNMkakgHrHPsZqTPWSb06w2tZWN-cHnjSzoyA4ZBSFIq6Ewk0xFQ/exec",ge=document.forms["url-parameters"],fe=document.getElementById("website_url");let he=document.getElementById("page-url");document.getElementById("ca-campaign-contact"),document.getElementById("ca-campaign-request"),document.getElementById("ca-campaign-blog"),document.getElementById("ca-campaign-sdrs"),document.getElementById("ca-campaign-fa"),document.getElementById("ca-campaign-li"),document.getElementById("ca-campaign-tw"),document.getElementById("ca-campaign-in"),document.getElementById("ca-campaign-yu");let xe=document.getElementById("ca-source"),ye=document.getElementById("ca-medium");document.getElementById("Asset-Purpose");const $e=document.getElementById("Asset-Name");let _e=document.getElementById("Asset_Purpose"),Se=document.getElementById("Asset_Name"),Ce=document.getElementById("ca-clp2"),Ee=document.getElementById("ca-cls2");const be=document.getElementById("facebook-result-final"),ke=document.getElementById("linkedin-result-final"),we=document.getElementById("twitter-result-final"),Te=document.getElementById("instagram-result-final"),Me=document.getElementById("youtube-result-final"),Ne=document.getElementById("google-ad-result-final"),De=(document.getElementById("ca-campaign-go-ad"),document.getElementById("linkedin-ad-result-final")),Le=(document.getElementById("ca-campaign-li-ad"),document.getElementById("facebook-ad-result-final")),Ie=document.getElementById("6sense-ad-result-final"),Ge=(document.getElementById("ca-campaign-fa-ad"),document.getElementById("email-result-final")),Pe=document.getElementById("contact-result-final"),Oe=document.getElementById("request-result-final"),Be=document.getElementById("blog-result-final"),Ke=document.getElementById("sdrs-result-final");let Ae=document.getElementById("ca-url");const je=document.forms["url-parameters2"],qe=document.querySelector("#url-result-final");function Fe(e){if(!(null!=e.querySelector(".text-copied"))){let t=document.createElement("span");t.className="text-copied",t.innerText="The url is recorded successfully.",e.appendChild(t)}}Ge.addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("valid"),he.value=fe.value,xe.value="nurture",ye.value="email",Ce.value="Email",Ee.value="MKTG",_e.value=" - Email",Se.value=$e.value,Ae.value=Ge.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Pe.addEventListener("click",e=>{e.preventDefault(),he.value="https://ujet.cx/contact-sales/",e.target.classList.add("valid"),xe.value="nurture",ye.value="email",Ce.value="Email",Ee.value="MKTG",_e.value=" - Contact Us",Se.value=$e.value,Ae.value=Pe.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Oe.addEventListener("click",e=>{e.preventDefault(),he.value="https://ujet.cx/request-a-demo/",e.target.classList.add("valid"),xe.value="nurture",ye.value="email",Ce.value="Email",Ee.value="MKTG",_e.value=" - Request Demo",Se.value=$e.value,Ae.value=Oe.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Be.addEventListener("click",e=>{e.preventDefault(),he.value="https://ujet.cx/blog/",e.target.classList.add("valid"),xe.value="nurture",ye.value="email",Ce.value="Email",Ee.value="MKTG",_e.value=" - Blog",Se.value=$e.value,Ae.value=Be.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Ke.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="sdr",ye.value="email",Ce.value="Email",Ee.value="MKTG",_e.value=" - SDRs",Se.value=$e.value,Ae.value=Ke.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),be.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="facebook",ye.value="social",Ce.value="Social_Media",Ee.value="MKTG",_e.value=" - Social - Facebook",Se.value=$e.value,Ae.value=be.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),ke.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="linkedin",ye.value="social",Ce.value="Social_Media",Ee.value="MKTG",_e.value=" - Social - Linkedin",Se.value=$e.value,Ae.value=ke.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),we.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="twitter",ye.value="social",Ce.value="Social_Media",Ee.value="MKTG",_e.value=" - Social - Twitter",Se.value=$e.value,Ae.value=we.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Te.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="instagram",ye.value="social",Ce.value="Social_Media",Ee.value="MKTG",_e.value=" - Social - Instagram",Se.value=$e.value,Ae.value=Te.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Me.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="youtube",ye.value="social",Ce.value="Social_Media",Ee.value="MKTG",_e.value=" - Social - YouTube",Se.value=$e.value,Ae.value=Me.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Ne.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="google",ye.value="cpc",Ce.value="Digital_Adv",Ee.value="MKTG",_e.value=" - Dig Adv - Google",Se.value=$e.value,Ae.value=Ne.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),De.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="linkedin",ye.value="cpc",Ce.value="Digital_Adv",Ee.value="MKTG",_e.value=" - Dig Adv - LinkedIn",Se.value=$e.value,Ae.value=De.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Le.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="facebook",ye.value="cpc",Ce.value="Digital_Adv",Ee.value="MKTG",_e.value=" - Dig Adv - Facebbook",Se.value=$e.value,Ae.value=Le.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),Ie.addEventListener("click",e=>{e.preventDefault(),he.value=fe.value,e.target.classList.add("valid"),xe.value="6sense",ye.value="cpc",Ce.value="Digital_Adv",Ee.value="MKTG",_e.value=" - Dig Adv - 6sense",Se.value=$e.value,Ae.value=Ie.value,null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(ge)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),qe.addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("valid"),null!=e.target.parentNode.querySelector(".text-copied")||fetch(pe,{method:"POST",body:new FormData(je)}).then(e=>console.log("Success!",e)).catch(e=>console.error("Error!",e.message)),Fe(e.target.parentNode)}),$("#primary-nav a").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-50},500)}))}]);