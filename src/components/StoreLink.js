'use client';
import Image from 'next/image';
import Link from 'next/link';

const StoreLink = () => {
	return (
		<div className="d-flex justify-content-center gap-2 mt-4">
			<Link href="https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en">
				<Image
					src="/images/google-play.jpg"
					alt="Google Play"
					width={100}
					height={30}
					className="store_link"
				/>
			</Link>
			<Link href="https://apps.apple.com/us/app/blackwell-alstra-x/id1658265477">
				<Image
					src="/images/app-store.jpg"
					alt="App Store"
					width={100}
					height={30}
					className="store_link"
				/>
			</Link>
		</div>
	);
};

export default StoreLink;
