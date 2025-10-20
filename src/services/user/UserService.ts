// User profile management, stats tracking
import { User } from '../../models/User.model';

export class UserService {
  static async getUser(address: string) {
    return await User.findOne({ address });
  }

  static async updateUser(address: string, userData: any) {
    return await User.findOneAndUpdate({ address }, userData, { new: true, upsert: true });
  }
}
