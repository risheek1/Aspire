export type TransactionType = {
	name: string;
	amount: number;
	date: string;
};

export type CardType = {
	cardHolderName: string;
	expiryDate: string;
	cvv: string;
	cardNumber: string;
	isFrozen: boolean;
	transactions: TransactionType[];
};
