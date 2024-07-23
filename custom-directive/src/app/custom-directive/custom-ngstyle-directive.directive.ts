import { Directive, ElementRef, Renderer2 , Input } from '@angular/core';

@Directive({
  selector: '[customNgStyle]'
})
export class CustomNgstyleDirectiveDirective {

  constructor(private element : ElementRef , private renderer : Renderer2) { }

  @Input() set customNgStyle(obj : Object){
    let entiers = Object.entries(obj)
    for(let [property, value] of entiers){
      this.renderer.setStyle(this.element.nativeElement , property , value)
      
    }
  }

}
