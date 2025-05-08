'use client';

import Image from 'next/image';
import '@/styles/global.scss';
import Auth from './Auth';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-8 d-flex align-items-stretch">
						<Image
							src="/images/logo.png"
							alt="Logo"
							width={150}
							height={80}
							className="w-full h-auto"
						/>
					</div>
					<div className="col-4">
						<Auth />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
