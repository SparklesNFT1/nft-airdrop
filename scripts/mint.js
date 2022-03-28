//CONSTANTS
const CONTRACT_NAME = "NFT_Airdrop";
const CONTRACT_ADDRESS = "";
const TOKEN_BASE_URI =  "";

//SCRIPT
async function main(payload) {
  const nft = await hre.ethers.getContractAt(CONTRACT_NAME, CONTRACT_ADDRESS);
  const signer0 = await ethers.provider.getSigner(0);
  const items = payload.airdrop;
  const nonce = await signer0.getTransactionCount();

  //starting token id
  let tokenId = 1;

  for (let i = 0; i < items.length; i++) {
    //trim address to make sure there are no trailing whitespaces
    const address = items[i].address.trim();
    const token_uri = `${TOKEN_BASE_URI}/${tokenId}.json`;
    console.log(`Airdropping: ${address} token_uri: ${token_uri}`);

    await nft.awardItem(address, token_uri, {
      nonce: nonce + i,
    });

    tokenId++;
  }

  console.log("Minting is complete!");
}

//START
let payload = require("./payload.json");

main(payload)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
