import * as React from 'react';
import { Typography, Modal, Button, Stack } from '@mui/material'

import { ModalForm } from '../components'
import { StyledModalWrapper } from '../styledComponents'

import { ModalType } from '../helpers/enums';
import { modalSupportInfoProvider } from '../helpers/function';


type Props = { 
  modalState: ModalType | null,
  handleModalClose: () => void,
}

const BasicModal = ({ modalState, handleModalClose }: Props) => {

  const { buttonText, buttonColor, formNeeded } = modalSupportInfoProvider(modalState)

  return (
    <div style={{paddingTop: '0'}}>
      <Modal
        open={modalState ? true : false}
        onClose={handleModalClose}
      >
        <StyledModalWrapper sx={{width: '400px'}}>
          <Typography variant="h5" component="h2" textAlign='center' fontWeight={700} >
            {modalState}
          </Typography>
          { formNeeded ?
            <ModalForm modalType={modalState}/>
            :
            <Typography sx={{ mt: 5, mb: 5, textAlign:'center' }}>
              Are you sure to delete it?
            </Typography>
          }
          <Stack direction='row' spacing={2} justifyContent='center'>
            <Button variant="contained" color={buttonColor === 'error' ? 'error' : 'warning'}>{buttonText}</Button>
            <Button onClick={handleModalClose} variant="outlined" color='inherit'>Cancel</Button>
          </Stack>
        </StyledModalWrapper>
      </Modal>
    </div>
  )
}

export default BasicModal