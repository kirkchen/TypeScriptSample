var App;
(function (App) {
    var taskList = new App.Pages.TodoList($('form'), $('form input'), $('form button:submit'), $('ul.list-group'), new App.Services.TaskService());
})(App || (App = {}));
//# sourceMappingURL=App.js.map