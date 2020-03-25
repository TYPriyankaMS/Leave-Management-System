import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {

  constructor() { 
    console.log('this is nav component');
  }

  ngOnInit(): void {
  }

}
