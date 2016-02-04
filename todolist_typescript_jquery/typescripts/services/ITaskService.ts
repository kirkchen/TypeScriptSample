module App.Services {
  export interface ITaskService {
    get(): App.Models.ITask[];

    set(todoList: App.Models.ITask[]): void;
  }
}
