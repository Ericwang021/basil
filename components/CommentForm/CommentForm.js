import styles from "./CommentForm.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";
import buttonStyle from "../../styles/components/buttons.module.scss";
import React, { useContext, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import context from "../context";

const CommentForm = () => {
	const contextValue = useContext(context);
	const { handelCommentSubmit } = contextValue;
	const [replyValue, setReplyValue] = useState("");

	const handleChange = (e) => {
		setReplyValue(e.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const value = replyValue;
		const content = value;
		const name = "TestName";
		const date = "2020/07/16";
		const reply = [];
		handelCommentSubmit({ record: { content, date, name, reply } });
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.addMessage}>
				<div className={avatarStyle.avatarMl}>E</div>
				<div className={styles.textAreaBox}>
					<textarea
						value={replyValue}
						onChange={(e) => handleChange(e)}
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

export default CommentForm;
