!function(){return function e(n,t,o){function r(a,l){if(!t[a]){if(!n[a]){var p="function"==typeof require&&require;if(!l&&p)return p(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[a]={exports:{}};n[a][0].call(c.exports,function(e){return r(n[a][1][e]||e)},c,c.exports,e,n,t,o)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}}()({1:[function(e,n,t){n.exports=[{type:"section",title:"Vegana Boolean Binder",items:[{type:"para",string:"this api is very straight forward it takes id of any dom element and returns the value as a boolean."},{type:"code",text:"engine.binder.boolean(select_element_id)"}]}]},{}],2:[function(e,n,t){let o,r;const i={init:n=>{if(engine.common.tell("panel initiated",!1),null==n||null==n)return engine.common.error("parent_cont_id_not_found");r=(o=n)+"-panel-boolean",engine.make.init.panel(r,o,"panel"),function(){const n=e(1);engine.global.comp.articleComp.init(r,n)}()},ref:"-panel-boolean",type:"panel",panelName:"booleanPanel",trackers:{title:"Boolean Binding - Binder Apis - Vegana Js",meta:[{name:"description",content:"introduction to vegana boolean binder api."},{name:"keywords",content:"binder,vegana,boolean,api"}]}};engine.router.set.panelModule("docsPage","binderCont","booleanPanel",i),n.exports=i},{1:1}]},{},[2]);