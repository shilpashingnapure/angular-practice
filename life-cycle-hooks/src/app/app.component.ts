import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'lifeCycle';

  name : string = 'shilpa'

  Inputvalue : string = '';

  getInput(ele : HTMLInputElement){
    this.Inputvalue = ele.value
  }

  check : boolean = true

}
