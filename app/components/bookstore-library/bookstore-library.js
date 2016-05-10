angular.module("bookstore-app")
    .component("bookstoreLibrary", {
        templateUrl: "app/components/bookstore-library/bookstore-library.html",
        controller: function($firebaseArray){
            
            var lc = this;
            var db = new Firebase("https://scratchpad-bcw.firebaseio.com/bookstore")
            lc.bookList = $firebaseArray(db);
            
            lc.removeBook = function(book){
                lc.bookList.$remove(book);
            }
        }
    })