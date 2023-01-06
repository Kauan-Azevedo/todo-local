import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { TodoComponent } from '../todo.component';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(
    private readonly todoService: TodoService,
    private readonly route: Router
  ) {}

  onSubmit(todo: Todo) {
    todo['status'] = 'incomplete';
    todo['id'] = Math.floor(Math.random() * 99999) + 1;

    this.todoService.sendTodo(todo);
    this.route.navigate(['todos']);
  }
}
