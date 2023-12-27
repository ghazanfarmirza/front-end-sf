import { ArrowLeft } from 'lucide-react';
import { FC } from 'react';
import Paragraph from '../Paragraph/Paragraph';

interface ButtonBackProps {}

const ButtonBack: FC<ButtonBackProps> = () => {
	return (
		<button
			aria-label="back"
			type="button"
			className="flex items-center gap-2 text-black text-semibold"
		>
			<ArrowLeft size={'20'} />
			<Paragraph variant={'semibold'}>Back</Paragraph>
		</button>
	);
};

export default ButtonBack;
