import { Component, HostListener, OnInit } from '@angular/core';
import { StepperService } from 'src/app/services/stepper.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

	constructor(private stepperService: StepperService) {
		this.setBackgroundImage(window.innerWidth);
	}

	ngOnInit():void {
		this.setBackgroundImage(window.innerWidth);
		this.stepperService.actualStep$.subscribe(step => {
			this.actualStep = step;
		})
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		const target = event.target as Window;
		this.setBackgroundImage(target.innerWidth);
	}

	private setBackgroundImage(width: number) {
		if (width < this.lgBreakpoint) {
			this.bgImage = '/assets/images/bg-sidebar-mobile.svg';
		} else {
			this.bgImage = '/assets/images/bg-sidebar-desktop.svg';
		}
	}

	protected steps:any[] = [
		{step: 1, title: 'YOUR INFO', isActive:false},
		{step: 2, title: 'SELECT PLAN', isActive:false},
		{step: 3, title: 'ADD-ONS', isActive:false},
		{step: 4, title: 'SUMMARY', isActive:false},
	]

	protected actualStep:number = 1
	protected bgImage:string = '/assets/images/bg-sidebar-desktop.svg';
	private lgBreakpoint: number = 1024;

}
