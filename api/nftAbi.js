const abi = [
  "constructor()",
  "error ERC721IncorrectOwner(address,uint256,address)",
  "error ERC721InsufficientApproval(address,uint256)",
  "error ERC721InvalidApprover(address)",
  "error ERC721InvalidOperator(address)",
  "error ERC721InvalidOwner(address)",
  "error ERC721InvalidReceiver(address)",
  "error ERC721InvalidSender(address)",
  "error ERC721NonexistentToken(uint256)",
  "error OwnableInvalidOwner(address)",
  "error OwnableUnauthorizedAccount(address)",
  "event Approval(address indexed,address indexed,uint256 indexed)",
  "event ApprovalForAll(address indexed,address indexed,bool)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event Transfer(address indexed,address indexed,uint256 indexed)",
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

export default abi;