import './Layout.scss';

export default function Layout({ children, title }) {
	return <main className={`Layout ${title}`}>{children}</main>;
}
