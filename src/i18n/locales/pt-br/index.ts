import ITranslations from '../translation.interface';

const ptBrTranslations: ITranslations = {
	translations: {
		theme: { theme: 'Tema', changeTheme: 'Mudar tema' },
		translate: { translate: 'Idioma' },
		account: {
			account: 'Conta',
			logout: 'Sair',
			signin: 'Entrar',
			create: 'Criar conta',
		},
		actions: {
			cancel: 'Cancelar',
			changeX: 'Alterar {{x}}',
		},
		user: {
			name: 'Nome',
			email: 'E-mail',
			profilePicture: 'Foto de perfil',
		},
		errors: {
			defaultError: 'Ocorreu um erro',
		},
		toasts: {
			XChanged: '{{x}} alterado(a)',
			XDeleted: '{{x}} deletado(a)',
		},
	},
};

export default ptBrTranslations;
