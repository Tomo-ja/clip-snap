import { useState } from "react"
import { ModalType } from '../helpers/enums'

const useModal = () => {

	const [modalState, setModalState] = useState<ModalType | null>(null)

	const handleModalOpen = (modalType: ModalType) => { setModalState(modalType) }
	const handleModalClose = () => { setModalState(null) }

	return { modalState, handleModalClose, handleModalOpen }
}

export default useModal