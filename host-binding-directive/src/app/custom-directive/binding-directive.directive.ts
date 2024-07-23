import { Directive, ElementRef, HostBinding, Renderer2  , Input, OnInit , SimpleChanges, OnChanges} from '@angular/core';

@Directive({
  selector: '[appBindingDirective]'
})
export class BindingDirectiveDirective implements OnInit , OnChanges {

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  @Input() appBindingDirective : string = 'transparent';
  @HostBinding('style.background') background = this.appBindingDirective;

  ngOnInit(){
    console.log(this.appBindingDirective)
    this.background = this.appBindingDirective
  }

  // when the binding value will change we can get change value here !!
  ngOnChanges(changes: SimpleChanges): void {
    console.log('this is onchanges !!' , changes.appBindingDirective.currentValue);
    this.background = changes.appBindingDirective.currentValue;
  }


}
