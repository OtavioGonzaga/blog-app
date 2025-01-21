import User from '@interfaces/users/user.interface';
import { AxiosInstance } from 'axios';

export default class ProfileService {
	private readonly api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	getUserProfile() {
		return this.api.get<User>('api/user/profile');
	}
}
