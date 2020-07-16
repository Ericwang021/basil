import styles from "./CommentReply.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";
import React, { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";

const CommentReply = ({ replyData }) => {
	const { content, date, name } = replyData.record;
	const [feedBack, setFeedBack] = useState(false);
	const handleFeedback = () => {
		setFeedBack(!feedBack);
	};

	return (
		<div className={styles.feedback}>
			<div className={styles.feedbackEvent}>
				<div className={avatarStyle.avatarSm}>{name.substring(0, 1)}</div>
				<div>
					<div className={styles.nameText}>
						<div>{name}</div>
						<div>{date}</div>
					</div>
					<div className={styles.replyContent}>{content}</div>
					<div className={styles.feedbackText} onClick={() => handleFeedback()}>
						回覆
					</div>
				</div>
			</div>
			{feedBack ? <CommentForm /> : null}
		</div>
	);
};

export default CommentReply;
