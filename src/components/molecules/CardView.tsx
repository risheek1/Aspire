import React, { useContext } from 'react';
import CardSlider from './CardSlider';
import CardActions from './CardActions';
import TransactionList from './TransactionList';
import { CardDetailsContext } from '../../providers/CardDetailsProvider';
import CardDetails from './CardDetails';
const CardView = () => {
	const { currIndex, cardDetails } = useContext(CardDetailsContext);
	return (
		<div className="w-full h-full shadow-[0px_2px_12px_#00000014] border border-solid border-[#FCFCFC] rounded-md py-8 px-10">
			<div className="flex flex-row gap-[45px]">
				<div className="w-[calc(100%-22px)]">
					<CardSlider />
				</div>
				<div className="w-[calc(100%-22px)] max-w-[calc(100%-22px)]  flex flex-col gap-6">
					<CardDetails />
					<TransactionList transactionValues={cardDetails[currIndex].transactions} />
				</div>
			</div>{' '}
		</div>
	);
};

export default CardView;
