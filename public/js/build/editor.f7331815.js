import{f as a,d as s,a as l,b as d,c as m,_ as p,e as u,v as c}from"./@kangc.a7dcf9a0.js";import{P as h}from"./prismjs.86ef8ba0.js";import{l as i,n as f}from"./app.4a346a76.js";import{C as g}from"./codemirror.cfc40f4a.js";import{e as _}from"./index.40a8e116.js";import{I as v}from"./ImgUpload.6b7490da.js";import"./@babel.43d8d0a5.js";import"./vue.296078bd.js";import"./copy-to-clipboard.a53c061d.js";import"./toggle-selection.d2487283.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.293d38cb.js";import"./dayjs.9859f5d3.js";import"./localforage.9af36afe.js";import"./markdown-it.6846e2b0.js";import"./entities.797c3e49.js";import"./uc.micro.700527ef.js";import"./mdurl.95c1032c.js";import"./linkify-it.96515e28.js";import"./punycode.50f384b0.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.64308959.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.d4b5b622.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.ad7135d3.js";import"./clipboard.3f21bed6.js";import"./view-design-hi.609f8897.js";import"./vuedraggable.6ea348a4.js";import"./sortablejs.982d79d6.js";import"./vue-resize-observer.e788af6d.js";import"./element-sea.c283d284.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.37526d89.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e7e40052.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var $=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vmeditor-wrapper"},[o("v-md-editor",{directives:[{name:"show",rawName:"v-show",value:e.showEditor,expression:"showEditor"}],ref:"editor",staticClass:"vmeditor-editor",attrs:{toolbar:e.toolbar,"left-toolbar":e.leftToolbar,"right-toolbar":e.rightToolbar,"toc-nav-position-right":e.tocNavPositionRight,"include-level":e.includeLevel,"disabled-menus":[]},on:{"upload-image":e.handleUpload},model:{value:e.content,callback:function(r){e.content=r},expression:"content"}}),e.uploadIng>0?o("Spin",{attrs:{fix:""}},[o("Icon",{staticClass:"vmeditor-icon-loading",attrs:{type:"ios-loading"}}),o("div",[e._v(e._s(e.$L("\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6...")))])],1):e._e(),o("ImgUpload",{ref:"myUpload",staticClass:"vmeditor-upload-control",attrs:{type:"callback",uploadIng:e.uploadIng,num:"50"},on:{"update:uploadIng":function(r){e.uploadIng=r},"update:upload-ing":function(r){e.uploadIng=r},"on-callback":e.handleInsertImages}}),o("Upload",{ref:"fileUpload",staticClass:"vmeditor-upload-control",attrs:{name:"files",action:e.actionUrl,headers:e.headers,multiple:"",paste:"",format:e.uploadFormat,"show-upload-list":!1,"max-size":e.maxSize,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"on-error":e.handleError,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload}})],1)},x=[];i==="zh"||i==="zh-CHT"?a.lang.use("zh-CN",s):a.lang.use("en-US",l);a.use(d());a.use(m());a.use(p());a.use(u());a.Codemirror=g;const I={mixins:[_],components:{[a.name]:a,ImgUpload:v},data(){return{showEditor:!1,content:"",toolbar:{customImages:{icon:"v-md-icon-img",title:e=>e.langConfig.image.toolbar,menus:[{name:"image-link",text:e=>e.langConfig.imageLink.toolbar,action:e=>{this.handleInsertImages([{name:"Description",url:"http://"}])}},{name:"browse-image",text:this.$L("\u6D4F\u89C8\u56FE\u7247\u7A7A\u95F4"),action:e=>{this.$refs.myUpload.browsePicture()}},{name:"upload-image",text:e=>e.langConfig.uploadImage.toolbar,action:e=>{this.$refs.myUpload.handleClick()}},{name:"upload-local",text:this.$L("\u4E0A\u4F20\u672C\u5730\u6587\u4EF6"),action:e=>{this.$refs.fileUpload.handleClick()}}]}},uploadIng:0,uploadFormat:["jpg","jpeg","webp","png","gif","doc","docx","xls","xlsx","ppt","pptx","txt","esp","pdf","rar","zip","gz","ai","avi","bmp","cdr","eps","mov","mp3","mp4","pr","psd","svg","tif"],actionUrl:$A.apiUrl("system/fileupload"),maxSize:1024e3}},created(){a.use(c,{Prism:h,extend(e){}})},mounted(){this.windowWidth>1200&&this.$refs.editor.toggleToc(!0),this.showEditor=!0},computed:{headers(){return{fd:$A.getSessionStorageString("userWsFd"),token:this.userToken}}},watch:{value:{handler(e){e==null&&(e=""),this.content=e},immediate:!0},content(e){this.$emit("input",e)}},methods:{handleUpload(e){e.type==="drop"?this.$refs.fileUpload.onDrop(e):this.$refs.fileUpload.handlePaste(e)},handleInsertText(e,t=""){this.$refs.editor.focus(),this.$refs.editor.replaceSelectionText(e),this.$refs.editor.changeSelctionTo(e,t)},handleInsertImages(e){this.$refs.editor.focus(),e.forEach(t=>{const o=t.name||"image",r=`![${o}](${t.url})
`;this.$refs.editor.replaceSelectionText(r),this.$refs.editor.changeSelctionTo(r,e.length===1?o:"")})},handleProgress(e,t){t._uploadIng===void 0&&(t._uploadIng=!0,this.uploadIng++)},handleSuccess(e,t){if(this.uploadIng--,e.ret===1){const{data:o}=e;this.handleInsertText(`[${o.name} (${$A.bytesToSize(o.size*1024)})](${o.url})`)}else $A.modalWarning({title:"\u4E0A\u4F20\u5931\u8D25",content:"\u6587\u4EF6 "+t.name+" \u4E0A\u4F20\u5931\u8D25\uFF0C"+e.msg})},handleError(){this.uploadIng--},handleFormatError(e){$A.modalWarning({title:"\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E",content:"\u6587\u4EF6 "+e.name+" \u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u4EC5\u652F\u6301\u4E0A\u4F20\uFF1A"+this.uploadFormat.join(",")})},handleMaxSize(e){$A.modalWarning({title:"\u8D85\u51FA\u6587\u4EF6\u5927\u5C0F\u9650\u5236",content:"\u6587\u4EF6 "+e.name+" \u592A\u5927\uFF0C\u4E0D\u80FD\u8D85\u8FC7\uFF1A"+$A.bytesToSize(this.maxSize*1024)+"\u3002"})},handleBeforeUpload(){return!0}}},n={};var b=f(I,$,x,!1,S,"62f2a7b2",null,null);function S(e){for(let t in n)this[t]=n[t]}var ce=function(){return b.exports}();export{ce as default};
