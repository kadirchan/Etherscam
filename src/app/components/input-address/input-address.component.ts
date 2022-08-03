import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ethers } from 'ethers';

const Ropsten_URL =
  'https://ropsten.infura.io/v3/5073568d7c044755a82e22f4e1081f64';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css'],
})
export class InputAddressComponent implements OnInit {
  @Output() address: EventEmitter<string> = new EventEmitter();

  requestedAddress!: string;
  balance!: string;
  constructor() {
    this.balance = '0';
  }
  ngOnInit(): void {}

  getAddress(address: string) {
    if (ethers.utils.isAddress(address)) {
      this.requestedAddress = address;
      this.getBalance();
      this.address.emit(address);
    } else {
      console.log('Invalid address');
    }
  }
  async getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      var httpProvider = new ethers.providers.JsonRpcProvider(Ropsten_URL);
      let balance = await httpProvider.getBalance(this.requestedAddress);
      this.balance = ethers.utils.formatEther(balance);
      console.log(this.balance);
    } else {
      console.log('MetaMask not installed!');
    }
  }
}
