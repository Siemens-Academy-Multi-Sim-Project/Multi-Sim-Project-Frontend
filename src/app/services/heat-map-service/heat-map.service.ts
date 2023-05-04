import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeatMapService {
    testLabels = ['INTC', 'GS', 'CVX', 'GE', 'CAT', 'RTX', 'CSCO', 'JNJ', 'PG', 'TRV', 'MMM', 'NKE', 'IYT']
    testSizes = [1.2, 0.4, -1.4, 2.7, -0.3, 5.1, -2.3, 2.1, 0.3, 0.12, -2.31, 3.98, 1.67]
    constructor() { }

    getDuPerformance(): {labels:string[], sizes:number[]}{
        return {
            labels: this.testLabels,
            sizes: this.testSizes
        }
    }
}
