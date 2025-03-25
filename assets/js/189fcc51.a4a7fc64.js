"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[9829],{68281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"developers/coSceneCli/cli-install","title":"Install and Init","description":"Installation","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/coSceneCli/1-cli-install.md","sourceDirName":"developers/coSceneCli","slug":"/developers/coSceneCli/install","permalink":"/docs/developers/coSceneCli/install","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Zhexuan Yang","lastUpdatedAt":1738910751000,"sidebarPosition":1,"frontMatter":{"slug":"install","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u547d\u4ee4\u884c\u5de5\u5177 coCLI - Beta","permalink":"/docs/category/cocli"},"next":{"title":"Using CLI to Operate Records","permalink":"/docs/developers/coSceneCli/record-operations"}}');var i=t(25105),c=t(27890);const o={slug:"install",sidebar_position:1},l="Install and Init",a={},r=[{value:"Installation",id:"installation",level:2},{value:"Update to the Latest Version",id:"update-to-the-latest-version",level:3},{value:"Login",id:"login",level:2},{value:"Configure CLI Permissions",id:"configure-cli-permissions",level:3},{value:"Switch Default Project",id:"switch-default-project",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"install-and-init",children:"Install and Init"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command in the terminal to install the latest version of the coScene CLI tool:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"curl -fL https://download.coscene.cn/cocli/install.sh | sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"cocli -h"})," in the terminal to confirm that the CLI tool has been successfully installed and to see the basic usage of the tool."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cocli-help",src:t(41045).A+"",width:"2520",height:"922"})}),"\n",(0,i.jsx)(n.h3,{id:"update-to-the-latest-version",children:"Update to the Latest Version"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"cocli update\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Login and initialize coCLI needs the following info:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A personal access token(Token):"}),"\n",(0,i.jsx)(n.li,{children:"A default working project's slug(Slug):"}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,i.jsxs)(n.p,{children:["You can generate your access token on the ",(0,i.jsx)(n.a,{href:"https://coscene.cn/profile?section=security",children:"coScene - My Settings"})," page."]}),"\n",(0,i.jsx)(n.p,{children:"The CLI tool also requires you to specify a default project as the default environment for all operations. Please select the project you want to work on and get the project slug from the URL."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"project-slug-url",src:t(83580).A+"",width:"1648",height:"978"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-cli-permissions",children:"Configure CLI Permissions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Bash",children:"# Replace <project slug> after -p\n# Replace <personal access token> after -t\ncocli login set -p <PROJECT_SLUG> -t <TOKEN>\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"If your are an Enterprise user with an on-premise instance, you will have to\nspecify your instance's endpoint"}),(0,i.jsxs)(n.p,{children:["eg. ",(0,i.jsx)(n.a,{href:"https://server2.coscene.cn",children:"https://server2.coscene.cn"})," -> ",(0,i.jsx)(n.a,{href:"https://openapi.server2.coscene.cn",children:"https://openapi.server2.coscene.cn"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cocli login set -p <PROJECT_SLUG> -t <TOKEN> -e <ENDPOINT>\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"switch-default-project",children:"Switch Default Project"}),"\n",(0,i.jsx)(n.p,{children:"After successfully authenticating the CLI, you can use the command line to switch the default working project. First, we can list all the projects in the organization that the user has access to, along with their corresponding project slugs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cocli project list\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cocli-list-user-projects",src:t(40303).A+"",width:"962",height:"368"})}),"\n",(0,i.jsxs)(n.p,{children:["After finding the target project, use ",(0,i.jsx)(n.code,{children:"cocli login set"})," to update the default working project. If needed, you can use ",(0,i.jsx)(n.code,{children:"cocli login current"})," to confirm."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cocli login set -p starbase\ncocli login current\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cocli-update-default-project-slug",src:t(27899).A+"",width:"840",height:"650"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},41045:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cocli-help-2686bf8b6108b05e4ce28dff93703772.png"},40303:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cocli-list-user-projects-1d6c30384b124a19b4b3332eb41ec2a3.png"},27899:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cocli-update-default-project-slug-0410219ac8cc6229b5000fe8174f7e43.png"},83580:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/project-slug-url-4a0937a954fface7a702a3a4fb52c7d6.png"},27890:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(58101);const i={},c=s.createContext(i);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);