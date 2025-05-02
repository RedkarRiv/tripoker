import jwt from 'jsonwebtoken';

export const generateToken = (user) => jwt.sign(
  { userId: user.id, alias: user.alias, role: user.role_id },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN }
);