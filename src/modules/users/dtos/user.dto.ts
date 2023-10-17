export interface User {
	id: string
	name: string
	age: number
	registered: {
		date: Date
	}
}

export interface UserAPIResponse {
	results: User[]
}
