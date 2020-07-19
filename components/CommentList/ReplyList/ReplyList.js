import React, { useContext } from 'react';
import ReplyItem from '../ReplyItem/ReplyItem';
import context from '../../context';

const ReplyList = () => {
  const contextValue = useContext(context);
  const { replyDiscussionList, setReplyDiscussionList } = contextValue;

  const deleteReplyComment = () => {
    setReplyDiscussionList(replyDiscussionList.slice(1));
  };
  return replyDiscussionList.map((replyDiscussionList, index) => {
    return (
      <ReplyItem
        key={`replyDiscussionList${index}`}
        replyDiscussionList={replyDiscussionList}
        index={index}
        deleteReplyComment={deleteReplyComment}
      />
    );
  });
};

export default ReplyList;
