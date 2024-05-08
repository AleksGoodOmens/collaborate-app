import { FaUserCheck } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import { useSelector } from 'react-redux';

function ProfileButton(props) {
	const user = useSelector((state) => state.auth.user.username || '');
	return (
		<div
			{...props}
			className=" hover:bg-accent-400 duration-300 px-4 py-2 rounded-lg bg-white flex items-center font-poppins cursor-pointer gap-4"
		>
			<FaUserCheck size={20} />
			<span>{user}</span>
			<MdMenuOpen size={20} />
		</div>
	);
}

export default ProfileButton;
