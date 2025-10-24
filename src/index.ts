import {Endpoint, Rest} from '@vdegenne/mini-rest'

interface Api {
	post: {
		ydotool: Endpoint<{input: string}, {}>
	}
}

export const pyserver = new Rest<Api>('http://localhost:8005')
