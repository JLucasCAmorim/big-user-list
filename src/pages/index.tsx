import type { NextPage } from "next"
import Head from "next/head"
import UserListView from "../modules/users/application/user-list/user-list.view"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				{/* This will tell the browser to preload the data for our page */}
				<link rel="preload" href="/api/data" as="fetch" />
			</Head>
			<div className="flex justify-center mt-20">
				<UserListView />
			</div>
		</>
	)
}

export default Home
