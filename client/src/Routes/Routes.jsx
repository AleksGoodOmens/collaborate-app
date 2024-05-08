import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PartnerPage from '../pages/PartnerPage';
import RegisterPage from '../pages/RegisterPage';

function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/partner"
				element={<PartnerPage />}
			/>
			<Route
				path="/register"
				element={<RegisterPage />}
			/>
			<Route
				path="*"
				element={<div>page not found</div>}
			/>
		</Routes>
	);
}

export default AppRoutes;
