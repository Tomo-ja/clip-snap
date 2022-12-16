import { useState } from "react";

import { appAxios } from "../lib/axios";
import { modalFormSubmitUrlGenerator } from '../helpers/function'
import { ModalType } from '../helpers/enums'
import { Snap } from "../helpers/typesLibrary";

const initSnap: Snap = { title: '', tags: [], description: '', referencesUrl: [''], code: '' }

type Props = {
	modalType?: ModalType,
	snap?: Snap
}

const useSnapEditor = ({ modalType, snap }: Props) => {
	
	const [snapValues, setSnapValues] = useState<Snap>(snap || initSnap)
	const [editorState, setEditorState] = useState<ModalType | null>(modalType || null)

	const handleValueChange = (prop: keyof Snap) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSnapValues({...snapValues, [prop]: event.target.value})
	}

	const handleEditorState = (modalType?: ModalType) => {
		setEditorState(modalType || null)
	}


	return { snapValues, handleValueChange, handleEditorState, editorState }
}

export default useSnapEditor