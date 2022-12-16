import { useState } from "react"

import { ModalFormInfo } from '../helpers/typesLibrary'

type Props = {
	name?: string,
	description?: string
}

const useModalForm = ({name, description}: Props) => {

	const [formValues, setFormValues] = useState<ModalFormInfo>({
		name: name || '',
		description: description || '',
	})

	const handleChange = (prop: keyof ModalFormInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({ ...formValues, [prop]: event.target.value})
	}


	return { formValues, handleChange }

}

export default useModalForm