"use strict";
// TO CREATE A SERVICE:

var books = [
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

// 3 ways to define a service():
angular.module('myApp')
  .service('BookService', [function() {
    this.getBook = function(id) {
      return books[1];
    };
    this.getBooks = function() {
      return books;
    };
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
