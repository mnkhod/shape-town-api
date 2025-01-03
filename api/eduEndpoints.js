const { ethers } = require("ethers")

const { achievementNftAbi } = require("./constants.js")

module.exports.createNeverForgetWaterAchievement = async (address,res) => {
    await achievementMint(address,res,0)
}

module.exports.createFirstHarvestAchievement = async (address,res) => {
    await achievementMint(address,res,1)
}

module.exports.createGiftFromNatureAchievement = async (address,res) => {
    await achievementMint(address,res,2)
}

async function eduAchievementContract(){
  let provider = new ethers.JsonRpcProvider("https://rpc.open-campus-codex.gelato.digital")
//   let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  let wallet = new ethers.Wallet("82579e77778ef15ca3c73a0ffd6095a5253d0c73f50c1a0867c6e32c53a47844");

  let signer = wallet.connect(provider);

  let nft = new ethers.Contract("0x6bc9Da82cB85D6D9e34EF7b8B2F930a8A83F5FB2",achievementNftAbi, signer)

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