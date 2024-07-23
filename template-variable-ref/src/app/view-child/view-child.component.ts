import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // to store template variable referance we use viewChild

  @ViewChild('myName') name : ElementRef; 
  @ViewChild('mySurname') surname : ElementRef ;

  handleValues(){
    console.log(this.name)
    console.log(this.surname)
    alert(`hello , my name is ${this.name.nativeElement.value}  ${this.surname.nativeElement.value} `)
  }

}
