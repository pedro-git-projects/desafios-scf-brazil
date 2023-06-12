import { accessCount } from "./teste1.js"

// ao chamar o endpoint http://localhost:3000/user?name=<user>
// a quantidade de acessos do usuário em questão será incrementada.
export const getAccess = (req, res) => {
  const { name } = req.query

  if (accessCount[name]) {
    res.json({ number_of_accesses: accessCount[name] })
  } else {
    res.json({ number_of_accesses: 0 })
  }
}
