import FreezeIcon from '../../images/icons/Freeze card.svg';
import SpendLimitIcon from '../../images/icons/Set spend limit.svg';
import GPayIcon from '../../images/icons/GPay.svg';
import ReplaceCard from '../../images/icons/Replace card.svg';
import CancelCard from '../../images/icons/Deactivate card.svg';
import { useContext } from 'react';
import { CardDetailsContext } from '../../providers/CardDetailsProvider';
import { CardType } from '../../types';

const CardActions = ({ card }: { card: CardType }) => {
	const { freezeCard } = useContext(CardDetailsContext);
	const actions = [
		{
			label: `${card.isFrozen ? 'Unfreeze card' : 'Freeze card'}`,
			icon: FreezeIcon,
			onClick: () => {
				freezeCard(card.cardNumber, !card.isFrozen);
			},
		},
		{
			label: 'Set spend limit',
			icon: SpendLimitIcon,
			onClick: () => {},
		},
		{
			label: 'Add to GPay',
			icon: GPayIcon,
			onClick: () => {},
		},
		{
			label: 'Replace card',
			icon: ReplaceCard,
			onClick: () => {},
		},
		{
			label: 'Cancel card',
			icon: CancelCard,
			onClick: () => {},
		},
	];
	return (
		<div className="rounded-md bg-blue-100 flex justify-between px-6 py-5 mt-8">
			{actions.map((action) => (
				<button
					className="flex flex-col gap-2 items-center w-[60px]"
					key={action.label}
					onClick={() => {
						action.onClick();
					}}
				>
					<img src={action.icon} alt={action.label} height={32} width={32} />
					<span className="text-xs">{action.label}</span>
				</button>
			))}
		</div>
	);
};

export default CardActions;
