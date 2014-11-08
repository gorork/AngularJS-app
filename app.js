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

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
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
      ],
      reviews   : [
        {
          stars   : 5,
          body    : 'Wow! Really cool deca.',
          author  : 'Bill'
        },
        {
          stars   : 2,
          body    : 'Yak! I didn\'t like its color, like, AT ALL',
          author  : 'Annie'
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
      ],
      reviews   : [
        {
          stars   : 1,
          body    : 'Wow! Where are you looking guys?! It sucks...',
          author  : 'Jane'
        },
        {
          stars   : 4,
          body    : 'So far so good.',
          author  : 'Jon'
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
      ],
      reviews   : [
        {
          stars   : 5,
          body    : 'LOVE-LOVE-LOVE! Oh my God, how long Ive been looking for this one!',
          author  : 'Mary Johns Jr.'
        },
        {
          stars   : 3,
          body    : 'The overall quality is fine',
          author  : 'David Simpson'
        }
      ]
    }
  ]

})();

