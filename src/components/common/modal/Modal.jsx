import './Modal.scss';
import { IoMdClose } from 'react-icons/io';
export default function Modal({ children, Open, setOpen }) {
	return (
		<>
			{Open && (
				<aside className='Modal'>
					<div className='con'>{children}</div>
					<div className='close' onClick={() => setOpen(false)}>
						<IoMdClose />
					</div>
				</aside>
			)}
		</>
	);
}
