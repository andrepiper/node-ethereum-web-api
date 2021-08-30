## Ethereum web api built with Ganache, Solidity, IPFS, & Express.js (web Token authentication)

![Header](https://images.unsplash.com/photo-1622102699291-b881675c58fc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)

### What you'll need

#### Metamask

To deploy this project to Gitpod, follow these steps:

https://metamask.io/

#### Ganache (optional)

https://www.trufflesuite.com/ganache

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/andrepiper/node-ethereum-web-api.git

cd node-ethereum-web-api

# install using NPM or Yarn
npm install

# or

yarn
```

2. Start the local Hardhat node or Ganache

```sh
npx hardhat node
```

3. With the network running, deploy the contracts to the local network in a separate terminal window

```sh
npx hardhat run scripts/deploy.js --network localhost
```

4. Start the app

```
nodemon serve
```