import React from "react";
import { IconLan } from "../../components/Icon/Icon";
import avatarStyle from "../../styles/components/avatar.module.scss";
import { IconButton } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import Logo from "../../public/static/academy-logo.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="header-inner">
				<a className="logo" href="/">
					<div className="logo-Box">
						<Logo />
					</div>
					<div className="logo-text">Academy</div>
				</a>
				<nav>
					<ul>
						<li>
							<a href="/">探索</a>
						</li>
						<li>
							<a href="/">我的課程</a>
						</li>
					</ul>
				</nav>
				<div className="person-box">
					<IconButton>
						<LanguageIcon fontSize="large" />
					</IconButton>
					<div className={avatarStyle.avatarMl}>E</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
