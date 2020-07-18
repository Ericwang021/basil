import React, { useContext } from 'react';
import ReplyItem from '../ReplyItem/ReplyItem';
import context from '../../context';

const ReplyList = () => {
    const contextValue = useContext(context);
    const { replyDiscussionList } = contextValue;
    return replyDiscussionList.map((replyDiscussionList, index) => {
        return (
            <ReplyItem
                key={`replyDiscussionList${index}`}
                replyDiscussionList={replyDiscussionList}
                index={index}
            />
        );
    });
};

export default ReplyList;
