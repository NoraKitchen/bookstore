angular.module("bookstore-app")
    .component("bookstoreLibrary", {
        templateUrl: "app/components/bookstore-library/bookstore-library.html",
        controller: function(){
            
            var fc = this;
            fc.test = "Hi from library controller"
        }
    })