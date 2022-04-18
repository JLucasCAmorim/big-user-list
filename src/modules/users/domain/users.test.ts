import { User } from "@/modules/users/dtos/user.dto"
import { getUsers } from "@/modules/users/domain/users.actions"
import { UsersInMemory } from "@/modules/users/infra/users.in-memory"
import { usersInfrastructureFakes } from "@/modules/users/infra/users.fakes"

describe("[users] unit tests", () => {
	const usersOutput = new UsersInMemory()

	beforeEach(() => {
		usersOutput.setUsers([])
	})

	describe("when the user wants to get the list of users", () => {
		it("should get them without error", async () => {
			usersOutput.setUsers(usersInfrastructureFakes)

			const users: User[] = await getUsers({
				usersOutput,
			})

			const expectedUsers: User[] = usersInfrastructureFakes.map(
				(infraModel: User) => ({
					id: infraModel.id,
					name: infraModel.name,
					age: infraModel.age,
					created_at: infraModel.created_at,
				})
			)

			expect(users).toEqual(expectedUsers)
		})

		it("shouldn't get them and should throw error", async () => {
			usersOutput.setUsers(undefined)

			await expect(
				getUsers({
					usersOutput,
				})
			).rejects.toThrowError()
		})
	})
})
