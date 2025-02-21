const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('Addition', () => {
        test('devrait additionner deux nombres positifs', () => {
            expect(calculator.addition(2, 3)).toBe(5);
        });

        test('devrait gérer les nombres négatifs', () => {
            expect(calculator.addition(-2, 3)).toBe(1);
            expect(calculator.addition(-2, -3)).toBe(-5);
        });

        test('devrait gérer les nombres décimaux', () => {
            expect(calculator.addition(0.1, 0.2)).toBeCloseTo(0.3);
        });
    });

    describe('Soustraction', () => {
        test('devrait soustraire deux nombres', () => {
            expect(calculator.soustraction(5, 3)).toBe(2);
        });

        test('devrait gérer les nombres négatifs', () => {
            expect(calculator.soustraction(-2, 3)).toBe(-5);
            expect(calculator.soustraction(-2, -3)).toBe(1);
        });
    });

    describe('Multiplication', () => {
        test('devrait multiplier deux nombres', () => {
            expect(calculator.multiplication(4, 3)).toBe(12);
        });

        test('devrait gérer les nombres négatifs', () => {
            expect(calculator.multiplication(-2, 3)).toBe(-6);
            expect(calculator.multiplication(-2, -3)).toBe(6);
        });

        test('devrait gérer le zéro', () => {
            expect(calculator.multiplication(5, 0)).toBe(0);
        });
    });

    describe('Division', () => {
        test('devrait diviser deux nombres', () => {
            expect(calculator.division(6, 2)).toBe(3);
        });

        test('devrait gérer les nombres décimaux', () => {
            expect(calculator.division(5, 2)).toBe(2.5);
        });

        test('devrait lancer une erreur pour division par zéro', () => {
            expect(() => calculator.division(5, 0)).toThrow('Division par zéro impossible');
        });
    });

    describe('Modulo', () => {
        test('devrait calculer le modulo', () => {
            expect(calculator.modulo(7, 3)).toBe(1);
        });

        test('devrait gérer les nombres négatifs', () => {
            expect(calculator.modulo(-7, 3)).toBe(-1);
        });

        test('devrait lancer une erreur pour modulo par zéro', () => {
            expect(() => calculator.modulo(5, 0)).toThrow('Modulo par zéro impossible');
        });
    });
}); 