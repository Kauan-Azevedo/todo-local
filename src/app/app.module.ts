import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './todo/add/add.component';
import { ViewComponent } from './todo/view/view.component';
@NgModule({
  declarations: [AppComponent, TodoComponent, AddComponent, ViewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
