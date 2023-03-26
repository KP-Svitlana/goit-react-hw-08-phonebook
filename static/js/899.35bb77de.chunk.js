"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[899],{899:function(t,e,n){n.r(e),n.d(e,{Contacts:function(){return E}});var r=n(791),a=n(97),o=n(434),i=n(895),u="Filter_filter__vxThR",c="Filter_filter_label__5ITod",s="Filter_filter__input__toa89",l=n(184),f=function(){var t=(0,o.I0)();return(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("label",{htmlFor:"filter",className:c,children:"Find contacts by name"}),(0,l.jsx)("input",{className:s,type:"text",name:"filter",onChange:function(e){t((0,i.K)(e.target.value))}})]})},m="ContactList_contactList__list__EgfLC",p="ContactList_contactList__item__2K2vx",d="ContactList_contactList__span__byAXF",h="ContactList_contactList__btn__Q+Zz6",_="NOT_FOUND";var v=function(t,e){return t===e};function y(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?v:r,o=n.maxSize,i=void 0===o?1:o,u=n.resultEqualityCheck,c=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),s=1===i?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:_},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return _}return{get:r,put:function(e,a){r(e)===_&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function l(){var e=s.get(arguments);if(e===_){if(e=t.apply(null,arguments),u){var n=s.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function g(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function b(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,m=Array.isArray(f)?f:[f],p=g(r),d=t.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],e=p.length,n=0;n<e;n++)t.push(p[n].apply(null,arguments));return o=d.apply(null,t)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:d,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var x=b(y),C=function(t){return t.contacts.items},j=x([C,function(t){return t.filter}],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),N=function(){var t=(0,o.I0)(),e=(0,o.v9)(j);return(0,l.jsx)("div",{children:(0,l.jsx)("ul",{className:m,children:e.map((function(e){return(0,l.jsxs)("li",{className:p,children:[e.name,":",(0,l.jsx)("span",{className:d,children:e.phone}),(0,l.jsx)("button",{type:"button",className:h,onClick:function(){t((0,a.GK)(e.id))},children:"Delete"})]},e.id)}))})})},k=n(439),w="ContactForm_form__dhl+T",F="ContactForm_form__label__8W82B",A="ContactForm_form__input__VGD4-",L="ContactForm_form__btn__WXQ4e",z=function(){var t=(0,r.useState)(""),e=(0,k.Z)(t,2),n=e[0],i=e[1],u=(0,r.useState)(""),c=(0,k.Z)(u,2),s=c[0],f=c[1],m=(0,o.I0)(),p=(0,o.v9)(C),d=function(t){switch(t.target.name){case"name":i(t.target.value);break;case"number":f(t.target.value);break;default:console.log("Sorry, something going wrong. Try again later.")}};return(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:"".concat(n),phone:"".concat(s)};p.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(m((0,a.uK)(e)),i(""),f(""))},className:w,children:[(0,l.jsx)("label",{htmlFor:"name",className:F,children:"Name"}),(0,l.jsx)("input",{className:A,type:"text",id:"name",name:"name",onChange:d,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("label",{htmlFor:"number",className:F,children:"Number"}),(0,l.jsx)("input",{className:A,type:"tel",name:"number",onChange:d,value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,l.jsx)("button",{className:L,type:"submit",children:"Add contact"})]})},E=function(){var t=(0,o.I0)();return(0,r.useEffect)((function(){t((0,a.yF)())}),[t]),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"auto",marginRight:"auto",width:320},children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(z,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(f,{}),(0,l.jsx)(N,{})]})}}}]);
//# sourceMappingURL=899.35bb77de.chunk.js.map