//======================PACKAGE ==========================================//
var package = function(name){
    
       return application.name+"."+name;
}

var registerPackage = function(packageName){
    angular.module(application.name+"."+packageName,[]);
    return application.name+"."+packageName;
}


var backwardState = function(obj) {
    if(obj.hasOwnProperties("params")){
        return angular.extend(obj,{
            "fromBack":false
        });
    }
    obj['params'] = {
        "fromBack":false
    } 
    return obj;
};

//=======================CONTROLLERS =====================================//
angular.module('controllers',[
    //main controller
    registerPackage('controller.main'),
    registerPackage('controller.basetemplate')
]);

//======================SERVICES ========================================//
angular.module('services',[
    registerPackage('service.network'),
    registerPackage('service.adapter'),
    registerPackage('service.ui-component'),
    registerPackage('service.hardware')
]);

//===================== DIRECTIVES =====================================//
angular.module('directives',[
    registerPackage('directive.component')
]);

//==================== LIBRARY ==========================================//
angular.module('lib',[
    'ionic-material'
    , 'ionMdInput'
    ,'ngCordova'
]);