'use client';

import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, updateUser, logoutUser } from '@/redux/userReducer';

import '@/styles/global.scss';
import RegisterLink from './RegisterLink';
import Link from 'next/link';

const Auth = () => {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	console.log('user', user);
	const logout = () => {
		dispatch(logoutUser());
	};
	if (user) {
		return (
			<div className="row d-flex align-items-stretch dropdown bg-tranparent justify-content-center align-content-center align-items-center">
				<button
					className="dropdown-toggle borderless_btn d-flex align-items-center justify-content-end"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					<Image
						src="/images/navigate/icon5.png"
						width={50}
						height={50}
						alt="user_profile"
					/>
				</button>
				<ul className="dropdown-menu px-3">
					<li className="text-center">Hi, {user.name}</li>
					<li className="text-center">
						Welcome to Blackwell, please verify your email
						immediately.
					</li>
					<li className="border-top pt-2 d-flex justify-content-end">
						<button
							className="btn btn-danger"
							type="button"
							onClick={() => logout()}
						>
							Logout
						</button>
					</li>
				</ul>
			</div>
		);
	}
	return (
		<div className="row">
			<div className="col d-flex align-items-center ">
				<RegisterLink />
			</div>
			<div className="col">
				<Link href="/login">
					<button className="dropdown-toggle borderless_btn d-flex align-items-center justify-content-end">
						<Image
							src="/images/navigate/icon5.png"
							width={50}
							height={50}
							alt="user_profile"
						/>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Auth;
