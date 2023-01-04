import { Injectable } from '@angular/core';
import { TODOS } from '../mock/todos.mock-list';
import { Todo } from '../interfaces/todo.interface';
import { Observable, of } from 'rxjs';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  key: string = 'todoAplication';
  todosLocalStorage: any = [];

  constructor() {}

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }

  public sendTodo(todo: Todo) {
    let tempTodo: Todo[] = [];

    if (this.todosLocalStorage != null) {
      tempTodo = this.todosLocalStorage;

      tempTodo.push(todo);

      localStorage.setItem('Todos', JSON.stringify(tempTodo));
    } else {
      this.todosLocalStorage.push(todo);

      localStorage.setItem('Todos', JSON.stringify(tempTodo));
    }
  }

  public getTodos() {
    let data = JSON.parse(localStorage.getItem('Todos') || '');
    return data;
  }

  public removeTodo() {
    localStorage.removeItem('Todo');
  }

  public updateTodo() {
    return 'todo updated';
  }

  public clearTodo() {
    localStorage.clear();
  }
}
