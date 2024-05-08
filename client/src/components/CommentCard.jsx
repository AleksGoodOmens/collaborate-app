import StarRating from './StarRating';

function CommentCard({ comment, className }) {
	const { pic, text, name, starsValue } = comment;
	return (
		<article className={`${className} `}>
			<div className="p-4 bg-accent-900 rounded-3xl flex flex-col h-full gap-4">
				<header className="flex gap-5 justify-between items-center mb-4">
					<StarRating starsValue={starsValue} />
					<div className="rounded-full w-20 h-20 overflow-hidden">
						<img
							src={pic}
							alt={name}
							height={100}
							width={100}
							className=" object-cover object-center w-full h-full"
						/>
					</div>
				</header>
				<div className="mb-4 flex-grow text-xs">{text}</div>
				<div className=" bg-secondary-200 place-self-end rounded-2xl w-fit px-4 py-2 text-black ">{name}</div>
			</div>
		</article>
	);
}

export default CommentCard;
