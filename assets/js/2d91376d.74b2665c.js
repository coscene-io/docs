"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[9631],{2531:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/test-suite_14-fd889a2b1130157fc83df7fc752ea57f.png"},3538:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/run_1-9431fe4b5426a7136985c6d4f1fe525e.png"},39424:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/run_3-5155e4ec85fae502b7d5832888fb96e2.png"},57813:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/test-suite_12-9ca27c0567f8dee458bdf6e205a9e62f.png"},73331:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>d});var n=t(58101);const i={},r=n.createContext(i);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:s},e.children)}},81090:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"sim-and-tests/regression/run","title":"Run a Cloud Test","description":"Learn how to run batch tests, including manual triggering and automatic triggering.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/sim-and-tests/regression/5-run.md","sourceDirName":"sim-and-tests/regression","slug":"/sim-and-tests/regression/run","permalink":"/docs/sim-and-tests/regression/run","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1742360874000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Test Bundle","permalink":"/docs/sim-and-tests/regression/test-bundle-management"},"next":{"title":"Test Metadata and Test Results","permalink":"/docs/sim-and-tests/regression/status-and-output"}}');var i=t(25105),r=t(73331);const a={sidebar_position:5},d="Run a Cloud Test",c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Manual Execution",id:"manual-execution",level:2},{value:"Automatic Triggering",id:"automatic-triggering",level:2},{value:"Learn More",id:"learn-more",level:2}];function o(e){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"run-a-cloud-test",children:"Run a Cloud Test"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Learn how to run batch tests, including manual triggering and automatic triggering."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Created ",(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/config-management",children:"Test Suite"})]}),"\n",(0,i.jsxs)(s.li,{children:["Uploaded ",(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/test-bundle-management",children:"Test Bundle"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"manual-execution",children:"Manual Execution"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:'In the project\'s left sidebar, select "Testing" and click the [Run Batch Test] button'}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"First time running batch test"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"run_1",src:t(3538).A+"",width:"1399",height:"594"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Subsequent runs of batch test"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"run_2",src:t(94249).A+"",width:"1399",height:"408"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"In the Run Batch Test dialog, select the test bundle and test suite, then click [Confirm] to run the batch test."}),"\n",(0,i.jsx)("img",{src:t(2531).A,alt:"test-suite_14",width:"500"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The system will create independent test tasks for each record associated with the test suites. For example, when a test suite is associated with 10 records, the system will create 10 sub-tasks, each using the selected test bundle and test suite configuration to test a single record."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"run_3",src:t(39424).A+"",width:"1399",height:"577"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["After completion, you can view the test results in the test list. See ",(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/status-and-output",children:"Managing Test Results"})," for details."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"run_4",src:t(90751).A+"",width:"1399",height:"408"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"automatic-triggering",children:"Automatic Triggering"}),"\n",(0,i.jsxs)(s.p,{children:['When the uploaded "Test Bundle" meets the ',(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/yaml-sample#auto-triggering",children:"preset trigger conditions"})," in the test suite, the system will automatically execute the relevant test suites."]}),"\n",(0,i.jsx)(s.p,{children:"To view the automatic trigger conditions for a test suite:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:'Go to the "Testing - Test Suite Management" page and find the test suite with "Associated Trigger Conditions" indicator:'}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"run_5",src:t(94422).A+"",width:"1399",height:"416"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Click [View Trigger Conditions] to see the specific trigger rules for that test suite:"}),"\n",(0,i.jsx)("img",{src:t(57813).A,alt:"test-suite_12",width:"500"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/status-and-output",children:"How to Output Test Results"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/status-and-output#viewing-test-results",children:"How to View Run Information"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/config-management",children:"Managing Test Suites"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/test-bundle-management",children:"Managing Test Bundles"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/sim-and-tests/regression/yaml-sample#auto-triggering",children:"Automatic Test Triggering"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},90751:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/run_4-86af4f748b5434c607c847f17955e044.png"},94249:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/run_2-cdd98c6c3fca231aab2c55377ece9232.png"},94422:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/run_5-bcd3bd64d562a191fdcfba37a6e0b72c.png"}}]);