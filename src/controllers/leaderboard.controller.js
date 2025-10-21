const { User } = require('../models/User.model');

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ wins: -1 });
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLeaderboard,
};
