"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[1321],{26872:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"collaboration/record/create-record","title":"\u521b\u5efa\u8bb0\u5f55","description":"\u7b80\u4ecb","source":"@site/docs/collaboration/record/2-create-record.md","sourceDirName":"collaboration/record","slug":"/collaboration/record/create-record","permalink":"/zh/docs/collaboration/record/create-record","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1743408693000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u5feb\u901f\u4e0a\u624b\u8bb0\u5f55","permalink":"/zh/docs/collaboration/record/quick-start-record"},"next":{"title":"\u7ba1\u7406\u8bb0\u5f55","permalink":"/zh/docs/collaboration/record/manage-records"}}');var s=n(25105),i=n(73331);const d={sidebar_position:2},t="\u521b\u5efa\u8bb0\u5f55",l={},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u76f4\u63a5\u521b\u5efa\u8bb0\u5f55",id:"\u76f4\u63a5\u521b\u5efa\u8bb0\u5f55",level:2},{value:"\u70b9\u51fb\u6309\u94ae\u521b\u5efa",id:"\u70b9\u51fb\u6309\u94ae\u521b\u5efa",level:3},{value:"\u62d6\u62fd\u6587\u4ef6\u521b\u5efa",id:"\u62d6\u62fd\u6587\u4ef6\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u590d\u5236/\u79fb\u52a8\u8bb0\u5f55\u521b\u5efa",id:"\u901a\u8fc7\u590d\u5236\u79fb\u52a8\u8bb0\u5f55\u521b\u5efa",level:2},{value:"\u901a\u8fc7\u91c7\u96c6\u4efb\u52a1\u521b\u5efa\u8bb0\u5f55",id:"\u901a\u8fc7\u91c7\u96c6\u4efb\u52a1\u521b\u5efa\u8bb0\u5f55",level:2},{value:"\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",id:"\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",level:3},{value:"\u89c4\u5219\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",id:"\u89c4\u5219\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",level:3},{value:"\u901a\u8fc7 coCLI \u521b\u5efa\u8bb0\u5f55",id:"\u901a\u8fc7-cocli-\u521b\u5efa\u8bb0\u5f55",level:2},{value:"\u4e86\u89e3\u66f4\u591a",id:"\u4e86\u89e3\u66f4\u591a",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"\u521b\u5efa\u8bb0\u5f55",children:"\u521b\u5efa\u8bb0\u5f55"})}),"\n",(0,s.jsx)(r.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"\u4ec5\u9879\u76ee\u6210\u5458\u53ca\u4ee5\u4e0a\u6743\u9650\u89d2\u8272\u53ef\u521b\u5efa\u8bb0\u5f55"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"\u8bb0\u5f55\u662f\u63cf\u8ff0\u76f8\u4f3c\u573a\u666f\u7684\u6587\u4ef6\u96c6\u5408\u3002\u5f53\u9700\u67e5\u770b\u6216\u5904\u7406\u8bbe\u5907\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u4ea7\u751f\u7684\u6570\u636e\u65f6\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u4e00\u6761\u8bb0\u5f55\uff0c\u5e76\u5c06\u8bbe\u5907\u6570\u636e\u4e0a\u4f20\u81f3\u8bb0\u5f55\u4e2d\u3002\u4ee5\u4e0b\u662f 4 \u79cd\u521b\u5efa\u8bb0\u5f55\u7684\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u76f4\u63a5\u521b\u5efa"}),"\n",(0,s.jsx)(r.li,{children:"\u901a\u8fc7\u590d\u5236/\u79fb\u52a8\u8bb0\u5f55\u521b\u5efa"}),"\n",(0,s.jsx)(r.li,{children:"\u91c7\u96c6\u4efb\u52a1\u521b\u5efa"}),"\n",(0,s.jsx)(r.li,{children:"\u547d\u4ee4\u884c\u5de5\u5177 coCLI \u521b\u5efa"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u76f4\u63a5\u521b\u5efa\u8bb0\u5f55",children:"\u76f4\u63a5\u521b\u5efa\u8bb0\u5f55"}),"\n",(0,s.jsx)(r.p,{children:"\u53ef\u901a\u8fc7\u70b9\u51fb\u3010\u521b\u5efa\u8bb0\u5f55\u3011\u6309\u94ae\u3001\u62d6\u62fd\u6587\u4ef6\u5230\u8bb0\u5f55\u5217\u8868 2 \u79cd\u65b9\u5f0f\u76f4\u63a5\u521b\u5efa\u8bb0\u5f55\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u70b9\u51fb\u6309\u94ae\u521b\u5efa",children:"\u70b9\u51fb\u6309\u94ae\u521b\u5efa"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u9879\u76ee\u5de6\u4fa7\u8fb9\u680f\uff0c\u9009\u62e9\u300c\u8bb0\u5f55\u300d\uff0c\u70b9\u51fb\u3010\u521b\u5efa\u8bb0\u5f55\u3011\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_1",src:n(65045).A+"",width:"1438",height:"506"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u5f39\u7a97\u4e2d\u8f93\u5165\u8bb0\u5f55\u7684\u540d\u79f0\u7b49\u76f8\u5173\u4fe1\u606f\uff0c\u70b9\u51fb\u3010\u521b\u5efa\u3011\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_2",src:n(79294).A+"",width:"1436",height:"819"})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u81ea\u52a8\u8fdb\u5165\u8bb0\u5f55\u8be6\u60c5\u9875\uff0c\u70b9\u51fb\u3010\u4e0a\u4f20\u3011\u6309\u94ae\u4e0a\u4f20\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_3",src:n(31783).A+"",width:"1439",height:"763"})}),"\n",(0,s.jsx)(r.h3,{id:"\u62d6\u62fd\u6587\u4ef6\u521b\u5efa",children:"\u62d6\u62fd\u6587\u4ef6\u521b\u5efa"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u9009\u62e9\u672c\u5730\u6587\u4ef6\u540e\u5c06\u5176\u62d6\u62fd\u81f3\u8bb0\u5f55\u5217\u8868\u533a\u57df\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_4",src:n(52168).A+"",width:"1440",height:"534"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u62d6\u62fd\u677e\u624b\u540e\uff0c\u5728\u521b\u5efa\u8bb0\u5f55\u5f39\u7a97\u4e2d\u8f93\u5165\u76f8\u5173\u5185\u5bb9\uff0c\u70b9\u51fb\u3010\u521b\u5efa\u3011\u6309\u94ae\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_5",src:n(46033).A+"",width:"1437",height:"799"})}),"\n",(0,s.jsxs)(r.ol,{start:"3",children:["\n",(0,s.jsx)(r.li,{children:"\u8bb0\u5f55\u521b\u5efa\u540e\uff0c\u62d6\u62fd\u7684\u6587\u4ef6\u5c06\u81ea\u52a8\u4e0a\u4f20\u5230\u8bb0\u5f55\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_6",src:n(41274).A+"",width:"1436",height:"762"})}),"\n",(0,s.jsx)(r.h2,{id:"\u901a\u8fc7\u590d\u5236\u79fb\u52a8\u8bb0\u5f55\u521b\u5efa",children:"\u901a\u8fc7\u590d\u5236/\u79fb\u52a8\u8bb0\u5f55\u521b\u5efa"}),"\n",(0,s.jsx)(r.p,{children:"\u5c06\u8bb0\u5f55\u590d\u5236/\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u9879\u76ee\u4e2d\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u91cd\u65b0\u5206\u7c7b\u4e0e\u6574\u7406\u3002"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u8bb0\u5f55\u8be6\u60c5\u4e2d\u7684\u66f4\u591a\u64cd\u4f5c\u4e2d\uff0c\u9009\u62e9\u3010\u590d\u5236\u5230\u3011/\u3010\u79fb\u52a8\u5230\u3011\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_7",src:n(89027).A+"",width:"1300",height:"260"})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsx)(r.li,{children:"\u5728\u5f39\u7a97\u4e2d\u9009\u62e9\u8981\u590d\u5236\u5230/\u79fb\u52a8\u5230\u7684\u76ee\u6807\u9879\u76ee\uff0c\u70b9\u51fb\u3010\u786e\u5b9a\u3011\u6309\u94ae\u540e\uff0c\u5373\u53ef\u5728\u76ee\u6807\u9879\u76ee\u4e2d\u67e5\u770b\u5bf9\u5e94\u7684\u8bb0\u5f55\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"create-record_8",src:n(45156).A+"",width:"1300",height:"461"})}),"\n",(0,s.jsx)(r.h2,{id:"\u901a\u8fc7\u91c7\u96c6\u4efb\u52a1\u521b\u5efa\u8bb0\u5f55",children:"\u901a\u8fc7\u91c7\u96c6\u4efb\u52a1\u521b\u5efa\u8bb0\u5f55"}),"\n",(0,s.jsx)(r.h3,{id:"\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",children:"\u624b\u52a8\u91c7\u96c6\u4efb\u52a1\u521b\u5efa"}),"\n",(0,s.jsxs)(r.p,{children:["\u82e5\u9700\u91c7\u96c6\u8bbe\u5907\u5728\u6307\u5b9a\u65f6\u95f4\u6bb5\u5185\u7684\u6587\u4ef6\uff0c\u53ef\u624b\u52a8\u521b\u5efa\u300c\u91c7\u96c6\u4efb\u52a1\u300d\u3002\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u91c7\u96c6\u5230\u7684\u6570\u636e\u5c06\u81ea\u52a8\u4e0a\u4f20\u81f3\u8bb0\u5f55\u4e2d\u3002\u8be6\u89c1 ",(0,s.jsx)(r.a,{href:"/zh/docs/use-case/common-task",children:"\u901a\u7528\u6570\u636e\u91c7\u96c6"}),"\u3002"]}),"\n",(0,s.jsx)(r.h3,{id:"\u89c4\u5219\u91c7\u96c6\u4efb\u52a1\u521b\u5efa",children:"\u89c4\u5219\u91c7\u96c6\u4efb\u52a1\u521b\u5efa"}),"\n",(0,s.jsxs)(r.p,{children:["\u82e5\u9700\u91c7\u96c6\u8bbe\u5907\u6267\u884c\u5173\u952e\u4efb\u52a1\u6216\u53d1\u751f\u91cd\u8981\u4e8b\u4ef6\u65f6\u7684\u6570\u636e\uff0c\u53ef\u5728\u300c\u6570\u91c7&\u8bca\u65ad\u89c4\u5219\u300d\u4e2d\u6dfb\u52a0\u89c4\u5219\u3002\u5f53\u89c4\u5219\u89e6\u53d1\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u300c\u91c7\u96c6\u4efb\u52a1\u300d\uff0c\u5c06\u91c7\u96c6\u5230\u7684\u6570\u636e\u4e0a\u4f20\u81f3\u8bb0\u5f55\u4e2d\u3002\u8be6\u89c1 ",(0,s.jsx)(r.a,{href:"/zh/docs/use-case/data-diagnosis/get-started",children:"\u6570\u91c7&\u8bca\u65ad\u89c4\u5219"}),"\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"\u901a\u8fc7-cocli-\u521b\u5efa\u8bb0\u5f55",children:"\u901a\u8fc7 coCLI \u521b\u5efa\u8bb0\u5f55"}),"\n",(0,s.jsx)(r.p,{children:"\u82e5\u8981\u5c06\u672c\u5730\u6587\u4ef6\u6279\u91cf\u4e0a\u4f20\u5230\u8bb0\u5f55\u4e2d\uff0c\u53ef\u4f7f\u7528 coCLI \u5de5\u5177\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u4e86\u89e3\u66f4\u591a",children:"\u4e86\u89e3\u66f4\u591a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/zh/docs/viz/about-viz",children:"\u53ef\u89c6\u5316\u64ad\u653e\u8bb0\u5f55"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},31783:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_3-c7f993eed297ac8597cfb33554411a7c.png"},41274:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_6-66a0f55c995321ef261afdb4b8c610ec.png"},45156:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_8-dd3e264a96a806d9a7cdc73681986116.png"},46033:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_5-748340f244322543a55dd1102bc7f215.png"},52168:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_4-cd93ec489833e9066405be158ef6d3d9.png"},65045:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_1-32d26b51de286ed9366240c8052f8e86.png"},73331:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>t});var c=n(58101);const s={},i=c.createContext(s);function d(e){const r=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(i.Provider,{value:r},e.children)}},79294:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_2-44145a4de2d8934f118391c498af60f2.png"},89027:(e,r,n)=>{n.d(r,{A:()=>c});const c=n.p+"assets/images/create-record_7-ce07d82f3830be81ae7caaa4c6e3d83e.png"}}]);