import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import { HTMLAttributes } from 'react';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
	size?: number;
}

export default function Loading({
	size = 2.5,
	className = '',
	...props
}: Readonly<LoadingProps>) {
	return (
		<div
			className={`cursor-wait flex justify-center items-center transition w-full h-full ${className}`}
			{...props}
		>
			<Icon path={mdiLoading} size={size} spin={0.8} />
		</div>
	);
}
