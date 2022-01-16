web3 = require('@solana/web3.js');

//connection to solana devnet
let solanaConnection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
            'confirmed',
);
async function generateWalletAddress(){
    try {
        //Generate key pair
        const  wallet = web3.Keypair.generate();
        const publicKey = wallet.publicKey.toString();
        const secretKey = wallet.secretKey
        console.log(`publicKey is: ${publicKey} and secretKey is: ${secretKey}`)

        //Airdrop Deposit some tokens
        // Get the  balance
        let balanace = await solanaConnection.getBalance(wallet.publicKey);
        console.log('Balance: ', balanace);

        fromAirdropSignature = await solanaConnection.requestAirdrop(
            wallet.publicKey,
            web3.LAMPORTS_PER_SOL,//--> A lamport has a value of 0.000000001 SOL.
          );

        airdropConfirmation = await solanaConnection.confirmTransaction(fromAirdropSignature);

        balanace = await solanaConnection.getBalance(wallet.publicKey);
        console.log('Balance after adding 1 SOL: ', balanace);

    } catch (err) {
        console.error(err);
    }}

generateWalletAddress()