import { NavLink } from 'react-router-dom';
import Logo from '../../Logo';
import Cart from '../../icons/Cart';
import Popup from 'reactjs-popup';
import LoginPopUp from '../../popups/LoginPopUp';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedUser, userIsLogged } from '../../../features/auth/authSlice';
import ProfileButton from '../../profileButton';

const loginPopUpData = { title: 'Welcome back', action: 'Login', link: 'Create an account' };
const registerPopUpData = { title: 'Register', action: 'Register', link: 'I have an account' };

function Header({ setIsBurgerOpen }) {
	const [open, setOpen] = useState(false);

	const closeMenu = () => {
		console.log(open);
		setOpen(!open);
	};

	const [popupData, setPopupData] = useState(loginPopUpData);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(isLoggedUser());
	}, [dispatch]);
	const isAuth = useSelector(userIsLogged);

	useEffect(() => {
		dispatch(isLoggedUser);
	}, [dispatch]);

	const popupChanger = () => {
		setPopupData(popupData.title === 'Register' ? loginPopUpData : registerPopUpData);
	};

	return (
		<header className="text-black px-4">
			<div className="container mx-auto flex gap-4 items-center justify-between flex-wrap lg:flex-nowrap">
				<Logo className="max-w-60  lg:max-w-80 " />
				<label className="order-1 lg:-order-none w-full lg:w-1/3">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Search"
						className="bg-white px-4 py-2 w-full text-black rounded-lg placeholder:text-grey-300"
					/>
				</label>

				{!isAuth && (
					<div className="flex gap-4 items-center">
						<Popup
							trigger={
								<button className="hover:text-accent-400 ease-in-out duration-300">
									<span>Login / Sign up</span>
								</button>
							}
							modal
						>
							{(close) => (
								<LoginPopUp
									close={close}
									popupData={popupData}
									popupChanger={popupChanger}
								/>
							)}
						</Popup>

						<span>|</span>
						<NavLink
							className="hover:text-accent-400 ease-in-out duration-300"
							to="register"
						>
							Become a Partner
						</NavLink>
					</div>
				)}

				{isAuth && <ProfileButton onClick={() => setIsBurgerOpen(true)} />}

				<NavLink to="/cart">
					<Cart />
				</NavLink>
			</div>
		</header>
	);
}

export default Header;
