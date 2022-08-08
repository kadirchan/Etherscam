import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css'],
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
      this.active_balance();
      this.requestedAddress = address;
      this.getBalance();
      this.dservice.setAddress(address);
    } else {
      console.log('Invalid address');
      this.active_invalid();
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
  active_balance() {
    var x = document.getElementById('receiver_balance');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('invalid');
    if (x?.style.display == 'block') x.style.display = 'none';
  }
  active_invalid() {
    var x = document.getElementById('invalid');
    if (x?.style.display == 'none') x.style.display = 'block';
    x = document.getElementById('receiver_balance');
    if (x?.style.display == 'block') x.style.display = 'none';
  }
}
