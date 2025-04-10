"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[9614],{73331:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(58101);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},92732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"viz/panel/teleop-panel","title":"Teleop Panel","description":"Teleop Panel Overview","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/viz/4-panel/8-teleop-panel.md","sourceDirName":"viz/4-panel","slug":"/viz/panel/teleop-panel","permalink":"/docs/viz/panel/teleop-panel","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742361612000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Service Call Panel","permalink":"/docs/viz/panel/service-panel"},"next":{"title":"Moments","permalink":"/docs/viz/create-moment-viz"}}');var i=t(25105),s=t(73331);const r={sidebar_position:8},l="Teleop Panel",c={},a=[{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Supported Message Types",id:"supported-message-types",level:2},{value:"Technical Implementation",id:"technical-implementation",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"teleop-panel",children:"Teleop Panel"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Teleop Panel Overview",src:t(94704).A+"",width:"1018",height:"629"})}),"\n",(0,i.jsxs)(n.p,{children:["The Teleop Panel allows you to remotely control your robot by publishing ",(0,i.jsx)(n.code,{children:"geometry_msgs/Twist"})," or ",(0,i.jsx)(n.code,{children:"geometry_msgs/msg/Twist"})," messages on a specified topic. To remotely operate a connected robot using this panel, you need to establish communication with the robot via ",(0,i.jsx)(n.a,{href:"https://github.com/coscene-io/cobridge",children:"coBridge"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Publish Rate: Control the frequency of publishing Twist messages"}),"\n",(0,i.jsx)(n.li,{children:"Topic: Specify the topic for publishing Twist messages"}),"\n",(0,i.jsxs)(n.li,{children:["Direction Control Buttons: Configure the movement parameters for Up/Down/Left/Right buttons","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can set corresponding values for linear velocity (x, y, z) and angular velocity"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supported-message-types",children:"Supported Message Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ROS 1: ",(0,i.jsx)(n.code,{children:"geometry_msgs/Twist"})]}),"\n",(0,i.jsxs)(n.li,{children:["ROS 2: ",(0,i.jsx)(n.code,{children:"geometry_msgs/msg/Twist"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"technical-implementation",children:"Technical Implementation"}),"\n",(0,i.jsx)(n.p,{children:"The Teleop Panel is a specialized publish panel, with its core functionality being sending control commands to the robot via coBridge. To achieve remote control functionality, the robot side needs to have corresponding components configured to process the received control messages."})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94704:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/viz-14-1-c313509d6b6fdc3cb5b85f3cc97f3f60.png"}}]);