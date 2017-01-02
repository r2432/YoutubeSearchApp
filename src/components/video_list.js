import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, callBack}) => {
    const videoItems = videos.map(video => {
    	return <VideoListItem key={video.etag} videoItem = {video} callBack={callBack}/>
    });
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);

}

export default VideoList;