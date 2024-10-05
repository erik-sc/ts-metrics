import metricsStore from "../src/metric-store"; // Importa o armazenamento de métricas
import MainClass from "./models/main-class"; // Importa a classe principal

describe("class-metric-test", () => {
    let mainInstance: MainClass;

    beforeEach(() => {
        mainInstance = new MainClass();
    });

    afterEach(() => {
        Object.keys(metricsStore).forEach(key => {
            delete metricsStore[key];
        });
    });

    it("should run complex test and give out results", async () => {
        await mainInstance.methodWithInternalCalls();
        await mainInstance.methodWithInternalCalls();

        await mainInstance.methodWithExternalCalls();
        await mainInstance.methodWithExternalCalls();

        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('totalTime');
        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('averageTime', expect.any(Number));
        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['methodWithInternalCalls']).toHaveProperty('standardDeviation', expect.any(Number));

        expect(metricsStore['internalMethod1']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['internalMethod1'].totalTime).toBeGreaterThan(200);
        expect(metricsStore['internalMethod1'].averageTime).toBeCloseTo(100.061, 2);
        expect(metricsStore['internalMethod1']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['internalMethod1']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['internalMethod1']).toHaveProperty('standardDeviation', expect.any(Number));

        expect(metricsStore['internalMethod2']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['internalMethod2'].totalTime).toBeGreaterThan(400);
        expect(metricsStore['internalMethod2'].averageTime).toBeCloseTo(200.166, 2);
        expect(metricsStore['internalMethod2']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['internalMethod2']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['internalMethod2']).toHaveProperty('standardDeviation', expect.any(Number));

        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('totalTime');
        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('averageTime', expect.any(Number));
        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['methodWithExternalCalls']).toHaveProperty('standardDeviation', expect.any(Number));

        expect(metricsStore['fetchData']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['fetchData']).toHaveProperty('totalTime');
        expect(metricsStore['fetchData'].averageTime).toBeCloseTo(300.160, 2);
        expect(metricsStore['fetchData']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['fetchData']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['fetchData']).toHaveProperty('standardDeviation', expect.any(Number));

        expect(metricsStore['processExternalData']).toHaveProperty('totalCalls', 2);
        expect(metricsStore['processExternalData']).toHaveProperty('totalTime');
        expect(metricsStore['processExternalData'].averageTime).toBeCloseTo(150.061, 2);
        expect(metricsStore['processExternalData']).toHaveProperty('minTime', expect.any(Number));
        expect(metricsStore['processExternalData']).toHaveProperty('maxTime', expect.any(Number));
        expect(metricsStore['processExternalData']).toHaveProperty('standardDeviation', expect.any(Number));
    });
});
