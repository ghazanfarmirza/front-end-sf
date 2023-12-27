'use client';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import styles from './RelatedCollapseBox.module.css';

const RelatedCollapseBox = ({ heading, items, category }) => (
	<Accordion.Root
		className={styles.AccordionRoot}
		type="single"
		defaultValue={`item-1`}
		collapsible
	>
		<Accordion.Item className={styles.AccordionItem} value={`item-1`}>
			<AccordionTrigger>{heading}</AccordionTrigger>
			<AccordionContent>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-12 md:gap-y-2">
					{items?.data?.map((list, index) => (
						<Link
							prefetch={false}
							href={`/${category}/${list.attributes?.slug}`}
							key={index}
							className="text-black hover:font-medium"
						>
							{list.attributes?.name}
						</Link>
					))}
				</div>
			</AccordionContent>
		</Accordion.Item>
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
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
					width={32}
					height={32}
				/>
			</Accordion.Trigger>
		</Accordion.Header>
	)
);

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(
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

export default RelatedCollapseBox;
