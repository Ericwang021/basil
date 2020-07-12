import React, { Fragment } from "react";
import styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const Layout = (props) => {
	return (
		<Fragment>
			<CssBaseline />
			<Header />
			<div className={styles.container}>
				<Container maxWidth="lg" className={styles.containerBackground}>
					<main>{props.children}</main>
				</Container>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
