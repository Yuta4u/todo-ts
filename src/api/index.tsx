import axios from "axios"
const url = "https://todo-ts-be-production.up.railway.app/v1/todos"

type TPostTodos = {
  title: string
  deskripsi: string
  date: string | undefined
  check: number
}

export function getTodos() {
  return axios.get(url).then((res) => res.data)
}

export function postTodos(data: TPostTodos) {
  return axios.post(url, data).then((res) => res.data)
}

export function deleteTodos(id: number) {
  return axios.delete(`${url}/${id}`)
}
