import { Injectable } from '@angular/core';
import { TODOS } from '../mock/todos.mock-list';
import { Todo } from '../interfaces/todo.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }

  sendTodo() {
    return console.log('todo dent');
  }

  updateTodo() {
    return console.log('todo updated');
  }

  deleteTodo() {
    return console.log('todo deleted');
  }
}
