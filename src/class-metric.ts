import methodMetric from "./method-metric";

export function classMetric(constructor: Function) {
    const classMethods = Object.getOwnPropertyNames(constructor.prototype);
    
    classMethods.forEach(method => {
        if (method !== 'constructor') {
            const descriptor = Object.getOwnPropertyDescriptor(constructor.prototype, method);
            if (descriptor && typeof descriptor.value === 'function') {
                Object.defineProperty(constructor.prototype, method, methodMetric(constructor.prototype, method, descriptor));
            }
        }
    });
}