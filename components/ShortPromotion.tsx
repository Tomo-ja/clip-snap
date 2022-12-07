import Link from 'next/link';

import { Stack, Button, Typography} from '@mui/material'
import { Box } from '@mui/system';

const ShortPromotion = () => {

	return (
		<Box width='300px' sx={{width: {sm: '0', md: '300px'}, mr: {sm: 0, md: 5}}}>
			<Stack 
				className='helper'
				spacing={5} p={2} pt={5} pb={5}
				sx={{ 
					display: {xs: 'none', sm: 'none', md: 'block'}, 
					boxShadow: '50px 49px 0px 1px #171219',
					width: '300px',
					borderRadius: 2,
					border: 1,
					borderColor: '#D9D9D9',
				}}
			>
				<Typography
					variant='h5'
					noWrap
					component='h3'
					fontWeight={600}
				>
					Ready to Start?
				</Typography>
				<p>
					You can copy templates that you usually use ad paste without going to Google to find out the solution.<br/>
					Work Smart, not Hard!
				</p>
				<Link href='/introduction' style={{display: 'block'}}>
					<Button variant="outlined" color='warning' fullWidth>Need More Info?</Button>
				</Link>
			</Stack>
		</Box>
	)
}

export default ShortPromotion