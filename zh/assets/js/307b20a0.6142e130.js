"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[1512],{35233:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"developers/concepts/workflow","title":"\u81ea\u52a8\u5316","description":"coScene \u7684\u5de5\u4f5c\u6d41\u662f\u4e00\u4e2a\u57fa\u4e8e\u4efb\u52a1\u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\uff0c\u4f5c\u4e3a\u5e73\u53f0\u4e09\u5927\u6838\u5fc3\u5f15\u64ce\u7684\u4e00\u90e8\u5206\uff0c\u7075\u6d3b\u800c\u5f3a\u5927\u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\u8ba9\u60a8\u5b58\u50a8\u5728\u5e73\u53f0\u4e0a\u7684\u6570\u636e\u6709\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u3002\u672c\u6587\u4ecb\u7ecd\u4e86","source":"@site/docs/developers/concepts/3-workflow.md","sourceDirName":"developers/concepts","slug":"/developers/concepts/workflow","permalink":"/zh/docs/developers/concepts/workflow","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1743408693000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u7528\u6237\u548c\u6743\u9650","permalink":"/zh/docs/developers/concepts/auth-models"},"next":{"title":"\u547d\u4ee4\u884c\u5de5\u5177 coCLI - Beta","permalink":"/zh/docs/category/cocli"}}');var r=s(25105),o=s(73331);const t={sidebar_position:3},i="\u81ea\u52a8\u5316",l={},d=[{value:"\u548c\u6570\u636e\u5f15\u64ce\u65e0\u7f1d\u7ed3\u5408",id:"\u548c\u6570\u636e\u5f15\u64ce\u65e0\u7f1d\u7ed3\u5408",level:2},{value:"\u7075\u6d3b\u7684\u6a21\u677f",id:"\u7075\u6d3b\u7684\u6a21\u677f",level:2},{value:"\u8f7b\u677e\u5b9e\u73b0\u5927\u89c4\u6a21\u8c03\u5ea6",id:"\u8f7b\u677e\u5b9e\u73b0\u5927\u89c4\u6a21\u8c03\u5ea6",level:2},{value:"\u4e30\u5bcc\u7684 API \u63a5\u53e3",id:"\u4e30\u5bcc\u7684-api-\u63a5\u53e3",level:2},{value:"\u5f3a\u5927\u7684\u53ef\u89c2\u6d4b\u6027",id:"\u5f3a\u5927\u7684\u53ef\u89c2\u6d4b\u6027",level:2},{value:"\u901a\u77e5\u7cfb\u7edf",id:"\u901a\u77e5\u7cfb\u7edf",level:2},{value:"References",id:"references",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u81ea\u52a8\u5316",children:"\u81ea\u52a8\u5316"})}),"\n",(0,r.jsxs)(n.p,{children:["coScene \u7684\u5de5\u4f5c\u6d41\u662f\u4e00\u4e2a\u57fa\u4e8e\u4efb\u52a1\u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\uff0c\u4f5c\u4e3a\u5e73\u53f0\u4e09\u5927\u6838\u5fc3\u5f15\u64ce\u7684\u4e00\u90e8\u5206\uff0c\u7075\u6d3b\u800c\u5f3a\u5927\u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\u8ba9\u60a8\u5b58\u50a8\u5728\u5e73\u53f0\u4e0a\u7684\u6570\u636e\u6709\u4e86\u66f4\u591a\u7684\u53ef\u80fd\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\n\u5de5\u4f5c\u6d41\u7684\u57fa\u672c\u7279\u70b9\uff0c\u5173\u4e8e\u5de5\u4f5c\u6d41\u7684\u5177\u4f53\u7528\u6cd5\u548c\u7ec4\u6210\u90e8\u5206\uff0c\n",(0,r.jsx)(n.a,{href:"/zh/docs/workflow/action/learn-coscene-action",children:"\u8bf7\u53c2\u770b\u64cd\u4f5c\u6307\u5357\u4e2d\u7684\u5de5\u4f5c\u6d41\u90e8\u5206"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u548c\u6570\u636e\u5f15\u64ce\u65e0\u7f1d\u7ed3\u5408",children:"\u548c\u6570\u636e\u5f15\u64ce\u65e0\u7f1d\u7ed3\u5408"}),"\n",(0,r.jsx)(n.p,{children:"AI \u65f6\u4ee3\u5927\u91cf\u7684\u6570\u636e\uff0c\u5e26\u6765\u65e0\u9650\u53ef\u80fd\u7684\u7684\u540c\u65f6\uff0c\u4e5f\u7ed9\u6211\u4eec\u5e26\u6765\u4e86\u66f4\u591a\u6570\u636e\u672c\u8eab\u548c\u6570\u636e\u5e94\u7528\u7684\u6311\u6218\u3002\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u8fc7\u7a0b\u4e2d\uff0cAI \u5de5\u7a0b\u5e08\u4eec\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6e05\u6d17\u3001\u9884\u5904\u7406\u3001\u8bad\u7ec3\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u7b49\u4e00\u7cfb\u5217\u7684\u5de5\u4f5c\uff0c\u8fd9\u4e9b\u5de5\u4f5c\u9700\u8981\u5927\u91cf\u7684\u4eba\u529b\u548c\u65f6\u95f4\uff0c\u800c\u4e14\u5f80\u5f80\u662f\u91cd\u590d\u7684\u3002\n\u6839\u636e IBM \u7684\u7814\u7a76\uff0cAI \u5de5\u7a0b\u5e08\u6bcf\u5929\u82b1\u8d39 80% \u7684\u65f6\u95f4\u5728\u6570\u636e\u7684\u6e05\u6d17\u548c\u9884\u5904\u7406\u4e0a\uff0c\u800c\u4e0d\u662f\u5728 AI \u6a21\u578b\u7684\u8bad\u7ec3\u4e0a\u3002\u8fd9\u4e2a\u73b0\u8c61\u5728\u6ca1\u6709\u5b8c\u5584\u7684\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u7684\u516c\u53f8\u4e2d\u66f4\u52a0\u660e\u663e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"coScene \u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\u4f9d\u6258\u4e8e\u523b\u884c\u7684\u6570\u636e\u5f15\u64ce\uff0c\u7528\u6237\u4e0d\u518d\u9700\u8981\u4ece\u5934\u5f00\u59cb\u6784\u5efa\u6570\u636e\u5904\u7406\u7684\u6d41\u7a0b\uff0c\u53ea\u9700\u8981\u5728\u5e73\u53f0\u4e0a\u6784\u5efa\u597d\u6570\u636e\u5904\u7406\u7684\u6d41\u7a0b\uff0c\u7136\u540e\u5728\u5de5\u4f5c\u6d41\u4e2d\u8c03\u7528\u5373\u53ef\u3002\u8fd9\u6837\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u66f4\u591a\u7684\u7cbe\u529b\u653e\u5728 AI \u6a21\u578b\u7684\u8bad\u7ec3\u4e0a\uff0c\u800c\u4e0d\u662f\u5728\u6570\u636e\u7684\u6e05\u6d17\u548c\u9884\u5904\u7406\u4e0a\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u5728 coScene \u7684\u6570\u636e\u5f15\u64ce\u4e0a\u81ea\u7531\u7684\u641c\u7d22\uff0c\u8fc7\u6ee4\uff0c\u6574\u7406\uff0c\u6c89\u6dc0\u6570\u636e\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u6570\u636e\u7684\u641c\u7d22\u6807\u51c6\u4f5c\u4e3a\u5de5\u4f5c\u6d41\u7684\u8f93\u5165\uff0c\u8fd9\u6837\uff0c\u5de5\u4f5c\u6d41\u5c31\u53ef\u4ee5\u6839\u636e\u7528\u6237\u7684\u641c\u7d22\u6807\u51c6\uff0c\u81ea\u52a8\u7684\u4ece\u5e73\u53f0\u7684\u6570\u636e\u5f15\u64ce\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u7136\u540e\u8fdb\u884c\u540e\u7eed\u7684\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7075\u6d3b\u7684\u6a21\u677f",children:"\u7075\u6d3b\u7684\u6a21\u677f"}),"\n",(0,r.jsx)(n.p,{children:"coScene \u7684\u5de5\u4f5c\u6d41\u7cfb\u7edf\u63d0\u4f9b\u4e30\u5bcc\u7684\u6a21\u677f\u548c\u7075\u6d3b\u7684\u81ea\u5b9a\u4e49 DSL\uff0c\u5373\u4f7f\u662f\u6ca1\u6709\u4e91\u539f\u751f\u76f8\u5173\u7ecf\u9a8c\u7684\u5de5\u7a0b\u5e08\uff0c\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u5728\u5e73\u53f0\u7684\u5de5\u4f5c\u6d41\u7684\u6a21\u677f\u4e0a\u8fdb\u884c\u4fee\u6539\u548c\u5b9a\u5236\uff0c\u5feb\u901f\u7684\u6784\u5efa\u51fa\u81ea\u5df1\u7684\u5de5\u4f5c\u6d41\u3002"}),"\n",(0,r.jsx)(n.p,{children:"DSL \u91c7\u7528 Yaml \u7684\u5b9a\u4e49\u65b9\u5f0f\uff0c\u517c\u5bb9\u81ea\u5b9a\u4e49\u7684 Docker Image \u8f93\u5165\u548c\u76f4\u63a5\u7f16\u5199\u811a\u672c\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5c06\u81ea\u5df1\u7684\u5de5\u4f5c\u6d41\u8f6c\u6362\u4e3a\u523b\u884c\u7684\u5de5\u4f5c\u6d41\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8f7b\u677e\u5b9e\u73b0\u5927\u89c4\u6a21\u8c03\u5ea6",children:"\u8f7b\u677e\u5b9e\u73b0\u5927\u89c4\u6a21\u8c03\u5ea6"}),"\n",(0,r.jsx)(n.p,{children:"coScene \u5168\u9762\u62e5\u62b1\u4e91\u539f\u751f\uff0c\u5145\u5206\u5229\u7528\u5728\u4e91\u7aef\u7075\u6d3b\u8c03\u5ea6\uff0c\u6309\u9700\u6269\u5bb9\u7684\u7279\u70b9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u9ad8\u6548\u3001\u7cbe\u51c6\uff0c\u4e0d\u6d6a\u8d39\u7684\u5927\u89c4\u6a21\u8c03\u5ea6\u80fd\u529b\u3002\u5982\u679c\u60a8\u9009\u7528\u4e86\u523b\u884c\u65f6\u7a7a\u7684 SaaS \u4ea7\u54c1\uff0c\u5e73\u53f0\u4f1a\u6839\u636e\u60a8\u6240\u5728\u4ed8\u8d39\u7b49\u7ea7\uff0c\n\u81ea\u52a8\u8c03\u7528\u5339\u914d\u7684\u8ba1\u7b97\u8d44\u6e90\u3002\u5982\u679c\u60a8\u9009\u7528\u4e86\u523b\u884c\u7684\u79c1\u6709\u5316\u90e8\u7f72\u4ea7\u54c1\u4ea7\u54c1\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u4efb\u610f\u591a\u7684\u8ba1\u7b97\u8282\u70b9\u52a0\u5165\u523b\u884c\u7f51\u7edc\uff0c\u5e76\u5728\u9700\u8981\u65f6\u5c06\u8ba1\u7b97\u4efb\u52a1\u8c03\u5ea6\u5230\u8fd9\u4e9b\u8282\u70b9\u4e0a\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e30\u5bcc\u7684-api-\u63a5\u53e3",children:"\u4e30\u5bcc\u7684 API \u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:"coScene \u63d0\u4f9b\u4e30\u5bcc\u7684 API \u63a5\u53e3\u6765\u5e2e\u52a9\u60a8\u6784\u5efa\u81ea\u52a8\u5316\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 API \u6765\u521b\u5efa\u5de5\u4f5c\u6d41\uff0c\u542f\u52a8\u5de5\u4f5c\u6d41\uff0c\u83b7\u53d6\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u72b6\u6001\uff0c\u83b7\u53d6\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u65e5\u5fd7\uff0c\u83b7\u53d6\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u7ed3\u679c\u7b49\u3002\n\u901a\u8fc7\u4f7f\u7528 API\uff0c\u60a8\u53ef\u4ee5\u5c06\u523b\u884c\u7684\u5de5\u4f5c\u6d41\u4f5c\u4e3a\u60a8\u5df2\u6709 CI/CD \u7b49\u5185\u90e8\u6d41\u7a0b\u7684\u4e00\u4e2a\u73af\u8282\u3002\u60f3\u5728\u4ee3\u7801\u5408\u5e76\u524d\u8dd1\u4e00\u6b21\u5927\u89c4\u6a21\u7684\u56de\u5f52\u6d4b\u8bd5\uff1f\u60f3\u4f7f\u7528\u5b9a\u65f6\u4efb\u52a1\u5c06\u6bcf\u5929\u65b0\u4e0a\u4f20\u7684\u6570\u636e\u81ea\u52a8\u53d1\u7ed9\u6807\u6ce8\u516c\u53f8\uff1f\n\u6ca1\u95ee\u9898\uff01"}),"\n",(0,r.jsx)(n.p,{children:"\u5173\u4e8e API \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u770b\u6211\u4eec\u7684 [API \u6587\u6863]"}),"\n",(0,r.jsx)(n.h2,{id:"\u5f3a\u5927\u7684\u53ef\u89c2\u6d4b\u6027",children:"\u5f3a\u5927\u7684\u53ef\u89c2\u6d4b\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u523b\u884c\u65f6\u7a7a\u96c6\u6210\u4e86\u60a8\u65e5\u5e38\u4f7f\u7528\u5de5\u4f5c\u6d41\u7cfb\u7edf\u6240\u9700\u8981\u5173\u6ce8\u7684\u6240\u6709\u72b6\u6001\u548c Metrics\uff0c\u60a8\u53ef\u4ee5\u5728\u523b\u884c\u7684\u7f51\u9875\u4e0a\u65b9\u4fbf\u7684\u89c2\u5bdf\u5230\u60a8\u7684\u5de5\u4f5c\u6d41\u7684\u6267\u884c\u72b6\u6001\u3001\u6267\u884c\u7ed3\u679c\u3001\u65e5\u5fd7\u3001\u6570\u636e\u6765\u6e90\u3001\u6267\u884c\u65f6\u95f4\u3001\u8ba1\u7b97\u8d44\u6e90\n\u7b49\u4e00\u7cfb\u5217\u7528\u6237\u5173\u5fc3\u7684\u6307\u6807\u548c\u6570\u636e\u3002\u8fd9\u4e9b\u4fe1\u606f\u540c\u6837\u4f1a\u5728\u523b\u884c\u7684 API \u4e2d\u8fd4\u56de\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 API \u6765\u83b7\u53d6\u8fd9\u4e9b\u4fe1\u606f\uff0c\u4ece\u800c\u5c06\u8fd9\u4e9b\u4fe1\u606f\u96c6\u6210\u5230\u60a8\u7684\u81ea\u52a8\u5316\u6d41\u7a0b\u4e2d\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u77e5\u7cfb\u7edf",children:"\u901a\u77e5\u7cfb\u7edf"}),"\n",(0,r.jsx)(n.p,{children:"\u957f\u65f6\u95f4\u7684\u5de5\u4f5c\u6d41\u6267\u884c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5f02\u5e38\uff0ccoScene \u63d0\u4f9b\u4e86\u901a\u77e5\u7cfb\u7edf\u6765\u5e2e\u52a9\u60a8\u53ca\u65f6\u7684\u53d1\u73b0\u5f02\u5e38\u5e76\u8fdb\u884c\u5904\u7406\u3002\u60a8\u53ef\u4ee5\u5728\u5e73\u53f0\u7684\u7f51\u9875\u4e0a\u65b9\u4fbf\u7684\u914d\u7f6e\u901a\u77e5\u89c4\u5219\uff0c\u5f53\u5de5\u4f5c\u6d41\u6267\u884c\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u5e73\u53f0\u4f1a\u81ea\u52a8\u901a\u8fc7\u914d\u7f6e\u7684\u6e20\u9053\u901a\u77e5\u7528\u6237\u5173\u4e8e\u5de5\u4f5c\u6d41\u7684\u72b6\u6001\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u77e5\u7cfb\u7edf\u540c\u65f6\u4e5f\u9002\u7528\u4e8e\u5de5\u4f5c\u6d41",(0,r.jsx)(n.strong,{children:"\u6210\u529f\u8fd0\u884c"}),"\u3001",(0,r.jsx)(n.strong,{children:"\u8d85\u65f6"}),"\uff0c",(0,r.jsx)(n.strong,{children:"\u8d44\u6e90"}),"\u53d7\u9650\u7b49\u4e8b\u4ef6\u3002\u5173\u4e8e\u5de5\u4f5c\u6d41\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u4e8b\u4ef6\uff0c\u8bf7\u53c2\u9605[\u5de5\u4f5c\u6d41\u76f8\u5173 API \u8bf4\u660e]\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.wsj.com/articles/data-challenges-are-halting-ai-projects-ibm-executive-says-11559035800",children:"https://www.wsj.com/articles/data-challenges-are-halting-ai-projects-ibm-executive-says-11559035800"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},73331:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var c=s(58101);const r={},o=c.createContext(r);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);