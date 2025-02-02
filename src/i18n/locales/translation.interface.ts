import { ResourceLanguage } from 'i18next';

export default interface ITranslations extends ResourceLanguage {
	translations: {
		theme: { theme: string; changeTheme: string };
		translate: {
			translate: string;
		};
		account: {
			account: string;
			logout: string;
			signin: string;
			create: string;
		};
		actions: {
			cancel: string;
			changeX: string;
		};
		user: {
			name: string;
			email: string;
			profilePicture: string;
		};
		errors: {
			defaultError: string;
		};
		toasts: {
			XChanged: string;
			XDeleted: string;
		};
	};
}
