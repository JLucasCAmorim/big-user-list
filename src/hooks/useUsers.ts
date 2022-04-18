import UserContext, { UserContextProps } from "@/contexts/UserContext"
import { useContextSelector } from "use-context-selector"

export const useUsers = (): UserContextProps => {
	const filteredUsers = useContextSelector(
		UserContext,
		(context) => context.filteredUsers
	)

	const users = useContextSelector(UserContext, (context) => context.users)

	const searchForUser = useContextSelector(
		UserContext,
		(context) => context.searchForUser
	)

	return {
		users,
		filteredUsers,
		searchForUser,
	}
}
