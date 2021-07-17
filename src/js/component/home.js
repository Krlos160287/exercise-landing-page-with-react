import React from "react";
import { Navbar } from "./navbar";
import { Jumbo } from "./jumbo";
import { Container } from "./container";
import { Footer } from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="cont">
				<Jumbo />
				<Container />
			</div>
			<Footer />
		</div>
	);
}
