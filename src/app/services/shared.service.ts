import { Injectable } from '@angular/core';

const defaultValue = 0;

@Injectable({
    providedIn: 'root'
})
export class SharedService {
  constructor() { }
  public decimal: number = defaultValue;
  public setDecimal(d: number): number {
      return this.decimal = d;
  }
}
