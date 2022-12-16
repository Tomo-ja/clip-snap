import { ModalType } from './enums'


export const modalSupportInfoProvider = (modalType: ModalType | null) => {
	let text = ''
	let color = 'warning'
	let formNeeded = true
	switch(modalType) {
		case ModalType.CreateFolder:
		case ModalType.CreateSnap:
		case ModalType.CreateTag:
			text = 'Create'
			break
		case ModalType.DeleteFolder:
		case ModalType.DeleteSnap:
			text = 'Delete'
			color = 'error' 
			formNeeded = false
			break
		case ModalType.UpdateFolder:
		case ModalType.UpdateProfile:
		case ModalType.UpdateSnap:
			text = 'Update'
			break
		default:
			text = 'New Modal type'
			formNeeded = false
	}
	return { buttonText: text, buttonColor: color, formNeeded } as const
}

export const modalFormDescriptionNeeded = (modalType: ModalType | null) => {
	let descriptionNeeded: boolean

	switch(modalType){
		case ModalType.CreateFolder:
		case ModalType.UpdateFolder:
			descriptionNeeded = true
			break
		case ModalType.CreateTag:
		case ModalType.UpdateProfile:
			descriptionNeeded = false
			break
		default:
			descriptionNeeded = false
	}

	return descriptionNeeded
}