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

interface IUserContext {
	user: User | undefined;
	loading: boolean;
}

const UserContext = createContext<IUserContext>({
	user: undefined,
	loading: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
	const api = useApi();
	const profileService = useMemo(() => new ProfileService(api), [api]);

	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		profileService.getUserProfile().then(({ data }) => {
			setUser(data);
		});
	}, [profileService]);

	return (
		<UserContext.Provider value={{ user, loading }}>
			{children}
		</UserContext.Provider>
	);
}

// eslint-disable-next-line
export const useUser = () => useContext(UserContext);
