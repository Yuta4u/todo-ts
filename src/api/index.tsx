import axios from "axios"
const url = "http://localhost:3001"

export async function getData() {
  const res = await axios.get(`${url}/data`)
  return res.data
}
