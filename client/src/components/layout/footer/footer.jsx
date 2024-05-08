import { Link } from 'react-router-dom';
import Logo from '../../Logo';
import NavListFooter from './navListFooter';

const policiesLinks = ['Privacy policy', 'About us', 'FAQ'];
const infoLinks = ['Public offer', 'Contacts', 'Payment'];
const generalLinks = ['User Agreement', 'Feedback', 'Delivery'];

function Footer() {
	return (
		<footer className="p-12 bg-accent-400 bg-[url(./footer/Footer.png)] bg-cover bg-center">
			<div className="container py-12 bg-white/40 rounded-2xl flex flex-col gap-8 place-items-center mx-auto">
				<Logo className=" max-w-md mx-auto" />
				<h2 className="text-accent-400 font-bold text-2xl text-center">Sowing Creativity, Blooming Connections</h2>
				<nav className="flex justify-center gap-52">
					<NavListFooter>
						{policiesLinks.map((link) => (
							<li key={link}>
								<Link>{link}</Link>
							</li>
						))}
					</NavListFooter>
					<NavListFooter>
						{infoLinks.map((link) => (
							<li key={link}>
								<Link>{link}</Link>
							</li>
						))}
					</NavListFooter>
					<NavListFooter>
						{generalLinks.map((link) => (
							<li key={link}>
								<Link>{link}</Link>
							</li>
						))}
					</NavListFooter>
				</nav>
				<footer className="text-accent-400 text-2xl text-center">© Copyright 2024 Blossom Bay</footer>
			</div>
		</footer>
	);
}

export default Footer;
