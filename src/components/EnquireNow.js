'use client';
import { useState } from 'react';
import '../styles/global.scss';

const countries = require('../common/country_codes.json');

const EnquireNow = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		mobileno: '',
		country: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validate = () => {
		let newErrors = {};
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
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			alert('Thanks for sharing your message to us!');
			// send email function will need email and password, need open 2 factor auth first
			setFormData({
				name: '',
				email: '',
				mobileno: '',
				country: '',
				message: '',
			});
		}
	};

	return (
		<div className="contact_form_container py-5 enquire_form container">
			<h3 className="heading text-center mb-4 enquire_form_content">
				Enquire Now
			</h3>
			<form onSubmit={handleSubmit} className="mx-auto contact_form">
				<div className="row">
					<div className="col-sm-12 col-md-6 mb-3">
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

					<div className="col-sm-12 col-md-6 mb-3">
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

					<div className="col-sm-12 col-md-6 mb-3">
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

					<div className="col-sm-12 col-md-6 mb-3">
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
						<textarea
							className="form-control custom_bg"
							name="message"
							rows="4"
							value={formData.message}
							onChange={handleChange}
							placeholder="Enter your message here"
						></textarea>
					</div>

					<div className="col-12 d-flex justify-content-center">
						<button
							type="submit"
							className="btn btn-primary submit_btn"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EnquireNow;
