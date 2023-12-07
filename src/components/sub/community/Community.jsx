import { useEffect, useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Community.scss';

export default function Community() {
	const monthName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return [];
	};
	const [Post, setPost] = useState(getLocalData());
	const editMode = useRef(false);

	const refTit = useRef(null);
	const refCon = useRef(null);
	//취소
	const resetPost = () => {
		refTit.current.value = '';
		refCon.current.value = '';
	};
	//저장
	const createPost = () => {
		if (!refTit.current.value.trim() || !refCon.current.value.trim()) {
			resetPost();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		const date = new Date();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		setPost([{ title: refTit.current.value, content: refCon.current.value, month: month, day: day }, ...Post]);
		resetPost();
	};

	//수정모드 변경
	const enableUpdate = (editIndex) => {
		if (editMode.current) return;
		editMode.current = true;
	};
	//삭제
	const deletePost = () => {};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Post));
	}, [Post]);
	return (
		<Layout title={'Community'}>
			<div className='wrap'>
				<div className='inputBox'>
					<input type='text' placeholder='title' ref={refTit} />
					<textarea cols='30' rows='5' placeholder='content' ref={refCon}></textarea>
				</div>
				<nav>
					<button onClick={resetPost}>cancle</button>
					<button onClick={createPost}>save</button>
				</nav>
			</div>
			<div className='showBox'>
				{Post.map((el, idx) => {
					return (
						<article key={el + idx}>
							<div className='txt'>
								<p>{el.month}</p>
								<p>{el.day}</p>
								<h2>{el.title}</h2>
								<p>{el.content}</p>
							</div>
							<nav>
								<button onClick={() => enableUpdate(idx)}>수정</button>
								<button onClick={() => deletePost(idx)}>삭제</button>
							</nav>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}
