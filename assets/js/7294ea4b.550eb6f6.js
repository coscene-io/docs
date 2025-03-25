"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[7827],{73331:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(58101);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},96465:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"sim-and-tests/regression/yaml-sample","title":"Configuration Yaml Example","description":"This chapter introduces the syntax rules and usage examples of the test suite configuration file (cos.yaml), helping you quickly configure and manage test suites.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/sim-and-tests/regression/9-yaml-sample.md","sourceDirName":"sim-and-tests/regression","slug":"/sim-and-tests/regression/yaml-sample","permalink":"/docs/sim-and-tests/regression/yaml-sample","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Yujing Zheng","lastUpdatedAt":1742308305000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Test Metadata and Test Results","permalink":"/docs/sim-and-tests/regression/status-and-output"},"next":{"title":"\u5f00\u53d1\u8005","permalink":"/docs/category/developer"}}');var i=s(25105),r=s(73331);const l={sidebar_position:9},a="Configuration Yaml Example",c={},o=[{value:"Customize Testing Suite",id:"customize-testing-bundle",level:2},{value:"Define Multiple Test Suites",id:"define-multiple-jobs",level:2},{value:"Use Labels to Call Records",id:"query-records-by-labels",level:2},{value:"Specify Resource Size",id:"specify-resources",level:2},{value:"Auto-Triggering Tests",id:"auto-triggering",level:2},{value:"Output Test Results",id:"save-artifacts",level:2},{value:"Generate Shadow Mode Artifacts",id:"generate-shadow-mode",level:2},{value:"Managing Multiple Tests",id:"manage-multiple-tests",level:2},{value:"Message Notifications",id:"notifications",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuration-yaml-example",children:"Configuration Yaml Example"})}),"\n",(0,i.jsx)(n.p,{children:"This chapter introduces the syntax rules and usage examples of the test suite configuration file (cos.yaml), helping you quickly configure and manage test suites."}),"\n",(0,i.jsxs)(n.p,{children:["The system supports parsing YAML format configuration files, and the file name must be ",(0,i.jsx)(n.strong,{children:"cos.yaml"})," or ",(0,i.jsx)(n.strong,{children:"cos.yml"}),". You can create one by referring to the examples below:"]}),"\n",(0,i.jsx)(n.h2,{id:"customize-testing-bundle",children:"Customize Testing Suite"}),"\n",(0,i.jsx)(n.p,{children:"Set the test suite name, test type, and the command used to run the test."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '1'\njobs:\n  - name: 'Test Positioning Issue-1'\n    type: 'generic'\n    images:\n      base: cr.coscene.cn/coscene-hello/position:v1.0.0\n    parameters:\n      script:\n        - /bin/sh\n        - -c\n        - 'echo hello'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"name: Test Suite Name"})}),"\n",(0,i.jsx)(n.p,{children:"Custom test suite name displayed on the web interface."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"type: Test Type"})}),"\n",(0,i.jsx)(n.p,{children:'Currently supported test types are: "generic" and "gazebo".'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"images - base: Image Address"})}),"\n",(0,i.jsx)(n.p,{children:"The image serves as the virtual environment for running batch tests. You need to specify the image version address in the configuration file for each test suite to use when running."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"parameters - scripts: Running Parameters"})}),"\n",(0,i.jsx)(n.p,{children:"Used to specify the command each test suite runs."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"define-multiple-jobs",children:"Define Multiple Test Suites"}),"\n",(0,i.jsx)(n.p,{children:"A batch test consists of one or more test suites, which can run in parallel."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '1'\njobs:\n  - name: 'Test Positioning Issue-1'\n\n  - name: 'Test Positioning Issue-2'\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"query-records-by-labels",children:"Use Labels to Call Records"}),"\n",(0,i.jsx)(n.p,{children:"Set the labels used for associated records: Each test case will use its associated record as test data, and the associated record will be the record that matches the conditions of the labels."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"records:\n  labels:\n    - 'Positioning Issue'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"records - labels: Corresponding record labels"})}),"\n",(0,i.jsx)(n.p,{children:"Writing rules for the labels section are as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Logical Operators"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Supports and only supports three logical operators: ",(0,i.jsx)(n.code,{children:"AND"}),", ",(0,i.jsx)(n.code,{children:"OR"}),", and ",(0,i.jsx)(n.code,{children:"NOT"}),". All operators must be in uppercase."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Parentheses ",(0,i.jsx)(n.code,{children:"("})," ",(0,i.jsx)(n.code,{children:")"})," can be used to clarify the priority of operators. Note that ",(0,i.jsx)(n.code,{children:"OR"})," has a higher priority, i.e., ",(0,i.jsx)(n.code,{children:"a AND b OR c"})," is equivalent to ",(0,i.jsx)(n.code,{children:"a AND (b OR c)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["After ",(0,i.jsx)(n.code,{children:"NOT"})," can only be a label, not an expression, while after ",(0,i.jsx)(n.code,{children:"AND"})," and ",(0,i.jsx)(n.code,{children:"OR"})," can be either a label or an expression."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, ",(0,i.jsx)(n.code,{children:"NOT a"})," is valid, but ",(0,i.jsx)(n.code,{children:"NOT (a AND b)"})," is invalid (it can be rewritten as ",(0,i.jsx)(n.code,{children:"NOT a OR NOT b"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The relationship between labels on multiple lines is equivalent to ",(0,i.jsx)(n.code,{children:"OR"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Spaces"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AND"})," and ",(0,i.jsx)(n.code,{children:"OR"})," must each have a space before and after; ",(0,i.jsx)(n.code,{children:"NOT"})," must have a space after it."]}),"\n",(0,i.jsx)(n.li,{children:"Labels cannot contain spaces."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Others"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Labels cannot contain substrings of ",(0,i.jsx)(n.code,{children:"AND"}),", ",(0,i.jsx)(n.code,{children:"OR"}),", or ",(0,i.jsx)(n.code,{children:"NOT"}),". For example, ",(0,i.jsx)(n.code,{children:"label_NO"})," is an invalid label."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Labels cannot contain parentheses ",(0,i.jsx)(n.code,{children:"("})," ",(0,i.jsx)(n.code,{children:")"}),". For example, ",(0,i.jsx)(n.code,{children:"(label"})," is an invalid label."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pure numeric labels must be enclosed in quotes ",(0,i.jsx)(n.code,{children:"'"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"specify-resources",children:"Specify Resource Size"}),"\n",(0,i.jsx)(n.p,{children:"By default, batch tests provide a resource size of 1 core and 2 GB. You can manually specify the size in the parameter list."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"parameters:\n  resource: small  # 1C2G\n\nparameters:\n  resource: medium # 2C4G\n\nparameters:\n  resource: large  # 4C8G\n\nparameters:\n  resource: xlarge # 8C16G\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"auto-triggering",children:"Auto-Triggering Tests"}),"\n",(0,i.jsx)(n.p,{children:'Set the conditions for automatically triggering tests. Currently, when the uploaded test package\'s "category" or "label" meets the preset conditions, batch tests will be automatically triggered.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"on:\n  bundlePush:\n    category:\n      - Positioning Optimization\n    tag:\n      - v0.0.1\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"on: Set triggering conditions"})}),"\n",(0,i.jsx)(n.p,{children:"Used to control when to automatically trigger tests."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"bundlePush: Set trigger on test package upload"})}),"\n",(0,i.jsx)(n.p,{children:"When a test package is uploaded and conditions are met, the test will be automatically triggered."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"category: Test package category"})}),"\n",(0,i.jsx)(n.p,{children:"Used to specify the category name of the test package that triggers the test."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"tag: Test package label"})}),"\n",(0,i.jsx)(n.p,{children:"Used to specify the label name of the test package that triggers the test."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"When there is no 'on' or only 'on', batch tests will not be automatically triggered."}),"\n",(0,i.jsx)(n.li,{children:"If there is only 'bundlePush', any uploaded test package will automatically trigger the batch test."}),"\n",(0,i.jsx)(n.li,{children:"With 'category' or 'tag', only test packages that meet preset conditions will trigger the batch test."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"save-artifacts",children:"Output Test Results"}),"\n",(0,i.jsxs)(n.p,{children:["In the 'script' field of the configuration file, use the ",(0,i.jsx)(n.code,{children:"pytest --junitxml=path"})," command to create an XML format file at ",(0,i.jsx)(n.code,{children:"path"})," as the result file. Example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  - name: 'Positioning Test'\n    type: 'generic'\n    images:\n      base: cr.coscene.cn/coscene-hello/position:v1.0.0\n    parameters:\n      script:\n        - python\n        - --junitxml\n        - /cos/artifacts/report.xml\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"generate-shadow-mode",children:"Generate Shadow Mode Artifacts"}),"\n",(0,i.jsxs)(n.p,{children:["In the 'script' field of the configuration file, use the command to output the file to ",(0,i.jsx)(n.code,{children:"/cos/outputs"})," as the test output. Example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  - name: 'Positioning Test'\n    type: 'generic'\n    images:\n      base: cr.coscene.cn/coscene-hello/position:v1.0.0\n    parameters:\n      script:\n        - bash\n        - '-c'\n        - cp /cos/files/output.bag /cos/outputs/#output.bag\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"manage-multiple-tests",children:"Managing Multiple Tests"}),"\n",(0,i.jsx)(n.p,{children:"A single configuration file can manage multiple batch tests. Use --- as a delimiter between different tests. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '1'\njobs:\n  - name: 'Positioning Test'\n    type: 'generic'\n    images:\n      base: cr.coscene.cn/coscene-hello/position:v1.0.0\n\n---\nversion: '1'\njobs:\n  - name: 'Recognition Test'\n    type: 'generic'\n    images:\n      base: cr.coscene.cn/coscene-hello/recognize:v1.0.0\n"})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"notifications",children:"Message Notifications"}),"\n",(0,i.jsx)(n.p,{children:"Set up the message notification template: Once the batch test is completed, send a message to the DingTalk group. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'jobs:\n  - name: \'Positioning Test\'\n    type: \'generic\'\n    images:\n      base: cr.coscene.cn/coscene-hello/position:v1.0.0\n    notifications:\n      - dingTalkBot:\n          accessToken: 4d96da******91246c\n          titleTemplate: matrix\n          contentTemplate: >-\n            {{ job.name }} completed\n\n            Test ID: {{ workflow.number }}\n\n            Associated Workflow: {{ workflow.link }}\n\n            Test Package Triggered: {{ job.test_bundle_filename }}\n\n            Start Time: {{ job.start_time | formatByOffset:"+08:00" }}\n\n            End Time: {{ job.end_time | formatByOffset:"+08:00" }}\n\n            Test Cases: Total: {{ job.total_test_cases }}, Passed: {{ job.success_count }}, Failed: {{ job.fail_count }}\n\n            Images: {% if ("base" in job.image_names) %} {{ job.image_names.base }} {% endif %}{% if ("robot" in job.image_names) %} {{ job.image_names.robot }} {% endif %}\n\n            Test Duration: {{ job.duration }}\n\n            CPU Time Consumed by Test: {{ job.total_machine_time }}\n\n            Parameters:\n            {% for key,item in job.parameters.script %}{{ key }}:{{ item }}{% endfor %}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"notifications: Set message notification template"})}),"\n",(0,i.jsx)(n.p,{children:"Used to control when to send message notifications."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"dingTalkBot: Notify DingTalk group"})}),"\n",(0,i.jsx)(n.p,{children:"Currently, only supports sending messages to DingTalk groups."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"accessToken: Set DingTalk group permissions"})}),"\n",(0,i.jsx)(n.p,{children:"Set the DingTalk group's token to gain permission to send notifications to the DingTalk group."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"contentTemplate: Message template content"})}),"\n",(0,i.jsx)(n.p,{children:"Customize the message template content."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Available Variables"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type (golang)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"workflow.link"}),(0,i.jsx)(n.td,{children:"URL of the batch test"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"workflow.number"}),(0,i.jsx)(n.td,{children:"Run ID of the batch test"}),(0,i.jsx)(n.td,{children:"int"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.name"}),(0,i.jsx)(n.td,{children:"Name of the test suite run"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.start_time"}),(0,i.jsx)(n.td,{children:"Start time of the test suite (13-digit unix millisecond timestamp)"}),(0,i.jsx)(n.td,{children:"int64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.end_time"}),(0,i.jsx)(n.td,{children:"End time of the test suite (13-digit unix millisecond timestamp)"}),(0,i.jsx)(n.td,{children:"int64"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.duration"}),(0,i.jsx)(n.td,{children:"Duration of the test suite"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.total_machine_time"}),(0,i.jsx)(n.td,{children:"CPU time consumed by the test, unit: core * seconds"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.total_test_cases"}),(0,i.jsx)(n.td,{children:"Total number of test cases executed"}),(0,i.jsx)(n.td,{children:"int"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.success_count"}),(0,i.jsx)(n.td,{children:"Number of test cases passed"}),(0,i.jsx)(n.td,{children:"int"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.fail_count"}),(0,i.jsx)(n.td,{children:"Number of test cases failed"}),(0,i.jsx)(n.td,{children:"int"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.image_names"}),(0,i.jsx)(n.td,{children:"Image addresses"}),(0,i.jsx)(n.td,{children:"map[string]string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.parameters"}),(0,i.jsx)(n.td,{children:"'parameters' in the test suite"}),(0,i.jsx)(n.td,{children:"map[string]interface"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"job.test_bundle_filename"}),(0,i.jsx)(n.td,{children:"Name of the test package run"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Reference: ",(0,i.jsx)(n.a,{href:"https://github.com/flosch/pongo2",children:"Django-syntax like templating-language"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Custom filters can be implemented."}),"\n",(0,i.jsxs)(n.p,{children:["a. ",(0,i.jsx)(n.code,{children:'formatByOffset:"$offset"'})]}),"\n",(0,i.jsxs)(n.p,{children:["Adjust the unix millisecond timestamp to the given ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_UTC_offsets",children:"utc-offset"})," time zone, and then output it as a string in the ",(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc3339",children:"RFC3339"})," format. For ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/UTC%2B00:00",children:"zero timezone"}),', please enter "+00:00".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# UTC: 2023-05-23T04:21:09Z\ninput: { "time": "1684815669768" }\n\n{{ time | formatByOffset:\\"+08:00\\" }}\n\noutput: 2023-05-23T12:21:09+08:00\n'})}),"\n",(0,i.jsxs)(n.p,{children:["b. ",(0,i.jsx)(n.code,{children:'naturalDuration:"$timeUnit"'})]}),"\n",(0,i.jsxs)(n.p,{children:["Supported timeunit: ",(0,i.jsx)(n.code,{children:"second"}),", ",(0,i.jsx)(n.code,{children:"millisecond"}),". It can be left blank, and the default is ",(0,i.jsx)(n.code,{children:"second"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Time conversion example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'input: { "duration" : "600" }\n\n{{ duration | naturalDuration:"second" }}\n\noutput: 10m0s\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);