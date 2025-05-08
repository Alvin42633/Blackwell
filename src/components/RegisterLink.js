'use client';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const RegisterLink = ({ center }) => {
	const user = useSelector((state) => state.user.user);
	if (!user) {
		return (
			<div className={center ? 'text-center mt-3' : ''}>
				<Link
					href="/register"
					className={`btn register_btn text-white text-start text-md-end`}
				>
					Register Now
				</Link>
			</div>
		);
	}
	return null;
};

export default RegisterLink;
