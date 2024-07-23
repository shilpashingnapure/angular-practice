import { Component } from '@angular/core';
import { Demo } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';

  handleName(name : string){
    let demo = new Demo();
    demo.print(name)
  }
}
