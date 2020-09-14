export function widgetCreate(formData) {
    return axios.post(`/api/widgets`, formData);
}

export function widgetUpdate(formData, id) {
    return axios.post(`/api/widgets/${id}`, formData)
}

export function widgetDelete(id) {
    return axios.post(`/api/widgets/${id}`, {
        _method: 'DELETE'
    })
}

export const findAll = () => {
    return axios.get('/api/widgets')
}

export const findOne = (position_id) => {
    return axios.get(`/api/widgets/${position_id}`)
}
