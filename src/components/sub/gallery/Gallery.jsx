import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Gallery.scss';

export default function Gallery() {
	const myID = useRef('199625511@N07');
	const [Pics, setPics] = useState([]);
const refNav = useRef(null);

	const fetchFlickr = async (opt) => {
		const num = 50;
		const flickr_api = process.env.REACT_APP_FLICKR_API;
		const baseURL = `https://www.flickr.com/services/rest/?api_key=${flickr_api}&per_page=${num}&format=json&nojsoncallback=1&method=`;
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_search = 'flickr.photos.search';
		const interestURL = `${baseURL}${method_interest}`;
		const userURL = `${baseURL}${method_user}&user_id=${opt.id}`;
		const searchURL = `${baseURL}${method_search}&tags=${opt.keyword}`;

		let url = '';
		opt.type === 'user' && (url = userURL);
		opt.type === 'interest' && (url = interestURL);
		opt.type === 'search' && (url = searchURL);
		const data = await fetch(url);
		const json = await data.json();
		console.log(json);
		setPics(json.photos.photo);
	};
	useEffect(() => {
		fetchFlickr({ type: 'interest' });
	}, []);
	return <Layout title={'Gallery'}>
		<article className='controls'>
			<nav className='btnSet' ref={refNav}>
				<button>Interest Gallery</button>
				<button>My Gallery</button>
			</nav>

			<form>
				<input type="text" placeholder='Search' />

				<button></button>
			</form>


		</article>
	</Layout>;
}
