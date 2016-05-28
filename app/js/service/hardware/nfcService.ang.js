/**
 * @author akbar.pambudi
 * @since 0.0.1
 */

var packageName = package("service.hardware");

angular.module(packageName)
.factory('nfcService',['$ionicLoading','$q',function($ionicLoading,$q) {
    var _public = {};
    var _private = {};
    
    _public.ndefListener = function() {
        var defer = $q.defer();
        nfc.addNdefListener(function(tagObj){
           //on listen start
            defer.notify(tagObj);
        },function(){
            //on success
            //TODO:notting to do
        },function(error){
            //on error
            //return error defer
            defer.reject(error);
        });
        
        return defer.promise;    
}

_public.addTagDicoveredListener = function(){
        var defer = $q.defer();
        nfc.addTagDiscoveredListener(function(tagObj){
            defer.notify(tagObj);
        },function(){
            
        },function(error){
            defer.reject(error);
        });
        return defer.promise;
    }
   
   return _public;     
    
}]);    