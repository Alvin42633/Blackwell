import '../styles/global.scss';
import Header from '@/components/Header';
import RegisterLink from '@/components/RegisterLink';
import Image from 'next/image';
import Guide from '@/components/Guide';
import RegisterAccount from '@/components/RegisterAccount';
import Reason from '@/components/Reason';
import Navigate from '@/components/Navigate';
import EnquireNow from '@/components/EnquireNow';

const Home = () => {
	const points = [
		{ text: 'Spotlight' },
		{ text: 'Top Strategies' },
		{ text: 'Low Drawdown' },
		{ text: 'Medium Drawdown' },
		{ text: 'High Drawdown' },
		{ text: 'New Strategies' },
	];
	const analysis_images = [
		{ img: 'function-1.png', height: 120, style: { top: -20, left: -90 } },
		{ img: 'function-2.png', height: 80, style: { top: 60, right: -90 } },
		{ img: 'function-3.png', height: 60, style: { top: 120, left: -90 } },
		{ img: 'function-4.png', height: 150, style: { top: 150, right: -90 } },
		{ img: 'function-5.png', height: 120, style: { top: 250, left: -90 } },
	];
	return (
		<div>
			<Header />
			<div className="container">
				<div className="py-5">
					<div className="row align-items-stretch">
						<div className="col-md-5 text-center mb-4 mb-md-0 order-2 order-md-1">
							<Image
								src="/images/hand.png"
								alt="Mobile Preview"
								width={1000}
								height={1166}
								className="mobile_preview"
							/>
						</div>
						<div className="col-md-7 h-100 d-flex flex-column text-md-start order-1 order-md-2 py-5">
							<div className="flex-fill text-center">
								<h1 className="heading">COPY TRADING</h1>
								<h3 className="fst-italic text-white">
									with Blackwell Invest
								</h3>

								<div className="d-flex justify-content-center gap-2">
									<Image
										src="/images/google-play.jpg"
										alt="Google Play"
										width={100}
										height={30}
										className="store_link"
									/>
									<Image
										src="/images/app-store.jpg"
										alt="App Store"
										width={100}
										height={30}
										className="store_link"
									/>
								</div>
							</div>
							<div className="flex-fill px-5 py-5 order-3">
								<h4 className="text-info fw-bold text-end text-md-start">
									Choose & Trade
								</h4>
								<h4 className="bold_text golden_text fst-italic text-end text-md-start">
									Ready-To-Go Strategies
								</h4>
								<p className="text-white text-end text-md-start">
									Browse and copy hundreds of investment
									strategies developed by master traders!
									Whether you are a pro or beginner, you can
									now trade quicker and more confidently.
								</p>

								<div className="mb-3">
									<button className="btn btn-outline-warning text-white btn-sm me-2">
										Forex
									</button>
									<button className="btn btn-outline-success text-white btn-sm me-2">
										Precious Metals
									</button>
									<button className="btn btn-outline-danger text-white btn-sm me-2">
										Oil
									</button>
									<button className="btn btn-outline-info text-white btn-sm">
										Indices
									</button>
								</div>

								<RegisterLink />

								<p className="text-white mt-3 small fst-italic">
									When you invest, your capital is at risk. Be
									prudent.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="py-5">
					<h3 className="heading text-center">Fast Matchina</h3>
					<div className="row mx-auto d-flex mt-3 justify-content-center">
						<div className="col-sm-6 col-md-6 d-flex justify-content-end flex-end mobile_preview2">
							<Image
								src="/images/mobile-1.png"
								alt="Mobile Preview 2"
								width={175}
								height={350}
							/>
						</div>
						<div className="col-sm-6 col-md-6 d-flex justify-content-start align-items-center flex-start mobile_preview2">
							<ul>
								{points.map((p) => (
									<li
										key={p.text}
										className="point_lists text-white"
									>
										{p.text}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="py-5">
					<h3 className="heading text-center">Easy Analysis</h3>
					<h5 className="text-center golden_text mt-3">
						Instant clarity on the Masters’ profile. Get a snapshot
						of their trade history, profitability, risk, and
						portfolio all in one place.{' '}
					</h5>
					<div className="mx-auto d-flex mt-5 justify-content-center align-items-center">
						<div
							className="d-flex"
							style={{ position: 'relative' }}
						>
							<Image
								src="/images/mobile-2.png"
								alt="Mobile Preview 3"
								width={175}
								height={350}
							/>
							{analysis_images.map((a, ak) => (
								<Image
									key={a.img}
									src={'/images/analysis/' + a.img}
									alt={'Analysis ' + ak}
									width={180}
									height={a.height}
									style={a.style}
									className="image_on_top"
								/>
							))}
						</div>
					</div>
				</div>

				<Guide />
				<RegisterAccount />
				<Reason />
				<Navigate />
				<EnquireNow />
			</div>
		</div>
	);
};

export default Home;
