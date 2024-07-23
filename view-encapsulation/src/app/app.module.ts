import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmulatedEncapsulationComponent } from './emulated/emulated-encapsulation/emulated-encapsulation.component';
import { EmulatedEncapsulationChildComponent } from './emulated/emulated-encapsulation-child/emulated-encapsulation-child.component';
import { NoneEncapsulationComponent } from './none/none-encapsulation/none-encapsulation.component';
import { NoneEncapsulationChildComponent } from './none/none-encapsulation-child/none-encapsulation-child.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom/shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { ShadowDomEncapsulationChildComponent } from './shadow-dom/shadow-dom-encapsulation-child/shadow-dom-encapsulation-child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatedEncapsulationComponent,
    EmulatedEncapsulationChildComponent,
    NoneEncapsulationComponent,
    NoneEncapsulationChildComponent,
    ShadowDomEncapsulationComponent,
    ShadowDomEncapsulationChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
