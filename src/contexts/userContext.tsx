import User from '@interfaces/users/user.interface';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useApi } from './apiContext';
import ProfileService from '@services/profile.service';
import { useAuth } from 'react-oidc-context';

interface IUserContext {
	user: User | undefined;
	loading: boolean;
}

const UserContext = createContext<IUserContext>({
	user: undefined,
	loading: false,
});

export function UserProvider({ children }: Readonly<{ children: ReactNode }>) {
	const api = useApi();
	const profileService = useMemo(() => new ProfileService(api), [api]);

	const { isAuthenticated } = useAuth();

	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (isAuthenticated) {
			setLoading(true);

			profileService.getUserProfile().then(({ data }) => {
				setUser(data);
			});
		}
	}, [isAuthenticated, profileService]);

	const value = useMemo(
		(): IUserContext => ({ user, loading }),
		[loading, user],
	);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
}

// eslint-disable-next-line
export const useUser = () => useContext(UserContext);
