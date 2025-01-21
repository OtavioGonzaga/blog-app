import { UserRoles } from '@enums/userRoles.enum';

export default interface User {
	id: string;
	keycloakId: string;
	name: string;
	email: string;
	username: string;
	role: UserRoles;
}
