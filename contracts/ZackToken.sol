pragma solidity 0.4.23;


import "./StandardToken.sol";
//import "./Ownable.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
 contract ZackToken is StandardToken {

   string public constant name = "Zack Token";
   string public constant symbol = "ZACK";
   uint8 public constant decimals = 18;
   address public tokenOwner;

   event LogOwner(address ownerToLog);

   constructor(uint256 _totalSupply, address _owner) public {
     //set owner (same address who deployed ico contract)
     tokenOwner = _owner;
     emit LogOwner(tokenOwner);
     // Allocate fixed supply to token Creator
     totalSupply_ = _totalSupply * (10 ** uint256(decimals));
     balances[msg.sender] = totalSupply_;
     emit Transfer(address(0), msg.sender, totalSupply_);
   }
 }
