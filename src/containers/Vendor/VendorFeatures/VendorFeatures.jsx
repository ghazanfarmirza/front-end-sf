'use client';
import Heading from '@/components/ui/Heading/Heading';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import { forwardRef } from 'react';
import styles from './VendorFeatures.module.css';

const VendorFeatures = ({ list, name }) => {
	if (list.some((item) => item.feature_status === true) === false) return null;
	return (
		<section>
			<Heading size={'h3'} variant={'semibold'} className="text-black mb-8">
				{name} Features
			</Heading>
			<Accordion.Root
				className={styles.AccordionRoot}
				type="single"
				defaultValue={`item-1`}
				collapsible
			>
				{list?.map(
					(item) =>
						item.feature_status === true && (
							<Accordion.Item
								key={item.id}
								className={styles.AccordionItem}
								value={`item-${item.id}`}
							>
								<AccordionTrigger>{item.feature_name}</AccordionTrigger>
								<AccordionContent>{item.feature_description}</AccordionContent>
							</Accordion.Item>
						)
				)}
			</Accordion.Root>
		</section>
	);
};

const AccordionTrigger = forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className={styles.AccordionHeader}>
			<Accordion.Trigger
				className={classNames(styles.AccordionTrigger, className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon
					className={styles.AccordionChevron}
					aria-hidden
					width={24}
					height={24}
				/>
			</Accordion.Trigger>
		</Accordion.Header>
	)
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames(styles.AccordionContent, className)}
			{...props}
			ref={forwardedRef}
		>
			<div className={styles.AccordionContentText}>{children}</div>
		</Accordion.Content>
	)
);

AccordionContent.displayName = 'AccordionContent';

export default VendorFeatures;
