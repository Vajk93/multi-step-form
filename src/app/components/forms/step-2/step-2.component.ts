import { Component } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.css']
})
export class Step2Component {

	constructor(private stepperService: StepperService){}

	protected next(){
		this.stepperService.nextStep();
	}

	protected prev(){
		this.stepperService.prevStep();
	}

	protected isMonthly:boolean = true;
	protected datas = [
		{
			icon: '/assets/images/icon-arcade.svg',
			name: 'Arcade',
			montlyPrice: '$9/mo',
			yearlyPrice: '$90/yr',
			desc: '2 months free'
		},
		{
			icon: '/assets/images/icon-advanced.svg',
			name: 'Advanced',
			montlyPrice: '$12/mo',
			yearlyPrice: '$120/yr',
			desc: '2 months free'
		},
		{
			icon: '/assets/images/icon-pro.svg',
			name: 'Pro',
			montlyPrice: '$15/mo',
			yearlyPrice: '$150/yr',
			desc: '2 months free'
		}
	]
}
