import { FC, HTMLInputTypeAttribute } from 'react'

interface ICreateInputProps {
	errors: any
	register: any
	title: string
	type: HTMLInputTypeAttribute | undefined
}

const CreateInput: FC<ICreateInputProps> = ({
	register,
	title,
	type,
	errors
}) => {
	return (
		<>
			<div className='form-floating mb-3'>
				<input
					placeholder={title}
					type={type}
					className='form-control'
					id={title}
					{...register(`${title}`, { required: `error ${title}` })}
				/>
				<label htmlFor={title}>{title}*</label>
			</div>
			{errors[`${title}`] && <span>{errors[`${title}`].message}</span>}
		</>
	)
}

export default CreateInput
