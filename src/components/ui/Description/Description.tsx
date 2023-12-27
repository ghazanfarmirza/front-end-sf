'use client';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../lib/utils/utils';
import styles from './Description.module.css';
export const descriptionVariants = cva('', {
	variants: {
		variant: {
			light: 'font-light',
			regular: 'font-regular',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		size: {
			default: 'text-base',
			small: 'text-sm',
			md: 'p2',
			lg: 'p3',
			xs: 'text-small',
		},
	},
	defaultVariants: {
		variant: 'regular',
		size: 'default',
	},
});

interface DescriptionProps
	extends HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof descriptionVariants> {
	showLess?: boolean;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>(
	({ size, variant, className, showLess = false, children, ...props }, ref) => {
		const contentClass = cn(styles.innerContent, {
			[styles.descriptionContainer]: showLess,
		});

		const content = showLess
			? (children as string)?.replace(/<\/?[^>]+(>|$)/g, '')
			: children;

		return (
			<div
				{...props}
				ref={ref}
				className={cn(descriptionVariants({ variant, size, className }))}
			>
				<div className={contentClass + ' text-justify'}>
					{showLess ? (
						content
					) : (
						<div dangerouslySetInnerHTML={{ __html: content as string }} />
					)}
				</div>
			</div>
		);
	}
);

Description.displayName = 'Description';

export default Description;
