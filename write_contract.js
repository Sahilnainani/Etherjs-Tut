const { ethers } = require("ethers");
const ABI = require('./abi.json')
const privatekey = ""
const account1 = ""

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)
 
const contractAddress = "";

const wallet = new ethers.Wallet(privatekey,provider);

const call = async()=>{
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        wallet,
    )
    const tx = await contract.transfer(account1, {
        value:ethers.utils.parseEther('0.2')
    })
    await tx.wait();
}
call()