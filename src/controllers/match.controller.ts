// Route handlers for match-related endpoints
import { Request, Response } from 'express';
import { MatchService } from '../services/match/MatchService';

export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = await MatchService.createMatch(req.body);
    res.status(201).json(match);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const joinMatch = async (req: Request, res: Response) => {
  try {
    const match = await MatchService.joinMatch(req.params.id, req.body);
    res.status(200).json(match);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const settleMatch = async (req: Request, res: Response) => {
  try {
    const match = await MatchService.settleMatch(req.params.id, req.body);
    res.status(200).json(match);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
