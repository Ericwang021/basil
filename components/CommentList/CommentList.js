import "./CommentList.module.scss";
import React, { Fragment } from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ discussionListData }) => {
	console.log(discussionListData);
	const listData = discussionListData;
	return (
		<Fragment>
			{listData.map((item, i) => (
				<Comment discussionData={item} index={i} />
			))}
		</Fragment>
	);
};

export default CommentList;
