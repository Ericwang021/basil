import React from "react";
import styles from "./InformationBox.module.scss";
import { IconFeedBack, IconSearch, IconClose } from "../Icon/Icon";

const InformationBox = () => {
	return (
		<div className={styles.infoWrapper}>
			<div className={styles.infoWrapperInner}>
				<div className="wrapperTitleBox">
					<div className="title">
						<span>
							<IconFeedBack />
						</span>
						問題與討論
					</div>
					<div className="searchBox">
						<div className="inputSearch">
							<input type="text" placeholder="搜尋討論" />
						</div>
						<span>
							<IconSearch />
							<IconClose />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationBox;
