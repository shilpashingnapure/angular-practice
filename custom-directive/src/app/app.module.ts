import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomNgclassDirectiveDirective } from './custom-directive/custom-ngclass-directive.directive';
import { CustomNgstyleDirectiveDirective } from './custom-directive/custom-ngstyle-directive.directive';
import { CustomNgifDirectiveDirective } from './custom-directive/custom-ngif-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomNgclassDirectiveDirective,
    CustomNgstyleDirectiveDirective,
    CustomNgifDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
