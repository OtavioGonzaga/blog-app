import Loading from '@components/Loading';
import { useAuth } from 'react-oidc-context';
import './index.css';
import Header from '@static/Header';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
	const { isLoading, error } = useAuth();

	if (error) return <p>Erro: {error.message}</p>;

	if (isLoading) {
		return (
			<div className="h-screen w-full text-secondary">
				<Loading />
			</div>
		);
	}

	return (
		<>
			<ToastContainer />
			<Header />
			<main className="px-8 sm:px-24 lg:px-32 xl:px-64 py-4">
				<Outlet />
			</main>
		</>
	);
}

export default App;
