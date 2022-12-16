import React from 'react'
import { Stack, TextField, TextareaAutosize, Typography, Button, Box, Dialog, DialogActions, DialogContent } from '@mui/material'

import { modalSupportInfoProvider } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { Snap } from '../helpers/typesLibrary'

type Props = {
	snapValues: Snap,
	handleValueChange: (prop: keyof Snap) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void ,
	handleEditorState: (modalType?: ModalType) => void,
	editorState: ModalType | null
}

const ModalFormForSnap = ({snapValues, handleValueChange, handleEditorState, editorState }: Props) => {

	const { buttonText } = modalSupportInfoProvider(editorState)
	
	return(
		<Dialog maxWidth='md' fullWidth={true} open={editorState ? true : false} scroll='body' onClose={() => handleEditorState()}  >
			<DialogContent >
				<Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
					{editorState}
				</Typography>
				<Stack spacing={3} my={5} width='100%'>
					<Box>
						<label htmlFor='snap-title'>Snap Name</label>
						<TextField id='snap-title' value={snapValues.title} onChange={handleValueChange('title')} fullWidth variant="outlined" />
					</Box>
					<Box>
						<label htmlFor='snap-title'>Tags</label>
						{/* // TODO: handlechange don't wark cuz references url is array */}
						<TextField id='snap-title' value={snapValues.tags} onChange={() => handleValueChange('title')} fullWidth variant="outlined" />
					</Box>
					<Box>
						<label htmlFor='snap-title'>Snap Code</label>
						<TextareaAutosize minRows={8} id='snap-title' value={snapValues.code} onChange={handleValueChange('code')} />
					</Box>
					<Box>
						<label>References</label>
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
					<Button onClick={() => handleEditorState()} variant="outlined" color='inherit'>Cancel</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)

}

export default ModalFormForSnap