import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Etherscam';
  address!: string;
  ethAmount!: number;

  setEthAmount(ethAmount: number) {
    this.ethAmount = ethAmount;
  }
  setReceiver(address: string) {
    this.address = address;
  }
  sendTransaction() {
    console.log(this.ethAmount);
    console.log(this.address);
  }
}
