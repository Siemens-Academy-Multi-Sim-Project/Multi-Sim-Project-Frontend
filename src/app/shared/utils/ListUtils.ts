export class ListUtils{
    static getAverage(array: number[]): number {
        let sum: number = 0
        array.forEach((value) => {
          sum += value
        })
        return (sum / array.length).toFixed(2) as unknown as number
      }
}