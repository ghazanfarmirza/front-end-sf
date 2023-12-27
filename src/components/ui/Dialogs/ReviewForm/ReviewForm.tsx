'use client';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';
import { getAllIndustries } from '@/lib/gql';
import {
	getDataFromStrapi,
	postFormData,
} from '@/lib/networkCalls/strapiFunctions';
import { cn } from '@/lib/utils/utils';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import InputProgress from '../../Input/InputProgress/InputProgress';
import InputRating from '../../Input/InputRating/InputRating';
import Paragraph from '../../Paragraph/Paragraph';
import styles from './ReviewForm.module.css';
interface ReviewFormProps {
	open: boolean;
	onClose: () => void;
	vendor: {
		id: number;
		name: string;
		logo: { image_url: string; title: string };
	};
}

const ReviewForm: FC<ReviewFormProps> = ({
	open,
	onClose,
	vendor: vendorInfo,
}) => {
	const vendorLogo =
		process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + vendorInfo.logo.image_url;
	const [isClient, setIsClient] = useState(false);
	const [currentStep, setCurrentStep] = useState(1);
	const validate = (values: any) => {
		let errors: FormikValues = {};
		if (currentStep === 1) {
			if (!values.author) {
				errors.author = 'Name is required';
			}
			if (!values.company) {
				errors.company = 'Organization is required';
			}
			if (!values.industry) {
				errors.industry = 'Industry is required';
			}
			if (!values.time_used) {
				errors.time_used = 'Time Used is required';
			}
			if (!values.team_size) {
				errors.team_size = 'Number of Employees is required';
			}
		}
		if (currentStep === 2) {
			if (!values.title) {
				errors.title = 'Title is required';
			}
			if (!values.pros_text) {
				errors.pros_text = 'Pros is required';
			}
			if (!values.cons_text) {
				errors.cons_text = 'Cons is required';
			}
		}

		return errors;
	};
	const [formValues, setFormValues] = useState({});
	const [sliderValues, setSliderValues] = useState({
		ease_of_use: 5,
		value_for_money: 5,
		customer_support: 5,
		functionality: 5,
		rating: 5,
	});
	const handleSliderChange = (key: string, newValue: any) => {
		newValue = Math.round(newValue);
		setSliderValues({ ...sliderValues, [key]: newValue[0] || newValue });
	};
	const [industries, setIndustries] = useState([]);
	useEffect(() => {
		const fetchIndustries = async () => {
			const resp = await getDataFromStrapi(getAllIndustries);
			const industries = resp?.subCategories.data;
			setIndustries(industries);
		};
		fetchIndustries();
		setIsClient(true);
	}, []);

	//set initial values based on step like first it will have first step values and so on
	const initialValues = (step: number) => {
		switch (step) {
			case 1:
				return {
					author: '',
					company: '',
					Industry: '',
					time_used: '',
					team_size: '',
				};
			case 2:
				return {
					title: '',
					pros_text: '',
					cons_text: '',
				};
			default:
				return {};
		}
	};

	const validateFields = async (values: any) => {
		// Handle form submission here
		console.log(values);
		setFormValues({ ...formValues, ...values });
		if (currentStep === 3) {
			setFormValues({ ...formValues, ...sliderValues });
			return;
		}
		setCurrentStep(currentStep + 1);
	};
	async function handleFormSubmission() {
		const otherValues = {
			added_on: new Date(),
			creator: 'External',
			vendor: vendorInfo.id,
		};
		const mergedValues = { ...formValues, ...sliderValues, ...otherValues };
		setFormValues(mergedValues);
		const resp = await postFormData('/api/reviews', mergedValues);
		if (resp) {
			setCurrentStep(currentStep + 1);
		}
	}

	return (
		<Dialog.Root open={open}>
			{isClient && (
				<Dialog.Portal>
					<Dialog.Overlay className={styles.DialogOverlay} />
					<Dialog.Content className={styles.DialogContent}>
						<Formik
							initialValues={initialValues(currentStep)}
							validate={validate}
							onSubmit={validateFields}
						>
							{({ isSubmitting }) => (
								<Form id="strapi-form">
									{/* Step 1 */}
									{/* ----------------------------------------- */}
									{currentStep === 1 && (
										<div className="grid grid-cols-1 lg:grid-cols-2">
											<div className={cn(styles.left, 'hidden lg:block')}>
												<Image
													src={vendorLogo}
													alt="hero"
													width={300}
													height={40}
												/>
												<Paragraph
													size={'lg'}
													variant={'medium'}
													className="mb-2 text-black"
												>
													Tell Us about{' '}
													<span className="font-semibold text-green">
														Yourself.
													</span>
												</Paragraph>
												<Image
													src={'/images/review-image.svg'}
													width={600}
													height={600}
													alt="pricing"
													className="mx-auto"
												/>
											</div>
											<div className={styles.right}>
												<Paragraph className="text-white">
													Help your peers make the right decisions by sharing
													your product experience with them.
												</Paragraph>
												<div className="flex flex-col items-start justify-center mt-8">
													<Field
														name="author"
														type="text"
														className="form_input w-full mb-4"
														placeholder="Name"
													/>
													<ErrorMessage
														name="author"
														className="error-message mb-4"
														component="p"
													/>
													<Field
														name="company"
														type="text"
														className="form_input w-full mb-4"
														placeholder="Organization"
													/>
													<ErrorMessage
														name="company"
														className="error-message mb-4"
														component="p"
													/>

													<Field
														name="industry"
														as="select"
														className="form_select w-full mb-4"
														placeholder="Industry"
													>
														<option value="">Select Your Industry</option>
														{industries.map((industry: any) => (
															<option key={industry.id} value={industry.id}>
																{industry.attributes.name}
															</option>
														))}
													</Field>

													<ErrorMessage
														name="industry"
														className="error-message mb-4"
														component="p"
													/>

													<Field
														name="time_used"
														as="select"
														className="form_select w-full mb-4"
													>
														<option value="">Time Used</option>
														<option value="Free Trial">Free Trial</option>
														<option value="Less than 6 months">
															Less than 6 months
														</option>
														<option value="Less than a year">
															Less than a year
														</option>
														<option value="More than a year">
															More than a year
														</option>
													</Field>
													<ErrorMessage
														name="time_used"
														className="error-message mb-4"
														component="p"
													/>

													<Field
														name="team_size"
														as="select"
														className="form_select w-full mb-4"
														placeholder="Number of Employees"
													>
														<option value="">Number of Employees</option>
														<option value="1-10">1-10</option>
														<option value="11-50">11-50</option>
														<option value="51-100">51-100</option>
														<option value="101-500">101-500</option>
														<option value="500+">500+</option>
													</Field>
													<ErrorMessage
														name="team_size"
														className="error-message mb-4"
														component="p"
													/>
												</div>
												<div className="flex items-center justify-end w-full mt-6">
													{currentStep > 1 && (
														<button
															aria-label="back"
															type="submit"
															className="flex items-center gap-2 text-black text-semibold"
														>
															<ArrowLeft size={'20'} />
															<Paragraph variant={'semibold'}>Back</Paragraph>
														</button>
													)}
													{currentStep < 4 && (
														<Button className="w-20" type="submit">
															Next
														</Button>
													)}
												</div>
											</div>
										</div>
									)}

									{/* Step 2 */}
									{/* ----------------------------------------- */}
									{currentStep === 2 && (
										<div className="grid grid-cols-1 lg:grid-cols-2">
											<div className={cn(styles.left, 'hidden lg:block')}>
												<Image
													src={vendorLogo}
													alt="hero"
													width={300}
													height={40}
												/>
												<Paragraph
													size={'lg'}
													variant={'medium'}
													className="mb-2 text-black"
												>
													How was your experience with the
													<span className="font-semibold text-green">
														{' '}
														vendor?
													</span>
												</Paragraph>
												<Image
													src={'/images/review-image.svg'}
													width={600}
													height={600}
													alt="pricing"
													className="mx-auto"
												/>
											</div>
											<div className={styles.right}>
												<Paragraph className="text-white">
													Help your peers make the right decisions by sharing
													your product experience with them.
												</Paragraph>
												<div className="flex flex-col items-center justify-center mt-8">
													<Field
														name="title"
														type="text"
														className="form_input w-full mb-4"
														placeholder="Title"
													/>
													<ErrorMessage
														name="title"
														className="error-message mb-4"
														component="p"
													/>
													<Field
														name="pros_text"
														type="text"
														className="form_textarea w-full mb-4"
														placeholder="Pros"
													/>
													<ErrorMessage
														name="pros_text"
														className="error-message mb-4"
														component="p"
													/>
													<Field
														name="cons_text"
														type="text"
														className="form_textarea w-full mb-4"
														placeholder="Cons"
													/>
													<ErrorMessage
														name="cons_text"
														className="error-message mb-4"
														component="p"
													/>
												</div>
												<div className="flex items-center justify-between w-full mt-6">
													{currentStep > 1 && (
														<button
															aria-label="back"
															onClick={() => setCurrentStep(currentStep - 1)}
															type="button"
															className="flex items-center gap-2 text-white text-semibold"
														>
															<ArrowLeft size={'20'} />
															<Paragraph variant={'semibold'}>Back</Paragraph>
														</button>
													)}
													{currentStep < 4 && (
														<Button className="w-20" type="submit">
															Next
														</Button>
													)}
												</div>
											</div>
										</div>
									)}
									{/* Step 3  */}
									{/* ------------------------------------ */}
									{currentStep === 3 && (
										<div className="grid grid-cols-1 lg:grid-cols-2">
											<div className={cn(styles.left, 'hidden lg:block')}>
												<Image
													src={vendorLogo}
													alt="hero"
													width={300}
													height={40}
												/>
												<Paragraph
													size={'lg'}
													variant={'medium'}
													className="mb-2 text-black"
												>
													How was your experience with the
													<span className="font-semibold text-green">
														{' '}
														vendor?
													</span>
												</Paragraph>
												<Image
													src={'/images/review-image.svg'}
													width={600}
													height={600}
													alt="pricing"
													className="mx-auto"
												/>
											</div>
											<div className={styles.right}>
												<Paragraph className="text-white">
													Help your peers make the right decisions by sharing
													your product experience with them.
												</Paragraph>
												<div className="flex flex-col items-start justify-center mt-8">
													<InputProgress
														title="Ease of use"
														value={sliderValues.ease_of_use}
														onValueChange={(newValue) =>
															handleSliderChange('ease_of_use', newValue)
														}
													/>
													<InputProgress
														title="Value for money"
														value={sliderValues.value_for_money}
														onValueChange={(newValue) =>
															handleSliderChange('value_for_money', newValue)
														}
													/>
													<InputProgress
														title="Customer Support"
														value={sliderValues.customer_support}
														onValueChange={(newValue) =>
															handleSliderChange('customer_support', newValue)
														}
													/>
													<InputProgress
														title="Functionality"
														value={sliderValues.functionality}
														onValueChange={(newValue) =>
															handleSliderChange('functionality', newValue)
														}
													/>
													<Paragraph className="py-4 text-left text-white">
														How would you rate this vendor over all?
													</Paragraph>
													<InputRating
														onRatingChange={(rating) =>
															handleSliderChange('rating', rating)
														}
													/>
												</div>
												<div className="flex items-center justify-between w-full mt-6">
													{currentStep > 1 && (
														<button
															aria-label="back"
															onClick={() => setCurrentStep(currentStep - 1)}
															type="button"
															className="flex items-center gap-2 text-white text-semibold"
														>
															<ArrowLeft size={'20'} />
															<Paragraph variant={'semibold'}>Back</Paragraph>
														</button>
													)}
													{currentStep < 4 &&
														((isSubmitting && <LoadingSpinner />) || (
															<Button
																className="w-20"
																onClick={handleFormSubmission}
															>
																Submit
															</Button>
														))}
												</div>
											</div>
										</div>
									)}

									{/* Step 4 */}
									{/* ----------------------------------- */}
									{currentStep === 4 && (
										<div
											className={cn(
												styles.box,
												'flex flex-col items-center justify-center'
											)}
										>
											<Image
												src={vendorLogo}
												alt="hero"
												width={300}
												height={40}
											/>
											<Heading size="h4" variant={'semibold'} className="mt-2">
												Thanks for your feedback
											</Heading>
											<Paragraph
												size={'lg'}
												variant={'medium'}
												className="mt-3 text-center text-black"
											>
												We're constantly trying to improve our services, so your
												input is valuable.
											</Paragraph>
											<Image
												src={'/images/review-image.svg'}
												width={500}
												height={450}
												alt="pricing"
												className="mx-auto"
												style={{ height: '480px' }}
											/>
										</div>
									)}
								</Form>
							)}
						</Formik>

						{currentStep === 4 ? (
							<Dialog.Close asChild>
								<button
									className={styles.IconButton1}
									aria-label="Close"
									onClick={onClose}
								>
									<Cross2Icon />
								</button>
							</Dialog.Close>
						) : (
							<Dialog.Close asChild>
								<button
									className={styles.IconButton}
									aria-label="Close"
									onClick={onClose}
								>
									<Cross2Icon />
								</button>
							</Dialog.Close>
						)}
					</Dialog.Content>
				</Dialog.Portal>
			)}
		</Dialog.Root>
	);
};

export default ReviewForm;
