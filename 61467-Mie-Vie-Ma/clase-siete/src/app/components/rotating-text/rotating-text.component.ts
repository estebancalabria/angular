import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-text',
  templateUrl: './rotating-text.component.html',
  styleUrls: ['./rotating-text.component.css']
})
export class RotatingTextComponent implements OnInit {

  @Input()
  text:string="";
  angulo:number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{ this.angulo++}, 10);
  }

}
