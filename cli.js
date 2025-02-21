const Calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

function promptUser() {
    console.log("\nCalculatrice JavaScript");
    console.log("Entrez votre expression (ex: 2 + 3 * 4) ou 'q' pour quitter");

    rl.question("> ", (expression) => {
        if (expression.toLowerCase() === 'q') {
            rl.close();
            return;
        }

        try {
            const resultat = calculator.evaluate(expression);
            console.log(`Résultat: ${resultat}`);
        } catch (error) {
            console.log(`Erreur: ${error.message}`);
        }
        promptUser();
    });
}

promptUser(); 