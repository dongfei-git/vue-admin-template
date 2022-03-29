import request from '@/utils/request'

export default {
  getList(params) {
    return request({
      url: '/api/test/list',
      method: 'get',
      params
    })
  },
  setList(params) {
    return request({
      url: '/api/test/list',
      method: 'post',
      params
    })
  }
}
