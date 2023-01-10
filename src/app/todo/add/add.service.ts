import { Injectable } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class AddService extends TodoService {
  todosLocalStorage: Todo[] = [];
  constructor() {
    super();
  }

  public sendTodo(todo: Todo) {
    let tempTodo: Todo[] = [];

    this.todosLocalStorage =
      this.getTodos() !== null ? JSON.parse(this.getTodos()) : [];

    if (this.todosLocalStorage !== null || this.todosLocalStorage !== '') {
      tempTodo = this.todosLocalStorage;

      tempTodo.push(todo);

      localStorage.setItem('Todos', JSON.stringify(tempTodo));
    } else {
      // @ts-ignore
      this.todosLocalStorage.push(todo);

      localStorage.setItem('Todos', JSON.stringify(tempTodo));
    }
  }
}
