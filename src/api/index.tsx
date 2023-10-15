import axios from "axios"
const url = "http://localhost:3001"

type TPostTodos = {
  title: string
  deskripsi: string
  date: string | undefined
  check: boolean
}

export function getTodos() {
  return axios.get(`${url}/todos`).then((res) => res.data)
}

export function postTodos(data: TPostTodos) {
  return axios.post(`${url}/todos`, data).then((res) => res.data)
}

export function deleteTodos(id: number) {
  return axios.delete(`${url}/todos/${id}`)
}
