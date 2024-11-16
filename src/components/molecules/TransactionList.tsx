import { useState } from 'react';
import transfer from '../../images/icons/Transfer.svg';
import expand from '../../images/icons/down-arrow.svg';
import { TransactionType } from '../../types';
import storage from '../../images/file-storage.svg';
import arrow from '../../images/icons/next.svg';
import cardLogo from '../../images/icons/business-and-finance.svg';

const TransactionList = ({ transactionValues }: { transactionValues: TransactionType[] }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<>
			<div className="border border-border rounded-md border-b-0">
				<button
					className="flex flex-row justify-between w-full p-6 items-center bg-blue-100 border-b border-b-blue-100"
					onClick={() => {
						setIsExpanded(!isExpanded);
					}}
				>
					<div className="flex flex-row gap-3 items-center">
						<img height={24} width={24} src={transfer} alt="Transfer Icon" />
						<span className="text-sm">Recent Transactions</span>
					</div>
					<img
						height={20}
						width={20}
						alt="Expand"
						src={expand}
						className={`${isExpanded ? 'rotate-180' : ''}`}
					/>
				</button>
				{isExpanded ? (
					<div className="border-border border-b rounded-b-md bg-white">
						<div className="flex flex-col py-3 px-6 slideOut">
							{transactionValues.slice(0, 4).map((transaction) => (
								<div key={transaction.name} className="py-4 flex flex-col">
									<div className="flex flex-row justify-between">
										<div className="flex flex-row gap-3">
											<div className="rounded-full bg-blue-100 flex items-center justify-center w-12 h-12">
												<img
													src={storage}
													height={16}
													width={16}
													alt="Transaction Logo"
												/>
											</div>
											<div className="flex flex-col gap-1">
												<span className="text-sm font-semibold text-left">
													{transaction.name}
												</span>
												<span className="text-xs text-grey text-left">
													{transaction.date}
												</span>
											</div>
										</div>
										<div className="flex flex-row gap-3 items-center h-5">
											<span
												className={`${
													transaction.amount > 0
														? 'text-primary'
														: 'text-black'
												} font-bold text-sm`}
											>
												{transaction.amount > 0 ? '+' : '-'} S${' '}
												{transaction.amount.toLocaleString('en-EN')}
											</span>
											<img src={arrow} height={12} width={6} alt="Next" />
										</div>
									</div>
									<div className="flex gap-2 items-center flex-row pl-[60px]">
										<div className="rounded-3xl bg-blue-200 w-6 h-5 flex items-center justify-center">
											<img
												height={8}
												width={10}
												alt="Credit Card"
												src={cardLogo}
											/>
										</div>
										<span className="text-xs text-blue-200 font-semibold">
											{transaction.amount > 0 ? 'Refund on ' : 'Charged to '}{' '}
											debit card
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				) : null}
			</div>
			{isExpanded && transactionValues.length >= 4 ? (
				<div className="bg-primary-100  py-4 flex items-center justify-center -mt-7 -z-[1] rounded-b-md border border-primary-200 border-t-0">
					<span className="text-primary text-sm font-medium">View all transactions</span>
				</div>
			) : null}
		</>
	);
};

export default TransactionList;
