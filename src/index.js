import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBTOVBCLX4MS2JFLCuk_tnT54mu6wCT9e4';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {videos: [], selectedVideo: null};
		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term},
			videos => {
				this.setState({videos});
				this.setState({selectedVideo: this.state.videos[0]});
			});
	}
	componentDidMount() {
		this.videoSearch('surfboards');
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return ( 
			<div>
				<SearchBar videoSearch = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList videos={this.state.videos} 
				callBack={video => {this.setState({selectedVideo: video})}}/>
			</div>
		);
	}	
}

ReactDom.render(
	<App/>, document.querySelector('.container'));