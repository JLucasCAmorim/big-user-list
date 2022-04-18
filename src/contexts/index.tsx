import { ReactNode } from "react"
import { ToastProvider } from "./ToastContext"
import { UserProvider } from "./UserContext"

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<ToastProvider>
			<UserProvider>{children}</UserProvider>
		</ToastProvider>
	)
}

export default Providers
