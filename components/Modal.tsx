import * as React from 'react';
import { Modal } from '@mui/material'

import { ModalForm } from '../components'

import { ModalType } from '../helpers/enums';


type Props = { 
  modalState: ModalType | null,
  handleModalClose: () => void,
}

const BasicModal = ({ modalState, handleModalClose }: Props) => {

  return (
    <div style={{paddingTop: '0'}}>
      <Modal
        open={modalState ? true : false}
        onClose={handleModalClose}
      >
        <ModalForm modalType={modalState} handleModalClose={handleModalClose} />
      </Modal>
    </div>
  )
}

export default BasicModal