/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private data: { [key: string]: any } = {};

  constructor() {}

  getData(key: string): any {
    return key in this.data ? this.data[key] : null;
  }

  setData(key: string, value: any): void {
    this.data[key] = value;
  }

  clearData(key: string): void {
    delete this.data[key];
  }

  clearAllData(): void {
    this.data = {};
  }
}
