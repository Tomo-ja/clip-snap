import axios from 'axios'

export const appAxios = axios.create ({
	baseURL: process.env.API_BASE_URL
})

