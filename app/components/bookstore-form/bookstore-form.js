angular.module("bookstore-app")
    .component("bookstoreForm", {
        templateUrl: "app/components/bookstore-form/bookstore-form.html",
        controller: function(){
            
            var fc = this;
            fc.test = "Hi from form controller"
        }
    })