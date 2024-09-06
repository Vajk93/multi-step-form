import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './components/steps/steps.component';
import { FormsComponent } from './components/forms/forms.component';
import { StepComponent } from './components/steps/step/step.component';
import { Step1Component } from './components/forms/step-1/step-1.component';
import { Step2Component } from './components/forms/step-2/step-2.component';
import { Step3Component } from './components/forms/step-3/step-3.component';
import { Step4Component } from './components/forms/step-4/step-4.component';
import { TitleAndDescComponent } from './components/title-and-desc/title-and-desc.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    FormsComponent,
    StepComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    TitleAndDescComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
