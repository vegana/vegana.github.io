(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "type":"section",
    "title":"Vegana Cli",
    "items":[
      {
        "type":"para",
        "string":"Vegana cli is a nodejs based cli app and gives a cross platform uniform experience. the goal with cli was to make a fast developement enviorment by doing all the heavy lifting like live reloading, final app building and optimization image optimization ,component generation and inbuilt server for development."
      },
      {
        "type":"title",
        "level":2,
        "string":"features"
      },
      {
        "type":"list",
        "items":[
          "Inbuilt Server with Live Reloading",
          "Live sass compilation",
          "Native app building and code and image optimization.",
          "Fast Component generation and auto lazy componet integration."
        ]
      }
    ]
  }
]

},{}],2:[function(require,module,exports){
//controllers
const log = false;
const type = 'panel';
const panelRef = '-panel-cli';
const pageName = 'docsPage';
const contName = 'introductionCont';
const panelName = 'cliPanel';
const article = require('./article.json');

//ids
let parentId,panelId;

//init dom build here
const init = (pid) => {

  engine.common.tell('panel initiated',log);

  if(pid == null || pid == undefined){
    return engine.common.error('parent_cont_id_not_found');            //check for prent page id
  }

  parentId = pid;
  panelId = parentId + panelRef;

  engine.make.init.panel(panelId,parentId,"panel");

  build();

}

//these trackers will be triggered when this module is routed
const trackers = {
  title:'sample panel title',
  meta:[
    {
      name:'description',
      content:'this is a sample panel description'
    },
    {
      name:'keywords',
      content:'panel,vegana'
    }
  ],
  function_data:{},
  //function will be triggered with the function data as input when the module is routed to.
  function:(function_data)=>{}
};

//fetch data before dom build here
function fetch(){
  engine.common.tell('fetching',log);
  build();
}

//build dom here
function build(){
  engine.global.comp.articleComp.init(panelId,article);
}

const panelController = {
  init:init,
  ref:panelRef,
  type:type,
  panelName:panelName,
  trackers:trackers
};
engine.router.set.panelModule(pageName,contName,panelName,panelController);
module.exports = panelController;

},{"./article.json":1}]},{},[2]);
