import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	title: string;
}

export default function Modal({
	setOpen,
	open,
	title,
	children,
}: Readonly<ModalProps>) {
	return (
		<Dialog open={open} onClose={setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-50 bg-opacity-50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-0 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 border bg-background"
					>
						<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
									<DialogTitle as="h3" className="text-lg">
										{title}
									</DialogTitle>
									<div className="mt-2">{children}</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
