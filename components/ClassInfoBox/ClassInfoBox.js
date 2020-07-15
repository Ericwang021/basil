import styles from "./ClassInfoBox.module.scss";
import React from "react";

const ClassInfoBox = ({ title }) => {
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
