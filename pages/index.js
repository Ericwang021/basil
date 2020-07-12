import React from "react";
import Layout from "../Layout/Layout";
import ClassInfoBox from "../components/ClassInfoBox/ClassInfoBox";
import VideoBox from "../components/VideoBox/VideoBox";
import InformationBox from "../components/InformationBox/InformationBox";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Index = () => {
	return (
		<div className="index">
			<ClassInfoBox />
			<div className="videoBoxWrapper">
				<VideoBox />
				<InformationBox />
			</div>
		</div>
	);
};

export default Index;
