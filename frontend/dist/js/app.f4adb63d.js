(function(){"use strict";var e={2514:function(e,t,o){var s=o(9242),n=o(3396);function a(e,t){const o=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(o)}var r=o(89);const i={},c=(0,r.Z)(i,[["render",a]]);var d=c,m=o(2483);const u={class:"login"};function g(e,t,o,s,a,r){const i=(0,n.up)("Login");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(i)])}const l=e=>((0,n.dD)("data-v-2828a655"),e=e(),(0,n.Cn)(),e),p={class:"log"},E=l((()=>(0,n._)("h2",null,"Login",-1))),S=l((()=>(0,n._)("label",{for:"codeBot"},"Your code bot:",-1))),f=l((()=>(0,n._)("label",{for:"botID"},"Coloque o id da conversa que quer acessar:",-1))),h=l((()=>(0,n._)("button",{type:"submit"},"Login",-1)));function v(e,t,o,a,r,i){return(0,n.wg)(),(0,n.iD)("div",p,[E,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[S,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.codeBot=e),required:""},null,512),[[s.nr,r.codeBot]]),f,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.botId=e),required:""},null,512),[[s.nr,r.botId]]),h],32)])}o(7658);var _=o(4161),b=o(65),M={data(){return{codeBot:"",botId:""}},methods:{...(0,b.nv)("login",["setCodeBot","setBotId"]),async handleSubmit(){await this.setCodeBot(this.codeBot),await this.setBotId(this.botId),sessionStorage.setItem("codeBot",this.codeBot),sessionStorage.setItem("botId",this.botId);const e={headers:{Authorization:"ARVORE"}};_.Z.post("https://projectbot-5xtl.onrender.com/login",{botCode:this.codeBot},e).then((e=>{200===e.status&&this.$router.push("/app")})).catch((e=>{console.log(e),alert("Erro ao fazer login. Por favor, tente novamente.")}))}}};const D=(0,r.Z)(M,[["render",v],["__scopeId","data-v-2828a655"]]);var I=D,A={components:{Login:I}};const w=(0,r.Z)(A,[["render",g],["__scopeId","data-v-fc5458da"]]);var y=w;const O=e=>((0,n.dD)("data-v-6c0f461e"),e=e(),(0,n.Cn)(),e),C={class:"principal"},T=O((()=>(0,n._)("h2",null,"Tela Principal",-1))),B={class:"input"},L=O((()=>(0,n._)("label",{for:"mensagem"},"Mensagem:",-1))),G=O((()=>(0,n._)("button",{type:"submit"},"Enviar",-1)));function x(e,t,o,a,r,i){const c=(0,n.up)("HeaderComp"),d=(0,n.up)("MessageList");return(0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(c),T,(0,n.Wm)(d),(0,n._)("form",{onSubmit:t[1]||(t[1]=(0,s.iM)(((...e)=>i.enviarMensagem&&i.enviarMensagem(...e)),["prevent"])),class:"form"},[(0,n._)("div",B,[L,(0,n.wy)((0,n._)("input",{type:"text",class:"input-field","onUpdate:modelValue":t[0]||(t[0]=e=>r.mensagem=e),required:""},null,512),[[s.nr,r.mensagem]])]),G],32)])}var V=o(7139);const R=e=>((0,n.dD)("data-v-b8430322"),e=e(),(0,n.Cn)(),e),j={key:0,class:"message-list"},N={key:0},k={key:1},Z={key:1,class:"message-list2"},P=R((()=>(0,n._)("p",{class:"para"},"Não há mensagens disponíveis.",-1))),z=[P];function q(e,t,o,s,a,r){return(0,n.wg)(),(0,n.iD)("div",null,[e.messages&&e.messages.length>0?((0,n.wg)(),(0,n.iD)("ul",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.messages,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:(0,V.C_)(r.isSentMessage(e)?"sent-message":"left")},[r.isSentMessage(e)?((0,n.wg)(),(0,n.iD)("strong",N,(0,V.zw)(e.text)+" : "+(0,V.zw)(e.from.first_name),1)):((0,n.wg)(),(0,n.iD)("strong",k,(0,V.zw)(e.from.first_name)+" : "+(0,V.zw)(e.text),1))],2)))),128))])):((0,n.wg)(),(0,n.iD)("div",Z,z))])}var $=o(7851);const H=(0,$.ZP)("https://projectbot-5xtl.onrender.com/");var U={data(){return{novaMensagem:""}},computed:{...(0,b.rn)("messageList",["messages"])},methods:{...(0,b.OI)("messageList",["ADD_SENT_MESSAGE","ADD_RECEIVED_MESSAGE"]),isSentMessage(e){const t=e.from&&e.from.first_name;return"Você"!==t},enviarMensagem(){const e={from:{first_name:"Você"},text:this.novaMensagem};this.ADD_SENT_MESSAGE(e),H.emit("send-message",{message:e}),this.novaMensagem=""}},created(){H.on("new-message",(e=>{this.ADD_RECEIVED_MESSAGE(e)}))}};const W=(0,r.Z)(U,[["render",q],["__scopeId","data-v-b8430322"]]);var Y=W;const F={class:"header"};function J(e,t,o,s,a,r){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>r.handleLogout&&r.handleLogout(...e))},"Sair")])}var K={methods:{handleLogout(){const e=sessionStorage.getItem("codeBot"),t=sessionStorage.getItem("botId");sessionStorage.clear(),this.$store.dispatch("messageList/clearReceivedMessages");const o={headers:{Authorization:"ARVORE"}};_.Z.post("https://projectbot-5xtl.onrender.com/exit",{code:e,chatId:t},o).then((e=>{console.log(e),this.$router.push("/")})).catch((e=>{alert("Erro ao tentar sair. Verifique sua conexão com a internet.",e)}))}}};const Q=(0,r.Z)(K,[["render",J],["__scopeId","data-v-199eb514"]]);var X=Q,ee={data(){return{mensagem:""}},methods:{...(0,b.nv)("messageList",["addSentMessage"]),async enviarMensagem(){const e=sessionStorage.getItem("codeBot"),t=sessionStorage.getItem("botId"),o={headers:{Authorization:"ARVORE"}};try{const s=await _.Z.post("https://projectbot-5xtl.onrender.com/send",{message:this.mensagem,code:e,chatId:t},o);console.log("Mensagem enviada com sucesso!",s.data),this.addSentMessage({from:{first_name:"Você"},text:this.mensagem}),this.mensagem=""}catch(s){console.error("Erro ao enviar mensagem:",s)}},handleLogout(){sessionStorage.clear(),this.$router.push("/")}},components:{MessageList:Y,HeaderComp:X}};const te=(0,r.Z)(ee,[["render",x],["__scopeId","data-v-6c0f461e"]]);var oe=te;const se=[{path:"/",name:"login",component:y},{path:"/app",name:"app",component:oe}],ne=(0,m.p7)({history:(0,m.PO)("/"),routes:se});var ae=ne;const re={isLoggedIn:!1,codeBot:""},ie={SET_CODE_BOT(e,t){e.codeBot=t},SET_LOGGED_IN(e,t){e.isLoggedIn=t}},ce={login({commit:e}){const t=!0;e("SET_LOGGED_IN",t),sessionStorage.setItem("isLoggedIn",JSON.stringify(t))},setCodeBot({commit:e},t){e("SET_CODE_BOT",t),sessionStorage.setItem("codeBot",t)},setBotId({commit:e},t){e("SET_BOT_ID",t),sessionStorage.setItem("botId",t)}};var de={namespaced:!0,state:re,mutations:ie,actions:ce};const me={mensagem:""},ue={SET_MENSAGEM(e,t){e.mensagem=t}},ge={setMensagem({commit:e},t){e("SET_MENSAGEM",t)}};var le={namespaced:!0,state:me,mutations:ue,actions:ge};const pe={messages:[]},Ee={SET_MESSAGES(e,t){e.messages=t},ADD_SENT_MESSAGE(e,t){e.messages.push(t)},ADD_RECEIVED_MESSAGE(e,t){e.messages.push(t)},CLEAR_RECEIVED_MESSAGES(e){e.messages=[]}},Se={setMessages({commit:e},t){e("SET_MESSAGES",t)},addSentMessage({commit:e},t){e("ADD_SENT_MESSAGE",t)},addReceivedMessage({commit:e},t){e("ADD_RECEIVED_MESSAGE",t)},clearReceivedMessages({commit:e}){e("CLEAR_RECEIVED_MESSAGES")}};var fe={namespaced:!0,state:pe,mutations:Ee,actions:Se};const he={saveSentMessage({commit:e},t){e("SAVE_SENT_MESSAGE",t)}},ve={SAVE_SENT_MESSAGE(e,t){console.log(e,t),e.sentMessages.push(t)}};var _e=(0,b.MT)({modules:{login:de,telaPrincipal:le,messageList:fe},actions:he,mutations:ve});(0,s.ri)(d).use(_e).use(ae).mount("#app")}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,a){if(!s){var r=1/0;for(m=0;m<e.length;m++){s=e[m][0],n=e[m][1],a=e[m][2];for(var i=!0,c=0;c<s.length;c++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](s[c])}))?s.splice(c--,1):(i=!1,a<r&&(r=a));if(i){e.splice(m--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[s,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,r=s[0],i=s[1],c=s[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var m=c(o)}for(t&&t(s);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},s=self["webpackChunkbot_admin"]=self["webpackChunkbot_admin"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2514)}));s=o.O(s)})();
//# sourceMappingURL=app.f4adb63d.js.map