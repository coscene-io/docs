"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[9270],{14665:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"viz/options","title":"\u53ef\u89c6\u5316\u9009\u9879","description":"\u53ef\u89c6\u5316\u4e2d\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u9009\u9879\uff0c\u53ef\u4ee5\u8fdb\u884c\u8bbe\u7f6e\u3002","source":"@site/docs/viz/6-options.md","sourceDirName":"viz","slug":"/viz/options","permalink":"/zh/docs/viz/options","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742361612000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\u4e00\u523b","permalink":"/zh/docs/viz/create-moment-viz"},"next":{"title":"\u5e27\u7387\u4f18\u5316\u9009\u9879","permalink":"/zh/docs/viz/frame-rate-optimization"}}');var s=n(25105),r=n(73331);const o={sidebar_position:6},c="\u53ef\u89c6\u5316\u9009\u9879",d={},a=[{value:"TF \u517c\u5bb9\u6a21\u5f0f",id:"tf-\u517c\u5bb9\u6a21\u5f0f",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"\u53ef\u89c6\u5316\u9009\u9879",children:"\u53ef\u89c6\u5316\u9009\u9879"})}),"\n",(0,s.jsx)(i.p,{children:"\u53ef\u89c6\u5316\u4e2d\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u9009\u9879\uff0c\u53ef\u4ee5\u8fdb\u884c\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"tf-\u517c\u5bb9\u6a21\u5f0f",children:"TF \u517c\u5bb9\u6a21\u5f0f"}),"\n",(0,s.jsxs)(i.p,{children:["TF2 \u4f5c\u4e3a TF \u7684\u8fed\u4ee3\u7248\u672c\uff0c\u5bf9 frame_id \u7684\u547d\u540d\u6709\u7740\u66f4\u4e25\u683c\u7684\u89c4\u8303\u3002frame_id \u4e0d\u5e94\u8be5\u4ee5\u659c\u6760\uff08",(0,s.jsx)(i.code,{children:"/"}),"\uff09\u5f00\u5934\u3002TF2 \u79fb\u9664\u4e86\u5bf9 tf_prefix \u7684\u652f\u6301\uff0c\u91c7\u7528\u4e86\u66f4\u7b80\u5355\u548c\u4e00\u81f4\u7684\u547d\u540d\u7b56\u7565\uff1a\u6240\u6709\u7684 frame_id \u90fd\u88ab\u89c6\u4e3a string literals\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u7136\u800c\u5728\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u4ecd\u7136\u53ef\u80fd\u4f1a\u9047\u5230\u4ee5 ",(0,s.jsx)(i.code,{children:"/"})," \u5f00\u5934\u7684 frame_id\uff0c\u6bd4\u5982"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4ece TF1 \u8fc1\u79fb\u8fc7\u6765\u7684\u5386\u53f2\u4ee3\u7801"}),"\n",(0,s.jsx)(i.li,{children:"\u5f00\u53d1\u8005\u4f7f\u7528\u4e86\u65e7\u7684\u7f16\u7a0b\u4e60\u60ef"}),"\n",(0,s.jsx)(i.li,{children:"\u67d0\u4e9b Publisher \u6ca1\u6709\u4e25\u683c\u9075\u5faa TF2 \u7684\u547d\u540d\u89c4\u8303"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u79cd\u4e0d\u89c4\u8303\u7684\u547d\u540d\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u4e2d\u51fa\u73b0\u547d\u540d\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u540c\u4e00\u4e2a\u5750\u6807\u7cfb\u53ef\u80fd\u540c\u65f6\u4ee5 ",(0,s.jsx)(i.code,{children:"base_link"})," \u548c ",(0,s.jsx)(i.code,{children:"/base_link"})," \u7684\u5f62\u5f0f\u51fa\u73b0\uff0c\u8fd9\u4f1a\u5f71\u54cd TF \u6811\u7684\u6b63\u786e\u6784\u5efa\uff0c\u5bfc\u81f4\u65e0\u6cd5\u8fdb\u884c\u51c6\u786e\u7684\u5750\u6807\u53d8\u6362\uff08transformation\uff09\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c \u523b\u884c\u53c2\u8003\u4e86 RViz \u7684\u5904\u7406\u65b9\u6848\uff0c\u5728\u53ef\u89c6\u5316\u7cfb\u7edf\u4e2d\u52a0\u5165\u4e86\u517c\u5bb9\u6a21\u5f0f\u3002\u5f53\u8be5\u9009\u9879\u5f00\u542f\u65f6\uff0c\u64ad\u653e\u5668\u4f1a\u5c1d\u8bd5\u7edf\u4e00\u6240\u6709 TF \u6d88\u606f\u7684\u4e00\u81f4\u6027\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u5b98\u65b9\u53c2\u8003: ",(0,s.jsx)(i.a,{href:"https://wiki.ros.org/tf2/Migration#tf_prefix_backwards_compatibility",children:"TF Prefix Backwards Compatibility"})]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},73331:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>c});var t=n(58101);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);