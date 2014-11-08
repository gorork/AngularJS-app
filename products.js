(function() {

  var app = angular.module('store-products', []);

  app.directive('productGallery', function(){
    return {
      restrict    : 'E',
      templateUrl : "product-gallery.html",
      controller  : function(){
        this.current = 0;
        this.setCurrent = function(val){
          (val === null) ? this.current = 0 : this.current = val;
        }
      },
      controllerAs  : 'gallery'
    }
  });

  app.directive('productPanels', function(){
    return {
      restrict      : 'E',
      templateUrl   : "product-panels.html",
      controller    : function(){
        this.tab = 1;
        this.selectTab = function(setTab){
          this.tab = setTab;
        };
        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        }
      },
      controllerAs  : 'panel'
    }
  });

  app.directive('productDescription', function(){
    return {
      restrict    : 'E',
      templateUrl : 'product-description.html'
    }
  });

  app.directive('productSpecs', function(){
    return {
      restrict    : 'A',
      templateUrl : 'product-specs.html'
    }
  });

})();
