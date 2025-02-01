'use client';

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

interface IModal {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setOpen, open }: Readonly<IModal>) {
	return (
		<Dialog open={open} onClose={setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 backdrop-blur-sm backdrop-saturate-50 backdrop-brightness-50 bg-opacity-50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 border bg-background"
					>
						<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<DialogTitle as="h3">
										Deactivate account
									</DialogTitle>
									<div className="mt-2">
										<p className="text-sm">
											Are you sure you want to deactivate
											your account? All of your data will
											be permanently removed. This action
											cannot be undone.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
							>
								Deactivate
							</button>
							<button
								type="button"
								data-autofocus
								onClick={() => setOpen(false)}
								className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold ring-1 shadow-xs ring-inset sm:mt-0 sm:w-auto"
							>
								Cancel
							</button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
