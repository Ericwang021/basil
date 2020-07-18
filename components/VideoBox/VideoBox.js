import styles from "./VideoBox.module.scss";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { IconButton, Grid, Slider } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import ClosedCaptionIcon from "@material-ui/icons/ClosedCaption";
import CropFreeIcon from "@material-ui/icons/CropFree";

const VideoBox = () => {
	const [value, setValue] = React.useState(30);
	const [unFold, setUnfold] = React.useState(false);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleOnMouseOver = () => {
		setUnfold(!unFold);
	};
	return (
		<div className={styles.videoWrapper}>
			<div className="videoPlayBox">
				<ReactPlayer
					url="https://youtu.be/xjadNS2HBpM"
					className="player"
					width={"100%"}
					height={500}
					autoPlay={false}
					controls={true}
					volume={1}
					muted={false}
				/>
			</div>
			<div className={styles.playController}>
				<div className={styles.playAndVolume}>
					<Grid item xs>
						<IconButton style={{ color: "#fff" }}>
							<PlayArrowIcon fontSize="large" style={{ color: "#fff" }} />
						</IconButton>
					</Grid>
					<VolumeDown className={styles.volume} style={{ color: "#fff" }} />
					<Slider
						className={styles.volumeMiddle}
						value={value}
						onChange={handleChange}
						style={{ color: "#fff" }}
					/>
					<VolumeUp className={styles.volume} style={{ color: "#fff" }} />
				</div>
				<div className={styles.rightController}>
					<IconButton style={{ color: "#fff" }}>
						<ClosedCaptionIcon fontSize="large" style={{ color: "#fff" }} />
					</IconButton>
					<IconButton style={{ color: "#fff" }}>
						<CropFreeIcon fontSize="large" style={{ color: "#fff" }} />
					</IconButton>
				</div>
			</div>
			<div className={styles.videoMarker}>
				<ul onMouseOver={handleOnMouseOver}>
					<li className={styles.signup}></li>
					<li className={styles.explore}></li>
					<li className={styles.preview}></li>
					<li className={styles.video}></li>
				</ul>
				{unFold ? (
					<ul onMouseOut={() => setUnfold(false)} className={styles.hidden}>
						<li className={styles.signup}>Signup</li>
						<li className={styles.explore}>Explore</li>
						<li className={styles.preview}>Course Preview</li>
						<li className={styles.video}>Video & Markers</li>
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default VideoBox;
