import { Component, OnInit } from '@angular/core';
import { Demo } from '../services/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleName(name : string){
    let demo = new Demo()
    demo.print(name)
  }

}
