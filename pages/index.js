import React from "react";
import Layout from "../Layout/Layout";
import commonStyles from "../styles/components/common.module.scss";
import ClassInfoBox from "../components/ClassInfoBox/ClassInfoBox";
import VideoBox from "../components/VideoBox/VideoBox";
import InformationBox from "../components/InformationBox/InformationBox";
import ClassTitleWrapper from "../components/ClassTitleWrapper/ClassTitleWrapper";
import ShareWrapper from "../components/ShareWrapper/ShareWrapper";
import AboutClass from "../components/AboutClass/AboutClass";
import Registered from "../components/Registered/Registered";
import Grid from "@material-ui/core/Grid";
import CardVideo from "../components/CardVideo/CardVideo";
import CardTeacher from "../components/CardTeacher/CardTeacher";

const Index = () => {
	return (
		<div className="index">
			<ClassInfoBox />
			<section className="videoBoxWrapper">
				<VideoBox />
				<InformationBox />
			</section>
			<section className="classDetail">
				<div className="classDetailInner">
					<ClassTitleWrapper />
					<ShareWrapper />
					<AboutClass />
				</div>
				<Registered />
			</section>
			<section className="Syllabus">
				<div className={commonStyles.sectionTitle}>課程綱要</div>
				<CardVideo />
			</section>
			<section className="teacher">
				<div className={commonStyles.sectionTitle}>講師</div>
				<div className="teacher-inner">
					<CardTeacher />
					<CardTeacher />
					<CardTeacher />
					<CardTeacher />
				</div>
			</section>
		</div>
	);
};

export default Index;
