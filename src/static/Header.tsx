import { useTheme } from '@contexts/themeContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
	ExitToAppOutlined,
	LightModeOutlined,
	LogoutOutlined,
	MoreVertOutlined,
	NightsStayOutlined,
	PersonOutline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';

export default function Header() {
	const navigate = useNavigate();

	const { theme, changeTheme } = useTheme();
	const { t } = useTranslation();
	const { signoutRedirect } = useAuth();

	return (
		<header className="px-16 sm:px-24 lg:px-36 py-4 sticky top-0 z-1 shadow-md flex justify-between items-center background-primary">
			<button onClick={() => navigate('/')}>
				<h1 className="font-bold text-primary text-2xl">blog</h1>
			</button>

			<Menu
				as="div"
				className="flex items-center justify-end w-full px-4 py-2"
			>
				<div className="hidden md:flex space-x-4 w-full justify-end">
					<button
						onClick={() => changeTheme()}
						className="cursor-pointer text-sm font-semibol px-4 py-2 rounded-md hover:text-secondary"
					>
						{theme === 'dark' ? (
							<NightsStayOutlined />
						) : (
							<LightModeOutlined />
						)}
					</button>
					<button
						onClick={() => navigate('/account')}
						className="text-sm font-semibold px-4 py-2 rounded-md hover:text-secondary"
					>
						{t('account.account')}
					</button>
					<button
						onClick={() => signoutRedirect()}
						className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-md hover:text-secondary"
					>
						<ExitToAppOutlined />
					</button>
				</div>

				<MenuButton className="inline-flex md:hidden justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm">
					<MoreVertOutlined />
				</MenuButton>
				<MenuItems
					transition
					className="absolute top-16 sm:right-24 lg:right-36 z-10 mt-2 w-56 origin-top-right rounded-md shadow-2xl transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in background-primary md:hidden"
				>
					<div className="py-1">
						<MenuItem>
							<button
								onClick={() => changeTheme()}
								className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none"
							>
								{theme === 'dark' ? (
									<NightsStayOutlined className="me-2" />
								) : (
									<LightModeOutlined className="me-2" />
								)}
								{t('theme.changeTheme')}
							</button>
						</MenuItem>
						<MenuItem>
							<button
								onClick={() => navigate('/account')}
								className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none"
							>
								<PersonOutline className="me-2" />
								{t('account.account')}
							</button>
						</MenuItem>
						<MenuItem>
							<button
								onClick={() => signoutRedirect()}
								className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none"
							>
								<LogoutOutlined className="me-2" />
								{t('account.logout')}
							</button>
						</MenuItem>
					</div>
				</MenuItems>
			</Menu>
		</header>
	);
}
