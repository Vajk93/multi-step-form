import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

	constructor(private stepperService: StepperService){}
	
	ngOnInit(): void {
		this.stepperService.actualStep$.subscribe(step => {
			this.actualStep = step;
		})
	}

	protected actualStep:number = 1
}

