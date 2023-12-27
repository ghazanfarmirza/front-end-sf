import { FC } from 'react';
import Heading from '../../ui/Heading/Heading';
import Paragraph from '../../ui/Paragraph/Paragraph';
import styles from './FillArticleBox.module.css';

interface FillArticleBoxProps {}

const FillArticleBox: FC<FillArticleBoxProps> = () => {
	return (
		<div className={styles.box}>
			<Heading size={'h5'} variant={'semibold'} className="text-black">
				Ac amet id aliquet donec pellentesque duis id. Faucibus nibh arcu id?
			</Heading>
			<Paragraph className="mt-10 text-black">
				Ante porttitor elementum faucibus bibendum suspendisse nascetur
				sagittis. Ullamcorper facilisis proin magna ut est mus sed morbi at.
				Risus sit morbi at magna natoque sit sit sed eget.
			</Paragraph>
			<ul className="pl-5 mt-2 list-disc">
				<li>
					<a href="#" className="text-sm font-semibold text-blue">
						Id lorem facilisi at iaculis vestibulum amet sed adipiscing amet.
					</a>
				</li>
				<li>
					<a href="#" className="text-sm font-semibold text-blue">
						Id lorem facilisi at iaculis vestibulum amet sed adipiscing amet.
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FillArticleBox;
