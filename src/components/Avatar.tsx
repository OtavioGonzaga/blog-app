import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';

interface IAvatar {
	loading?: boolean;
	name: string;
	pictureUrl?: string;
}

export default function Avatar({
	name,
	loading,
	pictureUrl,
}: Readonly<IAvatar>) {
	if (loading) {
		return (
			<div className="border rounded-full h-full w-full p-1.5 size-3">
				<Icon path={mdiLoading} size={1.3} spin={0.8} />
			</div>
		);
	}

	if (pictureUrl) {
		return (
			<img src={pictureUrl} alt={name} className="rounded-full size-12" />
		);
	}

	return (
		<span className="border rounded-full">
			{name.charAt(0).toUpperCase()}
		</span>
	);
}
