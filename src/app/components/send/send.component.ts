import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';

const Ropsten_URL =
  'https://ropsten.infura.io/v3/5073568d7c044755a82e22f4e1081f64';
const contractAddress = '0x1511b10671f97ced2d52324ca3c7229e6bc4a46a';
const ABI = [
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

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css'],
})
export class SendComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  ethAmount!: number;
  receiverAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  tx: any;
  async Send() {
    //const httpProvider = new ethers.providers.JsonRpcProvider(Ropsten_URL);
    var signer;
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
    }

    const Etherscam = new ethers.Contract(contractAddress, ABI, signer);
    const transactionResponse = await Etherscam['SendToAddress'](
      ethers.utils.getAddress(this.receiverAddress),
      { value: ethers.utils.parseEther('0.01') }
    );
    this.tx = transactionResponse;
    console.log(transactionResponse);
  }
}
