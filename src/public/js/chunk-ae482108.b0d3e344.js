(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae482108"],{"1dc6":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"busco"},[r("v-card",{attrs:{elevation:"12","min-height":"750"}},[r("v-card-title",[e._v("Busco")]),r("v-card-subtitle",[r("i",[e._v("Seppey M., Manni M., Zdobnov E.M.")]),e._v("(2019) "),r("b",[e._v("BUSCO: Assessing Genome Assembly and Annotation Completeness.")]),e._v(" "),r("br"),e._v(" In: Kollmar M. (eds) Gene Prediction. Methods in Molecular Biology, vol 1962. Humana, New York, NY. 2019 "),r("a",{attrs:{href:"https://link.springer.com/protocol/10.1007/978-1-4939-9173-0_14",target:"_blank"}},[e._v("doi.org/10.1007/978-1-4939-9173-0_14")])]),r("v-card-text",[r("p",[e._v("Based on evolutionarily-informed expectations of gene content of near-universal single-copy orthologs, BUSCO metric is complementary to technical metrics like N50.")])])],1)],1)},a=[],s=r("5530"),n=r("2f62"),o={name:"Busco",data:function(){return{}},computed:Object(s["a"])({},Object(n["c"])(["fastaFiles"]))},c=o,l=r("2877"),d=r("6544"),u=r.n(d),h=r("b0af"),f=r("99d9"),g=Object(l["a"])(c,i,a,!1,null,null,null);t["default"]=g.exports;u()(g,{VCard:h["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"]})},"297c":function(e,t,r){"use strict";r("a9e3");var i=r("2b0e"),a=r("37c6");t["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,r){"use strict";var i=r("8e36");t["a"]=i["a"]},"615b":function(e,t,r){},"6ece":function(e,t,r){},"8e36":function(e,t,r){"use strict";var i=r("5530"),a=r("ade3"),s=(r("a9e3"),r("c7cd"),r("6ece"),r("0789")),n=r("a9ad"),o=r("fe6c"),c=r("a452"),l=r("7560"),d=r("80d2"),u=r("58df"),h=Object(u["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),c["a"],l["a"]);t["a"]=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(a["a"])(e,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(a["a"])(e,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["c"]:s["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["n"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(a["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c}));var i=r("b0af"),a=r("80d2"),s=Object(a["g"])("v-card__actions"),n=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");i["a"]},b0af:function(e,t,r){"use strict";var i=r("5530"),a=(r("a9e3"),r("0481"),r("615b"),r("10d2")),s=r("297c"),n=r("1c87"),o=r("58df");t["a"]=Object(o["a"])(s["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(i["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=s["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,i=t.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-ae482108.b0d3e344.js.map