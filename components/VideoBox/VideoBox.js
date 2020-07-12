import React from "react";
import styles from "./VideoBox.module.scss";
import ReactPlayer from "react-player/youtube";
const VideoBox = () => {
	return (
		<div className="videoWrapper">
			<div className="videoPlayBox">
				<ReactPlayer
					url="https://youtu.be/5qap5aO4i9A"
					playing={false}
					controls={true}
					width={"100%"}
				/>
			</div>
			<div className="playController">
				<div className="progressBar">
					<div className="bar"></div>
					<div className="ball"></div>
				</div>
			</div>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};

export default VideoBox;
