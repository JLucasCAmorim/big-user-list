import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { UserAPIResponse } from "../../modules/users/dtos/user.dto"

export default function api(req: NextApiRequest, res: NextApiResponse) {
	axios
		.get("https://random-persons.herokuapp.com/users", {
			maxContentLength: 100000000,
			maxBodyLength: 1000000000,
		})
		.then((response) => response.data)
		.then((data: UserAPIResponse) => res.json(data))

	return
}
