   //Imports the dotenv dependency and environment variables into your index.js file

   require("dotenv").config();

   //Imports the hashgraph/sdk dependency along with some built in functionality that will be used later on in the tutorial

const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, TransferTransaction } = require("@hashgraph/sdk");

   //Important to note that you have to write async functions when leveraging the Hedera network

async function main() {

    //Grabs your Hedera testnet account ID and private key from your .env file and stores them to new variables

    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    // If we weren't able to grab it, we should throw a new error, otherwise you should see a "Success!" message

    if (!myAccountId || !myPrivateKey) {
        throw new Error("Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present");
    } else {
        console.log("Success!"); 
    }
}
    //Remember to invoke your function!

main();