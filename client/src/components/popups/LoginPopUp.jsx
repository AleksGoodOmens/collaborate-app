import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '../Button';
import SectionTitle from '../sectionTitle';

import { registerUser, loginUser, isLoggedUser } from '../../features/auth/authSlice';

import { toast } from 'react-toastify';

function LoginPopUp({ close, popupData, popupChanger }) {
	// local state
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const { status } = useSelector((state) => state.auth);

	useEffect(() => {
		if (status) {
			toast(status);
		}
	}, [status]);
	// Submit function
	const handleSubmit = (e) => {
		e.preventDefault();

		if (username.length < 10) {
			toast('Email to short');
			return;
		}

		if (password.length < 6) {
			toast('password is to short');
			return;
		}

		if (popupData.action === 'Login') {
			try {
				dispatch(loginUser({ username, password }));
				setUsername('');
				setPassword('');
			} catch (error) {
				toast('something go wrong');
			}
		}

		if (popupData.action === 'Register') {
			try {
				dispatch(registerUser({ username, password }));
				setUsername('');
				setPassword('');
			} catch (error) {
				toast('something go wrong');
			}
		}
	};

	// animation
	const modal = useRef();

	useGSAP(() => {
		gsap.fromTo('.modal', { opacity: 0 }, { opacity: 1 });
	});

	// render
	const { title, action, link } = popupData;

	return (
		<div
			ref={modal}
			className="modal text-black rounded-3xl bg-secondary-400 bg-[url('./popup/bg.jpg')] bg-center bg-no-repeat bg-cover p-9"
		>
			<header className="  flex justify-between items-center mb-9">
				<SectionTitle>{title}</SectionTitle>
				<IoMdCloseCircle
					size={44}
					className="fill-accent-900 hover:fill-black cursor-pointer duration-300"
					onClick={close}
				/>
			</header>
			<form
				className=" flex flex-col gap-9 min-w-96"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label className="w-full">
					<h2 className="mb-5 text-xl">Enter your email</h2>
					<div className=" relative">
						<MdAlternateEmail
							size={20}
							className=" absolute left-4 top-1/2 -translate-y-1/2 "
						/>
						<input
							className="w-full text-center bg-secondary-400 rounded-3xl py-2 px-11"
							type="email"
							placeholder="Enter email"
							name="email"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
				</label>
				<label>
					<h2 className="mb-5 text-xl">Enter your password</h2>
					<div className=" relative">
						<MdPassword
							size={20}
							className=" absolute left-4 top-1/2 -translate-y-1/2 "
						/>
						<input
							className="w-full text-center bg-secondary-400 rounded-3xl py-2 px-11"
							type="password"
							placeholder="******"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</label>
				<div className="flex items-center justify-between gap-5">
					<Button
						type="submit"
						color={'text-black'}
					>
						{action}
					</Button>
					<button
						onClick={popupChanger}
						type="button"
					>
						{link}
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginPopUp;
