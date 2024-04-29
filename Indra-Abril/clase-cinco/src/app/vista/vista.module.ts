import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar } from "@angular/material/toolbar";
import { MatIconButton } from "@angular/material/button"
import { MatIcon } from "@angular/material/icon"
import { MatMenu, MatMenuTrigger, MatMenuItem } from "@angular/material/menu"
import { MatButton } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  providers: [provideNativeDateAdapter()],
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
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
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
    MatGridListModule,
    MatFormFieldModule ,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ]
})
export class VistaModule { }
