webpackJsonp([0x5eadfb0a5d2a],{203:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(6),r=l(n),u=a(48),d=l(u),s=function(e){return e.test?r.default.createElement("span",{className:"pagination-item"},e.text):r.default.createElement(d.default,{to:e.url,className:"pagination-item"},e.text)};t.default=function(e){var t=(e.data,e.pathContext),a=t.group,l=t.index,n=t.first,u=t.last,i=l-1==1?"":(l-1).toString(),f=(l+1).toString();return r.default.createElement("div",null,a.map(function(e,t){var a=e.node;return r.default.createElement("div",{className:"post",key:t},r.default.createElement("h1",{className:"post-title"},r.default.createElement(d.default,{to:a.fields.slug},a.fields.title)),r.default.createElement("span",{className:"post-date"},a.fields.date),r.default.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}))}),r.default.createElement("div",{className:"pagination"},r.default.createElement(s,{test:u,url:f,text:"Older"}),r.default.createElement(s,{test:n,url:i,text:"Newer"})))},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-index-js-df9cdc295ee438509c6c.js.map