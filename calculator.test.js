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

    describe('Evaluate - Expressions simples', () => {
        test('devrait évaluer des expressions basiques', () => {
            expect(calculator.evaluate('2 + 3')).toBe(5);
            expect(calculator.evaluate('10 - 5')).toBe(5);
            expect(calculator.evaluate('4 * 3')).toBe(12);
            expect(calculator.evaluate('15 / 3')).toBe(5);
            expect(calculator.evaluate('7 % 3')).toBe(1);
        });

        test('devrait gérer les nombres décimaux', () => {
            expect(calculator.evaluate('0.1 + 0.2')).toBeCloseTo(0.3);
            expect(calculator.evaluate('3.14159 * 2')).toBeCloseTo(6.28318);
            expect(calculator.evaluate('10.5 / 2.5')).toBe(4.2);
        });

        test('devrait gérer les grands nombres', () => {
            expect(calculator.evaluate('999999999 + 1')).toBe(1000000000);
            expect(calculator.evaluate('1234567 * 987654')).toBe(1219326869678);
        });
    });

    describe('Evaluate - Expressions complexes', () => {
        test('devrait gérer les expressions multiples', () => {
            expect(calculator.evaluate('2 + 3 + 4')).toBe(9);
            expect(calculator.evaluate('10 - 5 + 3')).toBe(8);
            expect(calculator.evaluate('2 * 3 * 4')).toBe(24);
            expect(calculator.evaluate('20 / 2 / 2')).toBe(5);
        });

        test('devrait gérer les combinaisons d\'opérateurs', () => {
            expect(calculator.evaluate('2 + 3 * 4')).toBe(14);
            expect(calculator.evaluate('10 - 5 * 2')).toBe(0);
            expect(calculator.evaluate('100 / 2 + 10')).toBe(60);
            expect(calculator.evaluate('8 % 3 + 2')).toBe(4);
        });
    });

    describe('Evaluate - Gestion des erreurs', () => {
        test('devrait rejeter les expressions vides', () => {
            expect(() => calculator.evaluate('')).toThrow();
            expect(() => calculator.evaluate(' ')).toThrow();
        });

        test('devrait rejeter les expressions invalides', () => {
            expect(() => calculator.evaluate('2 +')).toThrow('Expression invalide');
            expect(() => calculator.evaluate('+ 2')).toThrow('Expression invalide');
            expect(() => calculator.evaluate('2 2')).toThrow('Expression invalide');
            expect(() => calculator.evaluate('*')).toThrow('Expression invalide');
        });

        test('devrait gérer les erreurs de division par zéro', () => {
            expect(() => calculator.evaluate('5 / 0')).toThrow('Division par zéro impossible');
            expect(() => calculator.evaluate('10 / 2 / 0')).toThrow('Division par zéro impossible');
        });

        test('devrait gérer les erreurs de modulo par zéro', () => {
            expect(() => calculator.evaluate('5 % 0')).toThrow('Modulo par zéro impossible');
        });

        test('devrait rejeter les caractères non valides', () => {
            expect(() => calculator.evaluate('2 $ 3')).toThrow();
            expect(() => calculator.evaluate('abc')).toThrow();
            expect(() => calculator.evaluate('2 @ 3')).toThrow();
        });
    });

    describe('Evaluate - Cas particuliers', () => {
        test('devrait gérer les espaces multiples', () => {
            expect(calculator.evaluate('   2    +    3   ')).toBe(5);
            expect(calculator.evaluate('1   +   2   +   3')).toBe(6);
        });

        test('devrait gérer les expressions sans espaces', () => {
            expect(calculator.evaluate('2+3')).toBe(5);
            expect(calculator.evaluate('4*5')).toBe(20);
            expect(calculator.evaluate('10/2')).toBe(5);
        });

        test('devrait gérer les nombres négatifs dans le résultat', () => {
            expect(calculator.evaluate('2 - 5')).toBe(-3);
            expect(calculator.evaluate('10 - 15')).toBe(-5);
        });

        test('devrait gérer les longues expressions', () => {
            expect(calculator.evaluate('1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10')).toBe(55);
            expect(calculator.evaluate('1 * 2 * 3 * 4 * 5')).toBe(120);
        });
    });
}); 