interface FacebookProps {
	className?: string;
}

const Facebook = ({ className }: FacebookProps) => {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
		>
			<path
				d="M32 16.0401C32 7.18596 24.832 0 16 0C7.168 0 0 7.18596 0 16.0401C0 23.8035 5.504 30.2677 12.8 31.7594V20.8521H9.6V16.0401H12.8V12.0301C12.8 8.93434 15.312 6.41604 18.4 6.41604H22.4V11.2281H19.2C18.32 11.2281 17.6 11.9499 17.6 12.8321V16.0401H22.4V20.8521H17.6V32C25.68 31.198 32 24.3649 32 16.0401Z"
				fill="#1877F2"
			/>
		</svg>
	);
};

export default Facebook;
