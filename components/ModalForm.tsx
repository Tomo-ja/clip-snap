import { Stack, TextField } from '@mui/material'

import useModalForm from "../customHooks/useModalForm"
import { ModalType } from '../helpers/enums'
import { modalFormDescriptionNeeded } from '../helpers/function'

type Props = {
	name?: string,
	description?: string
	modalType: ModalType | null
}

const ModalForm = ({ name, description, modalType }: Props) => {

	const { formValues, handleChange } = useModalForm({name, description})

	return (
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
	)
}

export default ModalForm
