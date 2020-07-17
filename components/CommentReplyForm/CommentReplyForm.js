import styles from "./CommentReplyForm.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";
import buttonStyle from "../../styles/components/buttons.module.scss";
import React, { useState, useContext } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import context from "../context";

const CommentReplyForm = () => {
	const contextValue = useContext(context);
	const { handleReplyCommentSubmit } = contextValue;
	const [replyValue, setReplyValue] = useState("");

	const handleChange = (event) => {
		setReplyValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const content = replyValue;
		const name = "REPLYName";
		const date = "2020/07/17";
		handleReplyCommentSubmit({ record: { name, date, content } });
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.addMessage}>
				<div className={avatarStyle.avatarMl}>E</div>
				<div className={styles.textAreaBox}>
					<textarea
						value={replyValue}
						onChange={handleChange}
						placeholder="新增回覆"
					/>
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

export default CommentReplyForm;
