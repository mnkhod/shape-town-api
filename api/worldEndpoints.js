const { ethers } = require("ethers");

const { achievementNftAbi } = require("./constants.js");

module.exports.createWorldNeverForgetWaterAchievement = async (
  address,
  res
) => {
  await achievementMint(address, res, 0);
};

module.exports.createWorldFirstHarvestAchievement = async (address, res) => {
  await achievementMint(address, res, 1);
};

module.exports.createWorldGiftFromNatureAchievement = async (address, res) => {
  await achievementMint(address, res, 2);
};

async function worldAchievementContract() {
  let provider = new ethers.JsonRpcProvider(
    "https://worldchain-sepolia.g.alchemy.com/public"
  );
  let wallet = new ethers.Wallet(process.env.MAIN_SHAPE_PRIVATE_KEY);

  let signer = wallet.connect(provider);

  let nft = new ethers.Contract(
    "0x3A711d5E7e4d69eBef1B7e1b3715f463619A254c",
    achievementNftAbi,
    signer
  );

  return nft;
}

async function achievementMint(address, res, id) {
  const contract = await worldAchievementContract();

  try {
    let receipt = await contract.mint(address, id, 1, "0x");
    let result = await receipt.wait();

    res.json({
      hash: result.hash,
    });
  } catch (e) {
    console.log(e);

    res.json({
      code: 502,
      error: "Contract Error",
    });
  }
}
