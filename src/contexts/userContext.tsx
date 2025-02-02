import User from '@interfaces/users/user.interface';
import {
	createContext,
	ReactNode,
	useCallback,
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
	uploadPicture: (picture: File) => Promise<void>;
	deletePicture: () => Promise<void>;
	updateProfile: (updatedUser: Pick<User, 'name'>) => Promise<void>;
}

const UserContext = createContext<IUserContext>({
	user: undefined,
	loading: false,
	uploadPicture: async () => {
		return;
	},
	deletePicture: async () => {
		return;
	},
	updateProfile: async () => {
		return;
	},
});

export function UserProvider({ children }: Readonly<{ children: ReactNode }>) {
	const api = useApi();
	const profileService = useMemo(() => new ProfileService(api), [api]);

	const { isAuthenticated } = useAuth();

	const [user, setUser] = useState<User | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);

	const getUserProfile = useCallback(async () => {
		setLoading(true);

		try {
			await profileService.getUserProfile().then(({ data }) => {
				setUser(data);
			});
		} catch (error) {
			// TODO: toast error message
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [profileService]);

	const uploadPicture = useCallback(
		async (picture: File) => {
			setLoading(true);
			try {
				await profileService.uploadPicture(picture);

				getUserProfile();
			} catch (error) {
				// TODO: toast error message
				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[getUserProfile, profileService],
	);

	const deletePicture = useCallback(async () => {
		setLoading(true);
		try {
			await profileService.deletePicture();

			await getUserProfile();
		} catch (error) {
			// TODO: toast error message
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, [getUserProfile, profileService]);

	const updateProfile = useCallback(
		async (updatedUser: Pick<User, 'name'>) => {
			try {
				await profileService.updateProfile(updatedUser);

				getUserProfile();
			} catch (error) {
				// TODO: toast error message

				console.error(error);
			} finally {
				setLoading(false);
			}
		},
		[getUserProfile, profileService],
	);

	useEffect(() => {
		if (isAuthenticated) {
			getUserProfile();
		}
	}, [getUserProfile, isAuthenticated]);

	const value = useMemo(
		(): IUserContext => ({
			user,
			loading,
			uploadPicture,
			deletePicture,
			updateProfile,
		}),
		[user, loading, uploadPicture, deletePicture, updateProfile],
	);

	return (
		<UserContext.Provider value={value}>{children}</UserContext.Provider>
	);
}

// eslint-disable-next-line
export const useUser = () => useContext(UserContext);
