import { ThemeProvider } from '@contexts/themeContext';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import App from './App';
import { ApiProvider } from '@contexts/apiContext';
import oidcConfig from '@config/oidc.config';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<AuthProvider {...oidcConfig}>
		<ApiProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ApiProvider>
	</AuthProvider>,
);
