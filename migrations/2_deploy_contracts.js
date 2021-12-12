var BountyBadge = artifacts.require("./BountyBadge.sol");

module.exports = function(deployer) {
  deployer.deploy(BountyBadge);
};
