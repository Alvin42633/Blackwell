'use client';
import { useState } from 'react';
import '../styles/global.scss';
import Image from 'next/image';
import RegisterLink from './RegisterLink';

const RegisterAccount = () => {
	const images = [
		{
			src: '/images/register/step-1.png',
			alt: 'Register Step 1',
			text: `Install our app, "Blackwell Invest"`,
		},
		{
			src: '/images/register/step-2.png',
			alt: 'Register Step 2',
			text: `Login OR create a new account`,
		},
		{
			src: '/images/register/step-3.png',
			alt: 'Register Step 3',
			text: `Click “Account”`,
		},
		{
			src: '/images/register/step-4.png',
			alt: 'Register Step 4',
			text: `Click “Link an account”`,
		},
		{
			src: '/images/register/step-5.png',
			alt: 'Register Step 5',
			text: `Select “BlackwellGlobalAsia-Live” server`,
		},
		{
			src: '/images/register/step-6.png',
			alt: 'Register Step 6',
			text: `Fill in your Blackwell Global trading account OR create a new account`,
		},
		{
			src: '/images/register/step-7.png',
			alt: 'Register Step 7',
			text: `Click “Copy Trades” `,
		},
		{
			src: '/images/register/step-8.png',
			alt: 'Register Step 8',
			text: `Click “Done”`,
		},
	];

	return (
		<div className="py-5">
			<h3 className="heading text-center">How to Link MT4 Account</h3>
			<div className="scroll_images">
				{images.map((img, imgk) => (
					<div key={imgk} className="register_image pos_relative">
						<Image
							src={img.src}
							width={200}
							height={200}
							alt={img.alt}
						/>
						<p className="mt-3 text-white text-center register_text">
							{img.text}
						</p>
						<Image
							src="/images/arrow.png"
							className="arrow"
							width={50}
							height={50}
							alt={'arrow_' + imgk}
						/>
					</div>
				))}
			</div>
			<RegisterLink center />
		</div>
	);
};

export default RegisterAccount;
