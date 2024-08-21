import React from "react";
import "./Sidebar.css";

const Sidebar = ({ roles, isOpen }) => {
	const [activeRole, setActiveRole] = React.useState(null);

	const toggleRole = (roleName) => {
		setActiveRole(activeRole === roleName ? null : roleName);
	};

	return (
		<div className={`sidebar ${isOpen ? "open" : "closed"}`}>
			<div className="sidebar-content">
				{isOpen &&
					roles.map((role, index) => (
						<div key={index} className="role-section">
							<div
								className={`role-header ${
									activeRole === role.name ? "active" : ""
								}`}
								onClick={() => toggleRole(role.name)}>
								<span className={`role-name ${!isOpen ? "hidden" : ""}`}>
									{role.name}
								</span>
								<span
									className={`arrow ${activeRole === role.name ? "open" : ""}`}>
									{activeRole === role.name ? "▲" : "▼"}
								</span>
							</div>
							{activeRole === role.name && (
								<ul className="role-links">
									{role.links.map((link, linkIndex) => (
										<li key={linkIndex}>
											<a href={link.path}>▪️ &nbsp;{link.name}</a>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
			</div>
		</div>
	);
};

export default Sidebar;
