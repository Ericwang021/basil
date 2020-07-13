import React from "react";
import styles from "./CardVideo.module.scss";
import { IconLock, IconList } from "../Icon/Icon";

const CardVideo = () => {
	return (
		<div className={styles.CardVideo}>
			<div className={styles.progress}>
				<div className={styles.progressText}>Prvw</div>
			</div>
			<div className={styles.cardContent}>
				<div className={styles.title}>課程介紹</div>
				<ul className={styles.cardVideoList}>
					<li>
						<IconList />
					</li>
					<li className={styles.videoBox}>
						<div className={styles.lock}>
							<IconLock />{" "}
						</div>
						<img src="../../static/video-short.png" alt="" />
					</li>
					<li>
						<div className={styles.videoTitle}>
							Data Analytics for Industry 4.0
						</div>
						<div className={styles.videoTime}>01:06</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CardVideo;
