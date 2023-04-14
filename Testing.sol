// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Testing{
    address public owner;
    event transactions(address to, uint amount);

    constructor(){
        owner = msg.sender;
    }

    function callOwner() public view returns(address){
        return(owner);
    }

    function transfer(address payable to) public payable{
        to.transfer(msg.value);
        emit transactions(to,msg.value);
    }
}