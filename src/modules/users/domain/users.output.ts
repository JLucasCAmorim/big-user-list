import { User } from "@/modules/users/dtos/user.dto"

export interface UsersOutput {
	getUsers(): Promise<User[]>
}
