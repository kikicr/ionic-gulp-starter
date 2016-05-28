 /**
 * @author akbar.pambudi
 * @since 0.0.1
 */
     
        
        
var packageName = package("directive.component");

angular.module(packageName)
.directive('dasboardTabs',[function(){
    return {
        "template":'<div class="tabs tabs-dark tabs-icon-top static">'
                    +'<a ui-sref="jakone.dasboard" class="tab-item">'
                    +'<i class="icon ion-arrow-graph-up-right"></i>history</a>'
                    +'<a ui-sref="jakone.topup" class="tab-item"><i class="icon ion-card"></i> top up</a>'
                    +'<a ui-sref="jakone.purchase" class="tab-item"><i class="icon ion-ios-cart"></i> purchase</a>'
                    +'</div>'
    }
}]);    