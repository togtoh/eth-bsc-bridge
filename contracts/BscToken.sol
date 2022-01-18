// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BscToken is ERC20 {
    uint256 public initSupply;
    constructor() ERC20("Munkhtogtokh BSC token", "MTBSC") {
         initSupply = 10000;
    }
    
    function mint(uint amount) external {
        uint256 bal = totalSupply();
        if (initSupply >= bal + amount) {
        _mint(msg.sender, amount); }
    }

    function burn(uint amount) external {
         _burn(msg.sender, amount);
    }
    
}