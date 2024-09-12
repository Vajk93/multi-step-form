import { Component, OnInit } from '@angular/core';
import { IService } from 'src/app/interfaces/globals';
import { OrderService } from 'src/app/services/order.service';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.css']
})
export class Step3Component implements OnInit {

	constructor(private stepperService: StepperService, private orderService: OrderService){}

	protected isMonthly:boolean = false;
	protected onlineServicesPrice:number = 0;
	protected largerStoragePrice:number = 0;
	protected customProfilePrice:number = 0;

	protected needOnlineServices:boolean = false;
	protected needLargerStorage:boolean = false;
	protected needCustomizableProfile:boolean = false;

	protected selectedServiceIndex:number = -1;

	ngOnInit(): void {
		this.initSelectedServices()
		this.initServicesPrices()
	}

	protected selectService(item:IService):void {
		item.selected = !item.selected

		this.updateServices()
	}

	private initServicesPrices():void {
		this.isMonthly = this.orderService.getIsMonthly();
		if(this.isMonthly){
			this.onlineServicesPrice = this.datas[0].montlyPrice
			this.largerStoragePrice = this.datas[1].montlyPrice
			this.customProfilePrice = this.datas[2].montlyPrice
		} else {
			this.onlineServicesPrice = this.datas[0].yearlyPrice
			this.largerStoragePrice = this.datas[1].yearlyPrice
			this.customProfilePrice = this.datas[2].yearlyPrice
		}
	}

	private initSelectedServices():void {
		let _order = this.orderService.getOrder();

		this.datas[0].selected = _order.need_onlineServices
		this.datas[1].selected = _order.need_largerStorage
		this.datas[2].selected = _order.need_customizableProfile
	}

	private updateServices():void {
		this.orderService.updateServices(
			this.datas[0].selected,
			this.datas[1].selected,
			this.datas[2].selected,
			this.onlineServicesPrice,
			this.largerStoragePrice,
			this.customProfilePrice
		)
		let _order = this.orderService.getOrder()
		console.log(_order);
	}
	protected next():void {
		this.updateServices()
		this.stepperService.nextStep();
	}

	protected prev():void {
		this.stepperService.prevStep();
	}

	protected datas: IService[] = [
		{
			name: 'Online service',
			desc: 'Access to multiplayer games',
			montlyPrice: 1,
			yearlyPrice: 10,
			selected: false,
		},
		{
			name: 'Larger storage',
			desc: 'Extra 1TB of cloud save',
			montlyPrice: 2,
			yearlyPrice: 20,
			selected: false,
		},
		{
			name: 'Customizable profile',
			desc: 'Custom theme on your profile',
			montlyPrice: 2,
			yearlyPrice: 20,
			selected: false,
		},
	]

}
