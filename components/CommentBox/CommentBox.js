import styles from "./CommentBox.module.scss";
import React, { useState, useContext } from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentList/CommentForm/CommentForm";
import context from "../context";
import { IconFeedBack, IconSearch, IconClose, IconAdd } from "../Icon/Icon";

const InformationBox = () => {
	const contextValue = useContext(context);
	const { discussionList } = contextValue;
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showComment, setShowComment] = useState(false);

	return (
		<div className={styles.infoWrapper}>
			<div className={styles.infoWrapperInner}>
				<div className={styles.wrapperTitleBox}>
					<div className={styles.title}>
						<span>
							<IconFeedBack />
						</span>
						問題和討論
					</div>
					<div className={styles.searchBox}>
						{showSearchBar ? (
							<input type="text" placeholder="搜尋討論" />
						) : null}
						<span onClick={() => setShowSearchBar(!showSearchBar)}>
							{showSearchBar ? <IconClose /> : <IconSearch />}
						</span>
					</div>
				</div>
				<div className={styles.addNew}>
					<div className={styles.addNewBox}>
						<span
							className={styles.text}
							onClick={() => setShowComment(!showComment)}
						>
							<IconAdd />
							新增討論
						</span>
					</div>
					{showComment ? <CommentForm setShowComment={setShowComment} /> : null}
				</div>
				<div className={styles.commentList}>
					<div
						className={styles.totalComment}
					>{`${discussionList.length}個討論`}</div>
					<CommentList />
				</div>
			</div>
		</div>
	);
};

export default InformationBox;
