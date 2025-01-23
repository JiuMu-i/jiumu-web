export const addAxiosErrorLog = (err) => {
  const {
    url,
    method,
    params,
    data,
    requestOptions
  } = err.config
  // addErrorLog({
  //   type: 'ajax',
  //   url,
  //   method,
  //   params: ['get', 'delete'].includes(method) ? JSON.stringify(params) : JSON.stringify(data),
  //   data: err.data ? JSON.stringify(err.data) : '',
  //   detail: JSON.stringify(err)
  // })
}