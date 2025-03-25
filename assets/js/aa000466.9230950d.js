"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[873],{10195:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"device/device-remote-control","title":"Remote Device Control","description":"The coScene platform enables real-time remote device operations, such as remote command execution and SSH connections, enhancing operational capabilities.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/6-device-remote-control.md","sourceDirName":"device","slug":"/device/device-remote-control","permalink":"/docs/device/device-remote-control","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"fei.gao","lastUpdatedAt":1741860393000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Device Replacement, Upgrade, and Uninstallation Guide","permalink":"/docs/device/change-device-guide"},"next":{"title":"Batch Device Operations","permalink":"/docs/device/batch-device-operations"}}');var n=t(25105),c=t(27890);const o={sidebar_position:6},r="Remote Device Control",d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Real-time Visualization",id:"real-time-visualization",level:2},{value:"Web SSH",id:"web-ssh",level:2},{value:"Remote Command",id:"remote-command",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"remote-device-control",children:"Remote Device Control"})}),"\n",(0,n.jsx)(i.p,{children:"The coScene platform enables real-time remote device operations, such as remote command execution and SSH connections, enhancing operational capabilities."}),"\n",(0,n.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["The device has coScene client programs installed. For details, please refer to ",(0,n.jsx)(i.a,{href:"/docs/device/create-device#add-device-from-device",children:"Device Installation"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["The organization administrator has granted device access and permitted remote control operations. For details, please refer to ",(0,n.jsx)(i.a,{href:"/docs/device/manage-device#device-admission",children:"Device Admission"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"real-time-visualization",children:"Real-time Visualization"}),"\n",(0,n.jsx)(i.p,{children:"Before device visualization, you need to install the coBridge component on the target machine. This component will run as a separate ROS node and transmit subscribed data to the frontend through the WebSocket protocol."}),"\n",(0,n.jsxs)(i.p,{children:["coScene provides ",(0,n.jsx)(i.a,{href:"https://github.com/coscene-io/coBridge",children:"coBridge source code (C++)"}),", which currently supports ROS distributions including ROS1 ",(0,n.jsx)("u",{children:"Noetic Ninjemys"}),", ",(0,n.jsx)("u",{children:"Melodic Morenia"}),"; ROS2 ",(0,n.jsx)("u",{children:"Foxy Fitzroy"}),", ",(0,n.jsx)("u",{children:"Galactic Geochelone"}),", ",(0,n.jsx)("u",{children:"Humble Hawksbill"}),". For other version requirements, please contact the coScene team."]}),"\n",(0,n.jsxs)(i.p,{children:["We strongly recommend users to compile the executable using the source code provided by coScene (compilation process documentation: ",(0,n.jsx)(i.a,{href:"https://github.com/coscene-io/coBridge/blob/main/README.zh-CN.md",children:"CN"}),"/",(0,n.jsx)(i.a,{href:"https://github.com/coscene-io/coBridge/blob/main/README.md",children:"EN"}),"), integrate it into the robot software, and add the command ",(0,n.jsx)(i.code,{children:"ros2 launch cobridge cobridge_launch.xml"})," (or ",(0,n.jsx)(i.code,{children:"roslaunch cobridge cobridge_launch.xml"}),") to the robot startup script."]}),"\n",(0,n.jsx)(i.p,{children:"After the coBridge node starts, combined with the public network address and port mapped by virmesh, you can subscribe to robot topics and issue services through the web interface, achieving remote real-time visualization of the robot."}),"\n",(0,n.jsx)(i.p,{children:'After device access is granted, you can view devices in the "Devices" page under "Organization Management". A [Real-time Visualization] button will appear, which allows you to connect and view the device\'s real-time status.'}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device realtime",src:t(60654).A+"",width:"1861",height:"894"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device realtime demo",src:t(19200).A+"",width:"4990",height:"2460"})}),"\n",(0,n.jsx)(i.h2,{id:"web-ssh",children:"Web SSH"}),"\n",(0,n.jsx)(i.p,{children:'After device access is granted, you can view devices in the "Devices" page under "Organization Management". A [Web SSH] button will appear, which opens a new browser tab to establish an SSH connection to the device.'}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"device ssh",src:t(14399).A+"",width:"1862",height:"893"}),"\n",(0,n.jsx)(i.img,{alt:"device ssh demo",src:t(77723).A+"",width:"1812",height:"1052"})]}),"\n",(0,n.jsxs)(i.p,{children:["The page comes with ",(0,n.jsx)(i.a,{href:"https://trzsz.github.io/cn/",children:"Trzsz file transfer tool"})," by default. Users can upload local files to the remote device using the ",(0,n.jsx)(i.code,{children:"trz file1"})," command, and download files from the remote device using ",(0,n.jsx)(i.code,{children:"tsz file1 file2 file3"}),". For more advanced usage, please refer to the ",(0,n.jsx)(i.a,{href:"https://trzsz.github.io/cn/",children:"detailed documentation"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"remote-command",children:"Remote Command"}),"\n",(0,n.jsxs)(i.p,{children:["When a device is online remotely, users can execute specific tasks by sending commands through the Remote Command feature. You can also perform ",(0,n.jsx)(i.a,{href:"/docs/device/batch-device-operations",children:"batch operations"})," on multiple devices simultaneously."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device cmd",src:t(28830).A+"",width:"1860",height:"897"})}),"\n",(0,n.jsxs)(i.p,{children:["Click the [Execute Remote Command] button, enter the command you want to execute in the popup window, and click the [Confirm] button to execute the command on the device.\n",(0,n.jsx)(i.img,{alt:"device cmd",src:t(14581).A+"",width:"2990",height:"716"}),"\n",(0,n.jsx)(i.img,{alt:"device cmd",src:t(48044).A+"",width:"2986",height:"886"})]}),"\n",(0,n.jsxs)(i.p,{children:["After the command executes successfully, you can view the log results.\n",(0,n.jsx)(i.img,{alt:"device cmd",src:t(78211).A+"",width:"2968",height:"1222"})]}),"\n",(0,n.jsx)(i.h2,{id:"port-forwarding",children:"Port Forwarding"}),"\n",(0,n.jsx)(i.p,{children:"When a device doesn't have a public IP, users cannot directly access its ports. The port forwarding feature allows device ports to be forwarded, making them accessible over the public network. This is useful for temporarily exposing device services or debugging local connections."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"device port",src:t(25104).A+"",width:"1860",height:"897"})}),"\n",(0,n.jsxs)(i.p,{children:["Here's a simple example. Using the [Web SSH] feature, we connect to the remote device and run ",(0,n.jsx)(i.code,{children:"python3 -m http.server 9000 -d ~"})," to start a simple HTTP Server that serves files from the ",(0,n.jsx)(i.code,{children:"~"})," directory. The server listens on port 9000, which we then configure for forwarding. After this, we can access the forwarded address from our local browser to reach the device."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Configure port 9000 forwarding in the web interface\n",(0,n.jsx)(i.img,{alt:"device port demo",src:t(11728).A+"",width:"1226",height:"526"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Start a simple HTTP Server using Web SSH by executing ",(0,n.jsx)(i.code,{children:"python3 -m http.server 9000 -d ~"}),"\n",(0,n.jsx)(i.img,{alt:"device port demo",src:t(44098).A+"",width:"1766",height:"376"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Access the forwarded address in the browser to see all files in the device's ",(0,n.jsx)(i.code,{children:"~"})," directory\n",(0,n.jsx)(i.img,{alt:"device port demo",src:t(65227).A+"",width:"2028",height:"1346"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Check the device logs to confirm that browser requests are being forwarded and returning 200 status codes\n",(0,n.jsx)(i.img,{alt:"device port demo",src:t(44098).A+"",width:"1766",height:"376"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11728:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-port-demo-1-0cc8a2ed1a13db2eaf4db324e720473b.png"},65227:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-port-demo-2-4b2ec18fa94bc3cd547992e28cef0988.png"},44098:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-port-demo-3-bf00daa589dfc4d687e6c738c079d828.png"},25104:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-port-05023a7cf27bdc0a4b484c8fa70d2524.png"},19200:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-realtime-demo-4319b37f202078f9cd8717643f312cdc.png"},60654:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-realtime-5ab2623f6f9a2529136c92aad434bfcd.png"},77723:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-ssh-demo-658675c297d7070133fdd8ffbf98da9e.png"},14399:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/4-3-device-ssh-8586f5b9e194882701ead8b08748664c.png"},28830:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/6-remote-command-1-e7b7322c060c599b31eb7bab099be4c3.png"},14581:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/6-remote-command-2-f8c80e8faf043e0ca2bbf9a7ca89bee0.png"},48044:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/6-remote-command-3-95437e4c7d7f2770825dbd8d0f2d783b.png"},78211:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/6-remote-command-4-a9356bcf6c8fe2af6ebdeb59e16c7b6d.png"},27890:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var s=t(58101);const n={},c=s.createContext(n);function o(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);