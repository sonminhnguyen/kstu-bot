const axios = require('axios');

export const getStudents = async () => {
    const res = await axios.get('http://localhost:3000/data/getStudents')
    return res.data;
}

export const getCommands = async () => {
    const res = await axios.get('http://localhost:3000/data/getCommands')
    return res.data;
}

export const getEvents = async () => {
    const res = await axios.get('http://localhost:3000/data/getEvents')
    return res.data;
}

export const getInQueueRequires = async () => {
    const res = await axios.get('http://localhost:3000/data/getInQueueRequires')
    return res.data;
}
export const getSolvedRequires = async () => {
    const res = await axios.get('http://localhost:3000/data/getSolvedRequires')
    return res.data;
}

export const updateRequires = async (data) => {
    await axios.post('http://localhost:3000/data/updateRequires', data)
}
export const updateStudents = async (data) => {
    await axios.post('http://localhost:3000/data/updateStudents', data)
}

export const sendMessage = async (data) => {
    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    await axios.post('http://localhost:3000/data/sendMessage', data, config)
}
export const updateCommandChildren = async (data) => {
    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    await axios.post('http://localhost:3000/data/updateCommandChildren', data, config)
}