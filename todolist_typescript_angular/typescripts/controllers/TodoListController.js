var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var TodoListController = (function () {
            function TodoListController(TaskService) {
                this.TaskService = TaskService;
                this.taskList = this.TaskService.get();
                this.newTask = {
                    Id: undefined,
                    Content: undefined,
                    IsDone: false
                };
            }
            TodoListController.prototype.Submit = function (task) {
                task.Id = uuid.v4();
                this.taskList.push(task);
                this.newTask = {
                    Id: undefined,
                    Content: undefined,
                    IsDone: false
                };
                this.TaskService.set(this.taskList);
            };
            TodoListController.prototype.Delete = function (index) {
                this.taskList.splice(index, 1);
                this.TaskService.set(this.taskList);
            };
            TodoListController.prototype.Finish = function () {
                this.TaskService.set(this.taskList);
            };
            TodoListController.$inject = ['TaskService'];
            return TodoListController;
        }());
        Controllers.TodoListController = TodoListController;
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=TodoListController.js.map