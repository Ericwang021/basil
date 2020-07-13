import React from "react";
import styles from "./CardTeacher.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";

const CardTeacher = () => {
	return (
		<div className={styles.cardTeacher}>
			<div className={styles.teacherInner}>
				<div className={avatarStyle.avatarXl}>SC</div>
				<ul>
					<li>steven cy chuang</li>
					<li>steven.cy.chuang@deltaww.com</li>
				</ul>
				<div className={styles.content}>
					A data scientist from Analytics & Optimization team of Delta
					Electronics. Research interests: data analytics, machine
				</div>
			</div>
		</div>
	);
};

export default CardTeacher;
