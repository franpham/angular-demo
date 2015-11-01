"use strict";
// TO CREATE A SERVICE:

// 3 ways to define a service():
angular.module('myApp')
  .service('BookService', [function() {
    this.addBook = function(book) {
    // since variables are binded 2-way, MUST CREATE A NEW OBJECT with the new values instead of keeping a reference to the variable;
      this.books.push(
        { title: book.title,
          author: book.author }
      );
    };
    this.books = [
      { title: 'Talion the Revenant',
        author: 'Michael A. Stackpole' },
      { title: 'All my friends are dead',
        author: 'Avery Monsen' },
      { title: 'Eloquent Javascript',
        author: 'Marijin Haverbeke' },
      { title: 'A New Earth',
        author: 'Eckhart Tolle' },
      { title: 'Outliers',
        author: 'Malcolm Gladwell' }
    ];
  }])
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
