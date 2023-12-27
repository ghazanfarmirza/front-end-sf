import Heading from '@/components/ui/Heading/Heading';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import { cn } from '@/lib/utils/utils';
import { Check, X } from 'lucide-react';
import { FC } from 'react';
import styles from './VendorProsConsMobile.module.css';

interface VendorProsConsMobileProps {
	prosAndCons: {
		pros: { title: string; description: string; id: string }[];
		cons: { title: string; description: string; id: string }[];
	};
	vendorName?: string;
}

const VendorProsConsMobile: FC<VendorProsConsMobileProps> = ({
	prosAndCons: { pros, cons },
	vendorName,
}) => {
	return (
		<section className={cn(styles.wrapper, 'block lg:hidden')}>
			<div className="container">
				<Heading size={'h3'} variant={'semibold'} className="text-black">
					Pros and Cons of {vendorName}
				</Heading>
				<div className={cn(styles.content, 'flex flex-col gap-6')}>
					<div className={cn(styles.border)}>
						<Paragraph
							className="text-black uppercase"
							size={'lg'}
							variant={'bold'}
						>
							Pros
						</Paragraph>
						<ul className={cn(styles.list)}>
							{pros.map((item) => (
								<li className="flex items-start gap-3" key={item.id}>
									<div className={styles.tick}>
										<Check size={16} className="text-white" />
									</div>
									<div>
										{item.title && (
											<span className="font-bold">{item.title}: </span>
										)}
										{item.description}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div>
						<Paragraph
							className="text-black uppercase"
							size={'lg'}
							variant={'bold'}
						>
							Cons
						</Paragraph>
						<ul className={cn(styles.list)}>
							{cons.map((item) => (
								<li className="flex items-start gap-3" key={item.id}>
									<div className={styles.false}>
										<X size={16} className="text-black" />
									</div>
									<div>
										{item.title && (
											<span className="font-bold">{item.title}: </span>
										)}
										{item.description}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VendorProsConsMobile;
