import Transaction from '../models/transaction.js';
import { INITIAL_TOKEN_AMOUNT } from '../config/constants.js';

export const createInitialTokenTransaction = async ({ user, transaction }) => {
    const balanceBefore = user.token_amount;
    const balanceAfter = balanceBefore + INITIAL_TOKEN_AMOUNT;

    // Crear la transacción
    await Transaction.create({
        user_id: user.id,
        party_id: null,
        type: 'credit',
        amount: INITIAL_TOKEN_AMOUNT,
        balance_before: balanceBefore,
        balance_after: balanceAfter,
        context: { reason: 'Initial signup bonus' },
    }, { transaction });

    user.token_amount = balanceAfter;
    await user.save({ transaction });
};