import axios, { AxiosInstance } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import { useAuth } from 'react-oidc-context';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const ApiContext = createContext<AxiosInstance>(api);

export function ApiProvider({ children }: { children: ReactNode }) {
	const { user } = useAuth();

	api.interceptors.request.use(
		(config) => {
			console.log(
				sessionStorage.getItem(
					`oidc.user:${import.meta.env.VITE_KEYCLOAK_URL}/realms/${import.meta.env.VITE_KEYCLOAK_REALM}:${import.meta.env.VITE_KEYCLOAK_CLIENT_ID}`,
				),
			);
			const token = user?.access_token;

			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		},
		(error) => Promise.reject(error),
	);

	api.interceptors.response.use(
		(response) => response,
		(error) => Promise.reject(error),
	);

	return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// eslint-disable-next-line
export const useApi = () => useContext(ApiContext);
