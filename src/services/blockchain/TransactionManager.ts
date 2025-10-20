// Transaction retry logic, nonce management, gas price fetching
import { signer } from '../../config/blockchain';

export class TransactionManager {
  static async sendTransaction(to: string, data: string) {
    const tx = await signer.sendTransaction({ to, data });
    return await tx.wait();
  }
}
