import avatarStyle from '../../../styles/components/avatar.module.scss';
import commonStyle from '../../../styles/components/common.module.scss';
import commentDiscussStyles from '../../../styles/components/commentDiscuss.module.scss';
import React, { useState } from 'react';
import ReplyList from '../ReplyList/ReplyList';
import NewReply from '../NewReply/NewReply';

const CommentItem = ({ discussion, deletedCommentItem, index }) => {
  const { record } = discussion;
  const { name, content, date, goodCount } = record;
  const [newReplyComment, setNewReplyComment] = useState(false);
  const [clickedAddOne, setClickedAddOne] = useState(false);
  const [clickedGoodCount, setClickedGoodCount] = useState(goodCount);
  const [showEditInput, setShowEditInput] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const clickedLattice = () => {
    !clickedAddOne
      ? setClickedGoodCount(clickedGoodCount + 1)
      : setClickedGoodCount(clickedGoodCount - 1);
    setClickedAddOne(!clickedAddOne);
  };
  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSaveChange = () => {
    setShowEditInput(!showEditInput);
    setEditValue(editValue);
  };
  return (
    <div className={commentDiscussStyles.comment}>
      <div className={avatarStyle.avatarMl}>{name.substring(0, 1)}</div>
      <div className={commentDiscussStyles.commentWrapper}>
        <div className={commentDiscussStyles.commentBox}>
          <div className={commentDiscussStyles.nameText}>
            <div>{name}</div>
            <div>{date}</div>
          </div>
        </div>
        <div className={commentDiscussStyles.commentBox}>
          <div className="contentBox">
            {showEditInput ? (
              <input
                className={commonStyle.input}
                type="text"
                value={editValue}
                onChange={handleEditChange}
              />
            ) : (
              <span className={commentDiscussStyles.commentContent}>
                {editValue ? editValue : content}
              </span>
            )}
          </div>
          <div className={commentDiscussStyles.rightContent}>
            <span
              className={
                clickedAddOne
                  ? commentDiscussStyles.clicked
                  : commentDiscussStyles.lattice
              }
              onClick={clickedLattice}
            >
              +1
            </span>
            <span className={commentDiscussStyles.number}>
              {clickedGoodCount}
            </span>
          </div>
          <div className={commentDiscussStyles.editDelete}>
            <div onClick={() => setShowEditInput(!showEditInput)}>
              {`${showEditInput ? '取消' : '編輯'}`}
            </div>
            {showEditInput ? (
              <div onClick={handleSaveChange}>儲存</div>
            ) : (
              <div onClick={deletedCommentItem}>刪除</div>
            )}
          </div>
        </div>
        <div className={commentDiscussStyles.replyCommentBox}>
          <div
            className={commentDiscussStyles.feedbackText}
            onClick={() => setNewReplyComment(!newReplyComment)}
          >
            回覆
          </div>
        </div>
        {newReplyComment ? (
          <NewReply
            setNewReplyComment={setNewReplyComment}
            deletedCommentItem={deletedCommentItem}
          />
        ) : null}
        <ReplyList />
      </div>
    </div>
  );
};

export default CommentItem;
