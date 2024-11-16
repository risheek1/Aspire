import React, { useEffect, useMemo } from 'react';
import AspireLogo from '../../images/Card/Aspire Logo.svg';
import VisaLogo from '../../images/Card/Visa Logo.svg';
import { CardType } from '../../types';
const Card = ({
	cardData,
	hideDetails = true,
	customClass,
}: {
	cardData: CardType;
	hideDetails?: boolean;
	customClass?: string;
}) => {
	const cardNumber = useMemo(() => {
		if (hideDetails) {
			return [
				...Array(3).fill('••••'),
				cardData.cardNumber.slice(cardData.cardNumber.length - 4),
			];
		} else {
			return cardData.cardNumber.split(' ');
		}
	}, [hideDetails]);
	return (
		<div
			className={`bg-primary p-6 flex flex-col w-full h-[250px] rounded-md ${customClass} ${
				cardData.isFrozen && 'opacity-75'
			}`}
		>
			<div className="w-full flex flex-row justify-end">
				<img src={AspireLogo} alt="AspireLogo" height={24} width={84} />
			</div>
			<div className="mt-6 flex flex-col">
				<span className="text-2xl text-white font-semibold text-left">
					{cardData.cardHolderName}
				</span>
				<div className="flex flex-row gap-6 mt-6 mb-3 items-center h-9">
					{cardNumber.map((block: any, index: number) => (
						<span
							key={index}
							className={`font-bold text-white text-left ${
								block == '••••'
									? 'text-3xl font-bold tracking-[6px]'
									: 'font-medium text-xl'
							}`}
						>
							{block}
						</span>
					))}
				</div>

				<div className="flex flex-row gap-9">
					<span className="font-semibold text-white text-xs">
						Thru:{cardData.expiryDate}
					</span>
					<span className="font-semibold text-white text-xs">
						CVV: {hideDetails ? '***' : cardData.cvv}
					</span>
				</div>
			</div>
			<div className="w-full flex flex-row justify-end static bottom-6 right-6">
				<img src={VisaLogo} alt="VisaLogo" height={22} width={66} />
			</div>
		</div>
	);
};

export default Card;
