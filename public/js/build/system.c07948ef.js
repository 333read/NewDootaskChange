import{n as i}from"./app.4a346a76.js";import{m as _}from"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.293d38cb.js";import"./@babel.43d8d0a5.js";import"./dayjs.9859f5d3.js";import"./localforage.9af36afe.js";import"./markdown-it.6846e2b0.js";import"./entities.797c3e49.js";import"./uc.micro.700527ef.js";import"./mdurl.95c1032c.js";import"./linkify-it.96515e28.js";import"./punycode.50f384b0.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.64308959.js";import"./vue.296078bd.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.d4b5b622.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.ad7135d3.js";import"./clipboard.3f21bed6.js";import"./view-design-hi.609f8897.js";import"./vuedraggable.6ea348a4.js";import"./sortablejs.982d79d6.js";import"./vue-resize-observer.e788af6d.js";import"./element-sea.c283d284.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.37526d89.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e7e40052.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var c=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{model:t.formDatum,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u5E10\u53F7\u76F8\u5173")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u5141\u8BB8\u6CE8\u518C"),prop:"reg"}},[a("RadioGroup",{model:{value:t.formDatum.reg,callback:function(e){t.$set(t.formDatum,"reg",e)},expression:"formDatum.reg"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5141\u8BB8")))]),a("Radio",{attrs:{label:"invite"}},[t._v(t._s(t.$L("\u9080\u8BF7\u7801")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u7981\u6B62")))])],1),t.formDatum.reg=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5141\u8BB8\uFF1A\u5F00\u653E\u6CE8\u518C\u529F\u80FD\u3002")))]):t.formDatum.reg=="invite"?[a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u9080\u8BF7\u7801\uFF1A\u6CE8\u518C\u65F6\u9700\u586B\u5199\u4E0B\u65B9\u9080\u8BF7\u7801\u3002")))]),a("Input",{staticStyle:{width:"200px","margin-top":"6px"},model:{value:t.formDatum.reg_invite,callback:function(e){t.$set(t.formDatum,"reg_invite",e)},expression:"formDatum.reg_invite"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$L("\u9080\u8BF7\u7801")))])])]:t._e()],2),["open","invite"].includes(t.formDatum.reg)?a("FormItem",{attrs:{label:t.$L("\u6CE8\u518C\u8EAB\u4EFD"),prop:"reg_identity"}},[a("RadioGroup",{model:{value:t.formDatum.reg_identity,callback:function(e){t.$set(t.formDatum,"reg_identity",e)},expression:"formDatum.reg_identity"}},[a("Radio",{attrs:{label:"normal"}},[t._v(t._s(t.$L("\u6B63\u5E38\u5E10\u53F7")))]),a("Radio",{attrs:{label:"temp"}},[t._v(t._s(t.$L("\u4E34\u65F6\u5E10\u53F7")))])],1),t.formDatum.reg_identity=="temp"?a("Input",{staticStyle:{width:"220px","margin-top":"6px"},attrs:{placeholder:t.$L("\u4E34\u65F6\u5E10\u53F7")},model:{value:t.formDatum.temp_account_alias,callback:function(e){t.$set(t.formDatum,"temp_account_alias",e)},expression:"formDatum.temp_account_alias"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$L("\u4E34\u65F6\u5E10\u53F7"))+" "+t._s(t.$L("\u522B\u540D")))])]):t._e(),a("div",{staticClass:"form-tip form-list"},[a("p",[t._v(t._s(t.$L("\u4E34\u65F6\u5E10\u53F7"))+"\uFF1A")]),a("ol",[a("li",[t._v(t._s(t.$L("\u7981\u6B62\u67E5\u770B\u5171\u4EAB\u6240\u6709\u4EBA\u7684\u6587\u4EF6\u3002")))]),a("li",[t._v(t._s(t.$L("\u7981\u6B62\u53D1\u8D77\u4F1A\u8BDD\u3002")))]),a("li",[t._v(t._s(t.$L("\u7981\u6B62\u521B\u5EFA\u7FA4\u804A\u3002")))]),a("li",[t._v(t._s(t.$L("\u7981\u6B62\u62E8\u6253\u7535\u8BDD\u3002")))])])])],1):t._e(),a("FormItem",{attrs:{label:t.$L("\u767B\u5F55\u9A8C\u8BC1\u7801"),prop:"loginCode"}},[a("RadioGroup",{model:{value:t.formDatum.login_code,callback:function(e){t.$set(t.formDatum,"login_code",e)},expression:"formDatum.login_code"}},[a("Radio",{attrs:{label:"auto"}},[t._v(t._s(t.$L("\u81EA\u52A8")))]),a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.login_code=="auto"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u81EA\u52A8\uFF1A\u5BC6\u7801\u8F93\u5165\u9519\u8BEF\u540E\u5FC5\u987B\u6DFB\u52A0\u9A8C\u8BC1\u7801\u3002")))]):t.formDatum.login_code=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u542F\uFF1A\u6BCF\u6B21\u767B\u5F55\u90FD\u9700\u8981\u56FE\u5F62\u9A8C\u8BC1\u7801\u3002")))]):t.formDatum.login_code=="close"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5173\u95ED\uFF1A\u4E0D\u9700\u8981\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u5BC6\u7801\u7B56\u7565"),prop:"passwordPolicy"}},[a("RadioGroup",{model:{value:t.formDatum.password_policy,callback:function(e){t.$set(t.formDatum,"password_policy",e)},expression:"formDatum.password_policy"}},[a("Radio",{attrs:{label:"simple"}},[t._v(t._s(t.$L("\u7B80\u5355")))]),a("Radio",{attrs:{label:"complex"}},[t._v(t._s(t.$L("\u590D\u6742")))])],1),t.formDatum.password_policy=="simple"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u7B80\u5355\uFF1A\u5927\u4E8E\u6216\u7B49\u4E8E6\u4E2A\u5B57\u7B26\u3002")))]):t.formDatum.password_policy=="complex"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u590D\u6742\uFF1A\u5927\u4E8E\u6216\u7B49\u4E8E6\u4E2A\u5B57\u7B26\uFF0C\u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u5927\u5C0F\u5199\u6216\u8005\u7279\u6B8A\u5B57\u7B26\u3002")))]):t._e()],1)],1)]),a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u9879\u76EE\u76F8\u5173")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u9080\u8BF7\u9879\u76EE"),prop:"projectInvite"}},[a("RadioGroup",{model:{value:t.formDatum.project_invite,callback:function(e){t.$set(t.formDatum,"project_invite",e)},expression:"formDatum.project_invite"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.project_invite=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u542F\uFF1A\u9879\u76EE\u7BA1\u7406\u5458\u53EF\u751F\u6210\u94FE\u63A5\u9080\u8BF7\u6210\u5458\u52A0\u5165\u9879\u76EE\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u81EA\u52A8\u5F52\u6863\u4EFB\u52A1"),prop:"autoArchived"}},[a("RadioGroup",{attrs:{value:t.formDatum.auto_archived},on:{"on-change":t.formArchived}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u4EFB\u52A1\u5B8C\u6210\u540E\u81EA\u52A8\u5F52\u6863\u3002")))]),t.formDatum.auto_archived=="open"?a("ETooltip",{attrs:{placement:"right",disabled:t.$isEEUiApp||t.windowTouch}},[a("div",{staticClass:"setting-auto-day"},[a("Input",{attrs:{type:"number"},model:{value:t.formDatum.archived_day,callback:function(e){t.$set(t.formDatum,"archived_day",e)},expression:"formDatum.archived_day"}},[a("span",{attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.$L("\u5929")))])])],1),a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$L("\u4EFB\u52A1\u5B8C\u6210 (*) \u5929\u540E\u81EA\u52A8\u5F52\u6863\u3002",t.formDatum.archived_day)))])]):t._e()],1)],1)]),a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u4EFB\u52A1\u76F8\u5173")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u53EF\u89C1\u6027\u9009\u9879"),prop:"taskVisible"}},[a("RadioGroup",{model:{value:t.formDatum.task_visible,callback:function(e){t.$set(t.formDatum,"task_visible",e)},expression:"formDatum.task_visible"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u4FDD\u6301")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u81EA\u52A8")))])],1),t.formDatum.task_visible=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u4FDD\u6301\uFF1A\u4EFB\u52A1\u8BE6\u60C5\u9875\u53EF\u89C1\u6027\u9009\u9879\u4FDD\u6301\u663E\u793A\u3002")))]):t.formDatum.task_visible=="close"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u81EA\u52A8\uFF1A\u9ED8\u8BA4\u503C\u60C5\u51B5\u4E0B\u663E\u793A\u5728\u5408\u5E76\u9879\u76EE\uFF0C\u8BBE\u7F6E\u65F6\u4FDD\u6301\u663E\u793A\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u4EFB\u52A1\u9ED8\u8BA4\u65F6\u95F4"),prop:"taskDefaultTime"}},[a("TimePicker",{attrs:{type:"timerange",format:"HH:mm",placeholder:t.$L("\u8BF7\u9009\u62E9\u9ED8\u8BA4\u65F6\u95F4"),transfer:""},model:{value:t.formDatum.task_default_time,callback:function(e){t.$set(t.formDatum,"task_default_time",e)},expression:"formDatum.task_default_time"}}),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u6DFB\u52A0\u4EFB\u52A1\u8BA1\u5212\u65F6\u95F4\u9ED8\u8BA4\u65F6\u5206\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u672A\u9886\u4EFB\u52A1\u63D0\u9192"),prop:"autoArchived"}},[a("RadioGroup",{attrs:{value:t.formDatum.unclaimed_task_reminder},on:{"on-change":t.formTaskReminder}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u542F\u540E\u6BCF\u5929\u6309\u8BBE\u5B9A\u7684\u63D0\u9192\u65F6\u95F4\u5728\u9879\u76EE\u7FA4\u804A\u4E2D\u53D1\u9001\u672A\u9886\u53D6\u4EFB\u52A1\u901A\u77E5\u3002")))]),t.formDatum.unclaimed_task_reminder=="open"?a("TimePicker",{attrs:{format:"HH:mm",placeholder:t.$L("\u8BF7\u9009\u62E9\u63D0\u9192\u65F6\u95F4"),transfer:""},model:{value:t.formDatum.unclaimed_task_reminder_time,callback:function(e){t.$set(t.formDatum,"unclaimed_task_reminder_time",e)},expression:"formDatum.unclaimed_task_reminder_time"}}):t._e()],1)],1)]),a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u6D88\u606F\u76F8\u5173")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u81EA\u52A8\u8FDB\u5165\u5168\u5458\u7FA4"),prop:"allGroupAutoin"}},[a("RadioGroup",{model:{value:t.formDatum.all_group_autoin,callback:function(e){t.$set(t.formDatum,"all_group_autoin",e)},expression:"formDatum.all_group_autoin"}},[a("Radio",{attrs:{label:"yes"}},[t._v(t._s(t.$L("\u81EA\u52A8")))]),a("Radio",{attrs:{label:"no"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.all_group_autoin=="yes"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u81EA\u52A8\uFF1A\u6CE8\u518C\u6210\u529F\u540E\u81EA\u52A8\u8FDB\u5165\u5168\u5458\u7FA4\u3002")))]):t.formDatum.all_group_autoin=="no"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5173\u95ED\uFF1A\u5176\u4ED6\u6210\u5458\u901A\u8FC7@\u9080\u8BF7\u8FDB\u5165\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u5168\u5458\u7FA4\u7EC4\u7981\u8A00"),prop:"allGroupMute"}},[a("RadioGroup",{model:{value:t.formDatum.all_group_mute,callback:function(e){t.$set(t.formDatum,"all_group_mute",e)},expression:"formDatum.all_group_mute"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u653E")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u7981\u8A00")))])],1),t.formDatum.all_group_mute=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u653E\uFF1A\u6240\u6709\u4EBA\u90FD\u53EF\u4EE5\u5728\u5168\u5458\u7FA4\u7EC4\u53D1\u8A00\u3002")))]):t.formDatum.all_group_mute=="close"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u7981\u8A00\uFF1A\u9664\u7BA1\u7406\u5458\u5916\u6240\u6709\u4EBA\u90FD\u7981\u6B62\u5728\u5168\u5458\u7FA4\u7EC4\u53D1\u8A00\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u79C1\u804A\u7981\u8A00"),prop:"userPrivateChatMute"}},[a("RadioGroup",{model:{value:t.formDatum.user_private_chat_mute,callback:function(e){t.$set(t.formDatum,"user_private_chat_mute",e)},expression:"formDatum.user_private_chat_mute"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u653E")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u7981\u8A00")))])],1),t.formDatum.user_private_chat_mute=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u653E\uFF1A\u6240\u6709\u4EBA\u90FD\u53EF\u4EE5\u76F8\u4E92\u53D1\u8D77\u4E2A\u4EBA\u804A\u5929\u3002")))]):t.formDatum.user_private_chat_mute=="close"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u7981\u8A00\uFF1A\u9664\u7BA1\u7406\u5458\u5916\u6240\u6709\u4EBA\u90FD\u7981\u6B62\u53D1\u8D77\u4E2A\u4EBA\u804A\u5929\u3002")))]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u7FA4\u804A\u7981\u8A00"),prop:"userGroupChatMute"}},[a("RadioGroup",{model:{value:t.formDatum.user_group_chat_mute,callback:function(e){t.$set(t.formDatum,"user_group_chat_mute",e)},expression:"formDatum.user_group_chat_mute"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u653E")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u7981\u8A00")))])],1),t.formDatum.user_group_chat_mute=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u653E\uFF1A\u5141\u8BB8\u4E2A\u4EBA\u7FA4\u7EC4\u804A\u5929\u53D1\u8A00\u3002")))]):t.formDatum.user_group_chat_mute=="close"?a("div",{staticClass:"form-tip form-list"},[a("ol",[a("li",[t._v(t._s(t.$L("\u9664\u7BA1\u7406\u5458\u5916\u7981\u6B62\u4E2A\u4EBA\u7FA4\u7EC4\u804A\u5929\u53D1\u8A00\u3002")))]),a("li",[t._v(t._s(t.$L("\u6CE8\u610F\uFF0C\u4EC5\u7981\u6B62\u4E2A\u4EBA\u7FA4\u7EC4\uFF0C\u5176\u4ED6\u7C7B\u578B\u7684\u7FA4\u7EC4\u4E0D\u7981\u6B62\uFF0C\u6BD4\u5982\uFF1A\u90E8\u95E8\u7FA4\u804A\u3001\u9879\u76EE\u7FA4\u804A\u7B49\u7CFB\u7EDF\u7FA4\u804A\u3002")))])])]):t._e()],1),a("FormItem",{attrs:{label:t.$L("\u804A\u5929\u8D44\u6599"),prop:"chatInformation"}},[a("RadioGroup",{model:{value:t.formDatum.chat_information,callback:function(e){t.$set(t.formDatum,"chat_information",e)},expression:"formDatum.chat_information"}},[a("Radio",{attrs:{label:"optional"}},[t._v(t._s(t.$L("\u53EF\u9009")))]),a("Radio",{attrs:{label:"required"}},[t._v(t._s(t.$L("\u5FC5\u586B")))])],1),t.formDatum.chat_information=="required"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5FC5\u586B\uFF1A\u53D1\u9001\u804A\u5929\u5185\u5BB9\u524D\u5FC5\u987B\u8BBE\u7F6E\u6635\u79F0\u3001\u7535\u8BDD\u3002")))]):a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5982\u679C\u5FC5\u586B\uFF0C\u53D1\u9001\u804A\u5929\u524D\u5FC5\u987B\u8BBE\u7F6E\u6635\u79F0\u3001\u7535\u8BDD\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u533F\u540D\u6D88\u606F"),prop:"anonMessage"}},[a("RadioGroup",{model:{value:t.formDatum.anon_message,callback:function(e){t.$set(t.formDatum,"anon_message",e)},expression:"formDatum.anon_message"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.anon_message=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5141\u8BB8\u533F\u540D\u53D1\u9001\u6D88\u606F\u7ED9\u5176\u4ED6\u6210\u5458\u3002")))]):a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u7981\u6B62\u533F\u540D\u53D1\u9001\u6D88\u606F\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u8BED\u97F3\u8F6C\u6587\u5B57"),prop:"voice2text"}},[a("RadioGroup",{model:{value:t.formDatum.voice2text,callback:function(e){t.$set(t.formDatum,"voice2text",e)},expression:"formDatum.voice2text"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.voice2text=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u957F\u6309\u8BED\u97F3\u6D88\u606F\u53EF\u8F6C\u6362\u6210\u6587\u5B57\u3002"))+" ("+t._s(t.$L("\u9700\u8981\u5728\u5E94\u7528\u4E2D\u5F00\u542F ChatGPT AI \u673A\u5668\u4EBA"))+")")]):a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5173\u95ED\u8BED\u97F3\u8F6C\u6587\u5B57\u529F\u80FD\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u7AEF\u5230\u7AEF\u52A0\u5BC6"),prop:"e2eMessage"}},[a("RadioGroup",{model:{value:t.formDatum.e2e_message,callback:function(e){t.$set(t.formDatum,"e2e_message",e)},expression:"formDatum.e2e_message"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),t.formDatum.e2e_message=="open"?a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u4F7F\u7528\u7AEF\u5230\u7AEF\u52A0\u5BC6\u4F20\u8F93\u6570\u636E\u3002")))]):a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5173\u95ED\u7AEF\u5230\u7AEF\u52A0\u5BC6\u4F20\u8F93\u6570\u636E\u3002")))])],1)],1)]),a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u5176\u4ED6\u8BBE\u7F6E")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u56FE\u7247\u4F18\u5316"),prop:"image_compress"}},[a("RadioGroup",{model:{value:t.formDatum.image_compress,callback:function(e){t.$set(t.formDatum,"image_compress",e)},expression:"formDatum.image_compress"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u6570\u7801\u76F8\u673A4M\u7684\u56FE\u7247\uFF0C\u4F18\u5316\u540E\u4EC5\u6709700KB\u5DE6\u53F3\uFF0C\u800C\u4E14\u8089\u773C\u57FA\u672C\u770B\u4E0D\u51FA\u533A\u522B\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u4FDD\u5B58\u7F51\u7EDC\u56FE\u7247"),prop:"image_save_local"}},[a("RadioGroup",{model:{value:t.formDatum.image_save_local,callback:function(e){t.$set(t.formDatum,"image_save_local",e)},expression:"formDatum.image_save_local"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u662F\u5426\u5C06\u6D88\u606F\u4E2D\u7684\u7F51\u7EDC\u56FE\u7247\u4FDD\u5B58\u5230\u672C\u5730\u670D\u52A1\u5668\u3002")))])],1),a("FormItem",{attrs:{label:t.$L("\u6587\u4EF6\u4E0A\u4F20\u9650\u5236"),prop:"fileUploadLimit"}},[a("div",{staticStyle:{width:"192px"}},[a("Input",{attrs:{type:"number",number:"",placeholder:t.$L("\u9ED8\u8BA4\u4E0D\u9650\u5236")},scopedSlots:t._u([{key:"append",fn:function(){return[a("span",[t._v("MB")])]},proxy:!0}]),model:{value:t.formDatum.file_upload_limit,callback:function(e){t.$set(t.formDatum,"file_upload_limit",e)},expression:"formDatum.file_upload_limit"}})],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5305\u542B\u6D88\u606F\u53D1\u9001\u7684\u6587\u4EF6")))])])],1)]),t.$A.isDooServer()?a("div",{staticClass:"block-setting-box"},[a("h3",[t._v(t._s(t.$L("\u7279\u6B8A\u8BBE\u7F6E")))]),a("div",{staticClass:"form-box"},[a("FormItem",{attrs:{label:t.$L("\u662F\u5426\u542F\u52A8\u9996\u9875"),prop:"startHome"}},[a("RadioGroup",{model:{value:t.formDatum.start_home,callback:function(e){t.$set(t.formDatum,"start_home",e)},expression:"formDatum.start_home"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u4EC5\u652F\u6301\u7F51\u9875\u7248\u3002")))])],1)],1)]):t._e()]),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},p=[];const d={name:"SystemSetting",data(){return{loadIng:0,formDatum:{}}},mounted(){this.systemSetting()},methods:{submitForm(){this.$refs.formDatum.validate(t=>{t&&this.systemSetting(!0)})},resetForm(){this.formDatum=$A.cloneJSON(this.formDatum_bak)},formArchived(t){this.formDatum={...this.formDatum,auto_archived:t}},formTaskReminder(t){this.formDatum={...this.formDatum,unclaimed_task_reminder:t}},systemSetting(t){this.loadIng++,this.$store.dispatch("call",{url:"system/setting?type="+(t?"save":"all"),method:"post",data:this.formDatum}).then(({data:o})=>{t&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.formDatum=o,this.formDatum_bak=$A.cloneJSON(this.formDatum),this.$store.state.systemConfig=Object.assign(this.formDatum_bak,{__state:"success"})}).catch(({msg:o})=>{t&&$A.modalError(o)}).finally(o=>{this.loadIng--})}}},m={};var f=i(d,c,p,!1,v,null,null,null);function v(t){for(let o in m)this[o]=m[o]}var $=function(){return f.exports}(),D=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{staticClass:"setting-color color-label-box"},[a("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("\u540D\u79F0")))]),a("Col",{attrs:{span:"4"}},[a("ETooltip",{attrs:{content:t.$L("\u6570\u503C\u8D8A\u5C0F\u7EA7\u522B\u8D8A\u9AD8"),"max-width":"auto",placement:"top",transfer:""}},[a("div",[a("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("\u7EA7\u522B")))],1)])],1),a("Col",{attrs:{span:"4"}},[a("ETooltip",{attrs:{content:t.$L("\u4EFB\u52A1\u5B8C\u6210\u65F6\u95F4"),"max-width":"auto",placement:"top",transfer:""}},[a("div",[a("Icon",{staticClass:"information",attrs:{type:"ios-information-circle-outline"}}),t._v(" "+t._s(t.$L("\u5929\u6570")))],1)])],1),a("Col",{attrs:{span:"4"}},[t._v(t._s(t.$L("\u989C\u8272")))])],1),t._l(t.formDatum,function(e,r){return a("Row",{key:r,staticClass:"setting-color"},[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u540D\u79F0"),clearable:""},on:{"on-clear":function(s){return t.delDatum(r)}},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"item.name"}})],1),a("Col",{attrs:{span:"4"}},[a("Input",{attrs:{type:"number"},model:{value:e.priority,callback:function(s){t.$set(e,"priority",s)},expression:"item.priority"}})],1),a("Col",{attrs:{span:"4"}},[a("Input",{attrs:{type:"number"},model:{value:e.days,callback:function(s){t.$set(e,"days",s)},expression:"item.days"}})],1),a("Col",{attrs:{span:"4"}},[a("ColorPicker",{attrs:{recommend:"",transfer:""},model:{value:e.color,callback:function(s){t.$set(e,"color",s)},expression:"item.color"}})],1)],1)}),a("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("\u6DFB\u52A0\u4F18\u5148\u7EA7")))])],2),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},b=[];const h={name:"SystemTaskPriority",data(){return{loadIng:0,formDatum:[],nullDatum:{name:"",priority:1,days:1,color:"#84C56A"}}},mounted(){this.systemSetting()},computed:{..._(["taskPriority"])},watch:{taskPriority:{handler(t){this.formDatum=$A.cloneJSON(t),this.formDatum.length===0&&this.addDatum()},immediate:!0}},methods:{submitForm(){this.$refs.formDatum.validate(t=>{t&&this.systemSetting(!0)})},resetForm(){this.formDatum=$A.cloneJSON(this.taskPriority)},addDatum(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum(t){this.formDatum.splice(t,1),this.formDatum.length===0&&this.addDatum()},systemSetting(t){this.loadIng++,this.$store.dispatch("call",{url:"system/priority?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then(({data:o})=>{t&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.state.taskPriority=$A.cloneJSON(o)}).catch(({msg:o})=>{t&&$A.modalError(o)}).finally(o=>{this.loadIng--})}}},l={};var L=i(h,D,b,!1,g,null,null,null);function g(t){for(let o in l)this[o]=l[o]}var y=function(){return L.exports}(),C=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"setting-component-item"},[a("Form",{ref:"formDatum",attrs:{"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("Row",{staticClass:"setting-template"},[a("Col",{attrs:{span:"8"}},[t._v(t._s(t.$L("\u540D\u79F0")))]),a("Col",{attrs:{span:"16"}},[t._v(t._s(t.$L("\u9879\u76EE\u6A21\u677F")))])],1),t._l(t.formDatum,function(e,r){return a("Row",{key:r,staticClass:"setting-template"},[a("Col",{attrs:{span:"8"}},[a("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u540D\u79F0"),clearable:""},on:{"on-clear":function(s){return t.delDatum(r)}},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"item.name"}})],1),a("Col",{attrs:{span:"16"}},[a("TagInput",{model:{value:e.columns,callback:function(s){t.$set(e,"columns",s)},expression:"item.columns"}})],1)],1)}),a("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("\u6DFB\u52A0\u6A21\u677F")))])],2),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},k=[];const x={name:"SystemColumnTemplate",data(){return{loadIng:0,formDatum:[],nullDatum:{name:"",columns:""}}},mounted(){this.systemSetting()},computed:{..._(["columnTemplate"])},watch:{columnTemplate:{handler(t){this.formDatum=$A.cloneJSON(t),this.formDatum.length===0&&this.addDatum()},immediate:!0}},methods:{submitForm(){this.$refs.formDatum.validate(t=>{t&&this.systemSetting(!0)})},resetForm(){this.formDatum=$A.cloneJSON(this.columnTemplate)},addDatum(){this.formDatum.push($A.cloneJSON(this.nullDatum))},delDatum(t){this.formDatum.splice(t,1),this.formDatum.length===0&&this.addDatum()},systemSetting(t){this.loadIng++,this.$store.dispatch("call",{url:"system/column/template?type="+(t?"save":"get"),method:"post",data:{list:this.formDatum}}).then(({data:o})=>{t&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.state.columnTemplate=$A.cloneJSON(o).map(a=>($A.isArray(a.columns)&&(a.columns=a.columns.join(",")),a))}).catch(({msg:o})=>{t&&$A.modalError(o)}).finally(o=>{this.loadIng--})}}},n={};var R=i(x,C,k,!1,I,null,null,null);function I(t){for(let o in n)this[o]=n[o]}var S=function(){return R.exports}(),F=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"setting-item submit"},[a("Tabs",{model:{value:t.tabAction,callback:function(e){t.tabAction=e},expression:"tabAction"}},[a("TabPane",{attrs:{label:t.$L("\u7CFB\u7EDF\u8BBE\u7F6E"),name:"setting"}},[a("SystemSetting")],1),a("TabPane",{attrs:{label:t.$L("\u4EFB\u52A1\u4F18\u5148\u7EA7"),name:"taskPriority"}},[a("SystemTaskPriority")],1),a("TabPane",{attrs:{label:t.$L("\u9879\u76EE\u6A21\u677F"),name:"columnTemplate"}},[a("SystemColumnTemplate")],1)],1)],1)},A=[];const T={components:{SystemColumnTemplate:S,SystemTaskPriority:y,SystemSetting:$},data(){return{tabAction:"setting"}}},u={};var G=i(T,F,A,!1,w,null,null,null);function w(t){for(let o in u)this[o]=u[o]}var $t=function(){return G.exports}();export{$t as default};
