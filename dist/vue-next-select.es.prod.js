import{ref as e,onMounted as n,onUpdated as t,openBlock as a,createBlock as l,renderSlot as o,createVNode as u,withKeys as i,withModifiers as r,inject as c,mergeProps as d,Fragment as s,renderList as p,toDisplayString as v,createCommentVNode as f,reactive as g,toRef as y,computed as m,watchEffect as h,getCurrentInstance as b,watch as B,nextTick as I,provide as x,resolveComponent as w,withCtx as M,withDirectives as k,vShow as O}from"vue";function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,n){if(e){if("string"==typeof e)return A(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(e,n):void 0}}function A(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function T(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=S(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0,l=function(){};return{s:l,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return u=e.done,e},e:function(e){i=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw o}}}}var C={inheritAttrs:!1,name:"vue-input",props:{autocomplete:{required:!1,type:String},modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean},comboboxUid:{required:!0,type:Number}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(a,l){var o=e(null);return n((function(){a.autofocus&&o.value.focus()})),t((function(){a.autofocus&&o.value.focus()})),{handleInput:function(e){l.emit("input",e),l.emit("update:modelValue",e.target.value)},handleChange:function(e){l.emit("change",e),l.emit("update:modelValue",e.target.value)},handleFocus:function(e){l.emit("focus",e)},handleBlur:function(e){l.emit("blur",e)},input:o,handleEscape:function(e){o.value.blur(),l.emit("escape",e)}}}},D={class:"vue-input"};C.render=function(e,n,t,c,d,s){return a(),l("div",D,[o(e.$slots,"prepend"),u("input",{ref:"input",autocomplete:t.autocomplete,modelValue:t.modelValue,placeholder:t.placeholder,disabled:t.disabled,onInput:n[1]||(n[1]=function(){return c.handleInput&&c.handleInput.apply(c,arguments)}),onChange:n[2]||(n[2]=function(){return c.handleChange&&c.handleChange.apply(c,arguments)}),onFocus:n[3]||(n[3]=function(){return c.handleFocus&&c.handleFocus.apply(c,arguments)}),onBlur:n[4]||(n[4]=function(){return c.handleBlur&&c.handleBlur.apply(c,arguments)}),onKeyup:n[5]||(n[5]=i(r((function(){return c.handleEscape&&c.handleEscape.apply(c,arguments)}),["exact"]),["esc"])),tabindex:t.tabindex,autofocus:t.autofocus,"aria-autocomplete":"list","aria-controls":"vs".concat(t.comboboxUid,"-listbox"),"aria-labelledby":"vs".concat(t.comboboxUid,"-combobox")},null,40,["autocomplete","modelValue","placeholder","disabled","tabindex","autofocus","aria-controls","aria-labelledby"]),o(e.$slots,"append")])},C.__file="src/components/input.vue";var N={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==V(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},collapseTags:{type:Boolean}},emits:["click"],setup:function(e,n){return{dataAttrs:c("dataAttrs"),handleClick:function(e){n.emit("click",e)}}}};N.render=function(e,n,t,i,c,g){return a(),l("ul",d({class:["vue-tags",{collapsed:t.collapseTags}],onMousedown:n[1]||(n[1]=r((function(){}),["prevent"])),tabindex:"-1",onClick:n[2]||(n[2]=function(){return i.handleClick&&i.handleClick.apply(i,arguments)})},i.dataAttrs),[(a(!0),l(s,null,p(t.modelValue,(function(n){return a(),l(s,{key:n.key},[n.group?f("v-if",!0):(a(),l("li",{key:0,class:["vue-tag",{selected:n.selected}]},[o(e.$slots,"default",{option:n},(function(){return[u("span",null,v(n.label),1)]}))],2))],64)})),128))],16)},N.__file="src/components/tags.vue";var E={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(e){return e.every((function(e){return void 0!==V(e.key)&&void 0!==e.label&&"boolean"==typeof e.selected}))}},comboboxUid:{required:!0,type:Number},maxHeight:{required:!0},highlightedOriginalIndex:{required:!0}},emits:["click-item","mouseenter"],setup:function(e,n){return{dataAttrs:c("dataAttrs"),handleClickItem:function(e,t){t.disabled||n.emit("click-item",e,t)},handleMouseenter:function(e,t){n.emit("mouseenter",e,t)}}}};E.render=function(e,n,t,i,c,g){return a(),l("ul",d({class:"vue-dropdown",style:{maxHeight:t.maxHeight+"px"},onMousedown:n[1]||(n[1]=r((function(){}),["prevent"]))},i.dataAttrs,{role:"listbox",id:"vs".concat(t.comboboxUid,"-listbox"),"aria-multiselectable":i.dataAttrs["data-multiple"],"aria-busy":i.dataAttrs["data-loading"],"aria-disabled":i.dataAttrs["data-disabled"]}),[(a(!0),l(s,null,p(t.modelValue,(function(n,r){return a(),l(s,{key:n.key},[n.visible&&!1===n.hidden?(a(),l("li",{key:0,onClick:function(e){return i.handleClickItem(e,n)},class:["vue-dropdown-item",{selected:n.selected,disabled:n.disabled,highlighted:n.originalIndex===t.highlightedOriginalIndex,group:n.group}],onMouseenter:function(e){return i.handleMouseenter(e,n)},role:"option",id:"vs".concat(t.comboboxUid,"-option-").concat(r),"aria-selected":!!n.selected||!!n.disabled&&void 0,"aria-disabled":n.disabled},[o(e.$slots,"default",{option:n},(function(){return[u("span",null,v(n.label),1)]}))],42,["onClick","onMouseenter","id","aria-selected","aria-disabled"])):f("v-if",!0)],64)})),128))],16,["id","aria-multiselectable","aria-busy","aria-disabled"])},E.__file="src/components/dropdown.vue";var L=function(e,n,t){var a=t.valueBy;return a(e)===a(n)},j=function(e,n,t){var a=t.valueBy;return e.some((function(e){return L(e,n,{valueBy:a})}))},$=function(e,n,t){var a=t.valueBy;return e.find((function(e){return a(e)===n}))},U=function(e,n,t){var a=t.max,l=t.valueBy;return j(e,n,{valueBy:l})||e.length>=a?e:e.concat(n)},z=function(e,n,t){var a=t.min,l=t.valueBy;return!1===j(e,n,{valueBy:l})||e.length<=a?e:e.filter((function(e){return!1===L(e,n,{valueBy:l})}))},q=function(e){return m((function(){return"function"==typeof e.value?e.value:"string"==typeof e.value?function(n){return e.value.split(".").reduce((function(e,n){return e[n]}),n)}:function(e){return e}}))};var H={name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{default:null},options:{required:!0,type:Array},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},groupBy:{default:"group",type:[String,Function]},visibleOptions:{type:[Array,null],default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},searchable:{default:!1,type:Boolean},searchPlaceholder:{default:"Type to search",type:String},clearOnSelect:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},autocomplete:{default:"off",type:String},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},closeOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},maxHeight:{default:300,type:Number},openDirection:{type:String,validator:function(e){return["top","bottom"].includes(e)}}},emits:["selected","removed","update:modelValue","focus","blur","toggle","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(n,t){var a=function(e){var n=g({}),t=q(y(e,"labelBy"));h((function(){return n.labelBy=t.value}));var a=q(y(e,"valueBy"));h((function(){return n.valueBy=a.value}));var l=q(y(e,"disabledBy"));h((function(){return n.disabledBy=l.value}));var o=q(y(e,"groupBy"));h((function(){return n.groupBy=o.value}));var u=m((function(){return e.multiple?e.min:Math.min(1,e.min)}));h((function(){return n.min=u.value}));var i=m((function(){return e.multiple?e.max:1}));return h((function(){return n.max=i.value})),h((function(){return n.options=e.options})),n}(n),l=b(),o=e(),u=e(),i=e(),r=m((function(){var e;return null===(e=i.value)||void 0===e?void 0:e._.refs.input})),c=e(!1);B((function(){return c.value}),(function(){c.value?(t.emit("opened"),t.emit("focus"),n.searchable?(r.value!==document.activeElement&&r.value.focus(),t.emit("search:focus")):o.value.focus()):(n.searchable?(r.value===document.activeElement&&r.value.blur(),n.clearOnClose&&D(),t.emit("search:blur")):o.value.blur(),t.emit("closed"),t.emit("blur")),t.emit("toggle")}));var d=function(){n.disabled||(c.value=!0)},s=function(e){o.value.contains(null==e?void 0:e.relatedTarget)?setTimeout((function(){o.value.focus()})):c.value=!1};B((function(){return n.disabled}),(function(){return s()}));var p=e(""),v=m((function(){return new RegExp(p.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i")})),f=m((function(){return p.value?a.options.filter((function(e){return v.value.test(a.labelBy(e))})):void 0})),w=e([]),M=m((function(){return new Set(w.value.map((function(e){return a.valueBy(e)})))})),k=function(){if(n.multiple){if(!1===Array.isArray(n.modelValue))return!1;if(w.value.length!==n.modelValue.length)return!1;if(Object.keys(w.value).some((function(e){return w.value[e]!==$(a.options,n.modelValue[e],{valueBy:a.valueBy})})))return!1}else{if(0===w.value.length&&n.modelValue!==n.emptyModelValue)return!1;if(1===w.value.length&&n.modelValue===n.emptyModelValue)return!1;if(w.value[0]!==$(a.options,n.modelValue,{valueBy:a.valueBy}))return!1}return!0},O=function(){if(!k()){w.value=[];var e,t=T(n.multiple?n.modelValue:n.modelValue===n.emptyModelValue?[]:[n.modelValue]);try{for(t.s();!(e=t.n()).done;){var l=e.value,o=$(a.options,l,{valueBy:a.valueBy});!1!==j(a.options,o,{valueBy:a.valueBy})&&(w.value=U(w.value,o,{max:1/0,valueBy:a.valueBy}))}}catch(e){t.e(e)}finally{t.f()}}};O(),B((function(){return n.modelValue}),(function(){return O()}),{deep:!0}),B((function(){return a.options}),(function(){w.value=a.options.filter((function(e){return M.value.has(a.valueBy(e))}))}),{deep:!0});var V,S=function(e,n){(n=n.originalOption).value.every((function(e){var n=$(a.options,e,{valueBy:a.valueBy});return j(w.value,n,{valueBy:a.valueBy})}))?n.value.forEach((function(e){var n=$(a.options,e,{valueBy:a.valueBy});w.value=z(w.value,n,{min:a.min,valueBy:a.valueBy}),t.emit("removed",n)})):n.value.forEach((function(e){var n=$(a.options,e,{valueBy:a.valueBy});j(w.value,n,{valueBy:a.valueBy})||(w.value=U(w.value,n,{max:a.max,valueBy:a.valueBy}),t.emit("selected",n))}))},A=function(e,l){if(l=l.originalOption,j(w.value,l,{valueBy:a.valueBy}))w.value=z(w.value,l,{min:a.min,valueBy:a.valueBy}),t.emit("removed",l);else{if(!n.multiple&&1===w.value.length){var o=w.value[0];w.value=z(w.value,w.value[0],{min:0,valueBy:a.valueBy}),t.emit("removed",o)}w.value=U(w.value,l,{max:a.max,valueBy:a.valueBy}),t.emit("selected",l)}},C=function(){if(!k()){var e=w.value.map((function(e){return a.valueBy(e)}));n.multiple?t.emit("update:modelValue",e):e.length?t.emit("update:modelValue",e[0]):t.emit("update:modelValue",n.emptyModelValue)}},D=function(){r.value.value="",r.value.dispatchEvent(new Event("input")),r.value.dispatchEvent(new Event("change"))},N=m((function(){var e,t;return null!==(e=null!==(t=n.visibleOptions)&&void 0!==t?t:f.value)&&void 0!==e?e:a.options})),E=e(0),L=m((function(){var e,t=new Set(N.value.map((function(e){return a.valueBy(e)}))),l=a.options.map((function(e,l){var o={key:a.valueBy(e),label:a.labelBy(e),group:a.groupBy(e),originalIndex:l,originalOption:e};return o.selected=o.group?e.value.every((function(e){return M.value.has(e)})):M.value.has(a.valueBy(e)),o.disabled=o.group?a.disabledBy(e)||e.value.every((function(e){var n=$(a.options,e,{valueBy:a.valueBy});return a.disabledBy(n)})):a.disabledBy(e),o.visible=o.group?e.value.some((function(e){return t.has(e)})):t.has(a.valueBy(e)),o.hidden=!!n.hideSelected&&(o.group?e.value.every((function(e){return M.value.has(e)})):M.value.has(a.valueBy(e))),o})),o=T(l);try{for(o.s();!(e=o.n()).done;){var u=e.value;!1!==u.group&&(u.disabled&&function(){var e=new Set(u.originalOption.value);l.filter((function(n){return e.has(a.valueBy(n.originalOption))})).forEach((function(e){return e.disabled=!0}))}())}}catch(e){o.e(e)}finally{o.f()}return l})),H=function(e,n){var t=m((function(){return e.value.reduce((function(e,n){var t;return Object.assign(e,((t={})[n.originalIndex]=n,t))}),{})})),a=function(e){var a=t.value[e];return void 0!==a&&!1!==l(a)&&(n.value=e,!0)},l=function(e){return!e.disabled&&!e.hidden&&e.visible},o=m((function(){return e.value.some((function(e){return l(e)}))}));return h((function(){if(!1===o.value&&(n.value=null),e.value.length<=n.value)for(var t=0,u=e.value.reverse();t<u.length;t++){var i=u[t];if(a(i.originalIndex))break}if(null===n.value||!1===l(e.value[n.value]))for(var r=0,c=e.value;r<c.length&&(i=c[r],!a(i.originalIndex));r++);})),{pointerForward:function(){if(!1!==o.value&&null!==n.value)for(var t=n.value+1,l=0;t!==n.value&&l++<e.value.length&&(e.value.length<=t&&(t=0),!a(t));)++t},pointerBackward:function(){if(!1!==o.value&&null!==n.value)for(var t=n.value-1,l=0;t!==n.value&&l++<e.value.length&&(t<0&&(t=e.value.length-1),!a(t));)--t},pointerSet:a}}(L,E),P=H.pointerForward,_=H.pointerBackward,W=H.pointerSet,Z="",R=/^[\w]$/,G=m((function(){var e=F(a.options.keys());return e.slice(E.value).concat(e.slice(0,E.value))})),Q=function(){var e,n=null===(e=o.value)||void 0===e?void 0:e.querySelector(".highlighted");if(n&&u.value){var t,a=getComputedStyle(n);for(t=0;n.offsetTop+parseFloat(a.height)+parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)>u.value.$el.clientHeight+u.value.$el.scrollTop&&t++<L.value.length;)u.value.$el.scrollTop=u.value.$el.scrollTop+parseFloat(a.height)+parseFloat(a.paddingTop)+parseFloat(a.paddingBottom);for(t=0;n.offsetTop<u.value.$el.scrollTop&&t++<L.value.length;)u.value.$el.scrollTop=u.value.$el.scrollTop-parseFloat(a.height)-parseFloat(a.paddingTop)-parseFloat(a.paddingBottom)}};B((function(){return[c.value,a.options,M.value]}),(function(e,n){!0!==(null==n?void 0:n[0])&&!1!==c.value&&0!==w.value.length&&(W(a.options.findIndex((function(e){return M.value.has(a.valueBy(e))}))),I(Q))}),{deep:!0,immediate:!0});var Y=m((function(){return{"data-is-focusing":c.value,"data-visible-length":L.value.filter((function(e){return e.visible&&!1===e.hidden})).length,"data-not-selected-length":a.options.length-L.value.filter((function(e){return e.selected})).length,"data-selected-length":L.value.filter((function(e){return e.selected})).length,"data-addable":L.value.filter((function(e){return e.selected})).length<a.max,"data-removable":L.value.filter((function(e){return e.selected})).length>a.min,"data-total-length":a.options.length,"data-multiple":n.multiple,"data-loading":n.loading,"data-disabled":n.disabled}}));x("dataAttrs",Y);var K=m((function(){var e=L.value.filter((function(e){return e.selected})).filter((function(e){return!e.group}));return n.multiple?0===e.length?n.placeholder:1===e.length?"1 option selected":e.length+" options selected":0===e.length?n.placeholder:e[0].label+""})),J=e();return B((function(){return[n.openDirection,c.value]}),(function(){var e,t;J.value=null!==(e=null!==(t=n.openDirection)&&void 0!==t?t:function(){if(void 0===o.value)return;if(void 0===window)return;return window.innerHeight-o.value.getBoundingClientRect().bottom>=n.maxHeight?"bottom":"top"}())&&void 0!==e?e:"bottom"}),{immediate:!0}),{instance:l,isFocusing:c,wrapper:o,dropdown:u,input:i,focus:d,blur:s,toggle:function(){c.value?s():d()},searchingInputValue:p,handleInputForInput:function(e){t.emit("search:input",e)},handleChangeForInput:function(e){t.emit("search:change",e)},handleFocusForInput:function(e){d()},handleBlurForInput:function(e){s()},optionsWithInfo:L,addOrRemoveOption:function(e,t){n.disabled||(t.group&&n.multiple?S(e,t):A(e,t),C(),!0===n.closeOnSelect&&(c.value=!1),!0===n.clearOnSelect&&p.value&&D())},dataAttrs:Y,innerPlaceholder:K,highlightedOriginalIndex:E,pointerForward:function(){P.apply(void 0,arguments),I(Q)},pointerBackward:function(){_.apply(void 0,arguments),I(Q)},pointerFirst:function(){var e,n=T(a.options.keys());try{for(n.s();!(e=n.n()).done;){var t=e.value;if(W(t))break}}catch(e){n.e(e)}finally{n.f()}I(Q)},pointerLast:function(){var e,n=T(F(a.options.keys()).reverse());try{for(n.s();!(e=n.n()).done;){var t=e.value;if(W(t))break}}catch(e){n.e(e)}finally{n.f()}I(Q)},typeAhead:function(e){if(!n.searchable){var t=!1;if(R.test(e.key)?(Z+=e.key.toLowerCase(),t=!0):"Space"===e.code&&(Z+=" "),t){var l,o=T(G.value);try{for(o.s();!(l=o.n()).done;){var u,i,r=l.value;if(!0===(null===(u=a.labelBy(a.options[r]))||void 0===u||null===(i=u.toLowerCase())||void 0===i?void 0:i.startsWith(Z))&&W(r))break}}catch(e){o.e(e)}finally{o.f()}clearTimeout(V),V=setTimeout((function(){Z=""}),500)}}},pointerSet:W,direction:J}},components:{VInput:C,VTags:N,VDropdown:E},__VERSION__:"2.8.0"},P={ref:"header",class:"vue-select-header"},_={key:0,class:"vue-input"},W=u("span",{class:"icon loading"},[u("div"),u("div"),u("div")],-1),Z={key:0,class:"vue-select-input-wrapper"},R=u("span",{class:"icon loading"},[u("div"),u("div"),u("div")],-1);H.render=function(e,n,t,c,p,g){var y=w("v-tags"),m=w("v-input"),h=w("v-dropdown");return a(),l("div",d({ref:"wrapper",class:["vue-select",["direction-".concat(e.direction)]],tabindex:e.isFocusing?-1:e.tabindex,onFocus:n[10]||(n[10]=function(){return e.focus&&e.focus.apply(e,arguments)}),onBlur:n[11]||(n[11]=function(n){return!e.searchable&&e.blur(n)})},Object.assign({},e.dataAttrs,e.$attrs),{onKeypress:n[12]||(n[12]=i(r((function(){return null!==e.highlightedOriginalIndex&&e.addOrRemoveOption(e.$event,e.optionsWithInfo[e.highlightedOriginalIndex])}),["prevent","exact"]),["enter"])),onKeydown:[n[13]||(n[13]=i(r((function(){return e.pointerForward&&e.pointerForward.apply(e,arguments)}),["prevent","exact"]),["down"])),n[14]||(n[14]=i(r((function(){return e.pointerBackward&&e.pointerBackward.apply(e,arguments)}),["prevent","exact"]),["up"])),n[15]||(n[15]=i(r((function(){return e.pointerFirst&&e.pointerFirst.apply(e,arguments)}),["prevent","exact"]),["home"])),n[16]||(n[16]=i(r((function(){return e.pointerLast&&e.pointerLast.apply(e,arguments)}),["prevent","exact"]),["end"])),n[17]||(n[17]=function(){return e.typeAhead&&e.typeAhead.apply(e,arguments)})],id:"vs".concat(e.instance.uid,"-combobox"),role:e.searchable?"combobox":null,"aria-expanded":e.isFocusing,"aria-haspopup":"listbox","aria-owns":"vs".concat(e.instance.uid,"-listbox"),"aria-activedescendant":null===e.highlightedOriginalIndex?null:"vs".concat(e.instance.uid,"-option-").concat(e.highlightedOriginalIndex),"aria-busy":e.loading,"aria-disabled":e.disabled}),[u("div",P,[e.multiple&&e.taggable&&0===e.modelValue.length||!1===e.searchable&&!1===e.taggable?(a(),l("div",_,[u("input",{placeholder:e.innerPlaceholder,autocomplete:e.autocomplete,readonly:"",onClick:n[1]||(n[1]=function(){return e.focus&&e.focus.apply(e,arguments)})},null,8,["placeholder","autocomplete"])])):f("v-if",!0),e.multiple&&e.taggable?(a(),l(s,{key:1},[u(y,{modelValue:e.optionsWithInfo,"collapse-tags":e.collapseTags,tabindex:"-1",onClick:e.focus},{default:M((function(n){var t=n.option;return[o(e.$slots,"tag",{option:t.originalOption,remove:function(){return e.addOrRemoveOption(e.$event,t)}},(function(){return[u("span",null,v(t.label),1),u("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:r((function(){return e.addOrRemoveOption(e.$event,t)}),["prevent","stop"])},null,8,["onClick"])]}))]})),_:3},8,["modelValue","collapse-tags","onClick"]),o(e.$slots,"toggle",{isFocusing:e.isFocusing,toggle:e.toggle},(function(){return[u("span",{class:["icon arrow-downward",{active:e.isFocusing}],onClick:n[2]||(n[2]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:n[3]||(n[3]=r((function(){}),["prevent","stop"]))},null,34)]}))],64)):(a(),l(s,{key:2},[e.searchable?(a(),l(m,{key:0,ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,autocomplete:e.autocomplete,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex,comboboxUid:e.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"])):f("v-if",!0),e.loading?o(e.$slots,"loading",{key:1},(function(){return[W]})):o(e.$slots,"toggle",{key:2,isFocusing:e.isFocusing,toggle:e.toggle},(function(){return[u("span",{class:["icon arrow-downward",{active:e.isFocusing}],onClick:n[5]||(n[5]=function(){return e.toggle&&e.toggle.apply(e,arguments)}),onMousedown:n[6]||(n[6]=r((function(){}),["prevent","stop"]))},null,34)]}))],64))],512),e.multiple&&e.taggable&&e.searchable?(a(),l("div",Z,[k(u(m,{ref:"input",modelValue:e.searchingInputValue,"onUpdate:modelValue":n[7]||(n[7]=function(n){return e.searchingInputValue=n}),disabled:e.disabled,autocomplete:e.autocomplete,placeholder:e.isFocusing?e.searchPlaceholder:e.innerPlaceholder,onInput:e.handleInputForInput,onChange:e.handleChangeForInput,onFocus:e.handleFocusForInput,onBlur:e.handleBlurForInput,onEscape:e.blur,autofocus:e.autofocus||e.taggable&&e.searchable,tabindex:e.tabindex,comboboxUid:e.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"]),[[O,e.isFocusing]]),e.loading?o(e.$slots,"loading",{key:0},(function(){return[R]})):f("v-if",!0)])):f("v-if",!0),u(h,{ref:"dropdown",modelValue:e.optionsWithInfo,"onUpdate:modelValue":n[8]||(n[8]=function(n){return e.optionsWithInfo=n}),onClickItem:e.addOrRemoveOption,onMouseenter:n[9]||(n[9]=function(n,t){return e.pointerSet(t.originalIndex)}),comboboxUid:e.instance.uid,maxHeight:e.maxHeight,highlightedOriginalIndex:e.highlightedOriginalIndex},{default:M((function(n){var t=n.option;return[o(e.$slots,"dropdown-item",{option:t.originalOption},(function(){return[u("span",null,v(t.label),1)]}))]})),_:3},8,["modelValue","onClickItem","comboboxUid","maxHeight","highlightedOriginalIndex"])],16,["tabindex","id","role","aria-expanded","aria-owns","aria-activedescendant","aria-busy","aria-disabled"])},H.__file="src/index.vue";export{H as default};
