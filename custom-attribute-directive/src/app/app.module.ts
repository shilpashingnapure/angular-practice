import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightelementDirective } from './custom-directive/highlightelement.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightelementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
