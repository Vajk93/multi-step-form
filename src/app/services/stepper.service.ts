import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {

	public nextStep(){
		let _step = this.stepSubject.getValue() + 1;
		this.stepSubject.next(_step)
		console.log(_step);
	}

	public prevStep(){
		let _step = this.stepSubject.getValue() - 1;
		this.stepSubject.next(_step)
		console.log(_step);
	}
	private stepSubject = new BehaviorSubject<number>(3);
	public actualStep$ = this.stepSubject.asObservable()

}
