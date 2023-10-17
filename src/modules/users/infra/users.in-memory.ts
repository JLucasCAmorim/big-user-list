import { UsersOutput } from "@/modules/users/domain/users.output"
import { User } from "@/modules/users/dtos/user.dto"

export class UsersInMemory implements UsersOutput {
	private users: User[] | undefined = []

	setUsers(users: User[] | undefined): void {
		this.users = users ? [...users] : undefined
	}

	mapToDomainModel(infraModel: User[]): User[] {
		return infraModel.map((infraModel: User) => ({
			id: infraModel.id,
			name: infraModel.name,
			age: infraModel.age,
			email: infraModel.email,
			phone: infraModel.phone,
			registered: infraModel.registered
		}))
	}

	getUsers(): Promise<User[]> {
		if (!this.users) {
			throw new Error("There are no users")
		}

		const users: User[] = this.mapToDomainModel(this.users)

		return Promise.resolve(users)
	}
}
