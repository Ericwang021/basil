import styles from "./InformationBox.module.scss";
import avatarStyle from "../../styles/components/avatar.module.scss";
import buttonStyle from "../../styles/components/buttons.module.scss";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import {
	IconFeedBack,
	IconSearch,
	IconClose,
	IconLan,
	IconSend,
	IconAdd,
	IconCheckCircle,
} from "../Icon/Icon";

const InformationBox = () => {
	const [show, setShow] = useState(false);
	const [comment, setComment] = useState(false);
	const [feedBack, setFeedBack] = useState(false);
	const handleClick = () => {
		setShow(!show);
	};
	const handleComment = () => {
		setComment(!comment);
	};
	const handleFeedback = () => {
		setFeedBack(!feedBack);
	};

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
						<span className={styles.text} onClick={() => handleComment()}>
							新增討論
						</span>
					</div>
					{comment ? (
						<div className={styles.addMessage}>
							<div className={avatarStyle.avatarMl}>E</div>
							<div className={styles.textAreaBox}>
								<textarea placeholder="新增回覆" />
							</div>
							<button className={buttonStyle.iconButtonSm || styles.button}>
								<IconButton>
									<SendIcon fontSize="small" />
								</IconButton>
							</button>
						</div>
					) : null}
				</div>
				<div className={styles.comment}>
					<div className={styles.totalComment}>3個討論</div>
					<ul>
						<li className={avatarStyle.avatarMl || styles.avatar}>E</li>
						<li className={styles.commentWrapper}>
							<div className={styles.commentBox}>
								<div className={styles.nameText}>
									<div>Eric wang</div>
									<div>張貼 • 12 個月前</div>
								</div>
								<div className={styles.rightContent}>
									<span className={styles.iconBox}>
										<IconCheckCircle />
									</span>
									<span className={styles.text}>已解決</span>
								</div>
							</div>
							<div className={styles.commentBox}>
								<span className={styles.commentContent}>goooood!</span>
								<div className={styles.rightContent}>
									<span className={styles.lattice}>+1</span>
									<span className={styles.number}>0</span>
								</div>
							</div>
							<div className={styles.feedback}>
								<div className={styles.feedbackEvent}>
									<div className={avatarStyle.avatarSm || styles.avatar}>A</div>
									<div
										className={styles.feedbackText}
										onClick={() => handleFeedback()}
									>
										回覆
									</div>
								</div>
								{feedBack ? (
									<div className={styles.addMessage}>
										<div className={avatarStyle.avatarMl}>E</div>
										<div className={styles.textAreaBox}>
											<textarea placeholder="新增回覆" />
										</div>
										<div>
											<IconButton>
												<SendIcon fontSize="small" />
											</IconButton>
										</div>
									</div>
								) : null}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default InformationBox;
