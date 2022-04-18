import { useForm } from "react-hook-form"
import { useUsers } from "../../../../hooks/useUsers"

interface SearchUsersFormViewProps {
	user_id?: string
}

type FormData = {
	query: string
	user_id?: string
}

const SearchUsersFormView = ({ user_id }: SearchUsersFormViewProps) => {
	const { searchForUser } = useUsers()
	const { register, handleSubmit, reset } = useForm<FormData>({
		defaultValues: {
			query: "",
			user_id,
		},
	})

	const onSubmit = handleSubmit(async (data) => {
		await searchForUser({
			query: data.query,
		})
		reset()
	})
	return (
		<div className="relative  text-gray-300 w-full p-5 pb-0 mr-16">
			<form onSubmit={onSubmit}>
				<button
					type="submit"
					className="absolute right-5 top-8 ml-4 mt-3 mr-4"
				>
					<svg
						className="h-4 w-4 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						viewBox="0 0 56.966 56.966"
						xmlSpace="preserve"
						width="512px"
						height="512px"
					>
						<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
					</svg>
				</button>

				<input
					type="search"
					placeholder="Search User"
					{...register("query")}
					className="bg-blue-50 p-3 rounded-full mt-2 w-full"
				/>
			</form>
		</div>
	)
}

export default SearchUsersFormView
