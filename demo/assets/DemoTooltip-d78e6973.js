import{d as b,r as k,c as r,a as o,b as c,w as t,e,f as n,o as i,F as x,g as C,h as l,t as g}from"./index-81aa7215.js";const T={class:"page"},y={class:"page-header"},B={class:"page-main"},w=o("h2",null,"Tooltip",-1),D=o("h3",null,"Basic",-1),H={class:"flex-group"},L=o("h3",null,"Popover + Tooltip",-1),N=o("span",{tabindex:"0"}," Tooltip in Popover ",-1),F=b({__name:"DemoTooltip",setup(P){const p=k([{title:"🏠首頁",url:"/"},{title:"Tooltip"}]);return(u,V)=>{const d=n("pi-breadcrumb-item"),m=n("pi-breadcrumb"),f=n("router-link"),s=n("pi-button"),a=n("pi-tooltip"),h=n("pi-popover");return i(),r("div",T,[o("div",y,[(i(),c(m,{key:u.$route.path},{default:t(()=>[(i(!0),r(x,null,C(p.value,(_,v)=>(i(),c(d,{key:`pathIndex-${v}`,title:`前往${_.title}`,to:_.url},{default:t(()=>[l(g(_.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),o("div",B,[e(f,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:t(()=>[l(":::")]),_:1}),w,o("section",null,[D,o("div",H,[e(a,{"arrow-placement":"lr",text:"Left Content is Here."},{default:t(()=>[e(s,null,{default:t(()=>[l(" Left ")]),_:1})]),_:1}),e(a,{text:"Center Content is Here."},{default:t(()=>[e(s,null,{default:t(()=>[l(" Center ")]),_:1})]),_:1}),e(a,{text:"Right Content is Here. "},{default:t(()=>[e(s,null,{default:t(()=>[l(" Right ")]),_:1})]),_:1})])]),o("section",null,[L,e(h,null,{default:t(()=>[e(a,{"arrow-placement":"lr",text:"Tooltip Content in Popover Content"},{default:t(()=>[N]),_:1})]),_:1})])])])}}});export{F as default};
