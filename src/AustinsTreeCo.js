import { Route, Routes } from "react-router-dom"
// import { Authorized } from "./views/Authorized"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
import "./AustinsTreeCo.css"
import { NavBar } from "./components/nav/NavBar"
import { ServiceList } from "./components/services/ServiceList"
import { ApplicationViews } from "./components/views/ApplicationViews"



export const AustinsTreeCo = () => {
	return <Routes>
		<Route path="*" element={
				<>
					<NavBar />
					<ApplicationViews />
				</>
		} />
	</Routes>
}

