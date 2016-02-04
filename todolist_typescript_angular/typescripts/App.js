var App;
(function (App) {
    angular.module('app', [])
        .service('TaskService', App.Services.TaskService)
        .controller('TodoListController', App.Controllers.TodoListController);
})(App || (App = {}));
//# sourceMappingURL=App.js.map