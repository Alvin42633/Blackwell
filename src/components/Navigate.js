'use client';

import { useState } from 'react';
import Image from 'next/image';
import StoreLink from './StoreLink';

const Navigate = () => {
	const [index, setIndex] = useState(0);
	const tabs = [
		{
			key: 'reason1',
			icon: 'icon1.png',
			selected_icon: 'icon1-blue.png',
			icon_alt: 'Reason 1',
			title: 'Discover',
			text: 'Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance.',
			img: 'reason-1.png',
			alt: 'Reason 1',
		},
		{
			key: 'reason2',
			icon: 'icon2.png',
			selected_icon: 'icon2-blue.png',
			icon_alt: 'Reason 2',
			title: 'Activity',
			text: 'See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio.',
			img: 'reason-2.png',
			alt: 'Reason 2',
		},
		{
			key: 'reason3',
			icon: 'icon3.png',
			selected_icon: 'icon3-blue.png',
			icon_alt: 'Reason 3',
			title: 'Trade',
			text: 'Seamlessly trade oil CFDs, indices, and currency pairs with ease.',
			img: 'reason-3.png',
			alt: 'Reason 3',
		},
		{
			key: 'reason4',
			icon: 'icon4.png',
			selected_icon: 'icon4-blue.png',
			icon_alt: 'Reason 4',
			title: 'Positions',
			text: 'Easily track the status of all your trades and monitor your account metrics in real-time.',
			img: 'reason-4.png',
			alt: 'Reason 4',
		},
		{
			key: 'reason5',
			icon: 'icon5.png',
			selected_icon: 'icon5-blue.png',
			icon_alt: 'Reason 5',
			title: 'Account',
			text: 'Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!',
			img: 'reason-5.png',
			alt: 'Reason 5',
		},
	];

	return (
		<div className="py-5">
			<h3 className="heading text-center">
				Navigate Our App in 5 Clicks
			</h3>
			<nav className="mt-5">
				<div className="nav nav-tabs" id="nav-tab" role="tablist">
					{tabs.map((r, rk) => (
						<button
							key={r.key}
							className={`nav-link ${
								index == rk ? 'active selected_tab' : 'bg-white'
							}`}
							id={r.key}
							data-bs-toggle="tab"
							data-bs-target={`#${r.key}`}
							type="button"
							role="tab"
							aria-controls={r.key}
							aria-selected="true"
							onClick={() => setIndex(rk)}
						>
							<Image
								src={`/images/navigate/${
									index == rk ? r.selected_icon : r.icon
								}`}
								alt={r.alt}
								width={40}
								height={40}
							/>
						</button>
					))}
				</div>
				<div className="tab-content" id="nav-tabContent">
					{tabs.map((t, tk) => (
						<div
							key={t.key + 'content'}
							className={`tab-pane fade ${
								index == tk ? 'show active selected_tab' : ''
							}`}
							id={t.key}
							role="tabpanel"
							aria-labelledby={'nav-' + t.key}
						>
							<div className="row">
								<div className="col-sm-12 col-md-8 flex-column align-content-center px-5">
									<h4 className="darkblue_text fw-bold">
										{t.title}
									</h4>
									<p>{t.text}</p>
								</div>
								<div className="col-sm-12 col-md-4">
									<Image
										src={'/images/reason/' + t.img}
										alt={t.alt}
										width={400}
										height={300}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</nav>
			<StoreLink />
		</div>
	);
};

export default Navigate;
