import { styled } from '@mui/material/styles'

const StyledModal = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	backgroundColor: 'background.paper',
	border: '2px solid #000',
	boxShadow: theme.shadows,
	padding: theme.spacing(4)
}))

export default StyledModal