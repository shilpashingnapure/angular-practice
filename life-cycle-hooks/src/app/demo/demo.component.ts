import { Component, OnChanges , OnInit , Input , DoCheck, AfterContentInit, ContentChild, ElementRef, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges , OnInit , DoCheck , AfterContentInit  , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy {

  @Input() value : string = 'initalValue';

  constructor() { 
    console.log('This is constructor !! ')
    console.log('value variable from constructor ->' , this.value)
    console.log('heading element from constructor ->' , this.headingElement)
  }

  // --------life cycle hook call in order

  // this hook call when we use decorator like (Input() , Output()) binding every time its called when its changes
  ngOnChanges(){
    console.log('This is onChanges !!')
    console.log('value variable from onChagnes !!' , this.value)
    console.log('heading element from onChanges !!',this.headingElement)
  }

  // initialize the property called onces 
  ngOnInit(){
    console.log('This is onInit !!')
    console.log('value variable from onInit !!' , this.value)
    console.log('heading element from onInit !!',this.headingElement)
  }

  // calls every time whenever changes happen even in event also which does not do anything
  ngDoCheck(){
    console.log('This is DoCheck !!')
    console.log('value variable from DoCheck !!' , this.value)
    console.log('heading element from DoCheck !!',this.headingElement)
  }

  @ContentChild('heading') headingElement : ElementRef ;
  // initialize ngcontent values  , this hook called once 
  ngAfterContentInit(){
    console.log('This is ngAfterContentInit !!')
    console.log('heading element from AfterContentInit !!',this.headingElement)
  }

  // called whenever changes happen in ngcontent , called every time
  ngAfterContentChecked(){
    console.log('This is ngAfterContentChecked !!')
    console.log('heading element from AfterContentchecked !!',this.headingElement)
  }

  // called once
  ngAfterViewInit(){
    console.log('This is AfterViewInit !!')
  }

  // whenver change happen in view this hook called  , called every time
  ngAfterViewChecked(){
    console.log('This is AfterViewChecked !!')
  }

  // when form view (html) , this component got remove this event called !!
  ngOnDestroy(){
    console.log('This is destory Hook !!')
  }



}
