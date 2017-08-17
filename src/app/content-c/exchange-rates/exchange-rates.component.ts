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

        this.handleAsyncDataLoad();

	}

    async handleAsyncDataLoad(){
        if(await this._exService.loadExDataAsync()){
            this.exData = this._exService.getLoadedExData();
        }
    }

	getNokVal(pow){

		if(pow <= 0){
			return 1;
		}else{
			return Math.pow(10, pow);
		}

	}

}
