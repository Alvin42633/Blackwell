import bcrypt from 'bcryptjs';
const rounds = 10;

export const hashPassword = async (password) => {
	return await bcrypt.hash(password, rounds);
};

export const verifyPassword = async (password, hash) => {
	return await bcrypt.compare(password, hash);
};
