import{m as s}from"./vuex.cc7cb26e.js";import{I as m}from"./IFrame.42c61af8.js";import{n as l,l as r}from"./app.4a346a76.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.293d38cb.js";import"./@babel.43d8d0a5.js";import"./dayjs.9859f5d3.js";import"./localforage.9af36afe.js";import"./markdown-it.6846e2b0.js";import"./entities.797c3e49.js";import"./uc.micro.700527ef.js";import"./mdurl.95c1032c.js";import"./linkify-it.96515e28.js";import"./punycode.50f384b0.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.64308959.js";import"./vue.296078bd.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.d4b5b622.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.ad7135d3.js";import"./clipboard.3f21bed6.js";import"./view-design-hi.609f8897.js";import"./vuedraggable.6ea348a4.js";import"./sortablejs.982d79d6.js";import"./vue-resize-observer.e788af6d.js";import"./element-sea.c283d284.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.37526d89.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e7e40052.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawio-content"},[i("IFrame",{ref:"frame",staticClass:"drawio-iframe",attrs:{src:t.url},on:{"on-message":t.onMessage}}),t.loadIng?i("div",{staticClass:"drawio-loading"},[i("Loading")],1):t._e()],1)},d=[];const u={name:"Drawio",components:{IFrame:m},props:{value:{type:Object,default:function(){return{}}},title:{type:String,default:""},readOnly:{type:Boolean,default:!1}},data(){return{loadIng:!0,url:null,bakData:""}},created(){let t=r;switch(r){case"zh-CHT":t="zh-tw";break}let e=this.readOnly?1:0,i=this.readOnly?0:1,n=this.themeName==="dark"?"dark":"kennedy",a=`?title=${this.title?encodeURIComponent(this.title):""}&chrome=${i}&lightbox=${e}&ui=${n}&lang=${t}&offline=1&pwa=0&embed=1&noLangIcon=1&noExitBtn=1&noSaveBtn=1&saveAndExit=0&spin=1&proto=json`;this.$Electron?this.url=$A.originUrl(`drawio/webapp/index.html${a}`):this.url=$A.mainUrl(`drawio/webapp/${a}`)},mounted(){window.addEventListener("message",this.handleMessage)},beforeDestroy(){window.removeEventListener("message",this.handleMessage)},watch:{value:{handler(t){this.bakData!=$A.jsonStringify(t)&&(this.bakData=$A.jsonStringify(t),this.updateContent())},deep:!0}},computed:{...s(["themeName"])},methods:{formatZoom(t){return t+"%"},updateContent(){this.$refs.frame.postMessage(JSON.stringify({action:"load",autosave:1,xml:this.value.xml}))},onMessage(t){switch(t.event){case"init":this.loadIng=!1,this.updateContent();break;case"load":typeof this.value.xml=="undefined"&&this.$refs.frame.postMessage(JSON.stringify({action:"template"}));break;case"autosave":const e={xml:t.xml};this.bakData=$A.jsonStringify(e),this.$emit("input",e);break;case"save":this.$emit("saveData");break}}}},o={};var c=l(u,p,d,!1,h,"39021859",null,null);function h(t){for(let e in o)this[e]=o[e]}var Y=function(){return c.exports}();export{Y as default};
