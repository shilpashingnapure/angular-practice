import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passingData';

  name : string ;
  getValueFromChild(value : string){
    // alert(value)
    this.name = value;
  }
}
