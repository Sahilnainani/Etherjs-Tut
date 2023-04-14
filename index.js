const { ethers } = require("ethers");

const privatekey = ""
const account1 = ""
const INFURA_ID = ''

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const wallet = new ethers.Wallet(
    privatekey,
    provider
);

const call = async()=>{
    const bal = await provider.getBalance(account1);
    console.log(wallet.getAddress(), ethers.utils.formatEther(await wallet.getBalance()));
    console.log(account1,ethers.utils.formatEther(bal));
    
    const trans = await wallet.sendTransaction({
        to:account1,
        value:ethers.utils.parseEther('0.002')
    })
    
    await trans.wait();
    
    const bal2 = await provider.getBalance(account1);
    console.log(wallet.getAddress(), ethers.utils.formatEther(await wallet.getBalance()));
    console.log(account1,ethers.utils.formatEther(bal2));
    
}
call()