# Project Write-up
## Versions
- Truffle v5.5.6 (core: 5.5.6)
    - Truffle is a development environment for creating smart contracts. It helps us developers to have a centralized and useful way to develop, test and deploy contracts with ease
- Ganache v^7.0.3
    - Apart from being a key component in the Truffle Suite, Ganache provides us developers with a way to create a local blockchain where we can deploy and test our smart contracts without waiting for blocks to be mined on any test network or have fear of running out of eths.
- Solidity v0.5.16 (solc-js)
    - A compiler of solidity for Javascript. It is used in the truffle suit to compile your files
- Node v16.14.0
    - A Javascript running environment to build either frontend or backend applications. In our case we use it to serve the Frontend side of our DApp 
- Web3.js v1.5.3
    - Is a library that provides us developers with a way to interact with any ethereum node (local or remote). It has many utilities, from creating contracts from the ABI to read information from accounts and more. 

## Libraries used
- truffle-hdwallet-provider ^1.0.17
    - Is a NPM package to helps us to configure network connection to ethereum through a provider (Infura in our case).
## Resources
- Diagrams are located on */docs* folder
## Code considerations
As you can see on the Data model diagram I have one main contract *SupplyChainContract* and one contract for each Role. To work with this I had to create several functions on the SupplyChain contract to set the addresses of the role contracts. I have changes the migration file to execute the set contract addresses of roles contract just after the deploy. 

On tests, I have created a method to Initialize all contracts to reuse it on all tests. 

## How to use this DApp
As you saw on the diagrams there are several roles involved in this Dapp. The owner of the contract has all roles. However if you need to give access to one account a specific role you can do it trough the Access Control section on the website.

### Give role credentials to an account
On the *Access Control* section fill the _Input_ with the User Id to give the role. Select the role to give and click on **Add Role** button. The result will be displayed just below.

Once the User Id has permissions he/she can continue using the DApp

### Farmer options
The farmer has its own section, *Farm Details*, on this you can type on the form the details of your farm like your name, your location and information, do not forget to enter also your farmer Id. Once all his information is filled you can click on the buttons below but before that consider taking a look to the diagrams to know the flow.

The current flow is: 
1. **Harvest**
2. **Process**
3. **Pack**
4. **For Sale**  

### Distributor options
The distributor plays his role on the *Product Details* section. Here the distributor must fill his Id on the Distributor Id field and put a price to pay on _product price_ field. Then he can click on **Buy** button to buy the coffee from the farmer and on **Ship** button to ship it to the next role, the Retailer.

### Retailer options
The retailer also plays his role on the *Product Details* section. He need to add its Id on the _Retailer Id_ field and then click on **Receive** button to receive the shipped coffee from the distributor.

### Consumer options
Finally the consumer must enter its Id on _Consumer Id_ field inside *Product Details* section and click on **Purchase** to buy the coffee from the retailer.

### See the product through all this process 
On the section *Product Overview* any user can enter **SKU**, **UPC** and **Owner Id** fields and retreive information about the product to check it.

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