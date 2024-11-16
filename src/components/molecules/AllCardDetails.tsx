import React, { useState } from 'react';
import Tabs from '../atoms/Tabs';
import CardView from './CardView';

const AllCardDetails = () => {
	return (
		<div>
			<Tabs />
			<CardView />
		</div>
	);
};

export default AllCardDetails;
