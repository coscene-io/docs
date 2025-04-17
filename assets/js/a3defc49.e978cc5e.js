"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[1786],{10912:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"viz/extensions/api/custom-panels/subscription","title":"Subscription","description":"\u4f20\u9012\u7ed9 PanelExtensionContext.subscribe \u7684\u5355\u4e2a\u8ba2\u9605\u3002","source":"@site/docs/viz/8-extensions/4-api/3-custom-panels/17-subscription.md","sourceDirName":"viz/8-extensions/4-api/3-custom-panels","slug":"/viz/extensions/api/custom-panels/subscription","permalink":"/docs/viz/extensions/api/custom-panels/subscription","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1744870862000,"sidebarPosition":17,"frontMatter":{"sidebar_position":17},"sidebar":"tutorialSidebar","previous":{"title":"SubscribeMessageRangeArgs","permalink":"/docs/viz/extensions/api/custom-panels/subscribe-message-range-args"},"next":{"title":"\u6d88\u606f\u8f6c\u6362\u5668","permalink":"/docs/category/extensions/message-converters"}}');var i=s(25105),r=s(73331);const o={sidebar_position:17},c="Subscription",a={},l=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"topic",id:"topic",level:3},{value:"convertTo?",id:"convertto",level:3},{value:"<del>preload?</del>",id:"preload",level:3},{value:"\u5df2\u5f03\u7528",id:"\u5df2\u5f03\u7528",level:4}];function d(e){const n={code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"subscription",children:"Subscription"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Subscription = object;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f20\u9012\u7ed9 ",(0,i.jsx)(n.code,{children:"PanelExtensionContext.subscribe"})," \u7684\u5355\u4e2a\u8ba2\u9605\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,i.jsx)(n.h3,{id:"topic",children:"topic"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"topic: string;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"convertto",children:"convertTo?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"optional convertTo: string;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e00\u4e2a\u4e3b\u9898\u6709\u989d\u5916\u7684 schema \u540d\u79f0\uff0c\u6307\u5b9a schema \u540d\u79f0\u5c06\u4f7f\u7528\u6ce8\u518c\u7684\u6d88\u606f\u8f6c\u6362\u5668\u5c06\u8be5\u4e3b\u9898\u4e0a\u7684\u6d88\u606f\u8f6c\u6362\u4e3a convertTo schema\u3002\u8be5\u8ba2\u9605\u7684 MessageEvents \u5c06\u5305\u542b\u8f6c\u6362\u540e\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u5305\u542b\u539f\u59cb\u6d88\u606f\u4e8b\u4ef6\u7684 originalMessageEvent \u5b57\u6bb5\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"preload",children:(0,i.jsx)(n.del,{children:"preload?"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"optional preload: boolean;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06 preload \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.em,{children:"true"})," \u63d0\u793a\u6570\u636e\u6e90\u5e94\u8be5\u5c1d\u8bd5\u52a0\u8f7d\u8be5\u4e3b\u9898\u7684\u6240\u6709\u53ef\u7528\u6d88\u606f\u3002\u9ed8\u8ba4\u884c\u4e3a\u662f\u53ea\u52a0\u8f7d\u5f53\u524d\u5e27\u7684\u6d88\u606f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u53ea\u6709"})," \u8bbe\u7f6e\u4e86 ",(0,i.jsx)(n.code,{children:"preload: true"})," \u7684\u4e3b\u9898\u624d\u80fd\u5728 ",(0,i.jsx)(n.code,{children:"allFrames"})," \u6e32\u67d3\u72b6\u6001\u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5df2\u5f03\u7528",children:"\u5df2\u5f03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bf7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"PanelExtensionContext.subscribeMessageRange"})," \u4ee3\u66ff\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},73331:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(58101);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);