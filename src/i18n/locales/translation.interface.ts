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
		};
	};
}
