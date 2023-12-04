import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Youtube.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCustomText } from '../../../hooks/useText';

export default function Youtube() {
	const [Vids, setVids] = useState([]);
	const monthName = ['Jan', 'Feb', 'Marc', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const shortenText = useCustomText('shorten');
	const path = useRef(process.env.PUBLIC_URL);
	const fetchYoutube = async () => {
		const api_key = process.env.REACT_APP_YOUTUBE_API;
		const pid = process.env.REACT_APP_YOUTUBE_LIST;
		const num = 10;
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
			<h2>YOUN Youtube</h2>
			<div className='con1'>
				{Vids.slice(0, 3).map((data) => {
					const [date, time] = data.snippet.publishedAt.split('T');
					const [year, month, day] = date.split('-');
					return (
						<article key={data.id}>
							<div className='pic'>
								<div className='date'>
									<div>{day}</div>
									<div>{monthName[month]}</div>
								</div>
								<Link to={`/detail/${data.id}`}>
									<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
								</Link>
							</div>

							<h3>{shortenText(data.snippet.title, 50)}</h3>
							<p>by. {shortenText(data.snippet.videoOwnerChannelTitle, 25)}</p>
						</article>
					);
				})}
			</div>
			<div className='con2'>
				<img src={`${path.current}/img/youtubeCon2Pic.jpg`} alt='공원사진' />
				<p>Walk Don't Run</p>
			</div>
			<div className='con3'>
				{Vids.slice(3).map((data) => {
					const [date, time] = data.snippet.publishedAt.split('T');
					const [year, month, day] = date.split('-');
					return (
						<div className='articleWrap'>
							<article key={data.id}>
								<div className='con3Pic'>
									<div className='con3Date'>
										<div>{day}</div>
										<div>{monthName[month]}</div>
									</div>
									<Link to={`/detail/${data.id}`}>
										<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
									</Link>
								</div>
							</article>
							<div className='txt'>
								<h3>{shortenText(data.snippet.title, 50)}</h3>
								<p>by. {shortenText(data.snippet.videoOwnerChannelTitle, 25)}</p>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
}
