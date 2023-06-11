import { accessCount } from "./teste1.js"

// ao chamar o endpoint http://localhost:3000/user?name=<user>
// a quantidade de acessos do usuário em questão será incrementada.
export const getAccess = (req, res) => {
  const { name } = req.query

  if (accessCount[name]) {
    res.send(`Usuário ${name} foi lido ${accessCount[name]} vezes.`)
  } else {
    res.send(`Usuário ${name} não foi acessado.`)
  }
}
