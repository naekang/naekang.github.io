import{A as e}from"./assets.aUPy2J0v.js";const u=(o,...t)=>{const s={...o};return Object.keys(s).forEach(l=>{t.includes(l)&&delete s[l]}),s},m=`# Svelte

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
- Cross account, Multi region 환경에서 Transit Gateway를 통한 Private 통신 Architecture 구축`,r=o=>o,d=[r({name:"Programming Languages",slug:"pro-lang"}),r({name:"Frameworks",slug:"framework"}),r({name:"Libraries",slug:"library"}),r({name:"Langauges",slug:"lang"}),r({name:"Databases",slug:"db"}),r({name:"ORMs",slug:"orm"}),r({name:"DevOps",slug:"devops"}),r({name:"Testing",slug:"test"}),r({name:"Dev Tools",slug:"devtools"}),r({name:"Markup & Style",slug:"markup-style"}),r({name:"Design",slug:"design"}),r({name:"Soft Skills",slug:"soft"}),r({name:"Collaboration tools",slug:"collab-tools"})],a=o=>{const t=u(o,"category");return o.category&&(t.category=d.find(s=>s.slug===o.category)),t},f=(...o)=>g.filter(t=>o.length===0?!0:o.includes(t.slug)),S=o=>{const t=[],s=[];return g.forEach(l=>{if(o.trim()&&!l.name.toLowerCase().includes(o.trim().toLowerCase()))return;if(!l.category){s.push(l);return}let n=t.find(i=>{var c;return i.category.slug===((c=l.category)==null?void 0:c.slug)});n||(n={items:[],category:l.category},t.push(n)),n.items.push(l)}),s.length!==0&&t.push({category:{name:"Others",slug:"others"},items:s}),t},y="Skills",g=[a({slug:"terraform",color:"purple",description:p,logo:e.Terraform,name:"Terraform",category:"pro-lang"}),a({slug:"java",color:"blue",description:"",logo:e.Java,name:"Java",category:"pro-lang"}),a({slug:"aws",color:"orange",description:"",logo:e.AWS,name:"AWS",category:"devops"}),a({slug:"kubernetes",color:"blue",description:"",logo:e.Kubernetes,name:"Kubernetes",category:"devops"}),a({slug:"argocd",color:"orange",description:"",logo:e.ArgoCD,name:"ArgoCD",category:"devops"}),a({slug:"postgresql",color:"blue",description:"",logo:e.Postgresql,name:"PostgreSQL",category:"db"}),a({slug:"documentDB",color:"blue",description:"",logo:e.DocumentDB,name:"DocumentDB",category:"db"}),a({slug:"elasticache",color:"blue",description:"",logo:e.ElastiCache,name:"ElastiCache",category:"db"}),a({slug:"springboot",color:"cyan",description:"",logo:e.Springboot,name:"Springboot",category:"library"}),a({slug:"svelte",color:"orange",description:m,logo:e.Svelte,name:"Svelte",category:"library"}),a({slug:"atlassian",color:"blue",description:"Jira를 활용한 팀 협업 및 업무 관리",logo:e.Atlassian,name:"Jira",category:"collab-tools"}),a({slug:"confluence",color:"blue",description:"Confluence를 활용한 문서 관리 및 협업",logo:e.Atlassian,name:"Confluence",category:"collab-tools"}),a({slug:"slack",color:"red",description:"Slack를 활용한 팀 협업 및 업무 관리",logo:e.Slack,name:"Slack",category:"collab-tools"})],h={title:y,items:g};export{h as S,f as a,S as g};
