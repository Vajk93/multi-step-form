import { Component } from '@angular/core';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.css']
})
export class Step3Component {
	protected isMonthly:boolean = true;
	protected datas = [
		{
			name: 'Online service',
			desc: 'Access to multiplayer games',
			montlyPrice: '+$1/mo',
			yearlyPrice: '+$10/yr',
			selected: true,
		},
		{
			name: 'Larger storage',
			desc: 'Extra 1TB of cloud save',
			montlyPrice: '+$2/mo',
			yearlyPrice: '+$20/yr',
			selected: true,
		},
		{
			name: 'Customizable profile',
			desc: 'Custom theme on your profile',
			montlyPrice: '+$2/mo',
			yearlyPrice: '+$20/yr',
			selected: true,
		},
	]
}
