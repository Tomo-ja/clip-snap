import Link from 'next/link';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box';


const ShortPromotion = () => {

	return (
		<Box width='300px' mr={5}>
			<Stack 
				spacing={5} p={2} pt={5} pb={5}
				sx={{ 
					display: {xs: 'none', sm: 'none', md: 'block'}, 
					boxShadow: '50px 49px 0px 1px #171219',
					borderRadius: 2,
					border: 1,
					borderColor: '#D9D9D9'
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