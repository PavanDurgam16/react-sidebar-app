import React, { useState } from "react";
import Sidebar from "./home/side-bar/Sidebar";
import Header from "./home/header/Header";
import { roles } from "./resource-data/rolesData";

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const handleSidebarToggle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div>
			<Header />
			<div style={{ display: "flex", position: "relative" }}>
				<Sidebar roles={roles} isOpen={isSidebarOpen} />
				<main
					style={{
						marginLeft: isSidebarOpen ? "400px" : "60px", // Adjust based on sidebar state
						marginTop: "30px",
						padding: "20px",
						flexGrow: 1,
						transition: "margin-left 0.3s", // Smooth transition for margin change
					}}>
					{/* Main content area */}
					<h1>Welcome to the Dashboard</h1>
					<p>Select an option from the sidebar to get started.</p>
				</main>
				<button
					style={{
						position: "absolute",
						top: "70px", // Adjust if needed to align with header
						left: isSidebarOpen ? "320px" : "40px", // Align with sidebar edge
						marginLeft: "5px",
						zIndex: 1000,
						backgroundColor: "#2c3e50",
						color: "#ecf0f1",
						border: "none",
						borderRadius: "10%", // Fully rounded button
						width: "25px", // Increased width for better visual balance
						height: "70px", // Increased height to match width
						fontSize: "18px", // Slightly smaller font size for balance
						display: "flex", // Center align text
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
						transition: "background-color 0.3s, transform 0.3s", // Smooth transition for background color and scale
						boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow for better depth
					}}
					onClick={handleSidebarToggle}>
					{isSidebarOpen ? "◄" : "►"}
				</button>
			</div>
		</div>
	);
}

export default App;
