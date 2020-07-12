import Reac, { Fragment } from "react";
import styles from "./AboutClass.module.scss";
import tagStyles from "../../styles/components/tag.module.scss";

const AboutClass = () => {
	return (
		<Fragment>
			<div className={styles.aboutClassWrapper}>
				<div className={styles.wrapperInner}>
					<div className={styles.title}>關於這個課程</div>
					<div className={styles.content}>
						This free course is for you to get familiar with Academy.
					</div>
				</div>
			</div>
			<div className={styles.tagWrapper}>
				<div className={styles.title}>課程中所涵蓋主題</div>
				<ul>
					<li className={tagStyles.tagNormal}>DeltaKnEW</li>
					<li className={tagStyles.tagNormal}>Online Learning</li>
					<li className={tagStyles.tagNormal}>App</li>
					<li className={tagStyles.tagNormal}>UI</li>
				</ul>
			</div>
		</Fragment>
	);
};
export default AboutClass;
