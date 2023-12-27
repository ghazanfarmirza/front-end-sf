'use client';
import { Loader } from '@/components/Loader/Loader';
import { useAppDispatch } from '@/lib/hooks/hooks';
import { fetchFooterData } from '@/redux/features/footerSlice';
import { RootState } from '@/redux/store';
import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Dynamic imports for Footer components
const Footer = dynamic(() => import('@/components/Footer/Footer'));
const FooterMobile = dynamic(
	() => import('@/components/FooterMobile/FooterMobile')
);

interface FooterMobileProps {}

const FooterContainer: FC<FooterMobileProps> = () => {
	const dispatch = useAppDispatch();
	const footerResources = useSelector(
		(root: RootState) => root.footer.footerResources
	);
	const footerSoftwares = useSelector(
		(root: RootState) => root.footer.footerSoftwares
	);
	const isLoading = useSelector((root: RootState) => root.footer.isLoading);

	useEffect(() => {
		dispatch(fetchFooterData());
	}, [dispatch]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Footer topResources={footerResources} topSoftwares={footerSoftwares} />
			<FooterMobile
				topResources={footerResources}
				topSoftwares={footerSoftwares}
			/>
		</>
	);
};

export default FooterContainer;
