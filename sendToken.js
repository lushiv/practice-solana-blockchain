web3 = require('@solana/web3.js');
//connection to solana devnet
let solanaConnection = new web3.Connection(
    web3.clusterApiUrl('devnet'),
            'confirmed',
);

async function transferToken(fromWallet,toWallet,value){
    try {
        if(fromWallet && toWallet && value){
            //Add transfer instruction to transaction
            const trnx = new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey: fromWallet.publicKey,
                toPubkey: toWallet.publicKey,
                lamports: value, 
                }),
                );
            // Sign transaction, broadcast, and confirm
            const signTrnx = await web3.sendAndConfirmTransaction(solanaConnection, trnx, [
            fromWallet,
            ]);
            console.log('SIGNATURE', signTrnx);
            return; signTrnx;

        }
       
    } catch (err) {
        console.error(err);
    }}

    
transferToken()