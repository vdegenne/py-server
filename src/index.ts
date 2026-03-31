import {Endpoint, Rest} from '@vdegenne/mini-rest'

interface Api {
	get: {
		'youtube-fullscreen': Endpoint<undefined, undefined>
	}
	post: {
		ydotool: Endpoint<{input: string}, undefined>
		run: Endpoint<{command: string}, any>
	}
}

export const pyserver = new Rest<Api>('http://localhost:8005')

export function ydotool(input: string) {
	return pyserver.post('ydotool', {input})
}

export function run(command: string) {
	return pyserver.post('run', {command})
}
