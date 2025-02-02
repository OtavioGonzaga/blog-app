import { Delete, Edit } from '@mui/icons-material';
import { ChangeEventHandler, HTMLAttributes } from 'react';
import Loading from './Loading';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	size?: number | string;
	loading?: boolean;
	pictureUrl?: string;
	className?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onDelete?: () => void;
}

export default function Avatar({
	name,
	loading,
	pictureUrl,
	onChange,
	onDelete,
	size,
	...props
}: Readonly<AvatarProps>) {
	if (loading)
		return (
			<div
				className="border-2 flex items-center justify-center bg-secondary border-gray-800 rounded-full"
				style={{
					width: size ?? 48,
					height: size ?? 48,
				}}
			>
				<Loading />
			</div>
		);

	return (
		<>
			<div
				{...props}
				style={{
					...props.style,
					width: size ?? 48,
					height: size ?? 48,
				}}
			>
				{onDelete && pictureUrl && (
					<div className="-mb-5 -me-2 flex justify-end">
						<Delete
							className="text-red-600 cursor-pointer rounded-full p-1 bg-white"
							onClick={onDelete}
						/>
					</div>
				)}
				<label htmlFor={onChange ? 'picture' : ''}>
					{pictureUrl ? (
						<img
							src={pictureUrl}
							alt={name}
							className="cursor-pointer border-gray-800 border-2 rounded-full w-full h-full"
						/>
					) : (
						<div className="cursor-pointer flex w-full h-full text-center items-center justify-center border-2 border-gray-800 rounded-full">
							<span
								className="text-white w-full h-full bg-secondary rounded-full flex items-center justify-center"
								style={{
									fontSize: `calc(${typeof size === 'number' ? size + 'px' : size} - 150%)`,
								}}
							>
								{name.charAt(0).toUpperCase()}
							</span>
						</div>
					)}
				</label>
				{onChange && (
					<div className="-mt-6 -me-2 flex justify-end">
						<Edit className="cursor-pointer rounded-full p-1 text-secondary bg-white" />
					</div>
				)}
			</div>
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
