import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-step-1',
  templateUrl: './step-1.component.html',
  styleUrls: ['./step-1.component.css']
})
export class Step1Component implements OnInit {

	protected form: FormGroup;
	protected isSubmitClicked:boolean = false;
	protected isMobileOptionsOpen:boolean = false;
	protected selectedPhoneElohivo:number = 70

	constructor(private stepperService: StepperService, private fb: FormBuilder, private orderService: OrderService){
		this.form = this.fb.group({
			name: ['', Validators.required], 
			email: ['', [Validators.required, Validators.email]], 
			phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]], 
		});
	}

	ngOnInit(): void {
		const _order = this.orderService.getOrder();
		this.form.patchValue({
			name: _order.name,
			email: _order.email,
			phone: _order.phone,
		});
	}

	protected selectPhoneElohivo(value:number){
		this.selectedPhoneElohivo = value;
		this.isMobileOptionsOpen = false
	}

	protected validateNumberInput(event: any): void {
		const _input = event.target as HTMLInputElement;
		_input.value = _input.value.replace(/[^0-9]/g, '');//only numbers 
	}

	protected onSubmit():void {
		this.isSubmitClicked = true;
		if (this.form.valid) {
			this.orderService.updateUserDatas(this.form.value.name,this.form.value.email,this.form.value.phone);
			this.next();
			console.log(this.form);
		}
	}

	protected next():void {
		this.stepperService.nextStep();
	}

	protected prev():void {
		this.stepperService.prevStep();
	}

}
