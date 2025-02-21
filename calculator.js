class Calculator {
    constructor() {
        this.result = 0;
    }

    addition(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error("Les deux nombres sont requis");
        }
        return a + b;
    }

    soustraction(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error("Les deux nombres sont requis");
        }
        return a - b;
    }

    multiplication(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error("Les deux nombres sont requis");
        }
        return a * b;
    }

    division(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error("Les deux nombres sont requis");
        }
        if (b === 0) {
            throw new Error("Division par zéro impossible");
        }
        return a / b;
    }

    modulo(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error("Les deux nombres sont requis");
        }
        if (b === 0) {
            throw new Error("Modulo par zéro impossible");
        }
        return a % b;
    }
}

module.exports = Calculator; 