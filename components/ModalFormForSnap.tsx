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
	const { snapTags, snapValues, handleTagsChange, handleValueChange } = useSnapEditor({snap: null})

	
	return(
		<Dialog maxWidth='md' fullWidth={true} open={modalState === ModalType.CreateSnap ? true : false} scroll='body' onClose={() => handleModalClose()} >
			<DialogContent >
				<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
					{modalState}
				</Typography>
				<Stack spacing={3} my={5} width='100%'>
					<Box>
						<label htmlFor='snap-title'>Snap Name</label>
						<TextField id='snap-title' value={snapValues.title} onChange={handleValueChange('title')} fullWidth variant="outlined" />
					</Box>
					<Box>
						<label htmlFor=''>Tags</label>
						<InputForTag tags={['React', 'HTML', 'CSS']} handleTagsChange={handleTagsChange} selectedTags={snapTags} />
					</Box>
					<Box>
						<label htmlFor='snap-title'>Snap Code</label>
						<TextareaAutosize minRows={8} id='snap-title' value={snapValues.code} onChange={handleValueChange('code')} />
					</Box>
					<Box>
						<label>References</label>
						<IconButton>
							{/* TODO: add function to increase empty string to reference url to display new input field */}
							<AddIcon />
						</IconButton>
						{snapValues.referencesUrl.map(url => 
							// TODO: handlechange don't wark cuz references url is array
							<TextField key={url} value={url} onChange={handleValueChange('referencesUrl')} fullWidth variant="outlined" />
						)}
						<TextField id='snap-title' value={snapValues.title} onChange={() => handleValueChange('title')} fullWidth variant="outlined" />
					</Box>
					<Box>
						<label htmlFor='snap-description'>Description</label>
						<TextField id='snap-description' multiline rows={5} value={snapValues.description} onChange={handleValueChange('description')} fullWidth variant="outlined" />
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