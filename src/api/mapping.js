import request from '@/utils/request'
// 获取mapping列表
export function getMap(query) {
  return request({
    url: '/',
    method: 'get',
    params: query
  })
}
