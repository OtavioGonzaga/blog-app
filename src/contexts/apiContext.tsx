import axios, { AxiosInstance } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

const ApiContext = createContext<AxiosInstance>(api);

export function ApiProvider({ children }: Readonly<{ children: ReactNode }>) {
	const { user } = useAuth();
	const { i18n } = useTranslation();

	api.interceptors.request.use((config) => {
		const token = user?.access_token;

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		config.headers['x-custom-lang'] = i18n.language ?? 'pt-BR';

		return config;
	});

	return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

// eslint-disable-next-line
export const useApi = () => useContext(ApiContext);
