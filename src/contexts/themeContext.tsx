import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
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

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<'dark' | 'light'>(
		window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light',
	);

	function changeTheme() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	useEffect(() => {
		document.getElementById('root')?.classList.remove('dark', 'light');
		document.getElementById('root')?.classList.add(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

// eslint-disable-next-line
export const useTheme = () => {
	return useContext(ThemeContext);
};
