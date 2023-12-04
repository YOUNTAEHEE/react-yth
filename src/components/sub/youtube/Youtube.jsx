import { useEffect, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Youtube.scss';

export default function Youtube() {
	const [Vids, setVids] = useState([]);
	const fetchYoutube = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const pid = process.env.REACT_APP_YOUTUBE_LIST;
		const num = 4;
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
		try {
			const data = await fetch(baseURL);
			const json = await data.json();
			setVids(json.items);
			console.log(json.items);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchYoutube();
	}, []);
	return (
		<Layout title={'Youtube'}>
			{Vids.map((data, idx) => {
				return (
					<article key={data + idx}>
						<h2>{data.snippet.title}</h2>
						<div className='txt'>
							<p></p>
							<p></p>
						</div>
						<div className='pic'>{data.snippet.playlistId}</div>
					</article>
				);
			})}
		</Layout>
	);
}
