import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

export default function Loading() {
	return (
		<div className="flex justify-center items-center w-full h-full">
			<Icon path={mdiLoading} size={2.5} spin={0.8} />
		</div>
	);
}
