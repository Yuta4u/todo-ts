import axios from "axios"
const url = "http://localhost:3001"

type TPostTodos = {
  title: string
  deskripsi: string
  date: string | undefined
  check: boolean
}

export async function getTodos() {
  const res = await axios.get(`${url}/todos`)
  return res.data
}

export async function postTodos(data: TPostTodos) {
  const post = await axios.post(`${url}/todos`, data)
  if (post) {
    console.log("berhasil", data)
  }
}

export async function deleteTodos(id: number) {
  const del = await axios.delete(`${url}/todos/${id}`)
  if (del) {
    console.log(`berhasil delete todos dengan id ${id}`)
  }
}
