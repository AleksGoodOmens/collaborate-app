import { Link } from 'react-router-dom';

function PartnerCard({ partner, className }) {
	const { pictures, partnerTitle } = partner;
	return (
		<article className={`${className ? className : ''}`}>
			<Link
				to={`partner/:partnerId`}
				className=" grid grid-cols-2 relative grid-rows-2  aspect-square gap-10"
			>
				<h3 className=" shadow-full absolute rounded-3xl place-self-center w-3/5 h-3/5 place-content-center p-4 bg-secondary-200 font-montaga text-black text-xl lg:text-3xl">
					<div className="text-center">{partnerTitle}</div>
				</h3>
				{pictures.map((pic, id) => (
					<div
						key={id}
						className=" shadow-full  rounded-3xl bg-accent-400 overflow-hidden "
					>
						<img
							width={'100%'}
							height={'100%'}
							className=" object-center object-cover "
							src={`${pic}`}
							alt="image with goods example"
						/>
					</div>
				))}
			</Link>
		</article>
	);
}

export default PartnerCard;
