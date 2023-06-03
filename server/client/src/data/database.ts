// const axios = require('axios');
import axios from "axios";

// export const Login = async () => {
//     const res = await axios.get('http://localhost:3000/data/Login')
//     return res.data;
// }

export const getStudents = async () => {
    const res = await axios.get('http://localhost:3000/data/getStudents');
    return res.data;
};
export const getUsers = async () => {
    const res = await axios.get('http://localhost:3000/users/getUsers');
    return res.data;
};

export const getProfile = async () => {
    const res = await axios.get('http://localhost:3000/users/getProfile');
    return res.data;
};

export const getCommands = async () => {
    const res = await axios.get('http://localhost:3000/data/getCommands');
    return res.data;
};
export const getEvents = async () => {
    const res = await axios.get('http://localhost:3000/data/getEvents');
    return res.data;
};

export const getInQueueRequires = async () => {
    const res = await axios.get('http://localhost:3000/data/getInQueueRequires');
    return res.data;
};

export const getSolvedRequires = async () => {
    const res = await axios.get('http://localhost:3000/data/getSolvedRequires');
    return res.data;
};

export const updateRequires = async (data: any) => {
    await axios.post('http://localhost:3000/data/updateRequires', data);
};

export const revertRequires = async (data: any) => {
    await axios.post('http://localhost:3000/data/revertRequires', data);
};

export const updateStudents = async (data: any) => {
    await axios.post('http://localhost:3000/data/updateStudents', data);
};

export const updateUsers = async (data: any) => {
    await axios.post('http://localhost:3000/users/updateUsers', data);
};

export const updateEvents = async (data: any) => {
    await axios.post('http://localhost:3000/data/updateEvents', data);
};

export const sendMessage = async (data: any) => {
    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
    await axios.post('http://localhost:3000/data/sendMessage', data, config);
};

export const updateCommandChildren = async (data: any) => {
    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
    await axios.post('http://localhost:3000/data/updateCommandChildren', data, config);
};