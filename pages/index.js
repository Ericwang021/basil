import React, { useState } from "react";
import CommentBox from "../components/CommentBox/CommentBox";
import ClassTitleWrapper from "../components/ClassTitleWrapper/ClassTitleWrapper";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
import VideoBox from "../components/VideoBox/VideoBox";
import { defaultDiscussionList, Provider } from "../components/context";

const Index = () => {
	const [discussionList, setDiscussionList] = useState([
		...defaultDiscussionList,
	]);
	const commentContext = {
		discussionList,
		setDiscussionList,
	};
	return (
		<Provider value={commentContext}>
			<div className="index">
				<section className="video-box-wrapper">
					<VideoBox />
					<CommentBox />
				</section>
				<section className="video-title-wrapper">
					<ClassTitleWrapper />
					<ShareWrapper />
				</section>
			</div>
		</Provider>
	);
};

export default Index;
