import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RouterLink
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
