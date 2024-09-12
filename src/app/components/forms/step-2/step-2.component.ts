import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-2',
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.css']
})
export class Step2Component implements OnInit {

	constructor(private stepperService: StepperService, private orderService: OrderService){}

	protected isMonthly:boolean = true;
	protected selectedPlanPrice:number = 0;
	protected selectedPlanName:string = 'Arcade';
	protected selectedPlanIndex:number = 1;

	ngOnInit(): void {
		const _order = this.orderService.getOrder();
		this.selectedPlanName = _order.plan;
		this.isMonthly = _order.isMonthly
		console.log(this.isMonthly);
	}

	protected selectPlan(index: number){
		this.selectedPlanIndex = index;
		this.selectedPlanName = this.plans[index].name;
		this.isMonthly ?
			this.selectedPlanPrice = this.plans[index].montlyPrice :
			this.selectedPlanPrice = this.plans[index].yearlyPrice;

		console.log(this.plans[this.selectedPlanIndex].name, this.selectedPlanPrice, this.isMonthly);
		this.updatePlan()
	}

	protected switchPeriod(){
		this.isMonthly = !this.isMonthly
		this.isMonthly ?
			this.selectedPlanPrice = this.plans[this.selectedPlanIndex].montlyPrice :
			this.selectedPlanPrice = this.plans[this.selectedPlanIndex].yearlyPrice;
		
		console.log(this.plans[this.selectedPlanIndex].name, this.selectedPlanPrice, this.isMonthly);
		this.updatePlan()
	}

	protected next(){
		this.stepperService.nextStep();
	}

	protected prev(){
		this.stepperService.prevStep();
	}

	private updatePlan(){
		this.orderService.updatePlan(this.plans[this.selectedPlanIndex].name, this.selectedPlanPrice, this.isMonthly)
	}

	protected plans = [
		{
			icon: '/assets/images/icon-arcade.svg',
			name: 'Arcade',
			montlyPrice: 9,
			yearlyPrice: 90,
			desc: '2 months free'
		},
		{
			icon: '/assets/images/icon-advanced.svg',
			name: 'Advanced',
			montlyPrice: 12,
			yearlyPrice: 120,
			desc: '2 months free'
		},
		{
			icon: '/assets/images/icon-pro.svg',
			name: 'Pro',
			montlyPrice: 15,
			yearlyPrice: 150,
			desc: '2 months free'
		}
	]

}
