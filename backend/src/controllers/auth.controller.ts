import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import User from '../db/users.model';

export const sendOTP = async (req: Request, res: Response) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: 'Phone number is required' });

  // Mock OTP Implementation
  console.log(`OTP for ${phone} is 123456`);
  res.status(200).json({ message: 'OTP sent successfully (123456)' });
};

export const verifyOTP = async (req: Request, res: Response) => {
  const { phone, otp, deviceId, deviceName } = req.body;

  // Mock Validation
  if (otp !== '123456') {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  try {
    const user = await authService.findOrCreateUser(phone);
    await authService.updateDeviceSession(user, deviceId, deviceName);
    
    const token = authService.generateToken(user._id as string, deviceId);
    
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateProfile = async (req: any, res: Response) => {
  const { name, about, photo } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { 'profile.name': name, 'profile.about': about, 'profile.photo': photo },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Update failed' });
  }
};
