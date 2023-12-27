'use client';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from 'lucide-react';
import React from 'react';

import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import styles from './FooterMobileCollapse.module.css';

const FooterMobileNavCollapse = ({ question, answer, id }) => (
	<Accordion.Root
		className={styles.AccordionRoot}
		type="single"
		defaultValue={`item-1`}
		collapsible
	>
		<Accordion.Item className={styles.AccordionItem} value={`item-${id}`}>
			<AccordionTrigger>{question}</AccordionTrigger>
			<AccordionContent>
				{answer.map((item) => (
					<Link
						prefetch={false}
						key={uuidv4()}
						href={
							item.attributes?.categories
								? `/${item.attributes.categories.data[0]?.attributes.slug}/${item.attributes.slug}`
								: `/resources/${item.attributes.slug}`
						}
						className="block font-medium text-white capitalize hover:font-medium text-small"
					>
						{item.attributes?.name || item.attributes?.title}
					</Link>
				))}
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

export default FooterMobileNavCollapse;
