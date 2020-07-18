import React, { useContext } from 'react';
import CommentItem from './CommentItem/CommentItem';
import context from '../context';

const CommentList = () => {
    const contextValue = useContext(context);
    const { discussionList } = contextValue;
    return discussionList.map((discussion, index) => (
        <CommentItem
            key={`comment${index}`}
            discussion={discussion}
            index={index}
        />
    ));
};

export default CommentList;
