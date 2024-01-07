import axios from 'axios';

export const fetchViewData = async () => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_AXIOS_API_URL}/employee-attendance`);
        return res.data;
    } catch (err) {
        console.log(err);
        return [];
    }
};