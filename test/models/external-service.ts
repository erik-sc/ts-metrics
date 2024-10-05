import { classMetric } from "../../src/class-metric";

@classMetric
class ExternalService {
    async fetchData() {
        // Simula uma chamada a um serviço externo
        await new Promise(resolve => setTimeout(resolve, 300));
        return "External data";
    }

    async processExternalData() {
        // Simula o processamento de dados externos
        await new Promise(resolve => setTimeout(resolve, 150));
    }
}

export default ExternalService;