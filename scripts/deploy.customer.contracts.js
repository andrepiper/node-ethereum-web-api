const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const customerFactory = await hre.ethers.getContractFactory("Customer");
  const customerInstance = await customerFactory.deploy();
  await customerInstance.deployed();
  console.log("customer Record Contract to:", customerInstance.address);

  const customerRecordFactory = await hre.ethers.getContractFactory("CustomerRecord");
  const customerRecordInstance = await customerRecordFactory.deploy(customerInstance.address);
  await customerRecordInstance.deployed();
  console.log("Customer Contactdeployed to:", customerRecordInstance.address);

  let customerConfig = `
  export const customerInstanceAddress = "${customerInstance.address}"
  export const customerRecordInstanceAddress = "${customerRecordInstance.address}"
  `

  let data = JSON.stringify(customerConfig)
  fs.writeFileSync('customer.config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
