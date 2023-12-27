import Link from 'next/link';
import { FC } from 'react';
import styles from './BreadCrumb.module.css';
interface BreadCrumbProps {
	item1?: {
		name: string;
		link: string;
	};
	item2?:
		| {
				name: string;
				link: string;
		  }
		| string;
	item3?: string;
}

const BreadCrumb: FC<BreadCrumbProps> = ({ item1, item2, item3 }) => {
	return (
		<div className="hidden lg:block">
			<div className="container">
				<ul className={styles.bread_crumb + ' flex items-center gap-6 py-4'}>
					<li>
						<Link
							prefetch={false}
							href="/"
							className="text-sm hover:underline font-light text-black"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							prefetch={false}
							href={`/${item1?.link}`}
							className="text-sm hover:underline font-light text-black capitalize"
						>
							{item1?.name}
						</Link>
					</li>
					{item2 &&
						(typeof item2 === 'string' ? (
							<li>
								<p className="text-sm font-light text-black capitalize">
									{item2}
								</p>
							</li>
						) : (
							<li>
								<Link
									prefetch={false}
									href={`/${item1?.link}/${item2.link}`}
									className="text-sm hover:underline font-light text-black capitalize"
								>
									{item2.name}
								</Link>
							</li>
						))}
					{item3 && (
						<li>
							<p className="text-sm font-light text-black">{item3}</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default BreadCrumb;
