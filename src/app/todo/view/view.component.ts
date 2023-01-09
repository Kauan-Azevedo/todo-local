import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoComponent } from '../todo.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  @Input() todo?: Todo;
  constructor(private readonly todoComponent: TodoComponent) {}

  public goBack() {
    this.todoComponent.selectedTodo = undefined;
  }
}
