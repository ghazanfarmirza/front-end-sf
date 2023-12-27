import { FC, useState } from 'react';
import styles from './SearchTabs.module.css';

interface SearchTabsProps {
	onTabChange: (tab: string) => void;
}

const SearchTabs: FC<SearchTabsProps> = ({ onTabChange }) => {
	const [activeTab, setActiveTab] = useState('product');

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
		onTabChange(tab); // Call the callback function with the active tab
	};

	return (
		<div className="mb-8 mt-14">
			<ul className="flex items-center gap-4">
				<li
					className={styles.search_tab}
					{...(activeTab == 'product' ? { 'data-type': 'active' } : {})}
				>
					<button onClick={() => handleTabClick('product')}>Product</button>
				</li>
				<li
					className={styles.search_tab}
					{...(activeTab == 'category' ? { 'data-type': 'active' } : {})}
				>
					<button onClick={() => handleTabClick('category')}>Category</button>
				</li>
			</ul>
		</div>
	);
};

export default SearchTabs;
