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