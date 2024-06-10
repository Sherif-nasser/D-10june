"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[96],{3096:(R,_,l)=>{l.r(_),l.d(_,{default:()=>S});var c=l(6814),u=l(846),m=l(8733),O=l(1818),Z=l(2135),a=l(6223),b=l(8034),t=l(5879),g=l(9862),p=l(553),x=l(6996);let h=(()=>{class i{constructor(e,n){this.http=e,this.navService=n,this.adminsListUrl=`  ${p.N.url}admins`,this.addAdminUrl=`${p.N.url}register`,this.updateAdminUrl=`${p.N.url}admins`,this.deleteAdminUrl=`${p.N.url}admins`,this.rolesUrl=`${p.N.url}roles`}initializeNavItems(){this.navService.setNavItems([{name:"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0648\u0646",routerLink:"/dashboard/admins"},{name:"\u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0624\u0648\u0644",routerLink:"/dashboard/admins/add-admins"}])}GetAdminsList(e){let n=new g.LE;return e&&Object.keys(e).forEach(o=>{n=n.append(o,e[o])}),this.http.get(this.adminsListUrl,{params:n})}AddAdmin(e,n){let o=new g.LE;n&&Object.keys(n).forEach(r=>{o=o.append(r,n[r])});const s=new FormData;return Object.keys(e).forEach(r=>{s.append(r,e[r])}),this.http.post(this.addAdminUrl,s,{params:o})}GetAdminById(e){return this.http.get(`${this.adminsListUrl}/${e}`)}UpdateAdmin(e,n,o){const s=`${this.updateAdminUrl}/${e}`;let r=new g.LE;o&&Object.keys(o).forEach(f=>{r=r.append(f,o[f])});const C=new FormData;return Object.keys(n).forEach(f=>{C.append(f,n[f])}),this.http.post(s,C,{params:r})}DeleteAdmin(e){return this.http.delete(`${this.deleteAdminUrl}/${e}`)}GetAdminRolesList(e){let n=new g.LE;return e&&Object.keys(e).forEach(o=>{n=n.append(o,e[o])}),this.http.get(this.rolesUrl,{params:n})}static#t=this.\u0275fac=function(n){return new(n||i)(t.LFG(g.eN),t.LFG(x.f))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var A=l(7700);function M(i,d){if(1&i&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&i){const e=d.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}const P=function(i,d){return[i,d]};function T(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10,"super_admin"),t.qZA(),t.TgZ(11,"td")(12,"a",18),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.viewAdmin(s))}),t._UZ(13,"i",19),t.qZA(),t.TgZ(14,"button",20),t.ALo(15,"localize"),t._UZ(16,"i",21),t.qZA(),t.TgZ(17,"button",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.deleteAdmin(s.id,s.full_name))}),t._UZ(18,"i",23),t.qZA()()()}if(2&i){const e=d.$implicit,n=d.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.full_name),t.xp6(2),t.Oqu(e.types),t.xp6(2),t.Oqu(e.email),t.xp6(6),t.Q6J("routerLink",t.WLB(7,P,t.lcZ(15,5,"/dashboard/admins/add-admins"),e.id))}}function F(i,d){1&i&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let w=(()=>{class i{constructor(e,n,o,s){this.adminService=e,this.router=n,this.localize=o,this.dialog=s,this.admins=[],this.rolesDropDown=[],this.searchQuery="",this.loading=!0}ngOnInit(){this.getListAdmins(),this.getRolesList(),this.adminService.initializeNavItems()}getListAdmins(e=1){this.loading=!0,this.adminService.GetAdminsList({page:e}).subscribe({next:n=>{this.admins=n.data.data,this.currentPage=n.data.current_page,this.totalPages=n.data.last_page,this.loading=!1},error:n=>{this.loading=!1,console.error("There was an error!",n)}})}getRolesList(){this.adminService.GetAdminRolesList().subscribe({next:e=>{e&&e.data&&(this.rolesDropDown=e.data.data)},error:e=>{this.loading=!1,console.error("There was an error!",e)}})}deleteAdmin(e,n){this.dialog.open(b.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(s=>{s&&this.adminService.DeleteAdmin(e.toString()).subscribe({next:r=>{this.getListAdmins()},error:r=>{console.error("There was an error deleting the admin!",r)}})})}navigateToAddAdmins(){const e=this.localize.translateRoute("/dashboard/admins/add-admins");this.router.navigate([e])}viewAdmin(e){if(e){const n=this.localize.translateRoute("/dashboard/admins/view-admins");this.router.navigate([n,e.id])}else console.error("No admin to view")}onPageChange(e){this.getListAdmins(e)}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(h),t.Y36(u.F0),t.Y36(m.An),t.Y36(A.uw))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-admins-list"]],standalone:!0,features:[t.jDz],decls:34,vars:12,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],["action","",1,"mb-4","filterForm"],[1,"col-lg-4","col-md-6","mb-lg-0","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","searchAdmins","id","searchAdmins","placeholder","\u0628\u062d\u062b...",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-lg-3","col-md-4","mb-md-0","mb-2"],["name","rule","id","searchRules",1,"form-select"],["value","role.id",4,"ngFor","ngForOf"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"currentPage","totalPages","pageChange"],["value","role.id"],[1,"btn","show","me-2",3,"click"],[1,"fa-regular","fa-eye"],[1,"btn","edit","me-2",3,"routerLink"],[1,"fa-regular","fa-pen-to-square"],[1,"btn","btn-danger","delete",3,"click"],[1,"fa-solid","fa-trash-can"],["colspan","6",1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(r){return o.searchQuery=r}),t.qZA()()(),t.TgZ(10,"div",9)(11,"select",10),t.YNc(12,M,2,1,"option",11),t.qZA()()()(),t.TgZ(13,"div",12)(14,"table",13)(15,"thead")(16,"tr")(17,"th"),t._uU(18,"\u062a\u0631\u0642\u064a\u0645"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"\u0627\u0644\u0646\u0648\u0639"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a"),t.qZA(),t._UZ(27,"th"),t.qZA()(),t.TgZ(28,"tbody"),t.YNc(29,T,19,10,"tr",14),t.ALo(30,"filter"),t.YNc(31,F,3,0,"tr",15),t.ALo(32,"filter"),t.qZA()()(),t.TgZ(33,"pagination",16),t.NdJ("pageChange",function(r){return o.onPageChange(r)}),t.qZA()()()()),2&n&&(t.xp6(9),t.Q6J("ngModel",o.searchQuery),t.xp6(3),t.Q6J("ngForOf",o.rolesDropDown),t.xp6(17),t.Q6J("ngForOf",t.xi3(30,6,o.admins,o.searchQuery)),t.xp6(2),t.Q6J("ngIf",0===t.xi3(32,9,o.admins,o.searchQuery).length&&!o.loading),t.xp6(2),t.Q6J("currentPage",o.currentPage)("totalPages",o.totalPages))},dependencies:[c.ez,c.sg,c.O5,u.Bz,u.rH,m.fQ,m.lO,O.Q,a.u5,a._Y,a.YN,a.Kr,a.Fj,a.JJ,a.JL,a.On,a.F,Z.u],styles:[".admins-list-container[_ngcontent-%COMP%]{background:none!important}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}table[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040;border-radius:4px;overflow:hidden}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-color:#86a1f980}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:var(--dashboard1)}table[_ngcontent-%COMP%]   a.show[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}table[_ngcontent-%COMP%]   button.edit[_ngcontent-%COMP%]{background:var(--stroke-color2);background-repeat:no-repeat;border-radius:8px}table[_ngcontent-%COMP%]   button.delete[_ngcontent-%COMP%]{background-color:var(--danger);border-radius:8px;color:#fff}"]})}return i})();var L=l(4286);function U(i,d){if(1&i&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&i){const e=d.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function y(i,d){if(1&i&&(t.ynx(0),t.TgZ(1,"div",9)(2,"button",22),t._uU(3," \u0623\u0636\u0627\u0641\u0629 \u0645\u0633\u0624\u0648\u0644 "),t.qZA()(),t.BQk()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("disabled",e.adminForm.invalid)}}function q(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",9)(1,"button",23),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateAdmin())}),t._uU(2," \u062d\u0641\u0638 "),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("disabled",e.adminForm.invalid)}}const N=function(i){return[i]};let v=(()=>{class i{constructor(e,n,o,s,r){this.localize=e,this.router=n,this.activatedRoute=o,this.adminService=s,this._MessagesService=r,this.adminForm=new a.cw({fullName:new a.NI("",a.kI.required),email:new a.NI("",a.kI.required),role_id:new a.NI("",a.kI.required)}),this.isEditMode=!1,this.adminId=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const n=e.get("id");n&&(this.adminId=n,this.isEditMode=!0,this.adminService.GetAdminById(n).subscribe(o=>{o&&o.data&&this.setFormValues(o.data)}))}),this.getAdminRoles()}navigateToAdminsList(){const e=this.localize.translateRoute("/dashboard/admins");this.router.navigate([e])}getAdminRoles(){this.adminService.GetAdminRolesList().subscribe({next:e=>{console.log(e.data.data),this.rolesDropDown=e.data.data,console.log(this.rolesDropDown)},error:e=>{console.error("Failed to edit admin:",e)}})}navigateToAddAdmins(){const e=this.localize.translateRoute("/dashboard/admins/add-admins");this.router.navigate([e])}setFormValues(e){this.adminForm.controls.fullName.setValue(e.full_name),this.adminForm.controls.email.setValue(e.email),this.adminForm.controls.role_id.setValue(e.roles.id)}updateAdmin(){this.adminForm.valid&&this.adminService.UpdateAdmin(this.adminId,{full_name:this.adminForm.controls.fullName.value,email:this.adminForm.controls.email.value,role_id:this.adminForm.controls.role_id.value,_method:"PATCH"}).subscribe({next:n=>{this._MessagesService.showSuccessMessage("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0645\u0633\u0624\u0648\u0644",3e3),this.navigateToAdminsList()},error:n=>{console.error("Failed to edit admin:",n)}})}onSubmit(){this.adminForm.valid&&this.adminService.AddAdmin({full_name:this.adminForm.controls.fullName.value,email:this.adminForm.controls.email.value,role_id:this.adminForm.controls.role_id.value}).subscribe({next:n=>{console.log("Admin added successfully:",n),this.navigateToAdminsList(),this._MessagesService.showSuccessMessage("\u062a\u0645 \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0624\u0648\u0644",3e3)},error:n=>{console.error("Failed to add admin:",n)}})}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m.An),t.Y36(u.F0),t.Y36(u.gz),t.Y36(h),t.Y36(L.K))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-admins"]],standalone:!0,features:[t.jDz],decls:28,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],["id","pills-tabContent",1,"tab-content","p-3"],[1,"card-body"],[1,"col-12","mb-3","text-end"],[1,"btn","px-5","back",3,"routerLink"],["role","tabpanel","tabindex","0",1,""],["action","",3,"formGroup","ngSubmit"],[1,"form-group","col-12","mb-3"],["for","AdminName",1,"form-label"],["type","text","name","name","formControlName","fullName","id","AdminName","placeholder","\u0627\u0644\u0623\u0633\u0645 \u0643\u0627\u0645\u0644....",1,"form-control","form-control-lg"],[1,"form-group","col-md-6","mb-3"],["for","AdminEmail",1,"form-label"],["type","email","name","email","formControlName","email","id","AdminEmail","placeholder","\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a...",1,"form-control","form-control-lg"],[1,"col-lg-6","col-md-6","mb-md-0","mb-2",2,"margin-bottom","30px !important"],["for","roleId",1,"form-label"],["name","role_id","name","role_id","formControlName","role_id","id","searchRules",1,"form-select","form-select-lg"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["editMode",""],[3,"value"],["type","submit",1,"btn","px-3",3,"disabled"],["type","button",1,"btn","px-3",3,"disabled","click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"a",6),t.ALo(7,"localize"),t._uU(8,"\u0631\u062c\u0648\u0639"),t.qZA()()(),t.TgZ(9,"div",7)(10,"form",8),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(11,"div",1)(12,"div",9)(13,"label",10),t._uU(14,"\u0627\u0644\u0627\u0633\u0645 \u0643\u0627\u0645\u0644*"),t.qZA(),t._UZ(15,"input",11),t.qZA(),t.TgZ(16,"div",12)(17,"label",13),t._uU(18,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA(),t._UZ(19,"input",14),t.qZA(),t.TgZ(20,"div",15)(21,"label",16),t._uU(22,"\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a*"),t.qZA(),t.TgZ(23,"select",17),t.YNc(24,U,2,2,"option",18),t.qZA()(),t.YNc(25,y,4,1,"ng-container",19),t.YNc(26,q,3,1,"ng-template",null,20,t.W1O),t.qZA()()()()()()()),2&n){const s=t.MAs(27);t.xp6(6),t.Q6J("routerLink",t.VKq(7,N,t.lcZ(7,5,"/dashboard/admins"))),t.xp6(4),t.Q6J("formGroup",o.adminForm),t.xp6(14),t.Q6J("ngForOf",o.rolesDropDown),t.xp6(1),t.Q6J("ngIf",!o.isEditMode)("ngIfElse",s)}},dependencies:[c.ez,c.sg,c.O5,a.u5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.UX,a.sg,a.u,u.rH,m.fQ,m.lO],styles:["form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{color:var(--dashboard1)}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--main);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}"]})}return i})();function k(i,d){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij("\u0627\u0644\u0648\u0638\u064a\u0641\u0629: ",e.adminRoles,".")}}const z=function(i,d){return[i,d]};function J(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",1)(4,"div",8)(5,"a",9)(6,"h4",10),t._uU(7),t.qZA()()(),t.TgZ(8,"div",11)(9,"button",12),t.ALo(10,"localize"),t._uU(11," \u062a\u0639\u062f\u064a\u0644 "),t.qZA(),t.TgZ(12,"button",13),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.deleteAdmin(o.admin.id,o.admin.full_name))}),t._uU(13," \u062d\u0630\u0641 "),t.qZA()()(),t.TgZ(14,"ul")(15,"li"),t._uU(16),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.qZA(),t.YNc(19,k,2,1,"li",14),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(7),t.Oqu(e.admin.full_name),t.xp6(2),t.Q6J("routerLink",t.WLB(7,z,t.lcZ(10,5,"/dashboard/admins/add-admins"),e.admin.id)),t.xp6(7),t.hij("\u0627\u0644\u0646\u0648\u0639: ",e.admin.types,""),t.xp6(2),t.hij("\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a: ",e.admin.email,""),t.xp6(1),t.Q6J("ngIf",e.adminRoles)}}function D(i,d){1&i&&(t.TgZ(0,"div",15)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const S=[{path:"",component:(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-main-admins"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(n,o){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.ez,u.lC]})}return i})(),children:[{path:"",component:w},{path:"add-admins",component:v,data:{breadcrumbs:[{label:" \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0624\u0648\u0644",url:"/dashboard/admins/add-admins"}]}},{path:"add-admins/:id",component:v,data:{breadcrumbs:[{label:" \u062a\u0639\u062f\u064a\u0644 \u0645\u0633\u0624\u0648\u0644 ",url:"/dashboard/admins/edit-admins"}]}},{path:"view-admins/:id",component:(()=>{class i{constructor(e,n,o,s,r){this.adminService=e,this.router=n,this.localize=o,this.dialog=s,this.activatedRoute=r,this.adminRoles=""}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const n=e.get("id");n&&(this.adminId=n,this.adminService.GetAdminById(n).subscribe(o=>{o&&o.data&&(this.admin=o.data,this.setRoles(this.admin))}))})}setRoles(e){e&&e.roles&&Array.isArray(e.roles)&&(this.adminRoles=e.roles.map(n=>n.name).join(", "))}deleteAdmin(e,n){this.dialog.open(b.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${n} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(s=>{s&&this.adminService.DeleteAdmin(e.toString()).subscribe({next:r=>{this.navigateToAddAdmins(),console.log("Admin deleted ")},error:r=>{console.error("There was an error deleting the admin!",r)}})})}navigateToAddAdmins(){const e=this.localize.translateRoute("/dashboard/admins");this.router.navigate([e])}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(h),t.Y36(u.F0),t.Y36(m.An),t.Y36(A.uw),t.Y36(u.gz))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-view-admin"]],standalone:!0,features:[t.jDz],decls:5,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],["class","col-12 mb-1",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"col-12","mb-1"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"col-md-6","order-md-1","order-2"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-md-6","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","edit","mx-1",3,"routerLink"],[1,"btn","delete","px-4",3,"click"],[4,"ngIf"],[1,"text-center"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,J,20,10,"div",3),t.YNc(4,D,3,0,"div",4),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngIf",o.admin),t.xp6(1),t.Q6J("ngIf",!o.admin))},dependencies:[c.ez,c.O5,u.rH,m.fQ,m.lO,a.u5],styles:[".tabs[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040;border-radius:4px}.tabs[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--main)}.tabs[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:var(--dark-one)}button.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background:var(--danger);color:#fff}"]})}return i})(),data:{breadcrumbs:[{label:"\u0628\u064a\u0627\u0646\u0627\u062a \u0645\u0633\u0624\u0648\u0644",url:"/dashboard/admins/view-admins/:id"}]}}]}]}}]);