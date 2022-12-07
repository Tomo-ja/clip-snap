import React from 'react'
import { Header, ShortPromotion, UserEntryForm } from '../components'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { display } from '@mui/system'

import { FormType } from '../helpers/enums'

const SignIn = () => {
	return (
		<div>
			<Header />
			<Container maxWidth='md' sx={{position: 'relative', top: { xs: '54px', sm: '64px'}, display: 'flex'}}>
				<ShortPromotion />
				<UserEntryForm formType={FormType.SignIn}/>
			</Container>
		</div>
	)
}

export default SignIn