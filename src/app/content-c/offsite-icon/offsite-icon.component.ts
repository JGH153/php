import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'php-offsite-icon',
	templateUrl: './offsite-icon.component.html',
	styleUrls: ['./offsite-icon.component.scss']
})
export class OffsiteIconComponent implements OnInit {

	@Input() offsiteName:string  = "NONE";
	@Input() offsiteUrl:string  = "NONE";
	@Input() offsiteImgSRC:string  = "NONE";

	constructor() { }

	ngOnInit() {

	}

}
