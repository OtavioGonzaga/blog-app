import { useAuth } from 'react-oidc-context';
import { Outlet } from 'react-router';

export default function PrivateRoutes() {
	const { isAuthenticated, signinRedirect } = useAuth();

	if (!isAuthenticated) {
		signinRedirect();
		return null;
	}

	return <Outlet />;
}
