'use client';
import { useState } from 'react';
import '../styles/global.scss';
import Image from 'next/image';
import StoreLink from './StoreLink';

const Guide = () => {
	const [index, setIndex] = useState(0);
	const steps = [
		{
			key: 'guide1',
			no: 1,
			text: 'Install our app, Blackwell Invest',
			img: 'guide-1.png',
			alt: 'guide-1',
		},
		{
			key: 'guide2',
			no: 2,
			text: 'Choose a signal Master and click "Copy"',
			img: 'guide-2.png',
			alt: 'guide-2',
		},
		{
			key: 'guide3',
			no: 3,
			text: 'Set your trade size preferences',
			img: 'guide-3.png',
			alt: 'guide-3',
		},
		{
			key: 'guide4',
			no: 4,
			text: 'Click "Agree and Copy"',
			img: 'guide-4.png',
			alt: 'guide-4',
		},
	];

	const getBorderClass = (i) => {
		return i % 2 === 0 ? 'border-gold' : 'border-orange';
	};

	return (
		<div className="py-5">
			<h3 className="heading text-center">Trade Like a Pro in Minutes</h3>

			<div className="guide_wrapper mt-4">
				<div className="guide_list">
					{steps.map((s, sk) => (
						<div
							key={s.key}
							className={`guide_button ${getBorderClass(sk)} ${
								index === sk ? 'selected_guide' : ''
							}`}
							onClick={() => setIndex(sk)}
						>
							<div className="guide_number">{s.no}</div>
							<div
								className={`guide_text ${
									index == sk
										? 'selected_guide_text'
										: 'text-white'
								}`}
							>
								{s.text}
							</div>
						</div>
					))}
				</div>
				<div className={`guide_image ${getBorderClass(index)}`}>
					<Image
						src={'/images/guide/' + steps[index].img}
						width={300}
						height={400}
						alt={steps[index].alt}
						className="guide_img_content"
					/>
				</div>
			</div>

			<StoreLink />
		</div>
	);
};

export default Guide;
