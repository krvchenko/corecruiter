import axios from 'axios'

export default {
  async login(payload) {
    return axios.post('/user/auth', payload)
  },
}
