import './Footer.scss';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Footer() {
	return (
		<footer className='Footer'>
			<div className='footerLeft'>
				<h1>YOUN</h1>
				<p>175 Varrick Street, 3rd Floor. New York, NY 10014</p>
				<p>github.com/YOUNTAHEE | 010-1234-5678</p>
			</div>
			<div className='footerRight'>
				<p>2023 YOUN &copy; All Rights Reserved.</p>

					<ul>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaTwitter />
						</li>
						<li>
							<FaYoutube />
						</li>
					</ul>
			</div>
		</footer>
	);
}
