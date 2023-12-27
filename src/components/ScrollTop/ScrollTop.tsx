'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollTop() {
	// when clicking a link, user will not scroll to the top of the page if the header is sticky.
	// their current scroll position will persist to the next page.
	// this useEffect is a workaround to 'fix' that behavior.

	const pathname = usePathname();
	useEffect(() => {
		// Check if window object is available (client-side)
		const fullPath = window.location.href;
		if (fullPath.includes('#')) {
			const hash = fullPath.split('#')[1];
			const element = document.getElementById(hash);
			if (element) {
				element.scrollIntoView();
			}
			return;
		}
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}
