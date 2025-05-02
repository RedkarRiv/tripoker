import jwt from 'jsonwebtoken';

export const generateToken = (user) => jwt.sign(
  { userId: user.id, alias: user.alias, role: user.role_id },
  process.env.JWT_SECRET,
  { expiresIn: process.env.JWT_EXPIRES_IN }
);

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  let token = null;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7); 
  }

  if (!token) {
    return res.status(401).json({ msg: 'Token no proporcionado' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: 'Token inválido o expirado' });
    }
    req.user = user;
    next();
  });
};
