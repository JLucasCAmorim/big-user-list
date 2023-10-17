import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { UserAPIResponse } from "../../modules/users/dtos/user.dto"

export default function api(req: NextApiRequest, res: NextApiResponse) {
	axios
		.get("https://randomuser.me/api/?results=5000", {
			headers: {
				'Content-type': 'application/json'
			}
		})
		.then((response) => {
			console.log(response)
			return response.data
		})
		.then((data: UserAPIResponse) => {
			console.log(data)
			return res.json(data)
		})
		.catch((error) => console.error(error)); 

	return
}
