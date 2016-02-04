var App;
(function (App) {
    var Pages;
    (function (Pages) {
        var TodoList = (function () {
            function TodoList(form, formInput, formSubmit, ulList, TaskService) {
                this.form = form;
                this.formInput = formInput;
                this.formSubmit = formSubmit;
                this.ulList = ulList;
                this.TaskService = TaskService;
                this.form.on('submit', this.Submit.bind(this));
                this.Init();
            }
            TodoList.prototype.Init = function () {
                this.taskList = this.TaskService.get();
                this.ulList.empty();
                for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
                    var task = _a[_i];
                    var $li = $('<li></li>').addClass('list-group-item clearfix');
                    var $div = $('<div></div>').addClass('checkbox').appendTo($li);
                    var $label = $('<label></label>').appendTo($div);
                    var $input = $('<input></input>').attr('type', 'checkbox').prop('checked', task.IsDone).appendTo($label);
                    var $button = $('<button></button>').addClass('btn btn-danger btn-xs pull-right').text('Delete').appendTo($div);
                    if (task.IsDone) {
                        $('<del></del>').text(task.Content).appendTo($label);
                    }
                    else {
                        $label.append(task.Content);
                    }
                    $button.on('click', this.Delete.bind(this, task.Id));
                    $input.on('click', this.Finish.bind(this, task.Id));
                    $li.appendTo(this.ulList);
                }
            };
            TodoList.prototype.Submit = function (e) {
                e.preventDefault();
                var task = {
                    Id: uuid.v4(),
                    Content: this.formInput.val(),
                    IsDone: false
                };
                this.taskList.push(task);
                this.TaskService.set(this.taskList);
                this.formInput.val(undefined);
                this.Init();
            };
            TodoList.prototype.Delete = function (id, e) {
                this.taskList = $.grep(this.taskList, function (task) { return task.Id !== id; });
                this.TaskService.set(this.taskList);
                this.Init();
            };
            TodoList.prototype.Finish = function (id, e) {
                $.grep(this.taskList, function (task) { return task.Id === id; })
                    .forEach(function (task) { return task.IsDone = !task.IsDone; });
                this.TaskService.set(this.taskList);
                this.Init();
            };
            return TodoList;
        }());
        Pages.TodoList = TodoList;
    })(Pages = App.Pages || (App.Pages = {}));
})(App || (App = {}));
//# sourceMappingURL=TodoList.js.map