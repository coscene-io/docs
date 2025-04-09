"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([[6681],{47324:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"image/build-image","title":"Preparing Images","description":"Using Docker to build your own images.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/image/2-build-image.md","sourceDirName":"image","slug":"/image/build-image","permalink":"/docs/image/build-image","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"Zhexuan Yang","lastUpdatedAt":1738910751000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"About Docker Images","permalink":"/docs/image/about-docker-image"},"next":{"title":"Push Images","permalink":"/docs/image/push-image"}}');var r=i(25105),t=i(73331);const a={sidebar_position:2},o="Preparing Images",l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing Image Files",id:"preparing-image-files",level:2},{value:"Building the Image",id:"building-the-image",level:2},{value:"Running the Image",id:"running-the-image",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"preparing-images",children:"Preparing Images"})}),"\n",(0,r.jsx)(n.p,{children:"Using Docker to build your own images."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Docker must be installed and running on your machine. If you need to install Docker, please refer to the corresponding ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"installation documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"preparing-image-files",children:"Preparing Image Files"}),"\n",(0,r.jsx)(n.p,{children:"Create a new folder containing the dockerfile and related test code. Below is a demonstration using a simple Python file named hello.py and a dockerfile."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Example dockerfile"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'FROM python:3.12 AS builder\n\n# copy files\nCOPY hello.py /usr/src/app/\n\nWORKDIR /usr/src/app\n\n# set command/entrypoint, adapt to fit your needs\nCMD ["python", "hello.py"]\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Example test code"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'if __name__ == "__main__":\n    print("Hello, World!")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"building-the-image",children:"Building the Image"}),"\n",(0,r.jsxs)(n.p,{children:["Let's assume the image name is ",(0,r.jsx)(n.code,{children:"cr.coscene.cn/coscene/helloworld"})," with the tag ",(0,r.jsx)(n.code,{children:"latest"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker build -f dockerfile -t cr.coscene.cn/coscene/helloword:latest .\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you need cross-compilation support for different platforms, please check the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/build/building/multi-platform/",children:"documentation"})]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-image",children:"Running the Image"}),"\n",(0,r.jsx)(n.p,{children:"After the image is built, we can run it to verify the code functionality."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run cr.coscene.cn/coscene/helloword:latest\n"})}),"\n",(0,r.jsx)(n.p,{children:"Check the output - if the image was built correctly, it should show our expected result."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(47694).A+"",width:"1114",height:"146"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},47694:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/build-image-1-a1c345055b93adf6d57249f53c8ff570.png"},73331:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(58101);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);