import user from '@/api/methods/user'

export default {
  getHello: () => {
    const { data, onSuccess } = useRequest(user.getHello)

    return {
      helloMsg: data,
      gethelloMsgSucceed: onSuccess,
    }
  },
  findAll: (pageNum: number, pageCount: number) => {
    const { data, onSuccess } = useRequest(user.findAll(pageNum, pageCount))

    return {
      findAll: data,
      getfindAllSucceed: onSuccess,
    }
  },
}
