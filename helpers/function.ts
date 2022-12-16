import { ModalType } from './enums'


export const modalSupportInfoProvider = (modalType: ModalType | null) => {
	let text = ''
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

	return { buttonText: text, formNeeded }
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

export const modalFormSubmitUrlGenerator = (modalType: ModalType) => {
	let url: string


	switch(modalType) {
		case ModalType.CreateFolder:
			url = '/api/folder/create'
			break
		case ModalType.UpdateFolder: 
			url = '/api/folder/update'
			break
		case ModalType.DeleteFolder:
			url = '/api/folder/deleteFolder'
			break
		case ModalType.UpdateProfile: 
			url = '/api/user/update'
			break
		case ModalType.CreateTag:
			url = 'api/user/addTag'
			break
		default:
			url = ''
	}

	return url
}