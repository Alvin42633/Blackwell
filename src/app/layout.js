import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Providers from './Providers';
import BootstrapClient from '@/components/BootstrapClient';

export const metadata = {
	title: 'Blackwell Global',
	viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<BootstrapClient />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
