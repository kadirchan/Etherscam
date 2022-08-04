import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css'],
  //providers: [DataService],
})
export class InputAddressComponent implements OnInit {
  requestedAddress!: string;
  balance!: string;
  constructor(private dservice: DataService) {
    this.balance = '0';
  }
  ngOnInit(): void {}

  getAddress(address: string) {
    if (ethers.utils.isAddress(address)) {
      this.requestedAddress = address;
      this.getBalance();
      this.dservice.setAddress(address);
    } else {
      console.log('Invalid address');
    }
  }
  async getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      var httpProvider = new ethers.providers.JsonRpcProvider(
        this.dservice.getProvider()
      );
      let balance = await httpProvider.getBalance(this.requestedAddress);
      this.balance = ethers.utils.formatEther(balance);
    } else {
      console.log('MetaMask not installed!');
    }
  }
}
