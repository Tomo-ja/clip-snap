import { useRouter } from "next/router"
import { deleteCookie } from 'cookies-next'

import { Typography, Button, Divider } from '@mui/material'

import { StyledModalWrapper } from '../styledComponents'

type Props = {
	handleModalClose: () => void,
}

const ModalForSetting = ({ handleModalClose }: Props) => {
	const router = useRouter()

	const handleDeleteAccount = () => {
		deleteCookie('user-id')
		router.replace('/login')
	}

	const handleLogout = () => {
		// TODO: delete account
		deleteCookie('user-id')
		router.replace('login')

	}


	return (
		<StyledModalWrapper sx={{width: '400px'}}>
			<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
				Setting
			</Typography>
			<Typography component='p' sx={{ mt: 5, mb: 2, textAlign:'center' }}>
				Do you want to switch the account?
			</Typography>
			<Button onClick={handleLogout} variant="outlined" color='inherit' fullWidth>Log out</Button>
			<Divider variant="middle" sx={{my: 5}}/>
			<Typography component='p' sx={{ mt: 5, mb: 2, textAlign:'center' }}>
				Do you want to delete your account?
			</Typography>
			<Button onClick={handleDeleteAccount} variant="contained" color='error' fullWidth>Delete</Button>
			<Button onClick={handleModalClose} variant="outlined" color='inherit' fullWidth sx={{mt: 5}}>Cancel</Button>

		</StyledModalWrapper>
	)
}

export default ModalForSetting