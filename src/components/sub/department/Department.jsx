import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Department.scss';

export default function Department() {
	const [Active, setActive] = useState([]);
	const [Actitle, setActitle] = useState([]);
	const [MemberData, setMemberData] = useState([]);
	const [MemberTit, setMemberTit] = useState([]);

	const path = useRef(process.env.PUBLIC_URL);
	const fetchActive = () => {
		fetch(`${path.current}/DB/departmentCon1.json`)
			.then((data) => data.json())
			.then((json) => {
				//console.log(Object.keys(json)[0]);
				setActitle(Object.keys(json)[0]);
				setActive(Object.values(json)[0]);
			});
	};
	const fetchMember = () => {
		fetch(`${path.current}/DB/departmentCon2.json`)
			.then((data) => data.json())
			.then((json) => {
				//console.log(Object.keys(json)[0]);
				setMemberTit(Object.keys(json)[0]);
				setMemberData(Object.values(json)[0]);
			});
	};
	useEffect(() => {
		fetchActive();
		fetchMember();
	}, []);
	return (
		<Layout title={'Department'}>
			<section className='memberBox'>
				<article className='con1'>
					<p>Experience you can trust.</p>
					<div className='con1PicBox'>
						{Active.map((data, idx) => {
							return (
								<div className='con1Pic' key={data + idx}>
									<img className='con1Img' src={`${path.current}/img/${data.pic}`} alt={data.name} />
								</div>
							);
						})}
					</div>
				</article>

				<div className='con2'>
					<p>The right tools wielded by the right people to make anything possible</p>
					<div className='con2PicBox'>
						{MemberData.map((data, idx) => {
							return (
								<article key={data + idx}>
									<div className='con2Pic'>
										<img className='con2Img' src={`${path.current}/img/${data.pic}`} alt={data.name} />
									</div>
									<h2>{data.name}</h2>
									<p>{data.position}</p>
								</article>
							);
						})}
					</div>
				</div>

				<div className='departmentBg'>
					<div className='departmentContact'>
						<p>Through the years we helped a lot of companies. Are you ready to become our partner?</p>
						<button>Get a Free Quote +</button>
					</div>
				</div>

				<div className='departmentLocation'>
					<div className='departmentMap'>
						<div className='dLPic'>
							<img src={`${path.current}/img/departmentMap.jpg`} alt='찾아올 주소' />
							<p>175 Varrick Street, 3rd Floor. New York, NY 10014</p>
							<p>Say hi if you're in Manhattan</p>
						</div>
					</div>
					<div className='DLPic2'>
						<img src={`${path.current}/img/departmentContact.jpg`} alt='상담하는 이미지' />
					</div>
				</div>
			</section>
		</Layout>
	);
}
