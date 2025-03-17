const { ethers } = require("ethers");

const { achievementNftAbi } = require("./constants.js");

module.exports.createCoreNeverForgetWaterAchievement = async (
  address,
  res
) => {
  await achievementMint(address, res, 0);
};

module.exports.createCoreFirstHarvestAchievement = async (address, res) => {
  await achievementMint(address, res, 1);
};

module.exports.createCoreGiftFromNatureAchievement = async (address, res) => {
  await achievementMint(address, res, 2);
};

module.exports.createCoreGoodInvitation = async (address, res) => {
  await achievementMint(address, res, 5);
};

module.exports.createCoreMasterOfTheField = async (address, res) => {
  await achievementMint(address, res, 6);
};

async function coreAchievementContract() {
  let provider = new ethers.JsonRpcProvider(
    "https://rpc.test.btcs.network"
  );
  let wallet = new ethers.Wallet(process.env.CORE_PRIVATE_KEY);

  let signer = wallet.connect(provider);

  let nft = new ethers.Contract(
    "0x3A711d5E7e4d69eBef1B7e1b3715f463619A254c",
    achievementNftAbi,
    signer
  );

  return nft;
}

async function achievementMint(address, res, id) {
  const contract = await coreAchievementContract()

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
