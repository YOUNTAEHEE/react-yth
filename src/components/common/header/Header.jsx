import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineMenu } from 'react-icons/md';
export default function Header({ Dark, setDark, Toggle, setToggle }) {
	return (
		<header className='Header'>
			<h1>
				<Link to='/'>YOUN</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department' activeClassName={'on'}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={'on'}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={'on'}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/community' activeClassName={'on'}>
						Community
					</NavLink>
				</li>
				<li>
					<NavLink to='/members' activeClassName={'on'}>
						Members
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName={'on'}>
						Contact
					</NavLink>
				</li>
			</ul>
		<div className='tabletBtns'>
				<div
					className={`themeBox ${Dark && 'dark'}`}
					onClick={() => {
						setDark(!Dark);
					}}
				>
					<div className='ball'></div>
				</div>
				<div className='menuToggle' onClick={() => setToggle(!Toggle)}>
					<MdOutlineMenu />
				</div>
		</div>
		</header>
	);
}
