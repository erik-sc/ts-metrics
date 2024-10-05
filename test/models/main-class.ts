import { classMetric } from "../../src/class-metric";
import ExternalService from "./external-service";

@classMetric
class MainClass {
    private externalService: ExternalService;

    constructor() {
        this.externalService = new ExternalService();
    }

    async methodWithInternalCalls() {
        await this.internalMethod1();
        await this.internalMethod2();
    }

    async methodWithExternalCalls() {
        const data = await this.externalService.fetchData();
        await this.externalService.processExternalData();
        return data;
    }

    private async internalMethod1() {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    private async internalMethod2() {
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}

export default MainClass;