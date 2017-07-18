import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCComponent } from './content-c/content-c.component';
import { OffsiteIconComponent } from './content-c/offsite-icon/offsite-icon.component';
import { SeachBarComponent } from './content-c/seach-bar/seach-bar.component';
import { ExchangeRatesComponent } from './content-c/exchange-rates/exchange-rates.component';

import { ExchangeRateService } from './content-c/services/exchange-rate.service';

@NgModule({
	declarations: [
		AppComponent,
		ContentCComponent,
		OffsiteIconComponent,
		SeachBarComponent,
		ExchangeRatesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	providers: [
		ExchangeRateService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
