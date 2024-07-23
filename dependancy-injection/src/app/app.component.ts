import { Component } from '@angular/core';
import { PrintService } from './services/print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'dependancy-injection';
  text : string ; 
  constructor(private printService : PrintService){
    
  }
  getText(){
    console.log(this.text)
    this.printService.print(this.text)
  }

}
