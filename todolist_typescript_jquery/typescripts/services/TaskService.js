var App;
(function (App) {
    var Services;
    (function (Services) {
        var STORAGE_KEY = 'typescript_jquery';
        var TaskService = (function () {
            function TaskService() {
            }
            TaskService.prototype.get = function () {
                var taskData = localStorage.getItem(STORAGE_KEY);
                var taskList = JSON.parse(taskData);
                if (!taskList) {
                    taskList = [];
                }
                return taskList;
            };
            TaskService.prototype.set = function (taskList) {
                var taskData = JSON.stringify(taskList);
                localStorage.setItem(STORAGE_KEY, taskData);
            };
            return TaskService;
        }());
        Services.TaskService = TaskService;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=TaskService.js.map