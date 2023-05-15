export class ListUtils{
    static getAverage(array: number[], decimalPlaces: number = 2): number {
        let sum: number = 0
        array.forEach((value) => {
          sum += value
        })
        return (sum / array.length).toFixed(decimalPlaces) as unknown as number
      }
}