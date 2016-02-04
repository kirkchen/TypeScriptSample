/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/node-uuid/node-uuid.d.ts"/>
/// <reference path="../models/ITask.ts"/>
/// <reference path="../services/ITaskService.ts"/>
/// <reference path="../services/TaskService.ts"/>

declare var uuid: __NodeUUID.UUID;

module App.Pages {
  export class TodoList {
    private taskList: Models.ITask[];

    constructor(
      private form: JQuery,
      private formInput: JQuery,
      private formSubmit: JQuery,
      private ulList: JQuery,
      private TaskService: Services.ITaskService
      ) {

      this.form.on('submit', this.Submit.bind(this));

      this.Init();
    }

    Init(): void {
      this.taskList = this.TaskService.get();

      this.ulList.empty();

      for (var task of this.taskList) {
        let $li = $('<li></li>').addClass('list-group-item clearfix');
        let $div = $('<div></div>').addClass('checkbox').appendTo($li);
        let $label = $('<label></label>').appendTo($div);
        let $input = $('<input></input>').attr('type', 'checkbox').prop('checked', task.IsDone).appendTo($label);
        let $button = $('<button></button>').addClass('btn btn-danger btn-xs pull-right').text('Delete').appendTo($div);

        if(task.IsDone){
          $('<del></del>').text(task.Content).appendTo($label);
        }
        else{
          $label.append(task.Content);
        }

        $button.on('click', this.Delete.bind(this, task.Id));
        $input.on('click', this.Finish.bind(this, task.Id));

        $li.appendTo(this.ulList);
      }
    }

    Submit(e: JQueryEventObject): void {
      e.preventDefault();

      var task: Models.ITask = {
        Id: uuid.v4(),
        Content: this.formInput.val(),
        IsDone: false
      }

      this.taskList.push(task);
      this.TaskService.set(this.taskList);

      this.formInput.val(undefined);

      this.Init();
    }

    Delete(id: string, e: JQueryEventObject): void {
      this.taskList = $.grep(this.taskList, (task) => task.Id !== id);

      this.TaskService.set(this.taskList);

      this.Init();
    }

    Finish(id: string, e: JQueryEventObject): void {
      $.grep(this.taskList, (task) => task.Id === id)
        .forEach((task) => task.IsDone = !task.IsDone);

      this.TaskService.set(this.taskList);

      this.Init();
    }
  }
}
