import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Input from '@components/Input';
import Loading from '@components/Loading';
import Modal from '@components/Modal';
import { useUser } from '@contexts/userContext';
import { Edit } from '@mui/icons-material';
import {
	ChangeEventHandler,
	FormEventHandler,
	useEffect,
	useState,
} from 'react';
import { useTranslation } from 'react-i18next';

export default function Account() {
	const { t } = useTranslation();
	const { loading, user, uploadPicture, deletePicture, updateProfile } =
		useUser();

	const [openNameModal, setOpenNameModal] = useState<boolean>(false);
	const [name, setName] = useState<string>(user?.name ?? '');

	const onChangePicture: ChangeEventHandler<HTMLInputElement> = (e) => {
		const file: File = e.target.files![0];

		uploadPicture(file);
	};

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		updateProfile({ name }).then(() => {
			setOpenNameModal(false);
		});
	};

	useEffect(() => {
		setName(user?.name ?? '');
	}, [user?.name, openNameModal]);

	if (loading) return <Loading className="mt-48" />;

	if (!user) return <p>User not found.</p>;

	return (
		<>
			<Modal
				open={openNameModal}
				setOpen={setOpenNameModal}
				title={t('actions.changeX', {
					x: t('user.name').toLowerCase(),
				})}
			>
				<form className="w-full flex flex-col" onSubmit={handleSubmit}>
					<Input
						className="mb-6"
						label={t('user.name')}
						onChange={(e) => setName(e)}
						value={name}
					/>

					<div className="flex flex-col-reverse sm:flex-row-reverse">
						<Button
							className="mt-4 sm:ms-4 sm:mt-0"
							type="submit"
							loading={loading}
						>
							{t('actions.changeX', {
								x: t('user.name').toLowerCase(),
							})}
						</Button>
						<Button
							variant="outline"
							onClick={() => setOpenNameModal(false)}
						>
							{t('actions.cancel')}
						</Button>
					</div>
				</form>
			</Modal>

			<section className="flex overflow-hidden flex-col md:flex-row items-center pb-4">
				<Avatar
					name={user.name}
					size={90}
					loading={loading}
					pictureUrl={user.pictureUrl}
					onChange={onChangePicture}
					onDelete={deletePicture}
				/>
				<div className="flex justify-center flex-col ms-4">
					<button
						onClick={() => setOpenNameModal(true)}
						className="text-center md:text-start"
					>
						<h3 className="text-xl xl:text-3xl">
							{user.name}
							<Edit className="ms-2" />
						</h3>
					</button>

					<p className="text-secondary">{user.email}</p>
				</div>
			</section>
		</>
	);
}
