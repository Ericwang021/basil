import avatarStyle from "../../../styles/components/avatar.module.scss";
import styles from "./CommentReply.module.scss";
import React from "react";

const CommentReply = ({ reply }) => {
	console.log(reply, "reply");
	const { content, date, name } = reply;
	return (
		<div className={styles.feedback}>
			<div className={styles.feedbackEvent}>
				{name ? (
					<div className={avatarStyle.avatarSm}>{name.substring(0, 1)}</div>
				) : null}
				<div>
					<div className={styles.nameText}>
						{name ? <div>{name}</div> : null}
						{date ? <div>{date}</div> : null}
					</div>
					{content ? (
						<div className={styles.replyContent}>{content}</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default CommentReply;
