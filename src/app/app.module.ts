import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { FormsComponent } from './components/forms/forms.component';
import { StepComponent } from './components/steps/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    FormsComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
