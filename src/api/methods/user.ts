// 案例学习：https://alova.js.org/zh-CN/tutorial/best-practice/method-manage

import { userAlova } from '..'

// 获取用户信息
export const getUserInfo = (id: string) => userAlova.Get(`/user/${  id}`)

// 编辑用户信息
export function editUserInfo(name: string, age: number, mobile: number) {
  return userAlova.Post('/user', {
    name,
    age,
    mobile,
  })
}

// 移除用户
export const removeUser = (id: string) => userAlova.Delete(`/user/${  id}`)
