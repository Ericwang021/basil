import React from "react";
import styles from "./Registered.module.scss";
import buttonStyles from "../../styles/components/buttons.module.scss";

const Registered = () => {
	return (
		<div className={styles.registeredBox}>
			<div className={styles.registerBoxInner}>
				<button className={buttonStyles.btnCta}>註冊</button>
				<div className={styles.subText}>26 註冊 • 11 喜歡</div>
			</div>
		</div>
	);
};

export default Registered;
