// Route handlers for user-related endpoints
import { Request, Response } from 'express';
import { UserService } from '../services/user/UserService';

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUser(req.params.address);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await UserService.updateUser(req.params.address, req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
