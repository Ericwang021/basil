import styles from "./Comment.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";
import React, { useState } from "react";
import { IconCheckCircle } from "../Icon/Icon";
import CommentForm from "../CommentForm/CommentForm";
import CommentReply from "../CommentReply/CommentReply";

const Comment = ({ discussionData }) => {
	const { content, date, name, reply } = discussionData.record;

	return (
		<div className={styles.comment}>
			<div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
			<div className={styles.commentWrapper}>
				<div className={styles.commentBox}>
					<div className={styles.nameText}>
						<div>{name}</div>
						<div>{date}</div>
					</div>
					<div className={styles.rightContent}>
						<span className={styles.iconBox}>
							<IconCheckCircle />
						</span>
						<span className={styles.text}>已解決</span>
					</div>
				</div>
				<div className={styles.commentBox}>
					<span className={styles.commentContent}>{content}</span>
					<div className={styles.rightContent}>
						<span className={styles.lattice}>+1</span>
						<span className={styles.number}>0</span>
					</div>
				</div>
				{reply.map((item, i) => (
					<CommentReply replyData={item} index={i} />
				))}
			</div>
		</div>
	);
};

export default Comment;
