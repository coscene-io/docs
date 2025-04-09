"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[6775],{23971:(e,c,n)=>{n.d(c,{A:()=>s});const s=n.p+"assets/images/1-select-connection-d3c6bd4cae8ba4d35b5625209e6eb0db.png"},28735:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"client/connect-by-cobridge","title":"\u901a\u8fc7 coBridge \u8fde\u63a5\u673a\u5668","description":"coBridge \u662f\u523b\u884c\u65f6\u7a7a\u63d0\u4f9b\u7684\u4e00\u6b3e\u5f00\u6e90\u673a\u7aef\u8f6f\u4ef6\uff0c\u76ee\u524d\u652f\u6301 ros1 noetic\u3001 ros2 foxy \u53ca humble \u7248\u672c\u3002cobridge \u4f1a\u4ee5 ros node \u7684\u65b9\u5f0f\u8fd0\u884c\u5728\u673a\u5668\u4eba\u7aef\uff0c\u5e76\u901a\u8fc7 websocket \u65b9\u5f0f\u4e0e\u4e91\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002cobridge \u4e0e\u4e91\u7aef\u5efa\u7acb\u94fe\u63a5\u540e\uff0c\u6839\u636e\u4e91\u7aef\u6307\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u8ba2\u9605 ros topic\uff0c\u8c03\u7528 ros service\uff0c\u5b9e\u73b0\u5b9e\u65f6\u76d1\u63a7\u673a\u5668\u4eba\u72b6\u6001\u3001\u8fdc\u7a0b\u4e0b\u53d1\u6307\u4ee4\u7b49\u529f\u80fd\u3002","source":"@site/docs/client/1-connect-by-cobridge.md","sourceDirName":"client","slug":"/client/connect-by-cobridge","permalink":"/docs/client/connect-by-cobridge","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1744205765000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u5ba2\u6237\u7aef","permalink":"/docs/category/client"},"next":{"title":"\u901a\u8fc7 APT \u5b89\u88c5 coScene \u8f6f\u4ef6","permalink":"/docs/client/apt-source-install"}}');var o=n(25105),i=n(73331);const r={sidebar_position:1},t="\u901a\u8fc7 coBridge \u8fde\u63a5\u673a\u5668",d={},l=[{value:"\u5b89\u88c5 coBridge",id:"\u5b89\u88c5-cobridge",level:2},{value:"\u4f7f\u7528 coStudio \u5bf9\u673a\u5668\u8fdb\u884c\u5b9e\u65f6\u53ef\u89c6\u5316",id:"\u4f7f\u7528-costudio-\u5bf9\u673a\u5668\u8fdb\u884c\u5b9e\u65f6\u53ef\u89c6\u5316",level:2},{value:"\u53ef\u89c6\u5316\u76f8\u5173\u53c2\u8003\u94fe\u63a5",id:"\u53ef\u89c6\u5316\u76f8\u5173\u53c2\u8003\u94fe\u63a5",level:2}];function a(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.header,{children:(0,o.jsx)(c.h1,{id:"\u901a\u8fc7-cobridge-\u8fde\u63a5\u673a\u5668",children:"\u901a\u8fc7 coBridge \u8fde\u63a5\u673a\u5668"})}),"\n",(0,o.jsxs)(c.p,{children:[(0,o.jsx)(c.a,{href:"https://github.com/coscene-io/coBridge",children:"coBridge"})," \u662f\u523b\u884c\u65f6\u7a7a\u63d0\u4f9b\u7684\u4e00\u6b3e\u5f00\u6e90\u673a\u7aef\u8f6f\u4ef6\uff0c\u76ee\u524d\u652f\u6301 ",(0,o.jsx)(c.strong,{children:"ros1"})," ",(0,o.jsx)(c.code,{children:"noetic"}),"\u3001 ",(0,o.jsx)(c.strong,{children:"ros2"})," ",(0,o.jsx)(c.code,{children:"foxy"})," \u53ca ",(0,o.jsx)(c.code,{children:"humble"})," \u7248\u672c\u3002cobridge \u4f1a\u4ee5 ros node \u7684\u65b9\u5f0f\u8fd0\u884c\u5728\u673a\u5668\u4eba\u7aef\uff0c\u5e76\u901a\u8fc7 websocket \u65b9\u5f0f\u4e0e\u4e91\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002cobridge \u4e0e\u4e91\u7aef\u5efa\u7acb\u94fe\u63a5\u540e\uff0c\u6839\u636e\u4e91\u7aef\u6307\u4ee4\u53ef\u4ee5\u5b9e\u73b0\u8ba2\u9605 ros topic\uff0c\u8c03\u7528 ros service\uff0c\u5b9e\u73b0\u5b9e\u65f6\u76d1\u63a7\u673a\u5668\u4eba\u72b6\u6001\u3001\u8fdc\u7a0b\u4e0b\u53d1\u6307\u4ee4\u7b49\u529f\u80fd\u3002"]}),"\n",(0,o.jsx)(c.h2,{id:"\u5b89\u88c5-cobridge",children:"\u5b89\u88c5 coBridge"}),"\n",(0,o.jsx)(c.p,{children:"\u5728\u673a\u5668\u7aef\uff0c\u6253\u5f00 terminal\uff0c\u4f9d\u7167\u4ee5\u4e0b\u6d41\u7a0b\u5b89\u88c5 coBridge\u3002"}),"\n",(0,o.jsxs)(c.ol,{children:["\n",(0,o.jsx)(c.li,{children:"\u5bfc\u5165\u516c\u94a5\u3002"}),"\n"]}),"\n",(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:"language-bash",children:"  wget https://download.coscene.io/cobridge/coscene.gpg && sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/coscene.gpg coscene.gpg\n"})}),"\n",(0,o.jsxs)(c.ol,{start:"2",children:["\n",(0,o.jsx)(c.li,{children:"\u6dfb\u52a0\u6e90\u3002"}),"\n"]}),"\n",(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:"language-bash",children:'  echo "deb [signed-by=/etc/apt/trusted.gpg.d/coscene.gpg] https://download.coscene.io/cobridge $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/cobridge.list\n'})}),"\n",(0,o.jsxs)(c.ol,{start:"3",children:["\n",(0,o.jsx)(c.li,{children:"\u66f4\u65b0apt\u5e76\u5b89\u88c5\u3002"}),"\n"]}),"\n",(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:"language-bash",children:"  sudo apt update\n  # \u6ce8\u610f: \u5982\u679c ROS_DISTRO \u6ca1\u6709\u5728\u4f60\u7684\u73af\u5883\u53d8\u91cf\u91cc\u9762\uff0c${ROS_DISTRO} \u9700\u8981\u88ab 'noetic', 'foxy' or 'humble' \u66ff\u6362\n  sudo apt install ros-${ROS_DISTRO}-cobridge -y\n"})}),"\n",(0,o.jsxs)(c.ol,{start:"4",children:["\n",(0,o.jsx)(c.li,{children:"\u8fd0\u884c coBridge\u3002"}),"\n"]}),"\n",(0,o.jsx)(c.pre,{children:(0,o.jsx)(c.code,{className:"language-bash",children:"  source /opt/ros/${ROS_DISTRO}/setup.bash\n\n  # for ros 1 distribution\n  roslaunch cobridge cobridge.launch\n\n  # for ros 2 distribution\n  ros2 launch cobridge cobridge_launch.xml\n"})}),"\n",(0,o.jsx)(c.h2,{id:"\u4f7f\u7528-costudio-\u5bf9\u673a\u5668\u8fdb\u884c\u5b9e\u65f6\u53ef\u89c6\u5316",children:"\u4f7f\u7528 coStudio \u5bf9\u673a\u5668\u8fdb\u884c\u5b9e\u65f6\u53ef\u89c6\u5316"}),"\n",(0,o.jsxs)(c.ol,{children:["\n",(0,o.jsxs)(c.li,{children:["\u4e0b\u8f7d ",(0,o.jsx)(c.a,{href:"https://www.coscene.io/download",children:"coStudio"}),"\u3002"]}),"\n",(0,o.jsxs)(c.li,{children:["\u5f00\u542f coStudio \u540e\uff0c\u9009\u62e9 \u201c\u6253\u5f00\u8fde\u63a5\u201d \u529f\u80fd\u3002\n",(0,o.jsx)(c.img,{alt:"\u6253\u5f00\u8fde\u63a5",src:n(82079).A+"",width:"2402",height:"1602"})]}),"\n",(0,o.jsxs)(c.li,{children:["\u9009\u62e9 coScene Websocket \u9009\u9879\uff0c\u5728 WebSocket URL \u4e2d\u8f93\u5165\u8fde\u63a5\u5730\u5740\u3002",(0,o.jsx)(c.code,{children:"ws://localhost:21274"})," ",(0,o.jsx)(c.strong,{children:"\uff08 21274 \u4e3a coBridge \u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7 \uff09"}),"\u3002\n",(0,o.jsx)(c.img,{alt:"\u9009\u62e9\u8fde\u63a5",src:n(23971).A+"",width:"2402",height:"1602"})]}),"\n",(0,o.jsxs)(c.li,{children:["\u6253\u5f00\u540e\u5373\u53ef\u4f7f\u7528\u4e0d\u540c\u9762\u677f\u5bf9\u673a\u5668\u6570\u636e\u8fdb\u884c\u5b9e\u65f6\u53ef\u89c6\u5316\u3002\n",(0,o.jsx)(c.img,{alt:"\u5b9e\u65f6\u53ef\u89c6\u5316",src:n(94243).A+"",width:"2129",height:"1226"})]}),"\n"]}),"\n",(0,o.jsx)(c.h2,{id:"\u53ef\u89c6\u5316\u76f8\u5173\u53c2\u8003\u94fe\u63a5",children:"\u53ef\u89c6\u5316\u76f8\u5173\u53c2\u8003\u94fe\u63a5"}),"\n",(0,o.jsxs)(c.ul,{children:["\n",(0,o.jsxs)(c.li,{children:["\u9762\u677f\u76f8\u5173\u8bbe\u7f6e\uff1a",(0,o.jsx)(c.a,{href:"https://docs.coscene.io/docs/category/panel",children:"\u9762\u677f\u8bbe\u7f6e"})]}),"\n",(0,o.jsxs)(c.li,{children:["\u5e03\u5c40\u76f8\u5173\u8bbe\u7f6e\uff1a",(0,o.jsx)(c.a,{href:"https://docs.coscene.io/docs/viz/layout",children:"\u5e03\u5c40"})]}),"\n"]})]})}function h(e={}){const{wrapper:c}={...(0,i.R)(),...e.components};return c?(0,o.jsx)(c,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},73331:(e,c,n)=>{n.d(c,{R:()=>r,x:()=>t});var s=n(58101);const o={},i=s.createContext(o);function r(e){const c=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function t(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:c},e.children)}},82079:(e,c,n)=>{n.d(c,{A:()=>s});const s=n.p+"assets/images/1-open-connection-182e29abb531b1f4da4d618953d91a6a.png"},94243:(e,c,n)=>{n.d(c,{A:()=>s});const s=n.p+"assets/images/1-realtime-viz-f9c32caa3da4079a0468f6b33ee09fc8.png"}}]);