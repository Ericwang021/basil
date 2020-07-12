import React, { Fragment } from "react";
import styles from "./ClassTitleWrapper.module.scss";
import tagStyles from "../../styles/components/tag.module.scss";

const ClassTitleWrapper = () => {
	return (
		<Fragment>
			<div className={styles.classTitleWrapper}>
				<div className={styles.title}>
					Learn with Academy - Academy Tutorial
				</div>
				<ul>
					<li className={styles.viewer}>716 觀看</li>
					<li>
						<span className={tagStyles.tagGreen}>初學</span>{" "}
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
export default ClassTitleWrapper;
