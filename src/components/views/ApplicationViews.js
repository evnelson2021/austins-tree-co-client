import { Route, Routes } from "react-router-dom"
import { ServiceList } from "../services/ServiceList"


export const ApplicationViews = () => {
	return <>
		<h1 className="title--main">Austin's Tree Co.</h1>
		<div>Your one-stop shop for tree removal and maintenance</div>

			<Routes>
				<Route path="/services" element={ <ServiceList />} />
				<Route path="/gallery" element={ <ServiceList />} />
				<Route path="/contact" element={ <ServiceList />} />			
			</Routes>
		</>
}

