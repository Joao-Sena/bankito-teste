(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{F4UR:function(o,t,n){"use strict";n.r(t),n.d(t,"LoginModule",function(){return w});var r=n("ofXK"),e=n("iInd"),i=n("s7LF"),a=n("IzEk"),s=n("fXoL"),c=n("AytR"),g=n("tk/3");let l=(()=>{class o{constructor(o){this.http=o,this.urlBase=c.a.urlBase}logIn(o){return this.http.post(this.urlBase+"/login",o)}}return o.\u0275fac=function(t){return new(t||o)(s.Mb(g.b))},o.\u0275prov=s.Cb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=n("7psr");let b=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=s.Ab({type:o,selectors:[["app-field-error"]],inputs:{errorMessage:"errorMessage"},decls:2,vars:1,template:function(o,t){1&o&&(s.Jb(0,"p"),s.ac(1),s.Ib()),2&o&&(s.wb(1),s.bc(t.errorMessage))},styles:["p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:var(--danger-color);margin:8px 0 0;padding:0 0 0 14px;text-align:left}"]}),o})();function u(o,t){1&o&&s.Hb(0,"app-field-error",12)}function d(o,t){1&o&&s.Hb(0,"app-field-error",13)}function m(o,t){if(1&o&&(s.Jb(0,"div",14),s.Jb(1,"h3",15),s.ac(2,"Ocorreu um erro ao fazer o Login"),s.Ib(),s.Jb(3,"p",16),s.ac(4),s.Ib(),s.Ib()),2&o){const o=s.Rb();s.wb(4),s.bc(o.messageErrorLogin)}}let f=(()=>{class o{constructor(o,t,n){this.formBuilder=o,this.loginService=t,this.router=n}ngOnInit(){this.buildForm()}buildForm(){this.loginForm=this.formBuilder.group({cpf:["97182610019",i.l.compose([i.l.required,i.l.minLength(11),i.l.maxLength(14)])],password:["123456",i.l.compose([i.l.required,i.l.minLength(4)])]})}logIn(){this.loginService.logIn(this.loginForm.value).pipe(Object(a.a)(1)).subscribe(o=>{this.messageErrorLogin="",localStorage.setItem("loggedUser",JSON.stringify(o)),this.router.navigate(["home"])},o=>{this.messageErrorLogin=o.statusText})}}return o.\u0275fac=function(t){return new(t||o)(s.Gb(i.b),s.Gb(l),s.Gb(e.a))},o.\u0275cmp=s.Ab({type:o,selectors:[["app-login"]],decls:13,vars:6,consts:[[1,"container","text-center"],["routerLink","/login",1,"botao-voltar"],["src","assets/img/botao-voltar.png","width","20px","alt",""],["src","assets/img/logo.png","width","104px","alt","Logo do aplicativo de banco Bankito",1,"logo"],[3,"formGroup"],["type","text","formControlName","cpf","placeholder","CPF",1,"input"],["errorMessage","Cpf vazio ou inv\xe1lido",4,"ngIf"],["formControlName","password","type","password","placeholder","SENHA",1,"input","margin-top"],["errorMessage","Senha vazia ou inv\xe1lida",4,"ngIf"],["tipoBotao","primario","textoBotao","ENTRAR",3,"fullWidth","disabled","click"],[1,"nao-consigo-acessar"],["class","container-erro-login",4,"ngIf"],["errorMessage","Cpf vazio ou inv\xe1lido"],["errorMessage","Senha vazia ou inv\xe1lida"],[1,"container-erro-login"],[1,"titulo-erro"],[1,"descricao-erro"]],template:function(o,t){1&o&&(s.Jb(0,"div",0),s.Jb(1,"div",1),s.Hb(2,"img",2),s.Ib(),s.Hb(3,"img",3),s.Jb(4,"form",4),s.Hb(5,"input",5),s.Zb(6,u,1,0,"app-field-error",6),s.Hb(7,"input",7),s.Zb(8,d,1,0,"app-field-error",8),s.Ib(),s.Jb(9,"app-button",9),s.Pb("click",function(){return t.logIn()}),s.Ib(),s.Jb(10,"p",10),s.ac(11,"N\xe3o consigo acessar"),s.Ib(),s.Zb(12,m,5,1,"div",11),s.Ib()),2&o&&(s.wb(4),s.Ub("formGroup",t.loginForm),s.wb(2),s.Ub("ngIf",t.loginForm.controls.cpf.errors),s.wb(2),s.Ub("ngIf",t.loginForm.controls.password.errors),s.wb(1),s.Ub("fullWidth",!0)("disabled",!t.loginForm.valid),s.wb(3),s.Ub("ngIf",t.messageErrorLogin))},directives:[e.b,i.n,i.g,i.d,i.a,i.f,i.c,r.k,p.a,b],styles:[".logo[_ngcontent-%COMP%]{margin:32% 0 90px}.input[_ngcontent-%COMP%]{width:88%}.nao-consigo-acessar[_ngcontent-%COMP%]{color:var(--white-color);font-size:14px;font-weight:400;margin-top:90px;text-decoration:underline}.nao-consigo-acessar[_ngcontent-%COMP%]:hover{cursor:pointer}.container-erro-login[_ngcontent-%COMP%]{position:absolute;bottom:14px;margin:0 auto;background:var(--primary-color);padding:12px;border:1px solid var(--primary-color);border-radius:8px;text-align:left}.titulo-erro[_ngcontent-%COMP%]{color:var(--white-color);font-size:18px;font-weight:700;margin-bottom:8px}.descricao-erro[_ngcontent-%COMP%]{color:var(--light-color);font-size:14px;font-weight:400}.margin-top[_ngcontent-%COMP%]{margin:20px 0 0}form[_ngcontent-%COMP%]{margin-bottom:32px}@media only screen and (max-height:630px){.logo[_ngcontent-%COMP%]{margin:30% 0 70px}.nao-consigo-acessar[_ngcontent-%COMP%]{margin-top:70px}}"]}),o})();const h=[{path:"",component:(()=>{class o{constructor(){this.backgroundUrl="../../../../assets/img/background.png"}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=s.Ab({type:o,selectors:[["app-start-screen"]],decls:16,vars:0,consts:[[1,"container"],["src","assets/img/logo.png","width","104px","alt","Logo do aplicativo de banco Bankito"],[1,"container-slogan"],[1,"texto-slogan"],[1,"destaque-slogan"],["src","assets/img/botao-iniciar.png","routerLink","/login/auth",1,"botao-iniciar"]],template:function(o,t){1&o&&(s.Jb(0,"div",0),s.Hb(1,"img",1),s.Jb(2,"div",2),s.Jb(3,"p",3),s.ac(4,"O melhor e mais teste"),s.Ib(),s.Jb(5,"p",4),s.ac(6,"Completo"),s.Ib(),s.Jb(7,"p",3),s.ac(8,"banco digital"),s.Ib(),s.Jb(9,"p",3),s.ac(10,"seguro e"),s.Ib(),s.Jb(11,"p",4),s.ac(12,"Sem tarifas"),s.Ib(),s.Jb(13,"p",3),s.ac(14,"feito pra voc\xea."),s.Ib(),s.Ib(),s.Hb(15,"img",5),s.Ib())},directives:[e.b],styles:[".container[_ngcontent-%COMP%]{background-image:url(background.8a6c04746f1bcb1103b3.png);background-size:auto 100%;background-repeat:repeat-x;background-position:fixed}.container-slogan[_ngcontent-%COMP%]{position:absolute;top:50%;left:0;transform:translate(30px,-50%);margin-top:10px}.texto-slogan[_ngcontent-%COMP%]{color:var(--white-color);font-size:24px;line-height:24px}.destaque-slogan[_ngcontent-%COMP%], .texto-slogan[_ngcontent-%COMP%]{margin-bottom:34px;letter-spacing:.1em}.destaque-slogan[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:700;font-size:32px;line-height:32px}.botao-iniciar[_ngcontent-%COMP%]{position:absolute;bottom:36px;right:30px;width:120px}.botao-iniciar[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),o})()},{path:"auth",component:f}];let x=(()=>{class o{}return o.\u0275mod=s.Eb({type:o}),o.\u0275inj=s.Db({factory:function(t){return new(t||o)},imports:[[e.c.forChild(h)],e.c]}),o})();var v=n("PCNd");let w=(()=>{class o{}return o.\u0275mod=s.Eb({type:o}),o.\u0275inj=s.Db({factory:function(t){return new(t||o)},imports:[[r.b,x,v.a]]}),o})()}}]);