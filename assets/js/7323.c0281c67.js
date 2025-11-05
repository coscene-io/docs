"use strict";(self.webpackChunk_coscene_io_docs=self.webpackChunk_coscene_io_docs||[]).push([["7323"],{50411:function(t,e,a){function l(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>l}),(0,a(20962).K2)(l,"populateCommonDb")},54934:function(t,e,a){a.d(e,{diagram:()=>m});var l=a(50411),r=a(37006),o=a(46665),c=a(20962),i=a(56690),n={packet:[]},s=structuredClone(n),d=c.UI.packet,k=(0,c.K2)(()=>{let t=(0,r.$t)({...d,...(0,c.zj)().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),p=(0,c.K2)(()=>s.packet,"getPacket"),b={pushWord:(0,c.K2)(t=>{t.length>0&&s.packet.push(t)},"pushWord"),getPacket:p,getConfig:k,clear:(0,c.K2)(()=>{(0,c.IU)(),s=structuredClone(n)},"clear"),setAccTitle:c.SV,getAccTitle:c.iN,setDiagramTitle:c.ke,getDiagramTitle:c.ab,getAccDescription:c.m7,setAccDescription:c.EI},g=(0,c.K2)(t=>{(0,l.S)(t,b);let e=-1,a=[],r=1,{bitsPerRow:o}=b.getConfig();for(let{start:l,end:i,label:n}of t.blocks){if(i&&i<l)throw Error(`Packet block ${l} - ${i} is invalid. End must be greater than start.`);if(l!==e+1)throw Error(`Packet block ${l} - ${i??l} is not contiguous. It should start from ${e+1}.`);for(e=i??l,c.Rm.debug(`Packet block ${l} - ${e} with label ${n}`);a.length<=o+1&&b.getPacket().length<1e4;){let[t,e]=f({start:l,end:i,label:n},r,o);if(a.push(t),t.end+1===r*o&&(b.pushWord(a),a=[],r++),!e)break;({start:l,end:i,label:n}=e)}}b.pushWord(a)},"populate"),f=(0,c.K2)((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),h={parse:(0,c.K2)(async t=>{let e=await (0,i.qg)("packet",t);c.Rm.debug(e),g(e)},"parse")},u=(0,c.K2)((t,e,a,l)=>{let r=l.db,i=r.getConfig(),{rowHeight:n,paddingY:s,bitWidth:d,bitsPerRow:k}=i,p=r.getPacket(),b=r.getDiagramTitle(),g=n+s,f=g*(p.length+1)-(b?0:n),h=d*k+2,u=(0,o.D)(e);for(let[t,e]of(u.attr("viewbox",`0 0 ${h} ${f}`),(0,c.a$)(u,f,h,i.useMaxWidth),p.entries()))$(u,e,t,i);u.append("text").text(b).attr("x",h/2).attr("y",f-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),$=(0,c.K2)((t,e,a,{rowHeight:l,paddingX:r,paddingY:o,bitWidth:c,bitsPerRow:i,showBits:n})=>{let s=t.append("g"),d=a*(l+o)+o;for(let t of e){let e=t.start%i*c+1,a=(t.end-t.start+1)*c-r;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",l).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+l/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!n)continue;let o=t.end===t.start,k=d-2;s.append("text").attr("x",e+(o?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",o?"middle":"start").text(t.start),o||s.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),x={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},m={parser:h,db:b,renderer:{draw:u},styles:(0,c.K2)(({packet:t}={})=>{let e=(0,r.$t)(x,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);