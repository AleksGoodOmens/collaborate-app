import { NavLink } from 'react-router-dom';

function Logo({ className }, props) {
	return (
		<NavLink
			{...props}
			className={className}
			to="/"
		>
			<img
				src="/logo.png"
				alt="BlossomBay"
			/>
		</NavLink>
	);
}

export default Logo;
