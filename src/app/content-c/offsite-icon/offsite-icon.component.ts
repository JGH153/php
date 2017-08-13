import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	selector: 'php-offsite-icon',
	templateUrl: './offsite-icon.component.html',
	styleUrls: ['./offsite-icon.component.scss']
})
export class OffsiteIconComponent implements OnInit {

	@Input() offsiteName:string  = "NONE";
	@Input() offsiteUrl:string  = "NONE";
	@Input() offsiteImgSRC:string  = "NONE";
	@Input() offsiteTargetNew:boolean  = true;

	constructor(private sanitizer:DomSanitizer) { }

	ngOnInit() {

	}

	getTargetVal(){
		if(this.offsiteTargetNew){
			return '_blank';
		}else{
			return '_self';
		}
	}

	//https://stackoverflow.com/questions/37432609/how-to-avoid-adding-prefix-unsafe-to-link-by-angular2
	sanitize(url:string){
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

}
