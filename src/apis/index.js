import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8001'

export const getUsersAPI = async () => {axios.get('/users')}

export const getUserByIdAPI = async (id) => {axios.get(`/users/${id}`)}

export const createUser = async (user) => {axios.post(`/users/${user}`)}

export const updateUserAPI = async (user) => {axios.put(`/users/${user.id}`)}

export const deleteUserByIdAPI = async (id) => {axios.delete(`/users/${id}`)}
