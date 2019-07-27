import { Component, OnInit } from '@angular/core';
import { Capability } from 'protractor';

@Component({
  selector: 'app-drop1',
  templateUrl: './drop1.component.html',
  styleUrls: ['./drop1.component.css']
})
export class Drop1Component implements OnInit {
  city = [{"city":"Listvyanskiy","id":1},
  {"city":"Puerto Esperanza","id":2},
  {"city":"Pangai","id":3},
  {"city":"Makale","id":4},
  {"city":"Opatówek","id":5},
  {"city":"Weitang","id":6},
  {"city":"Třešť","id":7},
  {"city":"Santa Lucía","id":8},
  {"city":"Kutloanong","id":9},
  {"city":"Lewin Kłodzki","id":10}];

  selcity: any;
  constructor() { }

  ngOnInit() {
  }

  checkcity(event: any){
    console.log(this.selcity);
    
  }

get getselcity(){
  return this.selcity;
}
  
  

}
