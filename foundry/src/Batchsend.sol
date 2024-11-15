// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
contract BatchSend {
    function send(
        address payable[] calldata recipients,
        uint[] calldata amounts
        )external payable {
            require(recipients.length == amounts.length, "Recipients and amounts shoud have same length");

            for(uint i = 0; i < recipients.length; i++){
                recipients[i].call{value:amounts[i]}("");
            }
        }
}
