import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconButton } from "@angular/material/button"
import { MatIcon } from "@angular/material/icon"
import { MatMenu, MatMenuTrigger, MatMenuItem } from "@angular/material/menu"
import { MatButton } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card"
import { MatGridListModule} from "@angular/material/grid-list"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbar,
    MatIconButton, 
    MatIcon, 
    MatMenu, 
    MatMenuTrigger, 
    MatMenuItem,
    MatButton,
    MatCardModule,
    MatGridListModule
  ],
  exports : [
    MatToolbar,
    MatIconButton, 
    MatIcon, 
    MatMenu, 
    MatMenuTrigger, 
    MatMenuItem,
    MatButton,
    MatCardModule,
    MatGridListModule  
  ]
})
export class VistaModule { }
