import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from '../../common/layout/Layout';
import './Detail.scss';
import { useEffect, useState } from 'react';

export default function Detail() {
	const { id } = useParams();
	const [YoutubeData, setYoutubeData] = useState(null);

	const fetchSingleData = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&id=${id}`;
		const data = await fetch(baseURL);
		const json = await data.json();
		console.log(json.items[0].snippet);
		setYoutubeData(json.items[0].snippet);
	};
	useEffect(() => {
		fetchSingleData();
	}, []);
	return (
		<Layout title={'Detail'}>
			<h2>YOUN Youtube</h2>
			<div className='videoBox'>
				<iframe src={`https://www.youtube.com/embed/${YoutubeData?.resourceId.videoId}`} title={YoutubeData?.title}></iframe>
			</div>
			<h3>{YoutubeData?.title}</h3>
			<p>by. {YoutubeData?.videoOwnerChannelTitle}</p>
		</Layout>
	);
}
