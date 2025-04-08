"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[2804],{353:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/add-rule-group-ae840e9d3e6b134b2c9475c911fabd64.png"},9307:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/data-collection-2-450d4c5dff7c28811e85ace2b976e627.png"},10563:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/event-deduplication-8b50e38ca9ac9105be7be819fe34adce.png"},12855:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/data-diagnosis-edc0a761ad8ef86d033fde915b868ecc.png"},30976:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/data-collection-1-7549f69b607e69e4a7426dd07d26291f.png"},35559:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"use-case/data-diagnosis/add-rule","title":"\u6dfb\u52a0\u89c4\u5219","description":"\u5728\u6570\u91c7&\u8bca\u65ad\u89c4\u5219\u9875\u9762\uff0c\u53ef\u6dfb\u52a0\u89c4\u5219\uff0c\u5b9e\u73b0\u9879\u76ee\u8bbe\u5907\u6570\u636e\u7684\u81ea\u52a8\u76d1\u542c\u4e0e\u91c7\u96c6\u3002","source":"@site/docs/use-case/data-diagnosis/3-add-rule.md","sourceDirName":"use-case/data-diagnosis","slug":"/use-case/data-diagnosis/add-rule","permalink":"/zh/docs/use-case/data-diagnosis/add-rule","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1743408693000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u5b9e\u73b0\u4f60\u7684\u6570\u636e\u91c7\u96c6\u4e0e\u8bca\u65ad","permalink":"/zh/docs/use-case/data-diagnosis/get-started"},"next":{"title":"\u7ba1\u7406\u89c4\u5219\u7ec4","permalink":"/zh/docs/use-case/data-diagnosis/manage-rule-group"}}');var i=n(25105),c=n(73331);const l={sidebar_position:3},r="\u6dfb\u52a0\u89c4\u5219",t={},h=[{value:"\u6743\u9650\u8bf4\u660e",id:"\u6743\u9650\u8bf4\u660e",level:2},{value:"\u7279\u5b9a\u6570\u636e\u683c\u5f0f",id:"\u7279\u5b9a\u6570\u636e\u683c\u5f0f",level:2},{value:"\u89c4\u5219\u7ec4",id:"rule-group",level:2},{value:"1. \u6dfb\u52a0\u89c4\u5219\u7ec4",id:"1-\u6dfb\u52a0\u89c4\u5219\u7ec4",level:3},{value:"2. \u89c4\u5219\u7ec4\u7684\u542f\u7528\u4e0e\u5173\u95ed",id:"2-\u89c4\u5219\u7ec4\u7684\u542f\u7528\u4e0e\u5173\u95ed",level:3},{value:"3. \u89c4\u5219\u7ec4\u7ba1\u7406",id:"3-\u89c4\u5219\u7ec4\u7ba1\u7406",level:3},{value:"\u89c4\u5219\u521b\u5efa\u4e0e\u914d\u7f6e",id:"\u89c4\u5219\u521b\u5efa\u4e0e\u914d\u7f6e",level:2},{value:"\u6dfb\u52a0\u89c4\u5219",id:"\u6dfb\u52a0\u89c4\u5219-1",level:3},{value:"\u8bbe\u5907\u4e8b\u4ef6\u76d1\u542c",id:"\u8bbe\u5907\u4e8b\u4ef6\u76d1\u542c",level:3},{value:"1. \u5173\u6ce8\u7684\u8bdd\u9898",id:"1-\u5173\u6ce8\u7684\u8bdd\u9898",level:4},{value:"3.2 \u5339\u914d\u4e8b\u4ef6\u7801\u8868",id:"32-\u5339\u914d\u4e8b\u4ef6\u7801\u8868",level:4},{value:"3.3 \u4e8b\u4ef6\u5339\u914d\u6761\u4ef6",id:"33-\u4e8b\u4ef6\u5339\u914d\u6761\u4ef6",level:4},{value:"3.4 \u4e8b\u4ef6\u53bb\u91cd\u65f6\u957f",id:"34-\u4e8b\u4ef6\u53bb\u91cd\u65f6\u957f",level:4},{value:"1. \u91c7\u96c6\u6570\u636e",id:"1-\u91c7\u96c6\u6570\u636e",level:4},{value:"3.2 \u8bca\u65ad\u6570\u636e",id:"32-\u8bca\u65ad\u6570\u636e",level:4},{value:"\u4ee3\u7801\u53d8\u91cf\u7684\u4f7f\u7528",id:"\u4ee3\u7801\u53d8\u91cf\u7684\u4f7f\u7528",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"\u6dfb\u52a0\u89c4\u5219",children:"\u6dfb\u52a0\u89c4\u5219"})}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u6570\u91c7&\u8bca\u65ad\u89c4\u5219\u9875\u9762\uff0c\u53ef\u6dfb\u52a0\u89c4\u5219\uff0c\u5b9e\u73b0\u9879\u76ee\u8bbe\u5907\u6570\u636e\u7684\u81ea\u52a8\u76d1\u542c\u4e0e\u91c7\u96c6\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"\u6743\u9650\u8bf4\u660e",children:"\u6743\u9650\u8bf4\u660e"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["\u53ea\u6709",(0,i.jsx)(s.strong,{children:"\u9879\u76ee\u7ba1\u7406\u5458"}),"\u548c",(0,i.jsx)(s.strong,{children:"\u7ec4\u7ec7\u7ba1\u7406\u5458"}),"\u6709\u6743\u6dfb\u52a0\u548c\u7f16\u8f91\u89c4\u5219\uff0c\u5176\u4ed6\u6743\u9650\u89d2\u8272\u4ec5\u80fd\u67e5\u770b\u89c4\u5219\u5185\u5bb9"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u7279\u5b9a\u6570\u636e\u683c\u5f0f",children:"\u7279\u5b9a\u6570\u636e\u683c\u5f0f"}),"\n",(0,i.jsx)(s.p,{children:"\u5e73\u53f0\u89c4\u5219\u4ec5\u5bf9\u7279\u5b9a\u683c\u5f0f\u7684\u6570\u636e\u751f\u6548\uff0c\u8fd9\u7c7b\u6570\u636e\u9700\u5305\u542b\u6d88\u606f\u3001\u65f6\u95f4\u6233\u3001\u4e3b\u9898\u3001\u6d88\u606f\u7c7b\u578b\uff0c\u5c5e\u4e8e\u6d41\u6570\u636e\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u76ee\u524d\u652f\u6301\u7684\u65e5\u5fd7\u6587\u672c\u6587\u4ef6\u65f6\u95f4\u6233\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\u65f6\u95f4\u6233\u7c7b\u578b"}),(0,i.jsx)(s.th,{children:"\u65f6\u95f4\u6233\u683c\u5f0f"}),(0,i.jsx)(s.th,{children:"\u793a\u4f8b"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"\u5e38\u89c4\u6587\u4ef6\u4e2d\u7684\u65f6\u95f4\u6233"}),(0,i.jsx)(s.td,{children:"%m%d %H:%M:%S.%f"}),(0,i.jsx)(s.td,{children:"0212 12:12:12.548513"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"%b %d %H:%M:%S"}),(0,i.jsx)(s.td,{children:"Dec 12 12:12:12"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"%Y-%m-%d %H:%M:%S.%f"}),(0,i.jsx)(s.td,{children:"2023-02-12 12:12:12.548513"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"%H:%M:%S.%f"}),(0,i.jsx)(s.td,{children:"12:12:12.548513"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["\u7279\u6b8a*\u6587\u4ef6\u540d / \u6587\u4ef6\u7b2c\u4e00\u884c\u4e2d\u7684\u65f6\u95f4\u6233",(0,i.jsx)(s.em,{children:"\uff08\u7528\u4e8e\u6587\u4ef6\u4e2d\u65f6\u95f4\u6233\u672a\u5168\u90e8\u5305\u542b\u5e74\u3001\u6708\u3001\u65e5\u3001\u65f6\u3001\u5206\u3001\u79d2\u7684\u60c5\u51b5\uff09"})]}),(0,i.jsx)(s.td,{children:"%Y-%m-%d %H:%M:%S"}),(0,i.jsx)(s.td,{children:"2023-02-12 12:12:12"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"%Y/%m/%d %H:%M:%S"}),(0,i.jsx)(s.td,{children:"2023/02/12 12:12:12"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"%Y%m%d%H"}),(0,i.jsx)(s.td,{children:"2023021212"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"\u82e5\u6709\u5176\u4ed6\u683c\u5f0f\u7684\u65f6\u95f4\u6233\u9700\u8981\u652f\u6301\u7684\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002"}),"\n",(0,i.jsx)(s.h2,{id:"rule-group",children:"\u89c4\u5219\u7ec4"}),"\n",(0,i.jsx)(s.p,{children:"\u89c4\u5219\u7ec4\u662f\u89c4\u5219\u7684\u96c6\u5408\uff0c\u7528\u4e8e\u5bf9\u89c4\u5219\u8fdb\u884c\u5206\u7c7b\u7ba1\u7406\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"1-\u6dfb\u52a0\u89c4\u5219\u7ec4",children:"1. \u6dfb\u52a0\u89c4\u5219\u7ec4"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u9879\u76ee\u4e2d\uff0c\u8fdb\u5165\u300c\u6570\u91c7&\u8bca\u65ad\u89c4\u5219\u300d\u5206\u9875\uff0c\u70b9\u51fb\u3010\u6dfb\u52a0\u89c4\u5219\u7ec4\u3011\uff0c\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u53ef\u5728\u8be5\u89c4\u5219\u7ec4\u5185\u6dfb\u52a0\u5177\u4f53\u89c4\u5219\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u6dfb\u52a0\u89c4\u5219\u7ec4",src:n(353).A+"",width:"3024",height:"1644"})}),"\n",(0,i.jsx)(s.h3,{id:"2-\u89c4\u5219\u7ec4\u7684\u542f\u7528\u4e0e\u5173\u95ed",children:"2. \u89c4\u5219\u7ec4\u7684\u542f\u7528\u4e0e\u5173\u95ed"}),"\n",(0,i.jsx)(s.p,{children:"\u65b0\u6dfb\u52a0\u7684\u89c4\u5219\u7ec4\u9ed8\u8ba4\u5904\u4e8e\u300c\u5173\u95ed\u72b6\u6001\u300d\uff0c\u82e5\u8981\u8ba9\u9879\u76ee\u8bbe\u5907\u4f7f\u7528\u5176\u4e2d\u7684\u89c4\u5219\u8fdb\u884c\u6570\u636e\u76d1\u542c\uff0c\u9700\u624b\u52a8\u5f00\u542f\uff1b"}),"\n",(0,i.jsx)(s.p,{children:"\u82e5\u6682\u65f6\u4e0d\u9700\u8981\u4f7f\u7528\uff0c\u4f46\u540e\u7eed\u8fd8\u4f1a\u7528\u5230\uff0c\u4e5f\u53ef\u5c06\u5176\u8bbe\u4e3a\u300c\u5173\u95ed\u72b6\u6001\u300d\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u89c4\u5219\u7ec4\u542f\u7528\u4e0e\u5173\u95ed",src:n(45182).A+"",width:"3024",height:"936"})}),"\n",(0,i.jsx)(s.h3,{id:"3-\u89c4\u5219\u7ec4\u7ba1\u7406",children:"3. \u89c4\u5219\u7ec4\u7ba1\u7406"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u66f4\u591a\u64cd\u4f5c\u4e2d\uff0c\u53ef\u8fdb\u884c\u89c4\u5219\u7ec4\u7684\u91cd\u547d\u540d\u548c\u5220\u9664\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u89c4\u5219\u7ec4\u7ba1\u7406",src:n(61947).A+"",width:"3024",height:"898"})}),"\n",(0,i.jsx)(s.h2,{id:"\u89c4\u5219\u521b\u5efa\u4e0e\u914d\u7f6e",children:"\u89c4\u5219\u521b\u5efa\u4e0e\u914d\u7f6e"}),"\n",(0,i.jsx)(s.p,{children:"\u89c4\u5219\u662f\u89c4\u5219\u7ec4\u4e2d\u7684\u5355\u4e2a\u89c4\u5219\uff0c\u7528\u4e8e\u5b9a\u4e49\u89e6\u53d1\u6570\u636e\u91c7\u96c6\u4e0e\u8bca\u65ad\u7684\u6761\u4ef6\uff0c\u4ee5\u53ca\u89e6\u53d1\u540e\u7684\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(s.h3,{id:"\u6dfb\u52a0\u89c4\u5219-1",children:"\u6dfb\u52a0\u89c4\u5219"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u89c4\u5219\u7ec4\u4e2d\uff0c\u53ef\u901a\u8fc7\u70b9\u51fb\u3010\u521b\u5efa\u7a7a\u767d\u89c4\u5219\u3011\u6216\u3010\u4ece\u89c4\u5219\u6a21\u677f\u521b\u5efa\u3011\u6765\u6dfb\u52a0\u65b0\u89c4\u5219\uff0c\u4e0b\u9762\u4e3b\u8981\u4ecb\u7ecd\u521b\u5efa\u7a7a\u767d\u89c4\u5219\u7684\u6b65\u9aa4\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u6dfb\u52a0\u89c4\u5219",src:n(77483).A+"",width:"3024",height:"1038"})}),"\n",(0,i.jsx)(s.p,{children:"\u4e3a\u89c4\u5219\u547d\u540d\uff0c\u89c4\u5219\u540d\u79f0\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u89c4\u5219\uff0c\u65b9\u4fbf\u540e\u7eed\u7ba1\u7406\u548c\u8bc6\u522b\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u4e3a\u89c4\u5219\u547d\u540d\uff0c\u89c4\u5219\u540d\u79f0\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u89c4\u5219\uff0c\u65b9\u4fbf\u540e\u7eed\u7ba1\u7406\u548c\u8bc6\u522b\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u89c4\u5219\u57fa\u7840\u4fe1\u606f",src:n(87695).A+"",width:"3024",height:"646"})}),"\n",(0,i.jsx)(s.h3,{id:"\u8bbe\u5907\u4e8b\u4ef6\u76d1\u542c",children:"\u8bbe\u5907\u4e8b\u4ef6\u76d1\u542c"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u6a21\u5757\u793a\u610f"})}),"\n",(0,i.jsxs)(s.p,{children:["\u6b64\u6a21\u5757\u662f\u5bf9\u9879\u76ee\u8bbe\u5907\u8fdb\u884c\u76d1\u63a7\uff0c\u5f53\u9884\u5148\u8bbe\u5b9a\u7684\u76d1\u542c\u76ee\u5f55\u6709\u65b0\u6587\u4ef6\u6216\u8bbe\u5907\u5b89\u88c5\u7684 ",(0,i.jsx)(s.a,{href:"https://github.com/coscene-io/coListener",children:"coListener"})," \u76d1\u542c\u8bdd\u9898\u6709\u65b0\u6d88\u606f\u5339\u914d\u65f6\uff0c\u5c06\u81ea\u52a8\u4e0a\u62a5\u4e8b\u4ef6\u5e76\u8bb0\u5f55\u5230\u5f53\u524d\u9879\u76ee\u7684\u4eea\u8868\u76d8\u4e2d\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u8bbe\u5907\u4e8b\u4ef6\u76d1\u542c",src:n(65647).A+"",width:"3024",height:"1328"})}),"\n",(0,i.jsx)(s.h4,{id:"1-\u5173\u6ce8\u7684\u8bdd\u9898",children:"1. \u5173\u6ce8\u7684\u8bdd\u9898"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u8bbe\u7f6e\u5173\u6ce8\u7684\u89e6\u53d1\u8bdd\u9898\u80fd\u7f29\u5c0f\u89c4\u5219\u5339\u914d\u8303\u56f4\uff0c\u63d0\u9ad8\u89c4\u5219\u8bca\u65ad\u7684\u6027\u80fd\u3001\u901f\u5ea6\u548c\u51c6\u786e\u5ea6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u82e5\u60f3\u76d1\u542c\u8bbe\u5907\u4e2d\u65e5\u5fd7\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u8bf7\u9009\u62e9",(0,i.jsx)(s.code,{children:"/external_log"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5176\u4ed6\u8bdd\u9898\u9009\u9879\u53ef\u5728\u7ec4\u7ec7\u7684\u6570\u91c7\u5ba2\u6237\u7aef\u914d\u7f6e\u4e2d\u8bbe\u7f6e\uff0c\u8be6\u60c5\u53ef\u53c2\u8003",(0,i.jsx)(s.a,{href:"https://coscene0.feishu.cn/wiki/S3kvw7wYmic1LxkzBPxcLExHntc?fromScene=spaceOverview",children:" 4-\u6570\u91c7\u5ba2\u6237\u7aef\u914d\u7f6e"}),"\u6587\u6863\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"32-\u5339\u914d\u4e8b\u4ef6\u7801\u8868",children:"3.2 \u5339\u914d\u4e8b\u4ef6\u7801\u8868"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5728\u4e8b\u4ef6\u7801\u8868\u4e2d\uff0c\u53ef\u5b9a\u4e49\u4e8b\u4ef6\u7684 code \u503c\u3001\u4e8b\u4ef6\u540d\u79f0\u3001\u7b49\u7ea7\u3001\u89e3\u51b3\u65b9\u6848\u7b49\u4fe1\u606f\u3002\u4e8b\u4ef6\u7801\u8868\u5fc5\u987b\u5305\u542b code \u5217\uff0c\u4f5c\u4e3a\u4e8b\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u4e0a\u4f20\u4e8b\u4ef6\u7801\u8868\uff08\u652f\u6301 JSON \u6216 CSV \u6587\u4ef6\uff09\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u89e3\u6790\uff0c\u8fd8\u652f\u6301\u9884\u89c8\u3001\u4e0b\u8f7d\u3001\u5220\u9664\u64cd\u4f5c\u3002\u82e5\u8981\u4fee\u6539\u8868\u5185\u5bb9\uff0c\u53ef\u5148\u4e0b\u8f7d\u5230\u672c\u5730\u7535\u8111\u4fee\u6539\u540e\u518d\u4e0a\u4f20\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u4e8b\u4ef6\u7801\u8868",src:n(94838).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsx)(s.h4,{id:"33-\u4e8b\u4ef6\u5339\u914d\u6761\u4ef6",children:"3.3 \u4e8b\u4ef6\u5339\u914d\u6761\u4ef6"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u6839\u636e\u8bbe\u5907\u6d88\u606f\u5b57\u6bb5\u4e0e\u67d0\u4e2a\u503c\u7684\u5339\u914d\u5173\u7cfb\u5224\u65ad\u4e8b\u4ef6\u662f\u5426\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u70b9\u51fb\u3010\u5207\u6362\u3011\u6309\u94ae\u53ef\u5728 code \u8868\u5934\u548c\u5177\u4f53\u503c\u8f93\u5165\u6846\u4e4b\u95f4\u5207\u6362\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5728\u9884\u5b9a\u4e49\u8f93\u5165\u6846\u4e2d\uff0c\u8bbe\u5b9a\u4e86\u4e8b\u4ef6\u7801\u8868\u4e2d\u7684 code \u503c\u4f5c\u4e3a\u5339\u914d\u53d8\u91cf\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u5728\u5177\u4f53\u503c\u8f93\u5165\u6846\u4e2d\uff0c\u76f4\u63a5\u8f93\u5165\u6587\u5b57\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u82e5\u8981\u68c0\u6d4b log \u6587\u4ef6\u4e2d\u662f\u5426\u6709\u5173\u952e\u8bcd error 1\uff0c\u5219\u9700\u586b\u5199\uff1amsg.message \u5305\u542b error 1\uff0c\u5e76\u4e14\u300c\u5173\u6ce8\u7684\u8bdd\u9898\u300d\u4e00\u680f\u9700\u8981\u9009\u62e9 /external_log\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u82e5\u8981\u68c0\u6d4b bag \u6587\u4ef6\u7684 /error_code \u8bdd\u9898\uff08\u6d88\u606f\u7c7b\u578b\u4e3a std_msgs/string\uff09\u4e2d\u7684 msg.data \u6d88\u606f\u5b57\u6bb5\u4e2d\u6709\u5173\u952e\u8bcd error 1\uff0c\u5219\u9700\u8981\u586b\u5199\uff1amsg.data \u5305\u542b error 1\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u591a\u884c\u903b\u8f91\u5224\u65ad\u6761\u4ef6\u4e4b\u95f4\u662f\u5e76\u4e14\u5173\u7cfb\uff0c\u9700\u540c\u65f6\u6ee1\u8db3\u624d\u751f\u6548\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u4e8b\u4ef6\u5339\u914d\u6761\u4ef6",src:n(94679).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsx)(s.h4,{id:"34-\u4e8b\u4ef6\u53bb\u91cd\u65f6\u957f",children:"3.4 \u4e8b\u4ef6\u53bb\u91cd\u65f6\u957f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u82e5\u65b0\u4e8b\u4ef6\uff08\u540c\u4e00\u4e8b\u4ef6\uff09\u5728\u4e0a\u6b21\u5408\u5e76\u4e8b\u4ef6\u540e\u7684\u8bbe\u5b9a\u65f6\u95f4\u5185\u53d1\u751f\uff0c\u5219\u4e0e\u539f\u4e8b\u4ef6\u5408\u5e76\u3002\u6bcf\u6b21\u65b0\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u90fd\u91cd\u7f6e\u65f6\u95f4\uff0c\u76f4\u5230\u8d85\u51fa\u65f6\u95f4\u7a97\u53e3\u90fd\u65e0\u65b0\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u5b8c\u6210\u5408\u5e76\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u652f\u6301\u8303\u56f4\u8bbe\u7f6e\u5728 1 \u79d2 ~ 86400 \u79d2\uff081 \u5929\uff09\u4e4b\u95f4\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u4e8b\u4ef6\u53bb\u91cd\u8bbe\u7f6e",src:n(10563).A+"",width:"3024",height:"802"})}),"\n",(0,i.jsx)(s.p,{children:"\u5f53 log \u6587\u4ef6\u4e2d\u51fa\u73b0\uff1a1001\u30011002 \u6216 1003 \u65f6\uff08\u5373\u4e8b\u4ef6\u7801\u8868\u4e2d\u7684 code \u5217\u4efb\u4e00\u884c\u503c\uff09\uff0c\u5373\u53ef\u5224\u65ad\u4e3a\u4e8b\u4ef6\u5339\u914d\u6210\u529f\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u89e6\u53d1\u64cd\u4f5c\u662f\u6307\u89c4\u5219\u6761\u4ef6\u6ee1\u8db3\u540e\u89e6\u53d1\u540e\u7684\u64cd\u4f5c\uff0c\u76ee\u524d\u652f\u6301\u4e86\u91c7\u96c6\u6570\u636e\u3001\u8bca\u65ad\u6570\u636e\u4e24\u4e2a\u6a21\u5757\u3002"}),"\n",(0,i.jsx)(s.h4,{id:"1-\u91c7\u96c6\u6570\u636e",children:"1. \u91c7\u96c6\u6570\u636e"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u89c4\u5219\u6761\u4ef6\u5728\u8bbe\u5907\u7aef\u89e6\u53d1\u540e\uff0c\u4f1a\u5728\u672c\u9879\u76ee\u4e2d\u81ea\u52a8\u521b\u5efa\u4e00\u6761\u91c7\u96c6\u4efb\u52a1\uff0c\u91c7\u96c6\u5bf9\u5e94\u65f6\u95f4\u7684\u8bbe\u5907\u6570\u636e\uff0c\u91c7\u96c6\u5b8c\u6210\u540e\u5728\u8bb0\u5f55\u4e2d\u751f\u6210\u4e00\u6761\u8bb0\u5f55\uff0c\u5305\u542b\u89e6\u53d1\u6761\u4ef6\u6ee1\u8db3\u65f6\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u91c7\u96c6\u6570\u636e\u914d\u7f6e1",src:n(30976).A+"",width:"3024",height:"944"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u91c7\u96c6\u6570\u636e\u914d\u7f6e2",src:n(9307).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u53ef\u4ee5\u8bbe\u5b9a\u4e0a\u4f20\u6587\u4ef6\u7684\u65f6\u95f4\u8303\u56f4\u3001\u8bb0\u5f55\u540d\u79f0\u3001\u8bb0\u5f55\u63cf\u8ff0\u3001\u8bb0\u5f55\u6807\u7b7e\u3001\u91c7\u96c6\u9650\u5236\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u4e0a\u4f20\u6587\u4ef6\u6307\u4e0a\u4f20\u6570\u91c7\u76ee\u5f55\u4e2d\u7b26\u5408\u65f6\u95f4\u8303\u56f4\u7684\u6240\u6709\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u8bb0\u5f55\u540d\u79f0\u3001\u8bb0\u5f55\u63cf\u8ff0\u652f\u6301\u4f7f\u7528\u4ee3\u7801\u53d8\u91cf\uff08\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"{scope.\u8868\u5934\u540d\u79f0}"})," \u7684\u683c\u5f0f\uff09\u4e0e\u6b63\u6587\u7a7f\u63d2\u4e66\u5199\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u91c7\u96c6\u6570\u636e\u914d\u7f6e3",src:n(95090).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u5728\u66f4\u591a\u8bbe\u7f6e\u4e2d\uff0c\u53ef\u5229\u7528",(0,i.jsx)(s.a,{href:"https://www.malikbrowne.com/blog/a-beginners-guide-glob-patterns/",children:"\u6587\u4ef6\u901a\u914d\u7b26"}),"\u8fdb\u884c\u4e8c\u6b21\u7b5b\u9009\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u82e5\u6709\u5177\u4f53\u7684\u9644\u52a0\u6587\u4ef6\uff0c\u5982\u5730\u56fe\u6587\u4ef6\uff0c\u53ef\u5728\u6b64\u5904\u5199\u660e\u5177\u4f53\u6587\u4ef6\u6240\u5728\u5730\u5740\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u91c7\u96c6\u6570\u636e\u914d\u7f6e4",src:n(67597).A+"",width:"3024",height:"1288"})}),"\n",(0,i.jsx)(s.h4,{id:"32-\u8bca\u65ad\u6570\u636e",children:"3.2 \u8bca\u65ad\u6570\u636e"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u5bf9\u5df2\u7ecf\u91c7\u96c6\u5230\u5e73\u53f0\u4e2d\u7684\u8bb0\u5f55\u6267\u884c\u6570\u636e\u8bca\u65ad\u52a8\u4f5c\uff0c\u7b26\u5408\u89e6\u53d1\u6761\u4ef6\u7684\u65f6\u95f4\u70b9\u5c06\u81ea\u52a8\u521b\u5efa\u4e00\u523b\uff0c\u53ef\u5728\u91c7\u96c6\u540e\u7684\u8bb0\u5f55\u4e2d\u67e5\u770b\u76f8\u5173\u4e00\u523b\u3002"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u8bca\u65ad\u6570\u636e\u914d\u7f6e",src:n(12855).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"\u652f\u6301\u8bbe\u5b9a\u4e00\u523b\u540d\u79f0\u3001\u4e00\u523b\u63cf\u8ff0\u3001\u4e00\u523b\u7684\u5c5e\u6027\u503c\uff0c\u4ee5\u53ca\u662f\u5426\u4e3a\u8bca\u65ad\u51fa\u7684\u4e00\u523b\u521b\u5efa\u5173\u8054\u7684\u901a\u7528\u4efb\u52a1\u8fdb\u884c\u6d41\u8f6c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["\u4e00\u523b\u540d\u79f0\u3001\u4e00\u523b\u63cf\u8ff0\u3001\u4e00\u523b\u7684\u5c5e\u6027\u503c\u652f\u6301\u4f7f\u7528\u4ee3\u7801\u53d8\u91cf\uff08\u4f7f\u7528 ",(0,i.jsx)(s.code,{children:"{scope.\u8868\u5934\u540d\u79f0}"})," \u7684\u683c\u5f0f\uff09\u4e0e\u6b63\u6587\u7a7f\u63d2\u4e66\u5199\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u8bca\u65ad\u6570\u636e\u8bbe\u7f6e",src:n(38424).A+"",width:"3024",height:"1646"})}),"\n",(0,i.jsx)(s.h3,{id:"\u4ee3\u7801\u53d8\u91cf\u7684\u4f7f\u7528",children:"\u4ee3\u7801\u53d8\u91cf\u7684\u4f7f\u7528"}),"\n",(0,i.jsx)(s.p,{children:"\u5728\u89c4\u5219\u7684\u89e6\u53d1\u64cd\u4f5c\u4e2d\u90e8\u5206\u6587\u672c\u8f93\u5165\u6846\u662f\u53ef\u4ee5\u4f7f\u7528\u4ee3\u7801\u53d8\u91cf\u6765\u83b7\u53d6\u89e6\u53d1\u65f6\u7684\u76f8\u5173\u6570\u636e\u503c\uff0c\u4e66\u5199\u89c4\u8303\u53ef\u53c2\u8003\u4ee5\u4e0b\u8868\u683c\uff1a"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\u542b\u4e49"}),(0,i.jsx)(s.th,{children:"\u4e66\u5199\u89c4\u8303"}),(0,i.jsx)(s.th,{children:"\u5199\u540e\u7ffb\u8bd1\u51fa\u6765\u7684\u6548\u679c\u793a\u4f8b"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"\u8c03\u7528\u5df2\u4e0a\u4f20\u81f3\u89c4\u5219\u4e2d\u7684\u4e8b\u4ef6\u7801\u8868\u7684 code \u503c"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"{scope.code}"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"ERROR-CODE-001"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"\u8c03\u7528\u5df2\u4e0a\u4f20\u81f3\u89c4\u5219\u4e2d\u7684\u4e8b\u4ef6\u7801\u8868\u7684\u5176\u4ed6\u5217\u503c"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"{scope.solution}"}),"\u6ce8\uff1a\u8868\u5934\u540d\u79f0\u9700\u4e3a\u82f1\u6587\uff0c\u4e14\u65e0\u7a7a\u683c"]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"\u5c1d\u8bd5\u91cd\u542f\u8bbe\u5907"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"{msg}"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:'{"timestamp": {"sec": 123456, "nsec": 789}, "message": "demo log message", "file": "demo.log", "level": 2}'})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"{topic}"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"/external_log"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"{ts}"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1738915780.123"})})]})]})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:"\u5b8c\u6210\u89c4\u5219\u5185\u5bb9\u586b\u5199\u540e\uff0c\u70b9\u51fb\u4fdd\u5b58\u6309\u94ae\u5373\u53ef\u6dfb\u52a0\u9879\u76ee\u89c4\u5219\uff0c\u5b9e\u73b0\u9879\u76ee\u8bbe\u5907\u6570\u636e\u7684\u81ea\u52a8\u76d1\u542c\u4e0e\u91c7\u96c6\u3002"}),"\n",(0,i.jsx)(s.p,{children:"\u5982\u679c\u5728\u64cd\u4f5c\u8fc7\u7a0b\u4e2d\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u968f\u65f6\u8054\u7cfb\u6211\u4eec\u83b7\u53d6\u5e2e\u52a9\u3002"})]})}function j(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},38424:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/diagnosis-settings-9c499cf93d125037814bc8bddb6e2ca3.png"},45182:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/rule-group-toggle-944be454ca59feab365270e42685eb18.png"},61947:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/rule-group-management-bae58c90f720f1815adbb12d72020f88.png"},65647:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/device-event-monitoring-e80d9d77c15e2799d89d450251b84c6d.png"},67597:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/data-collection-4-764e97a9883b7ad5b76184b48148e1f4.png"},73331:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var d=n(58101);const i={},c=d.createContext(i);function l(e){const s=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(c.Provider,{value:s},e.children)}},77483:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/add-rule-4dc7b773e12fb5260a00c1f324641ce2.png"},87695:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/rule-basic-info-35f338465fe5a16d40377c1a0c5c0362.png"},94679:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/event-match-condition-65e72477cadb1813dad35eb76c6c5ccc.png"},94838:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/event-code-table-54d5fe420b3d027bfb36ecc20698e7af.png"},95090:(e,s,n)=>{n.d(s,{A:()=>d});const d=n.p+"assets/images/data-collection-3-3c01e8b035ef0df7a407c9f3f8c302f7.png"}}]);