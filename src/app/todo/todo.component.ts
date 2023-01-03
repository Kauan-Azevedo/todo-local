import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[] = [];
  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      let todo: Todo = {
        id: i,
        title: `Todo ${i}`,
        description: `Description ${i}`,
        status: 'in-progress',
      };
      this.sendTodo(todo);
    }
    this.getTodos();
  }

  getTodos() {
    // this.todoService.getTodos().subscribe((todos) => {
    //   this.todos = todos;
    // });
    const lTodos = this.todoService.getTodos();
    this.todos = lTodos;
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
