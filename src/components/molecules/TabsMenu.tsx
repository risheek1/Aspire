import React from 'react';
import logo from '../../images/logo.svg';
import Home from '../../images/Home.svg';
import Cards from '../../images/Card.svg';
import Payments from '../../images/Payments.svg';
import Credit from '../../images/Credit.svg';
import Settings from '../../images/Account.svg';
const tabsData = [
	{
		img: Home,
		label: 'Home',
	},
	{
		img: Cards,
		label: 'Cards',
	},
	{
		img: Payments,
		label: 'Payments',
	},
	{
		img: Credit,
		label: 'Credit',
	},
	{
		img: Settings,
		label: 'Settings',
	},
];
const selectedTab = 'Cards';
export default function Menu() {
	return (
		<div className="left-0 absolute w-[340px] bg-[#0C365A] h-full p-12 flex flex-col gap-10 items-center">
			<div className="flex flex-col gap-5 w-full items-start">
				<img src={logo} height={35} width={125} alt="Aspire" />
				<span className="text-sm text-white opacity-30 text-left">
					Trusted way of banking for 3,000+ SMEs and startups in Singapore
				</span>
			</div>

			<div className="flex flex-col gap-[60px] mt-[60px] w-full">
				{tabsData.map((tab: { img: string; label: string }) => (
					<button key={tab.label} className="flex flex-row gap-4 items-center">
						<img src={tab.img} alt={tab.label} height={24} width={24} />
						<span
							className={`text-base  ${
								selectedTab == tab.label ? 'text-[#01D167]' : 'text-white'
							}`}
						>
							{tab.label}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}
