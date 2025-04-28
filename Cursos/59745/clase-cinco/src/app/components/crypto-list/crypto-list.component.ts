import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CryptoModel } from 'src/app/models/crypto.model';
import { CryptoServiceInterface } from 'src/app/services/crypto.service.interface';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  //private URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  public cryptos:CryptoModel[] = [];

  //constructor(public httpClient : HttpClient) { }
  constructor(public service : CryptoServiceInterface) { }

  ngOnInit(): void {
    /*this.httpClient.get<CryptoModel[]>(this.URL).subscribe( 
      (data : CryptoModel[]) => {
        this.cryptos = data;
      } 
    );*/
    this.service.getAll().subscribe(
      (data : CryptoModel[]) => {
        this.cryptos = data;
      } 
    );  
  }

}
