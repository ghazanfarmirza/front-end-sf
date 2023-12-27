'use client';
import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/Heading/Heading';
import MultiButton from '@/components/ui/MultiButton/MultiButton';
import PageProgress from '@/components/ui/PageProgress/PageProgress';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Radio from '@/components/ui/Radio/Radio';
import { getAllIndustries } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { cn } from '@/lib/utils/utils';
import * as Checkbox from '@radix-ui/react-checkbox';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ArrowLeft, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './RecommendationForm.module.css';

interface RecommendationFormProps {}

const RecommendationForm: FC<RecommendationFormProps> = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [budgetRadioValue, setBudgetRadioValue] = useState<any>('');
	const [teamRadioValue, setTeamRadioValue] = useState<any>('');
	const [formValues, setFormValues] = useState<any>({});
	const handleBudgetRadioChange = (value: any) => {
		setBudgetRadioValue(value);
		setFormValues({ ...formValues, budget: value });
	};
	const handleTeamRadioChange = (value: any) => {
		setTeamRadioValue(value);
		setFormValues({ ...formValues, team: value });
	};
	const initialValues = (step: number) => {
		switch (step) {
			case 3:
				return {
					industry: '',
				};

			case 5:
				return {
					firstName: '',
					lastName: '',
					phoneNumber: '',
					email: '',
				};
			default:
				return {};
		}
	};
	const validate = (values: any) => {
		const errors: any = {};
		if (currentStep === 5) {
			if (!values.firstName) {
				errors.firstName = 'Required';
			}
			if (!values.lastName) {
				errors.lastName = 'Required';
			}
			if (!values.phoneNumber) {
				errors.phoneNumber = 'Required';
			}
			if (!values.email) {
				errors.email = 'Required';
			}
		}
		if (currentStep === 3) {
			if (!values.industry) {
				errors.industry = 'Required';
			}
		}
		return errors;
	};
	const handleSubmission = (values: any) => {
		// Merge values and formValues
		const mergedFormValues = { ...formValues, ...values };
		setFormValues(mergedFormValues);

		setCurrentStep(currentStep + 1);
		console.log('Merged form values:', mergedFormValues);

		if (currentStep === 5) {
			// send data to backend
			console.log('Sending data to backend', mergedFormValues);
		}
	};

	const resetForm = () => {
		setCurrentStep(1);
		setBudgetRadioValue('');
		setTeamRadioValue('');
		setFormValues({});
	};

	const [industries, setIndustries] = useState([]);
	useEffect(() => {
		const fetchIndustries = async () => {
			const resp = await getDataFromStrapi(getAllIndustries);
			const industries = resp?.subCategories.data;
			setIndustries(industries);
		};
		fetchIndustries();
	}, []);

	return (
		<Formik
			initialValues={initialValues(currentStep)}
			validate={validate}
			onSubmit={handleSubmission}
		>
			{() => (
				<Form
					id="recommendation-form"
					className={cn(styles.wrapper, 'mt-10 lg:mt-16 bg-white relative')}
				>
					{/* Progress Bar here */}
					<PageProgress progress={Math.floor((currentStep / 6) * 100)} />
					{/* Step 1 */}
					{currentStep === 1 && (
						<div>
							<Heading size={'h4'} variant={'semibold'} className="text-black">
								Which option best describes your budget when looking for a
								software solution?
							</Heading>
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-6">
									<div className="mt-8">
										<Radio
											items={['Basic ($)', 'Standard ($$)', 'Advance ($$$)']}
											onRadioSelect={handleBudgetRadioChange}
											// value={budgetRadioValue}
										/>
									</div>
									<div className="flex items-center justify-start gap-4 mt-8 ">
										{currentStep > 1 && (
											<button
												aria-label="back"
												onClick={() => setCurrentStep(currentStep - 1)}
												type="button"
												className="flex items-center gap-2 text-black text-semibold"
											>
												<ArrowLeft size={'20'} />
												<Paragraph variant={'semibold'}>Back</Paragraph>
											</button>
										)}
										{currentStep < 6 && (
											<Button
												size={'sm'}
												className={'w-auto px-3 ' + styles.nextButton}
												disabled={!budgetRadioValue}
												onClick={() => {
													budgetRadioValue && setCurrentStep(currentStep + 1);
												}}
											>
												Next
											</Button>
										)}
									</div>
								</div>
								<div className="hidden lg:block lg:col-span-6">
									<Image
										src="/images/rec_image.svg"
										alt="resource-img"
										width={280}
										height={280}
										className="ml-auto"
									/>
								</div>
							</div>
							<Paragraph
								size={'small'}
								variant={'semibold'}
								className="hidden mt-10 text-center lg:block text-[#6667f]"
							>
								We’re all for narrowing your search - intelligently
							</Paragraph>
						</div>
					)}
					{/* Step 2 */}
					{currentStep === 2 && (
						<div>
							<Heading size={'h4'} variant={'semibold'} className="text-black">
								How many are in your team?
							</Heading>
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-6">
									<div className="mt-8">
										<Radio
											items={['1 to 20', '20 to 100', '100+']}
											onRadioSelect={handleTeamRadioChange}
											// value={teamRadioValue}
										/>
									</div>
									<div className="flex items-center justify-between gap-4 mt-8 ">
										{currentStep > 1 && (
											<button
												aria-label="back"
												onClick={() => setCurrentStep(currentStep - 1)}
												type="button"
												className="flex items-center gap-2 text-black text-semibold"
											>
												<ArrowLeft size={'20'} />
												<Paragraph variant={'semibold'}>Back</Paragraph>
											</button>
										)}
										{currentStep < 6 && (
											<Button
												className={'max-w-[120px] ' + styles.nextButton}
												onClick={() => setCurrentStep(currentStep + 1)}
												disabled={!teamRadioValue}
											>
												Next
											</Button>
										)}
									</div>
								</div>
								<div className="hidden lg:block lg:col-span-6">
									<Image
										src="/images/rec_image.svg"
										alt="resource-img"
										width={280}
										height={280}
										className="ml-auto"
									/>
								</div>
							</div>
							<Paragraph
								size={'small'}
								variant={'semibold'}
								className="hidden mt-10 text-center lg:block text-[#6667f]"
							>
								Because a broad solution wouldn’t do…
							</Paragraph>
						</div>
					)}
					{/* Step 3 */}
					{currentStep === 3 && (
						<div>
							<Heading size={'h4'} variant={'semibold'} className="text-black">
								Which option best describes your budget when looking for a
								software solution?
							</Heading>
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-6">
									<div className="mt-8">
										<Field
											name="industry"
											as="select"
											className="select_transparent w-full mb-4"
											placeholder="Industry"
										>
											<option value={formValues?.industry}>
												Select Your Industry
											</option>
											{industries.map((industry: any) => (
												<option key={industry.id} value={industry.id}>
													{industry.attributes.name}
												</option>
											))}
										</Field>
										<ErrorMessage
											name="industry"
											component="p"
											className="error-message mb-4"
										/>
									</div>
									<div className="flex items-center justify-between gap-4 mt-8 ">
										{currentStep > 1 && (
											<button
												aria-label="back"
												onClick={() => setCurrentStep(currentStep - 1)}
												type="button"
												className="flex items-center gap-2 text-black text-semibold"
											>
												<ArrowLeft size={'20'} />
												<Paragraph variant={'semibold'}>Back</Paragraph>
											</button>
										)}
										{currentStep < 6 && (
											<Button
												size={'sm'}
												className={'max-w-[120px] ' + styles.nextButton}
												type="submit"
											>
												Next
											</Button>
										)}
									</div>
								</div>
								<div className="hidden lg:block lg:col-span-6">
									<Image
										src="/images/rec_image.svg"
										alt="resource-img"
										width={280}
										height={280}
										className="ml-auto"
									/>
								</div>
							</div>
							<Paragraph
								size={'small'}
								variant={'semibold'}
								className="hidden mt-10 text-center lg:block text-[#66667F]"
							>
								Because a broad solution wouldn’t do…
							</Paragraph>
						</div>
					)}
					{/* Step 4 */}
					{currentStep === 4 && (
						<div>
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-10">
									<Heading
										size={'h4'}
										variant={'semibold'}
										className="text-black"
									>
										Which of these features would you want in your ideal
										Software? (Optional)
									</Heading>
									<MultiButton
										options={[
											'Call Center',
											'Sales Automation',
											'Field Service',
											'Customer Experience',
											'Live Chat',
											'Sales Mapping',
											'Customer Service & Support',
											'Lead Generation Services',
											'Knowledge Management',
										]}
										onSelectionChange={(selected) => {
											setFormValues({ ...formValues, features: selected });
										}}
									/>

									<div className="flex items-center justify-between gap-4 mt-8 ">
										{currentStep > 1 && (
											<button
												aria-label="back"
												onClick={() => setCurrentStep(currentStep - 1)}
												type="button"
												className="flex items-center gap-2 text-black text-semibold"
											>
												<ArrowLeft size={'20'} />
												<Paragraph variant={'semibold'}>Back</Paragraph>
											</button>
										)}
										{currentStep < 6 && (
											<Button
												size={'sm'}
												className={'max-w-[120px] ' + styles.nextButton}
												onClick={() => setCurrentStep(currentStep + 1)}
											>
												Next
											</Button>
										)}
									</div>
								</div>
							</div>
							<Paragraph
								size={'small'}
								variant={'semibold'}
								className="hidden mt-10 text-center lg:block text-[#66667F]"
							>
								Because a broad solution wouldn’t do…
							</Paragraph>
						</div>
					)}
					{/* Step 5 */}
					{currentStep === 5 && (
						<div>
							<Heading size={'h4'} variant={'semibold'} className="text-black">
								How should we reach out to you?
							</Heading>
							<div
								className={cn('grid items-center grid-cols-12', styles.arrows)}
							>
								<div className="col-span-12 lg:col-span-5">
									<div className="mt-8">
										<Field
											name="firstName"
											type="text"
											placeholder="First Name"
											className="input_transparent w-full mb-4"
										/>
										<ErrorMessage
											name="firstName"
											component="p"
											className="error-message mb-4"
										/>
										<Field
											name="lastName"
											type="text"
											placeholder="Last Name"
											className="input_transparent w-full mb-4"
										/>
										<ErrorMessage
											name="lastName"
											component="p"
											className="error-message mb-4"
										/>
										<Field
											name="phoneNumber"
											type="text"
											placeholder="Phone Number"
											className="input_transparent w-full mb-4"
										/>

										<ErrorMessage
											name="phoneNumber"
											component="p"
											className="error-message mb-4"
										/>

										<Field
											name="email"
											type="email"
											placeholder="Email"
											className="input_transparent w-full mb-4"
										/>
										<ErrorMessage
											name="email"
											component="p"
											className="error-message mb-4"
										/>
									</div>
									{Object(validate).entries?.length > 0 && (
										<p className="text-red">Please fill out all fields</p>
									)}
									<div className="flex items-center justify-between gap-4 mt-6 ">
										{currentStep > 1 && (
											<button
												aria-label="back"
												onClick={() => setCurrentStep(currentStep - 1)}
												type="button"
												className="flex items-center gap-2 text-black text-semibold"
											>
												<ArrowLeft size={'20'} />
												<Paragraph variant={'semibold'}>Back</Paragraph>
											</button>
										)}

										{currentStep < 6 && (
											<Button
												size={'sm'}
												className={
													'max-w-[120px] bg-black font-semibold ' +
													styles.emailButton
												}
												type="submit"
											>
												Email Pricing Information
											</Button>
										)}
									</div>
								</div>

								<div className="flex-col items-end hidden gap-4 lg:flex lg:col-span-7">
									<Image
										src="/images/recomendation-data.svg"
										alt="resource-img"
										width={350}
										height={220}
										className="ml-auto"
									/>
									{/* <button className="px-5 py-3 my-4 text-sm font-semibold text-white bg-black border rounded-3xl">
										Email Pricing Info
									</button> */}
								</div>
							</div>
							<div className="col-span-8 flex items-center mt-7">
								<Checkbox.Root className={styles.CheckboxRoot} id="c1" required>
									<Checkbox.Indicator className={styles.CheckboxIndicator}>
										<CheckIcon />
									</Checkbox.Indicator>
								</Checkbox.Root>
								<label className="ml-4" htmlFor="c1">
									Get our best software advice through SMS & Email. See our{' '}
									<Link href="/privacy-policy" className="text-green">
										{' '}
										Privacy Policy
									</Link>
									.
								</label>
							</div>
							<Paragraph
								size={'small'}
								variant={'semibold'}
								className="hidden mt-10 text-center lg:block text-[#66667F]"
							>
								We want to hook you up quick!
							</Paragraph>
						</div>
					)}
					{/* Step 6 */}
					{currentStep === 6 && (
						<div className="py-28">
							<div className="grid grid-cols-12">
								<div className="col-span-12 lg:col-span-6">
									<Heading
										size={'h1'}
										variant={'semibold'}
										className="text-black"
									>
										Thank you!
									</Heading>
									<Paragraph className="mt-4 text-black">
										Our consultants will get in touch with you shortly with the
										information you’ve requested.
									</Paragraph>
									<button
										className="px-5 py-3 my-4 text-sm font-semibold text-white bg-black border rounded-3xl"
										onClick={resetForm}
									>
										Return
									</button>
									<Heading
										size={'h5'}
										variant={'medium'}
										className="mt-6 text-black"
									>
										For urgent enquires
									</Heading>
									<Paragraph className="mt-2 text-black">
										Write to us:
										<span className="underline text-green">
											{' '}
											info@softwarefinder.com
										</span>
									</Paragraph>
								</div>
								<div className="hidden lg:block lg:col-span-6">
									<Image
										src="/images/rec_image.svg"
										alt="resource-img"
										width={280}
										height={280}
										className="ml-auto"
									/>
								</div>
							</div>
						</div>
					)}
				</Form>
			)}
		</Formik>
	);
};

export default RecommendationForm;
