import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import { generateToken } from '../utils/auth.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: ['id', 'email', 'firstName', 'alias', 'token_amount']
    });

    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Error del servidor' });
  }
};

export const updateProfile = async (req, res) => {
  console.log("ACTUALIZANDOOOO", req.body)
  const { firstName, alias, password, currentPassword } = req.body;
  const updates = {};
  try {
    const user = await User.findByPk(req.user.userId);

    if (!user) return res.status(404).json({ msg: 'Usuario no encontrado' });

    if (alias) {
      updates.alias = alias;
    }
    
    if (firstName) {
      updates.firstName = firstName;
    }

    if (password) {
      if (!currentPassword) {
        return res.status(400).json({ msg: 'Debe proporcionar su contraseña actual para cambiarla.' });
      }

      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
      if (!isCurrentPasswordValid) {
        return res.status(401).json({ msg: 'La contraseña actual es incorrecta.' });
      }

      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(password, salt);
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ msg: 'No se proporcionaron cambios' });
    }

    await user.update(updates);

    let response = {
      msg: 'Perfil actualizado',
      user: {
        id: user.userId,
        alias: user.alias,
        email: user.email,
        firstName: user.firstName,
        role: user.role_id
      }
    };

    if (updates.password) {
      const token = generateToken(user);
      response.token = token;
    }

    res.json(response);

  } catch (err) {
    console.error('Error al actualizar perfil:', err);
    res.status(500).json({ msg: 'Error del servidor' });
  }
};
