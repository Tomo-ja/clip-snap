import { useRouter } from "next/router";
import { useState } from "react";

import { FormType } from "../helpers/enums";
import { FormInfo } from "../helpers/typesLibrary";

import { appAxios } from "../lib/axios";

const useUserEntry = () => {
	const [message, setMessage] = useState<string | null>()
	const router = useRouter()

	const isRequiredInfoFilled = (values: FormInfo, formFor: FormType): boolean => {
		if (values.email.trim() === '') {
			setMessage('Email is Required')
			return false
		} 
		if (values.password.trim() === '') {
			setMessage('Password is Required')
			return false
		}
		if (formFor === FormType.SignUp && values.passwordConfirm.trim() === '') {
			setMessage('Password Confirm is required')
			return false
		}
		return true
	}

	const isPasswordValidated = (password: string): boolean => {
		if (!password.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/)) {
			setMessage('Password should include number, letter, and length more than 8')
			return false
		}
		return true
	}

	const bothPasswordsMatched = (psw1: string, psw2: string): boolean => {
		if (psw1 !== psw2) {
			setMessage('Passwords should be same')
			return false
		}
		return true
	}

	const tryToLogin = async (email: string, password: string) => {
		const data = { email, password }
		const response = await appAxios.post ('/api/user/login', { data })
		
		if (!response.data.success) {
			setMessage(response.data.message)
		} else if (response.data.success) {
			// TODO: need to set id to cookie for the future
			router.push('/')
		}

		console.log(response.data)
	}

	const tryToSignUp = async (name: string, email: string, password: string) => {
		const data = { name, email, password }
		const response = await appAxios.post('/api/user/signup', { data })

		if (!response.data.success) {
			return response.data.message
		} else if (response.data.success) {
			tryToLogin(email, password)
		}
	}

	return { tryToLogin, tryToSignUp, bothPasswordsMatched, isPasswordValidated, isRequiredInfoFilled, message, setMessage, router }
}

export default useUserEntry