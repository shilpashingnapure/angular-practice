import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'host-binding-directive';

  color:string = 'green'

  handleColor(ele : string){
    this.color = ele;
    
  }
  
  
}
