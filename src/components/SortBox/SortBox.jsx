'use client';
import { cn } from '@/lib/utils/utils';
import * as Select from '@radix-ui/react-select';
import Image from 'next/image';
import React from 'react';
import Paragraph from '../ui/Paragraph/Paragraph';
import styles from './SortBox.module.css';

const SortBox = () => {
	return (
		<div className="flex items-center justify-end gap-4 py-6">
			<Paragraph className="text-dark-blue">Sort by:</Paragraph>
			<Select.Root>
				<Select.Trigger className={styles.SelectTrigger} aria-label="sortby">
					<Select.Value placeholder="Select Option" />
					<Select.Icon className={styles.SelectIcon}>
						<Image
							src={'/images/darrow_down.svg'}
							width={13}
							height={6}
							alt="down arrow"
						/>
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content
						position="popper"
						sideOffset={5}
						className={styles.SelectContent}
					>
						<Select.Group>
							<SelectItem value="highest">Highest Rated</SelectItem>
							<SelectItem value="recent">Most Recent</SelectItem>
							<SelectItem value="lowest">Lowest Rated</SelectItem>
						</Select.Group>
					</Select.Content>
				</Select.Portal>
			</Select.Root>
		</div>
	);
};

const SelectItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className={cn(styles.SelectItem, className)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator
					className={styles.SelectItemIndicator}
				></Select.ItemIndicator>
			</Select.Item>
		);
	}
);

SelectItem.displayName = 'SelectItem';

export default SortBox;
