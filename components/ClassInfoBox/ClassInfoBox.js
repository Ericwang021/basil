import React from "react";
import styles from "./ClassInfoBox.module.scss";
import { IconBook, IconViewList } from "../Icon/Icon";

const ClassInfoBox = (props) => {
	const { title } = props;
	return (
		<div className={styles.classBoxWrapper}>
			<div className={styles.classBoxWrapperInner}>
				<div className={styles.wrapperTitle}>
					<ul>
						<li>{title}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ClassInfoBox;
