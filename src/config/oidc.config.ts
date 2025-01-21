import { WebStorageStateStore } from 'oidc-client-ts';
import { AuthProviderProps } from 'react-oidc-context';

const oidcConfig: AuthProviderProps = {
	authority: `${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}`,
	client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
	redirect_uri: window.location.origin,
	post_logout_redirect_uri: window.location.origin,
	response_type: 'code',
	scope: 'openid profile email',
	automaticSilentRenew: true,
	loadUserInfo: true,
	stateStore: new WebStorageStateStore({
		prefix: 'token',
		store: window.localStorage,
	}),
	onRemoveUser: () => {
		window.location.pathname = '';
	},
	onSigninCallback: () =>
		window.history.replaceState(
			{},
			document.title,
			window.location.pathname,
		),
};

export default oidcConfig;
