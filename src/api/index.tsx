import axios from "axios"
const url = "https://todo-ts-be-production.up.railway.app/v1/todos"

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
  return axios
    .get(url, { headers })
    .then((response) => {
      response.data.todos
    })
    .catch((error) => {
      console.error("Error fetching users:", error)
    })
}

export function postTodos(data: TPostTodos) {
  return axios
    .post(url, data, { headers })
    .then((response) => {
      console.log("Todos created:", response.data)
    })
    .catch((error) => {
      console.error("Error creating user:", error)
    })
}

export function deleteTodos(id: number) {
  return axios
    .delete(`${url}/${id}`, { headers })
    .then((response) => {
      console.log("Todos deleted:", response.data)
    })
    .catch((error) => {
      console.error("Error deleting user:", error)
    })
}
