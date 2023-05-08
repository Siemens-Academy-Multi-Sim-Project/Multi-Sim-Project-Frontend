export class UnitData{
    value: number;
    unit: string;

    constructor(strVal: string){
        let splitted = strVal.split(" ")
        this.value = Number.parseFloat(splitted[0])
        this.unit = splitted[1]
    }
}