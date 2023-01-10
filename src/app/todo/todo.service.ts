import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  key: string = 'todoAplication';

  constructor() {}

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }

  public getTodos() {
    const data: any = localStorage.getItem('Todos');
    if (data !== '' || data !== null) {
      return data;
    }
  }

  public viewTodo(todo: Todo) {
    let todos = JSON.parse(this.getTodos());

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todo.id) {
        return todos[i];
      }
    }
  }

  public removeTodos() {
    localStorage.removeItem('Todos');
    window.location.reload();
  }

  public updateTodo() {
    return 'todo updated';
  }

  public clearTodo() {
    localStorage.clear();
  }
}
