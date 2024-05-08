import { Link } from 'react-router-dom';
import NavAside from './NavAside';
import TitleAside from './TitleAside';

import { MdMenuOpen } from 'react-icons/md';

const accountMenu = ['profile', 'cart', 'favorite items', 'history of my orders'];
const usefulMenu = ['privacy policy', 'public offer', 'user agreement', 'feedback'];

const Aside = ({ isBurgerOpen, setIsBurgerOpen }) => {
	return (
		<>
			{isBurgerOpen && (
				<div
					className=" fixed w-full z-50 popup-overlay  h-full"
					onClick={() => setIsBurgerOpen(false)}
				></div>
			)}
			<aside
				className={`${
					isBurgerOpen ? 'translate-x-0' : 'translate-x-full'
				} ease-in-out duration-300 fixed h-full top-0 right-0 bg-amber-50 p-8 z-50 rounded-tl-2xl rounded-bl-2xl shadow-asideLeft bg-cover bg-[url(/aside/bg.jpg)]`}
			>
				<NavAside>
					<MdMenuOpen
						className="rotate-180 fill-black mb-4 cursor-pointer"
						size={40}
						onClick={() => setIsBurgerOpen(false)}
					/>
					<TitleAside>Account</TitleAside>
					{renderLinks(accountMenu)}
				</NavAside>

				<NavAside>
					<TitleAside>Useful links</TitleAside>
					{renderLinks(usefulMenu)}
				</NavAside>
				<div className=" text-accent-900 text-xs font-poppins">© Copyright 2024 Blossom Bay</div>
			</aside>
		</>
	);
};
export default Aside;

const renderLinks = (list) => {
	return list.map((item) => {
		return (
			<Link
				className="ml-4 text-black capitalize"
				key={item}
				to={item}
			>
				{item}
			</Link>
		);
	});
};
