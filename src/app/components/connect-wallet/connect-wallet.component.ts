import { Component, OnInit } from '@angular/core';
import { detectEthereumProvider } from '@metamask/detect-provider';
import { initializeProvider } from '@metamask/providers';
import { DataService } from 'src/app/services/data.service';
import * as MetaMask from '@metamask/detect-provider';

import { ethers } from 'ethers';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css'],
})
export class ConnectWalletComponent implements OnInit {
  button_status!: string;
  balance!: string;
  constructor(private dservice: DataService) {
    this.button_status = 'Connect';
    this.balance = '0';
  }

  ngOnInit(): void {}

  async connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      console.log(window.ethereum);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      this.button_status = 'Connected';
      const signerAddress = await provider.getSigner().getAddress();
      this.getBalance(signerAddress);
    } else {
      console.log('MetaMask not installed!');
    }
  }
  async getBalance(signerAddress: string) {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance = await provider.getBalance(signerAddress);
      this.balance = ethers.utils.formatEther(balance);
      this.dservice.setSenderBalance(this.balance.toString());
      //console.log(this.balance);
    } else {
      console.log('MetaMask not installed!');
    }
  }
}
