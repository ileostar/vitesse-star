// 案例学习：https://alova.js.org/zh-CN/tutorial/best-practice/method-manage

import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import GlobalFetch from 'alova/GlobalFetch'
import { axiosRequestAdapter } from '@alova/adapter-axios'

// user alova instance
export const userAlova = createAlova({
  baseURL: 'https://api-user.alovajs.org',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  async responded(method) {
    // @ts-expect-error config exists
    method.config.headers.token = 'user token'
  },
})

// order alova instance
export const orderAlova = createAlova({
  baseURL: 'https://api-order.alovajs.org',
  statesHook: VueHook,
  requestAdapter: GlobalFetch(),
  async responded(method) {
    // @ts-expect-error config exists
    method.config.headers.token = 'order token'
  },
})

// upload alova instance
export const uploadAlova = createAlova({
  baseURL: 'https://api-order.alovajs.org',
  statesHook: VueHook,
  requestAdapter: axiosRequestAdapter(),
})
