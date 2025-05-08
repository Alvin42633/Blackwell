import _ from 'lodash';
import { hashPassword, verifyPassword } from '@/common/password';
const users = require('../../../store/user');

export const POST = async (request) => {
	const body = await request.json();
	const { email, password } = body;

	if (!email || !password) {
		return Response.json({ error: 'All fields required' }, { status: 400 });
	}
	let user = await _.find(users.users, (u) => u.email == email);
	if (!user) {
		return Response.json(
			{
				message: 'Email not found',
			},
			{ status: 400 },
		);
	}
	const passwordValid = await verifyPassword(password, user.password);
	if (!passwordValid) {
		return Response.json(
			{
				message: 'Password Incorrect',
				data: user.password,
			},
			{ status: 400 },
		);
	}

	const { password: ignored, ...withoutPassword } = user;
	return Response.json({
		message: 'Login successfully',
		user: withoutPassword,
	});
};
