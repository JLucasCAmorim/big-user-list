export interface User {
	id: string
	name: string
	age: number
	email: string
	phone: string
	registered: {
		date: Date
	}
}

export interface UserAPIResponse {
	results: User[]
}
