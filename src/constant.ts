export const sampleApiResponse = {
	balance: 3000,
	debitCards: [
		{
			cardHolderName: 'Mark Cuban',
			expiryDate: '12/20',
			cvv: '234',
			cardNumber: '4339 2399 1299 2384',
			isFrozen: false,
			transactions: [
				{
					name: 'Hamleys',
					amount: 300,
					date: '20 May 2020',
				},
				{
					name: 'Hamleys',
					amount: -300,
					date: '20 May 2020',
				},
				{
					name: 'Hamleys',
					amount: -300,
					date: '20 May 2020',
				},
				{
					name: 'Amazon',
					amount: -300,
					date: '20 May 2020',
				},
				{
					name: 'Airbnb',
					amount: -300,
					date: '20 May 2020',
				},
			],
		},
		{
			cardHolderName: 'Mark Henry',
			expiryDate: '06/24',
			cvv: '214',
			cardNumber: '4332 1399 1799 2384',
			isFrozen: false,
			transactions: [
				{
					name: 'Zara',
					amount: 2300,
					date: '20 May 2020',
				},
				{
					name: 'Amazon',
					amount: -300,
					date: '20 May 2020',
				},
				{
					name: 'Hamleys',
					amount: -300,
					date: '20 May 2020',
				},
			],
		},
		{
			cardHolderName: 'Elon Musk',
			expiryDate: '08/30',
			cvv: '198',
			cardNumber: '7332 5399 1299 2184',
			isFrozen: false,
			transactions: [
				{
					name: 'Flipkart',
					amount: 300,
					date: '20 May 2020',
				},
				{
					name: 'Bill',
					amount: -300,
					date: '20 May 2020',
				},
				{
					name: 'Airbnb',
					amount: -300,
					date: '20 May 2020',
				},
			],
		},
	],
};
export const NUMBER_REGEX = /^\d{16}$/;
