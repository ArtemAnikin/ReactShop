import { FC } from 'react'
import CreateInput from '@ui/Input/CreateInput'
import { SubmitHandler, useForm } from 'react-hook-form'

interface ISignInUser {
	login: string
	password: string
}

const SignIn: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ISignInUser>({
		mode: 'onChange'
	})

	const signIn: SubmitHandler<ISignInUser> = data => {
		console.log(data)
		reset()
	}

	return (
		<form onSubmit={handleSubmit(signIn)}>
			{/*Name*/}
			<CreateInput
				register={register}
				title={'login'}
				type={'string'}
				errors={errors}
			/>
			{/*Password*/}
			<CreateInput
				register={register}
				title={'password'}
				type={'password'}
				errors={errors}
			/>

			<input
				type='submit'
				value='Sign In'
				className='btn btn-outline-primary'
			/>
		</form>
	)
}

export default SignIn
