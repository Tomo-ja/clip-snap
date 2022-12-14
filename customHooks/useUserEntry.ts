import { useState } from "react";
import { useRouter } from "next/router";

import { appAxios } from "../lib/axios";

const useUserEntry = () => {
	const router = useRouter()

	const isRequiredInfoProvided = () => {

	}

	const isPasswordValidated = (password: string): boolean => {
		if (!password.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/)) {
			return false
		}
		return true
	}

	const bothPasswordsMatched = (psw1: string, psw2: string): boolean => {
		if (psw1 !== psw2) {
			return false
		}
		return true
	}

	const tryToLogin = async (email: string, password: string) => {
		const data = { email, password }
		const response = await appAxios.post ('/api/user/login', { data })
		
		if (!response.data.success) {
			console.log(response.data.message)
			return response.data.message
		}

		console.log(response.data)
	}

	const tryToSignUp = async (name: string, email: string, password: string) => {
		const data = { name, email, password }
		const response = await appAxios.post('/api/user/signup', { data })

		if (!response.data.success) {
			return response.data.message
		}

		console.log(response.data)
	}

	return { tryToLogin, tryToSignUp }
}

export default useUserEntry