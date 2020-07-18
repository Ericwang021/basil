import React, { useContext } from 'react';
import CommentItem from './CommentItem/CommentItem';
import context from '../context';

const CommentList = () => {
    const contextValue = useContext(context);
    console.log(contextValue);
    const { discussionList, setDiscussionList } = contextValue;
    const deletedCommentItem = (index) => {
        console.log(index);
        setDiscussionList(discussionList.slice(1), index);
    };
    console.log(discussionList, 'List');
    return discussionList.map((discussion, index) => (
        <CommentItem
            key={`comment${index}`}
            discussion={discussion}
            index={index}
            deletedCommentItem={deletedCommentItem}
        />
    ));
};

export default CommentList;
