const { User } = require('../models/User.model');

const getLeaderboard = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const leaderboard = await User.find()
      .sort({ wins: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getLeaderboard,
};
