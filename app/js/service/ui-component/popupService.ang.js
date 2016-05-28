/**
 * @author akbar.pambudi
 * @since 0.0.1
 */

var packageName = package("service.ui-component");

angular.module(packageName)
.factory('popupService',['$ionicPopup','$q',function($ionicPopup,$q) {
    var _public = {};
    var _private = {};
    
    _public.alert = function(title,message,buttonTxt) {
         $ionicPopup.alert({
                    "title":title||"notification",
                    "template":"<h4 style='text-align:center'>"+message+"</h4>",
                    "okText":buttonTxt||"ok"
                });
    }
   
   return _public;     
    
}]);    