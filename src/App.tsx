import { useKeycloak } from '@react-keycloak/web';
import { useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loading from './components/Loading';
import './index.css';
import Header from './static/Header';

function App() {
	const { keycloak, initialized } = useKeycloak();

	const fetchUserInfo = useCallback(() => {
		if (initialized && keycloak.authenticated) {
			keycloak.loadUserInfo();
		}
	}, [initialized, keycloak]);

	useEffect(() => {
		fetchUserInfo();
	}, [initialized, keycloak, fetchUserInfo]);

	if (!initialized) {
		return (
			<div className="min-h-screen">
				<Loading />
			</div>
		);
	}

	if (keycloak.authenticated)
		return (
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<></>} />
				</Routes>
			</BrowserRouter>
			// <Router>
			// 	<div className="min-h-screen w-screen "></div>
			// </Router>
		);
	else return <div>Redirecting to login...</div>;
}

export default App;
