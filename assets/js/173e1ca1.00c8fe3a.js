"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[6777],{9214:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/cocli-login-switch-confirm-eff7b8c107c463f56329eb419e655987.png"},28838:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/cocli-list-login-profiles-29a2a87436934737ac9ae3a503fe40df.png"},68394:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"developers/coSceneCli/advanced-features","title":"Advanced Features","description":"Switching Login Credentials","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/coSceneCli/99-advanced-features.md","sourceDirName":"developers/coSceneCli","slug":"/developers/coSceneCli/advanced-features","permalink":"/docs/developers/coSceneCli/advanced-features","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742360874000,"sidebarPosition":99,"frontMatter":{"slug":"advanced-features","sidebar_position":99},"sidebar":"tutorialSidebar","previous":{"title":"Auto-completion","permalink":"/docs/developers/coSceneCli/auto-complete"},"next":{"title":"\u5f00\u653e\u5e73\u53f0 OpenAPI","permalink":"/docs/category/openapi"}}');var s=i(25105),t=i(73331);const o={slug:"advanced-features",sidebar_position:99},a="Advanced Features",l={},d=[{value:"Switching Login Credentials",id:"switching-login-credentials",level:2},{value:"Linking Local Folders and Cloud Records",id:"linking-local-folders-and-cloud-records",level:2}];function r(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"advanced-features",children:"Advanced Features"})}),"\n",(0,s.jsx)(n.h2,{id:"switching-login-credentials",children:"Switching Login Credentials"}),"\n",(0,s.jsx)(n.p,{children:"The cos command-line tool comes with a built-in credential management system, allowing advanced users and testers to switch between different organizations, projects, and environments for easier testing and management."}),"\n",(0,s.jsx)(n.p,{children:"Once you have your default credentials, you can add a new credential using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cocli login add -n <credential name> -p <project Slug> -t <access token>\n"})}),"\n",(0,s.jsx)(n.p,{children:"The screenshot below shows how to add a credential named typ:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"cocli-add-login-profile",src:i(88964).A+"",width:"2138",height:"204"})}),"\n",(0,s.jsx)(n.p,{children:"You can list all available credentials using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cocli login list\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"cocli-list-login-profiles",src:i(28838).A+"",width:"1208",height:"310"})}),"\n",(0,s.jsx)(n.p,{children:"Switching between different credentials is also very easy:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cocli login switch\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"cocli-login-switch-interactive",src:i(79370).A+"",width:"2068",height:"642"})}),"\n",(0,s.jsx)(n.p,{children:"In the interactive prompt after running the command, use the arrow keys to select the credential you want to switch to and press Enter to confirm."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"cocli-login-switch-confirm",src:i(9214).A+"",width:"1184",height:"306"})}),"\n",(0,s.jsx)(n.p,{children:"After switching, it will prompt the currently active credential. You can also confirm it with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cocli login current\n"})}),"\n",(0,s.jsx)(n.h2,{id:"linking-local-folders-and-cloud-records",children:"Linking Local Folders and Cloud Records"}),"\n",(0,s.jsxs)(n.p,{children:["The command line also provides a ",(0,s.jsx)(n.code,{children:"link"})," mode for cloud records and local folders. Once linked, you won't need to specify the record ID again for uploading and downloading files:"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},73331:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var c=i(58101);const s={},t=c.createContext(s);function o(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(t.Provider,{value:n},e.children)}},79370:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/cocli-login-switch-interactive-3103096317812672cb7855d4dd42640b.png"},88964:(e,n,i)=>{i.d(n,{A:()=>c});const c=i.p+"assets/images/cocli-add-login-profile-7b5ba07191cad57657bcfed58d744dff.png"}}]);