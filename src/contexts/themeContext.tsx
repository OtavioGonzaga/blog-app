import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface IThemeContext {
	theme: 'dark' | 'light';
	changeTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
	theme: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light',
	changeTheme: () => {},
});

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
	const [theme, setTheme] = useState<'dark' | 'light'>(
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light',
	);

	const changeTheme = useCallback(() => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}, [theme]);

	useEffect(() => {
		document.querySelector('html')?.classList.remove('dark', 'light');
		document.querySelector('html')?.classList.add(theme);
	}, [theme]);

	const value = useMemo(
		() => ({
			theme,
			changeTheme,
		}),
		[changeTheme, theme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

// eslint-disable-next-line
export const useTheme = () => {
	return useContext(ThemeContext);
};
