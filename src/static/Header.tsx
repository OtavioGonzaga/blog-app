import Avatar from '@components/Avatar';
import brazilFlag from '@assets/icons/brazil.png';
import usaFlag from '@assets/icons/united-states.png';
import { useTheme } from '@contexts/themeContext';
import { useUser } from '@contexts/userContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
	ArrowForwardIosOutlined,
	LightModeOutlined,
	LoginOutlined,
	LogoutOutlined,
	MenuOutlined,
	NightsStayOutlined,
	PersonOutline,
	TranslateOutlined,
} from '@mui/icons-material';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';
import Button from '@components/Button';

export default function Header() {
	const navigate = useNavigate();

	const { theme, changeTheme } = useTheme();
	const { t, i18n } = useTranslation();
	const { signoutRedirect, isAuthenticated, signinRedirect } = useAuth();
	const { user, loading } = useUser();

	return (
		<header className="px-8 sm:px-24 lg:px-32 xl:px-64 sticky top-0 z-1 flex justify-between items-center background-primary">
			<button onClick={() => navigate('/')}>
				<h1 className="font-bold text-primary text-4xl">blog</h1>
			</button>

			<Menu
				as="div"
				className="flex items-center justify-end w-full px-4 py-2"
			>
				<div className="hidden md:flex space-x-4 w-full justify-end">
					<button
						onClick={() =>
							changeLanguage(
								i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR',
							)
						}
						className="cursor-pointer text-sm font-semibol py-2 rounded-md hover:text-secondary"
					>
						{i18n.language === 'pt-BR' ? (
							<img
								src={brazilFlag}
								alt="brazil flag"
								className="size-8 me-3"
							/>
						) : (
							<img
								src={usaFlag}
								alt="united states flag"
								className="size-8 me-3"
							/>
						)}
					</button>
					<button
						onClick={() => changeTheme()}
						className="cursor-pointer text-sm font-semibol px-4 py-2 rounded-md hover:text-secondary transition duration-300"
					>
						{theme === 'dark' ? (
							<NightsStayOutlined />
						) : (
							<LightModeOutlined />
						)}
					</button>
					{isAuthenticated ? (
						<Menu as="div">
							<MenuButton>
								<Avatar
									name={user?.name ?? ''}
									loading={loading}
									pictureUrl={user?.pictureUrl}
									className="size-12"
								/>
							</MenuButton>
							<MenuItems className="absolute bg-background w-40 right-40 border rounded-md">
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
							</MenuItems>
						</Menu>
					) : (
						<>
							<Button
								variant="outiline"
								onClick={() => signinRedirect()}
							>
								{t('account.signin')}
							</Button>
							<Button
								variant="secondary"
								onClick={() => navigate('/register')}
							>
								{t('account.create')}
							</Button>
						</>
					)}
				</div>

				<MenuButton className="inline-flex md:hidden justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-2xl">
					<MenuOutlined />
				</MenuButton>
				<MenuItems
					as="div"
					transition
					className="absolute top-10 sm:right-24 lg:right-36 mt-2 w-56 origin-top-right rounded-md shadow-2xl transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in background-primary md:hidden border"
				>
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
						<Menu as="div">
							<MenuButton className="w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none flex justify-between hover:bg-gray-100 hover:text-background">
								<span>
									<TranslateOutlined />{' '}
									{t('translate.translate')}
								</span>
								<ArrowForwardIosOutlined className="p-1" />
							</MenuButton>
							<MenuItems className="absolute top-20 lg:right-36 sm:right-4 bg-background w-48 rounded-lg  text-sm border">
								<MenuItem
									as="div"
									className="flex p-2 hover:bg-gray-100 hover:text-background"
									onClick={() => i18n.changeLanguage('en-US')}
								>
									<img
										src={usaFlag}
										alt="united states flag"
										className="size-8 me-3"
									/>
									<span>English</span>
								</MenuItem>
								<MenuItem
									as="div"
									className="flex p-2 hover:bg-gray-100 hover:text-background"
									onClick={() => i18n.changeLanguage('pt-BR')}
								>
									<img
										src={brazilFlag}
										alt="brazil flag"
										className="size-8 me-3"
									/>
									<span>Português</span>
								</MenuItem>
							</MenuItems>
						</Menu>
					</MenuItem>
					{isAuthenticated ? (
						<>
							<MenuItem>
								<button
									onClick={() => navigate('/account')}
									className="flex w-full px-3 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none"
								>
									{user?.pictureUrl ? (
										<img
											src={user?.pictureUrl}
											alt={t('account.account')}
											className="rounded-full size-7 me-2"
										/>
									) : (
										<PersonOutline className="me-2" />
									)}
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
						</>
					) : (
						<MenuItem>
							<button
								onClick={() => signinRedirect()}
								className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-background data-[focus]:outline-none"
							>
								<LoginOutlined className="me-2" />
								{t('account.signin')}
							</button>
						</MenuItem>
					)}
				</MenuItems>
			</Menu>
		</header>
	);
}
