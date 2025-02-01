import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: number;
	colors?: boolean;
}

export default function Loading({
	size = 2.5,
	className = '',
	...props
}: Readonly<LoadingProps>) {
	return (
		<div
			className={`flex justify-center items-center transition ${className}`}
			{...props}
		>
			<Icon path={mdiLoading} size={size} spin={0.8} />
		</div>
	);
}
