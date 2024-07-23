import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightelement]'
})
export class HighlightelementDirective implements OnInit {


  /* 
  
  1. This is the bad practice to write in constructor and add anything directly to html element
  2. for this use renderer to aviod add anything directly to html element
  
  constructor(element : ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
   
  */

   constructor(private element : ElementRef , private renderer : Renderer2){

   }

  //  will get element here
   ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement , 'backgroundColor' , 'yellow');
   }

}
