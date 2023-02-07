import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  userData:any={};
  getData(data:NgForm)
  {
    console.warn(data)
    this.userData=data
  }

  ngOnInit(): void {
  }

}
