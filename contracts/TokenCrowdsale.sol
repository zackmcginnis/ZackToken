pragma solidity 0.4.19;

import "./CappedCrowdsale.sol";
import "./RefundableCrowdsale.sol";
import "./StandardToken.sol";
import "./ZackToken.sol";

/**
 * @title TokenCrowdsale
 * @dev This is an example of a fully fledged crowdsale.
 * The way to add new features to a base crowdsale is by multiple inheritance.
 * In this example we are providing following extensions:
 * CappedCrowdsale - sets a max boundary for raised funds
 * RefundableCrowdsale - set a min goal to be reached and returns funds if it's not met
 *
 * After adding multiple features it's good practice to run integration tests
 * to ensure that subcontracts works together as intended.
 */
contract TokenCrowdsale is CappedCrowdsale, RefundableCrowdsale {

  function TokenCrowdsale(uint256 _numberOfTokensToCreate, uint256 _startTime, uint256 _endTime, uint256 _rate, uint256 _goal, uint256 _cap, address _wallet)
    CappedCrowdsale(_cap)
    FinalizableCrowdsale()
    RefundableCrowdsale(_goal)
    Crowdsale(_numberOfTokensToCreate, _startTime, _endTime, _rate, _wallet)
  {
    //As goal needs to be met for a successful crowdsale
    //the value needs to less or equal than a cap which is limit for accepted funds
    require(_goal <= _cap);
  }

  /* function createTokenContract(uint256 numberOfTokensToCreate) internal returns (ZackToken) {
    return new ZackToken(numberOfTokensToCreate);
  } */
}
