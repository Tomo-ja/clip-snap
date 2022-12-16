import { styled } from '@mui/material/styles'

const StyledModalWrapper = styled('div')(({ theme }) => ({
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: 'white',
	border: '1px solid #000',
	boxShadow: theme.shadows,
	padding: theme.spacing(4),
	borderRadius: 5,

}))

export default StyledModalWrapper