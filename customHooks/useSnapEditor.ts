import { useState } from "react";

import { appAxios } from "../lib/axios";
import { modalFormSubmitUrlGenerator } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { Snap } from "../helpers/typesLibrary";
import { SelectChangeEvent } from "@mui/material";

const initSnap: Snap = { title: '', tags: [], description: '', referencesUrl: [''], code: '' }

type Props = {
	snap: Snap | null
}

const useSnapEditor = ({ snap }: Props) => {
	
	const [snapValues, setSnapValues] = useState<Snap>(snap || initSnap)
	const [snapTags, setSnapTags] = useState<string[]>([])

	const handleValueChange = (prop: keyof Snap) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSnapValues({...snapValues, [prop]: event.target.value})
	}

	const handleTagsChange = (event: SelectChangeEvent<typeof snapTags>) => {
		const { target: { value } } = event
		setSnapTags(typeof value === 'string' ? value.split(',') : value)
	}



	return { snapTags, snapValues, handleValueChange, handleTagsChange }
}

export default useSnapEditor