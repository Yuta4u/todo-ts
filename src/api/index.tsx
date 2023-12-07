import axios from "axios"
const url = "https://api-todo-weld.vercel.app/api/v1/todos"

const headers: any = {
  "Content-Type": "application/json",
}

type TPostTodos = {
  title: string
  deskripsi: string
  date: string | undefined
  check: number
}

export function getTodos() {
  return axios.get(url, { headers }).then((response) => response?.data?.todos)
}

export function postTodos(data: TPostTodos) {
  return axios.post(url, data, { headers }).then((response) => {
    console.log("Todos created:", response.data)
  })
}

export function deleteTodos(id: number) {
  return axios.delete(`${url}/${id}`, { headers }).then((response) => {
    console.log("Todos deleted:", response.data)
  })
}
