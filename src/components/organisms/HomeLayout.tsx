import BalanceDetails from '../molecules/BalanceDetails';
import AllCardDetails from '../molecules/AllCardDetails';
import { CardDetailsProvider } from '../../providers/CardDetailsProvider';

const HomeLayout = () => {
	return (
		<CardDetailsProvider>
			<div className="left-[340px] w-[calc(100%-340px)] min-h-[100vh] p-[60px] pb-0 absolute">
				<BalanceDetails balance={3000} />
				<AllCardDetails />
			</div>
		</CardDetailsProvider>
	);
};

export default HomeLayout;
