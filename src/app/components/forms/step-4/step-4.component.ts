import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-4',
  templateUrl: './step-4.component.html',
  styleUrls: ['./step-4.component.css']
})
export class Step4Component {
	constructor(private stepperService: StepperService){}

	protected prev(){
		this.stepperService.prevStep();
	}

	protected submit(){
		console.log('submitted');
	}
}
