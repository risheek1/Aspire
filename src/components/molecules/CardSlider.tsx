import React, { useContext, useEffect, useState } from 'react';
import Hide from '../../images/hide.svg';
import { CardDetailsContext } from '../../providers/CardDetailsProvider';
import Card from '../atoms/Card';
import CardActions from './CardActions';

const CardSlider = () => {
	const { cardDetails, currIndex, setCurrIndex } = useContext(CardDetailsContext);
	const [hideCardDetails, setHideCardDetails] = useState(true);
	const [direction, setDirection] = useState('');
	const onIndexUpdate = (index: number) => {
		setHideCardDetails(true);
		setCurrIndex((prev: number) => {
			if (prev > index) {
				setDirection('prev');
			} else if (prev < index) {
				setDirection('next');
			}
			return index;
		});
	};
	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-end mb-3">
				<button
					className="gap-1.5 flex"
					onClick={() => {
						setHideCardDetails(!hideCardDetails);
					}}
				>
					<img src={Hide} height={16} width={16} alt="hide" />
					<span className="text-primary text-xs font-semibold">
						{hideCardDetails ? 'Show' : 'Hide'} card number
					</span>
				</button>
			</div>
			<div className="flex flex-row gap-5 overflow-hidden">
				{cardDetails.map((card, index) => (
					<Card
						key={card.cardNumber}
						cardData={card}
						customClass={currIndex != index ? 'hidden' : `${direction}-slide-in`}
						hideDetails={hideCardDetails}
					/>
				))}
			</div>
			<div className="flex flex-row gap-2 mt-4 justify-center w-full">
				{cardDetails.map((card, index: number) => (
					<button
						className={`w-2 h-2 bg-primary opacity-20 rounded-full ${
							currIndex == index && '!w-4 !opacity-100'
						}`}
						key={index}
						onClick={() => {
							onIndexUpdate(index);
						}}
					></button>
				))}
			</div>
			<CardActions card={cardDetails[currIndex]} />
		</div>
	);
};

export default CardSlider;
