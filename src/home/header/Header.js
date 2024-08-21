import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-content">
				<h1 className="company-name">NEO Software Solutions Pvt Ltd</h1>
				<nav className="nav-bar">
					<a href="#home">Home</a>
					<a href="#about">About</a>
					<a href="#services">Services</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
