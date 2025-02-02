import ITranslations from '../translation.interface';

const enUsTranslations: ITranslations = {
	translations: {
		theme: { theme: 'Theme', changeTheme: 'Change theme' },
		translate: { translate: 'Language' },
		account: {
			account: 'Account',
			logout: 'Logout',
			signin: 'Sign in',
			create: 'Create account',
		},
		actions: {
			cancel: 'Cancel',
			changeX: 'Change {{x}}',
		},
		user: {
			name: 'Name',
			email: 'Email',
		},
	},
};

export default enUsTranslations;
