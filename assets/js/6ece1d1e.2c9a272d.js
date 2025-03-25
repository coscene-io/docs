"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[4577],{73207:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/action-run-detail-1eb1695157c342beffaee981d9926d9c.png"},73331:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var o=i(58101);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},75082:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/action-runs-0d446bec3e534ee7c7142197a3b628c9.png"},78791:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/action-create-trigger-cc1bb7d9d1554527da943cfd01767359.png"},96617:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"workflow/action/learn-coscene-action","title":"Learn More About coScene Automation","description":"Preface","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/workflow/action/2-learn-coscene-action.md","sourceDirName":"workflow/action","slug":"/workflow/action/learn-coscene-action","permalink":"/docs/workflow/action/learn-coscene-action","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742886649000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Quick Start","permalink":"/docs/workflow/action/quickstart"},"next":{"title":"\u4eff\u771f\u4e0e\u6d4b\u8bd5","permalink":"/docs/category/sim-and-tests"}}');var t=i(25105),s=i(73331);const r={sidebar_position:2},c="Learn More About coScene Automation",a={},l=[{value:"Preface",id:"preface",level:2},{value:"Introduction to Concepts",id:"introduction-to-concepts",level:2},{value:"Actions",id:"actions",level:3},{value:"Action Name",id:"action-name",level:4},{value:"Description",id:"description",level:4},{value:"Image",id:"image",level:4},{value:"Command",id:"command",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Compute Requirements",id:"compute-requirements",level:4},{value:"Triggers",id:"triggers",level:3},{value:"Trigger Name",id:"trigger-name",level:4},{value:"Associated Actions",id:"associated-actions",level:4},{value:"File Wildcards",id:"file-wildcards",level:4},{value:"Conditions",id:"conditions",level:4},{value:"Invocation History",id:"invocation-history",level:3},{value:"Invocation History List Page",id:"invocation-history-list-page",level:4},{value:"Single Run Detail Page",id:"single-run-detail-page",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"learn-more-about-coscene-automation",children:"Learn More About coScene Automation"})}),"\n",(0,t.jsx)(n.h2,{id:"preface",children:"Preface"}),"\n",(0,t.jsx)(n.p,{children:"This article introduces the functionalities of the automation module provided by coScene, exploring the concepts and usage of related modules."}),"\n",(0,t.jsx)(n.h2,{id:"introduction-to-concepts",children:"Introduction to Concepts"}),"\n",(0,t.jsx)(n.p,{children:"Automation primarily includes three sub-functional entries: Actions, Triggers, and Invocation History. Triggers are linked to actions; the uploading of files will initiate the operation of triggers. Triggers that meet conditions will activate actions, completing an automation run displayed on the Invocation History page."}),"\n",(0,t.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,t.jsxs)(n.p,{children:["Define user behavior, referring to the operational logic they wish to execute, mainly consisting of the user's own business code logic. For example, listing all files in a directory (",(0,t.jsx)(n.code,{children:"ls -al"}),") or running a specific program (",(0,t.jsx)(n.code,{children:"python hello.py"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create action",src:i(98461).A+"",width:"2074",height:"2146"})}),"\n",(0,t.jsx)(n.h4,{id:"action-name",children:"Action Name"}),"\n",(0,t.jsx)(n.p,{children:"Users should fill in a meaningful name based on the functionality."}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Provides a detailed introduction to the action's related information, optional to fill."}),"\n",(0,t.jsx)(n.h4,{id:"image",children:"Image"}),"\n",(0,t.jsx)(n.p,{children:"Currently supports two methods of operation:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Users can upload a custom image to the coScene platform, then use the corresponding image URL. For more details, see ",(0,t.jsx)(n.a,{href:"https://docs.coscene.io/docs/recipes/regression/image-management#2-%E6%8E%A8%E9%80%81%E9%95%9C%E5%83%8F",children:"Pushing Images"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use a ",(0,t.jsx)(n.strong,{children:"publicly accessible"})," image URL, such as various open images on Docker Hub"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"command",children:"Command"}),"\n",(0,t.jsxs)(n.p,{children:["The command information executed after the image runs. Please modify it according to the actual needs of your custom image. ",(0,t.jsx)(n.strong,{children:"Note that the command and related parameters should be written on separate lines"}),". For example, the ",(0,t.jsx)(n.code,{children:"ls -al"})," command should be split into two lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  ls\n  -al\n"})}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Users can preset relevant environment variables for the program to use. coScene has predefined some environment variables. When defining, please avoid using these names to prevent unexpected program errors."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_CODE_VOLUME"})," - Code mounting directory, value ",(0,t.jsx)(n.code,{children:"/cos/codes"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_BIN_VOLUME"})," - Binary files mounting directory, value ",(0,t.jsx)(n.code,{children:"/cos/bins"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_BUNDLE_VOLUME"})," - Test package files mounting directory, value ",(0,t.jsx)(n.code,{children:"/cos/bundles"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_FILE_VOLUME"})," - Original uploaded data files mounting directory, value ",(0,t.jsx)(n.code,{children:"/cos/files"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_ARTIFACT_VOLUME"})," - Batch test artifact directory, users can write output during the run for saving, value ",(0,t.jsx)(n.code,{children:"/cos/artifacts"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_OUTPUT_VOLUME"})," - Output files directory, users can save program output data here, such as bag files. It can be compared and played back with original bag files, specific value ",(0,t.jsx)(n.code,{children:"/cos/outputs"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following environment variable values are optional and consist of uuid-formatted IDs when present, otherwise, they are empty."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_ORG_ID"})," - Organization ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_USER_ID"})," - User ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_WAREHOUSE_ID"})," - Warehouse ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_PROJECT_ID"})," - Project ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"COS_RECORD_ID"})," - Record ID"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"compute-requirements",children:"Compute Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Limits the maximum CPU and memory usage of the program. 1 core means up to 1 virtual core of CPU can be used, 2G represents a maximum of 2G of memory. Exceeding configured resources might cause the program to be terminated abnormally by the coScene system. Estimate resource use and configure reasonable compute requirements."}),"\n",(0,t.jsxs)(n.p,{children:["Actions offer four default configurations, ",(0,t.jsx)(n.code,{children:"1 core/2G"}),", ",(0,t.jsx)(n.code,{children:"2 cores/4G"}),", ",(0,t.jsx)(n.code,{children:"4 cores/8G"}),", ",(0,t.jsx)(n.code,{children:"8 cores/16G"}),". If higher requirements are needed, please contact the coScene team."]}),"\n",(0,t.jsx)(n.h3,{id:"triggers",children:"Triggers"}),"\n",(0,t.jsxs)(n.p,{children:["Triggers define the timing of actions. When a new file is successfully uploaded, the trigger checks based on the configuration. File wildcards can limit the name format of uploaded files, and condition groups can restrict the scope of records to which uploaded files belong, such as only allowing records with the ",(0,t.jsx)(n.code,{children:"hello"})," label to trigger an action upon successful file upload."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create trigger",src:i(78791).A+"",width:"2058",height:"1412"})}),"\n",(0,t.jsx)(n.h4,{id:"trigger-name",children:"Trigger Name"}),"\n",(0,t.jsx)(n.p,{children:"Fill in a meaningful name based on business needs."}),"\n",(0,t.jsx)(n.h4,{id:"associated-actions",children:"Associated Actions"}),"\n",(0,t.jsx)(n.p,{children:"Actions created on the action page are project actions, available for selection. coScene has developed some common system actions based on customer scenarios to reduce development effort, such as automatic diagnostic functions. For related common needs, please contact the coScene team."}),"\n",(0,t.jsx)(n.h4,{id:"file-wildcards",children:"File Wildcards"}),"\n",(0,t.jsx)(n.p,{children:"Used to match whether uploaded files meet the format definition, determining whether subsequent triggers will activate actions. Refer to the page for specific syntax logic."}),"\n",(0,t.jsx)(n.h4,{id:"conditions",children:"Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["Supports filtering associated record tag information. Only records meeting the tag requirements can satisfy trigger conditions. ",(0,t.jsx)(n.strong,{children:"Note that changes in record tags will not trigger coScene system verification of related triggers"}),". For example, adding a new tag to a record will not trigger the trigger to check and then run the corresponding action. ",(0,t.jsx)(n.em,{children:"Currently, only file uploads will trigger the operation of triggers."})]}),"\n",(0,t.jsx)(n.h3,{id:"invocation-history",children:"Invocation History"}),"\n",(0,t.jsx)(n.p,{children:"Invocation history displays the execution history of all actions within the project. Users can click on a record to view detailed information about a single run, providing an overview of status, time, operating user, etc. It also provides specific execution log information, allowing users to check the running status of programs for easier development and debugging."}),"\n",(0,t.jsx)(n.h4,{id:"invocation-history-list-page",children:"Invocation History List Page"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"action runs",src:i(75082).A+"",width:"2836",height:"958"})}),"\n",(0,t.jsx)(n.h4,{id:"single-run-detail-page",children:"Single Run Detail Page"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"action run detail",src:i(73207).A+"",width:"2846",height:"1410"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},98461:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/action-create-action-5c0995fb18dd11c80749fb15978466d5.png"}}]);