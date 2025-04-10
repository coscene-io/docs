"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[4736],{62285:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"viz/panel/service-panel","title":"\u670d\u52a1\u8c03\u7528\u9762\u677f","description":"\u670d\u52a1\u8c03\u7528\u9762\u677f\u4e00\u89c8","source":"@site/docs/viz/4-panel/7-service-panel.md","sourceDirName":"viz/4-panel","slug":"/viz/panel/service-panel","permalink":"/zh/docs/viz/panel/service-panel","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742361612000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\u53d1\u5e03\u9762\u677f","permalink":"/zh/docs/viz/panel/publish-panel"},"next":{"title":"\u8fdc\u7a0b\u64cd\u63a7\u9762\u677f","permalink":"/zh/docs/viz/panel/teleop-panel"}}');var l=i(25105),r=i(73331);const t={sidebar_position:7},c="\u670d\u52a1\u8c03\u7528\u9762\u677f",o={},d=[{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",level:3},{value:"\u6309\u94ae\u914d\u7f6e",id:"\u6309\u94ae\u914d\u7f6e",level:3},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u670d\u52a1\u8c03\u7528\u9762\u677f",children:"\u670d\u52a1\u8c03\u7528\u9762\u677f"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"\u670d\u52a1\u8c03\u7528\u9762\u677f\u4e00\u89c8",src:i(71923).A+"",width:"1173",height:"627"})}),"\n",(0,l.jsxs)(n.p,{children:["\u670d\u52a1\u8c03\u7528\u9762\u677f\uff08Service Call Panel\uff09\u5141\u8bb8\u60a8\u901a\u8fc7 ",(0,l.jsx)(n.a,{href:"https://github.com/coscene-io/coBridge",children:"coBridge"})," \u8c03\u7528\u673a\u5668\u7aef\u670d\u52a1\uff08Service\uff09\u5e76\u67e5\u770b\u5176\u54cd\u5e94\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u9009\u9879",children:"\u914d\u7f6e\u9009\u9879"}),"\n",(0,l.jsx)(n.h3,{id:"\u57fa\u7840\u914d\u7f6e",children:"\u57fa\u7840\u914d\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u670d\u52a1\u540d\u79f0"})," (Service name)\uff1a\u9700\u8981\u8c03\u7528\u7684\u670d\u52a1\u540d\u79f0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5e03\u5c40\u65b9\u5f0f"})," (Layout)\uff1a\u914d\u7f6e\u8bf7\u6c42\u548c\u54cd\u5e94\u533a\u57df\u7684\u6392\u5217\u65b9\u5f0f","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5782\u76f4\u5e03\u5c40 (Vertical)\uff1a\u4e0a\u4e0b\u6392\u5217"}),"\n",(0,l.jsx)(n.li,{children:"\u6c34\u5e73\u5e03\u5c40 (Horizontal)\uff1a\u5de6\u53f3\u6392\u5217"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6309\u94ae\u914d\u7f6e",children:"\u6309\u94ae\u914d\u7f6e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6309\u94ae\u6587\u672c"})," (Title)\uff1a\u663e\u793a\u5728\u6309\u94ae\u4e0a\u7684\u6587\u5b57"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u63d0\u793a\u4fe1\u606f"})," (Tooltip)\uff1a\u9f20\u6807\u60ac\u505c\u65f6\u663e\u793a\u7684\u63d0\u793a\u6587\u672c"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u6309\u94ae\u989c\u8272"})," (Color)\uff1a\u81ea\u5b9a\u4e49\u6309\u94ae\u7684\u663e\u793a\u989c\u8272"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:'\u9996\u5148\u9700\u8981\u786e\u4fdd\u5df2\u8fde\u63a5\u5230\u652f\u6301\u7684\u6570\u636e\u6e90\uff0c\u5426\u5219"\u8c03\u7528\u670d\u52a1"\u6309\u94ae\u5c06\u4fdd\u6301\u7981\u7528\u72b6\u6001'}),"\n",(0,l.jsx)(n.li,{children:"\u5728\u8bf7\u6c42\u8f93\u5165\u533a\u57df\u4e2d\uff0c\u4f7f\u7528\u6807\u51c6 JSON \u683c\u5f0f\u7f16\u5199\u670d\u52a1\u8bf7\u6c42\u5185\u5bb9"}),"\n",(0,l.jsx)(n.li,{children:'\u70b9\u51fb"\u8c03\u7528\u670d\u52a1"\u6309\u94ae\u53d1\u9001\u8bf7\u6c42'}),"\n",(0,l.jsx)(n.li,{children:"\u670d\u52a1\u7684\u54cd\u5e94\u7ed3\u679c\u5c06\u81ea\u52a8\u663e\u793a\u5728\u54cd\u5e94\u533a\u57df\u4e2d"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u670d\u52a1\u8c03\u7528\u9762\u677f\u4e3a\u60a8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\u7684\u754c\u9762\uff0c\u65b9\u4fbf\u60a8\u4e0e\u673a\u5668\u4eba\u7cfb\u7edf\u8fdb\u884c\u670d\u52a1\uff08Service\uff09\u7ea7\u522b\u7684\u4ea4\u4e92\u3002\u901a\u8fc7\u8fd9\u4e2a\u9762\u677f\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u5730\u6d4b\u8bd5\u5404\u79cd\u670d\u52a1\u8c03\u7528\uff0c\u5b9e\u65f6\u67e5\u770b\u54cd\u5e94\u7ed3\u679c\uff0c\u6709\u6548\u5730\u8fdb\u884c\u7cfb\u7edf\u8c03\u8bd5\u548c\u529f\u80fd\u9a8c\u8bc1\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},71923:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/viz-13-1-b79d6ea374f66b0cb78262012c10c6ef.png"},73331:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(58101);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);