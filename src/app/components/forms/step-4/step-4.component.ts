import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/globals';
import { OrderService } from 'src/app/services/order.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-4',
  templateUrl: './step-4.component.html',
  styleUrls: ['./step-4.component.css']
})
export class Step4Component implements OnInit {

	constructor(private stepperService: StepperService, private orderService: OrderService){}

	protected order:any; //any here, for less code. but later it gets order with interface
	protected selectedPlanName:string = 'Arcade';
	protected selectedPlanPrice:number | null = null;
	protected isMonthly:boolean = false;

	protected onlineServicesPrice:number = 0;
	protected largerStoragePrice:number = 0;
	protected customProfilePrice:number = 0;

	protected needOnlineServices:boolean = false;
	protected needLargerStorage:boolean = false;
	protected needCustomizableProfile:boolean = false;
	protected summary:number | null = null;

	protected isOrderComfirmed:boolean = false;

	ngOnInit(): void {
		this.initDatas()
	}

	protected navigateToPlans(){
		this.stepperService.navigateToStep(2);
	}
	
	private initDatas(){
		this.order = this.orderService.getOrder();
		this.selectedPlanName = this.order.plan;
		this.selectedPlanPrice = this.orderService.getOrder().planPrice;
		this.isMonthly = this.orderService.getIsMonthly();

		this.needOnlineServices = this.order.need_onlineServices;
		this.needLargerStorage = this.order.need_largerStorage;
		this.needCustomizableProfile = this.order.need_customizableProfile;

		this.onlineServicesPrice = this.order.price_onlineServices;
		this.largerStoragePrice = this.order.price_largerStorage;
		this.customProfilePrice = this.order.price_customizableProfile;

		this.summary = this.orderService.updateSummaryPrice();
	}

	protected prev(){
		this.stepperService.prevStep();
	}

	protected submit(){
		this.isOrderComfirmed = true;
	}
}
