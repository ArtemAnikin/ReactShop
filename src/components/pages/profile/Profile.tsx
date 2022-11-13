import { FC, useState } from 'react'
import CreateUser from './components/CreateUser/CreateUser'
import SignIn from './components/SignIn/SignIn'
import background from './Profile.background.module.scss'
import styles from './Profile.module.scss'

const Profile: FC = () => {
	const [isSignIn, setIsSignIn] = useState(true)

	const changeForm = () => {
		setIsSignIn(!isSignIn)
	}
	return (
		<>
			<div className={background.wrapper} />
			<div className={styles.wrapper}>
				<div className={styles.formWrapper}>
					{isSignIn ? <SignIn /> : <CreateUser />}
					<a className={styles.changeForm} onClick={() => changeForm()}>
						{isSignIn ? 'Create profile' : 'Sign In'}
					</a>
				</div>
			</div>
		</>
	)
}

export default Profile
