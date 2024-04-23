import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CabeceraComponent,
    NuevaTareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
