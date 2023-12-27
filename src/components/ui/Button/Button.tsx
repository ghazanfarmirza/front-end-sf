import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

export const buttonVariants = cva(
	'w-full text-center justify-center md:justify-start md:w-auto font-medium rounded-full flex items-center gap-3 transition-effect',
	{
		variants: {
			variant: {
				green: 'text-white bg-green hover:bg-dark-green',
				darkGreen: 'text-white bg-dark-green',
				transparent: 'text-white bg-transparent border-green solid border',
				blue: 'text-white bg-dark-blue',
				whiteGreen:
					'bg-white text-dark-blue outline outline-green outline-1 hover:outline-2',
				whiteBlue:
					'bg-white text-dark-blue outline outline-blue outline-1 hover:outline-2',
				black: 'text-white bg-black hover:bg-dark-blue',
			},
			size: {
				sm: 'text-sm py-2 px-2 md:px-7',
				default: 'text-sm py-3.5 px-2 md:px-7',
				lg: 'text-base py-4 px-8 md:px-12',
			},
		},
		defaultVariants: {
			variant: 'green',
			size: 'default',
		},
	}
);

interface ButtonProps
	extends HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	type?: 'button' | 'submit' | 'reset'; // Add the type prop
	disabled?: boolean; // Add the disabled prop
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ size, variant, className, children, ...props }, ref) => {
		return (
			<button
				{...props}
				className={buttonVariants({ size, variant, className })}
				ref={ref}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
