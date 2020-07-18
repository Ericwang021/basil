import avatarStyle from '../../../styles/components/avatar.module.scss';
import styles from './ReplyList.module.scss';
import React from 'react';

const CommentReply = ({ reply }) => {
    const { content, date, name } = reply;
    return (
        <div className={styles.feedback}>
            <div className={styles.feedbackEvent}>
                <div className={avatarStyle.avatarSm}>
                    {name.substring(0, 1)}
                </div>
                <div>
                    <div className={styles.nameText}>
                        <div>{name}</div>
                        <div>{date}</div>
                    </div>
                    <div className={styles.replyContent}>{content}</div>
                </div>
            </div>
        </div>
    );
};

export default CommentReply;
