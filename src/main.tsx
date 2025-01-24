import './i18n';

import oidcConfig from '@config/oidc.config';
import { ApiProvider } from '@contexts/apiContext';
import { ThemeProvider } from '@contexts/themeContext';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import { UserProvider } from './contexts/userContext';
import PrivateRoutes from './routes/privateRoutes';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				element: <PrivateRoutes />,
				children: [
					{
						path: '/account',
						element: <h1>Account</h1>,
					},
				],
			},
			{
				path: '',
				element: <h1>Home</h1>,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<AuthProvider {...oidcConfig}>
		<ApiProvider>
			<UserProvider>
				<ThemeProvider>
					<RouterProvider router={routes} />
				</ThemeProvider>
			</UserProvider>
		</ApiProvider>
	</AuthProvider>,
);
