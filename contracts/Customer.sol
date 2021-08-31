// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract Customer is ReentrancyGuard {
    
  using Counters for Counters.Counter;
  Counters.Counter private _customerIds;

	address public _creatorAdmin;

    enum Gender { Male, Female, Unlisted }
	enum State { NotExist, Pending, Approved, Rejected }

	struct CustomerDetail {
		uint customerId;
		State state;
		address userWhoCreatedRecord;
		uint age;
		Gender gender;
		string givenName;
		string middleName;
		string lastName;
		string addressline1;
		string addressline2;
		string state_parish;
		string zip;
		string countryISOCode;
		string sourceSystemId; //set custom system id to map back to KYC user in blockchain. E.g. Guid (pk) in a sql database or integer (pk)
		uint createdAt;
	}

    mapping(address => CustomerDetail) private _customerDetails;
    
	constructor() {
		_creatorAdmin = msg.sender;
	}

	function addNewUser(
		address customerRecordContract,
		uint age,
		Gender gender,
		string memory givenName,
		string memory middleName,
		string memory lastName,
		string memory addressline1,
		string memory addressline2,
		string memory state_parish,
		string memory zip,
		string memory countryISOCode,
		string memory sourceSystemId
		) internal returns (bool success) 
	{
	    _customerIds.increment();
        uint256 customerId = _customerIds.current();
		_customerDetails[customerRecordContract] = CustomerDetail(
			customerId, 
			State.Approved,
			customerRecordContract,
			age, 
			gender,
			givenName,
			middleName,
			lastName,
			addressline1,
			addressline2,
			state_parish,
			zip,
			countryISOCode,
			sourceSystemId,
			block.timestamp
			);
		return true;
	}

	// Get the Customer Details.
	function getCustomerDetails(address _customerAddress) public view returns (CustomerDetail memory) 
	{
		CustomerDetail storage customerDetail = _customerDetails[_customerAddress];
		return customerDetail;
	}
}