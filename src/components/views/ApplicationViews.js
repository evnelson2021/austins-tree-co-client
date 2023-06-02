import { Route, Routes } from "react-router-dom"
import { ServiceList } from "../services/ServiceList"
import "./view.css"


export const ApplicationViews = () => {
	return <>
		<h1 className="title--main">Austin's Tree Co.</h1>
		<div>Your one-stop shop for tree removal and maintenance</div>

		<section id="image-carousel" class="splide" aria-label="Beautiful Images">
			<div class="splide__track">
					<ul class="splide__list">
						<li class="splide__slide">
							<img src="image001.jpeg" alt="" />
						</li>
						<li class="splide__slide">
							<img src="image002.jpeg" alt="" />
						</li>
						<li class="splide__slide">
							<img src="image003.jpeg" alt="" />
						</li>
					</ul>
			</div>
		</section>

		{/* <script>
		document.addEventListener( 'DOMContentLoaded', function () {
			new Splide( '#image-carousel' ).mount()
		} );
		</script> */}

			<Routes>
				<Route path="/services" element={ <ServiceList />} />
				<Route path="/gallery" element={ <ServiceList />} />
				<Route path="/contact" element={ <ServiceList />} />			
			</Routes>
		</>
}

