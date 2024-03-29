import { ListUtils } from "./ListUtils";

export declare type GroupingStrategy = "Tight Grouping" | "Moderate Grouping" | "Loose Grouping" | "No Grouping";

function getThreshold(strategy: GroupingStrategy): number {
    switch (strategy) {
        case "Tight Grouping": return 0.2;
        case "Moderate Grouping": return 0.5;
        case "Loose Grouping": return 0.8;
    }
    return -1;
}

function makeSimpleHistogram(data: number[]): [string[], number[]] {
    let bukcets = new Map<string, number>();
    for (let index = 0; index < data.length; index++) {
        const element = data[index] + "";
        let oldval = bukcets.get(element) || 0
        bukcets.set(element, oldval + 1)
    }
    return [
        Array.from(bukcets.keys()),
        Array.from(bukcets.values())
    ];
}

export function groupData(data: number[], strategy: GroupingStrategy = "Tight Grouping"): [string[], number[]] {
    if(data.length === 0) return [[], []]
    let sortedData = [...data].sort(((a, b) => a-b))


    if (strategy === "No Grouping") {
        return makeSimpleHistogram(sortedData)
    }

    let avg = ListUtils.getAverage(sortedData);
    let threshold = avg * getThreshold(strategy)
    console.log(threshold);
    if(threshold === 0) return [[], []]
    

    let rangeStart = 0;
    let rangeEnd = threshold;
    let currentBin = 0;

    let points: number[][] = [[]]
    let labels: string[] = []

    for (let i = 0; i < sortedData.length; i++) {
        if (sortedData[i] >= rangeStart && sortedData[i] <= rangeEnd) {
            points[currentBin].push(sortedData[i]);
        } else {
            currentBin++;
            points.push([])
            while (sortedData[i] > rangeEnd) {
                rangeStart = rangeEnd
                rangeEnd += threshold;
            }
            points[currentBin].push(sortedData[i]);
        }
    }

    // remove emtpy bins
    points = points.filter((bin) => {
        return bin.length != 0
    })

    points = [...points].sort((a, b) => a[0]-b[0])

    for (let i = 0; i < points.length; i++) {
        if (i == 0 && points.length != 1) {
            let label = " <= " + (Math.max(...points[i]));
            labels.push(label)
        } else if (i == points.length - 1 && points.length != 1) {
            let label = " >= " + (Math.min(...points[i]));
            labels.push(label);
        } else {
            let set = new Set(points[i])
            if (set.size == 1) {
                labels.push(points[i][0] + "")
            } else {
                let start = Math.min(...points[i])
                let end = Math.max(...points[i])
                let label = start + " - " + end;
                labels.push(label)
            }
        }
    }

    return [
        labels,
        points.map((bin) => bin.length)
    ]
}
