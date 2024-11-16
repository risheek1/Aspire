import { createContext, useState } from 'react';
import { sampleApiResponse } from '../constant';
import { CardType } from '../types';

type CardDetailsContextType = {
	cardDetails: CardType[];
	addCard: (cardData: CardType) => void;
	freezeCard: (cardNumber: string, value: boolean) => void;
	currIndex: number;
	setCurrIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const CardDetailsContext = createContext<CardDetailsContextType>({
	cardDetails: [],
	addCard: () => null,
	freezeCard: () => null,
	currIndex: 0,
	setCurrIndex: () => null,
});
export const CardDetailsProvider: React.FC<any> = ({ children }) => {
	const [cardDetails, setCardDetails] = useState<CardType[]>(sampleApiResponse.debitCards);
	const [currIndex, setCurrIndex] = useState(0);
	const freezeCard = (cardNumber: string, value: boolean) => {
		setCardDetails((prev) => {
			return prev.map((currCard) => {
				if (currCard.cardNumber == cardNumber) return { ...currCard, isFrozen: value };
				else {
					return currCard;
				}
			});
		});
	};
	const addCard = (cardData: CardType) => {
		setCardDetails((prev) => {
			return [...prev, cardData];
		});
	};
	return (
		<CardDetailsContext.Provider
			value={{
				cardDetails,
				addCard,
				freezeCard,
				currIndex,
				setCurrIndex,
			}}
		>
			{children}
		</CardDetailsContext.Provider>
	);
};
