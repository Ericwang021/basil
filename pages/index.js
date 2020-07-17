import React, { useState } from "react";
// import Layout from "../Layout/Layout";
import CommentBox from "../components/CommentBox/CommentBox";
import ClassTitleWrapper from "../components/ClassTitleWrapper/ClassTitleWrapper";
import VideoBox from "../components/VideoBox/VideoBox";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
import Grid from "@material-ui/core/Grid";
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
				<Grid container spacing={12}>
					<Grid item lg={8}>
						<VideoBox />
					</Grid>
					<Grid item lg={4}>
						<CommentBox />
					</Grid>
					<Grid item lg={8}>
						<ClassTitleWrapper />
						<ShareWrapper />
					</Grid>
				</Grid>
			</div>
		</Provider>
	);
};

export default Index;
