import inquirer from "inquirer";
let userPin = 1234;
let balance = 10000; // Initialize balance as a number
async function main() {
    // @ts-ignore
    const answers = await inquirer.prompt([
        {
            type: "password", // Use 'password' type to hide input
            name: "pin",
            message: "Enter your pin",
        }
    ]);
    if (answers.pin === `${userPin}`) { // Convert userPin to string for comparison
        console.log("Your pin is correct");
        // @ts-ignore
        const operationAnswers = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Choose operation",
                choices: [
                    "fast cash",
                    "saving account"
                ]
            }
        ]);
        if (operationAnswers.operation === "fast cash") {
            // @ts-ignore
            const fastCashAnswers = await inquirer.prompt([
                {
                    type: "list",
                    name: "amount",
                    message: "Select a amount to withdraw",
                    choices: [1000, 5000, 10000]
                }
            ]);
            if (fastCashAnswers.amount <= balance) {
                balance -= fastCashAnswers.amount;
                console.log(`Your remaining balance is ${balance}`);
            }
            else {
                console.log("Insufficient balance");
            }
        }
        else if (operationAnswers.operation === "saving account") {
            // @ts-ignore
            const savingAccoutAnswers = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount",
                    message: "Enter the amount to deposit",
                }
            ]);
            if (savingAccoutAnswers.amount <= balance) {
                balance += savingAccoutAnswers.amount;
                console.log(`Your remaining balance is ${balance}`);
            }
            else {
                console.log("Insufficient balance");
            }
        }
    }
    else {
        console.log("Invalid pin");
    }
}
main();
