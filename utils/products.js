import Router from 'next/router'

export const getBack = (id) => () => {
  if (window.history.length > 2 && id) {
    Router.back()
  } else {
    Router.push('/')
  }
}

export const getItemDetail = (id) => () => {
  Router.push(`/?id=${id}`, `/${id}`)
}

export const editItem = (id) => () => {
  Router.push(`/?id=${id}&isEdit=true`, `/${id}/edit`)
}

export const addItem = () => {
  Router.push('/?isNew=true', '/new')
}