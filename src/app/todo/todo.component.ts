import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  selectedTodo?: Todo;
  changingStatus: boolean = false;
  selectedStatus?: string;
  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    const listTodos: any = this.todoService.getTodos();
    this.todos = JSON.parse(listTodos);
  }
  viewTodo(todo: Todo) {
    this.selectedTodo = this.todoService.viewTodo(todo);
  }

  changeStatus() {
    this.changingStatus = true;
  }

  confirmStatusChange() {
    console.log(status);
  }

  sendTodo(todo: Todo) {
    this.todoService.sendTodo(todo);
  }

  updateTodo() {
    this.todoService.updateTodo();
  }

  removeTodo() {
    this.todoService.removeTodo();
  }
}
