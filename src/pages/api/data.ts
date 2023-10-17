import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { UserAPIResponse } from "../../modules/users/dtos/user.dto"

export default function api(req: NextApiRequest, res: NextApiResponse) {
	axios
		.get("https://randomuser.me/api/?results=5000", {
			maxContentLength: 100000000,
			maxBodyLength: 1000000000,
		})
		.then((response) => response.data)
		.then((data: UserAPIResponse) => {
			console.log(data)
			return res.json(data)
		})

	return
}
