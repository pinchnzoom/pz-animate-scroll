(function(){
  'use strict';
    /*
  ____ _  _ _ _  _ ____ ___ ____    ____ ____ ____ ____ _    _
  |__| |\ | | |\/| |__|  |  |___ __ [__  |    |__/ |  | |    |
  |  | | \| | |  | |  |  |  |___    ___] |___ |  \ |__| |___ |___
  */ // required animatescroll jquery
  // arg1 is id of el to scroll to , arg2 is delay in milliseconds
  angular.module('pz.animateScroll',[]).directive('pzAnimateScroll', function($parse, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        // var fn = $parse(attrs['animateScroll']);
        var params = attrs['pzAnimateScroll'].split(' ');
        var targetId = params[0];
        var delay = Number(params.slice(1));

        el.on('click', function(e){
          var $targetEl = el.closest('#page-container').find('#' + targetId);

          $timeout(function(){
            $targetEl.animatescroll({
              padding: 0
            })
          },delay);

        });
      }
    };
  });


}());