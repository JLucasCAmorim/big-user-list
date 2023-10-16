import { User } from "@/modules/users/dtos/user.dto"

export const usersInfrastructureFakes: User[] = [
	{
		id: "f6cd4999-8548-4e3d-9df0-5e8de679b131",
		name: "John",
		age: 18,
		registered: {
			date: new Date()
		}
	},
	{
		id: "96cd9474-cea8-44bd-93b6-da220d6684a9",
		name: "JohnAmorim",
		age: 18,
		registered: {
			date: new Date()
		}
	},
	{
		id: "05baa1ba-770d-4e1f-a4ce-b1b2aa3e7d38",
		name: "Lucas",
		age: 18,
		registered: {
			date: new Date()
		}
	},
]
