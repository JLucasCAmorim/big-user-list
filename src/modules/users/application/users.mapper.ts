import { User } from "../dtos/user.dto"

export const mapUserToApplicationModel = (users: User[]): User[] => {
	return users.map((user: User) => ({
		id: user.id,
		name: user.name,
		age: user.age,
		registered: user.registered
	}))
}
