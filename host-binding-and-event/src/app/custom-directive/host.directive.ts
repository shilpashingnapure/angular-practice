import { Directive, ElementRef, HostBinding,  HostListener,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective  {

  constructor(private element : ElementRef , private renderer : Renderer2) { }


  // host binding add to the host element
  @HostBinding('style.backgroundColor') background : string = 'green';

  @HostBinding('style.color') color : string = 'yellow';
  
  //host event add to the host element
  @HostListener('mouseenter') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement , 'backgroundColor','blue');
  }

  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.element.nativeElement , 'backgroundColor' , 'green');
  }
  

}
