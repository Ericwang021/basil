import avatarStyle from '../../../styles/components/avatar.module.scss';
import commonStyle from '../../../styles/components/common.module.scss';
import styles from './CommentItem.module.scss';
import React, { useState } from 'react';
import ReplyList from '../ReplyList/ReplyList';
import NewReply from '../NewReply/NewReply';

const Comment = ({ discussion }) => {
    console.log(discussion, 'commentItem');
    const { record } = discussion;
    const { name, content, date, goodCount, reply } = record;
    const [newReplyComment, setNewReplyComment] = useState(false);
    const [clickedAddOne, setClickedAddOne] = useState(false);
    const [clickedGoodCount, setClickedGoodCount] = useState(goodCount);
    const [editInput, setEditInput] = useState(false);
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
                    <div className="contentBox">
                        {editInput ? (
                            <input
                                className={commonStyle.input}
                                type="text"
                                value={content}
                            />
                        ) : (
                            <span className={styles.commentContent}>
                                {content}
                            </span>
                        )}
                    </div>

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
                        <div onClick={() => setEditInput(!editInput)}>
                            {`${editInput ? '取消' : '編輯'}`}
                        </div>
                        {editInput ? <div>儲存</div> : <div>刪除</div>}
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
                        onClick={() => setNewReplyComment(!newReplyComment)}>
                        回覆
                    </div>
                </div>
                {newReplyComment ? (
                    <NewReply setNewReplyComment={setNewReplyComment} />
                ) : null}
            </div>
        </div>
    );
};

export default Comment;
