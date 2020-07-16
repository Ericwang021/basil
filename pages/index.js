import React, { useState, useContext } from "react";
import Layout from "../Layout/Layout";
import VideoBox from "../components/VideoBox/VideoBox";
import CommentBox from "../components/CommentBox/CommentBox";
import ClassTitleWrapper from "../components/ClassTitleWrapper/ClassTitleWrapper";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
import Grid from "@material-ui/core/Grid";
import { Provider } from "../components/context";

const Index = () => {
	const generateDiscussionList = {
		discussionList: [
			{
				record: {
					name: "Stanley",
					date: "2020/07/16",
					content: "goood!",
					reply: [
						{
							record: {
								name: "Trump",
								date: "2020/07/17",
								content: "oh ya is good!",
							},
						},
					],
				},
			},
		],
	};
	return (
		<div className="index">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<VideoBox />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={4} style={{ padding: "0 8px" }}>
					<Provider value={generateDiscussionList}>
						<CommentBox />
					</Provider>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<ClassTitleWrapper />
					<ShareWrapper />
				</Grid>
			</Grid>
		</div>
	);
};

export default Index;
