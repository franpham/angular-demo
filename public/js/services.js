"use strict";
// TO CREATE A SERVICE:

angular.module('myApp')
  .service('Books', [function() {
    var self = this;      // must set self since setEndpoint is called in an event handler;
    // variables are bound 2-way, so MUST CREATE A NEW OBJECT with new values instead of keeping a reference to the variables;
    this.addBook = function(book) {
      self.books.push(
        { title: book.title,
          author: book.author }
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
