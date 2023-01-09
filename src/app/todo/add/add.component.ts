import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { AddService } from './add.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(
    private readonly addService: AddService,
    private readonly route: Router
  ) {}

  onSubmit(todo: Todo) {
    todo['status'] = 'incomplete';
    todo['id'] = Math.floor(Math.random() * 99999) + 1;

    this.addService.sendTodo(todo);
    this.route.navigate(['todos']);
  }
}
