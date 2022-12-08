import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'

export const getUserAPI = async () => {axios.get('/users')}

export const getUserByIdAPI = async (id) => {axios.get(`/users/${id}`)}

export const createUserAPI = async (user) => {axios.post(`/users/${user}`)}

export const updateUserAPI = async (user) => {axios.put(`/users/${user.id}`)}

export const deleteUserByIdAPI = async (id) => {axios.delete(`/users/${id}`)}
