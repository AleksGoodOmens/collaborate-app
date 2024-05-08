function SectionTitle({ className = 'bg-accent-900', children }) {
	return <div className={`${className} font-montaga italic font-normal text-2xl w-fit rounded-tl-2xl rounded-br-2xl px-4 py-2 shadow-inner`}>{children}</div>;
}

export default SectionTitle;
