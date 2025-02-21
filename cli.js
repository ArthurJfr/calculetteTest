const Calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

function promptUser() {
    console.log("\nCalculatrice JavaScript");
    console.log("1. Addition");
    console.log("2. Soustraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulo");
    console.log("6. Quitter");

    rl.question("Choisissez une opération (1-6): ", (choix) => {
        if (choix === '6') {
            rl.close();
            return;
        }

        rl.question("Premier nombre: ", (a) => {
            rl.question("Deuxième nombre: ", (b) => {
                const num1 = parseFloat(a);
                const num2 = parseFloat(b);

                try {
                    let resultat;
                    switch (choix) {
                        case '1':
                            resultat = calculator.addition(num1, num2);
                            break;
                        case '2':
                            resultat = calculator.soustraction(num1, num2);
                            break;
                        case '3':
                            resultat = calculator.multiplication(num1, num2);
                            break;
                        case '4':
                            resultat = calculator.division(num1, num2);
                            break;
                        case '5':
                            resultat = calculator.modulo(num1, num2);
                            break;
                        default:
                            console.log("Opération invalide");
                            promptUser();
                            return;
                    }
                    console.log(`Résultat: ${resultat}`);
                } catch (error) {
                    console.log(`Erreur: ${error.message}`);
                }
                promptUser();
            });
        });
    });
}

promptUser(); 