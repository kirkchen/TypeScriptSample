/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/node-uuid/node-uuid.d.ts"/>
/// <reference path="./models/ITask.ts"/>
/// <reference path="./services/ITaskService.ts"/>
/// <reference path="./services/TaskService.ts"/>
/// <reference path="./pages/TodoList.ts"/>

declare var uuid: __NodeUUID.UUID;

module App {
  var taskList = new Pages.TodoList(
    $('form'),
    $('form input'),
    $('form button:submit'),
    $('ul.list-group'),
    new Services.TaskService()
    );
}
