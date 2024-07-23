import { Directive  , ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[customNgClass]'
})
export class CustomNgclassDirectiveDirective {

  constructor(private element : ElementRef , private renderer : Renderer2) { }

  // set allows to used variable as method !!
  @Input() set customNgClass(obj : Object){
    let entiers = Object.entries(obj)
    for(let [className , condition] of entiers){
      if(condition){
        this.renderer.addClass(this.element.nativeElement , className)
      }
    }
  } 


}
