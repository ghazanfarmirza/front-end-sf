import React, { useState } from 'react';
import './MultiButton.css';

interface MultiButtonProps {
	options: string[];
	onSelectionChange?: (selectedOptions: string[]) => void;
}

const MultiButton: React.FC<MultiButtonProps> = ({
	options,
	onSelectionChange,
}) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const toggleOption = (option: string) => {
		let newSelectedOptions = [...selectedOptions];
		if (selectedOptions.includes(option)) {
			newSelectedOptions = newSelectedOptions.filter((item) => item !== option);
		} else {
			newSelectedOptions.push(option);
		}
		setSelectedOptions(newSelectedOptions);
		if (onSelectionChange) {
			onSelectionChange(newSelectedOptions);
		}
	};

	return (
		<div className="flex flex-wrap gap-4 mt-8">
			{options.map((option, index) => (
				<button
					key={index}
					type="button"
					className={`btn-multi shrink-0 ${
						selectedOptions.includes(option) ? 'btn-selected' : 'btn-unselected'
					}`}
					onClick={() => toggleOption(option)}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default MultiButton;
