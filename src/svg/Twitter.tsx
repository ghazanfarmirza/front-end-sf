interface TwitterProps {
	className?: string;
}

const Twitter = ({ className }: TwitterProps) => {
	return (
		<svg
			className={className}
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="16" cy="16" r="14" fill="white" />
			<path
				d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.9463 7.25L17.6175 14.66L24.5012 24.75H19.4388L14.8025 17.955L9 24.75H7.5L14.1375 16.98L7.5 7.25H12.5625L16.9525 13.6838L22.4462 7.25H23.9463ZM14.8913 16.0962L15.5638 17.065L20.1437 23.665H22.4475L16.8337 15.5775L16.1612 14.6088L11.8438 8.3875H9.54L14.8913 16.0962Z"
				fill="#00000"
			/>
		</svg>
	);
};

export default Twitter;
