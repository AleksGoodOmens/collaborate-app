import { useState } from 'react';
import CommentCard from '../components/CommentCard';
import SectionTitle from '../components/sectionTitle';

function CommentsSection() {
	const [comments, setComments] = useState([
		{
			commentId: 1,
			pic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwzfHxwcm9maWxlfGVufDB8fHx8MTcxNTE2NzQ4Mnww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
			text: '"Every visit to our local flower shop feels like stepping into a fragrant oasis of creativity and charm, where each bloom tells a story and every arrangement is a masterpiece waiting to be discovered."',
			name: 'Aleks. G.',
			starsValue: 5,
		},
		{
			commentId: 2,
			pic: 'https://plus.unsplash.com/premium_photo-1675034393635-ae45492f9be6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw5fHxwcm9maWxlfGVufDB8fHx8MTcxNTE2NzQ4Mnww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
			text: '"Stepping into our local flower shop is like entering a vibrant symphony of colors and scents, where each petal whispers tales of nature\'s beauty and each arrangement is a testament to ..."',
			name: 'Kate. N.',
			starsValue: 4,
		},
		{
			commentId: 3,
			pic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyM3x8cHJvZmlsZXxlbnwwfHx8fDE3MTUxNjc0ODJ8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
			text: "“Celebrate life's special moments with a touch of elegance from our local flower shop, where every bouquet is crafted with care and infused with the magic of heartfelt sentiments.”",
			name: 'George. B.',
			starsValue: 5,
		},
		{
			commentId: 4,
			pic: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwzMHx8cHJvZmlsZXxlbnwwfHx8fDE3MTUxNjc0ODJ8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
			text: '"Find joy in the little things at our local flower shop.”',
			name: 'George. B.',
			starsValue: 5,
		},
	]);

	return (
		<div className="px-4 py-24 bg-accent-400">
			<section className="mx-auto max-w-screen-xl container flex  flex-col gap-16 ">
				<div className="flex place-content-end">
					<SectionTitle className=" bg-secondary-200 text-black">Opinions about our partners</SectionTitle>
				</div>
				<div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-between gap-10">
					{comments.map((comment) => (
						<CommentCard
							className="basis-1/4 "
							key={comment.commentId}
							comment={comment}
						/>
					))}
				</div>
			</section>
		</div>
	);
}

export default CommentsSection;
