import { Injectable } from '@angular/core';
import { TodoService } from '../todo.service';

@Injectable({
  providedIn: 'root',
})
export class AddService extends TodoService {
  constructor() {
    super();
  }
}
