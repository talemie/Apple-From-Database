import React, { useState, useEffect } from "react";
import "./youtube.css";

function YouTubeVideos() {
    const [videos, setVideos] = useState([]);
    let localAppleYoutube = "./appleYoutube.json";
	let youtubeApiUrl =
		"test";
	useEffect(() => {
		fetch(localAppleYoutube)
			.then((res) => res.json())
			.then((data) => {
				setVideos(data.items);
			});
	}, []);

	// console.log(videos);

	return (
		<section className="youtube-wrapper">
			<div className="text-center my-3 titleWrap">
				<h2>Latest Videos</h2>
			</div>
			<div className="container ">
				<div className="row">
                    {videos?.map((singleVideo, i) => {
                        
						let vidId = singleVideo.id.videoId;
						let vidTitle = singleVideo.snippet.title;
						let vidDescription = singleVideo.snippet.description;
						let vidThumb = singleVideo.snippet.thumbnails.high.url;
						let vidUrl = `https://www.youtube.com/watch?v=${vidId}`;
						let publishDate = singleVideo.snippet.publishTime;

						return (
							<div className="col-12 col-md-6 col-lg-4 my-2  " key={i}>
								<div className="video-wrap">
									<div className="image-container">
										<a href={vidUrl}>
											<img
												src={vidThumb}
												alt=""
												className="img-fluid d-block"
											/>
										</a>
									</div>
									<div className="">
										<div className="video-title-wrap">
											<a href={vidUrl}>{vidTitle}</a>
										</div>
										<div>{vidDescription}</div>
										<div>{publishDate}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default YouTubeVideos;
