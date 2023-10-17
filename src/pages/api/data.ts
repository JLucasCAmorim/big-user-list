import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"
import { UserAPIResponse } from "../../modules/users/dtos/user.dto"

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb',
    },
  },
}

export default async function api(req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await axios.get("https://randomuser.me/api?results=5000", {
			headers: {
				'Content-type': 'application/json'
			}
		})

		console.log(response)

		return res.json(response.data)
	} catch(error) {
		console.error(error)
		throw new Error("Request failed.")
	}
}
