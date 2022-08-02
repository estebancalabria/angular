import { Component, Input, OnInit } from '@angular/core';
import { CryptoModel } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  error : string = "";
  cryptos : any[] = [];
  properties : string[] = [];

  @Input()
  hiddenProps : string[] = [];


  constructor( private cryptoService : CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getAll().subscribe((resp)=>{
      this.cryptos = resp;
      
      if (resp.length>0){
        for (let prop in resp[0]){
          if (!this.hiddenProps.includes(prop)){
            this.properties.push(prop);
          }
        }
      }
    }, 
    (err)=>{
      //this.error = JSON.stringify(err);
      this.error = err.message;
    })
  }

}
