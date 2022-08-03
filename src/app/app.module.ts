import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { InputAddressComponent } from './components/input-address/input-address.component';
import { InputSendAmountComponent } from './components/input-send-amount/input-send-amount.component';
import { ConnectWalletComponent } from './components/connect-wallet/connect-wallet.component';
import { SendComponent } from './components/send/send.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAddressComponent,
    InputSendAmountComponent,
    ConnectWalletComponent,
    SendComponent,
  ],
  imports: [BrowserModule],
  providers: [{ provide: Window, useValue: window }], // window object
  bootstrap: [AppComponent],
})
export class AppModule {}
