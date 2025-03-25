"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[7567],{25157:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"device/manage-device","title":"Managing Devices","description":"Device Management Basics","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/3-manage-device.md","sourceDirName":"device","slug":"/device/manage-device","permalink":"/docs/device/manage-device","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"fei.gao","lastUpdatedAt":1741860393000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Add Device","permalink":"/docs/device/create-device"},"next":{"title":"Data Collection Client Configuration","permalink":"/docs/device/device-collector"}}');var s=n(25105),o=n(27890);const a={sidebar_position:3},c="Managing Devices",d={},l=[{value:"Device Management Basics",id:"device-management-basics",level:2},{value:"Device Information Filtering and Table Settings",id:"device-information-filtering-and-table-settings",level:2},{value:"Filter Device Information",id:"filter-device-information",level:3},{value:"Table Settings",id:"table-settings",level:3},{value:"Device Custom Field Management",id:"device-custom-field-management",level:2},{value:"Edit Device Information",id:"edit-device-information",level:2},{value:"Device and Project Association Operations",id:"device-and-project-association-operations",level:2},{value:"Assign Devices to Projects",id:"assign-devices-to-projects",level:3},{value:"Remove Devices from Projects",id:"remove-devices-from-projects",level:3},{value:"Device Admission",id:"device-admission",level:2},{value:"View Data Collection Client Logs",id:"view-data-collection-client-logs",level:3},{value:"Uninstall Data Collection and Remote Control Clients",id:"uninstall-data-collection-and-remote-control-clients",level:3},{value:"Delete Devices",id:"delete-devices",level:2}];function r(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"managing-devices",children:"Managing Devices"})}),"\n",(0,s.jsx)(i.h2,{id:"device-management-basics",children:"Device Management Basics"}),"\n",(0,s.jsx)(i.p,{children:'Devices are managed at the organization level, and only users with organization member permissions or above can perform related operations. You can view the existing device list on the "Organization Management - Devices" page.'}),"\n",(0,s.jsx)(i.h2,{id:"device-information-filtering-and-table-settings",children:"Device Information Filtering and Table Settings"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: All ",(0,s.jsx)(i.strong,{children:"organization users"})," can view and filter device information"]})}),"\n",(0,s.jsx)(i.h3,{id:"filter-device-information",children:"Filter Device Information"}),"\n",(0,s.jsx)(i.p,{children:'The system by default supports filtering by "Device ID", "Access Status", and "Online Status" - these 3 fields. In the "More" option, you can also select custom device fields for filtering operations to meet more personalized information search needs.'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Organization Device Filtering",src:n(61843).A+"",width:"1861",height:"898"})}),"\n",(0,s.jsx)(i.h3,{id:"table-settings",children:"Table Settings"}),"\n",(0,s.jsx)(i.p,{children:"When there are many device fields, you can use the settings button in the upper right corner of the table to sort, hide, and perform other operations on the table display fields according to personal preferences, making it easier for users to focus on key information. At the same time, you can also use [Restore Default] to restore the table to its initial display state."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Table Display Settings",src:n(19410).A+"",width:"1861",height:"900"})}),"\n",(0,s.jsx)(i.h2,{id:"device-custom-field-management",children:"Device Custom Field Management"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: Only ",(0,s.jsx)(i.strong,{children:"organization administrators"})," have the authority to set device custom fields"]})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Entry:"}),' Through the "Organization Management - Settings - Device Field Configuration - Edit Configuration" path to enter the settings page, administrators can add relevant device fields according to actual needs. After saving the settings, these custom fields will appear in the device information display.']}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Notes:"})," If an administrator deletes a device custom field, all data for that field will be deleted and cannot be recovered, so operation must be done with caution."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Set Device Custom Fields",src:n(99417).A+"",width:"1861",height:"681"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Device Custom Fields Popup",src:n(24110).A+"",width:"1861",height:"890"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Device Table with Custom Fields",src:n(23487).A+"",width:"1860",height:"897"})}),"\n",(0,s.jsx)(i.h2,{id:"edit-device-information",children:"Edit Device Information"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: ",(0,s.jsx)(i.strong,{children:"Organization members and above roles"})," can edit and update device information"]})}),"\n",(0,s.jsx)(i.p,{children:"You can modify various information about the device by selecting the device you want to operate in the device list and clicking the [Edit] button, or by clicking the [Edit] button on the device details page."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit Device Information from Table",src:n(47144).A+"",width:"1863",height:"895"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Edit Device Information from Details",src:n(28054).A+"",width:"1859",height:"636"})}),"\n",(0,s.jsx)(i.h2,{id:"device-and-project-association-operations",children:"Device and Project Association Operations"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: ",(0,s.jsx)(i.strong,{children:"Organization members and above roles"})," can assign devices to projects"]})}),"\n",(0,s.jsx)(i.h3,{id:"assign-devices-to-projects",children:"Assign Devices to Projects"}),"\n",(0,s.jsx)(i.p,{children:"After a device is added to a project, if a data collection client is installed, the client will pull the rules that have been enabled in the project for automatic monitoring and diagnosis, and data collection tasks can also be created in the project to collect data."}),"\n",(0,s.jsx)(i.p,{children:"Select a device in the device list and click the [Add Associated Project] button;"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add from Organization Device",src:n(52562).A+"",width:"1862",height:"895"})}),"\n",(0,s.jsx)(i.p,{children:"Or click the [Add Device] button in the project to pull devices from the organization, both of which can complete the association between devices and projects."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add from Project Device",src:n(745).A+"",width:"1864",height:"899"})}),"\n",(0,s.jsx)(i.h3,{id:"remove-devices-from-projects",children:"Remove Devices from Projects"}),"\n",(0,s.jsx)(i.p,{children:"If a project no longer needs a certain device, you can [Remove from this Project] in the project. After removal, the device is still retained in the organization project, but the project no longer receives data collected by the device. If needed in the future, the device can be added back to this project for data collection."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Remove Project Device",src:n(18090).A+"",width:"1862",height:"898"})}),"\n",(0,s.jsx)(i.h2,{id:"device-admission",children:"Device Admission"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: ",(0,s.jsx)(i.strong,{children:"Only organization administrators"})," can perform device admission operations"]})}),"\n",(0,s.jsx)(i.p,{children:'After completing device addition, the [Admit] operation button will appear in the device list. On the device details page, you can separately admit the "Data Collection" and "Remote Control" modules.'}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Admit Device",src:n(19038).A+"",width:"1861",height:"664"})}),"\n",(0,s.jsx)(i.p,{children:'After "Data Collection" admission, the machine-side program will collect data according to rules and automatically upload it to the corresponding project;'}),"\n",(0,s.jsx)(i.p,{children:'After "Remote Control" admission, users can perform SSH connections, real-time visualization, and other operations on the machine through the coScene platform.'}),"\n",(0,s.jsx)(i.h3,{id:"view-data-collection-client-logs",children:"View Data Collection Client Logs"}),"\n",(0,s.jsx)(i.p,{children:"Execute the following command on the device side to view the log information of the data collection client, making it convenient for users to understand the situation during the data collection process."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-go",children:"journalctl --user-unit=cos -f -n 50\n"})}),"\n",(0,s.jsx)(i.h3,{id:"uninstall-data-collection-and-remote-control-clients",children:"Uninstall Data Collection and Remote Control Clients"}),"\n",(0,s.jsx)(i.p,{children:"On the device side, execute the following command to uninstall the data collection and remote control clients. During execution, observe the output until the uninstallation process is complete."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'/bin/bash -c "$(curl -fsSL https://download.coscene.cn/coscout/uninstall_en.sh)"\n'})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Uninstall Client",src:n(71603).A+"",width:"839",height:"425"})}),"\n",(0,s.jsx)(i.h2,{id:"delete-devices",children:"Delete Devices"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["\ud83e\udd16 Permission: When a device ",(0,s.jsx)(i.strong,{children:"has been admitted, only organization administrators"})," can delete it; if a device ",(0,s.jsx)(i.strong,{children:"has no admission information, organization members and above roles"})," can delete it"]})}),"\n",(0,s.jsx)(i.p,{children:"Select the device you want to delete in the device list and click [Delete Device], and confirm twice to delete. After deleting the device:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Admitted devices will have their admission canceled and will not be able to automatically upload data"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The device and requests from the device side will be cleared in the organization"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The device cannot be added to records"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Detailed information about the device cannot be viewed in records"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Delete Device",src:n(11072).A+"",width:"1861",height:"662"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.p,{children:"Through the above steps and operation instructions, you can comprehensively manage device operations to ensure the effective application and maintenance of devices in organizations and projects."}),"\n",(0,s.jsx)(i.p,{children:"If you have any questions, please feel free to contact us for support."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},19038:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-access-device-2-2fdc3207475c3796f3b69906fb65e52c.png"},18090:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-delete-project-device-00719377cb3e4e683b55692a0cc05697.png"},52562:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-add-project-01-3d7ee4df053dc6c591dc951dced1693c.png"},745:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-add-project-02-1adfbdae09cde2b8b87d46420cae0973.png"},11072:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-delete-32e329b4d248cda70ef27f3d3b3d0991.png"},28054:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-details-edit-ee44c591a6121f339b903b68dad85316.png"},61843:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-filter-64cf208a695caa522e708a9d84570344.png"},47144:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-table-edit-7e8cfd957fd356ab8a185cdcb82bdb04.png"},23487:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-table-fields-4e8ad7290e660b1fb542e16b41fc2e4d.png"},19410:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-device-table-setting-9bb04bb91238d5a65c5059ac3e90a6cc.png"},24110:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-fields-popup-47065f842b11693aac49247ef4e23325.png"},99417:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-setting-device-fields-b56698cb1911324ec9345084ad250eab.png"},71603:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/4-3-unload-1-213c87f56fa8739c9c6b32195947b346.png"},27890:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>c});var t=n(58101);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);