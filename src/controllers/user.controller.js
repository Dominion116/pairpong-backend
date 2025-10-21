// Route handlers for user-related endpoints
const { UserService } = require('../services/user/UserService');

const getUser = async (req, res) => {
  try {
    const user = await UserService.getUser(req.params.address);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.params.address, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  updateUser,
};
