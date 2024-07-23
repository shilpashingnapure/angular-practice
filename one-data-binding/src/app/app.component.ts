import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one-data-binding';

  imgName='img is natrue'

  handleBtn(){
    alert('this is the event binding!')
  }

}
