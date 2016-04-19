(function(window,document) {
    'use strict';
    var app2=angular.module('app2',['ngRoute','ngAnimate','ngResource']);
    app2.value('description','form validation of user');
    
    app2.controller('ctrl1',['$rootScope','$scope',function($rootScope,$scope) {
        var vm=this;
        vm.user={};
    }]);
    
    app2.directive('frmUser',['$compile','$filter',function($compile,$filter) {
        var html='';
        return {
          restrict:'EAC',
          replace:true,
          template:html,
          scope:{
              user:'='
          },
          controller:function($scope,elem,attrs,transclude) {
              var vm=this;
          },
          link:function($scope,elem,attrs,controller) {
              
          },
          controllerAs:'vm',
          bindToController:true
        };
    }]);
    
})(window,document);