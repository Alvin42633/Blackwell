import _ from 'lodash';
import { hashPassword } from '@/common/password';
const users = require('../../../store/user');

export const POST = async (request) => {
	const body = await request.json();
	const { name, email, password, mobileno, country } = body;
	try {
		if (!name || !email || !mobileno || !password) {
			return Response.json(
				{ error: 'All fields required' },
				{ status: 400 },
			);
		}

		if (
			_.find(
				users,
				(user) => user.email == email || user.mobileno == mobileno,
			)
		) {
			return Response.json(
				{
					message: 'Email or Mobile No. registered before',
				},
				{ status: 400 },
			);
		}
		let user = {
			name,
			email,
			mobileno,
			country,
			password: await hashPassword(password),
		};

		return Response.json({
			message: 'User registered successfully',
			user: { name, email, mobileno, country },
		});
	} catch (error) {
		return Response.json(
			{
				message: error,
			},
			{ status: 400 },
		);
	}
};
