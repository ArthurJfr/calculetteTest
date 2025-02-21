class Calculator {
    constructor() {
        this.result = 0;
    }

    addition(a, b) {
        return a + b;
    }

    soustraction(a, b) {
        return a - b;
    }

    multiplication(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            throw new Error('Division par zéro impossible');
        }
        return a / b;
    }

    modulo(a, b) {
        if (b === 0) {
            throw new Error('Modulo par zéro impossible');
        }
        return a % b;
    }

    evaluate(expression) {
        if (!expression || typeof expression !== 'string') {
            throw new Error("L'expression est requise et doit être une chaîne de caractères");
        }

        // Nettoyer l'expression
        expression = expression.trim();
        if (!expression) {
            throw new Error("Expression invalide");
        }

        // Standardiser les espaces
        expression = expression.replace(/\s+/g, '');

        // Vérifier les caractères valides
        if (!/^[-\d.+*/%()]+$/.test(expression)) {
            throw new Error("Caractères non valides dans l'expression");
        }

        // Vérifier les nombres consécutifs
        if (/\d+\s*\d+/.test(expression)) {
            throw new Error("Expression invalide");
        }

        // Gérer le cas d'un nombre négatif au début
        expression = expression.replace(/^-/, '0-');
        
        // Diviser en tokens
        const tokens = expression.match(/([+\-*/%]|-?\d*\.?\d+)/g);
        
        if (!tokens || tokens.length < 1) {
            throw new Error("Expression invalide");
        }

        // Convertir les tokens en nombres et opérateurs
        const numbers = [];
        const operators = [];
        
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (/^-?\d*\.?\d+$/.test(token)) {
                const num = parseFloat(token);
                if (!Number.isFinite(num)) {
                    throw new Error("Expression invalide");
                }
                numbers.push(BigInt(Math.round(num)));
            } else if (['+', '-', '*', '/', '%'].includes(token)) {
                if (i === 0 || i === tokens.length - 1) {
                    throw new Error("Expression invalide");
                }
                operators.push(token);
            } else {
                throw new Error("Expression invalide");
            }
        }

        if (numbers.length !== operators.length + 1) {
            throw new Error("Expression invalide");
        }

        // Première passe : multiplication, division et modulo
        for (let i = 0; i < operators.length; i++) {
            if (['*', '/', '%'].includes(operators[i])) {
                try {
                    let result;
                    const a = numbers[i];
                    const b = numbers[i + 1];
                    switch (operators[i]) {
                        case '*':
                            result = a * b;
                            break;
                        case '/':
                            if (b === 0n) throw new Error('Division par zéro impossible');
                            result = a / b;
                            break;
                        case '%':
                            if (b === 0n) throw new Error('Modulo par zéro impossible');
                            result = a % b;
                            break;
                    }
                    numbers.splice(i, 2, result);
                    operators.splice(i, 1);
                    i--;
                } catch (error) {
                    throw error;
                }
            }
        }

        // Deuxième passe : addition et soustraction
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            try {
                switch (operators[i]) {
                    case '+':
                        result = result + numbers[i + 1];
                        break;
                    case '-':
                        result = result - numbers[i + 1];
                        break;
                }
            } catch (error) {
                throw error;
            }
        }

        return Number(result);
    }
}

module.exports = Calculator; 