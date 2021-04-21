(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a93e4ee"],{"1f4f":function(t,e,i){"use strict";var a=i("5530"),s=(i("a9e3"),i("8b37"),i("80d2")),n=i("7560"),r=i("58df");e["a"]=Object(r["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"33c8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bbduk"},[i("v-card",{attrs:{elevation:"12","min-height":"750"}},[i("v-card-title",[t._v("BBDuk")]),i("v-card-subtitle",[t._v(" Adapter/Quality Trimming and Filtering ")]),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"3"}},[i("v-card",{attrs:{color:"grey lighten-4"}},[i("v-card-text",[i("v-form",{ref:"form",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-checkbox",{attrs:{label:"Paired-end Sequencing"},model:{value:t.input.paired,callback:function(e){t.$set(t.input,"paired",e)},expression:"input.paired"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{counter:15,label:"Basename",type:"text",hint:"Basename good outfiles",rules:[t.rules.required,t.rules.length]},model:{value:t.input.basename,callback:function(e){t.$set(t.input,"basename",e)},expression:"input.basename"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:t.fastqFiles,"item-text":"filename","item-value":"path",label:"Forward reads",dense:"",rules:[t.rules.required]},model:{value:t.input.fq1,callback:function(e){t.$set(t.input,"fq1",e)},expression:"input.fq1"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:t.fastqFiles,"item-text":"filename","item-value":"path",label:"Reverse reads",disabled:!t.input.paired,dense:""},model:{value:t.input.fq2,callback:function(e){t.$set(t.input,"fq2",e)},expression:"input.fq2"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-select",{attrs:{"menu-props":{top:!0,offsetY:!0},items:t.qtrim,label:"Side triming","item-text":"text","item-value":"value",dense:"",hint:"Trim read ends to remove bases with quality below trimq"},model:{value:t.input.qtrim,callback:function(e){t.$set(t.input,"qtrim",e)},expression:"input.qtrim"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Trim side quality",type:"number",max:"100",min:"10",hint:"Regions with average quality BELOW this will be trimmed"},model:{value:t.input.trimq,callback:function(e){t.$set(t.input,"trimq",e)},expression:"input.trimq"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Length required",type:"number",max:"100",min:"10",hint:"Reads shorter than this after trimming will be discarded."},model:{value:t.input.length,callback:function(e){t.$set(t.input,"length",e)},expression:"input.length"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Average quality",type:"number",max:"100",min:"10",hint:"Reads with average quality (after trimming) below this will be discarded."},model:{value:t.input.minavgquality,callback:function(e){t.$set(t.input,"minavgquality",e)},expression:"input.minavgquality"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{staticClass:"mt-0 pt-0",attrs:{label:"Force-Trimming",type:"number",max:"100",min:"0",hint:"This will trim the leftmost X bases and also trim the right end after to position (zero-based)."},model:{value:t.input.ftl,callback:function(e){t.$set(t.input,"ftl",e)},expression:"input.ftl"}})],1)],1)],1)],1),i("v-card-actions",[i("v-btn",{staticClass:"white--text",attrs:{disabled:!t.form,color:"deep-purple accent-4"},on:{click:t.runBBDuk}},[t._v(" Run BBDuk ")])],1)],1)],1),i("v-col",{attrs:{cols:"12",md:"9"}},[i("v-card",[i("v-card-text",[i("p",[t._v(" “Duk” stands for Decontamination Using Kmers. BBDuk was developed to combine most common data-quality-related trimming, filtering, and masking operations into a single high-performance tool.")]),t.show?i("div",[i("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"}),i("th",{staticClass:"text-left"},[t._v("Reads")]),i("th",{staticClass:"text-left"},[t._v("Bases")])])]),i("tbody",[i("tr",[i("td",[t._v("Input")]),i("td",[t._v(t._s(t.result.readsIn))]),i("td",[t._v(t._s(t.result.basesIn))])]),i("tr",[i("td",[t._v("Contaminants")]),i("td",[t._v(t._s(t.result.readsKFiltered))]),i("td",[t._v(t._s(t.result.basesKFiltered))])]),i("tr",[i("td",[t._v("QTrimmed")]),i("td",[t._v(t._s(t.result.readsQTrimmed))]),i("td",[t._v(t._s(t.result.basesQTrimmed))])]),i("tr",[i("td",[t._v("Total Removed")]),i("td",[t._v(t._s(t.result.readsRemoved))]),i("td",[t._v(t._s(t.result.basesRemoved))])]),i("tr",[i("td",[t._v("Result")]),i("td",[t._v(t._s(t.result.readsOut))]),i("td",[t._v(t._s(t.result.basesOut))])])])]},proxy:!0}],null,!1,1298394588)})],1):t._e()])],1)],1)],1)],1)],1),i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}}),i("p",{staticClass:"text-center"},[i("b",[t._v("Runing BBDuk"),i("br"),t._v("Please wait...")])])],1)],1)},s=[],n=i("1da1"),r=i("5530"),l=(i("96cf"),i("2f62")),o={name:"Bbduk",data:function(){return{form:!1,absolute:!0,overlay:!1,show:!1,input:{paired:!0,basename:"",fq1:"",fq2:"",minavgquality:20,trimq:20,qtrim:"rl",length:35,ftl:0,user:this.$store.state.user},qtrim:[{text:"Both",value:"rl"},{text:"Rigth End",value:"r"},{text:"Left End",value:"l"}],rules:{required:function(t){return!!t||"This field is required"},length:function(t){return t&&t.length<=15||"Name must be less than 10 characters"}},result:""}},computed:Object(r["a"])({},Object(l["c"])(["fastqFiles"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])(["loadStorage"])),{},{runBBDuk:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.overlay=!0,t.show=!1,e.next=5,t.axios.post("/biotools/bbduk",t.input);case 5:i=e.sent,t.result=i.data.result,t.overlay=!1,t.show=!0,t.loadStorage(t.$store.state.user._id),e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),t.result=e.t0.response.data,t.overlay=!1,t.show=!0;case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()}})},u=o,c=i("2877"),d=i("6544"),h=i.n(d),p=i("8336"),m=i("b0af"),v=i("99d9"),f=i("ac7c"),b=i("62ad"),g=i("4bd4"),x=i("a797"),_=i("490a"),y=i("0fd9"),k=i("b974"),w=i("1f4f"),V=i("8654"),C=Object(c["a"])(u,a,s,!1,null,null,null);e["default"]=C.exports;h()(C,{VBtn:p["a"],VCard:m["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCheckbox:f["a"],VCol:b["a"],VForm:g["a"],VOverlay:x["a"],VProgressCircular:_["a"],VRow:y["a"],VSelect:k["a"],VSimpleTable:w["a"],VTextField:V["a"]})},"4bd4":function(t,e,i){"use strict";var a=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("159b"),i("7db0"),i("58df")),n=i("7e2b"),r=i("3206");e["a"]=Object(s["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=i(t)))})):a.valid=i(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"6ca7":function(t,e,i){},"8b37":function(t,e,i){},ac7c:function(t,e,i){"use strict";var a=i("5530"),s=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),n=i("c37a"),r=(i("4de4"),i("5607")),l=i("2b0e"),o=l["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),u=i("8547"),c=i("58df");function d(t){t.preventDefault()}var h=Object(c["a"])(n["a"],o,u["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:d},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-4a93e4ee.6a4e1469.js.map