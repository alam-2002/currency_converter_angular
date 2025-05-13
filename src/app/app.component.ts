import { Component } from '@angular/core';
import { CurrencyApiService } from './services/currency-api.service';
import { CurrencyModelData } from './models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'currency-converter';
  currentJson: any = {};
  baseCurrency = 'USD';
  convertCurrency = 'USD';
  result: string = '1';
  currencyModelData?: CurrencyModelData;

  constructor(private currency: CurrencyApiService) { }

  changeBase(currency: string) {
    this.baseCurrency = currency;
  }

  convertedCurrency(currency: string) {
    this.convertCurrency = currency;
  }

  // currencyConversion() {
  //   this.currency.getcurrencydata(this.baseCurrency).subscribe(data => {
  //     this.currentJson = JSON.stringify(data);
  //     this.currentJson = JSON.parse(this.currentJson);
  //     this.result = this.currentJson.conversion_rates.INR;
  //   });
  // }

  currencyConversion() {
    this.currency.getcurrencydata(this.baseCurrency).subscribe(data => {
      this.currentJson = data;
      const rate = this.currentJson.conversion_rates[this.convertCurrency];
      this.result = rate ? rate.toString() : 'Rate not available';
    });
  }
}
