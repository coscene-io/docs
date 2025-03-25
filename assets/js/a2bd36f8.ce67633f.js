"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[4685],{476:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4-3-org-collector-d340ad553e371c5b25adfa348669f683.png"},9248:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"device/device-collector","title":"Data Collection Client Configuration","description":"Devices with granted access can automatically upload data to projects according to data collection rules. Collection rules apply to all devices using a shared configuration. If you need to divide collection rules by project, please refer to About Automatic Data Collection and Diagnostics to use the rule engine to meet your requirements.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/device/4-device-collector.md","sourceDirName":"device","slug":"/device/device-collector","permalink":"/docs/device/device-collector","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1740656428000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Managing Devices","permalink":"/docs/device/manage-device"},"next":{"title":"Device Replacement, Upgrade, and Uninstallation Guide","permalink":"/docs/device/change-device-guide"}}');var o=i(25105),c=i(73331);const l={sidebar_position:4},r="Data Collection Client Configuration",s={},a=[{value:"About Data Collection Client Configuration",id:"about-data-collection-client-configuration",level:2},{value:"Entry",id:"entry",level:2},{value:"Collection Rule Format Details",id:"collection-rule-format-details",level:2},{value:"Data Collector Settings (collector)",id:"data-collector-settings-collector",level:3},{value:"Storage Settings (mod)",id:"storage-settings-mod",level:3},{value:"Device Event Properties (device)",id:"device-event-properties-device",level:3},{value:"Rule Trigger Topics (topic)",id:"rule-trigger-topics-topic",level:3},{value:"Update Settings (updater)",id:"update-settings-updater",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"data-collection-client-configuration",children:"Data Collection Client Configuration"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Devices with granted access can automatically upload data to projects according to data collection rules. Collection rules apply to all devices using a shared configuration. If you need to divide collection rules by project, please refer to ",(0,o.jsx)(n.a,{href:"/docs/use-case/data-diagnosis/intro",children:"About Automatic Data Collection and Diagnostics"})," to use the rule engine to meet your requirements."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"about-data-collection-client-configuration",children:"About Data Collection Client Configuration"}),"\n",(0,o.jsx)("div",{style:{padding:"12px 16px",backgroundColor:"#EFF6FF",borderRadius:"4px",border:"1px solid",borderColor:"#2563EB",color:"#111827"},children:(0,o.jsxs)("p",{style:{margin:0},children:["\ud83e\udd16 Permission: Only ",(0,o.jsx)(n.strong,{children:"Organization Administrators"})," can edit collection rules, which apply uniformly to all organization devices"]})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"Data collection configuration is managed by organization administrators and applies to devices with installed data collection clients within the organization. These devices automatically monitor data based on collection rules, and all organization devices share one set of collection configurations."}),"\n",(0,o.jsxs)(n.p,{children:["If you need to divide collection rules by project, please refer to ",(0,o.jsx)(n.a,{href:"/docs/use-case/data-diagnosis/intro",children:"About Automatic Data Collection and Diagnostics"})," to use the rule engine to meet your requirements."]}),"\n",(0,o.jsx)(n.p,{children:"During collection configuration, you need to define key information such as device ID location, device monitoring directory, client initialization monitoring time range, collection directory, rule trigger topics, and client auto-update mechanism. After device access is granted, it will actively pull the organization's configured collection rule information and run dynamically on the machine end accordingly."}),"\n",(0,o.jsx)(n.h2,{id:"entry",children:"Entry"}),"\n",(0,o.jsx)(n.p,{children:'On the "Devices" tab of the organization management page, click the [Edit Collection Rules] button to enter the data collection client configuration editing interface. YAML language is used for editing here.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"org-device",src:i(476).A+"",width:"1863",height:"302"})}),"\n",(0,o.jsx)(n.p,{children:"After completing the configuration, click [Save], and the configuration will take effect immediately for all organization devices with granted collection client access."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"org-dev-rule-save",src:i(59978).A+"",width:"1847",height:"895"})}),"\n",(0,o.jsx)(n.h2,{id:"collection-rule-format-details",children:"Collection Rule Format Details"}),"\n",(0,o.jsx)(n.p,{children:"Collection rules primarily configure 5 modules:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Module Name"}),(0,o.jsx)(n.th,{children:"Function Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Data Collector Settings (collector)"}),(0,o.jsx)(n.td,{children:"Whether to delete device-end data after collection is complete"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Storage Settings (mod)"}),(0,o.jsx)(n.td,{children:"Device ID storage location; monitoring directory; client initialization monitoring time range; collection directory"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Device Event Properties (device)"}),(0,o.jsx)(n.td,{children:"Event attribute values"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Rule Trigger Topics (topic)"}),(0,o.jsx)(n.td,{children:"Rule trigger topics"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Update Settings (updater)"}),(0,o.jsx)(n.td,{children:"Whether to enable auto-update for the current program"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"Example template as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"collector:\n  delete_after_interval_in_hours: 48 # Default value is -1, meaning no deletion\n\nmod:\n  # mod name, default is 'default', supports monitoring files in specified device directories\n  # For custom monitoring methods, please contact coScene\n  name: 'default'\n\n  conf:\n    # Enable switch, true/false, enabled by default\n    enabled: true\n\n    # Assuming there's a file /home/coscene/example.yaml on the machine end with content:\n    # serial_num: 1234\n    #\n    # Then during machine registration, it will read the serial_num field value (1234) from example.yaml as the machine's unique identifier\n    sn_file: /home/coscene/example.yaml\n    sn_field: serial_num\n\n    # Device monitoring directories, used as rule monitoring directories in projects\n    listen_dirs:\n      - /home/bag/\n\n    # Files won't be monitored/collected when the time difference between current time and file update time exceeds {skip_period_hours}\n    skip_period_hours: 2\n\n    # Device collection directories, used as specified directories for project data collection tasks and rule collection\n    collect_dirs:\n      - /home/bag/\n      - /home/log/\n\n# Assuming there's a file /home/coscene/device.yaml on the machine end with content:\n# soft_version: v1.0\n#\n# After device rule triggering, it will read soft_version: v1.0 from device.yaml as the generated event's attribute value\n# To view the event statistics panel, please contact coScene\ndevice:\n  extra_files:\n    - /home/coscene/device1.yaml\n    - /home/coscene/device2.yaml\n\n# Topics serve as options for rule trigger topics in projects to narrow down rule matching scope\n# Assuming there's an error_code topic\ntopics:\n  - error_code\n\n# Auto update\nupdater:\n  # Auto update switch, true/false, disabled by default\n  enabled: false\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let's go through each function and its usage:"}),"\n",(0,o.jsx)(n.h3,{id:"data-collector-settings-collector",children:"Data Collector Settings (collector)"}),"\n",(0,o.jsx)(n.p,{children:"This module is used to configure whether to delete device-end data after collection is complete, effectively managing device storage. Configurable parameters include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"delete_after_upload"}),": Default value is false. If set to true, device-end data will be deleted after upload."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"delete_after_interval_in_hours"}),": Default value is -1, meaning no deletion; if set to a specific duration (e.g., 48), it will delete data older than that duration."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"scan_interval_in_secs"}),": Default value is 60, meaning the folder is scanned every 60 seconds."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# Data collector settings\ncollector:\n  delete_after_upload: true # Default value is false\n  delete_after_interval_in_hours: 48 # Default value is -1, meaning no deletion; otherwise will delete data older than 48 hours\n  scan_interval_in_secs: 60 # Default value: 60, scans folder every 60s\n"})}),"\n",(0,o.jsx)(n.h3,{id:"storage-settings-mod",children:"Storage Settings (mod)"}),"\n",(0,o.jsx)(n.p,{children:"Mainly responsible for configuring device-end data storage location information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"name"}),": Default name is ",(0,o.jsx)(n.code,{children:"default"}),", supports monitoring files in specified device directories. For custom monitoring methods, please contact coScene."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"conf"}),": Enable switch, ",(0,o.jsx)(n.code,{children:"true/false"}),", enabled by default."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sn_file"}),": Assuming there's a corresponding file on the machine end (e.g., ",(0,o.jsx)(n.code,{children:"/home/coscene/example.yaml"}),") containing a unique device identifier (e.g., ",(0,o.jsx)(n.code,{children:"serial_num: 1234"}),"), during machine registration, it will read the specified field value (",(0,o.jsx)(n.code,{children:"1234"}),") as the machine's unique identifier."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sn_field"}),": Corresponding identifier field name."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"listen_dirs"}),": Device monitoring directories, used as rule monitoring directories in projects."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"collect_dirs"}),": Device collection directories, used as specified directories for project data collection tasks and rule collection."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"mod:\n  # mod name, default is 'default', supports monitoring files in specified device directories\n  # For custom monitoring methods, please contact coScene\n  name: 'default'\n\n  conf:\n    # Enable switch, true/false, enabled by default\n    enabled: true\n\n    # Assuming there's a file /home/coscene/example.yaml on the machine end with content:\n    # serial_num: 1234\n    #\n    # Then during machine registration, it will read the serial_num field value (1234) from example.yaml as the machine's unique identifier\n    sn_file: /home/coscene/example.yaml\n    sn_field: serial_num\n\n    # Device monitoring directories, used as rule monitoring directories in projects\n    listen_dirs:\n      - /home/bag/\n\n    # Files won't be monitored/collected when the time difference between current time and file update time exceeds {skip_period_hours}\n    skip_period_hours: 2\n\n    # Device collection directories, used as specified directories for project data collection tasks and rule collection\n    collect_dirs:\n      - /home/bag/\n      - /home/log/\n"})}),"\n",(0,o.jsx)(n.h3,{id:"device-event-properties-device",children:"Device Event Properties (device)"}),"\n",(0,o.jsxs)(n.p,{children:["Assuming there's a specific file on the machine end (e.g., ",(0,o.jsx)(n.code,{children:"/home/coscene/device.yaml"})," with content ",(0,o.jsx)(n.code,{children:"soft_version: v1.0"}),"), after device rule triggering, it will read the specified content (e.g., ",(0,o.jsx)(n.code,{children:"soft_version: v1.0"}),") as the generated event's attribute value. Additional related files can be configured through ",(0,o.jsx)(n.code,{children:"extra_files"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# Assuming there's a file /home/coscene/device.yaml on the machine end with content:\n# soft_version: v1.0\n#\n# After device rule triggering, it will read soft_version: v1.0 from device.yaml as the generated event's attribute value\n# To view the event statistics panel, please contact coScene\ndevice:\n  extra_files:\n    - /home/coscene/device1.yaml\n    - /home/coscene/device2.yaml\n"})}),"\n",(0,o.jsx)(n.h3,{id:"rule-trigger-topics-topic",children:"Rule Trigger Topics (topic)"}),"\n",(0,o.jsxs)(n.p,{children:["Topics serve as options for rule trigger topics in projects, helping narrow down rule matching scope and improve monitoring efficiency. For example, assuming there's an ",(0,o.jsx)(n.code,{children:"error_code"})," topic:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# Topics serve as options for rule trigger topics in projects to narrow down rule matching scope\n# Assuming there's an error_code topic\ntopics:\n  - error_code\n"})}),"\n",(0,o.jsx)(n.h3,{id:"update-settings-updater",children:"Update Settings (updater)"}),"\n",(0,o.jsxs)(n.p,{children:["Used to configure whether to auto-update the data collection client. Default is ",(0,o.jsx)(n.code,{children:"false"})," (no auto-update). If changed to ",(0,o.jsx)(n.code,{children:"true"}),", the device will automatically update when connected to the internet after we release a new version of the data collection client."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# Auto update\nupdater:\n  # Auto update switch, true/false, disabled by default\n  enabled: false\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Through these detailed steps and instructions, administrators can comprehensively and accurately configure the device data collection client, ensuring efficient operation of device data collection."}),"\n",(0,o.jsx)(n.p,{children:"If you have any questions, please feel free to contact us for support."})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},59978:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/4-3-device-save-collector-2a1bcb019c8e46677dc29ad7ff36ad1b.png"},73331:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(58101);const o={},c=t.createContext(o);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);