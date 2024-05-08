import { useState } from 'react';
import AppRoutes from './Routes/Routes';
import Aside from './components/layout/aside/Aside';
import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';

function App() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	return (
		<div className="min-h-screen flex flex-col bg-secondary-200 font-poppins">
			<Header setIsBurgerOpen={setIsBurgerOpen} />
			<Aside
				setIsBurgerOpen={setIsBurgerOpen}
				isBurgerOpen={isBurgerOpen}
			/>
			<main className="flex-grow">
				<AppRoutes />
			</main>
			<Footer />
		</div>
	);
}

export default App;
