import Avatar from '@components/Avatar';
import Loading from '@components/Loading';
import { useUser } from '@contexts/userContext';
import { ChangeEventHandler } from 'react';

export default function Account() {
	const { loading, user, uploadPicture } = useUser();

	const onChangePicture: ChangeEventHandler<HTMLInputElement> = (e) => {
		const file: File = e.target.files![0];

		uploadPicture(file);
	};

	if (loading) return <Loading />;

	if (!user) return <p>User not found.</p>;

	return (
		<section className="flex">
			<Avatar
				name={user.name}
				loading={loading}
				pictureUrl={user.pictureUrl}
				className="size-32 me-10 text-5xl"
				onChange={onChangePicture}
			/>
			<div className="flex justify-center flex-col">
				<h3 className="text-4xl">{user.name}</h3>
				<p className="text-secondary">{user.email}</p>
			</div>
		</section>
	);
}
