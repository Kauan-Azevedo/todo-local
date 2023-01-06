import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges, OnInit {
  title = 'sidebar-todo';
  isOpen = false;
  name = '';

  constructor(private readonly route: ActivatedRoute) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen']) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.name = params['name'];
    });
  }

  openNav() {
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = false;
  }
}
