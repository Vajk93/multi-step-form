

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IOrder } from '../interfaces/globals';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

	private order:IOrder = {
		name: '',
		email: '',
		phone: '',
		plan: 'Arcade',
		planPrice: 0,
		isMonthly: true,
		need_onlineServices: false,
		need_largerStorage: false,
		need_customizableProfile: false,
		price_onlineServices: 0,
		price_largerStorage: 0,
		price_customizableProfile: 0,
		summaryPrice: 0
	}
	
	private orderSubject = new BehaviorSubject<IOrder>(this.order);
	public orderState$ = this.orderSubject.asObservable()

	public updateUserDatas(name:string, email:string,phone:string){
		this.order.name = name;
		this.order.email = email;
		this.order.phone = phone;
		this.orderSubject.next(this.order);
		console.log(this.order);
	}

	public updatePlan(plan:string, planPrice:number, isMonthly:boolean){
		this.order.plan = plan;
		this.order.planPrice = planPrice;
		this.order.isMonthly = isMonthly
		this.orderSubject.next(this.order);
	}

	// public updatePlanPeriod(isMonthly:boolean){
	// 	this.order.isMonthly = isMonthly;
	// 	this.orderSubject.next(this.order);
	// }

	public updateServices(
		needOnlineServices:boolean,
		needLargerStorage:boolean,
		needCustomizableProfile:boolean,
		onlineServicesPrice:number,
		largerStoragePrice:number,
		customProfilePrice:number
	){
		this.order.need_onlineServices = needOnlineServices;
		this.order.need_largerStorage = needLargerStorage;
		this.order.need_customizableProfile = needCustomizableProfile;
		this.order.price_onlineServices = onlineServicesPrice;
		this.order.price_largerStorage = largerStoragePrice;
		this.order.price_customizableProfile = customProfilePrice;
		this.orderSubject.next(this.order);
	}

	public getOrder(): IOrder {
		return this.orderSubject.getValue();
	}

}