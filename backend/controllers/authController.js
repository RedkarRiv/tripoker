import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Registro de usuario
export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        // Comprobar si el usuario ya existe
        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(409).json({ msg: 'Email ya registrado' });
        }

        // Hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        // Crear usuario
        const user = await User.create({ email, password: hashed, firstName, lastName });

        // Firmar JWT
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(201).json({ token });
    } catch (err) {
        console.error('Error en signup:', err);
        res.status(500).json({ msg: 'Error del servidor' });
    }
};

// Login de usuario
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Buscar usuario
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ msg: 'Credenciales inválidas' });
        }

        // Comparar contraseñas
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ msg: 'Credenciales inválidas' });
        }

        // Firmar JWT
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token });
    } catch (err) {
        console.error('Error en login:', err);
        res.status(500).json({ msg: 'Error del servidor' });
    }
};
