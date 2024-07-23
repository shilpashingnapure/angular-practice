import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-encapsulation',
  templateUrl: './none-encapsulation.component.html',
  styleUrls: ['./none-encapsulation.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NoneEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
