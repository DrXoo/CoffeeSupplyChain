# Project Write-up
## Versions
- Truffle v5.5.6 (core: 5.5.6)
- Ganache v^7.0.3
- Solidity v0.5.16 (solc-js)
- Node v16.14.0
- Web3.js v1.5.3
## Libraries used
- truffle-hdwallet-provider ^1.0.17
## Resources
- Diagrams are located on */docs* folder
## Code considerations
As you can see on the Data model diagram I have one main contract *SupplyChainContract* and one contract for each Role. To work with this I had to create several functions on the SupplyChain contract to set the addresses of the role contracts. I have changes the migration file to execute the set contract addresses of roles contract just after the deploy. 

On tests, I have created a method to Initialize all contracts to reuse it on all tests. 

## Contracts addresses and transactions hashes
All contracts are deployed on Rinkeby test network
### SupplyChain Contract 
- transaction hash: 0xb57d6fe46ec7e4bcc2f06139081ea550e84241e0f67347582d2e108506e54578
- Contract address - 0x1A74E5E314D11B3363C0B534372f4fF529e966DF

### ConsumerRole Contract
- transaction hash: 0xe0953cb41cade48fb022cdc2c77529e39c8baef8b1c7580b723d6195f696d92f
- contract address: 0xBf4404C36C1504C09828a11e37AC3a3fDf0C85f8

### RetailerRole Contract
- transaction hash: 0xecfe449c3f3608388ea880c0433834d01bdea8b1c20aa771b458b8f2c6bcaa70
- contract address: 0x64e74b6e67857C74b77D092A1B19ADd08271464b

### DistributorRole Contract
- transaction hash: 0xc928f78c5196a69619683604a70de4ab8af169d5af2ad3d4745cb4bd86db4579
- contract address: 0xB6e88CB8502C580E5723Bea4D0AC03a949f3460b

### FarmerRole Contract
- transaction hash: 0xa428c6f778e7d7243b9f64460c958af6c1bcb80eb8d76c74022c4dbfa7f88c44
- contract address: 0xbd2Af218284087B7ac2f0AEB473a23419c5f677e

### Account Used
- account: 0x0B95092FBa46119d038Ade364346C35E6C146493