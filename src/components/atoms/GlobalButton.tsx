import React from 'react';

const GlobalButton = ({
	label,
	leftImg,
	leftImgClass = '',
	customClass,
	onClick = () => null,
}: {
	label: string;
	leftImg?: string;
	leftImgClass?: string;
	customClass?: string;
	onClick: () => void;
}) => {
	return (
		<button
			className={`bg-[#325BAF] py-2 px-3 rounded-md flex flex-row gap-1 items-center h-fit ${customClass}`}
			onClick={onClick}
		>
			{leftImg ? (
				<img src={leftImg} height={16} width={16} alt={label} className={leftImgClass} />
			) : null}
			<span className="text-white text-sm">{label}</span>
		</button>
	);
};

export default GlobalButton;
