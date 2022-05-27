import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoService } from './services/crypto.service';
import { CryptoServiceInterface } from './services/crypto.service.interface';
import { CryptoServiceHttp } from './services/crypto.service.http';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide : CryptoServiceInterface, useClass:CryptoServiceHttp}],
  bootstrap: [AppComponent]
})
export class AppModule { }
