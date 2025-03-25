"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[6598],{12843:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"collaboration/record/create-record","title":"Create Record","description":"Introduction","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/collaboration/record/2-create-record.md","sourceDirName":"collaboration/record","slug":"/collaboration/record/create-record","permalink":"/docs/collaboration/record/create-record","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1741682696000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Quick Start with Records","permalink":"/docs/collaboration/record/quick-start-record"},"next":{"title":"Managing Records","permalink":"/docs/collaboration/record/manage-records"}}');var c=t(25105),n=t(27890);const a={sidebar_position:2},i="Create Record",l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Direct Record Creation",id:"direct-record-creation",level:2},{value:"Create by Clicking Button",id:"create-by-clicking-button",level:3},{value:"Create by Dragging Files",id:"create-by-dragging-files",level:3},{value:"Create by Copying/Moving Records",id:"create-by-copyingmoving-records",level:2},{value:"Create Records through Collection Tasks",id:"create-records-through-collection-tasks",level:2},{value:"Manual Collection Task Creation",id:"manual-collection-task-creation",level:3},{value:"Rule-based Collection Task Creation",id:"rule-based-collection-task-creation",level:3},{value:"Create Records Using coCLI",id:"create-records-using-cocli",level:2},{value:"Learn More",id:"learn-more",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.header,{children:(0,c.jsx)(r.h1,{id:"create-record",children:"Create Record"})}),"\n",(0,c.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"Only project members and above can create records."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:"A record is a collection of files describing similar scenarios. When you need to view or process data generated by a device over a period of time, you can create a record in the project and upload the device data to the record. Here are four ways to create a record:"}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:"Create directly"}),"\n",(0,c.jsx)(r.li,{children:"Create by copying/moving records"}),"\n",(0,c.jsx)(r.li,{children:"Create through collection tasks"}),"\n",(0,c.jsx)(r.li,{children:"Create using the command-line tool coCLI"}),"\n"]}),"\n",(0,c.jsx)(r.h2,{id:"direct-record-creation",children:"Direct Record Creation"}),"\n",(0,c.jsx)(r.p,{children:"You can directly create a record by clicking the [Create Record] button or dragging files into the record list."}),"\n",(0,c.jsx)(r.h3,{id:"create-by-clicking-button",children:"Create by Clicking Button"}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:'In the left sidebar of the project, select "Records" and click the [Create Record] button.'}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_1",src:t(42980).A+"",width:"1480",height:"524"})}),"\n",(0,c.jsxs)(r.ol,{start:"2",children:["\n",(0,c.jsx)(r.li,{children:"Enter the record name and other related information in the popup window, then click the [Create] button."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_2",src:t(79839).A+"",width:"1300",height:"673"})}),"\n",(0,c.jsxs)(r.ol,{start:"3",children:["\n",(0,c.jsx)(r.li,{children:"After creation, you will automatically enter the record details page. Click the [Upload] button to upload files."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_3",src:t(82902).A+"",width:"1482",height:"761"})}),"\n",(0,c.jsx)(r.h3,{id:"create-by-dragging-files",children:"Create by Dragging Files"}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:"Select a local file and drag it into the record list area."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_4",src:t(22985).A+"",width:"1301",height:"568"})}),"\n",(0,c.jsxs)(r.ol,{start:"2",children:["\n",(0,c.jsx)(r.li,{children:"After releasing the drag, enter the relevant content in the create record popup window and click the [Create] button."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_5",src:t(28512).A+"",width:"1302",height:"623"})}),"\n",(0,c.jsxs)(r.ol,{start:"3",children:["\n",(0,c.jsx)(r.li,{children:"After the record is created, the dragged file will be automatically uploaded to the record."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_6",src:t(6843).A+"",width:"1300",height:"578"})}),"\n",(0,c.jsx)(r.h2,{id:"create-by-copyingmoving-records",children:"Create by Copying/Moving Records"}),"\n",(0,c.jsx)(r.p,{children:"Copy or move records to a specified project to achieve data reclassification and organization."}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:"In the more operations of the record details, select [Copy to]/[Move to]."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_7",src:t(92018).A+"",width:"1301",height:"300"})}),"\n",(0,c.jsxs)(r.ol,{start:"2",children:["\n",(0,c.jsx)(r.li,{children:"In the popup window, select the target project to copy/move to, and click the [OK] button. You can then view the corresponding record in the target project."}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"create-record_8",src:t(62869).A+"",width:"1298",height:"425"})}),"\n",(0,c.jsx)(r.h2,{id:"create-records-through-collection-tasks",children:"Create Records through Collection Tasks"}),"\n",(0,c.jsx)(r.h3,{id:"manual-collection-task-creation",children:"Manual Collection Task Creation"}),"\n",(0,c.jsxs)(r.p,{children:['To collect files from a device over a specified time period, you can manually create a "Collection Task". Once the task is completed, the collected data will be automatically uploaded to the record. See ',(0,c.jsx)(r.a,{href:"/docs/use-case/common-task",children:"General Data Collection"})," for details."]}),"\n",(0,c.jsx)(r.h3,{id:"rule-based-collection-task-creation",children:"Rule-based Collection Task Creation"}),"\n",(0,c.jsxs)(r.p,{children:['To collect data when a device performs key tasks or important events occur, you can add rules in "Data Collection & Diagnosis Rules". When the rule is triggered, a "Collection Task" will be automatically created, and the collected data will be uploaded to the record. See ',(0,c.jsx)(r.a,{href:"/docs/use-case/data-diagnosis/get-started",children:"Data Collection & Diagnosis Rules"})," for details."]}),"\n",(0,c.jsx)(r.h2,{id:"create-records-using-cocli",children:"Create Records Using coCLI"}),"\n",(0,c.jsxs)(r.p,{children:["To batch upload local files to a record, you can use the coCLI tool. See ",(0,c.jsx)(r.a,{href:"../../category/cocli",children:"Command-line Tool coCLI"})," for details."]}),"\n",(0,c.jsx)(r.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,c.jsxs)(r.ul,{children:["\n",(0,c.jsx)(r.li,{children:(0,c.jsx)(r.a,{href:"/docs/viz/about-viz",children:"Visualize and Play Records"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},42980:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_1-ee06829aba3b8801601ace79810fab00.png"},79839:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_2-2a5425b9aa21777939e3a1a00063ad7e.png"},82902:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_3-06d4891e04c656d4953dd3cc00938ea9.png"},22985:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_4-956a7978c2d73c5ff1934a5d1a592cc8.png"},28512:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_5-d7279ce86746576d62b7dc3f76d80f94.png"},6843:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_6-8949149075097cd88cf8bde6f0a502ba.png"},92018:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_7-920e39fe25ee34d06ebe06c27b34ee10.png"},62869:(e,r,t)=>{t.d(r,{A:()=>o});const o=t.p+"assets/images/create-record_8-cbdf63176096f373658e90ef79a4ad2e.png"},27890:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var o=t(58101);const c={},n=o.createContext(c);function a(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);