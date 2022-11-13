import { FC } from 'react'
// @ts-ignore
import { IUser } from '@types/User.interface'
import { SubmitHandler, useForm } from 'react-hook-form'
import CreateInput from '@ui/Input/CreateInput'

const CreateUser: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IUser>()

	const createUser: SubmitHandler<IUser> = data => console.log(data)

	return (
		<form onSubmit={handleSubmit(createUser)}>
			{/*Name*/}
			<CreateInput
				register={register}
				title={'name'}
				type={'string'}
				errors={errors}
			/>
			{/*Last Name*/}
			<CreateInput
				register={register}
				title={'lastName'}
				type={'string'}
				errors={errors}
			/>
			{/*Number*/}
			<CreateInput
				register={register}
				title={'number'}
				type={'number'}
				errors={errors}
			/>
			{/*Password*/}
			<CreateInput
				register={register}
				title={'password'}
				type={'password'}
				errors={errors}
			/>
			{/*Submit*/}
			<input type='submit' value='Submit' className='btn btn-outline-primary' />
		</form>
	)
}

export default CreateUser
