import { MathUtils } from "../utils/math";

class MetricData {
    totalCalls: number = 0;
    totalTime: number = 0;
    averageTime: number = 0;
    minTime: number = Number.MAX_VALUE;
    maxTime: number = 0;
    times: number[] = [];
    standardDeviation: number = 0;
    
    update(executionTime: number) {
        this.totalCalls++;
        this.totalTime += executionTime;
        this.averageTime = this.totalTime / this.totalCalls;
        this.minTime = Math.min(this.minTime, executionTime);
        this.maxTime = Math.max(this.maxTime, executionTime);
        this.times.push(executionTime);
        this.standardDeviation = MathUtils.standardDeviation(this.averageTime, this.times, this.totalCalls);
    }
}

export default MetricData;