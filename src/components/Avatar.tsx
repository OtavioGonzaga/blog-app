import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import { Edit } from '@mui/icons-material';
import { ChangeEventHandler } from 'react';

interface IAvatar {
	name: string;
	loading?: boolean;
	pictureUrl?: string;
	className?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Avatar({
	name,
	loading,
	pictureUrl,
	className = '',
	onChange,
}: Readonly<IAvatar>) {
	if (loading)
		return (
			<div className="border-2 border-gray-800 rounded-full h-full w-full p-1.5 size-3">
				<Icon path={mdiLoading} size={1.3} spin={0.8} />
			</div>
		);

	return (
		<>
			<label
				htmlFor={onChange ? 'picture' : ''}
				className={`relative ${className}`}
			>
				{onChange && (
					<div className="absolute bg-gray-600 w-full h-full rounded-full bg-opacity-80 opacity-0 hover:opacity-100 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
						<Edit />
					</div>
				)}
				{pictureUrl ? (
					<img
						src={pictureUrl}
						alt={name}
						className={`border-gray-800 border-2 rounded-full ${className}`}
					/>
				) : (
					<div className={`cursor-pointer ${className}`}>
						<div className="flex w-full h-full text-center items-center justify-center border-2 border-gray-800 rounded-full">
							<span className="text-white w-full h-full bg-secondary rounded-full flex items-center justify-center">
								{name.charAt(0).toUpperCase()}
							</span>
						</div>
					</div>
				)}
			</label>
			{onChange && (
				<input
					id="picture"
					type="file"
					accept="image/jpeg, image/png"
					hidden
					onChange={onChange}
				/>
			)}
		</>
	);
}
