import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
