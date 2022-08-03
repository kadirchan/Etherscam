import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-send-amount',
  templateUrl: './input-send-amount.component.html',
  styleUrls: ['./input-send-amount.component.css'],
})
export class InputSendAmountComponent implements OnInit {
  @Output() ethAmount: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getAmount(ethAmount: string) {
    this.ethAmount.emit(Number(ethAmount));
  }
}
