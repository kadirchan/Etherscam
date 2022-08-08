import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ethAmount!: string;
  receiverAddress!: string;
  HttpProvider: string;
  contractAddress: string;
  ABI: any;
  senderBalance!: string;

  constructor() {
    this.HttpProvider =
      'https://ropsten.infura.io/v3/5073568d7c044755a82e22f4e1081f64';
    this.contractAddress = '0x1511b10671f97ced2d52324ca3c7229e6bc4a46a';
    this.ABI = [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'receiver',
            type: 'address',
          },
        ],
        name: 'SendToAddress',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ];
  }

  getEthAmount(): string {
    return this.ethAmount;
  }
  getAddress(): string {
    return this.receiverAddress;
  }
  getProvider(): string {
    return this.HttpProvider;
  }

  getContractAddress(): string {
    return this.contractAddress;
  }
  getABI() {
    return this.ABI;
  }
  getSenderBalance() {
    return this.senderBalance;
  }

  setEthAmount(ethAmount: string) {
    this.ethAmount = ethAmount;
    console.log(this.ethAmount);
  }
  setAddress(receiverAddress: string) {
    this.receiverAddress = receiverAddress;
  }
  setSenderBalance(senderBalance: string) {
    this.senderBalance = senderBalance;
    console.log(this.senderBalance);
  }
}
