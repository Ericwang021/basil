import React from "react";
import styles from "./VideoBox.module.scss";
import ReactPlayer from "react-player/youtube";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const VideoBox = () => {
	return (
		<div className="videoWrapper">
			<div className="videoPlayBox">
				<ReactPlayer
					url="https://youtu.be/5qap5aO4i9A"
					playing={false}
					controls={true}
					width={"100%"}
					height={"600px"}
				/>
			</div>
			<div className="playController">
				<div className="progressBar">
					<div className="bar"></div>
					<div className="ball"></div>
				</div>
				<ul>
					<li>
						<PlayArrowIcon fontSize="large" style={{ color: "#fff" }} />
					</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default VideoBox;
