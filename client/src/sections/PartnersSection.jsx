import { useState } from 'react';
import Button from '../components/Button';
import PartnerCard from '../components/PartnerCard';
import SectionTitle from '../components/sectionTitle';

function PartnersSection() {
	const [cards, setCards] = useState([
		{
			partnerId: 1,
			pictures: ['./temp/1.jpg', './temp/2.jpg', './temp/3.jpg', './temp/4.jpg'],
			partnerTitle: 'Serene Stems Floral Boutique',
		},
		{
			partnerId: 2,
			pictures: ['./temp/2.jpg', './temp/3.jpg', './temp/4.jpg', './temp/1.jpg'],
			partnerTitle: 'Bloom & Blossom Botanicals',
		},
		{
			partnerId: 3,
			pictures: ['./temp/4.jpg', './temp/3.jpg', './temp/2.jpg', './temp/1.jpg'],
			partnerTitle: 'Petal Perfection Florist',
		},
	]);
	return (
		<div className="bg-[url(./partnersSection/bg.png)] bg-cover bg-center py-24 px-4">
			<section className=" container mx-auto max-w-screen-xl flex  flex-col gap-16 ">
				<SectionTitle>Our partners</SectionTitle>
				<div className="grid sm:grid-cols-4 md:grid-cols-6 justify-center gap-12 mb-11 ">
					{cards.map((card, i) => (
						<PartnerCard
							className={`${cards.length % 2 === 1 && cards.length === i + 1 ? 'sm:col-start-2 sm:col-end-4 md:col-span-2' : 'sm:col-span-2'} `}
							key={card.partnerId}
							partner={card}
						/>
					))}
				</div>

				<Button className=" place-self-center">See all local Partners</Button>
			</section>
		</div>
	);
}

export default PartnersSection;
