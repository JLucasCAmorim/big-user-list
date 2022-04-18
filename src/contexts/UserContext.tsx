import { useState, ReactNode, useCallback, useEffect } from "react"

import { createContext } from "use-context-selector"
import { useToast } from "../hooks/useToast"
import useRequest from "../libs/useRequest"
import { User, UserAPIResponse } from "../modules/users/dtos/user.dto"

export interface UserContextProps {
	users: User[]
	filteredUsers: User[]
	searchForUser: ({ query }: { query: string }) => Promise<void>
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

export default UserContext

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState<User[]>([])
	const [filteredUsers, setFilteredUsers] = useState<User[]>([])
	const { addToast } = useToast()
	const { data } = useRequest<UserAPIResponse>({
		url: "/api/data",
	})

	const setUsersToState = useCallback(
		(users: User[]) => {
			console.log("oi")
			setUsers(users)
			addToast({
				title: "User loaded",
				description: "The users has been loaded on your screen.",
				type: "info",
			})
		},
		[addToast]
	)

	const searchForUser = useCallback(
		async ({ query }): Promise<void> => {
			try {
				const term = new RegExp(query, "gi")
				if (query) {
					const usersFiltered = users.filter(
						(userItem) =>
							userItem.name.search(term) !== -1 ||
							userItem.age.toString().search(term) !== -1
					)

					setFilteredUsers(usersFiltered)
				} else {
					setFilteredUsers([])
				}
			} catch {}
		},
		[users]
	)

	useEffect(() => {
		if (data) {
			console.log("test", data)
			setUsersToState(data.data)
		}
	}, [data, setUsersToState])

	return (
		<UserContext.Provider
			value={{
				users,
				filteredUsers,
				searchForUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
