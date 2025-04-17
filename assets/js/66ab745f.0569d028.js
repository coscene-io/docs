"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[9194],{35571:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"viz/extensions/api/custom-panels/settings-tree-node","title":"SettingsTreeNode","description":"\u4e00\u4e2a\u8282\u70b9\u4ee3\u8868\u8bbe\u7f6e\u6811\u4e2d\u7684\u5355\u4e2a\u9879\u76ee\u6216\u9879\u76ee\u7ec4\u3002","source":"@site/docs/viz/8-extensions/4-api/3-custom-panels/12-settings-tree-node.md","sourceDirName":"viz/8-extensions/4-api/3-custom-panels","slug":"/viz/extensions/api/custom-panels/settings-tree-node","permalink":"/docs/viz/extensions/api/custom-panels/settings-tree-node","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Qi He","lastUpdatedAt":1744870862000,"sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"SettingsTreeFieldValue","permalink":"/docs/viz/extensions/api/custom-panels/settings-tree-field-value"},"next":{"title":"SettingsTreeNodeAction","permalink":"/docs/viz/extensions/api/custom-panels/settings-tree-node-action"}}');var l=i(25105),t=i(73331);const r={sidebar_position:12},a="SettingsTreeNode",o={},d=[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"actions?",id:"actions",level:3},{value:"children?",id:"children",level:3},{value:"defaultExpansionState?",id:"defaultexpansionstate",level:3},{value:"error?",id:"error",level:3},{value:"fields?",id:"fields",level:3},{value:"icon?",id:"icon",level:3},{value:"label?",id:"label",level:3},{value:"renamable?",id:"renamable",level:3},{value:"order?",id:"order",level:3},{value:"visible?",id:"visible",level:3},{value:"enableVisibilityFilter?",id:"enablevisibilityfilter",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"settingstreenode",children:"SettingsTreeNode"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"type SettingsTreeNode = object;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u4e2a\u8282\u70b9\u4ee3\u8868\u8bbe\u7f6e\u6811\u4e2d\u7684\u5355\u4e2a\u9879\u76ee\u6216\u9879\u76ee\u7ec4\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,l.jsx)(n.h3,{id:"actions",children:"actions?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional actions: SettingsTreeNodeAction[];\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u6b64\u8282\u70b9\u4e0a\u6267\u884c\u7684\u64cd\u4f5c\u6570\u7ec4\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"children",children:"children?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional children: SettingsTreeChildren;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5d4c\u5957\u5728\u6b64\u8282\u70b9\u4e0b\u7684\u5176\u4ed6\u8bbe\u7f6e\u6811\u8282\u70b9\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"defaultexpansionstate",children:"defaultExpansionState?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'optional defaultExpansionState: "collapsed" | "expanded";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u8282\u70b9\u5e94\u8be5\u521d\u59cb\u6298\u53e0\uff0c\u5219\u8bbe\u7f6e\u4e3a collapsed\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"error",children:"error?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional error: string;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8868\u793a\u8282\u70b9\u4efb\u4f55\u9519\u8bef\u72b6\u6001\u7684\u53ef\u9009\u6d88\u606f\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"fields?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional fields: SettingsTreeFields;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u76f4\u63a5\u9644\u52a0\u5230\u6b64\u8282\u70b9\u7684\u5b57\u6bb5\u8f93\u5165\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional icon: SettingsIcon;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u663e\u793a\u5728\u8282\u70b9\u6807\u7b7e\u65c1\u8fb9\u7684\u53ef\u9009\u56fe\u6807\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"label",children:"label?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional label: string;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u663e\u793a\u5728\u6b64\u8282\u70b9\u9876\u90e8\u7684\u53ef\u9009\u6807\u7b7e\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"renamable",children:"renamable?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional renamable: boolean;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4e3a true\uff0c\u5219\u7528\u6237\u53ef\u7f16\u8f91\u8282\u70b9\u6807\u7b7e\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"order",children:"order?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional order: number | string;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u9009\u6392\u5e8f\u987a\u5e8f\uff0c\u7528\u4e8e\u8986\u76d6\u81ea\u7136\u5bf9\u8c61\u6392\u5e8f\u3002\u6240\u6709\u5177\u6709\u6392\u5e8f\u987a\u5e8f\u7684\u8282\u70b9\u5c06\u5728\u6ca1\u6709\u6392\u5e8f\u987a\u5e8f\u7684\u8282\u70b9\u4e4b\u524d\u6e32\u67d3\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6ca1\u6709\u660e\u786e\u987a\u5e8f\u7684\u8282\u70b9\u5c06\u6309\u7167 ECMA \u5bf9\u8c61\u6392\u5e8f\u89c4\u5219\u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys",children:"https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"visible",children:"visible?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional visible: boolean;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u9009\u53ef\u89c1\u6027\u72b6\u6001\u3002\u5982\u679c\u672a\u5b9a\u4e49\uff0c\u8282\u70b9\u7f16\u8f91\u5668\u5c06\u663e\u793a\u53ef\u89c1\u6027\u5207\u6362\u6309\u94ae\u5e76\u5411\u64cd\u4f5c\u5904\u7406\u7a0b\u5e8f\u53d1\u9001\u66f4\u65b0\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"enablevisibilityfilter",children:"enableVisibilityFilter?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"optional enableVisibilityFilter: boolean;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6309\u53ef\u89c1\u6027\u72b6\u6001\u8fc7\u6ee4\u5b50\u8282\u70b9"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},73331:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(58101);const l={},t=s.createContext(l);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);