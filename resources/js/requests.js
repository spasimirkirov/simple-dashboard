export const findAll = () => {
    return axios.get('/api/widgets')
}

export const findOne = (position_id) => {
    return axios.get(`/api/widgets/${position_id}`)
}
