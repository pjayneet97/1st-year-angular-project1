import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  enterdValue:number;
  currencytype="rupees"
  result;
  constructor() { }

  ngOnInit(): void {
  }
  converCurrency(){
    if(this.currencytype=="rupees"){
      this.result=this.enterdValue/74;
    }
    else{
      this.result=this.enterdValue*74;
    }
  }

}
