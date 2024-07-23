import { Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  constructor() { }
  @ContentChild('heading') headingEle : ElementRef;

  
  // getting element ref 
  getElement(){
    console.log(this.headingEle)
    console.log(this.headingEle.nativeElement.innerText)
    alert(this.headingEle.nativeElement.innerText)
  }  

}
