// Route handlers for match-related endpoints
const { MatchService } = require('../services/match/MatchService');

const createMatch = async (req, res) => {
  try {
    const match = await MatchService.createMatch(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const joinMatch = async (req, res) => {
  try {
    const match = await MatchService.joinMatch(req.params.id, req.body);
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const settleMatch = async (req, res) => {
  try {
    const match = await MatchService.settleMatch(req.params.id, req.body);
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMatch,
  joinMatch,
  settleMatch,
};
