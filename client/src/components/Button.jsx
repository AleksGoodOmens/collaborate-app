function Button({ children, ...props }) {
	return (
		<button
			className={`${props?.className} rounded-3xl px-8 py-4 bg-accent-900 shadow-md font-popins font-semibold text-xl italic hover:bg-accent-400 duration-300 `}
		>
			{children}
		</button>
	);
}

export default Button;
