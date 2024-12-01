import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MoreVertOutlined } from '@mui/icons-material';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router';

export default function Header() {
	const navigate = useNavigate();
	const { keycloak } = useKeycloak();

	return (
		<header className="px-16 sm:px-24 lg:px-36 py-4 sticky top-0 z-1 shadow-md flex justify-between items-center">
			<h1
				onClick={() => navigate('/')}
				className="font-bold text-primary text-2xl"
			>
				blog
			</h1>

			<Menu as="div" className="relative inline-block text-left">
				<div>
					<MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm">
						<MoreVertOutlined />
					</MenuButton>
				</div>

				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-2xl transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<div className="py-1">
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
								onClick={() => keycloak.logout()}
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
