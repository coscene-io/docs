"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[1183],{54540:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>k,contentTitle:()=>V,default:()=>E,frontMatter:()=>I,metadata:()=>c,toc:()=>C});const c=JSON.parse('{"id":"developers/coSceneCli/cli-auto-complete","title":"\u81ea\u52a8\u8865\u5168","description":"coCLI \u4e3a Bash\u3001Zsh \u63d0\u4f9b\u81ea\u52a8\u8865\u5168\u529f\u80fd\uff0c\u53ef\u4ee5\u4e3a\u4f60\u8282\u7701\u5927\u91cf\u7684\u8f93\u5165\u3002","source":"@site/docs/developers/coSceneCli/98-cli-auto-complete.mdx","sourceDirName":"developers/coSceneCli","slug":"/developers/coSceneCli/auto-complete","permalink":"/zh/docs/developers/coSceneCli/auto-complete","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1743408693000,"sidebarPosition":98,"frontMatter":{"slug":"auto-complete","sidebar_position":98},"sidebar":"tutorialSidebar","previous":{"title":"\u5e38\u89c1\u6279\u91cf\u64cd\u4f5c\u4e3e\u4f8b","permalink":"/zh/docs/developers/coSceneCli/common-batch-tasks"},"next":{"title":"\u9ad8\u7ea7\u529f\u80fd","permalink":"/zh/docs/developers/coSceneCli/advanced-features"}}');var n=s(25105),o=s(73331),r=s(58101),a=s(13526);const i={tabItem:"tabItem_PPSd"};function t(e){let{children:l,hidden:s,className:c}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,c),hidden:s,children:l})}var h=s(32718),d=s(55234),u=s(3316),p=s(40099),m=s(1248),x=s(3900);function b(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function j(e){const{values:l,children:s}=e;return(0,r.useMemo)((()=>{const e=l??function(e){return b(e).map((e=>{let{props:{value:l,label:s,attributes:c,default:n}}=e;return{value:l,label:s,attributes:c,default:n}}))}(s);return function(e){const l=(0,m.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,s])}function f(e){let{value:l,tabValues:s}=e;return s.some((e=>e.value===l))}function g(e){let{queryString:l=!1,groupId:s}=e;const c=(0,d.W6)(),n=function(e){let{queryString:l=!1,groupId:s}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:l,groupId:s});return[(0,p.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const l=new URLSearchParams(c.location.search);l.set(n,e),c.replace({...c.location,search:l.toString()})}),[n,c])]}function v(e){const{defaultValue:l,queryString:s=!1,groupId:c}=e,n=j(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:l,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!f({value:l,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const c=s.find((e=>e.default))??s[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:l,tabValues:n}))),[i,t]=g({queryString:s,groupId:c}),[h,d]=function(e){let{groupId:l}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(l),[c,n]=(0,x.Dv)(s);return[c,(0,r.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:c}),p=(()=>{const e=i??h;return f({value:e,tabValues:n})?e:null})();(0,u.A)((()=>{p&&a(p)}),[p]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),t(e),d(e)}),[t,d,n]),tabValues:n}}var S=s(33600);const B={tabList:"tabList_N1gK",tabItem:"tabItem_sGyX"};function _(e){let{className:l,block:s,selectedValue:c,selectValue:o,tabValues:r}=e;const i=[],{blockElementScrollPositionUntilNextRender:t}=(0,h.a_)(),d=e=>{const l=e.currentTarget,s=i.indexOf(l),n=r[s].value;n!==c&&(t(l),o(n))},u=e=>{let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;l=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;l=i[s]??i[i.length-1];break}}l?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},l),children:r.map((e=>{let{value:l,label:s,attributes:o}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:c===l?0:-1,"aria-selected":c===l,ref:e=>{i.push(e)},onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",B.tabItem,o?.className,{"tabs__item--active":c===l}),children:s??l},l)}))})}function y(e){let{lazy:l,children:s,selectedValue:c}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(l){const e=o.find((e=>e.props.value===c));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map(((e,l)=>(0,r.cloneElement)(e,{key:l,hidden:e.props.value!==c})))})}function w(e){const l=v(e);return(0,n.jsxs)("div",{className:(0,a.A)("tabs-container",B.tabList),children:[(0,n.jsx)(_,{...l,...e}),(0,n.jsx)(y,{...l,...e})]})}function N(e){const l=(0,S.A)();return(0,n.jsx)(w,{...e,children:b(e.children)},String(l))}const I={slug:"auto-complete",sidebar_position:98},V="\u81ea\u52a8\u8865\u5168",k={},C=[{value:"\u5347\u7ea7 Bash",id:"\u5347\u7ea7-bash",level:4},{value:"\u5b89\u88c5 bash-completion",id:"\u5b89\u88c5-bash-completion",level:4},{value:"\u542f\u7528 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd",id:"\u542f\u7528-cocli-\u81ea\u52a8\u8865\u5168\u529f\u80fd",level:4},{value:"\u5b89\u88c5 bash-completion",id:"\u5b89\u88c5-bash-completion-1",level:4},{value:"\u542f\u52a8 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd",id:"\u542f\u52a8-cocli-\u81ea\u52a8\u8865\u5168\u529f\u80fd",level:4}];function z(e){const l={a:"a",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.header,{children:(0,n.jsx)(l.h1,{id:"\u81ea\u52a8\u8865\u5168",children:"\u81ea\u52a8\u8865\u5168"})}),"\n",(0,n.jsx)(l.p,{children:"coCLI \u4e3a Bash\u3001Zsh \u63d0\u4f9b\u81ea\u52a8\u8865\u5168\u529f\u80fd\uff0c\u53ef\u4ee5\u4e3a\u4f60\u8282\u7701\u5927\u91cf\u7684\u8f93\u5165\u3002"}),"\n",(0,n.jsxs)(N,{children:[(0,n.jsx)(t,{value:"macos",label:"macOS",default:!0,children:(0,n.jsxs)(N,{children:[(0,n.jsxs)(t,{value:"zsh",label:"Zsh",default:!0,children:[(0,n.jsxs)(l.p,{children:["cocli \u901a\u8fc7\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"cocli completion zsh"})," \u751f\u6210 Zsh \u81ea\u52a8\u8865\u5168\u811a\u672c\u3002 \u5728 Shell \u4e2d\u5bfc\u5165\uff08Sourcing\uff09\u8be5\u81ea\u52a8\u8865\u5168\u811a\u672c\uff0c\u5c06\u542f\u52a8 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002"]}),(0,n.jsxs)(l.p,{children:["\u4e3a\u4e86\u5728\u6240\u6709\u7684 Shell \u4f1a\u8bdd\u4e2d\u5b9e\u73b0\u6b64\u529f\u80fd\uff0c\u8bf7\u5c06\u4e0b\u9762\u5185\u5bb9\u52a0\u5165\u5230\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"~/.zshrc"})," \u4e2d\u3002"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"source <(cocli completion zsh)\n"})}),(0,n.jsx)(l.p,{children:"\u91cd\u65b0\u52a0\u8f7d Shell \u540e\uff0ccocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u5c06\u7acb\u5373\u751f\u6548\u3002"}),(0,n.jsxs)(l.p,{children:["\u5982\u679c\u4f60\u6536\u5230 ",(0,n.jsx)(l.code,{children:"2: command not found: compdef"})," \u8fd9\u6837\u7684\u9519\u8bef\u63d0\u793a\uff0c\u90a3\u8bf7\u5c06\u4e0b\u9762\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,n.jsx)(l.code,{children:"~/.zshrc"})," \u6587\u4ef6\u7684\u5f00\u5934\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"autoload -Uz compinit\ncompinit\n"})})]}),(0,n.jsxs)(t,{value:"bash",label:"Bash",children:[(0,n.jsxs)(l.p,{children:["cocli \u7684 Bash \u8865\u5168\u811a\u672c\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(l.code,{children:"cocli completion bash"})," \u547d\u4ee4\u751f\u6210\u3002 \u5728\u4f60\u7684 Shell \u4e2d\u5bfc\u5165\uff08Sourcing\uff09\u8fd9\u4e2a\u811a\u672c\u5373\u53ef\u542f\u7528\u8865\u5168\u529f\u80fd\u3002"]}),(0,n.jsxs)(l.p,{children:["\u6b64\u5916\uff0ccocli \u8865\u5168\u811a\u672c\u4f9d\u8d56\u4e8e\u5de5\u5177 ",(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.a,{href:"https://github.com/scop/bash-completion",children:"bash-completion"})}),"\uff0c \u6240\u4ee5\u4f60\u5fc5\u987b\u5148\u5b89\u88c5\u5b83\u3002"]}),(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"\u8b66\u544a\uff1a"})}),(0,n.jsxs)(l.p,{children:["bash-completion \u6709\u4e24\u4e2a\u7248\u672c\uff1av1 \u548c v2\u3002v1 \u5bf9\u5e94 Bash 3.2\uff08\u4e5f\u662f macOS \u7684\u9ed8\u8ba4\u5b89\u88c5\u7248\u672c\uff09\uff0c v2 \u5bf9\u5e94 Bash 4.1+\u3002cocli \u7684\u8865\u5168\u811a\u672c",(0,n.jsx)(l.strong,{children:"\u65e0\u6cd5\u9002\u914d"})," bash-completion v1 \u548c Bash 3.2\u3002 \u5fc5\u987b\u4e3a\u5b83\u914d\u5907 ",(0,n.jsx)(l.strong,{children:"bash-completion v2"})," \u548c ",(0,n.jsx)(l.strong,{children:"Bash 4.1+"}),"\u3002 \u6709\u9274\u4e8e\u6b64\uff0c\u4e3a\u4e86\u5728 macOS \u4e0a\u4f7f\u7528 cocli \u8865\u5168\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u8981\u5b89\u88c5\u548c\u4f7f\u7528 Bash 4.1+\u3002 \u540e\u7eed\u8bf4\u660e\u5047\u5b9a\u4f60\u7528\u7684\u662f Bash 4.1+\uff08\u4e5f\u5c31\u662f Bash 4.1 \u6216\u66f4\u65b0\u7684\u7248\u672c\uff09\u3002"]}),(0,n.jsx)(l.h4,{id:"\u5347\u7ea7-bash",children:"\u5347\u7ea7 Bash"}),(0,n.jsx)(l.p,{children:"\u540e\u7eed\u8bf4\u660e\u5047\u5b9a\u4f60\u5df2\u4f7f\u7528 Bash 4.1+\u3002\u4f60\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 Bash \u7248\u672c\uff1a"}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"echo $BASH_VERSION\n"})}),(0,n.jsx)(l.p,{children:"\u5982\u679c\u7248\u672c\u592a\u65e7\uff0c\u53ef\u4ee5\u7528 Homebrew \u5b89\u88c5/\u5347\u7ea7\uff1a"}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"brew install bash\n"})}),(0,n.jsx)(l.p,{children:"\u91cd\u65b0\u52a0\u8f7d Shell\uff0c\u5e76\u9a8c\u8bc1\u6240\u9700\u7684\u7248\u672c\u5df2\u7ecf\u751f\u6548\uff1a"}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"echo $BASH_VERSION $SHELL\n"})}),(0,n.jsxs)(l.p,{children:["Homebrew \u901a\u5e38\u628a\u5b83\u5b89\u88c5\u4e3a ",(0,n.jsx)(l.code,{children:"${brew --prefix}/bin/bash"}),"\u3002"]}),(0,n.jsx)(l.h4,{id:"\u5b89\u88c5-bash-completion",children:"\u5b89\u88c5 bash-completion"}),(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"\u8bf4\u660e\uff1a"})}),(0,n.jsx)(l.p,{children:"\u5982\u524d\u6240\u8ff0\uff0c\u672c\u8bf4\u660e\u5047\u5b9a\u4f60\u4f7f\u7528\u7684 Bash \u7248\u672c\u4e3a 4.1+\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u8981\u5b89\u88c5 bash-completion v2 \uff08\u4e0d\u540c\u4e8e Bash 3.2 \u548c bash-completion v1\uff0ccocli \u7684\u8865\u5168\u529f\u80fd\u5728\u8be5\u573a\u666f\u4e0b\u65e0\u6cd5\u5de5\u4f5c\uff09\u3002"}),(0,n.jsxs)(l.p,{children:["\u4f60\u53ef\u4ee5\u7528\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"type _init_completion"})," \u6d4b\u8bd5 bash-completion v2 \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u3002 \u5982\u672a\u5b89\u88c5\uff0c\u7528 Homebrew \u6765\u5b89\u88c5\u5b83\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"brew install bash-completion@2\n"})}),(0,n.jsxs)(l.p,{children:["\u5982\u547d\u4ee4\u7684\u8f93\u51fa\u4fe1\u606f\u6240\u663e\u793a\u7684\uff0c\u5c06\u5982\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"~/.bash_profile"})," \u4e2d\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:'brew_etc="$(brew --prefix)/etc" && [[ -r "${brew_etc}/profile.d/bash_completion.sh" ]] && . "${brew_etc}/profile.d/bash_completion.sh"\n'})}),(0,n.jsxs)(l.p,{children:["\u91cd\u65b0\u52a0\u8f7d Shell\uff0c\u5e76\u7528\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"type _init_completion"})," \u9a8c\u8bc1 bash-completion v2 \u5df2\u7ecf\u6070\u5f53\u7684\u5b89\u88c5\u3002"]}),(0,n.jsx)(l.h4,{id:"\u542f\u7528-cocli-\u81ea\u52a8\u8865\u5168\u529f\u80fd",children:"\u542f\u7528 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd"}),(0,n.jsx)(l.p,{children:"\u4f60\u73b0\u5728\u9700\u8981\u786e\u4fdd\u5728\u6240\u6709\u7684 Shell \u73af\u5883\u4e2d\u5747\u5df2\u5bfc\u5165\uff08sourced\uff09cocli \u7684\u8865\u5168\u811a\u672c\uff0c \u6709\u82e5\u5e72\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a"}),(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\u5728\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"~/.bash_profile"})," \u4e2d\u5bfc\u5165\uff08Source\uff09\u8865\u5168\u811a\u672c\uff1a"]}),"\n"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"echo 'source <(cocli completion bash)' >>~/.bash_profile\n"})}),(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\u5c06\u8865\u5168\u811a\u672c\u6dfb\u52a0\u5230\u76ee\u5f55 ",(0,n.jsx)(l.code,{children:"/usr/local/etc/bash_completion.d"})," \u4e2d\uff1a"]}),"\n"]}),(0,n.jsxs)(l.p,{children:["\u91cd\u65b0\u52a0\u8f7d Shell \u540e\uff0ccocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u5373\u53ef\u751f\u6548\u3002 \u82e5\u8981\u5728\u5f53\u524d Shell \u4f1a\u8bdd\u4e2d\u542f\u7528 Bash \u8865\u5168\u529f\u80fd\uff0c\u6e90\u5f15 ",(0,n.jsx)(l.code,{children:"~/.bashrc"})," \u6587\u4ef6\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"source ~/.bashrc\n"})})]})]})}),(0,n.jsx)(t,{value:"linux",label:"Linux",children:(0,n.jsxs)(N,{children:[(0,n.jsxs)(t,{value:"zsh",label:"Zsh",default:!0,children:[(0,n.jsxs)(l.p,{children:["cocli \u901a\u8fc7\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"cocli completion zsh"})," \u751f\u6210 Zsh \u81ea\u52a8\u8865\u5168\u811a\u672c\u3002 \u5728 Shell \u4e2d\u5bfc\u5165\uff08Sourcing\uff09\u8be5\u81ea\u52a8\u8865\u5168\u811a\u672c\uff0c\u5c06\u542f\u52a8 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002"]}),(0,n.jsxs)(l.p,{children:["\u4e3a\u4e86\u5728\u6240\u6709\u7684 Shell \u4f1a\u8bdd\u4e2d\u5b9e\u73b0\u6b64\u529f\u80fd\uff0c\u8bf7\u5c06\u4e0b\u9762\u5185\u5bb9\u52a0\u5165\u5230\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"~/.zshrc"})," \u4e2d\u3002"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"source <(cocli completion zsh)\n"})}),(0,n.jsx)(l.p,{children:"\u91cd\u65b0\u52a0\u8f7d Shell \u540e\uff0ccocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u5c06\u7acb\u5373\u751f\u6548\u3002"}),(0,n.jsxs)(l.p,{children:["\u5982\u679c\u4f60\u6536\u5230 ",(0,n.jsx)(l.code,{children:"2: command not found: compdef"})," \u8fd9\u6837\u7684\u9519\u8bef\u63d0\u793a\uff0c\u90a3\u8bf7\u5c06\u4e0b\u9762\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,n.jsx)(l.code,{children:"~/.zshrc"})," \u6587\u4ef6\u7684\u5f00\u5934\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"autoload -Uz compinit\ncompinit\n"})})]}),(0,n.jsxs)(t,{value:"bash",label:"Bash",children:[(0,n.jsxs)(l.p,{children:["cocli \u7684 Bash \u8865\u5168\u811a\u672c\u53ef\u4ee5\u7528\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"cocli completion bash"})," \u751f\u6210\u3002 \u5728 Shell \u4e2d\u5bfc\u5165\uff08Sourcing\uff09\u8865\u5168\u811a\u672c\uff0c\u5c06\u542f\u7528 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u3002"]}),(0,n.jsxs)(l.p,{children:["\u7136\u800c\uff0c\u8865\u5168\u811a\u672c\u4f9d\u8d56\u4e8e\u5de5\u5177 ",(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.a,{href:"https://github.com/scop/bash-completion",children:"bash-completion"})}),"\uff0c \u6240\u4ee5\u8981\u5148\u5b89\u88c5\u5b83\uff08\u53ef\u4ee5\u7528\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"type _init_completion"})," \u68c0\u67e5 bash-completion \u662f\u5426\u5df2\u5b89\u88c5\uff09\u3002"]}),(0,n.jsx)(l.h4,{id:"\u5b89\u88c5-bash-completion-1",children:"\u5b89\u88c5 bash-completion"}),(0,n.jsxs)(l.p,{children:["\u5f88\u591a\u5305\u7ba1\u7406\u5de5\u5177\u5747\u652f\u6301 bash-completion\uff08\u53c2\u89c1",(0,n.jsx)(l.a,{href:"https://github.com/scop/bash-completion#installation",children:"\u8fd9\u91cc"}),"\uff09\u3002 \u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(l.code,{children:"apt-get install bash-completion"})," \u6216 ",(0,n.jsx)(l.code,{children:"yum install bash-completion"})," \u7b49\u547d\u4ee4\u6765\u5b89\u88c5\u5b83\u3002"]}),(0,n.jsxs)(l.p,{children:["\u4e0a\u8ff0\u547d\u4ee4\u5c06\u521b\u5efa\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"/usr/share/bash-completion/bash_completion"}),"\uff0c\u5b83\u662f bash-completion \u7684\u4e3b\u811a\u672c\u3002 \u4f9d\u636e\u5305\u7ba1\u7406\u5de5\u5177\u7684\u5b9e\u9645\u60c5\u51b5\uff0c\u4f60\u9700\u8981\u5728 ",(0,n.jsx)(l.code,{children:"~/.bashrc"})," \u6587\u4ef6\u4e2d\u624b\u5de5\u5bfc\u5165\u6b64\u6587\u4ef6\u3002"]}),(0,n.jsxs)(l.p,{children:["\u8981\u67e5\u770b\u7ed3\u679c\uff0c\u8bf7\u91cd\u65b0\u52a0\u8f7d\u4f60\u7684 Shell\uff0c\u5e76\u8fd0\u884c\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"type _init_completion"}),"\u3002 \u5982\u679c\u547d\u4ee4\u6267\u884c\u6210\u529f\uff0c\u5219\u8bbe\u7f6e\u5b8c\u6210\uff0c\u5426\u5219\u5c06\u4e0b\u9762\u5185\u5bb9\u6dfb\u52a0\u5230\u6587\u4ef6 ",(0,n.jsx)(l.code,{children:"~/.bashrc"})," \u4e2d\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"source /usr/share/bash-completion/bash_completion\n"})}),(0,n.jsxs)(l.p,{children:["\u91cd\u65b0\u52a0\u8f7d Shell\uff0c\u518d\u8f93\u5165\u547d\u4ee4 ",(0,n.jsx)(l.code,{children:"type _init_completion"})," \u6765\u9a8c\u8bc1 bash-completion \u7684\u5b89\u88c5\u72b6\u6001\u3002"]}),(0,n.jsx)(l.h4,{id:"\u542f\u52a8-cocli-\u81ea\u52a8\u8865\u5168\u529f\u80fd",children:"\u542f\u52a8 cocli \u81ea\u52a8\u8865\u5168\u529f\u80fd"}),(0,n.jsx)(l.p,{children:"\u4f60\u73b0\u5728\u9700\u8981\u786e\u4fdd\u4e00\u70b9\uff1acocli \u8865\u5168\u811a\u672c\u5df2\u7ecf\u5bfc\u5165\uff08sourced\uff09\u5230 Shell \u4f1a\u8bdd\u4e2d\u3002 \u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\u8fdb\u884c\u8bbe\u7f6e\uff1a"}),(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"\u5f53\u524d\u7528\u6237"}),"\n"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"echo 'source <(cocli completion bash)' >>~/.bashrc\n"})}),(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"\u7cfb\u7edf\u5168\u5c40"}),"\n"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"cocli completion bash | sudo tee /etc/bash_completion.d/cocli > /dev/null\nsudo chmod a+r /etc/bash_completion.d/cocli\n"})}),(0,n.jsx)(l.p,{children:(0,n.jsx)(l.strong,{children:"\u8bf4\u660e\uff1a"})}),(0,n.jsxs)(l.p,{children:["bash-completion \u8d1f\u8d23\u5bfc\u5165 ",(0,n.jsx)(l.code,{children:"/etc/bash_completion.d"})," \u76ee\u5f55\u4e2d\u7684\u6240\u6709\u8865\u5168\u811a\u672c\u3002"]}),(0,n.jsxs)(l.p,{children:["\u4e24\u79cd\u65b9\u5f0f\u7684\u6548\u679c\u76f8\u540c\u3002\u91cd\u65b0\u52a0\u8f7d Shell \u540e\uff0ccocli \u81ea\u52a8\u8865\u5168\u529f\u80fd\u5373\u53ef\u751f\u6548\u3002 \u82e5\u8981\u5728\u5f53\u524d Shell \u4f1a\u8bdd\u4e2d\u542f\u7528 Bash \u8865\u5168\u529f\u80fd\uff0c\u6e90\u5f15 ",(0,n.jsx)(l.code,{children:"~/.bashrc"})," \u6587\u4ef6\uff1a"]}),(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-Bash",children:"source ~/.bashrc\n"})})]})]})})]})]})}function E(e={}){const{wrapper:l}={...(0,o.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(z,{...e})}):z(e)}},73331:(e,l,s)=>{s.d(l,{R:()=>r,x:()=>a});var c=s(58101);const n={},o=c.createContext(n);function r(e){const l=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),c.createElement(o.Provider,{value:l},e.children)}}}]);