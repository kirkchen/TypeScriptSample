/// <reference path="../models/ITask.ts"/>
/// <reference path="./ITaskService.ts"/>

module App.Services {
  const STORAGE_KEY: string = 'typescript_angular';

  export class TaskService implements ITaskService {
    get(): App.Models.ITask[] {
      var taskData = localStorage.getItem(STORAGE_KEY);
      var taskList: App.Models.ITask[] = JSON.parse(taskData);

      if(!taskList){
        taskList = [];
      }

      return taskList;
    }

    set(taskList: App.Models.ITask[]): void{
      var taskData = JSON.stringify(taskList);

      localStorage.setItem(STORAGE_KEY, taskData);
    }
  }
}
