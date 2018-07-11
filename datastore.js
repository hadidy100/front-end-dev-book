(function (window){
'use strict';
//code here  iife function
var App = window.App || {}; // if not defined then new empty object

function DataStore (){
  console.console.log('running the DAtasote function');
  this.data = {};
}

App.DAtasote = DAtasote;
window.App = App;
})(window); // we have a data sot
