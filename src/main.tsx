import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

const keycloakConfig = {
	url: import.meta.env.VITE_KEYCLOAK_URL,
	realm: import.meta.env.VITE_KEYCLOAK_REALM,
	clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

const initOptions = {
	onLoad: 'login-required',
	pkceMethod: 'S256',
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<ReactKeycloakProvider
		authClient={new Keycloak(keycloakConfig)}
		initOptions={initOptions}
		onTokens={(tokens) => {
			if (tokens.token && tokens.refreshToken) {
				localStorage.setItem('token', tokens.token);
				localStorage.setItem('refreshToken', tokens.refreshToken);
			}
		}}
		autoRefreshToken
	>
		<App />
	</ReactKeycloakProvider>,
);
