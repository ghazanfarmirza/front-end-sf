//loader component for loading screen
'use client';
import Header from '@/components/Header/Header';
import { Loader } from '@/components/Loader/Loader';

export default function Loading() {
	return (
		<div>
			<Header sticky={true} />
			<Loader />
		</div>
	);
}
