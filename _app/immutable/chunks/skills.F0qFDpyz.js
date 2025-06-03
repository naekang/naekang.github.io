import{A as a}from"./assets.ZSRA3r2k.js";const u=(o,...r)=>{const t={...o};return Object.keys(t).forEach(n=>{r.includes(n)&&delete t[n]}),t},m=`# Svelte

---

## 사용 기간
- 2023.03 ~ Present

## 사용 목적
- 사내 테스트 페이지 개발 및 운영
- SaaS Platform Controlplane 페이지 개발`,p=`# Terraform

---

## 사용 기간
- 2024.06 ~ Present

## 사용 목적
- Global Infra Architecture 구축
- Cross account, Multi region 환경에서 Transit Gateway를 통한 Private 통신 Architecture 구축`,e=o=>o,d=[e({name:"Programming Languages",slug:"pro-lang"}),e({name:"Frameworks",slug:"framework"}),e({name:"Libraries",slug:"library"}),e({name:"Langauges",slug:"lang"}),e({name:"Databases",slug:"db"}),e({name:"ORMs",slug:"orm"}),e({name:"DevOps",slug:"devops"}),e({name:"Testing",slug:"test"}),e({name:"Dev Tools",slug:"devtools"}),e({name:"Markup & Style",slug:"markup-style"}),e({name:"Design",slug:"design"}),e({name:"Soft Skills",slug:"soft"}),e({name:"Collaboration tools",slug:"collab-tools"})],s=o=>{const r=u(o,"category");return o.category&&(r.category=d.find(t=>t.slug===o.category)),r},b=(...o)=>g.filter(r=>o.length===0?!0:o.includes(r.slug)),S=o=>{const r=[],t=[];return g.forEach(n=>{if(o.trim()&&!n.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!n.category){t.push(n);return}let l=r.find(i=>{var c;return i.category.slug===((c=n.category)==null?void 0:c.slug)});l||(l={items:[],category:n.category},r.push(l)),l.items.push(n)}),t.length!==0&&r.push({category:{name:"Others",slug:"others"},items:t}),r},y="Skills",g=[s({slug:"terraform",color:"purple",description:p,logo:a.Terraform,name:"Terraform",category:"pro-lang"}),s({slug:"java",color:"blue",description:"",logo:a.Java,name:"Java",category:"pro-lang"}),s({slug:"aws",color:"orange",description:"",logo:a.AWS,name:"AWS",category:"devops"}),s({slug:"kubernetes",color:"blue",description:"",logo:a.Kubernetes,name:"Kubernetes",category:"devops"}),s({slug:"argocd",color:"orange",description:"",logo:a.ArgoCD,name:"ArgoCD",category:"devops"}),s({slug:"postgresql",color:"blue",description:"",logo:a.Postgresql,name:"PostgreSQL",category:"db"}),s({slug:"springboot",color:"cyan",description:"",logo:a.Springboot,name:"Springboot",category:"library"}),s({slug:"svelte",color:"orange",description:m,logo:a.Svelte,name:"Svelte",category:"library"}),s({slug:"atlassian",color:"blue",description:"Jira를 활용한 팀 협업 및 업무 관리",logo:a.Atlassian,name:"Jira",category:"collab-tools"}),s({slug:"confluence",color:"blue",description:"Confluence를 활용한 문서 관리 및 협업",logo:a.Atlassian,name:"Confluence",category:"collab-tools"}),s({slug:"slack",color:"red",description:"Slack를 활용한 팀 협업 및 업무 관리",logo:a.Slack,name:"Slack",category:"collab-tools"})],v={title:y,items:g};export{v as S,b as a,S as g};
