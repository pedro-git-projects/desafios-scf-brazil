// É melhor utilizar const do que var
// para evitar que o objeto seja acidentalmente
// sobrescrito
import fakeData from "./fakeData.js"

export const getUser = (req, res, next) => {
  const { name } = req.query //  podemos extrair a propriedade via destructuring

  //  Utilizar find evita que acessemos acidentalmente um índice fora
  //  dos limites e torna o código mais legível.
  //  Utilizar comparação estrtita também dá mais segurança de tipo.
  const user = fakeData.find((user) => user.name === name)

  // Tratamos aqui o caso em que o usuário não foi encontrado.
  if (user) {
    res.send(user)
  } else {
    res.status(404).send("Usuário não encontrado")
  }
}

export const getUsers = (req, res, next) => {
  res.send(fakeData)
}
