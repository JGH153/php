import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'php-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss']
})
export class SeachBarComponent implements OnInit {

	@Input() searchSiteName:string  = "NONE";
	@Input() searchSiteUrl:string  = "NONE";

	formSeartchQuery:string = "";

	constructor() { }

	ngOnInit() {
	}

	onSubmit(form){

		window.open(this.searchSiteUrl+this.formSeartchQuery, "_blank");
	}

}
