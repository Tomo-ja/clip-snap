import * as React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { StackHorizontally } from '../styledComponents'
import { Modal, ModalFormForSnap } from '../components'
import useModal from '../customHooks/useModal';
import useSnapEditor from '../customHooks/useSnapEditor';
import { ModalType } from '../helpers/enums';


const DashboardHeader = () => {

  const { modalState, handleModalClose, handleModalOpen } = useModal()
	const { snapValues, handleValueChange, handleEditorState, editorState, snapTags, handleTagsChange } = useSnapEditor({modalType: ModalType.CreateSnap})

	return(
		<Box sx={ {flexGrow: 1}} bgcolor={'white'} p={3}>
			<StackHorizontally sx={{ justifyContent: 'space-between' }}>
				<StackHorizontally >
					<FolderIcon  sx={{ fontSize: {sm: '1.5rem', md: '2.1875rem'}, color: '#F0803C'}}/>
					<Typography ml={2} sx={{ typography: { sm: 'h5', md: 'h4' }}}>Folder Title</Typography>
				</StackHorizontally>
				<StackHorizontally >
            <IconButton onClick={() => handleModalOpen(ModalType.UpdateFolder)} size="medium" color="inherit" >
              <BorderColorIcon />
            </IconButton>
            <IconButton onClick={() => handleModalOpen(ModalType.DeleteFolder)} size="medium" color="inherit">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() =>handleEditorState(ModalType.CreateSnap)} size="large" edge="end" color="inherit" >
              <AddCircleIcon fontSize="large" sx={{ color: '#6599F8'}}/>
            </IconButton>
        </StackHorizontally>
			</StackHorizontally>
			<Typography component={'p'} sx={{ color: 'text.secondary' }}>
				Short description of the folder will be here
			</Typography>
      <Modal modalState={modalState} handleModalClose={handleModalClose} />
			<ModalFormForSnap snapTags={snapTags} handleTagsChange={handleTagsChange} snapValues={snapValues} handleValueChange={handleValueChange} handleEditorState={handleEditorState} editorState={editorState} />
		</Box>
	)

}

export default DashboardHeader