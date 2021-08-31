describe("Customer", function() {
  it("Should create a new KYC record", async function() {
    const customerFactory = await ethers.getContractFactory("Customer")
    const customerSmartContract = await customerFactory.deploy()
    await customerSmartContract.deployed()

    const customerAddress = customerSmartContract.address

    const customerRecordFactory = await ethers.getContractFactory("CustomerRecord")
    const customerRecordSmartContract= await customerRecordFactory.deploy(customerAddress)
    await customerRecordSmartContract.deployed()

    const customerRecordAddress = customerRecordSmartContract.address

    await customerRecordSmartContract.createToken("https://www.mytokenlocation.com")

    customer = await customerSmartContract.getCustomerDetails(customerRecordSmartContract);

    console.log('items: ', items)
  })
})