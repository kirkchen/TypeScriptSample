module App.Controllers {
  declare var uuid: __NodeUUID.UUID;

  export class TodoListController {
    static $inject = ['TaskService'];

    private taskList: Models.ITask[];

    newTask: Models.ITask;

    constructor(
      private TaskService: Services.ITaskService
    ) {
      this.taskList = this.TaskService.get();

      this.newTask = {
        Id: undefined,
        Content: undefined,
        IsDone: false
      }
    }

    Submit(task: Models.ITask): void {
      task.Id = uuid.v4();
      this.taskList.push(task);

      this.newTask = {
        Id: undefined,
        Content: undefined,
        IsDone: false
      }

      this.TaskService.set(this.taskList);
    }

    Delete(index: number): void {
      this.taskList.splice(index, 1);

      this.TaskService.set(this.taskList);
    }

    Finish(): void {
      this.TaskService.set(this.taskList);
    }
  }
}
