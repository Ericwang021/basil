import React from "react";
import styles from "./ClassInfoBox.module.scss";
import { IconBook, IconViewList } from "../Icon/Icon";

const ClassInfoBox = () => {
	return (
		<div className={styles.classBoxWrapper}>
			<div className={styles.classBoxWrapperInner}>
				<div className={styles.iconBox}>
					<IconBook />
				</div>
				<div className={styles.wrapperTitle}>
					<ul>
						<li>課程 . Learn with Academy - Academy Tutorial</li>
						<li>
							{" "}
							<span>
								<IconViewList />
							</span>{" "}
							在這個課程中有 2 個章節
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ClassInfoBox;
