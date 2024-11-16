import { useState } from 'react';
import Card from '../../images/icons/card-icon.svg';
import expand from '../../images/icons/down-arrow.svg';

const CardDetails = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div className="border border-border rounded-md">
			<button
				className="flex flex-row justify-between w-full p-6 items-center bg-blue-100 border-b border-b-blue-100"
				onClick={() => {
					setIsExpanded(!isExpanded);
				}}
			>
				<div className="flex flex-row gap-3 items-center">
					<img height={24} width={24} src={Card} alt="Card Icon" />
					<span className="text-sm">Card Details</span>
				</div>
				<img
					height={20}
					width={20}
					alt="Expand"
					src={expand}
					className={`${isExpanded ? 'rotate-180' : ''}`}
				/>
			</button>
		</div>
	);
};

export default CardDetails;
