import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'sidebar-todo';
  isOpen = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  openNav() {
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = false;
  }
}
