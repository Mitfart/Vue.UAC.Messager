import{U as h,i as x,c as _,P as k,p as l,D as y,a as P}from"./placeholder_user-ecd78ba8.js";import{P as U}from"./InputField-1744b9e1.js";import{_ as g,o as f,c as p,a,b as e,t as c,w as t,d as n,A as B,f as T,F as E,r as $}from"./index-498e9fee.js";import{_ as I,S as R,a as L,T as d,R as m,b as C}from"./SidebarRecomends-7ccbfda1.js";const N={class:"account"},V={class:"account__header rect rect_4-1"},q=["src"],F={class:"account__main block"},M={class:"account__top-lane"},O={class:"account__nickname"},j={class:"account__activities"},z={__name:"UserAccountBlock",props:{userData:{type:h,required:!0}},setup(o){return(v,A)=>(f(),p("div",N,[a("header",V,[a("img",{src:o.userData.avatarImg,alt:"ERROR"},null,8,q)]),a("main",F,[a("div",M,[e(x,{class:"account__avatar",image:o.userData.avatarImg},null,8,["image"]),a("h1",O,c(o.userData.nickname),1),e(U,{class:"account__btn"},{default:t(()=>[n(" Редактировать ")]),_:1})]),a("div",j,[e(_,null,{default:t(()=>[n(c(5)+" Подписчиков ")]),_:1}),e(_,null,{default:t(()=>[n(c(5)+" Подписок ")]),_:1}),e(_,null,{default:t(()=>[n(c(5)+" Лайков ")]),_:1}),e(_,null,{default:t(()=>[n(c(5)+" Комментариев ")]),_:1})])])]))}},G=g(z,[["__scopeId","data-v-9ebc68a3"]]);const H={class:"account-page"},J={class:"account-page__content container_content"},K={class:"posts"},Q={__name:"AccountPage",setup(o){const r=i(),v=0,A=[new d("Посты","#"),new d("Избранное","#"),new d("Комментарии","#")],b=[s(),s(),s()],w=[new m("1st",s()),new m("2nd",s()),new m("3rd",s())];function s(){return new k(i(),new Date,100,20,10,1e3,"Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eius et facere fuga",["Some","Dick"],[l,l,l],[u([u()]),u()])}function u(D){return new y(i(),"Some",new Date,D)}function i(){return new h("Some",P,"#",12e3)}return(D,W)=>(f(),p("section",H,[e(B,null,{default:t(()=>[a("section",J,[e(G,{"user-data":T(r)},null,8,["user-data"]),e(I,{"active-tab-index":v,tabs:A}),a("section",K,[(f(),p(E,null,$(b,S=>e(C,{"active-user":T(r),data:S},null,8,["active-user","data"])),64))])]),e(R,{class:"account-page__sidebar container_sidebar"},{default:t(()=>[e(L,{recommends:w})]),_:1})]),_:1})]))}},ae=g(Q,[["__scopeId","data-v-43f78cec"]]);export{ae as default};