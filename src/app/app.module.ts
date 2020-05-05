import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstexampleComponent } from './nestingcomp/firstexample.component';
import { InlinehtmltemplateComponent } from './inlinehtmltemplate/inlinehtmltemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstexampleComponent,
    InlinehtmltemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
