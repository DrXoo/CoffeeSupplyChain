// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = async function(deployer) {

  await deployer.deploy(FarmerRole);
  await deployer.deploy(DistributorRole);
  await deployer.deploy(RetailerRole);
  await deployer.deploy(ConsumerRole);
  await deployer.deploy(SupplyChain);

  var farmerRole = await FarmerRole.deployed();
  var distributorRole = await DistributorRole.deployed();
  var retailerRole = await RetailerRole.deployed();
  var consumerRole = await ConsumerRole.deployed();
  var supplyChain = await SupplyChain.deployed();

  console.log("Sets Access role contracts to SupplyChain");

  await supplyChain.setConsumersContract(consumerRole.address);
  await supplyChain.setDistributorsContract(distributorRole.address);
  await supplyChain.setRetailersContract(retailerRole.address);
  await supplyChain.setFarmersContract(farmerRole.address);
};
