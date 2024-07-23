import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() handleInputValueEvent = new EventEmitter<string>();

  InputValue : string ;

  handleValue(){
    this.handleInputValueEvent.emit(this.InputValue)
  }




}
