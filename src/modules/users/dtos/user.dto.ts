export interface User {
	id: string
	name: string
	age: number
	created_at: Date
}

export interface UserAPIResponse {
	data: User[]
}
