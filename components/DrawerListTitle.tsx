import * as React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import useModal from '../customHooks/useModal';
import { Modal } from '../components';
import { DrawerListTitles, ModalType } from '../helpers/enums'


type Props = {
	title: DrawerListTitles
}

const DrawerListTitle = ({ title }: Props) => {

	const { modalState, handleModalClose, handleModalOpen } = useModal()

	const modalType = title === DrawerListTitles.Folder ? ModalType.CreateFolder : ModalType.CreateTag

	return (
		<>
			<Box pl={3} pr={2} pt={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<Typography
					variant='h6'
					component='h3'
					sx={{fontWeight: 'bold'}}
				>
					{title}
				</Typography>
				<IconButton onClick={() => handleModalOpen(modalType)} size="large" sx={{paddingBlock: 0}} aria-label="show add modal" color="inherit">
					<AddIcon style={{ color: 'white'}}/>
				</IconButton>
		</Box>
		<Modal modalState={modalState} handleModalClose={handleModalClose} />
		</>
	)
}

export default DrawerListTitle