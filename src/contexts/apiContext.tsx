import axios, { AxiosInstance } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import { useAuth } from 'react-oidc-context';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const ApiContext = createContext<AxiosInstance>(api);

export function ApiProvider({ children }: Readonly<{ children: ReactNode }>) {
	const { user } = useAuth();

	api.interceptors.request.use((config) => {
		const token = user?.access_token;

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	});

	return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// eslint-disable-next-line
export const useApi = () => useContext(ApiContext);
