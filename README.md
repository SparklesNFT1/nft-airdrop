# How to Create an Airdrop on Flare Network

## Set Network Variables

Enter RPC endpoint and Private Key in `hardhat.config.js` **!Make sure you keep your Private Key secret!**

Example:

```
  networks: {
    hardhat: {
    },
    songbird: {
      url: "https://songbird.towolabs.com/rpc",
      chainId: 19,
      accounts: ["{PRIVATE_KEY_GOES_HERE}"]
    },
  },
```

## Prepare your smart contract for Airdrop

1. Update `NFT_Airdrop.sol` with your desired contract name and symbol.

2. Compile your smart contract `npx hardhat compile`

## Deploy your smart contract to Songbird network

1. You can deploy your smart contract above using Remix: https://remix-ide.readthedocs.io/en/latest/create_deploy.html

2. After you deployed your smart contract you can optionally verify it by generating flatten file `npx hardhat flatten > NFT_Airdrop.sol` and uploading it on the Songbird explorer: https://songbird-explorer.flare.network/

### Create Airdrop Addresses

1. Use the `airdrop.xlsx` template to populate addresses and upload to: https://beautifytools.com/excel-to-json-converter.php

2. Copy the output to `./scripts/payload.json`

### Set constants in `./scripts/mint.js`

```
const CONTRACT_NAME="NFT_Airdrop"
const CONTRACT_ADDRESS="0xe26...8BE" (deployed contract address)
const TOKEN_BASE_URI="https://{IPFS_BASE_URL}/{CID}"
```

**Make sure the TOKEN_BASE_URI points to the METADATA IPFS**

### Run Airdrop

`npx hardhat run scripts/mint.js --network songbird`
