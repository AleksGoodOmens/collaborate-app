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
				<div className="flex flex-wrap -mx-12 justify-between mb-11">
					{cards.map((card) => (
						<PartnerCard
							className="basis-1/3 px-12"
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
