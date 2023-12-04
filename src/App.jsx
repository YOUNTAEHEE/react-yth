import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import Department from './components/sub/department/Department';
import Community from './components/sub/community/Community';
import Members from './components/sub/Members/Members';
import Gallery from './components/sub/gallery/Gallery';
import Youtube from './components/sub/youtube/Youtube';
import Contact from './components/sub/contact/Contact';
import MainWrap from './components/main/mainWrap/MainWrap';
import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';
import { useState } from 'react';
import Menu from './components/common/menu/Menu';
import { useMedia } from './hooks/useMedia';
import Detail from './components/sub/youtube/Detail';

function App() {
	const [Toggle, setToggle] = useState(false);
	const [Dark, setDark] = useState(false);

	return (
		<div className={`wrap ${Dark ? 'dark' : ''} ${useMedia()}`}>
			<Header Toggle={Toggle} setToggle={setToggle} Dark={Dark} setDark={setDark} />
			<Route exact path='/' component={MainWrap} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/community' component={Community} />
			<Route path='/members' component={Members} />
			<Route path='/contact' component={Contact} />
			<Footer />
			{Toggle && <Menu />}
		</div>
	);
}

export default App;
