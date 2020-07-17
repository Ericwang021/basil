import styles from "./ClassTitleWrapper.module.scss";
import tagStyles from "../../styles/components/tag.module.scss";
import React, { Fragment } from "react";

const ClassTitleWrapper = () => {
	return (
		<Fragment>
			<div className={styles.classTitleWrapper}>
				<div className={styles.title}>How to use Academy Web</div>
				<ul>
					<li className={styles.viewer}>716 觀看</li>
					<li>
						<span className={tagStyles.tagBlue}>初學</span>
					</li>
				</ul>
			</div>
		</Fragment>
	);
};
export default ClassTitleWrapper;
