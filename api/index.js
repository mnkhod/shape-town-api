require('dotenv').config()

const express = require("express");
const { ethers } = require("ethers")
const cors = require('cors')

const { shapeNftAbi } = require('./constants.js');
const { 
  createNeverForgetWaterAchievement,
  createFirstHarvestAchievement,
  createGiftFromNatureAchievement
} = require('./eduEndpoints.js');

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

  let nft = new ethers.Contract("0x41C9509461908fD608CFfE07D6a1b99CF744649c",shapeNftAbi, signer)

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

  let nft = new ethers.Contract("0x3A711d5E7e4d69eBef1B7e1b3715f463619A254c",shapeNftAbi, signer)

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

app.get("/edu/nft/create/0/:address", async (req, res) => {
  let address = req.params.address

  if(!address){
    res.json({
      code: 501,
      error: "Address is wrong"
    })
  }

  await createNeverForgetWaterAchievement(address,res)
});

app.get("/edu/nft/create/1/:address", async (req, res) => {
  let address = req.params.address

  if(!address){
    res.json({
      code: 501,
      error: "Address is wrong"
    })
  }

  await createFirstHarvestAchievement(address,res)
});

app.get("/edu/nft/create/2/:address", async (req, res) => {
  let address = req.params.address

  if(!address){
    res.json({
      code: 501,
      error: "Address is wrong"
    })
  }

  await createGiftFromNatureAchievement(address,res)
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
