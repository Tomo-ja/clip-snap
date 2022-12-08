import * as React from 'react'

import { Box, IconButton, Typography } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { StackHorizontally } from '../styledComponents'


const DashboardHeader = () => {

	return(
		<Box sx={ {flexGrow: 1}} bgcolor={'white'} p={3}>
			<StackHorizontally sx={{ justifyContent: 'space-between' }}>
				<StackHorizontally >
					<FolderIcon  sx={{ fontSize: {sm: '1.5rem', md: '2.1875rem'}, color: '#F0803C'}}/>
					<Typography ml={2} sx={{ typography: { sm: 'h5', md: 'h4' }}}>Folder Title</Typography>
				</StackHorizontally>
				<StackHorizontally >
            <IconButton size="medium" color="inherit" >
              <BorderColorIcon />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <DeleteIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AddCircleIcon fontSize="large" sx={{ color: '#6599F8'}}/>
            </IconButton>
        </StackHorizontally>
			</StackHorizontally>
			<Typography component={'p'} sx={{color: '#00000099'}}>
				Short description of the folder will be here
			</Typography>
		</Box>
	)

}

export default DashboardHeader