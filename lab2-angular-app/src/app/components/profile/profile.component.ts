import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  id!: string;
  name!: string;
  year!: number;

  constructor() { }

  ngOnInit(): void {
    this.id = "B6310646";
    this.name = "Supanan Rueangsook"
    this.year = 2001;
  }
getDate(){
  return new Date().getFullYear();
}
  getName(){
    return this.name;
  }

}
