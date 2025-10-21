// User profile management, stats tracking
const { User } = require('../../models/User.model');

class UserService {
  static async getUser(address) {
    return await User.findOne({ address });
  }

  static async updateUser(address, userData) {
    return await User.findOneAndUpdate({ address }, userData, { new: true, upsert: true });
  }
}

module.exports = { UserService };
