let baseEndPoint = "https://raw.githubusercontent.com/mnkhod/shape-town-api/refs/heads/main/api/public"

module.exports.nftCollection = [
    {
        "description": "As a novice settler in these untamed lands, you must prove your worth by gathering your first crop. Visit your assigned plot of farmland, plant the provided seeds, and tend to them until they bear fruit. Learn the basics of cultivation and experience the satisfaction of reaping what you sow.",
        "image": `${baseEndPoint}/${"FirstHarvestAchievement"}.png`,
        "name": "First Harvest",
    },
    {
        "description": "Your first successful forage marks the beginning of understanding the forest's bounty. The wilderness has shared its secrets with you, teaching you that nature provides for those who respect and learn from it.",
        "image": `${baseEndPoint}/${"GiftFromNatureAchievement"}.png`,
        "name": "Gift from Nature",
    },
    {
        "description": "A milestone every aspiring angler remembers - your first successful catch! Whether it's a tiny minnow or a surprising trophy fish, this achievement marks your entry into the world of fishing.",
        "image": `${baseEndPoint}/${"FirstFishAchievement"}.png`,
        "name": "First Fish",
    },
    {
        "description": "The wilderness holds countless treasures for those who know where to look. Master the art of foraging by collecting various wild plants and mushrooms from the forest. Be cautious - not everything that grows is safe to eat.",
        "image": `${baseEndPoint}/${"NaturalForagerAchievement"}.png`,
        "name": "Natural Forager",
    },
    {
        "description": "Your first earned coins mark an important milestone in your journey. By completing honest work and trading with fellow villagers, you'll experience the satisfaction of earning your own money and learn the value of commerce in our community.",
        "image": `${baseEndPoint}/${"TasteOfGoldAchievement"}.png`,
        "name": "Taste of Gold",
    },
    {
        "description": "Your first earned coins mark an important milestone in your journey. By completing honest work and trading with fellow villagers, you'll experience the satisfaction of earning your own money and learn the value of commerce in our community.",
        "image": `${baseEndPoint}/${"GoodInvitation"}.png`,
        "name": "Good Invitation",
    },
    {
        "description": "Your first earned coins mark an important milestone in your journey. By completing honest work and trading with fellow villagers, you'll experience the satisfaction of earning your own money and learn the value of commerce in our community.",
        "image": `${baseEndPoint}/${"MasterOfTheField"}.png`,
        "name": "Master Of The Field",
    },
];

module.exports.achievementNftAbi = [
    "error AccessControlBadConfirmation()",
    "error AccessControlUnauthorizedAccount(address,bytes32)",
    "error ERC1155InsufficientBalance(address,uint256,uint256,uint256)",
    "error ERC1155InvalidApprover(address)",
    "error ERC1155InvalidArrayLength(uint256,uint256)",
    "error ERC1155InvalidOperator(address)",
    "error ERC1155InvalidReceiver(address)",
    "error ERC1155InvalidSender(address)",
    "error ERC1155MissingApprovalForAll(address,address)",
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event RoleAdminChanged(bytes32 indexed,bytes32 indexed,bytes32 indexed)",
    "event RoleGranted(bytes32 indexed,address indexed,address indexed)",
    "event RoleRevoked(bytes32 indexed,address indexed,address indexed)",
    "event TransferBatch(address indexed,address indexed,address indexed,uint256[],uint256[])",
    "event TransferSingle(address indexed,address indexed,address indexed,uint256,uint256)",
    "event URI(string,uint256 indexed)",
    "function DEFAULT_ADMIN_ROLE() view returns (bytes32)",
    "function MINTER_ROLE() view returns (bytes32)",
    "function URI_SETTER_ROLE() view returns (bytes32)",
    "function balanceOf(address,uint256) view returns (uint256)",
    "function balanceOfBatch(address[],uint256[]) view returns (uint256[])",
    "function burn(address,uint256,uint256)",
    "function burnBatch(address,uint256[],uint256[])",
    "function getRoleAdmin(bytes32) view returns (bytes32)",
    "function grantRole(bytes32,address)",
    "function hasRole(bytes32,address) view returns (bool)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function mint(address,uint256,uint256,bytes)",
    "function mintBatch(address,uint256[],uint256[],bytes)",
    "function renounceRole(bytes32,address)",
    "function revokeRole(bytes32,address)",
    "function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    "function safeTransferFrom(address,address,uint256,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function setURI(string)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function uri(uint256) view returns (string)"
]

module.exports.shapeNftAbi = [
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