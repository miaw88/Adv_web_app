import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  comment!: string;

  constructor() {}
  
  ngOnInit(): void {

  }

  OnUserClick($e?:any){
    alert('You '+$e.type+' the button at ('+$e.clientX+','+$e.clientY+')');
  }

  OnUserDBclick($e?:any){
    alert('You '+$e.type+' the button');
  }
}
