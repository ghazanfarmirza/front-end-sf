import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../../lib/utils/utils';

export const headingVariants = cva('', {
	variants: {
		variant: {
			light: 'font-light',
			regular: 'font-regular',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		size: {
			h6: 'text-base',
			h5: 'text-base lg:text-xl',
			h4: 'text-xl lg:text-2xl',
			h3: 'text-2xl lg:text-3xl',
			h2: 'text-3xl lg:text-4xl',
			h1: 'text-4xl lg:text-5xl',
		},
	},
	defaultVariants: {
		size: 'h6',
		variant: 'bold',
	},
});

interface HeadingProps
	extends HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ size, variant, className, children, ...props }, ref) => {
		switch (size) {
			case 'h1':
				return (
					<h1
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h1>
				);
			case 'h2':
				return (
					<h2
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h2>
				);
			case 'h3':
				return (
					<h3
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h3>
				);
			case 'h4':
				return (
					<h4
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h4>
				);
			case 'h5':
				return (
					<h5
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h5>
				);
			default:
				return (
					<h6
						ref={ref}
						{...props}
						className={cn(headingVariants({ size, variant, className }))}
					>
						{children}
					</h6>
				);
		}
	}
);

Heading.displayName = 'Heading';

export default Heading;
