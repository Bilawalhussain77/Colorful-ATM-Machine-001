import inquirer from "inquirer";

interface ansType{
    myBalance = 10000
    myPinCode = 1234
}
 const answers: ansType = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin: ",
    }
])
if (pinAnswers.pin == myPinCode)
 
    console.log("Pin verified");
    let operationAns = await inquirer.prompt([

        {
            name: "operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["Withdraw", "Check Balance"]
        }

    ]);
    if (operationAns.operation == "Withdraw") {}
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter amount to withdraw: "
            }
        ]);
        let amountAnswer = await inquirer.prompt([

        ])
        myBalance = myBalance - withdrawAns.withdraw;
        console.log("Balance after withdraw: " + myBalance);