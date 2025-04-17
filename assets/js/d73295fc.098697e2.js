"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[4644],{72665:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"viz/extensions/introduction","title":"\u6269\u5c55\u4ecb\u7ecd","description":"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6269\u5c55\u6765\u6269\u5c55\u53ef\u89c6\u5316\u7684\u529f\u80fd\uff0c\u4ee5\u66f4\u597d\u5730\u652f\u6301\u60a8\u56e2\u961f\u7684\u72ec\u7279\u5de5\u4f5c\u6d41\u7a0b\u3002\u6784\u5efa\u5b9a\u5236\u9762\u677f\uff0c\u5c06\u81ea\u5b9a\u4e49\u6d88\u606f\u8f6c\u6362\u4e3a\u53ef\u89c6\u5316\u652f\u6301\u7684\u67b6\u6784\uff0c\u5e76\u4e3a\u4e3b\u9898\u540d\u79f0\u521b\u5efa\u522b\u540d\u4ee5\u4fbf\u4e8e\u53ef\u89c6\u5316\u3002","source":"@site/docs/viz/8-extensions/1-introduction.md","sourceDirName":"viz/8-extensions","slug":"/viz/extensions/introduction","permalink":"/docs/viz/extensions/introduction","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1744870862000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u63d2\u4ef6","permalink":"/docs/category/extensions"},"next":{"title":"\u672c\u5730\u5f00\u53d1","permalink":"/docs/viz/extensions/local-development"}}');var t=i(25105),c=i(73331);const o={sidebar_position:1},l="\u6269\u5c55\u4ecb\u7ecd",r={},d=[{value:"\u81ea\u5b9a\u4e49\u9762\u677f",id:"\u81ea\u5b9a\u4e49\u9762\u677f",level:2},{value:"\u94fe\u63a5\u548c\u8d44\u6e90",id:"\u94fe\u63a5\u548c\u8d44\u6e90",level:3},{value:"\u6d88\u606f\u8f6c\u6362\u5668",id:"\u6d88\u606f\u8f6c\u6362\u5668",level:2},{value:"\u94fe\u63a5\u548c\u8d44\u6e90",id:"\u94fe\u63a5\u548c\u8d44\u6e90-1",level:3},{value:"\u4e3b\u9898\u522b\u540d",id:"\u4e3b\u9898\u522b\u540d",level:2},{value:"\u7f16\u5199\u6269\u5c55",id:"\u7f16\u5199\u6269\u5c55",level:2},{value:"API \u53c2\u8003",id:"api-\u53c2\u8003",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u6269\u5c55\u4ecb\u7ecd",children:"\u6269\u5c55\u4ecb\u7ecd"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6269\u5c55\u6765\u6269\u5c55\u53ef\u89c6\u5316\u7684\u529f\u80fd\uff0c\u4ee5\u66f4\u597d\u5730\u652f\u6301\u60a8\u56e2\u961f\u7684\u72ec\u7279\u5de5\u4f5c\u6d41\u7a0b\u3002\u6784\u5efa\u5b9a\u5236\u9762\u677f\uff0c\u5c06\u81ea\u5b9a\u4e49\u6d88\u606f\u8f6c\u6362\u4e3a\u53ef\u89c6\u5316\u652f\u6301\u7684\u67b6\u6784\uff0c\u5e76\u4e3a\u4e3b\u9898\u540d\u79f0\u521b\u5efa\u522b\u540d\u4ee5\u4fbf\u4e8e\u53ef\u89c6\u5316\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u65e6\u60a8\u5f00\u53d1\u5e76\u5b89\u88c5\u4e86\u6269\u5c55\uff0c\u60a8\u53ef\u4ee5\u5728\u5e94\u7528\u8bbe\u7f6e\u4e2d\u6253\u5f00\u4ee5\u663e\u793a\u6240\u6709\u53ef\u7528\u548c\u5df2\u5b89\u88c5\u7684\u6269\u5c55\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u9762\u677f",children:"\u81ea\u5b9a\u4e49\u9762\u677f"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u53ef\u89c6\u5316\u63d0\u4f9b\u4e86\u4e00\u5957\u5185\u7f6e\u9762\u677f\u7528\u4e8e\u673a\u5668\u4eba\u6570\u636e\u53ef\u89c6\u5316\u548c\u8c03\u8bd5\uff0c\u4f46\u8bb8\u591a\u7528\u6237\u6709\u6211\u4eec\u5f00\u7bb1\u5373\u7528\u7684\u4ea7\u54c1\u65e0\u6cd5\u6ee1\u8db3\u7684\u7279\u5b9a\u9886\u57df\u9700\u6c42\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u9762\u677f\u6269\u5c55\u5141\u8bb8\u60a8\u6784\u5efa\u5b8c\u6574\u7684\u9762\u677f\u3002\u81ea\u5b9a\u4e49\u9762\u677f\u53ef\u4ee5\u8ba2\u9605\u5404\u79cd\u4e3b\u9898\u4e0a\u7684\u6d88\u606f\uff0c\u53d1\u5e03\u548c\u63a5\u6536\u6d88\u606f\uff0c\u5e76\u4ee5\u6700\u9002\u5408\u60a8\u5de5\u4f5c\u6d41\u7a0b\u7684\u5f62\u5f0f\u663e\u793a\u6d88\u606f\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u60a8\u7684\u53ef\u89c6\u5316\u6216\u4ea4\u4e92\u9700\u6c42\u662f\u5b9a\u5236\u7684\uff0c\u4e14\u4e0d\u5bb9\u6613\u901a\u8fc7\u5185\u7f6e\u9762\u677f\u89e3\u51b3\u65f6\uff0c\u81ea\u5b9a\u4e49\u9762\u677f\u662f\u7406\u60f3\u7684\u9009\u62e9\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u94fe\u63a5\u548c\u8d44\u6e90",children:"\u94fe\u63a5\u548c\u8d44\u6e90"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6307\u5357\uff1a\u521b\u5efa\u81ea\u5b9a\u4e49\u9762\u677f"}),"\n",(0,t.jsx)(n.li,{children:"\u6784\u5efa\u81ea\u5b9a\u4e49\u9762\u677f\u6269\u5c55\uff08React\uff09"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6d88\u606f\u8f6c\u6362\u5668",children:"\u6d88\u606f\u8f6c\u6362\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u6d88\u606f\u8f6c\u6362\u5668\u6269\u5c55\u5141\u8bb8\u60a8\u5c06\u6d88\u606f\u4ece\u4e00\u79cd\u67b6\u6784\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u67b6\u6784\u3002\u901a\u8fc7\u5c06\u6d88\u606f\u8f6c\u6362\u4e3a\u7b26\u5408\u53ef\u89c6\u5316\u652f\u6301\u7684\u67b6\u6784\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u53ef\u89c6\u5316\u7684\u5185\u7f6e\u53ef\u89c6\u5316\u529f\u80fd\u68c0\u67e5\u5b83\u4eec\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6d88\u606f\u8f6c\u6362\u5668\u5c06\u81ea\u5b9a\u4e49 GPS \u6d88\u606f\u8f6c\u6362\u4e3a foxglove.LocationFix \u6d88\u606f\uff0c\u4ee5\u4fbf\u5728\u5730\u56fe\u9762\u677f\u4e2d\u53ef\u89c6\u5316\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a\u6d88\u606f\u8f6c\u6362\u5668\u4ec5\u5728\u9762\u677f\u8ba2\u9605\u4e3b\u9898\u65f6\u6309\u9700\u8fd0\u884c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u94fe\u63a5\u548c\u8d44\u6e90-1",children:"\u94fe\u63a5\u548c\u8d44\u6e90"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6307\u5357\uff1a\u521b\u5efa\u6d88\u606f\u8f6c\u6362\u5668"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u5199\u6d88\u606f\u8f6c\u6362\u5668\u6269\u5c55\uff08\u5730\u56fe\u9762\u677f\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u5199\u6d88\u606f\u8f6c\u6362\u5668\u6269\u5c55\uff083D \u9762\u677f\uff09"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3b\u9898\u522b\u540d",children:"\u4e3b\u9898\u522b\u540d"}),"\n",(0,t.jsx)(n.p,{children:"\u4e3b\u9898\u522b\u540d\u6269\u5c55\u5141\u8bb8\u60a8\u5c06\u6570\u636e\u6e90\u4e2d\u7684\u4e3b\u9898\u522b\u540d\u5230\u65b0\u4e3b\u9898\u3002\u53ef\u89c6\u5316\u9762\u677f\u53ef\u4ee5\u540c\u65f6\u8ba2\u9605\u522b\u540d\u4e3b\u9898\u548c\u539f\u59cb\u6570\u636e\u6e90\u7684\u4e3b\u9898\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7f16\u5199\u6269\u5c55",children:"\u7f16\u5199\u6269\u5c55"}),"\n",(0,t.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528 JavaScript \u6216 TypeScript \u7f16\u5199\u6269\u5c55\uff0c\u5e76\u5c06\u5176\u6253\u5305\u6210 ",(0,t.jsx)(n.code,{children:".coe"})," \u6587\u4ef6\u3002\u60a8\u53ef\u4ee5\u79c1\u4e0b\u5c06\u8fd9\u4e9b\u6587\u4ef6\u5206\u53d1\u7ed9\u60a8\u7684\u7ec4\u7ec7\uff0c\u6216\u901a\u8fc7\u6211\u4eec\u7684\u6ce8\u518c\u8868\u516c\u5f00\u5206\u53d1(\u5f00\u53d1\u4e2d) - \u901a\u8fc7\u6ce8\u518c\u8868\u5b89\u88c5\u6269\u5c55\u4ec5\u652f\u6301\u684c\u9762\u5e94\u7528\u3002\u5355\u4e2a\u6269\u5c55\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u9762\u677f\u6216\u8f6c\u6362\u5668\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u523b\u884c\u65f6\u7a7a\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/coscene-io/create-coscene-extension",children:"create-coscene-extension"})," \u5305\u4e2d\u63d0\u4f9b\u4e86\u4e00\u5957\u5165\u95e8\u6a21\u677f\u548c\u547d\u4ee4\uff0c\u4ee5\u7b80\u5316\u6269\u5c55\u7684\u7f16\u5199\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u6c42\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Node.js 14+"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u8bbe\u7f6e\u60a8\u7684\u6269\u5c55\u9879\u76ee\uff0c\u8bf7\u5bfc\u822a\u5230\u60a8\u5e0c\u671b\u6e90\u4ee3\u7801\u6240\u5728\u7684\u76ee\u5f55\uff0c\u5e76\u5728\u7ec8\u7aef\u7a97\u53e3\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm init coscene-extension@latest my-extension-name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u5c06\u8bbe\u7f6e\u6269\u5c55\u76ee\u5f55\u7ed3\u6784\u3002\u60a8\u7684\u6269\u5c55\u5165\u53e3\u70b9\u662f ",(0,t.jsx)(n.code,{children:"index.ts"})," \u6587\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5165\u53e3\u70b9\u811a\u672c\u5fc5\u987b\u5bfc\u51fa\u4e00\u4e2a ExtensionModule \u2014 \u5373\u4e00\u4e2a\u63a5\u53d7\u5355\u4e2a ",(0,t.jsx)(n.code,{children:"ExtensionContext"})," \u53c2\u6570\u7684 ",(0,t.jsx)(n.code,{children:"activate"})," \u51fd\u6570\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"api-\u53c2\u8003",children:"API \u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/viz/extensions/api/entry-point/extension-context",children:"ExtensionContext"})}),"\n",(0,t.jsx)(n.li,{children:"@coscene/coscene-extension"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},73331:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(58101);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);