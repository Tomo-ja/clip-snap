import { useEffect, useState } from "react"
import { getCookie } from 'cookies-next';

import { appAxios } from "../lib/axios";
import { modalFormSubmitUrlGenerator } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { ModalFormInfo } from '../helpers/typesLibrary'

type Props = {
	modalType: ModalType | null
	name?: string,
	description?: string
}

const useModalForm = ({name, description, modalType}: Props) => {

	const [formValues, setFormValues] = useState<ModalFormInfo>({
		name: name || '',
		description: description || '',
	})

	const handleChange = (prop: keyof ModalFormInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, [prop]: event.target.value})
	}

	const removeFolderIdFromUser = async (userId: string, folderId: string) => {
		const data = { userId, folderId}
		await appAxios.post('/api/user/removeFolder', { data })
	}

	const addFolderIdIntoUser = async (userId: string, folderId: string) => {
		const data = { userId, folderId }
		await appAxios.post('/api/user/addFolder', { data })
	}

	const handleFormSubmit = async() => {
		const apiUrl = modalFormSubmitUrlGenerator(modalType!)
		const userId = getCookie('user-id') as string
		if (!userId || !apiUrl) {
			console.error('userId', userId, 'api url', apiUrl)
			return false
		}

		// TODO: replace context data?
		const folderId = '639c19599ba891e1dbb31223'

		const data = { name: formValues.name, description: formValues.description, userId, folderId }
		const response = await appAxios.post(apiUrl, {data})
		if (!response.data.success) {
			console.error('failed to call api')
			return false
		}

		if (modalType === ModalType.CreateFolder) {
			await addFolderIdIntoUser(userId, response.data.folder['_id'])
		}
		if (modalType === ModalType.DeleteFolder) {
			await removeFolderIdFromUser(userId, response.data.folderId as string)
		}

		return true
	}


	return { formValues, handleChange, handleFormSubmit }

}

export default useModalForm