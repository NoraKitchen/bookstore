angular.module("bookstore-app")
    .component("bookstoreForm", {
        templateUrl: "app/components/bookstore-form/bookstore-form.html",
        controller: function($firebaseArray){
            
            var fc = this;
            var db = new Firebase("https://scratchpad-bcw.firebaseio.com/bookstore")
            fc.bookList = $firebaseArray(db);
            
            
            fc.addBook = function(book){
                fc.bookList.$add(book);
                fc.newBook = "";
            }

        }
    })