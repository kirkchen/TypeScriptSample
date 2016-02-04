module App {
  angular.module('app', [])
    .service('TaskService', Services.TaskService)
    .controller('TodoListController', Controllers.TodoListController);    
}
