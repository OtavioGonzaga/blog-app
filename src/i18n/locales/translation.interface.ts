import { ResourceLanguage } from 'i18next';

export default interface ITranslations extends ResourceLanguage {
	translations: {
		theme: { theme: string; changeTheme: string };
		account: {
			account: string;
			logout: string;
		};
	};
}
