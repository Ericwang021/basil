import React, { useContext, useState } from "react";
import avatarStyle from "../../../styles/components/avatar.module.scss";
import buttonStyle from "../../../styles/components/buttons.module.scss";
import styles from "./CommentForm.module.scss";
import context from "../../context";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

const CommentForm = ({ setShowComment }) => {
	const contextValue = useContext(context);
	const { discussionList, setDiscussionList } = contextValue;
	const [comment, setComment] = useState("");

	const commentSubmit = (event) => {
		event.preventDefault();
		const commentItem = {
			record: {
				name: "Eric",
				date: "new Date()",
				content: comment,
				goodCount: 0,
				reply: [],
			},
		};
		setDiscussionList([commentItem, ...discussionList]);
		setShowComment(false);
	};
	const changeComment = (event) => {
		setComment(event.target.value);
	};
	return (
		<form onSubmit={commentSubmit}>
			<div className={styles.addMessage}>
				<div className={avatarStyle.avatarMl}>E</div>
				<div className={styles.textAreaBox}>
					<textarea placeholder="新增回覆" onChange={changeComment} />
				</div>
				<button className={buttonStyle.iconButtonSm}>
					<IconButton>
						<SendIcon fontSize="small" />
					</IconButton>
				</button>
			</div>
		</form>
	);
};

export default CommentForm;
