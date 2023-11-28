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
				<div className='con1'>
					<h2>Experience you can trust.</h2>
					<div className='con1PicBox'>
						{Active.map((data, idx) => {
							return (
								<div className='con1Pic' key={data + idx}>
									<img className='con1Img' src={`${path.current}/img/${data.pic}`} alt={data.name} />
								</div>
							);
						})}
					</div>
				</div>

				<div className='con2'>
					<h2>The right tools wielded by the right people to make anything possible</h2>
					<div className='con2PicBox'>
						{MemberData.map((data, idx) => {
							return (
								<article>
									<div className='con2Pic' key={data + idx}>
										<img className='con2Img' src={`${path.current}/img/${data.pic}`} alt={data.name} />
									</div>
									<h3>{data.name}</h3>
									<p>{data.position}</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</Layout>
	);
}
