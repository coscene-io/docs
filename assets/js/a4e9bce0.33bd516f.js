"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[5820],{73331:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(58101);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}},84213:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"use-case/automated-data-processing","title":"Automated Data Processing","description":"While the AI era brings unprecedented opportunities through vast amounts of data, it also presents significant challenges in data management and processing. AI engineers regularly perform repetitive tasks like data cleaning, preprocessing, training, testing, and deployment - all of which require substantial time and resources. The coScene platform\'s automation system eliminates this manual overhead by allowing users to configure data processing workflows once and reuse them automatically, improving both efficiency and accuracy while reducing human error.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/use-case/3-automated-data-processing.md","sourceDirName":"use-case","slug":"/use-case/automated-data-processing","permalink":"/docs/use-case/automated-data-processing","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"xiranyu","lastUpdatedAt":1743408693000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Automated Data Collection and Diagnostics","permalink":"/docs/use-case/automated-data-collection"},"next":{"title":"\u6570\u636e\u81ea\u52a8\u91c7\u96c6\u4e0e\u8bca\u65ad","permalink":"/docs/category/data-collection-and-diagnosis"}}');var s=i(25105),a=i(73331);const r={sidebar_position:3},o="Automated Data Processing",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Overview",id:"project-overview",level:2},{value:"Preparing Image Files",id:"preparing-image-files",level:2},{value:"Accessing the Image Registry",id:"accessing-the-image-registry",level:2},{value:"Building and Pushing the Image",id:"building-and-pushing-the-image",level:2},{value:"Configuring Automation",id:"configuring-automation",level:2},{value:"Testing the Workflow",id:"testing-the-workflow",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"automated-data-processing",children:"Automated Data Processing"})}),"\n",(0,s.jsx)(n.p,{children:"While the AI era brings unprecedented opportunities through vast amounts of data, it also presents significant challenges in data management and processing. AI engineers regularly perform repetitive tasks like data cleaning, preprocessing, training, testing, and deployment - all of which require substantial time and resources. The coScene platform's automation system eliminates this manual overhead by allowing users to configure data processing workflows once and reuse them automatically, improving both efficiency and accuracy while reducing human error."}),"\n",(0,s.jsx)(n.p,{children:"This guide demonstrates automated data processing using a practical example: automatically extracting image frames from uploaded MP4 video files."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before starting, ensure you have:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Docker installed and running on your local machine"}),"\n",(0,s.jsx)(n.li,{children:"Access to the coScene platform"}),"\n",(0,s.jsx)(n.li,{children:"Basic familiarity with Python and Docker concepts"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,s.jsx)(n.p,{children:"This automation workflow consists of three main components:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A Docker container that processes video files"}),"\n",(0,s.jsx)(n.li,{children:"An automated action in coScene that runs the container"}),"\n",(0,s.jsx)(n.li,{children:"A trigger that executes the action when MP4 files are uploaded"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"preparing-image-files",children:"Preparing Image Files"}),"\n",(0,s.jsx)(n.p,{children:"We'll create two key files that define our video processing container:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A Dockerfile that sets up the environment"}),"\n",(0,s.jsx)(n.li,{children:"A Python script that handles the frame extraction"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-the-image-registry",children:"Accessing the Image Registry"}),"\n",(0,s.jsx)(n.p,{children:"To store and manage our Docker image, we'll use coScene's built-in image registry. Follow these steps to set up registry access:"}),"\n",(0,s.jsx)(n.h2,{id:"building-and-pushing-the-image",children:"Building and Pushing the Image"}),"\n",(0,s.jsx)(n.p,{children:"After preparing the image files and configuring registry access, we'll build the container and make it available in coScene:"}),"\n",(0,s.jsx)(n.h2,{id:"configuring-automation",children:"Configuring Automation"}),"\n",(0,s.jsx)(n.p,{children:"The automation setup consists of two parts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Creating an action that defines what to run"}),"\n",(0,s.jsx)(n.li,{children:"Setting up a trigger that determines when to run it"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing-the-workflow",children:"Testing the Workflow"}),"\n",(0,s.jsx)(n.p,{children:"To verify the automation:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new record in your project"}),"\n",(0,s.jsx)(n.li,{children:"Upload an MP4 file (sample provided)"}),"\n",(0,s.jsx)(n.li,{children:"Monitor the automatic processing"}),"\n",(0,s.jsx)(n.li,{children:"Review the extracted frames"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"You've now set up an automated workflow that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monitors for new MP4 file uploads"}),"\n",(0,s.jsx)(n.li,{children:"Automatically processes videos to extract frames"}),"\n",(0,s.jsx)(n.li,{children:"Saves the results for further use"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This example demonstrates just one possibility of coScene's automation capabilities. For more advanced use cases and features, explore the following resources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.coscene.cn/docs/category/%E8%87%AA%E5%8A%A8%E5%8C%96/",children:"Automation Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.coscene.cn/docs/category/%E9%95%9C%E5%83%8F/",children:"Image Registry Guide"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);