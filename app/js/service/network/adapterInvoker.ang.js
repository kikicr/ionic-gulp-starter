/**
 * @author akbar.pambudi
 * @since 0.0.1
 */

var packageName = package("service.network");

angular.module(packageName)
.factory('adapterInvoker',['$http','$ionicLoading','$rootScope','$q',function($http,$ionicLoading,$rootScope,$q){
    var _public = {};
    var _private ={};
    /**
     * @param url , url 
     * @param method, url method
     * @param params, parameter invoke
     * @return json
     * 
     * invoke service using http post protocol 
     * then return promise 
     * on success -> return json response
     * on fail ->return json of failure
     */
    _public.invoke = function(url,method,params,secure) {
            var defer = $q.defer();
            $ionicLoading.show();
            var req = {
                    method: 'POST',
                    url: url+"/"+method,
                    headers: {
                    'Content-Type': 'application/json'
                    
                    },
                    data: { 
                            metadata:{}
                            ,body: params 
                        }
                    }
               if(secure){
                   req['headers']['X-AUTH-TOKEN'] =(secure)?$rootScope.session.token||null:"";
               }
            //when invoke         
            var invoke = $http(req);
            invoke.success(function onSuccess(data,status,headers,config){
                 
                  if(data.status.code !=200 ){
                      //get error response
                       $ionicLoading.hide();
                        defer.reject(
                            {
                                code:data.status.code,
                                message:data.status.description,
                                body :data.body||{}
                            }
                        );
                  }else if(data.body.hasOwnProperty("Fault")){
                        $ionicLoading.hide();
                      var msg = data.body.Fault.faultstring._text.split("-");
                      defer.reject(
                            {
                                code:msg[0],
                                message:msg[1],
                                body :data.body||{}
                            }
                        );
                  }
                  else{
                        
                       //get success response
                        var token = headers("x-auth-token");
                        if(secure){
                            $rootScope.session.token = token;
                        }
                         $ionicLoading.hide();
                        defer.resolve(
                            {
                                code:"200",
                                message:"OK",
                                body:data.body||{}
                            }
                        );
                  }
                 
            });
            
            invoke.error(function onFail(){
                 $ionicLoading.hide();
                defer.reject( {
                                code:"0",
                                message:"network connection error",
                                body :{}
                            });
                            
            });     
        
        return defer.promise;   

    }
    /**
     * @param url , url
     * @param method, method
     * @return http url+method
     */
    _private.createUrl = function(url,method){  
        return url+"/"+"method";
    }
    
    
    return _public;
}]);    