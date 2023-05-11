declare type Type = "System Call" | "Design Unit";

export class HeatMapEntry {
    name: string = "";
    localHitsPercentage: number = 0
    avgPercentage: number = 0
    appearedIn: string[] = [];

    constructor(
        name: string,
        localHitsPercentage: number,
        avgPercentage: number,
        appearedIn: string[]
    ){
        this.name = name;
        this.localHitsPercentage = localHitsPercentage;
        this.avgPercentage = avgPercentage
        this.appearedIn = appearedIn;
    }

    isSystemCall():boolean { return this.name.startsWith("<") && this.name.endsWith(">") }
}