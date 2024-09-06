import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-and-desc',
  templateUrl: './title-and-desc.component.html',
  styleUrls: ['./title-and-desc.component.css']
})
export class TitleAndDescComponent {
	@Input() title:string = '';
	@Input() desc:string = '';
}
