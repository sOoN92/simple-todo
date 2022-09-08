import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  public tasks: { text: string; done: boolean }[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string) {
    if (task === '') return;
    this.tasks.push({
      text: task,
      done: false,
    });
  }
  removeTask(task: { text: string; done: boolean }) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  toggle(task: { text: string; done: boolean }) {
    task.done = !task.done;
  }
}
