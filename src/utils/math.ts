export class MathUtils {
    static standardDeviation(average: number, data: number[], n: number): number {
        const squareDiffs = data.map(value => Math.pow(value - average, 2));
        const avgSquareDiff = squareDiffs.reduce((a, b) => a + b, 0) / n;
        return Math.sqrt(avgSquareDiff);
    }
}