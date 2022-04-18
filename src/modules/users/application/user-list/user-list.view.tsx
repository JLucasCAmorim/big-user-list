import { useUsers } from "../../../../hooks/useUsers"
import SearchUsersFormView from "../search-users-form/search-users-form.view"
import UserItem from "../user-item/user-item.view"
import { FixedSizeList as List } from "react-window"

const UserListView = () => {
	const { users, filteredUsers } = useUsers()

	return (
		<div className="bg-white shadow-md w-2/5 p-8 rounded-xl">
			<h1 className="text-2xl font-bold">User List</h1>
			<hr className="mt-2" />
			<SearchUsersFormView />
			<div className="mt-4">All users are listed below</div>
			<div className="mt-4 w-full">
				<List
					innerElementType="ul"
					itemData={filteredUsers.length > 0 ? filteredUsers : users}
					itemCount={
						filteredUsers.length > 0
							? filteredUsers.length
							: users.length
					}
					itemSize={50}
					height={700}
					width={450}
				>
					{({ data, index, style }) => (
						<UserItem
							key={index}
							user={data[index]}
							style={style}
						/>
					)}
				</List>
			</div>
		</div>
	)
}
export default UserListView
