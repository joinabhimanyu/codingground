(function (window,document) {
	'use strict';
  debugger
  var app=angular.module('app1',[]);
  
  app.controller('ctrl1',['$rootScope','$scope',function($rootScope,$scope) {
  	var vm=this;
    vm.singleCustomer={};
    vm.customers=[];
    function init() {
    	list=[];
      list.push({
      	name:'cust1',
        age:23
      },{
      	name:'cust2',
        age:24
      },{
      	name:'cust3',
        age:25
      },{
      	name:'cust4',
        age:26
      });
      vm.customers=list;
    }
    init();
    vm.addCustomers=function() {
      $scope.$apply(function() {
        var newCust={
          name:vm.singleCustomer.name,
          age:vm.singleCustomer.age
        };
        vm.customers.push(newCust);
        vm.singleCustomer.name='';
        vm.singleCustomer.age='';
      });
    }
  }]);
  
  app.directive('dvCustomerGroup',function() {
  	var html='<div class="row">';
  	html+='<div class="row">';
    html+='<ul class="list-inline">';
    html+='<li><input type="text" class="form-control" ng-model="vm.singleCustomer.name"/></li>';
    html+='<li><input type="text" class="form-control" ng-model="vm.singleCustomer.age"</li>';
    html+='<li><button type="button" class="btn btn-info" ng-click="vm.addCustomers()">Add</button></li>';
    html+='</ul>';
    html+='</div>';
    html+='<div class="row">';
    html+='<table class="table table-responsive">';
    html+='<thead>';
    html+='<tr><th>Name</th><th>Age</th></tr>';
    html+='</thead>'
    html+='<tbody>';
    html+='<tr ng-repeat="cust in vm.customers">';
    html+='<td>{{cust.name}}</td>';
    html+='<td>{{cust.age}}</td>';
    html+='</tr>';
    html+='</tbody>';
    html+='</table>';
    html+='</div>';
    html+='</div>';
    
    return {
    	restrice:'EAC',
      replace:true,
      template:html,
      scope:{
      	singleCustomer:'=',
        customers:'=',
        addCustomers:'&'
      },
      controller:function($scope) {
      	console.log('dvCustomerGroup controller loaded');
      },
      link:function($scope,elem,attrs,controller) {
      	console.log('dvCustomerGroup link loaded');
        $scope.$watchCollection(function() {
            return controller.customers;
        },function(newValue,oldValue) {
        	if (parseInt(newValue.length)!=parseInt(oldValue.length)) {
          	console.log('customers changed');
            $.each(newValue,function(i,item) {
            	console.log(item.name+' '+item.age);
            });
          }
        });
      },
      controllerAs:'vm',
      bindToController:true
    };
  });
  
  
})(window,document);