import avatarStyle from "../../styles/components/avatar.module.scss";
import styles from "./Comment.module.scss";
import React, { useState, useContext } from "react";
import CommentReply from "../CommentReply/CommentReply";
import CommentReplyForm from "../CommentReplyForm/CommentReplyForm";
import context from "../context";

const Comment = ({ discussion }) => {
	console.log(discussion, "discussion");
	const { record } = discussion;
	const { name, content, date, goodCount, reply } = record;
	const [replyComment, setReplyComment] = useState(false);

	return (
		<div className={styles.comment}>
			<div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
			<div className={styles.commentWrapper}>
				<div className={styles.commentBox}>
					<div className={styles.nameText}>
						<div>{name}</div>
						<div>{date}</div>
					</div>
				</div>
				<div className={styles.commentBox}>
					<span className={styles.commentContent}>{content}</span>
					<div className={styles.rightContent}>
						<span className={styles.lattice}>+1</span>
						<span className={styles.number}>{goodCount}</span>
					</div>
				</div>
				{reply.map((reply, index) => {
					return (
						<CommentReply key={`reply${index}`} reply={reply} index={index} />
					);
				})}
				<div className={styles.replyCommentBox}>
					<div className={avatarStyle.avatarSm}>{name.substring(0, 1)}</div>
					<div
						className={styles.feedbackText}
						onClick={() => setReplyComment(!replyComment)}
					>
						回覆
					</div>
				</div>

				{replyComment ? (
					<CommentReplyForm setReplyComment={setReplyComment} />
				) : null}
			</div>
		</div>
	);
};

export default Comment;
