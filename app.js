(function(){

  var app = angular.module('cs-angular', ['store-products']);

  app.controller('StoreController', [ '$http', function($http){
    //this.products = gems;
    var store = this;
    store.products = []; //while waiting for JSON

    $http.get('products.json').success(function(data){
      store.products = data;
    })
  }]);

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product, form){

      this.review.createdOn = Date.now();

      product.reviews.push(this.review);

      this.review = {};

      form.$setPristine();
    }
  });

  /*
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
          author  : 'Bill',
          createdOn : 1397490980837
        },
        {
          stars   : 2,
          body    : 'Yak! I didn\'t like its color, like, AT ALL',
          author  : 'Annie',
          createdOn : 1397490923826
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
          author  : 'Jane',
          createdOn : 1397490111111
        },
        {
          stars   : 4,
          body    : 'So far so good.',
          author  : 'Jon',
          createdOn : 1397490982222
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
          author  : 'Mary Johns Jr.',
          createdOn : 1397490980837
        },
        {
          stars   : 3,
          body    : 'The overall quality is fine',
          author  : 'David Simpson',
          createdOn : 1397490980837
        }
      ]
    }
  ] */

})();

