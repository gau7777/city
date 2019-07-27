import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpMethod } from 'blocking-proxy/built/lib/webdriver_commands';
import { Http2Session } from 'http2';

@Component({
  selector: 'app-drop2',
  templateUrl: './drop2.component.html',
  styleUrls: ['./drop2.component.css']
})
export class Drop2Component implements OnInit {
  gender = ["Male", "Female"];

  constructor() { 
   
  }

  ngOnInit() {
  }

}
