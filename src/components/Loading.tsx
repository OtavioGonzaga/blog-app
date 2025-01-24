import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

export default function Loading({
	className = '',
}: Readonly<{ className?: string }>) {
	return (
		<div
			className={
				'flex justify-center items-center w-full h-full ' + className
			}
		>
			<Icon path={mdiLoading} size={2.5} spin={0.8} />
		</div>
	);
}
