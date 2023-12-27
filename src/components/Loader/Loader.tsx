'use client';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
	return (
		<div
			className="flex items-center justify-center loader"
			style={{ height: '100vh' }}
		>
			<ThreeDots
				height="125"
				width="125"
				radius="9"
				color="#748f0f"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</div>
	);
};
