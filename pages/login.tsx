import React from 'react'
import { Header, ShortPromotion, UserEntryForm } from '../components'
import { Container } from '@mui/material'

import { FormType } from '../helpers/enums'



const Login = () => {

	return (
		<div>
			<Header />
			<Container maxWidth='md' sx={{position: 'relative', top: { xs: '54px', sm: '64px'}, display: 'flex', alignItems: 'center', marginTop: '100px'}}>
				<ShortPromotion />
				<UserEntryForm formType={FormType.LogIn}/>
			</Container>
		</div>
	)
}

export default Login