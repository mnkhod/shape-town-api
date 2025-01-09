const { ethers } = require("ethers")

const { achievementNftAbi } = require("./constants.js")

module.exports.createShapeNeverForgetWaterAchievement = async (address,res) => {
    await achievementMint(address,res,0)
}

module.exports.createShapeFirstHarvestAchievement = async (address,res) => {
    await achievementMint(address,res,1)
}

module.exports.createShapeGiftFromNatureAchievement = async (address,res) => {
    await achievementMint(address,res,2)
}

async function eduAchievementContract(){
  let provider = new ethers.JsonRpcProvider("https://mainnet.shape.network")
  let wallet = new ethers.Wallet(process.env.MAIN_SHAPE_PRIVATE_KEY);

  let signer = wallet.connect(provider);

  let nft = new ethers.Contract("0x23d6e7fe6dc435cdDC32e5aBBd3d6bE7f807bAbD",achievementNftAbi, signer)

  return nft;
}

async function achievementMint(address,res,id) {
  const contract = await eduAchievementContract();

  try{
    let receipt = await contract.mint(address,id,1,"0x")
    let result = await receipt.wait()

    res.json({
      hash: result.hash
    })
  }catch(e){
    console.log(e);
    
    res.json({
      code: 502,
      error: "Contract Error"
    })
  }
}