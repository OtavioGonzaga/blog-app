import { useTheme } from '@contexts/themeContext';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
	ExitToAppOutlined,
	LightModeOutlined,
	MoreVertOutlined,
	NightsStayOutlined,
} from '@mui/icons-material';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';

export default function Header() {
	const navigate = useNavigate();

	const { theme, changeTheme } = useTheme();

	const { signoutRedirect } = useAuth();

	return (
		<header className="px-16 sm:px-24 lg:px-36 py-4 sticky top-0 z-1 shadow-md flex justify-between items-center background-primary">
			<h1
				onClick={() => navigate('/')}
				className="font-bold text-primary text-2xl"
			>
				blog
			</h1>

			<Menu
				as="div"
				className="flex items-center justify-end w-full px-4 py-2"
			>
				<div className="hidden md:flex space-x-4 w-full justify-end">
					<span
						onClick={() => changeTheme()}
						className="cursor-pointer text-sm font-semibol px-4 py-2 rounded-md hover:text-cyan-700"
					>
						{theme === 'dark' ? (
							<NightsStayOutlined />
						) : (
							<LightModeOutlined />
						)}
					</span>
					<a
						href="#"
						className="text-sm font-semibold px-4 py-2 rounded-md hover:text-cyan-700"
					>
						Account settings
					</a>
					<span
						onClick={() => signoutRedirect()}
						className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-md hover:text-cyan-700"
					>
						<ExitToAppOutlined />
					</span>
				</div>

				<MenuButton className="inline-flex md:hidden justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm">
					<MoreVertOutlined />
				</MenuButton>
				<MenuItems
					transition
					className="absolute top-16 right-12 z-10 mt-2 w-56 origin-top-right rounded-md shadow-2xl transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in background-primary md:hidden"
				>
					<div className="py-1">
						<MenuItem>
							<span
								onClick={() => changeTheme()}
								className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
							>
								{theme === 'dark' ? (
									<NightsStayOutlined />
								) : (
									<LightModeOutlined />
								)}
								Change theme
							</span>
						</MenuItem>
						<MenuItem>
							<a
								href="#"
								className="block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
							>
								Account settings
							</a>
						</MenuItem>
						<MenuItem>
							<span
								onClick={() => signoutRedirect()}
								className="block w-full px-4 py-2 text-left text-sm data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
							>
								Sign out
							</span>
						</MenuItem>
					</div>
				</MenuItems>
			</Menu>
		</header>
	);
}
