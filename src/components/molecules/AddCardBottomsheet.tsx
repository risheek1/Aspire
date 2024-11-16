import { useContext, useState } from 'react';
import GlobalButton from '../atoms/GlobalButton';
import close from '../../images/icons/close.svg';
import { NUMBER_REGEX } from '../../constant';
import { CardDetailsContext } from '../../providers/CardDetailsProvider';
import moment from 'moment';
const AddCardBottomsheet = ({ closeBottomSheet }: { closeBottomSheet: () => void }) => {
	const [newCardNumber, setNewCardNumber] = useState('');
	const [error, setError] = useState('');
	const { addCard, freezeCard } = useContext(CardDetailsContext);
	const randomDate = moment(
		new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
	).format('MM/YY');
	const onSubmit = () => {
		if (newCardNumber.length < 16) {
			setError('Card Number should be 16 digits');
			return;
		}
		if (!NUMBER_REGEX.test(newCardNumber)) {
			setError('Characters are not allowed');
			return;
		}
		addCard({
			cardHolderName: 'Mark Johnson',
			expiryDate: randomDate,
			cvv: `${Math.floor(100 + Math.random() * 899)}`,
			cardNumber: newCardNumber.match(/.{1,4}/g)?.join(' ') || newCardNumber,
			isFrozen: false,
			transactions: [],
		});
		closeBottomSheet();
	};
	return (
		<div className="overflow-y-auto bg-[rgba(0,0,0,0.5)] overflow-x-hidden fixed z-50 justify-center items-center w-full md:inset-0 h-full">
			<div className="relative p-4 w-full max-w-2xl max-h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
							Add New Card
						</h3>
						<button
							onClick={closeBottomSheet}
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						>
							<img src={close} height={12} width={12} alt="Close" />
						</button>
					</div>
					<div className="flex flex-col gap-5 items-start p-5">
						<span className="text-base ">Card Number</span>
						<input
							type="text"
							onChange={(e) => {
								setError('');
								setNewCardNumber(e.target.value);
							}}
							value={newCardNumber}
							maxLength={16}
							placeholder="1234 1234 1234 1234"
							className={`rounded-md border border-primary-100 w-[calc(100%-40px)] h-10 p-2 outline-none focus:border-primary ${
								error && '!border-red-600'
							}`}
						/>
						{error ? <span className="text-sm text-red-600">{error}</span> : null}
					</div>
					<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
						<GlobalButton label="Save" onClick={onSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddCardBottomsheet;
