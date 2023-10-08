const date = Date().split(" ")
const today = `${date[0] + " " + +date[2] + " " + date[1]}`
const tomorroww = `${date[0] + " " + (+date[2] + 1) + " " + date[1]}`

const data = [
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dllkkkkkkkkkkkkkkkkkk",
    date: today,
  },
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dll",
    date: today,
  },
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dll",
    date: today,
  },
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dll",
    date: today,
  },
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dll",
    date: today,
  },
  {
    title: "bersih2 rumah",
    deskripsi: "cuci piring, cuci baju, jemur, dll",
    date: today,
  },
  {
    title: "bengkel mobil",
    deskripsi: "ganti oli, cek mesin",
    date: tomorroww,
  },
]

export { data }
