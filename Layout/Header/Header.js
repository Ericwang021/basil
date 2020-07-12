import React from "react";
import { IconLan } from "../../components/Icon/Icon";

const Header = () => {
	return (
		<header className="header">
			<div className="header-inner">
				<a className="logo" href="/">
					<img src="../../static/academy-logo.svg" alt="" />
					<div className="logo-text">Academy</div>
				</a>
				<nav>
					<ul>
						<li>
							<a href="/">探索</a>
						</li>
					</ul>
				</nav>
				<div className="person-box">
					<div className="language" style={{ color: "#fff" }}>
						<IconLan />
					</div>
					<div className="avatar"></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
