(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var s,o,a=String(i(e)),c=r(n),u=a.length;return c<0||c>=u?t?"":void 0:(s=a.charCodeAt(c),s<55296||s>56319||c+1===u||(o=a.charCodeAt(c+1))<56320||o>57343?t?a.charAt(c):s:t?a.slice(c,c+2):o-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0a49":function(t,e,n){var r=n("9b43"),i=n("626a"),s=n("4bf8"),o=n("9def"),a=n("cd1c");t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,h=6==t,f=5==t||h,p=e||a;return function(e,a,d){for(var v,m,y=s(e),g=i(y),w=r(a,d,3),k=o(g.length),b=0,x=n?p(e,k):c?p(e,0):void 0;k>b;b++)if((f||b in g)&&(v=g[b],m=w(v,b,y),t))if(n)x[b]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:x.push(v)}else if(l)return!1;return h?-1:u||l?l:x}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),s=n("79e5"),o=n("be13"),a=n("2b4c"),c=n("520a"),u=a("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=a(t),p=!s(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),d=p?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e}):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!h){var v=/./[f],m=n(o,f,""[t],function(t,e,n,r,i){return e.exec===c?p&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),y=m[0],g=m[1];r(String.prototype,t,y),i(RegExp.prototype,f,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),s=n("ebd6"),o=n("0390"),a=n("9def"),c=n("5f1b"),u=n("520a"),l=Math.min,h=[].push,f="split",p="length",d="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,m){var y;return y="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var s,o,a,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,l+"g");while(s=u.call(m,i)){if(o=m[d],o>f&&(c.push(i.slice(f,s.index)),s[p]>1&&s.index<i[p]&&h.apply(c,s.slice(1)),a=s[0][p],f=o,c[p]>=v))break;m[d]===s.index&&m[d]++}return f===i[p]?!a&&m.test("")||c.push(""):c.push(i.slice(f)),c[p]>v?c.slice(0,v):c}:"0"[f](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=m(y,t,this,e,y!==n);if(r.done)return r.value;var u=i(t),h=String(this),f=s(u,RegExp),p=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),g=new f(v?u:"^(?:"+u.source+")",d),w=void 0===e?4294967295:e>>>0;if(0===w)return[];if(0===h.length)return null===c(g,h)?[h]:[];var k=0,b=0,x=[];while(b<h.length){g.lastIndex=v?b:0;var _,E=c(g,v?h:h.slice(b));if(null===E||(_=l(a(g.lastIndex+(v?0:b)),h.length))===k)b=o(h,b,p);else{if(x.push(h.slice(k,b)),x.length===w)return x;for(var C=1;C<=E.length-1;C++)if(x.push(E[C]),x.length===w)return x;b=k=_}}return x.push(h.slice(k)),x}]})},"30a6":function(t,e,n){"use strict";var r=n("51f0"),i=n.n(r);i.a},"51f0":function(t,e,n){},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,a="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(o=function(t){var e,n,o,l,h=this;return u&&(n=new RegExp("^"+h.source+"$(?!\\s)",r.call(h))),c&&(e=h[a]),o=i.call(h,t),c&&o&&(h[a]=h.global?o.index+o[0].length:e),u&&o&&o.length>1&&s.call(o[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},7514:function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(5),s="find",o=!0;s in[]&&Array(1)[s](function(){o=!1}),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(s)},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},8363:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gameInterface"}},[n("div",{staticClass:"playZone"},[n("div",{staticClass:"instruction"},[t._v("说明")]),n("div",{staticClass:"instructionDetail"},[n("input",{directives:[{name:"show",rawName:"v-show",value:0===t.gameStatus,expression:"gameStatus === 0"}],staticClass:"buttonStart",attrs:{type:"button",value:"开始游戏（点击）"},on:{click:t.startGame}}),n("span",{directives:[{name:"show",rawName:"v-show",value:1===t.gameStatus,expression:"gameStatus === 1"}],attrs:{id:"tipsWord"}},[t._v("剩余技能：")]),n("span",{directives:[{name:"show",rawName:"v-show",value:1===t.gameStatus,expression:"gameStatus === 1"}],attrs:{id:"tipsNum"}},[t._v(t._s(t.questionsRemaining))]),n("span",{directives:[{name:"show",rawName:"v-show",value:2===t.gameStatus,expression:"gameStatus === 2"}],attrs:{id:"finish-tip"}},[t._v("游戏完成")])]),n("div",{staticClass:"stopWatch",class:{finished:2===t.gameStatus}},[t._v(t._s(t.timeElapsed))]),n("transition",{attrs:{name:"fade"}},[t.isCountShowed?n("div",{staticClass:"readyCountNum"},[t._v(t._s(t.countDownNum))]):t._e()]),2===t.gameStatus?n("div",{staticClass:"btnAfterGame"},[n("input",{staticClass:"restart",attrs:{type:"button",value:"再来一次"},on:{click:t.resetGame}}),n("input",{staticClass:"cancel",attrs:{type:"button",value:"返回"},on:{click:t.backToHome}})]):t._e(),2!==t.gameStatus?n("div",{attrs:{id:"modelBox"}},["jsms"===t.model?n("div",{attrs:{id:"jsms_box"}},[n("div",{class:t.model1Question,attrs:{id:"jsms_spellShow"}},[n("div",{staticClass:"picture"}),n("span",{staticClass:"name",class:t.model1Question},[t._v(t._s(t.model1QuestionName))])])]):t._e(),"szms"===t.model?n("div",{attrs:{id:"szms_box"}},[n("div",{attrs:{id:"szms_spellShow10"}},[n("div",{staticClass:"line1 line"},t._l(t.line1Questions,function(e,r){return n("div",{key:r,staticClass:"question-wrapper",class:[e.name,{hide:e.isAnswered}]},[n("div",{staticClass:"picture",class:[e.name]}),n("span",{staticClass:"name",class:[e.name]},[t._v(t._s(e.text))])])}),0),n("div",{staticClass:"line2 line"},t._l(t.line2Questions,function(e,r){return n("div",{key:r,staticClass:"question-wrapper",class:[e.name,{hide:e.isAnswered}]},[n("div",{staticClass:"picture",class:[e.name]}),n("span",{staticClass:"name",class:[e.name]},[t._v(t._s(e.text))])])}),0)])]):t._e()]):t._e(),2!==t.gameStatus?n("div",{staticClass:"orbContainer"},[n("div",{class:[t.orbs[0]],attrs:{id:"orb3"}}),n("div",{class:[t.orbs[1]],attrs:{id:"orb2"}}),n("div",{class:[t.orbs[2]],attrs:{id:"orb1"}})]):t._e(),n("br")],1),2!==t.gameStatus?n("div",{staticClass:"panel"},[n("div",{attrs:{id:"quash"}},[n("div",{staticClass:"quashkey hotkey"},[t._v(t._s(t.hotkeyMap.quash.key))])]),n("div",{attrs:{id:"wex"}},[n("div",{staticClass:"wexkey hotkey"},[t._v(t._s(t.hotkeyMap.wex.key))])]),n("div",{attrs:{id:"exort"}},[n("div",{staticClass:"exortkey hotkey"},[t._v(t._s(t.hotkeyMap.exort.key))])]),n("div",{class:[t.skills[0]],attrs:{id:"skill1"}},[n("div",{staticClass:"skill1key hotkey"},[t._v(t._s(t.skillSlotKeys[0]))])]),n("div",{class:[t.skills[1]],attrs:{id:"skill2"}},[n("div",{staticClass:"skill2key hotkey"},[t._v(t._s(t.skillSlotKeys[1]))])]),n("div",{attrs:{id:"invoke"}},[n("div",{staticClass:"invokekey hotkey"},[t._v(t._s(t.hotkeyMap.invoke.key))])]),n("input",{staticClass:"cancel",attrs:{type:"button",value:"返回"},on:{click:t.backToHome}}),n("input",{staticClass:"restart",attrs:{type:"button",value:"重新开始"},on:{click:t.resetGame}})]):t._e()])},i=[];n("96cf");function s(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)})}}n("28a5"),n("7f7f"),n("7514"),n("ac6a");var a=n("be94"),c=(n("cadf"),n("551c"),n("097d"),n("2f62"));function u(t){var e,n=t.length;while(0!=n){e=Math.random()*n-->>>0;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t}var l={name:"Play",props:["model"],data:function(){return{watchTimer:null,startTime:0,countDownNum:3,isCountShowed:!1,skills:[],orbs:[],model1Question:"",model2Questions:[],questionsRemaining:10,timeElapsed:"00:00"}},computed:Object(a["a"])({},Object(c["d"])(["gameStatus","hotkeyMap","isTraditional"]),Object(c["b"])(["answersMap"]),{line1Questions:function(){var t=this.model2Questions.length/2;return this.model2Questions.filter(function(e,n){return n<t})},line2Questions:function(){var t=this.model2Questions.length/2;return this.model2Questions.filter(function(e,n){return n>=t})},skillList:function(){var t=[];for(var e in this.answersMap)t.push(this.answersMap[e]);return t},skillSlotKeys:function(){var t=[];return this.isTraditional?this.skills[0]?t[0]=this.hotkeyMap[this.skills[0]].key:t[0]="":t[0]=this.hotkeyMap.skill1.key,this.isTraditional?this.skills[1]?t[1]=this.hotkeyMap[this.skills[1]].key:t[1]="":t[1]=this.hotkeyMap.skill2.key,t},model1QuestionName:function(){return this.model1Question?this.hotkeyMap[this.model1Question].text.zh:""}}),watch:{gameStatus:function(t,e){}},methods:Object(a["a"])({},Object(c["c"])(["changeGameStatus"]),{backToHome:function(){this.resetGame(),this.$router.push({name:"home"})},keyBoardHandler:function(t){if(1===this.gameStatus){var e=t.key.toUpperCase();switch(e){case this.hotkeyMap.quash.key:this.orbs.unshift("quash");break;case this.hotkeyMap.wex.key:this.orbs.unshift("wex");break;case this.hotkeyMap.exort.key:this.orbs.unshift("exort");break;case this.hotkeyMap.invoke.key:var n=this.invoke();"jsms"===this.model&&n&&this.checkModel1Answer(n);break}if("szms"===this.model){var r,i=this.skillSlotKeys.indexOf(e);-1!==i&&this.skills[i]&&(r=this.skills[i],this.checkModel2Answer(r))}while(this.orbs.length>3)this.orbs.pop()}},invoke:function(){var t=0,e=0,n=0;this.orbs.forEach(function(r){switch(r){case"quash":t++;break;case"wex":e++;break;case"exort":n++;break}});var r=this.answersMap["s".concat(t).concat(e).concat(n)];if(r)if(-1===this.skills.indexOf(r))this.skills.unshift(r);else if(2===this.skills.length){var i=this.skills.pop();this.skills.unshift(i)}while(this.skills.length>2)this.skills.pop();return r},checkModel1Answer:function(t){t===this.model1Question&&(this.questionsRemaining--,0===this.questionsRemaining&&this.finishGame(),this.updateModel1Question())},checkModel2Answer:function(t){var e=this.model2Questions.find(function(e){return e.name===t&&!e.isAnswered});if(e){if(this.questionsRemaining--,e.isAnswered=!0,0===this.questionsRemaining)return void this.finishGame();0===this.model2Questions.filter(function(t){return!t.isAnswered}).length&&this.updateModel2Question()}},updateModel1Question:function(){var t;do{t=this.skillList[Math.floor(Math.random()*this.skillList.length)]}while(t===this.model1Question);this.model1Question=t},updateModel2Question:function(){var t=this,e=this.skillList.slice();this.model2Questions=u(e).slice(0,5).map(function(e){return{name:e,text:t.hotkeyMap[e].text.zh,isAnswered:!1}})},startWatch:function(){var t=this;this.startTime=+new Date,this.watchTimer=setInterval(function(){var e=String(((+new Date-t.startTime)/1e3).toFixed(2)),n=e.split(".")[0],r=e.split(".")[1];1===n.length&&(n="0"+n),t.timeElapsed="".concat(n,":").concat(r)},10)},pauseWatch:function(){clearInterval(this.watchTimer)},resetParams:function(){var t={watchTimer:null,startTime:0,countDownNum:3,isCountShowed:!1,skills:[],orbs:[],model1Question:"",model2Questions:[],questionsRemaining:10,timeElapsed:"00:00"};for(var e in t)this[e]=t[e]},startGame:function(){var t=o(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.countDownNum=3,this.isCountShowed=!0,t.next=4,new Promise(function(t,r){e=setInterval(function(){n.isCountShowed=!1,1===n.countDownNum?(clearInterval(e),t()):n.$nextTick(function(){n.countDownNum--,n.isCountShowed=!0})},1e3)});case 4:this.startWatch(),t.t0=this.model,t.next="jsms"===t.t0?8:"szms"===t.t0?10:12;break;case 8:return this.updateModel1Question(),t.abrupt("break",12);case 10:return this.updateModel2Question(),t.abrupt("break",12);case 12:this.changeGameStatus(1);case 13:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),finishGame:function(){this.pauseWatch(),this.changeGameStatus(2)},resetGame:function(){this.pauseWatch(),this.resetParams(),this.changeGameStatus(0)}}),mounted:function(){document.addEventListener("keydown",this.keyBoardHandler)},beforeDestroy:function(){document.removeEventListener("keydown",this.keyBoardHandler)}},h=l,f=(n("30a6"),n("2877")),p=Object(f["a"])(h,r,i,!1,null,"59df3427",null);p.options.__file="Play.vue";e["default"]=p.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=k;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},m={};m[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==r&&i.call(g,o)&&(m=g);var w=E.prototype=x.prototype=Object.create(m);_.prototype=w.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(L.prototype),L.prototype[a]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,n,r){var i=new L(k(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},C(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=R,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function k(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,s=Object.create(i.prototype),o=new A(r||[]);return s._invoke=S(t,n,o),s}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function _(){}function E(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(n,r,s,o){var a=b(t[n],t,r);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,s,o)},function(t){e("throw",t,s,o)}):Promise.resolve(u).then(function(t){c.value=t,s(c)},function(t){return e("throw",t,s,o)})}o(a.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function S(t,e,n){var r=h;return function(i,s){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw s;return N()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=Q(o,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function Q(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,Q(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var s=i.arg;return s?s.done?(e[t.resultName]=s.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function R(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return s.next=s}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},e853:function(t,e,n){var r=n("d3f4"),i=n("1169"),s=n("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[s],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=about.b41134eb.js.map