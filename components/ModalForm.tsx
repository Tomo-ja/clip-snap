import { Stack, TextField, Typography, Button } from '@mui/material'

import { StyledModalWrapper } from '../styledComponents'

import useModalForm from "../customHooks/useModalForm"
import { ModalType } from '../helpers/enums'
import { modalFormDescriptionNeeded, modalSupportInfoProvider } from '../helpers/function'

type Props = {
	name?: string,
	description?: string,
  handleModalClose: () => void,
	modalType: ModalType | null
}

const ModalForm = ({ name, description, modalType, handleModalClose }: Props) => {

	const { buttonText, formNeeded } = modalSupportInfoProvider(modalType)
	const { formValues, handleChange, handleFormSubmit } = useModalForm({name, description, modalType})

	const handleSubmit = async () => {
		if (formValues.name === '') return
		const response = await handleFormSubmit()
		if (!response) {
			console.error('something wrong. try again')
		}
		handleModalClose()
	}

	const handleDelete = async () => {
		const response = await handleFormSubmit()
		if (!response) {
			console.error('something wrong. try again')
		}
		handleModalClose()
	}


	if(!formNeeded) {
		return (
			<StyledModalWrapper sx={{width: '400px'}}>
				<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
					{modalType}
				</Typography>
				<Typography sx={{ mt: 5, mb: 5, textAlign:'center' }}>
					Are you sure to delete it?
				</Typography>
				<Stack direction='row' spacing={2} justifyContent='center'>
					<Button onClick={handleDelete} variant="contained" color='error'>Delete</Button>
					<Button onClick={handleModalClose} variant="outlined" color='inherit'>Cancel</Button>
			</Stack>
			</StyledModalWrapper>
		)
	}

	return (
		<StyledModalWrapper sx={{width: '400px'}} >
			<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
				{modalType}
			</Typography>
			<Stack spacing={3} my={5} width='100%'>
				<TextField value={formValues.name} onChange={handleChange('name')} fullWidth label="Name" variant="outlined" />
				{ modalFormDescriptionNeeded(modalType) && 
					<TextField 
						value={formValues.description} 
						onChange={handleChange('description')} 
						fullWidth 
						label="Description" 
						variant="outlined" 
						multiline
						rows={4}
					/>
				}
			</Stack>
			<Stack direction='row' spacing={2} justifyContent='center'>
				<Button onClick={handleSubmit} variant="contained" color='warning'>{buttonText}</Button>
				<Button onClick={handleModalClose} variant="outlined" color='inherit'>Cancel</Button>
			</Stack>
		</StyledModalWrapper>
	)
}

export default ModalForm
