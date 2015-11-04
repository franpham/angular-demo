"use strict";
// TO CREATE A SERVICE:
// Services are instances of an anonymous function; Factories are object literals;

angular.module('myApp')
  .service('Books', [function() {   // an anonymous function to create Service instances;
    var self = this;      // set self if its methods are called in an event handler;
    // variables are bound 2-way, so MUST CREATE A NEW OBJECT LITERAL instead of keeping a reference to the variables;
    this.addBook = function(book) {
      self.books.push(
        { title: book.title,
          author: book.author }   // new object literal;
      );
    };
    this.books = [
      { title: 'Talion the Revenant',
        author: 'Michael A. Stackpole' },
      { title: 'all my friends are dead',
        author: 'Avery Monsen' },
      { title: 'Eloquent Javascript',
        author: 'Marijin Haverbeke' },
      { title: 'All New Earth',
        author: 'Eckhart Tolle' },
      { title: 'Outliers',
        author: 'Malcolm Gladwell' }
    ];
  }])   // 3 ways (1st is above) to define a service();
  .service('MagazineService', MagazineService)
  .service('VideoService', ['$http', VideoService]);

function VideoService($http) {
  this.getVideos = function() {

  };
}

function MagazineService() {
  this.getMagazine = function(id) {

  };
  this.totalMagazines = 20;
}
