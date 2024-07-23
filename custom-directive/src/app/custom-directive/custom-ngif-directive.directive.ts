import { Directive, TemplateRef, ViewContainerRef , Input } from '@angular/core';

@Directive({
  selector: '[customNgIf]'
})
export class CustomNgifDirectiveDirective {

  constructor(private template : TemplateRef<any> , private viewContainer : ViewContainerRef) { }

  @Input() set customNgIf(condition : boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }

}
