import React from 'react'
import { Stack, TextField, TextareaAutosize, Typography, Button, IconButton, Box, Dialog, DialogActions, DialogContent } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

import { InputForTag } from '../components'

import useSnapEditor from '../customHooks/useSnapEditor';
import { modalSupportInfoProvider } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { Snap } from '../helpers/typesLibrary'

type Props = {
	handleModalClose: (modalType?: ModalType) => void,
	modalState: ModalType | null,
}

const ModalFormForSnap = ({ modalState, handleModalClose }: Props) => {

	const { buttonText } = modalSupportInfoProvider(modalState)
	const { snapTags, snapValues, handleTagsChange, handleValueChange, addReferenceURLField, handleURLChange } = useSnapEditor({snap: null})

	
	return(
		<Dialog maxWidth='md' fullWidth={true} open={modalState === ModalType.CreateSnap ? true : false} scroll='body' onClose={() => handleModalClose()} >
			<DialogContent >
				<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
					{modalState}
				</Typography>
				<Stack spacing={3} my={5} width='100%'>
					<Box>
						<label style={{marginBottom: '8px', display: 'inline-block'}}>Snap Name</label>
						<TextField value={snapValues.title} onChange={handleValueChange('title')} fullWidth variant="outlined" />
					</Box>
					<Box>
						<label style={{marginBottom: '8px', display: 'inline-block'}}>Tags</label>
						<InputForTag tags={['React', 'HTML', 'CSS']} handleTagsChange={handleTagsChange} selectedTags={snapTags} />
					</Box>
					<Box>
						<label style={{marginBottom: '8px', display: 'inline-block'}}>Snap Code</label>
						<TextareaAutosize minRows={8} value={snapValues.code} onChange={handleValueChange('code')} />
					</Box>
					<Box>
						<label style={{marginBottom: '8px', display: 'inline-block'}}>References</label>
						<IconButton onClick={addReferenceURLField}>
							<AddIcon />
						</IconButton>
						{snapValues.referencesUrl.map((url, index) => 
							<TextField key={index} value={url} onChange={handleURLChange(index)} fullWidth variant="outlined" sx={{mb: 1}}/>
						)}
					</Box>
					<Box>
						<label style={{marginBottom: '8px', display: 'inline-block'}}>Description</label>
						<TextField multiline rows={5} value={snapValues.description} onChange={handleValueChange('description')} fullWidth variant="outlined" />
					</Box>
				</Stack>
				<DialogActions>
					<Button variant="contained" color='warning'>{buttonText}</Button>
					<Button onClick={() => handleModalClose()} variant="outlined" color='inherit'>Cancel</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)

}

export default ModalFormForSnap