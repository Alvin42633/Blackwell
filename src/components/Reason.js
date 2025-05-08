'use client';
import '../styles/global.scss';
import Image from 'next/image';
import RegisterLink from './RegisterLink';

const Reason = () => {
	const reasons = [
		{
			key: 'reason1',
			icon: 'icon-1.png',
			alt: 'Reason 1',
			title: 'Regulated',
			text: 'The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.',
		},
		{
			key: 'reason2',
			icon: 'icon-2.png',
			alt: 'Reason 2',
			title: '0 Commissions',
			text: 'When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.',
		},
		{
			key: 'reason3',
			icon: 'icon-3.png',
			alt: 'Reason 3',
			title: 'User-friendly',
			text: 'With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!',
		},
		{
			key: 'reason4',
			icon: 'icon-4.png',
			alt: 'Reason 4',
			title: 'Tier 1 liquidity',
			text: 'Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.',
		},
	];
	return (
		<div className="py-5">
			<h3 className="heading text-center">Why Choose Us?</h3>
			<div className="row d-flex flex-column">
				{reasons.map((r) => (
					<div key={r.key} className="my-1 py-2 row bg-white rounded">
						<div className="col-sm-12 col-md-3 ">
							<div className="d-flex">
								<div className="col-sm-2 col-md-4 align-content-center">
									<Image
										src={'/images/choose/' + r.icon}
										alt={r.alt}
										width={50}
										height={50}
									/>
								</div>
								<div className="col-sm-10 col-md-8 darkblue_text align-content-center fw-bold">
									{r.title}
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-9 align-content-center">
							{r.text}
						</div>
					</div>
				))}
			</div>
			<RegisterLink center />
		</div>
	);
};

export default Reason;
