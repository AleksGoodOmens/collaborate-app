import { useState } from 'react';
import { IoMdStar } from 'react-icons/io';

function StarRating({ starsValue }) {
	const [rating, setRating] = useState(starsValue);
	const [hover, setHover] = useState(null);
	return (
		<div className="flex gap-2">
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<label key={i}>
						<input
							style={{ display: 'none' }}
							type="radio"
							name="star"
							id="star"
							value={ratingValue}
						/>
						<IoMdStar
							className=" cursor-pointer transition-colors duration-200"
							onClick={() => setRating(ratingValue)}
							color={ratingValue <= (hover || rating) ? '#fbf5e6' : '#cc6f71'}
							onMouseEnter={() => setHover(ratingValue)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
		</div>
	);
}

export default StarRating;
