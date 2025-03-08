require("dotenv").config();

const express = require("express");
const { ethers } = require("ethers");
const cors = require("cors");

const { shapeNftAbi, nftCollection } = require("./constants.js");
const {
  createNeverForgetWaterAchievement,
  createFirstHarvestAchievement,
  createGiftFromNatureAchievement,
} = require("./eduEndpoints.js");

const {
  createWorldNeverForgetWaterAchievement,
  createWorldFirstHarvestAchievement,
  createWorldGiftFromNatureAchievement,
} = require("./worldEndpoints.js");

const {
  createShapeFirstHarvestAchievement,
  createShapeGiftFromNatureAchievement,
  createShapeNeverForgetWaterAchievement,
} = require("./shapeEndpoints.js");

const {
  createCoreFirstHarvestAchievement,
  createCoreGiftFromNatureAchievement,
  createCoreNeverForgetWaterAchievement,
} = require("./coreEndpoints.js");

const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("/nft/data/:id", (req, res) => {
  const collectionId = req.params.id;

  if (collectionId < nftCollection.length) {
    return res.json(nftCollection[collectionId]);
  }

  return res.json(nftCollection[0]);
});

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/env-test", (req, res) => res.send(process.env.TEST));

app.get("/test/nft/create/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  let provider = new ethers.JsonRpcProvider("https://sepolia.shape.network/");
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  let signer = wallet.connect(provider);

  let nft = new ethers.Contract(
    "0x41C9509461908fD608CFfE07D6a1b99CF744649c",
    shapeNftAbi,
    signer
  );

  try {
    let receipt = await nft.safeMint(address);
    let result = await receipt.wait();

    res.json({
      hash: result.hash,
    });
  } catch (e) {
    res.json({
      code: 502,
      error: "Contract Error",
    });
  }
});

app.get("/core/nft/create/0/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createCoreNeverForgetWaterAchievement(address, res);
});

app.get("/core/nft/create/1/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createCoreFirstHarvestAchievement(address, res);
});

app.get("/core/nft/create/2/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createCoreGiftFromNatureAchievement(address, res);
});

app.get("/world/nft/create/0/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createWorldNeverForgetWaterAchievement(address, res);
});

app.get("/world/nft/create/1/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createWorldFirstHarvestAchievement(address, res);
});

app.get("/world/nft/create/2/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createWorldGiftFromNatureAchievement(address, res);
});

app.get("/edu/nft/create/0/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createNeverForgetWaterAchievement(address, res);
});

app.get("/edu/nft/create/1/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createFirstHarvestAchievement(address, res);
});

app.get("/edu/nft/create/2/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createGiftFromNatureAchievement(address, res);
});

app.get("/shape/nft/create/0/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createShapeNeverForgetWaterAchievement(address, res);
});

app.get("/shape/nft/create/1/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createShapeFirstHarvestAchievement(address, res);
});

app.get("/shape/nft/create/2/:address", async (req, res) => {
  let address = req.params.address;

  if (!address) {
    res.json({
      code: 501,
      error: "Address is wrong",
    });
  }

  await createShapeGiftFromNatureAchievement(address, res);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
