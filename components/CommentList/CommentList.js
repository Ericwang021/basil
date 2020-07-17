import React, { Fragment, useContext } from "react";
import Comment from "../Comment/Comment";
import context from "../context";

const CommentList = () => {
	const contextValue = useContext(context);
	const { discussionList, discussionListData } = contextValue;
	return discussionList.map((discussion, index) => (
		<Comment key={`comment${index}`} discussion={discussion} index={index} />
	));
};

export default CommentList;
