import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {
  vsimTimeTestData = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 5, 5, 10, 10, 20, 20, 150, 150, 156, 156]
  voptTimeTestData = [40, 203, 12, 30412,203, 12, 3255, 2034,3255, 2034, 600, 414]
  vsimMemoryTestData = [324, 2313, 20, 23, 41, 23, 41, 23, 41, 281, 236, 281, 236]

  getVsimTime(): number[]{return this.vsimTimeTestData}
  getVoptTime(): number[]{return this.voptTimeTestData}
  getVsimMemory(): number[]{return this.vsimMemoryTestData}
  
  constructor() { }
}
