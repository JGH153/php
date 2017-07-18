import { Injectable, EventEmitter } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ExchangeRateService {

	private exDataLoaded = new EventEmitter<boolean>();
	private exData;

	constructor(
		private _http: Http,
	) { }

	loadExData():EventEmitter<boolean>{

		setTimeout(() => {
            //console.log("EMIT!")
            this.handleLoadingExData();
        }, 0);


        return this.exDataLoaded;

	}

	handleLoadingExData(){

		this._http.get("https://data.norges-bank.no/api/data/EXR?lastNObservations=1")
			.subscribe(
	            data => {
	                this.processLodedExData(data);
	            },
	            error => {

					console.error("get ex data error ERROR! ", error);

				}
	        );

	}

	processLodedExData(data){

		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(data._body,"text/xml");
		//console.log(xmlDoc);
		// console.log(xmlDoc.nodeValue);
		//console.log(xmlDoc.getElementsByTagNameNS("*", "Series")[0]);

		let tempList = Array.prototype.slice.call(xmlDoc.getElementsByTagNameNS("*", ("Series")));
		let wantedCurrencies = ['USD', 'SEK', 'GBP', 'EUR'];
		let filteredList:Array<any> = [];

		tempList.forEach(current => {
			//where currency is in wanted list, and data is daily
			if(wantedCurrencies.includes(current.getAttribute('QUOTE_CUR')) && current.getAttribute('FREQ') == "B"){
				filteredList.push({"name": current.getAttribute('QUOTE_CUR'), "value" : current.childNodes[0].getAttribute('OBS_VALUE'), "multiply" : current.getAttribute('UNIT_MULT')})
			}

		});

		this.exData = filteredList;
		this.exDataLoaded.emit(true);

	}

	getLoadedExData(){

		return this.exData;

	}

}
