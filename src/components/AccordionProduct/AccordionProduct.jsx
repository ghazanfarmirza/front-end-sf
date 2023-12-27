'use client';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AccordionProduct.module.css';

const AccordionProduct = ({ category, lists, id }) => (
	<Accordion.Root className={styles.AccordionRoot} type="single" collapsible>
		<Accordion.Item className={styles.AccordionItem} value={`item-${id}`}>
			<AccordionTrigger>
				<p className="text-left">{category.name}</p>
			</AccordionTrigger>
			<AccordionContent>
				<ul>
					{lists.map((item) => (
						<li key={uuidv4()}>
							<a href={`/${category.slug}/${item.attributes?.slug}`}>
								{item.attributes?.name}
							</a>
						</li>
					))}
				</ul>
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
					width={24}
					height={24}
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

export default AccordionProduct;
