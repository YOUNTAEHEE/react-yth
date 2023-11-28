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

function App() {
	return (
		<>
			<Header />
			<Route exact path='/' component={MainWrap} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/community' component={Community} />
			<Route path='/members' component={Members} />
			<Route path='/contact' component={Contact} />
			<Footer />
		</>
	);
}

export default App;
