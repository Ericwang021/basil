import styles from "./CommentBox.module.scss";
import React, { useState, useContext } from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import { IconFeedBack, IconSearch, IconClose, IconAdd } from "../Icon/Icon";
import context from "../context";
import { Provider } from "../context";
const InformationBox = () => {
	const contextValue = useContext(context);
	const { discussionList } = contextValue;
	const [show, setShow] = useState(false);
	const [comment, setComment] = useState(false);
	const [discussionListData, setDiscussionListData] = useState(discussionList);

	const handleClick = () => {
		setShow(!show);
	};
	const addComment = () => {
		setComment(!comment);
	};

	const handelCommentSubmit = (comment) => {
		// setDiscussionListData(discussionListData.concat([comment]));
		setDiscussionListData([comment, ...discussionListData]);
	};

	const contextData = { handelCommentSubmit };

	return (
		<Provider value={contextData}>
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
							{show ? <input type="text" placeholder="搜尋討論" /> : null}
							{show ? (
								<span onClick={() => handleClick()}>
									<IconClose />
								</span>
							) : (
								<span onClick={() => handleClick()}>
									<IconSearch />
								</span>
							)}
						</div>
					</div>
					<div className={styles.addNew}>
						<div className={styles.addNewBox}>
							<span>
								<IconAdd />
							</span>
							<span className={styles.text} onClick={addComment}>
								新增討論
							</span>
						</div>
						{comment ? <CommentForm /> : null}
					</div>
					<div className={styles.commentList}>
						<div className={styles.totalComment}>3個討論</div>
						<CommentList discussionListData={discussionListData} />
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default InformationBox;
