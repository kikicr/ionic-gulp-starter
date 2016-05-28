// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic','controllers','services','directives','lib'])

.run(['$ionicPlatform','$rootScope',function($ionicPlatform,$rootScope) {
 //set global variable used to set token
       $rootScope.session = {
         "token":null,
         "userdata":null
       };
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
      
      
      
      //haddle keyboard jumping on android
     if(ionic.Platform.isAndroid()) { //iOS works fine
        window.addEventListener("native.showkeyboard", function(){ //hide stuff on keyboard open
          if(document.getElementsByTagName("body")[0].className.indexOf("keyboard-body") === -1) {
                  document.getElementsByTagName("body")[0].className += " keyboard-body";
                }
        });
        window.addEventListener("native.hidekeyboard", function(){ //show stuff on keyboard hide
          document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.replace("keyboard-body", "");
            });
	  }
	  
	 
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])

//state 
//this statement used to manage application routing , controller , and view
.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',
          function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
                 $ionicConfigProvider.views.maxCache(0);
                 
                 $stateProvider.state('app',{
                     abstract:true,
                     templateUrl:'build/template/base-template/menu.html',
                     controller:'baseController',
                     url:'/app'  
                 })
                
                   
                 $urlRouterProvider.otherwise('/login');
          }
      ]);