import { useState } from "react";

import { appAxios } from "../lib/axios";
import { modalFormSubmitUrlGenerator } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { Snap } from "../helpers/typesLibrary";
import { SelectChangeEvent } from "@mui/material";

const initSnap: Snap = { title: '', tags: [], description: '', referencesUrl: [''], code: '' }

type Props = {
	modalType?: ModalType,
	snap?: Snap
}

const useSnapEditor = ({ modalType, snap }: Props) => {
	
	const [snapValues, setSnapValues] = useState<Snap>(snap || initSnap)
	const [snapTags, setSnapTags] = useState<string[]>([])
	const [editorState, setEditorState] = useState<ModalType | null>(modalType || null)

	const handleValueChange = (prop: keyof Snap) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSnapValues({...snapValues, [prop]: event.target.value})
	}

	const handleTagsChange = (event: SelectChangeEvent<typeof snapTags>) => {
		const { target: { value } } = event
		setSnapTags(typeof value === 'string' ? value.split(',') : value)
	}

	const handleEditorState = (modalType?: ModalType) => {
		setEditorState(modalType || null)
	}


	return { snapValues, handleValueChange, handleEditorState, editorState, snapTags, handleTagsChange }
}

export default useSnapEditor