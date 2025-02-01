import Avatar from '@components/Avatar';
import Loading from '@components/Loading';
import Modal from '@components/Modal';
import { useUser } from '@contexts/userContext';
import { Edit } from '@mui/icons-material';
import { ChangeEventHandler, useState } from 'react';

export default function Account() {
	const { loading, user, uploadPicture } = useUser();

	const [openNameModal, setOpenNameModal] = useState<boolean>(false);

	const onChangePicture: ChangeEventHandler<HTMLInputElement> = (e) => {
		const file: File = e.target.files![0];

		uploadPicture(file);
	};

	if (loading) return <Loading className="mt-48" />;

	if (!user) return <p>User not found.</p>;

	return (
		<>
			<Modal open={openNameModal} setOpen={setOpenNameModal} />

			<section className="flex">
				<Avatar
					name={user.name}
					loading={loading}
					pictureUrl={user.pictureUrl}
					className="size-20 xl:size-28 me-4 lg:me-8 text-5xl"
					onChange={onChangePicture}
				/>
				<div className="flex justify-center flex-col">
					<button
						onClick={() => setOpenNameModal(true)}
						className="text-start"
					>
						<h3 className="text-xl xl:text-3xl">
							{user.name} <Edit className="-ms-3" />
						</h3>
					</button>

					<p className="text-secondary">{user.email}</p>
				</div>
			</section>
		</>
	);
}
