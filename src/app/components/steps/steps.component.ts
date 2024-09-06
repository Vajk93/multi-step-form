import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

	constructor() {
		this.setBackgroundImage(window.innerWidth);
	}

	ngOnInit():void {
		this.setBackgroundImage(window.innerWidth);
	}

	protected bgImage:string = '/assets/images/bg-sidebar-desktop.svg';
	private lgBreakpoint: number = 1024;

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

}
