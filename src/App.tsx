import Loading from '@components/Loading';
import { useAuth } from 'react-oidc-context';
import './index.css';
import Header from '@static/Header';
import { Outlet } from 'react-router';

function App() {
	const { isLoading, isAuthenticated, error, signinRedirect } = useAuth();

	if (error) return <p>Erro: {error.message}</p>;

	if (isLoading) {
		return (
			<div className="min-h-screen text-secondary">
				<Loading />
			</div>
		);
	}

	if (!isAuthenticated) {
		signinRedirect();
	}

	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
