(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2495:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"dark",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"zingoworks Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"40"}}),a("h1",{staticClass:"mr-2"},[t._v("techlect.")])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/zingoworks",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("@zingoworks")]),a("v-icon",[t._v("mdi-github")])],1)],1),a("v-main",[a("Container")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exists?n("main",[n("article",[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.articles,(function(e){return n("v-list-item",{key:e.id,on:{click:function(n){return t.popArticlePage(e.link,e.id)}}},[n("v-list-item-content",[n("v-list-item-title",[n("span",{staticClass:"article-title"},[t._v(t._s(e.title))]),t.isRecentArticle(e.authoredOn)?n("v-badge",{attrs:{color:"blue",content:"N","offset-x":"-3","offset-y":"-4"}}):t._e()],1),n("v-list-item-subtitle",[n("img",{staticClass:"organization-logo",attrs:{src:e.organizationFaviconPath}}),n("span",{staticClass:"meta-tag organization"},[t._v(" "+t._s(e.organizationName)+" ")]),n("span",{staticClass:"meta-tag"},[t._v(t._s(e.authoredOn))]),n("span",{staticClass:"meta-tag"},[t._v(t._s(e.author))])])],1)],1)})),1)],1)],1),n("v-pagination",{attrs:{length:t.pagination.totalPages,"total-visible":7},on:{input:t.onPageChange},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1):t._e()},s=[],c=n("bc3a"),l=n.n(c),u={data:function(){return{articles:[],pagination:{page:1,totalPages:null},exists:null}},created:function(){var t=this;l.a.get("/api/articles?page=1").then((function(e){t.articles=e.data.content,t.pagination.totalPages=e.data.totalPages,t.exists=t.articles.length>0}))},methods:{popArticlePage:function(t,e){window.open(t,"_blank"),l.a.post("/api/articles/hits/".concat(e)).then((function(t){return console.log(t)}))},onPageChange:function(t){var e=this;l.a.get("/api/articles?page="+t).then((function(t){return e.articles=t.data.content}))},isRecentArticle:function(t){var e=new Date,n=new Date(t),a=(e.getTime()-n.getTime())/864e5;return a<=7}}},p=u,f=(n("d1e2"),n("2877")),g=n("6544"),d=n.n(g),v=n("4ca6"),h=n("8860"),m=n("da13"),b=n("5d23"),_=n("1baa"),y=n("891e"),w=Object(f["a"])(p,o,s,!1,null,"72d58f65",null),P=w.exports;d()(w,{VBadge:v["a"],VList:h["a"],VListItem:m["a"],VListItemContent:b["a"],VListItemGroup:_["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VPagination:y["a"]});var x={name:"App",components:{Container:P}},k=x,O=n("7496"),V=n("40dc"),C=n("8336"),j=n("132d"),z=n("adda"),A=n("f6c4"),I=n("2fa4"),L=Object(f["a"])(k,i,r,!1,null,null,null),S=L.exports;d()(L,{VApp:O["a"],VAppBar:V["a"],VBtn:C["a"],VIcon:j["a"],VImg:z["a"],VMain:A["a"],VSpacer:I["a"]});var T=n("f309");a["a"].use(T["a"]);var M=new T["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:M,render:function(t){return t(S)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.92c2910a.png"},d1e2:function(t,e,n){"use strict";var a=n("2495"),i=n.n(a);i.a}});
//# sourceMappingURL=app.55155c95.js.map