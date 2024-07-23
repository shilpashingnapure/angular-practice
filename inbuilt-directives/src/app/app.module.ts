import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforDirectiveComponent,
    NgifDirectiveComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
