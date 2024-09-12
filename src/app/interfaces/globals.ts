export interface IOrder {
    name: string,
    email: string,
    phone: string,
    plan: string,
    planPrice: number,
    isMonthly: boolean,

    need_onlineServices: boolean,
    need_largerStorage: boolean,
    need_customizableProfile: boolean,

    price_onlineServices: number,
    price_largerStorage: number,
    price_customizableProfile: number,
    
    summaryPrice: number
}

export interface IPlan {
    icon: string,
	name: string,
	montlyPrice: number,
	yearlyPrice: number,
	desc: string
}

export interface IService {
    name: string,
	desc: string,
	montlyPrice: number,
	yearlyPrice: number,
	selected: boolean,
}

export interface IStep {
    step: 1 | 2 | 3 | 4, 
    title: string, 
    isActive:boolean
}