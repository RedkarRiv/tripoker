import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import { sequelize } from '../models/index.js';
import { createInitialTokenTransaction } from './transactionController.js';
import { generateToken } from '../utils/auth.js';
import { DEFAULT_ROLE_ID } from '../config/constants.js';

// Registro de usuario
export const signup = async (req, res) => {
    const { email, password, firstName, alias } = req.body;
    let transaction;

    try {
        // Comprobar si el usuario ya existe
        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(409).json({ msg: 'Email ya registrado' });
        }

        // Hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        // Inicializar transaccion
        transaction = await sequelize.transaction();

        // Crear usuario
        const user = await User.create({ email, password: hashed, firstName, alias, role_id: DEFAULT_ROLE_ID }, { transaction });
        
        // Asignar tokens iniciales
        await createInitialTokenTransaction({ user, transaction });
        await transaction.commit();

        // Firmar JWT
        const token = generateToken(user);

        res.status(201).json({
            token,
            user: {
                userId: user.id,
                alias: user.alias,
                role: user.role_id,
            }
        });

    } catch (err) {
        if (transaction) {
            try {
                await transaction.rollback();
            } catch (rollbackErr) {
                console.error('Error en el rollback de la transacción:', rollbackErr);
            }
        } console.error('Error en signup:', err);
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
        const token = generateToken(user);

        res.json({ token });
    } catch (err) {
        console.error('Error en login:', err);
        res.status(500).json({ msg: 'Error del servidor' });
    }
};
