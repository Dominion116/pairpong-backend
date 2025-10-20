// Ethers provider, signer, contract instance
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.ADMIN_PRIVATE_KEY || '', provider);

// TODO: Add contract ABI and address
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS || '',
  [],
  signer
);

export { provider, signer, contract };
