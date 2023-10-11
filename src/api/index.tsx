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

export async function deleteTodos(id: number) {
  const del = await axios.delete(`${url}/todos/${id}`)
}
