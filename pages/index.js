import React from "react";
import Layout from "../Layout/Layout";
import ClassInfoBox from "../components/ClassInfoBox/ClassInfoBox";
import VideoBox from "../components/VideoBox/VideoBox";
import InformationBox from "../components/InformationBox/InformationBox";
import ClassTitleWrapper from "../components/ClassTitleWrapper/ClassTitleWrapper";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
import AboutClass from "../components/AboutClass/AboutClass";
import Grid from "@material-ui/core/Grid";

const Index = () => {
	return (
		<div className="index">
			<Grid container spacing={2}>
				{/* <Grid item xs={12}>
					<ClassInfoBox />
				</Grid> */}
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<VideoBox />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={4}>
					<InformationBox />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={8}>
					<ClassTitleWrapper />
					<ShareWrapper />
					<AboutClass />
				</Grid>
			</Grid>
		</div>
	);
};

export default Index;
