import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.css']
})
export class Step1Component {

	constructor(private stepperService: StepperService){}

	protected next(){
		this.stepperService.nextStep();
	}

	protected prev(){
		this.stepperService.prevStep();
	}
}
