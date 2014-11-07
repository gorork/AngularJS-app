(function(){

  var app = angular.module('cs-angular', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(val){
      (val === null) ? this.current = 0 : this.current = val;
    }
  });

  var gems = [
    {
      name    : 'Deca2014',
      price   : 99.5,
      desc    : 'Cool deca....',
      canBuy  : true,
      soldOut : true,
      img     : [
        {
          full  : 'img/1full.jpg',
          thumb : 'img/1.jpg'
        }
      ]
    },
    {
      name    : 'Gem DF-7',
      price   : 299.99,
      desc    : 'Cool gem to take with you....',
      canBuy  : true,
      soldOut : true,
      img     : [
        {
          full  : 'img/2full.jpg',
          thumb : 'img/2.jpg'
        }
      ]
    },
    {
      name    : 'More Stuff',
      price   : 3,
      desc    : 'Some more awesome stuff for....',
      canBuy  : false,
      soldOut : false,
      img     : [
        {
          full  : 'img/3full.jpg',
          thumb : 'img/3.jpg'
        }
      ]
    }
  ]

})();

