import { CSSProperties, memo } from "react"
import { User } from "../../dtos/user.dto"

interface UserItemProps {
	user: User
	style: CSSProperties
}
const UserItem = ({ user, style }: UserItemProps) => {
	console.log(user)
	return (
		<li
			style={{
				...style,
				height: "auto",
			}}
			className="bg-blue-50 px-4 py-2 rounded-full shadow mb-4 relative focus:outline-none"
		>
			<span>
				Email: {user.email} | Phone: {user.phone}
			</span>
		</li>
	)
}

export default memo(UserItem)
