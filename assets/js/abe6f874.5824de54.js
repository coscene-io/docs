"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[3940],{38504:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>T,contentTitle:()=>N,default:()=>E,frontMatter:()=>k,metadata:()=>l,toc:()=>A});const l=JSON.parse('{"id":"developers/coSceneCli/cli-auto-complete","title":"Auto-completion","description":"coCLI provides auto-completion functionality for Bash and Zsh, which can save you a lot of typing.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/coSceneCli/98-cli-auto-complete.mdx","sourceDirName":"developers/coSceneCli","slug":"/developers/coSceneCli/auto-complete","permalink":"/docs/developers/coSceneCli/auto-complete","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Zhexuan Yang","lastUpdatedAt":1738910751000,"sidebarPosition":98,"frontMatter":{"slug":"auto-complete","sidebar_position":98},"sidebar":"tutorialSidebar","previous":{"title":"Examples of Common Batch Operations","permalink":"/docs/developers/coSceneCli/common-batch-tasks"},"next":{"title":"Advanced Features","permalink":"/docs/developers/coSceneCli/advanced-features"}}');var s=o(25105),t=o(73331),i=o(58101),c=o(13526);const a={tabItem:"tabItem_m5nD"};function r(e){let{children:n,hidden:o,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,c.A)(a.tabItem,l),hidden:o,children:n})}var h=o(74621),d=o(55234),u=o(69579),p=o(63558),m=o(55927),b=o(76031);function f(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:o}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return f(e).map((e=>{let{props:{value:n,label:o,attributes:l,default:s}}=e;return{value:n,label:o,attributes:l,default:s}}))}(o);return function(e){const n=(0,m.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function g(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:o}=e;const l=(0,d.W6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,p.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function v(e){const{defaultValue:n,queryString:o=!1,groupId:l}=e,s=x(e),[t,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=o.find((e=>e.default))??o[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:s}))),[a,r]=j({queryString:o,groupId:l}),[h,d]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,b.Dv)(o);return[l,(0,i.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:l}),p=(()=>{const e=a??h;return g({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{p&&c(p)}),[p]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),r(e),d(e)}),[r,d,s]),tabValues:s}}var y=o(3849);const w={tabList:"tabList_ijU3",tabItem:"tabItem_gQC8"};function S(e){let{className:n,block:o,selectedValue:l,selectValue:t,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:r}=(0,h.a_)(),d=e=>{const n=e.currentTarget,o=a.indexOf(n),s=i[o].value;s!==l&&(r(n),t(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=a.indexOf(e.currentTarget)+1;n=a[o]??a[0];break}case"ArrowLeft":{const o=a.indexOf(e.currentTarget)-1;n=a[o]??a[a.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.A)("tabs",{"tabs--block":o},n),children:i.map((e=>{let{value:n,label:o,attributes:t}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>{a.push(e)},onKeyDown:u,onClick:d,...t,className:(0,c.A)("tabs__item",w.tabItem,t?.className,{"tabs__item--active":l===n}),children:o??n},n)}))})}function B(e){let{lazy:n,children:o,selectedValue:l}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,c.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function _(e){const n=v(e);return(0,s.jsxs)("div",{className:(0,c.A)("tabs-container",w.tabList),children:[(0,s.jsx)(S,{...n,...e}),(0,s.jsx)(B,{...n,...e})]})}function I(e){const n=(0,y.A)();return(0,s.jsx)(_,{...e,children:f(e.children)},String(n))}const k={slug:"auto-complete",sidebar_position:98},N="Auto-completion",T={},A=[{value:"Upgrading Bash",id:"upgrading-bash",level:4},{value:"Installing bash-completion",id:"installing-bash-completion",level:4},{value:"Enabling cocli auto-completion",id:"enabling-cocli-auto-completion",level:4},{value:"Installing bash-completion",id:"installing-bash-completion-1",level:4},{value:"Enabling cocli auto-completion",id:"enabling-cocli-auto-completion-1",level:4}];function C(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"auto-completion",children:"Auto-completion"})}),"\n",(0,s.jsx)(n.p,{children:"coCLI provides auto-completion functionality for Bash and Zsh, which can save you a lot of typing."}),"\n",(0,s.jsxs)(I,{children:[(0,s.jsx)(r,{value:"macos",label:"macOS",default:!0,children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(r,{value:"zsh",label:"Zsh",default:!0,children:[(0,s.jsxs)(n.p,{children:["cocli generates Zsh auto-completion script using the ",(0,s.jsx)(n.code,{children:"cocli completion zsh"})," command. Sourcing this auto-completion script in your Shell will enable cocli auto-completion functionality."]}),(0,s.jsxs)(n.p,{children:["To enable this feature in all Shell sessions, add the following content to your ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"source <(cocli completion zsh)\n"})}),(0,s.jsx)(n.p,{children:"After reloading the Shell, cocli auto-completion will take effect immediately."}),(0,s.jsxs)(n.p,{children:["If you receive an error like ",(0,s.jsx)(n.code,{children:"2: command not found: compdef"}),", add the following content to the beginning of your ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"autoload -Uz compinit\ncompinit\n"})})]}),(0,s.jsxs)(r,{value:"bash",label:"Bash",children:[(0,s.jsxs)(n.p,{children:["The Bash completion script for cocli can be generated using the ",(0,s.jsx)(n.code,{children:"cocli completion bash"})," command. Sourcing this script in your Shell will enable the completion functionality."]}),(0,s.jsxs)(n.p,{children:["Additionally, the cocli completion script depends on ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/scop/bash-completion",children:"bash-completion"})}),", so you must install it first."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Warning:"})}),(0,s.jsxs)(n.p,{children:["There are two versions of bash-completion: v1 and v2. v1 corresponds to Bash 3.2 (which is the default on macOS), while v2 corresponds to Bash 4.1+. cocli's completion script ",(0,s.jsx)(n.strong,{children:"does not work"})," with bash-completion v1 and Bash 3.2. It requires ",(0,s.jsx)(n.strong,{children:"bash-completion v2"})," and ",(0,s.jsx)(n.strong,{children:"Bash 4.1+"}),". Therefore, to use cocli completion on macOS, you must install and use Bash 4.1+. The following instructions assume you're using Bash 4.1+ (that is, Bash 4.1 or later)."]}),(0,s.jsx)(n.h4,{id:"upgrading-bash",children:"Upgrading Bash"}),(0,s.jsx)(n.p,{children:"The following instructions assume you're using Bash 4.1+. You can check your Bash version by running:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"echo $BASH_VERSION\n"})}),(0,s.jsx)(n.p,{children:"If the version is too old, you can install/upgrade using Homebrew:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"brew install bash\n"})}),(0,s.jsx)(n.p,{children:"Reload your Shell and verify that the required version is in effect:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"echo $BASH_VERSION $SHELL\n"})}),(0,s.jsxs)(n.p,{children:["Homebrew typically installs it as ",(0,s.jsx)(n.code,{children:"${brew --prefix}/bin/bash"}),"."]}),(0,s.jsx)(n.h4,{id:"installing-bash-completion",children:"Installing bash-completion"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),(0,s.jsx)(n.p,{children:"As mentioned earlier, these instructions assume you're using Bash 4.1+, which means you need to install bash-completion v2 (unlike Bash 3.2 and bash-completion v1, where cocli completion won't work)."}),(0,s.jsxs)(n.p,{children:["You can test if bash-completion v2 is installed with ",(0,s.jsx)(n.code,{children:"type _init_completion"}),". If not installed, install it using Homebrew:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"brew install bash-completion@2\n"})}),(0,s.jsxs)(n.p,{children:["As shown in the command output, add the following to your ",(0,s.jsx)(n.code,{children:"~/.bash_profile"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:'brew_etc="$(brew --prefix)/etc" && [[ -r "${brew_etc}/profile.d/bash_completion.sh" ]] && . "${brew_etc}/profile.d/bash_completion.sh"\n'})}),(0,s.jsxs)(n.p,{children:["Reload your Shell and verify bash-completion v2 is properly installed using ",(0,s.jsx)(n.code,{children:"type _init_completion"}),"."]}),(0,s.jsx)(n.h4,{id:"enabling-cocli-auto-completion",children:"Enabling cocli auto-completion"}),(0,s.jsx)(n.p,{children:"You now need to ensure the cocli completion script is sourced in all Shell environments. There are several ways to do this:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Source the completion script in ",(0,s.jsx)(n.code,{children:"~/.bash_profile"}),":"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"echo 'source <(cocli completion bash)' >>~/.bash_profile\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the completion script to ",(0,s.jsx)(n.code,{children:"/usr/local/etc/bash_completion.d"}),":"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["After reloading the Shell, cocli auto-completion will take effect. To enable Bash completion in the current Shell session, source the ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"source ~/.bashrc\n"})})]})]})}),(0,s.jsx)(r,{value:"linux",label:"Linux",children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(r,{value:"zsh",label:"Zsh",default:!0,children:[(0,s.jsxs)(n.p,{children:["cocli generates Zsh auto-completion script using the ",(0,s.jsx)(n.code,{children:"cocli completion zsh"})," command. Sourcing this auto-completion script in your Shell will enable cocli auto-completion functionality."]}),(0,s.jsxs)(n.p,{children:["To enable this feature in all Shell sessions, add the following content to your ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"source <(cocli completion zsh)\n"})}),(0,s.jsx)(n.p,{children:"After reloading the Shell, cocli auto-completion will take effect immediately."}),(0,s.jsxs)(n.p,{children:["If you receive an error like ",(0,s.jsx)(n.code,{children:"2: command not found: compdef"}),", add the following content to the beginning of your ",(0,s.jsx)(n.code,{children:"~/.zshrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"autoload -Uz compinit\ncompinit\n"})})]}),(0,s.jsxs)(r,{value:"bash",label:"Bash",children:[(0,s.jsxs)(n.p,{children:["The Bash completion script for cocli can be generated using ",(0,s.jsx)(n.code,{children:"cocli completion bash"}),". Sourcing the completion script in your Shell will enable cocli auto-completion functionality."]}),(0,s.jsxs)(n.p,{children:["However, the completion script depends on ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://github.com/scop/bash-completion",children:"bash-completion"})}),", so you must install it first (you can check if bash-completion is installed using ",(0,s.jsx)(n.code,{children:"type _init_completion"}),")."]}),(0,s.jsx)(n.h4,{id:"installing-bash-completion-1",children:"Installing bash-completion"}),(0,s.jsxs)(n.p,{children:["Many package managers support bash-completion (see ",(0,s.jsx)(n.a,{href:"https://github.com/scop/bash-completion#installation",children:"here"}),"). You can install it using ",(0,s.jsx)(n.code,{children:"apt-get install bash-completion"})," or ",(0,s.jsx)(n.code,{children:"yum install bash-completion"}),", etc."]}),(0,s.jsxs)(n.p,{children:["These commands will create ",(0,s.jsx)(n.code,{children:"/usr/share/bash-completion/bash_completion"}),", which is the main script for bash-completion. Depending on your package manager, you may need to manually source this file in your ",(0,s.jsx)(n.code,{children:"~/.bashrc"}),"."]}),(0,s.jsxs)(n.p,{children:["To see the result, reload your Shell and run ",(0,s.jsx)(n.code,{children:"type _init_completion"}),". If the command succeeds, you're done, otherwise add the following to your ",(0,s.jsx)(n.code,{children:"~/.bashrc"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"source /usr/share/bash-completion/bash_completion\n"})}),(0,s.jsxs)(n.p,{children:["Reload your Shell and run ",(0,s.jsx)(n.code,{children:"type _init_completion"})," again to verify bash-completion installation."]}),(0,s.jsx)(n.h4,{id:"enabling-cocli-auto-completion-1",children:"Enabling cocli auto-completion"}),(0,s.jsx)(n.p,{children:"You now need to ensure that the cocli completion script is sourced in your Shell session. This can be done in two ways:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"For current user"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"echo 'source <(cocli completion bash)' >>~/.bashrc\n"})}),(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"System-wide"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"cocli completion bash | sudo tee /etc/bash_completion.d/cocli > /dev/null\nsudo chmod a+r /etc/bash_completion.d/cocli\n"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note:"})}),(0,s.jsxs)(n.p,{children:["bash-completion sources all completion scripts from the ",(0,s.jsx)(n.code,{children:"/etc/bash_completion.d"})," directory."]}),(0,s.jsxs)(n.p,{children:["Both methods have the same effect. After reloading the Shell, cocli auto-completion will take effect. To enable Bash completion in the current Shell session, source the ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Bash",children:"source ~/.bashrc\n"})})]})]})})]})]})}function E(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}},73331:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var l=o(58101);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);