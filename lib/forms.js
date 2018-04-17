import axios from 'axios'

export const forms = http => ({
  list: args => getForms(args),
  get: args =>  getForm(args),
  update: args => updateForm(args),
  delete: args => deleteForm(args),
  create: args => createForm(args),
})

export const getForms = (http, { page, page_size, search } = {}) => {
  return http.request({
    method: 'get',
    url: `/forms`,
    page,
    page_size,
    search
  })
}

export const getForm = (http, { uid }) => {
  return http.request({
    method: 'get',
    url: `/forms/${uid}`
  })
}

export const updateForm = (http, { uid, override, data }) => {

  let methodType = 'patch'
  if(override) {
    methodType = 'put'
  }

  return http.request({
    method: methodType,
    url: `/forms/${uid}`,
    data: data
  })
}

export const createForm = (http, {data}) => {
  return http.request({
    method: 'post',
    url: `/forms`,
    data: data
  })
}

export const deleteForm = (http, {uid}) => {
  return http.request({
    method: 'delete',
    url: `/forms/${uid}`
  })
}