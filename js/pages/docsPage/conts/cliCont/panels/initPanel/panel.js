!function(){return function e(n,t,i){function r(a,c){if(!t[a]){if(!n[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(o)return o(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var u=t[a]={exports:{}};n[a][0].call(u.exports,function(e){return r(n[a][1][e]||e)},u,u.exports,e,n,t,i)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}}()({1:[function(e,n,t){n.exports=[{type:"section",title:"Initiate a new Project",items:[{type:"para",string:"this shell command generates the files required by the vegana framework in current working directory or the directory where you have called the command. in other words make the directory with project name and initiate the project inside the new directory."},{type:"code",string:"$ vegana init test"}]}]},{}],2:[function(e,n,t){let i,r;const o={init:n=>{if(engine.common.tell("panel initiated",!1),null==n||null==n)return engine.common.error("parent_cont_id_not_found");r=(i=n)+"-panel-init",engine.make.init.panel(r,i,"panel"),function(){const n=e(1);engine.global.comp.articleComp.init(r,n)}()},ref:"-panel-init",type:"panel",panelName:"initPanel",trackers:{title:"Initiate project - Vegana Js",meta:[{name:"description",content:"how to initiate a project in vegana js"},{name:"keywords",content:"init,initiate,new,project,vegana"}]}};engine.router.set.panelModule("docsPage","cliCont","initPanel",o),n.exports=o},{1:1}]},{},[2]);