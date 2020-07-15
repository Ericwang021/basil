import avatarStyle from "../../styles/components/avatar.module.scss";
import React, { useEffect, useState } from "react";
import Logo from "../../public/static/academy-logo.svg";
import { IconButton } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";

const Header = () => {
	return (
		<header id="header" className={`header`}>
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
