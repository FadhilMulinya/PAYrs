// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {BatchSend} from "../src/Batchsend.sol";

contract BatchSendTest is Test {

    BatchSend public batchSend;

    function setUp() public {
        batchSend = new BatchSend();
      
    }

    function test_Send() public {

        address payable[] memory recipients = new address payable[](2);
        uint[] memory amounts = new uint[](2);

        recipients[0] = payable(0x686465d14A2fF92b4731901910b21B80717ec5D3);

        recipients[1] = payable (0x0d5Eb191cCD65fCb5FaD9a0211870Ea71c4d7b48);

        amounts[0] = 50 ;
        amounts[1] = 100 ;

        batchSend.send{value:150}(recipients,amounts);

        assertEq(address(recipients[0]).balance, amounts[0] );
        assertEq(address(recipients[1]).balance, amounts[1] );

    }


}
