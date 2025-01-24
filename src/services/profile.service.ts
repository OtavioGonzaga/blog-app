import User from '@interfaces/users/user.interface';
import { AxiosInstance } from 'axios';

export default class ProfileService {
	private readonly api: AxiosInstance;
	public readonly baseUrl: string = '/profile';

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	getUserProfile() {
		return this.api.get<User>(`${this.baseUrl}`);
	}

	uploadPicture(picture: File) {
		const formData = new FormData();
		formData.append('picture', picture);

		return this.api.post(`${this.baseUrl}/picture`, formData);
	}
}
