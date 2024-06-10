"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[176],{1176:(N,b,c)=>{c.r(b),c.d(b,{default:()=>Q});var f=c(6814),l=c(846),t=c(5879);let F=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-main-faqs"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"router-outlet")},dependencies:[f.ez,l.lC]})}return a})();var s=c(6223),u=c(8733),M=c(1818),q=c(7728),O=c(2135),_=c(8034),C=c(7700),h=c(4286),m=c(9862),P=c(553),Z=c(6996);let v=(()=>{class a{constructor(e,o){this.http=e,this.navService=o,this.faqsListUrl=`${P.N.url}faq`}initializeNavItems(){this.navService.setNavItems([{name:"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u0633\u0626\u0644\u0629",routerLink:"/dashboard/faqs"},{name:"\u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644",routerLink:"/dashboard/faqs/add-faq"}])}GetFaqsList(e){let o=new m.LE;return e&&Object.keys(e).forEach(n=>{o=o.append(n,e[n])}),this.http.get(this.faqsListUrl,{params:o})}GetFaqById(e){return this.http.get(`${this.faqsListUrl}/${e}`)}AddFaq(e,o){let n=new m.LE;o&&Object.keys(o).forEach(r=>{n=n.append(r,o[r])});const i=new FormData;return Object.keys(e).forEach(r=>{i.append(r,e[r])}),this.http.post(this.faqsListUrl,i,{params:n})}UpdateFaq(e,o,n){const i=`${this.faqsListUrl}/${e}`;let r=new m.LE;n&&Object.keys(n).forEach(p=>{r=r.append(p,n[p])});const g=new FormData;return Object.keys(o).forEach(p=>{g.append(p,o[p])}),this.http.post(i,g,{params:r})}DeleteFaq(e){return this.http.delete(`${this.faqsListUrl}/${e}`)}static#t=this.\u0275fac=function(o){return new(o||a)(t.LFG(m.eN),t.LFG(Z.f))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function A(a,d){1&a&&(t.TgZ(0,"div",24)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const w=function(a,d){return[a,d]};function L(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"div",15),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.viewFaq(i))}),t.TgZ(5,"a",16)(6,"h5",17),t._uU(7),t.qZA()()(),t.TgZ(8,"div",18)(9,"a",19),t.ALo(10,"localize"),t._uU(11,"\u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(12,"button",20),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.deleteFaq(i.id,i.head))}),t._uU(13," \u062d\u0630\u0641 "),t.qZA()()(),t.TgZ(14,"div",1)(15,"div",21),t._UZ(16,"app-truncate-text",22),t.qZA()()()(),t.YNc(17,A,3,0,"div",23),t.ALo(18,"filter"),t.qZA()}if(2&a){const e=d.$implicit,o=t.oxw();t.xp6(7),t.hij(" ",e.head," "),t.xp6(2),t.Q6J("routerLink",t.WLB(10,w,t.lcZ(10,5,"/dashboard/faqs/add-faq"),e.id)),t.xp6(7),t.Q6J("text",e.answer)("limit",150),t.xp6(1),t.Q6J("ngIf",0===t.xi3(18,7,o.faqsList,o.searchQuery).length&&!o.loading)}}let T=(()=>{class a{constructor(e,o,n,i,r){this.router=e,this.localize=o,this.dialog=n,this._MessagesService=i,this.faqService=r,this.loading=!1,this.faqsList=[],this.searchQuery=""}ngOnInit(){this.getFaqsList(),this.prepareNavItems()}prepareNavItems(){this.faqService.initializeNavItems()}getFaqsList(e=1){this.loading=!0,this.faqService.GetFaqsList({page:e}).subscribe({next:o=>{this.currentPage=o.data.current_page,this.totalPages=o.data.last_page,this.faqsList=o.data.data,this.loading=!1}})}deleteFaq(e,o){this.dialog.open(_.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${o} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(i=>{i&&this.faqService.DeleteFaq(e.toString()).subscribe({next:r=>{this.getFaqsList()},error:r=>{console.error("There was an error deleting the faq!",r)}})})}viewFaq(e){if(e){const o=this.localize.translateRoute("/dashboard/faqs/view");this.router.navigate([o,e.id])}else console.error("No employee to view")}onPageChange(e){this.getFaqsList(e)}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0),t.Y36(u.An),t.Y36(C.uw),t.Y36(h.K),t.Y36(v))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-faqs-list"]],standalone:!0,features:[t.jDz],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"mb-2","filterForm"],[1,"col-lg-7","mb-lg-2","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6 mb-2",4,"ngFor","ngForOf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2",2,"cursor","pointer",3,"click"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","mx-1","edit",3,"routerLink"],[1,"btn","delete","px-4",3,"click"],[1,"card-text"],[3,"text","limit"],["class","text-center",4,"ngIf"],[1,"text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(r){return n.searchQuery=r}),t.qZA()()()()(),t.TgZ(10,"div",1),t.YNc(11,L,19,13,"div",9),t.ALo(12,"filter"),t.qZA(),t.TgZ(13,"pagination",10),t.NdJ("pageChange",function(r){return n.onPageChange(r)}),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("ngModel",n.searchQuery),t.xp6(2),t.Q6J("ngForOf",t.xi3(12,4,n.faqsList,n.searchQuery)),t.xp6(2),t.Q6J("currentPage",n.currentPage)("totalPages",n.totalPages))},dependencies:[f.ez,f.sg,f.O5,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,l.rH,M.Q,O.u,u.fQ,u.lO,q.H],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a}"]})}return a})();const y=function(a,d){return[a,d]};function I(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"a",10)(5,"h5",11),t._uU(6),t.qZA()()(),t.TgZ(7,"div",12)(8,"a",13),t.ALo(9,"localize"),t._uU(10,"\u062a\u0639\u062f\u064a\u0644 "),t._UZ(11,"i",14),t.qZA(),t.TgZ(12,"button",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteFaq(n.faq.id,n.faq.head))}),t._uU(13," \u062d\u0630\u0641 "),t._UZ(14,"i",16),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",17),t._UZ(17,"app-truncate-text",18),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(6),t.hij(" ",e.faq.head," "),t.xp6(2),t.Q6J("routerLink",t.WLB(6,y,t.lcZ(9,4,"/dashboard/faqs/add-faq"),e.faq.id)),t.xp6(9),t.Q6J("text",e.faq.answer)("limit",150)}}function k(a,d){1&a&&(t.TgZ(0,"div",19)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let U=(()=>{class a{constructor(e,o,n,i,r,g){this.router=e,this.localize=o,this.dialog=n,this._MessagesService=i,this.faqService=r,this.activatedRoute=g,this.loading=!1}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const o=e.get("id");o&&(this.faqId=o,this.faqService.GetFaqById(o).subscribe(n=>{n&&n.data&&(console.log(n.data),this.faq=n.data)}))})}navigateTofaqsList(){const e=this.localize.translateRoute("/dashboard/faqs");this.router.navigate([e])}deleteFaq(e,o){this.dialog.open(_.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${o} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(i=>{i&&this.faqService.DeleteFaq(e.toString()).subscribe({next:r=>{this.navigateTofaqsList()},error:r=>{console.error("There was an error deleting the faq!",r)}})})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0),t.Y36(u.An),t.Y36(C.uw),t.Y36(h.K),t.Y36(v),t.Y36(l.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-faq"]],standalone:!0,features:[t.jDz],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"col-12","mb-2"],["class","card mb-3 border-0",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","mx-1","edit",3,"routerLink"],[1,"fa-regular","fa-pen-to-square"],[1,"btn","delete","px-4",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"card-text"],[3,"text","limit"],[1,"text-center"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,I,18,9,"div",4),t.YNc(5,k,3,0,"div",5),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("ngIf",n.faq),t.xp6(1),t.Q6J("ngIf",!n.faq))},dependencies:[f.ez,f.O5,q.H,l.rH,u.fQ,u.lO],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background:var(--danger);color:#fff}.card[_ngcontent-%COMP%]{box-shadow:0 5px 14px #0000000d;color:var(--main)}.attatchmentFiles[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{background-color:var(--dashboard2);color:#fff;border-radius:10px}.attatchmentFiles[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fff;color:var(--dashboard2)}"]})}return a})();const J=function(a){return[a]};function S(a,d){1&a&&(t.TgZ(0,"div",14)(1,"div",15)(2,"a",16),t.ALo(3,"localize"),t._uU(4,"\u0631\u062c\u0648\u0639"),t.qZA()()()),2&a&&(t.xp6(2),t.Q6J("routerLink",t.VKq(3,J,t.lcZ(3,1,"/dashboard/faqs"))))}function z(a,d){if(1&a&&(t.ynx(0),t.TgZ(1,"div",7)(2,"button",17),t._uU(3," \u0625\u0636\u0627\u0641\u0629 \u0633\u0624\u0627\u0644 "),t.qZA()(),t.BQk()),2&a){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.faqForm.valid)}}function Y(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",7)(1,"button",18),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.updateFaq())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 "),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.faqForm.valid)}}let x=(()=>{class a{constructor(e,o,n,i,r,g){this.faqService=e,this.localize=o,this.router=n,this.activatedRoute=i,this._MessagesService=r,this.fb=g,this.isEditMode=!1,this.faqId="",this.previewUrl=null,this.faqForm=this.fb.group({head:["",s.kI.required],answer:["",s.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const o=e.get("id");o&&(this.faqId=o,this.isEditMode=!0,this.faqService.GetFaqById(o).subscribe(n=>{n&&n.data&&this.setFormValues(n.data)}))})}setFormValues(e){this.faqForm.controls.head.setValue(e.head),this.faqForm.controls.answer.setValue(e.answer)}get f(){return this.faqForm.controls}navigateTofaqsList(){const e=this.localize.translateRoute("/dashboard/faqs");this.router.navigate([e])}updateFaq(){this.faqForm.valid&&this.faqService.UpdateFaq(this.faqId,{head:this.faqForm.controls.head.value,answer:this.faqForm.controls.answer.value,_method:"PATCH"}).subscribe({next:o=>{this._MessagesService.showSuccessMessage("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b",3e3),this.navigateTofaqsList()},error:o=>{console.error("Failed to edit faq:",o)}})}onSubmit(){this.faqForm.valid&&this.faqService.AddFaq({head:this.faqForm.controls.head.value,answer:this.faqForm.controls.answer.value}).subscribe({next:o=>{console.log("Category added successfully:",o),this.navigateTofaqsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0627\u0644\u0625\u0636\u0627\u0641\u0629",3e3)},error:o=>{console.error("Failed to add faq:",o)}})}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(v),t.Y36(u.An),t.Y36(l.F0),t.Y36(l.gz),t.Y36(h.K),t.Y36(s.qu))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-faq"]],standalone:!0,features:[t.jDz],decls:19,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["id","pills-tabContent",1,"tab-content","p-3"],["id","addFaq","role","tabpanel","aria-labelledby","addFaq-tab","tabindex","0",1,""],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-group","col-12","mb-3"],["for","head",1,"form-label"],["type","text","name","head","id","addCategoryName","formControlName","head",1,"form-control"],["for","answer",1,"form-label"],["name","answer","id","answer","cols","30","rows","10","formControlName","answer",1,"form-control"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"card-body"],[1,"col-12","mb-3","text-end"],[1,"btn","px-4","back",3,"routerLink"],["type","submit",1,"btn","px-5",3,"disabled"],["type","button",1,"btn","px-5",3,"disabled","click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,S,5,5,"div",5),t.TgZ(6,"form",6),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(7,"div",1)(8,"div",7)(9,"label",8),t._uU(10,"\u0627\u0644\u0633\u0624\u0627\u0644"),t.qZA(),t._UZ(11,"input",9),t.qZA(),t.TgZ(12,"div",7)(13,"label",10),t._uU(14,"\u0627\u0644\u0625\u062c\u0627\u0628\u0629"),t.qZA(),t._UZ(15,"textarea",11),t.qZA()(),t.YNc(16,z,4,1,"ng-container",12),t.YNc(17,Y,3,1,"ng-template",null,13,t.W1O),t.qZA()()()()()()),2&o){const i=t.MAs(18);t.xp6(5),t.Q6J("ngIf",n.isEditMode),t.xp6(1),t.Q6J("formGroup",n.faqForm),t.xp6(10),t.Q6J("ngIf",!n.isEditMode)("ngIfElse",i)}},dependencies:[f.ez,f.O5,s.u5,s._Y,s.Fj,s.JJ,s.JL,s.UX,s.sg,s.u,l.Bz,l.rH,u.fQ,u.lO],styles:[".tab-content[_ngcontent-%COMP%]{border-radius:4px}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--dashboard1)}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--main);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}form[_ngcontent-%COMP%]   .input-group-vertical[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + .input-group-text[_ngcontent-%COMP%]{color:var(--dashboard1);background-color:transparent;border:none}form[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:not(.d-inline-block){border:1px solid var(--main);color:var(--dashboard1);width:100%;border-radius:10px}"]})}return a})();const Q=[{path:"",component:F,children:[{path:"",component:T},{path:"view/:id",component:U},{path:"add-faq",component:x},{path:"add-faq/:id",component:x}]}]}}]);