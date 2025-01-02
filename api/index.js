require('dotenv').config()


const abi = [
  "function approve(address,uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function burn(uint256)",
  "function getApproved(uint256) view returns (address)",
  "function isApprovedForAll(address,address) view returns (bool)",
  "function name() view returns (string)",
  "function owner() view returns (address)",
  "function ownerOf(uint256) view returns (address)",
  "function renounceOwnership()",
  "function safeMint(address)",
  "function safeTransferFrom(address,address,uint256)",
  "function safeTransferFrom(address,address,uint256,bytes)",
  "function setApprovalForAll(address,bool)",
  "function supportsInterface(bytes4) view returns (bool)",
  "function symbol() view returns (string)",
  "function tokenURI(uint256) view returns (string)",
  "function transferFrom(address,address,uint256)",
  "function transferOwnership(address)"
]


const express = require("express");
const { ethers } = require("ethers")
const cors = require('cors')
const { nftCollection } = require('./data.js');

const app = express();
app.use(cors())

app.use(express.static('public'))

app.get("/nft/data/:id", (req, res) => {
  const collectionId = req.params.id

  if(collectionId < nftCollection.length){
    return res.json(nftCollection[collectionId])
  }

  return res.json(nftCollection[0])
});

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/env-test", (req, res) => res.send(process.env.TEST));

app.get("/test/nft/create/:address", async (req, res) => {
  let address = req.params.address

  if(!address){
    res.json({
      code: 501,
      error: "Address is wrong"
    })
  }

  let provider = new ethers.JsonRpcProvider("https://sepolia.shape.network/")
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  let signer = wallet.connect(provider);

  let nft = new ethers.Contract("0x41C9509461908fD608CFfE07D6a1b99CF744649c",abi, signer)

  try{
    let receipt = await nft.safeMint(address)
    let result = await receipt.wait()

    res.json({
      hash: result.hash
    })
  }catch(e){
    res.json({
      code: 502,
      error: "Contract Error"
    })
  }
});

app.get("/main/nft/create/:address", async (req, res) => {
  let address = req.params.address

  if(!address){
    res.json({
      code: 501,
      error: "Address is wrong"
    })
  }

  let provider = new ethers.JsonRpcProvider("https://mainnet.shape.network/")
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  let signer = wallet.connect(provider);

  let nft = new ethers.Contract("0x3A711d5E7e4d69eBef1B7e1b3715f463619A254c",abi, signer)

  try{
    let receipt = await nft.safeMint(address)
    let result = await receipt.wait()

    res.json({
      hash: result.hash
    })
  }catch(e){
    res.json({
      code: 502,
      error: "Contract Error"
    })
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
