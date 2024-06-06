import{_ as v}from"./favicon-2ee1abb4.js";import{d as k,r,c as p,a as t,b,w as m,e as u,f as V,o as i,F as C,g as S,h as s,t as z}from"./index-e13bd4f8.js";const B={class:"page"},D={class:"page-header"},F={class:"page-main"},N=t("h2",null,"Select",-1),P=t("h3",null,"Size",-1),$=t("h3",null,"Custom Placeholder",-1),M=t("h3",null,"Show Clear Button",-1),W=t("h3",null,"Prefix, Affix",-1),A=t("img",{src:v,alt:""},null,-1),E=t("img",{src:v,alt:""},null,-1),L=t("img",{src:v,alt:""},null,-1),T=t("img",{src:v,alt:""},null,-1),j=t("h3",null,"Colors",-1),q=t("h3",null,"Disabled",-1),G=t("h3",null,"Custom Popup Width",-1),H=t("h3",null,"Multiple",-1),J=t("h3",null,"Simple Search(Filter)",-1),R=k({__name:"DemoSelect",setup(K){const o=[{label:"label1",value:"1"},{label:"label2",value:"2"},{label:"label3",value:"3"},{type:"group",label:"第一群",options:[{label:"label10",value:"10"},{label:"label20",value:"20"},{label:"label30",value:"30"}]},{type:"group",label:"第二群",options:[{label:"label11",value:"11"},{label:"label21",value:"21"},{label:"label31",value:"31"}]},{label:"label2",value:"42"},{label:"label3",value:"43"}],a=r("1"),n=r(""),g=r([{title:"🏠首頁",url:"/"},{title:"Select"}]);return(U,e)=>{const y=V("pi-breadcrumb-item"),f=V("pi-breadcrumb"),x=V("router-link"),d=V("pi-select");return i(),p("div",B,[t("div",D,[(i(),b(f,{key:U.$route.path},{default:m(()=>[(i(!0),p(C,null,S(g.value,(l,w)=>(i(),b(y,{key:`pathIndex-${w}`,title:`前往${l.title}`,to:l.url},{default:m(()=>[s(z(l.title),1)]),_:2},1032,["title","to"]))),128))]),_:1}))]),t("div",F,[u(x,{to:"#ak-container",title:"中央內容區塊",id:"ak-container",accesskey:"C",name:"ak-container"},{default:m(()=>[s(":::")]),_:1}),N,t("section",null,[P,u(d,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=l=>a.value=l),options:o,size:"small",listboxClass:"aaa"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),options:o},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=l=>a.value=l),options:o,size:"large"},null,8,["modelValue"])]),t("section",null,[$,u(d,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value=l),options:o,placeholder:"請點擊選擇"},null,8,["modelValue"])]),t("section",null,[M,u(d,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=l=>a.value=l),options:o,placeholder:"請點擊選擇",showClear:""},null,8,["modelValue"])]),t("section",null,[W,u(d,{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value=l),options:o,size:"small"},{prefix:m(()=>[s("前綴插槽")]),affix:m(()=>[s("後綴插槽")]),_:1},8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value=l),options:o},{prefix:m(()=>[A]),affix:m(()=>[E]),_:1},8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value=l),options:o,size:"large"},{prefix:m(()=>[L]),affix:m(()=>[T]),_:1},8,["modelValue"])]),t("section",null,[j,u(d,{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value=l),options:o},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value=l),options:o,theme:"primary"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value=l),options:o,theme:"success"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[11]||(e[11]=l=>a.value=l),options:o,theme:"warning"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[12]||(e[12]=l=>a.value=l),options:o,theme:"danger"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[13]||(e[13]=l=>a.value=l),options:o,theme:"primary-ghost"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[14]||(e[14]=l=>a.value=l),options:o,theme:"success-ghost"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[15]||(e[15]=l=>a.value=l),options:o,theme:"warning-ghost"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[16]||(e[16]=l=>a.value=l),options:o,theme:"danger-ghost"},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[17]||(e[17]=l=>a.value=l),options:o,theme:"primary",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[18]||(e[18]=l=>a.value=l),options:o,theme:"success",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[19]||(e[19]=l=>a.value=l),options:o,theme:"warning",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[20]||(e[20]=l=>a.value=l),options:o,theme:"danger",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[21]||(e[21]=l=>a.value=l),options:o,theme:"primary-ghost",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[22]||(e[22]=l=>a.value=l),options:o,theme:"success-ghost",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[23]||(e[23]=l=>a.value=l),options:o,theme:"warning-ghost",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[24]||(e[24]=l=>a.value=l),options:o,theme:"danger-ghost",a11y:""},null,8,["modelValue"])]),t("section",null,[q,u(d,{modelValue:a.value,"onUpdate:modelValue":e[25]||(e[25]=l=>a.value=l),options:o,disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[26]||(e[26]=l=>a.value=l),options:o,theme:"primary",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[27]||(e[27]=l=>a.value=l),options:o,theme:"success",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[28]||(e[28]=l=>a.value=l),options:o,theme:"warning",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[29]||(e[29]=l=>a.value=l),options:o,theme:"danger",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[30]||(e[30]=l=>a.value=l),options:o,theme:"primary-ghost",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[31]||(e[31]=l=>a.value=l),options:o,theme:"success-ghost",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[32]||(e[32]=l=>a.value=l),options:o,theme:"warning-ghost",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[33]||(e[33]=l=>a.value=l),options:o,theme:"danger-ghost",disabled:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[34]||(e[34]=l=>a.value=l),options:o,theme:"primary",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[35]||(e[35]=l=>a.value=l),options:o,theme:"success",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[36]||(e[36]=l=>a.value=l),options:o,theme:"warning",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[37]||(e[37]=l=>a.value=l),options:o,theme:"danger",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[38]||(e[38]=l=>a.value=l),options:o,theme:"primary-ghost",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[39]||(e[39]=l=>a.value=l),options:o,theme:"success-ghost",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[40]||(e[40]=l=>a.value=l),options:o,theme:"warning-ghost",disabled:"",a11y:""},null,8,["modelValue"]),u(d,{modelValue:a.value,"onUpdate:modelValue":e[41]||(e[41]=l=>a.value=l),options:o,theme:"danger-ghost",disabled:"",a11y:""},null,8,["modelValue"])]),t("section",null,[G,u(d,{modelValue:a.value,"onUpdate:modelValue":e[42]||(e[42]=l=>a.value=l),options:o,optionWidth:"100px"},null,8,["modelValue"])]),t("section",null,[H,u(d,{modelValue:n.value,"onUpdate:modelValue":e[43]||(e[43]=l=>n.value=l),options:o,multiple:"",theme:"primary",a11y:"",size:"large",showClear:""},{prefix:m(()=>[s("前綴插槽")]),affix:m(()=>[s("後綴插槽")]),_:1},8,["modelValue"]),u(d,{modelValue:n.value,"onUpdate:modelValue":e[44]||(e[44]=l=>n.value=l),options:o,multiple:"accordion"},null,8,["modelValue"])]),t("section",null,[J,u(d,{modelValue:n.value,"onUpdate:modelValue":e[45]||(e[45]=l=>n.value=l),options:o,multiple:"",toolbar:["search"]},null,8,["modelValue"])])])])}}});export{R as default};
