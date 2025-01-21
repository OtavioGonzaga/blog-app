import { useAuth } from 'react-oidc-context';
import { BrowserRouter, Route, Routes } from 'react-router';
import Loading from '@components/Loading';
import './index.css';
import Header from '@static/Header';

function App() {
	const { isLoading, isAuthenticated, error, signinRedirect } = useAuth();

	if (error) return <p>Erro: {error.message}</p>;

	if (isLoading) {
		return (
			<div className="min-h-screen">
				<Loading />
			</div>
		);
	}

	if (isAuthenticated)
		return (
			<>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<></>} />
					</Routes>
				</BrowserRouter>
				{/* <Router>
					<div className="min-h-screen w-screen "></div>
				</Router> */}
			</>
		);
	else signinRedirect();
}

export default App;
