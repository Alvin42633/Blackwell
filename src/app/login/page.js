'use client';
import '../../styles/global.scss';
import { useState } from 'react';
import '../../styles/global.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, updateUser, logoutUser } from '@/redux/userReducer';
import { useRouter } from 'next/navigation';
import ConfirmModal from '@/components/ConfirmModal';
import Link from 'next/link';

const countries = require('../../common/country_codes.json');
const initFormData = {
	email: '',
	password: '',
	confirmPassword: '',
};
const LoginPage = () => {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState(initFormData);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [errors, setErrors] = useState({});
	const [openMessage, setOpenMessage] = useState(false);
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		let newErrors = {};
		const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (!passwordRegex.test(formData.password)) {
			newErrors.password =
				'Password must be at least 8 characters, include uppercase, lowercase, and a number';
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Please re-enter your password';
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}
		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const validationErrors = await validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setLoading(false);
		} else {
			login();
		}
	};

	const login = async () => {
		try {
			const res = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			console.log(data);
			setLoading(false);
			if (res.ok) {
				setMessage('Login Successful! Will redirect you in seconds');
				setOpenMessage(true);
				// add notification
				setErrors({});
				let user = formData;
				dispatch(updateUser(user));
				setFormData(initFormData);
				setTimeout(() => router.push('/'), 3000);
			} else {
				setMessage(data.message);
				setOpenMessage(true);
			}
		} catch (error) {
			// save error
			setMessage(error);
			setOpenMessage(true);
			setLoading(false);
		}
	};

	const togglePassword = () => setShowPassword(!showPassword);
	const toggleConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword);

	return (
		<div className="contact_form_container py-5 container">
			<ConfirmModal
				isOpen={openMessage}
				setOpenMessage={(bool) => setOpenMessage(bool)}
				message={message}
			/>

			<h3 className="heading text-center mb-4">Login</h3>
			<form onSubmit={handleSubmit} className="mx-auto contact_form">
				<div className="row">
					<div className="col-12 mb-3">
						<input
							type="email"
							className={`form-control custom_bg ${
								errors.email ? 'is-invalid' : ''
							}`}
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Email"
						/>
						{errors.email && (
							<div className="invalid-feedback">
								{errors.email}
							</div>
						)}
					</div>

					<div className="col-12 mb-3">
						<div className="input-group">
							<input
								type={showPassword ? 'text' : 'password'}
								className={`form-control custom_bg ${
									errors.password ? 'is-invalid' : ''
								}`}
								name="password"
								value={formData.password}
								onChange={handleChange}
								placeholder="Password"
							/>
							<button
								className="btn btn-light rounded-end"
								type="button"
								onClick={togglePassword}
							>
								<i
									className={`bi ${
										showPassword ? 'bi-eye-slash' : 'bi-eye'
									} toggle_eye`}
								></i>
							</button>
							{errors.password && (
								<div className="invalid-feedback">
									{errors.password}
								</div>
							)}
						</div>
					</div>

					<div className="col-12 mb-3">
						<div className="input-group">
							<input
								type={showConfirmPassword ? 'text' : 'password'}
								className={`form-control custom_bg ${
									errors.confirmPassword ? 'is-invalid' : ''
								}`}
								name="confirmPassword"
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder="Re-enter Password"
							/>
							<button
								className="btn btn-light rounded-end"
								type="button"
								onClick={togglePassword}
							>
								<i
									className={`bi ${
										showConfirmPassword
											? 'bi-eye-slash'
											: 'bi-eye'
									} toggle_eye`}
									onClick={toggleConfirmPassword}
								></i>
							</button>
							{errors.confirmPassword && (
								<div className="invalid-feedback">
									{errors.confirmPassword}
								</div>
							)}
						</div>
					</div>

					<div className="col-12 d-flex justify-content-center">
						<button
							type="submit"
							className="btn btn-primary submit_btn"
						>
							{loading ? 'Submitting...' : 'Submit'}
						</button>
					</div>
				</div>
			</form>
			<div className="mt-3 border-top" />
			<div className="text-white text-center mt-3">
				Haven't yet have an account ?
				<Link href="/register"> Register Now</Link>
			</div>
		</div>
	);
};

export default LoginPage;
