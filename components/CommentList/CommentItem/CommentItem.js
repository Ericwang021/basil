import avatarStyle from '../../../styles/components/avatar.module.scss';
import styles from './CommentItem.module.scss';
import React, { useState } from 'react';
import ReplyList from '../ReplyList/ReplyList';
import NewReply from '../NewReply/NewReply';

const Comment = ({ discussion }) => {
    const { record } = discussion;
    const { name, content, date, goodCount, reply } = record;
    const [replyComment, setReplyComment] = useState(false);
    const [clickedAddOne, setClickedAddOne] = useState(false);
    const [clickedGoodCount, setClickedGoodCount] = useState(goodCount);

    const clickedLattice = () => {
        !clickedAddOne
            ? setClickedGoodCount(clickedGoodCount + 1)
            : setClickedGoodCount(clickedGoodCount - 1);
        setClickedAddOne(!clickedAddOne);
    };
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
                        <span
                            className={
                                clickedAddOne ? styles.clicked : styles.lattice
                            }
                            onClick={clickedLattice}>
                            +1
                        </span>
                        <span className={styles.number}>
                            {clickedGoodCount}
                        </span>
                    </div>
                    <div className={styles.editDelete}>
                        <div className={styles.edit}>編輯</div>
                        <div className={styles.delete}>刪除</div>
                    </div>
                </div>
                {reply.map((reply, index) => {
                    return (
                        <ReplyList
                            key={`reply${index}`}
                            reply={reply}
                            index={index}
                        />
                    );
                })}
                <div className={styles.replyCommentBox}>
                    <div
                        className={styles.feedbackText}
                        onClick={() => setReplyComment(!replyComment)}>
                        回覆
                    </div>
                </div>
                {replyComment ? (
                    <NewReply setReplyComment={setReplyComment} />
                ) : null}
            </div>
        </div>
    );
};

export default Comment;
