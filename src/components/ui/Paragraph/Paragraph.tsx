import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../lib/utils/utils';

export const paragraphVariants = cva('', {
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

interface ParagraphProps
	extends HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
	({ size, variant, className, children, ...props }, ref) => {
		return (
			<p
				{...props}
				ref={ref}
				className={cn(paragraphVariants({ variant, size, className }))}
			>
				{children}
			</p>
		);
	}
);

Paragraph.displayName = 'Paragraph';

export default Paragraph;
