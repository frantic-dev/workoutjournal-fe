import axios from 'axios'
const url = '/api/workouts'

function getYtId(url) {
	let idIndex = url.indexOf('v=')
	return url.slice(idIndex + 2)
}

const getTitle = (videoId) => {
	return axios
		.get('/api/title/' + getYtId(videoId))
		.then((response) => response.data)
}

const getAll = () => {
	return axios.get(url).then((response) => response.data)
}

const create = (newWorkout) => {
	return axios.post(url, newWorkout).then((response) => response.data)
}

const remove = (id) => {
	return axios.delete(url + '/' + id)
}

export default { getTitle, getAll, create, remove }
