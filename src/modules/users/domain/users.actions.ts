import { User } from "@/modules/users/dtos/user.dto"
import { UsersOutput } from "@/modules/users/domain/users.output"

export const getUsers = async ({
	usersOutput,
}: {
	usersOutput: UsersOutput
}): Promise<User[]> => {
	try {
		return await usersOutput.getUsers()
	} catch (error: any) {
		throw new Error(error)
	}
}
