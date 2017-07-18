import { Component, OnInit } from '@angular/core';

import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'php-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {

	exData:Array<any> = [];

	constructor(private _exService : ExchangeRateService) { }

	ngOnInit() {

		this._exService.loadExData().subscribe(data => {
			//console.log("data loaded;");
			this.exData = this._exService.getLoadedExData();
			//console.log(this.exData);
		}, error => {
			//console.log("data load error;");
		});



	}

}
