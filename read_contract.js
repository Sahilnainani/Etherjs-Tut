const { ethers } = require("ethers");
const ABI = require('./abi.json')

const INFURA_ID = ''

const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)
 
const contractAddress = "";

const call = async()=>{
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider,
    )
    console.log(`The Address of owner is: ${await contract.callOwner()}`);
}
call()