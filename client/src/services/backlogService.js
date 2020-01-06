import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/backlog`);
    return res.data || [];
  }
};
