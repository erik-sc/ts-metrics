import metricsStore from "./metric-store";
import MetricData from "./models/metric-data";

function methodMetric(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    if (!metricsStore[propertyKey]) {
        metricsStore[propertyKey] = new MetricData();
    }

    descriptor.value = async function (...args: any[]) {
        const start = performance.now();
        const result = await originalMethod.apply(this, args);
        const end = performance.now();

        const executionTime = end - start;
        const metrics = metricsStore[propertyKey];
        metrics.update(executionTime);

        return result;
    };

    return descriptor;
}

export default methodMetric;
