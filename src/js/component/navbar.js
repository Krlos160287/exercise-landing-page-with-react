import React from "react";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<a className="navbar-brand" href="#" style={{ color: "white" }}>
				Start Boostrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a
							className="nav-link"
							href="#"
							style={{ color: "white" }}>
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item active">
						<a
							className="nav-link"
							href="#"
							style={{ color: "white" }}>
							About
						</a>
					</li>
					<li className="nav-item active">
						<a
							className="nav-link"
							href="#"
							style={{ color: "white" }}>
							Services
						</a>
					</li>
					<li className="nav-item active">
						<a
							className="nav-link"
							href="#"
							style={{ color: "white" }}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
