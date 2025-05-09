'use client';
import '../../styles/global.scss';
import { useState } from 'react';
import Header from '@/components/Header';
import '../../styles/global.scss';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, updateUser, logoutUser } from '@/redux/userReducer';
import { useRouter } from 'next/navigation';
import ConfirmModal from '@/components/ConfirmModal';
import Link from 'next/link';

const countries = require('../../common/country_codes.json');
const initFormData = {
	name: '',
	email: '',
	mobileno: '',
	country: '',
	password: '',
	confirmPassword: '',
};
const RegisterPage = () => {
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

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}
		if (!formData.mobileno.trim()) {
			newErrors.mobileno = 'Mobile number is required';
		} else if (!/^[0-9]{5,15}$/.test(formData.mobileno)) {
			newErrors.mobileno = 'Mobile number must be 5-15 digits';
		}
		if (!formData.country.trim()) {
			newErrors.country = 'Country is required';
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
			registerUser();
		}
	};

	const registerUser = async () => {
		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			setLoading(false);
			if (res.ok) {
				setMessage(
					'Registration Successful! Will redirect you in seconds...',
				);
				setOpenMessage(true);
				setErrors({});
				let user = data.user;
				dispatch(updateUser(user));
				setFormData(initFormData);
				setTimeout(() => router.push('/'), 3000);
			} else {
				setMessage(
					'Registration Failed! Please contact with our customer support',
				);
				setOpenMessage(true);
			}
		} catch (error) {
			// save error
			setMessage(
				'Registration Error! Please contact with our customer support',
			);
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

			<h3 className="heading text-center mb-4">Register</h3>
			<form onSubmit={handleSubmit} className="mx-auto contact_form">
				<div className="row">
					<div className="col-12 mb-3">
						<input
							type="text"
							className={`form-control custom_bg ${
								errors.name ? 'is-invalid' : ''
							}`}
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Name"
						/>
						{errors.name && (
							<div className="invalid-feedback">
								{errors.name}
							</div>
						)}
					</div>

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
						<input
							type="text"
							className={`form-control custom_bg ${
								errors.mobileno ? 'is-invalid' : ''
							}`}
							name="mobileno"
							value={formData.mobileno}
							onChange={handleChange}
							placeholder="Mobile No."
						/>
						{errors.mobileno && (
							<div className="invalid-feedback">
								{errors.mobileno}
							</div>
						)}
					</div>

					<div className="col-12 mb-3">
						<select
							className={`form-select custom_bg ${
								errors.country ? 'is-invalid' : ''
							}`}
							name="country"
							value={formData.country}
							onChange={handleChange}
						>
							<option value="">Country of Residence</option>
							{countries.map((c) => (
								<option key={c.fullname} value={c.fullname}>
									{c.fullname}
								</option>
							))}
						</select>
						{errors.country && (
							<div className="invalid-feedback">
								{errors.country}
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
				Already have an account ?<Link href="/login"> Login Now</Link>
			</div>
		</div>
	);
};

export default RegisterPage;
