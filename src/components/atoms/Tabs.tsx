import React, { useState } from 'react';

const Tabs = ({
	tabsData = ['My debit cards', 'All company cards'],
	onTabSelect,
}: {
	tabsData?: string[];
	onTabSelect?: (selectedTab: string) => void;
}) => {
	const [selectedTab, setSelectedTab] = useState('My debit cards');
	return (
		<div className="flex flex-row gap-8 mt-[34px] mb-4">
			{tabsData.map((tab: string) => (
				<button
					key={tab}
					className={`h-6 py-1 flex justify-center items-center ${
						selectedTab == tab && 'border-b-[#23CEFD] border-b-2'
					}`}
				>
					<span
						className={`text-sm font-medium ${
							selectedTab == tab ? 'opacity-100' : 'opacity-30'
						}`}
					>
						{tab}
					</span>
				</button>
			))}
		</div>
	);
};

export default Tabs;
