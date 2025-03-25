"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[8882],{26988:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-list-9e63f5c0ab945e2b171a1e0bf5a440f2.png"},28364:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-delete-labels-list-49b806de6dbc063649dc5c41c5f20e59.png"},32278:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-labels-list-record-ee696734192f1c436109421ca7e83f2d.png"},43366:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-get-id-d99317daf214f78ecdfb56775f0f313d.png"},44268:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-download-prepare-files-95d52b0a5ce54a04fd3f5337abfe8731.png"},45946:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-upload-file-to-record-2a66cd81c2e84135dde3d478bc8e9057.png"},51864:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-create-2186cccd5c0720e18785f5326ba93734.png"},58448:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/update-record-title-and-description-14be641f2ad939ffc30c161177c79bad.png"},62011:(e,d,c)=>{c.r(d),c.d(d,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"developers/coSceneCli/cli-record-operations","title":"Using CLI to Operate Records","description":"For detailed information on operating records in the coScene CLI, you can use cocli record -h to see detailed usage.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/developers/coSceneCli/2-cli-record-operations.md","sourceDirName":"developers/coSceneCli","slug":"/developers/coSceneCli/record-operations","permalink":"/docs/developers/coSceneCli/record-operations","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Zhexuan Yang","lastUpdatedAt":1738910751000,"sidebarPosition":2,"frontMatter":{"slug":"record-operations","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Install and Init","permalink":"/docs/developers/coSceneCli/install"},"next":{"title":"Managing Actions with CLI Tools","permalink":"/docs/developers/coSceneCli/action-operations"}}');var o=c(25105),s=c(73331);const a={slug:"record-operations",sidebar_position:2},n="Using CLI to Operate Records",l={},i=[{value:"Create a Record",id:"create-a-record",level:2},{value:"View Records in a Project",id:"view-records-in-a-project",level:2},{value:"Upload Files to a Record",id:"upload-files-to-a-record",level:2},{value:"Download Files from a Record",id:"download-files-from-a-record",level:2},{value:"Delete a Record",id:"delete-a-record",level:2},{value:"Manage Record Labels",id:"manage-record-labels",level:2},{value:"Add labels to a Record",id:"add-labels-to-a-record",level:3},{value:"Replace Existing Labels of a Record",id:"replace-existing-labels-of-a-record",level:3},{value:"Delete Specific Labels",id:"delete-specific-labels",level:3},{value:"Update Record Information",id:"update-record-information",level:2}];function t(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.header,{children:(0,o.jsx)(d.h1,{id:"using-cli-to-operate-records",children:"Using CLI to Operate Records"})}),"\n",(0,o.jsxs)(d.p,{children:["For detailed information on operating records in the coScene CLI, you can use ",(0,o.jsx)(d.code,{children:"cocli record -h"})," to see detailed usage."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cli-record-help",src:c(67281).A+"",width:"1912",height:"1206"})}),"\n",(0,o.jsx)(d.p,{children:"Here are some examples of common operations:"}),"\n",(0,o.jsx)(d.h2,{id:"create-a-record",children:"Create a Record"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"# Create a record called <Reserved File>\ncocli record create -t <Reserved-Record-Name>\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-create",src:c(51864).A+"",width:"2486",height:"126"})}),"\n",(0,o.jsx)(d.p,{children:"You can click on the URL in the result to view the newly created record on the webpage."}),"\n",(0,o.jsx)(d.h2,{id:"view-records-in-a-project",children:"View Records in a Project"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"cocli record list\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-list",src:c(26988).A+"",width:"2212",height:"286"})}),"\n",(0,o.jsxs)(d.p,{children:["The list command will list all the records in the project. We can pipe commands like ",(0,o.jsx)(d.code,{children:"grep"})," and ",(0,o.jsx)(d.code,{children:"cut"})," to get the ID of a specific record."]}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"cocli record list | grep 'Reserved' | cut -d ' ' -f1\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-get-id",src:c(43366).A+"",width:"2194",height:"86"})}),"\n",(0,o.jsx)(d.h2,{id:"upload-files-to-a-record",children:"Upload Files to a Record"}),"\n",(0,o.jsxs)(d.p,{children:["You can upload any specified files or files within a directory to a specific record. Let\u2019s use the previously mentioned ",(0,o.jsx)(d.code,{children:"Reserved-Record-Name"})," record as an example."]}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"# Create a temporary file\ntouch TEST_FILE\n\n# Upload the file to the previously created record\ncocli record upload acd706d9-0879-4d88-8550-e69bb8ff8f6b ./TEST_FILE\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-upload-file-to-record",src:c(45946).A+"",width:"2498",height:"460"})}),"\n",(0,o.jsx)(d.p,{children:"Refresh the record on the webpage to see the file we just uploaded."}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"view-just-uploaded-file",src:c(82565).A+"",width:"2468",height:"852"})}),"\n",(0,o.jsx)(d.h2,{id:"download-files-from-a-record",children:"Download Files from a Record"}),"\n",(0,o.jsxs)(d.p,{children:["We can also download files from a record to the local machine. In the ",(0,o.jsx)(d.code,{children:"Reserved-Record-Name"}),", we have uploaded some random files as examples."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-download-prepare-files",src:c(44268).A+"",width:"2462",height:"1168"})}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"cocli record download acd706d9-0879-4d88-8550-e69bb8ff8f6b .\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-download-to-local",src:c(65430).A+"",width:"2496",height:"742"})}),"\n",(0,o.jsx)(d.p,{children:"The CLI tool will package all the files in the record into a folder named after the record ID. This feature helps maintain the independence of files when you need to download multiple records, making them easier to manage."}),"\n",(0,o.jsx)(d.h2,{id:"delete-a-record",children:"Delete a Record"}),"\n",(0,o.jsxs)(d.p,{children:["The CLI tool can also be used to delete records. Deleting a record is a very dangerous operation, so please manually confirm whether you really need to delete the record or use the ",(0,o.jsx)(d.code,{children:"-f"})," flag to force delete."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"delete-a-record",src:c(79148).A+"",width:"974",height:"304"})}),"\n",(0,o.jsx)(d.h2,{id:"manage-record-labels",children:"Manage Record Labels"}),"\n",(0,o.jsxs)(d.p,{children:[(0,o.jsx)(d.code,{children:"cocli record list"})," makes it easy to see the labels of records. We can also perform more operations on the labels of records. Let\u2019s take the first record in the list as an example."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-labels-list-record",src:c(32278).A+"",width:"3138",height:"288"})}),"\n",(0,o.jsx)(d.h3,{id:"add-labels-to-a-record",children:"Add labels to a Record"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{children:"cocli record update d253523f-5a8a-40dd-8bd9-2d289367d6ff -l afternoon,rainy\n"})}),"\n",(0,o.jsx)(d.p,{children:"Successfully added the labels afternoon and rainy to the record."}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-append-labels",src:c(82422).A+"",width:"3300",height:"494"})}),"\n",(0,o.jsx)(d.h3,{id:"replace-existing-labels-of-a-record",children:"Replace Existing Labels of a Record"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{children:"cocli record update d253523f-5a8a-40dd-8bd9-2d289367d6ff --update-labels sunny,morning\n"})}),"\n",(0,o.jsxs)(d.p,{children:["You can see that the labels of the record have now been updated from ",(0,o.jsx)(d.code,{children:"afternoon, rainy"})," to ",(0,o.jsx)(d.code,{children:"sunny, morning"}),"."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-update-labels",src:c(85647).A+"",width:"3302",height:"492"})}),"\n",(0,o.jsx)(d.h3,{id:"delete-specific-labels",children:"Delete Specific Labels"}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{children:"cocli record update d253523f-5a8a-40dd-8bd9-2d289367d6ff --delete-labels sunny\n"})}),"\n",(0,o.jsxs)(d.p,{children:["By deleting the ",(0,o.jsx)(d.code,{children:"sunny"})," label via the command line, you can see that only the ",(0,o.jsx)(d.code,{children:"morning"})," label remains."]}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"cocli-record-delete-labels-list",src:c(28364).A+"",width:"3060",height:"490"})}),"\n",(0,o.jsx)(d.h2,{id:"update-record-information",children:"Update Record Information"}),"\n",(0,o.jsxs)(d.p,{children:["The CLI also supports changing the name and description of a record. The following command finds the first record with the ",(0,o.jsx)(d.code,{children:"empty-record"})," label and updates its name and description, making it easier for users to understand the meaning of the record."]}),"\n",(0,o.jsx)(d.pre,{children:(0,o.jsx)(d.code,{className:"language-bash",children:"RECORD_ID=$(cocli record list | grep 'empty-record' | head -n1 | cut -d ' ' -f1)\ncocli record update $RECORD_ID -t \"Fancy Empty Record Title\" -d \"Do you really need a description for an empty record\"\n"})}),"\n",(0,o.jsx)(d.p,{children:(0,o.jsx)(d.img,{alt:"update-record-title-and-description",src:c(58448).A+"",width:"2100",height:"590"})})]})}function h(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,o.jsx)(d,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},65430:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-download-to-local-27363af33c48dd2aa3b76f6d9c37e10f.png"},67281:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-help-3b7b4ac0ef54cfe79e3e813f456c6758.png"},73331:(e,d,c)=>{c.d(d,{R:()=>a,x:()=>n});var r=c(58101);const o={},s=r.createContext(o);function a(e){const d=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function n(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:d},e.children)}},79148:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/delete-a-record-5d7d4aacf5cdd377cde21b52a85f60bd.png"},82422:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-append-labels-364127d2de56ef5dd196283a4cd79cac.png"},82565:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/view-just-uploaded-file-c7ff17b9f688e7f6ab972b95c255fca1.png"},85647:(e,d,c)=>{c.d(d,{A:()=>r});const r=c.p+"assets/images/cocli-record-update-labels-75df5131de18eced164c3662e369a524.png"}}]);